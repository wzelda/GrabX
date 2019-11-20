import * as Utils from "../Common/Utils";
import * as Core from "../Core/Core";
import LocalConfig from '../Config/LocalConfig';
import * as Config from "../Config/Config";
import * as Manager from "../Manager/Manager";
import * as Data from "../Data/Data";
import * as Common from "../Common/Common";
import * as Logic from "./Logic";

let knock_time = 0;
let last_reach_time = 0;
let combo_logger = 0;
let combo_hits = 0;

export class GrabLogic extends Common.EventDispather {
    Vdir = new Laya.Vector3();
    GScene:Laya.Scene3D;
    HandState:string;
    DeskClass:Core.RigidObject;
    HandClass:Core.RigidObject;
    deskScript:Logic.DeskCollisionScript;
    handScript:Logic.HandCollisionScript;
    private timeLine:Laya.TimeLine = new Laya.TimeLine();
    private IsInited = false;
    private IsCombo = false;
    private IsDead = false;

    onAwake(){
        this.GScene = Manager.SceneManager.CurScene as Laya.Scene3D;
        this.DeskClass = new Core.RigidObject(
            Core.ObjectProxy.getObj(Config.PoolType.Desk),
            new Core.ObjectState(Config.StateConfig.MOVE_FORWARD, this.deskDown.bind(this)),
            new Core.ObjectState(Config.StateConfig.DESK_LEAVE, this.deskLeave.bind(this)),
            new Core.ObjectState(Config.StateConfig.DESK_ENTER, this.deskEnter.bind(this)),
        );
        this.DeskClass.setPosition(Config.ObjectConfig.DESK_POS);
        this.HandClass = new Core.RigidObject(
            Core.ObjectProxy.getObj(Config.PoolType.Hand),
            new Core.ObjectState(Config.StateConfig.MOVE_FORWARD, this.handForward.bind(this)),
            new Core.ObjectState(Config.StateConfig.MOVE_BACK, this.handBack.bind(this)),
            new Core.ObjectState(Config.StateConfig.BACK_PASSED, this.handBack.bind(this)),
        );
        this.HandClass.setPosition(Config.ObjectConfig.HAND_POS);
        this.addCollisionScript();
        Laya.stage.on(Laya.Event.CLICK, this, this.doMoveHand);
        Laya.stage.on(Laya.Event.DOUBLE_CLICK, this, this.restart);

        this.IsInited = true;
        this.IsCombo = false;
        this.IsDead = false;
        this.createTimeLine();
        this.moveDesk();
    }

    addCollisionScript(){
        this.deskScript = this.DeskClass.addScript(Logic.DeskCollisionScript) as Logic.DeskCollisionScript;
        this.deskScript.kinematicSprite = this.HandClass.Obj;
        this.handScript = this.HandClass.addScript(Logic.HandCollisionScript) as Logic.HandCollisionScript;
        this.handScript.kinematicSprite = this.DeskClass.Obj;
    }

    private get IsLoadingLevel():boolean{
        return this.DeskClass.CurState == Config.StateConfig.DESK_LEAVE 
        || this.DeskClass.CurState == Config.StateConfig.DESK_ENTER;
    }

    private onTimelineComplete(){
        knock_time++;
        console.log("timeLine complete!!!!", knock_time);
    }

    private onLabel(label:String):void
    {
        console.log("LabelName:" + label);
    }

    private createTimeLine(){
        this.timeLine.on(Laya.Event.COMPLETE,this,this.onTimelineComplete);
        this.timeLine.on(Laya.Event.LABEL, this, this.onLabel);
    }

    private resetVec(){
        this.Vdir.x = Config.ObjectConfig.DESK_POS.x;
        this.Vdir.y = Config.ObjectConfig.DESK_POS.y;
        this.Vdir.z = Config.ObjectConfig.DESK_POS.z
    }

    private doKnock(loop:boolean = false){
        this.resetVec();
        this.timeLine.reset();

        let deskConfig = Config.DataConfig.instance.getConfigById(Config.DataConfig.DESK_ACTION_KEY, 1);
        let config = Config.DataConfig.instance.getConfigByName(deskConfig.Action);
        config && config.forEach(cfg=>{
            if(cfg.Type == Config.ActionType.Knock){
                this.addKnock(cfg.Offset);
            }else if(cfg.Type == Config.ActionType.Stay){
                this.addStay(cfg.Offset);
            }
        }, this);

        // this.addKnock();
        // this.addKnock(1);
        this.timeLine.play(0, loop);
    }

    private addStay(_stayTime?:number){
        _stayTime = _stayTime? _stayTime * 1000: 0;
        this.timeLine.addLabel("stay",0).to(this.Vdir, {y:Config.ObjectConfig.DESK_POS.y}, _stayTime, null, 0)
    }

    private addKnock(_deltaTime?:number){
        _deltaTime = _deltaTime? _deltaTime * 1000: 0;
        this.timeLine
            .to(this.Vdir, {y:Config.ObjectConfig.DESK_END_POS.y}, Config.ObjectConfig.DESK_KNOCK_DURATION, null, _deltaTime)
            .to(this.Vdir, {y:Config.ObjectConfig.DESK_POS.y}, Config.ObjectConfig.DESK_KNOCK_DURATION, null, 0)
    }

    private restart(){
        if(!this.IsDead || this.IsLoadingLevel) return;

        this.IsDead = false;
        this.deskScript.clearStatus();
        this.HandClass.changeState(Config.StateConfig.IDEL);
        this.moveDesk();
        this.resetHand();
    }

    private newLevel(){
        this.DeskClass.changeState(Config.StateConfig.DESK_LEAVE);
        Data.PlayerData.Point = 0;
    }

    private calcPoint(){
        if(Data.PlayerData.Point >= Config.PASS_POINT){
            this.newLevel();
        }
    }

    private addPoint(){
        if(this.IsLoadingLevel){
            return;
        }
        
        Data.PlayerData.Point += Config.POINT_PER_HIT;
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>得分：",Data.PlayerData.Point);
        this.calcPoint();
    }

    //-------------------------------------Desk---------------------------------------------

    private moveDesk(){
        // this.deskDown();
        this.DeskClass.changeState(Config.StateConfig.MOVE_FORWARD);
        this.doKnock(true);
    }

    private resetDesk(){
        this.DeskClass.setPosition(Config.ObjectConfig.DESK_POS);
    }

    private stopDesk(){
        this.timeLine.pause();
        this.DeskClass.changeState(Config.StateConfig.STOP);
    }

    private toStunDesk(){
        //受到连击
        if(this.IsLoadingLevel) return;

        this.resetDesk();
        this.stopDesk();
    }

    private deskDown(){
        // let vec = this.DeskClass.Position;
        // vec.y -= 0.3;
        // this.DeskClass.setPosition(vec);

        // if(vec.y <= Config.ObjectConfig.DESK_END_POS.y){
        //     this.DeskClass.changeState(Config.StateConfig.MOVE_BACK);
        // }

        this.DeskClass.setPosition(this.Vdir);
    }

    private deskUp(){
        this.DeskClass.movePos(null, 0.3);

        if(this.DeskClass.Position.y >= Config.ObjectConfig.DESK_POS.y){
            this.DeskClass.changeState(Config.StateConfig.MOVE_FORWARD);
        }
    }

    private deskEnter(){
        this.DeskClass.movePos(-0.1);

        if(this.DeskClass.Position.x <= Config.ObjectConfig.DESK_POS.x){
            this.moveDesk();
        }
    }

    private onDeskDisappear(){
        this.DeskClass.changeObj(Config.PoolType.Desk);
        this.DeskClass.setPosition(Config.ObjectConfig.DESK_ENTER_POS);
        this.DeskClass.changeState(Config.StateConfig.DESK_ENTER);
    }

    private deskLeave(){
        if(!this.IsInited) return;

        this.DeskClass.movePos(-0.1);

        if(this.DeskClass.Position.x <= -2){
            this.onDeskDisappear();
        }
    }

    private updateDesk(){
        if(!this.IsInited) return;

        if(this.deskScript.IsHit){
            this.resetDesk();
            this.stopDesk();
            return;
        }

        this.DeskClass.updateState();
    }

    //-------------------------------------Hand---------------------------------------------

    doMoveHand(){
        if(this.IsCombo){
            console.log("连击状态不可移动");
            return;
        }

        this.moveHand();
    }

    moveHand(){
        if(!this.IsInited) return;
        if(this.HandClass.IsStop) return;

        if(this.HandClass.CurState == Config.StateConfig.IDEL){
            this.HandClass.changeState(Config.StateConfig.MOVE_FORWARD); 
        }
    }

    private handForward(){
        if(!this.IsInited) return;
        
        this.HandClass.movePos(Config.ObjectConfig.SPEED_HAND * Manager.TimerManager.frameDelta);

        if(this.HandClass.Position.x >= Config.ObjectConfig.HAND_END_POS.x){
            this.HandClass.changeState(Config.StateConfig.MOVE_BACK);
        }
    }

    private clearCombo(){
        this.IsCombo = false;
        combo_logger = 0;
        combo_hits = 0;
    }

    private startCombo(){
        this.IsCombo = true;
        combo_hits = 0;
        this.toStunDesk();
    }

    private onComboEnd(){
        this.clearCombo();
        if(!this.IsLoadingLevel){
            this.moveDesk();
        }
    }

    private checkCombo():boolean{
        let t = Date.now();
        if(last_reach_time === 0){
            // 第一次不算
            last_reach_time = t;
            return false;
        }

        console.log(t - last_reach_time, combo_logger, this.IsCombo);
        //连击计数
        if(!this.IsCombo && t - last_reach_time <= Config.COMBO_INTERVAL){
            if(combo_logger < Config.COMBO_HIT_TOTAL){
                combo_hits++;
                console.log("连击！", combo_hits);
                
                if(combo_hits + 1 >= Config.COMBO_THREHOLD){
                    this.startCombo();
                }
            }
        }else{
            combo_hits = 0;
        }

        if(this.IsCombo){
            combo_logger++;
            if(combo_logger > Config.COMBO_HIT_TOTAL){
                this.onComboEnd();
            }
        }

        if(!this.IsCombo){
            last_reach_time = t;
        }

        return this.IsCombo;
    }

    private onReachFinish(){
        //到达终点加分
        this.addPoint();
        //计算连击
        if(this.checkCombo()){
            this.HandClass.changeState(Config.StateConfig.MOVE_FORWARD); 
        }else{
            this.resetHand();
        }
    }

    private handBack(){
        if(!this.IsInited) return;
        
        if(this.HandClass.Position.x <= Config.ObjectConfig.HAND_POS.x){
            this.onReachFinish();
            return;
        }

        if(this.HandClass.Position.x < Config.ObjectConfig.DESK_POS.x){
            this.HandClass.changeState(Config.StateConfig.BACK_PASSED);
        }

        this.HandClass.movePos(-Config.ObjectConfig.SPEED_HAND * Manager.TimerManager.frameDelta);
    }

    private resetHand(){
        this.HandClass.setPosition(Config.ObjectConfig.HAND_POS);
        this.HandClass.changeState(Config.StateConfig.IDEL);
        this.enableHandGravity(false);
    }

    private stopHand(){
        this.HandClass.changeState(Config.StateConfig.STOP);
    }

    private enableHandGravity(_open:boolean){
        if(this.HandClass.Rigid3D.isKinematic == !_open) return;

        this.HandClass.Rigid3D.isKinematic = !_open;
        this.HandClass.Rigid3D.gravity = _open? new Laya.Vector3(0, -10, 0): Config.VEC.ZERO;
    }

    private onHandHit(){
        this.IsDead = true;
        this.clearCombo();
        Data.PlayerData.Point = 0;
        this.stopHand();
        this.enableHandGravity(true);
    }

    updateHand(){
        if(!this.IsInited) return;

        if(this.deskScript.IsHit){
            this.onHandHit();
            return;
        }

        this.HandClass.updateState();
    }

    onUpdate(){
        this.updateDesk();
        this.updateHand();
    }
}
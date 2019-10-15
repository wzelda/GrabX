import * as Utils from "../Common/Utils";
import * as Core from "../Core/Core";
import LocalConfig from '../Config/LocalConfig';
import * as Config from "../Config/Config";
import * as Manager from "../Manager/Manager";
import * as Data from "../Data/Data";
import * as Common from "../Common/Common";
import * as Logic from "./Logic";

let knock_time = 0;

export class GrabLogic extends Common.EventDispather {
    IsInited = false;
    Vdir = new Laya.Vector3();
    DeskPosition = new Laya.Vector3();
    GScene:Laya.Scene3D;
    HandState:string;
    DeskClass:Core.RigidObject;
    HandClass:Core.RigidObject;
    deskScript:Logic.DeskCollisionScript;
    handScript:Logic.HandCollisionScript;
    private timeLine:Laya.TimeLine = new Laya.TimeLine();

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
        // Laya.stage.on(Laya.Event.CLICK, this, this.knockOnce);
        Laya.stage.on(Laya.Event.CLICK, this, this.moveHand);
        Laya.stage.on(Laya.Event.DOUBLE_CLICK, this, this.restart);

        this.IsInited = true;
        this.resetVec();
        this.createTimerLine();
        this.moveDesk();
    }

    addCollisionScript(){
        this.deskScript = this.DeskClass.addScript(Logic.DeskCollisionScript) as Logic.DeskCollisionScript;
        this.deskScript.kinematicSprite = this.HandClass.Obj;
        this.handScript = this.HandClass.addScript(Logic.HandCollisionScript) as Logic.HandCollisionScript;
        this.handScript.kinematicSprite = this.DeskClass.Obj;
    }

    private onTimelineComplete(){
        knock_time++;
        console.log("timeLine complete!!!!", knock_time);
    }

    private onLabel(label:String):void
    {
        console.log("LabelName:" + label);
    }

    private createTimerLine(){
        this.timeLine.on(Laya.Event.COMPLETE,this,this.onTimelineComplete);
        this.timeLine.on(Laya.Event.LABEL, this, this.onLabel);
    }

    private resetVec(){
        this.Vdir.x = Config.ObjectConfig.DESK_POS.x;
        this.Vdir.y = Config.ObjectConfig.DESK_POS.y;
        this.Vdir.z = Config.ObjectConfig.DESK_POS.z
    }

    private knockOnce(){
        this.resetVec();
        this.timeLine.reset();
        this.addKnock();
        this.addKnock(1);
        this.timeLine.play(0,false);
    }

    private addStay(_stayTime?:number){
        _stayTime = _stayTime? _stayTime * 1000: 0;
        this.timeLine.addLabel("stay",0).to(this.Vdir, {y:Config.ObjectConfig.DESK_POS.y}, _stayTime, null, 0)
    }

    private addKnock(_deltaTime?:number){
        _deltaTime = _deltaTime? _deltaTime * 1000: 0;
        this.timeLine
            .to(this.Vdir,{y:Config.ObjectConfig.DESK_END_POS.y},200,null,_deltaTime)
            .to(this.Vdir,{y:Config.ObjectConfig.DESK_POS.y},200,null,0)
    }

    private restart(){
        this.deskScript.clearStatus();
        this.HandClass.changeState(Config.StateConfig.IDEL);
        this.moveDesk();
        this.resetHand();
    }

    private newLevel(){
        this.DeskClass.changeState(Config.StateConfig.DESK_LEAVE);
    }

    private moveDesk(){
        // this.deskDown();
        this.DeskClass.changeState(Config.StateConfig.MOVE_FORWARD);
        this.resetVec();
        this.timeLine.reset();
        this.addKnock();
        this.addKnock(1);
        this.timeLine.play(0,true);
    }

    private resetDesk(){
        this.DeskClass.setPosition(Config.ObjectConfig.DESK_POS);
    }

    private stopDesk(){
        this.timeLine.pause();
        this.DeskClass.changeState(Config.StateConfig.STOP);
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
        let vec = this.DeskClass.Position;
        vec.y += 0.3;
        this.DeskClass.setPosition(vec);

        if(vec.y >= Config.ObjectConfig.DESK_POS.y){
            this.DeskClass.changeState(Config.StateConfig.MOVE_FORWARD);
        }
    }

    private deskEnter(){
        let vec = this.DeskClass.Position;
        vec.x -= 0.1;
        this.DeskClass.setPosition(vec);

        if(vec.x <= Config.ObjectConfig.DESK_POS.x){
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

        let vec = this.DeskClass.Position;
        vec.x -= 0.1;
        this.DeskClass.setPosition(vec);

        if(vec.x <= -2){
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

    moveHand(){
        console.log(this.HandClass.CurState);
        if(!this.IsInited) return;
        if(this.HandClass.CurState == Config.StateConfig.STOP) return;

        if(this.HandClass.CurState == Config.StateConfig.IDEL){
            this.HandClass.changeState(Config.StateConfig.MOVE_FORWARD); 
        }
    }

    private handForward(){
        if(!this.IsInited) return;
        
        let vec = this.HandClass.Position;
        vec.x += Config.ObjectConfig.SPEED_HAND * Laya.timer.delta;
        this.HandClass.setPosition(vec);

        if(this.HandClass.Position.x >= Config.ObjectConfig.HAND_END_POS.x){
            this.HandClass.changeState(Config.StateConfig.MOVE_BACK);
        }
    }

    private onReachFinish(){
        this.resetHand();
        //到达终点加分
        Data.PlayerData.Point += 100;
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>得分：",Data.PlayerData.Point);
        if(Data.PlayerData.Point >= 300){
            this.newLevel();
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

        let vec = this.HandClass.Position;
        vec.x -= Config.ObjectConfig.SPEED_HAND * Laya.timer.delta;;
        this.HandClass.setPosition(vec);
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
        this.HandClass.Rigid3D.gravity = _open? new Laya.Vector3(0, -10, 0): Laya.Vector3._ZERO;
    }

    private onHandHit(){
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
        // console.log('每一帧时间：',Laya.timer.delta);
        this.updateDesk();
        this.updateHand();
    }
}
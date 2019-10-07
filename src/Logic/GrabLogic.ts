import * as Utils from "../Common/Utils";
import * as Core from "../Core/Core";
import LocalConfig from '../Config/LocalConfig';
import * as Config from "../Config/Config";
import * as Manager from "../Manager/Manager";
import * as Data from "../Data/Data";
import * as Common from "../Common/Common";
import * as Logic from "./Logic";

const DESK_POS = new Laya.Vector3(2.5, 4, -5);
const DESK_END_POS = new Laya.Vector3(2.5, -1, -5);
const HAND_POS = new Laya.Vector3(-3, -2, -5);
const HAND_END_POS = new Laya.Vector3(0, -2, -5);
const DESK_SIZE = new Laya.Vector3(0.2, 3, 2);
const HAND_SIZE = new Laya.Vector3(6, 0.5, 0.5);
//speed
const SPEED_FORWARD_DESK = new Laya.Vector3(0, -10, 0);
const SPEED_BACK_DESK = new Laya.Vector3(0, 10, 0);
const SPEED_HAND = 0.03;

let knock_time = 0;

export class GrabLogic extends Common.EventDispather {
    IsInited = false;
    Vdir = new Laya.Vector3();
    DeskPosition = new Laya.Vector3();
    GScene:Laya.Scene3D;
    Hand:Laya.MeshSprite3D;
    HandState:string;
    Desk:Laya.MeshSprite3D;
    DeskClass:Core.RigidObject;
    HandClass:Core.RigidObject;
    deskScript:Logic.DeskCollisionScript;
    handScript:Logic.HandCollisionScript;
    private timeLine:Laya.TimeLine = new Laya.TimeLine();

    onAwake(){
        this.GScene = Manager.SceneManager.CurScene as Laya.Scene3D;
        this.Hand = this.GScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(HAND_SIZE.x, HAND_SIZE.y, HAND_SIZE.z))) as Laya.MeshSprite3D;
        this.Desk = this.GScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(DESK_SIZE.x, DESK_SIZE.y, DESK_SIZE.z))) as Laya.MeshSprite3D;
        this.Hand.transform.position = HAND_POS
        this.Desk.transform.position = DESK_POS

        this.addPhysics(this.Hand, HAND_SIZE);
        this.addPhysics(this.Desk, DESK_SIZE);
        this.DeskClass = new Core.RigidObject(this.Desk);
        this.HandClass = new Core.RigidObject(this.Hand);
        this.addCollisionScript();
        // Laya.stage.on(Laya.Event.CLICK, this, this.knockOnce);
        Laya.stage.on(Laya.Event.CLICK, this, this.moveHand);
        Laya.stage.on(Laya.Event.DOUBLE_CLICK, this, this.restart);

        this.IsInited = true;
        this.resetVec();
        this.createTimerLine();
        this.moveDesk();
    }

    addPhysics(target:Laya.Sprite3D, size:Laya.Vector3){
        let rigidBody:Laya.Rigidbody3D = target.addComponent(Laya.Rigidbody3D);//Rigidbody3D可与StaticCollider和RigidBody3D产生碰撞
        rigidBody.colliderShape = new Laya.BoxColliderShape(size.x, size.y, size.z);
        rigidBody.gravity = Laya.Vector3._ZERO;
        rigidBody.isTrigger = true;
        rigidBody.isKinematic = true;
    }

    addCollisionScript(){
        this.deskScript = this.Desk.addComponent(Logic.DeskCollisionScript) as Logic.DeskCollisionScript;
        this.deskScript.kinematicSprite = this.Hand;
        this.handScript = this.Hand.addComponent(Logic.HandCollisionScript) as Logic.HandCollisionScript;
        this.handScript.kinematicSprite = this.Desk;
    }

    private onComplete():void
    {
        knock_time++;
        console.log("timeLine complete!!!!", knock_time);
    }

    private onLabel(label:String):void
    {
        console.log("LabelName:" + label);
    }

    private createTimerLine(){
        this.timeLine.on(Laya.Event.COMPLETE,this,this.onComplete);
        this.timeLine.on(Laya.Event.LABEL, this, this.onLabel);
    }

    private resetVec(){
        this.Vdir.x = DESK_POS.x;
        this.Vdir.y = DESK_POS.y;
        this.Vdir.z = DESK_POS.z
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
        this.timeLine.addLabel("stay",0).to(this.Vdir, {y:DESK_POS.y}, _stayTime, null, 0)
    }

    private addKnock(_deltaTime?:number){
        _deltaTime = _deltaTime? _deltaTime * 1000: 0;
        this.timeLine
            .to(this.Vdir,{y:DESK_END_POS.y},200,null,_deltaTime)
            .to(this.Vdir,{y:DESK_POS.y},200,null,0)
    }

    private restart(){
        this.deskScript.clearStatus();
        this.HandClass.State.changeState(Config.StateConfig.IDEL);
        this.moveDesk();
        this.resetHand();
    }

    private moveDesk(){
        // this.deskDown();
        this.DeskClass.State.changeState(Config.StateConfig.MOVE_FORWARD);
        this.resetVec();
        this.timeLine.reset();
        this.addKnock();
        this.addKnock(1);
        this.timeLine.play(0,true);
    }

    private resetDesk(){
        this.DeskClass.Obj.transform.position = DESK_POS;
    }

    private stopDesk(){
        this.timeLine.pause();
        this.DeskClass.State.changeState(Config.StateConfig.STOP);
    }

    private deskDown(){
        if(!this.IsInited) return;
        
        let vec = this.DeskClass.Obj.transform.position;
        vec.y -= 0.3;
        this.DeskClass.Obj.transform.position = vec;

        if(vec.y <= DESK_END_POS.y){
            this.DeskClass.State.changeState(Config.StateConfig.MOVE_BACK);
        }
    }

    private deskUp(){
        if(!this.IsInited) return;
        
        let vec = this.DeskClass.Obj.transform.position;
        vec.y += 0.3;
        this.DeskClass.Obj.transform.position = vec;

        if(vec.y >= DESK_POS.y){
            this.DeskClass.State.changeState(Config.StateConfig.MOVE_FORWARD);
        }
    }

    updateDesk(){
        if(!this.IsInited) return;

        if(this.deskScript.IsHit){
            this.resetDesk();
            this.stopDesk();
            return;
        }

        switch (this.DeskClass.State.curState) {
            case Config.StateConfig.IDEL:

                break;
        
            case Config.StateConfig.MOVE_FORWARD:
                // this.deskDown();
                this.DeskClass.Obj.transform.position = this.Vdir;
                break;

            case Config.StateConfig.MOVE_BACK:
                // this.deskUp();
                break;
        }
    }

    moveHand(){
        console.log(this.HandClass.State.curState);
        if(!this.IsInited) return;
        if(this.HandClass.State.curState == Config.StateConfig.STOP) return;

        if(this.HandClass.State.curState == Config.StateConfig.IDEL){
            this.HandClass.State.changeState(Config.StateConfig.MOVE_FORWARD); 
        }
    }

    private handForward(){
        if(!this.IsInited) return;
        
        let vec = this.HandClass.Obj.transform.position;
        vec.x += SPEED_HAND * Laya.timer.delta;
        this.HandClass.Obj.transform.position = vec;

        if(this.HandClass.Obj.transform.position.x >= HAND_END_POS.x){
            this.HandClass.State.changeState(Config.StateConfig.MOVE_BACK);
        }
    }

    private handBack(){
        if(!this.IsInited) return;
        
        if(this.HandClass.Obj.transform.position.x <= HAND_POS.x){
            this.resetHand();
            //到达终点加分
            Data.PlayerData.Point += 100;
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>得分：",Data.PlayerData.Point);
            return;
        }

        if(this.HandClass.Obj.transform.position.x < DESK_POS.x){
            this.HandClass.State.changeState(Config.StateConfig.BACK_PASSED);
        }

        let vec = this.HandClass.Obj.transform.position;
        vec.x -= SPEED_HAND * Laya.timer.delta;;
        this.HandClass.Obj.transform.position = vec;
    }

    private resetHand(){
        this.HandClass.Obj.transform.position = HAND_POS;
        this.HandClass.State.changeState(Config.StateConfig.IDEL);
        this.enableHandGravity(false);
    }

    private stopHand(){
        this.HandClass.State.changeState(Config.StateConfig.STOP);
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

        switch (this.HandClass.State.curState) {
            case Config.StateConfig.IDEL:

                break;
        
            case Config.StateConfig.MOVE_FORWARD:
                this.handForward();

                break;

            case Config.StateConfig.MOVE_BACK:
                this.handBack();

                break;
            
            case Config.StateConfig.BACK_PASSED:
                this.handBack();
                break;
        }
    }

    onUpdate(){
        // console.log('每一帧时间：',Laya.timer.delta);
        this.updateDesk();
        this.updateHand();
    }
}
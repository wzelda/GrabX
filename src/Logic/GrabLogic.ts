import * as Utils from "../Common/Utils";
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
const SPEED_FORWARD_HAND = new Laya.Vector3(50, 0, 0);
const SPEED_BACK_HAND = new Laya.Vector3(-50, 0, 0);

export class GrabLogic extends Common.EventDispather {
    IsInited = false;
    Vdir = new Laya.Vector3();
    DeskPosition = new Laya.Vector3();
    GScene:Laya.Scene3D;
    Hand:Laya.MeshSprite3D;
    HandState:string;
    Desk:Laya.MeshSprite3D;
    DeskClass:RigidObject;
    HandClass:RigidObject;
    deskScript:Logic.DeskCollisionScript;
    handScript:Logic.HandCollisionScript;

    onAwake(){
        this.GScene = Manager.SceneManager.CurScene as Laya.Scene3D;
        this.Hand = this.GScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(HAND_SIZE.x, HAND_SIZE.y, HAND_SIZE.z))) as Laya.MeshSprite3D;
        this.Desk = this.GScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(DESK_SIZE.x, DESK_SIZE.y, DESK_SIZE.z))) as Laya.MeshSprite3D;
        this.Hand.transform.position = HAND_POS
        this.Desk.transform.position = DESK_POS

        this.addPhysics(this.Hand, HAND_SIZE);
        this.addPhysics(this.Desk, DESK_SIZE);
        this.DeskClass = new RigidObject(this.Desk);
        this.HandClass = new RigidObject(this.Hand);
        this.addCollisionScript();
        Laya.stage.on(Laya.Event.CLICK, this, this.moveHand);
        // Laya.stage.on(Laya.Event.DOUBLE_CLICK, this, this.restart);

        this.IsInited = true;
        this.moveDesk();
    }

    addPhysics(target:Laya.Sprite3D, size:Laya.Vector3){
        var rigidBody:Laya.Rigidbody3D = target.addComponent(Laya.Rigidbody3D);//Rigidbody3D可与StaticCollider和RigidBody3D产生碰撞
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

    private restart(){
        this.deskScript.clearStatus();
        // this.moveDesk();
    }

    private moveDesk(){
        this.deskDown();
        this.DeskClass.State = Manager.StateBase.MOVE_FORWARD;
    }

    private resetDesk(){
        this.deskScript.clearStatus();
        // this.DeskClass.Rigid3D.linearVelocity = Laya.Vector3._ZERO;
        this.DeskClass.Obj.transform.position = DESK_POS;
        // this.DeskClass.State = Manager.StateBase.IDEL;
    }

    private deskDown(){
        if(!this.IsInited) return;
        
        let vec = this.DeskClass.Obj.transform.position;
        vec.y -= 0.3;
        this.DeskClass.Obj.transform.position = vec;
    }

    private deskUp(){
        if(!this.IsInited) return;
        
        let vec = this.DeskClass.Obj.transform.position;
        vec.y += 0.3;
        this.DeskClass.Obj.transform.position = vec;
    }

    updateDesk(){
        if(!this.IsInited) return;

        switch (this.DeskClass.State) {
            case Manager.StateBase.IDEL:

                break;
        
            case Manager.StateBase.MOVE_FORWARD:
                if(this.deskScript.IsHit){
                    this.resetDesk();
                }else if(this.DeskClass.Obj.transform.position.y <= DESK_END_POS.y){
                    // this.DeskClass.Rigid3D.linearVelocity = SPEED_BACK_DESK;
                    this.deskUp();
                    this.DeskClass.State = Manager.StateBase.MOVE_BACK;
                }else{
                    this.deskDown();
                }

                break;

            case Manager.StateBase.MOVE_BACK:
                if(this.DeskClass.Obj.transform.position.y >= DESK_POS.y){
                    // this.DeskClass.Rigid3D.linearVelocity = SPEED_FORWARD_DESK;
                    this.deskDown();
                    this.DeskClass.State = Manager.StateBase.MOVE_FORWARD;
                }else{
                    this.deskUp();
                }

                break;
        }
    }

    moveHand(){
        if(!this.IsInited) return;

        if(this.HandClass.State == Manager.StateBase.IDEL){
            // this.HandClass.Rigid3D.linearVelocity = SPEED_FORWARD_HAND;
            this.HandClass.State = Manager.StateBase.MOVE_FORWARD; 
        }
    }

    private handForward(){
        if(!this.IsInited) return;
        
        let vec = this.HandClass.Obj.transform.position;
        vec.x += 0.3;
        this.HandClass.Obj.transform.position = vec;
    }

    private handBack(){
        if(!this.IsInited) return;
        
        let vec = this.HandClass.Obj.transform.position;
        vec.x -= 0.3;
        this.HandClass.Obj.transform.position = vec;
    }

    private resetHand(){
        // this.HandClass.Rigid3D.linearVelocity = Laya.Vector3._ZERO;
        this.HandClass.Obj.transform.position = HAND_POS;
        this.HandClass.State = Manager.StateBase.IDEL;
    }

    updateHand(){
        if(!this.IsInited) return;

        switch (this.HandClass.State) {
            case Manager.StateBase.IDEL:

                break;
        
            case Manager.StateBase.MOVE_FORWARD:
                if(this.deskScript.IsHit){
                    this.resetHand();
                }else if(this.HandClass.Obj.transform.position.x >= HAND_END_POS.x){
                    // this.HandClass.Rigid3D.linearVelocity = SPEED_BACK_HAND;
                    this.HandClass.State = Manager.StateBase.MOVE_BACK;
                }else{
                    this.handForward();
                }

                break;

            case Manager.StateBase.MOVE_BACK:
                if(this.HandClass.Obj.transform.position.x <= HAND_POS.x){
                    this.resetHand();
                }else{
                    this.handBack();
                }

                break;
        }
    }

    onUpdate(){
        this.updateDesk();
        this.updateHand();
        // let handPos = this.Hand.transform.position;
        // if(this.Vdir.x < 0){
        //     if(handPos.x < DESK_POS.x){
        //         this.HandState = Manager.StateBase.BACK_PASSED;
        //     }
        // }
    }
}

class RigidObject {
    Obj:Laya.MeshSprite3D;
    Rigid3D:Laya.Rigidbody3D;
    State = Manager.StateBase.IDEL;

    constructor(obj:Laya.MeshSprite3D){
        this.Obj = obj;
        this.Rigid3D = obj.getComponent(Laya.Rigidbody3D);
    }
}
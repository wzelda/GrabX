import * as Manager from "../Manager/Manager";
import * as Config from "../Config/Config";
import * as Core from "../Core/Core";
import * as Common from "../Common/Common";
import { ObjectConfig } from "../Config/Config";

export class ObjectProxy {
    static createHand(){
        let hand = Manager.SceneManager.CurScene.addChild(
            new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(
                ObjectConfig.HAND_SIZE.x, 
                ObjectConfig.HAND_SIZE.y, 
                ObjectConfig.HAND_SIZE.z
            ))
        ) as Laya.MeshSprite3D;
        this.addPhysics(hand, ObjectConfig.HAND_SIZE);

        return hand;
    }

    static createDesk(){
        let desk = Manager.SceneManager.CurScene.addChild(
            new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(
                ObjectConfig.DESK_SIZE.x, 
                ObjectConfig.DESK_SIZE.y, 
                ObjectConfig.DESK_SIZE.z
            ))
        ) as Laya.MeshSprite3D;
        this.addPhysics(desk, ObjectConfig.DESK_SIZE);

        return desk;
    }

    static getObj(key:string){
        switch (key) {
            case Config.PoolType.Hand:
                return Manager.PoolManager.getObjByFunc(Config.PoolType.Hand, this.createHand.bind(this));
        
            case Config.PoolType.Desk:
                return Manager.PoolManager.getObjByFunc(Config.PoolType.Desk, this.createDesk.bind(this));
        }
    }

    static addPhysics(target:Laya.Sprite3D, size:Laya.Vector3){
        let rigidBody:Laya.Rigidbody3D = target.addComponent(Laya.Rigidbody3D);//Rigidbody3D可与StaticCollider和RigidBody3D产生碰撞
        rigidBody.colliderShape = new Laya.BoxColliderShape(size.x, size.y, size.z);
        rigidBody.gravity = Laya.Vector3._ZERO;
        rigidBody.isTrigger = true;
        rigidBody.isKinematic = true;
    }

    static addScript(rigidObj:Core.RigidObject, script){
        if(!rigidObj || !script) return;
        
        rigidObj.Obj.addComponent(script);
        return script;
    }

    static changeModel(oldModel:Laya.Sprite3D, oldPath:string, newPath:string){
        if(!oldModel || !oldModel || !newPath || oldPath == newPath) return;

        if(oldModel) {
            Manager.PoolManager.recover(oldPath, oldModel);
        }

        let model = Manager.PoolManager.getItem(newPath);
        if(model instanceof Laya.MeshSprite3D){
            oldModel = model;
        }else{
            Manager.SpawnManager.Load3dModel(newPath, (mdata:Config.ModelDataStruct)=>{
                oldModel = mdata.msp as Laya.MeshSprite3D;
            }, this)
        }
    }
}
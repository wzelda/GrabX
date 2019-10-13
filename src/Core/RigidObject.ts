import * as Manager from "../Manager/Manager";
import * as Config from "../Config/Config";
import * as Core from "../Core/Core";

export class RigidObject{
    private _modelPath:string;
    State:Manager.StateBase;
    Obj:Laya.MeshSprite3D;
    Rigid3D:Laya.Rigidbody3D;

    constructor(obj:Laya.MeshSprite3D){
        this.Obj = obj;
        this.State = new Manager.StateBase();
        this.Rigid3D = obj.getComponent(Laya.Rigidbody3D);
        if(!this.Rigid3D){
            console.error("Rigid Object miss rigidbody3d!");
        }
    }

    get Position(){
        return this.Obj.transform.position;
    }

    changeModel(path:string){
        if(!path || this._modelPath == path) return;

        Core.ObjectProxy.changeModel(this.Obj, this._modelPath, path);
        this._modelPath = path;
    }

    changeObj(key:string){
        Manager.PoolManager.recover(key, this.Obj);
        this.Obj = Core.ObjectProxy.getObj(key);
    }

    setPosition(pos:Laya.Vector3){
        if(this.Obj)
            this.Obj.transform.position = pos;
    }

    changeState(state:string){
        if(!state) return;

        this.State.changeState(state);
    }
}
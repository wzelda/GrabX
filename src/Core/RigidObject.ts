import * as Manager from "../Manager/Manager";
import * as Config from "../Config/Config";
import * as Core from "../Core/Core";

export class RigidObject{
    State:Manager.StateBase;
    private _modelPath:string;
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

    changeModel(path:string){
        if(!path || this._modelPath == path) return;

        Core.ObjectProxy.changeModel(this.Obj, this._modelPath, path);
        this._modelPath = path;
    }
}
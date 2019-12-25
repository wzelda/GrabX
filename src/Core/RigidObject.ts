import * as Manager from "../Manager/Manager";
import * as Config from "../Config/Config";
import * as Core from "../Core/Core";

export class RigidObject{
    private _modelPath:string;
    private _obj:Laya.MeshSprite3D;
    private _objKey:string;
    StateList:Config.Dictionary<Core.ObjectState> = {};
    State:Core.StateMachine;
    Rigid3D:Laya.Rigidbody3D;

    constructor(key:string, obj:Laya.MeshSprite3D, ...states:Core.ObjectState[]){
        if(!obj){
            console.error("param obj is null!");
            return;
        }
        
        this._objKey = key;
        this.Obj = obj;
        this.State = new Core.StateMachine(...states);
        this.Rigid3D = obj.getComponent(Laya.Rigidbody3D);
        if(!this.Rigid3D){
            console.error("Rigid Object miss rigidbody3d!");
        }
    }

    get Obj(){
        if(this._obj){
            return this._obj;
        }else{
            console.error("obj is null!");
        }
    }

    set Obj(obj){
        if(!obj){
            console.error("try to set a null obj!");
        }else{
            this._obj = obj;
        }
    }

    get Position(){
        if(this.Obj)
            return this.Obj.transform.position;
    }

    get CurState(){
        return this.State.CurState;
    }

    get IsStop(){
        return this.CurState == Config.StateConfig.STOP;
    }

    getScript(script){
        if(this.Obj)
            return this.Obj.getComponent(script);
    }

    addScript(script){
        if(!script) return;
        
        return this.Obj.addComponent(script);
    }

    changeModel(path:string){
        if(!path || this._modelPath == path) return;

        Core.ObjectProxy.changeModel(this.Obj, this._modelPath, path);
        this._modelPath = path;
    }

    dispose(){
        this.returnObjToPool();
        this.State.destroyState();
    }

    returnObjToPool(){
        this.Obj.active = false;
        Manager.PoolManager.recover(this._objKey, this.Obj);
    }

    changeObj(key:string){
        this.returnObjToPool();
        this.Obj = Core.ObjectProxy.getObj(key);
        this.Obj.active = true;
    }

    setPosition(pos:Laya.Vector3){
        if(this.Obj)
            this.Obj.transform.position = pos;
    }

    movePos(x?:number, y?:number, z?:number){
        if(!this.Obj) return;

        let pos = this.Obj.transform.position;
        if(x){
            pos.x += x;
        }

        if(y){
            pos.y += y;
        }

        if(z){
            pos.z += z;
        }

        this.Obj.transform.position = pos;
    }

    changeState(state:string){
        if(!state) return;

        this.State.changeState(state);
    }

    updateState(){
        if(!this.StateList || !this.Obj || !this.Obj.active) return;

        this.State.Update(this);
    }
}
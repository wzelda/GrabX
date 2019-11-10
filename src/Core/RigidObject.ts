import * as Manager from "../Manager/Manager";
import * as Config from "../Config/Config";
import * as Core from "../Core/Core";

export class RigidObject{
    private _modelPath:string;
    StateList:Config.Dictionary<Core.ObjectState> = {};
    State:Manager.StateBase;
    Obj:Laya.MeshSprite3D;
    Rigid3D:Laya.Rigidbody3D;

    constructor(obj:Laya.MeshSprite3D, ...states:Core.ObjectState[]){
        this.Obj = obj;
        this.State = new Manager.StateBase();
        this.initStateList(...states);
        this.Rigid3D = obj.getComponent(Laya.Rigidbody3D);
        if(!this.Rigid3D){
            console.error("Rigid Object miss rigidbody3d!");
        }
    }

    get Position(){
        if(this.Obj)
            return this.Obj.transform.position;
    }

    get CurState(){
        return this.State.curState;
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

    changeObj(key:string){
        Manager.PoolManager.recover(key, this.Obj);
        this.Obj = Core.ObjectProxy.getObj(key);
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

    initStateList(...states:Core.ObjectState[]){
        if(!states) return;
        
        states.forEach(s=>{
            this.StateList[s.State] = s;
        }, this);
    }

    changeState(state:string){
        if(!state) return;

        this.State.changeState(state);
    }

    updateState(){
        if(!this.StateList) return;

        let state = this.StateList[this.CurState];
        state && state.Update();
    }
}
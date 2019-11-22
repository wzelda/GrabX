import * as Manager from "../Manager/Manager";
import * as Config from "../Config/Config";
import * as Core from "../Core/Core";

export class ObjectState{
    State:string;
    OnEnter:Function;
    OnUpdate:Function;
    OnExit:Function;

    constructor(state:string, onUpdate?:Function, onEnter?:Function, onExit?:Function){
        this.State = state;
        this.OnUpdate = onUpdate;
        this.OnEnter = onEnter;
        this.OnExit = onExit;
    }

    Update(...data){
        if(this.OnUpdate){
            this.OnUpdate(...data);
        }
    }
}
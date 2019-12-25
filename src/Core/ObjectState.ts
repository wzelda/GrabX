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

    destroyState(){
        this.OnUpdate = null;
        this.OnEnter = null;
        this.OnExit = null;
    }
}

export class StateMachine{
    private _curState: string;
    private _stateList:Config.Dictionary<ObjectState> = {};

    constructor(...states: ObjectState[]) {
        states.forEach(s=>{
            this._stateList[s.State] = s;
        }, this);
    }

    get CurState(){
        return this._curState;
    }

    changeState(stateName:string){
        if(stateName != this._curState && this._stateList[stateName]){
            let cb = this._stateList[this._curState];
            cb && cb.OnExit && cb.OnExit();
            this._curState = stateName;
            cb = this._stateList[stateName];
            cb.OnEnter && cb.OnEnter();
        }
    }

    Update(...data){
        let state = this._stateList[this._curState];
        state && state.OnUpdate && state.Update(...data);
    }

    destroyState(){
        for(let i in this._stateList){
            this._stateList[i].destroyState();
        }
        this._stateList = null;
    }
}
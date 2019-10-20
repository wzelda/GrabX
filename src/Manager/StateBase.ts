import * as Manager from "./Manager";
import * as Config from "../Config/Config";

export class StateBase{
    protected _state:string;

    constructor(){
        this._state = Config.StateConfig.IDEL;
    }

    get curState(){
        return this._state;
    }

    changeState(state:string){
        if(this._state == state) return;

        this._state = state;
    }
}
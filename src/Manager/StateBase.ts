import * as Manager from "./Manager";

export class StateBase{
    static readonly IDEL = 'IDEL';  //待机
    static readonly DEAD = 'DEAD';
    static readonly BACK_PASSED = 'BACK_PASSED';    //已缩回安全区
    static readonly MOVE_FORWARD = 'MOVE_FORWARD';    //前伸
    static readonly MOVE_BACK = 'MOVE_BACK';    //缩回
    static readonly STOP = 'STOP';    //停止运动

    constructor(){

    }
}
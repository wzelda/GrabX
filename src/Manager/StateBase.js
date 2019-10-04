export class StateBase {
    constructor() {
    }
}
StateBase.IDEL = 'IDEL'; //待机
StateBase.DEAD = 'DEAD';
StateBase.BACK_PASSED = 'BACK_PASSED'; //已缩回安全区
StateBase.MOVE_FORWARD = 'MOVE_FORWARD'; //前伸
StateBase.MOVE_BACK = 'MOVE_BACK'; //缩回
StateBase.STOP = 'STOP'; //停止运动

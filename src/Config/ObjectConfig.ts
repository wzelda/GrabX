import * as Config from "./Config";

export const ObjectConfig = {
    DESK_POS: new Laya.Vector3(2.5, 4, -5),
    DESK_END_POS: new Laya.Vector3(2.5, -1, -5),
    DESK_ENTER_POS: new Laya.Vector3(6, 4, -5),
    HAND_POS: new Laya.Vector3(-3, -2, -5),
    HAND_END_POS: new Laya.Vector3(0, -2, -5),
    DESK_SIZE: new Laya.Vector3(0.2, 3, 2),
    HAND_SIZE: new Laya.Vector3(6, 0.5, 0.5),
    //speed
    SPEED_FORWARD_DESK: new Laya.Vector3(0, -10, 0),
    SPEED_BACK_DESK: new Laya.Vector3(0, 10, 0),
    SPEED_HAND: 0.01,
    // 断头台下落时间：毫秒
    DESK_KNOCK_DURATION: 10000,
}
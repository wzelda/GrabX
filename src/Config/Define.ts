import * as Common from "../Common/Common";

export interface Dictionary<T> {
    [Key: string]: T;
}

export class EventClass {
    Key:string;
    Listener:Function;
    Target;

    constructor(key:string, listener:Function, target?){
        this.Key = key;
        this.Listener = listener;
        this.Target = target;
    }
}

export class ListenerClass {
    Listeners = new Array<Function>();
    Targets = new Array<Common.EventDispather>();

    constructor(){
    }

    addListener(listener:Function, target?){
        this.Listeners.push(listener);
        this.Targets.push(target);
    }

    removeListener(lisener:Function){
        let idx = this.Listeners.indexOf(lisener);
        if(idx >= 0){
            delete this.Listeners[idx];
            delete this.Targets[idx];
        }
    }
}

export interface EventDispatherInterface{
    addEventListener(key, lisener:Function);
    dispatchEvent(key);
    removeEventListener();
}

export const VEC = {
    ZERO: new Laya.Vector3(0, 0, 0),
    UP: new Laya.Vector3(0, 1, 0),
    DOWN: new Laya.Vector3(0, -1, 0),
    LEFT: new Laya.Vector3(-1, 0, 0),
    RIGHT: new Laya.Vector3(1, 0, 0)
}

//版本控制
export enum VersionConfig {
    //开发版本
    Develop = 0,
    //对外版本
    Release = 1,
}

//池类型
export const PoolType = {
    //计时器
    Timer: 'Timer',
    //玩家头部
    HeadModel: 'HeadModel',
    //玩家身体
    BodyModel: 'BodyModel',
    //弹幕
    PassbyTxt: 'PassbyTxt',
    //fairygui对象
    FguiObj: 'FguiObj',
    Hand: 'Hand',
    Desk: 'Desk',
}

//池物品类型
export const PoolItemKey = {
    //玩家身体
    BodySpine: 'BodySpine',    
    //换装模板
    DressTemplate: 'DressTemplate',    
}

//随机语句类型
export const RandWordType = {
    //渡劫
    Cultivation: 1,
}

//广告类型
export enum AwardType {
    Not = 0,
    AD = 1,
    Share = 2
}

//广告优先级配置
export enum AdConfigType {
    //激励视频优先
    Video = 0,
    //分享优先
    Share = 1
}

//分享语句类型
export enum ShareWordEnum {
    CardWords = 1,
    HamsterWords = 2,
    CoinWords = 3,
    OtherWords = 4,
}

//模型数据定义
export class ModelDataStruct {
    msp:Laya.Sprite3D;
    ani:Laya.Animator;
    aniState:Laya.AnimatorPlayState;

    constructor(msp:Laya.Sprite3D, ani:Laya.Animator, aniState:Laya.AnimatorPlayState){
        this.msp = msp;
        this.ani = ani;
        this.aniState = aniState;
    }
}

//公共确认弹窗类型
export const ConfirmWindowType = {
    //文字
    Content: 1,
    //奖励物品
    Reward: 2,
    //文字+奖励
    ContentAndReward: 3,
}

//弹出窗口数据
export class PopupWindowData {
    Content:string[];
    WindowType:number;
    YesBtnContent:string;
    YesBtnCallback:Function;
    CancelBtnContent:string;
    RewardData;

    constructor(content:string[], yesBtnCallback?:Function, windowType?:number, rewardData?, btnYesTxt?:string, btnCancelTxt?:string){
        this.Content = content;
        this.YesBtnCallback = yesBtnCallback;
        this.YesBtnContent = btnYesTxt? btnYesTxt: '确定';
        this.CancelBtnContent = btnCancelTxt? btnCancelTxt: '取消';
        this.WindowType = windowType;
        this.RewardData = rewardData;
    }
}

export const POINT_PER_HIT = 100

export const PASS_POINT = 1000
// 触发连击最小间隔：毫秒
export const COMBO_INTERVAL = 2000

export const COMBO_THREHOLD = 3

export const COMBO_HIT_TOTAL = 5

export const ActionType = {
    Knock: 1,
    Stay: 2,
}
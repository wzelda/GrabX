export class EventClass {
    constructor(key, listener, target) {
        this.Key = key;
        this.Listener = listener;
        this.Target = target;
    }
}
export class ListenerClass {
    constructor() {
        this.Listeners = new Array();
        this.Targets = new Array();
    }
    addListener(listener, target) {
        this.Listeners.push(listener);
        this.Targets.push(target);
    }
    removeListener(lisener) {
        let idx = this.Listeners.indexOf(lisener);
        if (idx >= 0) {
            delete this.Listeners[idx];
            delete this.Targets[idx];
        }
    }
}
//版本控制
export var VersionConfig;
(function (VersionConfig) {
    //开发版本
    VersionConfig[VersionConfig["Develop"] = 0] = "Develop";
    //对外版本
    VersionConfig[VersionConfig["Release"] = 1] = "Release";
})(VersionConfig || (VersionConfig = {}));
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
};
//池物品类型
export const PoolItemKey = {
    //玩家身体
    BodySpine: 'BodySpine',
    //换装模板
    DressTemplate: 'DressTemplate',
};
//随机语句类型
export const RandWordType = {
    //渡劫
    Cultivation: 1,
};
//广告类型
export var AwardType;
(function (AwardType) {
    AwardType[AwardType["Not"] = 0] = "Not";
    AwardType[AwardType["AD"] = 1] = "AD";
    AwardType[AwardType["Share"] = 2] = "Share";
})(AwardType || (AwardType = {}));
//广告优先级配置
export var AdConfigType;
(function (AdConfigType) {
    //激励视频优先
    AdConfigType[AdConfigType["Video"] = 0] = "Video";
    //分享优先
    AdConfigType[AdConfigType["Share"] = 1] = "Share";
})(AdConfigType || (AdConfigType = {}));
//分享语句类型
export var ShareWordEnum;
(function (ShareWordEnum) {
    ShareWordEnum[ShareWordEnum["CardWords"] = 1] = "CardWords";
    ShareWordEnum[ShareWordEnum["HamsterWords"] = 2] = "HamsterWords";
    ShareWordEnum[ShareWordEnum["CoinWords"] = 3] = "CoinWords";
    ShareWordEnum[ShareWordEnum["OtherWords"] = 4] = "OtherWords";
})(ShareWordEnum || (ShareWordEnum = {}));
//模型数据定义
export class ModelDataStruct {
    constructor(msp, ani, aniState) {
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
};
//弹出窗口数据
export class PopupWindowData {
    constructor(content, yesBtnCallback, windowType, rewardData, btnYesTxt, btnCancelTxt) {
        this.Content = content;
        this.YesBtnCallback = yesBtnCallback;
        this.YesBtnContent = btnYesTxt ? btnYesTxt : '确定';
        this.CancelBtnContent = btnCancelTxt ? btnCancelTxt : '取消';
        this.WindowType = windowType;
        this.RewardData = rewardData;
    }
}

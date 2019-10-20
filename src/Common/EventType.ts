import * as Config from "../Config/Config";
import GEvent from "./GEvent";

export class EventDispather extends Laya.Script3D {
    protected _eventList = new Array<Config.EventClass>();  
    protected static _staticEventList = new Array<Config.EventClass>(); //静态方法事件

    //静态方法
    static addEventListener(key, lisener:Function){
        GEvent.AddListener(key, lisener, this);
        this._staticEventList.push(new Config.EventClass(key, lisener));
    }

    static dispatchEvent(key, ...data){
        GEvent.Dispatch(key, ...data);
    }

    static clearEventListener(){
        this._staticEventList.forEach(evt=>{
            GEvent.RemoveListener(evt.Key, evt.Listener);
            evt = null;
        });
    }

    static processEvent(key, listener:Function, ...data){
        // listener.call(this, ...data);
    }

    //实例化重载方法
    public addEventListener(key, lisener:Function){
        GEvent.AddListener(key, lisener, this);
        this._eventList.push(new Config.EventClass(key, lisener));
    }

    public dispatchEvent(key, ...data){
        GEvent.Dispatch(key, ...data);
    }

    //必须在销毁时执行此方法
    public removeEventListener(){
        this._eventList.forEach(evt=>{
            GEvent.RemoveListener(evt.Key, evt.Listener);
            evt = null;
        });
    }

    public processEvent(key, listener:Function, ...data){
        // listener.call(this, ...data);
    }

    onDestroy(){
        //重写此组件方法必须执行
        this.removeEventListener();
    }
}

//----------------------------Base----------------------------------------

export enum EventSpan {
    ModuleSpan = 100000,
    FuncSpan = 1000,
    UISpan = 1,
}

//模块功能
enum ModuleEtype {
    Scene = 1,
    Game = 2,
    Net = 3,
    Ui = 4,
    Npc = 5,
    Character = 6,
    Asset = 7,
    Data = 8,
    Audio = 9,
}

export enum ModuleEid {
    Scene       = ModuleEtype.Scene * EventSpan.ModuleSpan,   //场景模块
    Net         = ModuleEtype.Net * EventSpan.ModuleSpan,   //网络模块
    Game        = ModuleEtype.Game * EventSpan.ModuleSpan,   //玩法模块
    Data        = ModuleEtype.Data * EventSpan.ModuleSpan,  //UI模块
    Ui          = ModuleEtype.Ui * EventSpan.ModuleSpan,  //UI模块
    Character   = ModuleEtype.Character * EventSpan.ModuleSpan, //玩家属性模块
}

export enum ManagerEid {
    GameManager         = ModuleEtype.Game * EventSpan.ModuleSpan,
    NetManager          = ModuleEtype.Net * EventSpan.ModuleSpan,
    UiManager           = ModuleEtype.Ui * EventSpan.ModuleSpan,
    AssetManager        = ModuleEtype.Asset * EventSpan.ModuleSpan,
    DataManager         = ModuleEtype.Data * EventSpan.ModuleSpan,
    AudioManager        = ModuleEtype.Data * EventSpan.ModuleSpan,
}

//----------------------------网络模块功能------------------------

let netModuleNum = 1;
enum NetModuleId {
    HttpConnet       = ModuleEid.Net + (netModuleNum++) * EventSpan.FuncSpan, //HTTP连接
}

//HTTP连接
let netHttpConnectEidNum = 1;
export enum NetHttpConnectEid {
    ServiceRespond      = NetModuleId.HttpConnet + netHttpConnectEidNum++,    //响应成功
    ConnectBegin        = NetModuleId.HttpConnet + netHttpConnectEidNum++,    //开始连接
}

//----------------------------场景模块功能------------------------

let sceneModuleNum = 1;
enum SceneModuleId {
    Login       = ModuleEid.Scene + (sceneModuleNum++) * EventSpan.FuncSpan, //登录
    Enter       = ModuleEid.Scene + (sceneModuleNum++) * EventSpan.FuncSpan, //进入场景通知
}

//登录
let sceneLoginEidNum = 1;
export enum SceneLoginEid {
    ServiceChoosed  = SceneModuleId.Login + sceneLoginEidNum++,    //已选择服务器，开发用
    ConfigLoaded    = SceneModuleId.Login + sceneLoginEidNum++,    //配置加载完成
    PackageLoaded   = SceneModuleId.Login + sceneLoginEidNum++,    //加载包完成
    LoginSuccess    = SceneModuleId.Login + sceneLoginEidNum++,    //登录成功
    SimProgressEnd  = SceneModuleId.Login + sceneLoginEidNum++,    //假进度条读完
}

//进入场景通知
let sceneEnterEidNum = 1;
export enum SceneEnterEid {
    MainMenu        = SceneModuleId.Enter + sceneEnterEidNum++,    //主界面场景
}

//----------------------------数据模块功能------------------------

let dataModuleNum = 1;
enum DataModuleId {
    Player       = ModuleEid.Data + (sceneModuleNum++) * EventSpan.FuncSpan, //玩家数据
    Adobe       = ModuleEid.Data + (sceneModuleNum++) * EventSpan.FuncSpan, //洞府数据
    Sect       = ModuleEid.Data + (sceneModuleNum++) * EventSpan.FuncSpan, //门派数据
}

//玩家
let dataPlayerEidNum = 1;
export enum DataPlayerEid {
    Refreshed            = DataModuleId.Player + dataPlayerEidNum++,  //数据更新通知
    GmAddBagItemSuccess  = DataModuleId.Player + dataPlayerEidNum++,  //GM命令增加背包物品成功
}

//洞府
let dataAdobeEidNum = 1;
export enum DataAdobeEid {
    Refreshed    = DataModuleId.Adobe + dataAdobeEidNum++,    //数据更新通知
}

//门派
let dataSectEidNum = 1;
export enum DataSectEid {
    Refreshed               = DataModuleId.Sect + dataSectEidNum++,    //数据更新通知
    GotInfo                 = DataModuleId.Sect + dataSectEidNum++,    //获得门派UI数据
    GotTaskInfo             = DataModuleId.Sect + dataSectEidNum++,    //获得门派任务数据
    GotTrainTowerInfo       = DataModuleId.Sect + dataSectEidNum++,    //获得修炼塔数据
}


//----------------------------UI模块功能------------------------

let uiModuleNum = 1;
export enum uiModuleId {
    Open       = ModuleEid.Ui + (uiModuleNum++) * EventSpan.FuncSpan, //打开界面
    Notice     = ModuleEid.Ui + (uiModuleNum++) * EventSpan.FuncSpan, //通知
}

//打开界面
let uiOpenEidNum = 1;
export enum UiOpenEid {
    LoadingProgress     = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan,
    Loading             = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan,
    ChooseService       = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan,
    MainMenu            = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan,
    CultivationInfo     = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan,
    AdobeMain           = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan,
    AdobePool           = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan,
    AdobeUpgrad         = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan,
    PublicConfirmation  = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan,
    JoinSect            = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan,
    
}

//UI通知
let uiNoticeEidNum = 1;
export enum UiNoticeEid {
    CloseController    = uiModuleId.Notice + uiNoticeEidNum++,
    OpenFullScreen     = uiModuleId.Notice + uiNoticeEidNum++,
    CloseFullScreen    = uiModuleId.Notice + uiNoticeEidNum++,
    OpenPopup          = uiModuleId.Notice + uiNoticeEidNum++,
    ClosePopup         = uiModuleId.Notice + uiNoticeEidNum++,
}

//----------------------------玩家属性模块功能------------------------

let characterModuleNum = 1;
enum CharacterModuleId {
    Cultivation       = ModuleEid.Character + (characterModuleNum++) * EventSpan.FuncSpan, //修为
}

//修为
let characterCultivationEidNum = 1;
export enum CharacterCultivationEid {
    Upgrade      = CharacterModuleId.Cultivation + characterCultivationEidNum++,    //修为升级
    AutoChanged         = CharacterModuleId.Cultivation + characterCultivationEidNum++,    //自动修炼变化
}

//----------------------------玩法模块功能------------------------

let gameModuleNum = 1;
enum GameModuleId {
    Adobe       = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan, //洞府
    Sect        = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan, //门派
    Kongfa      = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan, //技能功法
    Player      = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan, //角色
    Road2Diety  = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan, //挑战仙途
}

//洞府玩法
let gameAdobeEidNum = 1;
export enum GameAdobeEid {
    HireWorkerSuccess     = GameModuleId.Adobe + gameAdobeEidNum++,    //招募工人成功
    AddWorkerSuccess      = GameModuleId.Adobe + gameAdobeEidNum++,    //添加工人成功
    ReduceWorkerSuccess   = GameModuleId.Adobe + gameAdobeEidNum++,    //减少工人成功
    UpgradeStoneSuccess   = GameModuleId.Adobe + gameAdobeEidNum++,    //灵石升级成功
    UpgradeFoodSuccess    = GameModuleId.Adobe + gameAdobeEidNum++,    //食物升级成功
    UpgradeWoodSuccess    = GameModuleId.Adobe + gameAdobeEidNum++,    //木材升级成功
    UpgradeIronSuccess    = GameModuleId.Adobe + gameAdobeEidNum++,    //陨铁升级成功
    UpgradePoolSuccess    = GameModuleId.Adobe + gameAdobeEidNum++,    //灵池升级成功
    UpgradeEnegySuccess   = GameModuleId.Adobe + gameAdobeEidNum++,    //风水升级成功
}

//门派玩法
let gameSectEidNum = 1;
export enum GameSectEid {
    JoinSectSuccess       = GameModuleId.Sect + gameSectEidNum++,    //加入门派成功
    LearnKFSuccess        = GameModuleId.Sect + gameSectEidNum++,  //学习技能成功
    AddKfNum              = GameModuleId.Sect + gameSectEidNum++,    //修炼功法
    StartTask             = DataModuleId.Sect + dataSectEidNum++,    //开始门派任务
    GrabTaskAwardSuccess  = DataModuleId.Sect + dataSectEidNum++,    //领取门派任务奖励成功
    StartNormalTowerTrain = DataModuleId.Sect + dataSectEidNum++,    //开始普通修炼
    EndNormalTowerTrain = DataModuleId.Sect + dataSectEidNum++,    //结束普通修炼
    StartBossTowerTrain   = DataModuleId.Sect + dataSectEidNum++,    //开始掌门修炼
    EndBossTowerTrain   = DataModuleId.Sect + dataSectEidNum++,    //结束掌门修炼
    AfkSect               = DataModuleId.Sect + dataSectEidNum++,    //退出门派
}

//技能玩法
let gameKongfaEidNum = 1;
export enum GameKongfaEid {
    UpgradeKFSuccess       = GameModuleId.Kongfa + gameKongfaEidNum++,    //加入门派成功
}

//角色
let gamePlayerEidNum = 1;
export enum GamePlayerEid {
    GetBagInfo           = GameModuleId.Player + gamePlayerEidNum++,    //获取到背包信息
    BagSortSuccess       = GameModuleId.Player + gamePlayerEidNum++,    //整理背包成功
    BagExpandSuccess     = GameModuleId.Player + gamePlayerEidNum++,    //扩展背包成功
    BagExpandFail        = GameModuleId.Player + gamePlayerEidNum++,    //扩展背包失败
    SoldBagItemSuccess   = GameModuleId.Player + gamePlayerEidNum++,  //出售背包物品成功
    UseBagItemSuccess    = GameModuleId.Player + gamePlayerEidNum++,  //使用背包物品成功
}

//挑战仙途玩法
let gameRoad2DietyEidNum = 1;
export enum GameRoad2DietyaEid {
    GoMonsterResult      = GameModuleId.Road2Diety + gameRoad2DietyEidNum++,    //挑战镇妖塔结果
    FailGoMonster        = GameModuleId.Road2Diety + gameRoad2DietyEidNum++,    //无法挑战镇妖塔
    InvitedFriend        = GameModuleId.Road2Diety + gameRoad2DietyEidNum++,    //邀请朋友挑战镇妖塔
    BattleRecordEnd      = GameModuleId.Road2Diety + gameRoad2DietyEidNum++,    //战报播放完毕
    Monster1stBlood      = GameModuleId.Road2Diety + gameRoad2DietyEidNum++,    //镇妖塔首杀
}
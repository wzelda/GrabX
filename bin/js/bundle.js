(function () {
    'use strict';

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class LocalConfig {
        constructor() { }
        static GetAcountName() {
            return getLocalStorage("AcountName") || '';
        }
        static SaveAcountName(_value) {
            saveLocalStorage("AcountName", _value);
        }
    }
    LocalConfig.Cultivation_Fly_Interval = 6;
    LocalConfig.Adobe_Production_Interval = 10;
    LocalConfig.Tower_Max_Invite_Num = 4;
    LocalConfig.Max_Ready = 8;
    LocalConfig.Max_Level = 8;
    LocalConfig.Max_Battle = 9;
    LocalConfig.IsChoosedService = false;
    LocalConfig.IsSimProgressEnd = false;
    LocalConfig.RewardAdList = [
        'adunit-d9506b856da651d9',
        'adunit-277a1490bdd96586',
        'adunit-24c981bb6e261c12',
        'adunit-ba1474242e0b07cc',
        'adunit-5edc5256b89946ce'
    ];
    LocalConfig.BannerAdList = [
        'adunit-64f32ebf391a3eea',
        'adunit-f1bd97029412dc35',
        'adunit-792109fac68ef08b',
        'adunit-ed8f00dd42dd2dd8',
        'adunit-a924c296ea9b23a5'
    ];
    LocalConfig.MiniProgramAppId = {
        Maike: 'wx6f1b9b81467cc3da',
    };
    LocalConfig.IsWxAuth = true;

    let urls = [
        { url: 'res/Adobe/Adobe.txt', type: Laya.Loader.BUFFER },
        { url: 'res/Adobe/Adobe_atlas0.jpg', type: Laya.Loader.IMAGE },
        { url: 'res/Adobe/Adobe_atlas2.png', type: Laya.Loader.IMAGE },
        { url: 'res/atlas/comp.png', type: Laya.Loader.IMAGE },
        { url: 'res/ChessBoard/ChessBoard.txt', type: Laya.Loader.BUFFER },
        { url: 'res/ChessBoard/ChessBoard_atlas2.png', type: Laya.Loader.IMAGE },
        { url: 'res/ChooseService/ChooseService.txt', type: Laya.Loader.BUFFER },
        { url: 'res/Icons/Icons.txt', type: Laya.Loader.BUFFER },
        { url: 'res/Icons/Icons_atlas2.png', type: Laya.Loader.IMAGE },
        { url: 'res/MainMenu/MainMenu.txt', type: Laya.Loader.BUFFER },
        { url: 'res/MainMenu/MainMenu_atlas2.png', type: Laya.Loader.IMAGE },
        { url: 'res/Player/Player.txt', type: Laya.Loader.BUFFER },
        { url: 'res/Public/Public.txt', type: Laya.Loader.BUFFER },
        { url: 'res/Public/Public_atlas1.jpg', type: Laya.Loader.IMAGE },
        { url: 'res/Public/Public_atlas1_1.jpg', type: Laya.Loader.IMAGE },
        { url: 'res/Public/Public_atlas2.png', type: Laya.Loader.IMAGE },
        { url: 'res/Public/Public_atlas2_1.png', type: Laya.Loader.IMAGE },
        { url: 'res/Public/Public_atlas2_2.png', type: Laya.Loader.IMAGE },
        { url: 'res/Public/Public_atlas2_3.png', type: Laya.Loader.IMAGE },
        { url: 'res/RoadToDiety/RoadToDiety.txt', type: Laya.Loader.BUFFER },
        { url: 'res/Sect/Sect.txt', type: Laya.Loader.BUFFER },
    ];

    let loginResUrls = [
        { url: 'res/ChooseService/ChooseService.txt', type: Laya.Loader.BUFFER },
        { url: 'res/LoadingUI/LoadingUI.txt', type: Laya.Loader.BUFFER },
        { url: 'res/LoadingUI/LoadingUI_atlas2.png', type: Laya.Loader.IMAGE },
    ];

    class EventClass {
        constructor(key, listener, target) {
            this.Key = key;
            this.Listener = listener;
            this.Target = target;
        }
    }
    class ListenerClass {
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
    var VersionConfig;
    (function (VersionConfig) {
        VersionConfig[VersionConfig["Develop"] = 0] = "Develop";
        VersionConfig[VersionConfig["Release"] = 1] = "Release";
    })(VersionConfig || (VersionConfig = {}));
    const PoolType = {
        Timer: 'Timer',
        HeadModel: 'HeadModel',
        BodyModel: 'BodyModel',
        PassbyTxt: 'PassbyTxt',
        FguiObj: 'FguiObj',
    };
    var AwardType;
    (function (AwardType) {
        AwardType[AwardType["Not"] = 0] = "Not";
        AwardType[AwardType["AD"] = 1] = "AD";
        AwardType[AwardType["Share"] = 2] = "Share";
    })(AwardType || (AwardType = {}));
    var AdConfigType;
    (function (AdConfigType) {
        AdConfigType[AdConfigType["Video"] = 0] = "Video";
        AdConfigType[AdConfigType["Share"] = 1] = "Share";
    })(AdConfigType || (AdConfigType = {}));
    var ShareWordEnum;
    (function (ShareWordEnum) {
        ShareWordEnum[ShareWordEnum["CardWords"] = 1] = "CardWords";
        ShareWordEnum[ShareWordEnum["HamsterWords"] = 2] = "HamsterWords";
        ShareWordEnum[ShareWordEnum["CoinWords"] = 3] = "CoinWords";
        ShareWordEnum[ShareWordEnum["OtherWords"] = 4] = "OtherWords";
    })(ShareWordEnum || (ShareWordEnum = {}));
    class ModelDataStruct {
        constructor(msp, ani, aniState) {
            this.msp = msp;
            this.ani = ani;
            this.aniState = aniState;
        }
    }
    const ConfirmWindowType = {
        Content: 1,
        Reward: 2,
        ContentAndReward: 3,
    };
    class PopupWindowData {
        constructor(content, yesBtnCallback, windowType, rewardData, btnYesTxt, btnCancelTxt) {
            this.Content = content;
            this.YesBtnCallback = yesBtnCallback;
            this.YesBtnContent = btnYesTxt ? btnYesTxt : '确定';
            this.CancelBtnContent = btnCancelTxt ? btnCancelTxt : '取消';
            this.WindowType = windowType;
            this.RewardData = rewardData;
        }
    }

    const ViewKit = {
        LoadingMain: {
            Key: "LoadingMain",
            Pkg: "LoadingUI",
            Com: "LoadingMain"
        },
        ChooseService: {
            Key: "ChooseService",
            PkgAdrs: "ChooseService/ChooseService",
            Pkg: "ChooseService",
            Com: "ChooseService"
        },
        LoadingProgress: {
            Key: "LoadingProgress",
            PkgAdrs: "res/LoadingUI/LoadingUI",
            Pkg: "LoadingUI",
            Com: "LoadingProgress"
        },
        MainMenu: {
            Key: "MainMenu",
            PkgAdrs: "res/MainMenu/MainMenu",
            Pkg: "MainMenu",
            Com: "MainMenu"
        },
        CultivationInfo: {
            Key: "CultivationInfo",
            PkgAdrs: "res/MainMenu/MainMenu",
            Pkg: "MainMenu",
            Com: "CultivationInfo"
        },
        TipsLabel: {
            Key: "TipsLabel",
            PkgAdrs: "Public/Public",
            Pkg: "Public",
            Com: "TipsLabel"
        },
        ResProductionTips: {
            Key: "ResProductionTips",
            PkgAdrs: "Adobe/Adobe",
            Pkg: "Adobe",
            Com: "ResProductionTips"
        },
        AdobeMain: {
            Key: "AdobeMain",
            PkgAdrs: "Adobe/Adobe",
            Pkg: "Adobe",
            Com: "AdobeMain"
        },
        PublicConfirmation: {
            Key: "PublicConfirmation",
            PkgAdrs: "Public/Public",
            Pkg: "Public",
            Com: "PublicConfirmation"
        },
        AdobeUpgrade: {
            Key: "AdobeUpgrade",
            PkgAdrs: "Adobe/Adobe",
            Pkg: "Adobe",
            Com: "AdobeUpgrade"
        },
        JoinSect: {
            Key: "JoinSect",
            Pkg: "Sect",
            Com: "JoinSect"
        },
        SectMain: {
            Key: "SectMain",
            Pkg: "Sect",
            Com: "SectMain"
        },
        TrainTower: {
            Key: "TrainTower",
            Pkg: "Sect",
            Com: "TrainTower"
        },
        SectTask: {
            Key: "SectTask",
            Pkg: "Sect",
            Com: "SectTask"
        },
        LearnKongfa: {
            Key: "LearnKongfa",
            Pkg: "Sect",
            Com: "LearnKongfa"
        },
        UpgradeKongfa: {
            Key: "UpgradeKongfa",
            Pkg: "Sect",
            Com: "UpgradeKongfa"
        },
        PlayerMain: {
            Key: "PlayerMain",
            Pkg: "Player",
            Com: "PlayerMain"
        },
        PlayerAttribution: {
            Key: "PlayerAttribution",
            Pkg: "Player",
            Com: "PlayerAttribution"
        },
        AddBagNum: {
            Key: "AddBagNum",
            Pkg: "Player",
            Com: "AddBagNum"
        },
        CultivationEfficiency: {
            Key: "CultivationEfficiency",
            Pkg: "MainMenu",
            Com: "CultivationEfficiency"
        },
        GmAddBagItem: {
            Key: "GmAddBagItem",
            Pkg: "Player",
            Com: "GmAddBagItem"
        },
        RoadToDietyMain: {
            Key: "RoadToDietyMain",
            Pkg: "RoadToDiety",
            Com: "RoadToDietyMain"
        },
        BattleInfo: {
            Key: "BattleInfo",
            Pkg: "RoadToDiety",
            Com: "BattleInfo"
        },
        SweepChapters: {
            Key: "SweepChapters",
            Pkg: "RoadToDiety",
            Com: "SweepChapters"
        },
        MonsterTower: {
            Key: "MonsterTower",
            Pkg: "RoadToDiety",
            Com: "MonsterTower"
        },
        FirstBloodRank: {
            Key: "FirstBloodRank",
            Pkg: "RoadToDiety",
            Com: "FirstBloodRank"
        },
        FriendCircle: {
            Key: "FriendCircle",
            Pkg: "RoadToDiety",
            Com: "FriendCircle"
        },
        ChessMap: {
            Key: "ChessMap",
            Pkg: "ChessBoard",
            Com: "ChessMap"
        },
        Rebirth: {
            Key: "Rebirth",
            Pkg: "MainMenu",
            Com: "Rebirth"
        },
        JingLibEntrance: {
            Key: "JingLibEntrance",
            Pkg: "Sect",
            Com: "JingLibEntrance"
        },
        JingLib: {
            Key: "JingLib",
            Pkg: "Sect",
            Com: "JingLib"
        },
    };
    class UIConfig {
        constructor() { }
    }
    UIConfig.LoginPackageLoaded = false;
    UIConfig.UIPkgs = [
        "Icons",
        "Public",
        "MainMenu",
    ];
    UIConfig.SubPkgs = [
        "subLibs",
    ];
    UIConfig.SortingOrder = {
        MainUI: 100,
        MsgSync: 150,
        SceneLoading: 200,
        NoviceGuide: 250,
        NewFunctionOpen: 260,
        Dialog: 300,
        Popup: 350,
        FullScreenShow: 450,
        NetSignal: 500,
        NetError: 550,
        SystemMsg: 600,
        MsgTips: 650,
        ClickEffect: 700,
        ServerTime: 1000,
        GmOrder: 1001,
    };
    UIConfig.SpinePath = {
        Yaoyao: {
            Left: "Spine/tuzi",
            Right: "Prefab/tuzi_2",
        },
        Dice: "Spine/spine_saizi",
        Nanzhu: {
            Left: "Spine/nanzhu",
            Right: "Prefab/nanzhu_2",
        },
        Yushengyi: {
            Left: "Spine/yushengyi",
            Right: "Prefab/yushengyi_2",
        },
    };
    UIConfig.SoundPath = {
        ButtonClick: "ui://Public/点击按钮",
    };
    UIConfig.PortraitPath = {
        Yaoyao: 'ui://Public/夭夭_全身',
    };
    UIConfig.SmallIconPath = {
        Yaoyao: 'ui://Public/夭夭小头像',
    };
    UIConfig.ShareImagePath = {
        InviteFriend: 'https://mmocgame.qpic.cn/wechatgame/HCloKXpYh4AIar21iavBHUs1BgS3f4uGsnYX5ibKduOiarAdgTV9GwJkStROPjbrakL/0',
    };
    UIConfig.SpineState = {
        Yaoyao: {
            Run: "run",
            Stand: "stand",
            Idle1: "idle1",
            Idle2: "idle2",
            Touch1: "touch1",
            Touch2: "touch2",
        },
    };
    UIConfig.GuiderName = {
        RoleMenuGuide: "RoleMenuGuide",
    };
    UIConfig.FontColor = {
        FightRec_Me: '#FFFF00',
    };

    const PREFIX_LOCALCONFIG_KEY = "configlocal_prefix";
    class DataConfig {
        constructor() {
            this.countNum = 0;
            this.configData = {};
        }
        static getInstance() {
            if (this._instance == undefined) {
                this._instance = new DataConfig();
            }
            return this._instance;
        }
        static get instance() {
            if (this._instance == undefined) {
                this._instance = new DataConfig();
            }
            return this._instance;
        }
        static getConfigByName(key) {
            return this.instance.getConfigByName(key);
        }
        static getConfigById(key, id) {
            return this.instance.getConfigById(key, id);
        }
        static searchConfig(config, param, value) {
            let target = searchArray(config, param, value);
            if (!target) {
                console.error('找不到配置：', param, value);
                return;
            }
            else {
                return target;
            }
        }
        static searchConfigById(config, id) {
            return this.searchConfig(config, 'Id', id);
        }
        static getLocalConfigById(key, id) {
            let config = this.getLocalConfig(key);
            return this.searchConfigById(config, id);
        }
        loadConfig(url, key, cb) {
            Laya.loader.load(url, Laya.Handler.create(this, config => {
                config = JSON.stringify(config);
                var configJson = JSON.parse(config);
                this.configData[key] = configJson;
                this.countNum++;
                cb && cb();
            }));
        }
        initConfig(cb) {
            Laya.loader.load(DataConfig.JSONHOT_URL, Laya.Handler.create(this, config => {
                config = JSON.stringify(config);
                let hotJsons = JSON.parse(config);
                if (Array.isArray(hotJsons)) {
                    let total = hotJsons.length;
                    hotJsons.forEach((cfg, idx) => {
                        if (idx >= total - 1) {
                            this.loadConfig(cfg.Url, cfg.Type, cb);
                        }
                        else {
                            this.loadConfig(cfg.Url, cfg.Type);
                        }
                    });
                }
            }));
        }
        storeConfig(key, data) {
            saveLocalStorage(PREFIX_LOCALCONFIG_KEY + key, data);
            this.countNum++;
        }
        saveAllConfig(data) {
            saveLocalJson(DataConfig.JSON_CONFIGS, data);
        }
        saveConfigVersion(data) {
            if (Array.isArray(data) == false || data.length == 0)
                return;
            let toLocal = new Array();
            data.forEach(v => {
                toLocal.push(new ConfigDataParam(v.TableId, v.Version));
            });
            saveLocalJson(DataConfig.JSON_CONFIGS, toLocal);
        }
        static getLocalConfig(key) {
            if (!key) {
                return console.error('Invalid config key: ', key);
            }
            let config = getLocalStorage(key);
            if (!config) {
                console.error('配置为空：', key);
            }
            else {
                return JSON.parse(config);
            }
        }
        static getConfigVersion(config) {
            return config && config.Version;
        }
        static getConfigVersionByKey(key) {
            return this.getConfigVersion(this.getLocalConfig(key));
        }
        static get localConfigs() {
            return getLocalJson(DataConfig.JSON_CONFIGS) || [];
        }
        getConfigByName(key) {
            return this.configData[key];
        }
        getConfigById(key, id) {
            if (this.configData[key]) {
                var configs = this.configData[key];
                for (var i = 0; i < configs.length; i++) {
                    if (configs[i]['id'] == id) {
                        return configs[i];
                    }
                }
            }
            return null;
        }
        getConfigsByType(key, type) {
            if (this.configData[key]) {
                var configs = this.configData[key];
                var result = new Array();
                for (var i = 0; i < configs.length; i++) {
                    if (configs[i]['type'] == type) {
                        result.push(configs[i]);
                    }
                }
                return result;
            }
            return null;
        }
    }
    DataConfig.IsConfigLoaded = false;
    DataConfig.JSONHOT_URL = 'res/config/JsonHot.json';
    DataConfig.SYNTHESIS_URL = 'res/config/Synthesis.json';
    DataConfig.LEVELUP_URL = 'res/config/LevelUp.json';
    DataConfig.KONGFU_URL = 'res/config/KongFu.json';
    DataConfig.KONGFU_ATTRIBUTE_URL = 'res/config/KongFuAttribute.json';
    DataConfig.WEAPON_TYPE_URL = 'res/config/WeaponType.json';
    DataConfig.YOKE_URL = 'res/config/Yoke.json';
    DataConfig.SECT_URL = 'res/config/Sect.json';
    DataConfig.HERO_URL = 'res/config/Hero.json';
    DataConfig.CULTIVATION_KEY = "Cultivation";
    DataConfig.SYNTHESIS_KEY = "synthesis";
    DataConfig.LEVELUP_KEY = "levelUp";
    DataConfig.KONGFU_KEY = "kongFu";
    DataConfig.KONGFU_ATTRIBUTE_KEY = "kongFuAttribute";
    DataConfig.WEAPON_TYPE_KEY = "weapon_Type";
    DataConfig.YOKE_KEY = "yoke";
    DataConfig.SECT_KEY = "sect";
    DataConfig.Hero_KEY = "Hero";
    DataConfig.JSON_CONFIGS = "json_configs";
    DataConfig.MAX_HEALTH = 100;
    DataConfig.INIT_GOLD = 5;
    DataConfig.ROUND_CD = 15;
    DataConfig.TROOP_NUM = 9;
    DataConfig.BAG_TOTAL = 8;
    DataConfig.HeroSect = 0;

    var ReqbodyKey;
    (function (ReqbodyKey) {
        ReqbodyKey["Config"] = "Config";
        ReqbodyKey["Login"] = "Login";
        ReqbodyKey["Upgrade"] = "Upgrade";
        ReqbodyKey["AdobeUiInfo"] = "AdobeUiInfo";
        ReqbodyKey["AdobeHireWorker"] = "AdobeHireWorker";
        ReqbodyKey["AdobeAddWorker"] = "AdobeAddWorker";
        ReqbodyKey["AdobeReduceWorker"] = "AdobeReduceWorker";
        ReqbodyKey["AdobeUpStone"] = "AdobeUpStone";
        ReqbodyKey["AdobeUpFood"] = "AdobeUpFood";
        ReqbodyKey["AdobeUpWood"] = "AdobeUpWood";
        ReqbodyKey["AdobeUpIron"] = "AdobeUpIron";
    })(ReqbodyKey || (ReqbodyKey = {}));
    let NetConfig = {
        RequestUrl: "http://7.lightpaw.com/truth",
        HttpRequestUrl: "https://9z9acv901g.execute-api.cn-northwest-1.amazonaws.com.cn/beta",
        LocalRequestUrl: "http://7.lightpaw.com/truth",
        LocalWechatRequestUrl: "http://svf37e.natappfree.cc/happy_travel",
        GMUrl: "http://7.lightpaw.com/happy_travel/reward",
        TempName: "",
    };
    var HttpConnectState;
    (function (HttpConnectState) {
        HttpConnectState[HttpConnectState["Error"] = 0] = "Error";
        HttpConnectState[HttpConnectState["Success"] = 1] = "Success";
    })(HttpConnectState || (HttpConnectState = {}));
    class ConfigDataParam {
        constructor(id, version, name, data) {
            this.TableId = id;
            this.Version = version;
            if (name) {
                this.TableName = name;
            }
            if (data) {
                this.Data = data;
            }
        }
    }
    class LoginReqData {
        constructor(name, pw, jscode, encryptedData, iv) {
            this.Name = name;
            this.Password = pw;
            this.JsCode = jscode;
            this.EncryptedData = encryptedData;
            this.Iv = iv;
        }
    }

    const LocalContent = {
        Invite: '邀请',
        NetError: '网络开小差',
        Yes: '确定',
        ComingSoon: '暂未开放',
        GetAward: '领取',
        FlyingTipsDefault: '恭喜获得奖励',
        ConsAward: "恭喜获得",
        ShareFailTips: "分享相同朋友圈无法获得奖励",
    };

    class GEvent {
        static AddListener(key, func, target) {
            if (!key || typeof (func) != "function")
                return;
            if (!this.Listeners[key]) {
                this.Listeners[key] = new ListenerClass();
            }
            this.Listeners[key].addListener(func, target);
        }
        static RemoveListener(key, func) {
            if (!key || typeof (func) != "function")
                return;
            let list = this.Listeners[key];
            if (!list)
                return;
            list.removeListener(func);
        }
        static Dispatch(key, ...data) {
            if (!key)
                return;
            let list = this.Listeners[key];
            if (!list)
                return;
            for (let i in list.Listeners) {
                if (typeof (list.Listeners[i]) != "function")
                    return;
                list.Listeners[i].call(list.Targets[i], ...data);
            }
        }
        static Clear(key) {
            if (!key)
                return;
            delete this.Listeners[key];
        }
    }
    GEvent.WX_REFRESH_FRIEND_DATA = 11001;
    GEvent.OPEN_RANK_UI = 11004;
    GEvent.CLOSE_RANK_UI = 11005;
    GEvent.Listeners = {};

    class EventDispather extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this._eventList = new Array();
        }
        static addEventListener(key, lisener) {
            GEvent.AddListener(key, lisener, this);
            this._staticEventList.push(new EventClass(key, lisener));
        }
        static dispatchEvent(key, ...data) {
            GEvent.Dispatch(key, ...data);
        }
        static clearEventListener() {
            this._staticEventList.forEach(evt => {
                GEvent.RemoveListener(evt.Key, evt.Listener);
                evt = null;
            });
        }
        static processEvent(key, listener, ...data) {
        }
        addEventListener(key, lisener) {
            GEvent.AddListener(key, lisener, this);
            this._eventList.push(new EventClass(key, lisener));
        }
        dispatchEvent(key, ...data) {
            GEvent.Dispatch(key, ...data);
        }
        removeEventListener() {
            this._eventList.forEach(evt => {
                GEvent.RemoveListener(evt.Key, evt.Listener);
                evt = null;
            });
        }
        processEvent(key, listener, ...data) {
        }
        onDestroy() {
            this.removeEventListener();
        }
    }
    EventDispather._staticEventList = new Array();
    var EventSpan;
    (function (EventSpan) {
        EventSpan[EventSpan["ModuleSpan"] = 100000] = "ModuleSpan";
        EventSpan[EventSpan["FuncSpan"] = 1000] = "FuncSpan";
        EventSpan[EventSpan["UISpan"] = 1] = "UISpan";
    })(EventSpan || (EventSpan = {}));
    var ModuleEtype;
    (function (ModuleEtype) {
        ModuleEtype[ModuleEtype["Scene"] = 1] = "Scene";
        ModuleEtype[ModuleEtype["Game"] = 2] = "Game";
        ModuleEtype[ModuleEtype["Net"] = 3] = "Net";
        ModuleEtype[ModuleEtype["Ui"] = 4] = "Ui";
        ModuleEtype[ModuleEtype["Npc"] = 5] = "Npc";
        ModuleEtype[ModuleEtype["Character"] = 6] = "Character";
        ModuleEtype[ModuleEtype["Asset"] = 7] = "Asset";
        ModuleEtype[ModuleEtype["Data"] = 8] = "Data";
        ModuleEtype[ModuleEtype["Audio"] = 9] = "Audio";
    })(ModuleEtype || (ModuleEtype = {}));
    var ModuleEid;
    (function (ModuleEid) {
        ModuleEid[ModuleEid["Scene"] = 100000] = "Scene";
        ModuleEid[ModuleEid["Net"] = 300000] = "Net";
        ModuleEid[ModuleEid["Game"] = 200000] = "Game";
        ModuleEid[ModuleEid["Data"] = 800000] = "Data";
        ModuleEid[ModuleEid["Ui"] = 400000] = "Ui";
        ModuleEid[ModuleEid["Character"] = 600000] = "Character";
    })(ModuleEid || (ModuleEid = {}));
    var ManagerEid;
    (function (ManagerEid) {
        ManagerEid[ManagerEid["GameManager"] = 200000] = "GameManager";
        ManagerEid[ManagerEid["NetManager"] = 300000] = "NetManager";
        ManagerEid[ManagerEid["UiManager"] = 400000] = "UiManager";
        ManagerEid[ManagerEid["AssetManager"] = 700000] = "AssetManager";
        ManagerEid[ManagerEid["DataManager"] = 800000] = "DataManager";
        ManagerEid[ManagerEid["AudioManager"] = 800000] = "AudioManager";
    })(ManagerEid || (ManagerEid = {}));
    let netModuleNum = 1;
    var NetModuleId;
    (function (NetModuleId) {
        NetModuleId[NetModuleId["HttpConnet"] = ModuleEid.Net + (netModuleNum++) * EventSpan.FuncSpan] = "HttpConnet";
    })(NetModuleId || (NetModuleId = {}));
    let netHttpConnectEidNum = 1;
    var NetHttpConnectEid;
    (function (NetHttpConnectEid) {
        NetHttpConnectEid[NetHttpConnectEid["ServiceRespond"] = NetModuleId.HttpConnet + netHttpConnectEidNum++] = "ServiceRespond";
        NetHttpConnectEid[NetHttpConnectEid["ConnectBegin"] = NetModuleId.HttpConnet + netHttpConnectEidNum++] = "ConnectBegin";
    })(NetHttpConnectEid || (NetHttpConnectEid = {}));
    let sceneModuleNum = 1;
    var SceneModuleId;
    (function (SceneModuleId) {
        SceneModuleId[SceneModuleId["Login"] = ModuleEid.Scene + (sceneModuleNum++) * EventSpan.FuncSpan] = "Login";
        SceneModuleId[SceneModuleId["Enter"] = ModuleEid.Scene + (sceneModuleNum++) * EventSpan.FuncSpan] = "Enter";
    })(SceneModuleId || (SceneModuleId = {}));
    let sceneLoginEidNum = 1;
    var SceneLoginEid;
    (function (SceneLoginEid) {
        SceneLoginEid[SceneLoginEid["ServiceChoosed"] = SceneModuleId.Login + sceneLoginEidNum++] = "ServiceChoosed";
        SceneLoginEid[SceneLoginEid["ConfigLoaded"] = SceneModuleId.Login + sceneLoginEidNum++] = "ConfigLoaded";
        SceneLoginEid[SceneLoginEid["PackageLoaded"] = SceneModuleId.Login + sceneLoginEidNum++] = "PackageLoaded";
        SceneLoginEid[SceneLoginEid["LoginSuccess"] = SceneModuleId.Login + sceneLoginEidNum++] = "LoginSuccess";
        SceneLoginEid[SceneLoginEid["SimProgressEnd"] = SceneModuleId.Login + sceneLoginEidNum++] = "SimProgressEnd";
    })(SceneLoginEid || (SceneLoginEid = {}));
    let sceneEnterEidNum = 1;
    var SceneEnterEid;
    (function (SceneEnterEid) {
        SceneEnterEid[SceneEnterEid["MainMenu"] = SceneModuleId.Enter + sceneEnterEidNum++] = "MainMenu";
    })(SceneEnterEid || (SceneEnterEid = {}));
    var DataModuleId;
    (function (DataModuleId) {
        DataModuleId[DataModuleId["Player"] = ModuleEid.Data + (sceneModuleNum++) * EventSpan.FuncSpan] = "Player";
        DataModuleId[DataModuleId["Adobe"] = ModuleEid.Data + (sceneModuleNum++) * EventSpan.FuncSpan] = "Adobe";
        DataModuleId[DataModuleId["Sect"] = ModuleEid.Data + (sceneModuleNum++) * EventSpan.FuncSpan] = "Sect";
    })(DataModuleId || (DataModuleId = {}));
    let dataPlayerEidNum = 1;
    var DataPlayerEid;
    (function (DataPlayerEid) {
        DataPlayerEid[DataPlayerEid["Refreshed"] = DataModuleId.Player + dataPlayerEidNum++] = "Refreshed";
        DataPlayerEid[DataPlayerEid["GmAddBagItemSuccess"] = DataModuleId.Player + dataPlayerEidNum++] = "GmAddBagItemSuccess";
    })(DataPlayerEid || (DataPlayerEid = {}));
    let dataAdobeEidNum = 1;
    var DataAdobeEid;
    (function (DataAdobeEid) {
        DataAdobeEid[DataAdobeEid["Refreshed"] = DataModuleId.Adobe + dataAdobeEidNum++] = "Refreshed";
    })(DataAdobeEid || (DataAdobeEid = {}));
    let dataSectEidNum = 1;
    var DataSectEid;
    (function (DataSectEid) {
        DataSectEid[DataSectEid["Refreshed"] = DataModuleId.Sect + dataSectEidNum++] = "Refreshed";
        DataSectEid[DataSectEid["GotInfo"] = DataModuleId.Sect + dataSectEidNum++] = "GotInfo";
        DataSectEid[DataSectEid["GotTaskInfo"] = DataModuleId.Sect + dataSectEidNum++] = "GotTaskInfo";
        DataSectEid[DataSectEid["GotTrainTowerInfo"] = DataModuleId.Sect + dataSectEidNum++] = "GotTrainTowerInfo";
    })(DataSectEid || (DataSectEid = {}));
    let uiModuleNum = 1;
    var uiModuleId;
    (function (uiModuleId) {
        uiModuleId[uiModuleId["Open"] = ModuleEid.Ui + (uiModuleNum++) * EventSpan.FuncSpan] = "Open";
        uiModuleId[uiModuleId["Notice"] = ModuleEid.Ui + (uiModuleNum++) * EventSpan.FuncSpan] = "Notice";
    })(uiModuleId || (uiModuleId = {}));
    let uiOpenEidNum = 1;
    var UiOpenEid;
    (function (UiOpenEid) {
        UiOpenEid[UiOpenEid["LoadingProgress"] = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan] = "LoadingProgress";
        UiOpenEid[UiOpenEid["Loading"] = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan] = "Loading";
        UiOpenEid[UiOpenEid["ChooseService"] = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan] = "ChooseService";
        UiOpenEid[UiOpenEid["MainMenu"] = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan] = "MainMenu";
        UiOpenEid[UiOpenEid["CultivationInfo"] = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan] = "CultivationInfo";
        UiOpenEid[UiOpenEid["AdobeMain"] = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan] = "AdobeMain";
        UiOpenEid[UiOpenEid["AdobePool"] = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan] = "AdobePool";
        UiOpenEid[UiOpenEid["AdobeUpgrad"] = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan] = "AdobeUpgrad";
        UiOpenEid[UiOpenEid["PublicConfirmation"] = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan] = "PublicConfirmation";
        UiOpenEid[UiOpenEid["JoinSect"] = uiModuleId.Open + (uiOpenEidNum++) * EventSpan.UISpan] = "JoinSect";
    })(UiOpenEid || (UiOpenEid = {}));
    let uiNoticeEidNum = 1;
    var UiNoticeEid;
    (function (UiNoticeEid) {
        UiNoticeEid[UiNoticeEid["CloseController"] = uiModuleId.Notice + uiNoticeEidNum++] = "CloseController";
        UiNoticeEid[UiNoticeEid["OpenFullScreen"] = uiModuleId.Notice + uiNoticeEidNum++] = "OpenFullScreen";
        UiNoticeEid[UiNoticeEid["CloseFullScreen"] = uiModuleId.Notice + uiNoticeEidNum++] = "CloseFullScreen";
        UiNoticeEid[UiNoticeEid["OpenPopup"] = uiModuleId.Notice + uiNoticeEidNum++] = "OpenPopup";
        UiNoticeEid[UiNoticeEid["ClosePopup"] = uiModuleId.Notice + uiNoticeEidNum++] = "ClosePopup";
    })(UiNoticeEid || (UiNoticeEid = {}));
    let characterModuleNum = 1;
    var CharacterModuleId;
    (function (CharacterModuleId) {
        CharacterModuleId[CharacterModuleId["Cultivation"] = ModuleEid.Character + (characterModuleNum++) * EventSpan.FuncSpan] = "Cultivation";
    })(CharacterModuleId || (CharacterModuleId = {}));
    let characterCultivationEidNum = 1;
    var CharacterCultivationEid;
    (function (CharacterCultivationEid) {
        CharacterCultivationEid[CharacterCultivationEid["Upgrade"] = CharacterModuleId.Cultivation + characterCultivationEidNum++] = "Upgrade";
        CharacterCultivationEid[CharacterCultivationEid["AutoChanged"] = CharacterModuleId.Cultivation + characterCultivationEidNum++] = "AutoChanged";
    })(CharacterCultivationEid || (CharacterCultivationEid = {}));
    let gameModuleNum = 1;
    var GameModuleId;
    (function (GameModuleId) {
        GameModuleId[GameModuleId["Adobe"] = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan] = "Adobe";
        GameModuleId[GameModuleId["Sect"] = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan] = "Sect";
        GameModuleId[GameModuleId["Kongfa"] = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan] = "Kongfa";
        GameModuleId[GameModuleId["Player"] = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan] = "Player";
        GameModuleId[GameModuleId["Road2Diety"] = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan] = "Road2Diety";
    })(GameModuleId || (GameModuleId = {}));
    let gameAdobeEidNum = 1;
    var GameAdobeEid;
    (function (GameAdobeEid) {
        GameAdobeEid[GameAdobeEid["HireWorkerSuccess"] = GameModuleId.Adobe + gameAdobeEidNum++] = "HireWorkerSuccess";
        GameAdobeEid[GameAdobeEid["AddWorkerSuccess"] = GameModuleId.Adobe + gameAdobeEidNum++] = "AddWorkerSuccess";
        GameAdobeEid[GameAdobeEid["ReduceWorkerSuccess"] = GameModuleId.Adobe + gameAdobeEidNum++] = "ReduceWorkerSuccess";
        GameAdobeEid[GameAdobeEid["UpgradeStoneSuccess"] = GameModuleId.Adobe + gameAdobeEidNum++] = "UpgradeStoneSuccess";
        GameAdobeEid[GameAdobeEid["UpgradeFoodSuccess"] = GameModuleId.Adobe + gameAdobeEidNum++] = "UpgradeFoodSuccess";
        GameAdobeEid[GameAdobeEid["UpgradeWoodSuccess"] = GameModuleId.Adobe + gameAdobeEidNum++] = "UpgradeWoodSuccess";
        GameAdobeEid[GameAdobeEid["UpgradeIronSuccess"] = GameModuleId.Adobe + gameAdobeEidNum++] = "UpgradeIronSuccess";
        GameAdobeEid[GameAdobeEid["UpgradePoolSuccess"] = GameModuleId.Adobe + gameAdobeEidNum++] = "UpgradePoolSuccess";
        GameAdobeEid[GameAdobeEid["UpgradeEnegySuccess"] = GameModuleId.Adobe + gameAdobeEidNum++] = "UpgradeEnegySuccess";
    })(GameAdobeEid || (GameAdobeEid = {}));
    let gameSectEidNum = 1;
    var GameSectEid;
    (function (GameSectEid) {
        GameSectEid[GameSectEid["JoinSectSuccess"] = GameModuleId.Sect + gameSectEidNum++] = "JoinSectSuccess";
        GameSectEid[GameSectEid["LearnKFSuccess"] = GameModuleId.Sect + gameSectEidNum++] = "LearnKFSuccess";
        GameSectEid[GameSectEid["AddKfNum"] = GameModuleId.Sect + gameSectEidNum++] = "AddKfNum";
        GameSectEid[GameSectEid["StartTask"] = DataModuleId.Sect + dataSectEidNum++] = "StartTask";
        GameSectEid[GameSectEid["GrabTaskAwardSuccess"] = DataModuleId.Sect + dataSectEidNum++] = "GrabTaskAwardSuccess";
        GameSectEid[GameSectEid["StartNormalTowerTrain"] = DataModuleId.Sect + dataSectEidNum++] = "StartNormalTowerTrain";
        GameSectEid[GameSectEid["EndNormalTowerTrain"] = DataModuleId.Sect + dataSectEidNum++] = "EndNormalTowerTrain";
        GameSectEid[GameSectEid["StartBossTowerTrain"] = DataModuleId.Sect + dataSectEidNum++] = "StartBossTowerTrain";
        GameSectEid[GameSectEid["EndBossTowerTrain"] = DataModuleId.Sect + dataSectEidNum++] = "EndBossTowerTrain";
        GameSectEid[GameSectEid["AfkSect"] = DataModuleId.Sect + dataSectEidNum++] = "AfkSect";
    })(GameSectEid || (GameSectEid = {}));
    let gameKongfaEidNum = 1;
    var GameKongfaEid;
    (function (GameKongfaEid) {
        GameKongfaEid[GameKongfaEid["UpgradeKFSuccess"] = GameModuleId.Kongfa + gameKongfaEidNum++] = "UpgradeKFSuccess";
    })(GameKongfaEid || (GameKongfaEid = {}));
    let gamePlayerEidNum = 1;
    var GamePlayerEid;
    (function (GamePlayerEid) {
        GamePlayerEid[GamePlayerEid["GetBagInfo"] = GameModuleId.Player + gamePlayerEidNum++] = "GetBagInfo";
        GamePlayerEid[GamePlayerEid["BagSortSuccess"] = GameModuleId.Player + gamePlayerEidNum++] = "BagSortSuccess";
        GamePlayerEid[GamePlayerEid["BagExpandSuccess"] = GameModuleId.Player + gamePlayerEidNum++] = "BagExpandSuccess";
        GamePlayerEid[GamePlayerEid["BagExpandFail"] = GameModuleId.Player + gamePlayerEidNum++] = "BagExpandFail";
        GamePlayerEid[GamePlayerEid["SoldBagItemSuccess"] = GameModuleId.Player + gamePlayerEidNum++] = "SoldBagItemSuccess";
        GamePlayerEid[GamePlayerEid["UseBagItemSuccess"] = GameModuleId.Player + gamePlayerEidNum++] = "UseBagItemSuccess";
    })(GamePlayerEid || (GamePlayerEid = {}));
    let gameRoad2DietyEidNum = 1;
    var GameRoad2DietyaEid;
    (function (GameRoad2DietyaEid) {
        GameRoad2DietyaEid[GameRoad2DietyaEid["GoMonsterResult"] = GameModuleId.Road2Diety + gameRoad2DietyEidNum++] = "GoMonsterResult";
        GameRoad2DietyaEid[GameRoad2DietyaEid["FailGoMonster"] = GameModuleId.Road2Diety + gameRoad2DietyEidNum++] = "FailGoMonster";
        GameRoad2DietyaEid[GameRoad2DietyaEid["InvitedFriend"] = GameModuleId.Road2Diety + gameRoad2DietyEidNum++] = "InvitedFriend";
        GameRoad2DietyaEid[GameRoad2DietyaEid["BattleRecordEnd"] = GameModuleId.Road2Diety + gameRoad2DietyEidNum++] = "BattleRecordEnd";
        GameRoad2DietyaEid[GameRoad2DietyaEid["Monster1stBlood"] = GameModuleId.Road2Diety + gameRoad2DietyEidNum++] = "Monster1stBlood";
    })(GameRoad2DietyaEid || (GameRoad2DietyaEid = {}));

    class Resource extends Laya.Script {
        constructor() {
            super();
        }
        static get inst() {
            if (!this._instance) {
                this._instance = new Resource();
            }
            return this._instance;
        }
        static load(url, thisArg, complete, progress, resType) {
            Laya.loader.load(url, Laya.Handler.create(thisArg, complete), Laya.Handler.create(thisArg, progress), resType);
        }
        static addUiPackage(pkgName) {
            if (!this._addedUiPackages[pkgName]) {
                console.log('加载UI包：', pkgName);
                fgui.UIPackage.addPackage('res/' + pkgName + '/' + pkgName);
                this._addedUiPackages[pkgName] = true;
            }
        }
        static getRes(path) {
            return Laya.Loader.getRes(path);
        }
        static releaseRes() {
            Laya.Resource.destroyUnusedResources();
        }
        onAwake() {
            if (Resource._instance == null) {
                Resource._instance = this;
            }
            else {
                console.error("Resource instance must be only one");
            }
        }
    }
    Resource._instance = null;
    Resource._addedUiPackages = {};

    function searchArray(arr, param, value) {
        if (Array.isArray(arr) == false || arr.length == 0) {
            console.error('Invalid or empty array');
            return;
        }
        let target;
        arr.some(v => {
            if (v[param] == value) {
                target = v;
                return true;
            }
        });
        return target;
    }
    function isMiniGame() {
        return Laya.Browser.onMiniGame;
    }
    function isOnWeixin() {
        return Laya.Browser.onWeiXin;
    }
    function saveLocalStorage(key, value) {
        if (!value)
            return;
        Laya.LocalStorage.setItem(key, value);
    }
    function getLocalStorage(key) {
        return Laya.LocalStorage.getItem(key);
    }
    function saveLocalJson(key, value) {
        if (!value)
            return;
        Laya.LocalStorage.setJSON(key, value);
    }
    function getLocalJson(key) {
        return Laya.LocalStorage.getJSON(key);
    }
    class ItemBtnPartsClass {
        constructor(btn) {
            this.Text_Title = btn.getChild('title').asTextField;
            this.Text_AwardNum = btn.getChild('Text_AwardNum').asTextField;
        }
    }
    function fillItemData(itemdata, btn) {
        if (!itemdata || !btn)
            return;
        let parts = new ItemBtnPartsClass(btn);
    }
    function fillItemListData(itemdataArr, list) {
        if (!itemdataArr || !list)
            return;
        itemdataArr.forEach(v => {
            fillItemData(v, list.addItemFromPool().asCom);
        });
    }
    function onClickListItem(thisArg, func, data, item) {
        let idx = item.parent.asList.getChildIndex(item);
        func.call(thisArg, idx + 1, ...data);
    }
    function clickListCallback(list, thisArg, func, ...data) {
        if (!list || !func)
            return;
        list.on(fgui.Events.CLICK_ITEM, thisArg, onClickListItem, [thisArg, func, data]);
    }

    class HttpReqbodyBase {
        constructor(modCode, reqCode, session, accName, reqdata) {
            if (typeof (reqdata) == "string") {
                reqdata = JSON.parse(reqdata);
            }
            this.ModuleCode = modCode;
            this.ReqCode = reqCode;
            this.Session = session;
            this.AccountKey = accName;
            this.ReqData = reqdata;
        }
    }
    class DataStruct extends EventDispather {
        static SendReq(reqData) {
            this.reqBody.ReqData = reqData;
            this._NetMgr = new HttpManager();
            this._NetMgr.Connect('', this.reqBody, this.onResponse.bind(this));
        }
        static set ReqBody(body) {
            if (!this.reqBody)
                this.reqBody = body;
        }
        static set Data(data) { }
        static onConnectEnd(data) { }
        static onResponse(data) {
            if (data && data.RespData != null) {
                this.Data = data.RespData;
            }
            this.onConnectEnd(data);
            this.reqBody.ReqData = null;
        }
        static get NetMgr() {
            if (!this._NetMgr) {
                this._NetMgr = new HttpManager();
            }
            return this._NetMgr;
        }
        static Connect(reqkey, reqbody, callback, isShowLoading, IsGm) {
            this.NetMgr.Connect(reqkey, reqbody, this.OnHttpRequestComplete.bind(this), isShowLoading, IsGm);
            this._reqkeys.push(reqkey);
        }
        static OnHttpRequestComplete(data, reqkey, reqData) {
        }
        ;
    }
    DataStruct._reqkeys = new Array();
    class DevReqBody extends HttpReqbodyBase {
        constructor(modCode, reqCode, reqData) {
            if (!LoginData.Session) {
                console.error('Pls login first');
                return;
            }
            super(modCode, reqCode, LoginData.Session, LoginData.AccountKey, reqData);
        }
        static get isInited() {
            return this._isBodyInited;
        }
    }
    DevReqBody._isBaseBodyInited = false;
    DevReqBody._isBodyInited = false;
    class PlayerData {
        static set Data(data) {
            if (null != data.NickName) {
                this.NikeName = data.NickName;
            }
            if (null != data.Avatar) {
                this.Avatar = data.Avatar;
            }
            GEvent.Dispatch(DataPlayerEid.Refreshed);
        }
    }
    PlayerData.Point = 0;
    class ConfigData extends DataStruct {
        static set Data(resp_data) {
            setConfigData(resp_data);
        }
    }
    function setConfigData(resp_data) {
        console.log('配置数据：', resp_data);
        if (!resp_data)
            return;
        DataConfig.instance.saveConfigVersion(resp_data);
        for (let i in resp_data) {
            if (resp_data[i]) {
                DataConfig.instance.storeConfig(resp_data[i].TableId, resp_data[i].Data);
            }
        }
        DataConfig.IsConfigLoaded = true;
        GEvent.Dispatch(SceneLoginEid.ConfigLoaded);
    }
    class LoginData extends DataStruct {
        static get IsLogined() {
            return this._isLogined;
        }
        static set Data(data) {
            if (data.AccountBaseInfo) {
                this.Session = data.AccountBaseInfo.VerifySession;
                this.AccountKey = data.AccountBaseInfo.AccountKey;
                PlayerData.Data = data.AccountBaseInfo;
            }
            if (data.XiuweiInfo) {
                PlayerData.Data = data.XiuweiInfo;
            }
            if (!this._isLogined) {
                this._isLogined = true;
            }
            this.dispatchEvent(SceneLoginEid.LoginSuccess);
        }
    }
    LoginData._isLogined = false;
    class UpgradeData extends DataStruct {
        static set Data(respData) {
            if (respData.XiuweiInfo) {
                PlayerData.Data = respData.XiuweiInfo;
            }
            this.dispatchEvent(CharacterCultivationEid.Upgrade, respData.UpOk);
        }
    }

    let platform = window['wx'];

    class BaseManager extends EventDispather {
        static get Inst() {
            if (!SceneManager.CurScene) {
                console.error('Please creae a scene first!');
                return;
            }
            if (!this._inst) {
                this._inst = SceneManager.CurScene.getComponent(this);
                if (!this._inst) {
                    this._inst = SceneManager.CurScene.addComponent(this);
                }
            }
            return this._inst;
        }
        constructor() {
            super();
        }
        onDestroy() {
            this.removeEventListener();
        }
    }

    let ViewMap = {};
    let OpenedCtrl = new Array();
    let CtrlMapArray = new Array();
    class CtrlLisener {
        constructor(obj, lisener) {
            if (!obj)
                return;
            this.Obj = obj;
            this.Lisener = lisener;
        }
        remove() {
            this.Obj.offClick(this, this.Lisener);
        }
    }
    class UiCVBase extends EventDispather {
        onDestroy() {
            this.removeEventListener();
        }
    }
    class Controller extends UiCVBase {
        constructor(cKey, view, isFullScreen, isPopup) {
            super();
            this.IsOpen = false;
            this.IsDestroyed = true;
            this.IsShow = false;
            this.IsPopup = false;
            this.IsFullScreen = false;
            this.IsDefault = false;
            this.IsInteractive = true;
            this.lisenterArray = new Array();
            if (!cKey || !view) {
                console.error("Invalid key or view");
                return;
            }
            if (!OpenedCtrl[cKey]) {
                OpenedCtrl[cKey] = this;
            }
            let vKey = view.Key;
            if (!ViewMap[vKey]) {
                ViewMap[vKey] = new view(vKey);
            }
            this.multitonKey = cKey;
            this.View = ViewMap[vKey];
            this.IsFullScreen = isFullScreen == true;
            this.IsPopup = isPopup == true;
        }
        static set Key(key) { this.cKey = key; }
        static get Key() { return this.cKey; }
        static setCtrl(id) {
            CtrlMapArray[id] = this;
        }
        static init(cKey, view, vKey) {
            this.Key = cKey;
            this.view = view;
            this.view.Key = vKey ? vKey : cKey;
            CtrlMapArray[this.Key] = this;
        }
        createView(view, key) {
            this.View = new view(key);
        }
        create() {
            if (!this.View) {
                console.error("No view created!");
                return false;
            }
            this.IsDestroyed = false;
            this.View.Initialize();
            this.onCreate();
            return true;
        }
        open(_data) {
            this.IsOpen = true;
            this.Data = _data;
            this.show(_data);
            this.openOver();
        }
        openOver() {
            if (this.IsFullScreen) {
                this.dispatchEvent(UiNoticeEid.OpenFullScreen, this.multitonKey);
            }
            if (this.IsPopup) {
                this.SortingOrder(UIConfig.SortingOrder.Popup);
            }
            this.onOpen(this.Data);
        }
        addButtonLisenter(object, fun, data, thisArg) {
            if (object == null || fun == null) {
                console.error("object or fun is null");
                return;
            }
            thisArg = thisArg ? thisArg : this;
            object.onClick(thisArg, fun, data);
            this.lisenterArray.push(new CtrlLisener(object, fun));
        }
        close() {
            if (this.IsOpen == false)
                return;
            this.IsOpen = false;
            this.onClose();
            this.dispatchEvent(UiNoticeEid.CloseController, this.multitonKey);
            if (this.IsPopup) {
                this.dispatchEvent(UiNoticeEid.ClosePopup, this.multitonKey);
            }
            if (this.IsFullScreen) {
                this.dispatchEvent(UiNoticeEid.CloseFullScreen, this.multitonKey);
            }
            OpenedCtrl[this.multitonKey] = null;
            for (let i in this.lisenterArray) {
                this.lisenterArray[i].remove();
                this.lisenterArray[i] = null;
            }
            this.removeEventListener();
            Laya.timer.clearAll(this);
            if (this.IsDestroyed == false) {
                this.IsDestroyed = true;
                if (this.View && this.View.destroy) {
                    this.View.destroy();
                    this.View = null;
                }
            }
            this.IsOpen = false;
            this.IsShow = false;
            this.Data = null;
            this.destroy();
        }
        show(data) {
            data = data ? data : this.Data;
            if (this.IsDestroyed) {
                this.open(data);
            }
            if (!this.IsOpen) {
                return false;
            }
            if (this.IsShow) {
                return false;
            }
            if (!this.IsDestroyed) {
                this.View.show(data);
            }
            this.IsShow = true;
            this.onShow(data);
            return true;
        }
        hide() {
            if (!this.IsShow)
                return false;
            if (!this.IsDestroyed) {
                this.View.hide();
            }
            this.IsShow = false;
            this.onHide();
            return true;
        }
        SortingOrder(order) {
            if (!this.IsDestroyed) {
                this.View.SortingOrder(order);
            }
        }
        interactive(canTouch) {
            if (canTouch == null)
                return;
            this.IsInteractive = canTouch;
            if (!this.IsDestroyed) {
                this.View.interactive(canTouch);
            }
            this.onInteractive(canTouch);
        }
        refreshUI(data) {
            this.View.refreshUI(data);
        }
        onClose() { }
        onCreate() { }
        onOpen(data) { }
        onShow(data) { }
        onHide() { }
        onInteractive(canTouch) { }
    }
    class View extends UiCVBase {
        constructor(key) {
            super();
            this.lisenterArray = new Array();
            this.CallbackList = [];
            this.multitonKey = key;
            this._isAlive = true;
            if (!ViewMap[key]) {
                ViewMap[key] = this;
            }
            this.uiCfg = ViewKit[key];
            if (!this.uiCfg) {
                console.error('Incorrect view key!');
                return;
            }
        }
        static set Key(key) { this.vKey = key; }
        static get Key() { return this.vKey; }
        get UI() {
            return this._UI;
        }
        get IsAlive() {
            return this._isAlive;
        }
        Initialize() {
            if (!this._UI) {
                this._UI = SpawnManager.LoadView(this.uiCfg.Pkg, this.uiCfg.Com);
                if (!this._UI) {
                    console.error('Invalid Ui com: ', this.uiCfg.Key);
                }
                else {
                    this.Window = this.UI.getChild('Window');
                    this.LoadView();
                }
            }
        }
        getInstance(key) {
            if (!key)
                return null;
            if (!ViewMap[key]) {
                ViewMap[key] = new View(key);
            }
            return ViewMap[key];
        }
        setCallback(callbackKey, callback) {
            this.CallbackList[callbackKey] = callback;
        }
        invokeCallback(callbackKey, ...args) {
            if (typeof (callbackKey) != 'string' || typeof (this.CallbackList[callbackKey]) != 'function')
                return;
            this.CallbackList[callbackKey](...args);
        }
        addButtonLisenter(object, fun, data, thisArg) {
            if (object == null || fun == null) {
                console.error("object or fun is null");
                return;
            }
            thisArg = thisArg ? thisArg : this;
            object.onClick(thisArg, fun, data);
            this.lisenterArray.push(new CtrlLisener(object, fun));
        }
        clickListCallback(thisArg, func, ...data) {
            clickListCallback(this.List, thisArg, func, ...data);
        }
        destroy() {
            this.onDestroy();
            this._isAlive = false;
            this.removeEventListener();
            Laya.timer.clearAll(this);
            for (let i in this.lisenterArray) {
                this.lisenterArray[i].remove();
                this.lisenterArray[i] = null;
            }
            delete ViewMap[this.multitonKey];
            this._UI.dispose();
        }
        onDestroy() { }
        LoadView() { }
        refreshUI(data) { }
        interactive(canTouch) {
            this._UI.touchable = canTouch;
        }
        SortingOrder(order) {
            this._UI.sortingOrder = order;
        }
        show(data) {
            this._UI.visible = true;
        }
        hide() {
            this._UI.visible = false;
        }
    }

    class ChooseServiceController extends Controller {
        onCreate() {
            this.SortingOrder(UIConfig.SortingOrder.NetSignal);
        }
        onOpen(data) {
            this.addButtonLisenter(this.View.Local, this.openLocalService);
            this.View.AccountName.text = LocalConfig.GetAcountName();
        }
        openLocalService() {
            let account = this.View.AccountName.text;
            if (typeof (account) == 'string' && account.length > 0) {
                NetConfig.TempName = account;
                LocalConfig.SaveAcountName(account);
            }
            NetConfig.RequestUrl = NetConfig.LocalRequestUrl;
            this.close();
        }
        openHttpService() {
            NetConfig.RequestUrl = NetConfig.HttpRequestUrl;
            this.close();
        }
        openLocalWechatService() {
            NetConfig.RequestUrl = NetConfig.LocalWechatRequestUrl;
            console.log('请求地址：', NetConfig.RequestUrl);
            this.close();
        }
        onClose() {
            LocalConfig.IsChoosedService = true;
            this.dispatchEvent(SceneLoginEid.ServiceChoosed);
        }
    }

    class ChooseServiceView extends View {
        LoadView() {
            this.Local = this.UI.getChild("Local");
            this.Http = this.UI.getChild("Http");
            this.LocalWechat = this.UI.getChild("LocalWechat");
            this.AccountName = this.UI.getChild("AccountName").asTextInput;
        }
        onDistroy() {
        }
    }

    class LoadingController extends Controller {
        onOpen(data) {
            this.View.Show_C.selectedIndex = 1;
            this.addEventListener(NetHttpConnectEid.ConnectBegin, this.openHttpStart);
            this.addEventListener(NetHttpConnectEid.ServiceRespond, this.onHttpRespond);
        }
        showLoading() {
            this.View.Show_C.selectedIndex = 1;
        }
        hideLoading() {
            this.View.Show_C.selectedIndex = 0;
        }
        onHttpRespond() {
            this.hide();
        }
        openHttpStart() {
            this.show();
        }
        onClose() {
        }
    }

    class LoadingProgressController extends Controller {
        constructor() {
            super(...arguments);
            this.Progress = 0;
            this.IsLoaded = false;
            this.PkgNum = 0;
            this.ResNum = 0;
        }
        onOpen(data) {
            this.View.UI.text = "0%";
            this.setProgressNumber();
            this.simProgress();
            this.addEventListener(SceneLoginEid.PackageLoaded, this.onResLoaded);
            this.addEventListener(SceneLoginEid.LoginSuccess, this.onLoginSuccess);
            this.addEventListener(SceneLoginEid.ConfigLoaded, this.tryClose);
        }
        setProgressNumber() {
            this.ResNum = loginResUrls.length + urls.length + 5;
            if (isMiniGame()) {
                this.ResNum += UIConfig.SubPkgs.length;
            }
        }
        showUiProgress(progress, pkgName) {
            pkgName = pkgName || '';
            this.View.UI.text = 'Loading ui ' + pkgName + ': ' + progress * 100 + '%';
        }
        simProgress() {
            this.Progress += 100 / this.ResNum;
            let progress = Math.ceil(this.Progress);
            progress = progress > 100 ? 100 : progress;
            this.View.UI.text = progress + "%";
            if (this.Progress >= 100) {
                this.tryClose();
                return;
            }
            Laya.timer.once(100, this, this.simProgress);
        }
        addProgress(addProgress) {
            this.Progress += 100 / this.PkgNum;
            console.log(this.Progress);
            let progress = Math.ceil(this.Progress);
            progress = progress > 100 ? 100 : progress;
            this.View.UI.text = progress + "%";
            if (this.Progress >= 100) {
                this.IsLoaded = true;
                this.dispatchEvent(SceneLoginEid.PackageLoaded);
                this.showWxLogin();
            }
        }
        showWxLogin() {
            if (!isMiniGame() || LocalConfig.IsWxAuth || !this.IsLoaded)
                return;
            this.View.showWxLogin();
        }
        showConfigProgress() {
            if (DataConfig.IsConfigLoaded == false) {
                this.View.UI.text = "加载配置中";
            }
        }
        showLoginProgress() {
            this.View.UI.text = "登录中";
        }
        onLoginSuccess() {
            this.tryClose();
        }
        onResLoaded() {
            this.IsLoaded = true;
            this.tryClose();
        }
        tryClose() {
            if (this.Progress < 100)
                return;
            if (VersionManager.Version == VersionConfig.Develop) {
                if (!LocalConfig.IsChoosedService)
                    return;
            }
            if (DataConfig.IsConfigLoaded == false) {
                this.showConfigProgress();
                return;
            }
            if (LoginData.IsLogined != true) {
                this.showLoginProgress();
                return;
            }
            if (!UIConfig.LoginPackageLoaded)
                return;
            this.close();
        }
        onClose() {
            this.dispatchEvent(SceneLoginEid.SimProgressEnd);
        }
    }

    class LoadingProgressView extends View {
        LoadView() {
            this.UI.sortingOrder = UIConfig.SortingOrder.SceneLoading;
            this.Login_C = this.UI.getController('Login_C');
        }
        showWxLogin() {
            this.Login_C.selectedIndex = 1;
        }
        onDestroy() {
        }
    }

    class LoadingView extends View {
        LoadView() {
            this.UI.sortingOrder = UIConfig.SortingOrder.NetSignal;
            this.Show_C = this.UI.getController("Show_C");
        }
        onDestroy() {
        }
    }

    let cKey = ViewKit.PublicConfirmation.Key;
    class PublicConfirmationController extends Controller {
        constructor() {
            super(cKey, PublicConfirmationView, false, true);
        }
        onOpen(data) {
            this.addButtonLisenter(this.View.Btn_Close, this.close);
            this.addButtonLisenter(this.View.Btn_Cancel, this.close);
            this.addButtonLisenter(this.View.Btn_Yes, this.yesBtnOnClick);
            if (data == null || data instanceof PopupWindowData == false) {
                console.error('Invalid popup window data.');
                return;
            }
            else {
                this.Callback = data.YesBtnCallback;
                this.refreshUI(data);
            }
        }
        yesBtnOnClick() {
            if (this.Callback) {
                this.Callback();
            }
            this.close();
        }
        onClose() {
        }
    }
    PublicConfirmationController.cKey = cKey;

    let vKey = ViewKit.PublicConfirmation.Key;
    class PublicConfirmationView extends View {
        constructor() {
            super(vKey);
        }
        LoadView() {
            this.Btn_Close = this.Window.getChild('Btn_Close').asButton;
            this.Btn_Yes = this.Window.getChild('Btn_Yes').asButton;
            this.Btn_Cancel = this.Window.getChild('Btn_Cancel').asButton;
            this.List_Content = this.Window.getChild('List_Content').asList;
            this.List_Reward = this.Window.getChild('List_Reward').asList;
            this.Content_C = this.Window.getController('Content_C');
            this.BtnType_C = this.Window.getController('BtnType_C');
        }
        refreshUI(data) {
            if (!data)
                return;
            this.Content_C.selectedIndex = data.WindowType - 1;
            switch (data.WindowType) {
                case ConfirmWindowType.Content:
                    this.BtnType_C.selectedIndex = 0;
                    this.fillContents(data.Content);
                    break;
                case ConfirmWindowType.Reward:
                    this.BtnType_C.selectedIndex = 1;
                    this.fillRewards(data.RewardData);
                    break;
                case ConfirmWindowType.ContentAndReward:
                    this.BtnType_C.selectedIndex = 0;
                    this.fillContents(data.Content);
                    this.fillRewards(data.RewardData);
                    break;
            }
            if (data.YesBtnContent) {
                this.Btn_Yes.text = data.YesBtnContent;
            }
            if (data.CancelBtnContent) {
                this.Btn_Cancel.text = data.CancelBtnContent;
            }
        }
        fillContents(data) {
            this.List_Content.removeChildrenToPool();
            data.forEach(v => {
                this.List_Content.addItemFromPool().text = v;
            });
        }
        fillRewards(rewardData) {
            fillItemListData(rewardData, this.List_Reward);
        }
        onDestroy() {
        }
    }
    PublicConfirmationView.vKey = vKey;

    class LoadingIconManager extends BaseManager {
        onAwake() {
            this.Init();
        }
        Init() {
            if (this.IsInited == true)
                return;
            this.IsInited = true;
            this.Controller = UIManager.openController(LoadingController);
        }
        ShowLoading() {
            if (!this.IsInited)
                return;
            this.Controller.showLoading();
        }
        HideLoading() {
            if (!this.IsInited)
                return;
            this.Controller.hideLoading();
        }
    }

    class LoadingProgressManager extends BaseManager {
        onAwake() {
            this.Init();
        }
        Init() {
            if (this.IsInited == true)
                return;
            this.IsInited = true;
            this.Controller = UIManager.openController(LoadingProgressController);
            this.addEventListener(SceneLoginEid.SimProgressEnd, this.onLoadingComplete);
        }
        showUiProgress(progress, pkgName) {
            if (!this.IsInited)
                return;
            this.Controller.showUiProgress(progress, pkgName);
        }
        ShowWxLogin() {
            if (!this.IsInited)
                return;
            this.Controller.showWxLogin();
        }
        showConfigProgress() {
            if (!this.IsInited)
                return;
            this.Controller.showConfigProgress();
        }
        onLoadingComplete() {
            LocalConfig.IsSimProgressEnd = true;
            this.IsInited = false;
            this.Controller = null;
            this.destroy();
        }
    }

    class HttpManager extends BaseManager {
        constructor() {
            super(...arguments);
            this.ConnectTimes = 0;
            this.IsShowLoading = false;
            this.IsConnecting = false;
        }
        onAwake() {
        }
        static set RequestUrl(url) {
            NetConfig.RequestUrl = url;
        }
        Connect(reqkey, data, callback, isShowLoading, IsGm) {
            if (!data)
                return;
            this._hr = new XMLHttpRequest();
            this._reqKey = reqkey;
            if (IsGm)
                this._hr.open("post", NetConfig.GMUrl, true);
            else
                this._hr.open("post", NetConfig.RequestUrl, true);
            this._hr.onreadystatechange = this.OnHttpRequestComplete.bind(this);
            this._hr.timeout = 5000;
            this._hr.ontimeout = this.OnTimeout.bind(this);
            this._hr.onerror = this.OnHttpRequestError.bind(this);
            if (typeof (data.ReqData) == 'string') {
                data.ReqData = JSON.parse(data.ReqData);
            }
            this.Data = data;
            this.Callback = callback;
            this.IsShowLoading = isShowLoading;
            this.ConnectTimes++;
            this._hr.responseType = "text";
            if (typeof data.ReqData != 'string') {
                data.ReqData = JSON.stringify(data.ReqData);
            }
            this._hr.send(JSON.stringify(data));
            this.IsConnecting = true;
            if (isShowLoading == true) {
                LoadingIconManager.Inst.ShowLoading();
            }
            else {
                LoadingIconManager.Inst.HideLoading();
                setTimeout(this.LateShowLoading.bind(this), 3000);
            }
            this.dispatchEvent(NetHttpConnectEid.ConnectBegin);
        }
        LateShowLoading() {
            if (this.IsConnecting == true) {
                LoadingIconManager.Inst.ShowLoading();
            }
        }
        OnHttpRequestError(e) {
            console.log(e);
            this.tryAutoReconnect();
        }
        OnTimeout(e) {
            console.log(e);
            this.tryAutoReconnect();
        }
        OnHttpRequestProgress(e) {
            console.log("加载进度>>>>>>>>>>>>>>>>>>>", e.loaded / e.total);
        }
        _removeRequest() {
            if (this.IsConnecting)
                return;
            this._hr = null;
            this.Data = null;
            HttpManager._hmMap[this._reqKey] = null;
        }
        tryAutoReconnect() {
            if (this.ConnectTimes < 3) {
                Laya.timer.once(500, this, this.autoReConnect);
            }
            else {
                this.showConnectWindow();
            }
        }
        autoReConnect() {
            this.Connect('', this.Data, this.Callback, true);
        }
        showConnectWindow() {
            this.IsConnecting = false;
            LoadingIconManager.Inst.HideLoading();
            let content = [LocalContent.NetError];
            let self = this;
            UIManager.openConfirmWindow(content, function () {
                self.Connect('', self.Data, self.Callback, self.IsShowLoading);
            });
        }
        OnHttpRequestComplete() {
            if (this._hr.readyState != 4 || (this._hr.status < 200 || this._hr.status >= 400))
                return;
            this.IsConnecting = false;
            this.ConnectTimes = 0;
            if (!this._hr.responseText)
                return;
            let data = JSON.parse(this._hr.responseText);
            console.log('>>>>>>>>>>>>>>>>>连接状态：', data.RespCode, data.RespMsg);
            if (typeof (this.Callback) == 'function') {
                this.Callback(data);
            }
            this._removeRequest();
            this.dispatchEvent(NetHttpConnectEid.ServiceRespond);
        }
    }
    HttpManager._hmMap = {};

    class StateBase {
        constructor() {
        }
    }
    StateBase.IDEL = 'IDEL';
    StateBase.DEAD = 'DEAD';
    StateBase.BACK_PASSED = 'BACK_PASSED';
    StateBase.MOVE_FORWARD = 'MOVE_FORWARD';
    StateBase.MOVE_BACK = 'MOVE_BACK';
    StateBase.STOP = 'STOP';

    const DESK_POS = new Laya.Vector3(2.5, 4, -5);
    const DESK_END_POS = new Laya.Vector3(2.5, -1, -5);
    const HAND_POS = new Laya.Vector3(-3, -2, -5);
    const HAND_END_POS = new Laya.Vector3(0, -2, -5);
    const DESK_SIZE = new Laya.Vector3(0.2, 3, 2);
    const HAND_SIZE = new Laya.Vector3(6, 0.5, 0.5);
    const SPEED_FORWARD_DESK = new Laya.Vector3(0, -10, 0);
    const SPEED_BACK_DESK = new Laya.Vector3(0, 10, 0);
    const SPEED_HAND = 0.03;
    const V3_ZERO = new Laya.Vector3();
    let knock_time = 0;
    class GrabLogic extends EventDispather {
        constructor() {
            super(...arguments);
            this.IsInited = false;
            this.Vdir = new Laya.Vector3();
            this.DeskPosition = new Laya.Vector3();
            this.timeLine = new Laya.TimeLine();
        }
        onAwake() {
            this.GScene = SceneManager.CurScene;
            this.Hand = this.GScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(HAND_SIZE.x, HAND_SIZE.y, HAND_SIZE.z)));
            this.Desk = this.GScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(DESK_SIZE.x, DESK_SIZE.y, DESK_SIZE.z)));
            this.Hand.transform.position = HAND_POS;
            this.Desk.transform.position = DESK_POS;
            this.addPhysics(this.Hand, HAND_SIZE);
            this.addPhysics(this.Desk, DESK_SIZE);
            this.DeskClass = new RigidObject(this.Desk);
            this.HandClass = new RigidObject(this.Hand);
            this.addCollisionScript();
            Laya.stage.on(Laya.Event.CLICK, this, this.moveHand);
            Laya.stage.on(Laya.Event.DOUBLE_CLICK, this, this.restart);
            this.IsInited = true;
            this.resetVec();
            this.createTimerLine();
            this.moveDesk();
        }
        addPhysics(target, size) {
            var rigidBody = target.addComponent(Laya.Rigidbody3D);
            rigidBody.colliderShape = new Laya.BoxColliderShape(size.x, size.y, size.z);
            rigidBody.gravity = V3_ZERO.clone();
            rigidBody.isTrigger = true;
            rigidBody.isKinematic = true;
        }
        addCollisionScript() {
            this.deskScript = this.Desk.addComponent(DeskCollisionScript);
            this.deskScript.kinematicSprite = this.Hand;
            this.handScript = this.Hand.addComponent(HandCollisionScript);
            this.handScript.kinematicSprite = this.Desk;
        }
        onComplete() {
            knock_time++;
            console.log("timeLine complete!!!!", knock_time);
        }
        onLabel(label) {
            console.log("LabelName:" + label);
        }
        createTimerLine() {
            this.timeLine.on(Laya.Event.COMPLETE, this, this.onComplete);
            this.timeLine.on(Laya.Event.LABEL, this, this.onLabel);
        }
        resetVec() {
            this.Vdir.x = DESK_POS.x;
            this.Vdir.y = DESK_POS.y;
            this.Vdir.z = DESK_POS.z;
        }
        knockOnce() {
            this.resetVec();
            this.timeLine.reset();
            this.addKnock();
            this.addKnock(1);
            this.timeLine.play(0, false);
        }
        addStay(_stayTime) {
            _stayTime = _stayTime ? _stayTime * 1000 : 0;
            this.timeLine.addLabel("stay", 0).to(this.Vdir, { y: DESK_POS.y }, _stayTime, null, 0);
        }
        addKnock(_deltaTime) {
            _deltaTime = _deltaTime ? _deltaTime * 1000 : 0;
            this.timeLine
                .to(this.Vdir, { y: DESK_END_POS.y }, 200, null, _deltaTime)
                .to(this.Vdir, { y: DESK_POS.y }, 200, null, 0);
        }
        restart() {
            this.deskScript.clearStatus();
            this.HandClass.State = StateBase.IDEL;
            this.moveDesk();
            this.resetHand();
        }
        moveDesk() {
            this.DeskClass.State = StateBase.MOVE_FORWARD;
            this.resetVec();
            this.timeLine.reset();
            this.addKnock();
            this.addKnock(1);
            this.timeLine.play(0, true);
        }
        resetDesk() {
            this.DeskClass.Obj.transform.position = DESK_POS;
        }
        stopDesk() {
            this.timeLine.pause();
            this.DeskClass.State = StateBase.STOP;
        }
        deskDown() {
            if (!this.IsInited)
                return;
            let vec = this.DeskClass.Obj.transform.position;
            vec.y -= 0.3;
            this.DeskClass.Obj.transform.position = vec;
            if (vec.y <= DESK_END_POS.y) {
                this.DeskClass.State = StateBase.MOVE_BACK;
            }
        }
        deskUp() {
            if (!this.IsInited)
                return;
            let vec = this.DeskClass.Obj.transform.position;
            vec.y += 0.3;
            this.DeskClass.Obj.transform.position = vec;
            if (vec.y >= DESK_POS.y) {
                this.DeskClass.State = StateBase.MOVE_FORWARD;
            }
        }
        updateDesk() {
            if (!this.IsInited)
                return;
            if (this.deskScript.IsHit) {
                this.resetDesk();
                this.stopDesk();
                return;
            }
            switch (this.DeskClass.State) {
                case StateBase.IDEL:
                    break;
                case StateBase.MOVE_FORWARD:
                    this.DeskClass.Obj.transform.position = this.Vdir;
                    break;
                case StateBase.MOVE_BACK:
                    break;
            }
        }
        moveHand() {
            console.log(this.HandClass.State);
            if (!this.IsInited)
                return;
            if (this.HandClass.State == StateBase.STOP)
                return;
            if (this.HandClass.State == StateBase.IDEL) {
                this.HandClass.State = StateBase.MOVE_FORWARD;
            }
        }
        handForward() {
            if (!this.IsInited)
                return;
            let vec = this.HandClass.Obj.transform.position;
            vec.x += SPEED_HAND * Laya.timer.delta;
            this.HandClass.Obj.transform.position = vec;
            if (this.HandClass.Obj.transform.position.x >= HAND_END_POS.x) {
                this.HandClass.State = StateBase.MOVE_BACK;
            }
        }
        handBack() {
            if (!this.IsInited)
                return;
            if (this.HandClass.Obj.transform.position.x <= HAND_POS.x) {
                this.resetHand();
                PlayerData.Point += 100;
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>得分：", PlayerData.Point);
                return;
            }
            if (this.HandClass.Obj.transform.position.x < DESK_POS.x) {
                this.HandClass.State = StateBase.BACK_PASSED;
            }
            let vec = this.HandClass.Obj.transform.position;
            vec.x -= SPEED_HAND * Laya.timer.delta;
            this.HandClass.Obj.transform.position = vec;
        }
        resetHand() {
            this.HandClass.Obj.transform.position = HAND_POS;
            this.HandClass.State = StateBase.IDEL;
            this.enableHandGravity(false);
        }
        stopHand() {
            this.HandClass.State = StateBase.STOP;
        }
        enableHandGravity(_open) {
            if (this.HandClass.Rigid3D.isKinematic == !_open)
                return;
            this.HandClass.Rigid3D.isKinematic = !_open;
            this.HandClass.Rigid3D.gravity = _open ? new Laya.Vector3(0, -10, 0) : V3_ZERO.clone();
        }
        onHandHit() {
            PlayerData.Point = 0;
            this.stopHand();
            this.enableHandGravity(true);
        }
        updateHand() {
            if (!this.IsInited)
                return;
            if (this.deskScript.IsHit) {
                this.onHandHit();
                return;
            }
            switch (this.HandClass.State) {
                case StateBase.IDEL:
                    break;
                case StateBase.MOVE_FORWARD:
                    this.handForward();
                    break;
                case StateBase.MOVE_BACK:
                    this.handBack();
                    break;
                case StateBase.BACK_PASSED:
                    this.handBack();
                    break;
            }
        }
        onUpdate() {
            this.updateDesk();
            this.updateHand();
        }
    }
    class RigidObject {
        constructor(obj) {
            this._state = StateBase.IDEL;
            this.Obj = obj;
            this.Rigid3D = obj.getComponent(Laya.Rigidbody3D);
        }
        set State(_st) {
            if (this._state !== _st) {
                this._state = _st;
            }
        }
        get State() {
            return this._state;
        }
    }

    class DeskCollisionScript extends EventDispather {
        constructor() {
            super();
            this._isHit = false;
        }
        get IsHit() {
            return this._isHit;
        }
        clearStatus() {
            this._isHit = false;
        }
        onTriggerEnter(other) {
            if (other.owner === this.kinematicSprite) {
                this._isHit = true;
            }
        }
        onTriggerStay(other) {
        }
        onTriggerExit(other) {
        }
        onCollisionEnter(collision) {
            if (collision.other.owner === this.kinematicSprite) {
                this._isHit = true;
            }
        }
        onCollisionStay(collision) {
        }
        onCollisionExit(collision) {
        }
    }

    class HandCollisionScript extends EventDispather {
        constructor() {
            super();
        }
        onTriggerEnter(other) {
        }
        onTriggerStay(other) {
        }
        onTriggerExit(other) {
        }
        onCollisionEnter(collision) {
            console.log("碰撞！");
            if (collision.other.owner === this.kinematicSprite) ;
        }
        onCollisionStay(collision) {
        }
        onCollisionExit(collision) {
        }
    }

    class GameScene extends EventDispather {
        static get inst() {
            return this._inst;
        }
        onAwake() {
            GameScene._inst = this;
            this.owner.addComponent(GrabLogic);
        }
        init() {
            VersionManager.Version = VersionConfig.Develop;
            if (Laya.Browser.onMiniGame) {
                Laya.URL.basePath = "https://706.lightpaw.cn/h5c/resCache/DietyRoad/";
                Laya.MiniAdpter.nativefiles = [
                    "libs",
                    "res/config",
                ];
            }
            this.initFairygui();
            this.loadLoginUiRes();
        }
        initFairygui() {
            fgui.UIConfig.packageFileExtension = "txt";
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        }
        loadLoginUiRes() {
            Resource.load(loginResUrls, this, this.onLogingResLoaded);
        }
        onLogingResLoaded() {
            this.preLogin();
        }
        loadRes() {
            Resource.load(urls, this, this.onResLoaded, this.onLoading);
        }
        onLoading(progress) {
            console.log("加载进度: " + progress);
        }
        onResLoaded(info) {
            if (!info) {
                return console.error('Load fairygui package fail');
            }
            UIConfig.UIPkgs.forEach(pkg => {
                Resource.addUiPackage(pkg);
            });
            UIConfig.LoginPackageLoaded = true;
            this.dispatchEvent(SceneLoginEid.PackageLoaded);
            this.loadConfig();
        }
        preLogin() {
            this.openLoginUI();
            this.checkVersion();
        }
        checkVersion() {
            switch (VersionManager.Version) {
                case VersionConfig.Develop:
                    this.openChooseServiceUi();
                    break;
                case VersionConfig.Release:
                    NetConfig.RequestUrl = NetConfig.HttpRequestUrl;
                    break;
            }
        }
        onVersionChecked() {
            this.loadRes();
        }
        openLoginUI() {
            LoadingProgressManager.Inst.showUiProgress(5);
        }
        openChooseServiceUi() {
            this.dispatchEvent(ViewKit.ChooseService.Key);
        }
        loadConfig() {
            ConfigData.SendReq([]);
        }
        onConfigLoaded() {
            this.loginGame();
        }
        loginGame() {
            if (NetConfig.RequestUrl == NetConfig.LocalRequestUrl) {
                this.testLogin();
            }
            else if (NetConfig.RequestUrl == NetConfig.LocalWechatRequestUrl && isOnWeixin()) ;
            else if (isOnWeixin()) ;
            else {
                this.testLogin();
            }
        }
        testLogin() {
            let acc;
            let tempName = NetConfig.TempName;
            if (tempName) {
                acc = tempName;
            }
            else {
                acc = "temp" + Math.random();
            }
            let reqdata = new LoginReqData(acc);
            LoginData.SendReq(reqdata);
        }
        onLogined() {
            this.openMainUi();
        }
        openMainUi() {
            this.dispatchEvent(SceneEnterEid.MainMenu);
            this.dispatchEvent(ViewKit.MainMenu.Key);
        }
    }

    class SceneManager extends BaseManager {
        constructor() {
            super();
        }
        static get Inst() {
            return this._inst;
        }
        static create2dScene() {
            Laya.Scene.load(GameConfig.startScene, Laya.Handler.create(this, this.onOpenScene));
        }
        static create3dScene() {
            let scene = Laya.stage.addChild(new Laya.Scene3D());
            let camera = (scene.addChild(new Laya.Camera(0, 0.1, 100)));
            camera.transform.translate(new Laya.Vector3(1, 1, 3));
            camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
            let directionLight = scene.addChild(new Laya.DirectionLight());
            directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
            directionLight.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));
            this.onOpenScene(scene);
        }
        static onOpenScene(scene) {
            if (scene) {
                Laya.stage.addChild(scene);
                this.CurScene = scene;
                scene.addComponent(SceneManager);
                scene.addComponent(HttpManager);
                scene.addComponent(UIManager);
                scene.addComponent(DataManager);
                scene.addComponent(GameScene);
            }
        }
    }

    class SpawnManager {
        constructor() { }
        static Load3dModel(path, completeCallback, thisArg) {
            if (!SceneManager.CurScene || !path)
                return;
            Laya.Sprite3D.load(path, Laya.Handler.create(this, () => {
                if (typeof completeCallback == 'function') {
                    let sp = Resource.getRes(path);
                    if (!sp)
                        return;
                    let msp = SceneManager.CurScene.addChild(sp);
                    let ani = msp.getComponent(Laya.Animator);
                    let aniState;
                    if (ani) {
                        aniState = ani.getCurrentAnimatorPlayState(0);
                    }
                    let modelData = new ModelDataStruct(msp, ani, aniState);
                    completeCallback.call(thisArg, modelData);
                }
            }));
        }
        static Load3dMesh(path, completeCallback, thisArg) {
            if (!path)
                return;
            Resource.load(path, thisArg, completeCallback, null, Laya.Loader.MESH);
        }
        static LoadMaterial(path, completeCallback, thisArg) {
            if (!path)
                return;
            Resource.load(path, thisArg, completeCallback, null, Laya.Loader.MATERIAL);
        }
        static CreateObjectFromPool(_path, _slot) {
            if (!_path || !_slot)
                return;
            let obj = Laya.Pool.getItem(_path);
            if (!obj)
                return;
            if (!obj['$PoolGID']) {
                obj['$PoolGID'] = Laya.Utils.getGID();
            }
            if (!obj['$Path']) {
                obj['$Path'] = _path;
            }
            this.poolObjs[obj['$PoolGID']] = obj;
            _slot.displayObject.addChild(obj);
            return obj;
        }
        static LoadView(pkg, com) {
            if (!pkg || !com)
                return;
            Resource.addUiPackage(pkg);
            let grootInst = fgui.GRoot.inst;
            let ui = fgui.UIPackage.createObject(pkg, com).asCom;
            if (ui) {
                grootInst.addChild(ui);
                ui.visible = false;
                ui.setSize(grootInst.width, grootInst.height);
                ui.setXY(0, 0);
            }
            else {
                console.error("Fail to add ui package: ", pkg, com);
            }
            return ui;
        }
    }

    let timerId = -1;
    let timerPool = new Array();
    let timerList = new Array();
    class Timer {
        constructor() {
            this.CurCd = 0;
            this.EndTime = 0;
            this.IsRun = false;
            this.IsStart = false;
            this.IsAlive = true;
            this.autoRemove = true;
        }
        Init(cd, startCallback, updateCallback, endCallback, target, thisArg, autoRemove, autoStart) {
            this.Id = timerId + 1;
            this.MaxCd = cd;
            this.CurCd = 0;
            this.OnStart = startCallback;
            this.OnUpdate = updateCallback;
            this.OnEnd = endCallback;
            this.Target = target;
            this.ThisArg = thisArg;
            this.EndTime = 0;
            this.IsRun = false;
            this.IsStart = false;
            this.IsAlive = true;
            this.autoRemove = autoRemove != null ? autoRemove : true;
            if (autoStart != false) {
                this.Start();
            }
        }
        Update() {
            if (!this.IsAlive)
                return;
            let currtime = Date.now();
            if (currtime < this.EndTime) {
                this.CurCd = (this.EndTime - currtime) * 0.001;
                if (typeof (this.OnUpdate) == "function") {
                    this.OnUpdate.call(this.ThisArg, this.CurCd, this.Target);
                }
                requestAnimationFrame(this.Update.bind(this));
            }
            else {
                this.IsRun = false;
                this.IsStart = false;
                if (typeof (this.OnEnd) == "function") {
                    this.OnEnd.call(this.ThisArg, this.Target);
                }
                if (this.autoRemove) {
                    this.Remove();
                }
            }
        }
        Start() {
            this.IsRun = true;
            if (!this.IsStart) {
                this.IsStart = true;
                this.StartTime = Date.now();
                this.EndTime = this.StartTime + this.MaxCd * 1000;
                if (typeof (this.OnStart) == "function") {
                    this.OnStart.call(this.ThisArg, this.Target);
                }
                this.Update();
            }
        }
        ResetCd(cd) {
            if (typeof (cd) != "number")
                return;
            this.MaxCd = cd;
            this.EndTime = Date.now() + this.MaxCd * 1000;
        }
        Remove() {
            this.OnStart = null;
            this.OnUpdate = null;
            this.OnEnd = null;
            this.Target = null;
            this.ThisArg = null;
            this.IsRun = false;
            this.IsStart = false;
            this.IsAlive = false;
            let index = timerPool.indexOf(this);
            if (index > 0) {
                timerPool.splice(index, 1);
                timerPool.unshift(this);
            }
        }
    }
    class TimerManager {
        constructor() { }
        static NewTimer(thisArg, cd, startCallback, updateCallback, endCallback, target, autoRemove, autoStart) {
            let t = timerPool[0];
            if (!t || t.IsAlive) {
                t = new Timer();
                timerList[t.Id] = t;
                timerPool.push(t);
            }
            t.Init(cd, startCallback, updateCallback, endCallback, target, thisArg, autoRemove);
            return t;
        }
        static RemoveTimer(thisArg) {
            if (!thisArg)
                return;
            timerPool.forEach(timer => {
                if (timer.ThisArg && timer.ThisArg.id == thisArg.id) {
                    timer.Remove();
                }
            });
        }
        static RemoveAllTimer() {
            for (let i in timerList) {
                timerList[i].Remove();
            }
        }
        static Update() {
            for (let i in timerList) {
                if (timerList[i].IsAlive) {
                    timerList[i].Update();
                }
            }
        }
        static ClearAllTimer() {
            for (let i in timerList) {
                timerList[i].Remove();
                delete timerList[i];
            }
        }
    }

    let GuideList = new Array();
    class UIManager extends BaseManager {
        constructor() {
            super();
        }
        static get Inst() {
            if (!this._inst) {
                this._inst = new UIManager();
            }
            return this._inst;
        }
        onAwake() {
            UIManager._inst = this;
            UIManager.setUiKeys();
            UIManager.addListeners();
        }
        static setUiKeys() {
            let cfg = ViewKit;
            LoadingProgressController.init(cfg.LoadingProgress.Key, LoadingProgressView);
            LoadingController.init(cfg.LoadingMain.Key, LoadingView);
            ChooseServiceController.init(cfg.ChooseService.Key, ChooseServiceView);
            PublicConfirmationController.init(cfg.PublicConfirmation.Key, PublicConfirmationView);
        }
        static addListeners() {
            for (let i in ViewKit) {
                let cfg = ViewKit[i];
                if (cfg && cfg.Key) {
                    this.addEventListener(cfg.Key, this.goOpen.bind(this, cfg.Key));
                }
            }
            this.addEventListener(UiNoticeEid.CloseController, this.onCloseController);
            this.addEventListener(UiNoticeEid.OpenFullScreen, this.onOpenFullscreen);
            this.addEventListener(UiNoticeEid.CloseFullScreen, this.onCloseFullscreen);
            this.addEventListener(UiNoticeEid.ClosePopup, this.openNextPopup);
        }
        static goOpen(key, ...data) {
            let c = CtrlMapArray[key];
            if (c) {
                this.openController(c, ...data);
            }
        }
        static openController(ctrl, ..._data) {
            if (!ctrl)
                return;
            let cKey = ctrl.Key;
            let ctrlInst = OpenedCtrl[cKey];
            if (!ctrlInst || ctrlInst.IsDestroyed) {
                ctrlInst = new ctrl(ctrl.Key, ctrl.view);
            }
            else {
                console.log('Controller has opened: ', cKey);
                ctrlInst.show(..._data);
                fgui.GRoot.inst.setChildIndex(ViewMap[cKey].UI, fgui.GRoot.inst.numChildren);
                return;
            }
            return this.checkOpenCtrlInst(ctrlInst, ..._data);
        }
        static checkOpenCtrlInst(ctrlInst, ..._data) {
            if (ctrlInst.IsPopup) {
                ctrlInst = this.getNextPopup(ctrlInst, ..._data);
                if (!ctrlInst)
                    return;
            }
            let done = ctrlInst.create();
            if (done) {
                ctrlInst.open(..._data);
            }
            else {
                console.error("Open controller failed");
                return;
            }
            if (ctrlInst.IsPopup) {
                ctrlInst.SortingOrder(UIConfig.SortingOrder.Popup);
            }
            return ctrlInst;
        }
        static onCloseController(ckey) {
            let ctrl = OpenedCtrl[ckey];
            TimerManager.RemoveTimer(ctrl);
        }
        static onOpenFullscreen(ckey) {
            this.hideOtherUI(ckey);
        }
        static onCloseFullscreen(ckey) {
            this.showOtherUI(ckey);
        }
        static hideOtherUI(ckey) {
            for (let i in OpenedCtrl) {
                if (i == ckey)
                    break;
                let ctrl = OpenedCtrl[i];
                if (ctrl && ctrl.IsShow) {
                    ctrl.View.UI.visible = false;
                }
            }
        }
        static showOtherUI(ckey) {
            for (let i in OpenedCtrl) {
                if (i == ckey)
                    return;
                let ctrl = OpenedCtrl[i];
                if (ctrl && ctrl.IsShow) {
                    ctrl.View.UI.visible = true;
                }
            }
        }
        static openPopup(popupCtrl, data) {
            if (!popupCtrl)
                return;
            if (UIManager.PopupMap.length > 0) {
                UIManager.PopupMap.push(popupCtrl);
                UIManager.PopupData[popupCtrl.Key] = data;
                let popup = UIManager.PopupMap.shift();
                UIManager.openController(popup, UIManager.PopupData[popup.Key]);
            }
            else {
                UIManager.openController(popupCtrl, data);
            }
        }
        static getNextPopup(popupCtrl, ...data) {
            if (!popupCtrl)
                return;
            if (UIManager.PopupQueue.length > 0) {
                UIManager.PopupQueue.push(popupCtrl);
                UIManager.PopupData[popupCtrl.multitonKey] = data;
            }
            else {
                return popupCtrl;
            }
        }
        static openNextPopup() {
            if (UIManager.PopupQueue.length > 0) {
                UIManager.PopupQueue.pop();
                let popup = UIManager.PopupQueue.shift();
                if (popup) {
                    UIManager.checkOpenCtrlInst(popup, ...UIManager.PopupData[popup.multitonKey]);
                }
            }
        }
        static openConfirmWindow(content, yesBtnCallback, btnYesTxt, btnCancelTxt) {
            this.openPopup(PublicConfirmationController, new PopupWindowData(content, yesBtnCallback, ConfirmWindowType.Content, btnYesTxt, btnCancelTxt));
        }
        static openRewardWindow(rewardData, yesBtnCallback, btnYesTxt, btnCancelTxt) {
            this.openPopup(PublicConfirmationController, new PopupWindowData(null, yesBtnCallback, ConfirmWindowType.Reward, rewardData, btnYesTxt, btnCancelTxt));
        }
        static openContentRewardWindow(content, rewardData, yesBtnCallback, btnYesTxt, btnCancelTxt) {
            this.openPopup(PublicConfirmationController, new PopupWindowData(content, yesBtnCallback, ConfirmWindowType.ContentAndReward, rewardData, btnYesTxt, btnCancelTxt));
        }
    }
    UIManager.closeGuide = function (guideName) {
        if (!GuideList[guideName])
            return;
        GuideList[guideName].dispose();
        GuideList[guideName] = null;
    };
    UIManager.nextGuide = function (guideName) {
        if (!GuideList[guideName])
            return;
        for (let i in GuideList) {
            GuideList[guideName] && GuideList[guideName].dispose();
            GuideList[guideName] = null;
        }
    };
    UIManager.PopupMap = new Array();
    UIManager.PopupQueue = new Array();
    UIManager.PopupData = {};

    class VersionManager {
        constructor() { }
        static set Version(version) {
            this._version = version;
        }
        static get Version() {
            return this._version;
        }
    }

    class DataManager extends BaseManager {
        constructor() {
            super(...arguments);
            this._isBaseBodyInited = false;
            this._isBodyInited = false;
        }
        onAwake() {
            this.initBaseBody();
            this.addEventListener(SceneLoginEid.LoginSuccess, this.onLoginSuccess);
        }
        initBaseBody() {
            if (this._isBaseBodyInited)
                return;
            ConfigData.ReqBody = new HttpReqbodyBase(0, 10002);
            LoginData.ReqBody = new HttpReqbodyBase(0, 10003);
            this._isBaseBodyInited = true;
        }
        onLoginSuccess() {
            this.initDevBodies();
        }
        initDevBodies() {
            if (this._isBodyInited || !LoginData.Session)
                return;
            UpgradeData.ReqBody = new DevReqBody(8, 10802);
            this._isBodyInited = true;
        }
    }

    class PoolManager extends BaseManager {
        static get FguiPool() {
            return this.fguiPool;
        }
        static get HeadPool() {
            return this.getPool(PoolType.HeadModel);
        }
        static get BodyPool() {
            return this.getPool(PoolType.BodyModel);
        }
        onAwake() {
        }
        static recover(key, item, clsType) {
            if (!key || !item)
                return;
            if (clsType) {
                Laya.Pool.recoverByClass(clsType);
            }
            else {
                switch (key) {
                    case PoolType.FguiObj:
                        if (item instanceof fgui.GObject)
                            this.FguiPool.returnObject(item);
                    default:
                        Laya.Pool.recover(key, item);
                }
            }
        }
        static getItem(key, clsType) {
            if (clsType) {
                return Laya.Pool.getItemByClass(key, clsType);
            }
            else {
                switch (key) {
                    case '':
                    default:
                        return Laya.Pool.getItem(key);
                }
            }
        }
        static getPool(key) {
            return Laya.Pool.getPoolBySign(key);
        }
        static clearPool(key) {
            Laya.Pool.clearBySign(key);
        }
        static clearAllPools() {
            this.FguiPool.clear();
        }
        static getModelByType(poolType, path, callback, thisArg) {
            let head = this.getItem(poolType);
            if (!head) {
                SpawnManager.Load3dModel(path, (model) => {
                    head = model.msp;
                    if (callback) {
                        callback.call(thisArg, head);
                    }
                }, thisArg);
            }
            else {
                if (callback) {
                    callback.call(thisArg, head);
                }
            }
        }
        static getHead(path, callback, thisArg) {
            this.getModelByType(PoolType.HeadModel, path, callback, thisArg);
        }
        static getBody(path, callback, thisArg) {
            this.getModelByType(PoolType.BodyModel, path, callback, thisArg);
        }
        static returnFguiObj(box) {
            this.recover(PoolType.FguiObj, box);
        }
    }
    PoolManager.fguiPool = new fgui.GObjectPool();

    class Main {
        constructor() {
            this.animations = ['attack1', 'attack2', 'attack3', 'win'];
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            if (Laya.Browser.onPC) {
                Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            }
            else {
                Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
            }
            Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError = true;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            SceneManager.create3dScene();
        }
        onSubPackageLoaded() {
            SceneManager.create3dScene();
        }
    }
    new Main();

}());

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./EventType"));
__export(require("./Resource"));
__export(require("./Utils"));
__export(require("./LogicUtils"));
__export(require("./WxUtils"));
},{"./EventType":2,"./LogicUtils":4,"./Resource":5,"./Utils":6,"./WxUtils":7}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = require("../Config/Config");
var GEvent_1 = require("./GEvent");
var EventDispather = /** @class */ (function (_super) {
    __extends(EventDispather, _super);
    function EventDispather() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._eventList = new Array();
        return _this;
    }
    //静态方法
    EventDispather.addEventListener = function (key, lisener) {
        GEvent_1.default.AddListener(key, lisener, this);
        this._staticEventList.push(new Config.EventClass(key, lisener));
    };
    EventDispather.dispatchEvent = function (key) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        GEvent_1.default.Dispatch.apply(GEvent_1.default, [key].concat(data));
    };
    EventDispather.clearEventListener = function () {
        this._staticEventList.forEach(function (evt) {
            GEvent_1.default.RemoveListener(evt.Key, evt.Listener);
            evt = null;
        });
    };
    EventDispather.processEvent = function (key, listener) {
        var data = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            data[_i - 2] = arguments[_i];
        }
        // listener.call(this, ...data);
    };
    //实例化重载方法
    EventDispather.prototype.addEventListener = function (key, lisener) {
        GEvent_1.default.AddListener(key, lisener, this);
        this._eventList.push(new Config.EventClass(key, lisener));
    };
    EventDispather.prototype.dispatchEvent = function (key) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        GEvent_1.default.Dispatch.apply(GEvent_1.default, [key].concat(data));
    };
    //必须在销毁时执行此方法
    EventDispather.prototype.removeEventListener = function () {
        this._eventList.forEach(function (evt) {
            GEvent_1.default.RemoveListener(evt.Key, evt.Listener);
            evt = null;
        });
    };
    EventDispather.prototype.processEvent = function (key, listener) {
        var data = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            data[_i - 2] = arguments[_i];
        }
        // listener.call(this, ...data);
    };
    EventDispather.prototype.onDestroy = function () {
        //重写此组件方法必须执行
        this.removeEventListener();
    };
    EventDispather._staticEventList = new Array(); //静态方法事件
    return EventDispather;
}(Laya.Script3D));
exports.EventDispather = EventDispather;
//----------------------------Base----------------------------------------
var EventSpan;
(function (EventSpan) {
    EventSpan[EventSpan["ModuleSpan"] = 100000] = "ModuleSpan";
    EventSpan[EventSpan["FuncSpan"] = 1000] = "FuncSpan";
    EventSpan[EventSpan["UISpan"] = 1] = "UISpan";
})(EventSpan = exports.EventSpan || (exports.EventSpan = {}));
//模块功能
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
})(ModuleEid = exports.ModuleEid || (exports.ModuleEid = {}));
var ManagerEid;
(function (ManagerEid) {
    ManagerEid[ManagerEid["GameManager"] = 200000] = "GameManager";
    ManagerEid[ManagerEid["NetManager"] = 300000] = "NetManager";
    ManagerEid[ManagerEid["UiManager"] = 400000] = "UiManager";
    ManagerEid[ManagerEid["AssetManager"] = 700000] = "AssetManager";
    ManagerEid[ManagerEid["DataManager"] = 800000] = "DataManager";
    ManagerEid[ManagerEid["AudioManager"] = 800000] = "AudioManager";
})(ManagerEid = exports.ManagerEid || (exports.ManagerEid = {}));
//----------------------------网络模块功能------------------------
var netModuleNum = 1;
var NetModuleId;
(function (NetModuleId) {
    NetModuleId[NetModuleId["HttpConnet"] = ModuleEid.Net + (netModuleNum++) * EventSpan.FuncSpan] = "HttpConnet";
})(NetModuleId || (NetModuleId = {}));
//HTTP连接
var netHttpConnectEidNum = 1;
var NetHttpConnectEid;
(function (NetHttpConnectEid) {
    NetHttpConnectEid[NetHttpConnectEid["ServiceRespond"] = NetModuleId.HttpConnet + netHttpConnectEidNum++] = "ServiceRespond";
    NetHttpConnectEid[NetHttpConnectEid["ConnectBegin"] = NetModuleId.HttpConnet + netHttpConnectEidNum++] = "ConnectBegin";
})(NetHttpConnectEid = exports.NetHttpConnectEid || (exports.NetHttpConnectEid = {}));
//----------------------------场景模块功能------------------------
var sceneModuleNum = 1;
var SceneModuleId;
(function (SceneModuleId) {
    SceneModuleId[SceneModuleId["Login"] = ModuleEid.Scene + (sceneModuleNum++) * EventSpan.FuncSpan] = "Login";
    SceneModuleId[SceneModuleId["Enter"] = ModuleEid.Scene + (sceneModuleNum++) * EventSpan.FuncSpan] = "Enter";
})(SceneModuleId || (SceneModuleId = {}));
//登录
var sceneLoginEidNum = 1;
var SceneLoginEid;
(function (SceneLoginEid) {
    SceneLoginEid[SceneLoginEid["ServiceChoosed"] = SceneModuleId.Login + sceneLoginEidNum++] = "ServiceChoosed";
    SceneLoginEid[SceneLoginEid["ConfigLoaded"] = SceneModuleId.Login + sceneLoginEidNum++] = "ConfigLoaded";
    SceneLoginEid[SceneLoginEid["PackageLoaded"] = SceneModuleId.Login + sceneLoginEidNum++] = "PackageLoaded";
    SceneLoginEid[SceneLoginEid["LoginSuccess"] = SceneModuleId.Login + sceneLoginEidNum++] = "LoginSuccess";
    SceneLoginEid[SceneLoginEid["SimProgressEnd"] = SceneModuleId.Login + sceneLoginEidNum++] = "SimProgressEnd";
})(SceneLoginEid = exports.SceneLoginEid || (exports.SceneLoginEid = {}));
//进入场景通知
var sceneEnterEidNum = 1;
var SceneEnterEid;
(function (SceneEnterEid) {
    SceneEnterEid[SceneEnterEid["MainMenu"] = SceneModuleId.Enter + sceneEnterEidNum++] = "MainMenu";
})(SceneEnterEid = exports.SceneEnterEid || (exports.SceneEnterEid = {}));
//----------------------------数据模块功能------------------------
var dataModuleNum = 1;
var DataModuleId;
(function (DataModuleId) {
    DataModuleId[DataModuleId["Player"] = ModuleEid.Data + (sceneModuleNum++) * EventSpan.FuncSpan] = "Player";
    DataModuleId[DataModuleId["Adobe"] = ModuleEid.Data + (sceneModuleNum++) * EventSpan.FuncSpan] = "Adobe";
    DataModuleId[DataModuleId["Sect"] = ModuleEid.Data + (sceneModuleNum++) * EventSpan.FuncSpan] = "Sect";
})(DataModuleId || (DataModuleId = {}));
//玩家
var dataPlayerEidNum = 1;
var DataPlayerEid;
(function (DataPlayerEid) {
    DataPlayerEid[DataPlayerEid["Refreshed"] = DataModuleId.Player + dataPlayerEidNum++] = "Refreshed";
    DataPlayerEid[DataPlayerEid["GmAddBagItemSuccess"] = DataModuleId.Player + dataPlayerEidNum++] = "GmAddBagItemSuccess";
})(DataPlayerEid = exports.DataPlayerEid || (exports.DataPlayerEid = {}));
//洞府
var dataAdobeEidNum = 1;
var DataAdobeEid;
(function (DataAdobeEid) {
    DataAdobeEid[DataAdobeEid["Refreshed"] = DataModuleId.Adobe + dataAdobeEidNum++] = "Refreshed";
})(DataAdobeEid = exports.DataAdobeEid || (exports.DataAdobeEid = {}));
//门派
var dataSectEidNum = 1;
var DataSectEid;
(function (DataSectEid) {
    DataSectEid[DataSectEid["Refreshed"] = DataModuleId.Sect + dataSectEidNum++] = "Refreshed";
    DataSectEid[DataSectEid["GotInfo"] = DataModuleId.Sect + dataSectEidNum++] = "GotInfo";
    DataSectEid[DataSectEid["GotTaskInfo"] = DataModuleId.Sect + dataSectEidNum++] = "GotTaskInfo";
    DataSectEid[DataSectEid["GotTrainTowerInfo"] = DataModuleId.Sect + dataSectEidNum++] = "GotTrainTowerInfo";
})(DataSectEid = exports.DataSectEid || (exports.DataSectEid = {}));
//----------------------------UI模块功能------------------------
var uiModuleNum = 1;
var uiModuleId;
(function (uiModuleId) {
    uiModuleId[uiModuleId["Open"] = ModuleEid.Ui + (uiModuleNum++) * EventSpan.FuncSpan] = "Open";
    uiModuleId[uiModuleId["Notice"] = ModuleEid.Ui + (uiModuleNum++) * EventSpan.FuncSpan] = "Notice";
})(uiModuleId = exports.uiModuleId || (exports.uiModuleId = {}));
//打开界面
var uiOpenEidNum = 1;
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
})(UiOpenEid = exports.UiOpenEid || (exports.UiOpenEid = {}));
//UI通知
var uiNoticeEidNum = 1;
var UiNoticeEid;
(function (UiNoticeEid) {
    UiNoticeEid[UiNoticeEid["CloseController"] = uiModuleId.Notice + uiNoticeEidNum++] = "CloseController";
    UiNoticeEid[UiNoticeEid["OpenFullScreen"] = uiModuleId.Notice + uiNoticeEidNum++] = "OpenFullScreen";
    UiNoticeEid[UiNoticeEid["CloseFullScreen"] = uiModuleId.Notice + uiNoticeEidNum++] = "CloseFullScreen";
    UiNoticeEid[UiNoticeEid["OpenPopup"] = uiModuleId.Notice + uiNoticeEidNum++] = "OpenPopup";
    UiNoticeEid[UiNoticeEid["ClosePopup"] = uiModuleId.Notice + uiNoticeEidNum++] = "ClosePopup";
})(UiNoticeEid = exports.UiNoticeEid || (exports.UiNoticeEid = {}));
//----------------------------玩家属性模块功能------------------------
var characterModuleNum = 1;
var CharacterModuleId;
(function (CharacterModuleId) {
    CharacterModuleId[CharacterModuleId["Cultivation"] = ModuleEid.Character + (characterModuleNum++) * EventSpan.FuncSpan] = "Cultivation";
})(CharacterModuleId || (CharacterModuleId = {}));
//修为
var characterCultivationEidNum = 1;
var CharacterCultivationEid;
(function (CharacterCultivationEid) {
    CharacterCultivationEid[CharacterCultivationEid["Upgrade"] = CharacterModuleId.Cultivation + characterCultivationEidNum++] = "Upgrade";
    CharacterCultivationEid[CharacterCultivationEid["AutoChanged"] = CharacterModuleId.Cultivation + characterCultivationEidNum++] = "AutoChanged";
})(CharacterCultivationEid = exports.CharacterCultivationEid || (exports.CharacterCultivationEid = {}));
//----------------------------玩法模块功能------------------------
var gameModuleNum = 1;
var GameModuleId;
(function (GameModuleId) {
    GameModuleId[GameModuleId["Adobe"] = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan] = "Adobe";
    GameModuleId[GameModuleId["Sect"] = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan] = "Sect";
    GameModuleId[GameModuleId["Kongfa"] = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan] = "Kongfa";
    GameModuleId[GameModuleId["Player"] = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan] = "Player";
    GameModuleId[GameModuleId["Road2Diety"] = ModuleEid.Game + (gameModuleNum++) * EventSpan.FuncSpan] = "Road2Diety";
})(GameModuleId || (GameModuleId = {}));
//洞府玩法
var gameAdobeEidNum = 1;
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
})(GameAdobeEid = exports.GameAdobeEid || (exports.GameAdobeEid = {}));
//门派玩法
var gameSectEidNum = 1;
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
})(GameSectEid = exports.GameSectEid || (exports.GameSectEid = {}));
//技能玩法
var gameKongfaEidNum = 1;
var GameKongfaEid;
(function (GameKongfaEid) {
    GameKongfaEid[GameKongfaEid["UpgradeKFSuccess"] = GameModuleId.Kongfa + gameKongfaEidNum++] = "UpgradeKFSuccess";
})(GameKongfaEid = exports.GameKongfaEid || (exports.GameKongfaEid = {}));
//角色
var gamePlayerEidNum = 1;
var GamePlayerEid;
(function (GamePlayerEid) {
    GamePlayerEid[GamePlayerEid["GetBagInfo"] = GameModuleId.Player + gamePlayerEidNum++] = "GetBagInfo";
    GamePlayerEid[GamePlayerEid["BagSortSuccess"] = GameModuleId.Player + gamePlayerEidNum++] = "BagSortSuccess";
    GamePlayerEid[GamePlayerEid["BagExpandSuccess"] = GameModuleId.Player + gamePlayerEidNum++] = "BagExpandSuccess";
    GamePlayerEid[GamePlayerEid["BagExpandFail"] = GameModuleId.Player + gamePlayerEidNum++] = "BagExpandFail";
    GamePlayerEid[GamePlayerEid["SoldBagItemSuccess"] = GameModuleId.Player + gamePlayerEidNum++] = "SoldBagItemSuccess";
    GamePlayerEid[GamePlayerEid["UseBagItemSuccess"] = GameModuleId.Player + gamePlayerEidNum++] = "UseBagItemSuccess";
})(GamePlayerEid = exports.GamePlayerEid || (exports.GamePlayerEid = {}));
//挑战仙途玩法
var gameRoad2DietyEidNum = 1;
var GameRoad2DietyaEid;
(function (GameRoad2DietyaEid) {
    GameRoad2DietyaEid[GameRoad2DietyaEid["GoMonsterResult"] = GameModuleId.Road2Diety + gameRoad2DietyEidNum++] = "GoMonsterResult";
    GameRoad2DietyaEid[GameRoad2DietyaEid["FailGoMonster"] = GameModuleId.Road2Diety + gameRoad2DietyEidNum++] = "FailGoMonster";
    GameRoad2DietyaEid[GameRoad2DietyaEid["InvitedFriend"] = GameModuleId.Road2Diety + gameRoad2DietyEidNum++] = "InvitedFriend";
    GameRoad2DietyaEid[GameRoad2DietyaEid["BattleRecordEnd"] = GameModuleId.Road2Diety + gameRoad2DietyEidNum++] = "BattleRecordEnd";
    GameRoad2DietyaEid[GameRoad2DietyaEid["Monster1stBlood"] = GameModuleId.Road2Diety + gameRoad2DietyEidNum++] = "Monster1stBlood";
})(GameRoad2DietyaEid = exports.GameRoad2DietyaEid || (exports.GameRoad2DietyaEid = {}));
},{"../Config/Config":8,"./GEvent":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = require("../Config/Config");
var GEvent = /** @class */ (function () {
    function GEvent() {
    }
    GEvent.AddListener = function (key, func, target) {
        if (!key || typeof (func) != "function")
            return;
        if (!this.Listeners[key]) {
            this.Listeners[key] = new Config.ListenerClass();
        }
        this.Listeners[key].addListener(func, target);
    };
    GEvent.RemoveListener = function (key, func) {
        if (!key || typeof (func) != "function")
            return;
        var list = this.Listeners[key];
        if (!list)
            return;
        list.removeListener(func);
    };
    GEvent.Dispatch = function (key) {
        var _a;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        if (!key)
            return;
        var list = this.Listeners[key];
        if (!list)
            return;
        for (var i in list.Listeners) {
            if (typeof (list.Listeners[i]) != "function")
                return;
            (_a = list.Listeners[i]).call.apply(_a, [list.Targets[i]].concat(data));
        }
    };
    GEvent.Clear = function (key) {
        if (!key)
            return;
        delete this.Listeners[key];
    };
    //----------------------开放域--------------------
    //刷新好友数据
    GEvent.WX_REFRESH_FRIEND_DATA = 11001;
    //打开排行
    GEvent.OPEN_RANK_UI = 11004;
    //显示故事排行
    GEvent.CLOSE_RANK_UI = 11005;
    GEvent.Listeners = {};
    return GEvent;
}());
exports.default = GEvent;
},{"../Config/Config":8}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//计算功法总人物属性
function calcKfAddAttr(kfLevel, kfStage, fsAdd) {
    return kfStage * (kfLevel + fsAdd);
}
exports.calcKfAddAttr = calcKfAddAttr;
//计算功法总风水加成
function calcKfAddFengshui(kfStage, fsAdd) {
    return kfStage * fsAdd;
}
exports.calcKfAddFengshui = calcKfAddFengshui;
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resource = /** @class */ (function (_super) {
    __extends(Resource, _super);
    function Resource() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Resource, "inst", {
        get: function () {
            if (!this._instance) {
                this._instance = new Resource();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Resource.load = function (url, thisArg, complete, progress, resType) {
        Laya.loader.load(url, Laya.Handler.create(thisArg, complete), Laya.Handler.create(thisArg, progress), resType);
    };
    Resource.addUiPackage = function (pkgName) {
        if (!this._addedUiPackages[pkgName]) {
            console.log('加载UI包：', pkgName);
            fgui.UIPackage.addPackage('res/' + pkgName + '/' + pkgName);
            this._addedUiPackages[pkgName] = true;
        }
    };
    Resource.getRes = function (path) {
        return Laya.Loader.getRes(path);
    };
    Resource.releaseRes = function () {
        Laya.Resource.destroyUnusedResources();
    };
    Resource.prototype.onAwake = function () {
        if (Resource._instance == null) {
            Resource._instance = this;
        }
        else {
            console.error("Resource instance must be only one");
        }
    };
    Resource._instance = null;
    Resource._addedUiPackages = {};
    return Resource;
}(Laya.Script));
exports.Resource = Resource;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIConfig_1 = require("../Config/UIConfig");
var Config = require("../Config/Config");
var Manager = require("../Manager/Manager");
//秒数转为时：分：秒
function ConvertTime(cd, ignoreHour) {
    if (cd == undefined)
        return;
    var hours = ("0" + Math.floor(cd / 3600)).slice(-2);
    var minutes = ("0" + Math.floor((cd % 3600) / 60)).slice(-2);
    var seconds = ("0" + Math.ceil(cd % 60)).slice(-2);
    if (ignoreHour) {
        return minutes + ":" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
}
exports.ConvertTime = ConvertTime;
//窗口弹出动画
/**
 * @param  {fgui.GComponent} windowUi
 */
function PlayPopupEffect(windowUi, callback, thisArg) {
    if (windowUi instanceof fgui.GObject) {
        windowUi.setPivot(0.5, 0.5);
        fgui.GTween.to(0, 1, 0.5)
            .setTarget(windowUi, windowUi.setScale)
            .onComplete(callback, thisArg);
    }
}
exports.PlayPopupEffect = PlayPopupEffect;
//十六进制颜色转10进制
//传参格式："00|ff|ee"
/**
 * @param  {string} colorStr
 */
function ColorHex2Dec(colorStr) {
    if (colorStr == null)
        return;
    colorStr = colorStr.split("|");
    if (colorStr instanceof Array && colorStr.length == 3) {
        colorStr.forEach(function (value, index) {
            colorStr[index] = parseInt(value, 16);
        });
    }
    return colorStr;
}
exports.ColorHex2Dec = ColorHex2Dec;
//判断是否为父组件（包括本体）
function isAncestorOf(parent, child) {
    if (parent == null || child == null)
        return false;
    //本体
    if (parent == child)
        return true;
    var p = child.parent;
    while (p) {
        if (p == parent)
            return true;
        p = p.parent;
    }
    return false;
}
exports.isAncestorOf = isAncestorOf;
//判断坐标是否在组件矩形范围内
function isInRect(xv, yv, dest) {
    if (xv == null || yv == null || !dest)
        return;
    //转为屏幕坐标
    var pt = dest.localToGlobal();
    if (xv < pt.x || xv > pt.x + dest.width || yv < pt.y || yv > pt.y + dest.height) {
        return false;
    }
    else {
        return true;
    }
}
exports.isInRect = isInRect;
function getBtnInfoParts(btn) {
    return {
        Progress_Health: btn.getChild('Progress_Health').asProgress,
        Progress_Exp: btn.getChild('Progress_Exp').asProgress,
        Text_Level: btn.getChild('Text_Level').asTextField,
        Text_TipsHealth: btn.getChild('Text_TipsHealth').asTextField,
    };
}
exports.getBtnInfoParts = getBtnInfoParts;
//设置文本CacheMode为CHAR避免内存暴涨GC卡顿
/**
 * @param  {fgui.GTextField} textFiled
 * @param  {boolean} useSysFont
 */
// export function SetTxtCacheMode(textFiled, useSysFont){
//     if(textFiled == null) return;
//     if(textFiled._label.cacheMode != cc.Label.CacheMode.CHAR){
//         textFiled._label.cacheMode = cc.Label.CacheMode.CHAR;
//         if(typeof useSysFont == "boolean")
//             textFiled._label.useSystemFont = useSysFont;
//     }
// }
//设置文本占位符
// String.prototype.format = function() {
//     if(arguments.length == 0) return this;
//     let param = arguments[0];
//     let s = this;
//     if(typeof(param) == 'object') {
//         for(let key in param)
//         s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
//         return s;
//     } else {
//         for(let i = 0; i < arguments.length; i++)
//         s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
//         return s;
//     }
// }
//设置文本占位符
/**
 * @param  {string} str
 * @param  {Array} args
 */
function StringFormat(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (typeof (str) != 'string')
        return;
    if (args == null || args.length == 0)
        return str;
    var param = args[0];
    var s = str;
    if (typeof (param) == 'object') {
        for (var key in param)
            s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
        return s;
    }
    else {
        for (var i = 0; i < args.length; i++)
            s = s.replace(new RegExp("\\{" + i + "\\}", "g"), args[i]);
        return s;
    }
}
exports.StringFormat = StringFormat;
//设置文本属性
function SetTxtProperty(txt, isBold, isUnderline) {
    if (txt instanceof fgui.GTextField == false)
        return;
    if (typeof (isBold) == 'boolean') {
        txt._label._isBold = isBold;
    }
    if (typeof (isUnderline) == 'boolean') {
        txt._label._isUnderline = isUnderline;
    }
}
exports.SetTxtProperty = SetTxtProperty;
//启动垃圾回收
// export function TriggerGC(){
//     if(cc.sys.platform == cc.sys.WECHAT_GAME){
//         wx.triggerGC();
//     }else{
//         cc.sys.garbageCollect();
//     }
// }
//设置非负数
function SetNonnegative(num) {
    if (num < 0) {
        num = 0;
    }
    return num;
}
exports.SetNonnegative = SetNonnegative;
//功能是否开启
// export function IsFuncActivated(funcEnum){
//     if(funcEnum == null) return;
//     switch (funcEnum) {
//         case LocalConfig.FuncEnum.PlayGo:
//             return DataBase.RoleData.UnlockChapterId >= 3;
//         case LocalConfig.FuncEnum.Fun:
//             return DataBase.RoleData.UnlockChapterId >= 4;
//         case LocalConfig.FuncEnum.StoryJade:
//             return DataBase.RoleData.UnlockChapterId > 1 || DataBase.RoleData.DropMaxTextNum >= 5 || DataBase.RoleData.ChapterPlayTimes > 1;
//         case LocalConfig.FuncEnum.TopLeftList:
//             return DataBase.RoleData.ChapterId > 1 || DataBase.RoleData.ChapterPlayTimes > 1;
//     }
// }
//设置fgui控制器页签
function SetGControllerIdx(gctrl, idx) {
    if (gctrl instanceof fgui.Controller == false || typeof idx != 'number')
        return;
    if (idx < 0 || idx >= gctrl.pageCount)
        return;
    gctrl.selectedIndex = idx;
}
exports.SetGControllerIdx = SetGControllerIdx;
//判断结构体长度
function GetObjectLength(object) {
    if (!object)
        return 0;
    var len = 0;
    for (var i in object) {
        len++;
    }
    return len;
}
exports.GetObjectLength = GetObjectLength;
//比较2个数组是否相等
/**
 * @param  {Array} arr1
 * @param  {Array} arr2
 */
function ArrayEquals(arr1, arr2) {
    // if the other array is a falsy value, return
    if (!arr1 || !arr2)
        return false;
    // compare lengths - can save a lot of time 
    if (arr1.length != arr2.length)
        return false;
    for (var i = 0, l = arr1.length; i < l; i++) {
        // Check if we have nested arrays
        if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
            // recurse into the nested arrays
            if (ArrayEquals(arr1, arr2) == false)
                return false;
        }
        else if (arr1[i] != arr2[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
exports.ArrayEquals = ArrayEquals;
//搜寻数组键值
function searchArray(arr, param, value) {
    if (Array.isArray(arr) == false || arr.length == 0) {
        console.error('Invalid or empty array');
        return;
    }
    var target;
    arr.some(function (v) {
        if (v[param] == value) {
            target = v;
            return true;
        }
    });
    return target;
}
exports.searchArray = searchArray;
function getCardPath(_data) {
    if (!_data.PicUrl)
        return { path: "", url: "" };
    var pakNum = Math.ceil(_data.PicUrl / 6);
    var pakName = "Postcard" + pakNum;
    var url = "ui://" + pakName + "/" + _data.Title;
    var info = { path: pakName + "/" + pakName, url: url };
    return info;
}
exports.getCardPath = getCardPath;
//判断是否小游戏
function isMiniGame() {
    // return Laya.Browser.onWeiXin || Laya.Browser.onBDMiniGame;
    return Laya.Browser.onMiniGame;
}
exports.isMiniGame = isMiniGame;
//判断是否微信
function isOnWeixin() {
    return Laya.Browser.onWeiXin;
}
exports.isOnWeixin = isOnWeixin;
//判断是否QQ
function isOnQQ() {
    return Laya.Browser.onMQQBrowser;
}
exports.isOnQQ = isOnQQ;
//判断是否腾讯系
function isOnTencent() {
    return isOnQQ() || isOnWeixin();
}
exports.isOnTencent = isOnTencent;
//广告领取组件
/**
 * @param  {fgui.GComponent} adCom
 */
function AdGetRewardBtn(adCom) {
    if (!adCom)
        return;
    //领取按钮
    var button_GetReward = adCom.getChild("Button_GetReward").asButton;
    var button_DoubleReward = adCom.getChild("Button_DoubleReward").asButton;
    var button_AdGetReward = adCom.getChild("Button_AdGetReward").asButton;
    return {
        //领取类型
        GetBtnType: adCom.getController('BtnType_C'),
        //单按钮领取
        Button_GetReward: button_GetReward,
        //纯领取
        Button_OneReward: adCom.getChild("Button_OneReward").asButton,
        //广告双倍领取
        Button_DoubleReward: button_DoubleReward,
        //单按钮广告领取
        Button_AdGetReward: button_AdGetReward,
        //单按钮领取方式
        GetRewardType: button_AdGetReward.getController('Type_C'),
        //双倍领取方式
        GetDoubleRewardType: button_DoubleReward.getController('Type_C'),
    };
}
exports.AdGetRewardBtn = AdGetRewardBtn;
//本地存储
function saveLocalStorage(key, value) {
    if (!value)
        return;
    Laya.LocalStorage.setItem(key, value);
}
exports.saveLocalStorage = saveLocalStorage;
function getLocalStorage(key) {
    return Laya.LocalStorage.getItem(key);
}
exports.getLocalStorage = getLocalStorage;
function saveLocalJson(key, value) {
    //可存储数组
    if (!value)
        return;
    Laya.LocalStorage.setJSON(key, value);
}
exports.saveLocalJson = saveLocalJson;
function getLocalJson(key) {
    return Laya.LocalStorage.getJSON(key);
}
exports.getLocalJson = getLocalJson;
function copyData(srcData, targetData) {
    if (!srcData || !targetData)
        return;
    for (var i in srcData) {
        if (typeof srcData[i] != 'function') {
            targetData[i] = srcData[i];
        }
    }
}
exports.copyData = copyData;
//设置广告组件样式
/**
 * @param  {fgui.GComponent} adCom
 * @param  {boolean} isSingle
 */
// export function SetAdBtnStyle(adCom, isSingle){
//     if(!adCom) return;
//     let btn = AdGetRewardBtn(adCom);
//     let adType = isSingle? Manager.GetReceiveAwardsType.SingleAdType(): Manager.GetReceiveAwardsType.getType();
//     switch (adType) {
//         case Config.AwardType.Not:
//             btn.GetBtnType.selectedIndex = 0;
//             break;
//         case Config.AwardType.Share:
//             btn.GetDoubleRewardType.selectedIndex = 1;
//             break;
//         case Config.AwardType.AD:
//             btn.GetDoubleRewardType.selectedIndex = 0;
//             break;
//         default:
//             adCom.enabled = false;
//             break;
//     }
//     return btn;
// }
//飘字
var tipsUi;
function ShowTips(msg) {
    if (!tipsUi) {
        var viewName = Config.ViewKit.TipsLabel;
        tipsUi = Manager.SpawnManager.LoadView(viewName.Pkg, viewName.Com);
        tipsUi.sortingOrder = UIConfig_1.UIConfig.SortingOrder.MsgTips;
    }
    //不重复显示
    if (tipsUi.visible)
        return;
    msg = msg ? msg : Config.LocalContent.FlyingTipsDefault;
    tipsUi.text = msg;
    tipsUi.visible = true;
    tipsUi.getTransition('Effect_Show').play(Laya.Handler.create(this, function () { tipsUi.visible = false; }));
}
exports.ShowTips = ShowTips;
var adobeAddTipsUi;
function setAdobeResNum(txtCom, resNum) {
    if (resNum >= 0) {
        txtCom.color = '#00FF00';
        txtCom.text = '+' + resNum;
    }
    else {
        txtCom.color = '#FF0000';
        txtCom.text = '-' + -resNum;
    }
}
//设置文字投影1像素
var txtShadowFilter;
function setTxtShadow(gtxt) {
    if (!gtxt)
        return;
    if (!txtShadowFilter) {
        txtShadowFilter = new Laya.GlowFilter('#000000', 1, 1, 1);
    }
    gtxt.displayObject.filters = [txtShadowFilter];
}
exports.setTxtShadow = setTxtShadow;
//设置UI节点与适配
// export function setUiNode(){
//     if(!fgui.GRoot.inst) return;
//     let canvas = cc.find("Canvas");
//     fgui.GRoot.inst.node.parent = cc.find("Canvas");
//     fgui.GRoot.inst.node.x = -canvas.width * 0.5;
//     fgui.GRoot.inst.node.y = canvas.height * 0.5;
// }
//调用java
/**
 * @param  {string} classPath 完整的类路径
 * @param  {string} javaFunc java静态方法名
 * @param  {} data
 * @param  {boolean} widthBack 是否有java同步回调
 */
function JsCallJava(classPath, javaFunc, data, widthBack) {
    if (!Laya.Browser.onAndroid)
        return;
    //需要完整的类路径，注意与iOS的不同
    var bridge = window["PlatformClass"].createClass(classPath); //创建脚本代理
    if (widthBack) {
        var obj = { value: data };
        bridge.callWithBack(function (value) {
            var obj = JSON.parse(value);
            alert(obj.value);
        }, javaFunc, JSON.stringify(obj));
    }
    else {
        var resp = bridge.call(javaFunc, data);
        alert(resp);
    }
}
exports.JsCallJava = JsCallJava;
//计算字符字节数--正则法
function getBytesLength(str) {
    if (!str || typeof str != 'string') {
        return 0;
    }
    // 在GBK编码里，除了ASCII字符，其它都占两个字符宽
    return str.replace(/[^\x00-\xff]/g, 'xx').length;
}
//计算字符字节数--遍历法--效率较高
function strByteLen(str) {
    var byteLen = 0, len;
    if (str && typeof str == 'string') {
        len = str.length;
        for (var i = 0; i < len; i++) {
            if (str.charCodeAt(i) > 255) {
                byteLen += 2;
            }
            else {
                byteLen++;
            }
        }
    }
    return byteLen;
}
exports.strByteLen = strByteLen;
//深拷贝
function deepCopy(src, target) {
    if (!src || !target)
        return;
    if (src != null) {
        for (var i in src) {
            var value = src[i];
            if (Array.isArray(value)) {
                target[i] = [];
                target[i] = value.slice(0);
            }
            else if (typeof value == 'object') {
                target[i] = {};
                deepCopy(value, target[i]);
            }
            else {
                target[i] = value;
            }
        }
    }
}
exports.deepCopy = deepCopy;
//填充物品按钮
var ItemBtnPartsClass = /** @class */ (function () {
    function ItemBtnPartsClass(btn) {
        this.Text_Title = btn.getChild('title').asTextField;
        this.Text_AwardNum = btn.getChild('Text_AwardNum').asTextField;
    }
    return ItemBtnPartsClass;
}());
exports.ItemBtnPartsClass = ItemBtnPartsClass;
function fillItemData(itemdata, btn) {
    if (!itemdata || !btn)
        return;
    var parts = new ItemBtnPartsClass(btn);
}
exports.fillItemData = fillItemData;
function fillItemListData(itemdataArr, list) {
    if (!itemdataArr || !list)
        return;
    itemdataArr.forEach(function (v) {
        fillItemData(v, list.addItemFromPool().asCom);
    });
}
exports.fillItemListData = fillItemListData;
//列表点击回调
function onClickListItem(thisArg, func, data, item) {
    var idx = item.parent.asList.getChildIndex(item);
    func.call.apply(func, [thisArg, idx + 1].concat(data));
}
function clickListCallback(list, thisArg, func) {
    var data = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        data[_i - 3] = arguments[_i];
    }
    if (!list || !func)
        return;
    list.on(fgui.Events.CLICK_ITEM, thisArg, onClickListItem, [thisArg, func, data]);
}
exports.clickListCallback = clickListCallback;
},{"../Config/Config":8,"../Config/UIConfig":19,"../Manager/Manager":39}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Data = require("../Data/Data");
var Manager = require("../Manager/Manager");
var GEvent_1 = require("./GEvent");
var Config = require("../Config/Config");
var Common = require("../Common/Common");
var Utils = require("./Utils");
var LocalConfig_1 = require("../Config/LocalConfig");
//微信操作
var platform = window['wx'];
//登录微信号
function Login(isUnionId) {
    if (Utils.isMiniGame() == false)
        return;
    platform.login({
        success: function (res) {
            if (res.code) {
                if (isUnionId) {
                    getSetting(res.code);
                }
                else {
                    // 发起网络请求
                    var req = Config.ReqData.Login;
                    req.Name = res.code;
                    Data.LoginData.SendReq(req);
                }
            }
            else {
                console.log('登录失败！' + res.errMsg);
            }
        }
    });
}
exports.Login = Login;
//加载分包
function loadAllSubpackages(thisArg, callback) {
    if (Utils.isMiniGame() == false || Config.UIConfig.SubPkgs.length == 0) {
        if (callback) {
            callback.call(thisArg);
        }
        return;
    }
    ;
    Config.UIConfig.SubPkgs.forEach(function (pkg) {
        var loadTask = platform.loadSubpackage({
            name: pkg,
            success: function (res) {
                // 分包加载成功后通过 success 回调
                console.log("success");
            },
            fail: function (res) {
                // 分包加载失败通过 fail 回调
                console.log("fail");
            }
        });
    });
}
exports.loadAllSubpackages = loadAllSubpackages;
//设置分享ticket
function shareTicketMode() {
    if (Utils.isMiniGame() == false)
        return;
    platform.updateShareMenu({
        withShareTicket: true,
    });
}
exports.shareTicketMode = shareTicketMode;
//获取分享ticket
function getShareTicket() {
    if (Utils.isMiniGame() == false)
        return;
    var launchInfo = platform.getLaunchOptionsSync();
    console.log('>>>>>>>>>>>>>微信登录信息：', launchInfo);
    if (launchInfo && launchInfo.shareTicket) {
        console.log('>>>>>>>>>>>>>>shareTicket：', launchInfo.shareTicket);
        return launchInfo.shareTicket;
    }
    else {
        return null;
    }
}
exports.getShareTicket = getShareTicket;
//解析分享ticket
function getShareInfo() {
    if (Utils.isMiniGame() == false)
        return;
    var ticket = getShareTicket();
    // if(!ticket) return;
    var launchInfo = platform.getLaunchOptionsSync();
    if (launchInfo && launchInfo.query) {
        // DataBase.SendShareInfo.SendReq(launchInfo.query.shareID);
    }
    // let shareInfo = {
    //     EncryptedData: '',
    //     Iv: ''
    // }
    // platform.login({
    //     success(res) {
    //         if (res.code) {
    //             let code = res.code;
    //             platform.getShareInfo({
    //                 shareTicket: ticket,
    //                 success(res) {
    //                     console.log('解析分享信息：', res);
    //                     if(res.encryptedData){
    //                         shareInfo.EncryptedData = res.encryptedData;
    //                         shareInfo.Iv = res.iv;
    //                         DataBase.SendShareInfo.SendReq(code, res.encryptedData, res.iv);
    //                     }
    //                 }
    //             });
    //         } else {
    //             console.log('登录失败！' + res.errMsg);
    //         }
    //     }
    // });
    // return shareInfo;
}
exports.getShareInfo = getShareInfo;
//显示右上角转发
function showShareMenu() {
    if (Utils.isMiniGame() == false)
        return;
    platform.showShareMenu({
        withShareTicket: true
    });
    platform.onShareAppMessage(function () { return ({
        title: Data.GetShareWord(),
        imageUrl: Config.UIConfig.ShareImagePath.InviteFriend,
        query: 'shareID=' + Data.LoginData.AccountKey,
    }); });
}
exports.showShareMenu = showShareMenu;
//分享
function ShareMessage(msg, imgPath, useScreenShot) {
    if (Utils.isMiniGame() == false)
        return;
    var sysInfo = platform.getSystemInfoSync();
    //使用屏幕截图
    if (useScreenShot == true) {
        imgPath = window["canvas"].toTempFilePathSync({
            destWidth: sysInfo.windowWidth * sysInfo.pixelRatio,
            destHeight: sysInfo.windowHeight * sysInfo.pixelRatio
        });
    }
    platform.shareAppMessage({
        title: msg,
        imageUrl: imgPath,
        query: 'shareID=' + Data.LoginData.AccountKey
    });
}
exports.ShareMessage = ShareMessage;
/**
 * @param  {Function} callback
 */
function onShow(callback) {
    if (Utils.isMiniGame() == false)
        return;
    platform.onShow(callback);
}
exports.onShow = onShow;
function offShow(callback) {
    if (Utils.isMiniGame() == false)
        return;
    platform.offShow(callback);
}
exports.offShow = offShow;
//清理缓存
function ClearLocalCache() {
    if (Utils.isMiniGame() == false)
        return;
    window["canvas"].getSavedFileList({
        success: function (res) {
            console.log(res.fileList.length);
            if (res.fileList.length > 0) {
                res.fileList.forEach(function (file) {
                    platform.removeSavedFile({
                        filePath: file.filePath,
                        complete: function (res) {
                            console.log(res);
                        }
                    });
                });
            }
        }
    });
}
exports.ClearLocalCache = ClearLocalCache;
function CanvasToTempFilePath(callback) {
    if (Utils.isMiniGame() == false)
        return;
    // let width  = fgui.GRoot.inst.width;
    // let height  = fgui.GRoot.inst.height;
    var sysInfo = platform.getSystemInfoSync();
    console.log(sysInfo);
    var destSize = new Laya.Point(sysInfo.windowWidth * sysInfo.pixelRatio, sysInfo.windowHeight * sysInfo.pixelRatio);
    console.log(destSize);
    window["canvas"].toTempFilePath({
        x: 0,
        y: 0,
        width: destSize.x,
        height: destSize.y,
        destWidth: destSize.x,
        destHeight: destSize.y,
        canvasId: 'myCanvas',
        success: function (res) {
            console.log(res.tempFilePath);
            platform.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function (res) {
                    console.log("保存图片成功");
                    console.log(res);
                    platform.showToast({
                        title: '保存成功',
                        icon: 'success',
                        duration: 2000,
                    });
                    callback();
                },
                fail: function (err) {
                    console.log('失败');
                    console.log(err);
                    callback();
                    if (err.errMsg) {
                        platform.openSetting({
                            success: function (settingdata) {
                                console.log(settingdata);
                                if (settingdata.authSetting["scope.writePhotosAlbum"]) {
                                    console.log('获取权限成功，给出再次点击图片保存到相册的提示。');
                                }
                                else {
                                    console.log('获取权限失败，给出不给权限就无法正常使用的提示');
                                }
                            }
                        });
                    }
                }
            });
        }
    });
}
exports.CanvasToTempFilePath = CanvasToTempFilePath;
function getUserNickName(callback) {
    if (!platform)
        return;
    platform.getSetting({
        success: function (res) {
            if (!res.authSetting['scope.userInfo']) {
                platform.authorize({
                    scope: 'scope.userInfo',
                    success: function () {
                        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                        platform.startRecord();
                    }
                });
            }
        }
    });
    platform.getUserInfo({
        success: function (res) {
            var userInfo = res.userInfo;
            var nickName = userInfo.nickName;
            var avatarUrl = userInfo.avatarUrl;
            var gender = userInfo.gender; // 性别 0：未知、1：男、2：女
            var province = userInfo.province;
            var city = userInfo.city;
            var country = userInfo.country;
        }
    });
}
exports.getUserNickName = getUserNickName;
//微信提示弹窗
function showTipsWindow(tipTitle, tipContent, tipsConfirmTxt, confirmCallbak, cancelCallback) {
    if (Utils.isMiniGame() == false)
        return;
    platform.showModal({
        title: tipTitle || '提示',
        content: tipContent,
        confirmText: tipsConfirmTxt || '确定',
        success: function (res) {
            if (res.confirm) {
                console.log('用户点击确定');
                if (typeof (confirmCallbak) == 'function') {
                    confirmCallbak();
                }
                return true;
            }
            else if (res.cancel) {
                console.log('用户点击取消');
                if (typeof (cancelCallback) == 'function') {
                    cancelCallback();
                }
                return false;
            }
        }
    });
}
exports.showTipsWindow = showTipsWindow;
//激励广告
var rewardedVideoAd;
var rewardAdIdx = 0;
/**
 * @param  {function} onCloseCallback
 * @param  {function} onErrorCallback
 * @param  {} thisTarget
 */
function createRewardedVideoAd(onCloseCallback, onErrorCallback, thisTarget) {
    if (Utils.isMiniGame() == false)
        return;
    //基础库版本号 >= 2.0.4
    var sdkVersion = platform.getSystemInfoSync().SDKVersion;
    if (!sdkVersion || parseInt(sdkVersion.replace(/\./g, '')) < 204)
        return;
    var adInfo = { adUnitId: "" };
    //轮换广告
    if (rewardAdIdx >= LocalConfig_1.default.RewardAdList.length)
        rewardAdIdx = 0;
    console.log('激励广告：', LocalConfig_1.default.RewardAdList[rewardAdIdx]);
    adInfo.adUnitId = LocalConfig_1.default.RewardAdList[rewardAdIdx];
    if (rewardedVideoAd == null) {
        rewardedVideoAd = platform.createRewardedVideoAd(adInfo);
    }
    if (rewardedVideoAd == null)
        return;
    rewardedVideoAd.load().then(function () {
        rewardedVideoAd.show().catch(function (err) {
            console.log('创建激励广告失败：', err);
            // rewardedVideoAd.load().then(() => rewardedVideoAd.show().catch(err => {
            //     //二次失败回调
            //     onErrorCallback.call(thisTarget);
            // }));
            onErrorCallback.call(thisTarget);
        });
    });
    rewardAdIdx++;
    rewardedVideoAd.onError(onRewardAdError);
    // if(typeof(onLoadCallback) == 'function'){
    //     // rewardedVideoAd.onLoad(()=>{
    //     //     onLoadCallback.call(thisTarget, true);
    //     //     // rewardedVideoAd.show().catch(err => {
    //     //     //     rewardedVideoAd.load()
    //     //     //       .then(() => rewardedVideoAd.show());
    //     //     // });
    //     // });
    // }
    //关闭回调参数 res.isEnded:boolean 视频是否是在用户完整观看的情况下被关闭的
    var closeFunc = function (res) {
        console.log('是否看完广告：', res);
        if (res.isEnded && typeof (onCloseCallback) == 'function') {
            onCloseCallback.call(thisTarget);
        }
        rewardedVideoAd.offClose(closeFunc);
    };
    rewardedVideoAd.onClose(closeFunc);
}
exports.createRewardedVideoAd = createRewardedVideoAd;
function onRewardAdError(err) {
    console.log(err);
    rewardedVideoAd.offError(onRewardAdError);
}
//Banner广告
var bannerAd;
var bannerIdx = 0;
/**
 * @param  {{adUnitId:string, style:{left:number, top:number, width:number, height:number}}} adInfo
 */
function createBannerAd(adInfo) {
    if (Utils.isMiniGame() == false)
        return;
    // left: platform.getSystemInfoSync().windowWidth * 0.5 - 100,
    //         top: platform.getSystemInfoSync().windowHeight * 0.5 + 100,
    var sysInfo = platform.getSystemInfoSync();
    //基础库版本号 >= 2.0.4
    var sdkVersion = sysInfo.SDKVersion;
    if (!sdkVersion || parseInt(sdkVersion.replace(/\./g, '')) < 204)
        return;
    if (!adInfo)
        adInfo = {};
    //轮换广告
    if (bannerIdx >= LocalConfig_1.default.BannerAdList.length)
        bannerIdx = 0;
    console.log('Banner广告：', LocalConfig_1.default.BannerAdList[bannerIdx]);
    adInfo.adUnitId = LocalConfig_1.default.BannerAdList[bannerIdx];
    //位置
    adInfo.style = {
        left: 0,
        top: sysInfo.windowHeight - 100,
        width: sysInfo.windowWidth,
    };
    if (bannerAd == null) {
        bannerAd = platform.createBannerAd(adInfo);
    }
    else {
        bannerAd.destroy();
        bannerAd = platform.createBannerAd(adInfo);
    }
    if (bannerAd == null)
        return;
    //banner位置适配
    bannerAd.onResize(function (res) {
        bannerAd.style.top = sysInfo.windowHeight - res.height;
        if (sysInfo.model == 'iPhone X') {
            bannerAd.style.top -= 20;
        }
    });
    bannerAd.onError(onBannerAdError);
    bannerAd.show().catch(function (err) {
        console.log('创建Banner广告失败：', err);
    });
    bannerIdx++;
}
exports.createBannerAd = createBannerAd;
function onBannerAdError(err) {
    console.log(err);
    bannerAd.offError(onBannerAdError);
}
function hideBannerAd() {
    if (Utils.isMiniGame() == false)
        return;
    if (bannerAd == null)
        return;
    bannerAd.hide();
}
exports.hideBannerAd = hideBannerAd;
//下载远程文件
function downloadFile(url, callback) {
    if (Utils.isMiniGame() == false || !url)
        return;
    console.log('下载地址：', url);
    platform.downloadFile({
        url: url,
        success: function (res) {
            // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
            if (res.statusCode === 200) {
                if (typeof (callback) == 'function') {
                    callback(res.tempFilePath);
                }
            }
        }
    });
}
exports.downloadFile = downloadFile;
//获取微信屏幕尺寸
function getWindowSize() {
    if (Utils.isMiniGame() == false)
        return;
    var sysInfo = platform.getSystemInfoSync();
    console.log(sysInfo);
    return {
        width: sysInfo.windowWidth * sysInfo.pixelRatio,
        height: sysInfo.windowHeight * sysInfo.pixelRatio
    };
}
exports.getWindowSize = getWindowSize;
//获取用户授权信息
function getSetting(loginCode) {
    if (Utils.isMiniGame() == false)
        return;
    platform.getSetting({
        success: function (res) {
            // res.authSetting = {
            //   "scope.userInfo": true,    //是否授权用户信息
            //   "scope.userLocation": true,    //是否授权地理位置
            //   "scope.werun": false,  //是否授权微信运动步数
            //   "scope.writePhotosAlbum": false    //是否授权保存到相册
            // }
            console.log(res.authSetting);
            // if(typeof(callback) == 'function'){
            //     callback(res.authSetting["scope.userInfo"]);
            // }
            if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                platform.getUserInfo({
                    success: function (res) {
                        res.code = loginCode;
                        console.log(res);
                        // Data.LoginData.LoginReq('', res.code, res.encryptedData, res.iv);
                    }
                });
            }
            else {
                createUserInfoButton(loginCode);
                //显示授权
                LocalConfig_1.default.IsWxAuth = false;
                Manager.LoadingProgressManager.Inst.ShowWxLogin();
            }
        }
    });
}
exports.getSetting = getSetting;
//用户授权按钮
function createUserInfoButton(loginCode) {
    if (Utils.isMiniGame() == false)
        return;
    var sysInfo = platform.getSystemInfoSync();
    var button = platform.createUserInfoButton({
        type: 'text',
        text: '',
        // image: Config.UIConfig.ShareImagePath.InviteFriend,
        style: {
            left: 0,
            top: 0,
            width: sysInfo.windowWidth,
            height: sysInfo.windowHeight,
        }
    });
    button.onTap(function (res) {
        console.log(res);
        //确认授权后销毁按钮
        if (res.encryptedData) {
            res.code = loginCode;
            // Data.LoginData.LoginReq('', res.code, res.encryptedData, res.iv);
            button.destroy();
        }
    });
    GEvent_1.default.AddListener(Common.SceneLoginEid.LoginSuccess, function () { button.destroy(); }, this);
}
exports.createUserInfoButton = createUserInfoButton;
//检查版本更新
function checkUpdate(callback) {
    if (Utils.isMiniGame() == false)
        return;
    if (typeof (platform.getUpdateManager) === 'function') {
        var updateManager_1 = platform.getUpdateManager();
        updateManager_1.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.log('检查新版本结果：', res.hasUpdate);
            if (typeof callback == 'function') {
                //回调通知结果
                callback(res.hasUpdate);
            }
            //清理缓存
            if (res.hasUpdate) {
                window["wxDownloader"].cleanOldAssets();
            }
        });
        updateManager_1.onUpdateReady(function () {
            if (typeof callback == 'function') {
                //回调通知结果
                callback(true);
            }
            platform.showModal({
                title: '更新提示',
                content: '新版本已经准备好，即将重启游戏',
                showCancel: false,
                success: function (res) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager_1.applyUpdate();
                    }
                }
            });
        });
        updateManager_1.onUpdateFailed(function () {
            // 新版本下载失败
        });
    }
}
exports.checkUpdate = checkUpdate;
//向开放域发送消息
function postOpenRegionMessage(eventId) {
    if (Utils.isMiniGame() == false)
        return;
    var openDataContext = platform.getOpenDataContext();
    openDataContext.postMessage({
        eventId: eventId,
    });
}
exports.postOpenRegionMessage = postOpenRegionMessage;
//向开放域发送数据
function postOpenRegionData(data) {
    if (Utils.isMiniGame() == false)
        return;
    var openDataContext = platform.getOpenDataContext();
    openDataContext.postMessage(data);
}
exports.postOpenRegionData = postOpenRegionData;
/**
 * 上传游戏数据
 * https://developers.weixin.qq.com/minigame/dev/api/wx.setUserCloudStorage.html
 *
 * @param  {} data
 * @param  {Function} callback
 * @param  {} thisArg
 */
function setUserCloudStorage(data, callback, thisArg) {
    if (Utils.isMiniGame() == false)
        return;
    platform.setUserCloudStorage({
        KVDataList: data,
        success: function () {
            if (typeof callback == 'function')
                callback.call(thisArg);
        }
    });
}
exports.setUserCloudStorage = setUserCloudStorage;
//获取小游戏启动信息
//https://developers.weixin.qq.com/minigame/dev/api/wx.getLaunchOptionsSync.html
// launchInfo = {
//     scene,
//     query,
//     shareTicket,
//     referrerInfo:{
//         appId,
//         extraData
//     }
// }
function getLaunchOptionsSync() {
    if (Utils.isMiniGame() == false)
        return;
    var launchInfo = platform.getLaunchOptionsSync();
    console.log('启动信息：', launchInfo);
    return launchInfo;
}
exports.getLaunchOptionsSync = getLaunchOptionsSync;
//获取入口appid
function getLoginAppid() {
    if (Utils.isMiniGame() == false)
        return;
    var launchInfo = platform.getLaunchOptionsSync();
    if (launchInfo && launchInfo.referrerInfo) {
        console.log('入口Appid：', launchInfo.referrerInfo.appId);
        return launchInfo.referrerInfo.appId;
    }
    else {
        return null;
    }
}
exports.getLoginAppid = getLoginAppid;
//获取入口场景值
//https://developers.weixin.qq.com/minigame/dev/reference/scene-list.html
function getLaunchScene() {
    if (Utils.isMiniGame() == false)
        return;
    var launchInfo = platform.getLaunchOptionsSync();
    console.log('场景值：', launchInfo.scene);
    if (launchInfo) {
        return launchInfo.scene;
    }
    else {
        return null;
    }
}
exports.getLaunchScene = getLaunchScene;
//是否从“我的小程序进入”
function IsLoginFromFavourite() {
    if (Utils.isMiniGame() == false)
        return;
    var scene = getLaunchScene();
    // return scene == 1089 || scene == 1103;
    return scene == 1104 || scene == 1103;
}
exports.IsLoginFromFavourite = IsLoginFromFavourite;
/**
 * 跳转小程序
 * @param  {string} appId
 * @param  {string} path
 * @param  {string} extraData
 * @param  {string} envVersion
 * @param  {Function} callback
 * @param  {} thisArg
 */
function navigateToMiniProgram(appId, path, extraData, envVersion, callback, thisArg) {
    if (Utils.isMiniGame() == false || !appId)
        return;
    platform.navigateToMiniProgram({
        appId: appId,
        path: path,
        extraData: extraData,
        envVersion: envVersion,
        success: function (res) {
            // 打开成功
            if (typeof callback == 'function')
                callback.call(thisArg);
        }
    });
}
exports.navigateToMiniProgram = navigateToMiniProgram;
/**
 * 跳转到卖克星球
 * @param  {JSON} extraData
 * @param  {string} envVersion
 * @param  {Function} callback
 * @param  {} thisArg
 */
function goMaikeShopping(extraData, callback, thisArg, envVersion) {
    if (Utils.isMiniGame() == false)
        return;
    navigateToMiniProgram(LocalConfig_1.default.MiniProgramAppId.Maike, null, extraData, envVersion, callback, thisArg);
}
exports.goMaikeShopping = goMaikeShopping;
/**
 * 从其他小程序返回
 * @param  {Function} cb
 * @param  {} thisArg
 */
function onReturnGame(cb, thisArg) {
    if (Utils.isMiniGame() == false)
        return;
    if (typeof cb == 'function') {
        onShow(cb);
    }
}
exports.onReturnGame = onReturnGame;
/** @type {cc.Node} */
var subContentView;
//设置子域组件
function setSubContentView(subView) {
    if (!subView)
        return;
    subContentView = subView;
}
exports.setSubContentView = setSubContentView;
//获取子域组件
function getSubContentView() {
    return subContentView;
}
exports.getSubContentView = getSubContentView;
//隐藏或显示子域组件
/**
 * @param  {boolean} active
 */
// export function setSubContentActive(active){
//     if(!subContentView || typeof active != 'boolean') return;
//     subContentView.active = active;
//     subContentView.getComponent(cc.WXSubContextView).enabled = active;
// }
// //更新子域
// export function updateSubContentView(){
//     if(!subContentView) return;
//     subContentView.getComponent(cc.WXSubContextView).update();
// }
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"../Data/Data":24,"../Manager/Manager":39,"./GEvent":3,"./Utils":6}],8:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./LocalConfig"));
__export(require("./ResUrls"));
__export(require("./LoginResUrls"));
__export(require("./Define"));
__export(require("./UIConfig"));
__export(require("./DataConfig"));
__export(require("./NetConfig"));
__export(require("./LocalContent"));
__export(require("./ConfigUtils"));
__export(require("./StateConfig"));
__export(require("./ObjectConfig"));
},{"./ConfigUtils":9,"./DataConfig":10,"./Define":11,"./LocalConfig":12,"./LocalContent":13,"./LoginResUrls":14,"./NetConfig":15,"./ObjectConfig":16,"./ResUrls":17,"./StateConfig":18,"./UIConfig":19}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = require("./Config");
function searchConfig(config, param, value) {
    if (null == value) {
        console.error('Value is null');
        return;
    }
    if (Array.isArray(config) == false || config.length == 0) {
        console.error('Invalid or empty config array');
        return;
    }
    var target;
    config.some(function (v) {
        if (!v[param]) {
            console.error('Miss array param: ', param);
            return true;
        }
        else if (v[param] == value) {
            target = v;
            return true;
        }
    });
    return target;
}
exports.searchConfig = searchConfig;
//根据id搜索配置
function searchConfigById(config, value) {
    return searchConfig(config, 'Id', value);
}
exports.searchConfigById = searchConfigById;
//配置的内存缓存
var configCache = {};
var levelConfigCache = {};
function getConfigByKey(key) {
    if (!key)
        return;
    if (null == configCache[key]) {
        configCache[key] = Config.DataConfig.getLocalConfig(key);
        levelConfigCache[key] = [];
    }
    return configCache[key];
}
exports.getConfigByKey = getConfigByKey;
//通过Id搜寻配置
function getConfigById(key, id) {
    return searchConfigById(getConfigByKey(key), id);
}
exports.getConfigById = getConfigById;
//通过等级搜寻
function getConfigByLevel(key, level) {
    //id等于level
    return getConfigById(key, level);
}
exports.getConfigByLevel = getConfigByLevel;
//通过任意字段搜寻
function getConfigByArg(key, arg, value) {
    return searchConfig(getConfigByKey(key), arg, value);
}
exports.getConfigByArg = getConfigByArg;
//按字段排列配置
function sortConfigByParam(src, param, out) {
    if (!param || Array.isArray(src) == false) {
        console.error('Invalid param or source config');
        return;
    }
    if (Array.isArray(out) == false) {
        out = [];
    }
    src.some(function (v) {
        if (null == v[param]) {
            console.log('Config miss param: ', param);
            return true;
        }
        if (null == out[v[param]]) {
            out[v[param]] = [];
        }
        out[v[param]].push(v);
    });
    return out;
}
exports.sortConfigByParam = sortConfigByParam;
//输入配置，按字段返回同类配置数组
function filterConfigByParam(src, param, value, out) {
    if (!param || Array.isArray(src) == false) {
        console.error('Invalid param or source config');
        return;
    }
    if (Array.isArray(out) == false) {
        out = [];
    }
    src.some(function (v) {
        if (null == v[param]) {
            console.log('Config miss param: ', param);
            return true;
        }
        if (v[param] == value) {
            out.push(v);
        }
    });
    return out;
}
exports.filterConfigByParam = filterConfigByParam;
//输入配置key，按字段返回同类配置数组
function filterConfig(key, param, value, out) {
    return filterConfigByParam(getConfigByKey(key), param, value, out);
}
exports.filterConfig = filterConfig;
},{"./Config":8}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Common = require("../Common/Common");
var Config = require("./Config");
//本地配置存储前缀
var PREFIX_LOCALCONFIG_KEY = "configlocal_prefix";
//对应后端的表格tableId
var tableIdNum = 1;
exports.LOCALCONFIG_KEY = {
    //修为阶段
    CULTIVATION_PERIOD: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
};
var DataConfig = /** @class */ (function () {
    function DataConfig() {
        this.configData = {};
    }
    DataConfig.getInstance = function () {
        if (this._instance == undefined) {
            this._instance = new DataConfig();
        }
        return this._instance;
    };
    Object.defineProperty(DataConfig, "instance", {
        get: function () {
            if (this._instance == undefined) {
                this._instance = new DataConfig();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    DataConfig.getConfigByName = function (key) {
        return this.instance.getConfigByName(key);
    };
    DataConfig.getConfigById = function (key, id) {
        return this.instance.getConfigById(key, id);
    };
    DataConfig.searchConfig = function (config, param, value) {
        var target = Common.searchArray(config, param, value);
        if (!target) {
            console.error('找不到配置：', param, value);
            return;
        }
        else {
            return target;
        }
    };
    DataConfig.searchConfigById = function (config, id) {
        return this.searchConfig(config, 'Id', id);
    };
    DataConfig.getLocalConfigById = function (key, id) {
        var config = this.getLocalConfig(key);
        return this.searchConfigById(config, id);
    };
    DataConfig.prototype.loadConfig = function (url, key, cb) {
        var _this = this;
        Laya.loader.load(url, Laya.Handler.create(this, function (config) {
            config = JSON.stringify(config);
            var configJson = JSON.parse(config);
            _this.configData[key] = configJson;
            cb && cb();
        }));
    };
    DataConfig.prototype.initConfig = function (cb) {
        var _this = this;
        Laya.loader.load(DataConfig.JSONHOT_URL, Laya.Handler.create(this, function (config) {
            config = JSON.stringify(config);
            var hotJsons = JSON.parse(config);
            if (Array.isArray(hotJsons)) {
                var total_1 = hotJsons.length;
                hotJsons.forEach(function (cfg, idx) {
                    if (idx >= total_1 - 1) {
                        _this.loadConfig(cfg.Url, cfg.Type, cb);
                    }
                    else {
                        _this.loadConfig(cfg.Url, cfg.Type);
                    }
                });
            }
        }));
    };
    //本地缓存
    DataConfig.prototype.storeConfig = function (key, data) {
        //后端发来json字符串
        Common.saveLocalStorage(PREFIX_LOCALCONFIG_KEY + key, data);
    };
    DataConfig.prototype.saveAllConfig = function (data) {
        Common.saveLocalJson(Config.DataConfig.JSON_CONFIGS, data);
    };
    DataConfig.prototype.saveConfigVersion = function (data) {
        //必须是数组
        if (Array.isArray(data) == false || data.length == 0)
            return;
        var toLocal = new Array();
        data.forEach(function (v) {
            toLocal.push(new Config.ConfigDataParam(v.TableId, v.Version));
        });
        Common.saveLocalJson(Config.DataConfig.JSON_CONFIGS, toLocal);
    };
    DataConfig.getLocalConfig = function (key) {
        if (!key) {
            return console.error('Invalid config key: ', key);
        }
        var config = Common.getLocalStorage(key);
        if (!config) {
            console.error('配置为空：', key);
        }
        else {
            return JSON.parse(config);
        }
    };
    DataConfig.getConfigVersion = function (config) {
        return config && config.Version;
    };
    DataConfig.getConfigVersionByKey = function (key) {
        return this.getConfigVersion(this.getLocalConfig(key));
    };
    Object.defineProperty(DataConfig, "localConfigs", {
        //获取本地所有配置
        get: function () {
            return Common.getLocalJson(DataConfig.JSON_CONFIGS) || [];
        },
        enumerable: true,
        configurable: true
    });
    DataConfig.prototype.getConfigByName = function (key) {
        return this.configData[key];
    };
    DataConfig.prototype.getConfigById = function (key, id) {
        if (this.configData[key]) {
            var configs = this.configData[key];
            for (var i = 0; i < configs.length; i++) {
                if (configs[i]['id'] == id) {
                    return configs[i];
                }
            }
        }
        return null;
    };
    DataConfig.prototype.getConfigsByType = function (key, type) {
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
    };
    DataConfig.IsConfigLoaded = false; //是否已加载配置
    DataConfig.JSONHOT_URL = 'res/config/JsonHot.json';
    //配置id，须与res/Config/JsonHot.Type相同
    DataConfig.CULTIVATION_KEY = "Cultivation";
    DataConfig.JSON_CONFIGS = "json_configs";
    return DataConfig;
}());
exports.DataConfig = DataConfig;
var BaseConfigData = /** @class */ (function () {
    function BaseConfigData() {
    }
    Object.defineProperty(BaseConfigData, "Config", {
        get: function () {
            if (!this.config) {
                this.config = DataConfig.getLocalConfig(this.CONFIG_KEY);
            }
            return this.config;
        },
        enumerable: true,
        configurable: true
    });
    BaseConfigData.getConfigById = function (id) {
        return DataConfig.searchConfigById(this.Config, id);
    };
    BaseConfigData.getConfigByLevel = function (level) {
        return Common.searchArray(this.Config, 'Level', level);
    };
    return BaseConfigData;
}());
exports.BaseConfigData = BaseConfigData;
//---------------------------------配置字段----------------------------------------------
//模板配置
var ConfigType = /** @class */ (function () {
    function ConfigType() {
    }
    return ConfigType;
}());
exports.ConfigType = ConfigType;
//修为配置
var CultivationPeriod = /** @class */ (function (_super) {
    __extends(CultivationPeriod, _super);
    function CultivationPeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CultivationPeriod;
}(ConfigType));
exports.CultivationPeriod = CultivationPeriod;
},{"../Common/Common":1,"./Config":8}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventClass = /** @class */ (function () {
    function EventClass(key, listener, target) {
        this.Key = key;
        this.Listener = listener;
        this.Target = target;
    }
    return EventClass;
}());
exports.EventClass = EventClass;
var ListenerClass = /** @class */ (function () {
    function ListenerClass() {
        this.Listeners = new Array();
        this.Targets = new Array();
    }
    ListenerClass.prototype.addListener = function (listener, target) {
        this.Listeners.push(listener);
        this.Targets.push(target);
    };
    ListenerClass.prototype.removeListener = function (lisener) {
        var idx = this.Listeners.indexOf(lisener);
        if (idx >= 0) {
            delete this.Listeners[idx];
            delete this.Targets[idx];
        }
    };
    return ListenerClass;
}());
exports.ListenerClass = ListenerClass;
//版本控制
var VersionConfig;
(function (VersionConfig) {
    //开发版本
    VersionConfig[VersionConfig["Develop"] = 0] = "Develop";
    //对外版本
    VersionConfig[VersionConfig["Release"] = 1] = "Release";
})(VersionConfig = exports.VersionConfig || (exports.VersionConfig = {}));
//池类型
exports.PoolType = {
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
};
//池物品类型
exports.PoolItemKey = {
    //玩家身体
    BodySpine: 'BodySpine',
    //换装模板
    DressTemplate: 'DressTemplate',
};
//随机语句类型
exports.RandWordType = {
    //渡劫
    Cultivation: 1,
};
//广告类型
var AwardType;
(function (AwardType) {
    AwardType[AwardType["Not"] = 0] = "Not";
    AwardType[AwardType["AD"] = 1] = "AD";
    AwardType[AwardType["Share"] = 2] = "Share";
})(AwardType = exports.AwardType || (exports.AwardType = {}));
//广告优先级配置
var AdConfigType;
(function (AdConfigType) {
    //激励视频优先
    AdConfigType[AdConfigType["Video"] = 0] = "Video";
    //分享优先
    AdConfigType[AdConfigType["Share"] = 1] = "Share";
})(AdConfigType = exports.AdConfigType || (exports.AdConfigType = {}));
//分享语句类型
var ShareWordEnum;
(function (ShareWordEnum) {
    ShareWordEnum[ShareWordEnum["CardWords"] = 1] = "CardWords";
    ShareWordEnum[ShareWordEnum["HamsterWords"] = 2] = "HamsterWords";
    ShareWordEnum[ShareWordEnum["CoinWords"] = 3] = "CoinWords";
    ShareWordEnum[ShareWordEnum["OtherWords"] = 4] = "OtherWords";
})(ShareWordEnum = exports.ShareWordEnum || (exports.ShareWordEnum = {}));
//模型数据定义
var ModelDataStruct = /** @class */ (function () {
    function ModelDataStruct(msp, ani, aniState) {
        this.msp = msp;
        this.ani = ani;
        this.aniState = aniState;
    }
    return ModelDataStruct;
}());
exports.ModelDataStruct = ModelDataStruct;
//公共确认弹窗类型
exports.ConfirmWindowType = {
    //文字
    Content: 1,
    //奖励物品
    Reward: 2,
    //文字+奖励
    ContentAndReward: 3,
};
//弹出窗口数据
var PopupWindowData = /** @class */ (function () {
    function PopupWindowData(content, yesBtnCallback, windowType, rewardData, btnYesTxt, btnCancelTxt) {
        this.Content = content;
        this.YesBtnCallback = yesBtnCallback;
        this.YesBtnContent = btnYesTxt ? btnYesTxt : '确定';
        this.CancelBtnContent = btnCancelTxt ? btnCancelTxt : '取消';
        this.WindowType = windowType;
        this.RewardData = rewardData;
    }
    return PopupWindowData;
}());
exports.PopupWindowData = PopupWindowData;
},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Common = require("../Common/Common");
var LocalConfig = /** @class */ (function () {
    function LocalConfig() {
    }
    //存储用户名
    LocalConfig.GetAcountName = function () {
        return Common.getLocalStorage("AcountName") || '';
    };
    LocalConfig.SaveAcountName = function (_value) {
        Common.saveLocalStorage("AcountName", _value);
    };
    LocalConfig.Cultivation_Fly_Interval = 6; //修为飘字间隔/毫秒
    LocalConfig.Adobe_Production_Interval = 10; //洞府生产间隔/毫秒
    LocalConfig.Tower_Max_Invite_Num = 4; //镇妖塔最大可邀请数量
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
    //用户是否已授权
    LocalConfig.IsWxAuth = true;
    return LocalConfig;
}());
exports.default = LocalConfig;
},{"../Common/Common":1}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalContent = {
    Invite: '邀请',
    NetError: '网络开小差',
    Yes: '确定',
    ComingSoon: '暂未开放',
    GetAward: '领取',
    FlyingTipsDefault: '恭喜获得奖励',
    ConsAward: "恭喜获得",
    ShareFailTips: "分享相同朋友圈无法获得奖励",
};
},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginResUrls = [
    { url: 'res/ChooseService/ChooseService.txt', type: Laya.Loader.BUFFER },
    { url: 'res/LoadingUI/LoadingUI.txt', type: Laya.Loader.BUFFER },
    { url: 'res/LoadingUI/LoadingUI_atlas2.png', type: Laya.Loader.IMAGE },
];
},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpReqbodyBase = /** @class */ (function () {
    function HttpReqbodyBase(key, modCode, reqCode, session, accName, reqdata) {
        if (typeof (reqdata) == "string") {
            //如已转换则转回JSON
            reqdata = JSON.parse(reqdata);
        }
        this.Key = key;
        this.ModuleCode = modCode;
        this.ReqCode = reqCode;
        this.Session = session;
        this.AccountKey = accName;
        this.ReqData = reqdata;
        HttpReqbodyBase.reqbodys[key] = this;
    }
    HttpReqbodyBase.reqbodys = {};
    return HttpReqbodyBase;
}());
exports.HttpReqbodyBase = HttpReqbodyBase;
//请求结构
exports.ReqData = {
    Login: { "Name": "tandy" },
    AdobePoolUpgrade: { "Type": 1 },
    JoinSect: { "GroupStageId": 1, "GroupId": 1 },
    LearnSectKf: { "SkillId": 1 },
    UpgradeKongfa: { "SkillType": 1, "SkillId": 1 },
    StartSectTask: { "TaskId": 1 },
    GrabSectTaskAward: { "TaskId": 1 },
    SellBagItem: { "Position": 1, "Type": 1, "Id": 1, "Num": 1 },
    UseBagItem: { "Position": 1, "Type": 1, "Id": 1, "Num": 1 },
    GmAddBagItem: { "Type": 1, "Id": 1, "Num": 1 },
    //挑战镇妖塔
    GoMonsterTower: { "ChallengeLevel": 1, "HelpHeros": new Array() },
};
//镇妖塔邀请仙友数据
var HelpHerosDataClass = /** @class */ (function () {
    function HelpHerosDataClass(key, isRobot) {
        this.Key = key;
        this.IsRobot = isRobot;
    }
    Object.defineProperty(HelpHerosDataClass, "NoneHelpHero", {
        //无助战英雄
        get: function () {
            return [exports.EmptyHelpHero, exports.EmptyHelpHero, exports.EmptyHelpHero, exports.EmptyHelpHero];
        },
        enumerable: true,
        configurable: true
    });
    return HelpHerosDataClass;
}());
exports.HelpHerosDataClass = HelpHerosDataClass;
//助战英雄空位
exports.EmptyHelpHero = new HelpHerosDataClass('', false);
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
})(ReqbodyKey = exports.ReqbodyKey || (exports.ReqbodyKey = {}));
exports.NetConfig = {
    RequestUrl: "http://7.lightpaw.com/truth",
    // HttpRequestUrl:"http://706.lightpaw.com:7720/happy_travel",
    HttpRequestUrl: "https://9z9acv901g.execute-api.cn-northwest-1.amazonaws.com.cn/beta",
    LocalRequestUrl: "http://7.lightpaw.com/truth",
    LocalWechatRequestUrl: "http://svf37e.natappfree.cc/happy_travel",
    GMUrl: "http://7.lightpaw.com/happy_travel/reward",
    TempName: "",
};
//连接状态
var HttpConnectState;
(function (HttpConnectState) {
    HttpConnectState[HttpConnectState["Error"] = 0] = "Error";
    HttpConnectState[HttpConnectState["Success"] = 1] = "Success";
})(HttpConnectState = exports.HttpConnectState || (exports.HttpConnectState = {}));
function getRespData(data) {
    return data && data.RespData;
}
exports.getRespData = getRespData;
//拉取配置请求体
var ConfigDataParam = /** @class */ (function () {
    function ConfigDataParam(id, version, name, data) {
        this.TableId = id;
        this.Version = version;
        if (name) {
            this.TableName = name;
        }
        if (data) {
            this.Data = data;
        }
    }
    return ConfigDataParam;
}());
exports.ConfigDataParam = ConfigDataParam;
exports.ConfigReqData = new Array();
//登录请求体
var LoginReqData = /** @class */ (function () {
    function LoginReqData(name, pw, jscode, encryptedData, iv) {
        this.Name = name;
        this.Password = pw;
        this.JsCode = jscode;
        this.EncryptedData = encryptedData;
        this.Iv = iv;
    }
    return LoginReqData;
}());
exports.LoginReqData = LoginReqData;
var AdobeAddWorkerReqData = /** @class */ (function () {
    function AdobeAddWorkerReqData(workType) {
        this.WorkType = workType;
    }
    return AdobeAddWorkerReqData;
}());
exports.AdobeAddWorkerReqData = AdobeAddWorkerReqData;
},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectConfig = {
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
    SPEED_HAND: 0.03,
};
},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urls = [
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
exports.urls = urls;
},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateConfig = {
    IDEL: 'IDEL',
    DEAD: 'DEAD',
    BACK_PASSED: 'BACK_PASSED',
    MOVE_FORWARD: 'MOVE_FORWARD',
    MOVE_BACK: 'MOVE_BACK',
    STOP: 'STOP',
    DESK_LEAVE: 'DESK_LEAVE',
    DESK_ENTER: 'DESK_ENTER',
};
},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewKit = {
    //加载菊花
    LoadingMain: {
        Key: "LoadingMain",
        Pkg: "LoadingUI",
        Com: "LoadingMain"
    },
    //选择服务器
    ChooseService: {
        Key: "ChooseService",
        PkgAdrs: "ChooseService/ChooseService",
        Pkg: "ChooseService",
        Com: "ChooseService"
    },
    //读条进度
    LoadingProgress: {
        Key: "LoadingProgress",
        PkgAdrs: "res/LoadingUI/LoadingUI",
        Pkg: "LoadingUI",
        Com: "LoadingProgress"
    },
    //主界面
    MainMenu: {
        Key: "MainMenu",
        PkgAdrs: "res/MainMenu/MainMenu",
        Pkg: "MainMenu",
        Com: "MainMenu"
    },
    //修炼操作
    CultivationInfo: {
        Key: "CultivationInfo",
        PkgAdrs: "res/MainMenu/MainMenu",
        Pkg: "MainMenu",
        Com: "CultivationInfo"
    },
    //飘字
    TipsLabel: {
        Key: "TipsLabel",
        PkgAdrs: "Public/Public",
        Pkg: "Public",
        Com: "TipsLabel"
    },
    //飘字
    ResProductionTips: {
        Key: "ResProductionTips",
        PkgAdrs: "Adobe/Adobe",
        Pkg: "Adobe",
        Com: "ResProductionTips"
    },
    //洞府
    AdobeMain: {
        Key: "AdobeMain",
        PkgAdrs: "Adobe/Adobe",
        Pkg: "Adobe",
        Com: "AdobeMain"
    },
    //公用确认窗口
    PublicConfirmation: {
        Key: "PublicConfirmation",
        PkgAdrs: "Public/Public",
        Pkg: "Public",
        Com: "PublicConfirmation"
    },
    //洞府升级
    AdobeUpgrade: {
        Key: "AdobeUpgrade",
        PkgAdrs: "Adobe/Adobe",
        Pkg: "Adobe",
        Com: "AdobeUpgrade"
    },
    //加入门派
    JoinSect: {
        Key: "JoinSect",
        Pkg: "Sect",
        Com: "JoinSect"
    },
    //加入门派
    SectMain: {
        Key: "SectMain",
        Pkg: "Sect",
        Com: "SectMain"
    },
    //门派修炼塔
    TrainTower: {
        Key: "TrainTower",
        Pkg: "Sect",
        Com: "TrainTower"
    },
    //门派任务
    SectTask: {
        Key: "SectTask",
        Pkg: "Sect",
        Com: "SectTask"
    },
    //学习功法
    LearnKongfa: {
        Key: "LearnKongfa",
        Pkg: "Sect",
        Com: "LearnKongfa"
    },
    //学习功法
    UpgradeKongfa: {
        Key: "UpgradeKongfa",
        Pkg: "Sect",
        Com: "UpgradeKongfa"
    },
    //角色
    PlayerMain: {
        Key: "PlayerMain",
        Pkg: "Player",
        Com: "PlayerMain"
    },
    //角色属性
    PlayerAttribution: {
        Key: "PlayerAttribution",
        Pkg: "Player",
        Com: "PlayerAttribution"
    },
    //增加储物袋空间
    AddBagNum: {
        Key: "AddBagNum",
        Pkg: "Player",
        Com: "AddBagNum"
    },
    //修炼帮助
    CultivationEfficiency: {
        Key: "CultivationEfficiency",
        Pkg: "MainMenu",
        Com: "CultivationEfficiency"
    },
    //GM加物品
    GmAddBagItem: {
        Key: "GmAddBagItem",
        Pkg: "Player",
        Com: "GmAddBagItem"
    },
    //仙途主界面
    RoadToDietyMain: {
        Key: "RoadToDietyMain",
        Pkg: "RoadToDiety",
        Com: "RoadToDietyMain"
    },
    //战斗过程
    BattleInfo: {
        Key: "BattleInfo",
        Pkg: "RoadToDiety",
        Com: "BattleInfo"
    },
    //扫荡仙途
    SweepChapters: {
        Key: "SweepChapters",
        Pkg: "RoadToDiety",
        Com: "SweepChapters"
    },
    //镇妖塔
    MonsterTower: {
        Key: "MonsterTower",
        Pkg: "RoadToDiety",
        Com: "MonsterTower"
    },
    //镇妖塔首杀榜
    FirstBloodRank: {
        Key: "FirstBloodRank",
        Pkg: "RoadToDiety",
        Com: "FirstBloodRank"
    },
    //仙友圈
    FriendCircle: {
        Key: "FriendCircle",
        Pkg: "RoadToDiety",
        Com: "FriendCircle"
    },
    //仙途棋盘
    ChessMap: {
        Key: "ChessMap",
        Pkg: "ChessBoard",
        Com: "ChessMap"
    },
    //转生
    Rebirth: {
        Key: "Rebirth",
        Pkg: "MainMenu",
        Com: "Rebirth"
    },
    //门派藏经阁入口
    JingLibEntrance: {
        Key: "JingLibEntrance",
        Pkg: "Sect",
        Com: "JingLibEntrance"
    },
    //门派藏经阁
    JingLib: {
        Key: "JingLib",
        Pkg: "Sect",
        Com: "JingLib"
    },
};
var UIConfig = /** @class */ (function () {
    function UIConfig() {
    }
    UIConfig.LoginPackageLoaded = false; //是否已加载登录UI包
    //登录加载的UI包
    UIConfig.UIPkgs = [
        "Icons",
        "Public",
        "MainMenu",
    ];
    //微信小游戏子包
    UIConfig.SubPkgs = [
        "subLibs",
    ];
    // UI渲染分层
    UIConfig.SortingOrder = {
        //主界面按钮
        MainUI: 100,
        // 信息同步
        MsgSync: 150,
        // 场景加载
        SceneLoading: 200,
        // 新手引导
        NoviceGuide: 250,
        // 新功能开启
        NewFunctionOpen: 260,
        // 人物对白
        Dialog: 300,
        // 弹出窗口
        Popup: 350,
        // 全屏展示
        FullScreenShow: 450,
        // 网络信号
        NetSignal: 500,
        // 网络弹框
        NetError: 550,
        // 系统广播
        SystemMsg: 600,
        // 消息提示
        MsgTips: 650,
        // 点击特效
        ClickEffect: 700,
        // 服务器时间
        ServerTime: 1000,
        // gm指令
        GmOrder: 1001,
    };
    //Spine路径
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
    //声音
    UIConfig.SoundPath = {
        ButtonClick: "ui://Public/点击按钮",
    };
    //形象图标配置
    UIConfig.PortraitPath = {
        Yaoyao: 'ui://Public/夭夭_全身',
    };
    //小图标配置
    UIConfig.SmallIconPath = {
        Yaoyao: 'ui://Public/夭夭小头像',
    };
    UIConfig.ShareImagePath = {
        InviteFriend: 'https://mmocgame.qpic.cn/wechatgame/HCloKXpYh4AIar21iavBHUs1BgS3f4uGsnYX5ibKduOiarAdgTV9GwJkStROPjbrakL/0',
    };
    //Spine动画切换
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
    //强制引导
    UIConfig.GuiderName = {
        RoleMenuGuide: "RoleMenuGuide",
    };
    UIConfig.FontColor = {
        FightRec_Me: '#FFFF00',
    };
    return UIConfig;
}());
exports.UIConfig = UIConfig;
},{}],20:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./RigidObject"));
__export(require("./ObjectProxy"));
__export(require("./ObjectState"));
},{"./ObjectProxy":21,"./ObjectState":22,"./RigidObject":23}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("../Manager/Manager");
var Config = require("../Config/Config");
var Config_1 = require("../Config/Config");
var ObjectProxy = /** @class */ (function () {
    function ObjectProxy() {
    }
    ObjectProxy.createHand = function () {
        var hand = Manager.SceneManager.CurScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(Config_1.ObjectConfig.HAND_SIZE.x, Config_1.ObjectConfig.HAND_SIZE.y, Config_1.ObjectConfig.HAND_SIZE.z)));
        this.addPhysics(hand, Config_1.ObjectConfig.HAND_SIZE);
        return hand;
    };
    ObjectProxy.createDesk = function () {
        var desk = Manager.SceneManager.CurScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(Config_1.ObjectConfig.DESK_SIZE.x, Config_1.ObjectConfig.DESK_SIZE.y, Config_1.ObjectConfig.DESK_SIZE.z)));
        this.addPhysics(desk, Config_1.ObjectConfig.DESK_SIZE);
        return desk;
    };
    ObjectProxy.getObj = function (key) {
        switch (key) {
            case Config.PoolType.Hand:
                return Manager.PoolManager.getObjByFunc(Config.PoolType.Hand, this.createHand.bind(this));
            case Config.PoolType.Desk:
                return Manager.PoolManager.getObjByFunc(Config.PoolType.Desk, this.createDesk.bind(this));
        }
    };
    ObjectProxy.addPhysics = function (target, size) {
        if (!target || !size)
            return;
        var rigidBody = target.addComponent(Laya.Rigidbody3D); //Rigidbody3D可与StaticCollider和RigidBody3D产生碰撞
        rigidBody.colliderShape = new Laya.BoxColliderShape(size.x, size.y, size.z);
        rigidBody.gravity = Laya.Vector3._ZERO;
        rigidBody.isTrigger = true;
        rigidBody.isKinematic = true;
    };
    ObjectProxy.addScript = function (rigidObj, script) {
        if (!rigidObj || !script)
            return;
        return rigidObj.Obj.addComponent(script);
    };
    ObjectProxy.changeModel = function (oldModel, oldPath, newPath) {
        if (!oldModel || !oldModel || !newPath || oldPath == newPath)
            return;
        if (oldModel) {
            Manager.PoolManager.recover(oldPath, oldModel);
        }
        var model = Manager.PoolManager.getItem(newPath);
        if (model instanceof Laya.MeshSprite3D) {
            oldModel = model;
        }
        else {
            Manager.SpawnManager.Load3dModel(newPath, function (mdata) {
                oldModel = mdata.msp;
            }, this);
        }
    };
    return ObjectProxy;
}());
exports.ObjectProxy = ObjectProxy;
},{"../Config/Config":8,"../Manager/Manager":39}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectState = /** @class */ (function () {
    function ObjectState(state, onUpdate, onEnter, onExit) {
        this.State = state;
        this.OnUpdate = onUpdate;
        this.OnEnter = onEnter;
        this.OnExit = onExit;
    }
    ObjectState.prototype.Update = function () {
        if (this.OnUpdate) {
            this.OnUpdate();
        }
    };
    return ObjectState;
}());
exports.ObjectState = ObjectState;
},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("../Manager/Manager");
var Core = require("../Core/Core");
var RigidObject = /** @class */ (function () {
    function RigidObject(obj) {
        var states = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            states[_i - 1] = arguments[_i];
        }
        this.Obj = obj;
        this.State = new Manager.StateBase();
        this.initStateList.apply(this, states);
        this.Rigid3D = obj.getComponent(Laya.Rigidbody3D);
        if (!this.Rigid3D) {
            console.error("Rigid Object miss rigidbody3d!");
        }
    }
    Object.defineProperty(RigidObject.prototype, "Position", {
        get: function () {
            return this.Obj.transform.position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RigidObject.prototype, "CurState", {
        get: function () {
            return this.State.curState;
        },
        enumerable: true,
        configurable: true
    });
    RigidObject.prototype.getScript = function (script) {
        return this.Obj.getComponent(script);
    };
    RigidObject.prototype.addScript = function (script) {
        if (!script)
            return;
        return this.Obj.addComponent(script);
    };
    RigidObject.prototype.changeModel = function (path) {
        if (!path || this._modelPath == path)
            return;
        Core.ObjectProxy.changeModel(this.Obj, this._modelPath, path);
        this._modelPath = path;
    };
    RigidObject.prototype.changeObj = function (key) {
        Manager.PoolManager.recover(key, this.Obj);
        this.Obj = Core.ObjectProxy.getObj(key);
    };
    RigidObject.prototype.setPosition = function (pos) {
        if (this.Obj)
            this.Obj.transform.position = pos;
    };
    RigidObject.prototype.initStateList = function () {
        var states = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            states[_i] = arguments[_i];
        }
        this.StateList = states;
    };
    RigidObject.prototype.changeState = function (state) {
        if (!state)
            return;
        this.State.changeState(state);
    };
    RigidObject.prototype.updateState = function () {
        var _this = this;
        if (!Array.isArray(this.StateList))
            return;
        this.StateList.some(function (st) {
            if (st.State == _this.CurState) {
                st.Update();
                return true;
            }
        }, this);
    };
    return RigidObject;
}());
exports.RigidObject = RigidObject;
},{"../Core/Core":20,"../Manager/Manager":39}],24:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./DataBase"));
},{"./DataBase":25}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = require("../Config/Config");
var Manager = require("../Manager/Manager");
var Common = require("../Common/Common");
var GEvent_1 = require("../Common/GEvent");
var HttpReqbodyBase = /** @class */ (function () {
    function HttpReqbodyBase(modCode, reqCode, session, accName, reqdata) {
        if (typeof (reqdata) == "string") {
            //如已转换则转回JSON
            reqdata = JSON.parse(reqdata);
        }
        this.ModuleCode = modCode;
        this.ReqCode = reqCode;
        this.Session = session;
        this.AccountKey = accName;
        this.ReqData = reqdata;
    }
    return HttpReqbodyBase;
}());
exports.HttpReqbodyBase = HttpReqbodyBase;
var DataStruct = /** @class */ (function (_super) {
    __extends(DataStruct, _super);
    function DataStruct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataStruct.SendReq = function (reqData) {
        this.reqBody.ReqData = reqData;
        this._NetMgr = new Manager.HttpManager();
        this._NetMgr.Connect('', this.reqBody, this.onResponse.bind(this));
    };
    Object.defineProperty(DataStruct, "ReqBody", {
        set: function (body) {
            if (!this.reqBody)
                this.reqBody = body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataStruct, "Data", {
        set: function (data) { },
        enumerable: true,
        configurable: true
    });
    DataStruct.onConnectEnd = function (data) { };
    DataStruct.onResponse = function (data) {
        if (data && data.RespData != null) {
            this.Data = data.RespData;
        }
        //预留接口，避免后端没有返回数据
        this.onConnectEnd(data);
        this.reqBody.ReqData = null;
    };
    Object.defineProperty(DataStruct, "NetMgr", {
        get: function () {
            if (!this._NetMgr) {
                this._NetMgr = new Manager.HttpManager();
            }
            return this._NetMgr;
        },
        enumerable: true,
        configurable: true
    });
    DataStruct.Connect = function (reqkey, reqbody, callback, isShowLoading, IsGm) {
        this.NetMgr.Connect(reqkey, reqbody, this.OnHttpRequestComplete.bind(this), isShowLoading, IsGm);
        this._reqkeys.push(reqkey);
    };
    DataStruct.OnHttpRequestComplete = function (data, reqkey, reqData) {
    };
    ;
    DataStruct._reqkeys = new Array();
    return DataStruct;
}(Common.EventDispather));
exports.DataStruct = DataStruct;
var DevReqBody = /** @class */ (function (_super) {
    __extends(DevReqBody, _super);
    function DevReqBody(modCode, reqCode, reqData) {
        var _this = this;
        if (!LoginData.Session) {
            console.error('Pls login first');
            return;
        }
        ;
        _this = _super.call(this, modCode, reqCode, LoginData.Session, LoginData.AccountKey, reqData) || this;
        return _this;
    }
    Object.defineProperty(DevReqBody, "isInited", {
        get: function () {
            return this._isBodyInited;
        },
        enumerable: true,
        configurable: true
    });
    DevReqBody._isBaseBodyInited = false;
    DevReqBody._isBodyInited = false;
    return DevReqBody;
}(HttpReqbodyBase));
exports.DevReqBody = DevReqBody;
//玩家数据
var PlayerData = /** @class */ (function () {
    function PlayerData() {
    }
    Object.defineProperty(PlayerData, "Data", {
        set: function (data) {
            if (null != data.NickName) {
                this.NikeName = data.NickName;
            }
            if (null != data.Avatar) {
                this.Avatar = data.Avatar;
            }
            GEvent_1.default.Dispatch(Common.DataPlayerEid.Refreshed);
        },
        enumerable: true,
        configurable: true
    });
    PlayerData.Point = 0;
    return PlayerData;
}());
exports.PlayerData = PlayerData;
exports.ShareWord = {
    "CardWords": new Array(),
    "HamsterWords": new Array(),
    "CoinWords": new Array(),
    "OtherWords": new Array() //其他分享语句
};
function GetShareWord(shareType) {
    var rand = 0;
    switch (shareType) {
        case Config.ShareWordEnum.CardWords:
            rand = Math.floor(Math.random() * exports.ShareWord.CardWords.length);
            return exports.ShareWord.CardWords[rand].ShareWord;
        case Config.ShareWordEnum.HamsterWords:
            rand = Math.floor(Math.random() * exports.ShareWord.HamsterWords.length);
            return exports.ShareWord.HamsterWords[rand].ShareWord;
        case Config.ShareWordEnum.CoinWords:
            rand = Math.floor(Math.random() * exports.ShareWord.CoinWords.length);
            return exports.ShareWord.CoinWords[rand].ShareWord;
        default:
            rand = Math.floor(Math.random() * exports.ShareWord.OtherWords.length);
            return exports.ShareWord.OtherWords[rand].ShareWord;
    }
}
exports.GetShareWord = GetShareWord;
//配置数据
var ConfigData = /** @class */ (function (_super) {
    __extends(ConfigData, _super);
    function ConfigData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ConfigData, "Data", {
        set: function (resp_data) {
            setConfigData(resp_data);
        },
        enumerable: true,
        configurable: true
    });
    return ConfigData;
}(DataStruct));
exports.ConfigData = ConfigData;
function setConfigData(resp_data) {
    console.log('配置数据：', resp_data);
    if (!resp_data)
        return;
    Config.DataConfig.instance.saveConfigVersion(resp_data);
    for (var i in resp_data) {
        if (resp_data[i]) {
            Config.DataConfig.instance.storeConfig(resp_data[i].TableId, resp_data[i].Data);
        }
    }
    Config.DataConfig.IsConfigLoaded = true;
    GEvent_1.default.Dispatch(Common.SceneLoginEid.ConfigLoaded);
}
//登录数据
var LoginData = /** @class */ (function (_super) {
    __extends(LoginData, _super);
    function LoginData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LoginData, "IsLogined", {
        get: function () {
            return this._isLogined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginData, "Data", {
        set: function (data) {
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
            this.dispatchEvent(Common.SceneLoginEid.LoginSuccess);
        },
        enumerable: true,
        configurable: true
    });
    LoginData._isLogined = false; //是否已登录
    return LoginData;
}(DataStruct));
exports.LoginData = LoginData;
//升级数据
var UpgradeData = /** @class */ (function (_super) {
    __extends(UpgradeData, _super);
    function UpgradeData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UpgradeData, "Data", {
        set: function (respData) {
            if (respData.XiuweiInfo) {
                PlayerData.Data = respData.XiuweiInfo;
            }
            this.dispatchEvent(Common.CharacterCultivationEid.Upgrade, respData.UpOk);
        },
        enumerable: true,
        configurable: true
    });
    return UpgradeData;
}(DataStruct));
exports.UpgradeData = UpgradeData;
},{"../Common/Common":1,"../Common/GEvent":3,"../Config/Config":8,"../Manager/Manager":39}],26:[function(require,module,exports){
"use strict";
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
Object.defineProperty(exports, "__esModule", { value: true });
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
    };
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
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();
},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = require("./Config/Config");
var Manager = require("./Manager/Manager");
var Data = require("./Data/Data");
var Common = require("./Common/Common");
var Logic = require("./Logic/Logic");
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GameScene, "inst", {
        get: function () {
            return this._inst;
        },
        enumerable: true,
        configurable: true
    });
    GameScene.prototype.onAwake = function () {
        GameScene._inst = this;
        this.owner.addComponent(Logic.GrabLogic);
        // this.init();
        // this.addEventListener(Common.SceneLoginEid.ConfigLoaded, this.onConfigLoaded);
        // this.addEventListener(Common.SceneLoginEid.ServiceChoosed, this.onVersionChecked);
        // this.addEventListener(Common.SceneLoginEid.LoginSuccess, this.onLogined);
        // this.addEventListener(Common.SceneLoginEid.SimProgressEnd, this.openMainUi);
    };
    GameScene.prototype.init = function () {
        // Common.JsCallJava("demo.JSBridge", "testString", "Hello baby!");
        //游戏开发版本
        Manager.VersionManager.Version = Config.VersionConfig.Develop;
        //动态加载
        if (Laya.Browser.onMiniGame) {
            Laya.URL.basePath = "https://706.lightpaw.cn/h5c/resCache/DietyRoad/";
            // Laya.URL.basePath = "https://s3.cn-northwest-1.amazonaws.com.cn/h5client/Demos/DreamChess";
            Laya.MiniAdpter.nativefiles = [
                "libs",
                "res/config",
            ];
        }
        this.initFairygui();
        this.loadLoginUiRes();
        // Common.loadAllSubpackages(this, this.loadLoginUiRes);
    };
    GameScene.prototype.initFairygui = function () {
        fgui.UIConfig.packageFileExtension = "txt";
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
    };
    GameScene.prototype.loadLoginUiRes = function () {
        Common.Resource.load(Config.loginResUrls, this, this.onLogingResLoaded);
    };
    GameScene.prototype.onLogingResLoaded = function () {
        this.preLogin();
    };
    GameScene.prototype.loadRes = function () {
        Common.Resource.load(Config.urls, this, this.onResLoaded, this.onLoading);
    };
    GameScene.prototype.onLoading = function (progress) {
        console.log("加载进度: " + progress);
        // Manager.LoadingProgressManager.Inst.showUiProgress(progress);
    };
    GameScene.prototype.onResLoaded = function (info) {
        if (!info) {
            return console.error('Load fairygui package fail');
        }
        //公用包
        Config.UIConfig.UIPkgs.forEach(function (pkg) {
            Common.Resource.addUiPackage(pkg);
        });
        Config.UIConfig.LoginPackageLoaded = true;
        this.dispatchEvent(Common.SceneLoginEid.PackageLoaded);
        this.loadConfig();
    };
    GameScene.prototype.preLogin = function () {
        this.openLoginUI();
        this.checkVersion();
    };
    GameScene.prototype.checkVersion = function () {
        switch (Manager.VersionManager.Version) {
            case Config.VersionConfig.Develop:
                this.openChooseServiceUi();
                break;
            case Config.VersionConfig.Release:
                //对外版本登录外网
                Config.NetConfig.RequestUrl = Config.NetConfig.HttpRequestUrl;
                // if(cc.sys.platform == cc.sys.WECHAT_GAME){
                // 	WxUtils.Login(true);
                // }else{
                // 	this.onVersionChecked();
                // }
                break;
        }
    };
    GameScene.prototype.onVersionChecked = function () {
        this.loadRes();
        // this.loginGame();
    };
    GameScene.prototype.openLoginUI = function () {
        Manager.LoadingProgressManager.Inst.showUiProgress(5);
    };
    GameScene.prototype.openChooseServiceUi = function () {
        this.dispatchEvent(Config.ViewKit.ChooseService.Key);
    };
    GameScene.prototype.loadConfig = function () {
        //拉取配置
        // Data.ConfigData.SendReq(Config.DataConfig.localConfigs);
        Data.ConfigData.SendReq([]);
        //拉取本地配置，目前由后端发送，暂弃用
        // DataConfig.instance.initConfig(this.create2dScene.bind(this));
    };
    GameScene.prototype.onConfigLoaded = function () {
        this.loginGame();
    };
    GameScene.prototype.loginGame = function () {
        if (Config.NetConfig.RequestUrl == Config.NetConfig.LocalRequestUrl) {
            this.testLogin();
            // WxUtils.Login(true);
        }
        else if (Config.NetConfig.RequestUrl == Config.NetConfig.LocalWechatRequestUrl && Common.isOnWeixin()) {
            // WxUtils.Login(true);
        }
        else if (Common.isOnWeixin()) {
            // WxUtils.Login(true);
        }
        else {
            this.testLogin();
        }
    };
    GameScene.prototype.testLogin = function () {
        var acc;
        var tempName = Config.NetConfig.TempName;
        if (tempName) {
            acc = tempName;
        }
        else {
            //随机帐号登录，方便测试
            acc = "temp" + Math.random();
        }
        var reqdata = new Config.LoginReqData(acc);
        Data.LoginData.SendReq(reqdata);
    };
    GameScene.prototype.onLogined = function () {
        this.openMainUi();
    };
    GameScene.prototype.openMainUi = function () {
        // if(!Config.UIConfig.LoginPackageLoaded || !Config.DataConfig.IsConfigLoaded) {
        // 	Laya.timer.once(500, this, this.openMainUi);
        // 	return;
        // };
        this.dispatchEvent(Common.SceneEnterEid.MainMenu);
        this.dispatchEvent(Config.ViewKit.MainMenu.Key);
    };
    return GameScene;
}(Common.EventDispather));
exports.GameScene = GameScene;
},{"./Common/Common":1,"./Config/Config":8,"./Data/Data":24,"./Logic/Logic":32,"./Manager/Manager":39}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Common = require("../Common/Common");
var CollisionScriptBase = /** @class */ (function (_super) {
    __extends(CollisionScriptBase, _super);
    function CollisionScriptBase() {
        var _this = _super.call(this) || this;
        _this._isHit = false;
        return _this;
    }
    Object.defineProperty(CollisionScriptBase.prototype, "IsHit", {
        get: function () {
            return this._isHit;
        },
        enumerable: true,
        configurable: true
    });
    CollisionScriptBase.prototype.clearStatus = function () {
        this._isHit = false;
    };
    CollisionScriptBase.prototype.onTriggerEnter = function (other) {
        if (other.owner === this.kinematicSprite) {
            this._isHit = true;
        }
    };
    CollisionScriptBase.prototype.onTriggerStay = function (other) {
    };
    CollisionScriptBase.prototype.onTriggerExit = function (other) {
    };
    CollisionScriptBase.prototype.onCollisionEnter = function (collision) {
        if (collision.other.owner === this.kinematicSprite) {
            this._isHit = true;
        }
    };
    CollisionScriptBase.prototype.onCollisionStay = function (collision) {
    };
    CollisionScriptBase.prototype.onCollisionExit = function (collision) {
    };
    return CollisionScriptBase;
}(Common.EventDispather));
exports.CollisionScriptBase = CollisionScriptBase;
},{"../Common/Common":1}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Common = require("../Common/Common");
var DeskCollisionScript = /** @class */ (function (_super) {
    __extends(DeskCollisionScript, _super);
    function DeskCollisionScript() {
        var _this = _super.call(this) || this;
        _this._isHit = false;
        return _this;
    }
    Object.defineProperty(DeskCollisionScript.prototype, "IsHit", {
        get: function () {
            return this._isHit;
        },
        enumerable: true,
        configurable: true
    });
    DeskCollisionScript.prototype.clearStatus = function () {
        this._isHit = false;
    };
    DeskCollisionScript.prototype.onTriggerEnter = function (other) {
        if (other.owner === this.kinematicSprite) {
            this._isHit = true;
        }
    };
    DeskCollisionScript.prototype.onTriggerStay = function (other) {
    };
    DeskCollisionScript.prototype.onTriggerExit = function (other) {
    };
    DeskCollisionScript.prototype.onCollisionEnter = function (collision) {
        if (collision.other.owner === this.kinematicSprite) {
            this._isHit = true;
        }
    };
    DeskCollisionScript.prototype.onCollisionStay = function (collision) {
    };
    DeskCollisionScript.prototype.onCollisionExit = function (collision) {
    };
    return DeskCollisionScript;
}(Common.EventDispather));
exports.DeskCollisionScript = DeskCollisionScript;
},{"../Common/Common":1}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Core = require("../Core/Core");
var Config = require("../Config/Config");
var Manager = require("../Manager/Manager");
var Data = require("../Data/Data");
var Common = require("../Common/Common");
var Logic = require("./Logic");
var knock_time = 0;
var GrabLogic = /** @class */ (function (_super) {
    __extends(GrabLogic, _super);
    function GrabLogic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.IsInited = false;
        _this.Vdir = new Laya.Vector3();
        _this.DeskPosition = new Laya.Vector3();
        _this.timeLine = new Laya.TimeLine();
        return _this;
    }
    GrabLogic.prototype.onAwake = function () {
        this.GScene = Manager.SceneManager.CurScene;
        this.DeskClass = new Core.RigidObject(Core.ObjectProxy.getObj(Config.PoolType.Desk), new Core.ObjectState(Config.StateConfig.MOVE_FORWARD, this.deskDown.bind(this)), new Core.ObjectState(Config.StateConfig.DESK_LEAVE, this.deskLeave.bind(this)), new Core.ObjectState(Config.StateConfig.DESK_ENTER, this.deskEnter.bind(this)));
        this.DeskClass.setPosition(Config.ObjectConfig.DESK_POS);
        this.HandClass = new Core.RigidObject(Core.ObjectProxy.getObj(Config.PoolType.Hand), new Core.ObjectState(Config.StateConfig.MOVE_FORWARD, this.handForward.bind(this)), new Core.ObjectState(Config.StateConfig.MOVE_BACK, this.handBack.bind(this)), new Core.ObjectState(Config.StateConfig.BACK_PASSED, this.handBack.bind(this)));
        this.HandClass.setPosition(Config.ObjectConfig.HAND_POS);
        this.addCollisionScript();
        // Laya.stage.on(Laya.Event.CLICK, this, this.knockOnce);
        Laya.stage.on(Laya.Event.CLICK, this, this.moveHand);
        Laya.stage.on(Laya.Event.DOUBLE_CLICK, this, this.restart);
        this.IsInited = true;
        this.resetVec();
        this.createTimerLine();
        this.moveDesk();
    };
    GrabLogic.prototype.addCollisionScript = function () {
        this.deskScript = this.DeskClass.addScript(Logic.DeskCollisionScript);
        this.deskScript.kinematicSprite = this.HandClass.Obj;
        this.handScript = this.HandClass.addScript(Logic.HandCollisionScript);
        this.handScript.kinematicSprite = this.DeskClass.Obj;
    };
    GrabLogic.prototype.onTimelineComplete = function () {
        knock_time++;
        console.log("timeLine complete!!!!", knock_time);
    };
    GrabLogic.prototype.onLabel = function (label) {
        console.log("LabelName:" + label);
    };
    GrabLogic.prototype.createTimerLine = function () {
        this.timeLine.on(Laya.Event.COMPLETE, this, this.onTimelineComplete);
        this.timeLine.on(Laya.Event.LABEL, this, this.onLabel);
    };
    GrabLogic.prototype.resetVec = function () {
        this.Vdir.x = Config.ObjectConfig.DESK_POS.x;
        this.Vdir.y = Config.ObjectConfig.DESK_POS.y;
        this.Vdir.z = Config.ObjectConfig.DESK_POS.z;
    };
    GrabLogic.prototype.knockOnce = function () {
        this.resetVec();
        this.timeLine.reset();
        this.addKnock();
        this.addKnock(1);
        this.timeLine.play(0, false);
    };
    GrabLogic.prototype.addStay = function (_stayTime) {
        _stayTime = _stayTime ? _stayTime * 1000 : 0;
        this.timeLine.addLabel("stay", 0).to(this.Vdir, { y: Config.ObjectConfig.DESK_POS.y }, _stayTime, null, 0);
    };
    GrabLogic.prototype.addKnock = function (_deltaTime) {
        _deltaTime = _deltaTime ? _deltaTime * 1000 : 0;
        this.timeLine
            .to(this.Vdir, { y: Config.ObjectConfig.DESK_END_POS.y }, 200, null, _deltaTime)
            .to(this.Vdir, { y: Config.ObjectConfig.DESK_POS.y }, 200, null, 0);
    };
    GrabLogic.prototype.restart = function () {
        this.deskScript.clearStatus();
        this.HandClass.changeState(Config.StateConfig.IDEL);
        this.moveDesk();
        this.resetHand();
    };
    GrabLogic.prototype.newLevel = function () {
        this.DeskClass.changeState(Config.StateConfig.DESK_LEAVE);
    };
    GrabLogic.prototype.moveDesk = function () {
        // this.deskDown();
        this.DeskClass.changeState(Config.StateConfig.MOVE_FORWARD);
        this.resetVec();
        this.timeLine.reset();
        this.addKnock();
        this.addKnock(1);
        this.timeLine.play(0, true);
    };
    GrabLogic.prototype.resetDesk = function () {
        this.DeskClass.setPosition(Config.ObjectConfig.DESK_POS);
    };
    GrabLogic.prototype.stopDesk = function () {
        this.timeLine.pause();
        this.DeskClass.changeState(Config.StateConfig.STOP);
    };
    GrabLogic.prototype.deskDown = function () {
        // let vec = this.DeskClass.Position;
        // vec.y -= 0.3;
        // this.DeskClass.setPosition(vec);
        // if(vec.y <= Config.ObjectConfig.DESK_END_POS.y){
        //     this.DeskClass.changeState(Config.StateConfig.MOVE_BACK);
        // }
        this.DeskClass.setPosition(this.Vdir);
    };
    GrabLogic.prototype.deskUp = function () {
        var vec = this.DeskClass.Position;
        vec.y += 0.3;
        this.DeskClass.setPosition(vec);
        if (vec.y >= Config.ObjectConfig.DESK_POS.y) {
            this.DeskClass.changeState(Config.StateConfig.MOVE_FORWARD);
        }
    };
    GrabLogic.prototype.deskEnter = function () {
        var vec = this.DeskClass.Position;
        vec.x -= 0.1;
        this.DeskClass.setPosition(vec);
        if (vec.x <= Config.ObjectConfig.DESK_POS.x) {
            this.moveDesk();
        }
    };
    GrabLogic.prototype.onDeskDisappear = function () {
        this.DeskClass.changeObj(Config.PoolType.Desk);
        this.DeskClass.setPosition(Config.ObjectConfig.DESK_ENTER_POS);
        this.DeskClass.changeState(Config.StateConfig.DESK_ENTER);
    };
    GrabLogic.prototype.deskLeave = function () {
        if (!this.IsInited)
            return;
        var vec = this.DeskClass.Position;
        vec.x -= 0.1;
        this.DeskClass.setPosition(vec);
        if (vec.x <= -2) {
            this.onDeskDisappear();
        }
    };
    GrabLogic.prototype.updateDesk = function () {
        if (!this.IsInited)
            return;
        if (this.deskScript.IsHit) {
            this.resetDesk();
            this.stopDesk();
            return;
        }
        this.DeskClass.updateState();
    };
    GrabLogic.prototype.moveHand = function () {
        console.log(this.HandClass.CurState);
        if (!this.IsInited)
            return;
        if (this.HandClass.CurState == Config.StateConfig.STOP)
            return;
        if (this.HandClass.CurState == Config.StateConfig.IDEL) {
            this.HandClass.changeState(Config.StateConfig.MOVE_FORWARD);
        }
    };
    GrabLogic.prototype.handForward = function () {
        if (!this.IsInited)
            return;
        var vec = this.HandClass.Position;
        vec.x += Config.ObjectConfig.SPEED_HAND * Laya.timer.delta;
        this.HandClass.setPosition(vec);
        if (this.HandClass.Position.x >= Config.ObjectConfig.HAND_END_POS.x) {
            this.HandClass.changeState(Config.StateConfig.MOVE_BACK);
        }
    };
    GrabLogic.prototype.onReachFinish = function () {
        this.resetHand();
        //到达终点加分
        Data.PlayerData.Point += 100;
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>得分：", Data.PlayerData.Point);
        if (Data.PlayerData.Point >= 300) {
            this.newLevel();
        }
    };
    GrabLogic.prototype.handBack = function () {
        if (!this.IsInited)
            return;
        if (this.HandClass.Position.x <= Config.ObjectConfig.HAND_POS.x) {
            this.onReachFinish();
            return;
        }
        if (this.HandClass.Position.x < Config.ObjectConfig.DESK_POS.x) {
            this.HandClass.changeState(Config.StateConfig.BACK_PASSED);
        }
        var vec = this.HandClass.Position;
        vec.x -= Config.ObjectConfig.SPEED_HAND * Laya.timer.delta;
        ;
        this.HandClass.setPosition(vec);
    };
    GrabLogic.prototype.resetHand = function () {
        this.HandClass.setPosition(Config.ObjectConfig.HAND_POS);
        this.HandClass.changeState(Config.StateConfig.IDEL);
        this.enableHandGravity(false);
    };
    GrabLogic.prototype.stopHand = function () {
        this.HandClass.changeState(Config.StateConfig.STOP);
    };
    GrabLogic.prototype.enableHandGravity = function (_open) {
        if (this.HandClass.Rigid3D.isKinematic == !_open)
            return;
        this.HandClass.Rigid3D.isKinematic = !_open;
        this.HandClass.Rigid3D.gravity = _open ? new Laya.Vector3(0, -10, 0) : Laya.Vector3._ZERO;
    };
    GrabLogic.prototype.onHandHit = function () {
        Data.PlayerData.Point = 0;
        this.stopHand();
        this.enableHandGravity(true);
    };
    GrabLogic.prototype.updateHand = function () {
        if (!this.IsInited)
            return;
        if (this.deskScript.IsHit) {
            this.onHandHit();
            return;
        }
        this.HandClass.updateState();
    };
    GrabLogic.prototype.onUpdate = function () {
        // console.log('每一帧时间：',Laya.timer.delta);
        this.updateDesk();
        this.updateHand();
    };
    return GrabLogic;
}(Common.EventDispather));
exports.GrabLogic = GrabLogic;
},{"../Common/Common":1,"../Config/Config":8,"../Core/Core":20,"../Data/Data":24,"../Manager/Manager":39,"./Logic":32}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Common = require("../Common/Common");
var HandCollisionScript = /** @class */ (function (_super) {
    __extends(HandCollisionScript, _super);
    function HandCollisionScript() {
        return _super.call(this) || this;
    }
    HandCollisionScript.prototype.onTriggerEnter = function (other) {
    };
    HandCollisionScript.prototype.onTriggerStay = function (other) {
    };
    HandCollisionScript.prototype.onTriggerExit = function (other) {
    };
    HandCollisionScript.prototype.onCollisionEnter = function (collision) {
        console.log("碰撞！");
        if (collision.other.owner === this.kinematicSprite) {
            // (this.owner.getComponent(Laya.Rigidbody3D) as Laya.Rigidbody3D).gravity = new Laya.Vector3(0, -10, 0);
        }
    };
    HandCollisionScript.prototype.onCollisionStay = function (collision) {
    };
    HandCollisionScript.prototype.onCollisionExit = function (collision) {
    };
    return HandCollisionScript;
}(Common.EventDispather));
exports.HandCollisionScript = HandCollisionScript;
},{"../Common/Common":1}],32:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./GrabLogic"));
__export(require("./DeskCollisionScript"));
__export(require("./HandCollisionScript"));
__export(require("./CollisionScriptBase"));
},{"./CollisionScriptBase":28,"./DeskCollisionScript":29,"./GrabLogic":30,"./HandCollisionScript":31}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var Manager = require("./Manager/Manager");
var Main = /** @class */ (function () {
    function Main() {
        this.animations = ['attack1', 'attack2', 'attack3', 'win'];
        //根据IDE设置初始化引擎		
        if (window["Laya3D"])
            Laya3D.init(GameConfig_1.default.width, GameConfig_1.default.height);
        else
            Laya.init(GameConfig_1.default.width, GameConfig_1.default.height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        //手机与PC适配不同
        if (Laya.Browser.onPC) {
            Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        }
        else {
            Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
        }
        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (GameConfig_1.default.debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (GameConfig_1.default.physicsDebug && Laya["PhysicsDebugDraw"])
            Laya["PhysicsDebugDraw"].enable();
        if (GameConfig_1.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError = true;
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    Main.prototype.onVersionLoaded = function () {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    };
    Main.prototype.onConfigLoaded = function () {
        Manager.SceneManager.create3dScene();
        // Common.loadAllSubpackages(this, this.onSubPackageLoaded);
    };
    Main.prototype.onSubPackageLoaded = function () {
        Manager.SceneManager.create3dScene();
    };
    return Main;
}());
//激活启动类
new Main();
},{"./GameConfig":26,"./Manager/Manager":39}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("./Manager");
var Common = require("../Common/Common");
var BaseManager = /** @class */ (function (_super) {
    __extends(BaseManager, _super);
    function BaseManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BaseManager, "Inst", {
        get: function () {
            if (!Manager.SceneManager.CurScene) {
                console.error('Please creae a scene first!');
                return;
            }
            if (!this._inst) {
                this._inst = Manager.SceneManager.CurScene.getComponent(this);
                if (!this._inst) {
                    this._inst = Manager.SceneManager.CurScene.addComponent(this);
                }
            }
            return this._inst;
        },
        enumerable: true,
        configurable: true
    });
    BaseManager.prototype.onDestroy = function () {
        this.removeEventListener();
    };
    return BaseManager;
}(Common.EventDispather));
exports.BaseManager = BaseManager;
},{"../Common/Common":1,"./Manager":39}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = require("../Config/Config");
//点击特效
var ClickEffectManager = /** @class */ (function () {
    function ClickEffectManager() {
    }
    ClickEffectManager.Init = function () {
        if (this.TouchCom)
            return;
        var grootInst = fgui.GRoot.inst;
        this.TouchCom = fgui.UIPackage.createObjectFromURL('ui://MainUI/Component_dianji').asCom;
        grootInst.addChild(this.TouchCom);
        this.TouchCom.sortingOrder = Config.UIConfig.SortingOrder.ClickEffect;
        // this.TouchCom.node.zIndex = cc.macro.MAX_ZINDEX;
        // this.TouchCom.displayObject.setSiblingIndex(this.TouchCom.node.parent.childrenCount);
        grootInst.displayObject.on(Laya.Event.CLICK, this.playClickEffect, this);
    };
    /**
     * @param  {cc.Event.EventTouch} evt
     */
    ClickEffectManager.playClickEffect = function (evt) {
        var pos = evt.getLocation();
        this.TouchCom.setXY(pos.x, fgui.GRoot.inst.height - pos.y);
        this.TouchCom.getTransition('Effect_T').play();
    };
    ClickEffectManager.hide = function () {
        this.TouchCom.visible = false;
        // fgui.GRoot.inst.node.targetOff(this);
    };
    ClickEffectManager.show = function () {
        this.TouchCom.visible = true;
    };
    return ClickEffectManager;
}());
exports.ClickEffectManager = ClickEffectManager;
},{"../Config/Config":8}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("./Manager");
var Data = require("../Data/Data");
var Data_1 = require("../Data/Data");
var Common = require("../Common/Common");
var DataManager = /** @class */ (function (_super) {
    __extends(DataManager, _super);
    function DataManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isBaseBodyInited = false;
        _this._isBodyInited = false;
        return _this;
    }
    DataManager.prototype.onAwake = function () {
        // Data.DevReqBody.InitBaseBody();
        this.initBaseBody();
        this.addEventListener(Common.SceneLoginEid.LoginSuccess, this.onLoginSuccess);
    };
    DataManager.prototype.initBaseBody = function () {
        if (this._isBaseBodyInited)
            return;
        //与登录无关的接口直接创建
        //配置
        Data.ConfigData.ReqBody = new Data.HttpReqbodyBase(0, 10002);
        //登录
        Data.LoginData.ReqBody = new Data.HttpReqbodyBase(0, 10003);
        this._isBaseBodyInited = true;
    };
    DataManager.prototype.onLoginSuccess = function () {
        this.initDevBodies();
    };
    DataManager.prototype.initDevBodies = function () {
        //以下请求体需要登录才可创建
        if (this._isBodyInited || !Data.LoginData.Session)
            return;
        //#10802 获取首杀榜
        Data.UpgradeData.ReqBody = new Data_1.DevReqBody(8, 10802);
        this._isBodyInited = true;
    };
    return DataManager;
}(Manager.BaseManager));
exports.DataManager = DataManager;
},{"../Common/Common":1,"../Data/Data":24,"./Manager":39}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UI = require("../UI/UI");
var Manager = require("./Manager");
//菊花管理
var LoadingIconManager = /** @class */ (function (_super) {
    __extends(LoadingIconManager, _super);
    function LoadingIconManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingIconManager.prototype.onAwake = function () {
        this.Init();
    };
    LoadingIconManager.prototype.Init = function () {
        if (this.IsInited == true)
            return;
        this.IsInited = true;
        this.Controller = Manager.UIManager.openController(UI.LoadingController);
    };
    LoadingIconManager.prototype.ShowLoading = function () {
        if (!this.IsInited)
            return;
        this.Controller.showLoading();
    };
    LoadingIconManager.prototype.HideLoading = function () {
        if (!this.IsInited)
            return;
        this.Controller.hideLoading();
    };
    return LoadingIconManager;
}(Manager.BaseManager));
exports.LoadingIconManager = LoadingIconManager;
},{"../UI/UI":57,"./Manager":39}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UI = require("../UI/UI");
var Manager = require("../Manager/Manager");
var Common = require("../Common/Common");
var LocalConfig_1 = require("../Config/LocalConfig");
//登录进度管理
var LoadingProgressManager = /** @class */ (function (_super) {
    __extends(LoadingProgressManager, _super);
    function LoadingProgressManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingProgressManager.prototype.onAwake = function () {
        this.Init();
        // this.addEventListener(Common.SceneLoginEid.SimProgressEnd, this.onLoadingComplete);
    };
    LoadingProgressManager.prototype.Init = function () {
        if (this.IsInited == true)
            return;
        this.IsInited = true;
        this.Controller = Manager.UIManager.openController(UI.LoadingProgressController);
        this.addEventListener(Common.SceneLoginEid.SimProgressEnd, this.onLoadingComplete);
    };
    LoadingProgressManager.prototype.showUiProgress = function (progress, pkgName) {
        if (!this.IsInited)
            return;
        this.Controller.showUiProgress(progress, pkgName);
    };
    LoadingProgressManager.prototype.ShowWxLogin = function () {
        if (!this.IsInited)
            return;
        this.Controller.showWxLogin();
    };
    LoadingProgressManager.prototype.showConfigProgress = function () {
        if (!this.IsInited)
            return;
        this.Controller.showConfigProgress();
    };
    LoadingProgressManager.prototype.onLoadingComplete = function () {
        //加载成功后废除自己
        LocalConfig_1.default.IsSimProgressEnd = true;
        this.IsInited = false;
        this.Controller = null;
        this.destroy();
    };
    return LoadingProgressManager;
}(Manager.BaseManager));
exports.LoadingProgressManager = LoadingProgressManager;
},{"../Common/Common":1,"../Config/LocalConfig":12,"../Manager/Manager":39,"../UI/UI":57}],39:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./BaseManager"));
__export(require("./ClickEffectManager"));
__export(require("./LoadingIconManager"));
__export(require("./LoadingProgressManager"));
__export(require("./NetManager"));
__export(require("./StateBase"));
__export(require("./SceneManager"));
__export(require("./SpawnManager"));
__export(require("./TimerManager"));
__export(require("./UIManager"));
__export(require("./VersionManager"));
__export(require("./DataManager"));
__export(require("./PoolManager"));
},{"./BaseManager":34,"./ClickEffectManager":35,"./DataManager":36,"./LoadingIconManager":37,"./LoadingProgressManager":38,"./NetManager":40,"./PoolManager":41,"./SceneManager":42,"./SpawnManager":43,"./StateBase":44,"./TimerManager":45,"./UIManager":46,"./VersionManager":47}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = require("../Config/Config");
var Manager = require("./Manager");
var Common = require("../Common/Common");
//是否第一次连接
var isFirstSend = true;
var HttpManager = /** @class */ (function (_super) {
    __extends(HttpManager, _super);
    function HttpManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ConnectTimes = 0;
        _this.IsShowLoading = false;
        _this.IsConnecting = false;
        return _this;
    }
    Object.defineProperty(HttpManager, "RequestUrl", {
        set: function (url) {
            Config.NetConfig.RequestUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    HttpManager.prototype.Connect = function (reqkey, data, callback, isShowLoading, IsGm) {
        if (!data)
            return;
        this._hr = new XMLHttpRequest();
        this._reqKey = reqkey;
        if (IsGm)
            this._hr.open("post", Config.NetConfig.GMUrl, true);
        else
            this._hr.open("post", Config.NetConfig.RequestUrl, true);
        this._hr.onreadystatechange = this.OnHttpRequestComplete.bind(this);
        //超时
        this._hr.timeout = 5000;
        this._hr.ontimeout = this.OnTimeout.bind(this);
        this._hr.onerror = this.OnHttpRequestError.bind(this);
        if (typeof (data.ReqData) == 'string') {
            data.ReqData = JSON.parse(data.ReqData);
        }
        this.Data = data;
        this.Callback = callback;
        this.IsShowLoading = isShowLoading;
        //重连次数
        this.ConnectTimes++;
        //超时毫秒数
        // console.log(this._hr.timeout);
        this._hr.responseType = "text";
        if (typeof data.ReqData != 'string') {
            data.ReqData = JSON.stringify(data.ReqData);
        }
        this._hr.send(JSON.stringify(data));
        //是否正在连接，包括超时
        this.IsConnecting = true;
        //菊花
        if (isFirstSend) {
            isFirstSend = false;
            // Manager.LoadingIconManager.Init();
        }
        if (isShowLoading == true) {
            Manager.LoadingIconManager.Inst.ShowLoading();
        }
        else {
            Manager.LoadingIconManager.Inst.HideLoading();
            //3秒后再转菊花
            setTimeout(this.LateShowLoading.bind(this), 3000);
        }
        this.dispatchEvent(Common.NetHttpConnectEid.ConnectBegin);
    };
    HttpManager.prototype.LateShowLoading = function () {
        if (this.IsConnecting == true) {
            Manager.LoadingIconManager.Inst.ShowLoading();
        }
    };
    //请求错误
    HttpManager.prototype.OnHttpRequestError = function (e) {
        console.log(e);
        this.tryAutoReconnect();
    };
    //超时
    HttpManager.prototype.OnTimeout = function (e) {
        console.log(e);
        this.tryAutoReconnect();
    };
    HttpManager.prototype.OnHttpRequestProgress = function (e) {
        console.log("加载进度>>>>>>>>>>>>>>>>>>>", e.loaded / e.total);
    };
    HttpManager.prototype._removeRequest = function () {
        //移除当前连接，必须先设置连接状态IsConnecting为false后再调用
        if (this.IsConnecting)
            return;
        this._hr = null;
        this.Data = null;
        HttpManager._hmMap[this._reqKey] = null;
    };
    HttpManager.prototype.tryAutoReconnect = function () {
        //策略：0.5秒重连一次，重试5次
        if (this.ConnectTimes < 3) {
            Laya.timer.once(500, this, this.autoReConnect);
        }
        else {
            this.showConnectWindow();
        }
    };
    HttpManager.prototype.autoReConnect = function () {
        this.Connect('', this.Data, this.Callback, true);
    };
    HttpManager.prototype.showConnectWindow = function () {
        this.IsConnecting = false;
        Manager.LoadingIconManager.Inst.HideLoading();
        var content = [Config.LocalContent.NetError];
        var self = this;
        Manager.UIManager.openConfirmWindow(content, function () {
            self.Connect('', self.Data, self.Callback, self.IsShowLoading);
        });
    };
    HttpManager.prototype.OnHttpRequestComplete = function () {
        if (this._hr.readyState != 4 || (this._hr.status < 200 || this._hr.status >= 400))
            return;
        this.IsConnecting = false;
        this.ConnectTimes = 0;
        if (!this._hr.responseText)
            return;
        var data = JSON.parse(this._hr.responseText);
        console.log('>>>>>>>>>>>>>>>>>连接状态：', data.RespCode, data.RespMsg);
        //连接失败
        // if(data.RespCode != Config.HttpConnectState.Success) return;
        if (typeof (this.Callback) == 'function') {
            this.Callback(data);
        }
        //连接结束删除对象
        this._removeRequest();
        this.dispatchEvent(Common.NetHttpConnectEid.ServiceRespond);
    };
    HttpManager._hmMap = {};
    return HttpManager;
}(Manager.BaseManager));
exports.HttpManager = HttpManager;
var SocketManager = /** @class */ (function () {
    function SocketManager(url, port) {
        this._date = new Date();
        /** 心跳包定时器 */
        this._timer = 0;
        /** 心跳包服务器超时定时器 */
        this._serverTimer = 0;
        /** 心跳包超时时间，单位ms,时间只能是整秒数，setTimeout在后台每秒执行一次 */
        this._timeout = 10000;
        /** 静默重连定时器 */
        this._silentTimer = 0;
        /** 心跳包服务器超时时间，单位ms,时间只能是整秒数，setTimeout在后台每秒执行一次 */
        this._serverTimeout = 10000; //TODO调试把时间加长3600000，原10000
        /** 断线类型：1.被挤下线, 2.停服维护(socket断开),3 非法操作 */
        this._disconnectType = 0;
        // this.connect(url, port);
    }
    Object.defineProperty(SocketManager, "inst", {
        get: function () {
            if (!this._inst) {
                this._inst = new SocketManager();
            }
            return this._inst;
        },
        enumerable: true,
        configurable: true
    });
    SocketManager.connect = function (url, port) {
        this.inst.connect(url, port);
    };
    SocketManager.prototype.connect = function (url, port) {
        this.socket = new Laya.Socket();
        if (port != null) {
            this.socket.connect(url, port);
        }
        else {
            this.socket.connectByUrl(url);
        }
        this.output = this.socket.output;
        this.socket.on(Laya.Event.OPEN, this, this.onSocketOpen);
        this.socket.on(Laya.Event.CLOSE, this, this.onSocketClose);
        this.socket.on(Laya.Event.MESSAGE, this, this.onMessageReveived);
        this.socket.on(Laya.Event.ERROR, this, this.onConnectError);
    };
    //心跳检测
    SocketManager.prototype.startHeartbeat = function () {
        console.log(this._date.toUTCString() + " start heartbeat");
        this._timer = setTimeout(this.timerHandler.bind(this), this._timeout);
    };
    SocketManager.prototype.timerHandler = function () {
        console.log(this._date.toUTCString() + " send heartbeat");
        //发送一个心跳，后端收到后，返回一个心跳消息
        this.socket.send('r u there?');
        this._serverTimer = setTimeout(this.serverTimerHandler.bind(this), this._serverTimeout);
    };
    SocketManager.prototype.serverTimerHandler = function () {
        //服务器超时没有回包，断开连接然后重连
        console.log(this._date.toUTCString() + " wait server reply timeout");
        if (this.socket) {
            this.socket.close();
        }
    };
    SocketManager.prototype.resetHeartbeat = function () {
        console.log(this._date.toUTCString() + " reset heartbeat");
        clearTimeout(this._timer);
        clearTimeout(this._serverTimer);
    };
    SocketManager.prototype.onSocketOpen = function () {
        console.log("Connected");
        this.resetHeartbeat();
        this.startHeartbeat();
        // 发送字符串
        this.socket.send("demonstrate <sendString>");
        // 使用output.writeByte发送
        var message = "demonstrate <output.writeByte>";
        for (var i = 0; i < message.length; ++i) {
            this.output.writeByte(message.charCodeAt(i));
        }
        this.socket.flush();
    };
    SocketManager.prototype.onSocketClose = function () {
        console.log("Socket closed");
    };
    SocketManager.prototype.onMessageReveived = function (message) {
        console.log("Message from server:", message);
        //获取到消息重置心跳检测
        this.resetHeartbeat();
        this.startHeartbeat();
        if (typeof message == "string") {
            console.log(message);
        }
        else if (message instanceof ArrayBuffer) {
            console.log(new Laya.Byte(message).readUTFBytes());
        }
        this.socket.input.clear();
    };
    SocketManager.prototype.onConnectError = function (e) {
        console.log("error");
    };
    /** 断线类型：1.被挤下线, 2.停服维护(socket断开),3 非法操作 */
    SocketManager.prototype.setDisconnect = function (type) {
        this._disconnectType = type;
    };
    SocketManager.prototype.reset = function () {
        this._disconnectType = 0;
        this.resetHeartbeat();
        if (this.socket != null) {
            this.socket.close();
            this.socket = null;
        }
    };
    return SocketManager;
}());
exports.SocketManager = SocketManager;
},{"../Common/Common":1,"../Config/Config":8,"./Manager":39}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = require("../Config/Config");
var Manager = require("./Manager");
var PoolManager = /** @class */ (function (_super) {
    __extends(PoolManager, _super);
    function PoolManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PoolManager, "FguiPool", {
        //fgui对象池
        get: function () {
            return this.fguiPool;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolManager, "HeadPool", {
        //头部池
        get: function () {
            return this.getPool(Config.PoolType.HeadModel);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PoolManager, "BodyPool", {
        //身体池
        get: function () {
            return this.getPool(Config.PoolType.BodyModel);
        },
        enumerable: true,
        configurable: true
    });
    PoolManager.prototype.onAwake = function () {
    };
    PoolManager.recover = function (key, item, clsType) {
        if (!key || !item)
            return;
        if (clsType) {
            Laya.Pool.recoverByClass(clsType);
        }
        else {
            switch (key) {
                case Config.PoolType.FguiObj:
                    if (item instanceof fgui.GObject)
                        this.FguiPool.returnObject(item);
                default:
                    Laya.Pool.recover(key, item);
            }
        }
    };
    PoolManager.getItem = function (key, clsType) {
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
    };
    PoolManager.getPool = function (key) {
        return Laya.Pool.getPoolBySign(key);
    };
    PoolManager.clearPool = function (key) {
        Laya.Pool.clearBySign(key);
    };
    PoolManager.clearAllPools = function () {
        this.FguiPool.clear();
    };
    PoolManager.getModelByType = function (poolType, path, callback, thisArg) {
        var head = this.getItem(poolType);
        if (!head) {
            Manager.SpawnManager.Load3dModel(path, function (model) {
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
    };
    PoolManager.getObjByFunc = function (key, func) {
        return Laya.Pool.getItemByCreateFun(key, func);
    };
    PoolManager.getHead = function (path, callback, thisArg) {
        this.getModelByType(Config.PoolType.HeadModel, path, callback, thisArg);
    };
    PoolManager.getBody = function (path, callback, thisArg) {
        this.getModelByType(Config.PoolType.BodyModel, path, callback, thisArg);
    };
    PoolManager.returnFguiObj = function (box) {
        this.recover(Config.PoolType.FguiObj, box);
    };
    //fgui对象池
    PoolManager.fguiPool = new fgui.GObjectPool();
    return PoolManager;
}(Manager.BaseManager));
exports.PoolManager = PoolManager;
},{"../Config/Config":8,"./Manager":39}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("./Manager");
var GameConfig_1 = require("../GameConfig");
var GameScene_1 = require("../GameScene");
var SceneManager = /** @class */ (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SceneManager, "Inst", {
        get: function () {
            return this._inst;
        },
        enumerable: true,
        configurable: true
    });
    SceneManager.create2dScene = function () {
        Laya.Scene.load(GameConfig_1.default.startScene, Laya.Handler.create(this, this.onOpenScene));
    };
    SceneManager.create3dScene = function () {
        //添加3D场景
        var scene = Laya.stage.addChild(new Laya.Scene3D());
        //添加照相机
        var camera = (scene.addChild(new Laya.Camera(0, 0.1, 100)));
        camera.transform.translate(new Laya.Vector3(1, 1, 3));
        // camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
        camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
        //添加方向光
        var directionLight = scene.addChild(new Laya.DirectionLight());
        directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
        directionLight.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));
        this.onOpenScene(scene);
    };
    SceneManager.onOpenScene = function (scene) {
        if (scene) {
            Laya.stage.addChild(scene);
            this.CurScene = scene;
            scene.addComponent(Manager.SceneManager);
            scene.addComponent(Manager.HttpManager);
            scene.addComponent(Manager.UIManager);
            scene.addComponent(Manager.DataManager);
            scene.addComponent(GameScene_1.GameScene);
        }
    };
    return SceneManager;
}(Manager.BaseManager));
exports.SceneManager = SceneManager;
},{"../GameConfig":26,"../GameScene":27,"./Manager":39}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("./Manager");
var Config = require("../Config/Config");
var Common = require("../Common/Common");
//cocos用
// let loadedPackage:{[key:string]:boolean} = {};
var SpawnManager = /** @class */ (function () {
    function SpawnManager() {
    }
    //加载模型
    SpawnManager.Load3dModel = function (path, completeCallback, thisArg) {
        if (!Manager.SceneManager.CurScene || !path)
            return;
        // Laya.loader.create(path, Laya.Handler.create(thisArg, completeCallback));
        Laya.Sprite3D.load(path, Laya.Handler.create(this, function () {
            if (typeof completeCallback == 'function') {
                var sp = Common.Resource.getRes(path);
                if (!sp)
                    return;
                var msp = Manager.SceneManager.CurScene.addChild(sp);
                var ani = msp.getComponent(Laya.Animator);
                var aniState = void 0;
                if (ani) {
                    aniState = ani.getCurrentAnimatorPlayState(0);
                }
                var modelData = new Config.ModelDataStruct(msp, ani, aniState);
                completeCallback.call(thisArg, modelData);
            }
        }));
    };
    //加载网格
    SpawnManager.Load3dMesh = function (path, completeCallback, thisArg) {
        if (!path)
            return;
        Common.Resource.load(path, thisArg, completeCallback, null, Laya.Loader.MESH);
    };
    //加载材质
    SpawnManager.LoadMaterial = function (path, completeCallback, thisArg) {
        if (!path)
            return;
        Common.Resource.load(path, thisArg, completeCallback, null, Laya.Loader.MATERIAL);
    };
    //动态加载UI包  cocos用
    // static LoadUIPackage(_path, callback) {
    //     if(typeof(_path) != "string") return;
    //     if(loadedPackage[_path]){
    //         if(typeof callback == 'function'){
    //             callback();
    //         }
    //     }else{
    //         fgui.UIPackage.addPackage(_path, (err)=>{
    //             if(err){
    //                 return false;
    //             }
    //             loadedPackage[_path] = true;
    //             if(typeof callback == 'function'){
    //                 callback();
    //             }
    //         });
    //     }
    // }
    //从池中创建对象
    SpawnManager.CreateObjectFromPool = function (_path, _slot) {
        if (!_path || !_slot)
            return;
        //从池中创建一个Skeleton对象
        var obj = Laya.Pool.getItem(_path);
        if (!obj)
            return;
        //生成唯一gid
        if (!obj['$PoolGID']) {
            obj['$PoolGID'] = Laya.Utils.getGID();
        }
        if (!obj['$Path']) {
            obj['$Path'] = _path;
        }
        this.poolObjs[obj['$PoolGID']] = obj;
        _slot.displayObject.addChild(obj);
        return obj;
    };
    //从创建Spine或DragonBone动画
    /**
     * @param  {string} _path 路径
     * @param  {fgui.GGraph} _slot 父对象 fgui graph
     * @param  {string | number} _name 动画名字或者索引
     * @param  {boolean} _isLoop 是否循环播放，默认循环播放
     * @param  {boolean} _isPlay 是否立即播放，默认播放
     * @return {sp.Skeleton}
     */
    // static CreateSpine(_path, _slot, _name, _isLoop, _isPlay) {
    //     if(typeof(_path) != "string" || !_slot || !_slot.node) return
    //     let skeleton = _slot.node.getComponent(sp.Skeleton);
    //     if(skeleton == null){
    //         skeleton = _slot.node.addComponent(sp.Skeleton);
    //     }
    //     skeleton.premultipliedAlpha = false;
    //     let onProcess = function(completeCount, totalCount, item) {}
    //     let cb = function(err, res){
    //         skeleton.skeletonData = res;
    //         _isLoop = _isLoop? _isLoop: true;
    //         if(skeleton.skeletonData && skeleton.skeletonData.loaded && _name){
    //             skeleton.setAnimation(0, _name, _isLoop)
    //         }
    //         skeleton.paused = _isPlay == false
    //     }
    //     cc.loader.loadRes(_path, sp.SkeletonData, onProcess, cb)
    //     return skeleton
    // }
    //通过预制体创建Spine
    /**
     * @param  {string} _path Prefab路径
     * @param  {fgui.GGraph} _slot 父对象 fgui graph
     * @param  {function} callback 动画名字或者索引
     */
    // static CreateSpineFromPrefab(_path, _slot, callback) {
    //     if(typeof(_path) != "string" || !_slot || !_slot.node) return;
    //     /** @type {sp.Skeleton} */
    //     // let skeleton;
    //     cc.loader.loadRes(_path, cc.Prefab, function(err, prefab) {
    //             if (err) {
    //                 console.error(err);
    //                 return;
    //             }
    //             let prefabNode = cc.instantiate(prefab);
    //             /** @type {sp.Skeleton} */
    //             let skeleton =  prefabNode.getComponent(sp.Skeleton);
    //             _slot.node.addChild(prefabNode);
    //             prefabNode.position = cc.Vec2.ZERO;
    //             if(callback) callback(skeleton);
    //             GEvent.Dispatch(GEvent.SPINE_PREFAB_LOADED);
    //         }
    //     );
    // }
    SpawnManager.LoadView = function (pkg, com) {
        if (!pkg || !com)
            return;
        Common.Resource.addUiPackage(pkg);
        var grootInst = fgui.GRoot.inst;
        var ui = fgui.UIPackage.createObject(pkg, com).asCom;
        if (ui) {
            grootInst.addChild(ui);
            ui.visible = false;
            //小游戏适配
            ui.setSize(grootInst.width, grootInst.height);
            ui.setXY(0, 0);
        }
        else {
            console.error("Fail to add ui package: ", pkg, com);
        }
        return ui;
    };
    return SpawnManager;
}());
exports.SpawnManager = SpawnManager;
},{"../Common/Common":1,"../Config/Config":8,"./Manager":39}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = require("../Config/Config");
var StateBase = /** @class */ (function () {
    function StateBase() {
        this._state = Config.StateConfig.IDEL;
    }
    Object.defineProperty(StateBase.prototype, "curState", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    StateBase.prototype.changeState = function (state) {
        if (this._state == state)
            return;
        this._state = state;
    };
    return StateBase;
}());
exports.StateBase = StateBase;
},{"../Config/Config":8}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timerId = -1;
//计时器池
var timerPool = new Array();
var timerList = new Array();
var Timer = /** @class */ (function () {
    function Timer() {
        this.CurCd = 0;
        this.EndTime = 0;
        this.IsRun = false;
        this.IsStart = false;
        this.IsAlive = true;
        this.autoRemove = true;
    }
    Timer.prototype.Init = function (cd, startCallback, updateCallback, endCallback, target, thisArg, autoRemove, autoStart) {
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
        //默认自动销毁
        this.autoRemove = autoRemove != null ? autoRemove : true;
        //默认自动开始
        if (autoStart != false) {
            this.Start();
        }
    };
    Timer.prototype.Update = function () {
        if (!this.IsAlive)
            return;
        var currtime = Date.now();
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
    };
    Timer.prototype.Start = function () {
        this.IsRun = true;
        if (!this.IsStart) {
            this.IsStart = true;
            this.StartTime = Date.now();
            //计时结束时间
            this.EndTime = this.StartTime + this.MaxCd * 1000;
            if (typeof (this.OnStart) == "function") {
                this.OnStart.call(this.ThisArg, this.Target);
            }
            this.Update();
        }
    };
    Timer.prototype.ResetCd = function (cd) {
        if (typeof (cd) != "number")
            return;
        this.MaxCd = cd;
        this.EndTime = Date.now() + this.MaxCd * 1000;
    };
    Timer.prototype.Remove = function () {
        // this.MaxCd = 0;
        // this.CurCd = 0;
        this.OnStart = null;
        this.OnUpdate = null;
        this.OnEnd = null;
        this.Target = null;
        this.ThisArg = null;
        // this.EndTime = 0;
        this.IsRun = false;
        this.IsStart = false;
        this.IsAlive = false;
        //移动到首位
        var index = timerPool.indexOf(this);
        if (index > 0) {
            timerPool.splice(index, 1);
            timerPool.unshift(this);
        }
    };
    return Timer;
}());
exports.Timer = Timer;
var TimerManager = /** @class */ (function () {
    function TimerManager() {
    }
    /**
     * @param  {} thisArg 执行域
     * @param  {number} cd
     * @param  {function} startCallback 开始回调
     * @param  {function} updateCallback 过程回调
     * @param  {function} endCallback 结束回调
     * @param  {} target 计时目标
     * @param  {boolean} autoRemove 是否自动刷新，默认自动
     * @param  {boolean} autoStart 是否自动开始，默认自动
     */
    TimerManager.NewTimer = function (thisArg, cd, startCallback, updateCallback, endCallback, target, autoRemove, autoStart) {
        var t = timerPool[0];
        if (!t || t.IsAlive) {
            t = new Timer();
            timerList[t.Id] = t;
            timerPool.push(t);
        }
        t.Init(cd, startCallback, updateCallback, endCallback, target, thisArg, autoRemove);
        return t;
    };
    TimerManager.RemoveTimer = function (thisArg) {
        if (!thisArg)
            return;
        timerPool.forEach(function (timer) {
            if (timer.ThisArg && timer.ThisArg.id == thisArg.id) {
                timer.Remove();
            }
        });
    };
    TimerManager.RemoveAllTimer = function () {
        for (var i in timerList) {
            timerList[i].Remove();
        }
    };
    TimerManager.Update = function () {
        for (var i in timerList) {
            if (timerList[i].IsAlive) {
                timerList[i].Update();
            }
        }
    };
    TimerManager.ClearAllTimer = function () {
        for (var i in timerList) {
            timerList[i].Remove();
            delete timerList[i];
        }
    };
    return TimerManager;
}());
exports.TimerManager = TimerManager;
},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Core = require("../UI/Core");
var UI = require("../UI/UI");
var Config = require("../Config/Config");
var Manager = require("./Manager");
var Common = require("../Common/Common");
//强制引导
var GuideList = new Array();
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        return _super.call(this) || this;
    }
    Object.defineProperty(UIManager, "Inst", {
        get: function () {
            if (!this._inst) {
                this._inst = new UIManager();
            }
            return this._inst;
        },
        enumerable: true,
        configurable: true
    });
    UIManager.prototype.onAwake = function () {
        UIManager._inst = this;
        UIManager.setUiKeys();
        UIManager.addListeners();
    };
    UIManager.setUiKeys = function () {
        var cfg = Config.ViewKit;
        UI.LoadingProgressController.init(cfg.LoadingProgress.Key, UI.LoadingProgressView);
        UI.LoadingController.init(cfg.LoadingMain.Key, UI.LoadingView);
        UI.ChooseServiceController.init(cfg.ChooseService.Key, UI.ChooseServiceView);
        UI.PublicConfirmationController.init(cfg.PublicConfirmation.Key, UI.PublicConfirmationView);
    };
    UIManager.addListeners = function () {
        for (var i in Config.ViewKit) {
            var cfg = Config.ViewKit[i];
            if (cfg && cfg.Key) {
                this.addEventListener(cfg.Key, this.goOpen.bind(this, cfg.Key));
            }
        }
        this.addEventListener(Common.UiNoticeEid.CloseController, this.onCloseController);
        this.addEventListener(Common.UiNoticeEid.OpenFullScreen, this.onOpenFullscreen);
        this.addEventListener(Common.UiNoticeEid.CloseFullScreen, this.onCloseFullscreen);
        this.addEventListener(Common.UiNoticeEid.ClosePopup, this.openNextPopup);
    };
    UIManager.goOpen = function (key) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var c = Core.CtrlMapArray[key];
        if (c) {
            this.openController.apply(this, [c].concat(data));
        }
    };
    UIManager.openController = function (ctrl) {
        var _data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _data[_i - 1] = arguments[_i];
        }
        if (!ctrl)
            return;
        var cKey = ctrl.Key;
        var ctrlInst = Core.OpenedCtrl[cKey];
        if (!ctrlInst || ctrlInst.IsDestroyed) {
            ctrlInst = new ctrl(ctrl.Key, ctrl.view);
        }
        else {
            //只允许创建一个实例
            console.log('Controller has opened: ', cKey);
            ctrlInst.show.apply(ctrlInst, _data);
            fgui.GRoot.inst.setChildIndex(Core.ViewMap[cKey].UI, fgui.GRoot.inst.numChildren);
            return;
        }
        return this.checkOpenCtrlInst.apply(this, [ctrlInst].concat(_data));
        // let done = ctrlInst.create();
        // if(done){
        //     ctrlInst.open(..._data)
        // }else{
        //     console.error("Open controller failed");
        //     return;
        // }
        // //设置渲染层级
        // if(ctrlInst.IsPopup){
        //     ctrlInst.SortingOrder(Config.UIConfig.SortingOrder.Popup);
        // }
        // return ctrlInst;
    };
    UIManager.checkOpenCtrlInst = function (ctrlInst) {
        var _data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _data[_i - 1] = arguments[_i];
        }
        if (ctrlInst.IsPopup) {
            ctrlInst = this.getNextPopup.apply(this, [ctrlInst].concat(_data));
            if (!ctrlInst)
                return;
        }
        var done = ctrlInst.create();
        if (done) {
            ctrlInst.open.apply(ctrlInst, _data);
        }
        else {
            console.error("Open controller failed");
            return;
        }
        //设置渲染层级
        if (ctrlInst.IsPopup) {
            ctrlInst.SortingOrder(Config.UIConfig.SortingOrder.Popup);
        }
        return ctrlInst;
    };
    //关闭界面处理
    UIManager.onCloseController = function (ckey) {
        var ctrl = Core.OpenedCtrl[ckey];
        //清除所有计时器
        Manager.TimerManager.RemoveTimer(ctrl);
    };
    //全屏界面处理
    UIManager.onOpenFullscreen = function (ckey) {
        this.hideOtherUI(ckey);
    };
    UIManager.onCloseFullscreen = function (ckey) {
        this.showOtherUI(ckey);
    };
    UIManager.hideOtherUI = function (ckey) {
        for (var i in Core.OpenedCtrl) {
            if (i == ckey)
                break;
            var ctrl = Core.OpenedCtrl[i];
            if (ctrl && ctrl.IsShow) {
                ctrl.View.UI.visible = false;
            }
        }
    };
    UIManager.showOtherUI = function (ckey) {
        for (var i in Core.OpenedCtrl) {
            if (i == ckey)
                return;
            var ctrl = Core.OpenedCtrl[i];
            if (ctrl && ctrl.IsShow) {
                ctrl.View.UI.visible = true;
            }
        }
    };
    //打开弹窗
    UIManager.openPopup = function (popupCtrl, data) {
        if (!popupCtrl)
            return;
        if (UIManager.PopupMap.length > 0) {
            UIManager.PopupMap.push(popupCtrl);
            UIManager.PopupData[popupCtrl.Key] = data;
            var popup = UIManager.PopupMap.shift();
            UIManager.openController(popup, UIManager.PopupData[popup.Key]);
        }
        else {
            UIManager.openController(popupCtrl, data);
        }
    };
    UIManager.getNextPopup = function (popupCtrl) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        if (!popupCtrl)
            return;
        if (UIManager.PopupQueue.length > 0) {
            UIManager.PopupQueue.push(popupCtrl);
            UIManager.PopupData[popupCtrl.multitonKey] = data;
            // return UIManager.PopupQueue.shift();
        }
        else {
            return popupCtrl;
        }
    };
    //打开下一个弹窗
    UIManager.openNextPopup = function () {
        // UIManager.PopupMap.some((value, idx)=>{
        //     if(popupCtrl instanceof value){
        //         UIManager.PopupMap.splice(idx, 1);
        //         return true;
        //     }
        // });
        // UIManager.PopupData[popupCtrl.multitonKey] = null;
        if (UIManager.PopupQueue.length > 0) {
            UIManager.PopupQueue.pop();
            var popup = UIManager.PopupQueue.shift();
            if (popup) {
                UIManager.checkOpenCtrlInst.apply(UIManager, [popup].concat(UIManager.PopupData[popup.multitonKey]));
            }
        }
    };
    //打开文字确认弹窗
    UIManager.openConfirmWindow = function (content, yesBtnCallback, btnYesTxt, btnCancelTxt) {
        this.openPopup(UI.PublicConfirmationController, new Config.PopupWindowData(content, yesBtnCallback, Config.ConfirmWindowType.Content, btnYesTxt, btnCancelTxt));
    };
    //打开奖励弹窗
    UIManager.openRewardWindow = function (rewardData, yesBtnCallback, btnYesTxt, btnCancelTxt) {
        this.openPopup(UI.PublicConfirmationController, new Config.PopupWindowData(null, yesBtnCallback, Config.ConfirmWindowType.Reward, rewardData, btnYesTxt, btnCancelTxt));
    };
    //打开文字+奖励弹窗
    UIManager.openContentRewardWindow = function (content, rewardData, yesBtnCallback, btnYesTxt, btnCancelTxt) {
        this.openPopup(UI.PublicConfirmationController, new Config.PopupWindowData(content, yesBtnCallback, Config.ConfirmWindowType.ContentAndReward, rewardData, btnYesTxt, btnCancelTxt));
    };
    // static openGuide = function(guideName, targetCom){
    //     if(!guideName) return;
    //     let grootInst = fgui.GRoot.inst
    //     let guideCom = fgui.UIPackage.createObject(Config.ViewKit.Guider.Pkg, guideName).asCom
    //     GuideList[guideName] = guideCom
    //     grootInst.addChild(guideCom)
    //     guideCom.setSize(grootInst.width, grootInst.height)
    //     let guideMask = guideCom.getChild("Mask")
    //     if(targetCom){
    //         guideMask.setXY(targetCom.x, targetCom.y)
    //     }
    // }
    UIManager.closeGuide = function (guideName) {
        if (!GuideList[guideName])
            return;
        GuideList[guideName].dispose();
        GuideList[guideName] = null;
    };
    UIManager.nextGuide = function (guideName) {
        if (!GuideList[guideName])
            return;
        for (var i in GuideList) {
            GuideList[guideName] && GuideList[guideName].dispose();
            GuideList[guideName] = null;
        }
    };
    UIManager.PopupMap = new Array();
    UIManager.PopupQueue = new Array();
    UIManager.PopupData = {};
    return UIManager;
}(Manager.BaseManager));
exports.UIManager = UIManager;
},{"../Common/Common":1,"../Config/Config":8,"../UI/Core":50,"../UI/UI":57,"./Manager":39}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//版本管理
var VersionManager = /** @class */ (function () {
    function VersionManager() {
    }
    Object.defineProperty(VersionManager, "Version", {
        get: function () {
            return this._version;
        },
        set: function (version) {
            this._version = version;
        },
        enumerable: true,
        configurable: true
    });
    return VersionManager;
}());
exports.VersionManager = VersionManager;
},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalConfig_1 = require("../Config/LocalConfig");
var Core = require("./Core");
var Common = require("../Common/Common");
var Config = require("../Config/Config");
var ChooseServiceController = /** @class */ (function (_super) {
    __extends(ChooseServiceController, _super);
    function ChooseServiceController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooseServiceController.prototype.onCreate = function () {
        this.SortingOrder(Config.UIConfig.SortingOrder.NetSignal);
    };
    ChooseServiceController.prototype.onOpen = function (data) {
        this.addButtonLisenter(this.View.Local, this.openLocalService);
        this.View.AccountName.text = LocalConfig_1.default.GetAcountName();
    };
    ChooseServiceController.prototype.openLocalService = function () {
        var account = this.View.AccountName.text;
        if (typeof (account) == 'string' && account.length > 0) {
            Config.NetConfig.TempName = account;
            LocalConfig_1.default.SaveAcountName(account);
        }
        Config.NetConfig.RequestUrl = Config.NetConfig.LocalRequestUrl;
        this.close();
    };
    ChooseServiceController.prototype.openHttpService = function () {
        Config.NetConfig.RequestUrl = Config.NetConfig.HttpRequestUrl;
        this.close();
    };
    ChooseServiceController.prototype.openLocalWechatService = function () {
        Config.NetConfig.RequestUrl = Config.NetConfig.LocalWechatRequestUrl;
        console.log('请求地址：', Config.NetConfig.RequestUrl);
        this.close();
    };
    ChooseServiceController.prototype.onClose = function () {
        LocalConfig_1.default.IsChoosedService = true;
        this.dispatchEvent(Common.SceneLoginEid.ServiceChoosed);
    };
    return ChooseServiceController;
}(Core.Controller));
exports.ChooseServiceController = ChooseServiceController;
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"./Core":50}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Core = require("./Core");
var ChooseServiceView = /** @class */ (function (_super) {
    __extends(ChooseServiceView, _super);
    function ChooseServiceView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooseServiceView.prototype.LoadView = function () {
        this.Local = this.UI.getChild("Local");
        this.Http = this.UI.getChild("Http");
        this.LocalWechat = this.UI.getChild("LocalWechat");
        this.AccountName = this.UI.getChild("AccountName").asTextInput;
    };
    ChooseServiceView.prototype.onDistroy = function () {
    };
    return ChooseServiceView;
}(Core.View));
exports.ChooseServiceView = ChooseServiceView;
},{"./Core":50}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = require("../Config/Config");
var Manager = require("../Manager/Manager");
var Common = require("../Common/Common");
/** @type {Object<string, Controller>} */
// let CtrlMap:Config.Dictionary<Controller> = {};
/** @type {Object<string, View>} */
var ViewMap = {};
exports.ViewMap = ViewMap;
/** @type {Controller[]} */
var OpenedCtrl = {};
exports.OpenedCtrl = OpenedCtrl;
exports.CtrlMapArray = {};
var CtrlLisener = /** @class */ (function () {
    function CtrlLisener(obj, lisener) {
        if (!obj)
            return;
        this.Obj = obj;
        this.Lisener = lisener;
    }
    CtrlLisener.prototype.remove = function () {
        this.Obj.offClick(this, this.Lisener);
    };
    return CtrlLisener;
}());
/// <summary>
/// 向UiManager 注册脚本 还有一些 MSGID
/// 一般是panel 挂载这样的脚本 需要向其他模块 或者脚本通信
/// </summary>
var UiCVBase = /** @class */ (function (_super) {
    __extends(UiCVBase, _super);
    function UiCVBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UiCVBase.prototype.onDestroy = function () {
        //重写此组件方法必须执行
        this.removeEventListener();
    };
    return UiCVBase;
}(Common.EventDispather));
exports.UiCVBase = UiCVBase;
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller(cKey, view, isFullScreen, isPopup) {
        var _this = _super.call(this) || this;
        _this.IsOpen = false;
        _this.IsDestroyed = true;
        _this.IsShow = false;
        _this.IsPopup = false;
        _this.IsFullScreen = false;
        _this.IsDefault = false;
        _this.IsInteractive = true;
        _this.lisenterArray = new Array();
        if (!cKey || !view) {
            console.error("Invalid key or view");
            return _this;
        }
        ;
        if (!OpenedCtrl[cKey]) {
            OpenedCtrl[cKey] = _this;
        }
        var vKey = view.Key;
        if (!ViewMap[vKey]) {
            ViewMap[vKey] = new view(vKey);
        }
        _this.multitonKey = cKey;
        _this.View = ViewMap[vKey];
        _this.IsFullScreen = isFullScreen == true;
        _this.IsPopup = isPopup == true;
        return _this;
    }
    Object.defineProperty(Controller, "Key", {
        get: function () { return this.cKey; },
        set: function (key) { this.cKey = key; },
        enumerable: true,
        configurable: true
    });
    Controller.init = function (cKey, view, vKey) {
        this.Key = cKey;
        this.view = view;
        this.view.Key = vKey ? vKey : cKey;
        exports.CtrlMapArray[this.Key] = this;
    };
    Controller.prototype.create = function () {
        if (!this.View) {
            console.error("No view created!");
            return false;
        }
        this.IsDestroyed = false;
        this.View.Initialize();
        this.onCreate();
        return true;
    };
    Controller.prototype.open = function (_data) {
        this.IsOpen = true;
        this.Data = _data;
        // Facade.PushCtrl(this, this.Data);
        this.show(_data);
        this.openOver();
    };
    Controller.prototype.openOver = function () {
        if (this.IsFullScreen) {
            this.dispatchEvent(Common.UiNoticeEid.OpenFullScreen, this.multitonKey);
        }
        if (this.IsPopup) {
            this.SortingOrder(Config.UIConfig.SortingOrder.Popup);
        }
        this.onOpen(this.Data);
    };
    Controller.prototype.addButtonLisenter = function (object, fun, data, thisArg) {
        if (object == null || fun == null) {
            console.error("object or fun is null");
            return;
        }
        thisArg = thisArg ? thisArg : this;
        object.onClick(thisArg, fun, data);
        this.lisenterArray.push(new CtrlLisener(object, fun));
    };
    Controller.prototype.close = function () {
        if (this.IsOpen == false)
            return;
        this.IsOpen = false;
        this.onClose();
        this.dispatchEvent(Common.UiNoticeEid.CloseController, this.multitonKey);
        if (this.IsPopup) {
            this.dispatchEvent(Common.UiNoticeEid.ClosePopup, this.multitonKey);
        }
        if (this.IsFullScreen) {
            this.dispatchEvent(Common.UiNoticeEid.CloseFullScreen, this.multitonKey);
        }
        // delete CtrlMap[this.multitonKey];
        // OpenedCtrl.splice(OpenedCtrl.indexOf(this), 1);
        OpenedCtrl[this.multitonKey] = null;
        //清空点击事件
        for (var i in this.lisenterArray) {
            this.lisenterArray[i].remove();
            this.lisenterArray[i] = null;
        }
        //清除监听事件
        this.removeEventListener();
        //清除所有计时器
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
        //销毁节点
        this.destroy();
    };
    // 显示界面
    Controller.prototype.show = function (data) {
        data = data ? data : this.Data;
        if (this.IsDestroyed) {
            this.open(data);
        }
        // 未open状态，不处理
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
    };
    // 隐藏界面
    Controller.prototype.hide = function () {
        if (!this.IsShow)
            return false;
        if (!this.IsDestroyed) {
            this.View.hide();
        }
        this.IsShow = false;
        this.onHide();
        return true;
    };
    // 设置渲染顺序
    Controller.prototype.SortingOrder = function (order) {
        if (!this.IsDestroyed) {
            this.View.SortingOrder(order);
        }
    };
    // 是否可触控
    Controller.prototype.interactive = function (canTouch) {
        if (canTouch == null)
            return;
        this.IsInteractive = canTouch;
        if (!this.IsDestroyed) {
            this.View.interactive(canTouch);
        }
        this.onInteractive(canTouch);
    };
    Controller.prototype.refreshUI = function (data) {
        this.View.refreshUI(data);
    };
    Controller.prototype.onClose = function () { };
    Controller.prototype.onCreate = function () { };
    Controller.prototype.onOpen = function (data) { };
    Controller.prototype.onShow = function (data) { };
    Controller.prototype.onHide = function () { };
    Controller.prototype.onInteractive = function (canTouch) { };
    return Controller;
}(UiCVBase));
exports.Controller = Controller;
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(key) {
        var _this = _super.call(this) || this;
        _this.lisenterArray = new Array();
        _this.CallbackList = [];
        _this.multitonKey = key;
        _this._isAlive = true;
        if (!ViewMap[key]) {
            ViewMap[key] = _this;
        }
        _this.uiCfg = Config.ViewKit[key];
        if (!_this.uiCfg) {
            console.error('Incorrect view key!');
            return _this;
        }
        return _this;
    }
    Object.defineProperty(View, "Key", {
        get: function () { return this.vKey; },
        set: function (key) { this.vKey = key; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "UI", {
        get: function () {
            return this._UI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "IsAlive", {
        get: function () {
            return this._isAlive;
        },
        enumerable: true,
        configurable: true
    });
    View.prototype.Initialize = function () {
        if (!this._UI) {
            this._UI = Manager.SpawnManager.LoadView(this.uiCfg.Pkg, this.uiCfg.Com);
            if (!this._UI) {
                console.error('Invalid Ui com: ', this.uiCfg.Key);
            }
            else {
                this.Window = this.UI.getChild('Window');
                this.LoadView();
            }
        }
    };
    View.prototype.getInstance = function (key) {
        if (!key)
            return null;
        if (!ViewMap[key]) {
            ViewMap[key] = new View(key);
        }
        return ViewMap[key];
    };
    /**
     * @param  {string} callbackKey
     * @param  {function} callback
     */
    View.prototype.setCallback = function (callbackKey, callback) {
        this.CallbackList[callbackKey] = callback;
    };
    View.prototype.invokeCallback = function (callbackKey) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof (callbackKey) != 'string' || typeof (this.CallbackList[callbackKey]) != 'function')
            return;
        (_a = this.CallbackList)[callbackKey].apply(_a, args);
    };
    View.prototype.addButtonLisenter = function (object, fun, data, thisArg) {
        if (object == null || fun == null) {
            console.error("object or fun is null");
            return;
        }
        thisArg = thisArg ? thisArg : this;
        object.onClick(thisArg, fun, data);
        this.lisenterArray.push(new CtrlLisener(object, fun));
    };
    View.prototype.clickListCallback = function (thisArg, func) {
        var data = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            data[_i - 2] = arguments[_i];
        }
        Common.clickListCallback.apply(Common, [this.List, thisArg, func].concat(data));
    };
    View.prototype.destroy = function () {
        this.onDestroy();
        this._isAlive = false;
        //清除监听事件
        this.removeEventListener();
        //清除所有计时器
        Laya.timer.clearAll(this);
        //清空点击事件
        for (var i in this.lisenterArray) {
            this.lisenterArray[i].remove();
            this.lisenterArray[i] = null;
        }
        delete ViewMap[this.multitonKey];
        // for(let i in this) {
        //     // 销毁UI
        //     // if(this[i] && this[i].dispose) {
        //     //     this[i].dispose();
        //     // }
        //     // this[i] = undefined
        //     // if(this[i] instanceof fgui.GComponent == true){
        //     //     this[i].displayObject.offAll();
        //     // }
        // }
        this._UI.dispose();
    };
    View.prototype.onDestroy = function () { };
    View.prototype.LoadView = function () { };
    View.prototype.refreshUI = function (data) { };
    View.prototype.interactive = function (canTouch) {
        this._UI.touchable = canTouch;
    };
    View.prototype.SortingOrder = function (order) {
        this._UI.sortingOrder = order;
    };
    View.prototype.show = function (data) {
        this._UI.visible = true;
    };
    View.prototype.hide = function () {
        this._UI.visible = false;
    };
    return View;
}(UiCVBase));
exports.View = View;
var Facade = /** @class */ (function () {
    function Facade() {
    }
    Facade.PushCtrl = function (ctrl, data) {
        if (!ctrl)
            return;
        OpenedCtrl[ctrl.multitonKey] = ctrl;
        var nextc = OpenedCtrl[Object.keys(OpenedCtrl)[0]];
        if (nextc) {
            nextc.show(data);
        }
    };
    Facade.getController = function (id) {
        var ctrl = exports.CtrlMapArray[id];
        if (ctrl)
            return new ctrl();
        else
            return null;
    };
    return Facade;
}());
exports.Facade = Facade;
},{"../Common/Common":1,"../Config/Config":8,"../Manager/Manager":39}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UI = require("./UI");
var Common = require("../Common/Common");
var LoadingController = /** @class */ (function (_super) {
    __extends(LoadingController, _super);
    function LoadingController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingController.prototype.onOpen = function (data) {
        this.View.Show_C.selectedIndex = 1;
        this.addEventListener(Common.NetHttpConnectEid.ConnectBegin, this.openHttpStart);
        this.addEventListener(Common.NetHttpConnectEid.ServiceRespond, this.onHttpRespond);
    };
    LoadingController.prototype.showLoading = function () {
        this.View.Show_C.selectedIndex = 1;
    };
    LoadingController.prototype.hideLoading = function () {
        this.View.Show_C.selectedIndex = 0;
    };
    //连接完成
    LoadingController.prototype.onHttpRespond = function () {
        this.hide();
    };
    //开始连接
    LoadingController.prototype.openHttpStart = function () {
        this.show();
    };
    LoadingController.prototype.onClose = function () {
        // cc.director.off(cc.Director.EVENT_BEFORE_SCENE_LOADING, this.close, this);
    };
    return LoadingController;
}(UI.Controller));
exports.LoadingController = LoadingController;
},{"../Common/Common":1,"./UI":57}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("../Manager/Manager");
var LocalConfig_1 = require("../Config/LocalConfig");
var Config = require("../Config/Config");
var Core = require("./Core");
var Data = require("../Data/Data");
var Common = require("../Common/Common");
var LoadingProgressController = /** @class */ (function (_super) {
    __extends(LoadingProgressController, _super);
    function LoadingProgressController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Progress = 0;
        _this.IsLoaded = false;
        _this.PkgNum = 0;
        _this.ResNum = 0;
        return _this;
    }
    LoadingProgressController.prototype.onOpen = function (data) {
        this.View.UI.text = "0%";
        //开发版先显示选服务器画面
        // if(Manager.VersionManager.Version == Config.VersionConfig.Develop){
        //     this.hide();
        // }
        this.setProgressNumber();
        this.simProgress();
        this.addEventListener(Common.SceneLoginEid.PackageLoaded, this.onResLoaded);
        this.addEventListener(Common.SceneLoginEid.LoginSuccess, this.onLoginSuccess);
        this.addEventListener(Common.SceneLoginEid.ConfigLoaded, this.tryClose);
        //进场景也需要等待模拟进度
        // this.addEventListener(Common.SceneEnterEid.MainMenu, this.tryClose);
    };
    LoadingProgressController.prototype.setProgressNumber = function () {
        //登录需要加载的UI包数量--cocos用
        // this.PkgNum = UIConfig.UIPkgs.length * 2;
        this.ResNum = Config.loginResUrls.length + Config.urls.length + 5;
        //小游戏加上分包进度
        if (Common.isMiniGame()) {
            // this.PkgNum += UIConfig.SubPkgs.length;
            this.ResNum += Config.UIConfig.SubPkgs.length;
        }
    };
    LoadingProgressController.prototype.showUiProgress = function (progress, pkgName) {
        pkgName = pkgName || '';
        this.View.UI.text = 'Loading ui ' + pkgName + ': ' + progress * 100 + '%';
    };
    //假进度
    LoadingProgressController.prototype.simProgress = function () {
        this.Progress += 100 / this.ResNum;
        var progress = Math.ceil(this.Progress);
        progress = progress > 100 ? 100 : progress;
        this.View.UI.text = progress + "%";
        if (this.Progress >= 100) {
            this.tryClose();
            return;
        }
        Laya.timer.once(100, this, this.simProgress);
    };
    LoadingProgressController.prototype.addProgress = function (addProgress) {
        this.Progress += 100 / this.PkgNum;
        console.log(this.Progress);
        // this.Progress = this.Progress > 100? 100: this.Progress;
        var progress = Math.ceil(this.Progress);
        progress = progress > 100 ? 100 : progress;
        this.View.UI.text = progress + "%";
        //加载完成UI包
        if (this.Progress >= 100) {
            this.IsLoaded = true;
            this.dispatchEvent(Common.SceneLoginEid.PackageLoaded);
            this.showWxLogin();
            // if(DataBase.LoginData.AccountName){
            //     this.close();
            // }
        }
    };
    LoadingProgressController.prototype.showWxLogin = function () {
        if (!Common.isMiniGame() || LocalConfig_1.default.IsWxAuth || !this.IsLoaded)
            return;
        this.View.showWxLogin();
    };
    LoadingProgressController.prototype.showConfigProgress = function () {
        if (Config.DataConfig.IsConfigLoaded == false) {
            this.View.UI.text = "加载配置中";
        }
    };
    LoadingProgressController.prototype.showLoginProgress = function () {
        this.View.UI.text = "登录中";
    };
    LoadingProgressController.prototype.onLoginSuccess = function () {
        this.tryClose();
    };
    LoadingProgressController.prototype.onResLoaded = function () {
        this.IsLoaded = true;
        this.tryClose();
    };
    //满足所有条件才关闭加载界面
    LoadingProgressController.prototype.tryClose = function () {
        if (this.Progress < 100)
            return;
        if (Manager.VersionManager.Version == Config.VersionConfig.Develop) {
            if (!LocalConfig_1.default.IsChoosedService)
                return;
        }
        if (Config.DataConfig.IsConfigLoaded == false) {
            this.showConfigProgress();
            return;
        }
        if (Data.LoginData.IsLogined != true) {
            this.showLoginProgress();
            return;
        }
        ;
        if (!Config.UIConfig.LoginPackageLoaded)
            return;
        this.close();
    };
    LoadingProgressController.prototype.onClose = function () {
        this.dispatchEvent(Common.SceneLoginEid.SimProgressEnd);
    };
    return LoadingProgressController;
}(Core.Controller));
exports.LoadingProgressController = LoadingProgressController;
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"../Data/Data":24,"../Manager/Manager":39,"./Core":50}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIConfig_1 = require("../Config/UIConfig");
var Core = require("./Core");
var LoadingProgressView = /** @class */ (function (_super) {
    __extends(LoadingProgressView, _super);
    function LoadingProgressView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingProgressView.prototype.LoadView = function () {
        //渲染层级
        this.UI.sortingOrder = UIConfig_1.UIConfig.SortingOrder.SceneLoading;
        this.Login_C = this.UI.getController('Login_C');
    };
    LoadingProgressView.prototype.showWxLogin = function () {
        this.Login_C.selectedIndex = 1;
    };
    LoadingProgressView.prototype.onDestroy = function () {
    };
    return LoadingProgressView;
}(Core.View));
exports.LoadingProgressView = LoadingProgressView;
},{"../Config/UIConfig":19,"./Core":50}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UI = require("./UI");
var Config = require("../Config/Config");
var LoadingView = /** @class */ (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingView.prototype.LoadView = function () {
        //渲染层级
        this.UI.sortingOrder = Config.UIConfig.SortingOrder.NetSignal;
        this.Show_C = this.UI.getController("Show_C");
    };
    LoadingView.prototype.onDestroy = function () {
    };
    return LoadingView;
}(UI.View));
exports.LoadingView = LoadingView;
},{"../Config/Config":8,"./UI":57}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Core = require("./Core");
var UI = require("./UI");
var Config = require("../Config/Config");
var cKey = Config.ViewKit.PublicConfirmation.Key;
var PublicConfirmationController = /** @class */ (function (_super) {
    __extends(PublicConfirmationController, _super);
    function PublicConfirmationController() {
        return _super.call(this, cKey, UI.PublicConfirmationView, false, true) || this;
    }
    PublicConfirmationController.prototype.onOpen = function (data) {
        this.addButtonLisenter(this.View.Btn_Close, this.close);
        this.addButtonLisenter(this.View.Btn_Cancel, this.close);
        this.addButtonLisenter(this.View.Btn_Yes, this.yesBtnOnClick);
        if (data == null || data instanceof Config.PopupWindowData == false) {
            console.error('Invalid popup window data.');
            return;
        }
        else {
            this.Callback = data.YesBtnCallback;
            this.refreshUI(data);
        }
    };
    PublicConfirmationController.prototype.yesBtnOnClick = function () {
        if (this.Callback) {
            this.Callback();
        }
        this.close();
    };
    PublicConfirmationController.prototype.onClose = function () {
    };
    PublicConfirmationController.cKey = cKey;
    return PublicConfirmationController;
}(Core.Controller));
exports.PublicConfirmationController = PublicConfirmationController;
},{"../Config/Config":8,"./Core":50,"./UI":57}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Core = require("./Core");
var Config = require("../Config/Config");
var Common = require("../Common/Common");
var vKey = Config.ViewKit.PublicConfirmation.Key;
var PublicConfirmationView = /** @class */ (function (_super) {
    __extends(PublicConfirmationView, _super);
    function PublicConfirmationView() {
        return _super.call(this, vKey) || this;
    }
    PublicConfirmationView.prototype.LoadView = function () {
        this.Btn_Close = this.Window.getChild('Btn_Close').asButton;
        this.Btn_Yes = this.Window.getChild('Btn_Yes').asButton;
        this.Btn_Cancel = this.Window.getChild('Btn_Cancel').asButton;
        this.List_Content = this.Window.getChild('List_Content').asList;
        this.List_Reward = this.Window.getChild('List_Reward').asList;
        this.Content_C = this.Window.getController('Content_C');
        this.BtnType_C = this.Window.getController('BtnType_C');
    };
    PublicConfirmationView.prototype.refreshUI = function (data) {
        if (!data)
            return;
        this.Content_C.selectedIndex = data.WindowType - 1;
        switch (data.WindowType) {
            case Config.ConfirmWindowType.Content:
                this.BtnType_C.selectedIndex = 0;
                this.fillContents(data.Content);
                break;
            case Config.ConfirmWindowType.Reward:
                this.BtnType_C.selectedIndex = 1;
                this.fillRewards(data.RewardData);
                break;
            case Config.ConfirmWindowType.ContentAndReward:
                this.BtnType_C.selectedIndex = 0;
                this.fillContents(data.Content);
                this.fillRewards(data.RewardData);
                break;
        }
        //按钮文字
        if (data.YesBtnContent) {
            this.Btn_Yes.text = data.YesBtnContent;
        }
        if (data.CancelBtnContent) {
            this.Btn_Cancel.text = data.CancelBtnContent;
        }
    };
    PublicConfirmationView.prototype.fillContents = function (data) {
        var _this = this;
        this.List_Content.removeChildrenToPool();
        data.forEach(function (v) {
            _this.List_Content.addItemFromPool().text = v;
        });
    };
    PublicConfirmationView.prototype.fillRewards = function (rewardData) {
        Common.fillItemListData(rewardData, this.List_Reward);
    };
    PublicConfirmationView.prototype.onDestroy = function () {
    };
    PublicConfirmationView.vKey = vKey;
    return PublicConfirmationView;
}(Core.View));
exports.PublicConfirmationView = PublicConfirmationView;
},{"../Common/Common":1,"../Config/Config":8,"./Core":50}],57:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./ChooseServiceController"));
__export(require("./ChooseServiceView"));
__export(require("./Core"));
__export(require("./LoadingController"));
__export(require("./LoadingProgressController"));
__export(require("./LoadingProgressView"));
__export(require("./LoadingView"));
__export(require("./PublicConfirmationController"));
__export(require("./PublicConfirmationView"));
},{"./ChooseServiceController":48,"./ChooseServiceView":49,"./Core":50,"./LoadingController":51,"./LoadingProgressController":52,"./LoadingProgressView":53,"./LoadingView":54,"./PublicConfirmationController":55,"./PublicConfirmationView":56}]},{},[33])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvTGF5YUFpcklERS9yZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29tbW9uL0NvbW1vbi50cyIsInNyYy9Db21tb24vRXZlbnRUeXBlLnRzIiwic3JjL0NvbW1vbi9HRXZlbnQudHMiLCJzcmMvQ29tbW9uL0xvZ2ljVXRpbHMudHMiLCJzcmMvQ29tbW9uL1Jlc291cmNlLnRzIiwic3JjL0NvbW1vbi9VdGlscy50cyIsInNyYy9Db21tb24vV3hVdGlscy50cyIsInNyYy9Db25maWcvQ29uZmlnLnRzIiwic3JjL0NvbmZpZy9Db25maWdVdGlscy50cyIsInNyYy9Db25maWcvRGF0YUNvbmZpZy50cyIsInNyYy9Db25maWcvRGVmaW5lLnRzIiwic3JjL0NvbmZpZy9Mb2NhbENvbmZpZy50cyIsInNyYy9Db25maWcvTG9jYWxDb250ZW50LnRzIiwic3JjL0NvbmZpZy9Mb2dpblJlc1VybHMudHMiLCJzcmMvQ29uZmlnL05ldENvbmZpZy50cyIsInNyYy9Db25maWcvT2JqZWN0Q29uZmlnLnRzIiwic3JjL0NvbmZpZy9SZXNVcmxzLnRzIiwic3JjL0NvbmZpZy9TdGF0ZUNvbmZpZy50cyIsInNyYy9Db25maWcvVUlDb25maWcudHMiLCJzcmMvQ29yZS9Db3JlLnRzIiwic3JjL0NvcmUvT2JqZWN0UHJveHkudHMiLCJzcmMvQ29yZS9PYmplY3RTdGF0ZS50cyIsInNyYy9Db3JlL1JpZ2lkT2JqZWN0LnRzIiwic3JjL0RhdGEvRGF0YS50cyIsInNyYy9EYXRhL0RhdGFCYXNlLnRzIiwic3JjL0dhbWVDb25maWcudHMiLCJzcmMvR2FtZVNjZW5lLnRzIiwic3JjL0xvZ2ljL0NvbGxpc2lvblNjcmlwdEJhc2UudHMiLCJzcmMvTG9naWMvRGVza0NvbGxpc2lvblNjcmlwdC50cyIsInNyYy9Mb2dpYy9HcmFiTG9naWMudHMiLCJzcmMvTG9naWMvSGFuZENvbGxpc2lvblNjcmlwdC50cyIsInNyYy9Mb2dpYy9Mb2dpYy50cyIsInNyYy9NYWluLnRzIiwic3JjL01hbmFnZXIvQmFzZU1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9DbGlja0VmZmVjdE1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9EYXRhTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL0xvYWRpbmdJY29uTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL0xvYWRpbmdQcm9ncmVzc01hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9NYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvTmV0TWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1Bvb2xNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvU2NlbmVNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvU3Bhd25NYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvU3RhdGVCYXNlLnRzIiwic3JjL01hbmFnZXIvVGltZXJNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvVUlNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvVmVyc2lvbk1hbmFnZXIudHMiLCJzcmMvVUkvQ2hvb3NlU2VydmljZUNvbnRyb2xsZXIudHMiLCJzcmMvVUkvQ2hvb3NlU2VydmljZVZpZXcudHMiLCJzcmMvVUkvQ29yZS50cyIsInNyYy9VSS9Mb2FkaW5nQ29udHJvbGxlci50cyIsInNyYy9VSS9Mb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyLnRzIiwic3JjL1VJL0xvYWRpbmdQcm9ncmVzc1ZpZXcudHMiLCJzcmMvVUkvTG9hZGluZ1ZpZXcudHMiLCJzcmMvVUkvUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlci50cyIsInNyYy9VSS9QdWJsaWNDb25maXJtYXRpb25WaWV3LnRzIiwic3JjL1VJL1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1ZBLGlDQUE0QjtBQUM1QixnQ0FBMkI7QUFDM0IsNkJBQXdCO0FBQ3hCLGtD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QUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUM3QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDL0UsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzlFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNqRixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDN0MsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2xGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUM1RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENB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QyxnQkFBZ0IsRUFBQztZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDaEQ7SUFDTCxDQUFDO0lBRUQsNkNBQVksR0FBWixVQUFhLElBQWtCO1FBQS9CLGlCQUtDO1FBSkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQ1YsS0FBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRDQUFXLEdBQVgsVUFBWSxVQUFnQjtRQUN4QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsMENBQVMsR0FBVDtJQUNBLENBQUM7SUFsRU0sMkJBQUksR0FBRyxJQUFJLENBQUM7SUFtRXZCLDZCQUFDO0NBcEVELEFBb0VDLENBcEUyQyxJQUFJLENBQUMsSUFBSSxHQW9FcEQ7QUFwRVksd0RBQXNCOzs7Ozs7O0FDVm5DLCtDQUEwQztBQUMxQyx5Q0FBb0M7QUFDcEMsNEJBQXVCO0FBQ3ZCLHlDQUFvQztBQUNwQyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLG1DQUE4QjtBQUM5QixvREFBK0M7QUFDL0MsOENBQXlDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCAqIGZyb20gJy4vRXZlbnRUeXBlJztcclxuZXhwb3J0ICogZnJvbSAnLi9SZXNvdXJjZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvZ2ljVXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL1d4VXRpbHMnO1xyXG4iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0IEdFdmVudCBmcm9tIFwiLi9HRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudERpc3BhdGhlciBleHRlbmRzIExheWEuU2NyaXB0M0Qge1xyXG4gICAgcHJvdGVjdGVkIF9ldmVudExpc3QgPSBuZXcgQXJyYXk8Q29uZmlnLkV2ZW50Q2xhc3M+KCk7ICBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX3N0YXRpY0V2ZW50TGlzdCA9IG5ldyBBcnJheTxDb25maWcuRXZlbnRDbGFzcz4oKTsgLy/pnZnmgIHmlrnms5Xkuovku7ZcclxuXHJcbiAgICAvL+mdmeaAgeaWueazlVxyXG4gICAgc3RhdGljIGFkZEV2ZW50TGlzdGVuZXIoa2V5LCBsaXNlbmVyOkZ1bmN0aW9uKXtcclxuICAgICAgICBHRXZlbnQuQWRkTGlzdGVuZXIoa2V5LCBsaXNlbmVyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9zdGF0aWNFdmVudExpc3QucHVzaChuZXcgQ29uZmlnLkV2ZW50Q2xhc3Moa2V5LCBsaXNlbmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpc3BhdGNoRXZlbnQoa2V5LCAuLi5kYXRhKXtcclxuICAgICAgICBHRXZlbnQuRGlzcGF0Y2goa2V5LCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXJFdmVudExpc3RlbmVyKCl7XHJcbiAgICAgICAgdGhpcy5fc3RhdGljRXZlbnRMaXN0LmZvckVhY2goZXZ0PT57XHJcbiAgICAgICAgICAgIEdFdmVudC5SZW1vdmVMaXN0ZW5lcihldnQuS2V5LCBldnQuTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBldnQgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcm9jZXNzRXZlbnQoa2V5LCBsaXN0ZW5lcjpGdW5jdGlvbiwgLi4uZGF0YSl7XHJcbiAgICAgICAgLy8gbGlzdGVuZXIuY2FsbCh0aGlzLCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WunuS+i+WMlumHjei9veaWueazlVxyXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoa2V5LCBsaXNlbmVyOkZ1bmN0aW9uKXtcclxuICAgICAgICBHRXZlbnQuQWRkTGlzdGVuZXIoa2V5LCBsaXNlbmVyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9ldmVudExpc3QucHVzaChuZXcgQ29uZmlnLkV2ZW50Q2xhc3Moa2V5LCBsaXNlbmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3BhdGNoRXZlbnQoa2V5LCAuLi5kYXRhKXtcclxuICAgICAgICBHRXZlbnQuRGlzcGF0Y2goa2V5LCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+W/hemhu+WcqOmUgOavgeaXtuaJp+ihjOatpOaWueazlVxyXG4gICAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoKXtcclxuICAgICAgICB0aGlzLl9ldmVudExpc3QuZm9yRWFjaChldnQ9PntcclxuICAgICAgICAgICAgR0V2ZW50LlJlbW92ZUxpc3RlbmVyKGV2dC5LZXksIGV2dC5MaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGV2dCA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByb2Nlc3NFdmVudChrZXksIGxpc3RlbmVyOkZ1bmN0aW9uLCAuLi5kYXRhKXtcclxuICAgICAgICAvLyBsaXN0ZW5lci5jYWxsKHRoaXMsIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIC8v6YeN5YaZ5q2k57uE5Lu25pa55rOV5b+F6aG75omn6KGMXHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJhc2UtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgZW51bSBFdmVudFNwYW4ge1xyXG4gICAgTW9kdWxlU3BhbiA9IDEwMDAwMCxcclxuICAgIEZ1bmNTcGFuID0gMTAwMCxcclxuICAgIFVJU3BhbiA9IDEsXHJcbn1cclxuXHJcbi8v5qih5Z2X5Yqf6IO9XHJcbmVudW0gTW9kdWxlRXR5cGUge1xyXG4gICAgU2NlbmUgPSAxLFxyXG4gICAgR2FtZSA9IDIsXHJcbiAgICBOZXQgPSAzLFxyXG4gICAgVWkgPSA0LFxyXG4gICAgTnBjID0gNSxcclxuICAgIENoYXJhY3RlciA9IDYsXHJcbiAgICBBc3NldCA9IDcsXHJcbiAgICBEYXRhID0gOCxcclxuICAgIEF1ZGlvID0gOSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTW9kdWxlRWlkIHtcclxuICAgIFNjZW5lICAgICAgID0gTW9kdWxlRXR5cGUuU2NlbmUgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgICAvL+WcuuaZr+aooeWdl1xyXG4gICAgTmV0ICAgICAgICAgPSBNb2R1bGVFdHlwZS5OZXQgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgICAvL+e9kee7nOaooeWdl1xyXG4gICAgR2FtZSAgICAgICAgPSBNb2R1bGVFdHlwZS5HYW1lICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sICAgLy/njqnms5XmqKHlnZdcclxuICAgIERhdGEgICAgICAgID0gTW9kdWxlRXR5cGUuRGF0YSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLCAgLy9VSeaooeWdl1xyXG4gICAgVWkgICAgICAgICAgPSBNb2R1bGVFdHlwZS5VaSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLCAgLy9VSeaooeWdl1xyXG4gICAgQ2hhcmFjdGVyICAgPSBNb2R1bGVFdHlwZS5DaGFyYWN0ZXIgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgLy/njqnlrrblsZ7mgKfmqKHlnZdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFuYWdlckVpZCB7XHJcbiAgICBHYW1lTWFuYWdlciAgICAgICAgID0gTW9kdWxlRXR5cGUuR2FtZSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG4gICAgTmV0TWFuYWdlciAgICAgICAgICA9IE1vZHVsZUV0eXBlLk5ldCAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG4gICAgVWlNYW5hZ2VyICAgICAgICAgICA9IE1vZHVsZUV0eXBlLlVpICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sXHJcbiAgICBBc3NldE1hbmFnZXIgICAgICAgID0gTW9kdWxlRXR5cGUuQXNzZXQgKiBFdmVudFNwYW4uTW9kdWxlU3BhbixcclxuICAgIERhdGFNYW5hZ2VyICAgICAgICAgPSBNb2R1bGVFdHlwZS5EYXRhICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sXHJcbiAgICBBdWRpb01hbmFnZXIgICAgICAgID0gTW9kdWxlRXR5cGUuRGF0YSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3nvZHnu5zmqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBuZXRNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIE5ldE1vZHVsZUlkIHtcclxuICAgIEh0dHBDb25uZXQgICAgICAgPSBNb2R1bGVFaWQuTmV0ICsgKG5ldE1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy9IVFRQ6L+e5o6lXHJcbn1cclxuXHJcbi8vSFRUUOi/nuaOpVxyXG5sZXQgbmV0SHR0cENvbm5lY3RFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBOZXRIdHRwQ29ubmVjdEVpZCB7XHJcbiAgICBTZXJ2aWNlUmVzcG9uZCAgICAgID0gTmV0TW9kdWxlSWQuSHR0cENvbm5ldCArIG5ldEh0dHBDb25uZWN0RWlkTnVtKyssICAgIC8v5ZON5bqU5oiQ5YqfXHJcbiAgICBDb25uZWN0QmVnaW4gICAgICAgID0gTmV0TW9kdWxlSWQuSHR0cENvbm5ldCArIG5ldEh0dHBDb25uZWN0RWlkTnVtKyssICAgIC8v5byA5aeL6L+e5o6lXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWcuuaZr+aooeWdl+WKn+iDvS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IHNjZW5lTW9kdWxlTnVtID0gMTtcclxuZW51bSBTY2VuZU1vZHVsZUlkIHtcclxuICAgIExvZ2luICAgICAgID0gTW9kdWxlRWlkLlNjZW5lICsgKHNjZW5lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+eZu+W9lVxyXG4gICAgRW50ZXIgICAgICAgPSBNb2R1bGVFaWQuU2NlbmUgKyAoc2NlbmVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6L+b5YWl5Zy65pmv6YCa55+lXHJcbn1cclxuXHJcbi8v55m75b2VXHJcbmxldCBzY2VuZUxvZ2luRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gU2NlbmVMb2dpbkVpZCB7XHJcbiAgICBTZXJ2aWNlQ2hvb3NlZCAgPSBTY2VuZU1vZHVsZUlkLkxvZ2luICsgc2NlbmVMb2dpbkVpZE51bSsrLCAgICAvL+W3sumAieaLqeacjeWKoeWZqO+8jOW8gOWPkeeUqFxyXG4gICAgQ29uZmlnTG9hZGVkICAgID0gU2NlbmVNb2R1bGVJZC5Mb2dpbiArIHNjZW5lTG9naW5FaWROdW0rKywgICAgLy/phY3nva7liqDovb3lrozmiJBcclxuICAgIFBhY2thZ2VMb2FkZWQgICA9IFNjZW5lTW9kdWxlSWQuTG9naW4gKyBzY2VuZUxvZ2luRWlkTnVtKyssICAgIC8v5Yqg6L295YyF5a6M5oiQXHJcbiAgICBMb2dpblN1Y2Nlc3MgICAgPSBTY2VuZU1vZHVsZUlkLkxvZ2luICsgc2NlbmVMb2dpbkVpZE51bSsrLCAgICAvL+eZu+W9leaIkOWKn1xyXG4gICAgU2ltUHJvZ3Jlc3NFbmQgID0gU2NlbmVNb2R1bGVJZC5Mb2dpbiArIHNjZW5lTG9naW5FaWROdW0rKywgICAgLy/lgYfov5vluqbmnaHor7vlroxcclxufVxyXG5cclxuLy/ov5vlhaXlnLrmma/pgJrnn6VcclxubGV0IHNjZW5lRW50ZXJFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBTY2VuZUVudGVyRWlkIHtcclxuICAgIE1haW5NZW51ICAgICAgICA9IFNjZW5lTW9kdWxlSWQuRW50ZXIgKyBzY2VuZUVudGVyRWlkTnVtKyssICAgIC8v5Li755WM6Z2i5Zy65pmvXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeaVsOaNruaooeWdl+WKn+iDvS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IGRhdGFNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIERhdGFNb2R1bGVJZCB7XHJcbiAgICBQbGF5ZXIgICAgICAgPSBNb2R1bGVFaWQuRGF0YSArIChzY2VuZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/njqnlrrbmlbDmja5cclxuICAgIEFkb2JlICAgICAgID0gTW9kdWxlRWlkLkRhdGEgKyAoc2NlbmVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5rSe5bqc5pWw5o2uXHJcbiAgICBTZWN0ICAgICAgID0gTW9kdWxlRWlkLkRhdGEgKyAoc2NlbmVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6Zeo5rS+5pWw5o2uXHJcbn1cclxuXHJcbi8v546p5a62XHJcbmxldCBkYXRhUGxheWVyRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gRGF0YVBsYXllckVpZCB7XHJcbiAgICBSZWZyZXNoZWQgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5QbGF5ZXIgKyBkYXRhUGxheWVyRWlkTnVtKyssICAvL+aVsOaNruabtOaWsOmAmuefpVxyXG4gICAgR21BZGRCYWdJdGVtU3VjY2VzcyAgPSBEYXRhTW9kdWxlSWQuUGxheWVyICsgZGF0YVBsYXllckVpZE51bSsrLCAgLy9HTeWRveS7pOWinuWKoOiDjOWMheeJqeWTgeaIkOWKn1xyXG59XHJcblxyXG4vL+a0nuW6nFxyXG5sZXQgZGF0YUFkb2JlRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gRGF0YUFkb2JlRWlkIHtcclxuICAgIFJlZnJlc2hlZCAgICA9IERhdGFNb2R1bGVJZC5BZG9iZSArIGRhdGFBZG9iZUVpZE51bSsrLCAgICAvL+aVsOaNruabtOaWsOmAmuefpVxyXG59XHJcblxyXG4vL+mXqOa0vlxyXG5sZXQgZGF0YVNlY3RFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBEYXRhU2VjdEVpZCB7XHJcbiAgICBSZWZyZXNoZWQgICAgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/mlbDmja7mm7TmlrDpgJrnn6VcclxuICAgIEdvdEluZm8gICAgICAgICAgICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+iOt+W+l+mXqOa0vlVJ5pWw5o2uXHJcbiAgICBHb3RUYXNrSW5mbyAgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/ojrflvpfpl6jmtL7ku7vliqHmlbDmja5cclxuICAgIEdvdFRyYWluVG93ZXJJbmZvICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+iOt+W+l+S/rueCvOWhlOaVsOaNrlxyXG59XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVUnmqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCB1aU1vZHVsZU51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIHVpTW9kdWxlSWQge1xyXG4gICAgT3BlbiAgICAgICA9IE1vZHVsZUVpZC5VaSArICh1aU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/miZPlvIDnlYzpnaJcclxuICAgIE5vdGljZSAgICAgPSBNb2R1bGVFaWQuVWkgKyAodWlNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6YCa55+lXHJcbn1cclxuXHJcbi8v5omT5byA55WM6Z2iXHJcbmxldCB1aU9wZW5FaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBVaU9wZW5FaWQge1xyXG4gICAgTG9hZGluZ1Byb2dyZXNzICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgTG9hZGluZyAgICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQ2hvb3NlU2VydmljZSAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgTWFpbk1lbnUgICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQ3VsdGl2YXRpb25JbmZvICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQWRvYmVNYWluICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQWRvYmVQb29sICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQWRvYmVVcGdyYWQgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgUHVibGljQ29uZmlybWF0aW9uICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgSm9pblNlY3QgICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgXHJcbn1cclxuXHJcbi8vVUnpgJrnn6VcclxubGV0IHVpTm90aWNlRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gVWlOb3RpY2VFaWQge1xyXG4gICAgQ2xvc2VDb250cm9sbGVyICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG4gICAgT3BlbkZ1bGxTY3JlZW4gICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG4gICAgQ2xvc2VGdWxsU2NyZWVuICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG4gICAgT3BlblBvcHVwICAgICAgICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG4gICAgQ2xvc2VQb3B1cCAgICAgICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3njqnlrrblsZ7mgKfmqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBjaGFyYWN0ZXJNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIENoYXJhY3Rlck1vZHVsZUlkIHtcclxuICAgIEN1bHRpdmF0aW9uICAgICAgID0gTW9kdWxlRWlkLkNoYXJhY3RlciArIChjaGFyYWN0ZXJNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5L+u5Li6XHJcbn1cclxuXHJcbi8v5L+u5Li6XHJcbmxldCBjaGFyYWN0ZXJDdWx0aXZhdGlvbkVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIENoYXJhY3RlckN1bHRpdmF0aW9uRWlkIHtcclxuICAgIFVwZ3JhZGUgICAgICA9IENoYXJhY3Rlck1vZHVsZUlkLkN1bHRpdmF0aW9uICsgY2hhcmFjdGVyQ3VsdGl2YXRpb25FaWROdW0rKywgICAgLy/kv67kuLrljYfnuqdcclxuICAgIEF1dG9DaGFuZ2VkICAgICAgICAgPSBDaGFyYWN0ZXJNb2R1bGVJZC5DdWx0aXZhdGlvbiArIGNoYXJhY3RlckN1bHRpdmF0aW9uRWlkTnVtKyssICAgIC8v6Ieq5Yqo5L+u54K85Y+Y5YyWXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeOqeazleaooeWdl+WKn+iDvS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IGdhbWVNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIEdhbWVNb2R1bGVJZCB7XHJcbiAgICBBZG9iZSAgICAgICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5rSe5bqcXHJcbiAgICBTZWN0ICAgICAgICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6Zeo5rS+XHJcbiAgICBLb25nZmEgICAgICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5oqA6IO95Yqf5rOVXHJcbiAgICBQbGF5ZXIgICAgICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6KeS6ImyXHJcbiAgICBSb2FkMkRpZXR5ICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5oyR5oiY5LuZ6YCUXHJcbn1cclxuXHJcbi8v5rSe5bqc546p5rOVXHJcbmxldCBnYW1lQWRvYmVFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lQWRvYmVFaWQge1xyXG4gICAgSGlyZVdvcmtlclN1Y2Nlc3MgICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v5oub5Yuf5bel5Lq65oiQ5YqfXHJcbiAgICBBZGRXb3JrZXJTdWNjZXNzICAgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/mt7vliqDlt6XkurrmiJDlip9cclxuICAgIFJlZHVjZVdvcmtlclN1Y2Nlc3MgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+WHj+WwkeW3peS6uuaIkOWKn1xyXG4gICAgVXBncmFkZVN0b25lU3VjY2VzcyAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v54G155+z5Y2H57qn5oiQ5YqfXHJcbiAgICBVcGdyYWRlRm9vZFN1Y2Nlc3MgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/po5/nianljYfnuqfmiJDlip9cclxuICAgIFVwZ3JhZGVXb29kU3VjY2VzcyAgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+acqOadkOWNh+e6p+aIkOWKn1xyXG4gICAgVXBncmFkZUlyb25TdWNjZXNzICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v6Zmo6ZOB5Y2H57qn5oiQ5YqfXHJcbiAgICBVcGdyYWRlUG9vbFN1Y2Nlc3MgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/ngbXmsaDljYfnuqfmiJDlip9cclxuICAgIFVwZ3JhZGVFbmVneVN1Y2Nlc3MgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+mjjuawtOWNh+e6p+aIkOWKn1xyXG59XHJcblxyXG4vL+mXqOa0vueOqeazlVxyXG5sZXQgZ2FtZVNlY3RFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lU2VjdEVpZCB7XHJcbiAgICBKb2luU2VjdFN1Y2Nlc3MgICAgICAgPSBHYW1lTW9kdWxlSWQuU2VjdCArIGdhbWVTZWN0RWlkTnVtKyssICAgIC8v5Yqg5YWl6Zeo5rS+5oiQ5YqfXHJcbiAgICBMZWFybktGU3VjY2VzcyAgICAgICAgPSBHYW1lTW9kdWxlSWQuU2VjdCArIGdhbWVTZWN0RWlkTnVtKyssICAvL+WtpuS5oOaKgOiDveaIkOWKn1xyXG4gICAgQWRkS2ZOdW0gICAgICAgICAgICAgID0gR2FtZU1vZHVsZUlkLlNlY3QgKyBnYW1lU2VjdEVpZE51bSsrLCAgICAvL+S/rueCvOWKn+azlVxyXG4gICAgU3RhcnRUYXNrICAgICAgICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+W8gOWni+mXqOa0vuS7u+WKoVxyXG4gICAgR3JhYlRhc2tBd2FyZFN1Y2Nlc3MgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+mihuWPlumXqOa0vuS7u+WKoeWlluWKseaIkOWKn1xyXG4gICAgU3RhcnROb3JtYWxUb3dlclRyYWluID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+W8gOWni+aZrumAmuS/rueCvFxyXG4gICAgRW5kTm9ybWFsVG93ZXJUcmFpbiA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/nu5PmnZ/mma7pgJrkv67ngrxcclxuICAgIFN0YXJ0Qm9zc1Rvd2VyVHJhaW4gICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/lvIDlp4vmjozpl6jkv67ngrxcclxuICAgIEVuZEJvc3NUb3dlclRyYWluICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v57uT5p2f5o6M6Zeo5L+u54K8XHJcbiAgICBBZmtTZWN0ICAgICAgICAgICAgICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v6YCA5Ye66Zeo5rS+XHJcbn1cclxuXHJcbi8v5oqA6IO9546p5rOVXHJcbmxldCBnYW1lS29uZ2ZhRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gR2FtZUtvbmdmYUVpZCB7XHJcbiAgICBVcGdyYWRlS0ZTdWNjZXNzICAgICAgID0gR2FtZU1vZHVsZUlkLktvbmdmYSArIGdhbWVLb25nZmFFaWROdW0rKywgICAgLy/liqDlhaXpl6jmtL7miJDlip9cclxufVxyXG5cclxuLy/op5LoibJcclxubGV0IGdhbWVQbGF5ZXJFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lUGxheWVyRWlkIHtcclxuICAgIEdldEJhZ0luZm8gICAgICAgICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgICAgLy/ojrflj5bliLDog4zljIXkv6Hmga9cclxuICAgIEJhZ1NvcnRTdWNjZXNzICAgICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgICAgLy/mlbTnkIbog4zljIXmiJDlip9cclxuICAgIEJhZ0V4cGFuZFN1Y2Nlc3MgICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgICAgLy/mianlsZXog4zljIXmiJDlip9cclxuICAgIEJhZ0V4cGFuZEZhaWwgICAgICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgICAgLy/mianlsZXog4zljIXlpLHotKVcclxuICAgIFNvbGRCYWdJdGVtU3VjY2VzcyAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgIC8v5Ye65ZSu6IOM5YyF54mp5ZOB5oiQ5YqfXHJcbiAgICBVc2VCYWdJdGVtU3VjY2VzcyAgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAvL+S9v+eUqOiDjOWMheeJqeWTgeaIkOWKn1xyXG59XHJcblxyXG4vL+aMkeaImOS7memAlOeOqeazlVxyXG5sZXQgZ2FtZVJvYWQyRGlldHlFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lUm9hZDJEaWV0eWFFaWQge1xyXG4gICAgR29Nb25zdGVyUmVzdWx0ICAgICAgPSBHYW1lTW9kdWxlSWQuUm9hZDJEaWV0eSArIGdhbWVSb2FkMkRpZXR5RWlkTnVtKyssICAgIC8v5oyR5oiY6ZWH5aaW5aGU57uT5p6cXHJcbiAgICBGYWlsR29Nb25zdGVyICAgICAgICA9IEdhbWVNb2R1bGVJZC5Sb2FkMkRpZXR5ICsgZ2FtZVJvYWQyRGlldHlFaWROdW0rKywgICAgLy/ml6Dms5XmjJHmiJjplYflppbloZRcclxuICAgIEludml0ZWRGcmllbmQgICAgICAgID0gR2FtZU1vZHVsZUlkLlJvYWQyRGlldHkgKyBnYW1lUm9hZDJEaWV0eUVpZE51bSsrLCAgICAvL+mCgOivt+aci+WPi+aMkeaImOmVh+WmluWhlFxyXG4gICAgQmF0dGxlUmVjb3JkRW5kICAgICAgPSBHYW1lTW9kdWxlSWQuUm9hZDJEaWV0eSArIGdhbWVSb2FkMkRpZXR5RWlkTnVtKyssICAgIC8v5oiY5oql5pKt5pS+5a6M5q+VXHJcbiAgICBNb25zdGVyMXN0Qmxvb2QgICAgICA9IEdhbWVNb2R1bGVJZC5Sb2FkMkRpZXR5ICsgZ2FtZVJvYWQyRGlldHlFaWROdW0rKywgICAgLy/plYflppbloZTpppbmnYBcclxufSIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHRXZlbnQge1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5byA5pS+5Z+fLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8v5Yi35paw5aW95Y+L5pWw5o2uXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgV1hfUkVGUkVTSF9GUklFTkRfREFUQSA9IDExMDAxXHJcbiAgICAvL+aJk+W8gOaOkuihjFxyXG4gICAgc3RhdGljIHJlYWRvbmx5IE9QRU5fUkFOS19VSSA9IDExMDA0XHJcbiAgICAvL+aYvuekuuaVheS6i+aOkuihjFxyXG4gICAgc3RhdGljIHJlYWRvbmx5IENMT1NFX1JBTktfVUkgPSAxMTAwNVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIExpc3RlbmVyczpDb25maWcuRGljdGlvbmFyeTxDb25maWcuTGlzdGVuZXJDbGFzcz4gPSB7fTtcclxuXHJcbiAgICBzdGF0aWMgQWRkTGlzdGVuZXIoa2V5LCBmdW5jLCB0YXJnZXQpIHtcclxuICAgICAgICBpZigha2V5IHx8IHR5cGVvZihmdW5jKSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuTGlzdGVuZXJzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5MaXN0ZW5lcnNba2V5XSA9IG5ldyBDb25maWcuTGlzdGVuZXJDbGFzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5MaXN0ZW5lcnNba2V5XS5hZGRMaXN0ZW5lcihmdW5jLCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBSZW1vdmVMaXN0ZW5lcihrZXksIGZ1bmMpIHtcclxuICAgICAgICBpZigha2V5IHx8IHR5cGVvZihmdW5jKSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuTGlzdGVuZXJzW2tleV07XHJcbiAgICAgICAgaWYoIWxpc3QpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsaXN0LnJlbW92ZUxpc3RlbmVyKGZ1bmMpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBzdGF0aWMgRGlzcGF0Y2goa2V5LCAuLi5kYXRhKSB7XHJcbiAgICAgICAgaWYoIWtleSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuTGlzdGVuZXJzW2tleV07XHJcbiAgICAgICAgaWYoIWxpc3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpIGluIGxpc3QuTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihsaXN0Lkxpc3RlbmVyc1tpXSkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsaXN0Lkxpc3RlbmVyc1tpXS5jYWxsKGxpc3QuVGFyZ2V0c1tpXSwgLi4uZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDbGVhcihrZXkpIHtcclxuICAgICAgICBpZigha2V5KSByZXR1cm5cclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuTGlzdGVuZXJzW2tleV07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbi8v6K6h566X5Yqf5rOV5oC75Lq654mp5bGe5oCnXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjS2ZBZGRBdHRyKGtmTGV2ZWw6bnVtYmVyLCBrZlN0YWdlOm51bWJlciwgZnNBZGQ6bnVtYmVyKXtcclxuICAgIHJldHVybiBrZlN0YWdlICogKGtmTGV2ZWwgKyBmc0FkZCk7XHJcbn1cclxuXHJcbi8v6K6h566X5Yqf5rOV5oC76aOO5rC05Yqg5oiQXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjS2ZBZGRGZW5nc2h1aShrZlN0YWdlOm51bWJlciwgZnNBZGQ6bnVtYmVyKXtcclxuICAgIHJldHVybiBrZlN0YWdlICogZnNBZGQ7XHJcbn0iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSAnLi4vQ29uZmlnL0NvbmZpZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzb3VyY2UgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUmVzb3VyY2UgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2FkZGVkVWlQYWNrYWdlczpDb25maWcuRGljdGlvbmFyeTxib29sZWFuPiA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9pbnN0YW5jZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFJlc291cmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWQodXJsLCB0aGlzQXJnPywgY29tcGxldGU/OkZ1bmN0aW9uLCBwcm9ncmVzcz86RnVuY3Rpb24sIHJlc1R5cGU/OnN0cmluZyl7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIubG9hZChcclxuICAgICAgICAgICAgdXJsLCBcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzQXJnLCBjb21wbGV0ZSksIFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXNBcmcsIHByb2dyZXNzKSxcclxuICAgICAgICAgICAgcmVzVHlwZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFVpUGFja2FnZShwa2dOYW1lOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXRoaXMuX2FkZGVkVWlQYWNrYWdlc1twa2dOYW1lXSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliqDovb1VSeWMhe+8micsIHBrZ05hbWUpO1xyXG4gICAgICAgICAgICBmZ3VpLlVJUGFja2FnZS5hZGRQYWNrYWdlKCdyZXMvJyArIHBrZ05hbWUgKyAnLycgKyBwa2dOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkZWRVaVBhY2thZ2VzW3BrZ05hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJlcyhwYXRoOnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIExheWEuTG9hZGVyLmdldFJlcyhwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVsZWFzZVJlcygpe1xyXG4gICAgICAgIExheWEuUmVzb3VyY2UuZGVzdHJveVVudXNlZFJlc291cmNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkF3YWtlKCl7XHJcbiAgICAgICAgaWYgKFJlc291cmNlLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFJlc291cmNlLl9pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVzb3VyY2UgaW5zdGFuY2UgbXVzdCBiZSBvbmx5IG9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0IHtVSUNvbmZpZ30gZnJvbSBcIi4uL0NvbmZpZy9VSUNvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5cclxuLy/np5LmlbDovazkuLrml7bvvJrliIbvvJrnp5JcclxuZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRUaW1lKGNkLCBpZ25vcmVIb3VyPzpib29sZWFuKXtcclxuICAgIGlmKGNkID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBob3VycyA9IChcIjBcIiArIE1hdGguZmxvb3IoY2QgLyAzNjAwKSkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IG1pbnV0ZXMgPSAoXCIwXCIgKyBNYXRoLmZsb29yKChjZCAlIDM2MDApIC8gNjApKS5zbGljZSgtMik7XHJcbiAgICBsZXQgc2Vjb25kcyA9IChcIjBcIiArIE1hdGguY2VpbChjZCAlIDYwKSkuc2xpY2UoLTIpO1xyXG5cclxuICAgIGlmKGlnbm9yZUhvdXIpe1xyXG4gICAgICAgIHJldHVybiBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBob3VycyArIFwiOlwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb25kcztcclxufVxyXG5cclxuLy/nqpflj6PlvLnlh7rliqjnlLtcclxuLyoqXHJcbiAqIEBwYXJhbSAge2ZndWkuR0NvbXBvbmVudH0gd2luZG93VWlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5UG9wdXBFZmZlY3Qod2luZG93VWksIGNhbGxiYWNrLCB0aGlzQXJnKXtcclxuICAgIGlmKHdpbmRvd1VpIGluc3RhbmNlb2YgZmd1aS5HT2JqZWN0KSB7XHJcbiAgICAgICAgd2luZG93VWkuc2V0UGl2b3QoMC41LCAwLjUpO1xyXG5cclxuICAgICAgICBmZ3VpLkdUd2Vlbi50bygwLCAxLCAwLjUpXHJcbiAgICAgICAgICAgIC5zZXRUYXJnZXQod2luZG93VWksIHdpbmRvd1VpLnNldFNjYWxlKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZShjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5Y2B5YWt6L+b5Yi26aKc6Imy6L2sMTDov5vliLZcclxuLy/kvKDlj4LmoLzlvI/vvJpcIjAwfGZmfGVlXCJcclxuLyoqXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY29sb3JTdHJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb2xvckhleDJEZWMoY29sb3JTdHIpe1xyXG4gICAgaWYoY29sb3JTdHIgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbG9yU3RyID0gY29sb3JTdHIuc3BsaXQoXCJ8XCIpO1xyXG4gICAgaWYoY29sb3JTdHIgaW5zdGFuY2VvZiBBcnJheSAmJiBjb2xvclN0ci5sZW5ndGggPT0gMyl7XHJcbiAgICAgICAgY29sb3JTdHIuZm9yRWFjaCgodmFsdWUsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBjb2xvclN0cltpbmRleF0gPSBwYXJzZUludCh2YWx1ZSwgMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb2xvclN0cjtcclxufVxyXG5cclxuLy/liKTmlq3mmK/lkKbkuLrniLbnu4Tku7bvvIjljIXmi6zmnKzkvZPvvIlcclxuZXhwb3J0IGZ1bmN0aW9uIGlzQW5jZXN0b3JPZihwYXJlbnQ6Zmd1aS5HT2JqZWN0LCBjaGlsZDpmZ3VpLkdPYmplY3QpOkJvb2xlYW5cclxue1xyXG4gICAgaWYgKHBhcmVudCA9PSBudWxsIHx8IGNoaWxkID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgXHJcbiAgICAvL+acrOS9k1xyXG4gICAgaWYocGFyZW50ID09IGNoaWxkKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgXHJcbiAgICB2YXIgcDpmZ3VpLkdDb21wb25lbnQgPSBjaGlsZC5wYXJlbnQ7XHJcbiAgICB3aGlsZShwKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHAgPT0gcGFyZW50KVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICBwID0gcC5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8v5Yik5pat5Z2Q5qCH5piv5ZCm5Zyo57uE5Lu255+p5b2i6IyD5Zu05YaFXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0luUmVjdCh4djpudW1iZXIsIHl2Om51bWJlciwgZGVzdDpmZ3VpLkdPYmplY3Qpe1xyXG4gICAgaWYoeHYgPT0gbnVsbCB8fCB5diA9PSBudWxsIHx8ICFkZXN0KSByZXR1cm47XHJcblxyXG4gICAgLy/ovazkuLrlsY/luZXlnZDmoIdcclxuICAgIGxldCBwdCA9IGRlc3QubG9jYWxUb0dsb2JhbCgpO1xyXG5cclxuICAgIGlmKHh2IDwgcHQueCB8fCB4diA+IHB0LnggKyBkZXN0LndpZHRoIHx8IHl2IDwgcHQueSB8fCB5diA+IHB0LnkgKyBkZXN0LmhlaWdodCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnRuSW5mb1BhcnRze1xyXG4gICAgUHJvZ3Jlc3NfSGVhbHRoOmZndWkuR1Byb2dyZXNzQmFyLFxyXG4gICAgUHJvZ3Jlc3NfRXhwOmZndWkuR1Byb2dyZXNzQmFyLFxyXG4gICAgVGV4dF9MZXZlbDpmZ3VpLkdUZXh0RmllbGQsXHJcbiAgICBUZXh0X1RpcHNIZWFsdGg6Zmd1aS5HVGV4dEZpZWxkLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnRuSW5mb1BhcnRzKGJ0bjpmZ3VpLkdDb21wb25lbnQpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBQcm9ncmVzc19IZWFsdGg6YnRuLmdldENoaWxkKCdQcm9ncmVzc19IZWFsdGgnKS5hc1Byb2dyZXNzLFxyXG4gICAgICAgIFByb2dyZXNzX0V4cDpidG4uZ2V0Q2hpbGQoJ1Byb2dyZXNzX0V4cCcpLmFzUHJvZ3Jlc3MsXHJcbiAgICAgICAgVGV4dF9MZXZlbDpidG4uZ2V0Q2hpbGQoJ1RleHRfTGV2ZWwnKS5hc1RleHRGaWVsZCxcclxuICAgICAgICBUZXh0X1RpcHNIZWFsdGg6YnRuLmdldENoaWxkKCdUZXh0X1RpcHNIZWFsdGgnKS5hc1RleHRGaWVsZCxcclxuICAgIH1cclxufVxyXG5cclxuLy/orr7nva7mlofmnKxDYWNoZU1vZGXkuLpDSEFS6YG/5YWN5YaF5a2Y5pq05raoR0PljaHpob9cclxuLyoqXHJcbiAqIEBwYXJhbSAge2ZndWkuR1RleHRGaWVsZH0gdGV4dEZpbGVkXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IHVzZVN5c0ZvbnRcclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBTZXRUeHRDYWNoZU1vZGUodGV4dEZpbGVkLCB1c2VTeXNGb250KXtcclxuLy8gICAgIGlmKHRleHRGaWxlZCA9PSBudWxsKSByZXR1cm47XHJcblxyXG4vLyAgICAgaWYodGV4dEZpbGVkLl9sYWJlbC5jYWNoZU1vZGUgIT0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVIpe1xyXG4vLyAgICAgICAgIHRleHRGaWxlZC5fbGFiZWwuY2FjaGVNb2RlID0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVI7XHJcblxyXG4vLyAgICAgICAgIGlmKHR5cGVvZiB1c2VTeXNGb250ID09IFwiYm9vbGVhblwiKVxyXG4vLyAgICAgICAgICAgICB0ZXh0RmlsZWQuX2xhYmVsLnVzZVN5c3RlbUZvbnQgPSB1c2VTeXNGb250O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vL+iuvue9ruaWh+acrOWNoOS9jeesplxyXG4vLyBTdHJpbmcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSByZXR1cm4gdGhpcztcclxuLy8gICAgIGxldCBwYXJhbSA9IGFyZ3VtZW50c1swXTtcclxuLy8gICAgIGxldCBzID0gdGhpcztcclxuLy8gICAgIGlmKHR5cGVvZihwYXJhbSkgPT0gJ29iamVjdCcpIHtcclxuLy8gICAgICAgICBmb3IobGV0IGtleSBpbiBwYXJhbSlcclxuLy8gICAgICAgICBzID0gcy5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiICsga2V5ICsgXCJcXFxcfVwiLCBcImdcIiksIHBhcmFtW2tleV0pO1xyXG4vLyAgICAgICAgIHJldHVybiBzO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4vLyAgICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdcIiksIGFyZ3VtZW50c1tpXSk7XHJcbi8vICAgICAgICAgcmV0dXJuIHM7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vL+iuvue9ruaWh+acrOWNoOS9jeesplxyXG4vKipcclxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcclxuICogQHBhcmFtICB7QXJyYXl9IGFyZ3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTdHJpbmdGb3JtYXQoc3RyLCAuLi5hcmdzKXtcclxuICAgIGlmKHR5cGVvZihzdHIpICE9ICdzdHJpbmcnKSByZXR1cm47XHJcblxyXG4gICAgaWYoYXJncyA9PSBudWxsIHx8IGFyZ3MubGVuZ3RoID09IDApIHJldHVybiBzdHI7XHJcblxyXG4gICAgbGV0IHBhcmFtID0gYXJnc1swXTtcclxuICAgIGxldCBzID0gc3RyO1xyXG4gICAgaWYodHlwZW9mKHBhcmFtKSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGZvcihsZXQga2V5IGluIHBhcmFtKVxyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBrZXkgKyBcIlxcXFx9XCIsIFwiZ1wiKSwgcGFyYW1ba2V5XSk7XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdcIiksIGFyZ3NbaV0pO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuvue9ruaWh+acrOWxnuaAp1xyXG5leHBvcnQgZnVuY3Rpb24gU2V0VHh0UHJvcGVydHkodHh0LCBpc0JvbGQsIGlzVW5kZXJsaW5lKXtcclxuICAgIGlmKHR4dCBpbnN0YW5jZW9mIGZndWkuR1RleHRGaWVsZCA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmKHR5cGVvZihpc0JvbGQpID09ICdib29sZWFuJyl7XHJcbiAgICAgICAgdHh0Ll9sYWJlbC5faXNCb2xkID0gaXNCb2xkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHR5cGVvZihpc1VuZGVybGluZSkgPT0gJ2Jvb2xlYW4nKXtcclxuICAgICAgICB0eHQuX2xhYmVsLl9pc1VuZGVybGluZSA9IGlzVW5kZXJsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WQr+WKqOWeg+WcvuWbnuaUtlxyXG4vLyBleHBvcnQgZnVuY3Rpb24gVHJpZ2dlckdDKCl7XHJcbi8vICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuLy8gICAgICAgICB3eC50cmlnZ2VyR0MoKTtcclxuLy8gICAgIH1lbHNle1xyXG4vLyAgICAgICAgIGNjLnN5cy5nYXJiYWdlQ29sbGVjdCgpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vL+iuvue9rumdnui0n+aVsFxyXG5leHBvcnQgZnVuY3Rpb24gU2V0Tm9ubmVnYXRpdmUobnVtOm51bWJlcil7XHJcbiAgICBpZihudW0gPCAwKXtcclxuICAgICAgICBudW0gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW07XHJcbn1cclxuXHJcbi8v5Yqf6IO95piv5ZCm5byA5ZCvXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBJc0Z1bmNBY3RpdmF0ZWQoZnVuY0VudW0pe1xyXG4vLyAgICAgaWYoZnVuY0VudW0gPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuLy8gICAgIHN3aXRjaCAoZnVuY0VudW0pIHtcclxuLy8gICAgICAgICBjYXNlIExvY2FsQ29uZmlnLkZ1bmNFbnVtLlBsYXlHbzpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIERhdGFCYXNlLlJvbGVEYXRhLlVubG9ja0NoYXB0ZXJJZCA+PSAzO1xyXG4gICAgXHJcbi8vICAgICAgICAgY2FzZSBMb2NhbENvbmZpZy5GdW5jRW51bS5GdW46XHJcbi8vICAgICAgICAgICAgIHJldHVybiBEYXRhQmFzZS5Sb2xlRGF0YS5VbmxvY2tDaGFwdGVySWQgPj0gNDtcclxuXHJcbi8vICAgICAgICAgY2FzZSBMb2NhbENvbmZpZy5GdW5jRW51bS5TdG9yeUphZGU6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBEYXRhQmFzZS5Sb2xlRGF0YS5VbmxvY2tDaGFwdGVySWQgPiAxIHx8IERhdGFCYXNlLlJvbGVEYXRhLkRyb3BNYXhUZXh0TnVtID49IDUgfHwgRGF0YUJhc2UuUm9sZURhdGEuQ2hhcHRlclBsYXlUaW1lcyA+IDE7XHJcblxyXG4vLyAgICAgICAgIGNhc2UgTG9jYWxDb25maWcuRnVuY0VudW0uVG9wTGVmdExpc3Q6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBEYXRhQmFzZS5Sb2xlRGF0YS5DaGFwdGVySWQgPiAxIHx8IERhdGFCYXNlLlJvbGVEYXRhLkNoYXB0ZXJQbGF5VGltZXMgPiAxO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vL+iuvue9rmZndWnmjqfliLblmajpobXnrb5cclxuZXhwb3J0IGZ1bmN0aW9uIFNldEdDb250cm9sbGVySWR4KGdjdHJsOmZndWkuQ29udHJvbGxlciwgaWR4Om51bWJlcil7XHJcbiAgICBpZihnY3RybCBpbnN0YW5jZW9mIGZndWkuQ29udHJvbGxlciA9PSBmYWxzZSB8fCB0eXBlb2YgaWR4ICE9ICdudW1iZXInKSByZXR1cm47XHJcblxyXG4gICAgaWYoaWR4IDwgMCB8fCBpZHggPj0gZ2N0cmwucGFnZUNvdW50KSByZXR1cm47XHJcblxyXG4gICAgZ2N0cmwuc2VsZWN0ZWRJbmRleCA9IGlkeDtcclxufVxyXG5cclxuLy/liKTmlq3nu5PmnoTkvZPplb/luqZcclxuZXhwb3J0IGZ1bmN0aW9uIEdldE9iamVjdExlbmd0aChvYmplY3Qpe1xyXG4gICAgaWYoIW9iamVjdCkgcmV0dXJuIDA7XHJcblxyXG4gICAgbGV0IGxlbiA9IDA7XHJcbiAgICBmb3IobGV0IGkgaW4gb2JqZWN0KXtcclxuICAgICAgICBsZW4rKztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGVuO1xyXG59XHJcblxyXG4vL+avlOi+gzLkuKrmlbDnu4TmmK/lkKbnm7jnrYlcclxuLyoqXHJcbiAqIEBwYXJhbSAge0FycmF5fSBhcnIxXHJcbiAqIEBwYXJhbSAge0FycmF5fSBhcnIyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQXJyYXlFcXVhbHMoYXJyMSwgYXJyMikge1xyXG4gICAgLy8gaWYgdGhlIG90aGVyIGFycmF5IGlzIGEgZmFsc3kgdmFsdWUsIHJldHVyblxyXG4gICAgaWYgKCFhcnIxIHx8ICFhcnIyKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvLyBjb21wYXJlIGxlbmd0aHMgLSBjYW4gc2F2ZSBhIGxvdCBvZiB0aW1lIFxyXG4gICAgaWYgKGFycjEubGVuZ3RoICE9IGFycjIubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycjEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBuZXN0ZWQgYXJyYXlzXHJcbiAgICAgICAgaWYgKGFycjFbaV0gaW5zdGFuY2VvZiBBcnJheSAmJiBhcnIyW2ldIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgLy8gcmVjdXJzZSBpbnRvIHRoZSBuZXN0ZWQgYXJyYXlzXHJcbiAgICAgICAgICAgIGlmIChBcnJheUVxdWFscyhhcnIxLCBhcnIyKSA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgICAgICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgZWxzZSBpZiAoYXJyMVtpXSAhPSBhcnIyW2ldKSB7IFxyXG4gICAgICAgICAgICAvLyBXYXJuaW5nIC0gdHdvIGRpZmZlcmVudCBvYmplY3QgaW5zdGFuY2VzIHdpbGwgbmV2ZXIgYmUgZXF1YWw6IHt4OjIwfSAhPSB7eDoyMH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgIFxyXG4gICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgfSAgICAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vL+aQnOWvu+aVsOe7hOmUruWAvFxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQXJyYXkoYXJyOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgdmFsdWUpe1xyXG4gICAgaWYoQXJyYXkuaXNBcnJheShhcnIpID09IGZhbHNlIHx8IGFyci5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBvciBlbXB0eSBhcnJheScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHRhcmdldDtcclxuICAgIGFyci5zb21lKHY9PntcclxuICAgICAgICBpZih2W3BhcmFtXSA9PSB2YWx1ZSl7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHY7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJkUGF0aChfZGF0YSl7XHJcbiAgICBpZighX2RhdGEuUGljVXJsKVxyXG4gICAgICAgIHJldHVybiB7cGF0aDpcIlwiLCB1cmw6IFwiXCJ9XHJcbiAgICBcclxuICAgIGxldCBwYWtOdW0gPSBNYXRoLmNlaWwoX2RhdGEuUGljVXJsLzYpO1xyXG4gICAgbGV0IHBha05hbWUgPSBcIlBvc3RjYXJkXCIrIHBha051bTtcclxuICAgIGxldCB1cmwgPSAgXCJ1aTovL1wiK3Bha05hbWUrXCIvXCIrX2RhdGEuVGl0bGU7XHJcbiAgICBsZXQgaW5mbz17cGF0aDpwYWtOYW1lK1wiL1wiK3Bha05hbWUsdXJsOnVybH1cclxuICAgIHJldHVybiBpbmZvXHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCm5bCP5ri45oiPXHJcbmV4cG9ydCBmdW5jdGlvbiBpc01pbmlHYW1lKCl7XHJcbiAgICAvLyByZXR1cm4gTGF5YS5Ccm93c2VyLm9uV2VpWGluIHx8IExheWEuQnJvd3Nlci5vbkJETWluaUdhbWU7XHJcbiAgICByZXR1cm4gTGF5YS5Ccm93c2VyLm9uTWluaUdhbWU7XHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCm5b6u5L+hXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09uV2VpeGluKCl7XHJcbiAgICByZXR1cm4gTGF5YS5Ccm93c2VyLm9uV2VpWGluO1xyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQplFRXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09uUVEoKXtcclxuICAgIHJldHVybiBMYXlhLkJyb3dzZXIub25NUVFCcm93c2VyO1xyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQpuiFvuiur+ezu1xyXG5leHBvcnQgZnVuY3Rpb24gaXNPblRlbmNlbnQoKXtcclxuICAgIHJldHVybiBpc09uUVEoKSB8fCBpc09uV2VpeGluKCk7XHJcbn1cclxuXHJcbi8v5bm/5ZGK6aKG5Y+W57uE5Lu2XHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtmZ3VpLkdDb21wb25lbnR9IGFkQ29tXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQWRHZXRSZXdhcmRCdG4oYWRDb20pe1xyXG4gICAgaWYoIWFkQ29tKSByZXR1cm47XHJcblxyXG4gICAgLy/pooblj5bmjInpkq5cclxuICAgIGxldCBidXR0b25fR2V0UmV3YXJkID0gYWRDb20uZ2V0Q2hpbGQoXCJCdXR0b25fR2V0UmV3YXJkXCIpLmFzQnV0dG9uO1xyXG4gICAgbGV0IGJ1dHRvbl9Eb3VibGVSZXdhcmQgPSBhZENvbS5nZXRDaGlsZChcIkJ1dHRvbl9Eb3VibGVSZXdhcmRcIikuYXNCdXR0b247XHJcbiAgICBsZXQgYnV0dG9uX0FkR2V0UmV3YXJkID0gYWRDb20uZ2V0Q2hpbGQoXCJCdXR0b25fQWRHZXRSZXdhcmRcIikuYXNCdXR0b247XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL+mihuWPluexu+Wei1xyXG4gICAgICAgIEdldEJ0blR5cGU6IGFkQ29tLmdldENvbnRyb2xsZXIoJ0J0blR5cGVfQycpLFxyXG4gICAgICAgIC8v5Y2V5oyJ6ZKu6aKG5Y+WXHJcbiAgICAgICAgQnV0dG9uX0dldFJld2FyZDogYnV0dG9uX0dldFJld2FyZCxcclxuICAgICAgICAvL+e6r+mihuWPllxyXG4gICAgICAgIEJ1dHRvbl9PbmVSZXdhcmQ6IGFkQ29tLmdldENoaWxkKFwiQnV0dG9uX09uZVJld2FyZFwiKS5hc0J1dHRvbixcclxuICAgICAgICAvL+W5v+WRiuWPjOWAjemihuWPllxyXG4gICAgICAgIEJ1dHRvbl9Eb3VibGVSZXdhcmQ6IGJ1dHRvbl9Eb3VibGVSZXdhcmQsXHJcbiAgICAgICAgLy/ljZXmjInpkq7lub/lkYrpooblj5ZcclxuICAgICAgICBCdXR0b25fQWRHZXRSZXdhcmQ6IGJ1dHRvbl9BZEdldFJld2FyZCxcclxuICAgICAgICAvL+WNleaMiemSrumihuWPluaWueW8j1xyXG4gICAgICAgIEdldFJld2FyZFR5cGU6IGJ1dHRvbl9BZEdldFJld2FyZC5nZXRDb250cm9sbGVyKCdUeXBlX0MnKSxcclxuICAgICAgICAvL+WPjOWAjemihuWPluaWueW8j1xyXG4gICAgICAgIEdldERvdWJsZVJld2FyZFR5cGU6IGJ1dHRvbl9Eb3VibGVSZXdhcmQuZ2V0Q29udHJvbGxlcignVHlwZV9DJyksXHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5pys5Zyw5a2Y5YKoXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxTdG9yYWdlKGtleTpzdHJpbmcsIHZhbHVlOnN0cmluZyl7XHJcbiAgICBpZighdmFsdWUpIHJldHVybjtcclxuICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2Uoa2V5OnN0cmluZyl7XHJcbiAgICByZXR1cm4gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsSnNvbihrZXk6c3RyaW5nLCB2YWx1ZSl7XHJcbiAgICAvL+WPr+WtmOWCqOaVsOe7hFxyXG4gICAgaWYoIXZhbHVlKSByZXR1cm47XHJcbiAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKGtleSwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxKc29uKGtleTpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04oa2V5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlEYXRhKHNyY0RhdGEsIHRhcmdldERhdGEpe1xyXG4gICAgaWYoIXNyY0RhdGEgfHwgIXRhcmdldERhdGEpIHJldHVybjtcclxuXHJcbiAgICBmb3IobGV0IGkgaW4gc3JjRGF0YSl7XHJcbiAgICAgICAgaWYodHlwZW9mIHNyY0RhdGFbaV0gIT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIHRhcmdldERhdGFbaV0gPSBzcmNEYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy/orr7nva7lub/lkYrnu4Tku7bmoLflvI9cclxuLyoqXHJcbiAqIEBwYXJhbSAge2ZndWkuR0NvbXBvbmVudH0gYWRDb21cclxuICogQHBhcmFtICB7Ym9vbGVhbn0gaXNTaW5nbGVcclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBTZXRBZEJ0blN0eWxlKGFkQ29tLCBpc1NpbmdsZSl7XHJcbi8vICAgICBpZighYWRDb20pIHJldHVybjtcclxuXHJcbi8vICAgICBsZXQgYnRuID0gQWRHZXRSZXdhcmRCdG4oYWRDb20pO1xyXG4vLyAgICAgbGV0IGFkVHlwZSA9IGlzU2luZ2xlPyBNYW5hZ2VyLkdldFJlY2VpdmVBd2FyZHNUeXBlLlNpbmdsZUFkVHlwZSgpOiBNYW5hZ2VyLkdldFJlY2VpdmVBd2FyZHNUeXBlLmdldFR5cGUoKTtcclxuLy8gICAgIHN3aXRjaCAoYWRUeXBlKSB7XHJcbi8vICAgICAgICAgY2FzZSBDb25maWcuQXdhcmRUeXBlLk5vdDpcclxuLy8gICAgICAgICAgICAgYnRuLkdldEJ0blR5cGUuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbi8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbi8vICAgICAgICAgY2FzZSBDb25maWcuQXdhcmRUeXBlLlNoYXJlOlxyXG4vLyAgICAgICAgICAgICBidG4uR2V0RG91YmxlUmV3YXJkVHlwZS5zZWxlY3RlZEluZGV4ID0gMTtcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuLy8gICAgICAgICBjYXNlIENvbmZpZy5Bd2FyZFR5cGUuQUQ6XHJcbi8vICAgICAgICAgICAgIGJ0bi5HZXREb3VibGVSZXdhcmRUeXBlLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4vLyAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgIGFkQ29tLmVuYWJsZWQgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIGJ0bjtcclxuLy8gfVxyXG5cclxuLy/po5jlrZdcclxubGV0IHRpcHNVaTpmZ3VpLkdDb21wb25lbnQ7XHJcbmV4cG9ydCBmdW5jdGlvbiBTaG93VGlwcyhtc2c6c3RyaW5nKXtcclxuICAgIGlmKCF0aXBzVWkpe1xyXG4gICAgICAgIGxldCB2aWV3TmFtZSA9IENvbmZpZy5WaWV3S2l0LlRpcHNMYWJlbDtcclxuICAgICAgICB0aXBzVWkgPSBNYW5hZ2VyLlNwYXduTWFuYWdlci5Mb2FkVmlldyh2aWV3TmFtZS5Qa2csIHZpZXdOYW1lLkNvbSk7XHJcbiAgICAgICAgdGlwc1VpLnNvcnRpbmdPcmRlciA9IFVJQ29uZmlnLlNvcnRpbmdPcmRlci5Nc2dUaXBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LiN6YeN5aSN5pi+56S6XHJcbiAgICBpZih0aXBzVWkudmlzaWJsZSkgcmV0dXJuO1xyXG5cclxuICAgIG1zZyA9IG1zZz8gbXNnOiBDb25maWcuTG9jYWxDb250ZW50LkZseWluZ1RpcHNEZWZhdWx0O1xyXG4gICAgdGlwc1VpLnRleHQgPSBtc2c7XHJcbiAgICB0aXBzVWkudmlzaWJsZSA9IHRydWU7XHJcbiAgICBcclxuICAgIHRpcHNVaS5nZXRUcmFuc2l0aW9uKCdFZmZlY3RfU2hvdycpLnBsYXkoTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKT0+e3RpcHNVaS52aXNpYmxlID0gZmFsc2V9KSk7XHJcbn1cclxuXHJcbi8v5rSe5bqc5Yqg6LWE5rqQ6aOY5a2XXHJcbmludGVyZmFjZSBBZG9iZUFkZFRpcHNVaXtcclxuICAgIFVpOmZndWkuR0NvbXBvbmVudDtcclxuICAgIFRleHRfQWRkU3RvbmU6Zmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgVGV4dF9BZGRGb29kOmZndWkuR1RleHRGaWVsZDtcclxuICAgIFRleHRfQWRkV29vZDpmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICBUZXh0X0FkZElyb246Zmd1aS5HVGV4dEZpZWxkO1xyXG59XHJcbmxldCBhZG9iZUFkZFRpcHNVaTpBZG9iZUFkZFRpcHNVaTtcclxuXHJcbmZ1bmN0aW9uIHNldEFkb2JlUmVzTnVtKHR4dENvbTpmZ3VpLkdUZXh0RmllbGQsIHJlc051bTpudW1iZXIpe1xyXG4gICAgaWYocmVzTnVtID49IDApe1xyXG4gICAgICAgIHR4dENvbS5jb2xvciA9ICcjMDBGRjAwJztcclxuICAgICAgICB0eHRDb20udGV4dCA9ICcrJyArIHJlc051bTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHR4dENvbS5jb2xvciA9ICcjRkYwMDAwJztcclxuICAgICAgICB0eHRDb20udGV4dCA9ICctJyArIC1yZXNOdW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6K6+572u5paH5a2X5oqV5b2xMeWDj+e0oFxyXG5sZXQgdHh0U2hhZG93RmlsdGVyOkxheWEuR2xvd0ZpbHRlcjtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFR4dFNoYWRvdyhndHh0OmZndWkuR09iamVjdCl7XHJcbiAgICBpZighZ3R4dCkgcmV0dXJuO1xyXG4gICAgaWYoIXR4dFNoYWRvd0ZpbHRlcil7XHJcbiAgICAgICAgdHh0U2hhZG93RmlsdGVyID0gbmV3IExheWEuR2xvd0ZpbHRlcignIzAwMDAwMCcsIDEsIDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGd0eHQuZGlzcGxheU9iamVjdC5maWx0ZXJzID0gW3R4dFNoYWRvd0ZpbHRlcl07XHJcbn1cclxuXHJcbi8v6K6+572uVUnoioLngrnkuI7pgILphY1cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNldFVpTm9kZSgpe1xyXG4vLyAgICAgaWYoIWZndWkuR1Jvb3QuaW5zdCkgcmV0dXJuO1xyXG4gICAgXHJcbi8vICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuLy8gICAgIGZndWkuR1Jvb3QuaW5zdC5ub2RlLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbi8vICAgICBmZ3VpLkdSb290Lmluc3Qubm9kZS54ID0gLWNhbnZhcy53aWR0aCAqIDAuNTtcclxuLy8gICAgIGZndWkuR1Jvb3QuaW5zdC5ub2RlLnkgPSBjYW52YXMuaGVpZ2h0ICogMC41O1xyXG4vLyB9XHJcblxyXG4vL+iwg+eUqGphdmFcclxuLyoqXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NQYXRoIOWujOaVtOeahOexu+i3r+W+hFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGphdmFGdW5jIGphdmHpnZnmgIHmlrnms5XlkI1cclxuICogQHBhcmFtICB7fSBkYXRhXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IHdpZHRoQmFjayDmmK/lkKbmnIlqYXZh5ZCM5q2l5Zue6LCDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSnNDYWxsSmF2YShjbGFzc1BhdGg6c3RyaW5nLCBqYXZhRnVuYzpzdHJpbmcsIGRhdGE/LCB3aWR0aEJhY2s/OmJvb2xlYW4pe1xyXG4gICAgaWYoIUxheWEuQnJvd3Nlci5vbkFuZHJvaWQpIHJldHVybjtcclxuXHJcbiAgICAvL+mcgOimgeWujOaVtOeahOexu+i3r+W+hO+8jOazqOaEj+S4jmlPU+eahOS4jeWQjFxyXG4gICAgbGV0IGJyaWRnZSA9IHdpbmRvd1tcIlBsYXRmb3JtQ2xhc3NcIl0uY3JlYXRlQ2xhc3MoY2xhc3NQYXRoKTsvL+WIm+W7uuiEmuacrOS7o+eQhlxyXG4gICAgaWYod2lkdGhCYWNrKXtcclxuICAgICAgICBsZXQgb2JqID0ge3ZhbHVlOiBkYXRhfTtcclxuICAgICAgICBicmlkZ2UuY2FsbFdpdGhCYWNrKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBKU09OLnBhcnNlKHZhbHVlKVxyXG4gICAgICAgICAgICBhbGVydChvYmoudmFsdWUpO1xyXG4gICAgICAgIH0sIGphdmFGdW5jLCBKU09OLnN0cmluZ2lmeShvYmopKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGxldCByZXNwID0gYnJpZGdlLmNhbGwoamF2YUZ1bmMsIGRhdGEpO1xyXG4gICAgICAgIGFsZXJ0KHJlc3ApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuoeeul+Wtl+espuWtl+iKguaVsC0t5q2j5YiZ5rOVXHJcbmZ1bmN0aW9uIGdldEJ5dGVzTGVuZ3RoKHN0cikge1xyXG4gICAgaWYoIXN0ciB8fCB0eXBlb2Ygc3RyICE9ICdzdHJpbmcnKXtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8vIOWcqEdCS+e8lueggemHjO+8jOmZpOS6hkFTQ0lJ5a2X56ym77yM5YW25a6D6YO95Y2g5Lik5Liq5a2X56ym5a69XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1teXFx4MDAtXFx4ZmZdL2csICd4eCcpLmxlbmd0aDtcclxufVxyXG5cclxuLy/orqHnrpflrZfnrKblrZfoioLmlbAtLemBjeWOhuazlS0t5pWI546H6L6D6auYXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJCeXRlTGVuKHN0cjpzdHJpbmcpeyBcclxuICAgIGxldCBieXRlTGVuID0gMCwgbGVuOm51bWJlcjsgXHJcbiAgICBpZihzdHIgJiYgdHlwZW9mIHN0ciA9PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgbGVuID0gc3RyLmxlbmd0aDtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xyXG4gICAgICAgICAgICBpZihzdHIuY2hhckNvZGVBdChpKSA+IDI1NSl7IFxyXG4gICAgICAgICAgICAgICAgYnl0ZUxlbiArPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7IFxyXG4gICAgICAgICAgICAgICAgYnl0ZUxlbisrOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnl0ZUxlbjtcclxufVxyXG5cclxuLy/mt7Hmi7fotJ1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5KHNyYzpvYmplY3QsIHRhcmdldDpvYmplY3Qpe1xyXG4gICAgaWYoIXNyYyB8fCAhdGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgaWYoc3JjICE9IG51bGwpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiBzcmMpe1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNbaV07XHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUpKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgWy4uLnRhcmdldFtpXV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZGVlcENvcHkodmFsdWUsIHRhcmdldFtpXSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5aGr5YWF54mp5ZOB5oyJ6ZKuXHJcbmV4cG9ydCBjbGFzcyBJdGVtQnRuUGFydHNDbGFzcyB7XHJcbiAgICBUZXh0X1RpdGxlOmZndWkuR1RleHRGaWVsZDtcclxuICAgIFRleHRfQXdhcmROdW06Zmd1aS5HVGV4dEZpZWxkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJ0bjpmZ3VpLkdDb21wb25lbnQpe1xyXG4gICAgICAgIHRoaXMuVGV4dF9UaXRsZSA9IGJ0bi5nZXRDaGlsZCgndGl0bGUnKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLlRleHRfQXdhcmROdW0gPSBidG4uZ2V0Q2hpbGQoJ1RleHRfQXdhcmROdW0nKS5hc1RleHRGaWVsZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxJdGVtRGF0YShpdGVtZGF0YSwgYnRuOmZndWkuR0NvbXBvbmVudCl7XHJcbiAgICBpZighaXRlbWRhdGEgfHwgIWJ0bikgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwYXJ0cyA9IG5ldyBJdGVtQnRuUGFydHNDbGFzcyhidG4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbEl0ZW1MaXN0RGF0YShpdGVtZGF0YUFycjphbnlbXSwgbGlzdDpmZ3VpLkdMaXN0KXtcclxuICAgIGlmKCFpdGVtZGF0YUFyciB8fCAhbGlzdCkgcmV0dXJuO1xyXG5cclxuICAgIGl0ZW1kYXRhQXJyLmZvckVhY2godj0+e1xyXG4gICAgICAgIGZpbGxJdGVtRGF0YSh2LCBsaXN0LmFkZEl0ZW1Gcm9tUG9vbCgpLmFzQ29tKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+WIl+ihqOeCueWHu+Wbnuiwg1xyXG5mdW5jdGlvbiBvbkNsaWNrTGlzdEl0ZW0odGhpc0FyZywgZnVuYzpGdW5jdGlvbiwgZGF0YSwgaXRlbTpmZ3VpLkdDb21wb25lbnQpe1xyXG4gICAgbGV0IGlkeCA9IGl0ZW0ucGFyZW50LmFzTGlzdC5nZXRDaGlsZEluZGV4KGl0ZW0pO1xyXG4gICAgZnVuYy5jYWxsKHRoaXNBcmcsIGlkeCArIDEsIC4uLmRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tMaXN0Q2FsbGJhY2sobGlzdDpmZ3VpLkdMaXN0LCB0aGlzQXJnLCBmdW5jOkZ1bmN0aW9uLCAuLi5kYXRhKXtcclxuICAgIGlmKCFsaXN0IHx8ICFmdW5jKSByZXR1cm47XHJcblxyXG4gICAgbGlzdC5vbihmZ3VpLkV2ZW50cy5DTElDS19JVEVNLCB0aGlzQXJnLCBvbkNsaWNrTGlzdEl0ZW0sIFt0aGlzQXJnLCBmdW5jLCBkYXRhXSk7XHJcbn0iLCJpbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCBHRXZlbnQgZnJvbSBcIi4vR0V2ZW50XCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuXHJcbi8v5b6u5L+h5pON5L2cXHJcbmxldCBwbGF0Zm9ybSA9IHdpbmRvd1snd3gnXTtcclxuLy/nmbvlvZXlvq7kv6Hlj7dcclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luKGlzVW5pb25JZDpib29sZWFuKSB7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5sb2dpbih7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc1VuaW9uSWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFNldHRpbmcocmVzLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Y+R6LW3572R57uc6K+35rGCXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcSA9IENvbmZpZy5SZXFEYXRhLkxvZ2luO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcS5OYW1lID0gcmVzLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS5Mb2dpbkRhdGEuU2VuZFJlcShyZXEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leWksei0pe+8gScgKyByZXMuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8v5Yqg6L295YiG5YyFXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQWxsU3VicGFja2FnZXModGhpc0FyZywgY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlIHx8IENvbmZpZy5VSUNvbmZpZy5TdWJQa2dzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIENvbmZpZy5VSUNvbmZpZy5TdWJQa2dzLmZvckVhY2gocGtnPT57XHJcbiAgICAgICAgY29uc3QgbG9hZFRhc2sgPSBwbGF0Zm9ybS5sb2FkU3VicGFja2FnZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IHBrZywgLy8gbmFtZSDlj6/ku6XloasgbmFtZSDmiJbogIUgcm9vdFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWIhuWMheWKoOi9veaIkOWKn+WQjumAmui/hyBzdWNjZXNzIOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWIhuWMheWKoOi9veWksei0pemAmui/hyBmYWlsIOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/orr7nva7liIbkuqt0aWNrZXRcclxuZXhwb3J0IGZ1bmN0aW9uIHNoYXJlVGlja2V0TW9kZSgpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0udXBkYXRlU2hhcmVNZW51KHtcclxuICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWUsXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/ojrflj5bliIbkuqt0aWNrZXRcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNoYXJlVGlja2V0KCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBjb25zb2xlLmxvZygnPj4+Pj4+Pj4+Pj4+PuW+ruS/oeeZu+W9leS/oeaBr++8micsIGxhdW5jaEluZm8pO1xyXG4gICAgaWYobGF1bmNoSW5mbyAmJiBsYXVuY2hJbmZvLnNoYXJlVGlja2V0KXtcclxuICAgICAgICBjb25zb2xlLmxvZygnPj4+Pj4+Pj4+Pj4+Pj5zaGFyZVRpY2tldO+8micsIGxhdW5jaEluZm8uc2hhcmVUaWNrZXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbGF1bmNoSW5mby5zaGFyZVRpY2tldDtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+ino+aekOWIhuS6q3RpY2tldFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hhcmVJbmZvKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdGlja2V0ID0gZ2V0U2hhcmVUaWNrZXQoKTtcclxuICAgIC8vIGlmKCF0aWNrZXQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBpZihsYXVuY2hJbmZvICYmIGxhdW5jaEluZm8ucXVlcnkpe1xyXG4gICAgICAgIC8vIERhdGFCYXNlLlNlbmRTaGFyZUluZm8uU2VuZFJlcShsYXVuY2hJbmZvLnF1ZXJ5LnNoYXJlSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxldCBzaGFyZUluZm8gPSB7XHJcbiAgICAvLyAgICAgRW5jcnlwdGVkRGF0YTogJycsXHJcbiAgICAvLyAgICAgSXY6ICcnXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcGxhdGZvcm0ubG9naW4oe1xyXG4gICAgLy8gICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGNvZGUgPSByZXMuY29kZTtcclxuICAgIC8vICAgICAgICAgICAgIHBsYXRmb3JtLmdldFNoYXJlSW5mbyh7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc2hhcmVUaWNrZXQ6IHRpY2tldCxcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6Kej5p6Q5YiG5Lqr5L+h5oGv77yaJywgcmVzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lbmNyeXB0ZWREYXRhKXtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlSW5mby5FbmNyeXB0ZWREYXRhID0gcmVzLmVuY3J5cHRlZERhdGE7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZUluZm8uSXYgPSByZXMuaXY7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhQmFzZS5TZW5kU2hhcmVJbmZvLlNlbmRSZXEoY29kZSwgcmVzLmVuY3J5cHRlZERhdGEsIHJlcy5pdik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXlpLHotKXvvIEnICsgcmVzLmVyck1zZyk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyByZXR1cm4gc2hhcmVJbmZvO1xyXG59XHJcblxyXG4vL+aYvuekuuWPs+S4iuinkui9rOWPkVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NoYXJlTWVudSgpIHtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGxhdGZvcm0ub25TaGFyZUFwcE1lc3NhZ2UoKCkgPT4gKHtcclxuICAgICAgICB0aXRsZTogRGF0YS5HZXRTaGFyZVdvcmQoKSxcclxuICAgICAgICBpbWFnZVVybDogQ29uZmlnLlVJQ29uZmlnLlNoYXJlSW1hZ2VQYXRoLkludml0ZUZyaWVuZCxcclxuICAgICAgICBxdWVyeTogJ3NoYXJlSUQ9JyArIERhdGEuTG9naW5EYXRhLkFjY291bnRLZXksXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbi8v5YiG5LqrXHJcbmV4cG9ydCBmdW5jdGlvbiBTaGFyZU1lc3NhZ2UobXNnOnN0cmluZywgaW1nUGF0aD86c3RyaW5nLCB1c2VTY3JlZW5TaG90Pzpib29sZWFuKSB7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgc3lzSW5mbyA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG4gICAgLy/kvb/nlKjlsY/luZXmiKrlm75cclxuICAgIGlmKHVzZVNjcmVlblNob3QgPT0gdHJ1ZSl7XHJcbiAgICAgICAgaW1nUGF0aCA9IHdpbmRvd1tcImNhbnZhc1wiXS50b1RlbXBGaWxlUGF0aFN5bmMoe1xyXG4gICAgICAgICAgICBkZXN0V2lkdGg6IHN5c0luZm8ud2luZG93V2lkdGggKiBzeXNJbmZvLnBpeGVsUmF0aW8sXHJcbiAgICAgICAgICAgIGRlc3RIZWlnaHQ6IHN5c0luZm8ud2luZG93SGVpZ2h0ICogc3lzSW5mby5waXhlbFJhdGlvXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhdGZvcm0uc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICB0aXRsZTogbXNnLFxyXG4gICAgICAgIGltYWdlVXJsOiBpbWdQYXRoLFxyXG4gICAgICAgIHF1ZXJ5OiAnc2hhcmVJRD0nICsgRGF0YS5Mb2dpbkRhdGEuQWNjb3VudEtleVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvblNob3coY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0ub25TaG93KGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9mZlNob3coY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0ub2ZmU2hvdyhjYWxsYmFjayk7XHJcbn1cclxuXHJcbi8v5riF55CG57yT5a2YXHJcbmV4cG9ydCBmdW5jdGlvbiBDbGVhckxvY2FsQ2FjaGUoKSB7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICB3aW5kb3dbXCJjYW52YXNcIl0uZ2V0U2F2ZWRGaWxlTGlzdCh7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmZpbGVMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZmlsZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzLmZpbGVMaXN0LmZvckVhY2goKGZpbGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0ucmVtb3ZlU2F2ZWRGaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IGZpbGUuZmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYW52YXNUb1RlbXBGaWxlUGF0aChjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICAvLyBsZXQgd2lkdGggID0gZmd1aS5HUm9vdC5pbnN0LndpZHRoO1xyXG4gICAgLy8gbGV0IGhlaWdodCAgPSBmZ3VpLkdSb290Lmluc3QuaGVpZ2h0O1xyXG4gICAgbGV0IHN5c0luZm8gPSBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgY29uc29sZS5sb2coc3lzSW5mbyk7XHJcblxyXG4gICAgbGV0IGRlc3RTaXplID0gbmV3IExheWEuUG9pbnQoc3lzSW5mby53aW5kb3dXaWR0aCAqIHN5c0luZm8ucGl4ZWxSYXRpbywgc3lzSW5mby53aW5kb3dIZWlnaHQgKiBzeXNJbmZvLnBpeGVsUmF0aW8pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRlc3RTaXplKTtcclxuXHJcbiAgICB3aW5kb3dbXCJjYW52YXNcIl0udG9UZW1wRmlsZVBhdGgoe1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogZGVzdFNpemUueCxcclxuICAgICAgICBoZWlnaHQ6IGRlc3RTaXplLnksXHJcbiAgICAgICAgZGVzdFdpZHRoOiBkZXN0U2l6ZS54LFxyXG4gICAgICAgIGRlc3RIZWlnaHQ6IGRlc3RTaXplLnksXHJcbiAgICAgICAgY2FudmFzSWQ6ICdteUNhbnZhcycsXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnRlbXBGaWxlUGF0aCk7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5L+d5a2Y5Zu+54mH5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0uc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTon5L+d5a2Y5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOidzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjoyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+Wksei0pScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLmVyck1zZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtLm9wZW5TZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3Moc2V0dGluZ2RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXR0aW5nZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdkYXRhLmF1dGhTZXR0aW5nW1wic2NvcGUud3JpdGVQaG90b3NBbGJ1bVwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5p2D6ZmQ5oiQ5Yqf77yM57uZ5Ye65YaN5qyh54K55Ye75Zu+54mH5L+d5a2Y5Yiw55u45YaM55qE5o+Q56S644CCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5p2D6ZmQ5aSx6LSl77yM57uZ5Ye65LiN57uZ5p2D6ZmQ5bCx5peg5rOV5q2j5bi45L2/55So55qE5o+Q56S6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJOaWNrTmFtZShjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICBpZighcGxhdGZvcm0pIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5nZXRTZXR0aW5nKHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICAgICAgcGxhdGZvcm0uYXV0aG9yaXplKHtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZTogJ3Njb3BlLnVzZXJJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDnlKjmiLflt7Lnu4/lkIzmhI/lsI/nqIvluo/kvb/nlKjlvZXpn7Plip/og73vvIzlkI7nu63osIPnlKggd3guc3RhcnRSZWNvcmQg5o6l5Y+j5LiN5Lya5by556qX6K+i6ZeuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtLnN0YXJ0UmVjb3JkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHBsYXRmb3JtLmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlcy51c2VySW5mbztcclxuICAgICAgICAgICAgY29uc3Qgbmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZTtcclxuICAgICAgICAgICAgY29uc3QgYXZhdGFyVXJsID0gdXNlckluZm8uYXZhdGFyVXJsO1xyXG4gICAgICAgICAgICBjb25zdCBnZW5kZXIgPSB1c2VySW5mby5nZW5kZXI7IC8vIOaAp+WIqyAw77ya5pyq55+l44CBMe+8mueUt+OAgTLvvJrlpbNcclxuICAgICAgICAgICAgY29uc3QgcHJvdmluY2UgPSB1c2VySW5mby5wcm92aW5jZTtcclxuICAgICAgICAgICAgY29uc3QgY2l0eSA9IHVzZXJJbmZvLmNpdHk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSB1c2VySW5mby5jb3VudHJ5O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+W+ruS/oeaPkOekuuW8ueeql1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RpcHNXaW5kb3codGlwVGl0bGU6c3RyaW5nLCB0aXBDb250ZW50OnN0cmluZywgdGlwc0NvbmZpcm1UeHQ6c3RyaW5nLCBjb25maXJtQ2FsbGJhazpGdW5jdGlvbiwgY2FuY2VsQ2FsbGJhY2s/OkZ1bmN0aW9uKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6IHRpcFRpdGxlIHx8ICfmj5DnpLonLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRpcENvbnRlbnQsXHJcbiAgICAgICAgY29uZmlybVRleHQ6IHRpcHNDb25maXJtVHh0IHx8ICfnoa7lrponLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKGNvbmZpcm1DYWxsYmFrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQ2FsbGJhaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjYW5jZWxDYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/mv4DlirHlub/lkYpcclxubGV0IHJld2FyZGVkVmlkZW9BZDtcclxubGV0IHJld2FyZEFkSWR4ID0gMDtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25DbG9zZUNhbGxiYWNrXHJcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkVycm9yQ2FsbGJhY2tcclxuICogQHBhcmFtICB7fSB0aGlzVGFyZ2V0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmV3YXJkZWRWaWRlb0FkKG9uQ2xvc2VDYWxsYmFjaz86RnVuY3Rpb24sIG9uRXJyb3JDYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNUYXJnZXQ/KXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIC8v5Z+656GA5bqT54mI5pys5Y+3ID49IDIuMC40XHJcbiAgICBsZXQgc2RrVmVyc2lvbiA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCkuU0RLVmVyc2lvbjtcclxuICAgIGlmKCFzZGtWZXJzaW9uIHx8IHBhcnNlSW50KHNka1ZlcnNpb24ucmVwbGFjZSgvXFwuL2csICcnKSkgPCAyMDQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgYWRJbmZvID0ge2FkVW5pdElkOlwiXCJ9O1xyXG4gICAgLy/ova7mjaLlub/lkYpcclxuICAgIGlmKHJld2FyZEFkSWR4ID49IExvY2FsQ29uZmlnLlJld2FyZEFkTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgcmV3YXJkQWRJZHggPSAwO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCfmv4DlirHlub/lkYrvvJonLExvY2FsQ29uZmlnLlJld2FyZEFkTGlzdFtyZXdhcmRBZElkeF0pO1xyXG4gICAgYWRJbmZvLmFkVW5pdElkID0gTG9jYWxDb25maWcuUmV3YXJkQWRMaXN0W3Jld2FyZEFkSWR4XTtcclxuXHJcbiAgICBpZihyZXdhcmRlZFZpZGVvQWQgPT0gbnVsbCl7XHJcbiAgICAgICAgcmV3YXJkZWRWaWRlb0FkID0gcGxhdGZvcm0uY3JlYXRlUmV3YXJkZWRWaWRlb0FkKGFkSW5mbyk7XHJcbiAgICB9XHJcbiAgICBpZihyZXdhcmRlZFZpZGVvQWQgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIHJld2FyZGVkVmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV3YXJkZWRWaWRlb0FkLnNob3coKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Yib5bu65r+A5Yqx5bm/5ZGK5aSx6LSl77yaJywgZXJyKTtcclxuICAgICAgICAgICAgLy8gcmV3YXJkZWRWaWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHJld2FyZGVkVmlkZW9BZC5zaG93KCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIC8v5LqM5qyh5aSx6LSl5Zue6LCDXHJcbiAgICAgICAgICAgIC8vICAgICBvbkVycm9yQ2FsbGJhY2suY2FsbCh0aGlzVGFyZ2V0KTtcclxuICAgICAgICAgICAgLy8gfSkpO1xyXG5cclxuICAgICAgICAgICAgb25FcnJvckNhbGxiYWNrLmNhbGwodGhpc1RhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXdhcmRBZElkeCsrO1xyXG5cclxuICAgIHJld2FyZGVkVmlkZW9BZC5vbkVycm9yKG9uUmV3YXJkQWRFcnJvcik7XHJcblxyXG4gICAgLy8gaWYodHlwZW9mKG9uTG9hZENhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgIC8vICAgICAvLyByZXdhcmRlZFZpZGVvQWQub25Mb2FkKCgpPT57XHJcbiAgICAvLyAgICAgLy8gICAgIG9uTG9hZENhbGxiYWNrLmNhbGwodGhpc1RhcmdldCwgdHJ1ZSk7XHJcbiAgICAvLyAgICAgLy8gICAgIC8vIHJld2FyZGVkVmlkZW9BZC5zaG93KCkuY2F0Y2goZXJyID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgLy8gICAgIHJld2FyZGVkVmlkZW9BZC5sb2FkKClcclxuICAgIC8vICAgICAvLyAgICAgLy8gICAgICAgLnRoZW4oKCkgPT4gcmV3YXJkZWRWaWRlb0FkLnNob3coKSk7XHJcbiAgICAvLyAgICAgLy8gICAgIC8vIH0pO1xyXG4gICAgLy8gICAgIC8vIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8v5YWz6Zet5Zue6LCD5Y+C5pWwIHJlcy5pc0VuZGVkOmJvb2xlYW4g6KeG6aKR5piv5ZCm5piv5Zyo55So5oi35a6M5pW06KeC55yL55qE5oOF5Ya15LiL6KKr5YWz6Zet55qEXHJcbiAgICBsZXQgY2xvc2VGdW5jID0gZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn5piv5ZCm55yL5a6M5bm/5ZGK77yaJyxyZXMpO1xyXG5cclxuICAgICAgICBpZihyZXMuaXNFbmRlZCAmJiB0eXBlb2Yob25DbG9zZUNhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgb25DbG9zZUNhbGxiYWNrLmNhbGwodGhpc1RhcmdldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXdhcmRlZFZpZGVvQWQub2ZmQ2xvc2UoY2xvc2VGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICByZXdhcmRlZFZpZGVvQWQub25DbG9zZShjbG9zZUZ1bmMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblJld2FyZEFkRXJyb3IoZXJyKXtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICByZXdhcmRlZFZpZGVvQWQub2ZmRXJyb3Iob25SZXdhcmRBZEVycm9yKTtcclxufVxyXG5cclxuLy9CYW5uZXLlub/lkYpcclxubGV0IGJhbm5lckFkO1xyXG5sZXQgYmFubmVySWR4ID0gMDtcclxuXHJcbmV4cG9ydCB0eXBlIGJhbm5lckFkSW5mbyA9IHtcclxuICAgIGFkVW5pdElkPzpzdHJpbmcsXHJcbiAgICBzdHlsZT86e1xyXG4gICAgICAgIGxlZnQ6bnVtYmVyLCBcclxuICAgICAgICB0b3A6bnVtYmVyLCBcclxuICAgICAgICB3aWR0aD86bnVtYmVyLCBcclxuICAgICAgICBoZWlnaHQ/Om51bWJlclxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICB7e2FkVW5pdElkOnN0cmluZywgc3R5bGU6e2xlZnQ6bnVtYmVyLCB0b3A6bnVtYmVyLCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXJ9fX0gYWRJbmZvXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFubmVyQWQoYWRJbmZvPzpiYW5uZXJBZEluZm8pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgLy8gbGVmdDogcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCAqIDAuNSAtIDEwMCxcclxuICAgIC8vICAgICAgICAgdG9wOiBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAqIDAuNSArIDEwMCxcclxuICAgIGxldCBzeXNJbmZvID0gcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbiAgICAvL+WfuuehgOW6k+eJiOacrOWPtyA+PSAyLjAuNFxyXG4gICAgbGV0IHNka1ZlcnNpb24gPSBzeXNJbmZvLlNES1ZlcnNpb247XHJcbiAgICBpZighc2RrVmVyc2lvbiB8fCBwYXJzZUludChzZGtWZXJzaW9uLnJlcGxhY2UoL1xcLi9nLCAnJykpIDwgMjA0KSByZXR1cm47XHJcblxyXG4gICAgaWYoIWFkSW5mbylcclxuICAgICAgICBhZEluZm8gPSB7fTtcclxuICAgIC8v6L2u5o2i5bm/5ZGKXHJcbiAgICBpZihiYW5uZXJJZHggPj0gTG9jYWxDb25maWcuQmFubmVyQWRMaXN0Lmxlbmd0aClcclxuICAgICAgICBiYW5uZXJJZHggPSAwO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnQmFubmVy5bm/5ZGK77yaJyxMb2NhbENvbmZpZy5CYW5uZXJBZExpc3RbYmFubmVySWR4XSk7XHJcbiAgICBhZEluZm8uYWRVbml0SWQgPSBMb2NhbENvbmZpZy5CYW5uZXJBZExpc3RbYmFubmVySWR4XTtcclxuXHJcbiAgICAvL+S9jee9rlxyXG4gICAgYWRJbmZvLnN0eWxlID0ge1xyXG4gICAgICAgIGxlZnQ6MCwgXHJcbiAgICAgICAgdG9wOnN5c0luZm8ud2luZG93SGVpZ2h0IC0gMTAwLFxyXG4gICAgICAgIHdpZHRoOnN5c0luZm8ud2luZG93V2lkdGgsIFxyXG4gICAgICAgIC8vIGhlaWdodDoxMDBcclxuICAgIH1cclxuXHJcbiAgICBpZihiYW5uZXJBZCA9PSBudWxsKXtcclxuICAgICAgICBiYW5uZXJBZCA9IHBsYXRmb3JtLmNyZWF0ZUJhbm5lckFkKGFkSW5mbyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBiYW5uZXJBZC5kZXN0cm95KCk7XHJcbiAgICAgICAgYmFubmVyQWQgPSBwbGF0Zm9ybS5jcmVhdGVCYW5uZXJBZChhZEluZm8pO1xyXG4gICAgfVxyXG4gICAgaWYoYmFubmVyQWQgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIC8vYmFubmVy5L2N572u6YCC6YWNXHJcbiAgICBiYW5uZXJBZC5vblJlc2l6ZShyZXMgPT4ge1xyXG4gICAgICAgIGJhbm5lckFkLnN0eWxlLnRvcCA9IHN5c0luZm8ud2luZG93SGVpZ2h0IC0gcmVzLmhlaWdodDtcclxuICAgICAgICBpZihzeXNJbmZvLm1vZGVsID09ICdpUGhvbmUgWCcpe1xyXG4gICAgICAgICAgICBiYW5uZXJBZC5zdHlsZS50b3AtPTIwO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJhbm5lckFkLm9uRXJyb3Iob25CYW5uZXJBZEVycm9yKTtcclxuXHJcbiAgICBiYW5uZXJBZC5zaG93KCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5Yib5bu6QmFubmVy5bm/5ZGK5aSx6LSl77yaJywgZXJyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJhbm5lcklkeCsrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkJhbm5lckFkRXJyb3IoZXJyKXtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICBiYW5uZXJBZC5vZmZFcnJvcihvbkJhbm5lckFkRXJyb3IpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUJhbm5lckFkKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuICAgIGlmKGJhbm5lckFkID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBiYW5uZXJBZC5oaWRlKCk7XHJcbn1cclxuXHJcbi8v5LiL6L296L+c56iL5paH5Lu2XHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUodXJsLCBjYWxsYmFjayl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UgfHwgIXVybCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCfkuIvovb3lnLDlnYDvvJonLHVybCk7XHJcblxyXG4gICAgcGxhdGZvcm0uZG93bmxvYWRGaWxlKHtcclxuICAgICAgICB1cmw6IHVybCwgXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgLy8g5Y+q6KaB5pyN5Yqh5Zmo5pyJ5ZON5bqU5pWw5o2u77yM5bCx5Lya5oqK5ZON5bqU5YaF5a655YaZ5YWl5paH5Lu25bm26L+b5YWlIHN1Y2Nlc3Mg5Zue6LCD77yM5Lia5Yqh6ZyA6KaB6Ieq6KGM5Yik5pat5piv5ZCm5LiL6L295Yiw5LqG5oOz6KaB55qE5YaF5a65XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2FsbGJhY2spID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcy50ZW1wRmlsZVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy/ojrflj5blvq7kv6HlsY/luZXlsLrlr7hcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbmRvd1NpemUoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBzeXNJbmZvID0gcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgIGNvbnNvbGUubG9nKHN5c0luZm8pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGg6IHN5c0luZm8ud2luZG93V2lkdGggKiBzeXNJbmZvLnBpeGVsUmF0aW8sIFxyXG4gICAgICAgIGhlaWdodDogc3lzSW5mby53aW5kb3dIZWlnaHQgKiBzeXNJbmZvLnBpeGVsUmF0aW9cclxuICAgIH07XHJcbn1cclxuXHJcbi8v6I635Y+W55So5oi35o6I5p2D5L+h5oGvXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXR0aW5nKGxvZ2luQ29kZSl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5nZXRTZXR0aW5nKHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAvLyByZXMuYXV0aFNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC8vICAgXCJzY29wZS51c2VySW5mb1wiOiB0cnVlLCAgICAvL+aYr+WQpuaOiOadg+eUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAvLyAgIFwic2NvcGUudXNlckxvY2F0aW9uXCI6IHRydWUsICAgIC8v5piv5ZCm5o6I5p2D5Zyw55CG5L2N572uXHJcbiAgICAgICAgICAgIC8vICAgXCJzY29wZS53ZXJ1blwiOiBmYWxzZSwgIC8v5piv5ZCm5o6I5p2D5b6u5L+h6L+Q5Yqo5q2l5pWwXHJcbiAgICAgICAgICAgIC8vICAgXCJzY29wZS53cml0ZVBob3Rvc0FsYnVtXCI6IGZhbHNlICAgIC8v5piv5ZCm5o6I5p2D5L+d5a2Y5Yiw55u45YaMXHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5hdXRoU2V0dGluZyk7XHJcbiAgICAgICAgICAgIC8vIGlmKHR5cGVvZihjYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIC8vICAgICBjYWxsYmFjayhyZXMuYXV0aFNldHRpbmdbXCJzY29wZS51c2VySW5mb1wiXSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcclxuICAgICAgICAgICAgICAgIHBsYXRmb3JtLmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuY29kZSA9IGxvZ2luQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGF0YS5Mb2dpbkRhdGEuTG9naW5SZXEoJycsIHJlcy5jb2RlLCByZXMuZW5jcnlwdGVkRGF0YSwgcmVzLml2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVVzZXJJbmZvQnV0dG9uKGxvZ2luQ29kZSk7XHJcbiAgICAgICAgICAgICAgICAvL+aYvuekuuaOiOadg1xyXG4gICAgICAgICAgICAgICAgTG9jYWxDb25maWcuSXNXeEF1dGggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIE1hbmFnZXIuTG9hZGluZ1Byb2dyZXNzTWFuYWdlci5JbnN0LlNob3dXeExvZ2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/nlKjmiLfmjojmnYPmjInpkq5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVzZXJJbmZvQnV0dG9uKGxvZ2luQ29kZSl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgc3lzSW5mbyA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICBjb25zdCBidXR0b24gPSBwbGF0Zm9ybS5jcmVhdGVVc2VySW5mb0J1dHRvbih7XHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgIC8vIGltYWdlOiBDb25maWcuVUlDb25maWcuU2hhcmVJbWFnZVBhdGguSW52aXRlRnJpZW5kLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgd2lkdGg6IHN5c0luZm8ud2luZG93V2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogc3lzSW5mby53aW5kb3dIZWlnaHQsXHJcbiAgICAgICAgICAgIC8vIGxpbmVIZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcnLFxyXG4gICAgICAgICAgICAvLyBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAvLyB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAvLyBmb250U2l6ZTogMjYsXHJcbiAgICAgICAgICAgIC8vIGJvcmRlclJhZGl1czogNFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJ1dHRvbi5vblRhcCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAvL+ehruiupOaOiOadg+WQjumUgOavgeaMiemSrlxyXG4gICAgICAgIGlmKHJlcy5lbmNyeXB0ZWREYXRhKXtcclxuICAgICAgICAgICAgcmVzLmNvZGUgPSBsb2dpbkNvZGU7XHJcbiAgICAgICAgICAgIC8vIERhdGEuTG9naW5EYXRhLkxvZ2luUmVxKCcnLCByZXMuY29kZSwgcmVzLmVuY3J5cHRlZERhdGEsIHJlcy5pdik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgR0V2ZW50LkFkZExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkxvZ2luU3VjY2VzcywgKCk9PntidXR0b24uZGVzdHJveSgpO30sIHRoaXMpO1xyXG59XHJcblxyXG4vL+ajgOafpeeJiOacrOabtOaWsFxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tVcGRhdGUoY2FsbGJhY2s/OkZ1bmN0aW9uKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmKHR5cGVvZihwbGF0Zm9ybS5nZXRVcGRhdGVNYW5hZ2VyKSA9PT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlTWFuYWdlciA9IHBsYXRmb3JtLmdldFVwZGF0ZU1hbmFnZXIoKTtcclxuXHJcbiAgICAgICAgdXBkYXRlTWFuYWdlci5vbkNoZWNrRm9yVXBkYXRlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmo4Dmn6XmlrDniYjmnKznu5PmnpzvvJonLCByZXMuaGFzVXBkYXRlKTtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgLy/lm57osIPpgJrnn6Xnu5PmnpxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcy5oYXNVcGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+a4heeQhue8k+WtmFxyXG4gICAgICAgICAgICBpZihyZXMuaGFzVXBkYXRlKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1tcInd4RG93bmxvYWRlclwiXS5jbGVhbk9sZEFzc2V0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAvL+Wbnuiwg+mAmuefpee7k+aenFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsYXRmb3JtLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+abtOaWsOaPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5Y2z5bCG6YeN5ZCv5ri45oiPJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5paw55qE54mI5pys5bey57uP5LiL6L295aW977yM6LCD55SoIGFwcGx5VXBkYXRlIOW6lOeUqOaWsOeJiOacrOW5tumHjeWQr1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyDmlrDniYjmnKzkuIvovb3lpLHotKVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy/lkJHlvIDmlL7ln5/lj5HpgIHmtojmga9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RPcGVuUmVnaW9uTWVzc2FnZShldmVudElkKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG9wZW5EYXRhQ29udGV4dCA9IHBsYXRmb3JtLmdldE9wZW5EYXRhQ29udGV4dCgpXHJcbiAgICBvcGVuRGF0YUNvbnRleHQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIGV2ZW50SWQ6IGV2ZW50SWQsXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/lkJHlvIDmlL7ln5/lj5HpgIHmlbDmja5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RPcGVuUmVnaW9uRGF0YShkYXRhKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG9wZW5EYXRhQ29udGV4dCA9IHBsYXRmb3JtLmdldE9wZW5EYXRhQ29udGV4dCgpXHJcbiAgICBvcGVuRGF0YUNvbnRleHQucG9zdE1lc3NhZ2UoZGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkuIrkvKDmuLjmiI/mlbDmja5cclxuICogaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaWdhbWUvZGV2L2FwaS93eC5zZXRVc2VyQ2xvdWRTdG9yYWdlLmh0bWxcclxuICogXHJcbiAqIEBwYXJhbSAge30gZGF0YVxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHBhcmFtICB7fSB0aGlzQXJnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlckNsb3VkU3RvcmFnZShkYXRhLCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLnNldFVzZXJDbG91ZFN0b3JhZ2Uoe1xyXG4gICAgICAgIEtWRGF0YUxpc3Q6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/ojrflj5blsI/muLjmiI/lkK/liqjkv6Hmga9cclxuLy9odHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9taW5pZ2FtZS9kZXYvYXBpL3d4LmdldExhdW5jaE9wdGlvbnNTeW5jLmh0bWxcclxuLy8gbGF1bmNoSW5mbyA9IHtcclxuLy8gICAgIHNjZW5lLFxyXG4vLyAgICAgcXVlcnksXHJcbi8vICAgICBzaGFyZVRpY2tldCxcclxuLy8gICAgIHJlZmVycmVySW5mbzp7XHJcbi8vICAgICAgICAgYXBwSWQsXHJcbi8vICAgICAgICAgZXh0cmFEYXRhXHJcbi8vICAgICB9XHJcbi8vIH1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhdW5jaE9wdGlvbnNTeW5jKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBjb25zb2xlLmxvZygn5ZCv5Yqo5L+h5oGv77yaJywgbGF1bmNoSW5mbyk7XHJcblxyXG4gICAgcmV0dXJuIGxhdW5jaEluZm87XHJcbn1cclxuXHJcbi8v6I635Y+W5YWl5Y+jYXBwaWRcclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2luQXBwaWQoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsYXVuY2hJbmZvID0gcGxhdGZvcm0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIGlmKGxhdW5jaEluZm8gJiYgbGF1bmNoSW5mby5yZWZlcnJlckluZm8pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflhaXlj6NBcHBpZO+8micsbGF1bmNoSW5mby5yZWZlcnJlckluZm8uYXBwSWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbGF1bmNoSW5mby5yZWZlcnJlckluZm8uYXBwSWQ7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLy/ojrflj5blhaXlj6PlnLrmma/lgLxcclxuLy9odHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9taW5pZ2FtZS9kZXYvcmVmZXJlbmNlL3NjZW5lLWxpc3QuaHRtbFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF1bmNoU2NlbmUoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsYXVuY2hJbmZvID0gcGxhdGZvcm0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIGNvbnNvbGUubG9nKCflnLrmma/lgLzvvJonLGxhdW5jaEluZm8uc2NlbmUpO1xyXG4gICAgaWYobGF1bmNoSW5mbyl7XHJcbiAgICAgICAgcmV0dXJuIGxhdW5jaEluZm8uc2NlbmU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLy/mmK/lkKbku47igJzmiJHnmoTlsI/nqIvluo/ov5vlhaXigJ1cclxuZXhwb3J0IGZ1bmN0aW9uIElzTG9naW5Gcm9tRmF2b3VyaXRlKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgc2NlbmUgPSBnZXRMYXVuY2hTY2VuZSgpO1xyXG4gICAgLy8gcmV0dXJuIHNjZW5lID09IDEwODkgfHwgc2NlbmUgPT0gMTEwMztcclxuICAgIHJldHVybiBzY2VuZSA9PSAxMTA0IHx8IHNjZW5lID09IDExMDM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDot7PovazlsI/nqIvluo9cclxuICogQHBhcmFtICB7c3RyaW5nfSBhcHBJZFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHBhdGhcclxuICogQHBhcmFtICB7c3RyaW5nfSBleHRyYURhdGFcclxuICogQHBhcmFtICB7c3RyaW5nfSBlbnZWZXJzaW9uXHJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0gIHt9IHRoaXNBcmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVRvTWluaVByb2dyYW0oYXBwSWQ6c3RyaW5nLCBwYXRoPzpzdHJpbmcsIGV4dHJhRGF0YT8sIGVudlZlcnNpb24/LCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSB8fCAhYXBwSWQpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgIGFwcElkOiBhcHBJZCxcclxuICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgIGV4dHJhRGF0YTogZXh0cmFEYXRhLFxyXG4gICAgICAgIGVudlZlcnNpb246IGVudlZlcnNpb24sXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIC8vIOaJk+W8gOaIkOWKn1xyXG4gICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDot7PovazliLDljZblhYvmmJ/nkINcclxuICogQHBhcmFtICB7SlNPTn0gZXh0cmFEYXRhXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW52VmVyc2lvblxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHBhcmFtICB7fSB0aGlzQXJnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ29NYWlrZVNob3BwaW5nKGV4dHJhRGF0YT8sIGNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8sIGVudlZlcnNpb24/OnN0cmluZyl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBuYXZpZ2F0ZVRvTWluaVByb2dyYW0oTG9jYWxDb25maWcuTWluaVByb2dyYW1BcHBJZC5NYWlrZSwgbnVsbCwgZXh0cmFEYXRhLCBlbnZWZXJzaW9uLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku47lhbbku5blsI/nqIvluo/ov5Tlm55cclxuICogQHBhcmFtICB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSAge30gdGhpc0FyZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uUmV0dXJuR2FtZShjYjpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgaWYodHlwZW9mIGNiID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgIG9uU2hvdyhjYik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZSB7Y2MuTm9kZX0gKi9cclxubGV0IHN1YkNvbnRlbnRWaWV3O1xyXG4vL+iuvue9ruWtkOWfn+e7hOS7tlxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3ViQ29udGVudFZpZXcoc3ViVmlldyl7XHJcbiAgICBpZighc3ViVmlldykgcmV0dXJuO1xyXG5cclxuICAgIHN1YkNvbnRlbnRWaWV3ID0gc3ViVmlldztcclxufVxyXG5cclxuLy/ojrflj5blrZDln5/nu4Tku7ZcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN1YkNvbnRlbnRWaWV3KCl7XHJcbiAgICByZXR1cm4gc3ViQ29udGVudFZpZXc7XHJcbn1cclxuXHJcbi8v6ZqQ6JeP5oiW5pi+56S65a2Q5Z+f57uE5Lu2XHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtib29sZWFufSBhY3RpdmVcclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBzZXRTdWJDb250ZW50QWN0aXZlKGFjdGl2ZSl7XHJcbi8vICAgICBpZighc3ViQ29udGVudFZpZXcgfHwgdHlwZW9mIGFjdGl2ZSAhPSAnYm9vbGVhbicpIHJldHVybjtcclxuXHJcbi8vICAgICBzdWJDb250ZW50Vmlldy5hY3RpdmUgPSBhY3RpdmU7XHJcbi8vICAgICBzdWJDb250ZW50Vmlldy5nZXRDb21wb25lbnQoY2MuV1hTdWJDb250ZXh0VmlldykuZW5hYmxlZCA9IGFjdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gLy/mm7TmlrDlrZDln59cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN1YkNvbnRlbnRWaWV3KCl7XHJcbi8vICAgICBpZighc3ViQ29udGVudFZpZXcpIHJldHVybjtcclxuXHJcbi8vICAgICBzdWJDb250ZW50Vmlldy5nZXRDb21wb25lbnQoY2MuV1hTdWJDb250ZXh0VmlldykudXBkYXRlKCk7XHJcbi8vIH1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9Mb2NhbENvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVzVXJscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9naW5SZXNVcmxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9EZWZpbmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1VJQ29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9EYXRhQ29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9OZXRDb25maWcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvY2FsQ29udGVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29uZmlnVXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL1N0YXRlQ29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9PYmplY3RDb25maWcnO1xyXG4iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4vTG9jYWxDb25maWdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDb25maWcoY29uZmlnOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgdmFsdWUpe1xyXG4gICAgaWYobnVsbCA9PSB2YWx1ZSl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignVmFsdWUgaXMgbnVsbCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZihBcnJheS5pc0FycmF5KGNvbmZpZykgPT0gZmFsc2UgfHwgY29uZmlnLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIG9yIGVtcHR5IGNvbmZpZyBhcnJheScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHRhcmdldDpDb25maWcuQ29uZmlnVHlwZTtcclxuICAgIGNvbmZpZy5zb21lKHY9PntcclxuICAgICAgICBpZighdltwYXJhbV0pe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNaXNzIGFycmF5IHBhcmFtOiAnLCBwYXJhbSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1lbHNlIGlmKHZbcGFyYW1dID09IHZhbHVlKXtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdjtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuLy/moLnmja5pZOaQnOe0oumFjee9rlxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ29uZmlnQnlJZChjb25maWc6QXJyYXk8YW55PiwgdmFsdWUpe1xyXG4gICAgcmV0dXJuIHNlYXJjaENvbmZpZyhjb25maWcsICdJZCcsIHZhbHVlKTtcclxufVxyXG5cclxuLy/phY3nva7nmoTlhoXlrZjnvJPlrZhcclxubGV0IGNvbmZpZ0NhY2hlOkNvbmZpZy5EaWN0aW9uYXJ5PENvbmZpZy5Db25maWdUeXBlW10+ID0ge307XHJcbmxldCBsZXZlbENvbmZpZ0NhY2hlOkNvbmZpZy5EaWN0aW9uYXJ5PEFycmF5PENvbmZpZy5Db25maWdUeXBlPj4gPSB7fTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZ0J5S2V5KGtleTpzdHJpbmcpe1xyXG4gICAgaWYoIWtleSkgcmV0dXJuO1xyXG5cclxuICAgIGlmKG51bGwgPT0gY29uZmlnQ2FjaGVba2V5XSl7XHJcbiAgICAgICAgY29uZmlnQ2FjaGVba2V5XSA9IENvbmZpZy5EYXRhQ29uZmlnLmdldExvY2FsQ29uZmlnKGtleSk7XHJcbiAgICAgICAgbGV2ZWxDb25maWdDYWNoZVtrZXldID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZ0NhY2hlW2tleV07XHJcbn1cclxuXHJcbi8v6YCa6L+HSWTmkJzlr7vphY3nva5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZ0J5SWQoa2V5OnN0cmluZywgaWQ6bnVtYmVyKXtcclxuICAgIHJldHVybiBzZWFyY2hDb25maWdCeUlkKGdldENvbmZpZ0J5S2V5KGtleSksIGlkKTtcclxufVxyXG5cclxuLy/pgJrov4fnrYnnuqfmkJzlr7tcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZ0J5TGV2ZWwoa2V5OnN0cmluZywgbGV2ZWw6bnVtYmVyKXtcclxuICAgIC8vaWTnrYnkuo5sZXZlbFxyXG4gICAgcmV0dXJuIGdldENvbmZpZ0J5SWQoa2V5LCBsZXZlbCk7XHJcbn1cclxuXHJcbi8v6YCa6L+H5Lu75oSP5a2X5q615pCc5a+7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWdCeUFyZyhrZXk6c3RyaW5nLCBhcmc6c3RyaW5nLCB2YWx1ZSl7XHJcbiAgICByZXR1cm4gc2VhcmNoQ29uZmlnKGdldENvbmZpZ0J5S2V5KGtleSksIGFyZywgdmFsdWUpO1xyXG59XHJcblxyXG4vL+aMieWtl+auteaOkuWIl+mFjee9rlxyXG5leHBvcnQgZnVuY3Rpb24gc29ydENvbmZpZ0J5UGFyYW0oc3JjOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgb3V0PzpBcnJheTxBcnJheTxhbnk+Pil7XHJcbiAgICBpZighcGFyYW0gfHwgQXJyYXkuaXNBcnJheShzcmMpID09IGZhbHNlKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHBhcmFtIG9yIHNvdXJjZSBjb25maWcnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKEFycmF5LmlzQXJyYXkob3V0KSA9PSBmYWxzZSl7XHJcbiAgICAgICAgb3V0ID0gW107XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNyYy5zb21lKHY9PntcclxuICAgICAgICBpZihudWxsID09IHZbcGFyYW1dKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpZyBtaXNzIHBhcmFtOiAnLCBwYXJhbSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobnVsbCA9PSBvdXRbdltwYXJhbV1dKXtcclxuICAgICAgICAgICAgb3V0W3ZbcGFyYW1dXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRbdltwYXJhbV1dLnB1c2godik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gb3V0O1xyXG59XHJcblxyXG4vL+i+k+WFpemFjee9ru+8jOaMieWtl+autei/lOWbnuWQjOexu+mFjee9ruaVsOe7hFxyXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29uZmlnQnlQYXJhbShzcmM6QXJyYXk8YW55PiwgcGFyYW06c3RyaW5nLCB2YWx1ZSwgb3V0PzpBcnJheTxhbnk+KXtcclxuICAgIGlmKCFwYXJhbSB8fCBBcnJheS5pc0FycmF5KHNyYykgPT0gZmFsc2Upe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgcGFyYW0gb3Igc291cmNlIGNvbmZpZycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZihBcnJheS5pc0FycmF5KG91dCkgPT0gZmFsc2Upe1xyXG4gICAgICAgIG91dCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHNyYy5zb21lKHY9PntcclxuICAgICAgICBpZihudWxsID09IHZbcGFyYW1dKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpZyBtaXNzIHBhcmFtOiAnLCBwYXJhbSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodltwYXJhbV0gPT0gdmFsdWUpe1xyXG4gICAgICAgICAgICBvdXQucHVzaCh2KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gb3V0O1xyXG59XHJcblxyXG4vL+i+k+WFpemFjee9rmtlee+8jOaMieWtl+autei/lOWbnuWQjOexu+mFjee9ruaVsOe7hFxyXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29uZmlnKGtleTpzdHJpbmcsIHBhcmFtOnN0cmluZywgdmFsdWUsIG91dD86QXJyYXk8YW55Pil7XHJcbiAgICByZXR1cm4gZmlsdGVyQ29uZmlnQnlQYXJhbShnZXRDb25maWdCeUtleShrZXkpLCBwYXJhbSwgdmFsdWUsIG91dCk7XHJcbn0iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4vTG9jYWxDb25maWdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSnNvbkhvdHtcclxuICAgIGlkOm51bWJlcjtcclxuICAgIFR5cGU6c3RyaW5nO1xyXG4gICAgVXJsOnN0cmluZztcclxufVxyXG5cclxuLy/mnKzlnLDphY3nva7lrZjlgqjliY3nvIBcclxuY29uc3QgUFJFRklYX0xPQ0FMQ09ORklHX0tFWSA9IFwiY29uZmlnbG9jYWxfcHJlZml4XCI7XHJcblxyXG4vL+WvueW6lOWQjuerr+eahOihqOagvHRhYmxlSWRcclxubGV0IHRhYmxlSWROdW0gPSAxO1xyXG5leHBvcnQgY29uc3QgTE9DQUxDT05GSUdfS0VZID0ge1xyXG4gICAgLy/kv67kuLrpmLbmrrVcclxuICAgIENVTFRJVkFUSU9OX1BFUklPRDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFDb25maWd7XHJcbiAgICBwdWJsaWMgc3RhdGljIElzQ29uZmlnTG9hZGVkID0gZmFsc2U7ICAgLy/mmK/lkKblt7LliqDovb3phY3nva5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgSlNPTkhPVF9VUkwgID0gJ3Jlcy9jb25maWcvSnNvbkhvdC5qc29uJztcclxuICAgIC8v6YWN572uaWTvvIzpobvkuI5yZXMvQ29uZmlnL0pzb25Ib3QuVHlwZeebuOWQjFxyXG4gICAgcHVibGljIHN0YXRpYyBDVUxUSVZBVElPTl9LRVkgPSBcIkN1bHRpdmF0aW9uXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEpTT05fQ09ORklHUyA9IFwianNvbl9jb25maWdzXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlIDogRGF0YUNvbmZpZztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCkgOiBEYXRhQ29uZmlnIHtcclxuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRGF0YUNvbmZpZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSA6IERhdGFDb25maWcge1xyXG4gICAgICAgIGlmKHRoaXMuX2luc3RhbmNlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBEYXRhQ29uZmlnKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb25maWdCeU5hbWUoa2V5OnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0Q29uZmlnQnlOYW1lKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb25maWdCeUlkKGtleTpzdHJpbmcsIGlkOm51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0Q29uZmlnQnlJZChrZXksIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNlYXJjaENvbmZpZyhjb25maWc6QXJyYXk8YW55PiwgcGFyYW06c3RyaW5nLCB2YWx1ZSl7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IENvbW1vbi5zZWFyY2hBcnJheShjb25maWcsIHBhcmFtLCB2YWx1ZSk7XHJcbiAgICAgICAgaWYoIXRhcmdldCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+aJvuS4jeWIsOmFjee9ru+8micsIHBhcmFtLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZWFyY2hDb25maWdCeUlkKGNvbmZpZzpBcnJheTxhbnk+LCBpZDpudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaENvbmZpZyhjb25maWcsICdJZCcsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExvY2FsQ29uZmlnQnlJZChrZXk6c3RyaW5nLCBpZDpudW1iZXIpe1xyXG4gICAgICAgIGxldCBjb25maWc6QXJyYXk8YW55PiA9IHRoaXMuZ2V0TG9jYWxDb25maWcoa2V5KTtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoQ29uZmlnQnlJZChjb25maWcsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnRGF0YTp7W2tleTpzdHJpbmddOkFycmF5PGFueT59ID0ge307XHJcblxyXG4gICAgcHJvdGVjdGVkIGxvYWRDb25maWcodXJsOnN0cmluZywga2V5OnN0cmluZywgY2I/OkZ1bmN0aW9uKSA6IHZvaWQge1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQodXJsLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIGNvbmZpZz0+e1xyXG4gICAgICAgICAgICBjb25maWcgPSBKU09OLnN0cmluZ2lmeShjb25maWcpO1xyXG4gICAgICAgICAgICB2YXIgY29uZmlnSnNvbiA9IEpTT04ucGFyc2UoY29uZmlnKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdEYXRhW2tleV0gPSBjb25maWdKc29uO1xyXG5cclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRDb25maWcoY2I/OkZ1bmN0aW9uKSA6IHZvaWQge1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoRGF0YUNvbmZpZy5KU09OSE9UX1VSTCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCBjb25maWc9PntcclxuICAgICAgICAgICAgY29uZmlnID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnKTtcclxuICAgICAgICAgICAgbGV0IGhvdEpzb25zOkpzb25Ib3RbXSA9IEpTT04ucGFyc2UoY29uZmlnKTtcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShob3RKc29ucykpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gaG90SnNvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaG90SnNvbnMuZm9yRWFjaCgoY2ZnLCBpZHgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaWR4ID49IHRvdGFsIC0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbmZpZyhjZmcuVXJsLCBjZmcuVHlwZSwgY2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb25maWcoY2ZnLlVybCwgY2ZnLlR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pys5Zyw57yT5a2YXHJcbiAgICBwdWJsaWMgc3RvcmVDb25maWcoa2V5OnN0cmluZyB8IG51bWJlciwgZGF0YSl7XHJcbiAgICAgICAgLy/lkI7nq6/lj5HmnaVqc29u5a2X56ym5LiyXHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbFN0b3JhZ2UoUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIGtleSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVBbGxDb25maWcoZGF0YSl7XHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbEpzb24oQ29uZmlnLkRhdGFDb25maWcuSlNPTl9DT05GSUdTLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUNvbmZpZ1ZlcnNpb24oZGF0YTpDb25maWcuQ29uZmlnRGF0YVBhcmFtW10pe1xyXG4gICAgICAgIC8v5b+F6aG75piv5pWw57uEXHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSA9PSBmYWxzZSB8fCBkYXRhLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0b0xvY2FsID0gbmV3IEFycmF5PENvbmZpZy5Db25maWdEYXRhUGFyYW0+KCk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKHY9PntcclxuICAgICAgICAgICAgdG9Mb2NhbC5wdXNoKG5ldyBDb25maWcuQ29uZmlnRGF0YVBhcmFtKHYuVGFibGVJZCwgdi5WZXJzaW9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbEpzb24oQ29uZmlnLkRhdGFDb25maWcuSlNPTl9DT05GSUdTLCB0b0xvY2FsKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TG9jYWxDb25maWcoa2V5OnN0cmluZyl7XHJcbiAgICAgICAgaWYoIWtleSl7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGNvbmZpZyBrZXk6ICcsIGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb25maWcgPSBDb21tb24uZ2V0TG9jYWxTdG9yYWdlKGtleSk7XHJcbiAgICAgICAgaWYoIWNvbmZpZyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+mFjee9ruS4uuepuu+8micsIGtleSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWdWZXJzaW9uKGNvbmZpZzpDb25maWcuQ29uZmlnRGF0YVBhcmFtKXtcclxuICAgICAgICByZXR1cm4gY29uZmlnICYmIGNvbmZpZy5WZXJzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWdWZXJzaW9uQnlLZXkoa2V5OnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnVmVyc2lvbih0aGlzLmdldExvY2FsQ29uZmlnKGtleSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5pys5Zyw5omA5pyJ6YWN572uXHJcbiAgICBzdGF0aWMgZ2V0IGxvY2FsQ29uZmlncygpOkNvbmZpZy5Db25maWdEYXRhUGFyYW1bXXtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLmdldExvY2FsSnNvbihEYXRhQ29uZmlnLkpTT05fQ09ORklHUykgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbmZpZ0J5TmFtZShrZXk6c3RyaW5nKSA6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnRGF0YVtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb25maWdCeUlkKGtleTpzdHJpbmcsaWQ6bnVtYmVyKSA6IGFueSB7XHJcbiAgICAgICAgaWYodGhpcy5jb25maWdEYXRhW2tleV0pIHtcclxuICAgICAgICAgICAgdmFyIGNvbmZpZ3MgPSB0aGlzLmNvbmZpZ0RhdGFba2V5XTtcclxuICAgICAgICAgICAgZm9yKHZhciBpOm51bWJlciA9IDA7IGkgPCBjb25maWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihjb25maWdzW2ldWydpZCddID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3NbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbmZpZ3NCeVR5cGUoa2V5OnN0cmluZywgdHlwZTpudW1iZXIpIDogYW55IHtcclxuICAgICAgICBpZih0aGlzLmNvbmZpZ0RhdGFba2V5XSkge1xyXG4gICAgICAgICAgICB2YXIgY29uZmlncyA9IHRoaXMuY29uZmlnRGF0YVtrZXldO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0OkFycmF5PGFueT4gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpOm51bWJlciA9IDA7IGkgPCBjb25maWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihjb25maWdzW2ldWyd0eXBlJ10gPT0gdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbmZpZ3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUNvbmZpZ0RhdGEge1xyXG4gICAgc3RhdGljIENPTkZJR19LRVk6c3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBjb25maWc6QXJyYXk8YW55PjtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IENvbmZpZygpe1xyXG4gICAgICAgIGlmKCF0aGlzLmNvbmZpZyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gRGF0YUNvbmZpZy5nZXRMb2NhbENvbmZpZyh0aGlzLkNPTkZJR19LRVkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWdCeUlkKGlkOm51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIERhdGFDb25maWcuc2VhcmNoQ29uZmlnQnlJZCh0aGlzLkNvbmZpZywgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWdCeUxldmVsKGxldmVsOm51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIENvbW1vbi5zZWFyY2hBcnJheSh0aGlzLkNvbmZpZywgJ0xldmVsJywgbGV2ZWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLemFjee9ruWtl+autS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy/mqKHmnb/phY3nva5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgTmFtZTpzdHJpbmc7XHJcbiAgICBMZXZlbDpudW1iZXI7XHJcbiAgICBUeXBlOm51bWJlcjtcclxuICAgIFBpYzpzdHJpbmc7IFxyXG59XHJcblxyXG4vL+S/ruS4uumFjee9rlxyXG5leHBvcnQgY2xhc3MgQ3VsdGl2YXRpb25QZXJpb2QgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIFhpdXdlaU5hbWU6c3RyaW5nOyAgLy/kv67kuLrnuqfliKvlkI3np7BcclxuICAgIENvc3Q6bnVtYmVyOyAgICAvL+WNh+e6p+a2iOiAl+S/ruS4ulxyXG4gICAgU3VjY2VzczpudW1iZXI7IC8v5rih5Yqr5oiQ5Yqf546HXHJcbiAgICBBZGRFZmZpY2llbmN5Om51bWJlcjtcclxuICAgIEZhaWxSZXR1cm46bnVtYmVyO1xyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpY3Rpb25hcnk8VD4ge1xyXG4gICAgW0tleTogc3RyaW5nXTogVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50Q2xhc3Mge1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIExpc3RlbmVyOkZ1bmN0aW9uO1xyXG4gICAgVGFyZ2V0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcsIGxpc3RlbmVyOkZ1bmN0aW9uLCB0YXJnZXQ/KXtcclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLkxpc3RlbmVyID0gbGlzdGVuZXI7XHJcbiAgICAgICAgdGhpcy5UYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0ZW5lckNsYXNzIHtcclxuICAgIExpc3RlbmVycyA9IG5ldyBBcnJheTxGdW5jdGlvbj4oKTtcclxuICAgIFRhcmdldHMgPSBuZXcgQXJyYXk8Q29tbW9uLkV2ZW50RGlzcGF0aGVyPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXIobGlzdGVuZXI6RnVuY3Rpb24sIHRhcmdldD8pe1xyXG4gICAgICAgIHRoaXMuTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIHRoaXMuVGFyZ2V0cy5wdXNoKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIobGlzZW5lcjpGdW5jdGlvbil7XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuTGlzdGVuZXJzLmluZGV4T2YobGlzZW5lcik7XHJcbiAgICAgICAgaWYoaWR4ID49IDApe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5MaXN0ZW5lcnNbaWR4XTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuVGFyZ2V0c1tpZHhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudERpc3BhdGhlckludGVyZmFjZXtcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoa2V5LCBsaXNlbmVyOkZ1bmN0aW9uKTtcclxuICAgIGRpc3BhdGNoRXZlbnQoa2V5KTtcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxufVxyXG5cclxuLy/niYjmnKzmjqfliLZcclxuZXhwb3J0IGVudW0gVmVyc2lvbkNvbmZpZyB7XHJcbiAgICAvL+W8gOWPkeeJiOacrFxyXG4gICAgRGV2ZWxvcCA9IDAsXHJcbiAgICAvL+WvueWklueJiOacrFxyXG4gICAgUmVsZWFzZSA9IDEsXHJcbn1cclxuXHJcbi8v5rGg57G75Z6LXHJcbmV4cG9ydCBjb25zdCBQb29sVHlwZSA9IHtcclxuICAgIC8v6K6h5pe25ZmoXHJcbiAgICBUaW1lcjogJ1RpbWVyJyxcclxuICAgIC8v546p5a625aS06YOoXHJcbiAgICBIZWFkTW9kZWw6ICdIZWFkTW9kZWwnLFxyXG4gICAgLy/njqnlrrbouqvkvZNcclxuICAgIEJvZHlNb2RlbDogJ0JvZHlNb2RlbCcsXHJcbiAgICAvL+W8ueW5lVxyXG4gICAgUGFzc2J5VHh0OiAnUGFzc2J5VHh0JyxcclxuICAgIC8vZmFpcnlndWnlr7nosaFcclxuICAgIEZndWlPYmo6ICdGZ3VpT2JqJyxcclxuICAgIEhhbmQ6ICdIYW5kJyxcclxuICAgIERlc2s6ICdEZXNrJyxcclxufVxyXG5cclxuLy/msaDnianlk4HnsbvlnotcclxuZXhwb3J0IGNvbnN0IFBvb2xJdGVtS2V5ID0ge1xyXG4gICAgLy/njqnlrrbouqvkvZNcclxuICAgIEJvZHlTcGluZTogJ0JvZHlTcGluZScsICAgIFxyXG4gICAgLy/mjaLoo4XmqKHmnb9cclxuICAgIERyZXNzVGVtcGxhdGU6ICdEcmVzc1RlbXBsYXRlJywgICAgXHJcbn1cclxuXHJcbi8v6ZqP5py66K+t5Y+l57G75Z6LXHJcbmV4cG9ydCBjb25zdCBSYW5kV29yZFR5cGUgPSB7XHJcbiAgICAvL+a4oeWKq1xyXG4gICAgQ3VsdGl2YXRpb246IDEsXHJcbn1cclxuXHJcbi8v5bm/5ZGK57G75Z6LXHJcbmV4cG9ydCBlbnVtIEF3YXJkVHlwZSB7XHJcbiAgICBOb3QgPSAwLFxyXG4gICAgQUQgPSAxLFxyXG4gICAgU2hhcmUgPSAyXHJcbn1cclxuXHJcbi8v5bm/5ZGK5LyY5YWI57qn6YWN572uXHJcbmV4cG9ydCBlbnVtIEFkQ29uZmlnVHlwZSB7XHJcbiAgICAvL+a/gOWKseinhumikeS8mOWFiFxyXG4gICAgVmlkZW8gPSAwLFxyXG4gICAgLy/liIbkuqvkvJjlhYhcclxuICAgIFNoYXJlID0gMVxyXG59XHJcblxyXG4vL+WIhuS6q+ivreWPpeexu+Wei1xyXG5leHBvcnQgZW51bSBTaGFyZVdvcmRFbnVtIHtcclxuICAgIENhcmRXb3JkcyA9IDEsXHJcbiAgICBIYW1zdGVyV29yZHMgPSAyLFxyXG4gICAgQ29pbldvcmRzID0gMyxcclxuICAgIE90aGVyV29yZHMgPSA0LFxyXG59XHJcblxyXG4vL+aooeWei+aVsOaNruWumuS5iVxyXG5leHBvcnQgY2xhc3MgTW9kZWxEYXRhU3RydWN0IHtcclxuICAgIG1zcDpMYXlhLlNwcml0ZTNEO1xyXG4gICAgYW5pOkxheWEuQW5pbWF0b3I7XHJcbiAgICBhbmlTdGF0ZTpMYXlhLkFuaW1hdG9yUGxheVN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1zcDpMYXlhLlNwcml0ZTNELCBhbmk6TGF5YS5BbmltYXRvciwgYW5pU3RhdGU6TGF5YS5BbmltYXRvclBsYXlTdGF0ZSl7XHJcbiAgICAgICAgdGhpcy5tc3AgPSBtc3A7XHJcbiAgICAgICAgdGhpcy5hbmkgPSBhbmk7XHJcbiAgICAgICAgdGhpcy5hbmlTdGF0ZSA9IGFuaVN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WFrOWFseehruiupOW8ueeql+exu+Wei1xyXG5leHBvcnQgY29uc3QgQ29uZmlybVdpbmRvd1R5cGUgPSB7XHJcbiAgICAvL+aWh+Wtl1xyXG4gICAgQ29udGVudDogMSxcclxuICAgIC8v5aWW5Yqx54mp5ZOBXHJcbiAgICBSZXdhcmQ6IDIsXHJcbiAgICAvL+aWh+WtlyvlpZblirFcclxuICAgIENvbnRlbnRBbmRSZXdhcmQ6IDMsXHJcbn1cclxuXHJcbi8v5by55Ye656qX5Y+j5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpbmRvd0RhdGEge1xyXG4gICAgQ29udGVudDpzdHJpbmdbXTtcclxuICAgIFdpbmRvd1R5cGU6bnVtYmVyO1xyXG4gICAgWWVzQnRuQ29udGVudDpzdHJpbmc7XHJcbiAgICBZZXNCdG5DYWxsYmFjazpGdW5jdGlvbjtcclxuICAgIENhbmNlbEJ0bkNvbnRlbnQ6c3RyaW5nO1xyXG4gICAgUmV3YXJkRGF0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50OnN0cmluZ1tdLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIHdpbmRvd1R5cGU/Om51bWJlciwgcmV3YXJkRGF0YT8sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5Db250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLlllc0J0bkNhbGxiYWNrID0geWVzQnRuQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5ZZXNCdG5Db250ZW50ID0gYnRuWWVzVHh0PyBidG5ZZXNUeHQ6ICfnoa7lrponO1xyXG4gICAgICAgIHRoaXMuQ2FuY2VsQnRuQ29udGVudCA9IGJ0bkNhbmNlbFR4dD8gYnRuQ2FuY2VsVHh0OiAn5Y+W5raIJztcclxuICAgICAgICB0aGlzLldpbmRvd1R5cGUgPSB3aW5kb3dUeXBlO1xyXG4gICAgICAgIHRoaXMuUmV3YXJkRGF0YSA9IHJld2FyZERhdGE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsQ29uZmlnIHtcclxuICAgIHN0YXRpYyByZWFkb25seSBDdWx0aXZhdGlvbl9GbHlfSW50ZXJ2YWwgPSA2OyAgICAvL+S/ruS4uumjmOWtl+mXtOmalC/mr6vnp5JcclxuICAgIHN0YXRpYyByZWFkb25seSBBZG9iZV9Qcm9kdWN0aW9uX0ludGVydmFsID0gMTA7ICAgIC8v5rSe5bqc55Sf5Lqn6Ze06ZqUL+avq+enklxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFRvd2VyX01heF9JbnZpdGVfTnVtID0gNDsgIC8v6ZWH5aaW5aGU5pyA5aSn5Y+v6YKA6K+35pWw6YePXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgTWF4X1JlYWR5ID0gODtcclxuICAgIHN0YXRpYyByZWFkb25seSBNYXhfTGV2ZWwgPSA4O1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IE1heF9CYXR0bGUgPSA5O1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgc3RhdGljIElzQ2hvb3NlZFNlcnZpY2UgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBJc1NpbVByb2dyZXNzRW5kID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIFJld2FyZEFkTGlzdCA9IFtcclxuICAgICAgICAnYWR1bml0LWQ5NTA2Yjg1NmRhNjUxZDknLFxyXG4gICAgICAgICdhZHVuaXQtMjc3YTE0OTBiZGQ5NjU4NicsXHJcbiAgICAgICAgJ2FkdW5pdC0yNGM5ODFiYjZlMjYxYzEyJyxcclxuICAgICAgICAnYWR1bml0LWJhMTQ3NDI0MmUwYjA3Y2MnLFxyXG4gICAgICAgICdhZHVuaXQtNWVkYzUyNTZiODk5NDZjZSdcclxuICAgIF07XHJcblxyXG4gICAgc3RhdGljIEJhbm5lckFkTGlzdCA9IFtcclxuICAgICAgICAnYWR1bml0LTY0ZjMyZWJmMzkxYTNlZWEnLFxyXG4gICAgICAgICdhZHVuaXQtZjFiZDk3MDI5NDEyZGMzNScsXHJcbiAgICAgICAgJ2FkdW5pdC03OTIxMDlmYWM2OGVmMDhiJyxcclxuICAgICAgICAnYWR1bml0LWVkOGYwMGRkNDJkZDJkZDgnLFxyXG4gICAgICAgICdhZHVuaXQtYTkyNGMyOTZlYTliMjNhNSdcclxuICAgIF07XHJcblxyXG4gICAgc3RhdGljIHJlYWRvbmx5IE1pbmlQcm9ncmFtQXBwSWQgPSB7XHJcbiAgICAgICAgTWFpa2U6ICd3eDZmMWI5YjgxNDY3Y2MzZGEnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+eUqOaIt+aYr+WQpuW3suaOiOadg1xyXG4gICAgc3RhdGljIElzV3hBdXRoID0gdHJ1ZTtcclxuXHJcbiAgICAvL+WtmOWCqOeUqOaIt+WQjVxyXG4gICAgc3RhdGljIEdldEFjb3VudE5hbWUoKXtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLmdldExvY2FsU3RvcmFnZShcIkFjb3VudE5hbWVcIikgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFNhdmVBY291bnROYW1lKF92YWx1ZSl7XHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbFN0b3JhZ2UoXCJBY291bnROYW1lXCIsIF92YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTG9jYWxDb250ZW50ID0ge1xyXG4gICAgSW52aXRlOiAn6YKA6K+3JyxcclxuXHJcbiAgICBOZXRFcnJvcjogJ+e9kee7nOW8gOWwj+W3ricsXHJcblxyXG4gICAgWWVzOiAn56Gu5a6aJyxcclxuXHJcbiAgICBDb21pbmdTb29uOiAn5pqC5pyq5byA5pS+JyxcclxuXHJcbiAgICBHZXRBd2FyZDogJ+mihuWPlicsXHJcblxyXG4gICAgRmx5aW5nVGlwc0RlZmF1bHQ6ICfmga3llpzojrflvpflpZblirEnLFxyXG5cclxuICAgIENvbnNBd2FyZDogXCLmga3llpzojrflvpdcIixcclxuXHJcbiAgICBTaGFyZUZhaWxUaXBzOiBcIuWIhuS6q+ebuOWQjOaci+WPi+WciOaXoOazleiOt+W+l+WlluWKsVwiLFxyXG59IiwiZXhwb3J0IGxldCBsb2dpblJlc1VybHMgPSBbXHJcbiAgICB7IHVybDogJ3Jlcy9DaG9vc2VTZXJ2aWNlL0Nob29zZVNlcnZpY2UudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9Mb2FkaW5nVUkvTG9hZGluZ1VJLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvTG9hZGluZ1VJL0xvYWRpbmdVSV9hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuXSIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVxYm9keUJhc2V7XHJcbiAgICBzdGF0aWMgcmVxYm9keXM6Q29uZmlnLkRpY3Rpb25hcnk8SHR0cFJlcWJvZHlCYXNlPiA9IHt9O1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIE1vZHVsZUNvZGU6IG51bWJlcjtcclxuICAgIFJlcUNvZGU6IG51bWJlcjtcclxuICAgIFNlc3Npb246IHN0cmluZztcclxuICAgIEFjY291bnRLZXk6IHN0cmluZztcclxuICAgIFJlcURhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6c3RyaW5nLCBtb2RDb2RlOm51bWJlciwgcmVxQ29kZTpudW1iZXIsIHNlc3Npb24/OnN0cmluZywgYWNjTmFtZT86c3RyaW5nLCByZXFkYXRhPyl7XHJcbiAgICAgICAgaWYodHlwZW9mKHJlcWRhdGEpID09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAvL+WmguW3sui9rOaNouWImei9rOWbnkpTT05cclxuICAgICAgICAgICAgcmVxZGF0YSA9IEpTT04ucGFyc2UocmVxZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLk1vZHVsZUNvZGUgPSBtb2RDb2RlO1xyXG4gICAgICAgIHRoaXMuUmVxQ29kZSA9IHJlcUNvZGU7XHJcbiAgICAgICAgdGhpcy5TZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLkFjY291bnRLZXkgPSBhY2NOYW1lO1xyXG4gICAgICAgIHRoaXMuUmVxRGF0YSA9IHJlcWRhdGE7XHJcblxyXG4gICAgICAgIEh0dHBSZXFib2R5QmFzZS5yZXFib2R5c1trZXldID0gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuLy/or7fmsYLnu5PmnoRcclxuZXhwb3J0IHZhciBSZXFEYXRhID0ge1xyXG4gICAgTG9naW46e1wiTmFtZVwiOiBcInRhbmR5XCJ9LFxyXG4gICAgQWRvYmVQb29sVXBncmFkZTp7XCJUeXBlXCI6IDF9LFxyXG4gICAgSm9pblNlY3Q6e1wiR3JvdXBTdGFnZUlkXCI6IDEsXCJHcm91cElkXCI6IDF9LFxyXG4gICAgTGVhcm5TZWN0S2Y6e1wiU2tpbGxJZFwiOiAxfSxcclxuICAgIFVwZ3JhZGVLb25nZmE6e1wiU2tpbGxUeXBlXCI6MSxcIlNraWxsSWRcIjogMX0sXHJcbiAgICBTdGFydFNlY3RUYXNrOntcIlRhc2tJZFwiOjF9LFxyXG4gICAgR3JhYlNlY3RUYXNrQXdhcmQ6e1wiVGFza0lkXCI6MX0sXHJcbiAgICBTZWxsQmFnSXRlbTp7XCJQb3NpdGlvblwiOiAxLFwiVHlwZVwiOiAxLFwiSWRcIjogMSxcIk51bVwiOiAxfSxcclxuICAgIFVzZUJhZ0l0ZW06e1wiUG9zaXRpb25cIjogMSxcIlR5cGVcIjogMSxcIklkXCI6IDEsXCJOdW1cIjogMX0sXHJcbiAgICBHbUFkZEJhZ0l0ZW06e1wiVHlwZVwiOiAxLFwiSWRcIjogMSxcIk51bVwiOiAxfSxcclxuICAgIC8v5oyR5oiY6ZWH5aaW5aGUXHJcbiAgICBHb01vbnN0ZXJUb3dlcjp7XCJDaGFsbGVuZ2VMZXZlbFwiOiAxLCBcIkhlbHBIZXJvc1wiOiBuZXcgQXJyYXk8SGVscEhlcm9zRGF0YUNsYXNzPigpfSxcclxufVxyXG5cclxuLy/plYflppbloZTpgoDor7fku5nlj4vmlbDmja5cclxuZXhwb3J0IGNsYXNzIEhlbHBIZXJvc0RhdGFDbGFzcyB7XHJcbiAgICBLZXk6c3RyaW5nO1xyXG4gICAgSXNSb2JvdDpib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcsIGlzUm9ib3Q6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5LZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5Jc1JvYm90ID0gaXNSb2JvdDtcclxuICAgIH1cclxuXHJcbiAgICAvL+aXoOWKqeaImOiLsembhFxyXG4gICAgc3RhdGljIGdldCBOb25lSGVscEhlcm8oKXtcclxuICAgICAgICByZXR1cm4gW0VtcHR5SGVscEhlcm8sIEVtcHR5SGVscEhlcm8sIEVtcHR5SGVscEhlcm8sIEVtcHR5SGVscEhlcm9dO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WKqeaImOiLsembhOepuuS9jVxyXG5leHBvcnQgY29uc3QgRW1wdHlIZWxwSGVybyA9IG5ldyBIZWxwSGVyb3NEYXRhQ2xhc3MoJycsIGZhbHNlKTtcclxuXHJcbmV4cG9ydCBlbnVtIFJlcWJvZHlLZXl7XHJcbiAgICBDb25maWcgPSBcIkNvbmZpZ1wiLFxyXG4gICAgTG9naW4gPSBcIkxvZ2luXCIsXHJcbiAgICBVcGdyYWRlID0gXCJVcGdyYWRlXCIsXHJcbiAgICBBZG9iZVVpSW5mbyA9IFwiQWRvYmVVaUluZm9cIixcclxuICAgIEFkb2JlSGlyZVdvcmtlciA9IFwiQWRvYmVIaXJlV29ya2VyXCIsXHJcbiAgICBBZG9iZUFkZFdvcmtlciA9IFwiQWRvYmVBZGRXb3JrZXJcIixcclxuICAgIEFkb2JlUmVkdWNlV29ya2VyID0gXCJBZG9iZVJlZHVjZVdvcmtlclwiLFxyXG4gICAgQWRvYmVVcFN0b25lID0gXCJBZG9iZVVwU3RvbmVcIixcclxuICAgIEFkb2JlVXBGb29kID0gXCJBZG9iZVVwRm9vZFwiLFxyXG4gICAgQWRvYmVVcFdvb2QgPSBcIkFkb2JlVXBXb29kXCIsXHJcbiAgICBBZG9iZVVwSXJvbiA9IFwiQWRvYmVVcElyb25cIixcclxufVxyXG5cclxuZXhwb3J0IGxldCBOZXRDb25maWcgPSB7XHJcbiAgICBSZXF1ZXN0VXJsOlwiaHR0cDovLzcubGlnaHRwYXcuY29tL3RydXRoXCIsXHJcblxyXG4gICAgLy8gSHR0cFJlcXVlc3RVcmw6XCJodHRwOi8vNzA2LmxpZ2h0cGF3LmNvbTo3NzIwL2hhcHB5X3RyYXZlbFwiLFxyXG5cclxuICAgIEh0dHBSZXF1ZXN0VXJsOlwiaHR0cHM6Ly85ejlhY3Y5MDFnLmV4ZWN1dGUtYXBpLmNuLW5vcnRod2VzdC0xLmFtYXpvbmF3cy5jb20uY24vYmV0YVwiLFxyXG4gICAgXHJcbiAgICBMb2NhbFJlcXVlc3RVcmw6XCJodHRwOi8vNy5saWdodHBhdy5jb20vdHJ1dGhcIixcclxuXHJcbiAgICBMb2NhbFdlY2hhdFJlcXVlc3RVcmw6XCJodHRwOi8vc3ZmMzdlLm5hdGFwcGZyZWUuY2MvaGFwcHlfdHJhdmVsXCIsXHJcblxyXG4gICAgR01Vcmw6XCJodHRwOi8vNy5saWdodHBhdy5jb20vaGFwcHlfdHJhdmVsL3Jld2FyZFwiLFxyXG5cclxuICAgIFRlbXBOYW1lOlwiXCIsXHJcbn1cclxuXHJcbi8v6L+e5o6l54q25oCBXHJcbmV4cG9ydCBlbnVtIEh0dHBDb25uZWN0U3RhdGUge1xyXG4gICAgRXJyb3IgPSAwLFxyXG4gICAgU3VjY2VzcyA9IDEsXHJcbn1cclxuXHJcbi8v5ZON5bqU57uT5p6E5L2TXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzcERhdGFTdHJ1Y3Qge1xyXG4gICAgUmVzcENvZGU6IG51bWJlcjtcclxuICAgIFJlc3BNc2c6IHN0cmluZztcclxuICAgIFJlc3BEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzcERhdGEoZGF0YTpSZXNwRGF0YVN0cnVjdCl7XHJcbiAgICByZXR1cm4gZGF0YSAmJiBkYXRhLlJlc3BEYXRhO1xyXG59XHJcblxyXG4vL+aLieWPlumFjee9ruivt+axguS9k1xyXG5leHBvcnQgY2xhc3MgQ29uZmlnRGF0YVBhcmFtIHtcclxuICAgIFRhYmxlSWQ6IG51bWJlcjtcclxuICAgIFRhYmxlTmFtZTogc3RyaW5nO1xyXG4gICAgVmVyc2lvbjogbnVtYmVyO1xyXG4gICAgRGF0YTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6bnVtYmVyLCB2ZXJzaW9uOm51bWJlciwgbmFtZT86c3RyaW5nLCBkYXRhPyl7XHJcbiAgICAgICAgdGhpcy5UYWJsZUlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5WZXJzaW9uID0gdmVyc2lvbjtcclxuICAgICAgICBpZihuYW1lKXtcclxuICAgICAgICAgICAgdGhpcy5UYWJsZU5hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5EYXRhID0gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgQ29uZmlnUmVxRGF0YSA9IG5ldyBBcnJheTxDb25maWdEYXRhUGFyYW0+KCk7XHJcblxyXG4vL+eZu+W9leivt+axguS9k1xyXG5leHBvcnQgY2xhc3MgTG9naW5SZXFEYXRhIHtcclxuICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIEpzQ29kZT86IHN0cmluZztcclxuICAgIEVuY3J5cHRlZERhdGE/OiBzdHJpbmc7XHJcbiAgICBJdj86IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lPzpzdHJpbmcsIHB3PzpzdHJpbmcsIGpzY29kZT86c3RyaW5nLCBlbmNyeXB0ZWREYXRhPzpzdHJpbmcsIGl2PzpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLk5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuUGFzc3dvcmQgPSBwdztcclxuICAgICAgICB0aGlzLkpzQ29kZSA9IGpzY29kZTtcclxuICAgICAgICB0aGlzLkVuY3J5cHRlZERhdGEgPSBlbmNyeXB0ZWREYXRhO1xyXG4gICAgICAgIHRoaXMuSXYgPSBpdjtcclxuICAgIH1cclxufVxyXG5cclxuLy/nmbvlvZXlk43lupTmlbDmja7kvZNcclxuZXhwb3J0IHR5cGUgTG9naW5SZXNwRGF0YVN0cnVjdCA9IHtcclxuICAgIFwiQWNjb3VudEJhc2VJbmZvXCI6IHtcclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiVmVyaWZ5U2Vzc2lvblwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJOaWNrTmFtZVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJBdmF0YXJcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiQ3JlYXRlVGltZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJEYW9oZW5nXCI6IG51bWJlcixcclxuICAgICAgICBcIkxpbmdsaVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHZW5ndVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJUaXBvXCI6IG51bWJlcixcclxuICAgICAgICBcIlNoZW5mYVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXdXhpbmdcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRnV5dWFuXCI6IG51bWJlcixcclxuICAgICAgICBcIlppemhpXCI6IG51bWJlcixcclxuICAgICAgICBcIlpoZW5neWlcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiWGllZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXZWl3YW5nXCI6IG51bWJlcixcclxuICAgICAgICBcIkdyb3VwR29uZ3hpYW5cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiWGlhbnl1XCI6IG51bWJlcixcclxuICAgIH0sXHJcbiAgICBcIlhpdXdlaUluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJTdGFnZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJDdXJyZW50VmFsdWVcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRWZmaWNpZW5jeVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTZXR0bGVtZW50VGltZVwiOiBudW1iZXJcclxuICAgIH0sXHJcbiAgICBcIlBhZ29kYUluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJOb3JtYWxNdWx0aXBsZUluZm9zXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJTdGFydFN0YW1wXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiRW5kU3RhbXBcIjogbnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiTm9ybWFsU3RhcnRUaW1lXCI6IG51bWJlcixcclxuICAgICAgICBcIk5vcm1hbFRpbWVzXCI6IG51bWJlcixcclxuICAgICAgICBcIk5vcm1hbExlc3RUaW1lXCI6IG51bWJlcixcclxuICAgICAgICBcIkxlYWRlck11bHRpcGxlSW5mb3NcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIlN0YXJ0U3RhbXBcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJFbmRTdGFtcFwiOiBudW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJMZWFkZXJTdGFydFRpbWVcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiTGVhZGVyVGltZXNcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiTGVhZGVyTGVzdFRpbWVcIjogbnVtYmVyXHJcbiAgICB9LFxyXG4gICAgXCJEb25nZnVJbmZvXCI6IHsgLy/otKbmiLfmnIDmlrDmtJ7lupzkv6Hmga9cclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiVG90YWxTZXJ2YW50TnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIlN0b25lTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTdG9uZU51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTdG9uZVNlcnZhbnROdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRm9vZExldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRm9vZE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJGb29kU2VydmFudE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXb29kTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXb29kTnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIldvb2RTZXJ2YW50TnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIklyb25MZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIklyb25OdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiSXJvblNlcnZhbnROdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU2V0dGxlbWVudFRpbWVcIjogbnVtYmVyXHJcbiAgICB9LFxyXG4gICAgXCJQb29sSW5mb1wiOiB7XHJcbiAgICAgICAgXCJBY2NvdW50S2V5XCI6IHN0cmluZyxcclxuICAgICAgICBcIlBvb2xMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIlJlaWtpTnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIkdvbGRMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIldvb2RMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIldhdGVyTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJGaXJlTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTb2lsTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTZXR0bGVtZW50VGltZVwiOiBudW1iZXIsXHJcbiAgICB9LFxyXG4gICAgXCJHcm91cEluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJHcm91cElkXCI6IG51bWJlcixcclxuICAgICAgICBcIkdyb3VwU2tpbGxOdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU3R1ZHlTa2lsbHNcIjogW1xyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgXCJTa2lsbElkXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgXCJTa2lsbFR5cGVcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICBcIkxldmVsXCI6IG51bWJlclxyXG4gICAgICAgICAgIH1cclxuICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBcIlN0b3JhZ2VJbmZvXCI6IHtcclxuICAgICAgICBcIlN3b3JkSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiSGFpcnBpbklkXCI6IG51bWJlcixcclxuICAgICAgICBcIkNsb3RoZXNJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTaG9lc0lkXCI6IG51bWJlcixcclxuICAgICAgICBcIlJpbmdJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJKYWRlSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiQnJhY2VsZXRJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJDb21wYXNzSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiT3Blbk51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHb29kSW5mb3NcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIlR5cGVcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcIk51bVwiOiBudW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgXCJEYW1vbkluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJDaGFsbGVuZ2VMZXZlbFwiOiBudW1iZXJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkb2JlQWRkV29ya2VyUmVxRGF0YSB7XHJcbiAgICBXb3JrVHlwZTpudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod29ya1R5cGU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5Xb3JrVHlwZSA9IHdvcmtUeXBlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPYmplY3RDb25maWcgPSB7XHJcbiAgICBERVNLX1BPUzogbmV3IExheWEuVmVjdG9yMygyLjUsIDQsIC01KSxcclxuICAgIERFU0tfRU5EX1BPUzogbmV3IExheWEuVmVjdG9yMygyLjUsIC0xLCAtNSksXHJcbiAgICBERVNLX0VOVEVSX1BPUzogbmV3IExheWEuVmVjdG9yMyg2LCA0LCAtNSksXHJcbiAgICBIQU5EX1BPUzogbmV3IExheWEuVmVjdG9yMygtMywgLTIsIC01KSxcclxuICAgIEhBTkRfRU5EX1BPUzogbmV3IExheWEuVmVjdG9yMygwLCAtMiwgLTUpLFxyXG4gICAgREVTS19TSVpFOiBuZXcgTGF5YS5WZWN0b3IzKDAuMiwgMywgMiksXHJcbiAgICBIQU5EX1NJWkU6IG5ldyBMYXlhLlZlY3RvcjMoNiwgMC41LCAwLjUpLFxyXG4gICAgLy9zcGVlZFxyXG4gICAgU1BFRURfRk9SV0FSRF9ERVNLOiBuZXcgTGF5YS5WZWN0b3IzKDAsIC0xMCwgMCksXHJcbiAgICBTUEVFRF9CQUNLX0RFU0s6IG5ldyBMYXlhLlZlY3RvcjMoMCwgMTAsIDApLFxyXG4gICAgU1BFRURfSEFORDogMC4wMyxcclxufSIsImxldCB1cmxzID0gW1xyXG4gICAgeyB1cmw6ICdyZXMvQWRvYmUvQWRvYmUudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9BZG9iZS9BZG9iZV9hdGxhczAuanBnJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL0Fkb2JlL0Fkb2JlX2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvYXRsYXMvY29tcC5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQ2hlc3NCb2FyZC9DaGVzc0JvYXJkLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQ2hlc3NCb2FyZC9DaGVzc0JvYXJkX2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQ2hvb3NlU2VydmljZS9DaG9vc2VTZXJ2aWNlLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvSWNvbnMvSWNvbnMudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9JY29ucy9JY29uc19hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL01haW5NZW51L01haW5NZW51LnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvTWFpbk1lbnUvTWFpbk1lbnVfYXRsYXMyLnBuZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QbGF5ZXIvUGxheWVyLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpYy50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL1B1YmxpYy9QdWJsaWNfYXRsYXMxLmpwZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QdWJsaWMvUHVibGljX2F0bGFzMV8xLmpwZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QdWJsaWMvUHVibGljX2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczJfMS5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczJfMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczJfMy5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUm9hZFRvRGlldHkvUm9hZFRvRGlldHkudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9TZWN0L1NlY3QudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbl1cclxuZXhwb3J0IHt1cmxzfTsiLCJcclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29uZmlnID0ge1xyXG4gICAgSURFTDogJ0lERUwnLCAgLy/lvoXmnLpcclxuICAgIERFQUQ6ICdERUFEJyxcclxuICAgIEJBQ0tfUEFTU0VEOiAnQkFDS19QQVNTRUQnLCAgICAvL+W3sue8qeWbnuWuieWFqOWMulxyXG4gICAgTU9WRV9GT1JXQVJEOiAnTU9WRV9GT1JXQVJEJywgICAgLy/liY3kvLhcclxuICAgIE1PVkVfQkFDSzogJ01PVkVfQkFDSycsICAgIC8v57yp5ZueXHJcbiAgICBTVE9QOiAnU1RPUCcsICAgIC8v5YGc5q2i6L+Q5YqoXHJcbiAgICBERVNLX0xFQVZFOiAnREVTS19MRUFWRScsICAgIC8v5YiA5Y+w56a75Zy6XHJcbiAgICBERVNLX0VOVEVSOiAnREVTS19FTlRFUicsICAgIC8v5YiA5Y+w6L+b5Zy6XHJcbn0iLCJcclxuZXhwb3J0IGludGVyZmFjZSBWaWV3Q29uZmlne1xyXG4gICAgS2V5OiBzdHJpbmcsXHJcbiAgICBQa2dBZHJzOiBzdHJpbmcsXHJcbiAgICBQa2c6IHN0cmluZyxcclxuICAgIENvbTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBWaWV3S2l0ID0ge1xyXG4gICAgLy/liqDovb3oj4roirFcclxuICAgIExvYWRpbmdNYWluOiB7XHJcbiAgICAgICAgS2V5OiBcIkxvYWRpbmdNYWluXCIsXHJcbiAgICAgICAgUGtnOiBcIkxvYWRpbmdVSVwiLFxyXG4gICAgICAgIENvbTpcIkxvYWRpbmdNYWluXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/pgInmi6nmnI3liqHlmahcclxuICAgIENob29zZVNlcnZpY2U6e1xyXG4gICAgICAgIEtleTogXCJDaG9vc2VTZXJ2aWNlXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJDaG9vc2VTZXJ2aWNlL0Nob29zZVNlcnZpY2VcIixcclxuICAgICAgICBQa2c6IFwiQ2hvb3NlU2VydmljZVwiLFxyXG4gICAgICAgIENvbTpcIkNob29zZVNlcnZpY2VcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+ivu+adoei/m+W6plxyXG4gICAgTG9hZGluZ1Byb2dyZXNzOiB7XHJcbiAgICAgICAgS2V5OiBcIkxvYWRpbmdQcm9ncmVzc1wiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwicmVzL0xvYWRpbmdVSS9Mb2FkaW5nVUlcIixcclxuICAgICAgICBQa2c6IFwiTG9hZGluZ1VJXCIsXHJcbiAgICAgICAgQ29tOlwiTG9hZGluZ1Byb2dyZXNzXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/kuLvnlYzpnaJcclxuICAgIE1haW5NZW51OiB7XHJcbiAgICAgICAgS2V5OiBcIk1haW5NZW51XCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJyZXMvTWFpbk1lbnUvTWFpbk1lbnVcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJNYWluTWVudVwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5L+u54K85pON5L2cXHJcbiAgICBDdWx0aXZhdGlvbkluZm86IHtcclxuICAgICAgICBLZXk6IFwiQ3VsdGl2YXRpb25JbmZvXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJyZXMvTWFpbk1lbnUvTWFpbk1lbnVcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJDdWx0aXZhdGlvbkluZm9cIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mjmOWtl1xyXG4gICAgVGlwc0xhYmVsOiB7XHJcbiAgICAgICAgS2V5OiBcIlRpcHNMYWJlbFwiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwiUHVibGljL1B1YmxpY1wiLFxyXG4gICAgICAgIFBrZzogXCJQdWJsaWNcIixcclxuICAgICAgICBDb206XCJUaXBzTGFiZWxcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mjmOWtl1xyXG4gICAgUmVzUHJvZHVjdGlvblRpcHM6IHtcclxuICAgICAgICBLZXk6IFwiUmVzUHJvZHVjdGlvblRpcHNcIixcclxuICAgICAgICBQa2dBZHJzOiBcIkFkb2JlL0Fkb2JlXCIsXHJcbiAgICAgICAgUGtnOiBcIkFkb2JlXCIsXHJcbiAgICAgICAgQ29tOlwiUmVzUHJvZHVjdGlvblRpcHNcIlxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy/mtJ7lupxcclxuICAgIEFkb2JlTWFpbjoge1xyXG4gICAgICAgIEtleTogXCJBZG9iZU1haW5cIixcclxuICAgICAgICBQa2dBZHJzOiBcIkFkb2JlL0Fkb2JlXCIsXHJcbiAgICAgICAgUGtnOiBcIkFkb2JlXCIsXHJcbiAgICAgICAgQ29tOlwiQWRvYmVNYWluXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/lhaznlKjnoa7orqTnqpflj6NcclxuICAgIFB1YmxpY0NvbmZpcm1hdGlvbjoge1xyXG4gICAgICAgIEtleTogXCJQdWJsaWNDb25maXJtYXRpb25cIixcclxuICAgICAgICBQa2dBZHJzOiBcIlB1YmxpYy9QdWJsaWNcIixcclxuICAgICAgICBQa2c6IFwiUHVibGljXCIsXHJcbiAgICAgICAgQ29tOlwiUHVibGljQ29uZmlybWF0aW9uXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/mtJ7lupzljYfnuqdcclxuICAgIEFkb2JlVXBncmFkZToge1xyXG4gICAgICAgIEtleTogXCJBZG9iZVVwZ3JhZGVcIixcclxuICAgICAgICBQa2dBZHJzOiBcIkFkb2JlL0Fkb2JlXCIsXHJcbiAgICAgICAgUGtnOiBcIkFkb2JlXCIsXHJcbiAgICAgICAgQ29tOlwiQWRvYmVVcGdyYWRlXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v5Yqg5YWl6Zeo5rS+XHJcbiAgICBKb2luU2VjdDoge1xyXG4gICAgICAgIEtleTogXCJKb2luU2VjdFwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiSm9pblNlY3RcIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/liqDlhaXpl6jmtL5cclxuICAgIFNlY3RNYWluOiB7XHJcbiAgICAgICAgS2V5OiBcIlNlY3RNYWluXCIsXHJcbiAgICAgICAgUGtnOiBcIlNlY3RcIixcclxuICAgICAgICBDb206XCJTZWN0TWFpblwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+mXqOa0vuS/rueCvOWhlFxyXG4gICAgVHJhaW5Ub3dlcjoge1xyXG4gICAgICAgIEtleTogXCJUcmFpblRvd2VyXCIsXHJcbiAgICAgICAgUGtnOiBcIlNlY3RcIixcclxuICAgICAgICBDb206XCJUcmFpblRvd2VyXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v6Zeo5rS+5Lu75YqhXHJcbiAgICBTZWN0VGFzazoge1xyXG4gICAgICAgIEtleTogXCJTZWN0VGFza1wiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiU2VjdFRhc2tcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+WtpuS5oOWKn+azlVxyXG4gICAgTGVhcm5Lb25nZmE6IHtcclxuICAgICAgICBLZXk6IFwiTGVhcm5Lb25nZmFcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIkxlYXJuS29uZ2ZhXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v5a2m5Lmg5Yqf5rOVXHJcbiAgICBVcGdyYWRlS29uZ2ZhOiB7XHJcbiAgICAgICAgS2V5OiBcIlVwZ3JhZGVLb25nZmFcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIlVwZ3JhZGVLb25nZmFcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+inkuiJslxyXG4gICAgUGxheWVyTWFpbjoge1xyXG4gICAgICAgIEtleTogXCJQbGF5ZXJNYWluXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIlBsYXllck1haW5cIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/op5LoibLlsZ7mgKdcclxuICAgIFBsYXllckF0dHJpYnV0aW9uOiB7XHJcbiAgICAgICAgS2V5OiBcIlBsYXllckF0dHJpYnV0aW9uXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIlBsYXllckF0dHJpYnV0aW9uXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/lop7liqDlgqjnianooovnqbrpl7RcclxuICAgIEFkZEJhZ051bToge1xyXG4gICAgICAgIEtleTogXCJBZGRCYWdOdW1cIixcclxuICAgICAgICBQa2c6IFwiUGxheWVyXCIsXHJcbiAgICAgICAgQ29tOlwiQWRkQmFnTnVtXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/kv67ngrzluK7liqlcclxuICAgIEN1bHRpdmF0aW9uRWZmaWNpZW5jeToge1xyXG4gICAgICAgIEtleTogXCJDdWx0aXZhdGlvbkVmZmljaWVuY3lcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJDdWx0aXZhdGlvbkVmZmljaWVuY3lcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL0dN5Yqg54mp5ZOBXHJcbiAgICBHbUFkZEJhZ0l0ZW06IHtcclxuICAgICAgICBLZXk6IFwiR21BZGRCYWdJdGVtXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIkdtQWRkQmFnSXRlbVwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+S7memAlOS4u+eVjOmdolxyXG4gICAgUm9hZFRvRGlldHlNYWluOiB7XHJcbiAgICAgICAgS2V5OiBcIlJvYWRUb0RpZXR5TWFpblwiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIlJvYWRUb0RpZXR5TWFpblwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+aImOaWl+i/h+eoi1xyXG4gICAgQmF0dGxlSW5mbzoge1xyXG4gICAgICAgIEtleTogXCJCYXR0bGVJbmZvXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiQmF0dGxlSW5mb1wiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+aJq+iNoeS7memAlFxyXG4gICAgU3dlZXBDaGFwdGVyczoge1xyXG4gICAgICAgIEtleTogXCJTd2VlcENoYXB0ZXJzXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiU3dlZXBDaGFwdGVyc1wiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6ZWH5aaW5aGUXHJcbiAgICBNb25zdGVyVG93ZXI6IHtcclxuICAgICAgICBLZXk6IFwiTW9uc3RlclRvd2VyXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiTW9uc3RlclRvd2VyXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/plYflppbloZTpppbmnYDmppxcclxuICAgIEZpcnN0Qmxvb2RSYW5rOiB7XHJcbiAgICAgICAgS2V5OiBcIkZpcnN0Qmxvb2RSYW5rXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiRmlyc3RCbG9vZFJhbmtcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+S7meWPi+WciFxyXG4gICAgRnJpZW5kQ2lyY2xlOiB7XHJcbiAgICAgICAgS2V5OiBcIkZyaWVuZENpcmNsZVwiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIkZyaWVuZENpcmNsZVwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5LuZ6YCU5qOL55uYXHJcbiAgICBDaGVzc01hcDoge1xyXG4gICAgICAgIEtleTogXCJDaGVzc01hcFwiLFxyXG4gICAgICAgIFBrZzogXCJDaGVzc0JvYXJkXCIsXHJcbiAgICAgICAgQ29tOlwiQ2hlc3NNYXBcIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/ovaznlJ9cclxuICAgIFJlYmlydGg6IHtcclxuICAgICAgICBLZXk6IFwiUmViaXJ0aFwiLFxyXG4gICAgICAgIFBrZzogXCJNYWluTWVudVwiLFxyXG4gICAgICAgIENvbTpcIlJlYmlydGhcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mXqOa0vuiXj+e7j+mYgeWFpeWPo1xyXG4gICAgSmluZ0xpYkVudHJhbmNlOiB7XHJcbiAgICAgICAgS2V5OiBcIkppbmdMaWJFbnRyYW5jZVwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiSmluZ0xpYkVudHJhbmNlXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/pl6jmtL7ol4/nu4/pmIFcclxuICAgIEppbmdMaWI6IHtcclxuICAgICAgICBLZXk6IFwiSmluZ0xpYlwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiSmluZ0xpYlwiXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJQ29uZmlne1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9naW5QYWNrYWdlTG9hZGVkID0gZmFsc2U7ICAgLy/mmK/lkKblt7LliqDovb3nmbvlvZVVSeWMhVxyXG4gICAgXHJcbiAgICAvL+eZu+W9leWKoOi9veeahFVJ5YyFXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgVUlQa2dzID0gW1xyXG4gICAgICAgIFwiSWNvbnNcIixcclxuICAgICAgICBcIlB1YmxpY1wiLFxyXG4gICAgICAgIFwiTWFpbk1lbnVcIixcclxuICAgIF07XHJcblxyXG4gICAgLy/lvq7kv6HlsI/muLjmiI/lrZDljIVcclxuICAgIHN0YXRpYyByZWFkb25seSBTdWJQa2dzID0gW1xyXG4gICAgICAgIFwic3ViTGlic1wiLFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBVSea4suafk+WIhuWxglxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNvcnRpbmdPcmRlciA9IHtcclxuICAgICAgICAvL+S4u+eVjOmdouaMiemSrlxyXG4gICAgICAgIE1haW5VSTogMTAwLFxyXG4gICAgICAgIC8vIOS/oeaBr+WQjOatpVxyXG4gICAgICAgIE1zZ1N5bmM6IDE1MCxcclxuICAgICAgICAvLyDlnLrmma/liqDovb1cclxuICAgICAgICBTY2VuZUxvYWRpbmc6IDIwMCxcclxuICAgICAgICAvLyDmlrDmiYvlvJXlr7xcclxuICAgICAgICBOb3ZpY2VHdWlkZTogMjUwLFxyXG4gICAgICAgIC8vIOaWsOWKn+iDveW8gOWQr1xyXG4gICAgICAgIE5ld0Z1bmN0aW9uT3BlbjogMjYwLFxyXG4gICAgICAgIC8vIOS6uueJqeWvueeZvVxyXG4gICAgICAgIERpYWxvZzogMzAwLFxyXG4gICAgICAgIC8vIOW8ueWHuueql+WPo1xyXG4gICAgICAgIFBvcHVwOiAzNTAsXHJcbiAgICAgICAgLy8g5YWo5bGP5bGV56S6XHJcbiAgICAgICAgRnVsbFNjcmVlblNob3c6IDQ1MCxcclxuICAgICAgICAvLyDnvZHnu5zkv6Hlj7dcclxuICAgICAgICBOZXRTaWduYWw6IDUwMCxcclxuICAgICAgICAvLyDnvZHnu5zlvLnmoYZcclxuICAgICAgICBOZXRFcnJvcjogNTUwLFxyXG4gICAgICAgIC8vIOezu+e7n+W5v+aSrVxyXG4gICAgICAgIFN5c3RlbU1zZzogNjAwLFxyXG4gICAgICAgIC8vIOa2iOaBr+aPkOekulxyXG4gICAgICAgIE1zZ1RpcHM6IDY1MCxcclxuICAgICAgICAvLyDngrnlh7vnibnmlYhcclxuICAgICAgICBDbGlja0VmZmVjdDogNzAwLFxyXG4gICAgICAgIC8vIOacjeWKoeWZqOaXtumXtFxyXG4gICAgICAgIFNlcnZlclRpbWU6IDEwMDAsXHJcbiAgICAgICAgLy8gZ23mjIfku6RcclxuICAgICAgICBHbU9yZGVyOiAxMDAxLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL1NwaW5l6Lev5b6EXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU3BpbmVQYXRoID0ge1xyXG4gICAgICAgIFlhb3lhbzp7XHJcbiAgICAgICAgICAgIExlZnQ6XCJTcGluZS90dXppXCIsXHJcbiAgICAgICAgICAgIFJpZ2h0OlwiUHJlZmFiL3R1emlfMlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgRGljZTpcIlNwaW5lL3NwaW5lX3NhaXppXCIsXHJcbiAgICAgICAgXHJcbiAgICAgICAgTmFuemh1OntcclxuICAgICAgICAgICAgTGVmdDpcIlNwaW5lL25hbnpodVwiLFxyXG4gICAgICAgICAgICBSaWdodDpcIlByZWZhYi9uYW56aHVfMlwiLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFl1c2hlbmd5aTp7XHJcbiAgICAgICAgICAgIExlZnQ6XCJTcGluZS95dXNoZW5neWlcIixcclxuICAgICAgICAgICAgUmlnaHQ6XCJQcmVmYWIveXVzaGVuZ3lpXzJcIixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+WjsOmfs1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNvdW5kUGF0aCA9IHtcclxuICAgICAgICBCdXR0b25DbGljazpcInVpOi8vUHVibGljL+eCueWHu+aMiemSrlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+W9ouixoeWbvuagh+mFjee9rlxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFBvcnRyYWl0UGF0aCA9IHtcclxuICAgICAgICBZYW95YW86J3VpOi8vUHVibGljL+WkreWkrV/lhajouqsnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+Wwj+Wbvuagh+mFjee9rlxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNtYWxsSWNvblBhdGggPSB7XHJcbiAgICAgICAgWWFveWFvOid1aTovL1B1YmxpYy/lpK3lpK3lsI/lpLTlg48nLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU2hhcmVJbWFnZVBhdGggPSB7XHJcbiAgICAgICAgSW52aXRlRnJpZW5kOidodHRwczovL21tb2NnYW1lLnFwaWMuY24vd2VjaGF0Z2FtZS9IQ2xvS1hwWWg0QUlhcjIxaWF2QkhVczFCZ1MzZjR1R3NuWVg1aWJLZHVPaWFyQWRnVFY5R3dKa1N0Uk9QamJyYWtMLzAnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL1NwaW5l5Yqo55S75YiH5o2iXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU3BpbmVTdGF0ZSA9IHtcclxuICAgICAgICBZYW95YW86e1xyXG4gICAgICAgICAgICBSdW46XCJydW5cIixcclxuICAgICAgICAgICAgU3RhbmQ6XCJzdGFuZFwiLFxyXG4gICAgICAgICAgICBJZGxlMTpcImlkbGUxXCIsXHJcbiAgICAgICAgICAgIElkbGUyOlwiaWRsZTJcIixcclxuICAgICAgICAgICAgVG91Y2gxOlwidG91Y2gxXCIsXHJcbiAgICAgICAgICAgIFRvdWNoMjpcInRvdWNoMlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8v5by65Yi25byV5a+8XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgR3VpZGVyTmFtZSA9IHtcclxuICAgICAgICBSb2xlTWVudUd1aWRlOlwiUm9sZU1lbnVHdWlkZVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgRm9udENvbG9yID0ge1xyXG4gICAgICAgIEZpZ2h0UmVjX01lOiAnI0ZGRkYwMCcsXHJcbiAgICB9O1xyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9SaWdpZE9iamVjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vT2JqZWN0UHJveHknO1xyXG5leHBvcnQgKiBmcm9tICcuL09iamVjdFN0YXRlJztcclxuIiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9Db3JlL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCB7IE9iamVjdENvbmZpZyB9IGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0UHJveHkge1xyXG4gICAgc3RhdGljIGNyZWF0ZUhhbmQoKXtcclxuICAgICAgICBsZXQgaGFuZCA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lLmFkZENoaWxkKFxyXG4gICAgICAgICAgICBuZXcgTGF5YS5NZXNoU3ByaXRlM0QoTGF5YS5QcmltaXRpdmVNZXNoLmNyZWF0ZUJveChcclxuICAgICAgICAgICAgICAgIE9iamVjdENvbmZpZy5IQU5EX1NJWkUueCwgXHJcbiAgICAgICAgICAgICAgICBPYmplY3RDb25maWcuSEFORF9TSVpFLnksIFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0Q29uZmlnLkhBTkRfU0laRS56XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKSBhcyBMYXlhLk1lc2hTcHJpdGUzRDtcclxuICAgICAgICB0aGlzLmFkZFBoeXNpY3MoaGFuZCwgT2JqZWN0Q29uZmlnLkhBTkRfU0laRSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVEZXNrKCl7XHJcbiAgICAgICAgbGV0IGRlc2sgPSBNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZS5hZGRDaGlsZChcclxuICAgICAgICAgICAgbmV3IExheWEuTWVzaFNwcml0ZTNEKExheWEuUHJpbWl0aXZlTWVzaC5jcmVhdGVCb3goXHJcbiAgICAgICAgICAgICAgICBPYmplY3RDb25maWcuREVTS19TSVpFLngsIFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0Q29uZmlnLkRFU0tfU0laRS55LCBcclxuICAgICAgICAgICAgICAgIE9iamVjdENvbmZpZy5ERVNLX1NJWkUuelxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICkgYXMgTGF5YS5NZXNoU3ByaXRlM0Q7XHJcbiAgICAgICAgdGhpcy5hZGRQaHlzaWNzKGRlc2ssIE9iamVjdENvbmZpZy5ERVNLX1NJWkUpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzaztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0T2JqKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLlBvb2xUeXBlLkhhbmQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFuYWdlci5Qb29sTWFuYWdlci5nZXRPYmpCeUZ1bmMoQ29uZmlnLlBvb2xUeXBlLkhhbmQsIHRoaXMuY3JlYXRlSGFuZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDb25maWcuUG9vbFR5cGUuRGVzazpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYW5hZ2VyLlBvb2xNYW5hZ2VyLmdldE9iakJ5RnVuYyhDb25maWcuUG9vbFR5cGUuRGVzaywgdGhpcy5jcmVhdGVEZXNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkUGh5c2ljcyh0YXJnZXQ6TGF5YS5TcHJpdGUzRCwgc2l6ZTpMYXlhLlZlY3RvcjMpe1xyXG4gICAgICAgIGlmKCF0YXJnZXQgfHwgIXNpemUpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHJpZ2lkQm9keTpMYXlhLlJpZ2lkYm9keTNEID0gdGFyZ2V0LmFkZENvbXBvbmVudChMYXlhLlJpZ2lkYm9keTNEKTsvL1JpZ2lkYm9keTNE5Y+v5LiOU3RhdGljQ29sbGlkZXLlkoxSaWdpZEJvZHkzROS6p+eUn+eisOaSnlxyXG4gICAgICAgIHJpZ2lkQm9keS5jb2xsaWRlclNoYXBlID0gbmV3IExheWEuQm94Q29sbGlkZXJTaGFwZShzaXplLngsIHNpemUueSwgc2l6ZS56KTtcclxuICAgICAgICByaWdpZEJvZHkuZ3Jhdml0eSA9IExheWEuVmVjdG9yMy5fWkVSTztcclxuICAgICAgICByaWdpZEJvZHkuaXNUcmlnZ2VyID0gdHJ1ZTtcclxuICAgICAgICByaWdpZEJvZHkuaXNLaW5lbWF0aWMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRTY3JpcHQocmlnaWRPYmo6Q29yZS5SaWdpZE9iamVjdCwgc2NyaXB0KXtcclxuICAgICAgICBpZighcmlnaWRPYmogfHwgIXNjcmlwdCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByaWdpZE9iai5PYmouYWRkQ29tcG9uZW50KHNjcmlwdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoYW5nZU1vZGVsKG9sZE1vZGVsOkxheWEuU3ByaXRlM0QsIG9sZFBhdGg6c3RyaW5nLCBuZXdQYXRoOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIW9sZE1vZGVsIHx8ICFvbGRNb2RlbCB8fCAhbmV3UGF0aCB8fCBvbGRQYXRoID09IG5ld1BhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYob2xkTW9kZWwpIHtcclxuICAgICAgICAgICAgTWFuYWdlci5Qb29sTWFuYWdlci5yZWNvdmVyKG9sZFBhdGgsIG9sZE1vZGVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtb2RlbCA9IE1hbmFnZXIuUG9vbE1hbmFnZXIuZ2V0SXRlbShuZXdQYXRoKTtcclxuICAgICAgICBpZihtb2RlbCBpbnN0YW5jZW9mIExheWEuTWVzaFNwcml0ZTNEKXtcclxuICAgICAgICAgICAgb2xkTW9kZWwgPSBtb2RlbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgTWFuYWdlci5TcGF3bk1hbmFnZXIuTG9hZDNkTW9kZWwobmV3UGF0aCwgKG1kYXRhOkNvbmZpZy5Nb2RlbERhdGFTdHJ1Y3QpPT57XHJcbiAgICAgICAgICAgICAgICBvbGRNb2RlbCA9IG1kYXRhLm1zcCBhcyBMYXlhLk1lc2hTcHJpdGUzRDtcclxuICAgICAgICAgICAgfSwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL0NvcmUvQ29yZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdFN0YXRle1xyXG4gICAgU3RhdGU6c3RyaW5nO1xyXG4gICAgT25FbnRlcjpGdW5jdGlvbjtcclxuICAgIE9uVXBkYXRlOkZ1bmN0aW9uO1xyXG4gICAgT25FeGl0OkZ1bmN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOnN0cmluZywgb25VcGRhdGU/OkZ1bmN0aW9uLCBvbkVudGVyPzpGdW5jdGlvbiwgb25FeGl0PzpGdW5jdGlvbil7XHJcbiAgICAgICAgdGhpcy5TdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuT25VcGRhdGUgPSBvblVwZGF0ZTtcclxuICAgICAgICB0aGlzLk9uRW50ZXIgPSBvbkVudGVyO1xyXG4gICAgICAgIHRoaXMuT25FeGl0ID0gb25FeGl0O1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuT25VcGRhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLk9uVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9Db3JlL0NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSaWdpZE9iamVjdHtcclxuICAgIHByaXZhdGUgX21vZGVsUGF0aDpzdHJpbmc7XHJcbiAgICBTdGF0ZUxpc3Q6Q29yZS5PYmplY3RTdGF0ZVtdO1xyXG4gICAgU3RhdGU6TWFuYWdlci5TdGF0ZUJhc2U7XHJcbiAgICBPYmo6TGF5YS5NZXNoU3ByaXRlM0Q7XHJcbiAgICBSaWdpZDNEOkxheWEuUmlnaWRib2R5M0Q7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob2JqOkxheWEuTWVzaFNwcml0ZTNELCAuLi5zdGF0ZXM6Q29yZS5PYmplY3RTdGF0ZVtdKXtcclxuICAgICAgICB0aGlzLk9iaiA9IG9iajtcclxuICAgICAgICB0aGlzLlN0YXRlID0gbmV3IE1hbmFnZXIuU3RhdGVCYXNlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U3RhdGVMaXN0KC4uLnN0YXRlcyk7XHJcbiAgICAgICAgdGhpcy5SaWdpZDNEID0gb2JqLmdldENvbXBvbmVudChMYXlhLlJpZ2lkYm9keTNEKTtcclxuICAgICAgICBpZighdGhpcy5SaWdpZDNEKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJpZ2lkIE9iamVjdCBtaXNzIHJpZ2lkYm9keTNkIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFBvc2l0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuT2JqLnRyYW5zZm9ybS5wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ3VyU3RhdGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5TdGF0ZS5jdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTY3JpcHQoc2NyaXB0KXtcclxuICAgICAgICByZXR1cm4gdGhpcy5PYmouZ2V0Q29tcG9uZW50KHNjcmlwdCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU2NyaXB0KHNjcmlwdCl7XHJcbiAgICAgICAgaWYoIXNjcmlwdCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLk9iai5hZGRDb21wb25lbnQoc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VNb2RlbChwYXRoOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXBhdGggfHwgdGhpcy5fbW9kZWxQYXRoID09IHBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgQ29yZS5PYmplY3RQcm94eS5jaGFuZ2VNb2RlbCh0aGlzLk9iaiwgdGhpcy5fbW9kZWxQYXRoLCBwYXRoKTtcclxuICAgICAgICB0aGlzLl9tb2RlbFBhdGggPSBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZU9iaihrZXk6c3RyaW5nKXtcclxuICAgICAgICBNYW5hZ2VyLlBvb2xNYW5hZ2VyLnJlY292ZXIoa2V5LCB0aGlzLk9iaik7XHJcbiAgICAgICAgdGhpcy5PYmogPSBDb3JlLk9iamVjdFByb3h5LmdldE9iaihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHBvczpMYXlhLlZlY3RvcjMpe1xyXG4gICAgICAgIGlmKHRoaXMuT2JqKVxyXG4gICAgICAgICAgICB0aGlzLk9iai50cmFuc2Zvcm0ucG9zaXRpb24gPSBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFN0YXRlTGlzdCguLi5zdGF0ZXM6Q29yZS5PYmplY3RTdGF0ZVtdKXtcclxuICAgICAgICB0aGlzLlN0YXRlTGlzdCA9IHN0YXRlcztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTdGF0ZShzdGF0ZTpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCFzdGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLlN0YXRlLmNoYW5nZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZSgpe1xyXG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHRoaXMuU3RhdGVMaXN0KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLlN0YXRlTGlzdC5zb21lKHN0PT57XHJcbiAgICAgICAgICAgIGlmKHN0LlN0YXRlID09IHRoaXMuQ3VyU3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgc3QuVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9EYXRhQmFzZSc7XHJcbiIsImltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgR0V2ZW50IGZyb20gXCIuLi9Db21tb24vR0V2ZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cFJlcWJvZHlCYXNle1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIE1vZHVsZUNvZGU6IG51bWJlcjtcclxuICAgIFJlcUNvZGU6IG51bWJlcjtcclxuICAgIFNlc3Npb246IHN0cmluZztcclxuICAgIEFjY291bnRLZXk6IHN0cmluZztcclxuICAgIFJlcURhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RDb2RlOm51bWJlciwgcmVxQ29kZTpudW1iZXIsIHNlc3Npb24/OnN0cmluZywgYWNjTmFtZT86c3RyaW5nLCByZXFkYXRhPyl7XHJcbiAgICAgICAgaWYodHlwZW9mKHJlcWRhdGEpID09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAvL+WmguW3sui9rOaNouWImei9rOWbnkpTT05cclxuICAgICAgICAgICAgcmVxZGF0YSA9IEpTT04ucGFyc2UocmVxZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLk1vZHVsZUNvZGUgPSBtb2RDb2RlO1xyXG4gICAgICAgIHRoaXMuUmVxQ29kZSA9IHJlcUNvZGU7XHJcbiAgICAgICAgdGhpcy5TZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLkFjY291bnRLZXkgPSBhY2NOYW1lO1xyXG4gICAgICAgIHRoaXMuUmVxRGF0YSA9IHJlcWRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRhU3RydWN0IGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX05ldE1ncjpNYW5hZ2VyLkh0dHBNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3JlcWtleXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cclxuICAgIHByaXZhdGUgX2h0dHBNZ3I6TWFuYWdlci5IdHRwTWFuYWdlcjtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgcmVxQm9keTpIdHRwUmVxYm9keUJhc2U7XHJcblxyXG4gICAgc3RhdGljIGlzUmVzcG9uc2VkOmJvb2xlYW47XHJcbiAgICBzdGF0aWMgRGljZU51bTpudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIFNlbmRSZXEocmVxRGF0YT8pe1xyXG4gICAgICAgIHRoaXMucmVxQm9keS5SZXFEYXRhID0gcmVxRGF0YTtcclxuICAgICAgICB0aGlzLl9OZXRNZ3IgPSBuZXcgTWFuYWdlci5IdHRwTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuX05ldE1nci5Db25uZWN0KCcnLCB0aGlzLnJlcUJvZHksIHRoaXMub25SZXNwb25zZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0IFJlcUJvZHkoYm9keSl7XHJcbiAgICAgICAgaWYoIXRoaXMucmVxQm9keSlcclxuICAgICAgICAgICAgdGhpcy5yZXFCb2R5ID0gYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0IERhdGEoZGF0YSl7fVxyXG5cclxuICAgIHN0YXRpYyBvbkNvbm5lY3RFbmQoZGF0YTpDb25maWcuUmVzcERhdGFTdHJ1Y3Qpe31cclxuXHJcbiAgICBzdGF0aWMgb25SZXNwb25zZShkYXRhOkNvbmZpZy5SZXNwRGF0YVN0cnVjdCl7XHJcbiAgICAgICAgaWYoZGF0YSAmJiBkYXRhLlJlc3BEYXRhICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLkRhdGEgPSBkYXRhLlJlc3BEYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mihOeVmeaOpeWPo++8jOmBv+WFjeWQjuerr+ayoeaciei/lOWbnuaVsOaNrlxyXG4gICAgICAgIHRoaXMub25Db25uZWN0RW5kKGRhdGEpO1xyXG4gICAgICAgIHRoaXMucmVxQm9keS5SZXFEYXRhID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IE5ldE1ncigpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9OZXRNZ3Ipe1xyXG4gICAgICAgICAgICB0aGlzLl9OZXRNZ3IgPSBuZXcgTWFuYWdlci5IdHRwTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX05ldE1ncjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ29ubmVjdChyZXFrZXk6c3RyaW5nLCByZXFib2R5Okh0dHBSZXFib2R5QmFzZSwgY2FsbGJhY2s/OkZ1bmN0aW9uLCBpc1Nob3dMb2FkaW5nPywgSXNHbT86Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5OZXRNZ3IuQ29ubmVjdChyZXFrZXksIHJlcWJvZHksIHRoaXMuT25IdHRwUmVxdWVzdENvbXBsZXRlLmJpbmQodGhpcyksIGlzU2hvd0xvYWRpbmcsIElzR20pO1xyXG4gICAgICAgIHRoaXMuX3JlcWtleXMucHVzaChyZXFrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBPbkh0dHBSZXF1ZXN0Q29tcGxldGUoZGF0YTpDb25maWcuUmVzcERhdGFTdHJ1Y3QsIHJlcWtleTpzdHJpbmcsIHJlcURhdGEpe1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERldlJlcUJvZHkgZXh0ZW5kcyBIdHRwUmVxYm9keUJhc2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQmFzZUJvZHlJbml0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQm9keUluaXRlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL+ivt+axguS9k1xyXG4gICAgc3RhdGljIENvbmZpZ0JvZHk6SHR0cFJlcWJvZHlCYXNlOyAgIC8v6YWN572uXHJcbiAgICBzdGF0aWMgTG9naW5Cb2R5Okh0dHBSZXFib2R5QmFzZTsgICAgLy/nmbvlvZVcclxuICAgIHN0YXRpYyBVcGdyYWRlQm9keTpIdHRwUmVxYm9keUJhc2U7ICAgIC8v5Y2H6Zi2XHJcbiAgICBzdGF0aWMgQWRvYmVVaUluZm9Cb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOWxleekulxyXG4gICAgc3RhdGljIEFkb2JlSGlyZVdvcmtlckJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc5oub5Yuf5LuZ5LuGXHJcbiAgICBzdGF0aWMgQWRvYmVBZGRXb3JrZXJCb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOa3u+WKoOW3peS9nOS7meS7hlxyXG4gICAgc3RhdGljIEFkb2JlUmVkdWNlV29ya2VyQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzlh4/lsJHlt6XkvZzku5nku4ZcclxuICAgIHN0YXRpYyBBZG9iZVVwU3RvbmVCb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOeBteefs+WNh+e6p1xyXG4gICAgc3RhdGljIEFkb2JlVXBGb29kQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzpo5/nianljYfnuqdcclxuICAgIHN0YXRpYyBBZG9iZVVwV29vZEJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc5pyo5p2Q5Y2H57qnXHJcbiAgICBzdGF0aWMgQWRvYmVVcElyb25Cb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOmZqOmTgeWNh+e6p1xyXG5cclxuICAgIHN0YXRpYyBnZXQgaXNJbml0ZWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNCb2R5SW5pdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vZENvZGU6bnVtYmVyLCByZXFDb2RlOm51bWJlciwgcmVxRGF0YT8pe1xyXG4gICAgICAgIGlmKCFMb2dpbkRhdGEuU2Vzc2lvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQbHMgbG9naW4gZmlyc3QnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN1cGVyKG1vZENvZGUsIHJlcUNvZGUsIExvZ2luRGF0YS5TZXNzaW9uLCBMb2dpbkRhdGEuQWNjb3VudEtleSwgcmVxRGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgRGFtb25JbmZvVHlwZSA9IHtcclxuICAgIFwiQ2hhbGxlbmdlTGV2ZWxcIjogbnVtYmVyLFxyXG59XHJcblxyXG4vL+eOqeWutuaVsOaNrlxyXG5leHBvcnQgY2xhc3MgUGxheWVyRGF0YSB7XHJcbiAgICBzdGF0aWMgTmlrZU5hbWU6c3RyaW5nO1xyXG4gICAgc3RhdGljIEF2YXRhcjpzdHJpbmc7XHJcbiAgICBzdGF0aWMgUG9pbnQgPSAwO1xyXG5cclxuICAgIHN0YXRpYyBzZXQgRGF0YShkYXRhKXtcclxuICAgICAgICBpZihudWxsICE9IGRhdGEuTmlja05hbWUpe1xyXG4gICAgICAgICAgICB0aGlzLk5pa2VOYW1lID0gZGF0YS5OaWNrTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG51bGwgIT0gZGF0YS5BdmF0YXIpe1xyXG4gICAgICAgICAgICB0aGlzLkF2YXRhciA9IGRhdGEuQXZhdGFyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR0V2ZW50LkRpc3BhdGNoKENvbW1vbi5EYXRhUGxheWVyRWlkLlJlZnJlc2hlZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5YiG5Lqr6K+t5Y+lXHJcbmludGVyZmFjZSBTaGFyZURldGFpbCB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBTaGFyZVR5cGU6bnVtYmVyOyAgICAgICAgICAgIC8v5YiG5Lqr57G75Z6LMeaYjuS/oeeJh1xyXG4gICAgU2hhcmVXb3JkOnN0cmluZyAgLy/liIbkuqvor63lj6VcclxufVxyXG5cclxuZXhwb3J0IGxldCBTaGFyZVdvcmQgPSB7XHJcbiAgICBcIkNhcmRXb3Jkc1wiOiBuZXcgQXJyYXk8U2hhcmVEZXRhaWw+KCksICAgICAgICAvL+aYjuS/oeeJh+WIhuS6q+ivreWPpVxyXG4gICAgXCJIYW1zdGVyV29yZHNcIjogbmV3IEFycmF5PFNoYXJlRGV0YWlsPigpLCAgICAgLy/miZPlnLDpvKDliIbkuqvor63lj6VcclxuICAgIFwiQ29pbldvcmRzXCI6IG5ldyBBcnJheTxTaGFyZURldGFpbD4oKSwgICAgICAgIC8v5o6l6YeR5biB5YiG5Lqr6K+t5Y+lXHJcbiAgICBcIk90aGVyV29yZHNcIjogbmV3IEFycmF5PFNoYXJlRGV0YWlsPigpICAgICAgICAvL+WFtuS7luWIhuS6q+ivreWPpVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0U2hhcmVXb3JkKHNoYXJlVHlwZT8pe1xyXG4gICAgbGV0IHJhbmQgPSAwO1xyXG4gICAgc3dpdGNoIChzaGFyZVR5cGUpIHtcclxuICAgICAgICBjYXNlIENvbmZpZy5TaGFyZVdvcmRFbnVtLkNhcmRXb3JkczpcclxuICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNoYXJlV29yZC5DYXJkV29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFNoYXJlV29yZC5DYXJkV29yZHNbcmFuZF0uU2hhcmVXb3JkO1xyXG4gICAgXHJcbiAgICAgICAgY2FzZSBDb25maWcuU2hhcmVXb3JkRW51bS5IYW1zdGVyV29yZHM6XHJcbiAgICAgICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTaGFyZVdvcmQuSGFtc3RlcldvcmRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTaGFyZVdvcmQuSGFtc3RlcldvcmRzW3JhbmRdLlNoYXJlV29yZDtcclxuXHJcbiAgICAgICAgY2FzZSBDb25maWcuU2hhcmVXb3JkRW51bS5Db2luV29yZHM6XHJcbiAgICAgICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTaGFyZVdvcmQuQ29pbldvcmRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTaGFyZVdvcmQuQ29pbldvcmRzW3JhbmRdLlNoYXJlV29yZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNoYXJlV29yZC5PdGhlcldvcmRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTaGFyZVdvcmQuT3RoZXJXb3Jkc1tyYW5kXS5TaGFyZVdvcmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6YWN572u5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBDb25maWdEYXRhIGV4dGVuZHMgRGF0YVN0cnVjdHtcclxuICAgIHN0YXRpYyBzZXQgRGF0YShyZXNwX2RhdGE6Q29uZmlnLkNvbmZpZ0RhdGFQYXJhbVtdKXtcclxuICAgICAgICBzZXRDb25maWdEYXRhKHJlc3BfZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbmZpZ0RhdGEocmVzcF9kYXRhOkNvbmZpZy5Db25maWdEYXRhUGFyYW1bXSl7XHJcbiAgICBjb25zb2xlLmxvZygn6YWN572u5pWw5o2u77yaJywgcmVzcF9kYXRhKTtcclxuICAgIGlmKCFyZXNwX2RhdGEpIHJldHVybjtcclxuXHJcbiAgICBDb25maWcuRGF0YUNvbmZpZy5pbnN0YW5jZS5zYXZlQ29uZmlnVmVyc2lvbihyZXNwX2RhdGEpO1xyXG4gICAgZm9yKGxldCBpIGluIHJlc3BfZGF0YSl7XHJcbiAgICAgICAgaWYocmVzcF9kYXRhW2ldKXtcclxuICAgICAgICAgICAgQ29uZmlnLkRhdGFDb25maWcuaW5zdGFuY2Uuc3RvcmVDb25maWcocmVzcF9kYXRhW2ldLlRhYmxlSWQsIHJlc3BfZGF0YVtpXS5EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ29uZmlnLkRhdGFDb25maWcuSXNDb25maWdMb2FkZWQgPSB0cnVlO1xyXG4gICAgR0V2ZW50LkRpc3BhdGNoKENvbW1vbi5TY2VuZUxvZ2luRWlkLkNvbmZpZ0xvYWRlZCk7XHJcbn1cclxuXHJcbi8v55m75b2V5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkRhdGEgZXh0ZW5kcyBEYXRhU3RydWN0e1xyXG4gICAgc3RhdGljIFNlc3Npb246c3RyaW5nO1xyXG4gICAgc3RhdGljIEFjY291bnRLZXk6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzTG9naW5lZCA9IGZhbHNlOyAgLy/mmK/lkKblt7LnmbvlvZVcclxuXHJcbiAgICBzdGF0aWMgZ2V0IElzTG9naW5lZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0xvZ2luZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldCBEYXRhKGRhdGE6Q29uZmlnLkxvZ2luUmVzcERhdGFTdHJ1Y3Qpe1xyXG4gICAgICAgIGlmKGRhdGEuQWNjb3VudEJhc2VJbmZvKXtcclxuICAgICAgICAgICAgdGhpcy5TZXNzaW9uID0gZGF0YS5BY2NvdW50QmFzZUluZm8uVmVyaWZ5U2Vzc2lvbjtcclxuICAgICAgICAgICAgdGhpcy5BY2NvdW50S2V5ID0gZGF0YS5BY2NvdW50QmFzZUluZm8uQWNjb3VudEtleTtcclxuICAgICAgICAgICAgUGxheWVyRGF0YS5EYXRhID0gZGF0YS5BY2NvdW50QmFzZUluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihkYXRhLlhpdXdlaUluZm8pe1xyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhLkRhdGEgPSBkYXRhLlhpdXdlaUluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5faXNMb2dpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5faXNMb2dpbmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WNh+e6p+aVsOaNrlxyXG5leHBvcnQgY2xhc3MgVXBncmFkZURhdGEgZXh0ZW5kcyBEYXRhU3RydWN0e1xyXG4gICAgc3RhdGljIHNldCBEYXRhKHJlc3BEYXRhKXtcclxuICAgICAgICBpZihyZXNwRGF0YS5YaXV3ZWlJbmZvKXtcclxuICAgICAgICAgICAgUGxheWVyRGF0YS5EYXRhID0gcmVzcERhdGEuWGl1d2VpSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uQ2hhcmFjdGVyQ3VsdGl2YXRpb25FaWQuVXBncmFkZSwgcmVzcERhdGEuVXBPayk7XHJcbiAgICB9XHJcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj03NTA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj0xMzM0O1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJ2ZXJ0aWNhbFwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuXHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiXHJcbmltcG9ydCB7IERhdGFDb25maWcgfSBmcm9tIFwiLi9Db25maWcvRGF0YUNvbmZpZ1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSAnLi9EYXRhL0RhdGEnO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyBMb2dpYyBmcm9tIFwiLi9Mb2dpYy9Mb2dpY1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSAgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG5cdHByb3RlY3RlZCBzdGF0aWMgX2luc3Q6R2FtZVNjZW5lO1xyXG5cdHB1YmxpYyBsb2FkaW5nVWlQYWNrYWdlOnN0cmluZztcclxuXHJcblx0c3RhdGljIGdldCBpbnN0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faW5zdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbkF3YWtlKCl7XHJcblx0XHRHYW1lU2NlbmUuX2luc3QgPSB0aGlzO1xyXG5cdFx0dGhpcy5vd25lci5hZGRDb21wb25lbnQoTG9naWMuR3JhYkxvZ2ljKVxyXG5cclxuXHRcdC8vIHRoaXMuaW5pdCgpO1xyXG5cdFx0Ly8gdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkNvbmZpZ0xvYWRlZCwgdGhpcy5vbkNvbmZpZ0xvYWRlZCk7XHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2VydmljZUNob29zZWQsIHRoaXMub25WZXJzaW9uQ2hlY2tlZCk7XHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuTG9naW5TdWNjZXNzLCB0aGlzLm9uTG9naW5lZCk7XHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2ltUHJvZ3Jlc3NFbmQsIHRoaXMub3Blbk1haW5VaSk7XHJcblx0fVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCl7XHJcblx0XHQvLyBDb21tb24uSnNDYWxsSmF2YShcImRlbW8uSlNCcmlkZ2VcIiwgXCJ0ZXN0U3RyaW5nXCIsIFwiSGVsbG8gYmFieSFcIik7XHJcblx0XHQvL+a4uOaIj+W8gOWPkeeJiOacrFxyXG5cdFx0TWFuYWdlci5WZXJzaW9uTWFuYWdlci5WZXJzaW9uID0gQ29uZmlnLlZlcnNpb25Db25maWcuRGV2ZWxvcDtcclxuXHJcblx0XHQvL+WKqOaAgeWKoOi9vVxyXG5cdFx0aWYoTGF5YS5Ccm93c2VyLm9uTWluaUdhbWUpe1xyXG5cdFx0XHRMYXlhLlVSTC5iYXNlUGF0aCA9IFwiaHR0cHM6Ly83MDYubGlnaHRwYXcuY24vaDVjL3Jlc0NhY2hlL0RpZXR5Um9hZC9cIjtcdFxyXG5cdFx0XHQvLyBMYXlhLlVSTC5iYXNlUGF0aCA9IFwiaHR0cHM6Ly9zMy5jbi1ub3J0aHdlc3QtMS5hbWF6b25hd3MuY29tLmNuL2g1Y2xpZW50L0RlbW9zL0RyZWFtQ2hlc3NcIjtcclxuXHRcdFx0TGF5YS5NaW5pQWRwdGVyLm5hdGl2ZWZpbGVzID0gIFtcclxuXHRcdFx0XHRcImxpYnNcIixcclxuXHRcdFx0XHRcInJlcy9jb25maWdcIixcclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5pdEZhaXJ5Z3VpKCk7XHJcblx0XHR0aGlzLmxvYWRMb2dpblVpUmVzKCk7XHJcblx0XHQvLyBDb21tb24ubG9hZEFsbFN1YnBhY2thZ2VzKHRoaXMsIHRoaXMubG9hZExvZ2luVWlSZXMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0RmFpcnlndWkoKXtcclxuXHRcdGZndWkuVUlDb25maWcucGFja2FnZUZpbGVFeHRlbnNpb24gPSBcInR4dFwiO1xyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZChmZ3VpLkdSb290Lmluc3QuZGlzcGxheU9iamVjdCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRMb2dpblVpUmVzKCl7XHJcblx0XHRDb21tb24uUmVzb3VyY2UubG9hZChDb25maWcubG9naW5SZXNVcmxzLCB0aGlzLCB0aGlzLm9uTG9naW5nUmVzTG9hZGVkKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Mb2dpbmdSZXNMb2FkZWQoKXtcclxuXHRcdHRoaXMucHJlTG9naW4oKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9hZFJlcygpe1xyXG5cdFx0Q29tbW9uLlJlc291cmNlLmxvYWQoQ29uZmlnLnVybHMsIHRoaXMsIHRoaXMub25SZXNMb2FkZWQsIHRoaXMub25Mb2FkaW5nKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Mb2FkaW5nKHByb2dyZXNzOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5Yqg6L296L+b5bqmOiBcIiArIHByb2dyZXNzKTtcclxuXHRcdC8vIE1hbmFnZXIuTG9hZGluZ1Byb2dyZXNzTWFuYWdlci5JbnN0LnNob3dVaVByb2dyZXNzKHByb2dyZXNzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25SZXNMb2FkZWQoaW5mbyl7XHJcblx0XHRpZighaW5mbyl7XHJcblx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKCdMb2FkIGZhaXJ5Z3VpIHBhY2thZ2UgZmFpbCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8v5YWs55So5YyFXHJcblx0XHRDb25maWcuVUlDb25maWcuVUlQa2dzLmZvckVhY2gocGtnPT57XHJcblx0XHRcdENvbW1vbi5SZXNvdXJjZS5hZGRVaVBhY2thZ2UocGtnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdENvbmZpZy5VSUNvbmZpZy5Mb2dpblBhY2thZ2VMb2FkZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUxvZ2luRWlkLlBhY2thZ2VMb2FkZWQpO1xyXG5cdFx0dGhpcy5sb2FkQ29uZmlnKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByZUxvZ2luKCl7XHJcblx0XHR0aGlzLm9wZW5Mb2dpblVJKCk7XHJcblx0XHR0aGlzLmNoZWNrVmVyc2lvbigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjaGVja1ZlcnNpb24oKXtcclxuXHRcdHN3aXRjaCAoTWFuYWdlci5WZXJzaW9uTWFuYWdlci5WZXJzaW9uKSB7XHJcblx0XHRcdGNhc2UgQ29uZmlnLlZlcnNpb25Db25maWcuRGV2ZWxvcDpcclxuXHRcdFx0XHR0aGlzLm9wZW5DaG9vc2VTZXJ2aWNlVWkoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBDb25maWcuVmVyc2lvbkNvbmZpZy5SZWxlYXNlOlxyXG5cdFx0XHRcdC8v5a+55aSW54mI5pys55m75b2V5aSW572RXHJcblx0XHRcdFx0Q29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID0gQ29uZmlnLk5ldENvbmZpZy5IdHRwUmVxdWVzdFVybDtcclxuXHJcblx0XHRcdFx0Ly8gaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcblx0XHRcdFx0Ly8gXHRXeFV0aWxzLkxvZ2luKHRydWUpO1xyXG5cdFx0XHRcdC8vIH1lbHNle1xyXG5cdFx0XHRcdC8vIFx0dGhpcy5vblZlcnNpb25DaGVja2VkKCk7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblZlcnNpb25DaGVja2VkKCl7XHJcblx0XHR0aGlzLmxvYWRSZXMoKTtcclxuXHRcdC8vIHRoaXMubG9naW5HYW1lKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9wZW5Mb2dpblVJKCl7XHJcblx0XHRNYW5hZ2VyLkxvYWRpbmdQcm9ncmVzc01hbmFnZXIuSW5zdC5zaG93VWlQcm9ncmVzcyg1KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb3BlbkNob29zZVNlcnZpY2VVaSgpe1xyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbmZpZy5WaWV3S2l0LkNob29zZVNlcnZpY2UuS2V5KTtcclxuXHR9XHJcblxyXG5cdGxvYWRDb25maWcoKXtcclxuXHRcdC8v5ouJ5Y+W6YWN572uXHJcblx0XHQvLyBEYXRhLkNvbmZpZ0RhdGEuU2VuZFJlcShDb25maWcuRGF0YUNvbmZpZy5sb2NhbENvbmZpZ3MpO1xyXG5cdFx0RGF0YS5Db25maWdEYXRhLlNlbmRSZXEoW10pO1xyXG5cclxuXHRcdC8v5ouJ5Y+W5pys5Zyw6YWN572u77yM55uu5YmN55Sx5ZCO56uv5Y+R6YCB77yM5pqC5byD55SoXHJcblx0XHQvLyBEYXRhQ29uZmlnLmluc3RhbmNlLmluaXRDb25maWcodGhpcy5jcmVhdGUyZFNjZW5lLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkNvbmZpZ0xvYWRlZCgpe1xyXG5cdFx0dGhpcy5sb2dpbkdhbWUoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9naW5HYW1lKCkge1xyXG5cdFx0aWYoQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID09IENvbmZpZy5OZXRDb25maWcuTG9jYWxSZXF1ZXN0VXJsKXtcclxuXHRcdFx0dGhpcy50ZXN0TG9naW4oKTtcclxuXHRcdFx0Ly8gV3hVdGlscy5Mb2dpbih0cnVlKTtcclxuXHRcdH1lbHNlIGlmKENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9PSBDb25maWcuTmV0Q29uZmlnLkxvY2FsV2VjaGF0UmVxdWVzdFVybCAmJiBDb21tb24uaXNPbldlaXhpbigpKXtcclxuXHRcdFx0Ly8gV3hVdGlscy5Mb2dpbih0cnVlKTtcclxuXHRcdH1lbHNlIGlmKENvbW1vbi5pc09uV2VpeGluKCkpe1xyXG5cdFx0XHQvLyBXeFV0aWxzLkxvZ2luKHRydWUpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMudGVzdExvZ2luKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0ZXN0TG9naW4oKXtcclxuXHRcdGxldCBhY2M6c3RyaW5nO1xyXG5cdFx0bGV0IHRlbXBOYW1lID0gQ29uZmlnLk5ldENvbmZpZy5UZW1wTmFtZTtcclxuXHRcdGlmKHRlbXBOYW1lKXtcclxuXHRcdFx0YWNjID0gdGVtcE5hbWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Ly/pmo/mnLrluJDlj7fnmbvlvZXvvIzmlrnkvr/mtYvor5VcclxuXHRcdFx0YWNjID0gXCJ0ZW1wXCIgKyBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCByZXFkYXRhID0gbmV3IENvbmZpZy5Mb2dpblJlcURhdGEoYWNjKTtcclxuXHRcdERhdGEuTG9naW5EYXRhLlNlbmRSZXEocmVxZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uTG9naW5lZCgpe1xyXG5cdFx0dGhpcy5vcGVuTWFpblVpKCk7XHJcblx0fVxyXG5cclxuXHRvcGVuTWFpblVpKCl7XHJcblx0XHQvLyBpZighQ29uZmlnLlVJQ29uZmlnLkxvZ2luUGFja2FnZUxvYWRlZCB8fCAhQ29uZmlnLkRhdGFDb25maWcuSXNDb25maWdMb2FkZWQpIHtcclxuXHRcdC8vIFx0TGF5YS50aW1lci5vbmNlKDUwMCwgdGhpcywgdGhpcy5vcGVuTWFpblVpKTtcclxuXHRcdC8vIFx0cmV0dXJuO1xyXG5cdFx0Ly8gfTtcclxuXHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlNjZW5lRW50ZXJFaWQuTWFpbk1lbnUpO1xyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbmZpZy5WaWV3S2l0Lk1haW5NZW51LktleSk7XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uU2NyaXB0QmFzZSBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlciB7XHJcblx0cHVibGljIGtpbmVtYXRpY1Nwcml0ZTpMYXlhLlNwcml0ZTNEO1xyXG5cdHByb3RlY3RlZCBfaXNIaXQgPSBmYWxzZTtcclxuXHJcblx0Z2V0IElzSGl0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faXNIaXQ7XHJcblx0fVxyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyU3RhdHVzKCl7XHJcblx0XHR0aGlzLl9pc0hpdCA9IGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyRW50ZXIob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcdGlmIChvdGhlci5vd25lciA9PT0gdGhpcy5raW5lbWF0aWNTcHJpdGUpe1xyXG5cdFx0XHR0aGlzLl9pc0hpdCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJTdGF5KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJFeGl0KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvbkVudGVyKGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0XHRpZiAoY29sbGlzaW9uLm90aGVyLm93bmVyID09PSB0aGlzLmtpbmVtYXRpY1Nwcml0ZSl7XHJcblx0XHRcdHRoaXMuX2lzSGl0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uU3RheShjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25FeGl0KGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0fVxyXG5cclxufSIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlc2tDb2xsaXNpb25TY3JpcHQgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG5cdHB1YmxpYyBraW5lbWF0aWNTcHJpdGU6TGF5YS5TcHJpdGUzRDtcclxuXHRfaXNIaXQgPSBmYWxzZTtcclxuXHJcblx0Z2V0IElzSGl0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faXNIaXQ7XHJcblx0fVxyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyU3RhdHVzKCl7XHJcblx0XHR0aGlzLl9pc0hpdCA9IGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyRW50ZXIob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcdGlmIChvdGhlci5vd25lciA9PT0gdGhpcy5raW5lbWF0aWNTcHJpdGUpe1xyXG5cdFx0XHR0aGlzLl9pc0hpdCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJTdGF5KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJFeGl0KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvbkVudGVyKGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0XHRpZiAoY29sbGlzaW9uLm90aGVyLm93bmVyID09PSB0aGlzLmtpbmVtYXRpY1Nwcml0ZSl7XHJcblx0XHRcdHRoaXMuX2lzSGl0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uU3RheShjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25FeGl0KGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0fVxyXG5cclxufSIsImltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vQ29yZS9Db3JlXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgTG9naWMgZnJvbSBcIi4vTG9naWNcIjtcclxuXHJcbmxldCBrbm9ja190aW1lID0gMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFiTG9naWMgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG4gICAgSXNJbml0ZWQgPSBmYWxzZTtcclxuICAgIFZkaXIgPSBuZXcgTGF5YS5WZWN0b3IzKCk7XHJcbiAgICBEZXNrUG9zaXRpb24gPSBuZXcgTGF5YS5WZWN0b3IzKCk7XHJcbiAgICBHU2NlbmU6TGF5YS5TY2VuZTNEO1xyXG4gICAgSGFuZFN0YXRlOnN0cmluZztcclxuICAgIERlc2tDbGFzczpDb3JlLlJpZ2lkT2JqZWN0O1xyXG4gICAgSGFuZENsYXNzOkNvcmUuUmlnaWRPYmplY3Q7XHJcbiAgICBkZXNrU2NyaXB0OkxvZ2ljLkRlc2tDb2xsaXNpb25TY3JpcHQ7XHJcbiAgICBoYW5kU2NyaXB0OkxvZ2ljLkhhbmRDb2xsaXNpb25TY3JpcHQ7XHJcbiAgICBwcml2YXRlIHRpbWVMaW5lOkxheWEuVGltZUxpbmUgPSBuZXcgTGF5YS5UaW1lTGluZSgpO1xyXG5cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICB0aGlzLkdTY2VuZSA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lIGFzIExheWEuU2NlbmUzRDtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcyA9IG5ldyBDb3JlLlJpZ2lkT2JqZWN0KFxyXG4gICAgICAgICAgICBDb3JlLk9iamVjdFByb3h5LmdldE9iaihDb25maWcuUG9vbFR5cGUuRGVzayksXHJcbiAgICAgICAgICAgIG5ldyBDb3JlLk9iamVjdFN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0ZPUldBUkQsIHRoaXMuZGVza0Rvd24uYmluZCh0aGlzKSksXHJcbiAgICAgICAgICAgIG5ldyBDb3JlLk9iamVjdFN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5ERVNLX0xFQVZFLCB0aGlzLmRlc2tMZWF2ZS5iaW5kKHRoaXMpKSxcclxuICAgICAgICAgICAgbmV3IENvcmUuT2JqZWN0U3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLkRFU0tfRU5URVIsIHRoaXMuZGVza0VudGVyLmJpbmQodGhpcykpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3Muc2V0UG9zaXRpb24oQ29uZmlnLk9iamVjdENvbmZpZy5ERVNLX1BPUyk7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MgPSBuZXcgQ29yZS5SaWdpZE9iamVjdChcclxuICAgICAgICAgICAgQ29yZS5PYmplY3RQcm94eS5nZXRPYmooQ29uZmlnLlBvb2xUeXBlLkhhbmQpLFxyXG4gICAgICAgICAgICBuZXcgQ29yZS5PYmplY3RTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9GT1JXQVJELCB0aGlzLmhhbmRGb3J3YXJkLmJpbmQodGhpcykpLFxyXG4gICAgICAgICAgICBuZXcgQ29yZS5PYmplY3RTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9CQUNLLCB0aGlzLmhhbmRCYWNrLmJpbmQodGhpcykpLFxyXG4gICAgICAgICAgICBuZXcgQ29yZS5PYmplY3RTdGF0ZShDb25maWcuU3RhdGVDb25maWcuQkFDS19QQVNTRUQsIHRoaXMuaGFuZEJhY2suYmluZCh0aGlzKSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5zZXRQb3NpdGlvbihDb25maWcuT2JqZWN0Q29uZmlnLkhBTkRfUE9TKTtcclxuICAgICAgICB0aGlzLmFkZENvbGxpc2lvblNjcmlwdCgpO1xyXG4gICAgICAgIC8vIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5rbm9ja09uY2UpO1xyXG4gICAgICAgIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5tb3ZlSGFuZCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50LkRPVUJMRV9DTElDSywgdGhpcywgdGhpcy5yZXN0YXJ0KTtcclxuXHJcbiAgICAgICAgdGhpcy5Jc0luaXRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZXNldFZlYygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGltZXJMaW5lKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGVzaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENvbGxpc2lvblNjcmlwdCgpe1xyXG4gICAgICAgIHRoaXMuZGVza1NjcmlwdCA9IHRoaXMuRGVza0NsYXNzLmFkZFNjcmlwdChMb2dpYy5EZXNrQ29sbGlzaW9uU2NyaXB0KSBhcyBMb2dpYy5EZXNrQ29sbGlzaW9uU2NyaXB0O1xyXG4gICAgICAgIHRoaXMuZGVza1NjcmlwdC5raW5lbWF0aWNTcHJpdGUgPSB0aGlzLkhhbmRDbGFzcy5PYmo7XHJcbiAgICAgICAgdGhpcy5oYW5kU2NyaXB0ID0gdGhpcy5IYW5kQ2xhc3MuYWRkU2NyaXB0KExvZ2ljLkhhbmRDb2xsaXNpb25TY3JpcHQpIGFzIExvZ2ljLkhhbmRDb2xsaXNpb25TY3JpcHQ7XHJcbiAgICAgICAgdGhpcy5oYW5kU2NyaXB0LmtpbmVtYXRpY1Nwcml0ZSA9IHRoaXMuRGVza0NsYXNzLk9iajtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVGltZWxpbmVDb21wbGV0ZSgpe1xyXG4gICAgICAgIGtub2NrX3RpbWUrKztcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRpbWVMaW5lIGNvbXBsZXRlISEhIVwiLCBrbm9ja190aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTGFiZWwobGFiZWw6U3RyaW5nKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMYWJlbE5hbWU6XCIgKyBsYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVUaW1lckxpbmUoKXtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLm9uKExheWEuRXZlbnQuQ09NUExFVEUsdGhpcyx0aGlzLm9uVGltZWxpbmVDb21wbGV0ZSk7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5vbihMYXlhLkV2ZW50LkxBQkVMLCB0aGlzLCB0aGlzLm9uTGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRWZWMoKXtcclxuICAgICAgICB0aGlzLlZkaXIueCA9IENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueDtcclxuICAgICAgICB0aGlzLlZkaXIueSA9IENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueTtcclxuICAgICAgICB0aGlzLlZkaXIueiA9IENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MuelxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUga25vY2tPbmNlKCl7XHJcbiAgICAgICAgdGhpcy5yZXNldFZlYygpO1xyXG4gICAgICAgIHRoaXMudGltZUxpbmUucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmFkZEtub2NrKCk7XHJcbiAgICAgICAgdGhpcy5hZGRLbm9jaygxKTtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLnBsYXkoMCxmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRTdGF5KF9zdGF5VGltZT86bnVtYmVyKXtcclxuICAgICAgICBfc3RheVRpbWUgPSBfc3RheVRpbWU/IF9zdGF5VGltZSAqIDEwMDA6IDA7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5hZGRMYWJlbChcInN0YXlcIiwwKS50byh0aGlzLlZkaXIsIHt5OkNvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueX0sIF9zdGF5VGltZSwgbnVsbCwgMClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEtub2NrKF9kZWx0YVRpbWU/Om51bWJlcil7XHJcbiAgICAgICAgX2RlbHRhVGltZSA9IF9kZWx0YVRpbWU/IF9kZWx0YVRpbWUgKiAxMDAwOiAwO1xyXG4gICAgICAgIHRoaXMudGltZUxpbmVcclxuICAgICAgICAgICAgLnRvKHRoaXMuVmRpcix7eTpDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfRU5EX1BPUy55fSwyMDAsbnVsbCxfZGVsdGFUaW1lKVxyXG4gICAgICAgICAgICAudG8odGhpcy5WZGlyLHt5OkNvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueX0sMjAwLG51bGwsMClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc3RhcnQoKXtcclxuICAgICAgICB0aGlzLmRlc2tTY3JpcHQuY2xlYXJTdGF0dXMoKTtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuSURFTCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGVzaygpO1xyXG4gICAgICAgIHRoaXMucmVzZXRIYW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXdMZXZlbCgpe1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5ERVNLX0xFQVZFKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVEZXNrKCl7XHJcbiAgICAgICAgLy8gdGhpcy5kZXNrRG93bigpO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0ZPUldBUkQpO1xyXG4gICAgICAgIHRoaXMucmVzZXRWZWMoKTtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5hZGRLbm9jaygpO1xyXG4gICAgICAgIHRoaXMuYWRkS25vY2soMSk7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5wbGF5KDAsdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldERlc2soKXtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5zZXRQb3NpdGlvbihDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfUE9TKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BEZXNrKCl7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5TVE9QKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlc2tEb3duKCl7XHJcbiAgICAgICAgLy8gbGV0IHZlYyA9IHRoaXMuRGVza0NsYXNzLlBvc2l0aW9uO1xyXG4gICAgICAgIC8vIHZlYy55IC09IDAuMztcclxuICAgICAgICAvLyB0aGlzLkRlc2tDbGFzcy5zZXRQb3NpdGlvbih2ZWMpO1xyXG5cclxuICAgICAgICAvLyBpZih2ZWMueSA8PSBDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfRU5EX1BPUy55KXtcclxuICAgICAgICAvLyAgICAgdGhpcy5EZXNrQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLk1PVkVfQkFDSyk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5zZXRQb3NpdGlvbih0aGlzLlZkaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVza1VwKCl7XHJcbiAgICAgICAgbGV0IHZlYyA9IHRoaXMuRGVza0NsYXNzLlBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy55ICs9IDAuMztcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5zZXRQb3NpdGlvbih2ZWMpO1xyXG5cclxuICAgICAgICBpZih2ZWMueSA+PSBDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfUE9TLnkpe1xyXG4gICAgICAgICAgICB0aGlzLkRlc2tDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9GT1JXQVJEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZXNrRW50ZXIoKXtcclxuICAgICAgICBsZXQgdmVjID0gdGhpcy5EZXNrQ2xhc3MuUG9zaXRpb247XHJcbiAgICAgICAgdmVjLnggLT0gMC4xO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLnNldFBvc2l0aW9uKHZlYyk7XHJcblxyXG4gICAgICAgIGlmKHZlYy54IDw9IENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueCl7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZURlc2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRlc2tEaXNhcHBlYXIoKXtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5jaGFuZ2VPYmooQ29uZmlnLlBvb2xUeXBlLkRlc2spO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLnNldFBvc2l0aW9uKENvbmZpZy5PYmplY3RDb25maWcuREVTS19FTlRFUl9QT1MpO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5ERVNLX0VOVEVSKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlc2tMZWF2ZSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB2ZWMgPSB0aGlzLkRlc2tDbGFzcy5Qb3NpdGlvbjtcclxuICAgICAgICB2ZWMueCAtPSAwLjE7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3Muc2V0UG9zaXRpb24odmVjKTtcclxuXHJcbiAgICAgICAgaWYodmVjLnggPD0gLTIpe1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVza0Rpc2FwcGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZURlc2soKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLmRlc2tTY3JpcHQuSXNIaXQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RGVzaygpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BEZXNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUhhbmQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkhhbmRDbGFzcy5DdXJTdGF0ZSk7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICBpZih0aGlzLkhhbmRDbGFzcy5DdXJTdGF0ZSA9PSBDb25maWcuU3RhdGVDb25maWcuU1RPUCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLkhhbmRDbGFzcy5DdXJTdGF0ZSA9PSBDb25maWcuU3RhdGVDb25maWcuSURFTCl7XHJcbiAgICAgICAgICAgIHRoaXMuSGFuZENsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0ZPUldBUkQpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kRm9yd2FyZCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZlYyA9IHRoaXMuSGFuZENsYXNzLlBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy54ICs9IENvbmZpZy5PYmplY3RDb25maWcuU1BFRURfSEFORCAqIExheWEudGltZXIuZGVsdGE7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3Muc2V0UG9zaXRpb24odmVjKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5IYW5kQ2xhc3MuUG9zaXRpb24ueCA+PSBDb25maWcuT2JqZWN0Q29uZmlnLkhBTkRfRU5EX1BPUy54KXtcclxuICAgICAgICAgICAgdGhpcy5IYW5kQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLk1PVkVfQkFDSyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25SZWFjaEZpbmlzaCgpe1xyXG4gICAgICAgIHRoaXMucmVzZXRIYW5kKCk7XHJcbiAgICAgICAgLy/liLDovr7nu4jngrnliqDliIZcclxuICAgICAgICBEYXRhLlBsYXllckRhdGEuUG9pbnQgKz0gMTAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7lvpfliIbvvJpcIixEYXRhLlBsYXllckRhdGEuUG9pbnQpO1xyXG4gICAgICAgIGlmKERhdGEuUGxheWVyRGF0YS5Qb2ludCA+PSAzMDApe1xyXG4gICAgICAgICAgICB0aGlzLm5ld0xldmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZEJhY2soKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuSGFuZENsYXNzLlBvc2l0aW9uLnggPD0gQ29uZmlnLk9iamVjdENvbmZpZy5IQU5EX1BPUy54KXtcclxuICAgICAgICAgICAgdGhpcy5vblJlYWNoRmluaXNoKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSGFuZENsYXNzLlBvc2l0aW9uLnggPCBDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfUE9TLngpe1xyXG4gICAgICAgICAgICB0aGlzLkhhbmRDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuQkFDS19QQVNTRUQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZlYyA9IHRoaXMuSGFuZENsYXNzLlBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy54IC09IENvbmZpZy5PYmplY3RDb25maWcuU1BFRURfSEFORCAqIExheWEudGltZXIuZGVsdGE7O1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLnNldFBvc2l0aW9uKHZlYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEhhbmQoKXtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5zZXRQb3NpdGlvbihDb25maWcuT2JqZWN0Q29uZmlnLkhBTkRfUE9TKTtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuSURFTCk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVIYW5kR3Jhdml0eShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9wSGFuZCgpe1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5TVE9QKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVuYWJsZUhhbmRHcmF2aXR5KF9vcGVuOmJvb2xlYW4pe1xyXG4gICAgICAgIGlmKHRoaXMuSGFuZENsYXNzLlJpZ2lkM0QuaXNLaW5lbWF0aWMgPT0gIV9vcGVuKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLlJpZ2lkM0QuaXNLaW5lbWF0aWMgPSAhX29wZW47XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MuUmlnaWQzRC5ncmF2aXR5ID0gX29wZW4/IG5ldyBMYXlhLlZlY3RvcjMoMCwgLTEwLCAwKTogTGF5YS5WZWN0b3IzLl9aRVJPO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25IYW5kSGl0KCl7XHJcbiAgICAgICAgRGF0YS5QbGF5ZXJEYXRhLlBvaW50ID0gMDtcclxuICAgICAgICB0aGlzLnN0b3BIYW5kKCk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVIYW5kR3Jhdml0eSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5kZXNrU2NyaXB0LklzSGl0KXtcclxuICAgICAgICAgICAgdGhpcy5vbkhhbmRIaXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MudXBkYXRlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZSgpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfmr4/kuIDluKfml7bpl7TvvJonLExheWEudGltZXIuZGVsdGEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGVzaygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSGFuZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGFuZENvbGxpc2lvblNjcmlwdCBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlciB7XHJcblx0cHVibGljIGtpbmVtYXRpY1Nwcml0ZTpMYXlhLlNwcml0ZTNEO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlckVudGVyKG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlclN0YXkob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlckV4aXQob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25FbnRlcihjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCLnorDmkp7vvIFcIik7XHJcblx0XHRpZiAoY29sbGlzaW9uLm90aGVyLm93bmVyID09PSB0aGlzLmtpbmVtYXRpY1Nwcml0ZSl7XHJcblx0XHRcdC8vICh0aGlzLm93bmVyLmdldENvbXBvbmVudChMYXlhLlJpZ2lkYm9keTNEKSBhcyBMYXlhLlJpZ2lkYm9keTNEKS5ncmF2aXR5ID0gbmV3IExheWEuVmVjdG9yMygwLCAtMTAsIDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25TdGF5KGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvbkV4aXQoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHR9XHJcblxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9HcmFiTG9naWMnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Rlc2tDb2xsaXNpb25TY3JpcHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0hhbmRDb2xsaXNpb25TY3JpcHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbGxpc2lvblNjcmlwdEJhc2UnO1xyXG4iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSBcIi4vR2FtZVNjZW5lXCI7XHJcblxyXG5jbGFzcyBNYWluIHtcclxuXHRwcml2YXRlIGFuaW1hdGlvbnM6QXJyYXk8c3RyaW5nPiA9IFsnYXR0YWNrMScsICdhdHRhY2syJywgJ2F0dGFjazMnLCAnd2luJ107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHQvL+aJi+acuuS4jlBD6YCC6YWN5LiN5ZCMXHJcblx0XHRpZihMYXlhLkJyb3dzZXIub25QQyl7XHJcblx0XHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gTGF5YS5TdGFnZS5TQ0FMRV9TSE9XQUxMO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gTGF5YS5TdGFnZS5TQ0FMRV9GSVhFRF9XSURUSDtcclxuXHRcdH1cclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IExheWEuU3RhZ2UuU0NSRUVOX1ZFUlRJQ0FMO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKSB7XHJcblx0XHRNYW5hZ2VyLlNjZW5lTWFuYWdlci5jcmVhdGUzZFNjZW5lKCk7XHJcblxyXG5cdFx0Ly8gQ29tbW9uLmxvYWRBbGxTdWJwYWNrYWdlcyh0aGlzLCB0aGlzLm9uU3ViUGFja2FnZUxvYWRlZCk7XHJcblx0fVxyXG5cclxuXHRvblN1YlBhY2thZ2VMb2FkZWQoKXtcclxuXHRcdE1hbmFnZXIuU2NlbmVNYW5hZ2VyLmNyZWF0ZTNkU2NlbmUoKTtcclxuXHR9XHJcbn1cclxuLy/mv4DmtLvlkK/liqjnsbtcclxubmV3IE1haW4oKTtcclxuIiwi77u/aW1wb3J0ICogYXMgQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Db25maWcnO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZU1hbmFnZXIgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfaW5zdDpCYXNlTWFuYWdlcjtcclxuICAgIHByaXZhdGUgX21zZ1R5cGU6bnVtYmVyO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdCgpe1xyXG4gICAgICAgIGlmKCFNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBjcmVhZSBhIHNjZW5lIGZpcnN0IScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5faW5zdCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3QgPSBNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZS5nZXRDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLl9pbnN0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3QgPSBNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZS5hZGRDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5cclxuLy/ngrnlh7vnibnmlYhcclxuZXhwb3J0IGNsYXNzIENsaWNrRWZmZWN0TWFuYWdlcntcclxuICAgIHByaXZhdGUgc3RhdGljIFRvdWNoQ29tOmZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHN0YXRpYyBJbml0KCl7XHJcbiAgICAgICAgaWYodGhpcy5Ub3VjaENvbSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBncm9vdEluc3QgPSBmZ3VpLkdSb290Lmluc3Q7XHJcblx0XHR0aGlzLlRvdWNoQ29tID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0RnJvbVVSTCgndWk6Ly9NYWluVUkvQ29tcG9uZW50X2RpYW5qaScpLmFzQ29tO1xyXG5cdFx0Z3Jvb3RJbnN0LmFkZENoaWxkKHRoaXMuVG91Y2hDb20pO1xyXG5cdFx0dGhpcy5Ub3VjaENvbS5zb3J0aW5nT3JkZXIgPSBDb25maWcuVUlDb25maWcuU29ydGluZ09yZGVyLkNsaWNrRWZmZWN0O1xyXG4gICAgICAgIC8vIHRoaXMuVG91Y2hDb20ubm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xyXG4gICAgICAgIC8vIHRoaXMuVG91Y2hDb20uZGlzcGxheU9iamVjdC5zZXRTaWJsaW5nSW5kZXgodGhpcy5Ub3VjaENvbS5ub2RlLnBhcmVudC5jaGlsZHJlbkNvdW50KTtcclxuXHJcbiAgICAgICAgZ3Jvb3RJbnN0LmRpc3BsYXlPYmplY3Qub24oTGF5YS5FdmVudC5DTElDSywgdGhpcy5wbGF5Q2xpY2tFZmZlY3QsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7Y2MuRXZlbnQuRXZlbnRUb3VjaH0gZXZ0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwbGF5Q2xpY2tFZmZlY3QoZXZ0KXtcclxuICAgICAgICBsZXQgcG9zID0gZXZ0LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5Ub3VjaENvbS5zZXRYWShwb3MueCwgZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHBvcy55KTtcclxuICAgICAgICB0aGlzLlRvdWNoQ29tLmdldFRyYW5zaXRpb24oJ0VmZmVjdF9UJykucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlKCl7XHJcbiAgICAgICAgdGhpcy5Ub3VjaENvbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gZmd1aS5HUm9vdC5pbnN0Lm5vZGUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93KCl7XHJcbiAgICAgICAgdGhpcy5Ub3VjaENvbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCB7RGV2UmVxQm9keSwgTG9naW5EYXRhfSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlciB7XHJcbiAgICBzdGF0aWMgSW5zdDpEYXRhTWFuYWdlcjtcclxuICAgIHByaXZhdGUgX2lzQmFzZUJvZHlJbml0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaXNCb2R5SW5pdGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgLy8gRGF0YS5EZXZSZXFCb2R5LkluaXRCYXNlQm9keSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEJhc2VCb2R5KCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkxvZ2luU3VjY2VzcywgdGhpcy5vbkxvZ2luU3VjY2Vzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0QmFzZUJvZHkoKXtcclxuICAgICAgICBpZih0aGlzLl9pc0Jhc2VCb2R5SW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8v5LiO55m75b2V5peg5YWz55qE5o6l5Y+j55u05o6l5Yib5bu6XHJcbiAgICAgICAgLy/phY3nva5cclxuICAgICAgICBEYXRhLkNvbmZpZ0RhdGEuUmVxQm9keSA9IG5ldyBEYXRhLkh0dHBSZXFib2R5QmFzZSgwLCAxMDAwMik7ICAgXHJcbiAgICAgICAgLy/nmbvlvZVcclxuICAgICAgICBEYXRhLkxvZ2luRGF0YS5SZXFCb2R5ID0gbmV3IERhdGEuSHR0cFJlcWJvZHlCYXNlKDAsIDEwMDAzKTsgXHJcblxyXG4gICAgICAgIHRoaXMuX2lzQmFzZUJvZHlJbml0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Mb2dpblN1Y2Nlc3MoKXtcclxuICAgICAgICB0aGlzLmluaXREZXZCb2RpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXREZXZCb2RpZXMoKXtcclxuICAgICAgICAvL+S7peS4i+ivt+axguS9k+mcgOimgeeZu+W9leaJjeWPr+WIm+W7ulxyXG4gICAgICAgIGlmKHRoaXMuX2lzQm9keUluaXRlZCB8fCAhRGF0YS5Mb2dpbkRhdGEuU2Vzc2lvbikgcmV0dXJuO1xyXG4gICAgICAgIC8vIzEwODAyIOiOt+WPlummluadgOamnFxyXG4gICAgICAgIERhdGEuVXBncmFkZURhdGEuUmVxQm9keSA9IG5ldyBEZXZSZXFCb2R5KDgsIDEwODAyKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuX2lzQm9keUluaXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbn0gIiwiaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG4vL+iPiuiKseeuoeeQhlxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0ljb25NYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlciB7XHJcbiAgICBzdGF0aWMgSW5zdDpMb2FkaW5nSWNvbk1hbmFnZXI7XHJcbiAgICBwdWJsaWMgSXNJbml0ZWQ6Qm9vbGVhbjtcclxuICAgIHB1YmxpYyBDb250cm9sbGVyOlVJLkxvYWRpbmdDb250cm9sbGVyO1xyXG5cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICB0aGlzLkluaXQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgSW5pdCgpe1xyXG4gICAgICAgIGlmKHRoaXMuSXNJbml0ZWQgPT0gdHJ1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLklzSW5pdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyID0gTWFuYWdlci5VSU1hbmFnZXIub3BlbkNvbnRyb2xsZXIoVUkuTG9hZGluZ0NvbnRyb2xsZXIpIGFzIFVJLkxvYWRpbmdDb250cm9sbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIFNob3dMb2FkaW5nKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlci5zaG93TG9hZGluZygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBIaWRlTG9hZGluZygpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlci5oaWRlTG9hZGluZygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vVUkvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tICcuLi9NYW5hZ2VyL01hbmFnZXInO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vQ29tbW9uL0NvbW1vbic7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5cclxuLy/nmbvlvZXov5vluqbnrqHnkIZcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdQcm9ncmVzc01hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2Vye1xyXG4gICAgc3RhdGljIEluc3Q6TG9hZGluZ1Byb2dyZXNzTWFuYWdlcjtcclxuICAgIHB1YmxpYyBJc0luaXRlZDpCb29sZWFuO1xyXG4gICAgcHVibGljIENvbnRyb2xsZXI6VUkuTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlcjtcclxuXHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgdGhpcy5Jbml0KCk7XHJcbiAgICAgICAgLy8gdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLlNpbVByb2dyZXNzRW5kLCB0aGlzLm9uTG9hZGluZ0NvbXBsZXRlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgSW5pdCgpe1xyXG4gICAgICAgIGlmKHRoaXMuSXNJbml0ZWQgPT0gdHJ1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLklzSW5pdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyID0gTWFuYWdlci5VSU1hbmFnZXIub3BlbkNvbnRyb2xsZXIoVUkuTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlcikgYXMgVUkuTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlcjtcclxuXHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2ltUHJvZ3Jlc3NFbmQsIHRoaXMub25Mb2FkaW5nQ29tcGxldGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dVaVByb2dyZXNzKHByb2dyZXNzOm51bWJlciwgcGtnTmFtZT86c3RyaW5nKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlci5zaG93VWlQcm9ncmVzcyhwcm9ncmVzcywgcGtnTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd1d4TG9naW4oKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIuc2hvd1d4TG9naW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q29uZmlnUHJvZ3Jlc3MoKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlci5zaG93Q29uZmlnUHJvZ3Jlc3MoKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZGluZ0NvbXBsZXRlKCl7XHJcbiAgICAgICAgLy/liqDovb3miJDlip/lkI7lup/pmaToh6rlt7FcclxuICAgICAgICBMb2NhbENvbmZpZy5Jc1NpbVByb2dyZXNzRW5kID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLklzSW5pdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9DbGlja0VmZmVjdE1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvYWRpbmdJY29uTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ1Byb2dyZXNzTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTmV0TWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3RhdGVCYXNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9TY2VuZU1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1NwYXduTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vVGltZXJNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9VSU1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1ZlcnNpb25NYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vUG9vbE1hbmFnZXInOyIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuLy/mmK/lkKbnrKzkuIDmrKHov57mjqVcclxubGV0IGlzRmlyc3RTZW5kID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwTWFuYWdlciBleHRlbmRzIE1hbmFnZXIuQmFzZU1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBfaHI6WE1MSHR0cFJlcXVlc3Q7XHJcbiAgICBwcml2YXRlIF9yZXFLZXk6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2htTWFwOkNvbmZpZy5EaWN0aW9uYXJ5PEh0dHBNYW5hZ2VyPiA9IHt9O1xyXG4gICAgcHJvdGVjdGVkIERhdGE6RGF0YS5IdHRwUmVxYm9keUJhc2U7XHJcbiAgICBwcml2YXRlIENhbGxiYWNrOkZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBDb25uZWN0VGltZXM6bnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBJc1Nob3dMb2FkaW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0Nvbm5lY3Rpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBzZXQgUmVxdWVzdFVybCh1cmw6c3RyaW5nKXtcclxuICAgICAgICBDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgQ29ubmVjdChyZXFrZXk6c3RyaW5nLCBkYXRhOkRhdGEuSHR0cFJlcWJvZHlCYXNlLCBjYWxsYmFjaz86RnVuY3Rpb24sIGlzU2hvd0xvYWRpbmc/OmJvb2xlYW4sIElzR20/OmJvb2xlYW4pIHtcclxuICAgICAgICBpZighZGF0YSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl9ociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHRoaXMuX3JlcUtleSA9IHJlcWtleTtcclxuXHJcbiAgICAgICAgaWYoSXNHbSlcclxuICAgICAgICAgICAgdGhpcy5faHIub3BlbihcInBvc3RcIiwgQ29uZmlnLk5ldENvbmZpZy5HTVVybCwgdHJ1ZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9oci5vcGVuKFwicG9zdFwiLCBDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwsIHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2hyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHRoaXMuT25IdHRwUmVxdWVzdENvbXBsZXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy/otoXml7ZcclxuICAgICAgICB0aGlzLl9oci50aW1lb3V0ID0gNTAwMDtcclxuICAgICAgICB0aGlzLl9oci5vbnRpbWVvdXQgPSB0aGlzLk9uVGltZW91dC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2hyLm9uZXJyb3IgPSB0aGlzLk9uSHR0cFJlcXVlc3RFcnJvci5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICBpZih0eXBlb2YoZGF0YS5SZXFEYXRhKSA9PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgICAgIGRhdGEuUmVxRGF0YSA9IEpTT04ucGFyc2UoZGF0YS5SZXFEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5EYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLkNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5Jc1Nob3dMb2FkaW5nID0gaXNTaG93TG9hZGluZztcclxuICAgICAgICAvL+mHjei/nuasoeaVsFxyXG4gICAgICAgIHRoaXMuQ29ubmVjdFRpbWVzKys7XHJcbiAgICAgICAgLy/otoXml7bmr6vnp5LmlbBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9oci50aW1lb3V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5faHIucmVzcG9uc2VUeXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgaWYodHlwZW9mIGRhdGEuUmVxRGF0YSAhPSAnc3RyaW5nJyl7XHJcbiAgICAgICAgICAgIGRhdGEuUmVxRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEuUmVxRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hyLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIC8v5piv5ZCm5q2j5Zyo6L+e5o6l77yM5YyF5ous6LaF5pe2XHJcbiAgICAgICAgdGhpcy5Jc0Nvbm5lY3RpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAvL+iPiuiKsVxyXG4gICAgICAgIGlmKGlzRmlyc3RTZW5kKXtcclxuICAgICAgICAgICAgaXNGaXJzdFNlbmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gTWFuYWdlci5Mb2FkaW5nSWNvbk1hbmFnZXIuSW5pdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaXNTaG93TG9hZGluZyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgTWFuYWdlci5Mb2FkaW5nSWNvbk1hbmFnZXIuSW5zdC5TaG93TG9hZGluZygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBNYW5hZ2VyLkxvYWRpbmdJY29uTWFuYWdlci5JbnN0LkhpZGVMb2FkaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAvLzPnp5LlkI7lho3ovazoj4roirFcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLkxhdGVTaG93TG9hZGluZy5iaW5kKHRoaXMpLCAzMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5OZXRIdHRwQ29ubmVjdEVpZC5Db25uZWN0QmVnaW4pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBMYXRlU2hvd0xvYWRpbmcoKXtcclxuICAgICAgICBpZiAodGhpcy5Jc0Nvbm5lY3RpbmcgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIE1hbmFnZXIuTG9hZGluZ0ljb25NYW5hZ2VyLkluc3QuU2hvd0xvYWRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/or7fmsYLplJnor69cclxuXHRPbkh0dHBSZXF1ZXN0RXJyb3IoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgICAgICB0aGlzLnRyeUF1dG9SZWNvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy/otoXml7ZcclxuICAgIE9uVGltZW91dChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJ5QXV0b1JlY29ubmVjdCgpO1xyXG5cdH1cclxuXHJcblx0T25IdHRwUmVxdWVzdFByb2dyZXNzKGUpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5Yqg6L296L+b5bqmPj4+Pj4+Pj4+Pj4+Pj4+Pj4+PlwiLGUubG9hZGVkIC8gZS50b3RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVtb3ZlUmVxdWVzdCgpe1xyXG4gICAgICAgIC8v56e76Zmk5b2T5YmN6L+e5o6l77yM5b+F6aG75YWI6K6+572u6L+e5o6l54q25oCBSXNDb25uZWN0aW5n5Li6ZmFsc2XlkI7lho3osIPnlKhcclxuICAgICAgICBpZih0aGlzLklzQ29ubmVjdGluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl9ociA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5EYXRhID0gbnVsbDtcclxuICAgICAgICBIdHRwTWFuYWdlci5faG1NYXBbdGhpcy5fcmVxS2V5XSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cnlBdXRvUmVjb25uZWN0KCl7XHJcbiAgICAgICAgLy/nrZbnlaXvvJowLjXnp5Lph43ov57kuIDmrKHvvIzph43or5U15qyhXHJcbiAgICAgICAgaWYodGhpcy5Db25uZWN0VGltZXMgPCAzKXtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDUwMCwgdGhpcywgdGhpcy5hdXRvUmVDb25uZWN0KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29ubmVjdFdpbmRvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF1dG9SZUNvbm5lY3QoKXtcclxuICAgICAgICB0aGlzLkNvbm5lY3QoJycsIHRoaXMuRGF0YSwgdGhpcy5DYWxsYmFjaywgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgc2hvd0Nvbm5lY3RXaW5kb3coKXtcclxuICAgICAgICB0aGlzLklzQ29ubmVjdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIE1hbmFnZXIuTG9hZGluZ0ljb25NYW5hZ2VyLkluc3QuSGlkZUxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBbQ29uZmlnLkxvY2FsQ29udGVudC5OZXRFcnJvcl07XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIE1hbmFnZXIuVUlNYW5hZ2VyLm9wZW5Db25maXJtV2luZG93KFxyXG4gICAgICAgICAgICBjb250ZW50LCBcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLkNvbm5lY3QoJycsIHNlbGYuRGF0YSwgc2VsZi5DYWxsYmFjaywgc2VsZi5Jc1Nob3dMb2FkaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cdE9uSHR0cFJlcXVlc3RDb21wbGV0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faHIucmVhZHlTdGF0ZSAhPSA0IHx8ICh0aGlzLl9oci5zdGF0dXMgPCAyMDAgfHwgdGhpcy5faHIuc3RhdHVzID49IDQwMCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Jc0Nvbm5lY3RpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkNvbm5lY3RUaW1lcyA9IDA7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLl9oci5yZXNwb25zZVRleHQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuX2hyLnJlc3BvbnNlVGV4dCkgYXMgQ29uZmlnLlJlc3BEYXRhU3RydWN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+Pj4+Pj4+Pj4+Pui/nuaOpeeKtuaAge+8micsIGRhdGEuUmVzcENvZGUsIGRhdGEuUmVzcE1zZyk7XHJcbiAgICAgICAgLy/ov57mjqXlpLHotKVcclxuICAgICAgICAvLyBpZihkYXRhLlJlc3BDb2RlICE9IENvbmZpZy5IdHRwQ29ubmVjdFN0YXRlLlN1Y2Nlc3MpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodHlwZW9mKHRoaXMuQ2FsbGJhY2spID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICB0aGlzLkNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ov57mjqXnu5PmnZ/liKDpmaTlr7nosaFcclxuICAgICAgICB0aGlzLl9yZW1vdmVSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uTmV0SHR0cENvbm5lY3RFaWQuU2VydmljZVJlc3BvbmQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvY2tldE1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6U29ja2V0TWFuYWdlcjtcclxuICAgIHByaXZhdGUgc29ja2V0OiBMYXlhLlNvY2tldDtcclxuICAgIHByaXZhdGUgb3V0cHV0OiBMYXlhLkJ5dGU7XHJcbiAgICBwcml2YXRlIF9kYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIC8qKiDlv4Pot7PljIXlrprml7blmaggKi9cclxuICAgIHByaXZhdGUgX3RpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOW/g+i3s+WMheacjeWKoeWZqOi2heaXtuWumuaXtuWZqCAqL1xyXG4gICAgcHJpdmF0ZSBfc2VydmVyVGltZXI6IG51bWJlciA9IDA7XHJcbiAgICAvKiog5b+D6Lez5YyF6LaF5pe25pe26Ze077yM5Y2V5L2NbXMs5pe26Ze05Y+q6IO95piv5pW056eS5pWw77yMc2V0VGltZW91dOWcqOWQjuWPsOavj+enkuaJp+ihjOS4gOasoSAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdGltZW91dDogbnVtYmVyID0gMTAwMDA7XHJcbiAgICAvKiog6Z2Z6buY6YeN6L+e5a6a5pe25ZmoICovXHJcbiAgICBwcml2YXRlIF9zaWxlbnRUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIC8qKiDlv4Pot7PljIXmnI3liqHlmajotoXml7bml7bpl7TvvIzljZXkvY1tcyzml7bpl7Tlj6rog73mmK/mlbTnp5LmlbDvvIxzZXRUaW1lb3V05Zyo5ZCO5Y+w5q+P56eS5omn6KGM5LiA5qyhICovXHJcbiAgICBwcml2YXRlIF9zZXJ2ZXJUaW1lb3V0OiBudW1iZXIgPSAxMDAwMDsgLy9UT0RP6LCD6K+V5oqK5pe26Ze05Yqg6ZW/MzYwMDAwMO+8jOWOnzEwMDAwXHJcbiAgICAvKiog5pat57q/57G75Z6L77yaMS7ooqvmjKTkuIvnur8sIDIu5YGc5pyN57u05oqkKHNvY2tldOaWreW8gCksMyDpnZ7ms5Xmk43kvZwgKi9cclxuICAgIHByaXZhdGUgX2Rpc2Nvbm5lY3RUeXBlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9pbnN0KXtcclxuICAgICAgICAgICAgdGhpcy5faW5zdCA9IG5ldyBTb2NrZXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdDtcclxuICAgIH0gXHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcih1cmw/OnN0cmluZywgcG9ydD86bnVtYmVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jb25uZWN0KHVybCwgcG9ydCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbm5lY3QodXJsOnN0cmluZywgcG9ydD86bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmluc3QuY29ubmVjdCh1cmwsIHBvcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29ubmVjdCh1cmw6c3RyaW5nLCBwb3J0PzpudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBMYXlhLlNvY2tldCgpO1xyXG5cclxuICAgICAgICBpZihwb3J0ICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5jb25uZWN0KHVybCwgcG9ydCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNvbm5lY3RCeVVybCh1cmwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSB0aGlzLnNvY2tldC5vdXRwdXQ7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKExheWEuRXZlbnQuT1BFTiwgdGhpcywgdGhpcy5vblNvY2tldE9wZW4pO1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKExheWEuRXZlbnQuQ0xPU0UsIHRoaXMsIHRoaXMub25Tb2NrZXRDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oTGF5YS5FdmVudC5NRVNTQUdFLCB0aGlzLCB0aGlzLm9uTWVzc2FnZVJldmVpdmVkKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbihMYXlhLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLm9uQ29ubmVjdEVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+W/g+i3s+ajgOa1i1xyXG4gICAgcHJpdmF0ZSBzdGFydEhlYXJ0YmVhdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9kYXRlLnRvVVRDU3RyaW5nKCkgKyBcIiBzdGFydCBoZWFydGJlYXRcIik7XHJcbiAgICAgICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KHRoaXMudGltZXJIYW5kbGVyLmJpbmQodGhpcyksIHRoaXMuX3RpbWVvdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGltZXJIYW5kbGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGUudG9VVENTdHJpbmcoKSArIFwiIHNlbmQgaGVhcnRiZWF0XCIpO1xyXG5cclxuICAgICAgICAvL+WPkemAgeS4gOS4quW/g+i3s++8jOWQjuerr+aUtuWIsOWQju+8jOi/lOWbnuS4gOS4quW/g+i3s+a2iOaBr1xyXG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoJ3IgdSB0aGVyZT8nKTtcclxuICAgICAgICB0aGlzLl9zZXJ2ZXJUaW1lciA9IHNldFRpbWVvdXQodGhpcy5zZXJ2ZXJUaW1lckhhbmRsZXIuYmluZCh0aGlzKSwgdGhpcy5fc2VydmVyVGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJUaW1lckhhbmRsZXIoKSB7XHJcbiAgICAgICAgLy/mnI3liqHlmajotoXml7bmsqHmnInlm57ljIXvvIzmlq3lvIDov57mjqXnhLblkI7ph43ov55cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9kYXRlLnRvVVRDU3RyaW5nKCkgKyBcIiB3YWl0IHNlcnZlciByZXBseSB0aW1lb3V0XCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnNvY2tldCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0SGVhcnRiZWF0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGUudG9VVENTdHJpbmcoKSArIFwiIHJlc2V0IGhlYXJ0YmVhdFwiKTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zZXJ2ZXJUaW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNvY2tldE9wZW4oKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRIZWFydGJlYXQoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0SGVhcnRiZWF0KCk7XHJcblxyXG4gICAgICAgIC8vIOWPkemAgeWtl+espuS4slxyXG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoXCJkZW1vbnN0cmF0ZSA8c2VuZFN0cmluZz5cIik7XHJcblxyXG4gICAgICAgIC8vIOS9v+eUqG91dHB1dC53cml0ZUJ5dGXlj5HpgIFcclxuICAgICAgICB2YXIgbWVzc2FnZTogc3RyaW5nID0gXCJkZW1vbnN0cmF0ZSA8b3V0cHV0LndyaXRlQnl0ZT5cIjtcclxuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dC53cml0ZUJ5dGUobWVzc2FnZS5jaGFyQ29kZUF0KGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZmx1c2goKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU29ja2V0Q2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTb2NrZXQgY2xvc2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25NZXNzYWdlUmV2ZWl2ZWQobWVzc2FnZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWdlIGZyb20gc2VydmVyOlwiLCBtZXNzYWdlKTtcclxuXHJcbiAgICAgICAgLy/ojrflj5bliLDmtojmga/ph43nva7lv4Pot7Pmo4DmtYtcclxuICAgICAgICB0aGlzLnJlc2V0SGVhcnRiZWF0KCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEhlYXJ0YmVhdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1lbHNlIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3IExheWEuQnl0ZShtZXNzYWdlKS5yZWFkVVRGQnl0ZXMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5pbnB1dC5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Db25uZWN0RXJyb3IoZTogTGF5YS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaWree6v+exu+Wei++8mjEu6KKr5oyk5LiL57q/LCAyLuWBnOacjee7tOaKpChzb2NrZXTmlq3lvIApLDMg6Z2e5rOV5pON5L2cICovXHJcbiAgICBwdWJsaWMgc2V0RGlzY29ubmVjdCh0eXBlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9kaXNjb25uZWN0VHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9kaXNjb25uZWN0VHlwZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNldEhlYXJ0YmVhdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnNvY2tldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9Db3JlL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvb2xNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlciB7XHJcbiAgICBzdGF0aWMgSW5zdDpQb29sTWFuYWdlcjtcclxuXHJcbiAgICAvL2ZndWnlr7nosaHmsaBcclxuICAgIHByaXZhdGUgc3RhdGljIGZndWlQb29sID0gbmV3IGZndWkuR09iamVjdFBvb2woKTtcclxuXHJcbiAgICAvL2ZndWnlr7nosaHmsaBcclxuICAgIHN0YXRpYyBnZXQgRmd1aVBvb2woKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5mZ3VpUG9vbDtcclxuICAgIH1cclxuXHJcbiAgICAvL+WktOmDqOaxoFxyXG4gICAgc3RhdGljIGdldCBIZWFkUG9vbCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvb2woQ29uZmlnLlBvb2xUeXBlLkhlYWRNb2RlbCkgYXMgTGF5YS5TcHJpdGUzRFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6Lqr5L2T5rGgXHJcbiAgICBzdGF0aWMgZ2V0IEJvZHlQb29sKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbChDb25maWcuUG9vbFR5cGUuQm9keU1vZGVsKSBhcyBMYXlhLlNwcml0ZTNEW107XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQXdha2UoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlY292ZXIoa2V5OnN0cmluZywgaXRlbSwgY2xzVHlwZT8pe1xyXG4gICAgICAgIGlmKCFrZXkgfHwgIWl0ZW0pIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBpZihjbHNUeXBlKXtcclxuICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXJCeUNsYXNzKGNsc1R5cGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25maWcuUG9vbFR5cGUuRmd1aU9iajpcclxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtIGluc3RhbmNlb2YgZmd1aS5HT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkZndWlQb29sLnJldHVybk9iamVjdChpdGVtKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKGtleSwgaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEl0ZW0oa2V5OnN0cmluZywgY2xzVHlwZT8pe1xyXG4gICAgICAgIGlmKGNsc1R5cGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gTGF5YS5Qb29sLmdldEl0ZW1CeUNsYXNzKGtleSwgY2xzVHlwZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICcnOlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExheWEuUG9vbC5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFBvb2woa2V5OnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIExheWEuUG9vbC5nZXRQb29sQnlTaWduKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsZWFyUG9vbChrZXk6c3RyaW5nKXtcclxuICAgICAgICBMYXlhLlBvb2wuY2xlYXJCeVNpZ24oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXJBbGxQb29scygpe1xyXG4gICAgICAgIHRoaXMuRmd1aVBvb2wuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TW9kZWxCeVR5cGUocG9vbFR5cGU6c3RyaW5nLCBwYXRoOnN0cmluZywgY2FsbGJhY2s6RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICBsZXQgaGVhZCA9IHRoaXMuZ2V0SXRlbShwb29sVHlwZSkgYXMgTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICBpZighaGVhZCl7XHJcbiAgICAgICAgICAgIE1hbmFnZXIuU3Bhd25NYW5hZ2VyLkxvYWQzZE1vZGVsKFxyXG4gICAgICAgICAgICAgICAgcGF0aCwgXHJcbiAgICAgICAgICAgICAgICAobW9kZWw6Q29uZmlnLk1vZGVsRGF0YVN0cnVjdCk9PntcclxuICAgICAgICAgICAgICAgICAgICBoZWFkID0gbW9kZWwubXNwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCBoZWFkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIHRoaXNBcmdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCBoZWFkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0T2JqQnlGdW5jKGtleTpzdHJpbmcsIGZ1bmM6RnVuY3Rpb24pe1xyXG4gICAgICAgIHJldHVybiBMYXlhLlBvb2wuZ2V0SXRlbUJ5Q3JlYXRlRnVuKGtleSwgZnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEhlYWQocGF0aDpzdHJpbmcsIGNhbGxiYWNrOkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICAgICAgdGhpcy5nZXRNb2RlbEJ5VHlwZShDb25maWcuUG9vbFR5cGUuSGVhZE1vZGVsLCBwYXRoLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEJvZHkocGF0aDpzdHJpbmcsIGNhbGxiYWNrOkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICAgICAgdGhpcy5nZXRNb2RlbEJ5VHlwZShDb25maWcuUG9vbFR5cGUuQm9keU1vZGVsLCBwYXRoLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJldHVybkZndWlPYmooYm94OmZndWkuR09iamVjdCl7XHJcbiAgICAgICAgdGhpcy5yZWNvdmVyKENvbmZpZy5Qb29sVHlwZS5GZ3VpT2JqLCBib3gpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tIFwiLi4vR2FtZVNjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlcntcclxuICAgIHB1YmxpYyBzdGF0aWMgX2luc3Q6U2NlbmVNYW5hZ2VyO1xyXG4gICAgcHVibGljIHN0YXRpYyBDdXJTY2VuZTpMYXlhLlNjZW5lM0QgfCBMYXlhLlNjZW5lO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGUyZFNjZW5lKCl7XHJcbiAgICAgICAgTGF5YS5TY2VuZS5sb2FkKEdhbWVDb25maWcuc3RhcnRTY2VuZSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uT3BlblNjZW5lKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBjcmVhdGUzZFNjZW5lKCl7XHJcblx0XHQvL+a3u+WKoDNE5Zy65pmvXHJcblx0XHRsZXQgc2NlbmUgPSBMYXlhLnN0YWdlLmFkZENoaWxkKG5ldyBMYXlhLlNjZW5lM0QoKSkgYXMgTGF5YS5TY2VuZTNEO1xyXG5cclxuXHRcdC8v5re75Yqg54Wn55u45py6XHJcblx0XHRsZXQgY2FtZXJhID0gKHNjZW5lLmFkZENoaWxkKG5ldyBMYXlhLkNhbWVyYSgwLCAwLjEsIDEwMCkpKSBhcyBMYXlhLkNhbWVyYTtcclxuXHRcdGNhbWVyYS50cmFuc2Zvcm0udHJhbnNsYXRlKG5ldyBMYXlhLlZlY3RvcjMoMSwgMSwgMykpO1xyXG5cdFx0Ly8gY2FtZXJhLnRyYW5zZm9ybS5yb3RhdGUobmV3IExheWEuVmVjdG9yMygtMzAsIDAsIDApLCB0cnVlLCBmYWxzZSk7XHJcblx0XHRjYW1lcmEuY2xlYXJGbGFnID0gTGF5YS5CYXNlQ2FtZXJhLkNMRUFSRkxBR19ERVBUSE9OTFk7XHJcblxyXG5cdFx0Ly/mt7vliqDmlrnlkJHlhYlcclxuXHRcdGxldCBkaXJlY3Rpb25MaWdodCA9IHNjZW5lLmFkZENoaWxkKG5ldyBMYXlhLkRpcmVjdGlvbkxpZ2h0KCkpIGFzIExheWEuRGlyZWN0aW9uTGlnaHQ7XHJcblx0XHRkaXJlY3Rpb25MaWdodC5jb2xvciA9IG5ldyBMYXlhLlZlY3RvcjMoMC42LCAwLjYsIDAuNik7XHJcblx0XHRkaXJlY3Rpb25MaWdodC50cmFuc2Zvcm0ud29ybGRNYXRyaXguc2V0Rm9yd2FyZChuZXcgTGF5YS5WZWN0b3IzKDEsIC0xLCAwKSk7XHJcblxyXG5cdFx0dGhpcy5vbk9wZW5TY2VuZShzY2VuZSk7XHJcblx0fVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG9uT3BlblNjZW5lKHNjZW5lPzpMYXlhLlNjZW5lM0QgfCBMYXlhLlNjZW5lKXtcclxuXHRcdGlmKHNjZW5lKXtcclxuXHRcdFx0TGF5YS5zdGFnZS5hZGRDaGlsZChzY2VuZSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ3VyU2NlbmUgPSBzY2VuZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNjZW5lLmFkZENvbXBvbmVudChNYW5hZ2VyLlNjZW5lTWFuYWdlcik7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZENvbXBvbmVudChNYW5hZ2VyLkh0dHBNYW5hZ2VyKTtcclxuICAgICAgICAgICAgc2NlbmUuYWRkQ29tcG9uZW50KE1hbmFnZXIuVUlNYW5hZ2VyKTtcclxuICAgICAgICAgICAgc2NlbmUuYWRkQ29tcG9uZW50KE1hbmFnZXIuRGF0YU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRDb21wb25lbnQoR2FtZVNjZW5lKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9VSS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgR0V2ZW50IGZyb20gXCIuLi9Db21tb24vR0V2ZW50XCI7XHJcblxyXG4vL2NvY29z55SoXHJcbi8vIGxldCBsb2FkZWRQYWNrYWdlOntba2V5OnN0cmluZ106Ym9vbGVhbn0gPSB7fTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGF3bk1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbG9hZDNkTW9kZWw7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBwb29sT2Jqczp7W2tleTpzdHJpbmddOiBhbnl9O1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcbiAgICBcclxuICAgIC8v5Yqg6L295qih5Z6LXHJcbiAgICBzdGF0aWMgTG9hZDNkTW9kZWwocGF0aDpzdHJpbmcsIGNvbXBsZXRlQ2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICAgICAgaWYoIU1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lIHx8ICFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIExheWEubG9hZGVyLmNyZWF0ZShwYXRoLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXNBcmcsIGNvbXBsZXRlQ2FsbGJhY2spKTtcclxuXHJcbiAgICAgICAgTGF5YS5TcHJpdGUzRC5sb2FkKHBhdGgsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCk9PntcclxuICAgICAgICAgICAgaWYodHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3AgPSBDb21tb24uUmVzb3VyY2UuZ2V0UmVzKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXNwKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1zcCA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lLmFkZENoaWxkKHNwKSBhcyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaSA9IG1zcC5nZXRDb21wb25lbnQoTGF5YS5BbmltYXRvcikgYXMgTGF5YS5BbmltYXRvcjtcclxuICAgICAgICAgICAgICAgIGxldCBhbmlTdGF0ZTpMYXlhLkFuaW1hdG9yUGxheVN0YXRlO1xyXG4gICAgICAgICAgICAgICAgaWYoYW5pKXtcclxuICAgICAgICAgICAgICAgICAgICBhbmlTdGF0ZSA9IGFuaS5nZXRDdXJyZW50QW5pbWF0b3JQbGF5U3RhdGUoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9kZWxEYXRhID0gbmV3IENvbmZpZy5Nb2RlbERhdGFTdHJ1Y3QobXNwLCBhbmksIGFuaVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2suY2FsbCh0aGlzQXJnLCBtb2RlbERhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqg6L29572R5qC8XHJcbiAgICBzdGF0aWMgTG9hZDNkTWVzaChwYXRoOnN0cmluZywgY29tcGxldGVDYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZighcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBDb21tb24uUmVzb3VyY2UubG9hZChwYXRoLCB0aGlzQXJnLCBjb21wbGV0ZUNhbGxiYWNrLCBudWxsLCBMYXlhLkxvYWRlci5NRVNIKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WKoOi9veadkOi0qFxyXG4gICAgc3RhdGljIExvYWRNYXRlcmlhbChwYXRoOnN0cmluZywgY29tcGxldGVDYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZighcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBDb21tb24uUmVzb3VyY2UubG9hZChwYXRoLCB0aGlzQXJnLCBjb21wbGV0ZUNhbGxiYWNrLCBudWxsLCBMYXlhLkxvYWRlci5NQVRFUklBTCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqjmgIHliqDovb1VSeWMhSAgY29jb3PnlKhcclxuICAgIC8vIHN0YXRpYyBMb2FkVUlQYWNrYWdlKF9wYXRoLCBjYWxsYmFjaykge1xyXG4gICAgLy8gICAgIGlmKHR5cGVvZihfcGF0aCkgIT0gXCJzdHJpbmdcIikgcmV0dXJuO1xyXG5cclxuICAgIC8vICAgICBpZihsb2FkZWRQYWNrYWdlW19wYXRoXSl7XHJcbiAgICAvLyAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgIC8vICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgZmd1aS5VSVBhY2thZ2UuYWRkUGFja2FnZShfcGF0aCwgKGVycik9PntcclxuICAgIC8vICAgICAgICAgICAgIGlmKGVycil7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGxvYWRlZFBhY2thZ2VbX3BhdGhdID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8v5LuO5rGg5Lit5Yib5bu65a+56LGhXHJcbiAgICBzdGF0aWMgQ3JlYXRlT2JqZWN0RnJvbVBvb2woX3BhdGg6c3RyaW5nLCBfc2xvdDpmZ3VpLkdHcmFwaCkge1xyXG4gICAgICAgIGlmKCFfcGF0aCB8fCAhX3Nsb3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy/ku47msaDkuK3liJvlu7rkuIDkuKpTa2VsZXRvbuWvueixoVxyXG4gICAgICAgIGxldCBvYmogPSBMYXlhLlBvb2wuZ2V0SXRlbShfcGF0aCk7XHJcbiAgICAgICAgaWYoIW9iaikgcmV0dXJuO1xyXG5cclxuICAgICAgICAvL+eUn+aIkOWUr+S4gGdpZFxyXG4gICAgICAgIGlmKCFvYmpbJyRQb29sR0lEJ10pe1xyXG4gICAgICAgICAgICBvYmpbJyRQb29sR0lEJ10gPSBMYXlhLlV0aWxzLmdldEdJRCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighb2JqWyckUGF0aCddKXtcclxuICAgICAgICAgICAgb2JqWyckUGF0aCddID0gX3BhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9vbE9ianNbb2JqWyckUG9vbEdJRCddXSA9IG9iajtcclxuXHJcbiAgICAgICAgX3Nsb3QuZGlzcGxheU9iamVjdC5hZGRDaGlsZChvYmopO1xyXG5cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LuO5Yib5bu6U3BpbmXmiJZEcmFnb25Cb25l5Yqo55S7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gX3BhdGgg6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gIHtmZ3VpLkdHcmFwaH0gX3Nsb3Qg54i25a+56LGhIGZndWkgZ3JhcGhcclxuICAgICAqIEBwYXJhbSAge3N0cmluZyB8IG51bWJlcn0gX25hbWUg5Yqo55S75ZCN5a2X5oiW6ICF57Si5byVXHJcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBfaXNMb29wIOaYr+WQpuW+queOr+aSreaUvu+8jOm7mOiupOW+queOr+aSreaUvlxyXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gX2lzUGxheSDmmK/lkKbnq4vljbPmkq3mlL7vvIzpu5jorqTmkq3mlL5cclxuICAgICAqIEByZXR1cm4ge3NwLlNrZWxldG9ufVxyXG4gICAgICovXHJcbiAgICAvLyBzdGF0aWMgQ3JlYXRlU3BpbmUoX3BhdGgsIF9zbG90LCBfbmFtZSwgX2lzTG9vcCwgX2lzUGxheSkge1xyXG4gICAgLy8gICAgIGlmKHR5cGVvZihfcGF0aCkgIT0gXCJzdHJpbmdcIiB8fCAhX3Nsb3QgfHwgIV9zbG90Lm5vZGUpIHJldHVyblxyXG5cclxuICAgIC8vICAgICBsZXQgc2tlbGV0b24gPSBfc2xvdC5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAvLyAgICAgaWYoc2tlbGV0b24gPT0gbnVsbCl7XHJcbiAgICAvLyAgICAgICAgIHNrZWxldG9uID0gX3Nsb3Qubm9kZS5hZGRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgc2tlbGV0b24ucHJlbXVsdGlwbGllZEFscGhhID0gZmFsc2U7XHJcblxyXG4gICAgLy8gICAgIGxldCBvblByb2Nlc3MgPSBmdW5jdGlvbihjb21wbGV0ZUNvdW50LCB0b3RhbENvdW50LCBpdGVtKSB7fVxyXG4gICAgLy8gICAgIGxldCBjYiA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcclxuICAgIC8vICAgICAgICAgc2tlbGV0b24uc2tlbGV0b25EYXRhID0gcmVzO1xyXG5cclxuICAgIC8vICAgICAgICAgX2lzTG9vcCA9IF9pc0xvb3A/IF9pc0xvb3A6IHRydWU7XHJcbiAgICAvLyAgICAgICAgIGlmKHNrZWxldG9uLnNrZWxldG9uRGF0YSAmJiBza2VsZXRvbi5za2VsZXRvbkRhdGEubG9hZGVkICYmIF9uYW1lKXtcclxuICAgIC8vICAgICAgICAgICAgIHNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBfbmFtZSwgX2lzTG9vcClcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgc2tlbGV0b24ucGF1c2VkID0gX2lzUGxheSA9PSBmYWxzZVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgY2MubG9hZGVyLmxvYWRSZXMoX3BhdGgsIHNwLlNrZWxldG9uRGF0YSwgb25Qcm9jZXNzLCBjYilcclxuXHJcblxyXG4gICAgLy8gICAgIHJldHVybiBza2VsZXRvblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8v6YCa6L+H6aKE5Yi25L2T5Yib5bu6U3BpbmVcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBfcGF0aCBQcmVmYWLot6/lvoRcclxuICAgICAqIEBwYXJhbSAge2ZndWkuR0dyYXBofSBfc2xvdCDniLblr7nosaEgZmd1aSBncmFwaFxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGxiYWNrIOWKqOeUu+WQjeWtl+aIluiAhee0ouW8lVxyXG4gICAgICovXHJcbiAgICAvLyBzdGF0aWMgQ3JlYXRlU3BpbmVGcm9tUHJlZmFiKF9wYXRoLCBfc2xvdCwgY2FsbGJhY2spIHtcclxuICAgIC8vICAgICBpZih0eXBlb2YoX3BhdGgpICE9IFwic3RyaW5nXCIgfHwgIV9zbG90IHx8ICFfc2xvdC5ub2RlKSByZXR1cm47XHJcblxyXG4gICAgLy8gICAgIC8qKiBAdHlwZSB7c3AuU2tlbGV0b259ICovXHJcbiAgICAvLyAgICAgLy8gbGV0IHNrZWxldG9uO1xyXG4gICAgLy8gICAgIGNjLmxvYWRlci5sb2FkUmVzKF9wYXRoLCBjYy5QcmVmYWIsIGZ1bmN0aW9uKGVyciwgcHJlZmFiKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgcHJlZmFiTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAvLyAgICAgICAgICAgICAvKiogQHR5cGUge3NwLlNrZWxldG9ufSAqL1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHNrZWxldG9uID0gIHByZWZhYk5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgIC8vICAgICAgICAgICAgIF9zbG90Lm5vZGUuYWRkQ2hpbGQocHJlZmFiTm9kZSk7XHJcbiAgICAvLyAgICAgICAgICAgICBwcmVmYWJOb2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayhza2VsZXRvbik7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgR0V2ZW50LkRpc3BhdGNoKEdFdmVudC5TUElORV9QUkVGQUJfTE9BREVEKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3RhdGljIExvYWRWaWV3KHBrZzpzdHJpbmcsIGNvbTpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCFwa2cgfHwgIWNvbSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBDb21tb24uUmVzb3VyY2UuYWRkVWlQYWNrYWdlKHBrZyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGdyb290SW5zdCA9IGZndWkuR1Jvb3QuaW5zdDtcclxuICAgICAgICBsZXQgdWkgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QocGtnLCBjb20pLmFzQ29tO1xyXG4gICAgICAgIGlmKHVpKXtcclxuICAgICAgICAgICAgZ3Jvb3RJbnN0LmFkZENoaWxkKHVpKTtcclxuICAgICAgICAgICAgdWkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL+Wwj+a4uOaIj+mAgumFjVxyXG4gICAgICAgICAgICB1aS5zZXRTaXplKGdyb290SW5zdC53aWR0aCwgZ3Jvb3RJbnN0LmhlaWdodCk7XHJcbiAgICAgICAgICAgIHVpLnNldFhZKDAsIDApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbCB0byBhZGQgdWkgcGFja2FnZTogXCIsIHBrZywgY29tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1aTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZUJhc2V7XHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gQ29uZmlnLlN0YXRlQ29uZmlnLklERUw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1clN0YXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVN0YXRlKHN0YXRlOnN0cmluZyl7XHJcbiAgICAgICAgaWYodGhpcy5fc3RhdGUgPT0gc3RhdGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmxldCB0aW1lcklkID0gLTFcclxuLy/orqHml7blmajmsaBcclxubGV0IHRpbWVyUG9vbCA9IG5ldyBBcnJheTxUaW1lcj4oKVxyXG5sZXQgdGltZXJMaXN0ID0gbmV3IEFycmF5PFRpbWVyPigpXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZXIge1xyXG4gICAgcHVibGljIElkOm51bWJlcjtcclxuICAgIHB1YmxpYyBNYXhDZDpudW1iZXI7XHJcbiAgICBwdWJsaWMgQ3VyQ2QgPSAwO1xyXG4gICAgcHVibGljIE9uU3RhcnQ6RnVuY3Rpb247XHJcbiAgICBwdWJsaWMgT25VcGRhdGU6RnVuY3Rpb247XHJcbiAgICBwdWJsaWMgT25FbmQ6RnVuY3Rpb247XHJcbiAgICBwdWJsaWMgVGFyZ2V0O1xyXG4gICAgcHVibGljIFRoaXNBcmc6Q29tbW9uLkV2ZW50RGlzcGF0aGVyO1xyXG4gICAgcHVibGljIEVuZFRpbWUgPSAwO1xyXG4gICAgcHVibGljIElzUnVuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNTdGFydCA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzQWxpdmUgPSB0cnVlO1xyXG4gICAgcHVibGljIFN0YXJ0VGltZTpudW1iZXI7XHJcbiAgICBwcml2YXRlIGF1dG9SZW1vdmU6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgSW5pdChjZDpudW1iZXIsIHN0YXJ0Q2FsbGJhY2s6RnVuY3Rpb24sIHVwZGF0ZUNhbGxiYWNrOkZ1bmN0aW9uLCBlbmRDYWxsYmFjazpGdW5jdGlvbiwgdGFyZ2V0LCB0aGlzQXJnLCBhdXRvUmVtb3ZlPzpib29sZWFuLCBhdXRvU3RhcnQ/OmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuSWQgPSB0aW1lcklkICsgMVxyXG4gICAgICAgIHRoaXMuTWF4Q2QgPSBjZFxyXG4gICAgICAgIHRoaXMuQ3VyQ2QgPSAwXHJcbiAgICAgICAgdGhpcy5PblN0YXJ0ID0gc3RhcnRDYWxsYmFja1xyXG4gICAgICAgIHRoaXMuT25VcGRhdGUgPSB1cGRhdGVDYWxsYmFja1xyXG4gICAgICAgIHRoaXMuT25FbmQgPSBlbmRDYWxsYmFja1xyXG4gICAgICAgIHRoaXMuVGFyZ2V0ID0gdGFyZ2V0XHJcbiAgICAgICAgdGhpcy5UaGlzQXJnID0gdGhpc0FyZ1xyXG4gICAgICAgIHRoaXMuRW5kVGltZSA9IDBcclxuICAgICAgICB0aGlzLklzUnVuID0gZmFsc2VcclxuICAgICAgICB0aGlzLklzU3RhcnQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuSXNBbGl2ZSA9IHRydWVcclxuICAgICAgICAvL+m7mOiupOiHquWKqOmUgOavgVxyXG4gICAgICAgIHRoaXMuYXV0b1JlbW92ZSA9IGF1dG9SZW1vdmUgIT0gbnVsbD8gYXV0b1JlbW92ZTogdHJ1ZTtcclxuICAgICAgICAvL+m7mOiupOiHquWKqOW8gOWni1xyXG4gICAgICAgIGlmKGF1dG9TdGFydCAhPSBmYWxzZSl7XHJcbiAgICAgICAgICAgIHRoaXMuU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNBbGl2ZSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjdXJydGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgaWYoY3VycnRpbWUgPCB0aGlzLkVuZFRpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLkN1ckNkID0gKHRoaXMuRW5kVGltZSAtIGN1cnJ0aW1lKSAqIDAuMDAxXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZih0aGlzLk9uVXBkYXRlKSA9PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5PblVwZGF0ZS5jYWxsKHRoaXMuVGhpc0FyZywgdGhpcy5DdXJDZCwgdGhpcy5UYXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5VcGRhdGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuSXNSdW4gPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLklzU3RhcnQgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgaWYodHlwZW9mKHRoaXMuT25FbmQpID09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uRW5kLmNhbGwodGhpcy5UaGlzQXJnLCB0aGlzLlRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYXV0b1JlbW92ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5Jc1J1biA9IHRydWVcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuSXNTdGFydCl7XHJcbiAgICAgICAgICAgIHRoaXMuSXNTdGFydCA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgLy/orqHml7bnu5PmnZ/ml7bpl7RcclxuICAgICAgICAgICAgdGhpcy5FbmRUaW1lID0gdGhpcy5TdGFydFRpbWUgKyB0aGlzLk1heENkICogMTAwMDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYodHlwZW9mKHRoaXMuT25TdGFydCkgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uU3RhcnQuY2FsbCh0aGlzLlRoaXNBcmcsIHRoaXMuVGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5VcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUmVzZXRDZChjZCl7XHJcbiAgICAgICAgaWYodHlwZW9mKGNkKSAhPSBcIm51bWJlclwiKSByZXR1cm5cclxuXHJcbiAgICAgICAgdGhpcy5NYXhDZCA9IGNkXHJcbiAgICAgICAgdGhpcy5FbmRUaW1lID0gRGF0ZS5ub3coKSArIHRoaXMuTWF4Q2QgKiAxMDAwXHJcbiAgICB9XHJcblxyXG4gICAgUmVtb3ZlKCl7XHJcbiAgICAgICAgLy8gdGhpcy5NYXhDZCA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5DdXJDZCA9IDA7XHJcbiAgICAgICAgdGhpcy5PblN0YXJ0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLk9uVXBkYXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLk9uRW5kID0gbnVsbDtcclxuICAgICAgICB0aGlzLlRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5UaGlzQXJnID0gbnVsbDtcclxuICAgICAgICAvLyB0aGlzLkVuZFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuSXNSdW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLklzU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLklzQWxpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy/np7vliqjliLDpppbkvY1cclxuICAgICAgICBsZXQgaW5kZXggPSB0aW1lclBvb2wuaW5kZXhPZih0aGlzKTtcclxuICAgICAgICBpZihpbmRleCA+IDApe1xyXG4gICAgICAgICAgICB0aW1lclBvb2wuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGltZXJQb29sLnVuc2hpZnQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZXJNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7fSB0aGlzQXJnIOaJp+ihjOWfn1xyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBjZFxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IHN0YXJ0Q2FsbGJhY2sg5byA5aeL5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gdXBkYXRlQ2FsbGJhY2sg6L+H56iL5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gZW5kQ2FsbGJhY2sg57uT5p2f5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gIHt9IHRhcmdldCDorqHml7bnm67moIdcclxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGF1dG9SZW1vdmUg5piv5ZCm6Ieq5Yqo5Yi35paw77yM6buY6K6k6Ieq5YqoXHJcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBhdXRvU3RhcnQg5piv5ZCm6Ieq5Yqo5byA5aeL77yM6buY6K6k6Ieq5YqoXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBOZXdUaW1lcih0aGlzQXJnLCBjZDpudW1iZXIsIHN0YXJ0Q2FsbGJhY2s6RnVuY3Rpb24sIHVwZGF0ZUNhbGxiYWNrOkZ1bmN0aW9uLCBlbmRDYWxsYmFjazpGdW5jdGlvbiwgdGFyZ2V0PywgYXV0b1JlbW92ZT86Ym9vbGVhbiwgYXV0b1N0YXJ0Pzpib29sZWFuKXtcclxuICAgICAgICBsZXQgdCA9IHRpbWVyUG9vbFswXTtcclxuICAgICAgICBpZighdCB8fCB0LklzQWxpdmUpe1xyXG4gICAgICAgICAgICB0ID0gbmV3IFRpbWVyKClcclxuICAgICAgICAgICAgdGltZXJMaXN0W3QuSWRdID0gdFxyXG4gICAgICAgICAgICB0aW1lclBvb2wucHVzaCh0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0LkluaXQoY2QsIHN0YXJ0Q2FsbGJhY2ssIHVwZGF0ZUNhbGxiYWNrLCBlbmRDYWxsYmFjaywgdGFyZ2V0LCB0aGlzQXJnLCBhdXRvUmVtb3ZlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFJlbW92ZVRpbWVyKHRoaXNBcmc6Q29tbW9uLkV2ZW50RGlzcGF0aGVyKXtcclxuICAgICAgICBpZighdGhpc0FyZykgcmV0dXJuO1xyXG4gICAgICAgIHRpbWVyUG9vbC5mb3JFYWNoKHRpbWVyPT57XHJcbiAgICAgICAgICAgIGlmKHRpbWVyLlRoaXNBcmcgJiYgdGltZXIuVGhpc0FyZy5pZCA9PSB0aGlzQXJnLmlkKXtcclxuICAgICAgICAgICAgICAgIHRpbWVyLlJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFJlbW92ZUFsbFRpbWVyKCl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRpbWVyTGlzdCl7XHJcbiAgICAgICAgICAgIHRpbWVyTGlzdFtpXS5SZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFVwZGF0ZSgpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aW1lckxpc3Qpe1xyXG4gICAgICAgICAgICBpZih0aW1lckxpc3RbaV0uSXNBbGl2ZSl7XHJcbiAgICAgICAgICAgICAgICB0aW1lckxpc3RbaV0uVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIENsZWFyQWxsVGltZXIoKXtcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGltZXJMaXN0KXtcclxuICAgICAgICAgICAgdGltZXJMaXN0W2ldLlJlbW92ZSgpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGltZXJMaXN0W2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG4vL+W8uuWItuW8leWvvFxyXG5sZXQgR3VpZGVMaXN0ID0gbmV3IEFycmF5PGZndWkuR0NvbXBvbmVudD4oKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2VyIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX2luc3Q6VUlNYW5hZ2VyO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX2luc3Qpe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0ID0gbmV3IFVJTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgb25Bd2FrZSgpe1xyXG4gICAgICAgIFVJTWFuYWdlci5faW5zdCA9IHRoaXM7XHJcbiAgICAgICAgVUlNYW5hZ2VyLnNldFVpS2V5cygpO1xyXG4gICAgICAgIFVJTWFuYWdlci5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0VWlLZXlzKCl7XHJcbiAgICAgICAgbGV0IGNmZyA9IENvbmZpZy5WaWV3S2l0O1xyXG4gICAgICAgIFVJLkxvYWRpbmdQcm9ncmVzc0NvbnRyb2xsZXIuaW5pdChjZmcuTG9hZGluZ1Byb2dyZXNzLktleSwgVUkuTG9hZGluZ1Byb2dyZXNzVmlldyk7XHJcbiAgICAgICAgVUkuTG9hZGluZ0NvbnRyb2xsZXIuaW5pdChjZmcuTG9hZGluZ01haW4uS2V5LCBVSS5Mb2FkaW5nVmlldyk7XHJcbiAgICAgICAgVUkuQ2hvb3NlU2VydmljZUNvbnRyb2xsZXIuaW5pdChjZmcuQ2hvb3NlU2VydmljZS5LZXksIFVJLkNob29zZVNlcnZpY2VWaWV3KTtcclxuICAgICAgICBVSS5QdWJsaWNDb25maXJtYXRpb25Db250cm9sbGVyLmluaXQoY2ZnLlB1YmxpY0NvbmZpcm1hdGlvbi5LZXksIFVJLlB1YmxpY0NvbmZpcm1hdGlvblZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFkZExpc3RlbmVycygpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiBDb25maWcuVmlld0tpdCl7XHJcbiAgICAgICAgICAgIGxldCBjZmc6Q29uZmlnLlZpZXdDb25maWcgPSBDb25maWcuVmlld0tpdFtpXTtcclxuICAgICAgICAgICAgaWYoY2ZnICYmIGNmZy5LZXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGNmZy5LZXksIHRoaXMuZ29PcGVuLmJpbmQodGhpcywgY2ZnLktleSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlQ29udHJvbGxlciwgdGhpcy5vbkNsb3NlQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5VaU5vdGljZUVpZC5PcGVuRnVsbFNjcmVlbiwgdGhpcy5vbk9wZW5GdWxsc2NyZWVuKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlRnVsbFNjcmVlbiwgdGhpcy5vbkNsb3NlRnVsbHNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5VaU5vdGljZUVpZC5DbG9zZVBvcHVwLCB0aGlzLm9wZW5OZXh0UG9wdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdvT3BlbihrZXksIC4uLmRhdGEpe1xyXG4gICAgICAgIGxldCBjID0gQ29yZS5DdHJsTWFwQXJyYXlba2V5XSBhcyB0eXBlb2YgQ29yZS5Db250cm9sbGVyO1xyXG4gICAgICAgIGlmKGMpe1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Db250cm9sbGVyKGMsIC4uLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb3BlbkNvbnRyb2xsZXIoY3RybDp0eXBlb2YgQ29yZS5Db250cm9sbGVyLCAuLi5fZGF0YSkge1xyXG4gICAgICAgIGlmKCFjdHJsKSByZXR1cm5cclxuXHJcbiAgICAgICAgbGV0IGNLZXkgPSBjdHJsLktleTtcclxuICAgICAgICBsZXQgY3RybEluc3QgPSBDb3JlLk9wZW5lZEN0cmxbY0tleV07XHJcbiAgICAgICAgaWYoIWN0cmxJbnN0IHx8IGN0cmxJbnN0LklzRGVzdHJveWVkKXtcclxuICAgICAgICAgICAgY3RybEluc3QgPSBuZXcgY3RybChjdHJsLktleSwgY3RybC52aWV3KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy/lj6rlhYHorrjliJvlu7rkuIDkuKrlrp7kvotcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRyb2xsZXIgaGFzIG9wZW5lZDogJywgY0tleSk7XHJcbiAgICAgICAgICAgIGN0cmxJbnN0LnNob3coLi4uX2RhdGEpO1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3Quc2V0Q2hpbGRJbmRleChDb3JlLlZpZXdNYXBbY0tleV0uVUksIGZndWkuR1Jvb3QuaW5zdC5udW1DaGlsZHJlbik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrT3BlbkN0cmxJbnN0KGN0cmxJbnN0LCAuLi5fZGF0YSk7XHJcblxyXG4gICAgICAgIC8vIGxldCBkb25lID0gY3RybEluc3QuY3JlYXRlKCk7XHJcbiAgICAgICAgLy8gaWYoZG9uZSl7XHJcbiAgICAgICAgLy8gICAgIGN0cmxJbnN0Lm9wZW4oLi4uX2RhdGEpXHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJPcGVuIGNvbnRyb2xsZXIgZmFpbGVkXCIpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAvL+iuvue9rua4suafk+Wxgue6p1xyXG4gICAgICAgIC8vIGlmKGN0cmxJbnN0LklzUG9wdXApe1xyXG4gICAgICAgIC8vICAgICBjdHJsSW5zdC5Tb3J0aW5nT3JkZXIoQ29uZmlnLlVJQ29uZmlnLlNvcnRpbmdPcmRlci5Qb3B1cCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyByZXR1cm4gY3RybEluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tPcGVuQ3RybEluc3QoY3RybEluc3Q6Q29yZS5Db250cm9sbGVyLCAuLi5fZGF0YSl7XHJcbiAgICAgICAgaWYoY3RybEluc3QuSXNQb3B1cCl7XHJcbiAgICAgICAgICAgIGN0cmxJbnN0ID0gdGhpcy5nZXROZXh0UG9wdXAoY3RybEluc3QsIC4uLl9kYXRhKTtcclxuICAgICAgICAgICAgaWYoIWN0cmxJbnN0KSByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZG9uZSA9IGN0cmxJbnN0LmNyZWF0ZSgpO1xyXG4gICAgICAgIGlmKGRvbmUpe1xyXG4gICAgICAgICAgICBjdHJsSW5zdC5vcGVuKC4uLl9kYXRhKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiT3BlbiBjb250cm9sbGVyIGZhaWxlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/orr7nva7muLLmn5PlsYLnuqdcclxuICAgICAgICBpZihjdHJsSW5zdC5Jc1BvcHVwKXtcclxuICAgICAgICAgICAgY3RybEluc3QuU29ydGluZ09yZGVyKENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuUG9wdXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGN0cmxJbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8v5YWz6Zet55WM6Z2i5aSE55CGXHJcbiAgICBzdGF0aWMgb25DbG9zZUNvbnRyb2xsZXIoY2tleTpzdHJpbmcpe1xyXG4gICAgICAgIGxldCBjdHJsID0gQ29yZS5PcGVuZWRDdHJsW2NrZXldIGFzIENvcmUuQ29udHJvbGxlcjtcclxuICAgICAgICAvL+a4hemZpOaJgOacieiuoeaXtuWZqFxyXG4gICAgICAgIE1hbmFnZXIuVGltZXJNYW5hZ2VyLlJlbW92ZVRpbWVyKGN0cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5YWo5bGP55WM6Z2i5aSE55CGXHJcbiAgICBzdGF0aWMgb25PcGVuRnVsbHNjcmVlbihja2V5OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5oaWRlT3RoZXJVSShja2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb25DbG9zZUZ1bGxzY3JlZW4oY2tleTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuc2hvd090aGVyVUkoY2tleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhpZGVPdGhlclVJKGNrZXk6c3RyaW5nKXtcclxuICAgICAgICBmb3IobGV0IGkgaW4gQ29yZS5PcGVuZWRDdHJsKXtcclxuICAgICAgICAgICAgaWYoaSA9PSBja2V5KSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGxldCBjdHJsID0gQ29yZS5PcGVuZWRDdHJsW2ldO1xyXG4gICAgICAgICAgICBpZihjdHJsICYmIGN0cmwuSXNTaG93KXtcclxuICAgICAgICAgICAgICAgIGN0cmwuVmlldy5VSS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dPdGhlclVJKGNrZXk6c3RyaW5nKXtcclxuICAgICAgICBmb3IobGV0IGkgaW4gQ29yZS5PcGVuZWRDdHJsKXtcclxuICAgICAgICAgICAgaWYoaSA9PSBja2V5KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgY3RybCA9IENvcmUuT3BlbmVkQ3RybFtpXTtcclxuICAgICAgICAgICAgaWYoY3RybCAmJiBjdHJsLklzU2hvdyl7XHJcbiAgICAgICAgICAgICAgICBjdHJsLlZpZXcuVUkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RhdGljIG9wZW5HdWlkZSA9IGZ1bmN0aW9uKGd1aWRlTmFtZSwgdGFyZ2V0Q29tKXtcclxuICAgIC8vICAgICBpZighZ3VpZGVOYW1lKSByZXR1cm47XHJcblxyXG4gICAgLy8gICAgIGxldCBncm9vdEluc3QgPSBmZ3VpLkdSb290Lmluc3RcclxuXHJcbiAgICAvLyAgICAgbGV0IGd1aWRlQ29tID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KENvbmZpZy5WaWV3S2l0Lkd1aWRlci5Qa2csIGd1aWRlTmFtZSkuYXNDb21cclxuICAgIC8vICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXSA9IGd1aWRlQ29tXHJcblxyXG4gICAgLy8gICAgIGdyb290SW5zdC5hZGRDaGlsZChndWlkZUNvbSlcclxuICAgIC8vICAgICBndWlkZUNvbS5zZXRTaXplKGdyb290SW5zdC53aWR0aCwgZ3Jvb3RJbnN0LmhlaWdodClcclxuICAgIC8vICAgICBsZXQgZ3VpZGVNYXNrID0gZ3VpZGVDb20uZ2V0Q2hpbGQoXCJNYXNrXCIpXHJcbiAgICAvLyAgICAgaWYodGFyZ2V0Q29tKXtcclxuICAgIC8vICAgICAgICAgZ3VpZGVNYXNrLnNldFhZKHRhcmdldENvbS54LCB0YXJnZXRDb20ueSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3RhdGljIGNsb3NlR3VpZGUgPSBmdW5jdGlvbihndWlkZU5hbWUpe1xyXG4gICAgICAgIGlmKCFHdWlkZUxpc3RbZ3VpZGVOYW1lXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgR3VpZGVMaXN0W2d1aWRlTmFtZV0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuZXh0R3VpZGUgPSBmdW5jdGlvbihndWlkZU5hbWUpe1xyXG4gICAgICAgIGlmKCFHdWlkZUxpc3RbZ3VpZGVOYW1lXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgaW4gR3VpZGVMaXN0KXtcclxuICAgICAgICAgICAgR3VpZGVMaXN0W2d1aWRlTmFtZV0gJiYgR3VpZGVMaXN0W2d1aWRlTmFtZV0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBQb3B1cE1hcCA9IG5ldyBBcnJheTx0eXBlb2YgQ29yZS5Db250cm9sbGVyPigpO1xyXG4gICAgc3RhdGljIFBvcHVwUXVldWUgPSBuZXcgQXJyYXk8Q29yZS5Db250cm9sbGVyPigpO1xyXG4gICAgc3RhdGljIFBvcHVwRGF0YSA9IHt9O1xyXG5cclxuXHJcbiAgICAvL+aJk+W8gOW8ueeql1xyXG4gICAgc3RhdGljIG9wZW5Qb3B1cCAocG9wdXBDdHJsOnR5cGVvZiBDb3JlLkNvbnRyb2xsZXIsIGRhdGEpe1xyXG4gICAgICAgIGlmKCFwb3B1cEN0cmwpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoVUlNYW5hZ2VyLlBvcHVwTWFwLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBNYXAucHVzaChwb3B1cEN0cmwpO1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBEYXRhW3BvcHVwQ3RybC5LZXldID0gZGF0YTtcclxuICAgICAgICAgICAgbGV0IHBvcHVwID0gVUlNYW5hZ2VyLlBvcHVwTWFwLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuQ29udHJvbGxlcihwb3B1cCwgVUlNYW5hZ2VyLlBvcHVwRGF0YVtwb3B1cC5LZXldKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5Db250cm9sbGVyKHBvcHVwQ3RybCwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldE5leHRQb3B1cCAocG9wdXBDdHJsOkNvcmUuQ29udHJvbGxlciwgLi4uZGF0YSl7XHJcbiAgICAgICAgaWYoIXBvcHVwQ3RybCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZihVSU1hbmFnZXIuUG9wdXBRdWV1ZS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLlBvcHVwUXVldWUucHVzaChwb3B1cEN0cmwpO1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBEYXRhW3BvcHVwQ3RybC5tdWx0aXRvbktleV0gPSBkYXRhO1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gVUlNYW5hZ2VyLlBvcHVwUXVldWUuc2hpZnQoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHBvcHVwQ3RybDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIDkuIvkuIDkuKrlvLnnqpdcclxuICAgIHByaXZhdGUgc3RhdGljIG9wZW5OZXh0UG9wdXAgKCl7XHJcbiAgICAgICAgLy8gVUlNYW5hZ2VyLlBvcHVwTWFwLnNvbWUoKHZhbHVlLCBpZHgpPT57XHJcbiAgICAgICAgLy8gICAgIGlmKHBvcHVwQ3RybCBpbnN0YW5jZW9mIHZhbHVlKXtcclxuICAgICAgICAvLyAgICAgICAgIFVJTWFuYWdlci5Qb3B1cE1hcC5zcGxpY2UoaWR4LCAxKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIFVJTWFuYWdlci5Qb3B1cERhdGFbcG9wdXBDdHJsLm11bHRpdG9uS2V5XSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmKFVJTWFuYWdlci5Qb3B1cFF1ZXVlLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBRdWV1ZS5wb3AoKTtcclxuICAgICAgICAgICAgbGV0IHBvcHVwID0gVUlNYW5hZ2VyLlBvcHVwUXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgaWYocG9wdXApe1xyXG4gICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmNoZWNrT3BlbkN0cmxJbnN0KHBvcHVwLCAuLi5VSU1hbmFnZXIuUG9wdXBEYXRhW3BvcHVwLm11bHRpdG9uS2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIDmloflrZfnoa7orqTlvLnnqpdcclxuICAgIHN0YXRpYyBvcGVuQ29uZmlybVdpbmRvdyhjb250ZW50OnN0cmluZ1tdLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5vcGVuUG9wdXAoVUkuUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlciwgbmV3IENvbmZpZy5Qb3B1cFdpbmRvd0RhdGEoY29udGVudCwgeWVzQnRuQ2FsbGJhY2ssIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5Db250ZW50LCBidG5ZZXNUeHQsIGJ0bkNhbmNlbFR4dCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5omT5byA5aWW5Yqx5by556qXXHJcbiAgICBzdGF0aWMgb3BlblJld2FyZFdpbmRvdyhyZXdhcmREYXRhLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5vcGVuUG9wdXAoVUkuUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlciwgbmV3IENvbmZpZy5Qb3B1cFdpbmRvd0RhdGEobnVsbCwgeWVzQnRuQ2FsbGJhY2ssIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5SZXdhcmQsIHJld2FyZERhdGEsIGJ0blllc1R4dCwgYnRuQ2FuY2VsVHh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIDmloflrZcr5aWW5Yqx5by556qXXHJcbiAgICBzdGF0aWMgb3BlbkNvbnRlbnRSZXdhcmRXaW5kb3coY29udGVudDpzdHJpbmdbXSwgcmV3YXJkRGF0YSwgeWVzQnRuQ2FsbGJhY2s/OkZ1bmN0aW9uLCBidG5ZZXNUeHQ/OnN0cmluZywgYnRuQ2FuY2VsVHh0PzpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMub3BlblBvcHVwKFVJLlB1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXIsIG5ldyBDb25maWcuUG9wdXBXaW5kb3dEYXRhKFxyXG4gICAgICAgICAgICBjb250ZW50LCBcclxuICAgICAgICAgICAgeWVzQnRuQ2FsbGJhY2ssIFxyXG4gICAgICAgICAgICBDb25maWcuQ29uZmlybVdpbmRvd1R5cGUuQ29udGVudEFuZFJld2FyZCwgXHJcbiAgICAgICAgICAgIHJld2FyZERhdGEsIFxyXG4gICAgICAgICAgICBidG5ZZXNUeHQsIFxyXG4gICAgICAgICAgICBidG5DYW5jZWxUeHRcclxuICAgICAgICApKTtcclxuICAgIH1cclxufSIsIlxyXG4vL+eJiOacrOeuoeeQhlxyXG5leHBvcnQgY2xhc3MgVmVyc2lvbk1hbmFnZXJ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdmVyc2lvbjpudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBzdGF0aWMgc2V0IFZlcnNpb24odmVyc2lvbjpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX3ZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgVmVyc2lvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENob29zZVNlcnZpY2VDb250cm9sbGVyIGV4dGVuZHMgQ29yZS5Db250cm9sbGVye1xyXG4gICAgVmlldzpVSS5DaG9vc2VTZXJ2aWNlVmlldztcclxuXHJcbiAgICBvbkNyZWF0ZSgpe1xyXG4gICAgICAgIHRoaXMuU29ydGluZ09yZGVyKENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuTmV0U2lnbmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW4oZGF0YSkge1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uTGlzZW50ZXIodGhpcy5WaWV3LkxvY2FsLCB0aGlzLm9wZW5Mb2NhbFNlcnZpY2UpO1xyXG5cclxuICAgICAgICB0aGlzLlZpZXcuQWNjb3VudE5hbWUudGV4dCA9IExvY2FsQ29uZmlnLkdldEFjb3VudE5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTG9jYWxTZXJ2aWNlKCl7XHJcbiAgICAgICAgbGV0IGFjY291bnQgPSB0aGlzLlZpZXcuQWNjb3VudE5hbWUudGV4dDtcclxuICAgICAgICBpZih0eXBlb2YoYWNjb3VudCkgPT0gJ3N0cmluZycgJiYgYWNjb3VudC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgQ29uZmlnLk5ldENvbmZpZy5UZW1wTmFtZSA9IGFjY291bnQ7XHJcbiAgICAgICAgICAgIExvY2FsQ29uZmlnLlNhdmVBY291bnROYW1lKGFjY291bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwgPSBDb25maWcuTmV0Q29uZmlnLkxvY2FsUmVxdWVzdFVybDtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbkh0dHBTZXJ2aWNlKCl7XHJcbiAgICAgICAgQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID0gQ29uZmlnLk5ldENvbmZpZy5IdHRwUmVxdWVzdFVybDtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkxvY2FsV2VjaGF0U2VydmljZSgpe1xyXG4gICAgICAgIENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9IENvbmZpZy5OZXRDb25maWcuTG9jYWxXZWNoYXRSZXF1ZXN0VXJsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfor7fmsYLlnLDlnYDvvJonLENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKXtcclxuICAgICAgICBMb2NhbENvbmZpZy5Jc0Nob29zZWRTZXJ2aWNlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2VydmljZUNob29zZWQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi9Db3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hvb3NlU2VydmljZVZpZXcgZXh0ZW5kcyBDb3JlLlZpZXd7XHJcbiAgICBMb2NhbDpmZ3VpLkdPYmplY3Q7XHJcbiAgICBIdHRwOmZndWkuR09iamVjdDtcclxuICAgIExvY2FsV2VjaGF0OmZndWkuR09iamVjdDtcclxuICAgIEFjY291bnROYW1lOmZndWkuR1RleHRJbnB1dDtcclxuXHJcbiAgICBMb2FkVmlldygpIHtcclxuICAgICAgICB0aGlzLkxvY2FsID0gdGhpcy5VSS5nZXRDaGlsZChcIkxvY2FsXCIpXHJcbiAgICAgICAgdGhpcy5IdHRwID0gdGhpcy5VSS5nZXRDaGlsZChcIkh0dHBcIilcclxuICAgICAgICB0aGlzLkxvY2FsV2VjaGF0ID0gdGhpcy5VSS5nZXRDaGlsZChcIkxvY2FsV2VjaGF0XCIpXHJcblxyXG4gICAgICAgIHRoaXMuQWNjb3VudE5hbWUgPSB0aGlzLlVJLmdldENoaWxkKFwiQWNjb3VudE5hbWVcIikuYXNUZXh0SW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXN0cm95KCl7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuLyoqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBDb250cm9sbGVyPn0gKi9cclxuLy8gbGV0IEN0cmxNYXA6Q29uZmlnLkRpY3Rpb25hcnk8Q29udHJvbGxlcj4gPSB7fTtcclxuXHJcbi8qKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgVmlldz59ICovXHJcbmxldCBWaWV3TWFwOntba2V5OnN0cmluZ106Vmlld30gPSB7fTtcclxuXHJcbi8qKiBAdHlwZSB7Q29udHJvbGxlcltdfSAqL1xyXG5sZXQgT3BlbmVkQ3RybDpDb25maWcuRGljdGlvbmFyeTxDb250cm9sbGVyPiA9IHt9O1xyXG5cclxuZXhwb3J0IGxldCBDdHJsTWFwQXJyYXk6Q29uZmlnLkRpY3Rpb25hcnk8dHlwZW9mIENvbnRyb2xsZXI+ID0ge307XHJcblxyXG5jbGFzcyBDdHJsTGlzZW5lcntcclxuICAgIHB1YmxpYyBPYmo6Zmd1aS5HT2JqZWN0O1xyXG4gICAgcHVibGljIExpc2VuZXI6RnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3Iob2JqOmZndWkuR09iamVjdCwgbGlzZW5lcjpGdW5jdGlvbil7XHJcbiAgICAgICAgaWYoIW9iaikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLk9iaiA9IG9iajtcclxuICAgICAgICB0aGlzLkxpc2VuZXIgPSBsaXNlbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpe1xyXG4gICAgICAgIHRoaXMuT2JqLm9mZkNsaWNrKHRoaXMsIHRoaXMuTGlzZW5lcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T3BlbmVkQ3RybCwgVmlld01hcH1cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOWQkVVpTWFuYWdlciDms6jlhozohJrmnKwg6L+Y5pyJ5LiA5LqbIE1TR0lEXHJcbi8vLyDkuIDoiKzmmK9wYW5lbCDmjILovb3ov5nmoLfnmoTohJrmnKwg6ZyA6KaB5ZCR5YW25LuW5qih5Z2XIOaIluiAheiEmuacrOmAmuS/oVxyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVWlDVkJhc2UgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXJ7XHJcbiAgICBwdWJsaWMgbXVsdGl0b25LZXk6c3RyaW5nO1xyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIC8v6YeN5YaZ5q2k57uE5Lu25pa55rOV5b+F6aG75omn6KGMXHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgVWlDVkJhc2V7XHJcbiAgICBzdGF0aWMgY0tleTpzdHJpbmc7XHJcbiAgICBzdGF0aWMgdmlldzp0eXBlb2YgVmlldztcclxuXHJcbiAgICBwdWJsaWMgVmlldzpWaWV3O1xyXG5cclxuICAgIHB1YmxpYyBEYXRhO1xyXG4gICAgcHVibGljIElzT3BlbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzRGVzdHJveWVkID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBJc1Nob3cgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc1BvcHVwID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNGdWxsU2NyZWVuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNEZWZhdWx0ID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNJbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICBwcml2YXRlIGxpc2VudGVyQXJyYXkgPSBuZXcgQXJyYXk8Q3RybExpc2VuZXI+KCk7XHJcbiAgICBcclxuICAgIHN0YXRpYyBzZXQgS2V5KGtleTpzdHJpbmcpe3RoaXMuY0tleSA9IGtleX1cclxuICAgIHN0YXRpYyBnZXQgS2V5KCl7cmV0dXJuIHRoaXMuY0tleX1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoY0tleT86c3RyaW5nLCB2aWV3Pzp0eXBlb2YgVmlldywgaXNGdWxsU2NyZWVuPzpib29sZWFuLCBpc1BvcHVwPzpib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgaWYoIWNLZXkgfHwgIXZpZXcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQga2V5IG9yIHZpZXdcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZighT3BlbmVkQ3RybFtjS2V5XSkge1xyXG4gICAgICAgICAgICBPcGVuZWRDdHJsW2NLZXldID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsZXQgdktleSA9IHZpZXcuS2V5O1xyXG4gICAgICAgIGlmKCFWaWV3TWFwW3ZLZXldKXtcclxuICAgICAgICAgICAgVmlld01hcFt2S2V5XSA9IG5ldyB2aWV3KHZLZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tdWx0aXRvbktleSA9IGNLZXk7XHJcbiAgICAgICAgdGhpcy5WaWV3ID0gVmlld01hcFt2S2V5XTtcclxuICAgICAgICB0aGlzLklzRnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbiA9PSB0cnVlO1xyXG4gICAgICAgIHRoaXMuSXNQb3B1cCA9IGlzUG9wdXAgPT0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5pdChjS2V5LCB2aWV3OnR5cGVvZiBWaWV3LCB2S2V5PzpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuS2V5ID0gY0tleTtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMudmlldy5LZXkgPSB2S2V5PyB2S2V5OiBjS2V5O1xyXG4gICAgICAgIEN0cmxNYXBBcnJheVt0aGlzLktleV0gPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuVmlldykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gdmlldyBjcmVhdGVkIVwiKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLklzRGVzdHJveWVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5WaWV3LkluaXRpYWxpemUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKF9kYXRhPykge1xyXG4gICAgICAgIHRoaXMuSXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkRhdGEgPSBfZGF0YTtcclxuXHJcbiAgICAgICAgLy8gRmFjYWRlLlB1c2hDdHJsKHRoaXMsIHRoaXMuRGF0YSk7XHJcbiAgICAgICAgdGhpcy5zaG93KF9kYXRhKTtcclxuICAgICAgICB0aGlzLm9wZW5PdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk92ZXIoKSB7XHJcbiAgICAgICAgaWYodGhpcy5Jc0Z1bGxTY3JlZW4pe1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlVpTm90aWNlRWlkLk9wZW5GdWxsU2NyZWVuLCB0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSXNQb3B1cCl7XHJcbiAgICAgICAgICAgIHRoaXMuU29ydGluZ09yZGVyKENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuUG9wdXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vbk9wZW4odGhpcy5EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRCdXR0b25MaXNlbnRlcihvYmplY3Q6Zmd1aS5HT2JqZWN0LCBmdW46RnVuY3Rpb24sIGRhdGE/OkFycmF5PGFueT4sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZihvYmplY3QgPT0gbnVsbCB8fCBmdW4gPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJvYmplY3Qgb3IgZnVuIGlzIG51bGxcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXNBcmcgPSB0aGlzQXJnP3RoaXNBcmc6IHRoaXM7XHJcbiAgICAgICAgb2JqZWN0Lm9uQ2xpY2sodGhpc0FyZywgZnVuLCBkYXRhKTtcclxuICAgICAgICB0aGlzLmxpc2VudGVyQXJyYXkucHVzaChuZXcgQ3RybExpc2VuZXIob2JqZWN0LCBmdW4pKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBpZih0aGlzLklzT3BlbiA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLklzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25DbG9zZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlQ29udHJvbGxlciwgdGhpcy5tdWx0aXRvbktleSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5Jc1BvcHVwKXtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5VaU5vdGljZUVpZC5DbG9zZVBvcHVwLCB0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSXNGdWxsU2NyZWVuKXtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5VaU5vdGljZUVpZC5DbG9zZUZ1bGxTY3JlZW4sIHRoaXMubXVsdGl0b25LZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGVsZXRlIEN0cmxNYXBbdGhpcy5tdWx0aXRvbktleV07XHJcbiAgICAgICAgLy8gT3BlbmVkQ3RybC5zcGxpY2UoT3BlbmVkQ3RybC5pbmRleE9mKHRoaXMpLCAxKTtcclxuICAgICAgICBPcGVuZWRDdHJsW3RoaXMubXVsdGl0b25LZXldID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy/muIXnqbrngrnlh7vkuovku7ZcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5saXNlbnRlckFycmF5KXtcclxuICAgICAgICAgICAgdGhpcy5saXNlbnRlckFycmF5W2ldLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc2VudGVyQXJyYXlbaV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/muIXpmaTnm5HlkKzkuovku7ZcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICAvL+a4hemZpOaJgOacieiuoeaXtuWZqFxyXG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSXNEZXN0cm95ZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5Jc0Rlc3Ryb3llZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLlZpZXcgJiYgdGhpcy5WaWV3LmRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlZpZXcgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLklzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuSXNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5EYXRhID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy/plIDmr4HoioLngrlcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmmL7npLrnlYzpnaJcclxuICAgIHNob3coZGF0YT8pIHtcclxuICAgICAgICBkYXRhID0gZGF0YT8gZGF0YTogdGhpcy5EYXRhO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5Jc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOacqm9wZW7nirbmgIHvvIzkuI3lpITnkIZcclxuICAgICAgICBpZiAoIXRoaXMuSXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLklzU2hvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuSXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5WaWV3LnNob3coZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLklzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vblNob3coZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6ZqQ6JeP55WM6Z2iXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5Jc1Nob3cpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMuSXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5WaWV3LmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSXNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkhpZGUoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDorr7nva7muLLmn5Ppobrluo9cclxuICAgIFNvcnRpbmdPcmRlcihvcmRlcjpudW1iZXIpIHtcclxuICAgICAgICBpZighdGhpcy5Jc0Rlc3Ryb3llZCl7XHJcbiAgICAgICAgICAgIHRoaXMuVmlldy5Tb3J0aW5nT3JkZXIob3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmmK/lkKblj6/op6bmjqdcclxuICAgIGludGVyYWN0aXZlKGNhblRvdWNoOmJvb2xlYW4pe1xyXG4gICAgICAgIGlmKGNhblRvdWNoID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuSXNJbnRlcmFjdGl2ZSA9IGNhblRvdWNoO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuSXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5WaWV3LmludGVyYWN0aXZlKGNhblRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbkludGVyYWN0aXZlKGNhblRvdWNoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVUkoZGF0YT8pe1xyXG4gICAgICAgIHRoaXMuVmlldy5yZWZyZXNoVUkoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZSgpIHt9XHJcblxyXG4gICAgb25DcmVhdGUoKSB7fVxyXG5cclxuICAgIG9uT3BlbihkYXRhPykge31cclxuXHJcbiAgICBvblNob3coZGF0YT8pIHt9XHJcblxyXG4gICAgb25IaWRlKCkge31cclxuICAgIFxyXG4gICAgb25JbnRlcmFjdGl2ZShjYW5Ub3VjaDpib29sZWFuKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmlldyBleHRlbmRzIFVpQ1ZCYXNlIHtcclxuICAgIHN0YXRpYyB2S2V5OnN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGxpc2VudGVyQXJyYXkgPSBuZXcgQXJyYXk8Q3RybExpc2VuZXI+KCk7XHJcbiAgICBwcml2YXRlIF9pc0FsaXZlOmJvb2xlYW47XHJcbiAgICAvLyBwdWJsaWMgbXVsdGl0b25LZXk6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBGdWlJbWFnZVVybDpzdHJpbmc7XHJcbiAgICBwcml2YXRlIEZ1aUJ1ZmZlclVybDpzdHJpbmc7XHJcbiAgICBwcml2YXRlIFBrZ0FkcnM6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBQa2c6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBDb206c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfVUk6Zmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBDYWxsYmFja0xpc3Q6QXJyYXk8RnVuY3Rpb24+ID0gW107XHJcbiAgICBwcml2YXRlIHVpQ2ZnOkNvbmZpZy5WaWV3Q29uZmlnO1xyXG5cclxuICAgIHB1YmxpYyBXaW5kb3c6Zmd1aS5HQ29tcG9uZW50OyAvL+W8ueWHuueql+WPo++8jOazqOaEj+e7hOS7tuWRveWQjeS4uldpbmRvd1xyXG4gICAgcHVibGljIEJ0bl9CYWNrOmZndWkuR0J1dHRvbjsgICAvL+WFs+mXreaMiemSru+8jOWRveWQjeS4ukJ0bl9CYWNrXHJcbiAgICBwdWJsaWMgTGlzdDpmZ3VpLkdMaXN0OyAgLy/liJfooajvvIzpnIDoh6rooYzlrprkuYlcclxuXHJcbiAgICBzdGF0aWMgc2V0IEtleShrZXk6c3RyaW5nKXt0aGlzLnZLZXkgPSBrZXl9XHJcbiAgICBzdGF0aWMgZ2V0IEtleSgpe3JldHVybiB0aGlzLnZLZXl9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tdWx0aXRvbktleSA9IGtleTtcclxuICAgICAgICB0aGlzLl9pc0FsaXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYoIVZpZXdNYXBba2V5XSkge1xyXG4gICAgICAgICAgICBWaWV3TWFwW2tleV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51aUNmZyA9IENvbmZpZy5WaWV3S2l0W2tleV07XHJcbiAgICAgICAgaWYoIXRoaXMudWlDZmcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbmNvcnJlY3QgdmlldyBrZXkhJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFVJKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VJO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJc0FsaXZlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWxpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdGlhbGl6ZSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9VSSl7XHJcbiAgICAgICAgICAgIHRoaXMuX1VJID0gTWFuYWdlci5TcGF3bk1hbmFnZXIuTG9hZFZpZXcodGhpcy51aUNmZy5Qa2csIHRoaXMudWlDZmcuQ29tKTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuX1VJKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgVWkgY29tOiAnLCB0aGlzLnVpQ2ZnLktleSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5XaW5kb3cgPSB0aGlzLlVJLmdldENoaWxkKCdXaW5kb3cnKSBhcyBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxvYWRWaWV3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2Uoa2V5KVxyXG4gICAge1xyXG4gICAgICAgIGlmICgha2V5KSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoIVZpZXdNYXBba2V5XSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZpZXdNYXBba2V5XSA9IG5ldyBWaWV3KGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gVmlld01hcFtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjYWxsYmFja0tleVxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHNldENhbGxiYWNrKGNhbGxiYWNrS2V5OnN0cmluZywgY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgICAgIHRoaXMuQ2FsbGJhY2tMaXN0W2NhbGxiYWNrS2V5XSA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGludm9rZUNhbGxiYWNrKGNhbGxiYWNrS2V5LCAuLi5hcmdzKXtcclxuICAgICAgICBpZih0eXBlb2YoY2FsbGJhY2tLZXkpICE9ICdzdHJpbmcnIHx8IHR5cGVvZih0aGlzLkNhbGxiYWNrTGlzdFtjYWxsYmFja0tleV0pICE9ICdmdW5jdGlvbicpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5DYWxsYmFja0xpc3RbY2FsbGJhY2tLZXldKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJ1dHRvbkxpc2VudGVyKG9iamVjdDpmZ3VpLkdPYmplY3QsIGZ1bjpGdW5jdGlvbiwgZGF0YT86QXJyYXk8YW55PiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKG9iamVjdCA9PSBudWxsIHx8IGZ1biA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm9iamVjdCBvciBmdW4gaXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpc0FyZyA9IHRoaXNBcmc/dGhpc0FyZzogdGhpcztcclxuICAgICAgICBvYmplY3Qub25DbGljayh0aGlzQXJnLCBmdW4sIGRhdGEpO1xyXG4gICAgICAgIHRoaXMubGlzZW50ZXJBcnJheS5wdXNoKG5ldyBDdHJsTGlzZW5lcihvYmplY3QsIGZ1bikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrTGlzdENhbGxiYWNrKHRoaXNBcmcsIGZ1bmM6RnVuY3Rpb24sIC4uLmRhdGEpe1xyXG4gICAgICAgIENvbW1vbi5jbGlja0xpc3RDYWxsYmFjayh0aGlzLkxpc3QsIHRoaXNBcmcsIGZ1bmMsIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9pc0FsaXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8v5riF6Zmk55uR5ZCs5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgLy/muIXpmaTmiYDmnInorqHml7blmahcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIC8v5riF56m654K55Ye75LqL5Lu2XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRoaXMubGlzZW50ZXJBcnJheSl7XHJcbiAgICAgICAgICAgIHRoaXMubGlzZW50ZXJBcnJheVtpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5saXNlbnRlckFycmF5W2ldID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlbGV0ZSBWaWV3TWFwW3RoaXMubXVsdGl0b25LZXldXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZm9yKGxldCBpIGluIHRoaXMpIHtcclxuICAgICAgICAvLyAgICAgLy8g6ZSA5q+BVUlcclxuICAgICAgICAvLyAgICAgLy8gaWYodGhpc1tpXSAmJiB0aGlzW2ldLmRpc3Bvc2UpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIHRoaXNbaV0uZGlzcG9zZSgpO1xyXG4gICAgICAgIC8vICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vICAgICAvLyB0aGlzW2ldID0gdW5kZWZpbmVkXHJcblxyXG4gICAgICAgIC8vICAgICAvLyBpZih0aGlzW2ldIGluc3RhbmNlb2YgZmd1aS5HQ29tcG9uZW50ID09IHRydWUpe1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgdGhpc1tpXS5kaXNwbGF5T2JqZWN0Lm9mZkFsbCgpO1xyXG4gICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLl9VSS5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBvbkRlc3Ryb3koKXt9XHJcblxyXG4gICAgTG9hZFZpZXcoKSB7fVxyXG5cclxuICAgIHJlZnJlc2hVSShkYXRhPykge31cclxuXHJcbiAgICBpbnRlcmFjdGl2ZShjYW5Ub3VjaCkge1xyXG4gICAgICAgIHRoaXMuX1VJLnRvdWNoYWJsZSA9IGNhblRvdWNoO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgU29ydGluZ09yZGVyKG9yZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fVUkuc29ydGluZ09yZGVyID0gb3JkZXI7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBzaG93KGRhdGE/KXtcclxuICAgICAgICB0aGlzLl9VSS52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCl7XHJcbiAgICAgICAgdGhpcy5fVUkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjYWRle1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBzdGF0aWMgUHVzaEN0cmwoY3RybDpDb250cm9sbGVyLCBkYXRhPyl7XHJcbiAgICAgICAgaWYoIWN0cmwpIHJldHVybjtcclxuXHJcbiAgICAgICAgT3BlbmVkQ3RybFtjdHJsLm11bHRpdG9uS2V5XSA9IGN0cmw7XHJcbiAgICAgICAgbGV0IG5leHRjID0gT3BlbmVkQ3RybFtPYmplY3Qua2V5cyhPcGVuZWRDdHJsKVswXV07XHJcbiAgICAgICAgaWYobmV4dGMpe1xyXG4gICAgICAgICAgICBuZXh0Yy5zaG93KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29udHJvbGxlcihpZCl7XHJcbiAgICAgICAgbGV0IGN0cmwgPSBDdHJsTWFwQXJyYXlbaWRdO1xyXG4gICAgICAgIGlmKGN0cmwpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgY3RybCgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSAnLi4vRGF0YS9EYXRhJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb250cm9sbGVyIGV4dGVuZHMgVUkuQ29udHJvbGxlcntcclxuICAgIHB1YmxpYyBWaWV3OlVJLkxvYWRpbmdWaWV3O1xyXG5cclxuICAgIG9uT3BlbihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5WaWV3LlNob3dfQy5zZWxlY3RlZEluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5OZXRIdHRwQ29ubmVjdEVpZC5Db25uZWN0QmVnaW4sIHRoaXMub3Blbkh0dHBTdGFydCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5OZXRIdHRwQ29ubmVjdEVpZC5TZXJ2aWNlUmVzcG9uZCwgdGhpcy5vbkh0dHBSZXNwb25kKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TG9hZGluZygpe1xyXG4gICAgICAgIHRoaXMuVmlldy5TaG93X0Muc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUxvYWRpbmcoKXtcclxuICAgICAgICB0aGlzLlZpZXcuU2hvd19DLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6L+e5o6l5a6M5oiQXHJcbiAgICBvbkh0dHBSZXNwb25kKCl7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lvIDlp4vov57mjqVcclxuICAgIG9wZW5IdHRwU3RhcnQoKXtcclxuICAgICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKCl7XHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3Iub2ZmKGNjLkRpcmVjdG9yLkVWRU5UX0JFRk9SRV9TQ0VORV9MT0FESU5HLCB0aGlzLmNsb3NlLCB0aGlzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tICcuLi9Db25maWcvQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyIGV4dGVuZHMgQ29yZS5Db250cm9sbGVye1xyXG4gICAgcHVibGljIFZpZXc6VUkuTG9hZGluZ1Byb2dyZXNzVmlldztcclxuICAgIHB1YmxpYyBQcm9ncmVzcyA9IDA7XHJcbiAgICBwdWJsaWMgSXNMb2FkZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgUGtnTnVtID0gMDtcclxuICAgIHByaXZhdGUgUmVzTnVtID0gMDtcclxuXHJcbiAgICBvbk9wZW4oZGF0YSkge1xyXG4gICAgICAgIHRoaXMuVmlldy5VSS50ZXh0ID0gXCIwJVwiO1xyXG5cclxuICAgICAgICAvL+W8gOWPkeeJiOWFiOaYvuekuumAieacjeWKoeWZqOeUu+mdolxyXG4gICAgICAgIC8vIGlmKE1hbmFnZXIuVmVyc2lvbk1hbmFnZXIuVmVyc2lvbiA9PSBDb25maWcuVmVyc2lvbkNvbmZpZy5EZXZlbG9wKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLnNldFByb2dyZXNzTnVtYmVyKCk7XHJcbiAgICAgICAgdGhpcy5zaW1Qcm9ncmVzcygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuUGFja2FnZUxvYWRlZCwgdGhpcy5vblJlc0xvYWRlZCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkxvZ2luU3VjY2VzcywgdGhpcy5vbkxvZ2luU3VjY2Vzcyk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkNvbmZpZ0xvYWRlZCwgdGhpcy50cnlDbG9zZSk7XHJcbiAgICAgICAgLy/ov5vlnLrmma/kuZ/pnIDopoHnrYnlvoXmqKHmi5/ov5vluqZcclxuXHRcdC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVFbnRlckVpZC5NYWluTWVudSwgdGhpcy50cnlDbG9zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRQcm9ncmVzc051bWJlcigpe1xyXG4gICAgICAgIC8v55m75b2V6ZyA6KaB5Yqg6L2955qEVUnljIXmlbDph48tLWNvY29z55SoXHJcbiAgICAgICAgLy8gdGhpcy5Qa2dOdW0gPSBVSUNvbmZpZy5VSVBrZ3MubGVuZ3RoICogMjtcclxuICAgICAgICB0aGlzLlJlc051bSA9IENvbmZpZy5sb2dpblJlc1VybHMubGVuZ3RoICsgQ29uZmlnLnVybHMubGVuZ3RoICsgNTtcclxuXHJcbiAgICAgICAgLy/lsI/muLjmiI/liqDkuIrliIbljIXov5vluqZcclxuICAgICAgICBpZihDb21tb24uaXNNaW5pR2FtZSgpKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuUGtnTnVtICs9IFVJQ29uZmlnLlN1YlBrZ3MubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLlJlc051bSArPSBDb25maWcuVUlDb25maWcuU3ViUGtncy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVaVByb2dyZXNzKHByb2dyZXNzOm51bWJlciwgcGtnTmFtZT86c3RyaW5nKXtcclxuICAgICAgICBwa2dOYW1lID0gcGtnTmFtZSB8fCAnJztcclxuICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9ICdMb2FkaW5nIHVpICcgKyBwa2dOYW1lICsgJzogJyArIHByb2dyZXNzICogMTAwICsgJyUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5YGH6L+b5bqmXHJcbiAgICBzaW1Qcm9ncmVzcygpe1xyXG4gICAgICAgIHRoaXMuUHJvZ3Jlc3MgKz0gMTAwIC8gdGhpcy5SZXNOdW07XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gTWF0aC5jZWlsKHRoaXMuUHJvZ3Jlc3MpO1xyXG4gICAgICAgIHByb2dyZXNzID0gcHJvZ3Jlc3MgPiAxMDA/IDEwMDogcHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSBwcm9ncmVzcyArIFwiJVwiO1xyXG5cclxuICAgICAgICBpZih0aGlzLlByb2dyZXNzID49IDEwMCl7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5Q2xvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDEwMCwgdGhpcywgdGhpcy5zaW1Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvZ3Jlc3MoYWRkUHJvZ3Jlc3Mpe1xyXG4gICAgICAgIHRoaXMuUHJvZ3Jlc3MgKz0gMTAwIC8gdGhpcy5Qa2dOdW07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5Qcm9ncmVzcyk7XHJcbiAgICAgICAgLy8gdGhpcy5Qcm9ncmVzcyA9IHRoaXMuUHJvZ3Jlc3MgPiAxMDA/IDEwMDogdGhpcy5Qcm9ncmVzcztcclxuXHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gTWF0aC5jZWlsKHRoaXMuUHJvZ3Jlc3MpO1xyXG4gICAgICAgIHByb2dyZXNzID0gcHJvZ3Jlc3MgPiAxMDA/IDEwMDogcHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSBwcm9ncmVzcyArIFwiJVwiO1xyXG5cclxuICAgICAgICAvL+WKoOi9veWujOaIkFVJ5YyFXHJcbiAgICAgICAgaWYodGhpcy5Qcm9ncmVzcyA+PSAxMDApe1xyXG4gICAgICAgICAgICB0aGlzLklzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUxvZ2luRWlkLlBhY2thZ2VMb2FkZWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93V3hMb2dpbigpO1xyXG4gICAgICAgICAgICAvLyBpZihEYXRhQmFzZS5Mb2dpbkRhdGEuQWNjb3VudE5hbWUpe1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dXeExvZ2luKCl7XHJcbiAgICAgICAgaWYoIUNvbW1vbi5pc01pbmlHYW1lKCkgfHwgTG9jYWxDb25maWcuSXNXeEF1dGggfHwgIXRoaXMuSXNMb2FkZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5WaWV3LnNob3dXeExvZ2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvbmZpZ1Byb2dyZXNzKCl7XHJcbiAgICAgICAgaWYoQ29uZmlnLkRhdGFDb25maWcuSXNDb25maWdMb2FkZWQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9IFwi5Yqg6L296YWN572u5LitXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2dpblByb2dyZXNzKCl7XHJcbiAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSBcIueZu+W9leS4rVwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9naW5TdWNjZXNzKCl7XHJcbiAgICAgICAgdGhpcy50cnlDbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzTG9hZGVkKCl7XHJcbiAgICAgICAgdGhpcy5Jc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50cnlDbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5ruh6Laz5omA5pyJ5p2h5Lu25omN5YWz6Zet5Yqg6L2955WM6Z2iXHJcbiAgICB0cnlDbG9zZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuUHJvZ3Jlc3MgPCAxMDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoTWFuYWdlci5WZXJzaW9uTWFuYWdlci5WZXJzaW9uID09IENvbmZpZy5WZXJzaW9uQ29uZmlnLkRldmVsb3Ape1xyXG4gICAgICAgICAgICBpZighTG9jYWxDb25maWcuSXNDaG9vc2VkU2VydmljZSkgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoQ29uZmlnLkRhdGFDb25maWcuSXNDb25maWdMb2FkZWQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb25maWdQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihEYXRhLkxvZ2luRGF0YS5Jc0xvZ2luZWQgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMb2dpblByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFDb25maWcuVUlDb25maWcuTG9naW5QYWNrYWdlTG9hZGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKCl7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUxvZ2luRWlkLlNpbVByb2dyZXNzRW5kKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1VJQ29uZmlnfSBmcm9tIFwiLi4vQ29uZmlnL1VJQ29uZmlnXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1Byb2dyZXNzVmlldyBleHRlbmRzIENvcmUuVmlld3tcclxuICAgIHB1YmxpYyBMb2dpbl9DOmZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBMb2FkVmlldygpIHtcclxuICAgICAgICAvL+a4suafk+Wxgue6p1xyXG4gICAgICAgIHRoaXMuVUkuc29ydGluZ09yZGVyID0gVUlDb25maWcuU29ydGluZ09yZGVyLlNjZW5lTG9hZGluZztcclxuXHJcbiAgICAgICAgdGhpcy5Mb2dpbl9DID0gdGhpcy5VSS5nZXRDb250cm9sbGVyKCdMb2dpbl9DJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1d4TG9naW4oKXtcclxuICAgICAgICB0aGlzLkxvZ2luX0Muc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSAnLi4vRGF0YS9EYXRhJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdWaWV3IGV4dGVuZHMgVUkuVmlld3tcclxuICAgIHB1YmxpYyBTaG93X0M6Zmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIExvYWRWaWV3KCkge1xyXG4gICAgICAgIC8v5riy5p+T5bGC57qnXHJcbiAgICAgICAgdGhpcy5VSS5zb3J0aW5nT3JkZXIgPSBDb25maWcuVUlDb25maWcuU29ydGluZ09yZGVyLk5ldFNpZ25hbDtcclxuXHJcbiAgICAgICAgdGhpcy5TaG93X0MgPSB0aGlzLlVJLmdldENvbnRyb2xsZXIoXCJTaG93X0NcIilcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0IHtVSUNvbmZpZ30gZnJvbSBcIi4uL0NvbmZpZy9VSUNvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5sZXQgY0tleSA9IENvbmZpZy5WaWV3S2l0LlB1YmxpY0NvbmZpcm1hdGlvbi5LZXk7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlciBleHRlbmRzIENvcmUuQ29udHJvbGxlcntcclxuICAgIHN0YXRpYyBjS2V5ID0gY0tleTtcclxuICAgIFZpZXc6VUkuUHVibGljQ29uZmlybWF0aW9uVmlldztcclxuICAgIENhbGxiYWNrOkZ1bmN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoY0tleSwgVUkuUHVibGljQ29uZmlybWF0aW9uVmlldywgZmFsc2UsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbihkYXRhOkNvbmZpZy5Qb3B1cFdpbmRvd0RhdGEpIHtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbkxpc2VudGVyKHRoaXMuVmlldy5CdG5fQ2xvc2UsIHRoaXMuY2xvc2UpO1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uTGlzZW50ZXIodGhpcy5WaWV3LkJ0bl9DYW5jZWwsIHRoaXMuY2xvc2UpO1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uTGlzZW50ZXIodGhpcy5WaWV3LkJ0bl9ZZXMsIHRoaXMueWVzQnRuT25DbGljayk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGF0YSA9PSBudWxsIHx8IGRhdGEgaW5zdGFuY2VvZiBDb25maWcuUG9wdXBXaW5kb3dEYXRhID09IGZhbHNlKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBwb3B1cCB3aW5kb3cgZGF0YS4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLkNhbGxiYWNrID0gZGF0YS5ZZXNCdG5DYWxsYmFjaztcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVUkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHllc0J0bk9uQ2xpY2soKXtcclxuICAgICAgICBpZih0aGlzLkNhbGxiYWNrKXtcclxuICAgICAgICAgICAgdGhpcy5DYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKXtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1VJQ29uZmlnfSBmcm9tIFwiLi4vQ29uZmlnL1VJQ29uZmlnXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmxldCB2S2V5ID0gQ29uZmlnLlZpZXdLaXQuUHVibGljQ29uZmlybWF0aW9uLktleTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdWJsaWNDb25maXJtYXRpb25WaWV3IGV4dGVuZHMgQ29yZS5WaWV3e1xyXG4gICAgc3RhdGljIHZLZXkgPSB2S2V5O1xyXG4gICAgQnRuX0Nsb3NlOmZndWkuR0J1dHRvbjtcclxuICAgIEJ0bl9ZZXM6Zmd1aS5HQnV0dG9uO1xyXG4gICAgQnRuX0NhbmNlbDpmZ3VpLkdCdXR0b247XHJcbiAgICBMaXN0X0NvbnRlbnQ6Zmd1aS5HTGlzdDtcclxuICAgIExpc3RfUmV3YXJkOmZndWkuR0xpc3Q7XHJcbiAgICBDb250ZW50X0M6Zmd1aS5Db250cm9sbGVyO1xyXG4gICAgQnRuVHlwZV9DOmZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKHZLZXkpXHJcbiAgICB9XHJcblxyXG4gICAgTG9hZFZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5CdG5fQ2xvc2UgPSB0aGlzLldpbmRvdy5nZXRDaGlsZCgnQnRuX0Nsb3NlJykuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5CdG5fWWVzID0gdGhpcy5XaW5kb3cuZ2V0Q2hpbGQoJ0J0bl9ZZXMnKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLkJ0bl9DYW5jZWwgPSB0aGlzLldpbmRvdy5nZXRDaGlsZCgnQnRuX0NhbmNlbCcpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuTGlzdF9Db250ZW50ID0gdGhpcy5XaW5kb3cuZ2V0Q2hpbGQoJ0xpc3RfQ29udGVudCcpLmFzTGlzdDtcclxuICAgICAgICB0aGlzLkxpc3RfUmV3YXJkID0gdGhpcy5XaW5kb3cuZ2V0Q2hpbGQoJ0xpc3RfUmV3YXJkJykuYXNMaXN0O1xyXG4gICAgICAgIHRoaXMuQ29udGVudF9DID0gdGhpcy5XaW5kb3cuZ2V0Q29udHJvbGxlcignQ29udGVudF9DJyk7XHJcbiAgICAgICAgdGhpcy5CdG5UeXBlX0MgPSB0aGlzLldpbmRvdy5nZXRDb250cm9sbGVyKCdCdG5UeXBlX0MnKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVUkoZGF0YTpDb25maWcuUG9wdXBXaW5kb3dEYXRhKXtcclxuICAgICAgICBpZighZGF0YSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkNvbnRlbnRfQy5zZWxlY3RlZEluZGV4ID0gZGF0YS5XaW5kb3dUeXBlIC0gMTtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuV2luZG93VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5Db250ZW50OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5CdG5UeXBlX0Muc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxDb250ZW50cyhkYXRhLkNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLkNvbmZpcm1XaW5kb3dUeXBlLlJld2FyZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuQnRuVHlwZV9DLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsUmV3YXJkcyhkYXRhLlJld2FyZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5Db250ZW50QW5kUmV3YXJkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5CdG5UeXBlX0Muc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxDb250ZW50cyhkYXRhLkNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsUmV3YXJkcyhkYXRhLlJld2FyZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+aMiemSruaWh+Wtl1xyXG4gICAgICAgIGlmKGRhdGEuWWVzQnRuQ29udGVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuQnRuX1llcy50ZXh0ID0gZGF0YS5ZZXNCdG5Db250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkYXRhLkNhbmNlbEJ0bkNvbnRlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLkJ0bl9DYW5jZWwudGV4dCA9IGRhdGEuQ2FuY2VsQnRuQ29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbENvbnRlbnRzKGRhdGE6QXJyYXk8c3RyaW5nPil7XHJcbiAgICAgICAgdGhpcy5MaXN0X0NvbnRlbnQucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcclxuICAgICAgICBkYXRhLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICB0aGlzLkxpc3RfQ29udGVudC5hZGRJdGVtRnJvbVBvb2woKS50ZXh0ID0gdjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsUmV3YXJkcyhyZXdhcmREYXRhOmFueVtdKXtcclxuICAgICAgICBDb21tb24uZmlsbEl0ZW1MaXN0RGF0YShyZXdhcmREYXRhLCB0aGlzLkxpc3RfUmV3YXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQ2hvb3NlU2VydmljZUNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0Nob29zZVNlcnZpY2VWaWV3JztcclxuZXhwb3J0ICogZnJvbSAnLi9Db3JlJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nQ29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ1Byb2dyZXNzVmlldyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ1ZpZXcnO1xyXG5leHBvcnQgKiBmcm9tICcuL1B1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1B1YmxpY0NvbmZpcm1hdGlvblZpZXcnO1xyXG4iXX0=

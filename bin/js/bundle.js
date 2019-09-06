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
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var _a;
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
            fairygui.UIPackage.addPackage('res/' + pkgName + '/' + pkgName);
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
 * @param  {fairygui.GComponent} windowUi
 */
function PlayPopupEffect(windowUi, callback, thisArg) {
    if (windowUi instanceof fairygui.GObject) {
        windowUi.setPivot(0.5, 0.5);
        fairygui.tween.GTween.to(0, 1, 0.5)
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
 * @param  {fairygui.GTextField} textFiled
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
    if (txt instanceof fairygui.GTextField == false)
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
//设置fairygui控制器页签
function SetGControllerIdx(gctrl, idx) {
    if (gctrl instanceof fairygui.Controller == false || typeof idx != 'number')
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
 * @param  {fairygui.GComponent} adCom
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
 * @param  {fairygui.GComponent} adCom
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
//     if(!fairygui.GRoot.inst) return;
//     let canvas = cc.find("Canvas");
//     fairygui.GRoot.inst.node.parent = cc.find("Canvas");
//     fairygui.GRoot.inst.node.x = -canvas.width * 0.5;
//     fairygui.GRoot.inst.node.y = canvas.height * 0.5;
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
    list.on(fairygui.Events.CLICK_ITEM, thisArg, onClickListItem, [thisArg, func, data]);
}
exports.clickListCallback = clickListCallback;
},{"../Config/Config":8,"../Config/UIConfig":17,"../Manager/Manager":32}],7:[function(require,module,exports){
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
    // let width  = fairygui.GRoot.inst.width;
    // let height  = fairygui.GRoot.inst.height;
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
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"../Data/Data":18,"../Manager/Manager":32,"./GEvent":3,"./Utils":6}],8:[function(require,module,exports){
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
},{"./ConfigUtils":9,"./DataConfig":10,"./Define":11,"./LocalConfig":12,"./LocalContent":13,"./LoginResUrls":14,"./NetConfig":15,"./ResUrls":16,"./UIConfig":17}],9:[function(require,module,exports){
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
//获取道具配置
function getItemConfig(id) {
    return getConfigById(Config.LOCALCONFIG_KEY.ITEM, id);
}
exports.getItemConfig = getItemConfig;
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
    //默认值
    DEFAULT_CONFIG: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //洞府食物
    ADOBE_FOOD: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //洞府陨铁
    ADOBE_IRON: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //洞府灵石
    ADOBE_STONE: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //洞府默认配置
    ADOBE_DEFAULT: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //洞府木材
    ADOBE_WOOD: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //洞府灵池
    ADOBE_POOL: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //灵池默认值
    ADOBE_POOL_DEFAULT: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //风水土
    ADOBE_POOL_SOIL: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //风水木
    ADOBE_POOL_WOOD: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //风水水
    ADOBE_POOL_WATER: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //风水火
    ADOBE_POOL_FIRE: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //风水金
    ADOBE_POOL_GOLD: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //随机语句
    RANDOM_WORDS: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派
    SECTS: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派人物
    SECTERS: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派品阶
    SECT_GRADE: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派技能
    SECT_KF: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派技能升级
    SECT_KF_UPGRADE: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派技能升级总量
    SECT_KF_ADD_NUM: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派任务
    SECT_TASK: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派修炼塔
    SECT_TRAIN_TOWER: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派默认值
    SECT_DEFAULT: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //书籍技能
    BOOK_SKILL: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //储物袋升级消耗
    BAG_UP_COST: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //物品
    ITEM: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //装备
    EQUIPMENT: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派招式
    SECT_ZHAOSHI: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //战斗奖励
    BATTLE_AWARDS: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //机器人
    BATTLE_AI: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //镇妖塔层级
    MONSTER_TOWER: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
};
var DataConfig = /** @class */ (function () {
    function DataConfig() {
        this.countNum = 0; //配置计数
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
            _this.countNum++;
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
        // if(typeof(data) == 'string'){
        //     data = JSON.parse(data);
        // }
        // Common.saveLocalJson(key, data);
        //后端发来json字符串
        Common.saveLocalStorage(PREFIX_LOCALCONFIG_KEY + key, data);
        this.countNum++;
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
        // return Common.getLocalJson(key);
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
    DataConfig.SYNTHESIS_URL = 'res/config/Synthesis.json';
    DataConfig.LEVELUP_URL = 'res/config/LevelUp.json';
    DataConfig.KONGFU_URL = 'res/config/KongFu.json';
    DataConfig.KONGFU_ATTRIBUTE_URL = 'res/config/KongFuAttribute.json';
    DataConfig.WEAPON_TYPE_URL = 'res/config/WeaponType.json';
    DataConfig.YOKE_URL = 'res/config/Yoke.json';
    DataConfig.SECT_URL = 'res/config/Sect.json';
    DataConfig.HERO_URL = 'res/config/Hero.json';
    //配置id，须与res/Config/JsonHot.Type相同
    DataConfig.CULTIVATION_KEY = "Cultivation";
    //对应后端的表格tableId
    // public static KEY_CULTIVATION_PERIOD = PREFIX_LOCALCONFIG_KEY + 1;  //修为阶段
    // public static KEY_ADOBE_FOOD = PREFIX_LOCALCONFIG_KEY + 3;  //洞府食物
    // public static KEY_ADOBE_IRON = PREFIX_LOCALCONFIG_KEY + 4;  //洞府陨铁
    // public static KEY_ADOBE_STONE = PREFIX_LOCALCONFIG_KEY + 5;  //洞府灵石
    // public static KEY_ADOBE_WOOD = PREFIX_LOCALCONFIG_KEY + 7;  //洞府木材
    // public static KEY_ADOBE_DEFAULT = PREFIX_LOCALCONFIG_KEY + 6;  //洞府默认配置
    // public static KEY_ADOBE_POOL = PREFIX_LOCALCONFIG_KEY + 8;  //洞府灵池
    // public static KEY_ADOBE_POOL_DEFAULT = PREFIX_LOCALCONFIG_KEY + 9;  //灵池默认值
    // public static KEY_ADOBE_POOL_SOIL = PREFIX_LOCALCONFIG_KEY + 10;  //风水土
    // public static KEY_ADOBE_POOL_WOOD = PREFIX_LOCALCONFIG_KEY + 11;  //风水木
    // public static KEY_ADOBE_POOL_WATER = PREFIX_LOCALCONFIG_KEY + 12;  //风水水
    // public static KEY_ADOBE_POOL_FIRE = PREFIX_LOCALCONFIG_KEY + 13;  //风水火
    // public static KEY_ADOBE_POOL_GOLD = PREFIX_LOCALCONFIG_KEY + 14;  //风水金
    // public static KEY_RANDOM_WORDS = PREFIX_LOCALCONFIG_KEY + 15;  //随机语句
    DataConfig.SYNTHESIS_KEY = "synthesis";
    DataConfig.LEVELUP_KEY = "levelUp";
    DataConfig.KONGFU_KEY = "kongFu";
    DataConfig.KONGFU_ATTRIBUTE_KEY = "kongFuAttribute";
    DataConfig.WEAPON_TYPE_KEY = "weapon_Type";
    DataConfig.YOKE_KEY = "yoke";
    DataConfig.SECT_KEY = "sect";
    DataConfig.Hero_KEY = "Hero";
    DataConfig.JSON_CONFIGS = "json_configs";
    //最大生命值
    DataConfig.MAX_HEALTH = 100;
    //初始金币
    DataConfig.INIT_GOLD = 5;
    //回合购买CD
    DataConfig.ROUND_CD = 15;
    //上阵数目
    DataConfig.TROOP_NUM = 9;
    //背包数目
    DataConfig.BAG_TOTAL = 8;
    //选择派别
    DataConfig.HeroSect = 0;
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
},{}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./DataBase"));
},{"./DataBase":19}],19:[function(require,module,exports){
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
},{"../Common/Common":1,"../Common/GEvent":3,"../Config/Config":8,"../Manager/Manager":32}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
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
        fairygui.UIConfig.packageFileExtension = "txt";
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
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
},{"./Common/Common":1,"./Config/Config":8,"./Data/Data":18,"./Logic/Logic":25,"./Manager/Manager":32}],22:[function(require,module,exports){
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
},{"../Common/Common":1}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("../Manager/Manager");
var Common = require("../Common/Common");
var Logic = require("./Logic");
var DESK_POS = new Laya.Vector3(2.5, 4, -5);
var DESK_END_POS = new Laya.Vector3(2.5, -1, -5);
var HAND_POS = new Laya.Vector3(-3, -2, -5);
var HAND_END_POS = new Laya.Vector3(0, -2, -5);
var DESK_SIZE = new Laya.Vector3(0.2, 3, 2);
var HAND_SIZE = new Laya.Vector3(6, 0.5, 0.5);
//speed
var SPEED_FORWARD_DESK = new Laya.Vector3(0, -10, 0);
var SPEED_BACK_DESK = new Laya.Vector3(0, 10, 0);
var SPEED_FORWARD_HAND = new Laya.Vector3(50, 0, 0);
var SPEED_BACK_HAND = new Laya.Vector3(-50, 0, 0);
var GrabLogic = /** @class */ (function (_super) {
    __extends(GrabLogic, _super);
    function GrabLogic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.IsInited = false;
        _this.Vdir = new Laya.Vector3();
        _this.DeskPosition = new Laya.Vector3();
        return _this;
    }
    GrabLogic.prototype.onAwake = function () {
        this.GScene = Manager.SceneManager.CurScene;
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
        // Laya.stage.on(Laya.Event.DOUBLE_CLICK, this, this.restart);
        this.IsInited = true;
        this.moveDesk();
    };
    GrabLogic.prototype.addPhysics = function (target, size) {
        var rigidBody = target.addComponent(Laya.Rigidbody3D); //Rigidbody3D可与StaticCollider和RigidBody3D产生碰撞
        rigidBody.colliderShape = new Laya.BoxColliderShape(size.x, size.y, size.z);
        rigidBody.gravity = Laya.Vector3._ZERO;
        rigidBody.isTrigger = true;
        rigidBody.isKinematic = true;
    };
    GrabLogic.prototype.addCollisionScript = function () {
        this.deskScript = this.Desk.addComponent(Logic.DeskCollisionScript);
        this.deskScript.kinematicSprite = this.Hand;
        this.handScript = this.Hand.addComponent(Logic.HandCollisionScript);
        this.handScript.kinematicSprite = this.Desk;
    };
    GrabLogic.prototype.restart = function () {
        this.deskScript.clearStatus();
        // this.moveDesk();
    };
    GrabLogic.prototype.moveDesk = function () {
        this.deskDown();
        this.DeskClass.State = Manager.StateBase.MOVE_FORWARD;
    };
    GrabLogic.prototype.resetDesk = function () {
        this.deskScript.clearStatus();
        // this.DeskClass.Rigid3D.linearVelocity = Laya.Vector3._ZERO;
        this.DeskClass.Obj.transform.position = DESK_POS;
        // this.DeskClass.State = Manager.StateBase.IDEL;
    };
    GrabLogic.prototype.deskDown = function () {
        if (!this.IsInited)
            return;
        var vec = this.DeskClass.Obj.transform.position;
        vec.y -= 0.3;
        this.DeskClass.Obj.transform.position = vec;
    };
    GrabLogic.prototype.deskUp = function () {
        if (!this.IsInited)
            return;
        var vec = this.DeskClass.Obj.transform.position;
        vec.y += 0.3;
        this.DeskClass.Obj.transform.position = vec;
    };
    GrabLogic.prototype.updateDesk = function () {
        if (!this.IsInited)
            return;
        switch (this.DeskClass.State) {
            case Manager.StateBase.IDEL:
                break;
            case Manager.StateBase.MOVE_FORWARD:
                if (this.deskScript.IsHit) {
                    this.resetDesk();
                }
                else if (this.DeskClass.Obj.transform.position.y <= DESK_END_POS.y) {
                    // this.DeskClass.Rigid3D.linearVelocity = SPEED_BACK_DESK;
                    this.deskUp();
                    this.DeskClass.State = Manager.StateBase.MOVE_BACK;
                }
                else {
                    this.deskDown();
                }
                break;
            case Manager.StateBase.MOVE_BACK:
                if (this.DeskClass.Obj.transform.position.y >= DESK_POS.y) {
                    // this.DeskClass.Rigid3D.linearVelocity = SPEED_FORWARD_DESK;
                    this.deskDown();
                    this.DeskClass.State = Manager.StateBase.MOVE_FORWARD;
                }
                else {
                    this.deskUp();
                }
                break;
        }
    };
    GrabLogic.prototype.moveHand = function () {
        if (!this.IsInited)
            return;
        if (this.HandClass.State == Manager.StateBase.IDEL) {
            // this.HandClass.Rigid3D.linearVelocity = SPEED_FORWARD_HAND;
            this.HandClass.State = Manager.StateBase.MOVE_FORWARD;
        }
    };
    GrabLogic.prototype.handForward = function () {
        if (!this.IsInited)
            return;
        var vec = this.HandClass.Obj.transform.position;
        vec.x += 0.3;
        this.HandClass.Obj.transform.position = vec;
    };
    GrabLogic.prototype.handBack = function () {
        if (!this.IsInited)
            return;
        var vec = this.HandClass.Obj.transform.position;
        vec.x -= 0.3;
        this.HandClass.Obj.transform.position = vec;
    };
    GrabLogic.prototype.resetHand = function () {
        // this.HandClass.Rigid3D.linearVelocity = Laya.Vector3._ZERO;
        this.HandClass.Obj.transform.position = HAND_POS;
        this.HandClass.State = Manager.StateBase.IDEL;
    };
    GrabLogic.prototype.updateHand = function () {
        if (!this.IsInited)
            return;
        switch (this.HandClass.State) {
            case Manager.StateBase.IDEL:
                break;
            case Manager.StateBase.MOVE_FORWARD:
                if (this.deskScript.IsHit) {
                    this.resetHand();
                }
                else if (this.HandClass.Obj.transform.position.x >= HAND_END_POS.x) {
                    // this.HandClass.Rigid3D.linearVelocity = SPEED_BACK_HAND;
                    this.HandClass.State = Manager.StateBase.MOVE_BACK;
                }
                else {
                    this.handForward();
                }
                break;
            case Manager.StateBase.MOVE_BACK:
                if (this.HandClass.Obj.transform.position.x <= HAND_POS.x) {
                    this.resetHand();
                }
                else {
                    this.handBack();
                }
                break;
        }
    };
    GrabLogic.prototype.onUpdate = function () {
        this.updateDesk();
        this.updateHand();
        // let handPos = this.Hand.transform.position;
        // if(this.Vdir.x < 0){
        //     if(handPos.x < DESK_POS.x){
        //         this.HandState = Manager.StateBase.BACK_PASSED;
        //     }
        // }
    };
    return GrabLogic;
}(Common.EventDispather));
exports.GrabLogic = GrabLogic;
var RigidObject = /** @class */ (function () {
    function RigidObject(obj) {
        this.State = Manager.StateBase.IDEL;
        this.Obj = obj;
        this.Rigid3D = obj.getComponent(Laya.Rigidbody3D);
    }
    return RigidObject;
}());
},{"../Common/Common":1,"../Manager/Manager":32,"./Logic":25}],24:[function(require,module,exports){
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
},{"../Common/Common":1}],25:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./GrabLogic"));
__export(require("./DeskCollisionScript"));
__export(require("./HandCollisionScript"));
},{"./DeskCollisionScript":22,"./GrabLogic":23,"./HandCollisionScript":24}],26:[function(require,module,exports){
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
},{"./GameConfig":20,"./Manager/Manager":32}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("./Manager");
var Common = require("../Common/Common");
var BaseManager = /** @class */ (function (_super) {
    __extends(BaseManager, _super);
    function BaseManager() {
        return _super.call(this) || this;
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
},{"../Common/Common":1,"./Manager":32}],28:[function(require,module,exports){
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
        var grootInst = fairygui.GRoot.inst;
        this.TouchCom = fairygui.UIPackage.createObjectFromURL('ui://MainUI/Component_dianji').asCom;
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
        this.TouchCom.setXY(pos.x, fairygui.GRoot.inst.height - pos.y);
        this.TouchCom.getTransition('Effect_T').play();
    };
    ClickEffectManager.hide = function () {
        this.TouchCom.visible = false;
        // fairygui.GRoot.inst.node.targetOff(this);
    };
    ClickEffectManager.show = function () {
        this.TouchCom.visible = true;
    };
    return ClickEffectManager;
}());
exports.ClickEffectManager = ClickEffectManager;
},{"../Config/Config":8}],29:[function(require,module,exports){
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
},{"../Common/Common":1,"../Data/Data":18,"./Manager":32}],30:[function(require,module,exports){
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
},{"../UI/UI":52,"./Manager":32}],31:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/LocalConfig":12,"../Manager/Manager":32,"../UI/UI":52}],32:[function(require,module,exports){
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
__export(require("./RoleBase"));
__export(require("./StateBase"));
__export(require("./SceneManager"));
__export(require("./SpawnManager"));
__export(require("./TimerManager"));
__export(require("./UIManager"));
__export(require("./VersionManager"));
__export(require("./DataManager"));
__export(require("./PoolManager"));
__export(require("./RoleManager"));
},{"./BaseManager":27,"./ClickEffectManager":28,"./DataManager":29,"./LoadingIconManager":30,"./LoadingProgressManager":31,"./NetManager":33,"./PoolManager":34,"./RoleBase":35,"./RoleManager":36,"./SceneManager":37,"./SpawnManager":38,"./StateBase":39,"./TimerManager":40,"./UIManager":41,"./VersionManager":42}],33:[function(require,module,exports){
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
    HttpManager.prototype.onAwake = function () {
        // Data.DevReqBody.InitBaseBody();
        // this.addEventListener(Common.SceneLoginEid.LoginSuccess, this.initDevBodies);
    };
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
        // let popupData = {
        //     Content: Config.LocalContent.NetError,
        //     YesBtnContent:Config.LocalContent.Yes,
        //     // BtnStyle: 1,
        //     HasBg: false,
        //     YesBtnCallback:this.Connect.bind(this, '', this.Data, this.Callback, this.IsShowLoading)
        // }
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
        //发送响应数据，回传请求数据
        // if(typeof(this.Data.ReqData) == 'string'){
        //     this.Data.ReqData = JSON.parse(this.Data.ReqData);
        // }
        // Data.DataStruct.OnHttpRequestComplete(data, this._reqKey, this.Data.ReqData);
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
},{"../Common/Common":1,"../Config/Config":8,"./Manager":32}],34:[function(require,module,exports){
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
        //fairygui对象池
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
                    if (item instanceof fairygui.GObject)
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
    PoolManager.getHead = function (path, callback, thisArg) {
        this.getModelByType(Config.PoolType.HeadModel, path, callback, thisArg);
    };
    PoolManager.getBody = function (path, callback, thisArg) {
        this.getModelByType(Config.PoolType.BodyModel, path, callback, thisArg);
    };
    PoolManager.returnFguiObj = function (box) {
        this.recover(Config.PoolType.FguiObj, box);
    };
    //fairygui对象池
    PoolManager.fguiPool = new fairygui.GObjectPool();
    return PoolManager;
}(Manager.BaseManager));
exports.PoolManager = PoolManager;
},{"../Config/Config":8,"./Manager":32}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("./Manager");
var Config = require("../Config/Config");
var RoleBase = /** @class */ (function () {
    function RoleBase(head, bodySlot, body) {
        // Ani:Laya.Animator;
        this.State = Manager.StateBase.IDEL;
        this.Head = head;
        this.BodySlot = bodySlot;
        this.Body = body;
        // this.Ani = body.getComponent(Laya.Animator) as Laya.Animator;
    }
    return RoleBase;
}());
exports.RoleBase = RoleBase;
var PlayerRole = /** @class */ (function (_super) {
    __extends(PlayerRole, _super);
    function PlayerRole(head, bodySlot) {
        var _this = _super.call(this, head, bodySlot) || this;
        _this.mCurrIndex = 0;
        return _this;
    }
    PlayerRole.prototype.onAniTempletError = function () {
        console.error("Player aniTemplet error");
    };
    PlayerRole.prototype.onBodyAniStop = function () {
        //循环播放
        // this.playBodyAni();
    };
    PlayerRole.prototype.playBodyAni = function (loop) {
        //默认循环播放
        loop = null != loop ? loop : true;
        this.Body.play(0, loop);
    };
    PlayerRole.prototype.parseTempletComplete = function (callback, thisArg) {
        //创建模式为1，可以启用换装
        this.Body = this.mFactory.buildArmature(1);
        this.BodySlot.displayObject.addChild(this.Body);
        this.Body.on(Laya.Event.STOPPED, this, this.onBodyAniStop);
        this.playBodyAni();
        if (callback) {
            callback.call(thisArg);
        }
    };
    PlayerRole.prototype.setBody = function (bodyPath, callback, thisArg) {
        var data = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            data[_i - 3] = arguments[_i];
        }
        this.mFactory = Manager.PoolManager.getItem(Config.PoolItemKey.DressTemplate, Laya.Templet);
        this.mFactory.on(Laya.Event.COMPLETE, this, this.parseTempletComplete, [callback, thisArg]);
        this.mFactory.on(Laya.Event.ERROR, this, this.onAniTempletError);
        this.mFactory.loadAni(bodyPath);
    };
    PlayerRole.prototype.setHead = function (url) {
        this.Head.url = url;
    };
    return PlayerRole;
}(RoleBase));
exports.PlayerRole = PlayerRole;
},{"../Config/Config":8,"./Manager":32}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("../Manager/Manager");
var Config = require("../Config/Config");
var RoleManager = /** @class */ (function () {
    function RoleManager() {
    }
    Object.defineProperty(RoleManager, "hasPlayer", {
        get: function () {
            if (this.Player) {
                return true;
            }
            else {
                console.error('Create role first!');
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    RoleManager.CreateRole = function (head, headUrl, bodySlot, bodyPath, callback, thisArg) {
        if (!bodyPath || !head)
            return;
        this.Player = new Manager.PlayerRole(head, bodySlot);
        this.changeHead(headUrl);
        this.changeBody(bodyPath, callback, thisArg);
    };
    //换头
    RoleManager.changeHead = function (url) {
        if (!this.hasPlayer)
            return;
        this.Player.setHead(url);
    };
    //换装
    RoleManager.changeBody = function (path, callback, thisArg) {
        var data = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            data[_i - 3] = arguments[_i];
        }
        var _a;
        if (!this.hasPlayer)
            return;
        if (!path)
            return;
        Manager.PoolManager.recover(Config.PoolItemKey.DressTemplate, this.Player.mFactory);
        (_a = this.Player).setBody.apply(_a, [path, callback, thisArg].concat(data));
    };
    RoleManager.setState = function (aniName, role) {
        switch (aniName) {
            case this.ANIMATOR_IDLE:
                role.State = Manager.StateBase.IDEL;
                break;
            case this.ANIMATOR_DEAD:
                role.State = Manager.StateBase.DEAD;
                break;
        }
    };
    RoleManager.PLAYER = 'Player';
    RoleManager.ENEMY = 'Enemy';
    //动画名
    RoleManager.ANIMATORS_MOVE = ['walk', 'run'];
    RoleManager.ANIMATORS_ATTACK = ['attack1', 'attack2'];
    RoleManager.ANIMATORS_PLAYER_SKILL = 'skill';
    RoleManager.ANIMATOR_DEAD = 'death';
    RoleManager.ANIMATOR_WIN = 'win';
    RoleManager.ANIMATOR_IDLE = 'FightIdle';
    RoleManager.ANIMATOR_PROVOC_ENEMY = 'appear';
    return RoleManager;
}());
exports.RoleManager = RoleManager;
},{"../Config/Config":8,"../Manager/Manager":32}],37:[function(require,module,exports){
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
},{"../GameConfig":20,"../GameScene":21,"./Manager":32}],38:[function(require,module,exports){
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
    //         fairygui.UIPackage.addPackage(_path, (err)=>{
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
     * @param  {fairygui.GGraph} _slot 父对象 fairygui graph
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
     * @param  {fairygui.GGraph} _slot 父对象 fairygui graph
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
        var grootInst = fairygui.GRoot.inst;
        var ui = fairygui.UIPackage.createObject(pkg, com).asCom;
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
},{"../Common/Common":1,"../Config/Config":8,"./Manager":32}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StateBase = /** @class */ (function () {
    function StateBase() {
    }
    StateBase.IDEL = 'IDEL'; //待机
    StateBase.DEAD = 'DEAD';
    StateBase.BACK_PASSED = 'BACK_PASSED'; //已缩回安全区
    StateBase.MOVE_FORWARD = 'MOVE_FORWARD'; //前伸
    StateBase.MOVE_BACK = 'MOVE_BACK'; //缩回
    return StateBase;
}());
exports.StateBase = StateBase;
},{}],40:[function(require,module,exports){
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
},{}],41:[function(require,module,exports){
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
            fairygui.GRoot.inst.setChildIndex(Core.ViewMap[cKey].UI, fairygui.GRoot.inst.numChildren);
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
    //     let grootInst = fairygui.GRoot.inst
    //     let guideCom = fairygui.UIPackage.createObject(Config.ViewKit.Guider.Pkg, guideName).asCom
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
},{"../Common/Common":1,"../Config/Config":8,"../UI/Core":45,"../UI/UI":52,"./Manager":32}],42:[function(require,module,exports){
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
},{}],43:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"./Core":45}],44:[function(require,module,exports){
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
},{"./Core":45}],45:[function(require,module,exports){
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
var OpenedCtrl = new Array();
exports.OpenedCtrl = OpenedCtrl;
// export let CtrlMapArray:Config.Dictionary<typeof Controller> = {};
exports.CtrlMapArray = new Array();
exports.ViewMapArray = {};
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
    Controller.setCtrl = function (id) {
        exports.CtrlMapArray[id] = this;
    };
    Controller.init = function (cKey, view, vKey) {
        this.Key = cKey;
        this.view = view;
        this.view.Key = vKey ? vKey : cKey;
        exports.CtrlMapArray[this.Key] = this;
    };
    Controller.prototype.createView = function (view, key) {
        this.View = new view(key);
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
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
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
        //     // if(this[i] instanceof fairygui.GComponent == true){
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
        OpenedCtrl.push(ctrl);
        //显示栈底界面
        // OpenedCtrl.forEach((v)=> {v.show()})
        var nextc = OpenedCtrl.shift();
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
},{"../Common/Common":1,"../Config/Config":8,"../Manager/Manager":32}],46:[function(require,module,exports){
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
},{"../Common/Common":1,"./UI":52}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("../Manager/Manager");
var LocalConfig_1 = require("../Config/LocalConfig");
var Config = require("../Config/Config");
var UIConfig_1 = require("../Config/UIConfig");
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
            this.ResNum += UIConfig_1.UIConfig.SubPkgs.length;
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
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"../Config/UIConfig":17,"../Data/Data":18,"../Manager/Manager":32,"./Core":45}],48:[function(require,module,exports){
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
},{"../Config/UIConfig":17,"./Core":45}],49:[function(require,module,exports){
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
},{"../Config/Config":8,"./UI":52}],50:[function(require,module,exports){
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
},{"../Config/Config":8,"./Core":45,"./UI":52}],51:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"./Core":45}],52:[function(require,module,exports){
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
},{"./ChooseServiceController":43,"./ChooseServiceView":44,"./Core":45,"./LoadingController":46,"./LoadingProgressController":47,"./LoadingProgressView":48,"./LoadingView":49,"./PublicConfirmationController":50,"./PublicConfirmationView":51}]},{},[26])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0FwcHMvTGF5YUFpcklERS9yZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29tbW9uL0NvbW1vbi50cyIsInNyYy9Db21tb24vRXZlbnRUeXBlLnRzIiwic3JjL0NvbW1vbi9HRXZlbnQudHMiLCJzcmMvQ29tbW9uL0xvZ2ljVXRpbHMudHMiLCJzcmMvQ29tbW9uL1Jlc291cmNlLnRzIiwic3JjL0NvbW1vbi9VdGlscy50cyIsInNyYy9Db21tb24vV3hVdGlscy50cyIsInNyYy9Db25maWcvQ29uZmlnLnRzIiwic3JjL0NvbmZpZy9Db25maWdVdGlscy50cyIsInNyYy9Db25maWcvRGF0YUNvbmZpZy50cyIsInNyYy9Db25maWcvRGVmaW5lLnRzIiwic3JjL0NvbmZpZy9Mb2NhbENvbmZpZy50cyIsInNyYy9Db25maWcvTG9jYWxDb250ZW50LnRzIiwic3JjL0NvbmZpZy9Mb2dpblJlc1VybHMudHMiLCJzcmMvQ29uZmlnL05ldENvbmZpZy50cyIsInNyYy9Db25maWcvUmVzVXJscy50cyIsInNyYy9Db25maWcvVUlDb25maWcudHMiLCJzcmMvRGF0YS9EYXRhLnRzIiwic3JjL0RhdGEvRGF0YUJhc2UudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9HYW1lU2NlbmUudHMiLCJzcmMvTG9naWMvRGVza0NvbGxpc2lvblNjcmlwdC50cyIsInNyYy9Mb2dpYy9HcmFiTG9naWMudHMiLCJzcmMvTG9naWMvSGFuZENvbGxpc2lvblNjcmlwdC50cyIsInNyYy9Mb2dpYy9Mb2dpYy50cyIsInNyYy9NYWluLnRzIiwic3JjL01hbmFnZXIvQmFzZU1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9DbGlja0VmZmVjdE1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9EYXRhTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL0xvYWRpbmdJY29uTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL0xvYWRpbmdQcm9ncmVzc01hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9NYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvTmV0TWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1Bvb2xNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvUm9sZUJhc2UudHMiLCJzcmMvTWFuYWdlci9Sb2xlTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1NjZW5lTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1NwYXduTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1N0YXRlQmFzZS50cyIsInNyYy9NYW5hZ2VyL1RpbWVyTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1VJTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1ZlcnNpb25NYW5hZ2VyLnRzIiwic3JjL1VJL0Nob29zZVNlcnZpY2VDb250cm9sbGVyLnRzIiwic3JjL1VJL0Nob29zZVNlcnZpY2VWaWV3LnRzIiwic3JjL1VJL0NvcmUudHMiLCJzcmMvVUkvTG9hZGluZ0NvbnRyb2xsZXIudHMiLCJzcmMvVUkvTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlci50cyIsInNyYy9VSS9Mb2FkaW5nUHJvZ3Jlc3NWaWV3LnRzIiwic3JjL1VJL0xvYWRpbmdWaWV3LnRzIiwic3JjL1VJL1B1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXIudHMiLCJzcmMvVUkvUHVibGljQ29uZmlybWF0aW9uVmlldy50cyIsInNyYy9VSS9VSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNWQSxpQ0FBNEI7QUFDNUIsZ0NBQTJCO0FBQzNCLDZCQUF3QjtBQUN4QixrQ0FBNkI7QUFDN0IsK0JBQTBCOzs7O0FDSjFCLHlDQUEyQztBQUMzQyxtQ0FBOEI7QUFFOUI7SUFBb0Msa0NBQWE7SUFBakQ7UUFBQSxxRUFtREM7UUFsRGEsZ0JBQVUsR0FBRyxJQUFJLEtBQUssRUFBcUIsQ0FBQzs7SUFrRDFELENBQUM7SUEvQ0csTUFBTTtJQUND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O0FBQzVDLDJDQUFzQztBQUN0QyxtQ0FBOEI7QUFDOUIsb0RBQStDO0FBQy9DLDhDQUF5QyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgKiBmcm9tICcuL0V2ZW50VHlwZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVzb3VyY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL1V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2dpY1V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9XeFV0aWxzJztcclxuIiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCBHRXZlbnQgZnJvbSBcIi4vR0V2ZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnREaXNwYXRoZXIgZXh0ZW5kcyBMYXlhLlNjcmlwdDNEIHtcclxuICAgIHByb3RlY3RlZCBfZXZlbnRMaXN0ID0gbmV3IEFycmF5PENvbmZpZy5FdmVudENsYXNzPigpOyAgXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9zdGF0aWNFdmVudExpc3QgPSBuZXcgQXJyYXk8Q29uZmlnLkV2ZW50Q2xhc3M+KCk7IC8v6Z2Z5oCB5pa55rOV5LqL5Lu2XHJcblxyXG4gICAgLy/pnZnmgIHmlrnms5VcclxuICAgIHN0YXRpYyBhZGRFdmVudExpc3RlbmVyKGtleSwgbGlzZW5lcjpGdW5jdGlvbil7XHJcbiAgICAgICAgR0V2ZW50LkFkZExpc3RlbmVyKGtleSwgbGlzZW5lciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fc3RhdGljRXZlbnRMaXN0LnB1c2gobmV3IENvbmZpZy5FdmVudENsYXNzKGtleSwgbGlzZW5lcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXNwYXRjaEV2ZW50KGtleSwgLi4uZGF0YSl7XHJcbiAgICAgICAgR0V2ZW50LkRpc3BhdGNoKGtleSwgLi4uZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsZWFyRXZlbnRMaXN0ZW5lcigpe1xyXG4gICAgICAgIHRoaXMuX3N0YXRpY0V2ZW50TGlzdC5mb3JFYWNoKGV2dD0+e1xyXG4gICAgICAgICAgICBHRXZlbnQuUmVtb3ZlTGlzdGVuZXIoZXZ0LktleSwgZXZ0Lkxpc3RlbmVyKTtcclxuICAgICAgICAgICAgZXZ0ID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJvY2Vzc0V2ZW50KGtleSwgbGlzdGVuZXI6RnVuY3Rpb24sIC4uLmRhdGEpe1xyXG4gICAgICAgIC8vIGxpc3RlbmVyLmNhbGwodGhpcywgLi4uZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lrp7kvovljJbph43ovb3mlrnms5VcclxuICAgIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGtleSwgbGlzZW5lcjpGdW5jdGlvbil7XHJcbiAgICAgICAgR0V2ZW50LkFkZExpc3RlbmVyKGtleSwgbGlzZW5lciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0LnB1c2gobmV3IENvbmZpZy5FdmVudENsYXNzKGtleSwgbGlzZW5lcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwYXRjaEV2ZW50KGtleSwgLi4uZGF0YSl7XHJcbiAgICAgICAgR0V2ZW50LkRpc3BhdGNoKGtleSwgLi4uZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lv4XpobvlnKjplIDmr4Hml7bmiafooYzmraTmlrnms5VcclxuICAgIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKCl7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0LmZvckVhY2goZXZ0PT57XHJcbiAgICAgICAgICAgIEdFdmVudC5SZW1vdmVMaXN0ZW5lcihldnQuS2V5LCBldnQuTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBldnQgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcm9jZXNzRXZlbnQoa2V5LCBsaXN0ZW5lcjpGdW5jdGlvbiwgLi4uZGF0YSl7XHJcbiAgICAgICAgLy8gbGlzdGVuZXIuY2FsbCh0aGlzLCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICAvL+mHjeWGmeatpOe7hOS7tuaWueazleW/hemhu+aJp+ihjFxyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CYXNlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGVudW0gRXZlbnRTcGFuIHtcclxuICAgIE1vZHVsZVNwYW4gPSAxMDAwMDAsXHJcbiAgICBGdW5jU3BhbiA9IDEwMDAsXHJcbiAgICBVSVNwYW4gPSAxLFxyXG59XHJcblxyXG4vL+aooeWdl+WKn+iDvVxyXG5lbnVtIE1vZHVsZUV0eXBlIHtcclxuICAgIFNjZW5lID0gMSxcclxuICAgIEdhbWUgPSAyLFxyXG4gICAgTmV0ID0gMyxcclxuICAgIFVpID0gNCxcclxuICAgIE5wYyA9IDUsXHJcbiAgICBDaGFyYWN0ZXIgPSA2LFxyXG4gICAgQXNzZXQgPSA3LFxyXG4gICAgRGF0YSA9IDgsXHJcbiAgICBBdWRpbyA9IDksXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1vZHVsZUVpZCB7XHJcbiAgICBTY2VuZSAgICAgICA9IE1vZHVsZUV0eXBlLlNjZW5lICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sICAgLy/lnLrmma/mqKHlnZdcclxuICAgIE5ldCAgICAgICAgID0gTW9kdWxlRXR5cGUuTmV0ICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sICAgLy/nvZHnu5zmqKHlnZdcclxuICAgIEdhbWUgICAgICAgID0gTW9kdWxlRXR5cGUuR2FtZSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLCAgIC8v546p5rOV5qih5Z2XXHJcbiAgICBEYXRhICAgICAgICA9IE1vZHVsZUV0eXBlLkRhdGEgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgIC8vVUnmqKHlnZdcclxuICAgIFVpICAgICAgICAgID0gTW9kdWxlRXR5cGUuVWkgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgIC8vVUnmqKHlnZdcclxuICAgIENoYXJhY3RlciAgID0gTW9kdWxlRXR5cGUuQ2hhcmFjdGVyICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sIC8v546p5a625bGe5oCn5qih5Z2XXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hbmFnZXJFaWQge1xyXG4gICAgR2FtZU1hbmFnZXIgICAgICAgICA9IE1vZHVsZUV0eXBlLkdhbWUgKiBFdmVudFNwYW4uTW9kdWxlU3BhbixcclxuICAgIE5ldE1hbmFnZXIgICAgICAgICAgPSBNb2R1bGVFdHlwZS5OZXQgKiBFdmVudFNwYW4uTW9kdWxlU3BhbixcclxuICAgIFVpTWFuYWdlciAgICAgICAgICAgPSBNb2R1bGVFdHlwZS5VaSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG4gICAgQXNzZXRNYW5hZ2VyICAgICAgICA9IE1vZHVsZUV0eXBlLkFzc2V0ICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sXHJcbiAgICBEYXRhTWFuYWdlciAgICAgICAgID0gTW9kdWxlRXR5cGUuRGF0YSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG4gICAgQXVkaW9NYW5hZ2VyICAgICAgICA9IE1vZHVsZUV0eXBlLkRhdGEgKiBFdmVudFNwYW4uTW9kdWxlU3BhbixcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t572R57uc5qih5Z2X5Yqf6IO9LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgbmV0TW9kdWxlTnVtID0gMTtcclxuZW51bSBOZXRNb2R1bGVJZCB7XHJcbiAgICBIdHRwQ29ubmV0ICAgICAgID0gTW9kdWxlRWlkLk5ldCArIChuZXRNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8vSFRUUOi/nuaOpVxyXG59XHJcblxyXG4vL0hUVFDov57mjqVcclxubGV0IG5ldEh0dHBDb25uZWN0RWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gTmV0SHR0cENvbm5lY3RFaWQge1xyXG4gICAgU2VydmljZVJlc3BvbmQgICAgICA9IE5ldE1vZHVsZUlkLkh0dHBDb25uZXQgKyBuZXRIdHRwQ29ubmVjdEVpZE51bSsrLCAgICAvL+WTjeW6lOaIkOWKn1xyXG4gICAgQ29ubmVjdEJlZ2luICAgICAgICA9IE5ldE1vZHVsZUlkLkh0dHBDb25uZXQgKyBuZXRIdHRwQ29ubmVjdEVpZE51bSsrLCAgICAvL+W8gOWni+i/nuaOpVxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lnLrmma/mqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBzY2VuZU1vZHVsZU51bSA9IDE7XHJcbmVudW0gU2NlbmVNb2R1bGVJZCB7XHJcbiAgICBMb2dpbiAgICAgICA9IE1vZHVsZUVpZC5TY2VuZSArIChzY2VuZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/nmbvlvZVcclxuICAgIEVudGVyICAgICAgID0gTW9kdWxlRWlkLlNjZW5lICsgKHNjZW5lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+i/m+WFpeWcuuaZr+mAmuefpVxyXG59XHJcblxyXG4vL+eZu+W9lVxyXG5sZXQgc2NlbmVMb2dpbkVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIFNjZW5lTG9naW5FaWQge1xyXG4gICAgU2VydmljZUNob29zZWQgID0gU2NlbmVNb2R1bGVJZC5Mb2dpbiArIHNjZW5lTG9naW5FaWROdW0rKywgICAgLy/lt7LpgInmi6nmnI3liqHlmajvvIzlvIDlj5HnlKhcclxuICAgIENvbmZpZ0xvYWRlZCAgICA9IFNjZW5lTW9kdWxlSWQuTG9naW4gKyBzY2VuZUxvZ2luRWlkTnVtKyssICAgIC8v6YWN572u5Yqg6L295a6M5oiQXHJcbiAgICBQYWNrYWdlTG9hZGVkICAgPSBTY2VuZU1vZHVsZUlkLkxvZ2luICsgc2NlbmVMb2dpbkVpZE51bSsrLCAgICAvL+WKoOi9veWMheWujOaIkFxyXG4gICAgTG9naW5TdWNjZXNzICAgID0gU2NlbmVNb2R1bGVJZC5Mb2dpbiArIHNjZW5lTG9naW5FaWROdW0rKywgICAgLy/nmbvlvZXmiJDlip9cclxuICAgIFNpbVByb2dyZXNzRW5kICA9IFNjZW5lTW9kdWxlSWQuTG9naW4gKyBzY2VuZUxvZ2luRWlkTnVtKyssICAgIC8v5YGH6L+b5bqm5p2h6K+75a6MXHJcbn1cclxuXHJcbi8v6L+b5YWl5Zy65pmv6YCa55+lXHJcbmxldCBzY2VuZUVudGVyRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gU2NlbmVFbnRlckVpZCB7XHJcbiAgICBNYWluTWVudSAgICAgICAgPSBTY2VuZU1vZHVsZUlkLkVudGVyICsgc2NlbmVFbnRlckVpZE51bSsrLCAgICAvL+S4u+eVjOmdouWcuuaZr1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mlbDmja7mqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBkYXRhTW9kdWxlTnVtID0gMTtcclxuZW51bSBEYXRhTW9kdWxlSWQge1xyXG4gICAgUGxheWVyICAgICAgID0gTW9kdWxlRWlkLkRhdGEgKyAoc2NlbmVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v546p5a625pWw5o2uXHJcbiAgICBBZG9iZSAgICAgICA9IE1vZHVsZUVpZC5EYXRhICsgKHNjZW5lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+a0nuW6nOaVsOaNrlxyXG4gICAgU2VjdCAgICAgICA9IE1vZHVsZUVpZC5EYXRhICsgKHNjZW5lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+mXqOa0vuaVsOaNrlxyXG59XHJcblxyXG4vL+eOqeWutlxyXG5sZXQgZGF0YVBsYXllckVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIERhdGFQbGF5ZXJFaWQge1xyXG4gICAgUmVmcmVzaGVkICAgICAgICAgICAgPSBEYXRhTW9kdWxlSWQuUGxheWVyICsgZGF0YVBsYXllckVpZE51bSsrLCAgLy/mlbDmja7mm7TmlrDpgJrnn6VcclxuICAgIEdtQWRkQmFnSXRlbVN1Y2Nlc3MgID0gRGF0YU1vZHVsZUlkLlBsYXllciArIGRhdGFQbGF5ZXJFaWROdW0rKywgIC8vR03lkb3ku6Tlop7liqDog4zljIXnianlk4HmiJDlip9cclxufVxyXG5cclxuLy/mtJ7lupxcclxubGV0IGRhdGFBZG9iZUVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIERhdGFBZG9iZUVpZCB7XHJcbiAgICBSZWZyZXNoZWQgICAgPSBEYXRhTW9kdWxlSWQuQWRvYmUgKyBkYXRhQWRvYmVFaWROdW0rKywgICAgLy/mlbDmja7mm7TmlrDpgJrnn6VcclxufVxyXG5cclxuLy/pl6jmtL5cclxubGV0IGRhdGFTZWN0RWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gRGF0YVNlY3RFaWQge1xyXG4gICAgUmVmcmVzaGVkICAgICAgICAgICAgICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v5pWw5o2u5pu05paw6YCa55+lXHJcbiAgICBHb3RJbmZvICAgICAgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/ojrflvpfpl6jmtL5VSeaVsOaNrlxyXG4gICAgR290VGFza0luZm8gICAgICAgICAgICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v6I635b6X6Zeo5rS+5Lu75Yqh5pWw5o2uXHJcbiAgICBHb3RUcmFpblRvd2VySW5mbyAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/ojrflvpfkv67ngrzloZTmlbDmja5cclxufVxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVJ5qih5Z2X5Yqf6IO9LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgdWlNb2R1bGVOdW0gPSAxO1xyXG5leHBvcnQgZW51bSB1aU1vZHVsZUlkIHtcclxuICAgIE9wZW4gICAgICAgPSBNb2R1bGVFaWQuVWkgKyAodWlNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5omT5byA55WM6Z2iXHJcbiAgICBOb3RpY2UgICAgID0gTW9kdWxlRWlkLlVpICsgKHVpTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+mAmuefpVxyXG59XHJcblxyXG4vL+aJk+W8gOeVjOmdolxyXG5sZXQgdWlPcGVuRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gVWlPcGVuRWlkIHtcclxuICAgIExvYWRpbmdQcm9ncmVzcyAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIExvYWRpbmcgICAgICAgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIENob29zZVNlcnZpY2UgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIE1haW5NZW51ICAgICAgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIEN1bHRpdmF0aW9uSW5mbyAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIEFkb2JlTWFpbiAgICAgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIEFkb2JlUG9vbCAgICAgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIEFkb2JlVXBncmFkICAgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIFB1YmxpY0NvbmZpcm1hdGlvbiAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIEpvaW5TZWN0ICAgICAgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIFxyXG59XHJcblxyXG4vL1VJ6YCa55+lXHJcbmxldCB1aU5vdGljZUVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIFVpTm90aWNlRWlkIHtcclxuICAgIENsb3NlQ29udHJvbGxlciAgICA9IHVpTW9kdWxlSWQuTm90aWNlICsgdWlOb3RpY2VFaWROdW0rKyxcclxuICAgIE9wZW5GdWxsU2NyZWVuICAgICA9IHVpTW9kdWxlSWQuTm90aWNlICsgdWlOb3RpY2VFaWROdW0rKyxcclxuICAgIENsb3NlRnVsbFNjcmVlbiAgICA9IHVpTW9kdWxlSWQuTm90aWNlICsgdWlOb3RpY2VFaWROdW0rKyxcclxuICAgIE9wZW5Qb3B1cCAgICAgICAgICA9IHVpTW9kdWxlSWQuTm90aWNlICsgdWlOb3RpY2VFaWROdW0rKyxcclxuICAgIENsb3NlUG9wdXAgICAgICAgICA9IHVpTW9kdWxlSWQuTm90aWNlICsgdWlOb3RpY2VFaWROdW0rKyxcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t546p5a625bGe5oCn5qih5Z2X5Yqf6IO9LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgY2hhcmFjdGVyTW9kdWxlTnVtID0gMTtcclxuZW51bSBDaGFyYWN0ZXJNb2R1bGVJZCB7XHJcbiAgICBDdWx0aXZhdGlvbiAgICAgICA9IE1vZHVsZUVpZC5DaGFyYWN0ZXIgKyAoY2hhcmFjdGVyTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+S/ruS4ulxyXG59XHJcblxyXG4vL+S/ruS4ulxyXG5sZXQgY2hhcmFjdGVyQ3VsdGl2YXRpb25FaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBDaGFyYWN0ZXJDdWx0aXZhdGlvbkVpZCB7XHJcbiAgICBVcGdyYWRlICAgICAgPSBDaGFyYWN0ZXJNb2R1bGVJZC5DdWx0aXZhdGlvbiArIGNoYXJhY3RlckN1bHRpdmF0aW9uRWlkTnVtKyssICAgIC8v5L+u5Li65Y2H57qnXHJcbiAgICBBdXRvQ2hhbmdlZCAgICAgICAgID0gQ2hhcmFjdGVyTW9kdWxlSWQuQ3VsdGl2YXRpb24gKyBjaGFyYWN0ZXJDdWx0aXZhdGlvbkVpZE51bSsrLCAgICAvL+iHquWKqOS/rueCvOWPmOWMllxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3njqnms5XmqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBnYW1lTW9kdWxlTnVtID0gMTtcclxuZW51bSBHYW1lTW9kdWxlSWQge1xyXG4gICAgQWRvYmUgICAgICAgPSBNb2R1bGVFaWQuR2FtZSArIChnYW1lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+a0nuW6nFxyXG4gICAgU2VjdCAgICAgICAgPSBNb2R1bGVFaWQuR2FtZSArIChnYW1lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+mXqOa0vlxyXG4gICAgS29uZ2ZhICAgICAgPSBNb2R1bGVFaWQuR2FtZSArIChnYW1lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+aKgOiDveWKn+azlVxyXG4gICAgUGxheWVyICAgICAgPSBNb2R1bGVFaWQuR2FtZSArIChnYW1lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+inkuiJslxyXG4gICAgUm9hZDJEaWV0eSAgPSBNb2R1bGVFaWQuR2FtZSArIChnYW1lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+aMkeaImOS7memAlFxyXG59XHJcblxyXG4vL+a0nuW6nOeOqeazlVxyXG5sZXQgZ2FtZUFkb2JlRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gR2FtZUFkb2JlRWlkIHtcclxuICAgIEhpcmVXb3JrZXJTdWNjZXNzICAgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+aLm+WLn+W3peS6uuaIkOWKn1xyXG4gICAgQWRkV29ya2VyU3VjY2VzcyAgICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v5re75Yqg5bel5Lq65oiQ5YqfXHJcbiAgICBSZWR1Y2VXb3JrZXJTdWNjZXNzICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/lh4/lsJHlt6XkurrmiJDlip9cclxuICAgIFVwZ3JhZGVTdG9uZVN1Y2Nlc3MgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+eBteefs+WNh+e6p+aIkOWKn1xyXG4gICAgVXBncmFkZUZvb2RTdWNjZXNzICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v6aOf54mp5Y2H57qn5oiQ5YqfXHJcbiAgICBVcGdyYWRlV29vZFN1Y2Nlc3MgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/mnKjmnZDljYfnuqfmiJDlip9cclxuICAgIFVwZ3JhZGVJcm9uU3VjY2VzcyAgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+mZqOmTgeWNh+e6p+aIkOWKn1xyXG4gICAgVXBncmFkZVBvb2xTdWNjZXNzICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v54G15rGg5Y2H57qn5oiQ5YqfXHJcbiAgICBVcGdyYWRlRW5lZ3lTdWNjZXNzICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/po47msLTljYfnuqfmiJDlip9cclxufVxyXG5cclxuLy/pl6jmtL7njqnms5VcclxubGV0IGdhbWVTZWN0RWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gR2FtZVNlY3RFaWQge1xyXG4gICAgSm9pblNlY3RTdWNjZXNzICAgICAgID0gR2FtZU1vZHVsZUlkLlNlY3QgKyBnYW1lU2VjdEVpZE51bSsrLCAgICAvL+WKoOWFpemXqOa0vuaIkOWKn1xyXG4gICAgTGVhcm5LRlN1Y2Nlc3MgICAgICAgID0gR2FtZU1vZHVsZUlkLlNlY3QgKyBnYW1lU2VjdEVpZE51bSsrLCAgLy/lrabkuaDmioDog73miJDlip9cclxuICAgIEFkZEtmTnVtICAgICAgICAgICAgICA9IEdhbWVNb2R1bGVJZC5TZWN0ICsgZ2FtZVNlY3RFaWROdW0rKywgICAgLy/kv67ngrzlip/ms5VcclxuICAgIFN0YXJ0VGFzayAgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/lvIDlp4vpl6jmtL7ku7vliqFcclxuICAgIEdyYWJUYXNrQXdhcmRTdWNjZXNzICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/pooblj5bpl6jmtL7ku7vliqHlpZblirHmiJDlip9cclxuICAgIFN0YXJ0Tm9ybWFsVG93ZXJUcmFpbiA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/lvIDlp4vmma7pgJrkv67ngrxcclxuICAgIEVuZE5vcm1hbFRvd2VyVHJhaW4gPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v57uT5p2f5pmu6YCa5L+u54K8XHJcbiAgICBTdGFydEJvc3NUb3dlclRyYWluICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v5byA5aeL5o6M6Zeo5L+u54K8XHJcbiAgICBFbmRCb3NzVG93ZXJUcmFpbiAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+e7k+adn+aOjOmXqOS/rueCvFxyXG4gICAgQWZrU2VjdCAgICAgICAgICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+mAgOWHuumXqOa0vlxyXG59XHJcblxyXG4vL+aKgOiDveeOqeazlVxyXG5sZXQgZ2FtZUtvbmdmYUVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIEdhbWVLb25nZmFFaWQge1xyXG4gICAgVXBncmFkZUtGU3VjY2VzcyAgICAgICA9IEdhbWVNb2R1bGVJZC5Lb25nZmEgKyBnYW1lS29uZ2ZhRWlkTnVtKyssICAgIC8v5Yqg5YWl6Zeo5rS+5oiQ5YqfXHJcbn1cclxuXHJcbi8v6KeS6ImyXHJcbmxldCBnYW1lUGxheWVyRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gR2FtZVBsYXllckVpZCB7XHJcbiAgICBHZXRCYWdJbmZvICAgICAgICAgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAgIC8v6I635Y+W5Yiw6IOM5YyF5L+h5oGvXHJcbiAgICBCYWdTb3J0U3VjY2VzcyAgICAgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAgIC8v5pW055CG6IOM5YyF5oiQ5YqfXHJcbiAgICBCYWdFeHBhbmRTdWNjZXNzICAgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAgIC8v5omp5bGV6IOM5YyF5oiQ5YqfXHJcbiAgICBCYWdFeHBhbmRGYWlsICAgICAgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAgIC8v5omp5bGV6IOM5YyF5aSx6LSlXHJcbiAgICBTb2xkQmFnSXRlbVN1Y2Nlc3MgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAvL+WHuuWUruiDjOWMheeJqeWTgeaIkOWKn1xyXG4gICAgVXNlQmFnSXRlbVN1Y2Nlc3MgICAgPSBHYW1lTW9kdWxlSWQuUGxheWVyICsgZ2FtZVBsYXllckVpZE51bSsrLCAgLy/kvb/nlKjog4zljIXnianlk4HmiJDlip9cclxufVxyXG5cclxuLy/mjJHmiJjku5npgJTnjqnms5VcclxubGV0IGdhbWVSb2FkMkRpZXR5RWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gR2FtZVJvYWQyRGlldHlhRWlkIHtcclxuICAgIEdvTW9uc3RlclJlc3VsdCAgICAgID0gR2FtZU1vZHVsZUlkLlJvYWQyRGlldHkgKyBnYW1lUm9hZDJEaWV0eUVpZE51bSsrLCAgICAvL+aMkeaImOmVh+WmluWhlOe7k+aenFxyXG4gICAgRmFpbEdvTW9uc3RlciAgICAgICAgPSBHYW1lTW9kdWxlSWQuUm9hZDJEaWV0eSArIGdhbWVSb2FkMkRpZXR5RWlkTnVtKyssICAgIC8v5peg5rOV5oyR5oiY6ZWH5aaW5aGUXHJcbiAgICBJbnZpdGVkRnJpZW5kICAgICAgICA9IEdhbWVNb2R1bGVJZC5Sb2FkMkRpZXR5ICsgZ2FtZVJvYWQyRGlldHlFaWROdW0rKywgICAgLy/pgoDor7fmnIvlj4vmjJHmiJjplYflppbloZRcclxuICAgIEJhdHRsZVJlY29yZEVuZCAgICAgID0gR2FtZU1vZHVsZUlkLlJvYWQyRGlldHkgKyBnYW1lUm9hZDJEaWV0eUVpZE51bSsrLCAgICAvL+aImOaKpeaSreaUvuWujOavlVxyXG4gICAgTW9uc3RlcjFzdEJsb29kICAgICAgPSBHYW1lTW9kdWxlSWQuUm9hZDJEaWV0eSArIGdhbWVSb2FkMkRpZXR5RWlkTnVtKyssICAgIC8v6ZWH5aaW5aGU6aaW5p2AXHJcbn0iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0V2ZW50IHtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeW8gOaUvuWfny0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvL+WIt+aWsOWlveWPi+aVsOaNrlxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFdYX1JFRlJFU0hfRlJJRU5EX0RBVEEgPSAxMTAwMVxyXG4gICAgLy/miZPlvIDmjpLooYxcclxuICAgIHN0YXRpYyByZWFkb25seSBPUEVOX1JBTktfVUkgPSAxMTAwNFxyXG4gICAgLy/mmL7npLrmlYXkuovmjpLooYxcclxuICAgIHN0YXRpYyByZWFkb25seSBDTE9TRV9SQU5LX1VJID0gMTEwMDVcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBMaXN0ZW5lcnM6Q29uZmlnLkRpY3Rpb25hcnk8Q29uZmlnLkxpc3RlbmVyQ2xhc3M+ID0ge307XHJcblxyXG4gICAgc3RhdGljIEFkZExpc3RlbmVyKGtleSwgZnVuYywgdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYoIWtleSB8fCB0eXBlb2YoZnVuYykgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLkxpc3RlbmVyc1trZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTGlzdGVuZXJzW2tleV0gPSBuZXcgQ29uZmlnLkxpc3RlbmVyQ2xhc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuTGlzdGVuZXJzW2tleV0uYWRkTGlzdGVuZXIoZnVuYywgdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgUmVtb3ZlTGlzdGVuZXIoa2V5LCBmdW5jKSB7XHJcbiAgICAgICAgaWYoIWtleSB8fCB0eXBlb2YoZnVuYykgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLkxpc3RlbmVyc1trZXldO1xyXG4gICAgICAgIGlmKCFsaXN0KSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGlzdC5yZW1vdmVMaXN0ZW5lcihmdW5jKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgc3RhdGljIERpc3BhdGNoKGtleSwgLi4uZGF0YSkge1xyXG4gICAgICAgIGlmKCFrZXkpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLkxpc3RlbmVyc1trZXldO1xyXG4gICAgICAgIGlmKCFsaXN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSBpbiBsaXN0Lkxpc3RlbmVycykge1xyXG4gICAgICAgICAgICBpZih0eXBlb2YobGlzdC5MaXN0ZW5lcnNbaV0pICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGlzdC5MaXN0ZW5lcnNbaV0uY2FsbChsaXN0LlRhcmdldHNbaV0sIC4uLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ2xlYXIoa2V5KSB7XHJcbiAgICAgICAgaWYoIWtleSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLkxpc3RlbmVyc1trZXldO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG4vL+iuoeeul+WKn+azleaAu+S6uueJqeWxnuaAp1xyXG5leHBvcnQgZnVuY3Rpb24gY2FsY0tmQWRkQXR0cihrZkxldmVsOm51bWJlciwga2ZTdGFnZTpudW1iZXIsIGZzQWRkOm51bWJlcil7XHJcbiAgICByZXR1cm4ga2ZTdGFnZSAqIChrZkxldmVsICsgZnNBZGQpO1xyXG59XHJcblxyXG4vL+iuoeeul+WKn+azleaAu+mjjuawtOWKoOaIkFxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY0tmQWRkRmVuZ3NodWkoa2ZTdGFnZTpudW1iZXIsIGZzQWRkOm51bWJlcil7XHJcbiAgICByZXR1cm4ga2ZTdGFnZSAqIGZzQWRkO1xyXG59IiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Db25maWcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc291cmNlIGV4dGVuZHMgTGF5YS5TY3JpcHR7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFJlc291cmNlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGljIF9hZGRlZFVpUGFja2FnZXM6Q29uZmlnLkRpY3Rpb25hcnk8Ym9vbGVhbj4gPSB7fTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGluc3QoKXtcclxuICAgICAgICBpZighdGhpcy5faW5zdGFuY2Upe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBSZXNvdXJjZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb2FkKHVybCwgdGhpc0FyZz8sIGNvbXBsZXRlPzpGdW5jdGlvbiwgcHJvZ3Jlc3M/OkZ1bmN0aW9uLCByZXNUeXBlPzpzdHJpbmcpe1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIHVybCwgXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpc0FyZywgY29tcGxldGUpLCBcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzQXJnLCBwcm9ncmVzcyksXHJcbiAgICAgICAgICAgIHJlc1R5cGVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRVaVBhY2thZ2UocGtnTmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9hZGRlZFVpUGFja2FnZXNbcGtnTmFtZV0pe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Yqg6L29VUnljIXvvJonLCBwa2dOYW1lKTtcclxuICAgICAgICAgICAgZmFpcnlndWkuVUlQYWNrYWdlLmFkZFBhY2thZ2UoJ3Jlcy8nICsgcGtnTmFtZSArICcvJyArIHBrZ05hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRlZFVpUGFja2FnZXNbcGtnTmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UmVzKHBhdGg6c3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gTGF5YS5Mb2FkZXIuZ2V0UmVzKHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWxlYXNlUmVzKCl7XHJcbiAgICAgICAgTGF5YS5SZXNvdXJjZS5kZXN0cm95VW51c2VkUmVzb3VyY2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQXdha2UoKXtcclxuICAgICAgICBpZiAoUmVzb3VyY2UuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgUmVzb3VyY2UuX2luc3RhbmNlID0gdGhpcztcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZXNvdXJjZSBpbnN0YW5jZSBtdXN0IGJlIG9ubHkgb25lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQge1VJQ29uZmlnfSBmcm9tIFwiLi4vQ29uZmlnL1VJQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcblxyXG4vL+enkuaVsOi9rOS4uuaXtu+8muWIhu+8muenklxyXG5leHBvcnQgZnVuY3Rpb24gQ29udmVydFRpbWUoY2QsIGlnbm9yZUhvdXI/OmJvb2xlYW4pe1xyXG4gICAgaWYoY2QgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGhvdXJzID0gKFwiMFwiICsgTWF0aC5mbG9vcihjZCAvIDM2MDApKS5zbGljZSgtMik7XHJcbiAgICBsZXQgbWludXRlcyA9IChcIjBcIiArIE1hdGguZmxvb3IoKGNkICUgMzYwMCkgLyA2MCkpLnNsaWNlKC0yKTtcclxuICAgIGxldCBzZWNvbmRzID0gKFwiMFwiICsgTWF0aC5jZWlsKGNkICUgNjApKS5zbGljZSgtMik7XHJcblxyXG4gICAgaWYoaWdub3JlSG91cil7XHJcbiAgICAgICAgcmV0dXJuIG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzO1xyXG59XHJcblxyXG4vL+eql+WPo+W8ueWHuuWKqOeUu1xyXG4vKipcclxuICogQHBhcmFtICB7ZmFpcnlndWkuR0NvbXBvbmVudH0gd2luZG93VWlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5UG9wdXBFZmZlY3Qod2luZG93VWksIGNhbGxiYWNrLCB0aGlzQXJnKXtcclxuICAgIGlmKHdpbmRvd1VpIGluc3RhbmNlb2YgZmFpcnlndWkuR09iamVjdCkge1xyXG4gICAgICAgIHdpbmRvd1VpLnNldFBpdm90KDAuNSwgMC41KTtcclxuXHJcbiAgICAgICAgZmFpcnlndWkudHdlZW4uR1R3ZWVuLnRvKDAsIDEsIDAuNSlcclxuICAgICAgICAgICAgLnNldFRhcmdldCh3aW5kb3dVaSwgd2luZG93VWkuc2V0U2NhbGUpXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKGNhbGxiYWNrLCB0aGlzQXJnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy/ljYHlha3ov5vliLbpopzoibLovawxMOi/m+WItlxyXG4vL+S8oOWPguagvOW8j++8mlwiMDB8ZmZ8ZWVcIlxyXG4vKipcclxuICogQHBhcmFtICB7c3RyaW5nfSBjb2xvclN0clxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENvbG9ySGV4MkRlYyhjb2xvclN0cil7XHJcbiAgICBpZihjb2xvclN0ciA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgY29sb3JTdHIgPSBjb2xvclN0ci5zcGxpdChcInxcIik7XHJcbiAgICBpZihjb2xvclN0ciBpbnN0YW5jZW9mIEFycmF5ICYmIGNvbG9yU3RyLmxlbmd0aCA9PSAzKXtcclxuICAgICAgICBjb2xvclN0ci5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGNvbG9yU3RyW2luZGV4XSA9IHBhcnNlSW50KHZhbHVlLCAxNik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbG9yU3RyO1xyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQpuS4uueItue7hOS7tu+8iOWMheaLrOacrOS9k++8iVxyXG5leHBvcnQgZnVuY3Rpb24gaXNBbmNlc3Rvck9mKHBhcmVudDpmYWlyeWd1aS5HT2JqZWN0LCBjaGlsZDpmYWlyeWd1aS5HT2JqZWN0KTpCb29sZWFuXHJcbntcclxuICAgIGlmIChwYXJlbnQgPT0gbnVsbCB8fCBjaGlsZCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIFxyXG4gICAgLy/mnKzkvZNcclxuICAgIGlmKHBhcmVudCA9PSBjaGlsZClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIFxyXG4gICAgdmFyIHA6ZmFpcnlndWkuR0NvbXBvbmVudCA9IGNoaWxkLnBhcmVudDtcclxuICAgIHdoaWxlKHApXHJcbiAgICB7XHJcbiAgICAgICAgaWYocCA9PSBwYXJlbnQpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHAgPSBwLnBhcmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy/liKTmlq3lnZDmoIfmmK/lkKblnKjnu4Tku7bnn6nlvaLojIPlm7TlhoVcclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5SZWN0KHh2Om51bWJlciwgeXY6bnVtYmVyLCBkZXN0OmZhaXJ5Z3VpLkdPYmplY3Qpe1xyXG4gICAgaWYoeHYgPT0gbnVsbCB8fCB5diA9PSBudWxsIHx8ICFkZXN0KSByZXR1cm47XHJcblxyXG4gICAgLy/ovazkuLrlsY/luZXlnZDmoIdcclxuICAgIGxldCBwdCA9IGRlc3QubG9jYWxUb0dsb2JhbCgpO1xyXG5cclxuICAgIGlmKHh2IDwgcHQueCB8fCB4diA+IHB0LnggKyBkZXN0LndpZHRoIHx8IHl2IDwgcHQueSB8fCB5diA+IHB0LnkgKyBkZXN0LmhlaWdodCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnRuSW5mb1BhcnRze1xyXG4gICAgUHJvZ3Jlc3NfSGVhbHRoOmZhaXJ5Z3VpLkdQcm9ncmVzc0JhcixcclxuICAgIFByb2dyZXNzX0V4cDpmYWlyeWd1aS5HUHJvZ3Jlc3NCYXIsXHJcbiAgICBUZXh0X0xldmVsOmZhaXJ5Z3VpLkdUZXh0RmllbGQsXHJcbiAgICBUZXh0X1RpcHNIZWFsdGg6ZmFpcnlndWkuR1RleHRGaWVsZCxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ0bkluZm9QYXJ0cyhidG46ZmFpcnlndWkuR0NvbXBvbmVudCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFByb2dyZXNzX0hlYWx0aDpidG4uZ2V0Q2hpbGQoJ1Byb2dyZXNzX0hlYWx0aCcpLmFzUHJvZ3Jlc3MsXHJcbiAgICAgICAgUHJvZ3Jlc3NfRXhwOmJ0bi5nZXRDaGlsZCgnUHJvZ3Jlc3NfRXhwJykuYXNQcm9ncmVzcyxcclxuICAgICAgICBUZXh0X0xldmVsOmJ0bi5nZXRDaGlsZCgnVGV4dF9MZXZlbCcpLmFzVGV4dEZpZWxkLFxyXG4gICAgICAgIFRleHRfVGlwc0hlYWx0aDpidG4uZ2V0Q2hpbGQoJ1RleHRfVGlwc0hlYWx0aCcpLmFzVGV4dEZpZWxkLFxyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuvue9ruaWh+acrENhY2hlTW9kZeS4ukNIQVLpgb/lhY3lhoXlrZjmmrTmtqhHQ+WNoemhv1xyXG4vKipcclxuICogQHBhcmFtICB7ZmFpcnlndWkuR1RleHRGaWVsZH0gdGV4dEZpbGVkXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IHVzZVN5c0ZvbnRcclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBTZXRUeHRDYWNoZU1vZGUodGV4dEZpbGVkLCB1c2VTeXNGb250KXtcclxuLy8gICAgIGlmKHRleHRGaWxlZCA9PSBudWxsKSByZXR1cm47XHJcblxyXG4vLyAgICAgaWYodGV4dEZpbGVkLl9sYWJlbC5jYWNoZU1vZGUgIT0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVIpe1xyXG4vLyAgICAgICAgIHRleHRGaWxlZC5fbGFiZWwuY2FjaGVNb2RlID0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVI7XHJcblxyXG4vLyAgICAgICAgIGlmKHR5cGVvZiB1c2VTeXNGb250ID09IFwiYm9vbGVhblwiKVxyXG4vLyAgICAgICAgICAgICB0ZXh0RmlsZWQuX2xhYmVsLnVzZVN5c3RlbUZvbnQgPSB1c2VTeXNGb250O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vL+iuvue9ruaWh+acrOWNoOS9jeesplxyXG4vLyBTdHJpbmcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSByZXR1cm4gdGhpcztcclxuLy8gICAgIGxldCBwYXJhbSA9IGFyZ3VtZW50c1swXTtcclxuLy8gICAgIGxldCBzID0gdGhpcztcclxuLy8gICAgIGlmKHR5cGVvZihwYXJhbSkgPT0gJ29iamVjdCcpIHtcclxuLy8gICAgICAgICBmb3IobGV0IGtleSBpbiBwYXJhbSlcclxuLy8gICAgICAgICBzID0gcy5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiICsga2V5ICsgXCJcXFxcfVwiLCBcImdcIiksIHBhcmFtW2tleV0pO1xyXG4vLyAgICAgICAgIHJldHVybiBzO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4vLyAgICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdcIiksIGFyZ3VtZW50c1tpXSk7XHJcbi8vICAgICAgICAgcmV0dXJuIHM7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vL+iuvue9ruaWh+acrOWNoOS9jeesplxyXG4vKipcclxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcclxuICogQHBhcmFtICB7QXJyYXl9IGFyZ3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTdHJpbmdGb3JtYXQoc3RyLCAuLi5hcmdzKXtcclxuICAgIGlmKHR5cGVvZihzdHIpICE9ICdzdHJpbmcnKSByZXR1cm47XHJcblxyXG4gICAgaWYoYXJncyA9PSBudWxsIHx8IGFyZ3MubGVuZ3RoID09IDApIHJldHVybiBzdHI7XHJcblxyXG4gICAgbGV0IHBhcmFtID0gYXJnc1swXTtcclxuICAgIGxldCBzID0gc3RyO1xyXG4gICAgaWYodHlwZW9mKHBhcmFtKSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGZvcihsZXQga2V5IGluIHBhcmFtKVxyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBrZXkgKyBcIlxcXFx9XCIsIFwiZ1wiKSwgcGFyYW1ba2V5XSk7XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdcIiksIGFyZ3NbaV0pO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuvue9ruaWh+acrOWxnuaAp1xyXG5leHBvcnQgZnVuY3Rpb24gU2V0VHh0UHJvcGVydHkodHh0LCBpc0JvbGQsIGlzVW5kZXJsaW5lKXtcclxuICAgIGlmKHR4dCBpbnN0YW5jZW9mIGZhaXJ5Z3VpLkdUZXh0RmllbGQgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBpZih0eXBlb2YoaXNCb2xkKSA9PSAnYm9vbGVhbicpe1xyXG4gICAgICAgIHR4dC5fbGFiZWwuX2lzQm9sZCA9IGlzQm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBpZih0eXBlb2YoaXNVbmRlcmxpbmUpID09ICdib29sZWFuJyl7XHJcbiAgICAgICAgdHh0Ll9sYWJlbC5faXNVbmRlcmxpbmUgPSBpc1VuZGVybGluZTtcclxuICAgIH1cclxufVxyXG5cclxuLy/lkK/liqjlnoPlnL7lm57mlLZcclxuLy8gZXhwb3J0IGZ1bmN0aW9uIFRyaWdnZXJHQygpe1xyXG4vLyAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbi8vICAgICAgICAgd3gudHJpZ2dlckdDKCk7XHJcbi8vICAgICB9ZWxzZXtcclxuLy8gICAgICAgICBjYy5zeXMuZ2FyYmFnZUNvbGxlY3QoKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy/orr7nva7pnZ7otJ/mlbBcclxuZXhwb3J0IGZ1bmN0aW9uIFNldE5vbm5lZ2F0aXZlKG51bTpudW1iZXIpe1xyXG4gICAgaWYobnVtIDwgMCl7XHJcbiAgICAgICAgbnVtID0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtO1xyXG59XHJcblxyXG4vL+WKn+iDveaYr+WQpuW8gOWQr1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gSXNGdW5jQWN0aXZhdGVkKGZ1bmNFbnVtKXtcclxuLy8gICAgIGlmKGZ1bmNFbnVtID09IG51bGwpIHJldHVybjtcclxuXHJcbi8vICAgICBzd2l0Y2ggKGZ1bmNFbnVtKSB7XHJcbi8vICAgICAgICAgY2FzZSBMb2NhbENvbmZpZy5GdW5jRW51bS5QbGF5R286XHJcbi8vICAgICAgICAgICAgIHJldHVybiBEYXRhQmFzZS5Sb2xlRGF0YS5VbmxvY2tDaGFwdGVySWQgPj0gMztcclxuICAgIFxyXG4vLyAgICAgICAgIGNhc2UgTG9jYWxDb25maWcuRnVuY0VudW0uRnVuOlxyXG4vLyAgICAgICAgICAgICByZXR1cm4gRGF0YUJhc2UuUm9sZURhdGEuVW5sb2NrQ2hhcHRlcklkID49IDQ7XHJcblxyXG4vLyAgICAgICAgIGNhc2UgTG9jYWxDb25maWcuRnVuY0VudW0uU3RvcnlKYWRlOlxyXG4vLyAgICAgICAgICAgICByZXR1cm4gRGF0YUJhc2UuUm9sZURhdGEuVW5sb2NrQ2hhcHRlcklkID4gMSB8fCBEYXRhQmFzZS5Sb2xlRGF0YS5Ecm9wTWF4VGV4dE51bSA+PSA1IHx8IERhdGFCYXNlLlJvbGVEYXRhLkNoYXB0ZXJQbGF5VGltZXMgPiAxO1xyXG5cclxuLy8gICAgICAgICBjYXNlIExvY2FsQ29uZmlnLkZ1bmNFbnVtLlRvcExlZnRMaXN0OlxyXG4vLyAgICAgICAgICAgICByZXR1cm4gRGF0YUJhc2UuUm9sZURhdGEuQ2hhcHRlcklkID4gMSB8fCBEYXRhQmFzZS5Sb2xlRGF0YS5DaGFwdGVyUGxheVRpbWVzID4gMTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy/orr7nva5mYWlyeWd1aeaOp+WItuWZqOmhteetvlxyXG5leHBvcnQgZnVuY3Rpb24gU2V0R0NvbnRyb2xsZXJJZHgoZ2N0cmw6ZmFpcnlndWkuQ29udHJvbGxlciwgaWR4Om51bWJlcil7XHJcbiAgICBpZihnY3RybCBpbnN0YW5jZW9mIGZhaXJ5Z3VpLkNvbnRyb2xsZXIgPT0gZmFsc2UgfHwgdHlwZW9mIGlkeCAhPSAnbnVtYmVyJykgcmV0dXJuO1xyXG5cclxuICAgIGlmKGlkeCA8IDAgfHwgaWR4ID49IGdjdHJsLnBhZ2VDb3VudCkgcmV0dXJuO1xyXG5cclxuICAgIGdjdHJsLnNlbGVjdGVkSW5kZXggPSBpZHg7XHJcbn1cclxuXHJcbi8v5Yik5pat57uT5p6E5L2T6ZW/5bqmXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRPYmplY3RMZW5ndGgob2JqZWN0KXtcclxuICAgIGlmKCFvYmplY3QpIHJldHVybiAwO1xyXG5cclxuICAgIGxldCBsZW4gPSAwO1xyXG4gICAgZm9yKGxldCBpIGluIG9iamVjdCl7XHJcbiAgICAgICAgbGVuKys7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxlbjtcclxufVxyXG5cclxuLy/mr5TovoMy5Liq5pWw57uE5piv5ZCm55u4562JXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyMVxyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5RXF1YWxzKGFycjEsIGFycjIpIHtcclxuICAgIC8vIGlmIHRoZSBvdGhlciBhcnJheSBpcyBhIGZhbHN5IHZhbHVlLCByZXR1cm5cclxuICAgIGlmICghYXJyMSB8fCAhYXJyMilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgLy8gY29tcGFyZSBsZW5ndGhzIC0gY2FuIHNhdmUgYSBsb3Qgb2YgdGltZSBcclxuICAgIGlmIChhcnIxLmxlbmd0aCAhPSBhcnIyLmxlbmd0aClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIxLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgbmVzdGVkIGFycmF5c1xyXG4gICAgICAgIGlmIChhcnIxW2ldIGluc3RhbmNlb2YgQXJyYXkgJiYgYXJyMltpXSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIC8vIHJlY3Vyc2UgaW50byB0aGUgbmVzdGVkIGFycmF5c1xyXG4gICAgICAgICAgICBpZiAoQXJyYXlFcXVhbHMoYXJyMSwgYXJyMikgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgICAgIFxyXG4gICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIGVsc2UgaWYgKGFycjFbaV0gIT0gYXJyMltpXSkgeyBcclxuICAgICAgICAgICAgLy8gV2FybmluZyAtIHR3byBkaWZmZXJlbnQgb2JqZWN0IGluc3RhbmNlcyB3aWxsIG5ldmVyIGJlIGVxdWFsOiB7eDoyMH0gIT0ge3g6MjB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgICBcclxuICAgICAgICB9ICAgICAgICAgICBcclxuICAgIH0gICAgICAgXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLy/mkJzlr7vmlbDnu4TplK7lgLxcclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEFycmF5KGFycjpBcnJheTxhbnk+LCBwYXJhbTpzdHJpbmcsIHZhbHVlKXtcclxuICAgIGlmKEFycmF5LmlzQXJyYXkoYXJyKSA9PSBmYWxzZSB8fCBhcnIubGVuZ3RoID09IDApe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgb3IgZW1wdHkgYXJyYXknKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCB0YXJnZXQ7XHJcbiAgICBhcnIuc29tZSh2PT57XHJcbiAgICAgICAgaWYodltwYXJhbV0gPT0gdmFsdWUpe1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB2O1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZFBhdGgoX2RhdGEpe1xyXG4gICAgaWYoIV9kYXRhLlBpY1VybClcclxuICAgICAgICByZXR1cm4ge3BhdGg6XCJcIiwgdXJsOiBcIlwifVxyXG4gICAgXHJcbiAgICBsZXQgcGFrTnVtID0gTWF0aC5jZWlsKF9kYXRhLlBpY1VybC82KTtcclxuICAgIGxldCBwYWtOYW1lID0gXCJQb3N0Y2FyZFwiKyBwYWtOdW07XHJcbiAgICBsZXQgdXJsID0gIFwidWk6Ly9cIitwYWtOYW1lK1wiL1wiK19kYXRhLlRpdGxlO1xyXG4gICAgbGV0IGluZm89e3BhdGg6cGFrTmFtZStcIi9cIitwYWtOYW1lLHVybDp1cmx9XHJcbiAgICByZXR1cm4gaW5mb1xyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQpuWwj+a4uOaIj1xyXG5leHBvcnQgZnVuY3Rpb24gaXNNaW5pR2FtZSgpe1xyXG4gICAgLy8gcmV0dXJuIExheWEuQnJvd3Nlci5vbldlaVhpbiB8fCBMYXlhLkJyb3dzZXIub25CRE1pbmlHYW1lO1xyXG4gICAgcmV0dXJuIExheWEuQnJvd3Nlci5vbk1pbmlHYW1lO1xyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQpuW+ruS/oVxyXG5leHBvcnQgZnVuY3Rpb24gaXNPbldlaXhpbigpe1xyXG4gICAgcmV0dXJuIExheWEuQnJvd3Nlci5vbldlaVhpbjtcclxufVxyXG5cclxuLy/liKTmlq3mmK/lkKZRUVxyXG5leHBvcnQgZnVuY3Rpb24gaXNPblFRKCl7XHJcbiAgICByZXR1cm4gTGF5YS5Ccm93c2VyLm9uTVFRQnJvd3NlcjtcclxufVxyXG5cclxuLy/liKTmlq3mmK/lkKbohb7orq/ns7tcclxuZXhwb3J0IGZ1bmN0aW9uIGlzT25UZW5jZW50KCl7XHJcbiAgICByZXR1cm4gaXNPblFRKCkgfHwgaXNPbldlaXhpbigpO1xyXG59XHJcblxyXG4vL+W5v+WRiumihuWPlue7hOS7tlxyXG4vKipcclxuICogQHBhcmFtICB7ZmFpcnlndWkuR0NvbXBvbmVudH0gYWRDb21cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBBZEdldFJld2FyZEJ0bihhZENvbSl7XHJcbiAgICBpZighYWRDb20pIHJldHVybjtcclxuXHJcbiAgICAvL+mihuWPluaMiemSrlxyXG4gICAgbGV0IGJ1dHRvbl9HZXRSZXdhcmQgPSBhZENvbS5nZXRDaGlsZChcIkJ1dHRvbl9HZXRSZXdhcmRcIikuYXNCdXR0b247XHJcbiAgICBsZXQgYnV0dG9uX0RvdWJsZVJld2FyZCA9IGFkQ29tLmdldENoaWxkKFwiQnV0dG9uX0RvdWJsZVJld2FyZFwiKS5hc0J1dHRvbjtcclxuICAgIGxldCBidXR0b25fQWRHZXRSZXdhcmQgPSBhZENvbS5nZXRDaGlsZChcIkJ1dHRvbl9BZEdldFJld2FyZFwiKS5hc0J1dHRvbjtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8v6aKG5Y+W57G75Z6LXHJcbiAgICAgICAgR2V0QnRuVHlwZTogYWRDb20uZ2V0Q29udHJvbGxlcignQnRuVHlwZV9DJyksXHJcbiAgICAgICAgLy/ljZXmjInpkq7pooblj5ZcclxuICAgICAgICBCdXR0b25fR2V0UmV3YXJkOiBidXR0b25fR2V0UmV3YXJkLFxyXG4gICAgICAgIC8v57qv6aKG5Y+WXHJcbiAgICAgICAgQnV0dG9uX09uZVJld2FyZDogYWRDb20uZ2V0Q2hpbGQoXCJCdXR0b25fT25lUmV3YXJkXCIpLmFzQnV0dG9uLFxyXG4gICAgICAgIC8v5bm/5ZGK5Y+M5YCN6aKG5Y+WXHJcbiAgICAgICAgQnV0dG9uX0RvdWJsZVJld2FyZDogYnV0dG9uX0RvdWJsZVJld2FyZCxcclxuICAgICAgICAvL+WNleaMiemSruW5v+WRiumihuWPllxyXG4gICAgICAgIEJ1dHRvbl9BZEdldFJld2FyZDogYnV0dG9uX0FkR2V0UmV3YXJkLFxyXG4gICAgICAgIC8v5Y2V5oyJ6ZKu6aKG5Y+W5pa55byPXHJcbiAgICAgICAgR2V0UmV3YXJkVHlwZTogYnV0dG9uX0FkR2V0UmV3YXJkLmdldENvbnRyb2xsZXIoJ1R5cGVfQycpLFxyXG4gICAgICAgIC8v5Y+M5YCN6aKG5Y+W5pa55byPXHJcbiAgICAgICAgR2V0RG91YmxlUmV3YXJkVHlwZTogYnV0dG9uX0RvdWJsZVJld2FyZC5nZXRDb250cm9sbGVyKCdUeXBlX0MnKSxcclxuICAgIH1cclxufVxyXG5cclxuLy/mnKzlnLDlrZjlgqhcclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2NhbFN0b3JhZ2Uoa2V5OnN0cmluZywgdmFsdWU6c3RyaW5nKXtcclxuICAgIGlmKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZShrZXk6c3RyaW5nKXtcclxuICAgIHJldHVybiBMYXlhLkxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxKc29uKGtleTpzdHJpbmcsIHZhbHVlKXtcclxuICAgIC8v5Y+v5a2Y5YKo5pWw57uEXHJcbiAgICBpZighdmFsdWUpIHJldHVybjtcclxuICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04oa2V5LCB2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbEpzb24oa2V5OnN0cmluZyl7XHJcbiAgICByZXR1cm4gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SlNPTihrZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29weURhdGEoc3JjRGF0YSwgdGFyZ2V0RGF0YSl7XHJcbiAgICBpZighc3JjRGF0YSB8fCAhdGFyZ2V0RGF0YSkgcmV0dXJuO1xyXG5cclxuICAgIGZvcihsZXQgaSBpbiBzcmNEYXRhKXtcclxuICAgICAgICBpZih0eXBlb2Ygc3JjRGF0YVtpXSAhPSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgdGFyZ2V0RGF0YVtpXSA9IHNyY0RhdGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuvue9ruW5v+WRiue7hOS7tuagt+W8j1xyXG4vKipcclxuICogQHBhcmFtICB7ZmFpcnlndWkuR0NvbXBvbmVudH0gYWRDb21cclxuICogQHBhcmFtICB7Ym9vbGVhbn0gaXNTaW5nbGVcclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBTZXRBZEJ0blN0eWxlKGFkQ29tLCBpc1NpbmdsZSl7XHJcbi8vICAgICBpZighYWRDb20pIHJldHVybjtcclxuXHJcbi8vICAgICBsZXQgYnRuID0gQWRHZXRSZXdhcmRCdG4oYWRDb20pO1xyXG4vLyAgICAgbGV0IGFkVHlwZSA9IGlzU2luZ2xlPyBNYW5hZ2VyLkdldFJlY2VpdmVBd2FyZHNUeXBlLlNpbmdsZUFkVHlwZSgpOiBNYW5hZ2VyLkdldFJlY2VpdmVBd2FyZHNUeXBlLmdldFR5cGUoKTtcclxuLy8gICAgIHN3aXRjaCAoYWRUeXBlKSB7XHJcbi8vICAgICAgICAgY2FzZSBDb25maWcuQXdhcmRUeXBlLk5vdDpcclxuLy8gICAgICAgICAgICAgYnRuLkdldEJ0blR5cGUuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbi8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbi8vICAgICAgICAgY2FzZSBDb25maWcuQXdhcmRUeXBlLlNoYXJlOlxyXG4vLyAgICAgICAgICAgICBidG4uR2V0RG91YmxlUmV3YXJkVHlwZS5zZWxlY3RlZEluZGV4ID0gMTtcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuLy8gICAgICAgICBjYXNlIENvbmZpZy5Bd2FyZFR5cGUuQUQ6XHJcbi8vICAgICAgICAgICAgIGJ0bi5HZXREb3VibGVSZXdhcmRUeXBlLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4vLyAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgIGFkQ29tLmVuYWJsZWQgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIGJ0bjtcclxuLy8gfVxyXG5cclxuLy/po5jlrZdcclxubGV0IHRpcHNVaTpmYWlyeWd1aS5HQ29tcG9uZW50O1xyXG5leHBvcnQgZnVuY3Rpb24gU2hvd1RpcHMobXNnOnN0cmluZyl7XHJcbiAgICBpZighdGlwc1VpKXtcclxuICAgICAgICBsZXQgdmlld05hbWUgPSBDb25maWcuVmlld0tpdC5UaXBzTGFiZWw7XHJcbiAgICAgICAgdGlwc1VpID0gTWFuYWdlci5TcGF3bk1hbmFnZXIuTG9hZFZpZXcodmlld05hbWUuUGtnLCB2aWV3TmFtZS5Db20pO1xyXG4gICAgICAgIHRpcHNVaS5zb3J0aW5nT3JkZXIgPSBVSUNvbmZpZy5Tb3J0aW5nT3JkZXIuTXNnVGlwcztcclxuICAgIH1cclxuXHJcbiAgICAvL+S4jemHjeWkjeaYvuekulxyXG4gICAgaWYodGlwc1VpLnZpc2libGUpIHJldHVybjtcclxuXHJcbiAgICBtc2cgPSBtc2c/IG1zZzogQ29uZmlnLkxvY2FsQ29udGVudC5GbHlpbmdUaXBzRGVmYXVsdDtcclxuICAgIHRpcHNVaS50ZXh0ID0gbXNnO1xyXG4gICAgdGlwc1VpLnZpc2libGUgPSB0cnVlO1xyXG4gICAgXHJcbiAgICB0aXBzVWkuZ2V0VHJhbnNpdGlvbignRWZmZWN0X1Nob3cnKS5wbGF5KExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCk9Pnt0aXBzVWkudmlzaWJsZSA9IGZhbHNlfSkpO1xyXG59XHJcblxyXG4vL+a0nuW6nOWKoOi1hOa6kOmjmOWtl1xyXG5pbnRlcmZhY2UgQWRvYmVBZGRUaXBzVWl7XHJcbiAgICBVaTpmYWlyeWd1aS5HQ29tcG9uZW50O1xyXG4gICAgVGV4dF9BZGRTdG9uZTpmYWlyeWd1aS5HVGV4dEZpZWxkO1xyXG4gICAgVGV4dF9BZGRGb29kOmZhaXJ5Z3VpLkdUZXh0RmllbGQ7XHJcbiAgICBUZXh0X0FkZFdvb2Q6ZmFpcnlndWkuR1RleHRGaWVsZDtcclxuICAgIFRleHRfQWRkSXJvbjpmYWlyeWd1aS5HVGV4dEZpZWxkO1xyXG59XHJcbmxldCBhZG9iZUFkZFRpcHNVaTpBZG9iZUFkZFRpcHNVaTtcclxuXHJcbmZ1bmN0aW9uIHNldEFkb2JlUmVzTnVtKHR4dENvbTpmYWlyeWd1aS5HVGV4dEZpZWxkLCByZXNOdW06bnVtYmVyKXtcclxuICAgIGlmKHJlc051bSA+PSAwKXtcclxuICAgICAgICB0eHRDb20uY29sb3IgPSAnIzAwRkYwMCc7XHJcbiAgICAgICAgdHh0Q29tLnRleHQgPSAnKycgKyByZXNOdW07XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0eHRDb20uY29sb3IgPSAnI0ZGMDAwMCc7XHJcbiAgICAgICAgdHh0Q29tLnRleHQgPSAnLScgKyAtcmVzTnVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuvue9ruaWh+Wtl+aKleW9sTHlg4/ntKBcclxubGV0IHR4dFNoYWRvd0ZpbHRlcjpMYXlhLkdsb3dGaWx0ZXI7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUeHRTaGFkb3coZ3R4dDpmYWlyeWd1aS5HT2JqZWN0KXtcclxuICAgIGlmKCFndHh0KSByZXR1cm47XHJcbiAgICBpZighdHh0U2hhZG93RmlsdGVyKXtcclxuICAgICAgICB0eHRTaGFkb3dGaWx0ZXIgPSBuZXcgTGF5YS5HbG93RmlsdGVyKCcjMDAwMDAwJywgMSwgMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ3R4dC5kaXNwbGF5T2JqZWN0LmZpbHRlcnMgPSBbdHh0U2hhZG93RmlsdGVyXTtcclxufVxyXG5cclxuLy/orr7nva5VSeiKgueCueS4jumAgumFjVxyXG4vLyBleHBvcnQgZnVuY3Rpb24gc2V0VWlOb2RlKCl7XHJcbi8vICAgICBpZighZmFpcnlndWkuR1Jvb3QuaW5zdCkgcmV0dXJuO1xyXG4gICAgXHJcbi8vICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuLy8gICAgIGZhaXJ5Z3VpLkdSb290Lmluc3Qubm9kZS5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4vLyAgICAgZmFpcnlndWkuR1Jvb3QuaW5zdC5ub2RlLnggPSAtY2FudmFzLndpZHRoICogMC41O1xyXG4vLyAgICAgZmFpcnlndWkuR1Jvb3QuaW5zdC5ub2RlLnkgPSBjYW52YXMuaGVpZ2h0ICogMC41O1xyXG4vLyB9XHJcblxyXG4vL+iwg+eUqGphdmFcclxuLyoqXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NQYXRoIOWujOaVtOeahOexu+i3r+W+hFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGphdmFGdW5jIGphdmHpnZnmgIHmlrnms5XlkI1cclxuICogQHBhcmFtICB7fSBkYXRhXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IHdpZHRoQmFjayDmmK/lkKbmnIlqYXZh5ZCM5q2l5Zue6LCDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSnNDYWxsSmF2YShjbGFzc1BhdGg6c3RyaW5nLCBqYXZhRnVuYzpzdHJpbmcsIGRhdGE/LCB3aWR0aEJhY2s/OmJvb2xlYW4pe1xyXG4gICAgaWYoIUxheWEuQnJvd3Nlci5vbkFuZHJvaWQpIHJldHVybjtcclxuXHJcbiAgICAvL+mcgOimgeWujOaVtOeahOexu+i3r+W+hO+8jOazqOaEj+S4jmlPU+eahOS4jeWQjFxyXG4gICAgbGV0IGJyaWRnZSA9IHdpbmRvd1tcIlBsYXRmb3JtQ2xhc3NcIl0uY3JlYXRlQ2xhc3MoY2xhc3NQYXRoKTsvL+WIm+W7uuiEmuacrOS7o+eQhlxyXG4gICAgaWYod2lkdGhCYWNrKXtcclxuICAgICAgICBsZXQgb2JqID0ge3ZhbHVlOiBkYXRhfTtcclxuICAgICAgICBicmlkZ2UuY2FsbFdpdGhCYWNrKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBKU09OLnBhcnNlKHZhbHVlKVxyXG4gICAgICAgICAgICBhbGVydChvYmoudmFsdWUpO1xyXG4gICAgICAgIH0sIGphdmFGdW5jLCBKU09OLnN0cmluZ2lmeShvYmopKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGxldCByZXNwID0gYnJpZGdlLmNhbGwoamF2YUZ1bmMsIGRhdGEpO1xyXG4gICAgICAgIGFsZXJ0KHJlc3ApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuoeeul+Wtl+espuWtl+iKguaVsC0t5q2j5YiZ5rOVXHJcbmZ1bmN0aW9uIGdldEJ5dGVzTGVuZ3RoKHN0cikge1xyXG4gICAgaWYoIXN0ciB8fCB0eXBlb2Ygc3RyICE9ICdzdHJpbmcnKXtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8vIOWcqEdCS+e8lueggemHjO+8jOmZpOS6hkFTQ0lJ5a2X56ym77yM5YW25a6D6YO95Y2g5Lik5Liq5a2X56ym5a69XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1teXFx4MDAtXFx4ZmZdL2csICd4eCcpLmxlbmd0aDtcclxufVxyXG5cclxuLy/orqHnrpflrZfnrKblrZfoioLmlbAtLemBjeWOhuazlS0t5pWI546H6L6D6auYXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJCeXRlTGVuKHN0cjpzdHJpbmcpeyBcclxuICAgIGxldCBieXRlTGVuID0gMCwgbGVuOm51bWJlcjsgXHJcbiAgICBpZihzdHIgJiYgdHlwZW9mIHN0ciA9PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgbGVuID0gc3RyLmxlbmd0aDtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xyXG4gICAgICAgICAgICBpZihzdHIuY2hhckNvZGVBdChpKSA+IDI1NSl7IFxyXG4gICAgICAgICAgICAgICAgYnl0ZUxlbiArPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7IFxyXG4gICAgICAgICAgICAgICAgYnl0ZUxlbisrOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnl0ZUxlbjtcclxufVxyXG5cclxuLy/mt7Hmi7fotJ1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5KHNyYzpvYmplY3QsIHRhcmdldDpvYmplY3Qpe1xyXG4gICAgaWYoIXNyYyB8fCAhdGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgaWYoc3JjICE9IG51bGwpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiBzcmMpe1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNbaV07XHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUpKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgWy4uLnRhcmdldFtpXV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZGVlcENvcHkodmFsdWUsIHRhcmdldFtpXSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5aGr5YWF54mp5ZOB5oyJ6ZKuXHJcbmV4cG9ydCBjbGFzcyBJdGVtQnRuUGFydHNDbGFzcyB7XHJcbiAgICBUZXh0X1RpdGxlOmZhaXJ5Z3VpLkdUZXh0RmllbGQ7XHJcbiAgICBUZXh0X0F3YXJkTnVtOmZhaXJ5Z3VpLkdUZXh0RmllbGQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYnRuOmZhaXJ5Z3VpLkdDb21wb25lbnQpe1xyXG4gICAgICAgIHRoaXMuVGV4dF9UaXRsZSA9IGJ0bi5nZXRDaGlsZCgndGl0bGUnKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLlRleHRfQXdhcmROdW0gPSBidG4uZ2V0Q2hpbGQoJ1RleHRfQXdhcmROdW0nKS5hc1RleHRGaWVsZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxJdGVtRGF0YShpdGVtZGF0YSwgYnRuOmZhaXJ5Z3VpLkdDb21wb25lbnQpe1xyXG4gICAgaWYoIWl0ZW1kYXRhIHx8ICFidG4pIHJldHVybjtcclxuXHJcbiAgICBsZXQgcGFydHMgPSBuZXcgSXRlbUJ0blBhcnRzQ2xhc3MoYnRuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxJdGVtTGlzdERhdGEoaXRlbWRhdGFBcnI6YW55W10sIGxpc3Q6ZmFpcnlndWkuR0xpc3Qpe1xyXG4gICAgaWYoIWl0ZW1kYXRhQXJyIHx8ICFsaXN0KSByZXR1cm47XHJcblxyXG4gICAgaXRlbWRhdGFBcnIuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgZmlsbEl0ZW1EYXRhKHYsIGxpc3QuYWRkSXRlbUZyb21Qb29sKCkuYXNDb20pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5YiX6KGo54K55Ye75Zue6LCDXHJcbmZ1bmN0aW9uIG9uQ2xpY2tMaXN0SXRlbSh0aGlzQXJnLCBmdW5jOkZ1bmN0aW9uLCBkYXRhLCBpdGVtOmZhaXJ5Z3VpLkdDb21wb25lbnQpe1xyXG4gICAgbGV0IGlkeCA9IGl0ZW0ucGFyZW50LmFzTGlzdC5nZXRDaGlsZEluZGV4KGl0ZW0pO1xyXG4gICAgZnVuYy5jYWxsKHRoaXNBcmcsIGlkeCArIDEsIC4uLmRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tMaXN0Q2FsbGJhY2sobGlzdDpmYWlyeWd1aS5HTGlzdCwgdGhpc0FyZywgZnVuYzpGdW5jdGlvbiwgLi4uZGF0YSl7XHJcbiAgICBpZighbGlzdCB8fCAhZnVuYykgcmV0dXJuO1xyXG5cclxuICAgIGxpc3Qub24oZmFpcnlndWkuRXZlbnRzLkNMSUNLX0lURU0sIHRoaXNBcmcsIG9uQ2xpY2tMaXN0SXRlbSwgW3RoaXNBcmcsIGZ1bmMsIGRhdGFdKTtcclxufSIsImltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0IEdFdmVudCBmcm9tIFwiLi9HRXZlbnRcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5cclxuLy/lvq7kv6Hmk43kvZxcclxubGV0IHBsYXRmb3JtID0gd2luZG93Wyd3eCddO1xyXG4vL+eZu+W9leW+ruS/oeWPt1xyXG5leHBvcnQgZnVuY3Rpb24gTG9naW4oaXNVbmlvbklkOmJvb2xlYW4pIHtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLmxvZ2luKHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzVW5pb25JZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2V0dGluZyhyZXMuY29kZSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlj5HotbfnvZHnu5zor7fmsYJcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxID0gQ29uZmlnLlJlcURhdGEuTG9naW47XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxLk5hbWUgPSByZXMuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICBEYXRhLkxvZ2luRGF0YS5TZW5kUmVxKHJlcSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy/liqDovb3liIbljIVcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBbGxTdWJwYWNrYWdlcyh0aGlzQXJnLCBjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UgfHwgQ29uZmlnLlVJQ29uZmlnLlN1YlBrZ3MubGVuZ3RoID09IDApIHtcclxuICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcblxyXG4gICAgQ29uZmlnLlVJQ29uZmlnLlN1YlBrZ3MuZm9yRWFjaChwa2c9PntcclxuICAgICAgICBjb25zdCBsb2FkVGFzayA9IHBsYXRmb3JtLmxvYWRTdWJwYWNrYWdlKHtcclxuICAgICAgICAgICAgbmFtZTogcGtnLCAvLyBuYW1lIOWPr+S7peWhqyBuYW1lIOaIluiAhSByb290XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy8g5YiG5YyF5Yqg6L295oiQ5Yqf5ZCO6YCa6L+HIHN1Y2Nlc3Mg5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy8g5YiG5YyF5Yqg6L295aSx6LSl6YCa6L+HIGZhaWwg5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhaWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+iuvue9ruWIhuS6q3RpY2tldFxyXG5leHBvcnQgZnVuY3Rpb24gc2hhcmVUaWNrZXRNb2RlKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS51cGRhdGVTaGFyZU1lbnUoe1xyXG4gICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZSxcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+iOt+WPluWIhuS6q3RpY2tldFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hhcmVUaWNrZXQoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsYXVuY2hJbmZvID0gcGxhdGZvcm0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+Pj4+Pj4+5b6u5L+h55m75b2V5L+h5oGv77yaJywgbGF1bmNoSW5mbyk7XHJcbiAgICBpZihsYXVuY2hJbmZvICYmIGxhdW5jaEluZm8uc2hhcmVUaWNrZXQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+Pj4+Pj4+PnNoYXJlVGlja2V077yaJywgbGF1bmNoSW5mby5zaGFyZVRpY2tldCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsYXVuY2hJbmZvLnNoYXJlVGlja2V0O1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6Kej5p6Q5YiG5LqrdGlja2V0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaGFyZUluZm8oKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCB0aWNrZXQgPSBnZXRTaGFyZVRpY2tldCgpO1xyXG4gICAgLy8gaWYoIXRpY2tldCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsYXVuY2hJbmZvID0gcGxhdGZvcm0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIGlmKGxhdW5jaEluZm8gJiYgbGF1bmNoSW5mby5xdWVyeSl7XHJcbiAgICAgICAgLy8gRGF0YUJhc2UuU2VuZFNoYXJlSW5mby5TZW5kUmVxKGxhdW5jaEluZm8ucXVlcnkuc2hhcmVJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGV0IHNoYXJlSW5mbyA9IHtcclxuICAgIC8vICAgICBFbmNyeXB0ZWREYXRhOiAnJyxcclxuICAgIC8vICAgICBJdjogJydcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwbGF0Zm9ybS5sb2dpbih7XHJcbiAgICAvLyAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgY29kZSA9IHJlcy5jb2RlO1xyXG4gICAgLy8gICAgICAgICAgICAgcGxhdGZvcm0uZ2V0U2hhcmVJbmZvKHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzaGFyZVRpY2tldDogdGlja2V0LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfop6PmnpDliIbkuqvkv6Hmga/vvJonLCByZXMpO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVuY3J5cHRlZERhdGEpe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVJbmZvLkVuY3J5cHRlZERhdGEgPSByZXMuZW5jcnlwdGVkRGF0YTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlSW5mby5JdiA9IHJlcy5pdjtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIERhdGFCYXNlLlNlbmRTaGFyZUluZm8uU2VuZFJlcShjb2RlLCByZXMuZW5jcnlwdGVkRGF0YSwgcmVzLml2KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leWksei0pe+8gScgKyByZXMuZXJyTXNnKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHJldHVybiBzaGFyZUluZm87XHJcbn1cclxuXHJcbi8v5pi+56S65Y+z5LiK6KeS6L2s5Y+RXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93U2hhcmVNZW51KCkge1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0uc2hvd1NoYXJlTWVudSh7XHJcbiAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwbGF0Zm9ybS5vblNoYXJlQXBwTWVzc2FnZSgoKSA9PiAoe1xyXG4gICAgICAgIHRpdGxlOiBEYXRhLkdldFNoYXJlV29yZCgpLFxyXG4gICAgICAgIGltYWdlVXJsOiBDb25maWcuVUlDb25maWcuU2hhcmVJbWFnZVBhdGguSW52aXRlRnJpZW5kLFxyXG4gICAgICAgIHF1ZXJ5OiAnc2hhcmVJRD0nICsgRGF0YS5Mb2dpbkRhdGEuQWNjb3VudEtleSxcclxuICAgIH0pKTtcclxufVxyXG5cclxuLy/liIbkuqtcclxuZXhwb3J0IGZ1bmN0aW9uIFNoYXJlTWVzc2FnZShtc2c6c3RyaW5nLCBpbWdQYXRoPzpzdHJpbmcsIHVzZVNjcmVlblNob3Q/OmJvb2xlYW4pIHtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBzeXNJbmZvID0gcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbiAgICAvL+S9v+eUqOWxj+W5leaIquWbvlxyXG4gICAgaWYodXNlU2NyZWVuU2hvdCA9PSB0cnVlKXtcclxuICAgICAgICBpbWdQYXRoID0gd2luZG93W1wiY2FudmFzXCJdLnRvVGVtcEZpbGVQYXRoU3luYyh7XHJcbiAgICAgICAgICAgIGRlc3RXaWR0aDogc3lzSW5mby53aW5kb3dXaWR0aCAqIHN5c0luZm8ucGl4ZWxSYXRpbyxcclxuICAgICAgICAgICAgZGVzdEhlaWdodDogc3lzSW5mby53aW5kb3dIZWlnaHQgKiBzeXNJbmZvLnBpeGVsUmF0aW9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF0Zm9ybS5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgIHRpdGxlOiBtc2csXHJcbiAgICAgICAgaW1hZ2VVcmw6IGltZ1BhdGgsXHJcbiAgICAgICAgcXVlcnk6ICdzaGFyZUlEPScgKyBEYXRhLkxvZ2luRGF0YS5BY2NvdW50S2V5XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uU2hvdyhjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5vblNob3coY2FsbGJhY2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2ZmU2hvdyhjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5vZmZTaG93KGNhbGxiYWNrKTtcclxufVxyXG5cclxuLy/muIXnkIbnvJPlrZhcclxuZXhwb3J0IGZ1bmN0aW9uIENsZWFyTG9jYWxDYWNoZSgpIHtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHdpbmRvd1tcImNhbnZhc1wiXS5nZXRTYXZlZEZpbGVMaXN0KHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZmlsZUxpc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5maWxlTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZmlsZUxpc3QuZm9yRWFjaCgoZmlsZSk9PntcclxuICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybS5yZW1vdmVTYXZlZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aDogZmlsZS5maWxlUGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhbnZhc1RvVGVtcEZpbGVQYXRoKGNhbGxiYWNrOkZ1bmN0aW9uKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGxldCB3aWR0aCAgPSBmYWlyeWd1aS5HUm9vdC5pbnN0LndpZHRoO1xyXG4gICAgLy8gbGV0IGhlaWdodCAgPSBmYWlyeWd1aS5HUm9vdC5pbnN0LmhlaWdodDtcclxuICAgIGxldCBzeXNJbmZvID0gcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgIGNvbnNvbGUubG9nKHN5c0luZm8pO1xyXG5cclxuICAgIGxldCBkZXN0U2l6ZSA9IG5ldyBMYXlhLlBvaW50KHN5c0luZm8ud2luZG93V2lkdGggKiBzeXNJbmZvLnBpeGVsUmF0aW8sIHN5c0luZm8ud2luZG93SGVpZ2h0ICogc3lzSW5mby5waXhlbFJhdGlvKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkZXN0U2l6ZSk7XHJcblxyXG4gICAgd2luZG93W1wiY2FudmFzXCJdLnRvVGVtcEZpbGVQYXRoKHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IGRlc3RTaXplLngsXHJcbiAgICAgICAgaGVpZ2h0OiBkZXN0U2l6ZS55LFxyXG4gICAgICAgIGRlc3RXaWR0aDogZGVzdFNpemUueCxcclxuICAgICAgICBkZXN0SGVpZ2h0OiBkZXN0U2l6ZS55LFxyXG4gICAgICAgIGNhbnZhc0lkOiAnbXlDYW52YXMnLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZW1wRmlsZVBhdGgpO1xyXG4gICAgICAgICAgICBwbGF0Zm9ybS5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtcclxuICAgICAgICAgICAgICAgIGZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS/neWtmOWbvueJh+aIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6J+S/neWtmOaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjonc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246MjAwMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflpLHotKUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5lcnJNc2cpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybS5vcGVuU2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHNldHRpbmdkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2V0dGluZ2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nZGF0YS5hdXRoU2V0dGluZ1tcInNjb3BlLndyaXRlUGhvdG9zQWxidW1cIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluadg+mZkOaIkOWKn++8jOe7meWHuuWGjeasoeeCueWHu+WbvueJh+S/neWtmOWIsOebuOWGjOeahOaPkOekuuOAgicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluadg+mZkOWksei0pe+8jOe7meWHuuS4jee7meadg+mZkOWwseaXoOazleato+W4uOS9v+eUqOeahOaPkOekuicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyTmlja05hbWUoY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgaWYoIXBsYXRmb3JtKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0uZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgICAgIHBsYXRmb3JtLmF1dGhvcml6ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICdzY29wZS51c2VySW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g55So5oi35bey57uP5ZCM5oSP5bCP56iL5bqP5L2/55So5b2V6Z+z5Yqf6IO977yM5ZCO57ut6LCD55SoIHd4LnN0YXJ0UmVjb3JkIOaOpeWPo+S4jeS8muW8ueeql+ivoumXrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybS5zdGFydFJlY29yZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwbGF0Zm9ybS5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXMudXNlckluZm87XHJcbiAgICAgICAgICAgIGNvbnN0IG5pY2tOYW1lID0gdXNlckluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGF2YXRhclVybCA9IHVzZXJJbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgY29uc3QgZ2VuZGVyID0gdXNlckluZm8uZ2VuZGVyOyAvLyDmgKfliKsgMO+8muacquefpeOAgTHvvJrnlLfjgIEy77ya5aWzXHJcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlID0gdXNlckluZm8ucHJvdmluY2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGNpdHkgPSB1c2VySW5mby5jaXR5O1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudHJ5ID0gdXNlckluZm8uY291bnRyeTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/lvq7kv6Hmj5DnpLrlvLnnqpdcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUaXBzV2luZG93KHRpcFRpdGxlOnN0cmluZywgdGlwQ29udGVudDpzdHJpbmcsIHRpcHNDb25maXJtVHh0OnN0cmluZywgY29uZmlybUNhbGxiYWs6RnVuY3Rpb24sIGNhbmNlbENhbGxiYWNrPzpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiB0aXBUaXRsZSB8fCAn5o+Q56S6JyxcclxuICAgICAgICBjb250ZW50OiB0aXBDb250ZW50LFxyXG4gICAgICAgIGNvbmZpcm1UZXh0OiB0aXBzQ29uZmlybVR4dCB8fCAn56Gu5a6aJyxcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjb25maXJtQ2FsbGJhaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNhbGxiYWsoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJyk7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2FuY2VsQ2FsbGJhY2spID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5r+A5Yqx5bm/5ZGKXHJcbmxldCByZXdhcmRlZFZpZGVvQWQ7XHJcbmxldCByZXdhcmRBZElkeCA9IDA7XHJcblxyXG4vKipcclxuICogQHBhcmFtICB7ZnVuY3Rpb259IG9uQ2xvc2VDYWxsYmFja1xyXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25FcnJvckNhbGxiYWNrXHJcbiAqIEBwYXJhbSAge30gdGhpc1RhcmdldFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJld2FyZGVkVmlkZW9BZChvbkNsb3NlQ2FsbGJhY2s/OkZ1bmN0aW9uLCBvbkVycm9yQ2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzVGFyZ2V0Pyl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICAvL+WfuuehgOW6k+eJiOacrOWPtyA+PSAyLjAuNFxyXG4gICAgbGV0IHNka1ZlcnNpb24gPSBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpLlNES1ZlcnNpb247XHJcbiAgICBpZighc2RrVmVyc2lvbiB8fCBwYXJzZUludChzZGtWZXJzaW9uLnJlcGxhY2UoL1xcLi9nLCAnJykpIDwgMjA0KSByZXR1cm47XHJcblxyXG4gICAgbGV0IGFkSW5mbyA9IHthZFVuaXRJZDpcIlwifTtcclxuICAgIC8v6L2u5o2i5bm/5ZGKXHJcbiAgICBpZihyZXdhcmRBZElkeCA+PSBMb2NhbENvbmZpZy5SZXdhcmRBZExpc3QubGVuZ3RoKVxyXG4gICAgICAgIHJld2FyZEFkSWR4ID0gMDtcclxuXHJcbiAgICBjb25zb2xlLmxvZygn5r+A5Yqx5bm/5ZGK77yaJyxMb2NhbENvbmZpZy5SZXdhcmRBZExpc3RbcmV3YXJkQWRJZHhdKTtcclxuICAgIGFkSW5mby5hZFVuaXRJZCA9IExvY2FsQ29uZmlnLlJld2FyZEFkTGlzdFtyZXdhcmRBZElkeF07XHJcblxyXG4gICAgaWYocmV3YXJkZWRWaWRlb0FkID09IG51bGwpe1xyXG4gICAgICAgIHJld2FyZGVkVmlkZW9BZCA9IHBsYXRmb3JtLmNyZWF0ZVJld2FyZGVkVmlkZW9BZChhZEluZm8pO1xyXG4gICAgfVxyXG4gICAgaWYocmV3YXJkZWRWaWRlb0FkID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICByZXdhcmRlZFZpZGVvQWQubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJld2FyZGVkVmlkZW9BZC5zaG93KCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WIm+W7uua/gOWKseW5v+WRiuWksei0pe+8micsIGVycik7XHJcbiAgICAgICAgICAgIC8vIHJld2FyZGVkVmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiByZXdhcmRlZFZpZGVvQWQuc2hvdygpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvL+S6jOasoeWksei0peWbnuiwg1xyXG4gICAgICAgICAgICAvLyAgICAgb25FcnJvckNhbGxiYWNrLmNhbGwodGhpc1RhcmdldCk7XHJcbiAgICAgICAgICAgIC8vIH0pKTtcclxuXHJcbiAgICAgICAgICAgIG9uRXJyb3JDYWxsYmFjay5jYWxsKHRoaXNUYXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV3YXJkQWRJZHgrKztcclxuXHJcbiAgICByZXdhcmRlZFZpZGVvQWQub25FcnJvcihvblJld2FyZEFkRXJyb3IpO1xyXG5cclxuICAgIC8vIGlmKHR5cGVvZihvbkxvYWRDYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAvLyAgICAgLy8gcmV3YXJkZWRWaWRlb0FkLm9uTG9hZCgoKT0+e1xyXG4gICAgLy8gICAgIC8vICAgICBvbkxvYWRDYWxsYmFjay5jYWxsKHRoaXNUYXJnZXQsIHRydWUpO1xyXG4gICAgLy8gICAgIC8vICAgICAvLyByZXdhcmRlZFZpZGVvQWQuc2hvdygpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAvLyAgICAgLy8gICAgIC8vICAgICByZXdhcmRlZFZpZGVvQWQubG9hZCgpXHJcbiAgICAvLyAgICAgLy8gICAgIC8vICAgICAgIC50aGVuKCgpID0+IHJld2FyZGVkVmlkZW9BZC5zaG93KCkpO1xyXG4gICAgLy8gICAgIC8vICAgICAvLyB9KTtcclxuICAgIC8vICAgICAvLyB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvL+WFs+mXreWbnuiwg+WPguaVsCByZXMuaXNFbmRlZDpib29sZWFuIOinhumikeaYr+WQpuaYr+WcqOeUqOaIt+WujOaVtOingueci+eahOaDheWGteS4i+iiq+WFs+mXreeahFxyXG4gICAgbGV0IGNsb3NlRnVuYyA9IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+aYr+WQpueci+WujOW5v+WRiu+8micscmVzKTtcclxuXHJcbiAgICAgICAgaWYocmVzLmlzRW5kZWQgJiYgdHlwZW9mKG9uQ2xvc2VDYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIG9uQ2xvc2VDYWxsYmFjay5jYWxsKHRoaXNUYXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV3YXJkZWRWaWRlb0FkLm9mZkNsb3NlKGNsb3NlRnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV3YXJkZWRWaWRlb0FkLm9uQ2xvc2UoY2xvc2VGdW5jKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25SZXdhcmRBZEVycm9yKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgcmV3YXJkZWRWaWRlb0FkLm9mZkVycm9yKG9uUmV3YXJkQWRFcnJvcik7XHJcbn1cclxuXHJcbi8vQmFubmVy5bm/5ZGKXHJcbmxldCBiYW5uZXJBZDtcclxubGV0IGJhbm5lcklkeCA9IDA7XHJcblxyXG5leHBvcnQgdHlwZSBiYW5uZXJBZEluZm8gPSB7XHJcbiAgICBhZFVuaXRJZD86c3RyaW5nLFxyXG4gICAgc3R5bGU/OntcclxuICAgICAgICBsZWZ0Om51bWJlciwgXHJcbiAgICAgICAgdG9wOm51bWJlciwgXHJcbiAgICAgICAgd2lkdGg/Om51bWJlciwgXHJcbiAgICAgICAgaGVpZ2h0PzpudW1iZXJcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAge3thZFVuaXRJZDpzdHJpbmcsIHN0eWxlOntsZWZ0Om51bWJlciwgdG9wOm51bWJlciwgd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyfX19IGFkSW5mb1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJhbm5lckFkKGFkSW5mbz86YmFubmVyQWRJbmZvKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGxlZnQ6IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGggKiAwLjUgLSAxMDAsXHJcbiAgICAvLyAgICAgICAgIHRvcDogcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQgKiAwLjUgKyAxMDAsXHJcbiAgICBsZXQgc3lzSW5mbyA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG4gICAgLy/ln7rnoYDlupPniYjmnKzlj7cgPj0gMi4wLjRcclxuICAgIGxldCBzZGtWZXJzaW9uID0gc3lzSW5mby5TREtWZXJzaW9uO1xyXG4gICAgaWYoIXNka1ZlcnNpb24gfHwgcGFyc2VJbnQoc2RrVmVyc2lvbi5yZXBsYWNlKC9cXC4vZywgJycpKSA8IDIwNCkgcmV0dXJuO1xyXG5cclxuICAgIGlmKCFhZEluZm8pXHJcbiAgICAgICAgYWRJbmZvID0ge307XHJcbiAgICAvL+i9ruaNouW5v+WRilxyXG4gICAgaWYoYmFubmVySWR4ID49IExvY2FsQ29uZmlnLkJhbm5lckFkTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgYmFubmVySWR4ID0gMDtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ0Jhbm5lcuW5v+WRiu+8micsTG9jYWxDb25maWcuQmFubmVyQWRMaXN0W2Jhbm5lcklkeF0pO1xyXG4gICAgYWRJbmZvLmFkVW5pdElkID0gTG9jYWxDb25maWcuQmFubmVyQWRMaXN0W2Jhbm5lcklkeF07XHJcblxyXG4gICAgLy/kvY3nva5cclxuICAgIGFkSW5mby5zdHlsZSA9IHtcclxuICAgICAgICBsZWZ0OjAsIFxyXG4gICAgICAgIHRvcDpzeXNJbmZvLndpbmRvd0hlaWdodCAtIDEwMCxcclxuICAgICAgICB3aWR0aDpzeXNJbmZvLndpbmRvd1dpZHRoLCBcclxuICAgICAgICAvLyBoZWlnaHQ6MTAwXHJcbiAgICB9XHJcblxyXG4gICAgaWYoYmFubmVyQWQgPT0gbnVsbCl7XHJcbiAgICAgICAgYmFubmVyQWQgPSBwbGF0Zm9ybS5jcmVhdGVCYW5uZXJBZChhZEluZm8pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYmFubmVyQWQuZGVzdHJveSgpO1xyXG4gICAgICAgIGJhbm5lckFkID0gcGxhdGZvcm0uY3JlYXRlQmFubmVyQWQoYWRJbmZvKTtcclxuICAgIH1cclxuICAgIGlmKGJhbm5lckFkID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAvL2Jhbm5lcuS9jee9rumAgumFjVxyXG4gICAgYmFubmVyQWQub25SZXNpemUocmVzID0+IHtcclxuICAgICAgICBiYW5uZXJBZC5zdHlsZS50b3AgPSBzeXNJbmZvLndpbmRvd0hlaWdodCAtIHJlcy5oZWlnaHQ7XHJcbiAgICAgICAgaWYoc3lzSW5mby5tb2RlbCA9PSAnaVBob25lIFgnKXtcclxuICAgICAgICAgICAgYmFubmVyQWQuc3R5bGUudG9wLT0yMDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBiYW5uZXJBZC5vbkVycm9yKG9uQmFubmVyQWRFcnJvcik7XHJcblxyXG4gICAgYmFubmVyQWQuc2hvdygpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WIm+W7ukJhbm5lcuW5v+WRiuWksei0pe+8micsIGVycik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBiYW5uZXJJZHgrKztcclxufVxyXG5cclxuZnVuY3Rpb24gb25CYW5uZXJBZEVycm9yKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgYmFubmVyQWQub2ZmRXJyb3Iob25CYW5uZXJBZEVycm9yKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVCYW5uZXJBZCgpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcbiAgICBpZihiYW5uZXJBZCA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgYmFubmVyQWQuaGlkZSgpO1xyXG59XHJcblxyXG4vL+S4i+i9vei/nOeoi+aWh+S7tlxyXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKHVybCwgY2FsbGJhY2spe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlIHx8ICF1cmwpIHJldHVybjtcclxuXHJcbiAgICBjb25zb2xlLmxvZygn5LiL6L295Zyw5Z2A77yaJyx1cmwpO1xyXG5cclxuICAgIHBsYXRmb3JtLmRvd25sb2FkRmlsZSh7XHJcbiAgICAgICAgdXJsOiB1cmwsIFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIC8vIOWPquimgeacjeWKoeWZqOacieWTjeW6lOaVsOaNru+8jOWwseS8muaKiuWTjeW6lOWGheWuueWGmeWFpeaWh+S7tuW5tui/m+WFpSBzdWNjZXNzIOWbnuiwg++8jOS4muWKoemcgOimgeiHquihjOWIpOaWreaYr+WQpuS4i+i9veWIsOS6huaDs+imgeeahOWGheWuuVxyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKGNhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMudGVtcEZpbGVQYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8v6I635Y+W5b6u5L+h5bGP5bmV5bC65a+4XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5kb3dTaXplKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgc3lzSW5mbyA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICBjb25zb2xlLmxvZyhzeXNJbmZvKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiBzeXNJbmZvLndpbmRvd1dpZHRoICogc3lzSW5mby5waXhlbFJhdGlvLCBcclxuICAgICAgICBoZWlnaHQ6IHN5c0luZm8ud2luZG93SGVpZ2h0ICogc3lzSW5mby5waXhlbFJhdGlvXHJcbiAgICB9O1xyXG59XHJcblxyXG4vL+iOt+WPlueUqOaIt+aOiOadg+S/oeaBr1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0dGluZyhsb2dpbkNvZGUpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0uZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgLy8gcmVzLmF1dGhTZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAvLyAgIFwic2NvcGUudXNlckluZm9cIjogdHJ1ZSwgICAgLy/mmK/lkKbmjojmnYPnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgLy8gICBcInNjb3BlLnVzZXJMb2NhdGlvblwiOiB0cnVlLCAgICAvL+aYr+WQpuaOiOadg+WcsOeQhuS9jee9rlxyXG4gICAgICAgICAgICAvLyAgIFwic2NvcGUud2VydW5cIjogZmFsc2UsICAvL+aYr+WQpuaOiOadg+W+ruS/oei/kOWKqOatpeaVsFxyXG4gICAgICAgICAgICAvLyAgIFwic2NvcGUud3JpdGVQaG90b3NBbGJ1bVwiOiBmYWxzZSAgICAvL+aYr+WQpuaOiOadg+S/neWtmOWIsOebuOWGjFxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuYXV0aFNldHRpbmcpO1xyXG4gICAgICAgICAgICAvLyBpZih0eXBlb2YoY2FsbGJhY2spID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAvLyAgICAgY2FsbGJhY2socmVzLmF1dGhTZXR0aW5nW1wic2NvcGUudXNlckluZm9cIl0pO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ewXHJcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybS5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmNvZGUgPSBsb2dpbkNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdGEuTG9naW5EYXRhLkxvZ2luUmVxKCcnLCByZXMuY29kZSwgcmVzLmVuY3J5cHRlZERhdGEsIHJlcy5pdik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVVc2VySW5mb0J1dHRvbihsb2dpbkNvZGUpO1xyXG4gICAgICAgICAgICAgICAgLy/mmL7npLrmjojmnYNcclxuICAgICAgICAgICAgICAgIExvY2FsQ29uZmlnLklzV3hBdXRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBNYW5hZ2VyLkxvYWRpbmdQcm9ncmVzc01hbmFnZXIuSW5zdC5TaG93V3hMb2dpbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v55So5oi35o6I5p2D5oyJ6ZKuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVc2VySW5mb0J1dHRvbihsb2dpbkNvZGUpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHN5c0luZm8gPSBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gcGxhdGZvcm0uY3JlYXRlVXNlckluZm9CdXR0b24oe1xyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAvLyBpbWFnZTogQ29uZmlnLlVJQ29uZmlnLlNoYXJlSW1hZ2VQYXRoLkludml0ZUZyaWVuZCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBzeXNJbmZvLndpbmRvd1dpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHN5c0luZm8ud2luZG93SGVpZ2h0LFxyXG4gICAgICAgICAgICAvLyBsaW5lSGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAnJyxcclxuICAgICAgICAgICAgLy8gY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgICAgLy8gdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgLy8gZm9udFNpemU6IDI2LFxyXG4gICAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6IDRcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBidXR0b24ub25UYXAoKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgLy/noa7orqTmjojmnYPlkI7plIDmr4HmjInpkq5cclxuICAgICAgICBpZihyZXMuZW5jcnlwdGVkRGF0YSl7XHJcbiAgICAgICAgICAgIHJlcy5jb2RlID0gbG9naW5Db2RlO1xyXG4gICAgICAgICAgICAvLyBEYXRhLkxvZ2luRGF0YS5Mb2dpblJlcSgnJywgcmVzLmNvZGUsIHJlcy5lbmNyeXB0ZWREYXRhLCByZXMuaXYpO1xyXG4gICAgICAgICAgICBidXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIEdFdmVudC5BZGRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MsICgpPT57YnV0dG9uLmRlc3Ryb3koKTt9LCB0aGlzKTtcclxufVxyXG5cclxuLy/mo4Dmn6XniYjmnKzmm7TmlrBcclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVXBkYXRlKGNhbGxiYWNrPzpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBpZih0eXBlb2YocGxhdGZvcm0uZ2V0VXBkYXRlTWFuYWdlcikgPT09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZU1hbmFnZXIgPSBwbGF0Zm9ybS5nZXRVcGRhdGVNYW5hZ2VyKCk7XHJcblxyXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIC8vIOivt+axguWujOaWsOeJiOacrOS/oeaBr+eahOWbnuiwg1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5qOA5p+l5paw54mI5pys57uT5p6c77yaJywgcmVzLmhhc1VwZGF0ZSk7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgIC8v5Zue6LCD6YCa55+l57uT5p6cXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMuaGFzVXBkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/muIXnkIbnvJPlrZhcclxuICAgICAgICAgICAgaWYocmVzLmhhc1VwZGF0ZSl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJ3eERvd25sb2FkZXJcIl0uY2xlYW5PbGRBc3NldHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgLy/lm57osIPpgJrnn6Xnu5PmnpxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwbGF0Zm9ybS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmm7TmlrDmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+aWsOeJiOacrOW3sue7j+WHhuWkh+Wlve+8jOWNs+WwhumHjeWQr+a4uOaIjycsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK9cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8g5paw54mI5pys5LiL6L295aSx6LSlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5ZCR5byA5pS+5Z+f5Y+R6YCB5raI5oGvXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0T3BlblJlZ2lvbk1lc3NhZ2UoZXZlbnRJZCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBvcGVuRGF0YUNvbnRleHQgPSBwbGF0Zm9ybS5nZXRPcGVuRGF0YUNvbnRleHQoKVxyXG4gICAgb3BlbkRhdGFDb250ZXh0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICBldmVudElkOiBldmVudElkLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5ZCR5byA5pS+5Z+f5Y+R6YCB5pWw5o2uXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0T3BlblJlZ2lvbkRhdGEoZGF0YSl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBvcGVuRGF0YUNvbnRleHQgPSBwbGF0Zm9ybS5nZXRPcGVuRGF0YUNvbnRleHQoKVxyXG4gICAgb3BlbkRhdGFDb250ZXh0LnBvc3RNZXNzYWdlKGRhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICog5LiK5Lyg5ri45oiP5pWw5o2uXHJcbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy53ZWl4aW4ucXEuY29tL21pbmlnYW1lL2Rldi9hcGkvd3guc2V0VXNlckNsb3VkU3RvcmFnZS5odG1sXHJcbiAqIFxyXG4gKiBAcGFyYW0gIHt9IGRhdGFcclxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSAge30gdGhpc0FyZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXJDbG91ZFN0b3JhZ2UoZGF0YSwgY2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5zZXRVc2VyQ2xvdWRTdG9yYWdlKHtcclxuICAgICAgICBLVkRhdGFMaXN0OiBkYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v6I635Y+W5bCP5ri45oiP5ZCv5Yqo5L+h5oGvXHJcbi8vaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaWdhbWUvZGV2L2FwaS93eC5nZXRMYXVuY2hPcHRpb25zU3luYy5odG1sXHJcbi8vIGxhdW5jaEluZm8gPSB7XHJcbi8vICAgICBzY2VuZSxcclxuLy8gICAgIHF1ZXJ5LFxyXG4vLyAgICAgc2hhcmVUaWNrZXQsXHJcbi8vICAgICByZWZlcnJlckluZm86e1xyXG4vLyAgICAgICAgIGFwcElkLFxyXG4vLyAgICAgICAgIGV4dHJhRGF0YVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXVuY2hPcHRpb25zU3luYygpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGxhdW5jaEluZm8gPSBwbGF0Zm9ybS5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgY29uc29sZS5sb2coJ+WQr+WKqOS/oeaBr++8micsIGxhdW5jaEluZm8pO1xyXG5cclxuICAgIHJldHVybiBsYXVuY2hJbmZvO1xyXG59XHJcblxyXG4vL+iOt+WPluWFpeWPo2FwcGlkXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2dpbkFwcGlkKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBpZihsYXVuY2hJbmZvICYmIGxhdW5jaEluZm8ucmVmZXJyZXJJbmZvKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn5YWl5Y+jQXBwaWTvvJonLGxhdW5jaEluZm8ucmVmZXJyZXJJbmZvLmFwcElkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxhdW5jaEluZm8ucmVmZXJyZXJJbmZvLmFwcElkO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6I635Y+W5YWl5Y+j5Zy65pmv5YC8XHJcbi8vaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaWdhbWUvZGV2L3JlZmVyZW5jZS9zY2VuZS1saXN0Lmh0bWxcclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhdW5jaFNjZW5lKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBjb25zb2xlLmxvZygn5Zy65pmv5YC877yaJyxsYXVuY2hJbmZvLnNjZW5lKTtcclxuICAgIGlmKGxhdW5jaEluZm8pe1xyXG4gICAgICAgIHJldHVybiBsYXVuY2hJbmZvLnNjZW5lO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5piv5ZCm5LuO4oCc5oiR55qE5bCP56iL5bqP6L+b5YWl4oCdXHJcbmV4cG9ydCBmdW5jdGlvbiBJc0xvZ2luRnJvbUZhdm91cml0ZSgpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHNjZW5lID0gZ2V0TGF1bmNoU2NlbmUoKTtcclxuICAgIC8vIHJldHVybiBzY2VuZSA9PSAxMDg5IHx8IHNjZW5lID09IDExMDM7XHJcbiAgICByZXR1cm4gc2NlbmUgPT0gMTEwNCB8fCBzY2VuZSA9PSAxMTAzO1xyXG59XHJcblxyXG4vKipcclxuICog6Lez6L2s5bCP56iL5bqPXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYXBwSWRcclxuICogQHBhcmFtICB7c3RyaW5nfSBwYXRoXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZXh0cmFEYXRhXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW52VmVyc2lvblxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHBhcmFtICB7fSB0aGlzQXJnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVUb01pbmlQcm9ncmFtKGFwcElkOnN0cmluZywgcGF0aD86c3RyaW5nLCBleHRyYURhdGE/LCBlbnZWZXJzaW9uPywgY2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UgfHwgIWFwcElkKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0ubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgICBhcHBJZDogYXBwSWQsXHJcbiAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICBleHRyYURhdGE6IGV4dHJhRGF0YSxcclxuICAgICAgICBlbnZWZXJzaW9uOiBlbnZWZXJzaW9uLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAvLyDmiZPlvIDmiJDlip9cclxuICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog6Lez6L2s5Yiw5Y2W5YWL5pif55CDXHJcbiAqIEBwYXJhbSAge0pTT059IGV4dHJhRGF0YVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVudlZlcnNpb25cclxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSAge30gdGhpc0FyZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdvTWFpa2VTaG9wcGluZyhleHRyYURhdGE/LCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/LCBlbnZWZXJzaW9uPzpzdHJpbmcpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbmF2aWdhdGVUb01pbmlQcm9ncmFtKExvY2FsQ29uZmlnLk1pbmlQcm9ncmFtQXBwSWQuTWFpa2UsIG51bGwsIGV4dHJhRGF0YSwgZW52VmVyc2lvbiwgY2FsbGJhY2ssIHRoaXNBcmcpO1xyXG59XHJcblxyXG4vKipcclxuICog5LuO5YW25LuW5bCP56iL5bqP6L+U5ZueXHJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYlxyXG4gKiBAcGFyYW0gIHt9IHRoaXNBcmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvblJldHVybkdhbWUoY2I6RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmKHR5cGVvZiBjYiA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICBvblNob3coY2IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQHR5cGUge2NjLk5vZGV9ICovXHJcbmxldCBzdWJDb250ZW50VmlldztcclxuLy/orr7nva7lrZDln5/nu4Tku7ZcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN1YkNvbnRlbnRWaWV3KHN1YlZpZXcpe1xyXG4gICAgaWYoIXN1YlZpZXcpIHJldHVybjtcclxuXHJcbiAgICBzdWJDb250ZW50VmlldyA9IHN1YlZpZXc7XHJcbn1cclxuXHJcbi8v6I635Y+W5a2Q5Z+f57uE5Lu2XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdWJDb250ZW50Vmlldygpe1xyXG4gICAgcmV0dXJuIHN1YkNvbnRlbnRWaWV3O1xyXG59XHJcblxyXG4vL+makOiXj+aIluaYvuekuuWtkOWfn+e7hOS7tlxyXG4vKipcclxuICogQHBhcmFtICB7Ym9vbGVhbn0gYWN0aXZlXHJcbiAqL1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gc2V0U3ViQ29udGVudEFjdGl2ZShhY3RpdmUpe1xyXG4vLyAgICAgaWYoIXN1YkNvbnRlbnRWaWV3IHx8IHR5cGVvZiBhY3RpdmUgIT0gJ2Jvb2xlYW4nKSByZXR1cm47XHJcblxyXG4vLyAgICAgc3ViQ29udGVudFZpZXcuYWN0aXZlID0gYWN0aXZlO1xyXG4vLyAgICAgc3ViQ29udGVudFZpZXcuZ2V0Q29tcG9uZW50KGNjLldYU3ViQ29udGV4dFZpZXcpLmVuYWJsZWQgPSBhY3RpdmU7XHJcbi8vIH1cclxuXHJcbi8vIC8v5pu05paw5a2Q5Z+fXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdWJDb250ZW50Vmlldygpe1xyXG4vLyAgICAgaWYoIXN1YkNvbnRlbnRWaWV3KSByZXR1cm47XHJcblxyXG4vLyAgICAgc3ViQ29udGVudFZpZXcuZ2V0Q29tcG9uZW50KGNjLldYU3ViQ29udGV4dFZpZXcpLnVwZGF0ZSgpO1xyXG4vLyB9XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vTG9jYWxDb25maWcnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Jlc1VybHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvZ2luUmVzVXJscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGVmaW5lJztcclxuZXhwb3J0ICogZnJvbSAnLi9VSUNvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGF0YUNvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTmV0Q29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2NhbENvbnRlbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbmZpZ1V0aWxzJztcclxuIiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuL0xvY2FsQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ29uZmlnKGNvbmZpZzpBcnJheTxhbnk+LCBwYXJhbTpzdHJpbmcsIHZhbHVlKXtcclxuICAgIGlmKG51bGwgPT0gdmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZhbHVlIGlzIG51bGwnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoQXJyYXkuaXNBcnJheShjb25maWcpID09IGZhbHNlIHx8IGNvbmZpZy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBvciBlbXB0eSBjb25maWcgYXJyYXknKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCB0YXJnZXQ6Q29uZmlnLkNvbmZpZ1R5cGU7XHJcbiAgICBjb25maWcuc29tZSh2PT57XHJcbiAgICAgICAgaWYoIXZbcGFyYW1dKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWlzcyBhcnJheSBwYXJhbTogJywgcGFyYW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9ZWxzZSBpZih2W3BhcmFtXSA9PSB2YWx1ZSl7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHY7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbi8v5qC55o2uaWTmkJzntKLphY3nva5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENvbmZpZ0J5SWQoY29uZmlnOkFycmF5PGFueT4sIHZhbHVlKXtcclxuICAgIHJldHVybiBzZWFyY2hDb25maWcoY29uZmlnLCAnSWQnLCB2YWx1ZSk7XHJcbn1cclxuXHJcbi8v6YWN572u55qE5YaF5a2Y57yT5a2YXHJcbmxldCBjb25maWdDYWNoZTpDb25maWcuRGljdGlvbmFyeTxDb25maWcuQ29uZmlnVHlwZVtdPiA9IHt9O1xyXG5sZXQgbGV2ZWxDb25maWdDYWNoZTpDb25maWcuRGljdGlvbmFyeTxBcnJheTxDb25maWcuQ29uZmlnVHlwZT4+ID0ge307XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWdCeUtleShrZXk6c3RyaW5nKXtcclxuICAgIGlmKCFrZXkpIHJldHVybjtcclxuXHJcbiAgICBpZihudWxsID09IGNvbmZpZ0NhY2hlW2tleV0pe1xyXG4gICAgICAgIGNvbmZpZ0NhY2hlW2tleV0gPSBDb25maWcuRGF0YUNvbmZpZy5nZXRMb2NhbENvbmZpZyhrZXkpO1xyXG4gICAgICAgIGxldmVsQ29uZmlnQ2FjaGVba2V5XSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25maWdDYWNoZVtrZXldO1xyXG59XHJcblxyXG4vL+mAmui/h0lk5pCc5a+76YWN572uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWdCeUlkKGtleTpzdHJpbmcsIGlkOm51bWJlcil7XHJcbiAgICByZXR1cm4gc2VhcmNoQ29uZmlnQnlJZChnZXRDb25maWdCeUtleShrZXkpLCBpZCk7XHJcbn1cclxuXHJcbi8v6YCa6L+H562J57qn5pCc5a+7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWdCeUxldmVsKGtleTpzdHJpbmcsIGxldmVsOm51bWJlcil7XHJcbiAgICAvL2lk562J5LqObGV2ZWxcclxuICAgIHJldHVybiBnZXRDb25maWdCeUlkKGtleSwgbGV2ZWwpO1xyXG59XHJcblxyXG4vL+mAmui/h+S7u+aEj+Wtl+auteaQnOWvu1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnQnlBcmcoa2V5OnN0cmluZywgYXJnOnN0cmluZywgdmFsdWUpe1xyXG4gICAgcmV0dXJuIHNlYXJjaENvbmZpZyhnZXRDb25maWdCeUtleShrZXkpLCBhcmcsIHZhbHVlKTtcclxufVxyXG5cclxuLy/mjInlrZfmrrXmjpLliJfphY3nva5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRDb25maWdCeVBhcmFtKHNyYzpBcnJheTxhbnk+LCBwYXJhbTpzdHJpbmcsIG91dD86QXJyYXk8QXJyYXk8YW55Pj4pe1xyXG4gICAgaWYoIXBhcmFtIHx8IEFycmF5LmlzQXJyYXkoc3JjKSA9PSBmYWxzZSl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBwYXJhbSBvciBzb3VyY2UgY29uZmlnJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZihBcnJheS5pc0FycmF5KG91dCkgPT0gZmFsc2Upe1xyXG4gICAgICAgIG91dCA9IFtdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcmMuc29tZSh2PT57XHJcbiAgICAgICAgaWYobnVsbCA9PSB2W3BhcmFtXSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25maWcgbWlzcyBwYXJhbTogJywgcGFyYW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG51bGwgPT0gb3V0W3ZbcGFyYW1dXSl7XHJcbiAgICAgICAgICAgIG91dFt2W3BhcmFtXV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0W3ZbcGFyYW1dXS5wdXNoKHYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5cclxuLy/ovpPlhaXphY3nva7vvIzmjInlrZfmrrXov5Tlm57lkIznsbvphY3nva7mlbDnu4RcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNvbmZpZ0J5UGFyYW0oc3JjOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgdmFsdWUsIG91dD86QXJyYXk8YW55Pil7XHJcbiAgICBpZighcGFyYW0gfHwgQXJyYXkuaXNBcnJheShzcmMpID09IGZhbHNlKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHBhcmFtIG9yIHNvdXJjZSBjb25maWcnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoQXJyYXkuaXNBcnJheShvdXQpID09IGZhbHNlKXtcclxuICAgICAgICBvdXQgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzcmMuc29tZSh2PT57XHJcbiAgICAgICAgaWYobnVsbCA9PSB2W3BhcmFtXSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25maWcgbWlzcyBwYXJhbTogJywgcGFyYW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHZbcGFyYW1dID09IHZhbHVlKXtcclxuICAgICAgICAgICAgb3V0LnB1c2godik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5cclxuLy/ovpPlhaXphY3nva5rZXnvvIzmjInlrZfmrrXov5Tlm57lkIznsbvphY3nva7mlbDnu4RcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNvbmZpZyhrZXk6c3RyaW5nLCBwYXJhbTpzdHJpbmcsIHZhbHVlLCBvdXQ/OkFycmF5PGFueT4pe1xyXG4gICAgcmV0dXJuIGZpbHRlckNvbmZpZ0J5UGFyYW0oZ2V0Q29uZmlnQnlLZXkoa2V5KSwgcGFyYW0sIHZhbHVlLCBvdXQpO1xyXG59XHJcblxyXG4vL+iOt+WPlumBk+WFt+mFjee9rlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUNvbmZpZyhpZDpudW1iZXIpe1xyXG4gICAgcmV0dXJuIGdldENvbmZpZ0J5SWQoQ29uZmlnLkxPQ0FMQ09ORklHX0tFWS5JVEVNLCBpZCkgYXMgQ29uZmlnLkl0ZW1Db25maWdUeXBlO1xyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuL0xvY2FsQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpzb25Ib3R7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICBUeXBlOnN0cmluZztcclxuICAgIFVybDpzdHJpbmc7XHJcbn1cclxuXHJcbi8v5pys5Zyw6YWN572u5a2Y5YKo5YmN57yAXHJcbmNvbnN0IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgPSBcImNvbmZpZ2xvY2FsX3ByZWZpeFwiO1xyXG5cclxuLy/lr7nlupTlkI7nq6/nmoTooajmoLx0YWJsZUlkXHJcbmxldCB0YWJsZUlkTnVtID0gMTtcclxuZXhwb3J0IGNvbnN0IExPQ0FMQ09ORklHX0tFWSA9IHtcclxuICAgIC8v5L+u5Li66Zi25q61XHJcbiAgICBDVUxUSVZBVElPTl9QRVJJT0Q6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+m7mOiupOWAvFxyXG4gICAgREVGQVVMVF9DT05GSUc6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+a0nuW6nOmjn+eJqVxyXG4gICAgQURPQkVfRk9PRDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5rSe5bqc6Zmo6ZOBXHJcbiAgICBBRE9CRV9JUk9OOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/mtJ7lupzngbXnn7NcclxuICAgIEFET0JFX1NUT05FOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/mtJ7lupzpu5jorqTphY3nva5cclxuICAgIEFET0JFX0RFRkFVTFQ6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+a0nuW6nOacqOadkFxyXG4gICAgQURPQkVfV09PRDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5rSe5bqc54G15rGgXHJcbiAgICBBRE9CRV9QT09MOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/ngbXmsaDpu5jorqTlgLxcclxuICAgIEFET0JFX1BPT0xfREVGQVVMVDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6aOO5rC05ZyfXHJcbiAgICBBRE9CRV9QT09MX1NPSUw6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mjjuawtOacqFxyXG4gICAgQURPQkVfUE9PTF9XT09EOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/po47msLTmsLRcclxuICAgIEFET0JFX1BPT0xfV0FURVI6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mjjuawtOeBq1xyXG4gICAgQURPQkVfUE9PTF9GSVJFOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/po47msLTph5FcclxuICAgIEFET0JFX1BPT0xfR09MRDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6ZqP5py66K+t5Y+lXHJcbiAgICBSQU5ET01fV09SRFM6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vlxyXG4gICAgU0VDVFM6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vuS6uueJqVxyXG4gICAgU0VDVEVSUzogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+5ZOB6Zi2XHJcbiAgICBTRUNUX0dSQURFOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/pl6jmtL7mioDog71cclxuICAgIFNFQ1RfS0Y6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vuaKgOiDveWNh+e6p1xyXG4gICAgU0VDVF9LRl9VUEdSQURFOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/pl6jmtL7mioDog73ljYfnuqfmgLvph49cclxuICAgIFNFQ1RfS0ZfQUREX05VTTogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+5Lu75YqhXHJcbiAgICBTRUNUX1RBU0s6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vuS/rueCvOWhlFxyXG4gICAgU0VDVF9UUkFJTl9UT1dFUjogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+6buY6K6k5YC8XHJcbiAgICBTRUNUX0RFRkFVTFQ6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+S5puexjeaKgOiDvVxyXG4gICAgQk9PS19TS0lMTDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5YKo54mp6KKL5Y2H57qn5raI6ICXXHJcbiAgICBCQUdfVVBfQ09TVDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v54mp5ZOBXHJcbiAgICBJVEVNOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/oo4XlpIdcclxuICAgIEVRVUlQTUVOVDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+5oub5byPXHJcbiAgICBTRUNUX1pIQU9TSEk6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+aImOaWl+WlluWKsVxyXG4gICAgQkFUVExFX0FXQVJEUzogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5py65Zmo5Lq6XHJcbiAgICBCQVRUTEVfQUk6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mVh+WmluWhlOWxgue6p1xyXG4gICAgTU9OU1RFUl9UT1dFUjogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFDb25maWd7XHJcbiAgICBwdWJsaWMgY291bnROdW0gPTA7IC8v6YWN572u6K6h5pWwXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgSXNDb25maWdMb2FkZWQgPSBmYWxzZTsgICAvL+aYr+WQpuW3suWKoOi9vemFjee9rlxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBKU09OSE9UX1VSTCAgPSAncmVzL2NvbmZpZy9Kc29uSG90Lmpzb24nO1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgU1lOVEhFU0lTX1VSTCAgPSAncmVzL2NvbmZpZy9TeW50aGVzaXMuanNvbic7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIExFVkVMVVBfVVJMICA9ICdyZXMvY29uZmlnL0xldmVsVXAuanNvbic7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIEtPTkdGVV9VUkwgID0gJ3Jlcy9jb25maWcvS29uZ0Z1Lmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBLT05HRlVfQVRUUklCVVRFX1VSTCAgPSAncmVzL2NvbmZpZy9Lb25nRnVBdHRyaWJ1dGUuanNvbic7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIFdFQVBPTl9UWVBFX1VSTCAgPSAncmVzL2NvbmZpZy9XZWFwb25UeXBlLmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBZT0tFX1VSTCAgPSAncmVzL2NvbmZpZy9Zb2tlLmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBTRUNUX1VSTCAgPSAncmVzL2NvbmZpZy9TZWN0Lmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBIRVJPX1VSTCAgPSAncmVzL2NvbmZpZy9IZXJvLmpzb24nO1xyXG5cclxuICAgIC8v6YWN572uaWTvvIzpobvkuI5yZXMvQ29uZmlnL0pzb25Ib3QuVHlwZeebuOWQjFxyXG4gICAgcHVibGljIHN0YXRpYyBDVUxUSVZBVElPTl9LRVkgPSBcIkN1bHRpdmF0aW9uXCI7XHJcbiAgICAvL+WvueW6lOWQjuerr+eahOihqOagvHRhYmxlSWRcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0NVTFRJVkFUSU9OX1BFUklPRCA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyAxOyAgLy/kv67kuLrpmLbmrrVcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX0ZPT0QgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMzsgIC8v5rSe5bqc6aOf54mpXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9JUk9OID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDQ7ICAvL+a0nuW6nOmZqOmTgVxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfU1RPTkUgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgNTsgIC8v5rSe5bqc54G155+zXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9XT09EID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDc7ICAvL+a0nuW6nOacqOadkFxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfREVGQVVMVCA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyA2OyAgLy/mtJ7lupzpu5jorqTphY3nva5cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX1BPT0wgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgODsgIC8v5rSe5bqc54G15rGgXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9QT09MX0RFRkFVTFQgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgOTsgIC8v54G15rGg6buY6K6k5YC8XHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9QT09MX1NPSUwgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMTA7ICAvL+mjjuawtOWcn1xyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfUE9PTF9XT09EID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDExOyAgLy/po47msLTmnKhcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX1BPT0xfV0FURVIgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMTI7ICAvL+mjjuawtOawtFxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfUE9PTF9GSVJFID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDEzOyAgLy/po47msLTngatcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX1BPT0xfR09MRCA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyAxNDsgIC8v6aOO5rC06YeRXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9SQU5ET01fV09SRFMgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMTU7ICAvL+maj+acuuivreWPpVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU1lOVEhFU0lTX0tFWSA9IFwic3ludGhlc2lzXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIExFVkVMVVBfS0VZID0gXCJsZXZlbFVwXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEtPTkdGVV9LRVkgPSBcImtvbmdGdVwiXHJcbiAgICBwdWJsaWMgc3RhdGljIEtPTkdGVV9BVFRSSUJVVEVfS0VZID1cImtvbmdGdUF0dHJpYnV0ZVwiXHJcbiAgICBwdWJsaWMgc3RhdGljIFdFQVBPTl9UWVBFX0tFWSA9XCJ3ZWFwb25fVHlwZVwiXHJcbiAgICBwdWJsaWMgc3RhdGljIFlPS0VfS0VZID0gXCJ5b2tlXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNFQ1RfS0VZID0gXCJzZWN0XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEhlcm9fS0VZID0gXCJIZXJvXCI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBKU09OX0NPTkZJR1MgPSBcImpzb25fY29uZmlnc1wiO1xyXG5cclxuICAgIC8v5pyA5aSn55Sf5ZG95YC8XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgTUFYX0hFQUxUSCA9IDEwMDtcclxuICAgIC8v5Yid5aeL6YeR5biBXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgSU5JVF9HT0xEID0gNTtcclxuICAgIC8v5Zue5ZCI6LSt5LmwQ0RcclxuICAgIHN0YXRpYyByZWFkb25seSBST1VORF9DRCA9IDE1O1xyXG4gICAgLy/kuIrpmLXmlbDnm65cclxuICAgIHN0YXRpYyByZWFkb25seSBUUk9PUF9OVU0gPSA5O1xyXG4gICAgLy/og4zljIXmlbDnm65cclxuICAgIHN0YXRpYyByZWFkb25seSBCQUdfVE9UQUwgPSA4O1xyXG5cclxuICAgIC8v6YCJ5oup5rS+5YirXHJcbiAgICBzdGF0aWMgSGVyb1NlY3QgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZSA6IERhdGFDb25maWc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIDogRGF0YUNvbmZpZyB7XHJcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IERhdGFDb25maWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkgOiBEYXRhQ29uZmlnIHtcclxuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRGF0YUNvbmZpZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnQnlOYW1lKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldENvbmZpZ0J5TmFtZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnQnlJZChrZXk6c3RyaW5nLCBpZDpudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldENvbmZpZ0J5SWQoa2V5LCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZWFyY2hDb25maWcoY29uZmlnOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgdmFsdWUpe1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBDb21tb24uc2VhcmNoQXJyYXkoY29uZmlnLCBwYXJhbSwgdmFsdWUpO1xyXG4gICAgICAgIGlmKCF0YXJnZXQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfmib7kuI3liLDphY3nva7vvJonLCBwYXJhbSwgdmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VhcmNoQ29uZmlnQnlJZChjb25maWc6QXJyYXk8YW55PiwgaWQ6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hDb25maWcoY29uZmlnLCAnSWQnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMb2NhbENvbmZpZ0J5SWQoa2V5OnN0cmluZywgaWQ6bnVtYmVyKXtcclxuICAgICAgICBsZXQgY29uZmlnOkFycmF5PGFueT4gPSB0aGlzLmdldExvY2FsQ29uZmlnKGtleSk7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaENvbmZpZ0J5SWQoY29uZmlnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbmZpZ0RhdGE6e1trZXk6c3RyaW5nXTpBcnJheTxhbnk+fSA9IHt9O1xyXG5cclxuICAgIHByb3RlY3RlZCBsb2FkQ29uZmlnKHVybDpzdHJpbmcsIGtleTpzdHJpbmcsIGNiPzpGdW5jdGlvbikgOiB2b2lkIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5sb2FkKHVybCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCBjb25maWc9PntcclxuICAgICAgICAgICAgY29uZmlnID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnKTtcclxuICAgICAgICAgICAgdmFyIGNvbmZpZ0pzb24gPSBKU09OLnBhcnNlKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnRGF0YVtrZXldID0gY29uZmlnSnNvbjtcclxuICAgICAgICAgICAgdGhpcy5jb3VudE51bSsrO1xyXG5cclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRDb25maWcoY2I/OkZ1bmN0aW9uKSA6IHZvaWQge1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoRGF0YUNvbmZpZy5KU09OSE9UX1VSTCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCBjb25maWc9PntcclxuICAgICAgICAgICAgY29uZmlnID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnKTtcclxuICAgICAgICAgICAgbGV0IGhvdEpzb25zOkpzb25Ib3RbXSA9IEpTT04ucGFyc2UoY29uZmlnKTtcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShob3RKc29ucykpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gaG90SnNvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaG90SnNvbnMuZm9yRWFjaCgoY2ZnLCBpZHgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaWR4ID49IHRvdGFsIC0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbmZpZyhjZmcuVXJsLCBjZmcuVHlwZSwgY2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb25maWcoY2ZnLlVybCwgY2ZnLlR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pys5Zyw57yT5a2YXHJcbiAgICBwdWJsaWMgc3RvcmVDb25maWcoa2V5OnN0cmluZyB8IG51bWJlciwgZGF0YSl7XHJcbiAgICAgICAgLy8gaWYodHlwZW9mKGRhdGEpID09ICdzdHJpbmcnKXtcclxuICAgICAgICAvLyAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIENvbW1vbi5zYXZlTG9jYWxKc29uKGtleSwgZGF0YSk7XHJcblxyXG4gICAgICAgIC8v5ZCO56uv5Y+R5p2lanNvbuWtl+espuS4slxyXG4gICAgICAgIENvbW1vbi5zYXZlTG9jYWxTdG9yYWdlKFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyBrZXksIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuY291bnROdW0rKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUFsbENvbmZpZyhkYXRhKXtcclxuICAgICAgICBDb21tb24uc2F2ZUxvY2FsSnNvbihDb25maWcuRGF0YUNvbmZpZy5KU09OX0NPTkZJR1MsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlQ29uZmlnVmVyc2lvbihkYXRhOkNvbmZpZy5Db25maWdEYXRhUGFyYW1bXSl7XHJcbiAgICAgICAgLy/lv4XpobvmmK/mlbDnu4RcclxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpID09IGZhbHNlIHx8IGRhdGEubGVuZ3RoID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRvTG9jYWwgPSBuZXcgQXJyYXk8Q29uZmlnLkNvbmZpZ0RhdGFQYXJhbT4oKTtcclxuICAgICAgICBkYXRhLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICB0b0xvY2FsLnB1c2gobmV3IENvbmZpZy5Db25maWdEYXRhUGFyYW0odi5UYWJsZUlkLCB2LlZlcnNpb24pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBDb21tb24uc2F2ZUxvY2FsSnNvbihDb25maWcuRGF0YUNvbmZpZy5KU09OX0NPTkZJR1MsIHRvTG9jYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRMb2NhbENvbmZpZyhrZXk6c3RyaW5nKXtcclxuICAgICAgICBpZigha2V5KXtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY29uZmlnIGtleTogJywga2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IENvbW1vbi5nZXRMb2NhbFN0b3JhZ2Uoa2V5KTtcclxuICAgICAgICBpZighY29uZmlnKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign6YWN572u5Li656m677yaJywga2V5KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBDb21tb24uZ2V0TG9jYWxKc29uKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZ1ZlcnNpb24oY29uZmlnOkNvbmZpZy5Db25maWdEYXRhUGFyYW0pe1xyXG4gICAgICAgIHJldHVybiBjb25maWcgJiYgY29uZmlnLlZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZ1ZlcnNpb25CeUtleShrZXk6c3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb25maWdWZXJzaW9uKHRoaXMuZ2V0TG9jYWxDb25maWcoa2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5bmnKzlnLDmiYDmnInphY3nva5cclxuICAgIHN0YXRpYyBnZXQgbG9jYWxDb25maWdzKCk6Q29uZmlnLkNvbmZpZ0RhdGFQYXJhbVtde1xyXG4gICAgICAgIHJldHVybiBDb21tb24uZ2V0TG9jYWxKc29uKERhdGFDb25maWcuSlNPTl9DT05GSUdTKSB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29uZmlnQnlOYW1lKGtleTpzdHJpbmcpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWdEYXRhW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbmZpZ0J5SWQoa2V5OnN0cmluZyxpZDpudW1iZXIpIDogYW55IHtcclxuICAgICAgICBpZih0aGlzLmNvbmZpZ0RhdGFba2V5XSkge1xyXG4gICAgICAgICAgICB2YXIgY29uZmlncyA9IHRoaXMuY29uZmlnRGF0YVtrZXldO1xyXG4gICAgICAgICAgICBmb3IodmFyIGk6bnVtYmVyID0gMDsgaSA8IGNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKGNvbmZpZ3NbaV1bJ2lkJ10gPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29uZmlnc0J5VHlwZShrZXk6c3RyaW5nLCB0eXBlOm51bWJlcikgOiBhbnkge1xyXG4gICAgICAgIGlmKHRoaXMuY29uZmlnRGF0YVtrZXldKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25maWdzID0gdGhpcy5jb25maWdEYXRhW2tleV07XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQ6QXJyYXk8YW55PiA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGk6bnVtYmVyID0gMDsgaSA8IGNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKGNvbmZpZ3NbaV1bJ3R5cGUnXSA9PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29uZmlnc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29uZmlnRGF0YSB7XHJcbiAgICBzdGF0aWMgQ09ORklHX0tFWTpzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGNvbmZpZzpBcnJheTxhbnk+O1xyXG5cclxuICAgIHN0YXRpYyBnZXQgQ29uZmlnKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuY29uZmlnKXtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBEYXRhQ29uZmlnLmdldExvY2FsQ29uZmlnKHRoaXMuQ09ORklHX0tFWSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZ0J5SWQoaWQ6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gRGF0YUNvbmZpZy5zZWFyY2hDb25maWdCeUlkKHRoaXMuQ29uZmlnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZ0J5TGV2ZWwobGV2ZWw6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLnNlYXJjaEFycmF5KHRoaXMuQ29uZmlnLCAnTGV2ZWwnLCBsZXZlbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t6YWN572u5a2X5q61LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL+aooeadv+mFjee9rlxyXG5leHBvcnQgY2xhc3MgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBOYW1lOnN0cmluZztcclxuICAgIExldmVsOm51bWJlcjtcclxuICAgIFR5cGU6bnVtYmVyO1xyXG4gICAgUGljOnN0cmluZzsgXHJcbn1cclxuXHJcbi8v5L+u5Li66YWN572uXHJcbmV4cG9ydCBjbGFzcyBDdWx0aXZhdGlvblBlcmlvZCBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgWGl1d2VpTmFtZTpzdHJpbmc7ICAvL+S/ruS4uue6p+WIq+WQjeensFxyXG4gICAgQ29zdDpudW1iZXI7ICAgIC8v5Y2H57qn5raI6ICX5L+u5Li6XHJcbiAgICBTdWNjZXNzOm51bWJlcjsgLy/muKHliqvmiJDlip/njodcclxuICAgIEFkZEVmZmljaWVuY3k6bnVtYmVyO1xyXG4gICAgRmFpbFJldHVybjpudW1iZXI7XHJcbn1cclxuXHJcbi8v5rSe5bqc6LWE5rqQXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRvYmVSZXMgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIExldmVsOm51bWJlcjsgIFxyXG4gICAgUGljOnN0cmluZzsgXHJcbiAgICBTdG9yYWdlTGltaXQ6bnVtYmVyO1xyXG4gICAgU2VydmFudExpbWl0Om51bWJlcjtcclxuICAgIFNlcnZhbnRQcm9kdWN0Om51bWJlcjsgIC8v5Lqn6YeP77yIMeS4quS7meS7hu+8iVxyXG4gICAgU2VydmFudENvc3Q6bnVtYmVyOyAvL+a2iOiAl++8iDHkuKrku5nku4bvvIlcclxuICAgIFdvb2RDb3N0Om51bWJlcjsgICAgLy/ljYfnuqfmtojogJfmnKjmnZBcclxufVxyXG5cclxuLy/ngbXmsaBcclxuZXhwb3J0IGludGVyZmFjZSBBZG9iZVBvb2wgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIExldmVsOm51bWJlcjsgIFxyXG4gICAgUGljOnN0cmluZzsgXHJcbiAgICBTdG9yYWdlTGltaXQ6bnVtYmVyO1xyXG4gICAgUmVpa2lQcm9kdWN0Om51bWJlcjtcclxuICAgIFVwQ29zdFdvb2Q6bnVtYmVyOyAgLy/ljYfnuqfmtojogJfmnKjmnZBcclxuICAgIFVwQ29zdElyb246bnVtYmVyOyAvL+WNh+e6p+a2iOiAl+mZqOmTgVxyXG4gICAgVXBDb3N0U3RvbmU6bnVtYmVyOyAgICAvL+WNh+e6p+a2iOiAl+eBteefs1xyXG59XHJcblxyXG4vL+mjjuawtFxyXG5leHBvcnQgaW50ZXJmYWNlIEZlbmdzaHVpQ29uZmlnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgTGV2ZWw6bnVtYmVyOyAgXHJcbiAgICBMZXZlbE5hbWU6c3RyaW5nO1xyXG4gICAgUGljOnN0cmluZzsgXHJcbiAgICBHb25nZmFBZGQ6bnVtYmVyO1xyXG4gICAgVXBDb3N0UmVpa2k6bnVtYmVyO1xyXG59XHJcblxyXG4vL+maj+acuuivreWPpVxyXG5leHBvcnQgaW50ZXJmYWNlIFJhbmRvbVdvb2RzIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBUeXBlOm51bWJlcjsgIFxyXG4gICAgQ29udGVudDpzdHJpbmc7XHJcbn1cclxuXHJcbi8v6Zeo5rS+XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdHMgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIE5hbWU6c3RyaW5nO1xyXG4gICAgU3RhZ2VJZDpudW1iZXI7XHJcbiAgICBMZWFkZXJJZDpudW1iZXI7XHJcbiAgICBFbGRlcklkOm51bWJlcjtcclxuICAgIEZvbGxvd2VyT25lOm51bWJlcjtcclxuICAgIEZvbGxvd2VyVHdvOm51bWJlcjtcclxuICAgIEZvbGxvd2VyVGhyZWU6bnVtYmVyO1xyXG4gICAgWGl1d2VpSWQ6bnVtYmVyO1xyXG4gICAgUXVhbGlmaWNhdGlvbjpudW1iZXI7XHJcbiAgICBEZXNjOnN0cmluZztcclxufVxyXG5cclxuLy/pl6jmtL7kurrnialcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0ZXJzIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBOYW1lOnN0cmluZztcclxuICAgIEF2YXRhcjpzdHJpbmc7XHJcbiAgICBTdGFnZTpzdHJpbmc7XHJcbiAgICBEZXNjOnN0cmluZztcclxufVxyXG5cclxuLy/pl6jmtL7mioDog73ljYfnuqdcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0S0ZVcGdyYWRlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICAvLyBUeXBlOm51bWJlcjtcclxuICAgIC8vIExvd0xldmVsOm51bWJlcjtcclxuICAgIC8vIFVwTGV2ZWw6bnVtYmVyO1xyXG4gICAgQ29zdDpudW1iZXI7XHJcbn1cclxuXHJcbi8v6Zeo5rS+5ZOB6Zi2XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdEdyYWRlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBOYW1lOnN0cmluZztcclxuICAgIExvd1N0YWdlOm51bWJlcjtcclxufVxyXG5cclxuLy/pl6jmtL7mioDog71cclxuZXhwb3J0IGludGVyZmFjZSBTZWN0S0YgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIE5hbWU6c3RyaW5nOyAvL+mXqOa0vuWKn+azleWQjeensFxyXG4gICAgQWRkVHlwZTpudW1iZXI7IC8v5aKe5Yqg5bGe5oCn57G75Z6LKDHngbXlipsy5qC56aqoM+S9k+mthDTouqvms5UpXHJcbiAgICBHcm91cElkOm51bWJlcjsgLy/pl6jmtL5JRFxyXG4gICAgU3RhZ2VMZXZlbDpudW1iZXI7IC8v6Zeo5rS+5oqA6IO95ZOB6Zi2XHJcbiAgICBTdGFnZU5hbWU6c3RyaW5nOyAvL+mXqOa0vuaKgOiDveWTgemYtuWQjeensFxyXG4gICAgRmVuZ3NodWlUeXBlOm51bWJlcjsgLy/pl6jmtL7mioDog73po47msLTnsbvlnotcclxuICAgIEZlbmdzaHVpTmFtZTpzdHJpbmc7IC8v6Zeo5rS+5oqA6IO96aOO5rC05ZCN56ewXHJcbiAgICBDb3N0Om51bWJlcjsgLy/lrabkuaDmtojogJfpl6jmtL7otKHnjK7lgLxcclxufVxyXG5cclxuLy/pl6jmtL7mioDog73mgLvph4/ljYfnuqdcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0S0ZBZGROdW0gZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIENvc3Q6bnVtYmVyO1xyXG59XHJcblxyXG4vL+mXqOa0vuS7u+WKoVxyXG5leHBvcnQgaW50ZXJmYWNlIFNlY3RUYXNrIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcblx0U3RhZ2U6bnVtYmVyIC8v5Lu75Yqh5ZOB6Zi2XHJcblx0Q29tcGxldGVUaW1lOm51bWJlciAvL+WujOaIkOiAl+aXtnNcclxuXHRSZXdhcmRHb25neGlhbjpudW1iZXIgLy/lpZblirHotKHnjK7lgLxcclxuXHRSZXdhcmRTdG9uZTpudW1iZXIgLy/lpZblirHngbXnn7PmlbDph49cclxuXHRSZXdhcmRXZWl3YW5nOm51bWJlciAvL+WlluWKseWogeacm+WAvFxyXG5cdERlc2M6c3RyaW5nIC8v6Zeo5rS+5LuL57uNXHJcbn1cclxuXHJcbi8v5L+u54K85aGUXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdFRyYWluVG93ZXIgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuXHROb3JtYWxDb3N0ICA6bnVtYmVyIC8v5pmu6YCa5L+u54K85raI6ICX54G155+zXHJcblx0Tm9ybWFsVGltZSAgOm51bWJlciAvL+aZrumAmuS/rueCvOaXtumVvyjnp5IpXHJcblx0Tm9ybWFsVXAgICAgOm51bWJlciAvL+aZrumAmuS/rueCvOaPkOWNh+WAjeaVsFxyXG5cdE5vcm1hbFRpbWVzIDpudW1iZXIgLy/mma7pgJrkv67ngrzmr4/lpKnmrKHmlbBcclxuXHRMZWFkZXJDb3N0ICA6bnVtYmVyIC8v5o6M6Zeo5Lyg5Yqf5raI6ICX54G155+zXHJcblx0TGVhZGVyVGltZSAgOm51bWJlciAvL+aOjOmXqOS8oOWKn+aXtumVvyjnp5IpXHJcblx0TGVhZGVyVXAgICAgOm51bWJlciAvL+aOjOmXqOS8oOWKn+aPkOWNh+WAjeaVsFxyXG5cdExlYWRlclRpbWVzIDpudW1iZXIgLy/mjozpl6jkvKDlip/mr4/lpKnmrKHmlbBcclxufVxyXG5cclxuLy/pl6jmtL7pu5jorqRcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0RGVmYXVsdCBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG5cdFdlaXdhbmdDb3N0IDpudW1iZXIgLy/pgIDlh7rpl6jmtL7miaPpmaTlqIHmnJtcclxuXHRHcm91cEdvbmd4aWFuQ29zdCA6bnVtYmVyIC8v6YCA5Ye66Zeo5rS+5omj6Zmk6Zeo5rS+6LSh54yu5YC8XHJcbn1cclxuXHJcbi8v5YKo54mp6KKL5Y2H57qn5raI6ICXXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFnVXBDb3N0IGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcblx0U3RvbmVOdW0gOm51bWJlciAvL+a3u+WKoOagvOWtkOa2iOiAl+eBteefs+eahOaVsOmHj1xyXG5cdEdvb2RJZCA6bnVtYmVyIC8v5re75Yqg5qC85a2Q5raI6ICX54mp5ZOBSURcclxuXHRHb29kTnVtIDpudW1iZXIgLy/mt7vliqDmoLzlrZDmtojogJfnianlk4HmlbDph49cclxufVxyXG5cclxuLy/pgZPlhbdcclxuZXhwb3J0IGludGVyZmFjZSBJdGVtQ29uZmlnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG5cdFBpYzpzdHJpbmc7ICAgICAgLy/nianlk4Hlm77niYdcclxuXHREZXNjOnN0cmluZzsgICAgIC8v54mp5ZOB5o+P6L+wXHJcblx0UXVhbGl0eTpudW1iZXI7IC8v54mp5ZOB5ZOB6LSoXHJcblx0U3RvcmFnZUxpbWl0ICAgICAgIDpudW1iZXI7IC8v6IOM5YyF5pyA5aSn5Y+g5Yqg5pWw6YePXHJcblx0U2VsbFByaWNlICAgICAgICAgIDpudW1iZXI7IC8v5Ye65ZSu5Lu35qC8XHJcblx0Q2FuVXNlIDpudW1iZXI7IC8v6IO95LiN6IO95L2/55SoXHJcblx0VXNlVHlwZSA6bnVtYmVyOyAvL+eJqeWTgeexu+Weiygx5bGe5oCn5re75YqgMua4oeWKq+amgueOh+a3u+WKoDPmtojogJflk4E05oqA6IO95a2m5LmgKVxyXG5cdFByb3BlcnR5QWRkVHlwZSAgICA6bnVtYmVyOyAvL+a3u+WKoOeahOWxnuaAp+exu+Weiygx54G155+zMumjn+eJqTPmnKjmnZA06ZOB55+/NeS7meeOiTbpl6jmtL7otKHnjK7lgLw35aiB5pyb5YC8OOato+S5ieWAvDnpgqrmgbblgLwxMOS/ruS4uuWAvDEx5L+u55yf5bm06b6EMTLpgZPooYwxM+eBteWKmzE05qC56aqoMTXkvZPprYQxNui6q+azlTE35oKf5oCnMTjnpo/nvJgxOei1hOi0qDIw5Lq65peP5Lyk5a6zMjHlppbml4/kvKTlrrMyMuS7meaXj+S8pOWuszIz6ay85peP5Lyk5a6zMjTprZTml4/kvKTlrrMyNem+meaXj+S8pOWusylcclxuXHRQcm9wZXJ0eUFkZFZhbHVlICAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDlgLxcclxuXHREdWppZUFkZFhpdXdlaUxpbWl0Om51bWJlcjsgLy/muKHliqvmt7vliqDmpoLnjofkv67kuLrpmLbmrrXpmZDliLZcclxuXHREdWppZUFkZFZhbHVlICAgICAgOm51bWJlcjsgLy/muKHliqvmpoLnjofmt7vliqDlgLxcclxuXHRCb29rU2tpbGxJZCAgICAgICAgOm51bWJlcjsgLy/lrabkuaDnmoTkuabmnKzmioDog71JRFxyXG59XHJcblxyXG4vL+ijheWkh1xyXG5leHBvcnQgaW50ZXJmYWNlIEVxdWlwQ29uZmlnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG5cdFR5cGU6bnVtYmVyOyAvL+ijheWkh+exu+Wei++8mjHngbXliZEy5Y+R57CqM+iho+acjTTpnbTlrZA15oyH546vNueOieS9qTfmiYvpla84572X55uYXHJcblx0UGljOnN0cmluZzsgLy/oo4XlpIflm77niYdcclxuXHREZXNjOnN0cmluZzsvL+ijheWkh+aPj+i/sFxyXG5cdFF1YWxpdHkgICAgICA6bnVtYmVyOyAvL+ijheWkh+WTgei0qFxyXG5cdFN0b3JhZ2VMaW1pdCA6bnVtYmVyOyAvL+iDjOWMheacgOWkp+WPoOWKoOaVsOmHj1xyXG5cdFNlbGxQcmljZSAgICA6bnVtYmVyOyAvL+WHuuWUruS7t+agvFxyXG5cdENhblVzZSAgICAgICA6bnVtYmVyOyAvL+iDveS4jeiDveS9v+eUqFxyXG5cdFByb3BlcnR5QWRkT25lVHlwZSAgICA6bnVtYmVyOyAvL+WxnuaAp+a3u+WKoOexu+Weizox54G155+zMumjn+eJqTPmnKjmnZA06ZOB55+/NeS7meeOiTbpl6jmtL7otKHnjK7lgLw35aiB5pyb5YC8OOato+S5ieWAvDnpgqrmgbblgLwxMOS/ruS4uuWAvDEx6YGT6KGMMTLngbXlipsxM+aguemqqDE05L2T6a2EMTXouqvms5UxNuaCn+aApzE356aP57yYMTjotYTotKgxOeS6uuaXj+S8pOWuszIw5aaW5peP5Lyk5a6zMjHku5nml4/kvKTlrrMyMumsvOaXj+S8pOWuszIz6a2U5peP5Lyk5a6zMjTpvpnml4/kvKTlrrNcclxuXHRQcm9wZXJ0eUFkZE9uZVZhbHVlICAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDlgLxcclxuXHRQcm9wZXJ0eUFkZFR3b1R5cGUgICAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDnsbvlnos6MeeBteefszLpo5/niakz5pyo5p2QNOmTgeefvzXku5nnjok26Zeo5rS+6LSh54yu5YC8N+Wogeacm+WAvDjmraPkuYnlgLw56YKq5oG25YC8MTDkv67kuLrlgLwxMemBk+ihjDEy54G15YqbMTPmoLnpqqgxNOS9k+mthDE16Lqr5rOVMTbmgp/mgKcxN+emj+e8mDE46LWE6LSoMTnkurrml4/kvKTlrrMyMOWmluaXj+S8pOWuszIx5LuZ5peP5Lyk5a6zMjLprLzml4/kvKTlrrMyM+mtlOaXj+S8pOWuszI06b6Z5peP5Lyk5a6zXHJcblx0UHJvcGVydHlBZGRUd29WYWx1ZSAgIDpudW1iZXI7IC8v5bGe5oCn5re75Yqg5YC8XHJcblx0UHJvcGVydHlBZGRUaHJlZVR5cGUgIDpudW1iZXI7IC8v5bGe5oCn5re75Yqg57G75Z6LOjHngbXnn7My6aOf54mpM+acqOadkDTpk4Hnn7815LuZ546JNumXqOa0vui0oeeMruWAvDflqIHmnJvlgLw45q2j5LmJ5YC8OemCquaBtuWAvDEw5L+u5Li65YC8MTHpgZPooYwxMueBteWKmzEz5qC56aqoMTTkvZPprYQxNei6q+azlTE25oKf5oCnMTfnpo/nvJgxOOi1hOi0qDE55Lq65peP5Lyk5a6zMjDlppbml4/kvKTlrrMyMeS7meaXj+S8pOWuszIy6ay85peP5Lyk5a6zMjPprZTml4/kvKTlrrMyNOm+meaXj+S8pOWus1xyXG5cdFByb3BlcnR5QWRkVGhyZWVWYWx1ZSA6bnVtYmVyOyAvL+WxnuaAp+a3u+WKoOWAvFxyXG5cdFByb3BlcnR5QWRkRm91clR5cGUgICA6bnVtYmVyOyAvL+WxnuaAp+a3u+WKoOexu+Weizox54G155+zMumjn+eJqTPmnKjmnZA06ZOB55+/NeS7meeOiTbpl6jmtL7otKHnjK7lgLw35aiB5pyb5YC8OOato+S5ieWAvDnpgqrmgbblgLwxMOS/ruS4uuWAvDEx6YGT6KGMMTLngbXlipsxM+aguemqqDE05L2T6a2EMTXouqvms5UxNuaCn+aApzE356aP57yYMTjotYTotKgxOeS6uuaXj+S8pOWuszIw5aaW5peP5Lyk5a6zMjHku5nml4/kvKTlrrMyMumsvOaXj+S8pOWuszIz6a2U5peP5Lyk5a6zMjTpvpnml4/kvKTlrrNcclxuXHRQcm9wZXJ0eUFkZEZvdXJWYWx1ZSAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDlgLxcclxufVxyXG5cclxuLy/kuabnsY3mioDog71cclxuZXhwb3J0IGludGVyZmFjZSBTa2lsbENvbmZpZ1R5cGUgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuXHRTa2lsbFR5cGUgIDpudW1iZXI7IC8v5oqA6IO957G75Z6LKDLnp5jnsY0z55yf6K+ANOW/g+e7jzXpgYHmnK8257ud5a2mN+aui+mhtTjmi5vlvI8pXHJcblx0QWRkVHlwZSAgICA6bnVtYmVyOyAvL+WinuWKoOWxnuaAp+exu+Weiygx54G15YqbMuaguemqqDPkvZPprYQ06Lqr5rOVKVxyXG5cdFN0YWdlTGV2ZWwgOm51bWJlcjsgLy/pl6jmtL7mioDog73lk4HpmLZcclxuXHRTdGFnZU5hbWUgOnN0cmluZzsgIC8v6Zeo5rS+5oqA6IO95ZOB6Zi25ZCN56ewXHJcblx0RmVuZ3NodWlUeXBlIDpudW1iZXI7IC8v6Zeo5rS+5oqA6IO96aOO5rC057G75Z6LXHJcblx0RmVuZ3NodWlOYW1lIDpzdHJpbmc7IC8v6Zeo5rS+5oqA6IO96aOO5rC05ZCN56ewXHJcblx0Q29zdCAgICAgICA6bnVtYmVyOyAvL+WtpuS5oOa2iOiAl+mXqOa0vui0oeeMruWAvFxyXG59XHJcblxyXG4vL+mXqOa0vuaLm+W8j1xyXG5leHBvcnQgaW50ZXJmYWNlIFNlY3RCYXR0bGVTa2lsbENmZ1R5cGUgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIEh1cnRBZGQ6bnVtYmVyOyAvL+aLm+W8j+S8pOWus+WKoOaIkFxyXG59XHJcblxyXG4vL+acuuWZqOS6ulxyXG5leHBvcnQgaW50ZXJmYWNlIEJhdHRsZUFpQ2ZnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgRGVzYyAgICAgICAgIDpzdHJpbmc7IC8v566A5LuLXHJcblx0UmFjaWFsVHlwZSAgIDpudW1iZXI7IC8v56eN5peP57G75Z6LMeS6uuaXjzLlppbml48z5LuZ5pePNOmsvOaXjzXprZTml4826b6Z5pePXHJcblx0WGl1d2VpU3RhZ2UgIDpudW1iZXI7IC8v5L+u5Li66Zi25q61XHJcblx0TGluZ2xpICAgICAgIDpudW1iZXI7IC8v54G15YqbXHJcblx0R2VuZ3UgICAgICAgIDpudW1iZXI7IC8v5qC56aqoXHJcblx0VGlwbyAgICAgICAgIDpudW1iZXI7IC8v5L2T6a2EXHJcblx0U2hlbmZhICAgICAgIDpudW1iZXI7IC8v6Lqr5rOVXHJcblx0SHVydEFkZCAgICAgIDpudW1iZXI7IC8v5Lyk5a6z5Yqg5bGCXHJcblx0SHVydFJlZHVjZSAgIDpudW1iZXI7IC8v5Lyk5a6z5YeP5YWNXHJcblx0R3JvdXBTdHlsZUlkIDpudW1iZXI7IC8v6Zeo5rS+5oub5byPSURcclxuXHRIdXJ0UmVuenUgICAgOm51bWJlcjsgLy/kurrml4/kvKTlrrNcclxuXHRIdXJ0WWFvenUgICAgOm51bWJlcjsgLy/lppbml4/kvKTlrrNcclxuXHRIdXJ0WGlhbnp1ICAgOm51bWJlcjsgLy/ku5nml4/kvKTlrrNcclxuXHRIdXJ0R3VpenUgICAgOm51bWJlcjsgLy/prLzml4/kvKTlrrNcclxuXHRIdXJ0TW96dSAgICAgOm51bWJlcjsgLy/prZTml4/kvKTlrrNcclxuXHRIdXJ0TG9uZ3p1ICAgOm51bWJlcjsgLy/pvpnml4/kvKTlrrNcclxufVxyXG5cclxuLy/plYflppbloZTlsYLnuqdcclxuZXhwb3J0IGludGVyZmFjZSBNb25zdGVyVG93ZXJDZmdUeXBlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBEZXNjICAgICAgICA6c3RyaW5nOyAvL+eugOS7i1xyXG5cdExvd1N0YWdlICAgIDpudW1iZXI7IC8v5oyR5oiY55qE5pyA5L2O5L+u5Li6XHJcblx0UmV3YXJkSWQgICAgOm51bWJlcjsgLy/lpZblirHooahJRFxyXG5cdEhlbHBPbmVJZCAgIDpudW1iZXI7IC8v5Yqp5oiY5py65Zmo5Lq6MUlEXHJcblx0SGVscFR3b0lkICAgOm51bWJlcjsgLy/liqnmiJjmnLrlmajkuroySURcclxuXHRIZWxwVGhyZWVJZCA6bnVtYmVyOyAvL+WKqeaImOacuuWZqOS6ujNJRFxyXG5cdEhlbHBGb3VySWQgIDpudW1iZXI7IC8v5Yqp5oiY5py65Zmo5Lq6NElEXHJcblx0SGVscEZpdmVJZCAgOm51bWJlcjsgLy/liqnmiJjmnLrlmajkuro1SURcclxuXHRCYXR0bGVPbmVJZCA6bnVtYmVyOyAvL+WvueaImOacuuWZqOS6ujFJRFxyXG5cdEJhdHRsZVR3b0lkIDpudW1iZXI7IC8v5a+55oiY5py65Zmo5Lq6MklEXHJcblx0QmF0dGxlVGhyZWVJZCA6bnVtYmVyOyAvL+WvueaImOacuuWZqOS6ujNJRFxyXG5cdEJhdHRsZUZvdXJJZCAgOm51bWJlcjsgLy/lr7nmiJjmnLrlmajkuro0SURcclxuXHRCYXR0bGVGaXZlSWQgIDpudW1iZXI7IC8v5a+55oiY5py65Zmo5Lq6NUlEXHJcbn1cclxuXHJcbi8v5oiY5paX5aWW5YqxXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmF0dGxlQXdhcmRDZmdUeXBlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcblx0T25lVHlwZSAgIDpudW1iZXI7IC8v5aWW5YqxMeexu+WeiyAxLeeJqeWTgTIt6KOF5aSHXHJcblx0T25lSWQgICAgIDpudW1iZXI7IC8v5aWW5YqxMUlEXHJcblx0T25lTnVtICAgIDpudW1iZXI7IC8v5aWW5YqxMeaVsOmHj1xyXG5cdFR3b1R5cGUgICA6bnVtYmVyOyAvL+WlluWKsTLnsbvlnosgMS3nianlk4EyLeijheWkh1xyXG5cdFR3b0lkICAgICA6bnVtYmVyOyAvL+WlluWKsTJJRFxyXG5cdFR3b051bSAgICA6bnVtYmVyOyAvL+WlluWKsTLmlbDph49cclxuXHRUaHJlZVR5cGUgOm51bWJlcjsgLy/lpZblirEz57G75Z6LIDEt54mp5ZOBMi3oo4XlpIdcclxuXHRUaHJlZUlkICAgOm51bWJlcjsgLy/lpZblirEzSURcclxuXHRUaHJlZU51bSAgOm51bWJlcjsgLy/lpZblirEz5pWw6YePXHJcblx0Rm91clR5cGUgIDpudW1iZXI7IC8v5aWW5YqxNOexu+WeiyAxLeeJqeWTgTIt6KOF5aSHXHJcblx0Rm91cklkICAgIDpudW1iZXI7IC8v5aWW5YqxNElEXHJcblx0Rm91ck51bSAgIDpudW1iZXI7IC8v5aWW5YqxNOaVsOmHj1xyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpY3Rpb25hcnk8VD4ge1xyXG4gICAgW0tleTogc3RyaW5nXTogVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50Q2xhc3Mge1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIExpc3RlbmVyOkZ1bmN0aW9uO1xyXG4gICAgVGFyZ2V0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcsIGxpc3RlbmVyOkZ1bmN0aW9uLCB0YXJnZXQ/KXtcclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLkxpc3RlbmVyID0gbGlzdGVuZXI7XHJcbiAgICAgICAgdGhpcy5UYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0ZW5lckNsYXNzIHtcclxuICAgIExpc3RlbmVycyA9IG5ldyBBcnJheTxGdW5jdGlvbj4oKTtcclxuICAgIFRhcmdldHMgPSBuZXcgQXJyYXk8Q29tbW9uLkV2ZW50RGlzcGF0aGVyPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXIobGlzdGVuZXI6RnVuY3Rpb24sIHRhcmdldD8pe1xyXG4gICAgICAgIHRoaXMuTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIHRoaXMuVGFyZ2V0cy5wdXNoKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIobGlzZW5lcjpGdW5jdGlvbil7XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuTGlzdGVuZXJzLmluZGV4T2YobGlzZW5lcik7XHJcbiAgICAgICAgaWYoaWR4ID49IDApe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5MaXN0ZW5lcnNbaWR4XTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuVGFyZ2V0c1tpZHhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudERpc3BhdGhlckludGVyZmFjZXtcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoa2V5LCBsaXNlbmVyOkZ1bmN0aW9uKTtcclxuICAgIGRpc3BhdGNoRXZlbnQoa2V5KTtcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxufVxyXG5cclxuLy/niYjmnKzmjqfliLZcclxuZXhwb3J0IGVudW0gVmVyc2lvbkNvbmZpZyB7XHJcbiAgICAvL+W8gOWPkeeJiOacrFxyXG4gICAgRGV2ZWxvcCA9IDAsXHJcbiAgICAvL+WvueWklueJiOacrFxyXG4gICAgUmVsZWFzZSA9IDEsXHJcbn1cclxuXHJcbi8v5rGg57G75Z6LXHJcbmV4cG9ydCBjb25zdCBQb29sVHlwZSA9IHtcclxuICAgIC8v6K6h5pe25ZmoXHJcbiAgICBUaW1lcjogJ1RpbWVyJyxcclxuICAgIC8v546p5a625aS06YOoXHJcbiAgICBIZWFkTW9kZWw6ICdIZWFkTW9kZWwnLFxyXG4gICAgLy/njqnlrrbouqvkvZNcclxuICAgIEJvZHlNb2RlbDogJ0JvZHlNb2RlbCcsXHJcbiAgICAvL+W8ueW5lVxyXG4gICAgUGFzc2J5VHh0OiAnUGFzc2J5VHh0JyxcclxuICAgIC8vZmFpcnlndWnlr7nosaFcclxuICAgIEZndWlPYmo6ICdGZ3VpT2JqJyxcclxufVxyXG5cclxuLy/msaDnianlk4HnsbvlnotcclxuZXhwb3J0IGNvbnN0IFBvb2xJdGVtS2V5ID0ge1xyXG4gICAgLy/njqnlrrbouqvkvZNcclxuICAgIEJvZHlTcGluZTogJ0JvZHlTcGluZScsICAgIFxyXG4gICAgLy/mjaLoo4XmqKHmnb9cclxuICAgIERyZXNzVGVtcGxhdGU6ICdEcmVzc1RlbXBsYXRlJywgICAgXHJcbn1cclxuXHJcbi8v6ZqP5py66K+t5Y+l57G75Z6LXHJcbmV4cG9ydCBjb25zdCBSYW5kV29yZFR5cGUgPSB7XHJcbiAgICAvL+a4oeWKq1xyXG4gICAgQ3VsdGl2YXRpb246IDEsXHJcbn1cclxuXHJcbi8v5bm/5ZGK57G75Z6LXHJcbmV4cG9ydCBlbnVtIEF3YXJkVHlwZSB7XHJcbiAgICBOb3QgPSAwLFxyXG4gICAgQUQgPSAxLFxyXG4gICAgU2hhcmUgPSAyXHJcbn1cclxuXHJcbi8v5bm/5ZGK5LyY5YWI57qn6YWN572uXHJcbmV4cG9ydCBlbnVtIEFkQ29uZmlnVHlwZSB7XHJcbiAgICAvL+a/gOWKseinhumikeS8mOWFiFxyXG4gICAgVmlkZW8gPSAwLFxyXG4gICAgLy/liIbkuqvkvJjlhYhcclxuICAgIFNoYXJlID0gMVxyXG59XHJcblxyXG4vL+WIhuS6q+ivreWPpeexu+Wei1xyXG5leHBvcnQgZW51bSBTaGFyZVdvcmRFbnVtIHtcclxuICAgIENhcmRXb3JkcyA9IDEsXHJcbiAgICBIYW1zdGVyV29yZHMgPSAyLFxyXG4gICAgQ29pbldvcmRzID0gMyxcclxuICAgIE90aGVyV29yZHMgPSA0LFxyXG59XHJcblxyXG4vL+aooeWei+aVsOaNruWumuS5iVxyXG5leHBvcnQgY2xhc3MgTW9kZWxEYXRhU3RydWN0IHtcclxuICAgIG1zcDpMYXlhLlNwcml0ZTNEO1xyXG4gICAgYW5pOkxheWEuQW5pbWF0b3I7XHJcbiAgICBhbmlTdGF0ZTpMYXlhLkFuaW1hdG9yUGxheVN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1zcDpMYXlhLlNwcml0ZTNELCBhbmk6TGF5YS5BbmltYXRvciwgYW5pU3RhdGU6TGF5YS5BbmltYXRvclBsYXlTdGF0ZSl7XHJcbiAgICAgICAgdGhpcy5tc3AgPSBtc3A7XHJcbiAgICAgICAgdGhpcy5hbmkgPSBhbmk7XHJcbiAgICAgICAgdGhpcy5hbmlTdGF0ZSA9IGFuaVN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WFrOWFseehruiupOW8ueeql+exu+Wei1xyXG5leHBvcnQgY29uc3QgQ29uZmlybVdpbmRvd1R5cGUgPSB7XHJcbiAgICAvL+aWh+Wtl1xyXG4gICAgQ29udGVudDogMSxcclxuICAgIC8v5aWW5Yqx54mp5ZOBXHJcbiAgICBSZXdhcmQ6IDIsXHJcbiAgICAvL+aWh+WtlyvlpZblirFcclxuICAgIENvbnRlbnRBbmRSZXdhcmQ6IDMsXHJcbn1cclxuXHJcbi8v5by55Ye656qX5Y+j5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpbmRvd0RhdGEge1xyXG4gICAgQ29udGVudDpzdHJpbmdbXTtcclxuICAgIFdpbmRvd1R5cGU6bnVtYmVyO1xyXG4gICAgWWVzQnRuQ29udGVudDpzdHJpbmc7XHJcbiAgICBZZXNCdG5DYWxsYmFjazpGdW5jdGlvbjtcclxuICAgIENhbmNlbEJ0bkNvbnRlbnQ6c3RyaW5nO1xyXG4gICAgUmV3YXJkRGF0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50OnN0cmluZ1tdLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIHdpbmRvd1R5cGU/Om51bWJlciwgcmV3YXJkRGF0YT8sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5Db250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLlllc0J0bkNhbGxiYWNrID0geWVzQnRuQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5ZZXNCdG5Db250ZW50ID0gYnRuWWVzVHh0PyBidG5ZZXNUeHQ6ICfnoa7lrponO1xyXG4gICAgICAgIHRoaXMuQ2FuY2VsQnRuQ29udGVudCA9IGJ0bkNhbmNlbFR4dD8gYnRuQ2FuY2VsVHh0OiAn5Y+W5raIJztcclxuICAgICAgICB0aGlzLldpbmRvd1R5cGUgPSB3aW5kb3dUeXBlO1xyXG4gICAgICAgIHRoaXMuUmV3YXJkRGF0YSA9IHJld2FyZERhdGE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsQ29uZmlnIHtcclxuICAgIHN0YXRpYyByZWFkb25seSBDdWx0aXZhdGlvbl9GbHlfSW50ZXJ2YWwgPSA2OyAgICAvL+S/ruS4uumjmOWtl+mXtOmalC/mr6vnp5JcclxuICAgIHN0YXRpYyByZWFkb25seSBBZG9iZV9Qcm9kdWN0aW9uX0ludGVydmFsID0gMTA7ICAgIC8v5rSe5bqc55Sf5Lqn6Ze06ZqUL+avq+enklxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFRvd2VyX01heF9JbnZpdGVfTnVtID0gNDsgIC8v6ZWH5aaW5aGU5pyA5aSn5Y+v6YKA6K+35pWw6YePXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgTWF4X1JlYWR5ID0gODtcclxuICAgIHN0YXRpYyByZWFkb25seSBNYXhfTGV2ZWwgPSA4O1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IE1heF9CYXR0bGUgPSA5O1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgc3RhdGljIElzQ2hvb3NlZFNlcnZpY2UgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBJc1NpbVByb2dyZXNzRW5kID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIFJld2FyZEFkTGlzdCA9IFtcclxuICAgICAgICAnYWR1bml0LWQ5NTA2Yjg1NmRhNjUxZDknLFxyXG4gICAgICAgICdhZHVuaXQtMjc3YTE0OTBiZGQ5NjU4NicsXHJcbiAgICAgICAgJ2FkdW5pdC0yNGM5ODFiYjZlMjYxYzEyJyxcclxuICAgICAgICAnYWR1bml0LWJhMTQ3NDI0MmUwYjA3Y2MnLFxyXG4gICAgICAgICdhZHVuaXQtNWVkYzUyNTZiODk5NDZjZSdcclxuICAgIF07XHJcblxyXG4gICAgc3RhdGljIEJhbm5lckFkTGlzdCA9IFtcclxuICAgICAgICAnYWR1bml0LTY0ZjMyZWJmMzkxYTNlZWEnLFxyXG4gICAgICAgICdhZHVuaXQtZjFiZDk3MDI5NDEyZGMzNScsXHJcbiAgICAgICAgJ2FkdW5pdC03OTIxMDlmYWM2OGVmMDhiJyxcclxuICAgICAgICAnYWR1bml0LWVkOGYwMGRkNDJkZDJkZDgnLFxyXG4gICAgICAgICdhZHVuaXQtYTkyNGMyOTZlYTliMjNhNSdcclxuICAgIF07XHJcblxyXG4gICAgc3RhdGljIHJlYWRvbmx5IE1pbmlQcm9ncmFtQXBwSWQgPSB7XHJcbiAgICAgICAgTWFpa2U6ICd3eDZmMWI5YjgxNDY3Y2MzZGEnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+eUqOaIt+aYr+WQpuW3suaOiOadg1xyXG4gICAgc3RhdGljIElzV3hBdXRoID0gdHJ1ZTtcclxuXHJcbiAgICAvL+WtmOWCqOeUqOaIt+WQjVxyXG4gICAgc3RhdGljIEdldEFjb3VudE5hbWUoKXtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLmdldExvY2FsU3RvcmFnZShcIkFjb3VudE5hbWVcIikgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFNhdmVBY291bnROYW1lKF92YWx1ZSl7XHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbFN0b3JhZ2UoXCJBY291bnROYW1lXCIsIF92YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTG9jYWxDb250ZW50ID0ge1xyXG4gICAgSW52aXRlOiAn6YKA6K+3JyxcclxuXHJcbiAgICBOZXRFcnJvcjogJ+e9kee7nOW8gOWwj+W3ricsXHJcblxyXG4gICAgWWVzOiAn56Gu5a6aJyxcclxuXHJcbiAgICBDb21pbmdTb29uOiAn5pqC5pyq5byA5pS+JyxcclxuXHJcbiAgICBHZXRBd2FyZDogJ+mihuWPlicsXHJcblxyXG4gICAgRmx5aW5nVGlwc0RlZmF1bHQ6ICfmga3llpzojrflvpflpZblirEnLFxyXG5cclxuICAgIENvbnNBd2FyZDogXCLmga3llpzojrflvpdcIixcclxuXHJcbiAgICBTaGFyZUZhaWxUaXBzOiBcIuWIhuS6q+ebuOWQjOaci+WPi+WciOaXoOazleiOt+W+l+WlluWKsVwiLFxyXG59IiwiZXhwb3J0IGxldCBsb2dpblJlc1VybHMgPSBbXHJcbiAgICB7IHVybDogJ3Jlcy9DaG9vc2VTZXJ2aWNlL0Nob29zZVNlcnZpY2UudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9Mb2FkaW5nVUkvTG9hZGluZ1VJLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvTG9hZGluZ1VJL0xvYWRpbmdVSV9hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuXSIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVxYm9keUJhc2V7XHJcbiAgICBzdGF0aWMgcmVxYm9keXM6Q29uZmlnLkRpY3Rpb25hcnk8SHR0cFJlcWJvZHlCYXNlPiA9IHt9O1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIE1vZHVsZUNvZGU6IG51bWJlcjtcclxuICAgIFJlcUNvZGU6IG51bWJlcjtcclxuICAgIFNlc3Npb246IHN0cmluZztcclxuICAgIEFjY291bnRLZXk6IHN0cmluZztcclxuICAgIFJlcURhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6c3RyaW5nLCBtb2RDb2RlOm51bWJlciwgcmVxQ29kZTpudW1iZXIsIHNlc3Npb24/OnN0cmluZywgYWNjTmFtZT86c3RyaW5nLCByZXFkYXRhPyl7XHJcbiAgICAgICAgaWYodHlwZW9mKHJlcWRhdGEpID09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAvL+WmguW3sui9rOaNouWImei9rOWbnkpTT05cclxuICAgICAgICAgICAgcmVxZGF0YSA9IEpTT04ucGFyc2UocmVxZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLk1vZHVsZUNvZGUgPSBtb2RDb2RlO1xyXG4gICAgICAgIHRoaXMuUmVxQ29kZSA9IHJlcUNvZGU7XHJcbiAgICAgICAgdGhpcy5TZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLkFjY291bnRLZXkgPSBhY2NOYW1lO1xyXG4gICAgICAgIHRoaXMuUmVxRGF0YSA9IHJlcWRhdGE7XHJcblxyXG4gICAgICAgIEh0dHBSZXFib2R5QmFzZS5yZXFib2R5c1trZXldID0gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuLy/or7fmsYLnu5PmnoRcclxuZXhwb3J0IHZhciBSZXFEYXRhID0ge1xyXG4gICAgTG9naW46e1wiTmFtZVwiOiBcInRhbmR5XCJ9LFxyXG4gICAgQWRvYmVQb29sVXBncmFkZTp7XCJUeXBlXCI6IDF9LFxyXG4gICAgSm9pblNlY3Q6e1wiR3JvdXBTdGFnZUlkXCI6IDEsXCJHcm91cElkXCI6IDF9LFxyXG4gICAgTGVhcm5TZWN0S2Y6e1wiU2tpbGxJZFwiOiAxfSxcclxuICAgIFVwZ3JhZGVLb25nZmE6e1wiU2tpbGxUeXBlXCI6MSxcIlNraWxsSWRcIjogMX0sXHJcbiAgICBTdGFydFNlY3RUYXNrOntcIlRhc2tJZFwiOjF9LFxyXG4gICAgR3JhYlNlY3RUYXNrQXdhcmQ6e1wiVGFza0lkXCI6MX0sXHJcbiAgICBTZWxsQmFnSXRlbTp7XCJQb3NpdGlvblwiOiAxLFwiVHlwZVwiOiAxLFwiSWRcIjogMSxcIk51bVwiOiAxfSxcclxuICAgIFVzZUJhZ0l0ZW06e1wiUG9zaXRpb25cIjogMSxcIlR5cGVcIjogMSxcIklkXCI6IDEsXCJOdW1cIjogMX0sXHJcbiAgICBHbUFkZEJhZ0l0ZW06e1wiVHlwZVwiOiAxLFwiSWRcIjogMSxcIk51bVwiOiAxfSxcclxuICAgIC8v5oyR5oiY6ZWH5aaW5aGUXHJcbiAgICBHb01vbnN0ZXJUb3dlcjp7XCJDaGFsbGVuZ2VMZXZlbFwiOiAxLCBcIkhlbHBIZXJvc1wiOiBuZXcgQXJyYXk8SGVscEhlcm9zRGF0YUNsYXNzPigpfSxcclxufVxyXG5cclxuLy/plYflppbloZTpgoDor7fku5nlj4vmlbDmja5cclxuZXhwb3J0IGNsYXNzIEhlbHBIZXJvc0RhdGFDbGFzcyB7XHJcbiAgICBLZXk6c3RyaW5nO1xyXG4gICAgSXNSb2JvdDpib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcsIGlzUm9ib3Q6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5LZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5Jc1JvYm90ID0gaXNSb2JvdDtcclxuICAgIH1cclxuXHJcbiAgICAvL+aXoOWKqeaImOiLsembhFxyXG4gICAgc3RhdGljIGdldCBOb25lSGVscEhlcm8oKXtcclxuICAgICAgICByZXR1cm4gW0VtcHR5SGVscEhlcm8sIEVtcHR5SGVscEhlcm8sIEVtcHR5SGVscEhlcm8sIEVtcHR5SGVscEhlcm9dO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WKqeaImOiLsembhOepuuS9jVxyXG5leHBvcnQgY29uc3QgRW1wdHlIZWxwSGVybyA9IG5ldyBIZWxwSGVyb3NEYXRhQ2xhc3MoJycsIGZhbHNlKTtcclxuXHJcbmV4cG9ydCBlbnVtIFJlcWJvZHlLZXl7XHJcbiAgICBDb25maWcgPSBcIkNvbmZpZ1wiLFxyXG4gICAgTG9naW4gPSBcIkxvZ2luXCIsXHJcbiAgICBVcGdyYWRlID0gXCJVcGdyYWRlXCIsXHJcbiAgICBBZG9iZVVpSW5mbyA9IFwiQWRvYmVVaUluZm9cIixcclxuICAgIEFkb2JlSGlyZVdvcmtlciA9IFwiQWRvYmVIaXJlV29ya2VyXCIsXHJcbiAgICBBZG9iZUFkZFdvcmtlciA9IFwiQWRvYmVBZGRXb3JrZXJcIixcclxuICAgIEFkb2JlUmVkdWNlV29ya2VyID0gXCJBZG9iZVJlZHVjZVdvcmtlclwiLFxyXG4gICAgQWRvYmVVcFN0b25lID0gXCJBZG9iZVVwU3RvbmVcIixcclxuICAgIEFkb2JlVXBGb29kID0gXCJBZG9iZVVwRm9vZFwiLFxyXG4gICAgQWRvYmVVcFdvb2QgPSBcIkFkb2JlVXBXb29kXCIsXHJcbiAgICBBZG9iZVVwSXJvbiA9IFwiQWRvYmVVcElyb25cIixcclxufVxyXG5cclxuZXhwb3J0IGxldCBOZXRDb25maWcgPSB7XHJcbiAgICBSZXF1ZXN0VXJsOlwiaHR0cDovLzcubGlnaHRwYXcuY29tL3RydXRoXCIsXHJcblxyXG4gICAgLy8gSHR0cFJlcXVlc3RVcmw6XCJodHRwOi8vNzA2LmxpZ2h0cGF3LmNvbTo3NzIwL2hhcHB5X3RyYXZlbFwiLFxyXG5cclxuICAgIEh0dHBSZXF1ZXN0VXJsOlwiaHR0cHM6Ly85ejlhY3Y5MDFnLmV4ZWN1dGUtYXBpLmNuLW5vcnRod2VzdC0xLmFtYXpvbmF3cy5jb20uY24vYmV0YVwiLFxyXG4gICAgXHJcbiAgICBMb2NhbFJlcXVlc3RVcmw6XCJodHRwOi8vNy5saWdodHBhdy5jb20vdHJ1dGhcIixcclxuXHJcbiAgICBMb2NhbFdlY2hhdFJlcXVlc3RVcmw6XCJodHRwOi8vc3ZmMzdlLm5hdGFwcGZyZWUuY2MvaGFwcHlfdHJhdmVsXCIsXHJcblxyXG4gICAgR01Vcmw6XCJodHRwOi8vNy5saWdodHBhdy5jb20vaGFwcHlfdHJhdmVsL3Jld2FyZFwiLFxyXG5cclxuICAgIFRlbXBOYW1lOlwiXCIsXHJcbn1cclxuXHJcbi8v6L+e5o6l54q25oCBXHJcbmV4cG9ydCBlbnVtIEh0dHBDb25uZWN0U3RhdGUge1xyXG4gICAgRXJyb3IgPSAwLFxyXG4gICAgU3VjY2VzcyA9IDEsXHJcbn1cclxuXHJcbi8v5ZON5bqU57uT5p6E5L2TXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzcERhdGFTdHJ1Y3Qge1xyXG4gICAgUmVzcENvZGU6IG51bWJlcjtcclxuICAgIFJlc3BNc2c6IHN0cmluZztcclxuICAgIFJlc3BEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzcERhdGEoZGF0YTpSZXNwRGF0YVN0cnVjdCl7XHJcbiAgICByZXR1cm4gZGF0YSAmJiBkYXRhLlJlc3BEYXRhO1xyXG59XHJcblxyXG4vL+aLieWPlumFjee9ruivt+axguS9k1xyXG5leHBvcnQgY2xhc3MgQ29uZmlnRGF0YVBhcmFtIHtcclxuICAgIFRhYmxlSWQ6IG51bWJlcjtcclxuICAgIFRhYmxlTmFtZTogc3RyaW5nO1xyXG4gICAgVmVyc2lvbjogbnVtYmVyO1xyXG4gICAgRGF0YTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6bnVtYmVyLCB2ZXJzaW9uOm51bWJlciwgbmFtZT86c3RyaW5nLCBkYXRhPyl7XHJcbiAgICAgICAgdGhpcy5UYWJsZUlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5WZXJzaW9uID0gdmVyc2lvbjtcclxuICAgICAgICBpZihuYW1lKXtcclxuICAgICAgICAgICAgdGhpcy5UYWJsZU5hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5EYXRhID0gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgQ29uZmlnUmVxRGF0YSA9IG5ldyBBcnJheTxDb25maWdEYXRhUGFyYW0+KCk7XHJcblxyXG4vL+eZu+W9leivt+axguS9k1xyXG5leHBvcnQgY2xhc3MgTG9naW5SZXFEYXRhIHtcclxuICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIEpzQ29kZT86IHN0cmluZztcclxuICAgIEVuY3J5cHRlZERhdGE/OiBzdHJpbmc7XHJcbiAgICBJdj86IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lPzpzdHJpbmcsIHB3PzpzdHJpbmcsIGpzY29kZT86c3RyaW5nLCBlbmNyeXB0ZWREYXRhPzpzdHJpbmcsIGl2PzpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLk5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuUGFzc3dvcmQgPSBwdztcclxuICAgICAgICB0aGlzLkpzQ29kZSA9IGpzY29kZTtcclxuICAgICAgICB0aGlzLkVuY3J5cHRlZERhdGEgPSBlbmNyeXB0ZWREYXRhO1xyXG4gICAgICAgIHRoaXMuSXYgPSBpdjtcclxuICAgIH1cclxufVxyXG5cclxuLy/nmbvlvZXlk43lupTmlbDmja7kvZNcclxuZXhwb3J0IHR5cGUgTG9naW5SZXNwRGF0YVN0cnVjdCA9IHtcclxuICAgIFwiQWNjb3VudEJhc2VJbmZvXCI6IHtcclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiVmVyaWZ5U2Vzc2lvblwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJOaWNrTmFtZVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJBdmF0YXJcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiQ3JlYXRlVGltZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJEYW9oZW5nXCI6IG51bWJlcixcclxuICAgICAgICBcIkxpbmdsaVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHZW5ndVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJUaXBvXCI6IG51bWJlcixcclxuICAgICAgICBcIlNoZW5mYVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXdXhpbmdcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRnV5dWFuXCI6IG51bWJlcixcclxuICAgICAgICBcIlppemhpXCI6IG51bWJlcixcclxuICAgICAgICBcIlpoZW5neWlcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiWGllZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXZWl3YW5nXCI6IG51bWJlcixcclxuICAgICAgICBcIkdyb3VwR29uZ3hpYW5cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiWGlhbnl1XCI6IG51bWJlcixcclxuICAgIH0sXHJcbiAgICBcIlhpdXdlaUluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJTdGFnZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJDdXJyZW50VmFsdWVcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRWZmaWNpZW5jeVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTZXR0bGVtZW50VGltZVwiOiBudW1iZXJcclxuICAgIH0sXHJcbiAgICBcIlBhZ29kYUluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJOb3JtYWxNdWx0aXBsZUluZm9zXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJTdGFydFN0YW1wXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiRW5kU3RhbXBcIjogbnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiTm9ybWFsU3RhcnRUaW1lXCI6IG51bWJlcixcclxuICAgICAgICBcIk5vcm1hbFRpbWVzXCI6IG51bWJlcixcclxuICAgICAgICBcIk5vcm1hbExlc3RUaW1lXCI6IG51bWJlcixcclxuICAgICAgICBcIkxlYWRlck11bHRpcGxlSW5mb3NcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIlN0YXJ0U3RhbXBcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJFbmRTdGFtcFwiOiBudW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJMZWFkZXJTdGFydFRpbWVcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiTGVhZGVyVGltZXNcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiTGVhZGVyTGVzdFRpbWVcIjogbnVtYmVyXHJcbiAgICB9LFxyXG4gICAgXCJEb25nZnVJbmZvXCI6IHsgLy/otKbmiLfmnIDmlrDmtJ7lupzkv6Hmga9cclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiVG90YWxTZXJ2YW50TnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIlN0b25lTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTdG9uZU51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTdG9uZVNlcnZhbnROdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRm9vZExldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRm9vZE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJGb29kU2VydmFudE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXb29kTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXb29kTnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIldvb2RTZXJ2YW50TnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIklyb25MZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIklyb25OdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiSXJvblNlcnZhbnROdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU2V0dGxlbWVudFRpbWVcIjogbnVtYmVyXHJcbiAgICB9LFxyXG4gICAgXCJQb29sSW5mb1wiOiB7XHJcbiAgICAgICAgXCJBY2NvdW50S2V5XCI6IHN0cmluZyxcclxuICAgICAgICBcIlBvb2xMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIlJlaWtpTnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIkdvbGRMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIldvb2RMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIldhdGVyTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJGaXJlTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTb2lsTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTZXR0bGVtZW50VGltZVwiOiBudW1iZXIsXHJcbiAgICB9LFxyXG4gICAgXCJHcm91cEluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJHcm91cElkXCI6IG51bWJlcixcclxuICAgICAgICBcIkdyb3VwU2tpbGxOdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU3R1ZHlTa2lsbHNcIjogW1xyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgXCJTa2lsbElkXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgXCJTa2lsbFR5cGVcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICBcIkxldmVsXCI6IG51bWJlclxyXG4gICAgICAgICAgIH1cclxuICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBcIlN0b3JhZ2VJbmZvXCI6IHtcclxuICAgICAgICBcIlN3b3JkSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiSGFpcnBpbklkXCI6IG51bWJlcixcclxuICAgICAgICBcIkNsb3RoZXNJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTaG9lc0lkXCI6IG51bWJlcixcclxuICAgICAgICBcIlJpbmdJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJKYWRlSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiQnJhY2VsZXRJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJDb21wYXNzSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiT3Blbk51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHb29kSW5mb3NcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIlR5cGVcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcIk51bVwiOiBudW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgXCJEYW1vbkluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJDaGFsbGVuZ2VMZXZlbFwiOiBudW1iZXJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkb2JlQWRkV29ya2VyUmVxRGF0YSB7XHJcbiAgICBXb3JrVHlwZTpudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod29ya1R5cGU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5Xb3JrVHlwZSA9IHdvcmtUeXBlO1xyXG4gICAgfVxyXG59XHJcbiIsImxldCB1cmxzID0gW1xyXG4gICAgeyB1cmw6ICdyZXMvQWRvYmUvQWRvYmUudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9BZG9iZS9BZG9iZV9hdGxhczAuanBnJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL0Fkb2JlL0Fkb2JlX2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvYXRsYXMvY29tcC5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQ2hlc3NCb2FyZC9DaGVzc0JvYXJkLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQ2hlc3NCb2FyZC9DaGVzc0JvYXJkX2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQ2hvb3NlU2VydmljZS9DaG9vc2VTZXJ2aWNlLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvSWNvbnMvSWNvbnMudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9JY29ucy9JY29uc19hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL01haW5NZW51L01haW5NZW51LnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvTWFpbk1lbnUvTWFpbk1lbnVfYXRsYXMyLnBuZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QbGF5ZXIvUGxheWVyLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpYy50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL1B1YmxpYy9QdWJsaWNfYXRsYXMxLmpwZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QdWJsaWMvUHVibGljX2F0bGFzMV8xLmpwZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QdWJsaWMvUHVibGljX2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczJfMS5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczJfMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczJfMy5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUm9hZFRvRGlldHkvUm9hZFRvRGlldHkudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9TZWN0L1NlY3QudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbl1cclxuZXhwb3J0IHt1cmxzfTsiLCJcclxuZXhwb3J0IGludGVyZmFjZSBWaWV3Q29uZmlne1xyXG4gICAgS2V5OiBzdHJpbmcsXHJcbiAgICBQa2dBZHJzOiBzdHJpbmcsXHJcbiAgICBQa2c6IHN0cmluZyxcclxuICAgIENvbTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBWaWV3S2l0ID0ge1xyXG4gICAgLy/liqDovb3oj4roirFcclxuICAgIExvYWRpbmdNYWluOiB7XHJcbiAgICAgICAgS2V5OiBcIkxvYWRpbmdNYWluXCIsXHJcbiAgICAgICAgUGtnOiBcIkxvYWRpbmdVSVwiLFxyXG4gICAgICAgIENvbTpcIkxvYWRpbmdNYWluXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/pgInmi6nmnI3liqHlmahcclxuICAgIENob29zZVNlcnZpY2U6e1xyXG4gICAgICAgIEtleTogXCJDaG9vc2VTZXJ2aWNlXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJDaG9vc2VTZXJ2aWNlL0Nob29zZVNlcnZpY2VcIixcclxuICAgICAgICBQa2c6IFwiQ2hvb3NlU2VydmljZVwiLFxyXG4gICAgICAgIENvbTpcIkNob29zZVNlcnZpY2VcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+ivu+adoei/m+W6plxyXG4gICAgTG9hZGluZ1Byb2dyZXNzOiB7XHJcbiAgICAgICAgS2V5OiBcIkxvYWRpbmdQcm9ncmVzc1wiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwicmVzL0xvYWRpbmdVSS9Mb2FkaW5nVUlcIixcclxuICAgICAgICBQa2c6IFwiTG9hZGluZ1VJXCIsXHJcbiAgICAgICAgQ29tOlwiTG9hZGluZ1Byb2dyZXNzXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/kuLvnlYzpnaJcclxuICAgIE1haW5NZW51OiB7XHJcbiAgICAgICAgS2V5OiBcIk1haW5NZW51XCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJyZXMvTWFpbk1lbnUvTWFpbk1lbnVcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJNYWluTWVudVwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5L+u54K85pON5L2cXHJcbiAgICBDdWx0aXZhdGlvbkluZm86IHtcclxuICAgICAgICBLZXk6IFwiQ3VsdGl2YXRpb25JbmZvXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJyZXMvTWFpbk1lbnUvTWFpbk1lbnVcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJDdWx0aXZhdGlvbkluZm9cIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mjmOWtl1xyXG4gICAgVGlwc0xhYmVsOiB7XHJcbiAgICAgICAgS2V5OiBcIlRpcHNMYWJlbFwiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwiUHVibGljL1B1YmxpY1wiLFxyXG4gICAgICAgIFBrZzogXCJQdWJsaWNcIixcclxuICAgICAgICBDb206XCJUaXBzTGFiZWxcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mjmOWtl1xyXG4gICAgUmVzUHJvZHVjdGlvblRpcHM6IHtcclxuICAgICAgICBLZXk6IFwiUmVzUHJvZHVjdGlvblRpcHNcIixcclxuICAgICAgICBQa2dBZHJzOiBcIkFkb2JlL0Fkb2JlXCIsXHJcbiAgICAgICAgUGtnOiBcIkFkb2JlXCIsXHJcbiAgICAgICAgQ29tOlwiUmVzUHJvZHVjdGlvblRpcHNcIlxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy/mtJ7lupxcclxuICAgIEFkb2JlTWFpbjoge1xyXG4gICAgICAgIEtleTogXCJBZG9iZU1haW5cIixcclxuICAgICAgICBQa2dBZHJzOiBcIkFkb2JlL0Fkb2JlXCIsXHJcbiAgICAgICAgUGtnOiBcIkFkb2JlXCIsXHJcbiAgICAgICAgQ29tOlwiQWRvYmVNYWluXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/lhaznlKjnoa7orqTnqpflj6NcclxuICAgIFB1YmxpY0NvbmZpcm1hdGlvbjoge1xyXG4gICAgICAgIEtleTogXCJQdWJsaWNDb25maXJtYXRpb25cIixcclxuICAgICAgICBQa2dBZHJzOiBcIlB1YmxpYy9QdWJsaWNcIixcclxuICAgICAgICBQa2c6IFwiUHVibGljXCIsXHJcbiAgICAgICAgQ29tOlwiUHVibGljQ29uZmlybWF0aW9uXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/mtJ7lupzljYfnuqdcclxuICAgIEFkb2JlVXBncmFkZToge1xyXG4gICAgICAgIEtleTogXCJBZG9iZVVwZ3JhZGVcIixcclxuICAgICAgICBQa2dBZHJzOiBcIkFkb2JlL0Fkb2JlXCIsXHJcbiAgICAgICAgUGtnOiBcIkFkb2JlXCIsXHJcbiAgICAgICAgQ29tOlwiQWRvYmVVcGdyYWRlXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v5Yqg5YWl6Zeo5rS+XHJcbiAgICBKb2luU2VjdDoge1xyXG4gICAgICAgIEtleTogXCJKb2luU2VjdFwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiSm9pblNlY3RcIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/liqDlhaXpl6jmtL5cclxuICAgIFNlY3RNYWluOiB7XHJcbiAgICAgICAgS2V5OiBcIlNlY3RNYWluXCIsXHJcbiAgICAgICAgUGtnOiBcIlNlY3RcIixcclxuICAgICAgICBDb206XCJTZWN0TWFpblwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+mXqOa0vuS/rueCvOWhlFxyXG4gICAgVHJhaW5Ub3dlcjoge1xyXG4gICAgICAgIEtleTogXCJUcmFpblRvd2VyXCIsXHJcbiAgICAgICAgUGtnOiBcIlNlY3RcIixcclxuICAgICAgICBDb206XCJUcmFpblRvd2VyXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v6Zeo5rS+5Lu75YqhXHJcbiAgICBTZWN0VGFzazoge1xyXG4gICAgICAgIEtleTogXCJTZWN0VGFza1wiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiU2VjdFRhc2tcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+WtpuS5oOWKn+azlVxyXG4gICAgTGVhcm5Lb25nZmE6IHtcclxuICAgICAgICBLZXk6IFwiTGVhcm5Lb25nZmFcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIkxlYXJuS29uZ2ZhXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v5a2m5Lmg5Yqf5rOVXHJcbiAgICBVcGdyYWRlS29uZ2ZhOiB7XHJcbiAgICAgICAgS2V5OiBcIlVwZ3JhZGVLb25nZmFcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIlVwZ3JhZGVLb25nZmFcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+inkuiJslxyXG4gICAgUGxheWVyTWFpbjoge1xyXG4gICAgICAgIEtleTogXCJQbGF5ZXJNYWluXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIlBsYXllck1haW5cIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/op5LoibLlsZ7mgKdcclxuICAgIFBsYXllckF0dHJpYnV0aW9uOiB7XHJcbiAgICAgICAgS2V5OiBcIlBsYXllckF0dHJpYnV0aW9uXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIlBsYXllckF0dHJpYnV0aW9uXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/lop7liqDlgqjnianooovnqbrpl7RcclxuICAgIEFkZEJhZ051bToge1xyXG4gICAgICAgIEtleTogXCJBZGRCYWdOdW1cIixcclxuICAgICAgICBQa2c6IFwiUGxheWVyXCIsXHJcbiAgICAgICAgQ29tOlwiQWRkQmFnTnVtXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/kv67ngrzluK7liqlcclxuICAgIEN1bHRpdmF0aW9uRWZmaWNpZW5jeToge1xyXG4gICAgICAgIEtleTogXCJDdWx0aXZhdGlvbkVmZmljaWVuY3lcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJDdWx0aXZhdGlvbkVmZmljaWVuY3lcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL0dN5Yqg54mp5ZOBXHJcbiAgICBHbUFkZEJhZ0l0ZW06IHtcclxuICAgICAgICBLZXk6IFwiR21BZGRCYWdJdGVtXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIkdtQWRkQmFnSXRlbVwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+S7memAlOS4u+eVjOmdolxyXG4gICAgUm9hZFRvRGlldHlNYWluOiB7XHJcbiAgICAgICAgS2V5OiBcIlJvYWRUb0RpZXR5TWFpblwiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIlJvYWRUb0RpZXR5TWFpblwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+aImOaWl+i/h+eoi1xyXG4gICAgQmF0dGxlSW5mbzoge1xyXG4gICAgICAgIEtleTogXCJCYXR0bGVJbmZvXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiQmF0dGxlSW5mb1wiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+aJq+iNoeS7memAlFxyXG4gICAgU3dlZXBDaGFwdGVyczoge1xyXG4gICAgICAgIEtleTogXCJTd2VlcENoYXB0ZXJzXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiU3dlZXBDaGFwdGVyc1wiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6ZWH5aaW5aGUXHJcbiAgICBNb25zdGVyVG93ZXI6IHtcclxuICAgICAgICBLZXk6IFwiTW9uc3RlclRvd2VyXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiTW9uc3RlclRvd2VyXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/plYflppbloZTpppbmnYDmppxcclxuICAgIEZpcnN0Qmxvb2RSYW5rOiB7XHJcbiAgICAgICAgS2V5OiBcIkZpcnN0Qmxvb2RSYW5rXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiRmlyc3RCbG9vZFJhbmtcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+S7meWPi+WciFxyXG4gICAgRnJpZW5kQ2lyY2xlOiB7XHJcbiAgICAgICAgS2V5OiBcIkZyaWVuZENpcmNsZVwiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIkZyaWVuZENpcmNsZVwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5LuZ6YCU5qOL55uYXHJcbiAgICBDaGVzc01hcDoge1xyXG4gICAgICAgIEtleTogXCJDaGVzc01hcFwiLFxyXG4gICAgICAgIFBrZzogXCJDaGVzc0JvYXJkXCIsXHJcbiAgICAgICAgQ29tOlwiQ2hlc3NNYXBcIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/ovaznlJ9cclxuICAgIFJlYmlydGg6IHtcclxuICAgICAgICBLZXk6IFwiUmViaXJ0aFwiLFxyXG4gICAgICAgIFBrZzogXCJNYWluTWVudVwiLFxyXG4gICAgICAgIENvbTpcIlJlYmlydGhcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mXqOa0vuiXj+e7j+mYgeWFpeWPo1xyXG4gICAgSmluZ0xpYkVudHJhbmNlOiB7XHJcbiAgICAgICAgS2V5OiBcIkppbmdMaWJFbnRyYW5jZVwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiSmluZ0xpYkVudHJhbmNlXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/pl6jmtL7ol4/nu4/pmIFcclxuICAgIEppbmdMaWI6IHtcclxuICAgICAgICBLZXk6IFwiSmluZ0xpYlwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiSmluZ0xpYlwiXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJQ29uZmlne1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9naW5QYWNrYWdlTG9hZGVkID0gZmFsc2U7ICAgLy/mmK/lkKblt7LliqDovb3nmbvlvZVVSeWMhVxyXG4gICAgXHJcbiAgICAvL+eZu+W9leWKoOi9veeahFVJ5YyFXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgVUlQa2dzID0gW1xyXG4gICAgICAgIFwiSWNvbnNcIixcclxuICAgICAgICBcIlB1YmxpY1wiLFxyXG4gICAgICAgIFwiTWFpbk1lbnVcIixcclxuICAgIF07XHJcblxyXG4gICAgLy/lvq7kv6HlsI/muLjmiI/lrZDljIVcclxuICAgIHN0YXRpYyByZWFkb25seSBTdWJQa2dzID0gW1xyXG4gICAgICAgIFwic3ViTGlic1wiLFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBVSea4suafk+WIhuWxglxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNvcnRpbmdPcmRlciA9IHtcclxuICAgICAgICAvL+S4u+eVjOmdouaMiemSrlxyXG4gICAgICAgIE1haW5VSTogMTAwLFxyXG4gICAgICAgIC8vIOS/oeaBr+WQjOatpVxyXG4gICAgICAgIE1zZ1N5bmM6IDE1MCxcclxuICAgICAgICAvLyDlnLrmma/liqDovb1cclxuICAgICAgICBTY2VuZUxvYWRpbmc6IDIwMCxcclxuICAgICAgICAvLyDmlrDmiYvlvJXlr7xcclxuICAgICAgICBOb3ZpY2VHdWlkZTogMjUwLFxyXG4gICAgICAgIC8vIOaWsOWKn+iDveW8gOWQr1xyXG4gICAgICAgIE5ld0Z1bmN0aW9uT3BlbjogMjYwLFxyXG4gICAgICAgIC8vIOS6uueJqeWvueeZvVxyXG4gICAgICAgIERpYWxvZzogMzAwLFxyXG4gICAgICAgIC8vIOW8ueWHuueql+WPo1xyXG4gICAgICAgIFBvcHVwOiAzNTAsXHJcbiAgICAgICAgLy8g5YWo5bGP5bGV56S6XHJcbiAgICAgICAgRnVsbFNjcmVlblNob3c6IDQ1MCxcclxuICAgICAgICAvLyDnvZHnu5zkv6Hlj7dcclxuICAgICAgICBOZXRTaWduYWw6IDUwMCxcclxuICAgICAgICAvLyDnvZHnu5zlvLnmoYZcclxuICAgICAgICBOZXRFcnJvcjogNTUwLFxyXG4gICAgICAgIC8vIOezu+e7n+W5v+aSrVxyXG4gICAgICAgIFN5c3RlbU1zZzogNjAwLFxyXG4gICAgICAgIC8vIOa2iOaBr+aPkOekulxyXG4gICAgICAgIE1zZ1RpcHM6IDY1MCxcclxuICAgICAgICAvLyDngrnlh7vnibnmlYhcclxuICAgICAgICBDbGlja0VmZmVjdDogNzAwLFxyXG4gICAgICAgIC8vIOacjeWKoeWZqOaXtumXtFxyXG4gICAgICAgIFNlcnZlclRpbWU6IDEwMDAsXHJcbiAgICAgICAgLy8gZ23mjIfku6RcclxuICAgICAgICBHbU9yZGVyOiAxMDAxLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL1NwaW5l6Lev5b6EXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU3BpbmVQYXRoID0ge1xyXG4gICAgICAgIFlhb3lhbzp7XHJcbiAgICAgICAgICAgIExlZnQ6XCJTcGluZS90dXppXCIsXHJcbiAgICAgICAgICAgIFJpZ2h0OlwiUHJlZmFiL3R1emlfMlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgRGljZTpcIlNwaW5lL3NwaW5lX3NhaXppXCIsXHJcbiAgICAgICAgXHJcbiAgICAgICAgTmFuemh1OntcclxuICAgICAgICAgICAgTGVmdDpcIlNwaW5lL25hbnpodVwiLFxyXG4gICAgICAgICAgICBSaWdodDpcIlByZWZhYi9uYW56aHVfMlwiLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFl1c2hlbmd5aTp7XHJcbiAgICAgICAgICAgIExlZnQ6XCJTcGluZS95dXNoZW5neWlcIixcclxuICAgICAgICAgICAgUmlnaHQ6XCJQcmVmYWIveXVzaGVuZ3lpXzJcIixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+WjsOmfs1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNvdW5kUGF0aCA9IHtcclxuICAgICAgICBCdXR0b25DbGljazpcInVpOi8vUHVibGljL+eCueWHu+aMiemSrlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+W9ouixoeWbvuagh+mFjee9rlxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFBvcnRyYWl0UGF0aCA9IHtcclxuICAgICAgICBZYW95YW86J3VpOi8vUHVibGljL+WkreWkrV/lhajouqsnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+Wwj+Wbvuagh+mFjee9rlxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNtYWxsSWNvblBhdGggPSB7XHJcbiAgICAgICAgWWFveWFvOid1aTovL1B1YmxpYy/lpK3lpK3lsI/lpLTlg48nLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU2hhcmVJbWFnZVBhdGggPSB7XHJcbiAgICAgICAgSW52aXRlRnJpZW5kOidodHRwczovL21tb2NnYW1lLnFwaWMuY24vd2VjaGF0Z2FtZS9IQ2xvS1hwWWg0QUlhcjIxaWF2QkhVczFCZ1MzZjR1R3NuWVg1aWJLZHVPaWFyQWRnVFY5R3dKa1N0Uk9QamJyYWtMLzAnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL1NwaW5l5Yqo55S75YiH5o2iXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU3BpbmVTdGF0ZSA9IHtcclxuICAgICAgICBZYW95YW86e1xyXG4gICAgICAgICAgICBSdW46XCJydW5cIixcclxuICAgICAgICAgICAgU3RhbmQ6XCJzdGFuZFwiLFxyXG4gICAgICAgICAgICBJZGxlMTpcImlkbGUxXCIsXHJcbiAgICAgICAgICAgIElkbGUyOlwiaWRsZTJcIixcclxuICAgICAgICAgICAgVG91Y2gxOlwidG91Y2gxXCIsXHJcbiAgICAgICAgICAgIFRvdWNoMjpcInRvdWNoMlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8v5by65Yi25byV5a+8XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgR3VpZGVyTmFtZSA9IHtcclxuICAgICAgICBSb2xlTWVudUd1aWRlOlwiUm9sZU1lbnVHdWlkZVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgRm9udENvbG9yID0ge1xyXG4gICAgICAgIEZpZ2h0UmVjX01lOiAnI0ZGRkYwMCcsXHJcbiAgICB9O1xyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9EYXRhQmFzZSc7XHJcbiIsImltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgR0V2ZW50IGZyb20gXCIuLi9Db21tb24vR0V2ZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cFJlcWJvZHlCYXNle1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIE1vZHVsZUNvZGU6IG51bWJlcjtcclxuICAgIFJlcUNvZGU6IG51bWJlcjtcclxuICAgIFNlc3Npb246IHN0cmluZztcclxuICAgIEFjY291bnRLZXk6IHN0cmluZztcclxuICAgIFJlcURhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RDb2RlOm51bWJlciwgcmVxQ29kZTpudW1iZXIsIHNlc3Npb24/OnN0cmluZywgYWNjTmFtZT86c3RyaW5nLCByZXFkYXRhPyl7XHJcbiAgICAgICAgaWYodHlwZW9mKHJlcWRhdGEpID09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAvL+WmguW3sui9rOaNouWImei9rOWbnkpTT05cclxuICAgICAgICAgICAgcmVxZGF0YSA9IEpTT04ucGFyc2UocmVxZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLk1vZHVsZUNvZGUgPSBtb2RDb2RlO1xyXG4gICAgICAgIHRoaXMuUmVxQ29kZSA9IHJlcUNvZGU7XHJcbiAgICAgICAgdGhpcy5TZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLkFjY291bnRLZXkgPSBhY2NOYW1lO1xyXG4gICAgICAgIHRoaXMuUmVxRGF0YSA9IHJlcWRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRhU3RydWN0IGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX05ldE1ncjpNYW5hZ2VyLkh0dHBNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3JlcWtleXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cclxuICAgIHByaXZhdGUgX2h0dHBNZ3I6TWFuYWdlci5IdHRwTWFuYWdlcjtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgcmVxQm9keTpIdHRwUmVxYm9keUJhc2U7XHJcblxyXG4gICAgc3RhdGljIGlzUmVzcG9uc2VkOmJvb2xlYW47XHJcbiAgICBzdGF0aWMgRGljZU51bTpudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIFNlbmRSZXEocmVxRGF0YT8pe1xyXG4gICAgICAgIHRoaXMucmVxQm9keS5SZXFEYXRhID0gcmVxRGF0YTtcclxuICAgICAgICB0aGlzLl9OZXRNZ3IgPSBuZXcgTWFuYWdlci5IdHRwTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuX05ldE1nci5Db25uZWN0KCcnLCB0aGlzLnJlcUJvZHksIHRoaXMub25SZXNwb25zZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0IFJlcUJvZHkoYm9keSl7XHJcbiAgICAgICAgaWYoIXRoaXMucmVxQm9keSlcclxuICAgICAgICAgICAgdGhpcy5yZXFCb2R5ID0gYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0IERhdGEoZGF0YSl7fVxyXG5cclxuICAgIHN0YXRpYyBvbkNvbm5lY3RFbmQoZGF0YTpDb25maWcuUmVzcERhdGFTdHJ1Y3Qpe31cclxuXHJcbiAgICBzdGF0aWMgb25SZXNwb25zZShkYXRhOkNvbmZpZy5SZXNwRGF0YVN0cnVjdCl7XHJcbiAgICAgICAgaWYoZGF0YSAmJiBkYXRhLlJlc3BEYXRhICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLkRhdGEgPSBkYXRhLlJlc3BEYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mihOeVmeaOpeWPo++8jOmBv+WFjeWQjuerr+ayoeaciei/lOWbnuaVsOaNrlxyXG4gICAgICAgIHRoaXMub25Db25uZWN0RW5kKGRhdGEpO1xyXG4gICAgICAgIHRoaXMucmVxQm9keS5SZXFEYXRhID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IE5ldE1ncigpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9OZXRNZ3Ipe1xyXG4gICAgICAgICAgICB0aGlzLl9OZXRNZ3IgPSBuZXcgTWFuYWdlci5IdHRwTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX05ldE1ncjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ29ubmVjdChyZXFrZXk6c3RyaW5nLCByZXFib2R5Okh0dHBSZXFib2R5QmFzZSwgY2FsbGJhY2s/OkZ1bmN0aW9uLCBpc1Nob3dMb2FkaW5nPywgSXNHbT86Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5OZXRNZ3IuQ29ubmVjdChyZXFrZXksIHJlcWJvZHksIHRoaXMuT25IdHRwUmVxdWVzdENvbXBsZXRlLmJpbmQodGhpcyksIGlzU2hvd0xvYWRpbmcsIElzR20pO1xyXG4gICAgICAgIHRoaXMuX3JlcWtleXMucHVzaChyZXFrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBPbkh0dHBSZXF1ZXN0Q29tcGxldGUoZGF0YTpDb25maWcuUmVzcERhdGFTdHJ1Y3QsIHJlcWtleTpzdHJpbmcsIHJlcURhdGEpe1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERldlJlcUJvZHkgZXh0ZW5kcyBIdHRwUmVxYm9keUJhc2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQmFzZUJvZHlJbml0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQm9keUluaXRlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL+ivt+axguS9k1xyXG4gICAgc3RhdGljIENvbmZpZ0JvZHk6SHR0cFJlcWJvZHlCYXNlOyAgIC8v6YWN572uXHJcbiAgICBzdGF0aWMgTG9naW5Cb2R5Okh0dHBSZXFib2R5QmFzZTsgICAgLy/nmbvlvZVcclxuICAgIHN0YXRpYyBVcGdyYWRlQm9keTpIdHRwUmVxYm9keUJhc2U7ICAgIC8v5Y2H6Zi2XHJcbiAgICBzdGF0aWMgQWRvYmVVaUluZm9Cb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOWxleekulxyXG4gICAgc3RhdGljIEFkb2JlSGlyZVdvcmtlckJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc5oub5Yuf5LuZ5LuGXHJcbiAgICBzdGF0aWMgQWRvYmVBZGRXb3JrZXJCb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOa3u+WKoOW3peS9nOS7meS7hlxyXG4gICAgc3RhdGljIEFkb2JlUmVkdWNlV29ya2VyQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzlh4/lsJHlt6XkvZzku5nku4ZcclxuICAgIHN0YXRpYyBBZG9iZVVwU3RvbmVCb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOeBteefs+WNh+e6p1xyXG4gICAgc3RhdGljIEFkb2JlVXBGb29kQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzpo5/nianljYfnuqdcclxuICAgIHN0YXRpYyBBZG9iZVVwV29vZEJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc5pyo5p2Q5Y2H57qnXHJcbiAgICBzdGF0aWMgQWRvYmVVcElyb25Cb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOmZqOmTgeWNh+e6p1xyXG5cclxuICAgIHN0YXRpYyBnZXQgaXNJbml0ZWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNCb2R5SW5pdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vZENvZGU6bnVtYmVyLCByZXFDb2RlOm51bWJlciwgcmVxRGF0YT8pe1xyXG4gICAgICAgIGlmKCFMb2dpbkRhdGEuU2Vzc2lvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQbHMgbG9naW4gZmlyc3QnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN1cGVyKG1vZENvZGUsIHJlcUNvZGUsIExvZ2luRGF0YS5TZXNzaW9uLCBMb2dpbkRhdGEuQWNjb3VudEtleSwgcmVxRGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgRGFtb25JbmZvVHlwZSA9IHtcclxuICAgIFwiQ2hhbGxlbmdlTGV2ZWxcIjogbnVtYmVyLFxyXG59XHJcblxyXG4vL+eOqeWutuaVsOaNrlxyXG5leHBvcnQgY2xhc3MgUGxheWVyRGF0YSB7XHJcbiAgICBzdGF0aWMgTmlrZU5hbWU6c3RyaW5nO1xyXG4gICAgc3RhdGljIEF2YXRhcjpzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIHNldCBEYXRhKGRhdGEpe1xyXG4gICAgICAgIGlmKG51bGwgIT0gZGF0YS5OaWNrTmFtZSl7XHJcbiAgICAgICAgICAgIHRoaXMuTmlrZU5hbWUgPSBkYXRhLk5pY2tOYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobnVsbCAhPSBkYXRhLkF2YXRhcil7XHJcbiAgICAgICAgICAgIHRoaXMuQXZhdGFyID0gZGF0YS5BdmF0YXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHRXZlbnQuRGlzcGF0Y2goQ29tbW9uLkRhdGFQbGF5ZXJFaWQuUmVmcmVzaGVkKTtcclxuICAgIH1cclxufVxyXG5cclxuLy/liIbkuqvor63lj6VcclxuaW50ZXJmYWNlIFNoYXJlRGV0YWlsIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIFNoYXJlVHlwZTpudW1iZXI7ICAgICAgICAgICAgLy/liIbkuqvnsbvlnosx5piO5L+h54mHXHJcbiAgICBTaGFyZVdvcmQ6c3RyaW5nICAvL+WIhuS6q+ivreWPpVxyXG59XHJcblxyXG5leHBvcnQgbGV0IFNoYXJlV29yZCA9IHtcclxuICAgIFwiQ2FyZFdvcmRzXCI6IG5ldyBBcnJheTxTaGFyZURldGFpbD4oKSwgICAgICAgIC8v5piO5L+h54mH5YiG5Lqr6K+t5Y+lXHJcbiAgICBcIkhhbXN0ZXJXb3Jkc1wiOiBuZXcgQXJyYXk8U2hhcmVEZXRhaWw+KCksICAgICAvL+aJk+WcsOm8oOWIhuS6q+ivreWPpVxyXG4gICAgXCJDb2luV29yZHNcIjogbmV3IEFycmF5PFNoYXJlRGV0YWlsPigpLCAgICAgICAgLy/mjqXph5HluIHliIbkuqvor63lj6VcclxuICAgIFwiT3RoZXJXb3Jkc1wiOiBuZXcgQXJyYXk8U2hhcmVEZXRhaWw+KCkgICAgICAgIC8v5YW25LuW5YiG5Lqr6K+t5Y+lXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRTaGFyZVdvcmQoc2hhcmVUeXBlPyl7XHJcbiAgICBsZXQgcmFuZCA9IDA7XHJcbiAgICBzd2l0Y2ggKHNoYXJlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgQ29uZmlnLlNoYXJlV29yZEVudW0uQ2FyZFdvcmRzOlxyXG4gICAgICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogU2hhcmVXb3JkLkNhcmRXb3Jkcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gU2hhcmVXb3JkLkNhcmRXb3Jkc1tyYW5kXS5TaGFyZVdvcmQ7XHJcbiAgICBcclxuICAgICAgICBjYXNlIENvbmZpZy5TaGFyZVdvcmRFbnVtLkhhbXN0ZXJXb3JkczpcclxuICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNoYXJlV29yZC5IYW1zdGVyV29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFNoYXJlV29yZC5IYW1zdGVyV29yZHNbcmFuZF0uU2hhcmVXb3JkO1xyXG5cclxuICAgICAgICBjYXNlIENvbmZpZy5TaGFyZVdvcmRFbnVtLkNvaW5Xb3JkczpcclxuICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNoYXJlV29yZC5Db2luV29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFNoYXJlV29yZC5Db2luV29yZHNbcmFuZF0uU2hhcmVXb3JkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogU2hhcmVXb3JkLk90aGVyV29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFNoYXJlV29yZC5PdGhlcldvcmRzW3JhbmRdLlNoYXJlV29yZDtcclxuICAgIH1cclxufVxyXG5cclxuLy/phY3nva7mlbDmja5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0RhdGEgZXh0ZW5kcyBEYXRhU3RydWN0e1xyXG4gICAgc3RhdGljIHNldCBEYXRhKHJlc3BfZGF0YTpDb25maWcuQ29uZmlnRGF0YVBhcmFtW10pe1xyXG4gICAgICAgIHNldENvbmZpZ0RhdGEocmVzcF9kYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29uZmlnRGF0YShyZXNwX2RhdGE6Q29uZmlnLkNvbmZpZ0RhdGFQYXJhbVtdKXtcclxuICAgIGNvbnNvbGUubG9nKCfphY3nva7mlbDmja7vvJonLCByZXNwX2RhdGEpO1xyXG4gICAgaWYoIXJlc3BfZGF0YSkgcmV0dXJuO1xyXG5cclxuICAgIENvbmZpZy5EYXRhQ29uZmlnLmluc3RhbmNlLnNhdmVDb25maWdWZXJzaW9uKHJlc3BfZGF0YSk7XHJcbiAgICBmb3IobGV0IGkgaW4gcmVzcF9kYXRhKXtcclxuICAgICAgICBpZihyZXNwX2RhdGFbaV0pe1xyXG4gICAgICAgICAgICBDb25maWcuRGF0YUNvbmZpZy5pbnN0YW5jZS5zdG9yZUNvbmZpZyhyZXNwX2RhdGFbaV0uVGFibGVJZCwgcmVzcF9kYXRhW2ldLkRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBDb25maWcuRGF0YUNvbmZpZy5Jc0NvbmZpZ0xvYWRlZCA9IHRydWU7XHJcbiAgICBHRXZlbnQuRGlzcGF0Y2goQ29tbW9uLlNjZW5lTG9naW5FaWQuQ29uZmlnTG9hZGVkKTtcclxufVxyXG5cclxuLy/nmbvlvZXmlbDmja5cclxuZXhwb3J0IGNsYXNzIExvZ2luRGF0YSBleHRlbmRzIERhdGFTdHJ1Y3R7XHJcbiAgICBzdGF0aWMgU2Vzc2lvbjpzdHJpbmc7XHJcbiAgICBzdGF0aWMgQWNjb3VudEtleTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNMb2dpbmVkID0gZmFsc2U7ICAvL+aYr+WQpuW3sueZu+W9lVxyXG5cclxuICAgIHN0YXRpYyBnZXQgSXNMb2dpbmVkKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTG9naW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0IERhdGEoZGF0YTpDb25maWcuTG9naW5SZXNwRGF0YVN0cnVjdCl7XHJcbiAgICAgICAgaWYoZGF0YS5BY2NvdW50QmFzZUluZm8pe1xyXG4gICAgICAgICAgICB0aGlzLlNlc3Npb24gPSBkYXRhLkFjY291bnRCYXNlSW5mby5WZXJpZnlTZXNzaW9uO1xyXG4gICAgICAgICAgICB0aGlzLkFjY291bnRLZXkgPSBkYXRhLkFjY291bnRCYXNlSW5mby5BY2NvdW50S2V5O1xyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhLkRhdGEgPSBkYXRhLkFjY291bnRCYXNlSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGRhdGEuWGl1d2VpSW5mbyl7XHJcbiAgICAgICAgICAgIFBsYXllckRhdGEuRGF0YSA9IGRhdGEuWGl1d2VpSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLl9pc0xvZ2luZWQpe1xyXG4gICAgICAgICAgICB0aGlzLl9pc0xvZ2luZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUxvZ2luRWlkLkxvZ2luU3VjY2Vzcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5Y2H57qn5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBVcGdyYWRlRGF0YSBleHRlbmRzIERhdGFTdHJ1Y3R7XHJcbiAgICBzdGF0aWMgc2V0IERhdGEocmVzcERhdGEpe1xyXG4gICAgICAgIGlmKHJlc3BEYXRhLlhpdXdlaUluZm8pe1xyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhLkRhdGEgPSByZXNwRGF0YS5YaXV3ZWlJbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5DaGFyYWN0ZXJDdWx0aXZhdGlvbkVpZC5VcGdyYWRlLCByZXNwRGF0YS5VcE9rKTtcclxuICAgIH1cclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5cclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTc1MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTEzMzQ7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cImZpeGVkd2lkdGhcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cInZlcnRpY2FsXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cInRvcFwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJsZWZ0XCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG5cclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJcclxuaW1wb3J0IHsgRGF0YUNvbmZpZyB9IGZyb20gXCIuL0NvbmZpZy9EYXRhQ29uZmlnXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tICcuL0RhdGEvRGF0YSc7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIExvZ2ljIGZyb20gXCIuL0xvZ2ljL0xvZ2ljXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lICBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlciB7XHJcblx0cHJvdGVjdGVkIHN0YXRpYyBfaW5zdDpHYW1lU2NlbmU7XHJcblx0cHVibGljIGxvYWRpbmdVaVBhY2thZ2U6c3RyaW5nO1xyXG5cclxuXHRzdGF0aWMgZ2V0IGluc3QoKXtcclxuXHRcdHJldHVybiB0aGlzLl9pbnN0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIG9uQXdha2UoKXtcclxuXHRcdEdhbWVTY2VuZS5faW5zdCA9IHRoaXM7XHJcblx0XHR0aGlzLm93bmVyLmFkZENvbXBvbmVudChMb2dpYy5HcmFiTG9naWMpXHJcblxyXG5cdFx0Ly8gdGhpcy5pbml0KCk7XHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuQ29uZmlnTG9hZGVkLCB0aGlzLm9uQ29uZmlnTG9hZGVkKTtcclxuXHRcdC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5TZXJ2aWNlQ2hvb3NlZCwgdGhpcy5vblZlcnNpb25DaGVja2VkKTtcclxuXHRcdC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MsIHRoaXMub25Mb2dpbmVkKTtcclxuXHRcdC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5TaW1Qcm9ncmVzc0VuZCwgdGhpcy5vcGVuTWFpblVpKTtcclxuXHR9XHJcblxyXG4gICAgcHVibGljIGluaXQoKXtcclxuXHRcdC8vIENvbW1vbi5Kc0NhbGxKYXZhKFwiZGVtby5KU0JyaWRnZVwiLCBcInRlc3RTdHJpbmdcIiwgXCJIZWxsbyBiYWJ5IVwiKTtcclxuXHRcdC8v5ri45oiP5byA5Y+R54mI5pysXHJcblx0XHRNYW5hZ2VyLlZlcnNpb25NYW5hZ2VyLlZlcnNpb24gPSBDb25maWcuVmVyc2lvbkNvbmZpZy5EZXZlbG9wO1xyXG5cclxuXHRcdC8v5Yqo5oCB5Yqg6L29XHJcblx0XHRpZihMYXlhLkJyb3dzZXIub25NaW5pR2FtZSl7XHJcblx0XHRcdExheWEuVVJMLmJhc2VQYXRoID0gXCJodHRwczovLzcwNi5saWdodHBhdy5jbi9oNWMvcmVzQ2FjaGUvRGlldHlSb2FkL1wiO1x0XHJcblx0XHRcdC8vIExheWEuVVJMLmJhc2VQYXRoID0gXCJodHRwczovL3MzLmNuLW5vcnRod2VzdC0xLmFtYXpvbmF3cy5jb20uY24vaDVjbGllbnQvRGVtb3MvRHJlYW1DaGVzc1wiO1xyXG5cdFx0XHRMYXlhLk1pbmlBZHB0ZXIubmF0aXZlZmlsZXMgPSAgW1xyXG5cdFx0XHRcdFwibGlic1wiLFxyXG5cdFx0XHRcdFwicmVzL2NvbmZpZ1wiLFxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pbml0RmFpcnlndWkoKTtcclxuXHRcdHRoaXMubG9hZExvZ2luVWlSZXMoKTtcclxuXHRcdC8vIENvbW1vbi5sb2FkQWxsU3VicGFja2FnZXModGhpcywgdGhpcy5sb2FkTG9naW5VaVJlcyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRGYWlyeWd1aSgpe1xyXG5cdFx0ZmFpcnlndWkuVUlDb25maWcucGFja2FnZUZpbGVFeHRlbnNpb24gPSBcInR4dFwiO1xyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZChmYWlyeWd1aS5HUm9vdC5pbnN0LmRpc3BsYXlPYmplY3QpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2FkTG9naW5VaVJlcygpe1xyXG5cdFx0Q29tbW9uLlJlc291cmNlLmxvYWQoQ29uZmlnLmxvZ2luUmVzVXJscywgdGhpcywgdGhpcy5vbkxvZ2luZ1Jlc0xvYWRlZCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uTG9naW5nUmVzTG9hZGVkKCl7XHJcblx0XHR0aGlzLnByZUxvZ2luKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRSZXMoKXtcclxuXHRcdENvbW1vbi5SZXNvdXJjZS5sb2FkKENvbmZpZy51cmxzLCB0aGlzLCB0aGlzLm9uUmVzTG9hZGVkLCB0aGlzLm9uTG9hZGluZyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uTG9hZGluZyhwcm9ncmVzczogbnVtYmVyKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuWKoOi9vei/m+W6pjogXCIgKyBwcm9ncmVzcyk7XHJcblx0XHQvLyBNYW5hZ2VyLkxvYWRpbmdQcm9ncmVzc01hbmFnZXIuSW5zdC5zaG93VWlQcm9ncmVzcyhwcm9ncmVzcyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uUmVzTG9hZGVkKGluZm8pe1xyXG5cdFx0aWYoIWluZm8pe1xyXG5cdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcignTG9hZCBmYWlyeWd1aSBwYWNrYWdlIGZhaWwnKTtcclxuXHRcdH1cclxuXHJcblx0XHQvL+WFrOeUqOWMhVxyXG5cdFx0Q29uZmlnLlVJQ29uZmlnLlVJUGtncy5mb3JFYWNoKHBrZz0+e1xyXG5cdFx0XHRDb21tb24uUmVzb3VyY2UuYWRkVWlQYWNrYWdlKHBrZyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRDb25maWcuVUlDb25maWcuTG9naW5QYWNrYWdlTG9hZGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uU2NlbmVMb2dpbkVpZC5QYWNrYWdlTG9hZGVkKTtcclxuXHRcdHRoaXMubG9hZENvbmZpZygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwcmVMb2dpbigpe1xyXG5cdFx0dGhpcy5vcGVuTG9naW5VSSgpO1xyXG5cdFx0dGhpcy5jaGVja1ZlcnNpb24oKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2hlY2tWZXJzaW9uKCl7XHJcblx0XHRzd2l0Y2ggKE1hbmFnZXIuVmVyc2lvbk1hbmFnZXIuVmVyc2lvbikge1xyXG5cdFx0XHRjYXNlIENvbmZpZy5WZXJzaW9uQ29uZmlnLkRldmVsb3A6XHJcblx0XHRcdFx0dGhpcy5vcGVuQ2hvb3NlU2VydmljZVVpKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQ29uZmlnLlZlcnNpb25Db25maWcuUmVsZWFzZTpcclxuXHRcdFx0XHQvL+WvueWklueJiOacrOeZu+W9leWklue9kVxyXG5cdFx0XHRcdENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9IENvbmZpZy5OZXRDb25maWcuSHR0cFJlcXVlc3RVcmw7XHJcblxyXG5cdFx0XHRcdC8vIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG5cdFx0XHRcdC8vIFx0V3hVdGlscy5Mb2dpbih0cnVlKTtcclxuXHRcdFx0XHQvLyB9ZWxzZXtcclxuXHRcdFx0XHQvLyBcdHRoaXMub25WZXJzaW9uQ2hlY2tlZCgpO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25WZXJzaW9uQ2hlY2tlZCgpe1xyXG5cdFx0dGhpcy5sb2FkUmVzKCk7XHJcblx0XHQvLyB0aGlzLmxvZ2luR2FtZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvcGVuTG9naW5VSSgpe1xyXG5cdFx0TWFuYWdlci5Mb2FkaW5nUHJvZ3Jlc3NNYW5hZ2VyLkluc3Quc2hvd1VpUHJvZ3Jlc3MoNSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9wZW5DaG9vc2VTZXJ2aWNlVWkoKXtcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChDb25maWcuVmlld0tpdC5DaG9vc2VTZXJ2aWNlLktleSk7XHJcblx0fVxyXG5cclxuXHRsb2FkQ29uZmlnKCl7XHJcblx0XHQvL+aLieWPlumFjee9rlxyXG5cdFx0Ly8gRGF0YS5Db25maWdEYXRhLlNlbmRSZXEoQ29uZmlnLkRhdGFDb25maWcubG9jYWxDb25maWdzKTtcclxuXHRcdERhdGEuQ29uZmlnRGF0YS5TZW5kUmVxKFtdKTtcclxuXHJcblx0XHQvL+aLieWPluacrOWcsOmFjee9ru+8jOebruWJjeeUseWQjuerr+WPkemAge+8jOaaguW8g+eUqFxyXG5cdFx0Ly8gRGF0YUNvbmZpZy5pbnN0YW5jZS5pbml0Q29uZmlnKHRoaXMuY3JlYXRlMmRTY2VuZS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Db25maWdMb2FkZWQoKXtcclxuXHRcdHRoaXMubG9naW5HYW1lKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvZ2luR2FtZSgpIHtcclxuXHRcdGlmKENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9PSBDb25maWcuTmV0Q29uZmlnLkxvY2FsUmVxdWVzdFVybCl7XHJcblx0XHRcdHRoaXMudGVzdExvZ2luKCk7XHJcblx0XHRcdC8vIFd4VXRpbHMuTG9naW4odHJ1ZSk7XHJcblx0XHR9ZWxzZSBpZihDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwgPT0gQ29uZmlnLk5ldENvbmZpZy5Mb2NhbFdlY2hhdFJlcXVlc3RVcmwgJiYgQ29tbW9uLmlzT25XZWl4aW4oKSl7XHJcblx0XHRcdC8vIFd4VXRpbHMuTG9naW4odHJ1ZSk7XHJcblx0XHR9ZWxzZSBpZihDb21tb24uaXNPbldlaXhpbigpKXtcclxuXHRcdFx0Ly8gV3hVdGlscy5Mb2dpbih0cnVlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnRlc3RMb2dpbigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGVzdExvZ2luKCl7XHJcblx0XHRsZXQgYWNjOnN0cmluZztcclxuXHRcdGxldCB0ZW1wTmFtZSA9IENvbmZpZy5OZXRDb25maWcuVGVtcE5hbWU7XHJcblx0XHRpZih0ZW1wTmFtZSl7XHJcblx0XHRcdGFjYyA9IHRlbXBOYW1lO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdC8v6ZqP5py65biQ5Y+355m75b2V77yM5pa55L6/5rWL6K+VXHJcblx0XHRcdGFjYyA9IFwidGVtcFwiICsgTWF0aC5yYW5kb20oKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcmVxZGF0YSA9IG5ldyBDb25maWcuTG9naW5SZXFEYXRhKGFjYyk7XHJcblx0XHREYXRhLkxvZ2luRGF0YS5TZW5kUmVxKHJlcWRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkxvZ2luZWQoKXtcclxuXHRcdHRoaXMub3Blbk1haW5VaSgpO1xyXG5cdH1cclxuXHJcblx0b3Blbk1haW5VaSgpe1xyXG5cdFx0Ly8gaWYoIUNvbmZpZy5VSUNvbmZpZy5Mb2dpblBhY2thZ2VMb2FkZWQgfHwgIUNvbmZpZy5EYXRhQ29uZmlnLklzQ29uZmlnTG9hZGVkKSB7XHJcblx0XHQvLyBcdExheWEudGltZXIub25jZSg1MDAsIHRoaXMsIHRoaXMub3Blbk1haW5VaSk7XHJcblx0XHQvLyBcdHJldHVybjtcclxuXHRcdC8vIH07XHJcblxyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUVudGVyRWlkLk1haW5NZW51KTtcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChDb25maWcuVmlld0tpdC5NYWluTWVudS5LZXkpO1xyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlc2tDb2xsaXNpb25TY3JpcHQgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG5cdHB1YmxpYyBraW5lbWF0aWNTcHJpdGU6TGF5YS5TcHJpdGUzRDtcclxuXHRfaXNIaXQgPSBmYWxzZTtcclxuXHJcblx0Z2V0IElzSGl0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faXNIaXQ7XHJcblx0fVxyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyU3RhdHVzKCl7XHJcblx0XHR0aGlzLl9pc0hpdCA9IGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyRW50ZXIob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcdGlmIChvdGhlci5vd25lciA9PT0gdGhpcy5raW5lbWF0aWNTcHJpdGUpe1xyXG5cdFx0XHR0aGlzLl9pc0hpdCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJTdGF5KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJFeGl0KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvbkVudGVyKGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0XHRpZiAoY29sbGlzaW9uLm90aGVyLm93bmVyID09PSB0aGlzLmtpbmVtYXRpY1Nwcml0ZSl7XHJcblx0XHRcdHRoaXMuX2lzSGl0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uU3RheShjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25FeGl0KGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0fVxyXG5cclxufSIsImltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyBMb2dpYyBmcm9tIFwiLi9Mb2dpY1wiO1xyXG5cclxuY29uc3QgREVTS19QT1MgPSBuZXcgTGF5YS5WZWN0b3IzKDIuNSwgNCwgLTUpO1xyXG5jb25zdCBERVNLX0VORF9QT1MgPSBuZXcgTGF5YS5WZWN0b3IzKDIuNSwgLTEsIC01KTtcclxuY29uc3QgSEFORF9QT1MgPSBuZXcgTGF5YS5WZWN0b3IzKC0zLCAtMiwgLTUpO1xyXG5jb25zdCBIQU5EX0VORF9QT1MgPSBuZXcgTGF5YS5WZWN0b3IzKDAsIC0yLCAtNSk7XHJcbmNvbnN0IERFU0tfU0laRSA9IG5ldyBMYXlhLlZlY3RvcjMoMC4yLCAzLCAyKTtcclxuY29uc3QgSEFORF9TSVpFID0gbmV3IExheWEuVmVjdG9yMyg2LCAwLjUsIDAuNSk7XHJcbi8vc3BlZWRcclxuY29uc3QgU1BFRURfRk9SV0FSRF9ERVNLID0gbmV3IExheWEuVmVjdG9yMygwLCAtMTAsIDApO1xyXG5jb25zdCBTUEVFRF9CQUNLX0RFU0sgPSBuZXcgTGF5YS5WZWN0b3IzKDAsIDEwLCAwKTtcclxuY29uc3QgU1BFRURfRk9SV0FSRF9IQU5EID0gbmV3IExheWEuVmVjdG9yMyg1MCwgMCwgMCk7XHJcbmNvbnN0IFNQRUVEX0JBQ0tfSEFORCA9IG5ldyBMYXlhLlZlY3RvcjMoLTUwLCAwLCAwKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFiTG9naWMgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG4gICAgSXNJbml0ZWQgPSBmYWxzZTtcclxuICAgIFZkaXIgPSBuZXcgTGF5YS5WZWN0b3IzKCk7XHJcbiAgICBEZXNrUG9zaXRpb24gPSBuZXcgTGF5YS5WZWN0b3IzKCk7XHJcbiAgICBHU2NlbmU6TGF5YS5TY2VuZTNEO1xyXG4gICAgSGFuZDpMYXlhLk1lc2hTcHJpdGUzRDtcclxuICAgIEhhbmRTdGF0ZTpzdHJpbmc7XHJcbiAgICBEZXNrOkxheWEuTWVzaFNwcml0ZTNEO1xyXG4gICAgRGVza0NsYXNzOlJpZ2lkT2JqZWN0O1xyXG4gICAgSGFuZENsYXNzOlJpZ2lkT2JqZWN0O1xyXG4gICAgZGVza1NjcmlwdDpMb2dpYy5EZXNrQ29sbGlzaW9uU2NyaXB0O1xyXG4gICAgaGFuZFNjcmlwdDpMb2dpYy5IYW5kQ29sbGlzaW9uU2NyaXB0O1xyXG5cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICB0aGlzLkdTY2VuZSA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lIGFzIExheWEuU2NlbmUzRDtcclxuICAgICAgICB0aGlzLkhhbmQgPSB0aGlzLkdTY2VuZS5hZGRDaGlsZChuZXcgTGF5YS5NZXNoU3ByaXRlM0QoTGF5YS5QcmltaXRpdmVNZXNoLmNyZWF0ZUJveChIQU5EX1NJWkUueCwgSEFORF9TSVpFLnksIEhBTkRfU0laRS56KSkpIGFzIExheWEuTWVzaFNwcml0ZTNEO1xyXG4gICAgICAgIHRoaXMuRGVzayA9IHRoaXMuR1NjZW5lLmFkZENoaWxkKG5ldyBMYXlhLk1lc2hTcHJpdGUzRChMYXlhLlByaW1pdGl2ZU1lc2guY3JlYXRlQm94KERFU0tfU0laRS54LCBERVNLX1NJWkUueSwgREVTS19TSVpFLnopKSkgYXMgTGF5YS5NZXNoU3ByaXRlM0Q7XHJcbiAgICAgICAgdGhpcy5IYW5kLnRyYW5zZm9ybS5wb3NpdGlvbiA9IEhBTkRfUE9TXHJcbiAgICAgICAgdGhpcy5EZXNrLnRyYW5zZm9ybS5wb3NpdGlvbiA9IERFU0tfUE9TXHJcblxyXG4gICAgICAgIHRoaXMuYWRkUGh5c2ljcyh0aGlzLkhhbmQsIEhBTkRfU0laRSk7XHJcbiAgICAgICAgdGhpcy5hZGRQaHlzaWNzKHRoaXMuRGVzaywgREVTS19TSVpFKTtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcyA9IG5ldyBSaWdpZE9iamVjdCh0aGlzLkRlc2spO1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzID0gbmV3IFJpZ2lkT2JqZWN0KHRoaXMuSGFuZCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb2xsaXNpb25TY3JpcHQoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMubW92ZUhhbmQpO1xyXG4gICAgICAgIC8vIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5ET1VCTEVfQ0xJQ0ssIHRoaXMsIHRoaXMucmVzdGFydCk7XHJcblxyXG4gICAgICAgIHRoaXMuSXNJbml0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubW92ZURlc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQaHlzaWNzKHRhcmdldDpMYXlhLlNwcml0ZTNELCBzaXplOkxheWEuVmVjdG9yMyl7XHJcbiAgICAgICAgdmFyIHJpZ2lkQm9keTpMYXlhLlJpZ2lkYm9keTNEID0gdGFyZ2V0LmFkZENvbXBvbmVudChMYXlhLlJpZ2lkYm9keTNEKTsvL1JpZ2lkYm9keTNE5Y+v5LiOU3RhdGljQ29sbGlkZXLlkoxSaWdpZEJvZHkzROS6p+eUn+eisOaSnlxyXG4gICAgICAgIHJpZ2lkQm9keS5jb2xsaWRlclNoYXBlID0gbmV3IExheWEuQm94Q29sbGlkZXJTaGFwZShzaXplLngsIHNpemUueSwgc2l6ZS56KTtcclxuICAgICAgICByaWdpZEJvZHkuZ3Jhdml0eSA9IExheWEuVmVjdG9yMy5fWkVSTztcclxuICAgICAgICByaWdpZEJvZHkuaXNUcmlnZ2VyID0gdHJ1ZTtcclxuICAgICAgICByaWdpZEJvZHkuaXNLaW5lbWF0aWMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENvbGxpc2lvblNjcmlwdCgpe1xyXG4gICAgICAgIHRoaXMuZGVza1NjcmlwdCA9IHRoaXMuRGVzay5hZGRDb21wb25lbnQoTG9naWMuRGVza0NvbGxpc2lvblNjcmlwdCkgYXMgTG9naWMuRGVza0NvbGxpc2lvblNjcmlwdDtcclxuICAgICAgICB0aGlzLmRlc2tTY3JpcHQua2luZW1hdGljU3ByaXRlID0gdGhpcy5IYW5kO1xyXG4gICAgICAgIHRoaXMuaGFuZFNjcmlwdCA9IHRoaXMuSGFuZC5hZGRDb21wb25lbnQoTG9naWMuSGFuZENvbGxpc2lvblNjcmlwdCkgYXMgTG9naWMuSGFuZENvbGxpc2lvblNjcmlwdDtcclxuICAgICAgICB0aGlzLmhhbmRTY3JpcHQua2luZW1hdGljU3ByaXRlID0gdGhpcy5EZXNrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzdGFydCgpe1xyXG4gICAgICAgIHRoaXMuZGVza1NjcmlwdC5jbGVhclN0YXR1cygpO1xyXG4gICAgICAgIC8vIHRoaXMubW92ZURlc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVEZXNrKCl7XHJcbiAgICAgICAgdGhpcy5kZXNrRG93bigpO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLlN0YXRlID0gTWFuYWdlci5TdGF0ZUJhc2UuTU9WRV9GT1JXQVJEO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXREZXNrKCl7XHJcbiAgICAgICAgdGhpcy5kZXNrU2NyaXB0LmNsZWFyU3RhdHVzKCk7XHJcbiAgICAgICAgLy8gdGhpcy5EZXNrQ2xhc3MuUmlnaWQzRC5saW5lYXJWZWxvY2l0eSA9IExheWEuVmVjdG9yMy5fWkVSTztcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5PYmoudHJhbnNmb3JtLnBvc2l0aW9uID0gREVTS19QT1M7XHJcbiAgICAgICAgLy8gdGhpcy5EZXNrQ2xhc3MuU3RhdGUgPSBNYW5hZ2VyLlN0YXRlQmFzZS5JREVMO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVza0Rvd24oKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB2ZWMgPSB0aGlzLkRlc2tDbGFzcy5PYmoudHJhbnNmb3JtLnBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy55IC09IDAuMztcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5PYmoudHJhbnNmb3JtLnBvc2l0aW9uID0gdmVjO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVza1VwKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdmVjID0gdGhpcy5EZXNrQ2xhc3MuT2JqLnRyYW5zZm9ybS5wb3NpdGlvbjtcclxuICAgICAgICB2ZWMueSArPSAwLjM7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3MuT2JqLnRyYW5zZm9ybS5wb3NpdGlvbiA9IHZlYztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEZXNrKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLkRlc2tDbGFzcy5TdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIE1hbmFnZXIuU3RhdGVCYXNlLklERUw6XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTWFuYWdlci5TdGF0ZUJhc2UuTU9WRV9GT1JXQVJEOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kZXNrU2NyaXB0LklzSGl0KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RGVzaygpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5EZXNrQ2xhc3MuT2JqLnRyYW5zZm9ybS5wb3NpdGlvbi55IDw9IERFU0tfRU5EX1BPUy55KXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLkRlc2tDbGFzcy5SaWdpZDNELmxpbmVhclZlbG9jaXR5ID0gU1BFRURfQkFDS19ERVNLO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza1VwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5EZXNrQ2xhc3MuU3RhdGUgPSBNYW5hZ2VyLlN0YXRlQmFzZS5NT1ZFX0JBQ0s7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tEb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1hbmFnZXIuU3RhdGVCYXNlLk1PVkVfQkFDSzpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuRGVza0NsYXNzLk9iai50cmFuc2Zvcm0ucG9zaXRpb24ueSA+PSBERVNLX1BPUy55KXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLkRlc2tDbGFzcy5SaWdpZDNELmxpbmVhclZlbG9jaXR5ID0gU1BFRURfRk9SV0FSRF9ERVNLO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0Rvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkRlc2tDbGFzcy5TdGF0ZSA9IE1hbmFnZXIuU3RhdGVCYXNlLk1PVkVfRk9SV0FSRDtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza1VwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVIYW5kKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5IYW5kQ2xhc3MuU3RhdGUgPT0gTWFuYWdlci5TdGF0ZUJhc2UuSURFTCl7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuSGFuZENsYXNzLlJpZ2lkM0QubGluZWFyVmVsb2NpdHkgPSBTUEVFRF9GT1JXQVJEX0hBTkQ7XHJcbiAgICAgICAgICAgIHRoaXMuSGFuZENsYXNzLlN0YXRlID0gTWFuYWdlci5TdGF0ZUJhc2UuTU9WRV9GT1JXQVJEOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kRm9yd2FyZCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZlYyA9IHRoaXMuSGFuZENsYXNzLk9iai50cmFuc2Zvcm0ucG9zaXRpb247XHJcbiAgICAgICAgdmVjLnggKz0gMC4zO1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLk9iai50cmFuc2Zvcm0ucG9zaXRpb24gPSB2ZWM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kQmFjaygpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZlYyA9IHRoaXMuSGFuZENsYXNzLk9iai50cmFuc2Zvcm0ucG9zaXRpb247XHJcbiAgICAgICAgdmVjLnggLT0gMC4zO1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLk9iai50cmFuc2Zvcm0ucG9zaXRpb24gPSB2ZWM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEhhbmQoKXtcclxuICAgICAgICAvLyB0aGlzLkhhbmRDbGFzcy5SaWdpZDNELmxpbmVhclZlbG9jaXR5ID0gTGF5YS5WZWN0b3IzLl9aRVJPO1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLk9iai50cmFuc2Zvcm0ucG9zaXRpb24gPSBIQU5EX1BPUztcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5TdGF0ZSA9IE1hbmFnZXIuU3RhdGVCYXNlLklERUw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5IYW5kQ2xhc3MuU3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBNYW5hZ2VyLlN0YXRlQmFzZS5JREVMOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIE1hbmFnZXIuU3RhdGVCYXNlLk1PVkVfRk9SV0FSRDpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVza1NjcmlwdC5Jc0hpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEhhbmQoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuSGFuZENsYXNzLk9iai50cmFuc2Zvcm0ucG9zaXRpb24ueCA+PSBIQU5EX0VORF9QT1MueCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5IYW5kQ2xhc3MuUmlnaWQzRC5saW5lYXJWZWxvY2l0eSA9IFNQRUVEX0JBQ0tfSEFORDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkhhbmRDbGFzcy5TdGF0ZSA9IE1hbmFnZXIuU3RhdGVCYXNlLk1PVkVfQkFDSztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZEZvcndhcmQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTWFuYWdlci5TdGF0ZUJhc2UuTU9WRV9CQUNLOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5IYW5kQ2xhc3MuT2JqLnRyYW5zZm9ybS5wb3NpdGlvbi54IDw9IEhBTkRfUE9TLngpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRIYW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRCYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXNrKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kKCk7XHJcbiAgICAgICAgLy8gbGV0IGhhbmRQb3MgPSB0aGlzLkhhbmQudHJhbnNmb3JtLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vIGlmKHRoaXMuVmRpci54IDwgMCl7XHJcbiAgICAgICAgLy8gICAgIGlmKGhhbmRQb3MueCA8IERFU0tfUE9TLngpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5IYW5kU3RhdGUgPSBNYW5hZ2VyLlN0YXRlQmFzZS5CQUNLX1BBU1NFRDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUmlnaWRPYmplY3Qge1xyXG4gICAgT2JqOkxheWEuTWVzaFNwcml0ZTNEO1xyXG4gICAgUmlnaWQzRDpMYXlhLlJpZ2lkYm9keTNEO1xyXG4gICAgU3RhdGUgPSBNYW5hZ2VyLlN0YXRlQmFzZS5JREVMO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9iajpMYXlhLk1lc2hTcHJpdGUzRCl7XHJcbiAgICAgICAgdGhpcy5PYmogPSBvYmo7XHJcbiAgICAgICAgdGhpcy5SaWdpZDNEID0gb2JqLmdldENvbXBvbmVudChMYXlhLlJpZ2lkYm9keTNEKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhbmRDb2xsaXNpb25TY3JpcHQgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG5cdHB1YmxpYyBraW5lbWF0aWNTcHJpdGU6TGF5YS5TcHJpdGUzRDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJFbnRlcihvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJTdGF5KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJFeGl0KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uRW50ZXIoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi56Kw5pKe77yBXCIpO1xyXG5cdFx0aWYgKGNvbGxpc2lvbi5vdGhlci5vd25lciA9PT0gdGhpcy5raW5lbWF0aWNTcHJpdGUpe1xyXG5cdFx0XHQvLyAodGhpcy5vd25lci5nZXRDb21wb25lbnQoTGF5YS5SaWdpZGJvZHkzRCkgYXMgTGF5YS5SaWdpZGJvZHkzRCkuZ3Jhdml0eSA9IG5ldyBMYXlhLlZlY3RvcjMoMCwgLTEwLCAwKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uU3RheShjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25FeGl0KGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0fVxyXG5cclxufSIsImV4cG9ydCAqIGZyb20gJy4vR3JhYkxvZ2ljJztcclxuZXhwb3J0ICogZnJvbSAnLi9EZXNrQ29sbGlzaW9uU2NyaXB0JztcclxuZXhwb3J0ICogZnJvbSAnLi9IYW5kQ29sbGlzaW9uU2NyaXB0JztcclxuIiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gXCIuL0dhbWVTY2VuZVwiO1xyXG5cclxuY2xhc3MgTWFpbiB7XHJcblx0cHJpdmF0ZSBhbmltYXRpb25zOkFycmF5PHN0cmluZz4gPSBbJ2F0dGFjazEnLCAnYXR0YWNrMicsICdhdHRhY2szJywgJ3dpbiddO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxyXG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG5cdFx0Ly/miYvmnLrkuI5QQ+mAgumFjeS4jeWQjFxyXG5cdFx0aWYoTGF5YS5Ccm93c2VyLm9uUEMpe1xyXG5cdFx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IExheWEuU3RhZ2UuU0NBTEVfU0hPV0FMTDtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IExheWEuU3RhZ2UuU0NBTEVfRklYRURfV0lEVEg7XHJcblx0XHR9XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBMYXlhLlN0YWdlLlNDUkVFTl9WRVJUSUNBTDtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWU7XHJcblxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKSB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcblxyXG5cdG9uQ29uZmlnTG9hZGVkKCkge1xyXG5cdFx0TWFuYWdlci5TY2VuZU1hbmFnZXIuY3JlYXRlM2RTY2VuZSgpO1xyXG5cclxuXHRcdC8vIENvbW1vbi5sb2FkQWxsU3VicGFja2FnZXModGhpcywgdGhpcy5vblN1YlBhY2thZ2VMb2FkZWQpO1xyXG5cdH1cclxuXHJcblx0b25TdWJQYWNrYWdlTG9hZGVkKCl7XHJcblx0XHRNYW5hZ2VyLlNjZW5lTWFuYWdlci5jcmVhdGUzZFNjZW5lKCk7XHJcblx0fVxyXG59XHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7XHJcbiIsIu+7v2ltcG9ydCAqIGFzIENvbmZpZyBmcm9tICcuLi9Db25maWcvQ29uZmlnJztcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VNYW5hZ2VyIGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVyIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX2luc3Q6QmFzZU1hbmFnZXI7XHJcbiAgICBwcml2YXRlIF9tc2dUeXBlOm51bWJlcjtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3QoKXtcclxuICAgICAgICBpZighTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgY3JlYWUgYSBzY2VuZSBmaXJzdCEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRoaXMuX2luc3Qpe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0ID0gTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUuZ2V0Q29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICBpZighdGhpcy5faW5zdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0ID0gTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUuYWRkQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG4vL+eCueWHu+eJueaViFxyXG5leHBvcnQgY2xhc3MgQ2xpY2tFZmZlY3RNYW5hZ2Vye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgVG91Y2hDb206ZmFpcnlndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHN0YXRpYyBJbml0KCl7XHJcbiAgICAgICAgaWYodGhpcy5Ub3VjaENvbSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBncm9vdEluc3QgPSBmYWlyeWd1aS5HUm9vdC5pbnN0O1xyXG5cdFx0dGhpcy5Ub3VjaENvbSA9IGZhaXJ5Z3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3RGcm9tVVJMKCd1aTovL01haW5VSS9Db21wb25lbnRfZGlhbmppJykuYXNDb207XHJcblx0XHRncm9vdEluc3QuYWRkQ2hpbGQodGhpcy5Ub3VjaENvbSk7XHJcblx0XHR0aGlzLlRvdWNoQ29tLnNvcnRpbmdPcmRlciA9IENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuQ2xpY2tFZmZlY3Q7XHJcbiAgICAgICAgLy8gdGhpcy5Ub3VjaENvbS5ub2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XHJcbiAgICAgICAgLy8gdGhpcy5Ub3VjaENvbS5kaXNwbGF5T2JqZWN0LnNldFNpYmxpbmdJbmRleCh0aGlzLlRvdWNoQ29tLm5vZGUucGFyZW50LmNoaWxkcmVuQ291bnQpO1xyXG5cclxuICAgICAgICBncm9vdEluc3QuZGlzcGxheU9iamVjdC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLnBsYXlDbGlja0VmZmVjdCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtjYy5FdmVudC5FdmVudFRvdWNofSBldnRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBsYXlDbGlja0VmZmVjdChldnQpe1xyXG4gICAgICAgIGxldCBwb3MgPSBldnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLlRvdWNoQ29tLnNldFhZKHBvcy54LCBmYWlyeWd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHBvcy55KTtcclxuICAgICAgICB0aGlzLlRvdWNoQ29tLmdldFRyYW5zaXRpb24oJ0VmZmVjdF9UJykucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlKCl7XHJcbiAgICAgICAgdGhpcy5Ub3VjaENvbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gZmFpcnlndWkuR1Jvb3QuaW5zdC5ub2RlLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvdygpe1xyXG4gICAgICAgIHRoaXMuVG91Y2hDb20udmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9VSS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vQ29tbW9uL1V0aWxzXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQge0RldlJlcUJvZHksIExvZ2luRGF0YX0gZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhTWFuYWdlciBleHRlbmRzIE1hbmFnZXIuQmFzZU1hbmFnZXIge1xyXG4gICAgc3RhdGljIEluc3Q6RGF0YU1hbmFnZXI7XHJcbiAgICBwcml2YXRlIF9pc0Jhc2VCb2R5SW5pdGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2lzQm9keUluaXRlZDpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Bd2FrZSgpe1xyXG4gICAgICAgIC8vIERhdGEuRGV2UmVxQm9keS5Jbml0QmFzZUJvZHkoKTtcclxuICAgICAgICB0aGlzLmluaXRCYXNlQm9keSgpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MsIHRoaXMub25Mb2dpblN1Y2Nlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEJhc2VCb2R5KCl7XHJcbiAgICAgICAgaWYodGhpcy5faXNCYXNlQm9keUluaXRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvL+S4jueZu+W9leaXoOWFs+eahOaOpeWPo+ebtOaOpeWIm+W7ulxyXG4gICAgICAgIC8v6YWN572uXHJcbiAgICAgICAgRGF0YS5Db25maWdEYXRhLlJlcUJvZHkgPSBuZXcgRGF0YS5IdHRwUmVxYm9keUJhc2UoMCwgMTAwMDIpOyAgIFxyXG4gICAgICAgIC8v55m75b2VXHJcbiAgICAgICAgRGF0YS5Mb2dpbkRhdGEuUmVxQm9keSA9IG5ldyBEYXRhLkh0dHBSZXFib2R5QmFzZSgwLCAxMDAwMyk7IFxyXG5cclxuICAgICAgICB0aGlzLl9pc0Jhc2VCb2R5SW5pdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTG9naW5TdWNjZXNzKCl7XHJcbiAgICAgICAgdGhpcy5pbml0RGV2Qm9kaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0RGV2Qm9kaWVzKCl7XHJcbiAgICAgICAgLy/ku6XkuIvor7fmsYLkvZPpnIDopoHnmbvlvZXmiY3lj6/liJvlu7pcclxuICAgICAgICBpZih0aGlzLl9pc0JvZHlJbml0ZWQgfHwgIURhdGEuTG9naW5EYXRhLlNlc3Npb24pIHJldHVybjtcclxuICAgICAgICAvLyMxMDgwMiDojrflj5bpppbmnYDmppxcclxuICAgICAgICBEYXRhLlVwZ3JhZGVEYXRhLlJlcUJvZHkgPSBuZXcgRGV2UmVxQm9keSg4LCAxMDgwMik7XHJcbiAgICBcclxuICAgICAgICB0aGlzLl9pc0JvZHlJbml0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59ICIsImltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuLy/oj4roirHnrqHnkIZcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdJY29uTWFuYWdlciBleHRlbmRzIE1hbmFnZXIuQmFzZU1hbmFnZXIge1xyXG4gICAgc3RhdGljIEluc3Q6TG9hZGluZ0ljb25NYW5hZ2VyO1xyXG4gICAgcHVibGljIElzSW5pdGVkOkJvb2xlYW47XHJcbiAgICBwdWJsaWMgQ29udHJvbGxlcjpVSS5Mb2FkaW5nQ29udHJvbGxlcjtcclxuXHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgdGhpcy5Jbml0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEluaXQoKXtcclxuICAgICAgICBpZih0aGlzLklzSW5pdGVkID09IHRydWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Jc0luaXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlciA9IE1hbmFnZXIuVUlNYW5hZ2VyLm9wZW5Db250cm9sbGVyKFVJLkxvYWRpbmdDb250cm9sbGVyKSBhcyBVSS5Mb2FkaW5nQ29udHJvbGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBTaG93TG9hZGluZygpIHtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIuc2hvd0xvYWRpbmcoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgSGlkZUxvYWRpbmcoKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIuaGlkZUxvYWRpbmcoKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSAnLi4vTWFuYWdlci9NYW5hZ2VyJztcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gJy4uL0NvbW1vbi9Db21tb24nO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuXHJcbi8v55m75b2V6L+b5bqm566h55CGXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUHJvZ3Jlc3NNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlcntcclxuICAgIHN0YXRpYyBJbnN0OkxvYWRpbmdQcm9ncmVzc01hbmFnZXI7XHJcbiAgICBwdWJsaWMgSXNJbml0ZWQ6Qm9vbGVhbjtcclxuICAgIHB1YmxpYyBDb250cm9sbGVyOlVJLkxvYWRpbmdQcm9ncmVzc0NvbnRyb2xsZXI7XHJcblxyXG4gICAgb25Bd2FrZSgpe1xyXG4gICAgICAgIHRoaXMuSW5pdCgpO1xyXG4gICAgICAgIC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5TaW1Qcm9ncmVzc0VuZCwgdGhpcy5vbkxvYWRpbmdDb21wbGV0ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEluaXQoKXtcclxuICAgICAgICBpZih0aGlzLklzSW5pdGVkID09IHRydWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Jc0luaXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlciA9IE1hbmFnZXIuVUlNYW5hZ2VyLm9wZW5Db250cm9sbGVyKFVJLkxvYWRpbmdQcm9ncmVzc0NvbnRyb2xsZXIpIGFzIFVJLkxvYWRpbmdQcm9ncmVzc0NvbnRyb2xsZXI7XHJcblxyXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLlNpbVByb2dyZXNzRW5kLCB0aGlzLm9uTG9hZGluZ0NvbXBsZXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VWlQcm9ncmVzcyhwcm9ncmVzczpudW1iZXIsIHBrZ05hbWU/OnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIuc2hvd1VpUHJvZ3Jlc3MocHJvZ3Jlc3MsIHBrZ05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIFNob3dXeExvZ2luKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyLnNob3dXeExvZ2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvbmZpZ1Byb2dyZXNzKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIuc2hvd0NvbmZpZ1Byb2dyZXNzKCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWRpbmdDb21wbGV0ZSgpe1xyXG4gICAgICAgIC8v5Yqg6L295oiQ5Yqf5ZCO5bqf6Zmk6Ieq5bexXHJcbiAgICAgICAgTG9jYWxDb25maWcuSXNTaW1Qcm9ncmVzc0VuZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Jc0luaXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ2xpY2tFZmZlY3RNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nSWNvbk1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvYWRpbmdQcm9ncmVzc01hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL05ldE1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1JvbGVCYXNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9TdGF0ZUJhc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL1NjZW5lTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3Bhd25NYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9UaW1lck1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1VJTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vVmVyc2lvbk1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0RhdGFNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Qb29sTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vUm9sZU1hbmFnZXInO1xyXG4iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9VSS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vQ29tbW9uL1V0aWxzXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbi8v5piv5ZCm56ys5LiA5qyh6L+e5o6lXHJcbmxldCBpc0ZpcnN0U2VuZCA9IHRydWU7XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cE1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgX2hyOlhNTEh0dHBSZXF1ZXN0O1xyXG4gICAgcHJpdmF0ZSBfcmVxS2V5OnN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGljIF9obU1hcDpDb25maWcuRGljdGlvbmFyeTxIdHRwTWFuYWdlcj4gPSB7fTtcclxuICAgIHByb3RlY3RlZCBEYXRhOkRhdGEuSHR0cFJlcWJvZHlCYXNlO1xyXG4gICAgcHJpdmF0ZSBDYWxsYmFjazpGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgQ29ubmVjdFRpbWVzOm51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgSXNTaG93TG9hZGluZzpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNDb25uZWN0aW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgLy8gRGF0YS5EZXZSZXFCb2R5LkluaXRCYXNlQm9keSgpO1xyXG4gICAgICAgIC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MsIHRoaXMuaW5pdERldkJvZGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldCBSZXF1ZXN0VXJsKHVybDpzdHJpbmcpe1xyXG4gICAgICAgIENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBDb25uZWN0KHJlcWtleTpzdHJpbmcsIGRhdGE6RGF0YS5IdHRwUmVxYm9keUJhc2UsIGNhbGxiYWNrPzpGdW5jdGlvbiwgaXNTaG93TG9hZGluZz86Ym9vbGVhbiwgSXNHbT86Ym9vbGVhbikge1xyXG4gICAgICAgIGlmKCFkYXRhKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2hyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgdGhpcy5fcmVxS2V5ID0gcmVxa2V5O1xyXG5cclxuICAgICAgICBpZihJc0dtKVxyXG4gICAgICAgICAgICB0aGlzLl9oci5vcGVuKFwicG9zdFwiLCBDb25maWcuTmV0Q29uZmlnLkdNVXJsLCB0cnVlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2hyLm9wZW4oXCJwb3N0XCIsIENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCwgdHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5faHIub25yZWFkeXN0YXRlY2hhbmdlID0gdGhpcy5Pbkh0dHBSZXF1ZXN0Q29tcGxldGUuYmluZCh0aGlzKTtcclxuICAgICAgICAvL+i2heaXtlxyXG4gICAgICAgIHRoaXMuX2hyLnRpbWVvdXQgPSA1MDAwO1xyXG4gICAgICAgIHRoaXMuX2hyLm9udGltZW91dCA9IHRoaXMuT25UaW1lb3V0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5faHIub25lcnJvciA9IHRoaXMuT25IdHRwUmVxdWVzdEVycm9yLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZihkYXRhLlJlcURhdGEpID09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgZGF0YS5SZXFEYXRhID0gSlNPTi5wYXJzZShkYXRhLlJlcURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLklzU2hvd0xvYWRpbmcgPSBpc1Nob3dMb2FkaW5nO1xyXG4gICAgICAgIC8v6YeN6L+e5qyh5pWwXHJcbiAgICAgICAgdGhpcy5Db25uZWN0VGltZXMrKztcclxuICAgICAgICAvL+i2heaXtuavq+enkuaVsFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2hyLnRpbWVvdXQpO1xyXG5cclxuICAgICAgICB0aGlzLl9oci5yZXNwb25zZVR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpZih0eXBlb2YgZGF0YS5SZXFEYXRhICE9ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgZGF0YS5SZXFEYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YS5SZXFEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgLy/mmK/lkKbmraPlnKjov57mjqXvvIzljIXmi6zotoXml7ZcclxuICAgICAgICB0aGlzLklzQ29ubmVjdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIC8v6I+K6IqxXHJcbiAgICAgICAgaWYoaXNGaXJzdFNlbmQpe1xyXG4gICAgICAgICAgICBpc0ZpcnN0U2VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBNYW5hZ2VyLkxvYWRpbmdJY29uTWFuYWdlci5Jbml0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpc1Nob3dMb2FkaW5nID09IHRydWUpe1xyXG4gICAgICAgICAgICBNYW5hZ2VyLkxvYWRpbmdJY29uTWFuYWdlci5JbnN0LlNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIE1hbmFnZXIuTG9hZGluZ0ljb25NYW5hZ2VyLkluc3QuSGlkZUxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIC8vM+enkuWQjuWGjei9rOiPiuiKsVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuTGF0ZVNob3dMb2FkaW5nLmJpbmQodGhpcyksIDMwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLk5ldEh0dHBDb25uZWN0RWlkLkNvbm5lY3RCZWdpbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIExhdGVTaG93TG9hZGluZygpe1xyXG4gICAgICAgIGlmICh0aGlzLklzQ29ubmVjdGluZyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgTWFuYWdlci5Mb2FkaW5nSWNvbk1hbmFnZXIuSW5zdC5TaG93TG9hZGluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+ivt+axgumUmeivr1xyXG5cdE9uSHR0cFJlcXVlc3RFcnJvcihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJ5QXV0b1JlY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL+i2heaXtlxyXG4gICAgT25UaW1lb3V0KGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICAgICAgdGhpcy50cnlBdXRvUmVjb25uZWN0KCk7XHJcblx0fVxyXG5cclxuXHRPbkh0dHBSZXF1ZXN0UHJvZ3Jlc3MoZSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCLliqDovb3ov5vluqY+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+XCIsZS5sb2FkZWQgLyBlLnRvdGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZW1vdmVSZXF1ZXN0KCl7XHJcbiAgICAgICAgLy/np7vpmaTlvZPliY3ov57mjqXvvIzlv4XpobvlhYjorr7nva7ov57mjqXnirbmgIFJc0Nvbm5lY3RpbmfkuLpmYWxzZeWQjuWGjeiwg+eUqFxyXG4gICAgICAgIGlmKHRoaXMuSXNDb25uZWN0aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2hyID0gbnVsbDtcclxuICAgICAgICB0aGlzLkRhdGEgPSBudWxsO1xyXG4gICAgICAgIEh0dHBNYW5hZ2VyLl9obU1hcFt0aGlzLl9yZXFLZXldID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRyeUF1dG9SZWNvbm5lY3QoKXtcclxuICAgICAgICAvL+etlueVpe+8mjAuNeenkumHjei/nuS4gOasoe+8jOmHjeivlTXmrKFcclxuICAgICAgICBpZih0aGlzLkNvbm5lY3RUaW1lcyA8IDMpe1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoNTAwLCB0aGlzLCB0aGlzLmF1dG9SZUNvbm5lY3QpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb25uZWN0V2luZG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXV0b1JlQ29ubmVjdCgpe1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdCgnJywgdGhpcy5EYXRhLCB0aGlzLkNhbGxiYWNrLCB0cnVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzaG93Q29ubmVjdFdpbmRvdygpe1xyXG4gICAgICAgIHRoaXMuSXNDb25uZWN0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgTWFuYWdlci5Mb2FkaW5nSWNvbk1hbmFnZXIuSW5zdC5IaWRlTG9hZGluZygpO1xyXG5cclxuICAgICAgICAvLyBsZXQgcG9wdXBEYXRhID0ge1xyXG4gICAgICAgIC8vICAgICBDb250ZW50OiBDb25maWcuTG9jYWxDb250ZW50Lk5ldEVycm9yLFxyXG4gICAgICAgIC8vICAgICBZZXNCdG5Db250ZW50OkNvbmZpZy5Mb2NhbENvbnRlbnQuWWVzLFxyXG4gICAgICAgIC8vICAgICAvLyBCdG5TdHlsZTogMSxcclxuICAgICAgICAvLyAgICAgSGFzQmc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICBZZXNCdG5DYWxsYmFjazp0aGlzLkNvbm5lY3QuYmluZCh0aGlzLCAnJywgdGhpcy5EYXRhLCB0aGlzLkNhbGxiYWNrLCB0aGlzLklzU2hvd0xvYWRpbmcpXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBsZXQgY29udGVudCA9IFtDb25maWcuTG9jYWxDb250ZW50Lk5ldEVycm9yXTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgTWFuYWdlci5VSU1hbmFnZXIub3BlbkNvbmZpcm1XaW5kb3coXHJcbiAgICAgICAgICAgIGNvbnRlbnQsIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgICAgIHNlbGYuQ29ubmVjdCgnJywgc2VsZi5EYXRhLCBzZWxmLkNhbGxiYWNrLCBzZWxmLklzU2hvd0xvYWRpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblx0T25IdHRwUmVxdWVzdENvbXBsZXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9oci5yZWFkeVN0YXRlICE9IDQgfHwgKHRoaXMuX2hyLnN0YXR1cyA8IDIwMCB8fCB0aGlzLl9oci5zdGF0dXMgPj0gNDAwKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLklzQ29ubmVjdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdFRpbWVzID0gMDtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuX2hyLnJlc3BvbnNlVGV4dCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5faHIucmVzcG9uc2VUZXh0KSBhcyBDb25maWcuUmVzcERhdGFTdHJ1Y3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+Pj4+Pj4+Pj4+Pj4+6L+e5o6l54q25oCB77yaJywgZGF0YS5SZXNwQ29kZSwgZGF0YS5SZXNwTXNnKTtcclxuICAgICAgICAvL+i/nuaOpeWksei0pVxyXG4gICAgICAgIC8vIGlmKGRhdGEuUmVzcENvZGUgIT0gQ29uZmlnLkh0dHBDb25uZWN0U3RhdGUuU3VjY2VzcykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0eXBlb2YodGhpcy5DYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIHRoaXMuQ2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WPkemAgeWTjeW6lOaVsOaNru+8jOWbnuS8oOivt+axguaVsOaNrlxyXG4gICAgICAgIC8vIGlmKHR5cGVvZih0aGlzLkRhdGEuUmVxRGF0YSkgPT0gJ3N0cmluZycpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLkRhdGEuUmVxRGF0YSA9IEpTT04ucGFyc2UodGhpcy5EYXRhLlJlcURhdGEpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBEYXRhLkRhdGFTdHJ1Y3QuT25IdHRwUmVxdWVzdENvbXBsZXRlKGRhdGEsIHRoaXMuX3JlcUtleSwgdGhpcy5EYXRhLlJlcURhdGEpO1xyXG5cclxuICAgICAgICAvL+i/nuaOpee7k+adn+WIoOmZpOWvueixoVxyXG4gICAgICAgIHRoaXMuX3JlbW92ZVJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5OZXRIdHRwQ29ubmVjdEVpZC5TZXJ2aWNlUmVzcG9uZCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU29ja2V0TWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdDpTb2NrZXRNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBzb2NrZXQ6IExheWEuU29ja2V0O1xyXG4gICAgcHJpdmF0ZSBvdXRwdXQ6IExheWEuQnl0ZTtcclxuICAgIHByaXZhdGUgX2RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLyoqIOW/g+i3s+WMheWumuaXtuWZqCAqL1xyXG4gICAgcHJpdmF0ZSBfdGltZXI6IG51bWJlciA9IDA7XHJcbiAgICAvKiog5b+D6Lez5YyF5pyN5Yqh5Zmo6LaF5pe25a6a5pe25ZmoICovXHJcbiAgICBwcml2YXRlIF9zZXJ2ZXJUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIC8qKiDlv4Pot7PljIXotoXml7bml7bpl7TvvIzljZXkvY1tcyzml7bpl7Tlj6rog73mmK/mlbTnp5LmlbDvvIxzZXRUaW1lb3V05Zyo5ZCO5Y+w5q+P56eS5omn6KGM5LiA5qyhICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF90aW1lb3V0OiBudW1iZXIgPSAxMDAwMDtcclxuICAgIC8qKiDpnZnpu5jph43ov57lrprml7blmaggKi9cclxuICAgIHByaXZhdGUgX3NpbGVudFRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOW/g+i3s+WMheacjeWKoeWZqOi2heaXtuaXtumXtO+8jOWNleS9jW1zLOaXtumXtOWPquiDveaYr+aVtOenkuaVsO+8jHNldFRpbWVvdXTlnKjlkI7lj7Dmr4/np5LmiafooYzkuIDmrKEgKi9cclxuICAgIHByaXZhdGUgX3NlcnZlclRpbWVvdXQ6IG51bWJlciA9IDEwMDAwOyAvL1RPRE/osIPor5Xmiorml7bpl7TliqDplb8zNjAwMDAw77yM5Y6fMTAwMDBcclxuICAgIC8qKiDmlq3nur/nsbvlnovvvJoxLuiiq+aMpOS4i+e6vywgMi7lgZzmnI3nu7TmiqQoc29ja2V05pat5byAKSwzIOmdnuazleaTjeS9nCAqL1xyXG4gICAgcHJpdmF0ZSBfZGlzY29ubmVjdFR5cGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX2luc3Qpe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0ID0gbmV3IFNvY2tldE1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xyXG4gICAgfSBcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHVybD86c3RyaW5nLCBwb3J0PzpudW1iZXIpIHtcclxuICAgICAgICAvLyB0aGlzLmNvbm5lY3QodXJsLCBwb3J0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29ubmVjdCh1cmw6c3RyaW5nLCBwb3J0PzpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaW5zdC5jb25uZWN0KHVybCwgcG9ydCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25uZWN0KHVybDpzdHJpbmcsIHBvcnQ/Om51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IExheWEuU29ja2V0KCk7XHJcblxyXG4gICAgICAgIGlmKHBvcnQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNvbm5lY3QodXJsLCBwb3J0KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY29ubmVjdEJ5VXJsKHVybCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMuc29ja2V0Lm91dHB1dDtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oTGF5YS5FdmVudC5PUEVOLCB0aGlzLCB0aGlzLm9uU29ja2V0T3Blbik7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oTGF5YS5FdmVudC5DTE9TRSwgdGhpcywgdGhpcy5vblNvY2tldENsb3NlKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbihMYXlhLkV2ZW50Lk1FU1NBR0UsIHRoaXMsIHRoaXMub25NZXNzYWdlUmV2ZWl2ZWQpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKExheWEuRXZlbnQuRVJST1IsIHRoaXMsIHRoaXMub25Db25uZWN0RXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5b+D6Lez5qOA5rWLXHJcbiAgICBwcml2YXRlIHN0YXJ0SGVhcnRiZWF0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGUudG9VVENTdHJpbmcoKSArIFwiIHN0YXJ0IGhlYXJ0YmVhdFwiKTtcclxuICAgICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQodGhpcy50aW1lckhhbmRsZXIuYmluZCh0aGlzKSwgdGhpcy5fdGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lckhhbmRsZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0ZS50b1VUQ1N0cmluZygpICsgXCIgc2VuZCBoZWFydGJlYXRcIik7XHJcblxyXG4gICAgICAgIC8v5Y+R6YCB5LiA5Liq5b+D6Lez77yM5ZCO56uv5pS25Yiw5ZCO77yM6L+U5Zue5LiA5Liq5b+D6Lez5raI5oGvXHJcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZCgnciB1IHRoZXJlPycpO1xyXG4gICAgICAgIHRoaXMuX3NlcnZlclRpbWVyID0gc2V0VGltZW91dCh0aGlzLnNlcnZlclRpbWVySGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLl9zZXJ2ZXJUaW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlcnZlclRpbWVySGFuZGxlcigpIHtcclxuICAgICAgICAvL+acjeWKoeWZqOi2heaXtuayoeacieWbnuWMhe+8jOaWreW8gOi/nuaOpeeEtuWQjumHjei/nlxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGUudG9VVENTdHJpbmcoKSArIFwiIHdhaXQgc2VydmVyIHJlcGx5IHRpbWVvdXRcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRIZWFydGJlYXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0ZS50b1VUQ1N0cmluZygpICsgXCIgcmVzZXQgaGVhcnRiZWF0XCIpO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3NlcnZlclRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU29ja2V0T3BlbigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldEhlYXJ0YmVhdCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRIZWFydGJlYXQoKTtcclxuXHJcbiAgICAgICAgLy8g5Y+R6YCB5a2X56ym5LiyXHJcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChcImRlbW9uc3RyYXRlIDxzZW5kU3RyaW5nPlwiKTtcclxuXHJcbiAgICAgICAgLy8g5L2/55Sob3V0cHV0LndyaXRlQnl0ZeWPkemAgVxyXG4gICAgICAgIHZhciBtZXNzYWdlOiBzdHJpbmcgPSBcImRlbW9uc3RyYXRlIDxvdXRwdXQud3JpdGVCeXRlPlwiO1xyXG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LndyaXRlQnl0ZShtZXNzYWdlLmNoYXJDb2RlQXQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvY2tldC5mbHVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Tb2NrZXRDbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvY2tldCBjbG9zZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk1lc3NhZ2VSZXZlaXZlZChtZXNzYWdlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgZnJvbSBzZXJ2ZXI6XCIsIG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAvL+iOt+WPluWIsOa2iOaBr+mHjee9ruW/g+i3s+ajgOa1i1xyXG4gICAgICAgIHRoaXMucmVzZXRIZWFydGJlYXQoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0SGVhcnRiZWF0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgfWVsc2UgaWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgTGF5YS5CeXRlKG1lc3NhZ2UpLnJlYWRVVEZCeXRlcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0LmlucHV0LmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNvbm5lY3RFcnJvcihlOiBMYXlhLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5pat57q/57G75Z6L77yaMS7ooqvmjKTkuIvnur8sIDIu5YGc5pyN57u05oqkKHNvY2tldOaWreW8gCksMyDpnZ7ms5Xmk43kvZwgKi9cclxuICAgIHB1YmxpYyBzZXREaXNjb25uZWN0KHR5cGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2Rpc2Nvbm5lY3RUeXBlID0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuX2Rpc2Nvbm5lY3RUeXBlID0gMDtcclxuICAgICAgICB0aGlzLnJlc2V0SGVhcnRiZWF0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvb2xNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlciB7XHJcbiAgICBzdGF0aWMgSW5zdDpQb29sTWFuYWdlcjtcclxuXHJcbiAgICAvL2ZhaXJ5Z3Vp5a+56LGh5rGgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBmZ3VpUG9vbCA9IG5ldyBmYWlyeWd1aS5HT2JqZWN0UG9vbCgpO1xyXG5cclxuICAgIC8vZmFpcnlndWnlr7nosaHmsaBcclxuICAgIHN0YXRpYyBnZXQgRmd1aVBvb2woKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5mZ3VpUG9vbDtcclxuICAgIH1cclxuXHJcbiAgICAvL+WktOmDqOaxoFxyXG4gICAgc3RhdGljIGdldCBIZWFkUG9vbCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvb2woQ29uZmlnLlBvb2xUeXBlLkhlYWRNb2RlbCkgYXMgTGF5YS5TcHJpdGUzRFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6Lqr5L2T5rGgXHJcbiAgICBzdGF0aWMgZ2V0IEJvZHlQb29sKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbChDb25maWcuUG9vbFR5cGUuQm9keU1vZGVsKSBhcyBMYXlhLlNwcml0ZTNEW107XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQXdha2UoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlY292ZXIoa2V5OnN0cmluZywgaXRlbSwgY2xzVHlwZT8pe1xyXG4gICAgICAgIGlmKCFrZXkgfHwgIWl0ZW0pIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBpZihjbHNUeXBlKXtcclxuICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXJCeUNsYXNzKGNsc1R5cGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25maWcuUG9vbFR5cGUuRmd1aU9iajpcclxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtIGluc3RhbmNlb2YgZmFpcnlndWkuR09iamVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5GZ3VpUG9vbC5yZXR1cm5PYmplY3QoaXRlbSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlcihrZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRJdGVtKGtleTpzdHJpbmcsIGNsc1R5cGU/KXtcclxuICAgICAgICBpZihjbHNUeXBlKXtcclxuICAgICAgICAgICAgcmV0dXJuIExheWEuUG9vbC5nZXRJdGVtQnlDbGFzcyhrZXksIGNsc1R5cGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnJzpcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBMYXlhLlBvb2wuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQb29sKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIHJldHVybiBMYXlhLlBvb2wuZ2V0UG9vbEJ5U2lnbihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGVhclBvb2woa2V5OnN0cmluZyl7XHJcbiAgICAgICAgTGF5YS5Qb29sLmNsZWFyQnlTaWduKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsZWFyQWxsUG9vbHMoKXtcclxuICAgICAgICB0aGlzLkZndWlQb29sLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldE1vZGVsQnlUeXBlKHBvb2xUeXBlOnN0cmluZywgcGF0aDpzdHJpbmcsIGNhbGxiYWNrOkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICAgICAgbGV0IGhlYWQgPSB0aGlzLmdldEl0ZW0ocG9vbFR5cGUpIGFzIExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgaWYoIWhlYWQpe1xyXG4gICAgICAgICAgICBNYW5hZ2VyLlNwYXduTWFuYWdlci5Mb2FkM2RNb2RlbChcclxuICAgICAgICAgICAgICAgIHBhdGgsIFxyXG4gICAgICAgICAgICAgICAgKG1vZGVsOkNvbmZpZy5Nb2RlbERhdGFTdHJ1Y3QpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZCA9IG1vZGVsLm1zcDtcclxuICAgICAgICAgICAgICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgaGVhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzQXJnXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgaGVhZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEhlYWQocGF0aDpzdHJpbmcsIGNhbGxiYWNrOkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICAgICAgdGhpcy5nZXRNb2RlbEJ5VHlwZShDb25maWcuUG9vbFR5cGUuSGVhZE1vZGVsLCBwYXRoLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEJvZHkocGF0aDpzdHJpbmcsIGNhbGxiYWNrOkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICAgICAgdGhpcy5nZXRNb2RlbEJ5VHlwZShDb25maWcuUG9vbFR5cGUuQm9keU1vZGVsLCBwYXRoLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJldHVybkZndWlPYmooYm94OmZhaXJ5Z3VpLkdPYmplY3Qpe1xyXG4gICAgICAgIHRoaXMucmVjb3ZlcihDb25maWcuUG9vbFR5cGUuRmd1aU9iaiwgYm94KTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb2xlQmFzZXtcclxuICAgIEhlYWQ6ZmFpcnlndWkuR0xvYWRlcjtcclxuICAgIEJvZHlTbG90OmZhaXJ5Z3VpLkdPYmplY3Q7XHJcbiAgICBCb2R5OkxheWEuU2tlbGV0b247XHJcbiAgICAvLyBBbmk6TGF5YS5BbmltYXRvcjtcclxuICAgIFN0YXRlOnN0cmluZyA9IE1hbmFnZXIuU3RhdGVCYXNlLklERUw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaGVhZDpmYWlyeWd1aS5HTG9hZGVyLCBib2R5U2xvdDpmYWlyeWd1aS5HT2JqZWN0LCBib2R5PzpMYXlhLlNrZWxldG9uKXtcclxuICAgICAgICB0aGlzLkhlYWQgPSBoZWFkO1xyXG4gICAgICAgIHRoaXMuQm9keVNsb3QgPSBib2R5U2xvdDtcclxuICAgICAgICB0aGlzLkJvZHkgPSBib2R5O1xyXG4gICAgICAgIC8vIHRoaXMuQW5pID0gYm9keS5nZXRDb21wb25lbnQoTGF5YS5BbmltYXRvcikgYXMgTGF5YS5BbmltYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgQW5pU3RhdGUoKXtcclxuICAgIC8vICAgICBpZighdGhpcy5BbmkpIHJldHVybiBudWxsO1xyXG5cclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5BbmkuZ2V0Q3VycmVudEFuaW1hdG9yUGxheVN0YXRlKCk7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJSb2xlIGV4dGVuZHMgUm9sZUJhc2Uge1xyXG4gICAgcHJpdmF0ZSBtQ3VyckluZGV4Om51bWJlciA9IDA7XHJcbiAgICBtRmFjdG9yeTpMYXlhLlRlbXBsZXQ7XHJcbiAgICBzZXRCb2R5Q2FsbGJhY2s6RnVuY3Rpb247XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGhlYWQ6ZmFpcnlndWkuR0xvYWRlciwgYm9keVNsb3Q6ZmFpcnlndWkuR09iamVjdCl7XHJcbiAgICAgICAgc3VwZXIoaGVhZCwgYm9keVNsb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25BbmlUZW1wbGV0RXJyb3IoKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiUGxheWVyIGFuaVRlbXBsZXQgZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkJvZHlBbmlTdG9wKCl7XHJcbiAgICAgICAgLy/lvqrnjq/mkq3mlL5cclxuICAgICAgICAvLyB0aGlzLnBsYXlCb2R5QW5pKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5Qm9keUFuaShsb29wPzpib29sZWFuKXtcclxuICAgICAgICAvL+m7mOiupOW+queOr+aSreaUvlxyXG4gICAgICAgIGxvb3AgPSBudWxsICE9IGxvb3A/IGxvb3A6IHRydWU7XHJcbiAgICAgICAgdGhpcy5Cb2R5LnBsYXkoMCwgbG9vcCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgcGFyc2VUZW1wbGV0Q29tcGxldGUoY2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPyk6dm9pZCB7XHJcbiAgICAgICAgLy/liJvlu7rmqKHlvI/kuLox77yM5Y+v5Lul5ZCv55So5o2i6KOFXHJcbiAgICAgICAgdGhpcy5Cb2R5ID0gdGhpcy5tRmFjdG9yeS5idWlsZEFybWF0dXJlKDEpO1xyXG4gICAgICAgIHRoaXMuQm9keVNsb3QuZGlzcGxheU9iamVjdC5hZGRDaGlsZCh0aGlzLkJvZHkpO1xyXG4gICAgICAgIHRoaXMuQm9keS5vbihMYXlhLkV2ZW50LlNUT1BQRUQsIHRoaXMsIHRoaXMub25Cb2R5QW5pU3RvcCk7XHJcbiAgICAgICAgdGhpcy5wbGF5Qm9keUFuaSgpO1xyXG5cclxuICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEJvZHkoYm9keVBhdGg6c3RyaW5nLCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/LCAuLi5kYXRhKXtcclxuICAgICAgICB0aGlzLm1GYWN0b3J5ID0gTWFuYWdlci5Qb29sTWFuYWdlci5nZXRJdGVtKENvbmZpZy5Qb29sSXRlbUtleS5EcmVzc1RlbXBsYXRlLCBMYXlhLlRlbXBsZXQpO1xyXG4gICAgICAgIHRoaXMubUZhY3Rvcnkub24oTGF5YS5FdmVudC5DT01QTEVURSwgdGhpcywgdGhpcy5wYXJzZVRlbXBsZXRDb21wbGV0ZSwgW2NhbGxiYWNrLCB0aGlzQXJnXSk7XHJcbiAgICAgICAgdGhpcy5tRmFjdG9yeS5vbihMYXlhLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLm9uQW5pVGVtcGxldEVycm9yKTtcclxuICAgICAgICB0aGlzLm1GYWN0b3J5LmxvYWRBbmkoYm9keVBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhlYWQodXJsOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5IZWFkLnVybCA9IHVybDtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9sZU1hbmFnZXJ7XHJcbiAgICBzdGF0aWMgUExBWUVSID0gJ1BsYXllcic7XHJcbiAgICBzdGF0aWMgRU5FTVkgPSAnRW5lbXknO1xyXG4gICAgLy/liqjnlLvlkI1cclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUlNfTU9WRSA9IFsnd2FsaycsICdydW4nXTtcclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUlNfQVRUQUNLID0gWydhdHRhY2sxJywgJ2F0dGFjazInXTtcclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUlNfUExBWUVSX1NLSUxMID0gJ3NraWxsJztcclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUl9ERUFEID0gJ2RlYXRoJztcclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUl9XSU4gPSAnd2luJztcclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUl9JRExFID0gJ0ZpZ2h0SWRsZSc7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQU5JTUFUT1JfUFJPVk9DX0VORU1ZID0gJ2FwcGVhcic7XHJcblxyXG4gICAgc3RhdGljIFBsYXllcjpNYW5hZ2VyLlBsYXllclJvbGU7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGhhc1BsYXllcigpOmJvb2xlYW57XHJcbiAgICAgICAgaWYodGhpcy5QbGF5ZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ3JlYXRlIHJvbGUgZmlyc3QhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIENyZWF0ZVJvbGUoaGVhZDpmYWlyeWd1aS5HTG9hZGVyLCBoZWFkVXJsOnN0cmluZywgYm9keVNsb3Q6ZmFpcnlndWkuR09iamVjdCwgYm9keVBhdGg6c3RyaW5nLCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZighYm9keVBhdGggfHwgIWhlYWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5QbGF5ZXIgPSBuZXcgTWFuYWdlci5QbGF5ZXJSb2xlKGhlYWQsIGJvZHlTbG90KTtcclxuICAgICAgICB0aGlzLmNoYW5nZUhlYWQoaGVhZFVybCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VCb2R5KGJvZHlQYXRoLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mjaLlpLRcclxuICAgIHN0YXRpYyBjaGFuZ2VIZWFkKHVybDpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCF0aGlzLmhhc1BsYXllcikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLlBsYXllci5zZXRIZWFkKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mjaLoo4VcclxuICAgIHN0YXRpYyBjaGFuZ2VCb2R5KHBhdGg6c3RyaW5nLCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/LCAuLi5kYXRhKXtcclxuICAgICAgICBpZighdGhpcy5oYXNQbGF5ZXIpIHJldHVybjtcclxuICAgICAgICBpZighcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBNYW5hZ2VyLlBvb2xNYW5hZ2VyLnJlY292ZXIoQ29uZmlnLlBvb2xJdGVtS2V5LkRyZXNzVGVtcGxhdGUsIHRoaXMuUGxheWVyLm1GYWN0b3J5KTtcclxuICAgICAgICB0aGlzLlBsYXllci5zZXRCb2R5KHBhdGgsIGNhbGxiYWNrLCB0aGlzQXJnLCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0U3RhdGUoYW5pTmFtZTpzdHJpbmcsIHJvbGU6TWFuYWdlci5Sb2xlQmFzZSl7XHJcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BTklNQVRPUl9JRExFOlxyXG4gICAgICAgICAgICAgICAgcm9sZS5TdGF0ZSA9IE1hbmFnZXIuU3RhdGVCYXNlLklERUw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BTklNQVRPUl9ERUFEOlxyXG4gICAgICAgICAgICAgICAgcm9sZS5TdGF0ZSA9IE1hbmFnZXIuU3RhdGVCYXNlLkRFQUQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gXCIuLi9HYW1lU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2Vye1xyXG4gICAgcHVibGljIHN0YXRpYyBfaW5zdDpTY2VuZU1hbmFnZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEN1clNjZW5lOkxheWEuU2NlbmUzRCB8IExheWEuU2NlbmU7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZTJkU2NlbmUoKXtcclxuICAgICAgICBMYXlhLlNjZW5lLmxvYWQoR2FtZUNvbmZpZy5zdGFydFNjZW5lLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25PcGVuU2NlbmUpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGNyZWF0ZTNkU2NlbmUoKXtcclxuXHRcdC8v5re75YqgM0TlnLrmma9cclxuXHRcdGxldCBzY2VuZSA9IExheWEuc3RhZ2UuYWRkQ2hpbGQobmV3IExheWEuU2NlbmUzRCgpKSBhcyBMYXlhLlNjZW5lM0Q7XHJcblxyXG5cdFx0Ly/mt7vliqDnhafnm7jmnLpcclxuXHRcdGxldCBjYW1lcmEgPSAoc2NlbmUuYWRkQ2hpbGQobmV3IExheWEuQ2FtZXJhKDAsIDAuMSwgMTAwKSkpIGFzIExheWEuQ2FtZXJhO1xyXG5cdFx0Y2FtZXJhLnRyYW5zZm9ybS50cmFuc2xhdGUobmV3IExheWEuVmVjdG9yMygxLCAxLCAzKSk7XHJcblx0XHQvLyBjYW1lcmEudHJhbnNmb3JtLnJvdGF0ZShuZXcgTGF5YS5WZWN0b3IzKC0zMCwgMCwgMCksIHRydWUsIGZhbHNlKTtcclxuXHRcdGNhbWVyYS5jbGVhckZsYWcgPSBMYXlhLkJhc2VDYW1lcmEuQ0xFQVJGTEFHX0RFUFRIT05MWTtcclxuXHJcblx0XHQvL+a3u+WKoOaWueWQkeWFiVxyXG5cdFx0bGV0IGRpcmVjdGlvbkxpZ2h0ID0gc2NlbmUuYWRkQ2hpbGQobmV3IExheWEuRGlyZWN0aW9uTGlnaHQoKSkgYXMgTGF5YS5EaXJlY3Rpb25MaWdodDtcclxuXHRcdGRpcmVjdGlvbkxpZ2h0LmNvbG9yID0gbmV3IExheWEuVmVjdG9yMygwLjYsIDAuNiwgMC42KTtcclxuXHRcdGRpcmVjdGlvbkxpZ2h0LnRyYW5zZm9ybS53b3JsZE1hdHJpeC5zZXRGb3J3YXJkKG5ldyBMYXlhLlZlY3RvcjMoMSwgLTEsIDApKTtcclxuXHJcblx0XHR0aGlzLm9uT3BlblNjZW5lKHNjZW5lKTtcclxuXHR9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb25PcGVuU2NlbmUoc2NlbmU/OkxheWEuU2NlbmUzRCB8IExheWEuU2NlbmUpe1xyXG5cdFx0aWYoc2NlbmUpe1xyXG5cdFx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHNjZW5lKTtcclxuICAgICAgICAgICAgdGhpcy5DdXJTY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2NlbmUuYWRkQ29tcG9uZW50KE1hbmFnZXIuU2NlbmVNYW5hZ2VyKTtcclxuICAgICAgICAgICAgc2NlbmUuYWRkQ29tcG9uZW50KE1hbmFnZXIuSHR0cE1hbmFnZXIpO1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRDb21wb25lbnQoTWFuYWdlci5VSU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRDb21wb25lbnQoTWFuYWdlci5EYXRhTWFuYWdlcik7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZENvbXBvbmVudChHYW1lU2NlbmUpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vQ29tbW9uL1V0aWxzXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCBHRXZlbnQgZnJvbSBcIi4uL0NvbW1vbi9HRXZlbnRcIjtcclxuXHJcbi8vY29jb3PnlKhcclxuLy8gbGV0IGxvYWRlZFBhY2thZ2U6e1trZXk6c3RyaW5nXTpib29sZWFufSA9IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXduTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBsb2FkM2RNb2RlbDtcclxuICAgIHByaXZhdGUgc3RhdGljIHBvb2xPYmpzOntba2V5OnN0cmluZ106IGFueX07XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuICAgIFxyXG4gICAgLy/liqDovb3mqKHlnotcclxuICAgIHN0YXRpYyBMb2FkM2RNb2RlbChwYXRoOnN0cmluZywgY29tcGxldGVDYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZighTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUgfHwgIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gTGF5YS5sb2FkZXIuY3JlYXRlKHBhdGgsIExheWEuSGFuZGxlci5jcmVhdGUodGhpc0FyZywgY29tcGxldGVDYWxsYmFjaykpO1xyXG5cclxuICAgICAgICBMYXlhLlNwcml0ZTNELmxvYWQocGF0aCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKT0+e1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgY29tcGxldGVDYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgIGxldCBzcCA9IENvbW1vbi5SZXNvdXJjZS5nZXRSZXMocGF0aCk7XHJcbiAgICAgICAgICAgICAgICBpZighc3ApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbXNwID0gTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUuYWRkQ2hpbGQoc3ApIGFzIExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pID0gbXNwLmdldENvbXBvbmVudChMYXlhLkFuaW1hdG9yKSBhcyBMYXlhLkFuaW1hdG9yO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaVN0YXRlOkxheWEuQW5pbWF0b3JQbGF5U3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpZihhbmkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaVN0YXRlID0gYW5pLmdldEN1cnJlbnRBbmltYXRvclBsYXlTdGF0ZSgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBtb2RlbERhdGEgPSBuZXcgQ29uZmlnLk1vZGVsRGF0YVN0cnVjdChtc3AsIGFuaSwgYW5pU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjay5jYWxsKHRoaXNBcmcsIG1vZGVsRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqDovb3nvZHmoLxcclxuICAgIHN0YXRpYyBMb2FkM2RNZXNoKHBhdGg6c3RyaW5nLCBjb21wbGV0ZUNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKCFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIENvbW1vbi5SZXNvdXJjZS5sb2FkKHBhdGgsIHRoaXNBcmcsIGNvbXBsZXRlQ2FsbGJhY2ssIG51bGwsIExheWEuTG9hZGVyLk1FU0gpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqg6L295p2Q6LSoXHJcbiAgICBzdGF0aWMgTG9hZE1hdGVyaWFsKHBhdGg6c3RyaW5nLCBjb21wbGV0ZUNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKCFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIENvbW1vbi5SZXNvdXJjZS5sb2FkKHBhdGgsIHRoaXNBcmcsIGNvbXBsZXRlQ2FsbGJhY2ssIG51bGwsIExheWEuTG9hZGVyLk1BVEVSSUFMKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WKqOaAgeWKoOi9vVVJ5YyFICBjb2Nvc+eUqFxyXG4gICAgLy8gc3RhdGljIExvYWRVSVBhY2thZ2UoX3BhdGgsIGNhbGxiYWNrKSB7XHJcbiAgICAvLyAgICAgaWYodHlwZW9mKF9wYXRoKSAhPSBcInN0cmluZ1wiKSByZXR1cm47XHJcblxyXG4gICAgLy8gICAgIGlmKGxvYWRlZFBhY2thZ2VbX3BhdGhdKXtcclxuICAgIC8vICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xyXG4gICAgLy8gICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1lbHNle1xyXG4gICAgLy8gICAgICAgICBmYWlyeWd1aS5VSVBhY2thZ2UuYWRkUGFja2FnZShfcGF0aCwgKGVycik9PntcclxuICAgIC8vICAgICAgICAgICAgIGlmKGVycil7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGxvYWRlZFBhY2thZ2VbX3BhdGhdID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8v5LuO5rGg5Lit5Yib5bu65a+56LGhXHJcbiAgICBzdGF0aWMgQ3JlYXRlT2JqZWN0RnJvbVBvb2woX3BhdGg6c3RyaW5nLCBfc2xvdDpmYWlyeWd1aS5HR3JhcGgpIHtcclxuICAgICAgICBpZighX3BhdGggfHwgIV9zbG90KSByZXR1cm47XHJcblxyXG4gICAgICAgIC8v5LuO5rGg5Lit5Yib5bu65LiA5LiqU2tlbGV0b27lr7nosaFcclxuICAgICAgICBsZXQgb2JqID0gTGF5YS5Qb29sLmdldEl0ZW0oX3BhdGgpO1xyXG4gICAgICAgIGlmKCFvYmopIHJldHVybjtcclxuXHJcbiAgICAgICAgLy/nlJ/miJDllK/kuIBnaWRcclxuICAgICAgICBpZighb2JqWyckUG9vbEdJRCddKXtcclxuICAgICAgICAgICAgb2JqWyckUG9vbEdJRCddID0gTGF5YS5VdGlscy5nZXRHSUQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIW9ialsnJFBhdGgnXSl7XHJcbiAgICAgICAgICAgIG9ialsnJFBhdGgnXSA9IF9wYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvb2xPYmpzW29ialsnJFBvb2xHSUQnXV0gPSBvYmo7XHJcblxyXG4gICAgICAgIF9zbG90LmRpc3BsYXlPYmplY3QuYWRkQ2hpbGQob2JqKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICAvL+S7juWIm+W7ulNwaW5l5oiWRHJhZ29uQm9uZeWKqOeUu1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IF9wYXRoIOi3r+W+hFxyXG4gICAgICogQHBhcmFtICB7ZmFpcnlndWkuR0dyYXBofSBfc2xvdCDniLblr7nosaEgZmFpcnlndWkgZ3JhcGhcclxuICAgICAqIEBwYXJhbSAge3N0cmluZyB8IG51bWJlcn0gX25hbWUg5Yqo55S75ZCN5a2X5oiW6ICF57Si5byVXHJcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBfaXNMb29wIOaYr+WQpuW+queOr+aSreaUvu+8jOm7mOiupOW+queOr+aSreaUvlxyXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gX2lzUGxheSDmmK/lkKbnq4vljbPmkq3mlL7vvIzpu5jorqTmkq3mlL5cclxuICAgICAqIEByZXR1cm4ge3NwLlNrZWxldG9ufVxyXG4gICAgICovXHJcbiAgICAvLyBzdGF0aWMgQ3JlYXRlU3BpbmUoX3BhdGgsIF9zbG90LCBfbmFtZSwgX2lzTG9vcCwgX2lzUGxheSkge1xyXG4gICAgLy8gICAgIGlmKHR5cGVvZihfcGF0aCkgIT0gXCJzdHJpbmdcIiB8fCAhX3Nsb3QgfHwgIV9zbG90Lm5vZGUpIHJldHVyblxyXG5cclxuICAgIC8vICAgICBsZXQgc2tlbGV0b24gPSBfc2xvdC5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAvLyAgICAgaWYoc2tlbGV0b24gPT0gbnVsbCl7XHJcbiAgICAvLyAgICAgICAgIHNrZWxldG9uID0gX3Nsb3Qubm9kZS5hZGRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgc2tlbGV0b24ucHJlbXVsdGlwbGllZEFscGhhID0gZmFsc2U7XHJcblxyXG4gICAgLy8gICAgIGxldCBvblByb2Nlc3MgPSBmdW5jdGlvbihjb21wbGV0ZUNvdW50LCB0b3RhbENvdW50LCBpdGVtKSB7fVxyXG4gICAgLy8gICAgIGxldCBjYiA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcclxuICAgIC8vICAgICAgICAgc2tlbGV0b24uc2tlbGV0b25EYXRhID0gcmVzO1xyXG5cclxuICAgIC8vICAgICAgICAgX2lzTG9vcCA9IF9pc0xvb3A/IF9pc0xvb3A6IHRydWU7XHJcbiAgICAvLyAgICAgICAgIGlmKHNrZWxldG9uLnNrZWxldG9uRGF0YSAmJiBza2VsZXRvbi5za2VsZXRvbkRhdGEubG9hZGVkICYmIF9uYW1lKXtcclxuICAgIC8vICAgICAgICAgICAgIHNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBfbmFtZSwgX2lzTG9vcClcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgc2tlbGV0b24ucGF1c2VkID0gX2lzUGxheSA9PSBmYWxzZVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgY2MubG9hZGVyLmxvYWRSZXMoX3BhdGgsIHNwLlNrZWxldG9uRGF0YSwgb25Qcm9jZXNzLCBjYilcclxuXHJcblxyXG4gICAgLy8gICAgIHJldHVybiBza2VsZXRvblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8v6YCa6L+H6aKE5Yi25L2T5Yib5bu6U3BpbmVcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBfcGF0aCBQcmVmYWLot6/lvoRcclxuICAgICAqIEBwYXJhbSAge2ZhaXJ5Z3VpLkdHcmFwaH0gX3Nsb3Qg54i25a+56LGhIGZhaXJ5Z3VpIGdyYXBoXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsbGJhY2sg5Yqo55S75ZCN5a2X5oiW6ICF57Si5byVXHJcbiAgICAgKi9cclxuICAgIC8vIHN0YXRpYyBDcmVhdGVTcGluZUZyb21QcmVmYWIoX3BhdGgsIF9zbG90LCBjYWxsYmFjaykge1xyXG4gICAgLy8gICAgIGlmKHR5cGVvZihfcGF0aCkgIT0gXCJzdHJpbmdcIiB8fCAhX3Nsb3QgfHwgIV9zbG90Lm5vZGUpIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgLyoqIEB0eXBlIHtzcC5Ta2VsZXRvbn0gKi9cclxuICAgIC8vICAgICAvLyBsZXQgc2tlbGV0b247XHJcbiAgICAvLyAgICAgY2MubG9hZGVyLmxvYWRSZXMoX3BhdGgsIGNjLlByZWZhYiwgZnVuY3Rpb24oZXJyLCBwcmVmYWIpIHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGxldCBwcmVmYWJOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgIC8vICAgICAgICAgICAgIC8qKiBAdHlwZSB7c3AuU2tlbGV0b259ICovXHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgc2tlbGV0b24gPSAgcHJlZmFiTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgLy8gICAgICAgICAgICAgX3Nsb3Qubm9kZS5hZGRDaGlsZChwcmVmYWJOb2RlKTtcclxuICAgIC8vICAgICAgICAgICAgIHByZWZhYk5vZGUucG9zaXRpb24gPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKHNrZWxldG9uKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBHRXZlbnQuRGlzcGF0Y2goR0V2ZW50LlNQSU5FX1BSRUZBQl9MT0FERUQpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBzdGF0aWMgTG9hZFZpZXcocGtnOnN0cmluZywgY29tOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXBrZyB8fCAhY29tKSByZXR1cm47XHJcblxyXG4gICAgICAgIENvbW1vbi5SZXNvdXJjZS5hZGRVaVBhY2thZ2UocGtnKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZ3Jvb3RJbnN0ID0gZmFpcnlndWkuR1Jvb3QuaW5zdDtcclxuICAgICAgICBsZXQgdWkgPSBmYWlyeWd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KHBrZywgY29tKS5hc0NvbTtcclxuICAgICAgICBpZih1aSl7XHJcbiAgICAgICAgICAgIGdyb290SW5zdC5hZGRDaGlsZCh1aSk7XHJcbiAgICAgICAgICAgIHVpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy/lsI/muLjmiI/pgILphY1cclxuICAgICAgICAgICAgdWkuc2V0U2l6ZShncm9vdEluc3Qud2lkdGgsIGdyb290SW5zdC5oZWlnaHQpO1xyXG4gICAgICAgICAgICB1aS5zZXRYWSgwLCAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWwgdG8gYWRkIHVpIHBhY2thZ2U6IFwiLCBwa2csIGNvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdWk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZUJhc2V7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgSURFTCA9ICdJREVMJzsgIC8v5b6F5py6XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgREVBRCA9ICdERUFEJztcclxuICAgIHN0YXRpYyByZWFkb25seSBCQUNLX1BBU1NFRCA9ICdCQUNLX1BBU1NFRCc7ICAgIC8v5bey57yp5Zue5a6J5YWo5Yy6XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgTU9WRV9GT1JXQVJEID0gJ01PVkVfRk9SV0FSRCc7ICAgIC8v5YmN5Ly4XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgTU9WRV9CQUNLID0gJ01PVkVfQkFDSyc7ICAgIC8v57yp5ZueXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9VSS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vQ29tbW9uL1V0aWxzXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5sZXQgdGltZXJJZCA9IC0xXHJcbi8v6K6h5pe25Zmo5rGgXHJcbmxldCB0aW1lclBvb2wgPSBuZXcgQXJyYXk8VGltZXI+KClcclxubGV0IHRpbWVyTGlzdCA9IG5ldyBBcnJheTxUaW1lcj4oKVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVyIHtcclxuICAgIHB1YmxpYyBJZDpudW1iZXI7XHJcbiAgICBwdWJsaWMgTWF4Q2Q6bnVtYmVyO1xyXG4gICAgcHVibGljIEN1ckNkID0gMDtcclxuICAgIHB1YmxpYyBPblN0YXJ0OkZ1bmN0aW9uO1xyXG4gICAgcHVibGljIE9uVXBkYXRlOkZ1bmN0aW9uO1xyXG4gICAgcHVibGljIE9uRW5kOkZ1bmN0aW9uO1xyXG4gICAgcHVibGljIFRhcmdldDtcclxuICAgIHB1YmxpYyBUaGlzQXJnOkNvbW1vbi5FdmVudERpc3BhdGhlcjtcclxuICAgIHB1YmxpYyBFbmRUaW1lID0gMDtcclxuICAgIHB1YmxpYyBJc1J1biA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzU3RhcnQgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0FsaXZlID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBTdGFydFRpbWU6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBhdXRvUmVtb3ZlOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEluaXQoY2Q6bnVtYmVyLCBzdGFydENhbGxiYWNrOkZ1bmN0aW9uLCB1cGRhdGVDYWxsYmFjazpGdW5jdGlvbiwgZW5kQ2FsbGJhY2s6RnVuY3Rpb24sIHRhcmdldCwgdGhpc0FyZywgYXV0b1JlbW92ZT86Ym9vbGVhbiwgYXV0b1N0YXJ0Pzpib29sZWFuKXtcclxuICAgICAgICB0aGlzLklkID0gdGltZXJJZCArIDFcclxuICAgICAgICB0aGlzLk1heENkID0gY2RcclxuICAgICAgICB0aGlzLkN1ckNkID0gMFxyXG4gICAgICAgIHRoaXMuT25TdGFydCA9IHN0YXJ0Q2FsbGJhY2tcclxuICAgICAgICB0aGlzLk9uVXBkYXRlID0gdXBkYXRlQ2FsbGJhY2tcclxuICAgICAgICB0aGlzLk9uRW5kID0gZW5kQ2FsbGJhY2tcclxuICAgICAgICB0aGlzLlRhcmdldCA9IHRhcmdldFxyXG4gICAgICAgIHRoaXMuVGhpc0FyZyA9IHRoaXNBcmdcclxuICAgICAgICB0aGlzLkVuZFRpbWUgPSAwXHJcbiAgICAgICAgdGhpcy5Jc1J1biA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5Jc1N0YXJ0ID0gZmFsc2VcclxuICAgICAgICB0aGlzLklzQWxpdmUgPSB0cnVlXHJcbiAgICAgICAgLy/pu5jorqToh6rliqjplIDmr4FcclxuICAgICAgICB0aGlzLmF1dG9SZW1vdmUgPSBhdXRvUmVtb3ZlICE9IG51bGw/IGF1dG9SZW1vdmU6IHRydWU7XHJcbiAgICAgICAgLy/pu5jorqToh6rliqjlvIDlp4tcclxuICAgICAgICBpZihhdXRvU3RhcnQgIT0gZmFsc2Upe1xyXG4gICAgICAgICAgICB0aGlzLlN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzQWxpdmUpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY3VycnRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGlmKGN1cnJ0aW1lIDwgdGhpcy5FbmRUaW1lKXtcclxuICAgICAgICAgICAgdGhpcy5DdXJDZCA9ICh0aGlzLkVuZFRpbWUgLSBjdXJydGltZSkgKiAwLjAwMVxyXG4gICAgICAgICAgICBpZih0eXBlb2YodGhpcy5PblVwZGF0ZSkgPT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuT25VcGRhdGUuY2FsbCh0aGlzLlRoaXNBcmcsIHRoaXMuQ3VyQ2QsIHRoaXMuVGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuVXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLklzUnVuID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5Jc1N0YXJ0ID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZih0aGlzLk9uRW5kKSA9PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5PbkVuZC5jYWxsKHRoaXMuVGhpc0FyZywgdGhpcy5UYXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmF1dG9SZW1vdmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBTdGFydCgpe1xyXG4gICAgICAgIHRoaXMuSXNSdW4gPSB0cnVlXHJcblxyXG4gICAgICAgIGlmKCF0aGlzLklzU3RhcnQpe1xyXG4gICAgICAgICAgICB0aGlzLklzU3RhcnQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB0aGlzLlN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIC8v6K6h5pe257uT5p2f5pe26Ze0XHJcbiAgICAgICAgICAgIHRoaXMuRW5kVGltZSA9IHRoaXMuU3RhcnRUaW1lICsgdGhpcy5NYXhDZCAqIDEwMDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZih0aGlzLk9uU3RhcnQpID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5PblN0YXJ0LmNhbGwodGhpcy5UaGlzQXJnLCB0aGlzLlRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlc2V0Q2QoY2Qpe1xyXG4gICAgICAgIGlmKHR5cGVvZihjZCkgIT0gXCJudW1iZXJcIikgcmV0dXJuXHJcblxyXG4gICAgICAgIHRoaXMuTWF4Q2QgPSBjZFxyXG4gICAgICAgIHRoaXMuRW5kVGltZSA9IERhdGUubm93KCkgKyB0aGlzLk1heENkICogMTAwMFxyXG4gICAgfVxyXG5cclxuICAgIFJlbW92ZSgpe1xyXG4gICAgICAgIC8vIHRoaXMuTWF4Q2QgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMuQ3VyQ2QgPSAwO1xyXG4gICAgICAgIHRoaXMuT25TdGFydCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5PblVwZGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5PbkVuZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5UYXJnZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuVGhpc0FyZyA9IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5FbmRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLklzUnVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Jc1N0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Jc0FsaXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8v56e75Yqo5Yiw6aaW5L2NXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGltZXJQb29sLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgaWYoaW5kZXggPiAwKXtcclxuICAgICAgICAgICAgdGltZXJQb29sLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRpbWVyUG9vbC51bnNoaWZ0KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVyTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSAge30gdGhpc0FyZyDmiafooYzln59cclxuICAgICAqIEBwYXJhbSAge251bWJlcn0gY2RcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBzdGFydENhbGxiYWNrIOW8gOWni+Wbnuiwg1xyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IHVwZGF0ZUNhbGxiYWNrIOi/h+eoi+Wbnuiwg1xyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGVuZENhbGxiYWNrIOe7k+adn+Wbnuiwg1xyXG4gICAgICogQHBhcmFtICB7fSB0YXJnZXQg6K6h5pe255uu5qCHXHJcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBhdXRvUmVtb3ZlIOaYr+WQpuiHquWKqOWIt+aWsO+8jOm7mOiupOiHquWKqFxyXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gYXV0b1N0YXJ0IOaYr+WQpuiHquWKqOW8gOWni++8jOm7mOiupOiHquWKqFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgTmV3VGltZXIodGhpc0FyZywgY2Q6bnVtYmVyLCBzdGFydENhbGxiYWNrOkZ1bmN0aW9uLCB1cGRhdGVDYWxsYmFjazpGdW5jdGlvbiwgZW5kQ2FsbGJhY2s6RnVuY3Rpb24sIHRhcmdldD8sIGF1dG9SZW1vdmU/OmJvb2xlYW4sIGF1dG9TdGFydD86Ym9vbGVhbil7XHJcbiAgICAgICAgbGV0IHQgPSB0aW1lclBvb2xbMF07XHJcbiAgICAgICAgaWYoIXQgfHwgdC5Jc0FsaXZlKXtcclxuICAgICAgICAgICAgdCA9IG5ldyBUaW1lcigpXHJcbiAgICAgICAgICAgIHRpbWVyTGlzdFt0LklkXSA9IHRcclxuICAgICAgICAgICAgdGltZXJQb29sLnB1c2godClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdC5Jbml0KGNkLCBzdGFydENhbGxiYWNrLCB1cGRhdGVDYWxsYmFjaywgZW5kQ2FsbGJhY2ssIHRhcmdldCwgdGhpc0FyZywgYXV0b1JlbW92ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBSZW1vdmVUaW1lcih0aGlzQXJnOkNvbW1vbi5FdmVudERpc3BhdGhlcil7XHJcbiAgICAgICAgaWYoIXRoaXNBcmcpIHJldHVybjtcclxuICAgICAgICB0aW1lclBvb2wuZm9yRWFjaCh0aW1lcj0+e1xyXG4gICAgICAgICAgICBpZih0aW1lci5UaGlzQXJnICYmIHRpbWVyLlRoaXNBcmcuaWQgPT0gdGhpc0FyZy5pZCl7XHJcbiAgICAgICAgICAgICAgICB0aW1lci5SZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBSZW1vdmVBbGxUaW1lcigpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aW1lckxpc3Qpe1xyXG4gICAgICAgICAgICB0aW1lckxpc3RbaV0uUmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBVcGRhdGUoKXtcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGltZXJMaXN0KXtcclxuICAgICAgICAgICAgaWYodGltZXJMaXN0W2ldLklzQWxpdmUpe1xyXG4gICAgICAgICAgICAgICAgdGltZXJMaXN0W2ldLlVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDbGVhckFsbFRpbWVyKCl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRpbWVyTGlzdCl7XHJcbiAgICAgICAgICAgIHRpbWVyTGlzdFtpXS5SZW1vdmUoKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRpbWVyTGlzdFtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9VSS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vQ29tbW9uL1V0aWxzXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuLy/lvLrliLblvJXlr7xcclxubGV0IEd1aWRlTGlzdCA9IG5ldyBBcnJheTxmYWlyeWd1aS5HQ29tcG9uZW50PigpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJTWFuYWdlciBleHRlbmRzIE1hbmFnZXIuQmFzZU1hbmFnZXIge1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfaW5zdDpVSU1hbmFnZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3QoKXtcclxuICAgICAgICBpZighdGhpcy5faW5zdCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3QgPSBuZXcgVUlNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdDtcclxuICAgIH1cclxuXHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgVUlNYW5hZ2VyLl9pbnN0ID0gdGhpcztcclxuICAgICAgICBVSU1hbmFnZXIuc2V0VWlLZXlzKCk7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRVaUtleXMoKXtcclxuICAgICAgICBsZXQgY2ZnID0gQ29uZmlnLlZpZXdLaXQ7XHJcbiAgICAgICAgVUkuTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlci5pbml0KGNmZy5Mb2FkaW5nUHJvZ3Jlc3MuS2V5LCBVSS5Mb2FkaW5nUHJvZ3Jlc3NWaWV3KTtcclxuICAgICAgICBVSS5Mb2FkaW5nQ29udHJvbGxlci5pbml0KGNmZy5Mb2FkaW5nTWFpbi5LZXksIFVJLkxvYWRpbmdWaWV3KTtcclxuICAgICAgICBVSS5DaG9vc2VTZXJ2aWNlQ29udHJvbGxlci5pbml0KGNmZy5DaG9vc2VTZXJ2aWNlLktleSwgVUkuQ2hvb3NlU2VydmljZVZpZXcpO1xyXG4gICAgICAgIFVJLlB1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXIuaW5pdChjZmcuUHVibGljQ29uZmlybWF0aW9uLktleSwgVUkuUHVibGljQ29uZmlybWF0aW9uVmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkTGlzdGVuZXJzKCl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIENvbmZpZy5WaWV3S2l0KXtcclxuICAgICAgICAgICAgbGV0IGNmZzpDb25maWcuVmlld0NvbmZpZyA9IENvbmZpZy5WaWV3S2l0W2ldO1xyXG4gICAgICAgICAgICBpZihjZmcgJiYgY2ZnLktleSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoY2ZnLktleSwgdGhpcy5nb09wZW4uYmluZCh0aGlzLCBjZmcuS2V5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uVWlOb3RpY2VFaWQuQ2xvc2VDb250cm9sbGVyLCB0aGlzLm9uQ2xvc2VDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlVpTm90aWNlRWlkLk9wZW5GdWxsU2NyZWVuLCB0aGlzLm9uT3BlbkZ1bGxzY3JlZW4pO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uVWlOb3RpY2VFaWQuQ2xvc2VGdWxsU2NyZWVuLCB0aGlzLm9uQ2xvc2VGdWxsc2NyZWVuKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlUG9wdXAsIHRoaXMub3Blbk5leHRQb3B1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ29PcGVuKGtleSwgLi4uZGF0YSl7XHJcbiAgICAgICAgbGV0IGMgPSBDb3JlLkN0cmxNYXBBcnJheVtrZXldIGFzIHR5cGVvZiBDb3JlLkNvbnRyb2xsZXI7XHJcbiAgICAgICAgaWYoYyl7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkNvbnRyb2xsZXIoYywgLi4uZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvcGVuQ29udHJvbGxlcihjdHJsOnR5cGVvZiBDb3JlLkNvbnRyb2xsZXIsIC4uLl9kYXRhKSB7XHJcbiAgICAgICAgaWYoIWN0cmwpIHJldHVyblxyXG5cclxuICAgICAgICBsZXQgY0tleSA9IGN0cmwuS2V5O1xyXG4gICAgICAgIGxldCBjdHJsSW5zdCA9IENvcmUuT3BlbmVkQ3RybFtjS2V5XTtcclxuICAgICAgICBpZighY3RybEluc3QgfHwgY3RybEluc3QuSXNEZXN0cm95ZWQpe1xyXG4gICAgICAgICAgICBjdHJsSW5zdCA9IG5ldyBjdHJsKGN0cmwuS2V5LCBjdHJsLnZpZXcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvL+WPquWFgeiuuOWIm+W7uuS4gOS4quWunuS+i1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udHJvbGxlciBoYXMgb3BlbmVkOiAnLCBjS2V5KTtcclxuICAgICAgICAgICAgY3RybEluc3Quc2hvdyguLi5fZGF0YSk7XHJcbiAgICAgICAgICAgIGZhaXJ5Z3VpLkdSb290Lmluc3Quc2V0Q2hpbGRJbmRleChDb3JlLlZpZXdNYXBbY0tleV0uVUksIGZhaXJ5Z3VpLkdSb290Lmluc3QubnVtQ2hpbGRyZW4pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja09wZW5DdHJsSW5zdChjdHJsSW5zdCwgLi4uX2RhdGEpO1xyXG5cclxuICAgICAgICAvLyBsZXQgZG9uZSA9IGN0cmxJbnN0LmNyZWF0ZSgpO1xyXG4gICAgICAgIC8vIGlmKGRvbmUpe1xyXG4gICAgICAgIC8vICAgICBjdHJsSW5zdC5vcGVuKC4uLl9kYXRhKVxyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwiT3BlbiBjb250cm9sbGVyIGZhaWxlZFwiKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gLy/orr7nva7muLLmn5PlsYLnuqdcclxuICAgICAgICAvLyBpZihjdHJsSW5zdC5Jc1BvcHVwKXtcclxuICAgICAgICAvLyAgICAgY3RybEluc3QuU29ydGluZ09yZGVyKENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuUG9wdXApO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIGN0cmxJbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNoZWNrT3BlbkN0cmxJbnN0KGN0cmxJbnN0OkNvcmUuQ29udHJvbGxlciwgLi4uX2RhdGEpe1xyXG4gICAgICAgIGlmKGN0cmxJbnN0LklzUG9wdXApe1xyXG4gICAgICAgICAgICBjdHJsSW5zdCA9IHRoaXMuZ2V0TmV4dFBvcHVwKGN0cmxJbnN0LCAuLi5fZGF0YSk7XHJcbiAgICAgICAgICAgIGlmKCFjdHJsSW5zdCkgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRvbmUgPSBjdHJsSW5zdC5jcmVhdGUoKTtcclxuICAgICAgICBpZihkb25lKXtcclxuICAgICAgICAgICAgY3RybEluc3Qub3BlbiguLi5fZGF0YSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk9wZW4gY29udHJvbGxlciBmYWlsZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6K6+572u5riy5p+T5bGC57qnXHJcbiAgICAgICAgaWYoY3RybEluc3QuSXNQb3B1cCl7XHJcbiAgICAgICAgICAgIGN0cmxJbnN0LlNvcnRpbmdPcmRlcihDb25maWcuVUlDb25maWcuU29ydGluZ09yZGVyLlBvcHVwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdHJsSW5zdDtcclxuICAgIH1cclxuXHJcbiAgICAvL+WFs+mXreeVjOmdouWkhOeQhlxyXG4gICAgc3RhdGljIG9uQ2xvc2VDb250cm9sbGVyKGNrZXk6c3RyaW5nKXtcclxuICAgICAgICBsZXQgY3RybCA9IENvcmUuT3BlbmVkQ3RybFtja2V5XSBhcyBDb3JlLkNvbnRyb2xsZXI7XHJcbiAgICAgICAgLy/muIXpmaTmiYDmnInorqHml7blmahcclxuICAgICAgICBNYW5hZ2VyLlRpbWVyTWFuYWdlci5SZW1vdmVUaW1lcihjdHJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WFqOWxj+eVjOmdouWkhOeQhlxyXG4gICAgc3RhdGljIG9uT3BlbkZ1bGxzY3JlZW4oY2tleTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuaGlkZU90aGVyVUkoY2tleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG9uQ2xvc2VGdWxsc2NyZWVuKGNrZXk6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnNob3dPdGhlclVJKGNrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlT3RoZXJVSShja2V5OnN0cmluZyl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIENvcmUuT3BlbmVkQ3RybCl7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gY2tleSkgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBsZXQgY3RybCA9IENvcmUuT3BlbmVkQ3RybFtpXTtcclxuICAgICAgICAgICAgaWYoY3RybCAmJiBjdHJsLklzU2hvdyl7XHJcbiAgICAgICAgICAgICAgICBjdHJsLlZpZXcuVUkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93T3RoZXJVSShja2V5OnN0cmluZyl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIENvcmUuT3BlbmVkQ3RybCl7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gY2tleSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN0cmwgPSBDb3JlLk9wZW5lZEN0cmxbaV07XHJcbiAgICAgICAgICAgIGlmKGN0cmwgJiYgY3RybC5Jc1Nob3cpe1xyXG4gICAgICAgICAgICAgICAgY3RybC5WaWV3LlVJLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0YXRpYyBvcGVuR3VpZGUgPSBmdW5jdGlvbihndWlkZU5hbWUsIHRhcmdldENvbSl7XHJcbiAgICAvLyAgICAgaWYoIWd1aWRlTmFtZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vICAgICBsZXQgZ3Jvb3RJbnN0ID0gZmFpcnlndWkuR1Jvb3QuaW5zdFxyXG5cclxuICAgIC8vICAgICBsZXQgZ3VpZGVDb20gPSBmYWlyeWd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KENvbmZpZy5WaWV3S2l0Lkd1aWRlci5Qa2csIGd1aWRlTmFtZSkuYXNDb21cclxuICAgIC8vICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXSA9IGd1aWRlQ29tXHJcblxyXG4gICAgLy8gICAgIGdyb290SW5zdC5hZGRDaGlsZChndWlkZUNvbSlcclxuICAgIC8vICAgICBndWlkZUNvbS5zZXRTaXplKGdyb290SW5zdC53aWR0aCwgZ3Jvb3RJbnN0LmhlaWdodClcclxuICAgIC8vICAgICBsZXQgZ3VpZGVNYXNrID0gZ3VpZGVDb20uZ2V0Q2hpbGQoXCJNYXNrXCIpXHJcbiAgICAvLyAgICAgaWYodGFyZ2V0Q29tKXtcclxuICAgIC8vICAgICAgICAgZ3VpZGVNYXNrLnNldFhZKHRhcmdldENvbS54LCB0YXJnZXRDb20ueSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3RhdGljIGNsb3NlR3VpZGUgPSBmdW5jdGlvbihndWlkZU5hbWUpe1xyXG4gICAgICAgIGlmKCFHdWlkZUxpc3RbZ3VpZGVOYW1lXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgR3VpZGVMaXN0W2d1aWRlTmFtZV0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuZXh0R3VpZGUgPSBmdW5jdGlvbihndWlkZU5hbWUpe1xyXG4gICAgICAgIGlmKCFHdWlkZUxpc3RbZ3VpZGVOYW1lXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgaW4gR3VpZGVMaXN0KXtcclxuICAgICAgICAgICAgR3VpZGVMaXN0W2d1aWRlTmFtZV0gJiYgR3VpZGVMaXN0W2d1aWRlTmFtZV0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBQb3B1cE1hcCA9IG5ldyBBcnJheTx0eXBlb2YgQ29yZS5Db250cm9sbGVyPigpO1xyXG4gICAgc3RhdGljIFBvcHVwUXVldWUgPSBuZXcgQXJyYXk8Q29yZS5Db250cm9sbGVyPigpO1xyXG4gICAgc3RhdGljIFBvcHVwRGF0YSA9IHt9O1xyXG5cclxuXHJcbiAgICAvL+aJk+W8gOW8ueeql1xyXG4gICAgc3RhdGljIG9wZW5Qb3B1cCAocG9wdXBDdHJsOnR5cGVvZiBDb3JlLkNvbnRyb2xsZXIsIGRhdGEpe1xyXG4gICAgICAgIGlmKCFwb3B1cEN0cmwpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoVUlNYW5hZ2VyLlBvcHVwTWFwLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBNYXAucHVzaChwb3B1cEN0cmwpO1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBEYXRhW3BvcHVwQ3RybC5LZXldID0gZGF0YTtcclxuICAgICAgICAgICAgbGV0IHBvcHVwID0gVUlNYW5hZ2VyLlBvcHVwTWFwLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuQ29udHJvbGxlcihwb3B1cCwgVUlNYW5hZ2VyLlBvcHVwRGF0YVtwb3B1cC5LZXldKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5Db250cm9sbGVyKHBvcHVwQ3RybCwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldE5leHRQb3B1cCAocG9wdXBDdHJsOkNvcmUuQ29udHJvbGxlciwgLi4uZGF0YSl7XHJcbiAgICAgICAgaWYoIXBvcHVwQ3RybCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZihVSU1hbmFnZXIuUG9wdXBRdWV1ZS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLlBvcHVwUXVldWUucHVzaChwb3B1cEN0cmwpO1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBEYXRhW3BvcHVwQ3RybC5tdWx0aXRvbktleV0gPSBkYXRhO1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gVUlNYW5hZ2VyLlBvcHVwUXVldWUuc2hpZnQoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHBvcHVwQ3RybDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIDkuIvkuIDkuKrlvLnnqpdcclxuICAgIHByaXZhdGUgc3RhdGljIG9wZW5OZXh0UG9wdXAgKCl7XHJcbiAgICAgICAgLy8gVUlNYW5hZ2VyLlBvcHVwTWFwLnNvbWUoKHZhbHVlLCBpZHgpPT57XHJcbiAgICAgICAgLy8gICAgIGlmKHBvcHVwQ3RybCBpbnN0YW5jZW9mIHZhbHVlKXtcclxuICAgICAgICAvLyAgICAgICAgIFVJTWFuYWdlci5Qb3B1cE1hcC5zcGxpY2UoaWR4LCAxKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIFVJTWFuYWdlci5Qb3B1cERhdGFbcG9wdXBDdHJsLm11bHRpdG9uS2V5XSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmKFVJTWFuYWdlci5Qb3B1cFF1ZXVlLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBRdWV1ZS5wb3AoKTtcclxuICAgICAgICAgICAgbGV0IHBvcHVwID0gVUlNYW5hZ2VyLlBvcHVwUXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgaWYocG9wdXApe1xyXG4gICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmNoZWNrT3BlbkN0cmxJbnN0KHBvcHVwLCAuLi5VSU1hbmFnZXIuUG9wdXBEYXRhW3BvcHVwLm11bHRpdG9uS2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIDmloflrZfnoa7orqTlvLnnqpdcclxuICAgIHN0YXRpYyBvcGVuQ29uZmlybVdpbmRvdyhjb250ZW50OnN0cmluZ1tdLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5vcGVuUG9wdXAoVUkuUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlciwgbmV3IENvbmZpZy5Qb3B1cFdpbmRvd0RhdGEoY29udGVudCwgeWVzQnRuQ2FsbGJhY2ssIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5Db250ZW50LCBidG5ZZXNUeHQsIGJ0bkNhbmNlbFR4dCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5omT5byA5aWW5Yqx5by556qXXHJcbiAgICBzdGF0aWMgb3BlblJld2FyZFdpbmRvdyhyZXdhcmREYXRhLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5vcGVuUG9wdXAoVUkuUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlciwgbmV3IENvbmZpZy5Qb3B1cFdpbmRvd0RhdGEobnVsbCwgeWVzQnRuQ2FsbGJhY2ssIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5SZXdhcmQsIHJld2FyZERhdGEsIGJ0blllc1R4dCwgYnRuQ2FuY2VsVHh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIDmloflrZcr5aWW5Yqx5by556qXXHJcbiAgICBzdGF0aWMgb3BlbkNvbnRlbnRSZXdhcmRXaW5kb3coY29udGVudDpzdHJpbmdbXSwgcmV3YXJkRGF0YSwgeWVzQnRuQ2FsbGJhY2s/OkZ1bmN0aW9uLCBidG5ZZXNUeHQ/OnN0cmluZywgYnRuQ2FuY2VsVHh0PzpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMub3BlblBvcHVwKFVJLlB1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXIsIG5ldyBDb25maWcuUG9wdXBXaW5kb3dEYXRhKFxyXG4gICAgICAgICAgICBjb250ZW50LCBcclxuICAgICAgICAgICAgeWVzQnRuQ2FsbGJhY2ssIFxyXG4gICAgICAgICAgICBDb25maWcuQ29uZmlybVdpbmRvd1R5cGUuQ29udGVudEFuZFJld2FyZCwgXHJcbiAgICAgICAgICAgIHJld2FyZERhdGEsIFxyXG4gICAgICAgICAgICBidG5ZZXNUeHQsIFxyXG4gICAgICAgICAgICBidG5DYW5jZWxUeHRcclxuICAgICAgICApKTtcclxuICAgIH1cclxufSIsIlxyXG4vL+eJiOacrOeuoeeQhlxyXG5leHBvcnQgY2xhc3MgVmVyc2lvbk1hbmFnZXJ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdmVyc2lvbjpudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBzdGF0aWMgc2V0IFZlcnNpb24odmVyc2lvbjpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX3ZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgVmVyc2lvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENob29zZVNlcnZpY2VDb250cm9sbGVyIGV4dGVuZHMgQ29yZS5Db250cm9sbGVye1xyXG4gICAgVmlldzpVSS5DaG9vc2VTZXJ2aWNlVmlldztcclxuXHJcbiAgICBvbkNyZWF0ZSgpe1xyXG4gICAgICAgIHRoaXMuU29ydGluZ09yZGVyKENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuTmV0U2lnbmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW4oZGF0YSkge1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uTGlzZW50ZXIodGhpcy5WaWV3LkxvY2FsLCB0aGlzLm9wZW5Mb2NhbFNlcnZpY2UpO1xyXG5cclxuICAgICAgICB0aGlzLlZpZXcuQWNjb3VudE5hbWUudGV4dCA9IExvY2FsQ29uZmlnLkdldEFjb3VudE5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTG9jYWxTZXJ2aWNlKCl7XHJcbiAgICAgICAgbGV0IGFjY291bnQgPSB0aGlzLlZpZXcuQWNjb3VudE5hbWUudGV4dDtcclxuICAgICAgICBpZih0eXBlb2YoYWNjb3VudCkgPT0gJ3N0cmluZycgJiYgYWNjb3VudC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgQ29uZmlnLk5ldENvbmZpZy5UZW1wTmFtZSA9IGFjY291bnQ7XHJcbiAgICAgICAgICAgIExvY2FsQ29uZmlnLlNhdmVBY291bnROYW1lKGFjY291bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwgPSBDb25maWcuTmV0Q29uZmlnLkxvY2FsUmVxdWVzdFVybDtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbkh0dHBTZXJ2aWNlKCl7XHJcbiAgICAgICAgQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID0gQ29uZmlnLk5ldENvbmZpZy5IdHRwUmVxdWVzdFVybDtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkxvY2FsV2VjaGF0U2VydmljZSgpe1xyXG4gICAgICAgIENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9IENvbmZpZy5OZXRDb25maWcuTG9jYWxXZWNoYXRSZXF1ZXN0VXJsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfor7fmsYLlnLDlnYDvvJonLENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKXtcclxuICAgICAgICBMb2NhbENvbmZpZy5Jc0Nob29zZWRTZXJ2aWNlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2VydmljZUNob29zZWQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi9Db3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hvb3NlU2VydmljZVZpZXcgZXh0ZW5kcyBDb3JlLlZpZXd7XHJcbiAgICBMb2NhbDpmYWlyeWd1aS5HT2JqZWN0O1xyXG4gICAgSHR0cDpmYWlyeWd1aS5HT2JqZWN0O1xyXG4gICAgTG9jYWxXZWNoYXQ6ZmFpcnlndWkuR09iamVjdDtcclxuICAgIEFjY291bnROYW1lOmZhaXJ5Z3VpLkdUZXh0SW5wdXQ7XHJcblxyXG4gICAgTG9hZFZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5Mb2NhbCA9IHRoaXMuVUkuZ2V0Q2hpbGQoXCJMb2NhbFwiKVxyXG4gICAgICAgIHRoaXMuSHR0cCA9IHRoaXMuVUkuZ2V0Q2hpbGQoXCJIdHRwXCIpXHJcbiAgICAgICAgdGhpcy5Mb2NhbFdlY2hhdCA9IHRoaXMuVUkuZ2V0Q2hpbGQoXCJMb2NhbFdlY2hhdFwiKVxyXG5cclxuICAgICAgICB0aGlzLkFjY291bnROYW1lID0gdGhpcy5VSS5nZXRDaGlsZChcIkFjY291bnROYW1lXCIpLmFzVGV4dElucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzdHJveSgpe1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbi8qKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgQ29udHJvbGxlcj59ICovXHJcbi8vIGxldCBDdHJsTWFwOkNvbmZpZy5EaWN0aW9uYXJ5PENvbnRyb2xsZXI+ID0ge307XHJcblxyXG4vKiogQHR5cGUge09iamVjdDxzdHJpbmcsIFZpZXc+fSAqL1xyXG5sZXQgVmlld01hcDp7W2tleTpzdHJpbmddOlZpZXd9ID0ge307XHJcblxyXG4vKiogQHR5cGUge0NvbnRyb2xsZXJbXX0gKi9cclxubGV0IE9wZW5lZEN0cmwgPSBuZXcgQXJyYXk8Q29udHJvbGxlcj4oKTtcclxuXHJcbi8vIGV4cG9ydCBsZXQgQ3RybE1hcEFycmF5OkNvbmZpZy5EaWN0aW9uYXJ5PHR5cGVvZiBDb250cm9sbGVyPiA9IHt9O1xyXG5leHBvcnQgbGV0IEN0cmxNYXBBcnJheSA9IG5ldyBBcnJheTx0eXBlb2YgQ29udHJvbGxlcj4oKTtcclxuZXhwb3J0IGxldCBWaWV3TWFwQXJyYXk6Q29uZmlnLkRpY3Rpb25hcnk8dHlwZW9mIFZpZXc+ID0ge307XHJcblxyXG5jbGFzcyBDdHJsTGlzZW5lcntcclxuICAgIHB1YmxpYyBPYmo6ZmFpcnlndWkuR09iamVjdDtcclxuICAgIHB1YmxpYyBMaXNlbmVyOkZ1bmN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9iajpmYWlyeWd1aS5HT2JqZWN0LCBsaXNlbmVyOkZ1bmN0aW9uKXtcclxuICAgICAgICBpZighb2JqKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuT2JqID0gb2JqO1xyXG4gICAgICAgIHRoaXMuTGlzZW5lciA9IGxpc2VuZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCl7XHJcbiAgICAgICAgdGhpcy5PYmoub2ZmQ2xpY2sodGhpcywgdGhpcy5MaXNlbmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPcGVuZWRDdHJsLCBWaWV3TWFwfVxyXG5cclxuLy8vIDxzdW1tYXJ5PlxyXG4vLy8g5ZCRVWlNYW5hZ2VyIOazqOWGjOiEmuacrCDov5jmnInkuIDkupsgTVNHSURcclxuLy8vIOS4gOiIrOaYr3BhbmVsIOaMgui9vei/meagt+eahOiEmuacrCDpnIDopoHlkJHlhbbku5bmqKHlnZcg5oiW6ICF6ISa5pys6YCa5L+hXHJcbi8vLyA8L3N1bW1hcnk+XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVaUNWQmFzZSBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlcntcclxuICAgIHB1YmxpYyBtdWx0aXRvbktleTpzdHJpbmc7XHJcblxyXG4gICAgb25EZXN0cm95KClcclxuICAgIHtcclxuICAgICAgICAvL+mHjeWGmeatpOe7hOS7tuaWueazleW/hemhu+aJp+ihjFxyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIFVpQ1ZCYXNle1xyXG4gICAgc3RhdGljIGNLZXk6c3RyaW5nO1xyXG4gICAgc3RhdGljIHZpZXc6dHlwZW9mIFZpZXc7XHJcblxyXG4gICAgLy8gcHVibGljIG11bHRpdG9uS2V5OnN0cmluZztcclxuICAgIHB1YmxpYyBWaWV3OlZpZXc7XHJcblxyXG4gICAgcHVibGljIERhdGE7XHJcbiAgICBwdWJsaWMgSXNPcGVuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNEZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgcHVibGljIElzU2hvdyA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzUG9wdXAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0Z1bGxTY3JlZW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0RlZmF1bHQgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0ludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgbGlzZW50ZXJBcnJheSA9IG5ldyBBcnJheTxDdHJsTGlzZW5lcj4oKTtcclxuICAgIFxyXG4gICAgc3RhdGljIHNldCBLZXkoa2V5OnN0cmluZyl7dGhpcy5jS2V5ID0ga2V5fVxyXG4gICAgc3RhdGljIGdldCBLZXkoKXtyZXR1cm4gdGhpcy5jS2V5fVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihjS2V5PzpzdHJpbmcsIHZpZXc/OnR5cGVvZiBWaWV3LCBpc0Z1bGxTY3JlZW4/OmJvb2xlYW4sIGlzUG9wdXA/OmJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZighY0tleSB8fCAhdmlldykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBrZXkgb3Igdmlld1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKCFPcGVuZWRDdHJsW2NLZXldKSB7XHJcbiAgICAgICAgICAgIE9wZW5lZEN0cmxbY0tleV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGxldCB2S2V5ID0gdmlldy5LZXk7XHJcbiAgICAgICAgaWYoIVZpZXdNYXBbdktleV0pe1xyXG4gICAgICAgICAgICBWaWV3TWFwW3ZLZXldID0gbmV3IHZpZXcodktleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm11bHRpdG9uS2V5ID0gY0tleTtcclxuICAgICAgICB0aGlzLlZpZXcgPSBWaWV3TWFwW3ZLZXldO1xyXG4gICAgICAgIHRoaXMuSXNGdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuID09IHRydWU7XHJcbiAgICAgICAgdGhpcy5Jc1BvcHVwID0gaXNQb3B1cCA9PSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDdHJsKGlkOm51bWJlcil7XHJcbiAgICAgICAgQ3RybE1hcEFycmF5W2lkXSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXQoY0tleSwgdmlldzp0eXBlb2YgVmlldywgdktleT86c3RyaW5nKXtcclxuICAgICAgICB0aGlzLktleSA9IGNLZXk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgICAgICB0aGlzLnZpZXcuS2V5ID0gdktleT8gdktleTogY0tleTtcclxuICAgICAgICBDdHJsTWFwQXJyYXlbdGhpcy5LZXldID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVWaWV3KHZpZXc6IHR5cGVvZiBWaWV3LCBrZXk6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuVmlldyA9IG5ldyB2aWV3KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5WaWV3KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyB2aWV3IGNyZWF0ZWQhXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSXNEZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlZpZXcuSW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ3JlYXRlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oX2RhdGE/KSB7XHJcbiAgICAgICAgdGhpcy5Jc09wZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuRGF0YSA9IF9kYXRhO1xyXG5cclxuICAgICAgICAvLyBGYWNhZGUuUHVzaEN0cmwodGhpcywgdGhpcy5EYXRhKTtcclxuICAgICAgICB0aGlzLnNob3coX2RhdGEpO1xyXG4gICAgICAgIHRoaXMub3Blbk92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuT3ZlcigpIHtcclxuICAgICAgICBpZih0aGlzLklzRnVsbFNjcmVlbil7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uVWlOb3RpY2VFaWQuT3BlbkZ1bGxTY3JlZW4sIHRoaXMubXVsdGl0b25LZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5Jc1BvcHVwKXtcclxuICAgICAgICAgICAgdGhpcy5Tb3J0aW5nT3JkZXIoQ29uZmlnLlVJQ29uZmlnLlNvcnRpbmdPcmRlci5Qb3B1cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uT3Blbih0aGlzLkRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJ1dHRvbkxpc2VudGVyKG9iamVjdDpmYWlyeWd1aS5HT2JqZWN0LCBmdW46RnVuY3Rpb24sIGRhdGE/OkFycmF5PGFueT4sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZihvYmplY3QgPT0gbnVsbCB8fCBmdW4gPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJvYmplY3Qgb3IgZnVuIGlzIG51bGxcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXNBcmcgPSB0aGlzQXJnP3RoaXNBcmc6IHRoaXM7XHJcbiAgICAgICAgb2JqZWN0Lm9uQ2xpY2sodGhpc0FyZywgZnVuLCBkYXRhKTtcclxuICAgICAgICB0aGlzLmxpc2VudGVyQXJyYXkucHVzaChuZXcgQ3RybExpc2VuZXIob2JqZWN0LCBmdW4pKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBpZih0aGlzLklzT3BlbiA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLklzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25DbG9zZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlQ29udHJvbGxlciwgdGhpcy5tdWx0aXRvbktleSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5Jc1BvcHVwKXtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5VaU5vdGljZUVpZC5DbG9zZVBvcHVwLCB0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSXNGdWxsU2NyZWVuKXtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5VaU5vdGljZUVpZC5DbG9zZUZ1bGxTY3JlZW4sIHRoaXMubXVsdGl0b25LZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGVsZXRlIEN0cmxNYXBbdGhpcy5tdWx0aXRvbktleV07XHJcbiAgICAgICAgLy8gT3BlbmVkQ3RybC5zcGxpY2UoT3BlbmVkQ3RybC5pbmRleE9mKHRoaXMpLCAxKTtcclxuICAgICAgICBPcGVuZWRDdHJsW3RoaXMubXVsdGl0b25LZXldID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy/muIXnqbrngrnlh7vkuovku7ZcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5saXNlbnRlckFycmF5KXtcclxuICAgICAgICAgICAgdGhpcy5saXNlbnRlckFycmF5W2ldLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc2VudGVyQXJyYXlbaV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/muIXpmaTnm5HlkKzkuovku7ZcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICAvL+a4hemZpOaJgOacieiuoeaXtuWZqFxyXG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSXNEZXN0cm95ZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5Jc0Rlc3Ryb3llZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLlZpZXcgJiYgdGhpcy5WaWV3LmRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlZpZXcgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLklzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuSXNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5EYXRhID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy/plIDmr4HoioLngrlcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmmL7npLrnlYzpnaJcclxuICAgIHNob3coZGF0YT8pIHtcclxuICAgICAgICBkYXRhID0gZGF0YT8gZGF0YTogdGhpcy5EYXRhO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5Jc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOacqm9wZW7nirbmgIHvvIzkuI3lpITnkIZcclxuICAgICAgICBpZiAoIXRoaXMuSXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLklzU2hvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuSXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5WaWV3LnNob3coZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLklzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vblNob3coZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6ZqQ6JeP55WM6Z2iXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5Jc1Nob3cpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMuSXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5WaWV3LmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSXNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkhpZGUoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDorr7nva7muLLmn5Ppobrluo9cclxuICAgIFNvcnRpbmdPcmRlcihvcmRlcjpudW1iZXIpIHtcclxuICAgICAgICBpZighdGhpcy5Jc0Rlc3Ryb3llZCl7XHJcbiAgICAgICAgICAgIHRoaXMuVmlldy5Tb3J0aW5nT3JkZXIob3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmmK/lkKblj6/op6bmjqdcclxuICAgIGludGVyYWN0aXZlKGNhblRvdWNoOmJvb2xlYW4pe1xyXG4gICAgICAgIGlmKGNhblRvdWNoID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuSXNJbnRlcmFjdGl2ZSA9IGNhblRvdWNoO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuSXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5WaWV3LmludGVyYWN0aXZlKGNhblRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbkludGVyYWN0aXZlKGNhblRvdWNoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVUkoZGF0YT8pe1xyXG4gICAgICAgIHRoaXMuVmlldy5yZWZyZXNoVUkoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZSgpIHt9XHJcblxyXG4gICAgb25DcmVhdGUoKSB7fVxyXG5cclxuICAgIG9uT3BlbihkYXRhPykge31cclxuXHJcbiAgICBvblNob3coZGF0YT8pIHt9XHJcblxyXG4gICAgb25IaWRlKCkge31cclxuICAgIFxyXG4gICAgb25JbnRlcmFjdGl2ZShjYW5Ub3VjaDpib29sZWFuKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmlldyBleHRlbmRzIFVpQ1ZCYXNlIHtcclxuICAgIHN0YXRpYyB2S2V5OnN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGxpc2VudGVyQXJyYXkgPSBuZXcgQXJyYXk8Q3RybExpc2VuZXI+KCk7XHJcbiAgICBwcml2YXRlIF9pc0FsaXZlOmJvb2xlYW47XHJcbiAgICAvLyBwdWJsaWMgbXVsdGl0b25LZXk6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBGdWlJbWFnZVVybDpzdHJpbmc7XHJcbiAgICBwcml2YXRlIEZ1aUJ1ZmZlclVybDpzdHJpbmc7XHJcbiAgICBwcml2YXRlIFBrZ0FkcnM6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBQa2c6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBDb206c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfVUk6ZmFpcnlndWkuR0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgQ2FsbGJhY2tMaXN0OkFycmF5PEZ1bmN0aW9uPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSB1aUNmZzpDb25maWcuVmlld0NvbmZpZztcclxuXHJcbiAgICBwdWJsaWMgV2luZG93OmZhaXJ5Z3VpLkdDb21wb25lbnQ7IC8v5by55Ye656qX5Y+j77yM5rOo5oSP57uE5Lu25ZG95ZCN5Li6V2luZG93XHJcbiAgICBwdWJsaWMgQnRuX0JhY2s6ZmFpcnlndWkuR0J1dHRvbjsgICAvL+WFs+mXreaMiemSru+8jOWRveWQjeS4ukJ0bl9CYWNrXHJcbiAgICBwdWJsaWMgTGlzdDpmYWlyeWd1aS5HTGlzdDsgIC8v5YiX6KGo77yM6ZyA6Ieq6KGM5a6a5LmJXHJcblxyXG4gICAgc3RhdGljIHNldCBLZXkoa2V5OnN0cmluZyl7dGhpcy52S2V5ID0ga2V5fVxyXG4gICAgc3RhdGljIGdldCBLZXkoKXtyZXR1cm4gdGhpcy52S2V5fVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6c3RyaW5nKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25LZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5faXNBbGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmKCFWaWV3TWFwW2tleV0pIHtcclxuICAgICAgICAgICAgVmlld01hcFtrZXldID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudWlDZmcgPSBDb25maWcuVmlld0tpdFtrZXldO1xyXG4gICAgICAgIGlmKCF0aGlzLnVpQ2ZnKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW5jb3JyZWN0IHZpZXcga2V5IScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBVSSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9VSTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgSXNBbGl2ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FsaXZlO1xyXG4gICAgfVxyXG5cclxuICAgIEluaXRpYWxpemUoKXtcclxuICAgICAgICBpZighdGhpcy5fVUkpe1xyXG4gICAgICAgICAgICB0aGlzLl9VSSA9IE1hbmFnZXIuU3Bhd25NYW5hZ2VyLkxvYWRWaWV3KHRoaXMudWlDZmcuUGtnLCB0aGlzLnVpQ2ZnLkNvbSk7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLl9VSSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIFVpIGNvbTogJywgdGhpcy51aUNmZy5LZXkpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuV2luZG93ID0gdGhpcy5VSS5nZXRDaGlsZCgnV2luZG93JykgYXMgZmFpcnlndWkuR0NvbXBvbmVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuTG9hZFZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZShrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZighVmlld01hcFtrZXldKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmlld01hcFtrZXldID0gbmV3IFZpZXcoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBWaWV3TWFwW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNhbGxiYWNrS2V5XHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgc2V0Q2FsbGJhY2soY2FsbGJhY2tLZXk6c3RyaW5nLCBjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICAgICAgdGhpcy5DYWxsYmFja0xpc3RbY2FsbGJhY2tLZXldID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaW52b2tlQ2FsbGJhY2soY2FsbGJhY2tLZXksIC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmKHR5cGVvZihjYWxsYmFja0tleSkgIT0gJ3N0cmluZycgfHwgdHlwZW9mKHRoaXMuQ2FsbGJhY2tMaXN0W2NhbGxiYWNrS2V5XSkgIT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkNhbGxiYWNrTGlzdFtjYWxsYmFja0tleV0oLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQnV0dG9uTGlzZW50ZXIob2JqZWN0OmZhaXJ5Z3VpLkdPYmplY3QsIGZ1bjpGdW5jdGlvbiwgZGF0YT86QXJyYXk8YW55PiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKG9iamVjdCA9PSBudWxsIHx8IGZ1biA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm9iamVjdCBvciBmdW4gaXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpc0FyZyA9IHRoaXNBcmc/dGhpc0FyZzogdGhpcztcclxuICAgICAgICBvYmplY3Qub25DbGljayh0aGlzQXJnLCBmdW4sIGRhdGEpO1xyXG4gICAgICAgIHRoaXMubGlzZW50ZXJBcnJheS5wdXNoKG5ldyBDdHJsTGlzZW5lcihvYmplY3QsIGZ1bikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrTGlzdENhbGxiYWNrKHRoaXNBcmcsIGZ1bmM6RnVuY3Rpb24sIC4uLmRhdGEpe1xyXG4gICAgICAgIENvbW1vbi5jbGlja0xpc3RDYWxsYmFjayh0aGlzLkxpc3QsIHRoaXNBcmcsIGZ1bmMsIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9pc0FsaXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8v5riF6Zmk55uR5ZCs5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgLy/muIXpmaTmiYDmnInorqHml7blmahcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIC8v5riF56m654K55Ye75LqL5Lu2XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRoaXMubGlzZW50ZXJBcnJheSl7XHJcbiAgICAgICAgICAgIHRoaXMubGlzZW50ZXJBcnJheVtpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5saXNlbnRlckFycmF5W2ldID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlbGV0ZSBWaWV3TWFwW3RoaXMubXVsdGl0b25LZXldXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZm9yKGxldCBpIGluIHRoaXMpIHtcclxuICAgICAgICAvLyAgICAgLy8g6ZSA5q+BVUlcclxuICAgICAgICAvLyAgICAgLy8gaWYodGhpc1tpXSAmJiB0aGlzW2ldLmRpc3Bvc2UpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIHRoaXNbaV0uZGlzcG9zZSgpO1xyXG4gICAgICAgIC8vICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vICAgICAvLyB0aGlzW2ldID0gdW5kZWZpbmVkXHJcblxyXG4gICAgICAgIC8vICAgICAvLyBpZih0aGlzW2ldIGluc3RhbmNlb2YgZmFpcnlndWkuR0NvbXBvbmVudCA9PSB0cnVlKXtcclxuICAgICAgICAvLyAgICAgLy8gICAgIHRoaXNbaV0uZGlzcGxheU9iamVjdC5vZmZBbGwoKTtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5fVUkuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgb25EZXN0cm95KCl7fVxyXG5cclxuICAgIExvYWRWaWV3KCkge31cclxuXHJcbiAgICByZWZyZXNoVUkoZGF0YT8pIHt9XHJcblxyXG4gICAgaW50ZXJhY3RpdmUoY2FuVG91Y2gpIHtcclxuICAgICAgICB0aGlzLl9VSS50b3VjaGFibGUgPSBjYW5Ub3VjaDtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIFNvcnRpbmdPcmRlcihvcmRlcikge1xyXG4gICAgICAgIHRoaXMuX1VJLnNvcnRpbmdPcmRlciA9IG9yZGVyO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgc2hvdyhkYXRhPyl7XHJcbiAgICAgICAgdGhpcy5fVUkudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpe1xyXG4gICAgICAgIHRoaXMuX1VJLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2FkZXtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgc3RhdGljIFB1c2hDdHJsKGN0cmw6Q29udHJvbGxlciwgZGF0YT8pe1xyXG4gICAgICAgIGlmKCFjdHJsKSByZXR1cm47XHJcblxyXG4gICAgICAgIE9wZW5lZEN0cmwucHVzaChjdHJsKTtcclxuICAgICAgICAvL+aYvuekuuagiOW6leeVjOmdolxyXG4gICAgICAgIC8vIE9wZW5lZEN0cmwuZm9yRWFjaCgodik9PiB7di5zaG93KCl9KVxyXG4gICAgICAgIGxldCBuZXh0YyA9IE9wZW5lZEN0cmwuc2hpZnQoKTtcclxuICAgICAgICBpZihuZXh0Yyl7XHJcbiAgICAgICAgICAgIG5leHRjLnNob3coZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb250cm9sbGVyKGlkKXtcclxuICAgICAgICBsZXQgY3RybCA9IEN0cmxNYXBBcnJheVtpZF07XHJcbiAgICAgICAgaWYoY3RybClcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjdHJsKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tICcuLi9EYXRhL0RhdGEnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbnRyb2xsZXIgZXh0ZW5kcyBVSS5Db250cm9sbGVye1xyXG4gICAgcHVibGljIFZpZXc6VUkuTG9hZGluZ1ZpZXc7XHJcblxyXG4gICAgb25PcGVuKGRhdGEpIHtcclxuICAgICAgICB0aGlzLlZpZXcuU2hvd19DLnNlbGVjdGVkSW5kZXggPSAxO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLk5ldEh0dHBDb25uZWN0RWlkLkNvbm5lY3RCZWdpbiwgdGhpcy5vcGVuSHR0cFN0YXJ0KTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLk5ldEh0dHBDb25uZWN0RWlkLlNlcnZpY2VSZXNwb25kLCB0aGlzLm9uSHR0cFJlc3BvbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2FkaW5nKCl7XHJcbiAgICAgICAgdGhpcy5WaWV3LlNob3dfQy5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTG9hZGluZygpe1xyXG4gICAgICAgIHRoaXMuVmlldy5TaG93X0Muc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ov57mjqXlrozmiJBcclxuICAgIG9uSHR0cFJlc3BvbmQoKXtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+W8gOWni+i/nuaOpVxyXG4gICAgb3Blbkh0dHBTdGFydCgpe1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKXtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5vZmYoY2MuRGlyZWN0b3IuRVZFTlRfQkVGT1JFX1NDRU5FX0xPQURJTkcsIHRoaXMuY2xvc2UsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Db25maWcnO1xyXG5pbXBvcnQge1VJQ29uZmlnfSBmcm9tIFwiLi4vQ29uZmlnL1VJQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4vQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlciBleHRlbmRzIENvcmUuQ29udHJvbGxlcntcclxuICAgIHB1YmxpYyBWaWV3OlVJLkxvYWRpbmdQcm9ncmVzc1ZpZXc7XHJcbiAgICBwdWJsaWMgUHJvZ3Jlc3MgPSAwO1xyXG4gICAgcHVibGljIElzTG9hZGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIFBrZ051bSA9IDA7XHJcbiAgICBwcml2YXRlIFJlc051bSA9IDA7XHJcblxyXG4gICAgb25PcGVuKGRhdGEpIHtcclxuICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9IFwiMCVcIjtcclxuXHJcbiAgICAgICAgLy/lvIDlj5HniYjlhYjmmL7npLrpgInmnI3liqHlmajnlLvpnaJcclxuICAgICAgICAvLyBpZihNYW5hZ2VyLlZlcnNpb25NYW5hZ2VyLlZlcnNpb24gPT0gQ29uZmlnLlZlcnNpb25Db25maWcuRGV2ZWxvcCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzc051bWJlcigpO1xyXG4gICAgICAgIHRoaXMuc2ltUHJvZ3Jlc3MoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLlBhY2thZ2VMb2FkZWQsIHRoaXMub25SZXNMb2FkZWQpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MsIHRoaXMub25Mb2dpblN1Y2Nlc3MpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Db25maWdMb2FkZWQsIHRoaXMudHJ5Q2xvc2UpO1xyXG4gICAgICAgIC8v6L+b5Zy65pmv5Lmf6ZyA6KaB562J5b6F5qih5ouf6L+b5bqmXHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lRW50ZXJFaWQuTWFpbk1lbnUsIHRoaXMudHJ5Q2xvc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UHJvZ3Jlc3NOdW1iZXIoKXtcclxuICAgICAgICAvL+eZu+W9lemcgOimgeWKoOi9veeahFVJ5YyF5pWw6YePLS1jb2Nvc+eUqFxyXG4gICAgICAgIC8vIHRoaXMuUGtnTnVtID0gVUlDb25maWcuVUlQa2dzLmxlbmd0aCAqIDI7XHJcbiAgICAgICAgdGhpcy5SZXNOdW0gPSBDb25maWcubG9naW5SZXNVcmxzLmxlbmd0aCArIENvbmZpZy51cmxzLmxlbmd0aCArIDU7XHJcblxyXG4gICAgICAgIC8v5bCP5ri45oiP5Yqg5LiK5YiG5YyF6L+b5bqmXHJcbiAgICAgICAgaWYoQ29tbW9uLmlzTWluaUdhbWUoKSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLlBrZ051bSArPSBVSUNvbmZpZy5TdWJQa2dzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5SZXNOdW0gKz0gVUlDb25maWcuU3ViUGtncy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVaVByb2dyZXNzKHByb2dyZXNzOm51bWJlciwgcGtnTmFtZT86c3RyaW5nKXtcclxuICAgICAgICBwa2dOYW1lID0gcGtnTmFtZSB8fCAnJztcclxuICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9ICdMb2FkaW5nIHVpICcgKyBwa2dOYW1lICsgJzogJyArIHByb2dyZXNzICogMTAwICsgJyUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5YGH6L+b5bqmXHJcbiAgICBzaW1Qcm9ncmVzcygpe1xyXG4gICAgICAgIHRoaXMuUHJvZ3Jlc3MgKz0gMTAwIC8gdGhpcy5SZXNOdW07XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gTWF0aC5jZWlsKHRoaXMuUHJvZ3Jlc3MpO1xyXG4gICAgICAgIHByb2dyZXNzID0gcHJvZ3Jlc3MgPiAxMDA/IDEwMDogcHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSBwcm9ncmVzcyArIFwiJVwiO1xyXG5cclxuICAgICAgICBpZih0aGlzLlByb2dyZXNzID49IDEwMCl7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5Q2xvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDEwMCwgdGhpcywgdGhpcy5zaW1Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvZ3Jlc3MoYWRkUHJvZ3Jlc3Mpe1xyXG4gICAgICAgIHRoaXMuUHJvZ3Jlc3MgKz0gMTAwIC8gdGhpcy5Qa2dOdW07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5Qcm9ncmVzcyk7XHJcbiAgICAgICAgLy8gdGhpcy5Qcm9ncmVzcyA9IHRoaXMuUHJvZ3Jlc3MgPiAxMDA/IDEwMDogdGhpcy5Qcm9ncmVzcztcclxuXHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gTWF0aC5jZWlsKHRoaXMuUHJvZ3Jlc3MpO1xyXG4gICAgICAgIHByb2dyZXNzID0gcHJvZ3Jlc3MgPiAxMDA/IDEwMDogcHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSBwcm9ncmVzcyArIFwiJVwiO1xyXG5cclxuICAgICAgICAvL+WKoOi9veWujOaIkFVJ5YyFXHJcbiAgICAgICAgaWYodGhpcy5Qcm9ncmVzcyA+PSAxMDApe1xyXG4gICAgICAgICAgICB0aGlzLklzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUxvZ2luRWlkLlBhY2thZ2VMb2FkZWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93V3hMb2dpbigpO1xyXG4gICAgICAgICAgICAvLyBpZihEYXRhQmFzZS5Mb2dpbkRhdGEuQWNjb3VudE5hbWUpe1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dXeExvZ2luKCl7XHJcbiAgICAgICAgaWYoIUNvbW1vbi5pc01pbmlHYW1lKCkgfHwgTG9jYWxDb25maWcuSXNXeEF1dGggfHwgIXRoaXMuSXNMb2FkZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5WaWV3LnNob3dXeExvZ2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvbmZpZ1Byb2dyZXNzKCl7XHJcbiAgICAgICAgaWYoQ29uZmlnLkRhdGFDb25maWcuSXNDb25maWdMb2FkZWQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9IFwi5Yqg6L296YWN572u5LitXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2dpblByb2dyZXNzKCl7XHJcbiAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSBcIueZu+W9leS4rVwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9naW5TdWNjZXNzKCl7XHJcbiAgICAgICAgdGhpcy50cnlDbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzTG9hZGVkKCl7XHJcbiAgICAgICAgdGhpcy5Jc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50cnlDbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5ruh6Laz5omA5pyJ5p2h5Lu25omN5YWz6Zet5Yqg6L2955WM6Z2iXHJcbiAgICB0cnlDbG9zZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuUHJvZ3Jlc3MgPCAxMDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoTWFuYWdlci5WZXJzaW9uTWFuYWdlci5WZXJzaW9uID09IENvbmZpZy5WZXJzaW9uQ29uZmlnLkRldmVsb3Ape1xyXG4gICAgICAgICAgICBpZighTG9jYWxDb25maWcuSXNDaG9vc2VkU2VydmljZSkgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoQ29uZmlnLkRhdGFDb25maWcuSXNDb25maWdMb2FkZWQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb25maWdQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihEYXRhLkxvZ2luRGF0YS5Jc0xvZ2luZWQgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMb2dpblByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFDb25maWcuVUlDb25maWcuTG9naW5QYWNrYWdlTG9hZGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKCl7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUxvZ2luRWlkLlNpbVByb2dyZXNzRW5kKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1VJQ29uZmlnfSBmcm9tIFwiLi4vQ29uZmlnL1VJQ29uZmlnXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1Byb2dyZXNzVmlldyBleHRlbmRzIENvcmUuVmlld3tcclxuICAgIHB1YmxpYyBMb2dpbl9DOmZhaXJ5Z3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgTG9hZFZpZXcoKSB7XHJcbiAgICAgICAgLy/muLLmn5PlsYLnuqdcclxuICAgICAgICB0aGlzLlVJLnNvcnRpbmdPcmRlciA9IFVJQ29uZmlnLlNvcnRpbmdPcmRlci5TY2VuZUxvYWRpbmc7XHJcblxyXG4gICAgICAgIHRoaXMuTG9naW5fQyA9IHRoaXMuVUkuZ2V0Q29udHJvbGxlcignTG9naW5fQycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dXeExvZ2luKCl7XHJcbiAgICAgICAgdGhpcy5Mb2dpbl9DLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gJy4uL0RhdGEvRGF0YSc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nVmlldyBleHRlbmRzIFVJLlZpZXd7XHJcbiAgICBwdWJsaWMgU2hvd19DOmZhaXJ5Z3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgTG9hZFZpZXcoKSB7XHJcbiAgICAgICAgLy/muLLmn5PlsYLnuqdcclxuICAgICAgICB0aGlzLlVJLnNvcnRpbmdPcmRlciA9IENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuTmV0U2lnbmFsO1xyXG5cclxuICAgICAgICB0aGlzLlNob3dfQyA9IHRoaXMuVUkuZ2V0Q29udHJvbGxlcihcIlNob3dfQ1wiKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQge1VJQ29uZmlnfSBmcm9tIFwiLi4vQ29uZmlnL1VJQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4vQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuXHJcbmxldCBjS2V5ID0gQ29uZmlnLlZpZXdLaXQuUHVibGljQ29uZmlybWF0aW9uLktleTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdWJsaWNDb25maXJtYXRpb25Db250cm9sbGVyIGV4dGVuZHMgQ29yZS5Db250cm9sbGVye1xyXG4gICAgc3RhdGljIGNLZXkgPSBjS2V5O1xyXG4gICAgVmlldzpVSS5QdWJsaWNDb25maXJtYXRpb25WaWV3O1xyXG4gICAgQ2FsbGJhY2s6RnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcihjS2V5LCBVSS5QdWJsaWNDb25maXJtYXRpb25WaWV3LCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuKGRhdGE6Q29uZmlnLlBvcHVwV2luZG93RGF0YSkge1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uTGlzZW50ZXIodGhpcy5WaWV3LkJ0bl9DbG9zZSwgdGhpcy5jbG9zZSk7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b25MaXNlbnRlcih0aGlzLlZpZXcuQnRuX0NhbmNlbCwgdGhpcy5jbG9zZSk7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b25MaXNlbnRlcih0aGlzLlZpZXcuQnRuX1llcywgdGhpcy55ZXNCdG5PbkNsaWNrKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihkYXRhID09IG51bGwgfHwgZGF0YSBpbnN0YW5jZW9mIENvbmZpZy5Qb3B1cFdpbmRvd0RhdGEgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHBvcHVwIHdpbmRvdyBkYXRhLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuQ2FsbGJhY2sgPSBkYXRhLlllc0J0bkNhbGxiYWNrO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hVSShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgeWVzQnRuT25DbGljaygpe1xyXG4gICAgICAgIGlmKHRoaXMuQ2FsbGJhY2spe1xyXG4gICAgICAgICAgICB0aGlzLkNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZSgpe1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7VUlDb25maWd9IGZyb20gXCIuLi9Db25maWcvVUlDb25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxubGV0IHZLZXkgPSBDb25maWcuVmlld0tpdC5QdWJsaWNDb25maXJtYXRpb24uS2V5O1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1YmxpY0NvbmZpcm1hdGlvblZpZXcgZXh0ZW5kcyBDb3JlLlZpZXd7XHJcbiAgICBzdGF0aWMgdktleSA9IHZLZXk7XHJcbiAgICBCdG5fQ2xvc2U6ZmFpcnlndWkuR0J1dHRvbjtcclxuICAgIEJ0bl9ZZXM6ZmFpcnlndWkuR0J1dHRvbjtcclxuICAgIEJ0bl9DYW5jZWw6ZmFpcnlndWkuR0J1dHRvbjtcclxuICAgIExpc3RfQ29udGVudDpmYWlyeWd1aS5HTGlzdDtcclxuICAgIExpc3RfUmV3YXJkOmZhaXJ5Z3VpLkdMaXN0O1xyXG4gICAgQ29udGVudF9DOmZhaXJ5Z3VpLkNvbnRyb2xsZXI7XHJcbiAgICBCdG5UeXBlX0M6ZmFpcnlndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKHZLZXkpXHJcbiAgICB9XHJcblxyXG4gICAgTG9hZFZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5CdG5fQ2xvc2UgPSB0aGlzLldpbmRvdy5nZXRDaGlsZCgnQnRuX0Nsb3NlJykuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5CdG5fWWVzID0gdGhpcy5XaW5kb3cuZ2V0Q2hpbGQoJ0J0bl9ZZXMnKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLkJ0bl9DYW5jZWwgPSB0aGlzLldpbmRvdy5nZXRDaGlsZCgnQnRuX0NhbmNlbCcpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuTGlzdF9Db250ZW50ID0gdGhpcy5XaW5kb3cuZ2V0Q2hpbGQoJ0xpc3RfQ29udGVudCcpLmFzTGlzdDtcclxuICAgICAgICB0aGlzLkxpc3RfUmV3YXJkID0gdGhpcy5XaW5kb3cuZ2V0Q2hpbGQoJ0xpc3RfUmV3YXJkJykuYXNMaXN0O1xyXG4gICAgICAgIHRoaXMuQ29udGVudF9DID0gdGhpcy5XaW5kb3cuZ2V0Q29udHJvbGxlcignQ29udGVudF9DJyk7XHJcbiAgICAgICAgdGhpcy5CdG5UeXBlX0MgPSB0aGlzLldpbmRvdy5nZXRDb250cm9sbGVyKCdCdG5UeXBlX0MnKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVUkoZGF0YTpDb25maWcuUG9wdXBXaW5kb3dEYXRhKXtcclxuICAgICAgICBpZighZGF0YSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkNvbnRlbnRfQy5zZWxlY3RlZEluZGV4ID0gZGF0YS5XaW5kb3dUeXBlIC0gMTtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuV2luZG93VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5Db250ZW50OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5CdG5UeXBlX0Muc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxDb250ZW50cyhkYXRhLkNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLkNvbmZpcm1XaW5kb3dUeXBlLlJld2FyZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuQnRuVHlwZV9DLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsUmV3YXJkcyhkYXRhLlJld2FyZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5Db250ZW50QW5kUmV3YXJkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5CdG5UeXBlX0Muc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxDb250ZW50cyhkYXRhLkNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsUmV3YXJkcyhkYXRhLlJld2FyZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+aMiemSruaWh+Wtl1xyXG4gICAgICAgIGlmKGRhdGEuWWVzQnRuQ29udGVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuQnRuX1llcy50ZXh0ID0gZGF0YS5ZZXNCdG5Db250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkYXRhLkNhbmNlbEJ0bkNvbnRlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLkJ0bl9DYW5jZWwudGV4dCA9IGRhdGEuQ2FuY2VsQnRuQ29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbENvbnRlbnRzKGRhdGE6QXJyYXk8c3RyaW5nPil7XHJcbiAgICAgICAgdGhpcy5MaXN0X0NvbnRlbnQucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcclxuICAgICAgICBkYXRhLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICB0aGlzLkxpc3RfQ29udGVudC5hZGRJdGVtRnJvbVBvb2woKS50ZXh0ID0gdjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsUmV3YXJkcyhyZXdhcmREYXRhOmFueVtdKXtcclxuICAgICAgICBDb21tb24uZmlsbEl0ZW1MaXN0RGF0YShyZXdhcmREYXRhLCB0aGlzLkxpc3RfUmV3YXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQ2hvb3NlU2VydmljZUNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0Nob29zZVNlcnZpY2VWaWV3JztcclxuZXhwb3J0ICogZnJvbSAnLi9Db3JlJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nQ29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ1Byb2dyZXNzVmlldyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ1ZpZXcnO1xyXG5leHBvcnQgKiBmcm9tICcuL1B1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1B1YmxpY0NvbmZpcm1hdGlvblZpZXcnO1xyXG4iXX0=

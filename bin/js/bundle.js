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
},{"../Config/Config":8,"../Config/UIConfig":19,"../Manager/Manager":38}],7:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"../Data/Data":23,"../Manager/Manager":38,"./GEvent":3,"./Utils":6}],8:[function(require,module,exports){
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
},{"./ObjectProxy":21,"./RigidObject":22}],21:[function(require,module,exports){
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
        var rigidBody = target.addComponent(Laya.Rigidbody3D); //Rigidbody3D可与StaticCollider和RigidBody3D产生碰撞
        rigidBody.colliderShape = new Laya.BoxColliderShape(size.x, size.y, size.z);
        rigidBody.gravity = Laya.Vector3._ZERO;
        rigidBody.isTrigger = true;
        rigidBody.isKinematic = true;
    };
    ObjectProxy.addScript = function (rigidObj, script) {
        if (!rigidObj || !script)
            return;
        rigidObj.Obj.addComponent(script);
        return script;
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
},{"../Config/Config":8,"../Manager/Manager":38}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("../Manager/Manager");
var Core = require("../Core/Core");
var RigidObject = /** @class */ (function () {
    function RigidObject(obj) {
        this.Obj = obj;
        this.State = new Manager.StateBase();
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
    RigidObject.prototype.changeState = function (state) {
        if (!state)
            return;
        this.State.changeState(state);
    };
    return RigidObject;
}());
exports.RigidObject = RigidObject;
},{"../Core/Core":20,"../Manager/Manager":38}],23:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./DataBase"));
},{"./DataBase":24}],24:[function(require,module,exports){
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
},{"../Common/Common":1,"../Common/GEvent":3,"../Config/Config":8,"../Manager/Manager":38}],25:[function(require,module,exports){
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
},{}],26:[function(require,module,exports){
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
},{"./Common/Common":1,"./Config/Config":8,"./Data/Data":23,"./Logic/Logic":31,"./Manager/Manager":38}],27:[function(require,module,exports){
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
},{"../Common/Common":1}],28:[function(require,module,exports){
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
},{"../Common/Common":1}],29:[function(require,module,exports){
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
        this.DeskClass = new Core.RigidObject(Core.ObjectProxy.getObj(Config.PoolType.Desk));
        this.DeskClass.setPosition(Config.ObjectConfig.DESK_POS);
        this.HandClass = new Core.RigidObject(Core.ObjectProxy.getObj(Config.PoolType.Hand));
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
        this.deskScript = Core.ObjectProxy.addScript(this.DeskClass, Logic.DeskCollisionScript);
        this.deskScript.kinematicSprite = this.HandClass.Obj;
        this.handScript = Core.ObjectProxy.addScript(this.HandClass, Logic.HandCollisionScript);
        this.handScript.kinematicSprite = this.DeskClass.Obj;
    };
    GrabLogic.prototype.onComplete = function () {
        knock_time++;
        console.log("timeLine complete!!!!", knock_time);
    };
    GrabLogic.prototype.onLabel = function (label) {
        console.log("LabelName:" + label);
    };
    GrabLogic.prototype.createTimerLine = function () {
        this.timeLine.on(Laya.Event.COMPLETE, this, this.onComplete);
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
        if (!this.IsInited)
            return;
        var vec = this.DeskClass.Position;
        vec.y -= 0.3;
        this.DeskClass.setPosition(vec);
        if (vec.y <= Config.ObjectConfig.DESK_END_POS.y) {
            this.DeskClass.changeState(Config.StateConfig.MOVE_BACK);
        }
    };
    GrabLogic.prototype.deskUp = function () {
        if (!this.IsInited)
            return;
        var vec = this.DeskClass.Position;
        vec.y += 0.3;
        this.DeskClass.setPosition(vec);
        if (vec.y >= Config.ObjectConfig.DESK_POS.y) {
            this.DeskClass.changeState(Config.StateConfig.MOVE_FORWARD);
        }
    };
    GrabLogic.prototype.deskEnter = function () {
        if (!this.IsInited)
            return;
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
        switch (this.DeskClass.State.curState) {
            case Config.StateConfig.IDEL:
                break;
            case Config.StateConfig.MOVE_FORWARD:
                // this.deskDown();
                this.DeskClass.setPosition(this.Vdir);
                break;
            case Config.StateConfig.MOVE_BACK:
                // this.deskUp();
                break;
            case Config.StateConfig.DESK_LEAVE:
                this.deskLeave();
                break;
            case Config.StateConfig.DESK_ENTER:
                this.deskEnter();
                break;
        }
    };
    GrabLogic.prototype.moveHand = function () {
        console.log(this.HandClass.State.curState);
        if (!this.IsInited)
            return;
        if (this.HandClass.State.curState == Config.StateConfig.STOP)
            return;
        if (this.HandClass.State.curState == Config.StateConfig.IDEL) {
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
        switch (this.HandClass.State.curState) {
            case Config.StateConfig.IDEL:
                break;
            case Config.StateConfig.MOVE_FORWARD:
                this.handForward();
                break;
            case Config.StateConfig.MOVE_BACK:
                this.handBack();
                break;
            case Config.StateConfig.BACK_PASSED:
                this.handBack();
                break;
        }
    };
    GrabLogic.prototype.onUpdate = function () {
        // console.log('每一帧时间：',Laya.timer.delta);
        this.updateDesk();
        this.updateHand();
    };
    return GrabLogic;
}(Common.EventDispather));
exports.GrabLogic = GrabLogic;
},{"../Common/Common":1,"../Config/Config":8,"../Core/Core":20,"../Data/Data":23,"../Manager/Manager":38,"./Logic":31}],30:[function(require,module,exports){
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
},{"../Common/Common":1}],31:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./GrabLogic"));
__export(require("./DeskCollisionScript"));
__export(require("./HandCollisionScript"));
__export(require("./CollisionScriptBase"));
},{"./CollisionScriptBase":27,"./DeskCollisionScript":28,"./GrabLogic":29,"./HandCollisionScript":30}],32:[function(require,module,exports){
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
},{"./GameConfig":25,"./Manager/Manager":38}],33:[function(require,module,exports){
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
},{"../Common/Common":1,"./Manager":38}],34:[function(require,module,exports){
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
},{"../Config/Config":8}],35:[function(require,module,exports){
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
},{"../Common/Common":1,"../Data/Data":23,"./Manager":38}],36:[function(require,module,exports){
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
},{"../UI/UI":58,"./Manager":38}],37:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/LocalConfig":12,"../Manager/Manager":38,"../UI/UI":58}],38:[function(require,module,exports){
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
},{"./BaseManager":33,"./ClickEffectManager":34,"./DataManager":35,"./LoadingIconManager":36,"./LoadingProgressManager":37,"./NetManager":39,"./PoolManager":40,"./RoleBase":41,"./RoleManager":42,"./SceneManager":43,"./SpawnManager":44,"./StateBase":45,"./TimerManager":46,"./UIManager":47,"./VersionManager":48}],39:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"./Manager":38}],40:[function(require,module,exports){
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
},{"../Config/Config":8,"./Manager":38}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("./Manager");
var Config = require("../Config/Config");
var RoleBase = /** @class */ (function () {
    function RoleBase(head, bodySlot, body) {
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
},{"../Config/Config":8,"./Manager":38}],42:[function(require,module,exports){
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
        var _a;
        var data = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            data[_i - 3] = arguments[_i];
        }
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
                role.State.changeState(Config.StateConfig.IDEL);
                break;
            case this.ANIMATOR_DEAD:
                role.State.changeState(Config.StateConfig.DEAD);
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
},{"../Config/Config":8,"../Manager/Manager":38}],43:[function(require,module,exports){
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
},{"../GameConfig":25,"../GameScene":26,"./Manager":38}],44:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"./Manager":38}],45:[function(require,module,exports){
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
},{"../Config/Config":8}],46:[function(require,module,exports){
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
},{}],47:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../UI/Core":51,"../UI/UI":58,"./Manager":38}],48:[function(require,module,exports){
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
},{}],49:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"./Core":51}],50:[function(require,module,exports){
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
},{"./Core":51}],51:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../Manager/Manager":38}],52:[function(require,module,exports){
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
},{"../Common/Common":1,"./UI":58}],53:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"../Config/UIConfig":19,"../Data/Data":23,"../Manager/Manager":38,"./Core":51}],54:[function(require,module,exports){
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
},{"../Config/UIConfig":19,"./Core":51}],55:[function(require,module,exports){
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
},{"../Config/Config":8,"./UI":58}],56:[function(require,module,exports){
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
},{"../Config/Config":8,"./Core":51,"./UI":58}],57:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"./Core":51}],58:[function(require,module,exports){
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
},{"./ChooseServiceController":49,"./ChooseServiceView":50,"./Core":51,"./LoadingController":52,"./LoadingProgressController":53,"./LoadingProgressView":54,"./LoadingView":55,"./PublicConfirmationController":56,"./PublicConfirmationView":57}]},{},[32])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvTGF5YUFpcklERS9yZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29tbW9uL0NvbW1vbi50cyIsInNyYy9Db21tb24vRXZlbnRUeXBlLnRzIiwic3JjL0NvbW1vbi9HRXZlbnQudHMiLCJzcmMvQ29tbW9uL0xvZ2ljVXRpbHMudHMiLCJzcmMvQ29tbW9uL1Jlc291cmNlLnRzIiwic3JjL0NvbW1vbi9VdGlscy50cyIsInNyYy9Db21tb24vV3hVdGlscy50cyIsInNyYy9Db25maWcvQ29uZmlnLnRzIiwic3JjL0NvbmZpZy9Db25maWdVdGlscy50cyIsInNyYy9Db25maWcvRGF0YUNvbmZpZy50cyIsInNyYy9Db25maWcvRGVmaW5lLnRzIiwic3JjL0NvbmZpZy9Mb2NhbENvbmZpZy50cyIsInNyYy9Db25maWcvTG9jYWxDb250ZW50LnRzIiwic3JjL0NvbmZpZy9Mb2dpblJlc1VybHMudHMiLCJzcmMvQ29uZmlnL05ldENvbmZpZy50cyIsInNyYy9Db25maWcvT2JqZWN0Q29uZmlnLnRzIiwic3JjL0NvbmZpZy9SZXNVcmxzLnRzIiwic3JjL0NvbmZpZy9TdGF0ZUNvbmZpZy50cyIsInNyYy9Db25maWcvVUlDb25maWcudHMiLCJzcmMvQ29yZS9Db3JlLnRzIiwic3JjL0NvcmUvT2JqZWN0UHJveHkudHMiLCJzcmMvQ29yZS9SaWdpZE9iamVjdC50cyIsInNyYy9EYXRhL0RhdGEudHMiLCJzcmMvRGF0YS9EYXRhQmFzZS50cyIsInNyYy9HYW1lQ29uZmlnLnRzIiwic3JjL0dhbWVTY2VuZS50cyIsInNyYy9Mb2dpYy9Db2xsaXNpb25TY3JpcHRCYXNlLnRzIiwic3JjL0xvZ2ljL0Rlc2tDb2xsaXNpb25TY3JpcHQudHMiLCJzcmMvTG9naWMvR3JhYkxvZ2ljLnRzIiwic3JjL0xvZ2ljL0hhbmRDb2xsaXNpb25TY3JpcHQudHMiLCJzcmMvTG9naWMvTG9naWMudHMiLCJzcmMvTWFpbi50cyIsInNyYy9NYW5hZ2VyL0Jhc2VNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvQ2xpY2tFZmZlY3RNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvRGF0YU1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9Mb2FkaW5nSWNvbk1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9Mb2FkaW5nUHJvZ3Jlc3NNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL05ldE1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9Qb29sTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1JvbGVCYXNlLnRzIiwic3JjL01hbmFnZXIvUm9sZU1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9TY2VuZU1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9TcGF3bk1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9TdGF0ZUJhc2UudHMiLCJzcmMvTWFuYWdlci9UaW1lck1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9VSU1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9WZXJzaW9uTWFuYWdlci50cyIsInNyYy9VSS9DaG9vc2VTZXJ2aWNlQ29udHJvbGxlci50cyIsInNyYy9VSS9DaG9vc2VTZXJ2aWNlVmlldy50cyIsInNyYy9VSS9Db3JlLnRzIiwic3JjL1VJL0xvYWRpbmdDb250cm9sbGVyLnRzIiwic3JjL1VJL0xvYWRpbmdQcm9ncmVzc0NvbnRyb2xsZXIudHMiLCJzcmMvVUkvTG9hZGluZ1Byb2dyZXNzVmlldy50cyIsInNyYy9VSS9Mb2FkaW5nVmlldy50cyIsInNyYy9VSS9QdWJsaWNDb25maXJtYXRpb25Db250cm9sbGVyLnRzIiwic3JjL1VJL1B1YmxpY0NvbmZpcm1hdGlvblZpZXcudHMiLCJzcmMvVUkvVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVkEsaUNBQTRCO0FBQzVCLGdDQUEyQjtBQUMzQiw2QkFBd0I7QUFDeEIsa0NBQTZCO0FBQzdCLCtCQUEwQjs7OztBQ0oxQix5Q0FBMkM7QUFDM0MsbUNBQThCO0FBRTlCO0lBQW9DLGtDQUFhO0lBQWpEO1FBQUEscUVBbURDO1FBbERhLGdCQUFVLEdBQUcsSUFBSSxLQUFLLEVBQXFCLENBQUM7O0lBa0QxRCxDQUFDO0lBL0NHLE1BQU07SUFDQywrQkFBZ0IsR0FBdkIsVUFBd0IsR0FBRyxFQUFFLE9BQWdCO1FBQ3pDLGdCQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLDRCQUFhLEdBQXBCLFVBQXFCLEdBQUc7UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUM3QixnQkFBTSxDQUFDLFFBQVEsT0FBZixnQkFBTSxHQUFVLEdBQUcsU0FBSyxJQUFJLEdBQUU7SUFDbEMsQ0FBQztJQUVNLGlDQUFrQixHQUF6QjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1lBQzdCLGdCQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwyQkFBWSxHQUFuQixVQUFvQixHQUFHLEVBQUUsUUFBaUI7UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUMvQyxnQ0FBZ0M7SUFDcEMsQ0FBQztJQUVELFNBQVM7SUFDRix5Q0FBZ0IsR0FBdkIsVUFBd0IsR0FBRyxFQUFFLE9BQWdCO1FBQ3pDLGdCQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxzQ0FBYSxHQUFwQixVQUFxQixHQUFHO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDN0IsZ0JBQU0sQ0FBQyxRQUFRLE9BQWYsZ0JBQU0sR0FBVSxHQUFHLFNBQUssSUFBSSxHQUFFO0lBQ2xDLENBQUM7SUFFRCxhQUFhO0lBQ04sNENBQW1CLEdBQTFCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1lBQ3ZCLGdCQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxxQ0FBWSxHQUFuQixVQUFvQixHQUFHLEVBQUUsUUFBaUI7UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUMvQyxnQ0FBZ0M7SUFDcEMsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDSSxhQUFhO1FBQ2IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQWhEZ0IsK0JBQWdCLEdBQUcsSUFBSSxLQUFLLEVBQXFCLENBQUMsQ0FBQyxRQUFRO0lBaURoRixxQkFBQztDQW5ERCxBQW1EQyxDQW5EbUMsSUFBSSxDQUFDLFFBQVEsR0FtRGhEO0FBbkRZLHdDQUFjO0FBcUQzQiwwRUFBMEU7QUFFMUUsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLDBEQUFtQixDQUFBO0lBQ25CLG9EQUFlLENBQUE7SUFDZiw2Q0FBVSxDQUFBO0FBQ2QsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBRUQsTUFBTTtBQUNOLElBQUssV0FVSjtBQVZELFdBQUssV0FBVztJQUNaLCtDQUFTLENBQUE7SUFDVCw2Q0FBUSxDQUFBO0lBQ1IsMkNBQU8sQ0FBQTtJQUNQLHlDQUFNLENBQUE7SUFDTiwyQ0FBTyxDQUFBO0lBQ1AsdURBQWEsQ0FBQTtJQUNiLCtDQUFTLENBQUE7SUFDVCw2Q0FBUSxDQUFBO0lBQ1IsK0NBQVMsQ0FBQTtBQUNiLENBQUMsRUFWSSxXQUFXLEtBQVgsV0FBVyxRQVVmO0FBRUQsSUFBWSxTQU9YO0FBUEQsV0FBWSxTQUFTO0lBQ2pCLGdEQUFzRCxDQUFBO0lBQ3RELDRDQUFvRCxDQUFBO0lBQ3BELDhDQUFxRCxDQUFBO0lBQ3JELDhDQUFxRCxDQUFBO0lBQ3JELDBDQUFtRCxDQUFBO0lBQ25ELHdEQUEwRCxDQUFBO0FBQzlELENBQUMsRUFQVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQU9wQjtBQUVELElBQVksVUFPWDtBQVBELFdBQVksVUFBVTtJQUNsQiw4REFBNkQsQ0FBQTtJQUM3RCw0REFBNEQsQ0FBQTtJQUM1RCwwREFBMkQsQ0FBQTtJQUMzRCxnRUFBOEQsQ0FBQTtJQUM5RCw4REFBNkQsQ0FBQTtJQUM3RCxnRUFBNkQsQ0FBQTtBQUNqRSxDQUFDLEVBUFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFPckI7QUFFRCw0REFBNEQ7QUFFNUQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLElBQUssV0FFSjtBQUZELFdBQUssV0FBVztJQUNaLHdDQUFtQixTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxnQkFBQSxDQUFBO0FBQzVFLENBQUMsRUFGSSxXQUFXLEtBQVgsV0FBVyxRQUVmO0FBRUQsUUFBUTtBQUNSLElBQUksb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLElBQVksaUJBR1g7QUFIRCxXQUFZLGlCQUFpQjtJQUN6Qix3REFBc0IsV0FBVyxDQUFDLFVBQVUsR0FBRyxvQkFBb0IsRUFBRSxvQkFBQSxDQUFBO0lBQ3JFLHNEQUFzQixXQUFXLENBQUMsVUFBVSxHQUFHLG9CQUFvQixFQUFFLGtCQUFBLENBQUE7QUFDekUsQ0FBQyxFQUhXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBRzVCO0FBRUQsNERBQTREO0FBRTVELElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN2QixJQUFLLGFBR0o7QUFIRCxXQUFLLGFBQWE7SUFDZCx1Q0FBYyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxXQUFBLENBQUE7SUFDdkUsdUNBQWMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsV0FBQSxDQUFBO0FBQzNFLENBQUMsRUFISSxhQUFhLEtBQWIsYUFBYSxRQUdqQjtBQUVELElBQUk7QUFDSixJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQUN6QixJQUFZLGFBTVg7QUFORCxXQUFZLGFBQWE7SUFDckIsZ0RBQWtCLGFBQWEsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLEVBQUUsb0JBQUEsQ0FBQTtJQUMxRCw4Q0FBa0IsYUFBYSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsRUFBRSxrQkFBQSxDQUFBO0lBQzFELCtDQUFrQixhQUFhLENBQUMsS0FBSyxHQUFHLGdCQUFnQixFQUFFLG1CQUFBLENBQUE7SUFDMUQsOENBQWtCLGFBQWEsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLEVBQUUsa0JBQUEsQ0FBQTtJQUMxRCxnREFBa0IsYUFBYSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsRUFBRSxvQkFBQSxDQUFBO0FBQzlELENBQUMsRUFOVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQU14QjtBQUVELFFBQVE7QUFDUixJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQUN6QixJQUFZLGFBRVg7QUFGRCxXQUFZLGFBQWE7SUFDckIsMENBQWtCLGFBQWEsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLEVBQUUsY0FBQSxDQUFBO0FBQzlELENBQUMsRUFGVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUV4QjtBQUVELDREQUE0RDtBQUU1RCxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDdEIsSUFBSyxZQUlKO0FBSkQsV0FBSyxZQUFZO0lBQ2Isc0NBQWUsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsWUFBQSxDQUFBO0lBQ3ZFLHFDQUFjLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLFdBQUEsQ0FBQTtJQUN0RSxvQ0FBYSxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxVQUFBLENBQUE7QUFDekUsQ0FBQyxFQUpJLFlBQVksS0FBWixZQUFZLFFBSWhCO0FBRUQsSUFBSTtBQUNKLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUNyQiwyQ0FBdUIsWUFBWSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxlQUFBLENBQUE7SUFDL0QscURBQXVCLFlBQVksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUseUJBQUEsQ0FBQTtBQUNuRSxDQUFDLEVBSFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFHeEI7QUFFRCxJQUFJO0FBQ0osSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLElBQVksWUFFWDtBQUZELFdBQVksWUFBWTtJQUNwQix5Q0FBZSxZQUFZLENBQUMsS0FBSyxHQUFHLGVBQWUsRUFBRSxlQUFBLENBQUE7QUFDekQsQ0FBQyxFQUZXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBRXZCO0FBRUQsSUFBSTtBQUNKLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN2QixJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDbkIsdUNBQTBCLFlBQVksQ0FBQyxJQUFJLEdBQUcsY0FBYyxFQUFFLGVBQUEsQ0FBQTtJQUM5RCxxQ0FBMEIsWUFBWSxDQUFDLElBQUksR0FBRyxjQUFjLEVBQUUsYUFBQSxDQUFBO0lBQzlELHlDQUEwQixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSxpQkFBQSxDQUFBO0lBQzlELCtDQUEwQixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSx1QkFBQSxDQUFBO0FBQ2xFLENBQUMsRUFMVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUt0QjtBQUdELDREQUE0RDtBQUU1RCxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDcEIsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ2xCLGdDQUFhLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLFVBQUEsQ0FBQTtJQUNoRSxrQ0FBYSxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxZQUFBLENBQUE7QUFDcEUsQ0FBQyxFQUhXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBR3JCO0FBRUQsTUFBTTtBQUNOLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztBQUNyQixJQUFZLFNBWVg7QUFaRCxXQUFZLFNBQVM7SUFDakIseUNBQXNCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLHFCQUFBLENBQUE7SUFDM0UsaUNBQXNCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLGFBQUEsQ0FBQTtJQUMzRSx1Q0FBc0IsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sbUJBQUEsQ0FBQTtJQUMzRSxrQ0FBc0IsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sY0FBQSxDQUFBO0lBQzNFLHlDQUFzQixVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxxQkFBQSxDQUFBO0lBQzNFLG1DQUFzQixVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxlQUFBLENBQUE7SUFDM0UsbUNBQXNCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLGVBQUEsQ0FBQTtJQUMzRSxxQ0FBc0IsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0saUJBQUEsQ0FBQTtJQUMzRSw0Q0FBc0IsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sd0JBQUEsQ0FBQTtJQUMzRSxrQ0FBc0IsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sY0FBQSxDQUFBO0FBRS9FLENBQUMsRUFaVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQVlwQjtBQUVELE1BQU07QUFDTixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDdkIsSUFBWSxXQU1YO0FBTkQsV0FBWSxXQUFXO0lBQ25CLDZDQUFxQixVQUFVLENBQUMsTUFBTSxHQUFHLGNBQWMsRUFBRSxxQkFBQSxDQUFBO0lBQ3pELDRDQUFxQixVQUFVLENBQUMsTUFBTSxHQUFHLGNBQWMsRUFBRSxvQkFBQSxDQUFBO0lBQ3pELDZDQUFxQixVQUFVLENBQUMsTUFBTSxHQUFHLGNBQWMsRUFBRSxxQkFBQSxDQUFBO0lBQ3pELHVDQUFxQixVQUFVLENBQUMsTUFBTSxHQUFHLGNBQWMsRUFBRSxlQUFBLENBQUE7SUFDekQsd0NBQXFCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsY0FBYyxFQUFFLGdCQUFBLENBQUE7QUFDN0QsQ0FBQyxFQU5XLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBTXRCO0FBRUQsOERBQThEO0FBRTlELElBQUksa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLElBQUssaUJBRUo7QUFGRCxXQUFLLGlCQUFpQjtJQUNsQixxREFBb0IsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxpQkFBQSxDQUFBO0FBQ3pGLENBQUMsRUFGSSxpQkFBaUIsS0FBakIsaUJBQWlCLFFBRXJCO0FBRUQsSUFBSTtBQUNKLElBQUksMEJBQTBCLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLElBQVksdUJBR1g7QUFIRCxXQUFZLHVCQUF1QjtJQUMvQiw2REFBZSxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLEVBQUUsYUFBQSxDQUFBO0lBQzNFLGlFQUFzQixpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsMEJBQTBCLEVBQUUsaUJBQUEsQ0FBQTtBQUN0RixDQUFDLEVBSFcsdUJBQXVCLEdBQXZCLCtCQUF1QixLQUF2QiwrQkFBdUIsUUFHbEM7QUFFRCw0REFBNEQ7QUFFNUQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLElBQUssWUFNSjtBQU5ELFdBQUssWUFBWTtJQUNiLHFDQUFjLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLFdBQUEsQ0FBQTtJQUNyRSxvQ0FBYyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxVQUFBLENBQUE7SUFDckUsc0NBQWMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsWUFBQSxDQUFBO0lBQ3JFLHNDQUFjLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLFlBQUEsQ0FBQTtJQUNyRSwwQ0FBYyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxnQkFBQSxDQUFBO0FBQ3pFLENBQUMsRUFOSSxZQUFZLEtBQVosWUFBWSxRQU1oQjtBQUVELE1BQU07QUFDTixJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDeEIsSUFBWSxZQVVYO0FBVkQsV0FBWSxZQUFZO0lBQ3BCLGlEQUF3QixZQUFZLENBQUMsS0FBSyxHQUFHLGVBQWUsRUFBRSx1QkFBQSxDQUFBO0lBQzlELGdEQUF3QixZQUFZLENBQUMsS0FBSyxHQUFHLGVBQWUsRUFBRSxzQkFBQSxDQUFBO0lBQzlELG1EQUF3QixZQUFZLENBQUMsS0FBSyxHQUFHLGVBQWUsRUFBRSx5QkFBQSxDQUFBO0lBQzlELG1EQUF3QixZQUFZLENBQUMsS0FBSyxHQUFHLGVBQWUsRUFBRSx5QkFBQSxDQUFBO0lBQzlELGtEQUF3QixZQUFZLENBQUMsS0FBSyxHQUFHLGVBQWUsRUFBRSx3QkFBQSxDQUFBO0lBQzlELGtEQUF3QixZQUFZLENBQUMsS0FBSyxHQUFHLGVBQWUsRUFBRSx3QkFBQSxDQUFBO0lBQzlELGtEQUF3QixZQUFZLENBQUMsS0FBSyxHQUFHLGVBQWUsRUFBRSx3QkFBQSxDQUFBO0lBQzlELGtEQUF3QixZQUFZLENBQUMsS0FBSyxHQUFHLGVBQWUsRUFBRSx3QkFBQSxDQUFBO0lBQzlELG1EQUF3QixZQUFZLENBQUMsS0FBSyxHQUFHLGVBQWUsRUFBRSx5QkFBQSxDQUFBO0FBQ2xFLENBQUMsRUFWVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQVV2QjtBQUVELE1BQU07QUFDTixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDdkIsSUFBWSxXQVdYO0FBWEQsV0FBWSxXQUFXO0lBQ25CLDZDQUF3QixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSxxQkFBQSxDQUFBO0lBQzVELDRDQUF3QixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSxvQkFBQSxDQUFBO0lBQzVELHNDQUF3QixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSxjQUFBLENBQUE7SUFDNUQsdUNBQXdCLFlBQVksQ0FBQyxJQUFJLEdBQUcsY0FBYyxFQUFFLGVBQUEsQ0FBQTtJQUM1RCxrREFBd0IsWUFBWSxDQUFDLElBQUksR0FBRyxjQUFjLEVBQUUsMEJBQUEsQ0FBQTtJQUM1RCxtREFBd0IsWUFBWSxDQUFDLElBQUksR0FBRyxjQUFjLEVBQUUsMkJBQUEsQ0FBQTtJQUM1RCxpREFBc0IsWUFBWSxDQUFDLElBQUksR0FBRyxjQUFjLEVBQUUseUJBQUEsQ0FBQTtJQUMxRCxpREFBd0IsWUFBWSxDQUFDLElBQUksR0FBRyxjQUFjLEVBQUUseUJBQUEsQ0FBQTtJQUM1RCwrQ0FBc0IsWUFBWSxDQUFDLElBQUksR0FBRyxjQUFjLEVBQUUsdUJBQUEsQ0FBQTtJQUMxRCxxQ0FBd0IsWUFBWSxDQUFDLElBQUksR0FBRyxjQUFjLEVBQUUsYUFBQSxDQUFBO0FBQ2hFLENBQUMsRUFYVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQVd0QjtBQUVELE1BQU07QUFDTixJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQUN6QixJQUFZLGFBRVg7QUFGRCxXQUFZLGFBQWE7SUFDckIsa0RBQXlCLFlBQVksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsc0JBQUEsQ0FBQTtBQUNyRSxDQUFDLEVBRlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFFeEI7QUFFRCxJQUFJO0FBQ0osSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFDekIsSUFBWSxhQU9YO0FBUEQsV0FBWSxhQUFhO0lBQ3JCLDRDQUF1QixZQUFZLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFFLGdCQUFBLENBQUE7SUFDL0QsZ0RBQXVCLFlBQVksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsb0JBQUEsQ0FBQTtJQUMvRCxrREFBdUIsWUFBWSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxzQkFBQSxDQUFBO0lBQy9ELCtDQUF1QixZQUFZLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFFLG1CQUFBLENBQUE7SUFDL0Qsb0RBQXVCLFlBQVksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsd0JBQUEsQ0FBQTtJQUMvRCxtREFBdUIsWUFBWSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSx1QkFBQSxDQUFBO0FBQ25FLENBQUMsRUFQVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQU94QjtBQUVELFFBQVE7QUFDUixJQUFJLG9CQUFvQixHQUFHLENBQUMsQ0FBQztBQUM3QixJQUFZLGtCQU1YO0FBTkQsV0FBWSxrQkFBa0I7SUFDMUIsMkRBQXVCLFlBQVksQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLEVBQUUscUJBQUEsQ0FBQTtJQUN2RSx5REFBdUIsWUFBWSxDQUFDLFVBQVUsR0FBRyxvQkFBb0IsRUFBRSxtQkFBQSxDQUFBO0lBQ3ZFLHlEQUF1QixZQUFZLENBQUMsVUFBVSxHQUFHLG9CQUFvQixFQUFFLG1CQUFBLENBQUE7SUFDdkUsMkRBQXVCLFlBQVksQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLEVBQUUscUJBQUEsQ0FBQTtJQUN2RSwyREFBdUIsWUFBWSxDQUFDLFVBQVUsR0FBRyxvQkFBb0IsRUFBRSxxQkFBQSxDQUFBO0FBQzNFLENBQUMsRUFOVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQU03Qjs7OztBQ3RSRCx5Q0FBMkM7QUFHM0M7SUFBQTtJQWdEQSxDQUFDO0lBckNVLGtCQUFXLEdBQWxCLFVBQW1CLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTTtRQUNoQyxJQUFHLENBQUMsR0FBRyxJQUFJLE9BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVO1lBQUUsT0FBTztRQUU5QyxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3BEO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSxxQkFBYyxHQUFyQixVQUFzQixHQUFHLEVBQUUsSUFBSTtRQUMzQixJQUFHLENBQUMsR0FBRyxJQUFJLE9BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVO1lBQUUsT0FBTztRQUU5QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUcsQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUVqQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxlQUFRLEdBQWYsVUFBZ0IsR0FBRzs7UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUN4QixJQUFHLENBQUMsR0FBRztZQUFFLE9BQU87UUFFaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFHLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFakIsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3pCLElBQUcsT0FBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVO2dCQUFFLE9BQU87WUFFbkQsQ0FBQSxLQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxJQUFJLFlBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBSyxJQUFJLEdBQUU7U0FDcEQ7SUFDTCxDQUFDO0lBRU0sWUFBSyxHQUFaLFVBQWEsR0FBRztRQUNaLElBQUcsQ0FBQyxHQUFHO1lBQUUsT0FBTTtRQUVmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBOUNELCtDQUErQztJQUMvQyxRQUFRO0lBQ1EsNkJBQXNCLEdBQUcsS0FBSyxDQUFBO0lBQzlDLE1BQU07SUFDVSxtQkFBWSxHQUFHLEtBQUssQ0FBQTtJQUNwQyxRQUFRO0lBQ1Esb0JBQWEsR0FBRyxLQUFLLENBQUE7SUFFdEIsZ0JBQVMsR0FBMkMsRUFBRSxDQUFDO0lBdUMxRSxhQUFDO0NBaERELEFBZ0RDLElBQUE7a0JBaERvQixNQUFNOzs7O0FDRzNCLFdBQVc7QUFDWCxTQUFnQixhQUFhLENBQUMsT0FBYyxFQUFFLE9BQWMsRUFBRSxLQUFZO0lBQ3RFLE9BQU8sT0FBTyxHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFGRCxzQ0FFQztBQUVELFdBQVc7QUFDWCxTQUFnQixpQkFBaUIsQ0FBQyxPQUFjLEVBQUUsS0FBWTtJQUMxRCxPQUFPLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDM0IsQ0FBQztBQUZELDhDQUVDOzs7O0FDWkQ7SUFBOEIsNEJBQVc7SUFJckM7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFRCxzQkFBVyxnQkFBSTthQUFmO1lBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUM7Z0JBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO2FBQ25DO1lBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRU0sYUFBSSxHQUFYLFVBQVksR0FBRyxFQUFFLE9BQVEsRUFBRSxRQUFrQixFQUFFLFFBQWtCLEVBQUUsT0FBZTtRQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDWixHQUFHLEVBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQ3RDLE9BQU8sQ0FDVixDQUFDO0lBQ04sQ0FBQztJQUVNLHFCQUFZLEdBQW5CLFVBQW9CLE9BQWM7UUFDOUIsSUFBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUVNLGVBQU0sR0FBYixVQUFjLElBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sbUJBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVNLDBCQUFPLEdBQWQ7UUFDSSxJQUFJLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzVCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQzdCO2FBQUs7WUFDRixPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FDdkQ7SUFDTCxDQUFDO0lBOUNjLGtCQUFTLEdBQWEsSUFBSSxDQUFDO0lBQzNCLHlCQUFnQixHQUE4QixFQUFFLENBQUM7SUE4Q3BFLGVBQUM7Q0FoREQsQUFnREMsQ0FoRDZCLElBQUksQ0FBQyxNQUFNLEdBZ0R4QztBQWhEWSw0QkFBUTs7OztBQ0RyQiwrQ0FBNEM7QUFDNUMseUNBQTJDO0FBRTNDLDRDQUE4QztBQUU5QyxXQUFXO0FBQ1gsU0FBZ0IsV0FBVyxDQUFDLEVBQUUsRUFBRSxVQUFtQjtJQUMvQyxJQUFHLEVBQUUsSUFBSSxTQUFTO1FBQUUsT0FBTztJQUUzQixJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5ELElBQUcsVUFBVSxFQUFDO1FBQ1YsT0FBTyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztLQUNsQztJQUVELE9BQU8sS0FBSyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztBQUNqRCxDQUFDO0FBWkQsa0NBWUM7QUFFRCxRQUFRO0FBQ1I7O0dBRUc7QUFDSCxTQUFnQixlQUFlLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPO0lBQ3ZELElBQUcsUUFBUSxZQUFZLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDakMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7YUFDcEIsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ3RDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDdEM7QUFDTCxDQUFDO0FBUkQsMENBUUM7QUFFRCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCOztHQUVHO0FBQ0gsU0FBZ0IsWUFBWSxDQUFDLFFBQVE7SUFDakMsSUFBRyxRQUFRLElBQUksSUFBSTtRQUFFLE9BQU87SUFFNUIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsSUFBRyxRQUFRLFlBQVksS0FBSyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO1FBQ2pELFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztZQUMxQixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztLQUNOO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQVhELG9DQVdDO0FBRUQsZ0JBQWdCO0FBQ2hCLFNBQWdCLFlBQVksQ0FBQyxNQUFtQixFQUFFLEtBQWtCO0lBRWhFLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSTtRQUMvQixPQUFPLEtBQUssQ0FBQztJQUVqQixJQUFJO0lBQ0osSUFBRyxNQUFNLElBQUksS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDO0lBRWhCLElBQUksQ0FBQyxHQUFtQixLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3JDLE9BQU0sQ0FBQyxFQUNQO1FBQ0ksSUFBRyxDQUFDLElBQUksTUFBTTtZQUNWLE9BQU8sSUFBSSxDQUFDO1FBRWhCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQWxCRCxvQ0FrQkM7QUFFRCxnQkFBZ0I7QUFDaEIsU0FBZ0IsUUFBUSxDQUFDLEVBQVMsRUFBRSxFQUFTLEVBQUUsSUFBaUI7SUFDNUQsSUFBRyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTztJQUU3QyxRQUFRO0lBQ1IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRTlCLElBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQzNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO1NBQUk7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO0FBQ0wsQ0FBQztBQVhELDRCQVdDO0FBU0QsU0FBZ0IsZUFBZSxDQUFDLEdBQW1CO0lBQy9DLE9BQU87UUFDSCxlQUFlLEVBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVU7UUFDMUQsWUFBWSxFQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVTtRQUNwRCxVQUFVLEVBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXO1FBQ2pELGVBQWUsRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsV0FBVztLQUM5RCxDQUFBO0FBQ0wsQ0FBQztBQVBELDBDQU9DO0FBRUQsOEJBQThCO0FBQzlCOzs7R0FHRztBQUNILDBEQUEwRDtBQUMxRCxvQ0FBb0M7QUFFcEMsaUVBQWlFO0FBQ2pFLGdFQUFnRTtBQUVoRSw2Q0FBNkM7QUFDN0MsMkRBQTJEO0FBQzNELFFBQVE7QUFDUixJQUFJO0FBRUosU0FBUztBQUNULHlDQUF5QztBQUN6Qyw2Q0FBNkM7QUFDN0MsZ0NBQWdDO0FBQ2hDLG9CQUFvQjtBQUNwQixzQ0FBc0M7QUFDdEMsZ0NBQWdDO0FBQ2hDLDJFQUEyRTtBQUMzRSxvQkFBb0I7QUFDcEIsZUFBZTtBQUNmLG9EQUFvRDtBQUNwRCwyRUFBMkU7QUFDM0Usb0JBQW9CO0FBQ3BCLFFBQVE7QUFDUixJQUFJO0FBR0osU0FBUztBQUNUOzs7R0FHRztBQUNILFNBQWdCLFlBQVksQ0FBQyxHQUFHO0lBQUUsY0FBTztTQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87UUFBUCw2QkFBTzs7SUFDckMsSUFBRyxPQUFNLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUTtRQUFFLE9BQU87SUFFbkMsSUFBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztRQUFFLE9BQU8sR0FBRyxDQUFDO0lBRWhELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDWixJQUFHLE9BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLEVBQUU7UUFDMUIsS0FBSSxJQUFJLEdBQUcsSUFBSSxLQUFLO1lBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxDQUFDO0tBQ1o7U0FBTTtRQUNILEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUNuQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsQ0FBQztLQUNaO0FBQ0wsQ0FBQztBQWhCRCxvQ0FnQkM7QUFFRCxRQUFRO0FBQ1IsU0FBZ0IsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsV0FBVztJQUNuRCxJQUFHLEdBQUcsWUFBWSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRW5ELElBQUcsT0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBQztRQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7S0FDL0I7SUFFRCxJQUFHLE9BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxTQUFTLEVBQUM7UUFDaEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO0tBQ3pDO0FBQ0wsQ0FBQztBQVZELHdDQVVDO0FBRUQsUUFBUTtBQUNSLCtCQUErQjtBQUMvQixpREFBaUQ7QUFDakQsMEJBQTBCO0FBQzFCLGFBQWE7QUFDYixtQ0FBbUM7QUFDbkMsUUFBUTtBQUNSLElBQUk7QUFFSixPQUFPO0FBQ1AsU0FBZ0IsY0FBYyxDQUFDLEdBQVU7SUFDckMsSUFBRyxHQUFHLEdBQUcsQ0FBQyxFQUFDO1FBQ1AsR0FBRyxHQUFHLENBQUMsQ0FBQztLQUNYO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBTkQsd0NBTUM7QUFFRCxRQUFRO0FBQ1IsNkNBQTZDO0FBQzdDLG1DQUFtQztBQUVuQywwQkFBMEI7QUFDMUIsNENBQTRDO0FBQzVDLDZEQUE2RDtBQUU3RCx5Q0FBeUM7QUFDekMsNkRBQTZEO0FBRTdELCtDQUErQztBQUMvQywrSUFBK0k7QUFFL0ksaURBQWlEO0FBQ2pELGdHQUFnRztBQUNoRyxRQUFRO0FBQ1IsSUFBSTtBQUVKLGFBQWE7QUFDYixTQUFnQixpQkFBaUIsQ0FBQyxLQUFxQixFQUFFLEdBQVU7SUFDL0QsSUFBRyxLQUFLLFlBQVksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLElBQUksT0FBTyxHQUFHLElBQUksUUFBUTtRQUFFLE9BQU87SUFFL0UsSUFBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUztRQUFFLE9BQU87SUFFN0MsS0FBSyxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFDOUIsQ0FBQztBQU5ELDhDQU1DO0FBRUQsU0FBUztBQUNULFNBQWdCLGVBQWUsQ0FBQyxNQUFNO0lBQ2xDLElBQUcsQ0FBQyxNQUFNO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFFckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osS0FBSSxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUM7UUFDaEIsR0FBRyxFQUFFLENBQUM7S0FDVDtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQVRELDBDQVNDO0FBRUQsWUFBWTtBQUNaOzs7R0FHRztBQUNILFNBQWdCLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSTtJQUNsQyw4Q0FBOEM7SUFDOUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUk7UUFDZCxPQUFPLEtBQUssQ0FBQztJQUVqQiw0Q0FBNEM7SUFDNUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNO1FBQzFCLE9BQU8sS0FBSyxDQUFDO0lBRWpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekMsaUNBQWlDO1FBQ2pDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxFQUFFO1lBQ3RELGlDQUFpQztZQUNqQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSztnQkFDaEMsT0FBTyxLQUFLLENBQUM7U0FDcEI7YUFDSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekIsaUZBQWlGO1lBQ2pGLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0tBQ0o7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBdEJELGtDQXNCQztBQUVELFFBQVE7QUFDUixTQUFnQixXQUFXLENBQUMsR0FBYyxFQUFFLEtBQVksRUFBRSxLQUFLO0lBQzNELElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7UUFDOUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hDLE9BQU87S0FDVjtJQUVELElBQUksTUFBTSxDQUFDO0lBQ1gsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7UUFDTixJQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUM7WUFDakIsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNYLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFmRCxrQ0FlQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxLQUFLO0lBQzdCLElBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTTtRQUNaLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQTtJQUU3QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsSUFBSSxPQUFPLEdBQUcsVUFBVSxHQUFFLE1BQU0sQ0FBQztJQUNqQyxJQUFJLEdBQUcsR0FBSSxPQUFPLEdBQUMsT0FBTyxHQUFDLEdBQUcsR0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzNDLElBQUksSUFBSSxHQUFDLEVBQUMsSUFBSSxFQUFDLE9BQU8sR0FBQyxHQUFHLEdBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsQ0FBQTtJQUMzQyxPQUFPLElBQUksQ0FBQTtBQUNmLENBQUM7QUFURCxrQ0FTQztBQUVELFNBQVM7QUFDVCxTQUFnQixVQUFVO0lBQ3RCLDZEQUE2RDtJQUM3RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ25DLENBQUM7QUFIRCxnQ0FHQztBQUVELFFBQVE7QUFDUixTQUFnQixVQUFVO0lBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7QUFDakMsQ0FBQztBQUZELGdDQUVDO0FBRUQsUUFBUTtBQUNSLFNBQWdCLE1BQU07SUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUNyQyxDQUFDO0FBRkQsd0JBRUM7QUFFRCxTQUFTO0FBQ1QsU0FBZ0IsV0FBVztJQUN2QixPQUFPLE1BQU0sRUFBRSxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ3BDLENBQUM7QUFGRCxrQ0FFQztBQUVELFFBQVE7QUFDUjs7R0FFRztBQUNILFNBQWdCLGNBQWMsQ0FBQyxLQUFLO0lBQ2hDLElBQUcsQ0FBQyxLQUFLO1FBQUUsT0FBTztJQUVsQixNQUFNO0lBQ04sSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ25FLElBQUksbUJBQW1CLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUN6RSxJQUFJLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFFdkUsT0FBTztRQUNILE1BQU07UUFDTixVQUFVLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDNUMsT0FBTztRQUNQLGdCQUFnQixFQUFFLGdCQUFnQjtRQUNsQyxLQUFLO1FBQ0wsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVE7UUFDN0QsUUFBUTtRQUNSLG1CQUFtQixFQUFFLG1CQUFtQjtRQUN4QyxTQUFTO1FBQ1Qsa0JBQWtCLEVBQUUsa0JBQWtCO1FBQ3RDLFNBQVM7UUFDVCxhQUFhLEVBQUUsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUN6RCxRQUFRO1FBQ1IsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztLQUNuRSxDQUFBO0FBQ0wsQ0FBQztBQXhCRCx3Q0F3QkM7QUFFRCxNQUFNO0FBQ04sU0FBZ0IsZ0JBQWdCLENBQUMsR0FBVSxFQUFFLEtBQVk7SUFDckQsSUFBRyxDQUFDLEtBQUs7UUFBRSxPQUFPO0lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBSEQsNENBR0M7QUFFRCxTQUFnQixlQUFlLENBQUMsR0FBVTtJQUN0QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFGRCwwQ0FFQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxHQUFVLEVBQUUsS0FBSztJQUMzQyxPQUFPO0lBQ1AsSUFBRyxDQUFDLEtBQUs7UUFBRSxPQUFPO0lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBSkQsc0NBSUM7QUFFRCxTQUFnQixZQUFZLENBQUMsR0FBVTtJQUNuQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFGRCxvQ0FFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVTtJQUN4QyxJQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVTtRQUFFLE9BQU87SUFFbkMsS0FBSSxJQUFJLENBQUMsSUFBSSxPQUFPLEVBQUM7UUFDakIsSUFBRyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUM7WUFDL0IsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtLQUNKO0FBQ0wsQ0FBQztBQVJELDRCQVFDO0FBRUQsVUFBVTtBQUNWOzs7R0FHRztBQUNILGtEQUFrRDtBQUNsRCx5QkFBeUI7QUFFekIsdUNBQXVDO0FBQ3ZDLGtIQUFrSDtBQUNsSCx3QkFBd0I7QUFDeEIscUNBQXFDO0FBQ3JDLGdEQUFnRDtBQUNoRCxxQkFBcUI7QUFFckIsdUNBQXVDO0FBQ3ZDLHlEQUF5RDtBQUN6RCxxQkFBcUI7QUFFckIsb0NBQW9DO0FBQ3BDLHlEQUF5RDtBQUN6RCxxQkFBcUI7QUFFckIsbUJBQW1CO0FBQ25CLHFDQUFxQztBQUNyQyxxQkFBcUI7QUFDckIsUUFBUTtBQUVSLGtCQUFrQjtBQUNsQixJQUFJO0FBRUosSUFBSTtBQUNKLElBQUksTUFBc0IsQ0FBQztBQUMzQixTQUFnQixRQUFRLENBQUMsR0FBVTtJQUMvQixJQUFHLENBQUMsTUFBTSxFQUFDO1FBQ1AsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDeEMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxZQUFZLEdBQUcsbUJBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO0tBQ3ZEO0lBRUQsT0FBTztJQUNQLElBQUcsTUFBTSxDQUFDLE9BQU87UUFBRSxPQUFPO0lBRTFCLEdBQUcsR0FBRyxHQUFHLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztJQUN0RCxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNsQixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUV0QixNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsY0FBSyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEcsQ0FBQztBQWZELDRCQWVDO0FBVUQsSUFBSSxjQUE2QixDQUFDO0FBRWxDLFNBQVMsY0FBYyxDQUFDLE1BQXNCLEVBQUUsTUFBYTtJQUN6RCxJQUFHLE1BQU0sSUFBSSxDQUFDLEVBQUM7UUFDWCxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN6QixNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDOUI7U0FBSTtRQUNELE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0tBQy9CO0FBQ0wsQ0FBQztBQUVELFdBQVc7QUFDWCxJQUFJLGVBQStCLENBQUM7QUFDcEMsU0FBZ0IsWUFBWSxDQUFDLElBQWlCO0lBQzFDLElBQUcsQ0FBQyxJQUFJO1FBQUUsT0FBTztJQUNqQixJQUFHLENBQUMsZUFBZSxFQUFDO1FBQ2hCLGVBQWUsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDN0Q7SUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFQRCxvQ0FPQztBQUVELFdBQVc7QUFDWCwrQkFBK0I7QUFDL0IsbUNBQW1DO0FBRW5DLHNDQUFzQztBQUN0Qyx1REFBdUQ7QUFDdkQsb0RBQW9EO0FBQ3BELG9EQUFvRDtBQUNwRCxJQUFJO0FBRUosUUFBUTtBQUNSOzs7OztHQUtHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLFNBQWdCLEVBQUUsUUFBZSxFQUFFLElBQUssRUFBRSxTQUFrQjtJQUNuRixJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1FBQUUsT0FBTztJQUVuQyxvQkFBb0I7SUFDcEIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBLFFBQVE7SUFDcEUsSUFBRyxTQUFTLEVBQUM7UUFDVCxJQUFJLEdBQUcsR0FBRyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVMsS0FBSztZQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzNCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDckM7U0FBSTtRQUNELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmO0FBQ0wsQ0FBQztBQWZELGdDQWVDO0FBRUQsY0FBYztBQUNkLFNBQVMsY0FBYyxDQUFDLEdBQUc7SUFDdkIsSUFBRyxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsSUFBSSxRQUFRLEVBQUM7UUFDOUIsT0FBTyxDQUFDLENBQUM7S0FDWjtJQUNELDhCQUE4QjtJQUM5QixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNyRCxDQUFDO0FBRUQsb0JBQW9CO0FBQ3BCLFNBQWdCLFVBQVUsQ0FBQyxHQUFVO0lBQ2pDLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxHQUFVLENBQUM7SUFDNUIsSUFBRyxHQUFHLElBQUksT0FBTyxHQUFHLElBQUksUUFBUSxFQUFDO1FBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ2pCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDeEIsSUFBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBQztnQkFDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUNoQjtpQkFDRztnQkFDQSxPQUFPLEVBQUUsQ0FBQzthQUNiO1NBQ0o7S0FDSjtJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFkRCxnQ0FjQztBQUVELEtBQUs7QUFDTCxTQUFnQixRQUFRLENBQUMsR0FBVSxFQUFFLE1BQWE7SUFDOUMsSUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPO0lBRTNCLElBQUcsR0FBRyxJQUFJLElBQUksRUFBQztRQUNYLEtBQUksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFDO1lBQ2IsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQztnQkFDcEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDZCwwQkFBWSxDQUFVO2FBQzFCO2lCQUFLLElBQUcsT0FBTyxLQUFLLElBQUksUUFBUSxFQUFDO2dCQUM5QixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNmLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUI7aUJBQUk7Z0JBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUNyQjtTQUNKO0tBQ0o7QUFDTCxDQUFDO0FBakJELDRCQWlCQztBQUVELFFBQVE7QUFDUjtJQUlJLDJCQUFZLEdBQW1CO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUNuRSxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLDhDQUFpQjtBQVU5QixTQUFnQixZQUFZLENBQUMsUUFBUSxFQUFFLEdBQW1CO0lBQ3RELElBQUcsQ0FBQyxRQUFRLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTztJQUU3QixJQUFJLEtBQUssR0FBRyxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFKRCxvQ0FJQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLFdBQWlCLEVBQUUsSUFBZTtJQUMvRCxJQUFHLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFFakMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7UUFDakIsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBTkQsNENBTUM7QUFFRCxRQUFRO0FBQ1IsU0FBUyxlQUFlLENBQUMsT0FBTyxFQUFFLElBQWEsRUFBRSxJQUFJLEVBQUUsSUFBb0I7SUFDdkUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELElBQUksQ0FBQyxJQUFJLE9BQVQsSUFBSSxHQUFNLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxTQUFLLElBQUksR0FBRTtBQUN6QyxDQUFDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQUMsSUFBZSxFQUFFLE9BQU8sRUFBRSxJQUFhO0lBQUUsY0FBTztTQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87UUFBUCw2QkFBTzs7SUFDOUUsSUFBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPO0lBRTFCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNyRixDQUFDO0FBSkQsOENBSUM7Ozs7QUN0akJELG1DQUFxQztBQUNyQyw0Q0FBOEM7QUFDOUMsbUNBQThCO0FBQzlCLHlDQUEyQztBQUMzQyx5Q0FBMkM7QUFDM0MsK0JBQWlDO0FBQ2pDLHFEQUFnRDtBQUVoRCxNQUFNO0FBQ04sSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLE9BQU87QUFDUCxTQUFnQixLQUFLLENBQUMsU0FBaUI7SUFDbkMsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNYLE9BQU8sWUFBQyxHQUFHO1lBQ1AsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNWLElBQUcsU0FBUyxFQUFDO29CQUNULFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3hCO3FCQUFJO29CQUNELFNBQVM7b0JBQ1QsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQy9CLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQy9CO2FBQ0o7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQztLQUNKLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFuQkQsc0JBbUJDO0FBRUQsTUFBTTtBQUNOLFNBQWdCLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxRQUFpQjtJQUN6RCxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUNuRSxJQUFHLFFBQVEsRUFBQztZQUNSLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPO0tBQ1Y7SUFBQSxDQUFDO0lBRUYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztRQUMvQixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3JDLElBQUksRUFBRSxHQUFHO1lBQ1QsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDakIsdUJBQXVCO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNCLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBUyxHQUFHO2dCQUNkLG1CQUFtQjtnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBckJELGdEQXFCQztBQUVELFlBQVk7QUFDWixTQUFnQixlQUFlO0lBQzNCLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDckIsZUFBZSxFQUFFLElBQUk7S0FDeEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELDBDQU1DO0FBRUQsWUFBWTtBQUNaLFNBQWdCLGNBQWM7SUFDMUIsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNoRCxJQUFHLFVBQVUsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxFLE9BQU8sVUFBVSxDQUFDLFdBQVcsQ0FBQztLQUNqQztTQUFJO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNMLENBQUM7QUFaRCx3Q0FZQztBQUVELFlBQVk7QUFDWixTQUFnQixZQUFZO0lBQ3hCLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLElBQUksTUFBTSxHQUFHLGNBQWMsRUFBRSxDQUFDO0lBQzlCLHNCQUFzQjtJQUV0QixJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNqRCxJQUFHLFVBQVUsSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFDO1FBQzlCLDREQUE0RDtLQUMvRDtJQUVELG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLElBQUk7SUFFSixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2QyxpQ0FBaUM7SUFDakMsbURBQW1EO0lBRW5ELDZDQUE2QztJQUM3Qyx1RUFBdUU7SUFDdkUsaURBQWlEO0lBQ2pELDJGQUEyRjtJQUMzRix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELFlBQVk7SUFDWixRQUFRO0lBQ1IsTUFBTTtJQUVOLG9CQUFvQjtBQUN4QixDQUFDO0FBdkNELG9DQXVDQztBQUVELFNBQVM7QUFDVCxTQUFnQixhQUFhO0lBQ3pCLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDbkIsZUFBZSxFQUFFLElBQUk7S0FDeEIsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGlCQUFpQixDQUFDLGNBQU0sT0FBQSxDQUFDO1FBQzlCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZO1FBQ3JELEtBQUssRUFBRSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVO0tBQ2hELENBQUMsRUFKK0IsQ0FJL0IsQ0FBQyxDQUFDO0FBQ1IsQ0FBQztBQVpELHNDQVlDO0FBRUQsSUFBSTtBQUNKLFNBQWdCLFlBQVksQ0FBQyxHQUFVLEVBQUUsT0FBZSxFQUFFLGFBQXNCO0lBQzVFLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBRTNDLFFBQVE7SUFDUixJQUFHLGFBQWEsSUFBSSxJQUFJLEVBQUM7UUFDckIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztZQUMxQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVTtZQUNuRCxVQUFVLEVBQUUsT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsVUFBVTtTQUN4RCxDQUFDLENBQUM7S0FDTjtJQUVELFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDckIsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsT0FBTztRQUNqQixLQUFLLEVBQUUsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVTtLQUNoRCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBbEJELG9DQWtCQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLFFBQWlCO0lBQ3BDLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUpELHdCQUlDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLFFBQWlCO0lBQ3JDLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUpELDBCQUlDO0FBRUQsTUFBTTtBQUNOLFNBQWdCLGVBQWU7SUFDM0IsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQzlCLE9BQU8sWUFBQyxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7b0JBQ3RCLFFBQVEsQ0FBQyxlQUFlLENBQUM7d0JBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTt3QkFDdkIsUUFBUSxZQUFDLEdBQUc7NEJBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckIsQ0FBQztxQkFDSixDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDO0FBbEJELDBDQWtCQztBQUdELFNBQWdCLG9CQUFvQixDQUFDLFFBQWlCO0lBQ2xELElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLHNDQUFzQztJQUN0Qyx3Q0FBd0M7SUFDeEMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVyQixJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRW5ILE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUM1QixDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsRUFBRSxDQUFDO1FBQ0osS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsQixTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckIsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sWUFBQyxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUIsUUFBUSxDQUFDLHNCQUFzQixDQUFDO2dCQUM1QixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7Z0JBQzFCLE9BQU8sWUFBQyxHQUFHO29CQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLFFBQVEsQ0FBQyxTQUFTLENBQUM7d0JBQ25CLEtBQUssRUFBQyxNQUFNO3dCQUNaLElBQUksRUFBQyxTQUFTO3dCQUNkLFFBQVEsRUFBQyxJQUFJO3FCQUNaLENBQUMsQ0FBQztvQkFFSCxRQUFRLEVBQUUsQ0FBQztnQkFDZixDQUFDO2dCQUNELElBQUksWUFBQyxHQUFHO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRWpCLFFBQVEsRUFBRSxDQUFDO29CQUVYLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBQzt3QkFDWCxRQUFRLENBQUMsV0FBVyxDQUFDOzRCQUNqQixPQUFPLFlBQUMsV0FBVztnQ0FDZixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dDQUN6QixJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsRUFBRTtvQ0FDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2lDQUMzQztxQ0FBSztvQ0FDRixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7aUNBQzFDOzRCQUNMLENBQUM7eUJBQ0osQ0FBQyxDQUFBO3FCQUNMO2dCQUNMLENBQUM7YUFDSixDQUFDLENBQUE7UUFDTixDQUFDO0tBQ0osQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQXpERCxvREF5REM7QUFHRCxTQUFnQixlQUFlLENBQUMsUUFBaUI7SUFDN0MsSUFBRyxDQUFDLFFBQVE7UUFBRSxPQUFPO0lBRXJCLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDaEIsT0FBTyxZQUFDLEdBQUc7WUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUNwQyxRQUFRLENBQUMsU0FBUyxDQUFDO29CQUNmLEtBQUssRUFBRSxnQkFBZ0I7b0JBQ3ZCLE9BQU87d0JBQ0gsK0NBQStDO3dCQUMvQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzNCLENBQUM7aUJBQ0osQ0FBQyxDQUFBO2FBQ0w7UUFDTCxDQUFDO0tBQ0osQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNqQixPQUFPLFlBQUMsR0FBRztZQUNQLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDOUIsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ3JDLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxrQkFBa0I7WUFDbEQsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzNCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckMsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUE1QkQsMENBNEJDO0FBRUQsUUFBUTtBQUNSLFNBQWdCLGNBQWMsQ0FBQyxRQUFlLEVBQUUsVUFBaUIsRUFBRSxjQUFxQixFQUFFLGNBQXVCLEVBQUUsY0FBd0I7SUFDdkksSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNmLEtBQUssRUFBRSxRQUFRLElBQUksSUFBSTtRQUN2QixPQUFPLEVBQUUsVUFBVTtRQUNuQixXQUFXLEVBQUUsY0FBYyxJQUFJLElBQUk7UUFDbkMsT0FBTyxZQUFDLEdBQUc7WUFDUCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsSUFBRyxPQUFNLENBQUMsY0FBYyxDQUFDLElBQUksVUFBVSxFQUFDO29CQUNwQyxjQUFjLEVBQUUsQ0FBQztpQkFDcEI7Z0JBRUQsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLElBQUcsT0FBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLFVBQVUsRUFBQztvQkFDcEMsY0FBYyxFQUFFLENBQUM7aUJBQ3BCO2dCQUVELE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1FBQ0wsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUF6QkQsd0NBeUJDO0FBRUQsTUFBTTtBQUNOLElBQUksZUFBZSxDQUFDO0FBQ3BCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztBQUVwQjs7OztHQUlHO0FBQ0gsU0FBZ0IscUJBQXFCLENBQUMsZUFBeUIsRUFBRSxlQUF5QixFQUFFLFVBQVc7SUFDbkcsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsaUJBQWlCO0lBQ2pCLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUN6RCxJQUFHLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUc7UUFBRSxPQUFPO0lBRXhFLElBQUksTUFBTSxHQUFHLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDO0lBQzNCLE1BQU07SUFDTixJQUFHLFdBQVcsSUFBSSxxQkFBVyxDQUFDLFlBQVksQ0FBQyxNQUFNO1FBQzdDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMscUJBQVcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMzRCxNQUFNLENBQUMsUUFBUSxHQUFHLHFCQUFXLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXhELElBQUcsZUFBZSxJQUFJLElBQUksRUFBQztRQUN2QixlQUFlLEdBQUcsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzVEO0lBQ0QsSUFBRyxlQUFlLElBQUksSUFBSTtRQUFFLE9BQU87SUFFbkMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztRQUN4QixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5QiwwRUFBMEU7WUFDMUUsZUFBZTtZQUNmLHdDQUF3QztZQUN4QyxPQUFPO1lBRVAsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsV0FBVyxFQUFFLENBQUM7SUFFZCxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXpDLDRDQUE0QztJQUM1QyxzQ0FBc0M7SUFDdEMsb0RBQW9EO0lBQ3BELHNEQUFzRDtJQUN0RCwyQ0FBMkM7SUFDM0MsMkRBQTJEO0lBQzNELG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsSUFBSTtJQUVKLGlEQUFpRDtJQUNqRCxJQUFJLFNBQVMsR0FBRyxVQUFTLEdBQUc7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsSUFBRyxHQUFHLENBQUMsT0FBTyxJQUFJLE9BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxVQUFVLEVBQUM7WUFDcEQsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNwQztRQUVELGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFBO0lBRUQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBMURELHNEQTBEQztBQUVELFNBQVMsZUFBZSxDQUFDLEdBQUc7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixlQUFlLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFRCxVQUFVO0FBQ1YsSUFBSSxRQUFRLENBQUM7QUFDYixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFZbEI7O0dBRUc7QUFDSCxTQUFnQixjQUFjLENBQUMsTUFBb0I7SUFDL0MsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsOERBQThEO0lBQzlELHNFQUFzRTtJQUN0RSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUUzQyxpQkFBaUI7SUFDakIsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUNwQyxJQUFHLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUc7UUFBRSxPQUFPO0lBRXhFLElBQUcsQ0FBQyxNQUFNO1FBQ04sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixNQUFNO0lBQ04sSUFBRyxTQUFTLElBQUkscUJBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTTtRQUMzQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBRWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLHFCQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsTUFBTSxDQUFDLFFBQVEsR0FBRyxxQkFBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV0RCxJQUFJO0lBQ0osTUFBTSxDQUFDLEtBQUssR0FBRztRQUNYLElBQUksRUFBQyxDQUFDO1FBQ04sR0FBRyxFQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsR0FBRztRQUM5QixLQUFLLEVBQUMsT0FBTyxDQUFDLFdBQVc7S0FFNUIsQ0FBQTtJQUVELElBQUcsUUFBUSxJQUFJLElBQUksRUFBQztRQUNoQixRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5QztTQUFJO1FBQ0QsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzlDO0lBQ0QsSUFBRyxRQUFRLElBQUksSUFBSTtRQUFFLE9BQU87SUFFNUIsWUFBWTtJQUNaLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBQSxHQUFHO1FBQ2pCLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN2RCxJQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksVUFBVSxFQUFDO1lBQzNCLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFFLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVsQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsRUFBRSxDQUFDO0FBQ2hCLENBQUM7QUFuREQsd0NBbURDO0FBRUQsU0FBUyxlQUFlLENBQUMsR0FBRztJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVELFNBQWdCLFlBQVk7SUFDeEIsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFDdkMsSUFBRyxRQUFRLElBQUksSUFBSTtRQUFFLE9BQU87SUFFNUIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFMRCxvQ0FLQztBQUVELFFBQVE7QUFDUixTQUFnQixZQUFZLENBQUMsR0FBRyxFQUFFLFFBQVE7SUFDdEMsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRztRQUFFLE9BQU87SUFFL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFekIsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUNsQixHQUFHLEVBQUUsR0FBRztRQUNSLE9BQU8sWUFBQyxHQUFHO1lBQ1AsMkRBQTJEO1lBQzNELElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLEVBQUU7Z0JBQ3hCLElBQUcsT0FBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsRUFBQztvQkFDOUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDOUI7YUFDSjtRQUNMLENBQUM7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDO0FBaEJELG9DQWdCQztBQUVELFVBQVU7QUFDVixTQUFnQixhQUFhO0lBQ3pCLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFckIsT0FBTztRQUNILEtBQUssRUFBRSxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVO1FBQy9DLE1BQU0sRUFBRSxPQUFPLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxVQUFVO0tBQ3BELENBQUM7QUFDTixDQUFDO0FBVkQsc0NBVUM7QUFFRCxVQUFVO0FBQ1YsU0FBZ0IsVUFBVSxDQUFDLFNBQVM7SUFDaEMsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNoQixPQUFPLFlBQUMsR0FBRztZQUNQLHNCQUFzQjtZQUN0QiwwQ0FBMEM7WUFDMUMsOENBQThDO1lBQzlDLHdDQUF3QztZQUN4QyxtREFBbUQ7WUFDbkQsSUFBSTtZQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdCLHNDQUFzQztZQUN0QyxtREFBbUQ7WUFDbkQsSUFBSTtZQUVKLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUNuQyxpQ0FBaUM7Z0JBQ2pDLFFBQVEsQ0FBQyxXQUFXLENBQUM7b0JBQ2pCLE9BQU8sWUFBQyxHQUFHO3dCQUNQLEdBQUcsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO3dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNqQixvRUFBb0U7b0JBQ3hFLENBQUM7aUJBQ0osQ0FBQyxDQUFBO2FBQ0w7aUJBQUk7Z0JBQ0Qsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07Z0JBQ04scUJBQVcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixPQUFPLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3JEO1FBQ0wsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFsQ0QsZ0NBa0NDO0FBRUQsUUFBUTtBQUNSLFNBQWdCLG9CQUFvQixDQUFDLFNBQVM7SUFDMUMsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pDLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLEVBQUU7UUFDUixzREFBc0Q7UUFDdEQsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsQ0FBQztZQUNOLEtBQUssRUFBRSxPQUFPLENBQUMsV0FBVztZQUMxQixNQUFNLEVBQUUsT0FBTyxDQUFDLFlBQVk7U0FPL0I7S0FDSixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsV0FBVztRQUNYLElBQUcsR0FBRyxDQUFDLGFBQWEsRUFBQztZQUNqQixHQUFHLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUNyQixvRUFBb0U7WUFDcEUsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxjQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBakNELG9EQWlDQztBQUVELFFBQVE7QUFDUixTQUFnQixXQUFXLENBQUMsUUFBa0I7SUFDMUMsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsSUFBRyxPQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssVUFBVSxFQUFDO1FBQ2hELElBQU0sZUFBYSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRWxELGVBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEdBQUc7WUFDeEMsY0FBYztZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxJQUFHLE9BQU8sUUFBUSxJQUFJLFVBQVUsRUFBQztnQkFDN0IsUUFBUTtnQkFDUixRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNCO1lBRUQsTUFBTTtZQUNOLElBQUcsR0FBRyxDQUFDLFNBQVMsRUFBQztnQkFDYixNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDM0M7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILGVBQWEsQ0FBQyxhQUFhLENBQUM7WUFDeEIsSUFBRyxPQUFPLFFBQVEsSUFBSSxVQUFVLEVBQUM7Z0JBQzdCLFFBQVE7Z0JBQ1IsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xCO1lBRUQsUUFBUSxDQUFDLFNBQVMsQ0FBQztnQkFDZixLQUFLLEVBQUUsTUFBTTtnQkFDYixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixVQUFVLEVBQUMsS0FBSztnQkFDaEIsT0FBTyxZQUFDLEdBQUc7b0JBQ1gsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO3dCQUNiLG9DQUFvQzt3QkFDcEMsZUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO3FCQUMvQjtnQkFDRCxDQUFDO2FBQ0osQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSCxlQUFhLENBQUMsY0FBYyxDQUFDO1lBQ3pCLFVBQVU7UUFDZCxDQUFDLENBQUMsQ0FBQztLQUNOO0FBQ0wsQ0FBQztBQTNDRCxrQ0EyQ0M7QUFFRCxVQUFVO0FBQ1YsU0FBZ0IscUJBQXFCLENBQUMsT0FBTztJQUN6QyxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUNyRCxlQUFlLENBQUMsV0FBVyxDQUFDO1FBQ3hCLE9BQU8sRUFBRSxPQUFPO0tBQ25CLENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCxzREFPQztBQUVELFVBQVU7QUFDVixTQUFnQixrQkFBa0IsQ0FBQyxJQUFJO0lBQ25DLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQ3JELGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUxELGdEQUtDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILFNBQWdCLG1CQUFtQixDQUFDLElBQUksRUFBRSxRQUFrQixFQUFFLE9BQVE7SUFDbEUsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1FBQ3pCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE9BQU87WUFDSCxJQUFHLE9BQU8sUUFBUSxJQUFJLFVBQVU7Z0JBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFWRCxrREFVQztBQUVELFdBQVc7QUFDWCxnRkFBZ0Y7QUFDaEYsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLFFBQVE7QUFDUixJQUFJO0FBQ0osU0FBZ0Isb0JBQW9CO0lBQ2hDLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRWpDLE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFQRCxvREFPQztBQUVELFdBQVc7QUFDWCxTQUFnQixhQUFhO0lBQ3pCLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2pELElBQUcsVUFBVSxJQUFJLFVBQVUsQ0FBQyxZQUFZLEVBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RCxPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO0tBQ3hDO1NBQUk7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO0FBQ0wsQ0FBQztBQVhELHNDQVdDO0FBRUQsU0FBUztBQUNULHlFQUF5RTtBQUN6RSxTQUFnQixjQUFjO0lBQzFCLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxJQUFHLFVBQVUsRUFBQztRQUNWLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQztLQUMzQjtTQUFJO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNMLENBQUM7QUFWRCx3Q0FVQztBQUVELGNBQWM7QUFDZCxTQUFnQixvQkFBb0I7SUFDaEMsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsSUFBSSxLQUFLLEdBQUcsY0FBYyxFQUFFLENBQUM7SUFDN0IseUNBQXlDO0lBQ3pDLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDO0FBQzFDLENBQUM7QUFORCxvREFNQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0gsU0FBZ0IscUJBQXFCLENBQUMsS0FBWSxFQUFFLElBQVksRUFBRSxTQUFVLEVBQUUsVUFBVyxFQUFFLFFBQWtCLEVBQUUsT0FBUTtJQUNuSCxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTztJQUVqRCxRQUFRLENBQUMscUJBQXFCLENBQUM7UUFDM0IsS0FBSyxFQUFFLEtBQUs7UUFDWixJQUFJLEVBQUUsSUFBSTtRQUNWLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLE9BQU8sWUFBQyxHQUFHO1lBQ1QsT0FBTztZQUNQLElBQUcsT0FBTyxRQUFRLElBQUksVUFBVTtnQkFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWRELHNEQWNDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsZUFBZSxDQUFDLFNBQVUsRUFBRSxRQUFrQixFQUFFLE9BQVEsRUFBRSxVQUFrQjtJQUN4RixJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxxQkFBcUIsQ0FBQyxxQkFBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUcsQ0FBQztBQUpELDBDQUlDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLFlBQVksQ0FBQyxFQUFXLEVBQUUsT0FBUTtJQUM5QyxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxJQUFHLE9BQU8sRUFBRSxJQUFJLFVBQVUsRUFBQztRQUN2QixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDZDtBQUNMLENBQUM7QUFORCxvQ0FNQztBQUVELHNCQUFzQjtBQUN0QixJQUFJLGNBQWMsQ0FBQztBQUNuQixRQUFRO0FBQ1IsU0FBZ0IsaUJBQWlCLENBQUMsT0FBTztJQUNyQyxJQUFHLENBQUMsT0FBTztRQUFFLE9BQU87SUFFcEIsY0FBYyxHQUFHLE9BQU8sQ0FBQztBQUM3QixDQUFDO0FBSkQsOENBSUM7QUFFRCxRQUFRO0FBQ1IsU0FBZ0IsaUJBQWlCO0lBQzdCLE9BQU8sY0FBYyxDQUFDO0FBQzFCLENBQUM7QUFGRCw4Q0FFQztBQUVELFdBQVc7QUFDWDs7R0FFRztBQUNILCtDQUErQztBQUMvQyxnRUFBZ0U7QUFFaEUsc0NBQXNDO0FBQ3RDLHlFQUF5RTtBQUN6RSxJQUFJO0FBRUosU0FBUztBQUNULDBDQUEwQztBQUMxQyxrQ0FBa0M7QUFFbEMsaUVBQWlFO0FBQ2pFLElBQUk7Ozs7Ozs7QUM1eEJKLG1DQUE4QjtBQUM5QiwrQkFBMEI7QUFDMUIsb0NBQStCO0FBQy9CLDhCQUF5QjtBQUN6QixnQ0FBMkI7QUFDM0Isa0NBQTZCO0FBQzdCLGlDQUE0QjtBQUM1QixvQ0FBK0I7QUFDL0IsbUNBQThCO0FBQzlCLG1DQUE4QjtBQUM5QixvQ0FBK0I7Ozs7QUNUL0IsaUNBQW1DO0FBR25DLFNBQWdCLFlBQVksQ0FBQyxNQUFpQixFQUFFLEtBQVksRUFBRSxLQUFLO0lBQy9ELElBQUcsSUFBSSxJQUFJLEtBQUssRUFBQztRQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0IsT0FBTztLQUNWO0lBRUQsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztRQUNwRCxPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDL0MsT0FBTztLQUNWO0lBRUQsSUFBSSxNQUF3QixDQUFDO0lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1FBQ1QsSUFBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQztZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0MsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFLLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssRUFBQztZQUN2QixNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQXZCRCxvQ0F1QkM7QUFFRCxVQUFVO0FBQ1YsU0FBZ0IsZ0JBQWdCLENBQUMsTUFBaUIsRUFBRSxLQUFLO0lBQ3JELE9BQU8sWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUZELDRDQUVDO0FBRUQsU0FBUztBQUNULElBQUksV0FBVyxHQUEwQyxFQUFFLENBQUM7QUFDNUQsSUFBSSxnQkFBZ0IsR0FBK0MsRUFBRSxDQUFDO0FBQ3RFLFNBQWdCLGNBQWMsQ0FBQyxHQUFVO0lBQ3JDLElBQUcsQ0FBQyxHQUFHO1FBQUUsT0FBTztJQUVoQixJQUFHLElBQUksSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUM7UUFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM5QjtJQUVELE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFURCx3Q0FTQztBQUVELFVBQVU7QUFDVixTQUFnQixhQUFhLENBQUMsR0FBVSxFQUFFLEVBQVM7SUFDL0MsT0FBTyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUZELHNDQUVDO0FBRUQsUUFBUTtBQUNSLFNBQWdCLGdCQUFnQixDQUFDLEdBQVUsRUFBRSxLQUFZO0lBQ3JELFdBQVc7SUFDWCxPQUFPLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUhELDRDQUdDO0FBRUQsVUFBVTtBQUNWLFNBQWdCLGNBQWMsQ0FBQyxHQUFVLEVBQUUsR0FBVSxFQUFFLEtBQUs7SUFDeEQsT0FBTyxZQUFZLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBRkQsd0NBRUM7QUFFRCxTQUFTO0FBQ1QsU0FBZ0IsaUJBQWlCLENBQUMsR0FBYyxFQUFFLEtBQVksRUFBRSxHQUFzQjtJQUNsRixJQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFDO1FBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNoRCxPQUFPO0tBQ1Y7SUFFRCxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFDO1FBQzNCLEdBQUcsR0FBRyxFQUFFLENBQUM7S0FDWjtJQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1FBQ04sSUFBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQztZQUNyQixHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQXZCRCw4Q0F1QkM7QUFFRCxrQkFBa0I7QUFDbEIsU0FBZ0IsbUJBQW1CLENBQUMsR0FBYyxFQUFFLEtBQVksRUFBRSxLQUFLLEVBQUUsR0FBZTtJQUNwRixJQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFDO1FBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNoRCxPQUFPO0tBQ1Y7SUFFRCxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFDO1FBQzNCLEdBQUcsR0FBRyxFQUFFLENBQUM7S0FDWjtJQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1FBQ04sSUFBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssRUFBQztZQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQXRCRCxrREFzQkM7QUFFRCxxQkFBcUI7QUFDckIsU0FBZ0IsWUFBWSxDQUFDLEdBQVUsRUFBRSxLQUFZLEVBQUUsS0FBSyxFQUFFLEdBQWU7SUFDekUsT0FBTyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBRkQsb0NBRUM7QUFFRCxRQUFRO0FBQ1IsU0FBZ0IsYUFBYSxDQUFDLEVBQVM7SUFDbkMsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUEwQixDQUFDO0FBQ25GLENBQUM7QUFGRCxzQ0FFQzs7OztBQzNIRCx5Q0FBMkM7QUFDM0MsaUNBQW1DO0FBU25DLFVBQVU7QUFDVixJQUFNLHNCQUFzQixHQUFHLG9CQUFvQixDQUFDO0FBRXBELGdCQUFnQjtBQUNoQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDTixRQUFBLGVBQWUsR0FBRztJQUMzQixNQUFNO0lBQ04sa0JBQWtCLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ3pELEtBQUs7SUFDTCxjQUFjLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ3JELE1BQU07SUFDTixVQUFVLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ2pELE1BQU07SUFDTixVQUFVLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ2pELE1BQU07SUFDTixXQUFXLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ2xELFFBQVE7SUFDUixhQUFhLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ3BELE1BQU07SUFDTixVQUFVLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ2pELE1BQU07SUFDTixVQUFVLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ2pELE9BQU87SUFDUCxrQkFBa0IsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDekQsS0FBSztJQUNMLGVBQWUsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDdEQsS0FBSztJQUNMLGVBQWUsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDdEQsS0FBSztJQUNMLGdCQUFnQixFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUN2RCxLQUFLO0lBQ0wsZUFBZSxFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUN0RCxLQUFLO0lBQ0wsZUFBZSxFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUN0RCxNQUFNO0lBQ04sWUFBWSxFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUNuRCxJQUFJO0lBQ0osS0FBSyxFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUM1QyxNQUFNO0lBQ04sT0FBTyxFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUM5QyxNQUFNO0lBQ04sVUFBVSxFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUNqRCxNQUFNO0lBQ04sT0FBTyxFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUM5QyxRQUFRO0lBQ1IsZUFBZSxFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUN0RCxVQUFVO0lBQ1YsZUFBZSxFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUN0RCxNQUFNO0lBQ04sU0FBUyxFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUNoRCxPQUFPO0lBQ1AsZ0JBQWdCLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ3ZELE9BQU87SUFDUCxZQUFZLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ25ELE1BQU07SUFDTixVQUFVLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ2pELFNBQVM7SUFDVCxXQUFXLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ2xELElBQUk7SUFDSixJQUFJLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQzNDLElBQUk7SUFDSixTQUFTLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ2hELE1BQU07SUFDTixZQUFZLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ25ELE1BQU07SUFDTixhQUFhLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ3BELEtBQUs7SUFDTCxTQUFTLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ2hELE9BQU87SUFDUCxhQUFhLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0NBQ3ZELENBQUE7QUFFRDtJQUFBO1FBQ1csYUFBUSxHQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFxR2hCLGVBQVUsR0FBNkIsRUFBRSxDQUFDO0lBa0h4RCxDQUFDO0lBNUppQixzQkFBVyxHQUF6QjtRQUNJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxzQkFBa0Isc0JBQVE7YUFBMUI7WUFDSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxFQUFFO2dCQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7YUFDckM7WUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFYSwwQkFBZSxHQUE3QixVQUE4QixHQUFVO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVhLHdCQUFhLEdBQTNCLFVBQTRCLEdBQVUsRUFBRSxFQUFTO1FBQzdDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFYSx1QkFBWSxHQUExQixVQUEyQixNQUFpQixFQUFFLEtBQVksRUFBRSxLQUFLO1FBQzdELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFHLENBQUMsTUFBTSxFQUFDO1lBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLE9BQU87U0FDVjthQUFJO1lBQ0QsT0FBTyxNQUFNLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRWEsMkJBQWdCLEdBQTlCLFVBQStCLE1BQWlCLEVBQUUsRUFBUztRQUN2RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRWEsNkJBQWtCLEdBQWhDLFVBQWlDLEdBQVUsRUFBRSxFQUFTO1FBQ2xELElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFJUywrQkFBVSxHQUFwQixVQUFxQixHQUFVLEVBQUUsR0FBVSxFQUFFLEVBQVk7UUFBekQsaUJBU0M7UUFSRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQUEsTUFBTTtZQUNsRCxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUVoQixFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVNLCtCQUFVLEdBQWpCLFVBQWtCLEVBQVk7UUFBOUIsaUJBZUM7UUFkRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFBLE1BQU07WUFDckUsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsSUFBSSxRQUFRLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUM7Z0JBQ3ZCLElBQUksT0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzVCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztvQkFDdEIsSUFBRyxHQUFHLElBQUksT0FBSyxHQUFHLENBQUMsRUFBQzt3QkFDaEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7cUJBQzFDO3lCQUFJO3dCQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3RDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELE1BQU07SUFDQyxnQ0FBVyxHQUFsQixVQUFtQixHQUFtQixFQUFFLElBQUk7UUFDeEMsZ0NBQWdDO1FBQ2hDLCtCQUErQjtRQUMvQixJQUFJO1FBQ0osbUNBQW1DO1FBRW5DLGFBQWE7UUFDYixNQUFNLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sa0NBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTSxzQ0FBaUIsR0FBeEIsVUFBeUIsSUFBNkI7UUFDbEQsT0FBTztRQUNQLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTztRQUU1RCxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBMEIsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSx5QkFBYyxHQUFyQixVQUFzQixHQUFVO1FBQzVCLElBQUcsQ0FBQyxHQUFHLEVBQUM7WUFDSixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUcsQ0FBQyxNQUFNLEVBQUM7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMvQjthQUFJO1lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO1FBRUQsbUNBQW1DO0lBQ3ZDLENBQUM7SUFFTSwyQkFBZ0IsR0FBdkIsVUFBd0IsTUFBNkI7UUFDakQsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNwQyxDQUFDO0lBRU0sZ0NBQXFCLEdBQTVCLFVBQTZCLEdBQVU7UUFDbkMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFHRCxzQkFBVywwQkFBWTtRQUR2QixVQUFVO2FBQ1Y7WUFDSSxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTtJQUVNLG9DQUFlLEdBQXRCLFVBQXVCLEdBQVU7UUFDN0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxrQ0FBYSxHQUFwQixVQUFxQixHQUFVLEVBQUMsRUFBUztRQUNyQyxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxLQUFJLElBQUksQ0FBQyxHQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsSUFBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO29CQUN2QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckI7YUFDSjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHFDQUFnQixHQUF2QixVQUF3QixHQUFVLEVBQUUsSUFBVztRQUMzQyxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxJQUFJLE1BQU0sR0FBYyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3BDLEtBQUksSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQyxJQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNCO2FBQ0o7WUFDRCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFwTmEseUJBQWMsR0FBRyxLQUFLLENBQUMsQ0FBRyxTQUFTO0lBQ2hDLHNCQUFXLEdBQUkseUJBQXlCLENBQUM7SUFFekMsd0JBQWEsR0FBSSwyQkFBMkIsQ0FBQztJQUM3QyxzQkFBVyxHQUFJLHlCQUF5QixDQUFDO0lBQ3pDLHFCQUFVLEdBQUksd0JBQXdCLENBQUM7SUFDdkMsK0JBQW9CLEdBQUksaUNBQWlDLENBQUM7SUFDMUQsMEJBQWUsR0FBSSw0QkFBNEIsQ0FBQztJQUNoRCxtQkFBUSxHQUFJLHNCQUFzQixDQUFDO0lBQ25DLG1CQUFRLEdBQUksc0JBQXNCLENBQUM7SUFDbkMsbUJBQVEsR0FBSSxzQkFBc0IsQ0FBQztJQUVwRCxrQ0FBa0M7SUFDcEIsMEJBQWUsR0FBRyxhQUFhLENBQUM7SUFDOUMsZ0JBQWdCO0lBQ2hCLDZFQUE2RTtJQUM3RSxxRUFBcUU7SUFDckUscUVBQXFFO0lBQ3JFLHNFQUFzRTtJQUN0RSxxRUFBcUU7SUFDckUsMEVBQTBFO0lBQzFFLHFFQUFxRTtJQUNyRSw4RUFBOEU7SUFDOUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwyRUFBMkU7SUFDM0UsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFFMUQsd0JBQWEsR0FBRyxXQUFXLENBQUM7SUFDNUIsc0JBQVcsR0FBRyxTQUFTLENBQUM7SUFDeEIscUJBQVUsR0FBRyxRQUFRLENBQUE7SUFDckIsK0JBQW9CLEdBQUUsaUJBQWlCLENBQUE7SUFDdkMsMEJBQWUsR0FBRSxhQUFhLENBQUE7SUFDOUIsbUJBQVEsR0FBRyxNQUFNLENBQUM7SUFDbEIsbUJBQVEsR0FBRyxNQUFNLENBQUM7SUFDbEIsbUJBQVEsR0FBRyxNQUFNLENBQUM7SUFFbEIsdUJBQVksR0FBRyxjQUFjLENBQUM7SUFFNUMsT0FBTztJQUNTLHFCQUFVLEdBQUcsR0FBRyxDQUFDO0lBQ2pDLE1BQU07SUFDVSxvQkFBUyxHQUFHLENBQUMsQ0FBQztJQUM5QixRQUFRO0lBQ1EsbUJBQVEsR0FBRyxFQUFFLENBQUM7SUFDOUIsTUFBTTtJQUNVLG9CQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLE1BQU07SUFDVSxvQkFBUyxHQUFHLENBQUMsQ0FBQztJQUU5QixNQUFNO0lBQ0MsbUJBQVEsR0FBRyxDQUFDLENBQUM7SUFnS3hCLGlCQUFDO0NBeE5ELEFBd05DLElBQUE7QUF4TlksZ0NBQVU7QUEwTnZCO0lBQUE7SUFtQkEsQ0FBQztJQWZHLHNCQUFXLHdCQUFNO2FBQWpCO1lBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM1RDtZQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVNLDRCQUFhLEdBQXBCLFVBQXFCLEVBQVM7UUFDMUIsT0FBTyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sK0JBQWdCLEdBQXZCLFVBQXdCLEtBQVk7UUFDaEMsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDTCxxQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksd0NBQWM7QUFxQjNCLHFGQUFxRjtBQUNyRixNQUFNO0FBQ047SUFBQTtJQU1BLENBQUM7SUFBRCxpQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksZ0NBQVU7QUFRdkIsTUFBTTtBQUNOO0lBQXVDLHFDQUFVO0lBQWpEOztJQU9BLENBQUM7SUFBRCx3QkFBQztBQUFELENBUEEsQUFPQyxDQVBzQyxVQUFVLEdBT2hEO0FBUFksOENBQWlCOzs7O0FDdFU5QjtJQUtJLG9CQUFZLEdBQVUsRUFBRSxRQUFpQixFQUFFLE1BQU87UUFDOUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLGdDQUFVO0FBWXZCO0lBSUk7UUFIQSxjQUFTLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztRQUNsQyxZQUFPLEdBQUcsSUFBSSxLQUFLLEVBQXlCLENBQUM7SUFHN0MsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxRQUFpQixFQUFFLE1BQU87UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxPQUFnQjtRQUMzQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUM7WUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSxzQ0FBYTtBQTJCMUIsTUFBTTtBQUNOLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUNyQixNQUFNO0lBQ04sdURBQVcsQ0FBQTtJQUNYLE1BQU07SUFDTix1REFBVyxDQUFBO0FBQ2YsQ0FBQyxFQUxXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBS3hCO0FBRUQsS0FBSztBQUNRLFFBQUEsUUFBUSxHQUFHO0lBQ3BCLEtBQUs7SUFDTCxLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU07SUFDTixTQUFTLEVBQUUsV0FBVztJQUN0QixNQUFNO0lBQ04sU0FBUyxFQUFFLFdBQVc7SUFDdEIsSUFBSTtJQUNKLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLFlBQVk7SUFDWixPQUFPLEVBQUUsU0FBUztJQUNsQixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0NBQ2YsQ0FBQTtBQUVELE9BQU87QUFDTSxRQUFBLFdBQVcsR0FBRztJQUN2QixNQUFNO0lBQ04sU0FBUyxFQUFFLFdBQVc7SUFDdEIsTUFBTTtJQUNOLGFBQWEsRUFBRSxlQUFlO0NBQ2pDLENBQUE7QUFFRCxRQUFRO0FBQ0ssUUFBQSxZQUFZLEdBQUc7SUFDeEIsSUFBSTtJQUNKLFdBQVcsRUFBRSxDQUFDO0NBQ2pCLENBQUE7QUFFRCxNQUFNO0FBQ04sSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLHVDQUFPLENBQUE7SUFDUCxxQ0FBTSxDQUFBO0lBQ04sMkNBQVMsQ0FBQTtBQUNiLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUVELFNBQVM7QUFDVCxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDcEIsUUFBUTtJQUNSLGlEQUFTLENBQUE7SUFDVCxNQUFNO0lBQ04saURBQVMsQ0FBQTtBQUNiLENBQUMsRUFMVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUt2QjtBQUVELFFBQVE7QUFDUixJQUFZLGFBS1g7QUFMRCxXQUFZLGFBQWE7SUFDckIsMkRBQWEsQ0FBQTtJQUNiLGlFQUFnQixDQUFBO0lBQ2hCLDJEQUFhLENBQUE7SUFDYiw2REFBYyxDQUFBO0FBQ2xCLENBQUMsRUFMVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUt4QjtBQUVELFFBQVE7QUFDUjtJQUtJLHlCQUFZLEdBQWlCLEVBQUUsR0FBaUIsRUFBRSxRQUErQjtRQUM3RSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSwwQ0FBZTtBQVk1QixVQUFVO0FBQ0csUUFBQSxpQkFBaUIsR0FBRztJQUM3QixJQUFJO0lBQ0osT0FBTyxFQUFFLENBQUM7SUFDVixNQUFNO0lBQ04sTUFBTSxFQUFFLENBQUM7SUFDVCxPQUFPO0lBQ1AsZ0JBQWdCLEVBQUUsQ0FBQztDQUN0QixDQUFBO0FBRUQsUUFBUTtBQUNSO0lBUUkseUJBQVksT0FBZ0IsRUFBRSxjQUF3QixFQUFFLFVBQWtCLEVBQUUsVUFBVyxFQUFFLFNBQWlCLEVBQUUsWUFBb0I7UUFDNUgsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFDTCxzQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksMENBQWU7Ozs7QUNsSTVCLHlDQUEyQztBQUUzQztJQVFJO0lBQXNCLENBQUM7SUE0QnZCLE9BQU87SUFDQSx5QkFBYSxHQUFwQjtRQUNJLE9BQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVNLDBCQUFjLEdBQXJCLFVBQXNCLE1BQU07UUFDeEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBMUNlLG9DQUF3QixHQUFHLENBQUMsQ0FBQyxDQUFJLFdBQVc7SUFDNUMscUNBQXlCLEdBQUcsRUFBRSxDQUFDLENBQUksV0FBVztJQUM5QyxnQ0FBb0IsR0FBRyxDQUFDLENBQUMsQ0FBRSxZQUFZO0lBQ3ZDLHFCQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2QscUJBQVMsR0FBRyxDQUFDLENBQUM7SUFDZCxzQkFBVSxHQUFHLENBQUMsQ0FBQztJQUl4Qiw0QkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDekIsNEJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBRXpCLHdCQUFZLEdBQUc7UUFDbEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLHlCQUF5QjtLQUM1QixDQUFDO0lBRUssd0JBQVksR0FBRztRQUNsQix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIseUJBQXlCO0tBQzVCLENBQUM7SUFFYyw0QkFBZ0IsR0FBRztRQUMvQixLQUFLLEVBQUUsb0JBQW9CO0tBQzlCLENBQUM7SUFFRixTQUFTO0lBQ0Ysb0JBQVEsR0FBRyxJQUFJLENBQUM7SUFVM0Isa0JBQUM7Q0E1Q0QsQUE0Q0MsSUFBQTtrQkE1Q29CLFdBQVc7Ozs7QUNBbkIsUUFBQSxZQUFZLEdBQUc7SUFDeEIsTUFBTSxFQUFFLElBQUk7SUFFWixRQUFRLEVBQUUsT0FBTztJQUVqQixHQUFHLEVBQUUsSUFBSTtJQUVULFVBQVUsRUFBRSxNQUFNO0lBRWxCLFFBQVEsRUFBRSxJQUFJO0lBRWQsaUJBQWlCLEVBQUUsUUFBUTtJQUUzQixTQUFTLEVBQUUsTUFBTTtJQUVqQixhQUFhLEVBQUUsZUFBZTtDQUNqQyxDQUFBOzs7O0FDbEJVLFFBQUEsWUFBWSxHQUFHO0lBQ3RCLEVBQUUsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUN4RSxFQUFFLEdBQUcsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDaEUsRUFBRSxHQUFHLEVBQUUsb0NBQW9DLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0NBQ3pFLENBQUE7Ozs7QUNGRDtJQVNJLHlCQUFZLEdBQVUsRUFBRSxPQUFjLEVBQUUsT0FBYyxFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUUsT0FBUTtRQUM5RixJQUFHLE9BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUM7WUFDM0IsYUFBYTtZQUNiLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN6QyxDQUFDO0lBdEJNLHdCQUFRLEdBQXNDLEVBQUUsQ0FBQztJQXVCNUQsc0JBQUM7Q0F4QkQsQUF3QkMsSUFBQTtBQXhCWSwwQ0FBZTtBQTBCNUIsTUFBTTtBQUNLLFFBQUEsT0FBTyxHQUFHO0lBQ2pCLEtBQUssRUFBQyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUM7SUFDdkIsZ0JBQWdCLEVBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDO0lBQzVCLFFBQVEsRUFBQyxFQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUN6QyxXQUFXLEVBQUMsRUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO0lBQzFCLGFBQWEsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztJQUMxQyxhQUFhLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDO0lBQzFCLGlCQUFpQixFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQztJQUM5QixXQUFXLEVBQUMsRUFBQyxVQUFVLEVBQUUsQ0FBQyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDO0lBQ3RELFVBQVUsRUFBQyxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUM7SUFDckQsWUFBWSxFQUFDLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUM7SUFDekMsT0FBTztJQUNQLGNBQWMsRUFBQyxFQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxLQUFLLEVBQXNCLEVBQUM7Q0FDckYsQ0FBQTtBQUVELFdBQVc7QUFDWDtJQUlJLDRCQUFZLEdBQVUsRUFBRSxPQUFlO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUdELHNCQUFXLGtDQUFZO1FBRHZCLE9BQU87YUFDUDtZQUNJLE9BQU8sQ0FBQyxxQkFBYSxFQUFFLHFCQUFhLEVBQUUscUJBQWEsRUFBRSxxQkFBYSxDQUFDLENBQUM7UUFDeEUsQ0FBQzs7O09BQUE7SUFDTCx5QkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksZ0RBQWtCO0FBZS9CLFFBQVE7QUFDSyxRQUFBLGFBQWEsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUUvRCxJQUFZLFVBWVg7QUFaRCxXQUFZLFVBQVU7SUFDbEIsK0JBQWlCLENBQUE7SUFDakIsNkJBQWUsQ0FBQTtJQUNmLGlDQUFtQixDQUFBO0lBQ25CLHlDQUEyQixDQUFBO0lBQzNCLGlEQUFtQyxDQUFBO0lBQ25DLCtDQUFpQyxDQUFBO0lBQ2pDLHFEQUF1QyxDQUFBO0lBQ3ZDLDJDQUE2QixDQUFBO0lBQzdCLHlDQUEyQixDQUFBO0lBQzNCLHlDQUEyQixDQUFBO0lBQzNCLHlDQUEyQixDQUFBO0FBQy9CLENBQUMsRUFaVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVlyQjtBQUVVLFFBQUEsU0FBUyxHQUFHO0lBQ25CLFVBQVUsRUFBQyw2QkFBNkI7SUFFeEMsOERBQThEO0lBRTlELGNBQWMsRUFBQyxxRUFBcUU7SUFFcEYsZUFBZSxFQUFDLDZCQUE2QjtJQUU3QyxxQkFBcUIsRUFBQywwQ0FBMEM7SUFFaEUsS0FBSyxFQUFDLDJDQUEyQztJQUVqRCxRQUFRLEVBQUMsRUFBRTtDQUNkLENBQUE7QUFFRCxNQUFNO0FBQ04sSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQ3hCLHlEQUFTLENBQUE7SUFDVCw2REFBVyxDQUFBO0FBQ2YsQ0FBQyxFQUhXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRzNCO0FBU0QsU0FBZ0IsV0FBVyxDQUFDLElBQW1CO0lBQzNDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDakMsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBUztBQUNUO0lBTUkseUJBQVksRUFBUyxFQUFFLE9BQWMsRUFBRSxJQUFZLEVBQUUsSUFBSztRQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFHLElBQUksRUFBQztZQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBQ0QsSUFBRyxJQUFJLEVBQUM7WUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFDTCxzQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksMENBQWU7QUFrQmpCLFFBQUEsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFtQixDQUFDO0FBRXhELE9BQU87QUFDUDtJQU9JLHNCQUFZLElBQVksRUFBRSxFQUFVLEVBQUUsTUFBYyxFQUFFLGFBQXFCLEVBQUUsRUFBVTtRQUNuRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLG9DQUFZO0FBa0l6QjtJQUdJLCtCQUFZLFFBQWU7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSxzREFBcUI7Ozs7QUNwUXJCLFFBQUEsWUFBWSxHQUFHO0lBQ3hCLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxZQUFZLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQyxjQUFjLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxZQUFZLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDeEMsT0FBTztJQUNQLGtCQUFrQixFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLGVBQWUsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0MsVUFBVSxFQUFFLElBQUk7Q0FDbkIsQ0FBQTs7OztBQ2RELElBQUksSUFBSSxHQUFHO0lBQ1AsRUFBRSxHQUFHLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ3hELEVBQUUsR0FBRyxFQUFFLDRCQUE0QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUM5RCxFQUFFLEdBQUcsRUFBRSw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDOUQsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ3RELEVBQUUsR0FBRyxFQUFFLCtCQUErQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUNsRSxFQUFFLEdBQUcsRUFBRSxzQ0FBc0MsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDeEUsRUFBRSxHQUFHLEVBQUUscUNBQXFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ3hFLEVBQUUsR0FBRyxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUN4RCxFQUFFLEdBQUcsRUFBRSw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDOUQsRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQzlELEVBQUUsR0FBRyxFQUFFLGtDQUFrQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNwRSxFQUFFLEdBQUcsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDMUQsRUFBRSxHQUFHLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQzFELEVBQUUsR0FBRyxFQUFFLDhCQUE4QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNoRSxFQUFFLEdBQUcsRUFBRSxnQ0FBZ0MsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDbEUsRUFBRSxHQUFHLEVBQUUsOEJBQThCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ2hFLEVBQUUsR0FBRyxFQUFFLGdDQUFnQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNsRSxFQUFFLEdBQUcsRUFBRSxnQ0FBZ0MsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDbEUsRUFBRSxHQUFHLEVBQUUsZ0NBQWdDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ2xFLEVBQUUsR0FBRyxFQUFFLGlDQUFpQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUNwRSxFQUFFLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Q0FDekQsQ0FBQTtBQUNPLG9CQUFJOzs7O0FDdEJDLFFBQUEsV0FBVyxHQUFHO0lBQ3ZCLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07SUFDWixXQUFXLEVBQUUsYUFBYTtJQUMxQixZQUFZLEVBQUUsY0FBYztJQUM1QixTQUFTLEVBQUUsV0FBVztJQUN0QixJQUFJLEVBQUUsTUFBTTtJQUNaLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFVBQVUsRUFBRSxZQUFZO0NBQzNCLENBQUE7Ozs7QUNGWSxRQUFBLE9BQU8sR0FBRztJQUNuQixNQUFNO0lBQ04sV0FBVyxFQUFFO1FBQ1QsR0FBRyxFQUFFLGFBQWE7UUFDbEIsR0FBRyxFQUFFLFdBQVc7UUFDaEIsR0FBRyxFQUFDLGFBQWE7S0FDcEI7SUFFRCxPQUFPO0lBQ1AsYUFBYSxFQUFDO1FBQ1YsR0FBRyxFQUFFLGVBQWU7UUFDcEIsT0FBTyxFQUFFLDZCQUE2QjtRQUN0QyxHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUMsZUFBZTtLQUN0QjtJQUVELE1BQU07SUFDTixlQUFlLEVBQUU7UUFDYixHQUFHLEVBQUUsaUJBQWlCO1FBQ3RCLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsR0FBRyxFQUFDLGlCQUFpQjtLQUN4QjtJQUVELEtBQUs7SUFDTCxRQUFRLEVBQUU7UUFDTixHQUFHLEVBQUUsVUFBVTtRQUNmLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsR0FBRyxFQUFFLFVBQVU7UUFDZixHQUFHLEVBQUMsVUFBVTtLQUNqQjtJQUVELE1BQU07SUFDTixlQUFlLEVBQUU7UUFDYixHQUFHLEVBQUUsaUJBQWlCO1FBQ3RCLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsR0FBRyxFQUFFLFVBQVU7UUFDZixHQUFHLEVBQUMsaUJBQWlCO0tBQ3hCO0lBRUQsSUFBSTtJQUNKLFNBQVMsRUFBRTtRQUNQLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLEdBQUcsRUFBRSxRQUFRO1FBQ2IsR0FBRyxFQUFDLFdBQVc7S0FDbEI7SUFFRCxJQUFJO0lBQ0osaUJBQWlCLEVBQUU7UUFDZixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLEdBQUcsRUFBRSxPQUFPO1FBQ1osR0FBRyxFQUFDLG1CQUFtQjtLQUMxQjtJQUdELElBQUk7SUFDSixTQUFTLEVBQUU7UUFDUCxHQUFHLEVBQUUsV0FBVztRQUNoQixPQUFPLEVBQUUsYUFBYTtRQUN0QixHQUFHLEVBQUUsT0FBTztRQUNaLEdBQUcsRUFBQyxXQUFXO0tBQ2xCO0lBRUQsUUFBUTtJQUNSLGtCQUFrQixFQUFFO1FBQ2hCLEdBQUcsRUFBRSxvQkFBb0I7UUFDekIsT0FBTyxFQUFFLGVBQWU7UUFDeEIsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUMsb0JBQW9CO0tBQzNCO0lBRUQsTUFBTTtJQUNOLFlBQVksRUFBRTtRQUNWLEdBQUcsRUFBRSxjQUFjO1FBQ25CLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLEdBQUcsRUFBRSxPQUFPO1FBQ1osR0FBRyxFQUFDLGNBQWM7S0FDckI7SUFFRCxNQUFNO0lBQ04sUUFBUSxFQUFFO1FBQ04sR0FBRyxFQUFFLFVBQVU7UUFDZixHQUFHLEVBQUUsTUFBTTtRQUNYLEdBQUcsRUFBQyxVQUFVO0tBQ2pCO0lBRUQsTUFBTTtJQUNOLFFBQVEsRUFBRTtRQUNOLEdBQUcsRUFBRSxVQUFVO1FBQ2YsR0FBRyxFQUFFLE1BQU07UUFDWCxHQUFHLEVBQUMsVUFBVTtLQUNqQjtJQUVELE9BQU87SUFDUCxVQUFVLEVBQUU7UUFDUixHQUFHLEVBQUUsWUFBWTtRQUNqQixHQUFHLEVBQUUsTUFBTTtRQUNYLEdBQUcsRUFBQyxZQUFZO0tBQ25CO0lBRUQsTUFBTTtJQUNOLFFBQVEsRUFBRTtRQUNOLEdBQUcsRUFBRSxVQUFVO1FBQ2YsR0FBRyxFQUFFLE1BQU07UUFDWCxHQUFHLEVBQUMsVUFBVTtLQUNqQjtJQUVELE1BQU07SUFDTixXQUFXLEVBQUU7UUFDVCxHQUFHLEVBQUUsYUFBYTtRQUNsQixHQUFHLEVBQUUsTUFBTTtRQUNYLEdBQUcsRUFBQyxhQUFhO0tBQ3BCO0lBRUQsTUFBTTtJQUNOLGFBQWEsRUFBRTtRQUNYLEdBQUcsRUFBRSxlQUFlO1FBQ3BCLEdBQUcsRUFBRSxNQUFNO1FBQ1gsR0FBRyxFQUFDLGVBQWU7S0FDdEI7SUFFRCxJQUFJO0lBQ0osVUFBVSxFQUFFO1FBQ1IsR0FBRyxFQUFFLFlBQVk7UUFDakIsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUMsWUFBWTtLQUNuQjtJQUVELE1BQU07SUFDTixpQkFBaUIsRUFBRTtRQUNmLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUMsbUJBQW1CO0tBQzFCO0lBRUQsU0FBUztJQUNULFNBQVMsRUFBRTtRQUNQLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLEdBQUcsRUFBRSxRQUFRO1FBQ2IsR0FBRyxFQUFDLFdBQVc7S0FDbEI7SUFFRCxNQUFNO0lBQ04scUJBQXFCLEVBQUU7UUFDbkIsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixHQUFHLEVBQUUsVUFBVTtRQUNmLEdBQUcsRUFBQyx1QkFBdUI7S0FDOUI7SUFFRCxPQUFPO0lBQ1AsWUFBWSxFQUFFO1FBQ1YsR0FBRyxFQUFFLGNBQWM7UUFDbkIsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUMsY0FBYztLQUNyQjtJQUVELE9BQU87SUFDUCxlQUFlLEVBQUU7UUFDYixHQUFHLEVBQUUsaUJBQWlCO1FBQ3RCLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLEdBQUcsRUFBQyxpQkFBaUI7S0FDeEI7SUFFRCxNQUFNO0lBQ04sVUFBVSxFQUFFO1FBQ1IsR0FBRyxFQUFFLFlBQVk7UUFDakIsR0FBRyxFQUFFLGFBQWE7UUFDbEIsR0FBRyxFQUFDLFlBQVk7S0FDbkI7SUFFRCxNQUFNO0lBQ04sYUFBYSxFQUFFO1FBQ1gsR0FBRyxFQUFFLGVBQWU7UUFDcEIsR0FBRyxFQUFFLGFBQWE7UUFDbEIsR0FBRyxFQUFDLGVBQWU7S0FDdEI7SUFFRCxLQUFLO0lBQ0wsWUFBWSxFQUFFO1FBQ1YsR0FBRyxFQUFFLGNBQWM7UUFDbkIsR0FBRyxFQUFFLGFBQWE7UUFDbEIsR0FBRyxFQUFDLGNBQWM7S0FDckI7SUFFRCxRQUFRO0lBQ1IsY0FBYyxFQUFFO1FBQ1osR0FBRyxFQUFFLGdCQUFnQjtRQUNyQixHQUFHLEVBQUUsYUFBYTtRQUNsQixHQUFHLEVBQUMsZ0JBQWdCO0tBQ3ZCO0lBRUQsS0FBSztJQUNMLFlBQVksRUFBRTtRQUNWLEdBQUcsRUFBRSxjQUFjO1FBQ25CLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLEdBQUcsRUFBQyxjQUFjO0tBQ3JCO0lBRUQsTUFBTTtJQUNOLFFBQVEsRUFBRTtRQUNOLEdBQUcsRUFBRSxVQUFVO1FBQ2YsR0FBRyxFQUFFLFlBQVk7UUFDakIsR0FBRyxFQUFDLFVBQVU7S0FDakI7SUFFRCxJQUFJO0lBQ0osT0FBTyxFQUFFO1FBQ0wsR0FBRyxFQUFFLFNBQVM7UUFDZCxHQUFHLEVBQUUsVUFBVTtRQUNmLEdBQUcsRUFBQyxTQUFTO0tBQ2hCO0lBRUQsU0FBUztJQUNULGVBQWUsRUFBRTtRQUNiLEdBQUcsRUFBRSxpQkFBaUI7UUFDdEIsR0FBRyxFQUFFLE1BQU07UUFDWCxHQUFHLEVBQUMsaUJBQWlCO0tBQ3hCO0lBRUQsT0FBTztJQUNQLE9BQU8sRUFBRTtRQUNMLEdBQUcsRUFBRSxTQUFTO1FBQ2QsR0FBRyxFQUFFLE1BQU07UUFDWCxHQUFHLEVBQUMsU0FBUztLQUNoQjtDQUNKLENBQUM7QUFFRjtJQUNJO0lBQXNCLENBQUM7SUFDVCwyQkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBRyxZQUFZO0lBRXhELFVBQVU7SUFDTSxlQUFNLEdBQUc7UUFDckIsT0FBTztRQUNQLFFBQVE7UUFDUixVQUFVO0tBQ2IsQ0FBQztJQUVGLFNBQVM7SUFDTyxnQkFBTyxHQUFHO1FBQ3RCLFNBQVM7S0FDWixDQUFDO0lBRUYsU0FBUztJQUNPLHFCQUFZLEdBQUc7UUFDM0IsT0FBTztRQUNQLE1BQU0sRUFBRSxHQUFHO1FBQ1gsT0FBTztRQUNQLE9BQU8sRUFBRSxHQUFHO1FBQ1osT0FBTztRQUNQLFlBQVksRUFBRSxHQUFHO1FBQ2pCLE9BQU87UUFDUCxXQUFXLEVBQUUsR0FBRztRQUNoQixRQUFRO1FBQ1IsZUFBZSxFQUFFLEdBQUc7UUFDcEIsT0FBTztRQUNQLE1BQU0sRUFBRSxHQUFHO1FBQ1gsT0FBTztRQUNQLEtBQUssRUFBRSxHQUFHO1FBQ1YsT0FBTztRQUNQLGNBQWMsRUFBRSxHQUFHO1FBQ25CLE9BQU87UUFDUCxTQUFTLEVBQUUsR0FBRztRQUNkLE9BQU87UUFDUCxRQUFRLEVBQUUsR0FBRztRQUNiLE9BQU87UUFDUCxTQUFTLEVBQUUsR0FBRztRQUNkLE9BQU87UUFDUCxPQUFPLEVBQUUsR0FBRztRQUNaLE9BQU87UUFDUCxXQUFXLEVBQUUsR0FBRztRQUNoQixRQUFRO1FBQ1IsVUFBVSxFQUFFLElBQUk7UUFDaEIsT0FBTztRQUNQLE9BQU8sRUFBRSxJQUFJO0tBQ2hCLENBQUM7SUFFRixTQUFTO0lBQ08sa0JBQVMsR0FBRztRQUN4QixNQUFNLEVBQUM7WUFDSCxJQUFJLEVBQUMsWUFBWTtZQUNqQixLQUFLLEVBQUMsZUFBZTtTQUN4QjtRQUVELElBQUksRUFBQyxtQkFBbUI7UUFFeEIsTUFBTSxFQUFDO1lBQ0gsSUFBSSxFQUFDLGNBQWM7WUFDbkIsS0FBSyxFQUFDLGlCQUFpQjtTQUMxQjtRQUVELFNBQVMsRUFBQztZQUNOLElBQUksRUFBQyxpQkFBaUI7WUFDdEIsS0FBSyxFQUFDLG9CQUFvQjtTQUM3QjtLQUNKLENBQUM7SUFFRixJQUFJO0lBQ1ksa0JBQVMsR0FBRztRQUN4QixXQUFXLEVBQUMsa0JBQWtCO0tBQ2pDLENBQUM7SUFFRixRQUFRO0lBQ1EscUJBQVksR0FBRztRQUMzQixNQUFNLEVBQUMsbUJBQW1CO0tBQzdCLENBQUM7SUFFRixPQUFPO0lBQ1Msc0JBQWEsR0FBRztRQUM1QixNQUFNLEVBQUMsbUJBQW1CO0tBQzdCLENBQUM7SUFFYyx1QkFBYyxHQUFHO1FBQzdCLFlBQVksRUFBQywyR0FBMkc7S0FDM0gsQ0FBQztJQUVGLFdBQVc7SUFDSyxtQkFBVSxHQUFHO1FBQ3pCLE1BQU0sRUFBQztZQUNILEdBQUcsRUFBQyxLQUFLO1lBQ1QsS0FBSyxFQUFDLE9BQU87WUFDYixLQUFLLEVBQUMsT0FBTztZQUNiLEtBQUssRUFBQyxPQUFPO1lBQ2IsTUFBTSxFQUFDLFFBQVE7WUFDZixNQUFNLEVBQUMsUUFBUTtTQUNsQjtLQUNKLENBQUM7SUFFRixNQUFNO0lBQ1UsbUJBQVUsR0FBRztRQUN6QixhQUFhLEVBQUMsZUFBZTtLQUNoQyxDQUFDO0lBRWMsa0JBQVMsR0FBRztRQUN4QixXQUFXLEVBQUUsU0FBUztLQUN6QixDQUFDO0lBQ04sZUFBQztDQTdHRCxBQTZHQyxJQUFBO0FBN0dZLDRCQUFROzs7Ozs7O0FDN09yQixtQ0FBOEI7QUFDOUIsbUNBQThCOzs7O0FDRDlCLDRDQUE4QztBQUM5Qyx5Q0FBMkM7QUFHM0MsMkNBQWdEO0FBRWhEO0lBQUE7SUFvRUEsQ0FBQztJQW5FVSxzQkFBVSxHQUFqQjtRQUNJLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDN0MsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUM5QyxxQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ3hCLHFCQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFDeEIscUJBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUMzQixDQUFDLENBQ2dCLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUscUJBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sc0JBQVUsR0FBakI7UUFDSSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQzdDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDOUMscUJBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUN4QixxQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ3hCLHFCQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FDM0IsQ0FBQyxDQUNnQixDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLHFCQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFOUMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGtCQUFNLEdBQWIsVUFBYyxHQUFVO1FBQ3BCLFFBQVEsR0FBRyxFQUFFO1lBQ1QsS0FBSyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUk7Z0JBQ3JCLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUU5RixLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtnQkFDckIsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pHO0lBQ0wsQ0FBQztJQUVNLHNCQUFVLEdBQWpCLFVBQWtCLE1BQW9CLEVBQUUsSUFBaUI7UUFDckQsSUFBSSxTQUFTLEdBQW9CLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUEsNkNBQTZDO1FBQ3BILFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxxQkFBUyxHQUFoQixVQUFpQixRQUF5QixFQUFFLE1BQU07UUFDOUMsSUFBRyxDQUFDLFFBQVEsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBRWhDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTSx1QkFBVyxHQUFsQixVQUFtQixRQUFzQixFQUFFLE9BQWMsRUFBRSxPQUFjO1FBQ3JFLElBQUcsQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxJQUFJLE9BQU87WUFBRSxPQUFPO1FBRXBFLElBQUcsUUFBUSxFQUFFO1lBQ1QsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBRyxLQUFLLFlBQVksSUFBSSxDQUFDLFlBQVksRUFBQztZQUNsQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO2FBQUk7WUFDRCxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUE0QjtnQkFDbkUsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUF3QixDQUFDO1lBQzlDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUNYO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FwRUEsQUFvRUMsSUFBQTtBQXBFWSxrQ0FBVzs7OztBQ054Qiw0Q0FBOEM7QUFFOUMsbUNBQXFDO0FBRXJDO0lBTUkscUJBQVksR0FBcUI7UUFDN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBRUQsc0JBQUksaUNBQVE7YUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsaUNBQVcsR0FBWCxVQUFZLElBQVc7UUFDbkIsSUFBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRTVDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLEdBQVU7UUFDaEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksR0FBZ0I7UUFDeEIsSUFBRyxJQUFJLENBQUMsR0FBRztZQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDMUMsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLElBQUcsQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUVsQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBO0FBekNZLGtDQUFXOzs7Ozs7O0FDSnhCLGdDQUEyQjs7OztBQ0MzQix5Q0FBMkM7QUFDM0MsNENBQThDO0FBQzlDLHlDQUEyQztBQUMzQywyQ0FBc0M7QUFFdEM7SUFRSSx5QkFBWSxPQUFjLEVBQUUsT0FBYyxFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUUsT0FBUTtRQUNsRixJQUFHLE9BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUM7WUFDM0IsYUFBYTtZQUNiLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSwwQ0FBZTtBQXNCNUI7SUFBeUMsOEJBQXFCO0lBQTlEOztJQWlEQSxDQUFDO0lBdkNVLGtCQUFPLEdBQWQsVUFBZSxPQUFRO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELHNCQUFXLHFCQUFPO2FBQWxCLFVBQW1CLElBQUk7WUFDbkIsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsa0JBQUk7YUFBZixVQUFnQixJQUFJLElBQUUsQ0FBQzs7O09BQUE7SUFFaEIsdUJBQVksR0FBbkIsVUFBb0IsSUFBMEIsSUFBRSxDQUFDO0lBRTFDLHFCQUFVLEdBQWpCLFVBQWtCLElBQTBCO1FBQ3hDLElBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QjtRQUNELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0JBQVcsb0JBQU07YUFBakI7WUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztnQkFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzVDO1lBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRU0sa0JBQU8sR0FBZCxVQUFlLE1BQWEsRUFBRSxPQUF1QixFQUFFLFFBQWtCLEVBQUUsYUFBYyxFQUFFLElBQWE7UUFDcEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sZ0NBQXFCLEdBQTVCLFVBQTZCLElBQTBCLEVBQUUsTUFBYSxFQUFFLE9BQU87SUFDL0UsQ0FBQztJQUFBLENBQUM7SUE5Q2EsbUJBQVEsR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO0lBK0NsRCxpQkFBQztDQWpERCxBQWlEQyxDQWpEd0MsTUFBTSxDQUFDLGNBQWMsR0FpRDdEO0FBakRxQixnQ0FBVTtBQW1EaEM7SUFBZ0MsOEJBQWU7SUFvQjNDLG9CQUFZLE9BQWMsRUFBRSxPQUFjLEVBQUUsT0FBUTtRQUFwRCxpQkFPQztRQU5HLElBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNqQyxPQUFPO1NBQ1Y7UUFBQSxDQUFDO1FBRUYsUUFBQSxrQkFBTSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FBQzs7SUFDOUUsQ0FBQztJQVhELHNCQUFXLHNCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBakJjLDRCQUFpQixHQUFXLEtBQUssQ0FBQztJQUNsQyx3QkFBYSxHQUFXLEtBQUssQ0FBQztJQTBCakQsaUJBQUM7Q0E1QkQsQUE0QkMsQ0E1QitCLGVBQWUsR0E0QjlDO0FBNUJZLGdDQUFVO0FBa0N2QixNQUFNO0FBQ047SUFBQTtJQWdCQSxDQUFDO0lBWEcsc0JBQVcsa0JBQUk7YUFBZixVQUFnQixJQUFJO1lBQ2hCLElBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUM7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNqQztZQUVELElBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUM3QjtZQUVELGdCQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFaTSxnQkFBSyxHQUFHLENBQUMsQ0FBQztJQWFyQixpQkFBQztDQWhCRCxBQWdCQyxJQUFBO0FBaEJZLGdDQUFVO0FBeUJaLFFBQUEsU0FBUyxHQUFHO0lBQ25CLFdBQVcsRUFBRSxJQUFJLEtBQUssRUFBZTtJQUNyQyxjQUFjLEVBQUUsSUFBSSxLQUFLLEVBQWU7SUFDeEMsV0FBVyxFQUFFLElBQUksS0FBSyxFQUFlO0lBQ3JDLFlBQVksRUFBRSxJQUFJLEtBQUssRUFBZSxDQUFRLFFBQVE7Q0FDekQsQ0FBQTtBQUVELFNBQWdCLFlBQVksQ0FBQyxTQUFVO0lBQ25DLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLFFBQVEsU0FBUyxFQUFFO1FBQ2YsS0FBSyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVM7WUFDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGlCQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlELE9BQU8saUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRS9DLEtBQUssTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZO1lBQ2xDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxpQkFBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRSxPQUFPLGlCQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUVsRCxLQUFLLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUztZQUMvQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsaUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUQsT0FBTyxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFL0M7WUFDSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsaUJBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0QsT0FBTyxpQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7S0FDbkQ7QUFDTCxDQUFDO0FBbkJELG9DQW1CQztBQUVELE1BQU07QUFDTjtJQUFnQyw4QkFBVTtJQUExQzs7SUFJQSxDQUFDO0lBSEcsc0JBQVcsa0JBQUk7YUFBZixVQUFnQixTQUFrQztZQUM5QyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFDTCxpQkFBQztBQUFELENBSkEsQUFJQyxDQUorQixVQUFVLEdBSXpDO0FBSlksZ0NBQVU7QUFNdkIsU0FBUyxhQUFhLENBQUMsU0FBa0M7SUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEMsSUFBRyxDQUFDLFNBQVM7UUFBRSxPQUFPO0lBRXRCLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hELEtBQUksSUFBSSxDQUFDLElBQUksU0FBUyxFQUFDO1FBQ25CLElBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDO1lBQ1osTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25GO0tBQ0o7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDeEMsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUQsTUFBTTtBQUNOO0lBQStCLDZCQUFVO0lBQXpDOztJQTBCQSxDQUFDO0lBckJHLHNCQUFXLHNCQUFTO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsaUJBQUk7YUFBZixVQUFnQixJQUErQjtZQUMzQyxJQUFHLElBQUksQ0FBQyxlQUFlLEVBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7Z0JBQ2xELFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUMxQztZQUVELElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBQztnQkFDZixVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDckM7WUFFRCxJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQztnQkFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDMUI7WUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7SUF0QmMsb0JBQVUsR0FBRyxLQUFLLENBQUMsQ0FBRSxPQUFPO0lBdUIvQyxnQkFBQztDQTFCRCxBQTBCQyxDQTFCOEIsVUFBVSxHQTBCeEM7QUExQlksOEJBQVM7QUE0QnRCLE1BQU07QUFDTjtJQUFpQywrQkFBVTtJQUEzQzs7SUFRQSxDQUFDO0lBUEcsc0JBQVcsbUJBQUk7YUFBZixVQUFnQixRQUFRO1lBQ3BCLElBQUcsUUFBUSxDQUFDLFVBQVUsRUFBQztnQkFDbkIsVUFBVSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO2FBQ3pDO1lBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RSxDQUFDOzs7T0FBQTtJQUNMLGtCQUFDO0FBQUQsQ0FSQSxBQVFDLENBUmdDLFVBQVUsR0FRMUM7QUFSWSxrQ0FBVzs7O0FDM054QixnR0FBZ0c7O0FBRWhHOztFQUVFO0FBQ0Y7SUFhSTtJQUFjLENBQUM7SUFDUixlQUFJLEdBQVg7UUFDSSxJQUFJLEdBQUcsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUVqRCxDQUFDO0lBaEJNLGdCQUFLLEdBQVEsR0FBRyxDQUFDO0lBQ2pCLGlCQUFNLEdBQVEsSUFBSSxDQUFDO0lBQ25CLG9CQUFTLEdBQVEsWUFBWSxDQUFDO0lBQzlCLHFCQUFVLEdBQVEsVUFBVSxDQUFDO0lBQzdCLGlCQUFNLEdBQVEsS0FBSyxDQUFDO0lBQ3BCLGlCQUFNLEdBQVEsTUFBTSxDQUFDO0lBQ3JCLHFCQUFVLEdBQUssRUFBRSxDQUFDO0lBQ2xCLG9CQUFTLEdBQVEsRUFBRSxDQUFDO0lBQ3BCLGdCQUFLLEdBQVMsS0FBSyxDQUFDO0lBQ3BCLGVBQUksR0FBUyxLQUFLLENBQUM7SUFDbkIsdUJBQVksR0FBUyxLQUFLLENBQUM7SUFDM0IsNEJBQWlCLEdBQVMsSUFBSSxDQUFDO0lBTTFDLGlCQUFDO0NBbEJELEFBa0JDLElBQUE7a0JBbEJvQixVQUFVO0FBbUIvQixVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7QUNyQmxCLHdDQUEwQztBQUMxQywyQ0FBNkM7QUFFN0Msa0NBQW9DO0FBQ3BDLHdDQUEwQztBQUMxQyxxQ0FBdUM7QUFFdkM7SUFBZ0MsNkJBQXFCO0lBQXJEOztJQXVLQSxDQUFDO0lBbktBLHNCQUFXLGlCQUFJO2FBQWY7WUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFFTSwyQkFBTyxHQUFkO1FBQ0MsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXhDLGVBQWU7UUFDZixpRkFBaUY7UUFDakYscUZBQXFGO1FBQ3JGLDRFQUE0RTtRQUM1RSwrRUFBK0U7SUFDaEYsQ0FBQztJQUVTLHdCQUFJLEdBQVg7UUFDRixtRUFBbUU7UUFDbkUsUUFBUTtRQUNSLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBRTlELE1BQU07UUFDTixJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFDO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLGlEQUFpRCxDQUFDO1lBQ3RFLDhGQUE4RjtZQUM5RixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBSTtnQkFDOUIsTUFBTTtnQkFDTixZQUFZO2FBQ1osQ0FBQTtTQUNEO1FBRUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0Qix3REFBd0Q7SUFDekQsQ0FBQztJQUVPLGdDQUFZLEdBQXBCO1FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLGtDQUFjLEdBQXRCO1FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLHFDQUFpQixHQUF6QjtRQUNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sMkJBQU8sR0FBZjtRQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTyw2QkFBUyxHQUFqQixVQUFrQixRQUFnQjtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNqQyxnRUFBZ0U7SUFDakUsQ0FBQztJQUVPLCtCQUFXLEdBQW5CLFVBQW9CLElBQUk7UUFDdkIsSUFBRyxDQUFDLElBQUksRUFBQztZQUNSLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsS0FBSztRQUNMLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDakMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyw0QkFBUSxHQUFoQjtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLGdDQUFZLEdBQXBCO1FBQ0MsUUFBUSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUN2QyxLQUFLLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTztnQkFDaEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBRTNCLE1BQU07WUFDUCxLQUFLLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTztnQkFDaEMsVUFBVTtnQkFDVixNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztnQkFFOUQsNkNBQTZDO2dCQUM3Qyx3QkFBd0I7Z0JBQ3hCLFNBQVM7Z0JBQ1QsNEJBQTRCO2dCQUM1QixJQUFJO2dCQUVKLE1BQU07U0FDUDtJQUNGLENBQUM7SUFFTyxvQ0FBZ0IsR0FBeEI7UUFDQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixvQkFBb0I7SUFDckIsQ0FBQztJQUVPLCtCQUFXLEdBQW5CO1FBQ0MsT0FBTyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLHVDQUFtQixHQUEzQjtRQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFDQyxNQUFNO1FBQ04sMkRBQTJEO1FBQzNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTVCLG9CQUFvQjtRQUNwQixpRUFBaUU7SUFDbEUsQ0FBQztJQUVPLGtDQUFjLEdBQXRCO1FBQ0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyw2QkFBUyxHQUFqQjtRQUNDLElBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUM7WUFDbEUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLHVCQUF1QjtTQUN2QjthQUFLLElBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUM7WUFDckcsdUJBQXVCO1NBQ3ZCO2FBQUssSUFBRyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUM7WUFDNUIsdUJBQXVCO1NBQ3ZCO2FBQUk7WUFDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDakI7SUFDRixDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNDLElBQUksR0FBVSxDQUFDO1FBQ2YsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBRyxRQUFRLEVBQUM7WUFDWCxHQUFHLEdBQUcsUUFBUSxDQUFDO1NBQ2Y7YUFBSTtZQUNKLGFBQWE7WUFDYixHQUFHLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM3QjtRQUVELElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sNkJBQVMsR0FBakI7UUFDQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFDQyxpRkFBaUY7UUFDakYsZ0RBQWdEO1FBQ2hELFdBQVc7UUFDWCxLQUFLO1FBRUwsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNGLGdCQUFDO0FBQUQsQ0F2S0EsQUF1S0MsQ0F2SytCLE1BQU0sQ0FBQyxjQUFjLEdBdUtwRDtBQXZLWSw4QkFBUzs7OztBQ1Z0Qix5Q0FBMkM7QUFFM0M7SUFBeUMsdUNBQXFCO0lBUTdEO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBUlMsWUFBTSxHQUFHLEtBQUssQ0FBQzs7SUFRekIsQ0FBQztJQU5ELHNCQUFJLHNDQUFLO2FBQVQ7WUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFNRCx5Q0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLDRDQUFjLEdBQXJCLFVBQXNCLEtBQTJCO1FBQ2hELElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztJQUVNLDJDQUFhLEdBQXBCLFVBQXFCLEtBQTJCO0lBRWhELENBQUM7SUFFTSwyQ0FBYSxHQUFwQixVQUFxQixLQUEyQjtJQUNoRCxDQUFDO0lBRU0sOENBQWdCLEdBQXZCLFVBQXdCLFNBQXdCO1FBQy9DLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLGVBQWUsRUFBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNGLENBQUM7SUFFTSw2Q0FBZSxHQUF0QixVQUF1QixTQUF3QjtJQUMvQyxDQUFDO0lBRU0sNkNBQWUsR0FBdEIsVUFBdUIsU0FBd0I7SUFDL0MsQ0FBQztJQUVGLDBCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsQ0F6Q3dDLE1BQU0sQ0FBQyxjQUFjLEdBeUM3RDtBQXpDWSxrREFBbUI7Ozs7QUNGaEMseUNBQTJDO0FBRTNDO0lBQXlDLHVDQUFxQjtJQVE3RDtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQVJELFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBUWYsQ0FBQztJQU5ELHNCQUFJLHNDQUFLO2FBQVQ7WUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFNRCx5Q0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLDRDQUFjLEdBQXJCLFVBQXNCLEtBQTJCO1FBQ2hELElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztJQUVNLDJDQUFhLEdBQXBCLFVBQXFCLEtBQTJCO0lBRWhELENBQUM7SUFFTSwyQ0FBYSxHQUFwQixVQUFxQixLQUEyQjtJQUNoRCxDQUFDO0lBRU0sOENBQWdCLEdBQXZCLFVBQXdCLFNBQXdCO1FBQy9DLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLGVBQWUsRUFBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNGLENBQUM7SUFFTSw2Q0FBZSxHQUF0QixVQUF1QixTQUF3QjtJQUMvQyxDQUFDO0lBRU0sNkNBQWUsR0FBdEIsVUFBdUIsU0FBd0I7SUFDL0MsQ0FBQztJQUVGLDBCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsQ0F6Q3dDLE1BQU0sQ0FBQyxjQUFjLEdBeUM3RDtBQXpDWSxrREFBbUI7Ozs7QUNEaEMsbUNBQXFDO0FBRXJDLHlDQUEyQztBQUMzQyw0Q0FBOEM7QUFDOUMsbUNBQXFDO0FBQ3JDLHlDQUEyQztBQUMzQywrQkFBaUM7QUFFakMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBRW5CO0lBQStCLDZCQUFxQjtJQUFwRDtRQUFBLHFFQTZTQztRQTVTRyxjQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFVBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixrQkFBWSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBTzFCLGNBQVEsR0FBaUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O0lBbVN6RCxDQUFDO0lBalNHLDJCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBd0IsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQix5REFBeUQ7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLG1CQUFtQixDQUE4QixDQUFDO1FBQ3JILElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsbUJBQW1CLENBQThCLENBQUM7UUFDckgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDekQsQ0FBQztJQUVPLDhCQUFVLEdBQWxCO1FBRUksVUFBVSxFQUFFLENBQUM7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTywyQkFBTyxHQUFmLFVBQWdCLEtBQVk7UUFFeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVPLG1DQUFlLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTyw0QkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFTyw2QkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sMkJBQU8sR0FBZixVQUFnQixTQUFpQjtRQUM3QixTQUFTLEdBQUcsU0FBUyxDQUFBLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDMUcsQ0FBQztJQUVPLDRCQUFRLEdBQWhCLFVBQWlCLFVBQWtCO1FBQy9CLFVBQVUsR0FBRyxVQUFVLENBQUEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUTthQUNSLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsVUFBVSxDQUFDO2FBQ3hFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUE7SUFDcEUsQ0FBQztJQUVPLDJCQUFPLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sNEJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTyw0QkFBUSxHQUFoQjtRQUNJLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU8sNkJBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTyw0QkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU8sNEJBQVEsR0FBaEI7UUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTFCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEMsSUFBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVEO0lBQ0wsQ0FBQztJQUVPLDBCQUFNLEdBQWQ7UUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTFCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEMsSUFBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQztZQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9EO0lBQ0wsQ0FBQztJQUVPLDZCQUFTLEdBQWpCO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUxQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNsQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLElBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQUVPLG1DQUFlLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVPLDZCQUFTLEdBQWpCO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUxQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNsQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLElBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQztZQUNYLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCw4QkFBVSxHQUFWO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUxQixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsT0FBTztTQUNWO1FBRUQsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDbkMsS0FBSyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUk7Z0JBRXhCLE1BQU07WUFFVixLQUFLLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWTtnQkFDaEMsbUJBQW1CO2dCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLE1BQU07WUFFVixLQUFLLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUztnQkFDN0IsaUJBQWlCO2dCQUNqQixNQUFNO1lBRVYsS0FBSyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsTUFBTTtZQUVWLEtBQUssTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO2dCQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzFCLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFcEUsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvRDtJQUNMLENBQUM7SUFFTywrQkFBVyxHQUFuQjtRQUNJLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDbEMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoQyxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUM7WUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1RDtJQUNMLENBQUM7SUFFTyxpQ0FBYSxHQUFyQjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixRQUFRO1FBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRSxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBQztZQUM1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRU8sNEJBQVEsR0FBaEI7UUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTFCLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQztZQUMzRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsT0FBTztTQUNWO1FBRUQsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDO1lBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNsQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQUEsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sNkJBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTyw0QkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVPLHFDQUFpQixHQUF6QixVQUEwQixLQUFhO1FBQ25DLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFFeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVGLENBQUM7SUFFTyw2QkFBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw4QkFBVSxHQUFWO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUxQixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFFRCxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNuQyxLQUFLLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSTtnQkFFeEIsTUFBTTtZQUVWLEtBQUssTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRW5CLE1BQU07WUFFVixLQUFLLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUztnQkFDN0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUVoQixNQUFNO1lBRVYsS0FBSyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVc7Z0JBQy9CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDSSwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTdTQSxBQTZTQyxDQTdTOEIsTUFBTSxDQUFDLGNBQWMsR0E2U25EO0FBN1NZLDhCQUFTOzs7O0FDWHRCLHlDQUEyQztBQUUzQztJQUF5Qyx1Q0FBcUI7SUFHN0Q7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFFTSw0Q0FBYyxHQUFyQixVQUFzQixLQUEyQjtJQUVqRCxDQUFDO0lBRU0sMkNBQWEsR0FBcEIsVUFBcUIsS0FBMkI7SUFFaEQsQ0FBQztJQUVNLDJDQUFhLEdBQXBCLFVBQXFCLEtBQTJCO0lBRWhELENBQUM7SUFFTSw4Q0FBZ0IsR0FBdkIsVUFBd0IsU0FBd0I7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxlQUFlLEVBQUM7WUFDbEQseUdBQXlHO1NBQ3pHO0lBQ0YsQ0FBQztJQUVNLDZDQUFlLEdBQXRCLFVBQXVCLFNBQXdCO0lBQy9DLENBQUM7SUFFTSw2Q0FBZSxHQUF0QixVQUF1QixTQUF3QjtJQUMvQyxDQUFDO0lBRUYsMEJBQUM7QUFBRCxDQWhDQSxBQWdDQyxDQWhDd0MsTUFBTSxDQUFDLGNBQWMsR0FnQzdEO0FBaENZLGtEQUFtQjs7Ozs7OztBQ0ZoQyxpQ0FBNEI7QUFDNUIsMkNBQXNDO0FBQ3RDLDJDQUFzQztBQUN0QywyQ0FBc0M7Ozs7QUNIdEMsMkNBQXNDO0FBR3RDLDJDQUE2QztBQUs3QztJQUdDO1FBRlEsZUFBVSxHQUFpQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRzNFLGdCQUFnQjtRQUNoQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsS0FBSyxFQUFFLG9CQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxLQUFLLEVBQUUsb0JBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xELFdBQVc7UUFDWCxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1NBQ2hEO2FBQUk7WUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFDbkQsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsb0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUUxRCxvREFBb0Q7UUFDcEQsSUFBSSxvQkFBVSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDOUYsSUFBSSxvQkFBVSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzRixJQUFJLG9CQUFVLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU3QixnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JJLENBQUM7SUFFRCw4QkFBZSxHQUFmO1FBQ0MsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCw2QkFBYyxHQUFkO1FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQyw0REFBNEQ7SUFDN0QsQ0FBQztJQUVELGlDQUFrQixHQUFsQjtRQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUNGLFdBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBO0FBQ0QsT0FBTztBQUNQLElBQUksSUFBSSxFQUFFLENBQUM7Ozs7QUNwRFgsbUNBQXFDO0FBQ3JDLHlDQUEyQztBQUUzQztJQUFpQywrQkFBcUI7SUFvQmxEO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBbEJELHNCQUFXLG1CQUFJO2FBQWY7WUFDSSxJQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDN0MsT0FBTzthQUNWO1lBRUQsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ1gsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlELElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO29CQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqRTthQUNKO1lBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBTUQsK0JBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTCxrQkFBQztBQUFELENBM0JBLEFBMkJDLENBM0JnQyxNQUFNLENBQUMsY0FBYyxHQTJCckQ7QUEzQlksa0NBQVc7Ozs7QUNKeEIseUNBQTJDO0FBRTNDLE1BQU07QUFDTjtJQUdJO0lBQXNCLENBQUM7SUFFaEIsdUJBQUksR0FBWDtRQUNJLElBQUcsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRXpCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN6RixTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7UUFDaEUsbURBQW1EO1FBQ25ELHdGQUF3RjtRQUV4RixTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRDs7T0FFRztJQUNJLGtDQUFlLEdBQXRCLFVBQXVCLEdBQUc7UUFDdEIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRU0sdUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM5Qix3Q0FBd0M7SUFDNUMsQ0FBQztJQUVNLHVCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtBQW5DWSxnREFBa0I7Ozs7QUNFL0IsbUNBQXFDO0FBQ3JDLG1DQUFxQztBQUNyQyxxQ0FBbUQ7QUFDbkQseUNBQTJDO0FBRTNDO0lBQWlDLCtCQUFtQjtJQUFwRDtRQUFBLHFFQW1DQztRQWpDVyx1QkFBaUIsR0FBVyxLQUFLLENBQUM7UUFDbEMsbUJBQWEsR0FBVyxLQUFLLENBQUM7O0lBZ0MxQyxDQUFDO0lBOUJHLDZCQUFPLEdBQVA7UUFDSSxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVPLGtDQUFZLEdBQXBCO1FBQ0ksSUFBRyxJQUFJLENBQUMsaUJBQWlCO1lBQUUsT0FBTztRQUVsQyxjQUFjO1FBQ2QsSUFBSTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSTtRQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRU8sb0NBQWMsR0FBdEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVPLG1DQUFhLEdBQXJCO1FBQ0ksZUFBZTtRQUNmLElBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTztZQUFFLE9BQU87UUFDekQsY0FBYztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQVUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsQ0FuQ2dDLE9BQU8sQ0FBQyxXQUFXLEdBbUNuRDtBQW5DWSxrQ0FBVzs7OztBQ1Z4Qiw2QkFBK0I7QUFFL0IsbUNBQXFDO0FBR3JDLE1BQU07QUFDTjtJQUF3QyxzQ0FBbUI7SUFBM0Q7O0lBNEJBLENBQUM7SUF2Qkcsb0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsaUNBQUksR0FBSjtRQUNJLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJO1lBQUUsT0FBTztRQUVqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBeUIsQ0FBQztJQUNyRyxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNJLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNJLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxDQTVCdUMsT0FBTyxDQUFDLFdBQVcsR0E0QjFEO0FBNUJZLGdEQUFrQjs7OztBQ0wvQiw2QkFBK0I7QUFDL0IsNENBQThDO0FBQzlDLHlDQUEyQztBQUMzQyxxREFBZ0Q7QUFFaEQsUUFBUTtBQUNSO0lBQTRDLDBDQUFtQjtJQUEvRDs7SUEwQ0EsQ0FBQztJQXJDRyx3Q0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osc0ZBQXNGO0lBQzFGLENBQUM7SUFFRCxxQ0FBSSxHQUFKO1FBQ0ksSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLHlCQUF5QixDQUFpQyxDQUFDO1FBRXZILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsK0NBQWMsR0FBZCxVQUFlLFFBQWUsRUFBRSxPQUFlO1FBQzNDLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxtREFBa0IsR0FBbEI7UUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsa0RBQWlCLEdBQWpCO1FBQ0ksV0FBVztRQUNYLHFCQUFXLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQTFDQSxBQTBDQyxDQTFDMkMsT0FBTyxDQUFDLFdBQVcsR0EwQzlEO0FBMUNZLHdEQUFzQjs7Ozs7OztBQ1BuQyxtQ0FBOEI7QUFDOUIsMENBQXFDO0FBQ3JDLDBDQUFxQztBQUNyQyw4Q0FBeUM7QUFDekMsa0NBQTZCO0FBQzdCLGdDQUEyQjtBQUMzQixpQ0FBNEI7QUFDNUIsb0NBQStCO0FBQy9CLG9DQUErQjtBQUMvQixvQ0FBK0I7QUFDL0IsaUNBQTRCO0FBQzVCLHNDQUFpQztBQUNqQyxtQ0FBOEI7QUFDOUIsbUNBQThCO0FBQzlCLG1DQUE4Qjs7OztBQ1Y5Qix5Q0FBMkM7QUFDM0MsbUNBQXFDO0FBRXJDLHlDQUEyQztBQUUzQyxTQUFTO0FBQ1QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBRXZCO0lBQWlDLCtCQUFtQjtJQUFwRDtRQUFBLHFFQXlLQztRQW5LVyxrQkFBWSxHQUFVLENBQUMsQ0FBQztRQUN6QixtQkFBYSxHQUFXLEtBQUssQ0FBQztRQUM5QixrQkFBWSxHQUFXLEtBQUssQ0FBQzs7SUFpS3hDLENBQUM7SUEvSkcsNkJBQU8sR0FBUDtRQUNJLGtDQUFrQztRQUNsQyxnRkFBZ0Y7SUFDcEYsQ0FBQztJQUVELHNCQUFXLHlCQUFVO2FBQXJCLFVBQXNCLEdBQVU7WUFDNUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsNkJBQU8sR0FBUCxVQUFRLE1BQWEsRUFBRSxJQUF5QixFQUFFLFFBQWtCLEVBQUUsYUFBc0IsRUFBRSxJQUFhO1FBQ3ZHLElBQUcsQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUVqQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFdEIsSUFBRyxJQUFJO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDOztZQUVwRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUk7UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0RCxJQUFHLE9BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxNQUFNO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE9BQU87UUFDUCxpQ0FBaUM7UUFFakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQy9CLElBQUcsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLFFBQVEsRUFBQztZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLGFBQWE7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV6QixJQUFJO1FBQ0osSUFBRyxXQUFXLEVBQUM7WUFDWCxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLHFDQUFxQztTQUN4QztRQUVELElBQUcsYUFBYSxJQUFJLElBQUksRUFBQztZQUNyQixPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pEO2FBQUk7WUFDRCxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRTlDLFNBQVM7WUFDVCxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUM7WUFDMUIsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqRDtJQUNMLENBQUM7SUFFRCxNQUFNO0lBQ1Qsd0NBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUk7SUFDSiwrQkFBUyxHQUFULFVBQVUsQ0FBQztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsMkNBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU8sb0NBQWMsR0FBdEI7UUFDSSx3Q0FBd0M7UUFDeEMsSUFBRyxJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU87UUFFN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFFTyxzQ0FBZ0IsR0FBeEI7UUFDSSxrQkFBa0I7UUFDbEIsSUFBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBQztZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsRDthQUFJO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRU8sbUNBQWEsR0FBckI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVPLHVDQUFpQixHQUF6QjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUMsb0JBQW9CO1FBQ3BCLDZDQUE2QztRQUM3Qyw2Q0FBNkM7UUFDN0Msc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQiwrRkFBK0Y7UUFDL0YsSUFBSTtRQUVKLElBQUksT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FDL0IsT0FBTyxFQUNQO1lBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFSiwyQ0FBcUIsR0FBckI7UUFDTyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFBRSxPQUFPO1FBRTFGLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLElBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVk7WUFBRSxPQUFPO1FBRWxDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQTBCLENBQUM7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxNQUFNO1FBQ04sK0RBQStEO1FBRS9ELElBQUcsT0FBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLEVBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUVELGVBQWU7UUFDZiw2Q0FBNkM7UUFDN0MseURBQXlEO1FBQ3pELElBQUk7UUFDSixnRkFBZ0Y7UUFFaEYsVUFBVTtRQUNWLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBcktpQixrQkFBTSxHQUFrQyxFQUFFLENBQUM7SUFzSzlELGtCQUFDO0NBektELEFBeUtDLENBektnQyxPQUFPLENBQUMsV0FBVyxHQXlLbkQ7QUF6S1ksa0NBQVc7QUEyS3hCO0lBMEJJLHVCQUFvQixHQUFXLEVBQUUsSUFBWTtRQXRCckMsVUFBSyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDakMsYUFBYTtRQUNMLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDM0Isa0JBQWtCO1FBQ1YsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDakMsZ0RBQWdEO1FBQy9CLGFBQVEsR0FBVyxLQUFLLENBQUM7UUFDMUMsY0FBYztRQUNOLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ2pDLG1EQUFtRDtRQUMzQyxtQkFBYyxHQUFXLEtBQUssQ0FBQyxDQUFDLDJCQUEyQjtRQUNuRSwyQ0FBMkM7UUFDbkMsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFXaEMsMkJBQTJCO0lBQy9CLENBQUM7SUFWRCxzQkFBVyxxQkFBSTthQUFmO1lBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ1gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO2FBQ3BDO1lBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBTU0scUJBQU8sR0FBZCxVQUFlLEdBQVUsRUFBRSxJQUFZO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sK0JBQU8sR0FBZixVQUFnQixHQUFVLEVBQUUsSUFBWTtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWhDLElBQUcsSUFBSSxJQUFJLElBQUksRUFBQztZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsQzthQUFJO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRWpDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsTUFBTTtJQUNFLHNDQUFjLEdBQXRCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLGtCQUFrQixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTyxvQ0FBWSxHQUFwQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTFELHVCQUF1QjtRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRU8sMENBQWtCLEdBQTFCO1FBQ0ksb0JBQW9CO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3JFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBRU8sc0NBQWMsR0FBdEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztRQUMzRCxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLG9DQUFZLEdBQXBCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLFFBQVE7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRTdDLHVCQUF1QjtRQUN2QixJQUFJLE9BQU8sR0FBVyxnQ0FBZ0MsQ0FBQztRQUN2RCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxxQ0FBYSxHQUFyQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLHlDQUFpQixHQUF6QixVQUEwQixPQUFZO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFN0MsYUFBYTtRQUNiLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBSSxPQUFPLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjthQUFLLElBQUksT0FBTyxZQUFZLFdBQVcsRUFBRTtZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLHNDQUFjLEdBQXRCLFVBQXVCLENBQWE7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkNBQTJDO0lBQ3BDLHFDQUFhLEdBQXBCLFVBQXFCLElBQVk7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVPLDZCQUFLLEdBQWI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0F0SUEsQUFzSUMsSUFBQTtBQXRJWSxzQ0FBYTs7OztBQ25MMUIseUNBQTJDO0FBQzNDLG1DQUFxQztBQUlyQztJQUFpQywrQkFBbUI7SUFBcEQ7O0lBc0dBLENBQUM7SUEvRkcsc0JBQVcsdUJBQVE7UUFEbkIsU0FBUzthQUNUO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBR0Qsc0JBQVcsdUJBQVE7UUFEbkIsS0FBSzthQUNMO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFvQixDQUFDO1FBQ3RFLENBQUM7OztPQUFBO0lBR0Qsc0JBQVcsdUJBQVE7UUFEbkIsS0FBSzthQUNMO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFvQixDQUFDO1FBQ3RFLENBQUM7OztPQUFBO0lBRUQsNkJBQU8sR0FBUDtJQUVBLENBQUM7SUFFTSxtQkFBTyxHQUFkLFVBQWUsR0FBVSxFQUFFLElBQUksRUFBRSxPQUFRO1FBQ3JDLElBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV6QixJQUFHLE9BQU8sRUFBQztZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDO2FBQUk7WUFDRCxRQUFRLEdBQUcsRUFBRTtnQkFDVCxLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTztvQkFDeEIsSUFBRyxJQUFJLFlBQVksSUFBSSxDQUFDLE9BQU87d0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV6QztvQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDcEM7U0FDSjtJQUNMLENBQUM7SUFFTSxtQkFBTyxHQUFkLFVBQWUsR0FBVSxFQUFFLE9BQVE7UUFDL0IsSUFBRyxPQUFPLEVBQUM7WUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNqRDthQUFJO1lBQ0QsUUFBUSxHQUFHLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLENBQUM7Z0JBRVI7b0JBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQztTQUNKO0lBQ0wsQ0FBQztJQUVNLG1CQUFPLEdBQWQsVUFBZSxHQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLHFCQUFTLEdBQWhCLFVBQWlCLEdBQVU7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLHlCQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sMEJBQWMsR0FBckIsVUFBc0IsUUFBZSxFQUFFLElBQVcsRUFBRSxRQUFpQixFQUFFLE9BQVE7UUFDM0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQWtCLENBQUM7UUFDbkQsSUFBRyxDQUFDLElBQUksRUFBQztZQUNMLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUM1QixJQUFJLEVBQ0osVUFBQyxLQUE0QjtnQkFDekIsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ2pCLElBQUcsUUFBUSxFQUFDO29CQUNSLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNoQztZQUNMLENBQUMsRUFDRCxPQUFPLENBQ1YsQ0FBQztTQUNMO2FBQUk7WUFDRCxJQUFHLFFBQVEsRUFBQztnQkFDUixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNoQztTQUNKO0lBQ0wsQ0FBQztJQUVNLHdCQUFZLEdBQW5CLFVBQW9CLEdBQVUsRUFBRSxJQUFhO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLG1CQUFPLEdBQWQsVUFBZSxJQUFXLEVBQUUsUUFBaUIsRUFBRSxPQUFRO1FBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU0sbUJBQU8sR0FBZCxVQUFlLElBQVcsRUFBRSxRQUFpQixFQUFFLE9BQVE7UUFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSx5QkFBYSxHQUFwQixVQUFxQixHQUFnQjtRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFsR0QsU0FBUztJQUNNLG9CQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFrR3JELGtCQUFDO0NBdEdELEFBc0dDLENBdEdnQyxPQUFPLENBQUMsV0FBVyxHQXNHbkQ7QUF0R1ksa0NBQVc7Ozs7QUNUeEIsbUNBQXFDO0FBQ3JDLHlDQUEyQztBQUUzQztJQU9JLGtCQUFZLElBQWlCLEVBQUUsUUFBcUIsRUFBRSxJQUFtQjtRQUNyRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixnRUFBZ0U7SUFDcEUsQ0FBQztJQU9MLGVBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLDRCQUFRO0FBcUJyQjtJQUFnQyw4QkFBUTtJQUtwQyxvQkFBWSxJQUFpQixFQUFFLFFBQXFCO1FBQXBELFlBQ0ksa0JBQU0sSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUN4QjtRQU5PLGdCQUFVLEdBQVUsQ0FBQyxDQUFDOztJQU05QixDQUFDO0lBRU8sc0NBQWlCLEdBQXpCO1FBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxrQ0FBYSxHQUFyQjtRQUNJLE1BQU07UUFDTixzQkFBc0I7SUFDMUIsQ0FBQztJQUVPLGdDQUFXLEdBQW5CLFVBQW9CLElBQWE7UUFDN0IsUUFBUTtRQUNSLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLHlDQUFvQixHQUE1QixVQUE2QixRQUFrQixFQUFFLE9BQVE7UUFDckQsZUFBZTtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFHLFFBQVEsRUFBQztZQUNSLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsNEJBQU8sR0FBUCxVQUFRLFFBQWUsRUFBRSxRQUFrQixFQUFFLE9BQVE7UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsR0FBVTtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQTlDQSxBQThDQyxDQTlDK0IsUUFBUSxHQThDdkM7QUE5Q1ksZ0NBQVU7Ozs7QUN4QnZCLDRDQUE4QztBQUM5Qyx5Q0FBMkM7QUFHM0M7SUFjSTtJQUFzQixDQUFDO0lBRXZCLHNCQUFXLHdCQUFTO2FBQXBCO1lBQ0ksSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNYLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQUk7Z0JBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLEtBQUssQ0FBQzthQUNoQjtRQUNMLENBQUM7OztPQUFBO0lBRU0sc0JBQVUsR0FBakIsVUFBa0IsSUFBaUIsRUFBRSxPQUFjLEVBQUUsUUFBcUIsRUFBRSxRQUFlLEVBQUUsUUFBa0IsRUFBRSxPQUFRO1FBQ3JILElBQUcsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUU5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELElBQUk7SUFDRyxzQkFBVSxHQUFqQixVQUFrQixHQUFVO1FBQ3hCLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFFM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUk7SUFDRyxzQkFBVSxHQUFqQixVQUFrQixJQUFXLEVBQUUsUUFBa0IsRUFBRSxPQUFROztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQ2hFLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDM0IsSUFBRyxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWpCLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEYsQ0FBQSxLQUFBLElBQUksQ0FBQyxNQUFNLENBQUEsQ0FBQyxPQUFPLFlBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLFNBQUssSUFBSSxHQUFFO0lBQzFELENBQUM7SUFFTSxvQkFBUSxHQUFmLFVBQWdCLE9BQWMsRUFBRSxJQUFxQjtRQUNqRCxRQUFRLE9BQU8sRUFBRTtZQUNiLEtBQUssSUFBSSxDQUFDLGFBQWE7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELE1BQU07WUFFVixLQUFLLElBQUksQ0FBQyxhQUFhO2dCQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBMURNLGtCQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ2xCLGlCQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLEtBQUs7SUFDVywwQkFBYyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLDRCQUFnQixHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLGtDQUFzQixHQUFHLE9BQU8sQ0FBQztJQUNqQyx5QkFBYSxHQUFHLE9BQU8sQ0FBQztJQUN4Qix3QkFBWSxHQUFHLEtBQUssQ0FBQztJQUNyQix5QkFBYSxHQUFHLFdBQVcsQ0FBQztJQUM1QixpQ0FBcUIsR0FBRyxRQUFRLENBQUM7SUFrRHJELGtCQUFDO0NBNURELEFBNERDLElBQUE7QUE1RFksa0NBQVc7Ozs7QUNKeEIsbUNBQXFDO0FBRXJDLDRDQUF1QztBQUN2QywwQ0FBeUM7QUFFekM7SUFBa0MsZ0NBQW1CO0lBSWpEO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRUQsc0JBQVcsb0JBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVNLDBCQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFTSwwQkFBYSxHQUFwQjtRQUNGLFFBQVE7UUFDUixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBaUIsQ0FBQztRQUVwRSxPQUFPO1FBQ1AsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQWdCLENBQUM7UUFDM0UsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxxRUFBcUU7UUFDckUsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO1FBRXZELE9BQU87UUFDUCxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUF3QixDQUFDO1FBQ3RGLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkQsY0FBYyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFaUIsd0JBQVcsR0FBMUIsVUFBMkIsS0FBZ0M7UUFDN0QsSUFBRyxLQUFLLEVBQUM7WUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUV0QixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4QyxLQUFLLENBQUMsWUFBWSxDQUFDLHFCQUFTLENBQUMsQ0FBQztTQUN2QztJQUNGLENBQUM7SUFDRixtQkFBQztBQUFELENBOUNBLEFBOENDLENBOUNpQyxPQUFPLENBQUMsV0FBVyxHQThDcEQ7QUE5Q1ksb0NBQVk7Ozs7QUNKekIsbUNBQXFDO0FBSXJDLHlDQUEyQztBQUMzQyx5Q0FBMkM7QUFHM0MsUUFBUTtBQUNSLGlEQUFpRDtBQUVqRDtJQUlJO0lBQXNCLENBQUM7SUFFdkIsTUFBTTtJQUNDLHdCQUFXLEdBQWxCLFVBQW1CLElBQVcsRUFBRSxnQkFBMEIsRUFBRSxPQUFRO1FBQ2hFLElBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRW5ELDRFQUE0RTtRQUU1RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQy9DLElBQUcsT0FBTyxnQkFBZ0IsSUFBSSxVQUFVLEVBQUM7Z0JBQ3JDLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxJQUFHLENBQUMsRUFBRTtvQkFBRSxPQUFPO2dCQUVmLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQWtCLENBQUM7Z0JBQ3RFLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBa0IsQ0FBQztnQkFDM0QsSUFBSSxRQUFRLFNBQXVCLENBQUM7Z0JBQ3BDLElBQUcsR0FBRyxFQUFDO29CQUNILFFBQVEsR0FBRyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pEO2dCQUNELElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUMvRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQzdDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCxNQUFNO0lBQ0MsdUJBQVUsR0FBakIsVUFBa0IsSUFBVyxFQUFFLGdCQUEwQixFQUFFLE9BQVE7UUFDL0QsSUFBRyxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWpCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELE1BQU07SUFDQyx5QkFBWSxHQUFuQixVQUFvQixJQUFXLEVBQUUsZ0JBQTBCLEVBQUUsT0FBUTtRQUNqRSxJQUFHLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUMxQyw0Q0FBNEM7SUFFNUMsZ0NBQWdDO0lBQ2hDLDZDQUE2QztJQUM3QywwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7SUFDYixvREFBb0Q7SUFDcEQsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFFaEIsMkNBQTJDO0lBRTNDLGlEQUFpRDtJQUNqRCw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxRQUFRO0lBQ1IsSUFBSTtJQUVKLFNBQVM7SUFDRixpQ0FBb0IsR0FBM0IsVUFBNEIsS0FBWSxFQUFFLEtBQWlCO1FBQ3ZELElBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUU1QixtQkFBbUI7UUFDbkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBRyxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBRWhCLFNBQVM7UUFDVCxJQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFDO1lBQ2hCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3pDO1FBQ0QsSUFBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBQztZQUNiLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVyQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsQyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCx1QkFBdUI7SUFDdkI7Ozs7Ozs7T0FPRztJQUNILDhEQUE4RDtJQUM5RCxvRUFBb0U7SUFFcEUsMkRBQTJEO0lBQzNELDRCQUE0QjtJQUM1QiwyREFBMkQ7SUFDM0QsUUFBUTtJQUVSLDJDQUEyQztJQUUzQyxtRUFBbUU7SUFDbkUsbUNBQW1DO0lBQ25DLHVDQUF1QztJQUV2Qyw0Q0FBNEM7SUFDNUMsOEVBQThFO0lBQzlFLHVEQUF1RDtJQUN2RCxZQUFZO0lBRVosNkNBQTZDO0lBQzdDLFFBQVE7SUFFUiwrREFBK0Q7SUFHL0Qsc0JBQXNCO0lBQ3RCLElBQUk7SUFFSixjQUFjO0lBQ2Q7Ozs7T0FJRztJQUNILHlEQUF5RDtJQUN6RCxxRUFBcUU7SUFFckUsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixrRUFBa0U7SUFDbEUseUJBQXlCO0lBQ3pCLHNDQUFzQztJQUN0QywwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBRWhCLHVEQUF1RDtJQUN2RCx5Q0FBeUM7SUFDekMsb0VBQW9FO0lBQ3BFLCtDQUErQztJQUMvQyxrREFBa0Q7SUFFbEQsK0NBQStDO0lBRS9DLDJEQUEyRDtJQUMzRCxZQUFZO0lBQ1osU0FBUztJQUNULElBQUk7SUFFRyxxQkFBUSxHQUFmLFVBQWdCLEdBQVUsRUFBRSxHQUFVO1FBQ2xDLElBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUV4QixNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JELElBQUcsRUFBRSxFQUFDO1lBQ0YsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNuQixPQUFPO1lBQ1AsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsQjthQUFJO1lBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdkQ7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDTCxtQkFBQztBQUFELENBOUtBLEFBOEtDLElBQUE7QUE5S1ksb0NBQVk7Ozs7QUNYekIseUNBQTJDO0FBRTNDO0lBR0k7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQkFBSSwrQkFBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsK0JBQVcsR0FBWCxVQUFZLEtBQVk7UUFDcEIsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUs7WUFBRSxPQUFPO1FBRWhDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDTCxnQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksOEJBQVM7Ozs7QUNJdEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDaEIsTUFBTTtBQUNOLElBQUksU0FBUyxHQUFHLElBQUksS0FBSyxFQUFTLENBQUE7QUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQVMsQ0FBQTtBQUVsQztJQUFBO1FBR1csVUFBSyxHQUFHLENBQUMsQ0FBQztRQU1WLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRWQsZUFBVSxHQUFXLElBQUksQ0FBQztJQTZGdEMsQ0FBQztJQTNGRyxvQkFBSSxHQUFKLFVBQUssRUFBUyxFQUFFLGFBQXNCLEVBQUUsY0FBdUIsRUFBRSxXQUFvQixFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBbUIsRUFBRSxTQUFrQjtRQUMzSSxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFBO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFBO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ25CLFFBQVE7UUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3ZELFFBQVE7UUFDUixJQUFHLFNBQVMsSUFBSSxLQUFLLEVBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVELHNCQUFNLEdBQU47UUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRXpCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQTtZQUM5QyxJQUFHLE9BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxFQUFDO2dCQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzdEO1lBRUQscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNqRDthQUFJO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7WUFFcEIsSUFBRyxPQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFVBQVUsRUFBQztnQkFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUM7WUFFRCxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2pCO1NBQ0o7SUFDTCxDQUFDO0lBRUQscUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBRWpCLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFFbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDNUIsUUFBUTtZQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUVsRCxJQUFHLE9BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksVUFBVSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoRDtZQUVELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFRCx1QkFBTyxHQUFQLFVBQVEsRUFBRTtRQUNOLElBQUcsT0FBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFFBQVE7WUFBRSxPQUFNO1FBRWpDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7SUFDakQsQ0FBQztJQUVELHNCQUFNLEdBQU47UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUVyQixPQUFPO1FBQ1AsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFHLEtBQUssR0FBRyxDQUFDLEVBQUM7WUFDVCxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQTNHQSxBQTJHQyxJQUFBO0FBM0dZLHNCQUFLO0FBNkdsQjtJQUNJO0lBQXNCLENBQUM7SUFFdkI7Ozs7Ozs7OztPQVNHO0lBQ0kscUJBQVEsR0FBZixVQUFnQixPQUFPLEVBQUUsRUFBUyxFQUFFLGFBQXNCLEVBQUUsY0FBdUIsRUFBRSxXQUFvQixFQUFFLE1BQU8sRUFBRSxVQUFtQixFQUFFLFNBQWtCO1FBQ3ZKLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUM7WUFDZixDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQTtZQUNmLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDcEI7UUFFRCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXBGLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLHdCQUFXLEdBQWxCLFVBQW1CLE9BQTZCO1FBQzVDLElBQUcsQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUNwQixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUNuQixJQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBQztnQkFDL0MsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkJBQWMsR0FBckI7UUFDSSxLQUFJLElBQUksQ0FBQyxJQUFJLFNBQVMsRUFBQztZQUNuQixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRU0sbUJBQU0sR0FBYjtRQUNJLEtBQUksSUFBSSxDQUFDLElBQUksU0FBUyxFQUFDO1lBQ25CLElBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBQztnQkFDcEIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3pCO1NBQ0o7SUFDTCxDQUFDO0lBRU0sMEJBQWEsR0FBcEI7UUFDSSxLQUFJLElBQUksQ0FBQyxJQUFJLFNBQVMsRUFBQztZQUNuQixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEIsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXZEQSxBQXVEQyxJQUFBO0FBdkRZLG9DQUFZOzs7O0FDekh6QixpQ0FBbUM7QUFDbkMsNkJBQStCO0FBRy9CLHlDQUEyQztBQUMzQyxtQ0FBcUM7QUFDckMseUNBQTJDO0FBRTNDLE1BQU07QUFDTixJQUFJLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBbUIsQ0FBQztBQUU3QztJQUErQiw2QkFBbUI7SUFHOUM7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFRCxzQkFBa0IsaUJBQUk7YUFBdEI7WUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztnQkFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7YUFDaEM7WUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCwyQkFBTyxHQUFQO1FBQ0ksU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkIsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RCLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sbUJBQVMsR0FBaEI7UUFDSSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDbkYsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0QsRUFBRSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM3RSxFQUFFLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVjLHNCQUFZLEdBQTNCO1FBQ0ksS0FBSSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFDO1lBQ3hCLElBQUksR0FBRyxHQUFxQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUM7Z0JBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1NBQ0o7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFYyxnQkFBTSxHQUFyQixVQUFzQixHQUFHO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQTJCLENBQUM7UUFDekQsSUFBRyxDQUFDLEVBQUM7WUFDRCxJQUFJLENBQUMsY0FBYyxPQUFuQixJQUFJLEdBQWdCLENBQUMsU0FBSyxJQUFJLEdBQUU7U0FDbkM7SUFDTCxDQUFDO0lBRU0sd0JBQWMsR0FBckIsVUFBc0IsSUFBMkI7UUFBRSxlQUFRO2FBQVIsVUFBUSxFQUFSLHFCQUFRLEVBQVIsSUFBUTtZQUFSLDhCQUFROztRQUN2RCxJQUFHLENBQUMsSUFBSTtZQUFFLE9BQU07UUFFaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUcsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBQztZQUNqQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUM7YUFBSTtZQUNELFdBQVc7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxJQUFJLE9BQWIsUUFBUSxFQUFTLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEYsT0FBTztTQUNWO1FBRUQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLE9BQXRCLElBQUksR0FBbUIsUUFBUSxTQUFLLEtBQUssR0FBRTtRQUVsRCxnQ0FBZ0M7UUFDaEMsWUFBWTtRQUNaLDhCQUE4QjtRQUM5QixTQUFTO1FBQ1QsK0NBQStDO1FBQy9DLGNBQWM7UUFDZCxJQUFJO1FBRUosV0FBVztRQUNYLHdCQUF3QjtRQUN4QixpRUFBaUU7UUFDakUsSUFBSTtRQUVKLG1CQUFtQjtJQUN2QixDQUFDO0lBRWMsMkJBQWlCLEdBQWhDLFVBQWlDLFFBQXdCO1FBQUUsZUFBUTthQUFSLFVBQVEsRUFBUixxQkFBUSxFQUFSLElBQVE7WUFBUiw4QkFBUTs7UUFDL0QsSUFBRyxRQUFRLENBQUMsT0FBTyxFQUFDO1lBQ2hCLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxPQUFqQixJQUFJLEdBQWMsUUFBUSxTQUFLLEtBQUssRUFBQyxDQUFDO1lBQ2pELElBQUcsQ0FBQyxRQUFRO2dCQUFFLE9BQU87U0FDeEI7UUFFRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsSUFBRyxJQUFJLEVBQUM7WUFDSixRQUFRLENBQUMsSUFBSSxPQUFiLFFBQVEsRUFBUyxLQUFLLEVBQUM7U0FDMUI7YUFBSTtZQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN4QyxPQUFPO1NBQ1Y7UUFFRCxRQUFRO1FBQ1IsSUFBRyxRQUFRLENBQUMsT0FBTyxFQUFDO1lBQ2hCLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUTtJQUNELDJCQUFpQixHQUF4QixVQUF5QixJQUFXO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFvQixDQUFDO1FBQ3BELFNBQVM7UUFDVCxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsUUFBUTtJQUNELDBCQUFnQixHQUF2QixVQUF3QixJQUFXO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLDJCQUFpQixHQUF4QixVQUF5QixJQUFXO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLHFCQUFXLEdBQWxCLFVBQW1CLElBQVc7UUFDMUIsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFDO1lBQ3pCLElBQUcsQ0FBQyxJQUFJLElBQUk7Z0JBQUUsTUFBTTtZQUVwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDaEM7U0FDSjtJQUNMLENBQUM7SUFFTSxxQkFBVyxHQUFsQixVQUFtQixJQUFXO1FBQzFCLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBQztZQUN6QixJQUFHLENBQUMsSUFBSSxJQUFJO2dCQUFFLE9BQU87WUFFckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQy9CO1NBQ0o7SUFDTCxDQUFDO0lBdUNELE1BQU07SUFDQyxtQkFBUyxHQUFoQixVQUFrQixTQUFnQyxFQUFFLElBQUk7UUFDcEQsSUFBRyxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBRXRCLElBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQzdCLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUMxQyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbkU7YUFBSTtZQUNELFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUVjLHNCQUFZLEdBQTNCLFVBQTZCLFNBQXlCO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDM0QsSUFBRyxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBRXRCLElBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQy9CLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNsRCx1Q0FBdUM7U0FDMUM7YUFBSTtZQUNELE9BQU8sU0FBUyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVELFNBQVM7SUFDTSx1QkFBYSxHQUE1QjtRQUNJLDBDQUEwQztRQUMxQyxzQ0FBc0M7UUFDdEMsNkNBQTZDO1FBRTdDLHVCQUF1QjtRQUN2QixRQUFRO1FBQ1IsTUFBTTtRQUNOLHFEQUFxRDtRQUVyRCxJQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztZQUMvQixTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzNCLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekMsSUFBRyxLQUFLLEVBQUM7Z0JBQ0wsU0FBUyxDQUFDLGlCQUFpQixPQUEzQixTQUFTLEdBQW1CLEtBQUssU0FBSyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRTthQUNqRjtTQUNKO0lBQ0wsQ0FBQztJQUVELFVBQVU7SUFDSCwyQkFBaUIsR0FBeEIsVUFBeUIsT0FBZ0IsRUFBRSxjQUF3QixFQUFFLFNBQWlCLEVBQUUsWUFBb0I7UUFDeEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNwSyxDQUFDO0lBRUQsUUFBUTtJQUNELDBCQUFnQixHQUF2QixVQUF3QixVQUFVLEVBQUUsY0FBd0IsRUFBRSxTQUFpQixFQUFFLFlBQW9CO1FBQ2pHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzVLLENBQUM7SUFFRCxXQUFXO0lBQ0osaUNBQXVCLEdBQTlCLFVBQStCLE9BQWdCLEVBQUUsVUFBVSxFQUFFLGNBQXdCLEVBQUUsU0FBaUIsRUFBRSxZQUFvQjtRQUMxSCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQ3RFLE9BQU8sRUFDUCxjQUFjLEVBQ2QsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUN6QyxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksQ0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBdkdELHFEQUFxRDtJQUNyRCw2QkFBNkI7SUFFN0Isc0NBQXNDO0lBRXRDLDZGQUE2RjtJQUM3RixzQ0FBc0M7SUFFdEMsbUNBQW1DO0lBQ25DLDBEQUEwRDtJQUMxRCxnREFBZ0Q7SUFDaEQscUJBQXFCO0lBQ3JCLG9EQUFvRDtJQUNwRCxRQUFRO0lBQ1IsSUFBSTtJQUVHLG9CQUFVLEdBQUcsVUFBUyxTQUFTO1FBQ2xDLElBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQUUsT0FBTztRQUVqQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDLENBQUE7SUFFTSxtQkFBUyxHQUFHLFVBQVMsU0FBUztRQUNqQyxJQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUFFLE9BQU87UUFFakMsS0FBSSxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUM7WUFDbkIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2RCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQyxDQUFBO0lBRU0sa0JBQVEsR0FBRyxJQUFJLEtBQUssRUFBMEIsQ0FBQztJQUMvQyxvQkFBVSxHQUFHLElBQUksS0FBSyxFQUFtQixDQUFDO0lBQzFDLG1CQUFTLEdBQUcsRUFBRSxDQUFDO0lBc0UxQixnQkFBQztDQXZQRCxBQXVQQyxDQXZQOEIsT0FBTyxDQUFDLFdBQVcsR0F1UGpEO0FBdlBZLDhCQUFTOzs7O0FDVnRCLE1BQU07QUFDTjtJQUdJO0lBQXNCLENBQUM7SUFFdkIsc0JBQVcseUJBQU87YUFJbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQU5ELFVBQW1CLE9BQWM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFLTCxxQkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksd0NBQWM7Ozs7QUNGM0IscURBQWdEO0FBR2hELDZCQUErQjtBQUUvQix5Q0FBMkM7QUFDM0MseUNBQTJDO0FBRTNDO0lBQTZDLDJDQUFlO0lBQTVEOztJQXVDQSxDQUFDO0lBcENHLDBDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCx3Q0FBTSxHQUFOLFVBQU8sSUFBSTtRQUNQLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcscUJBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQsa0RBQWdCLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQUcsT0FBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFFBQVEsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztZQUNqRCxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDcEMscUJBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkM7UUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELGlEQUFlLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHdEQUFzQixHQUF0QjtRQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUM7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHlDQUFPLEdBQVA7UUFDSSxxQkFBVyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsQ0F2QzRDLElBQUksQ0FBQyxVQUFVLEdBdUMzRDtBQXZDWSwwREFBdUI7Ozs7QUNMcEMsNkJBQStCO0FBRS9CO0lBQXVDLHFDQUFTO0lBQWhEOztJQWdCQSxDQUFDO0lBVkcsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRWxELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ25FLENBQUM7SUFFRCxxQ0FBUyxHQUFUO0lBQ0EsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsQ0FoQnNDLElBQUksQ0FBQyxJQUFJLEdBZ0IvQztBQWhCWSw4Q0FBaUI7Ozs7QUNMOUIseUNBQTJDO0FBQzNDLDRDQUE4QztBQUM5Qyx5Q0FBMkM7QUFFM0MseUNBQXlDO0FBQ3pDLGtEQUFrRDtBQUVsRCxtQ0FBbUM7QUFDbkMsSUFBSSxPQUFPLEdBQXVCLEVBQUUsQ0FBQztBQXlCakIsMEJBQU87QUF2QjNCLDJCQUEyQjtBQUMzQixJQUFJLFVBQVUsR0FBRyxJQUFJLEtBQUssRUFBYyxDQUFDO0FBc0JqQyxnQ0FBVTtBQXBCbEIscUVBQXFFO0FBQzFELFFBQUEsWUFBWSxHQUFHLElBQUksS0FBSyxFQUFxQixDQUFDO0FBQzlDLFFBQUEsWUFBWSxHQUFrQyxFQUFFLENBQUM7QUFFNUQ7SUFJSSxxQkFBWSxHQUFnQixFQUFFLE9BQWdCO1FBQzFDLElBQUcsQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUVoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQUlELGFBQWE7QUFDYiw4QkFBOEI7QUFDOUIsbUNBQW1DO0FBQ25DLGNBQWM7QUFDZDtJQUF1Qyw0QkFBcUI7SUFBNUQ7O0lBUUEsQ0FBQztJQUxHLDRCQUFTLEdBQVQ7UUFFSSxhQUFhO1FBQ2IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQVJBLEFBUUMsQ0FSc0MsTUFBTSxDQUFDLGNBQWMsR0FRM0Q7QUFScUIsNEJBQVE7QUFVOUI7SUFBZ0MsOEJBQVE7SUFvQnBDLG9CQUFZLElBQVksRUFBRSxJQUFpQixFQUFFLFlBQXFCLEVBQUUsT0FBZ0I7UUFBcEYsWUFDSSxpQkFBTyxTQW9CVjtRQWpDTSxZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNwQixtQkFBYSxHQUFHLElBQUksS0FBSyxFQUFlLENBQUM7UUFRN0MsSUFBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7U0FFeEM7UUFBQSxDQUFDO1FBRUYsSUFBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQixVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsS0FBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsS0FBSSxDQUFDLFlBQVksR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDO1FBQ3pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQzs7SUFDbkMsQ0FBQztJQXhCRCxzQkFBVyxpQkFBRzthQUNkLGNBQWlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFBLENBQUM7YUFEbEMsVUFBZSxHQUFVLElBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUEsQ0FBQSxDQUFDOzs7T0FBQTtJQTBCcEMsa0JBQU8sR0FBZCxVQUFlLEVBQVM7UUFDcEIsb0JBQVksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVNLGVBQUksR0FBWCxVQUFZLElBQUksRUFBRSxJQUFnQixFQUFFLElBQVk7UUFDNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqQyxvQkFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxJQUFpQixFQUFFLEdBQVU7UUFFcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBQ2pDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFaEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxLQUFNO1FBQ1AsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFFbEIsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0ksSUFBRyxJQUFJLENBQUMsWUFBWSxFQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNFO1FBRUQsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6RDtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQ0FBaUIsR0FBakIsVUFBa0IsTUFBbUIsRUFBRSxHQUFZLEVBQUUsSUFBZ0IsRUFBRSxPQUFRO1FBQzNFLElBQUcsTUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUNoQztZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN2QyxPQUFPO1NBQ1Y7UUFFRCxPQUFPLEdBQUcsT0FBTyxDQUFBLENBQUMsQ0FBQSxPQUFPLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELDBCQUFLLEdBQUw7UUFDSSxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSztZQUFFLE9BQU87UUFFaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekUsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUU7UUFFRCxvQ0FBb0M7UUFDcEMsa0RBQWtEO1FBQ2xELFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXBDLFFBQVE7UUFDUixLQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNoQztRQUVELFFBQVE7UUFDUixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixTQUFTO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBRyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssRUFBRTtZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUV4QixJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0o7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixNQUFNO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPO0lBQ1AseUJBQUksR0FBSixVQUFLLElBQUs7UUFDTixJQUFJLEdBQUcsSUFBSSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFN0IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7UUFDRCxjQUFjO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxPQUFPO0lBQ1AseUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsU0FBUztJQUNULGlDQUFZLEdBQVosVUFBYSxLQUFZO1FBQ3JCLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVELFFBQVE7SUFDUixnQ0FBVyxHQUFYLFVBQVksUUFBZ0I7UUFDeEIsSUFBRyxRQUFRLElBQUksSUFBSTtZQUFFLE9BQU87UUFFNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw4QkFBUyxHQUFULFVBQVUsSUFBSztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw0QkFBTyxHQUFQLGNBQVcsQ0FBQztJQUVaLDZCQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsMkJBQU0sR0FBTixVQUFPLElBQUssSUFBRyxDQUFDO0lBRWhCLDJCQUFNLEdBQU4sVUFBTyxJQUFLLElBQUcsQ0FBQztJQUVoQiwyQkFBTSxHQUFOLGNBQVUsQ0FBQztJQUVYLGtDQUFhLEdBQWIsVUFBYyxRQUFnQixJQUFHLENBQUM7SUFDdEMsaUJBQUM7QUFBRCxDQW5PQSxBQW1PQyxDQW5PK0IsUUFBUSxHQW1PdkM7QUFuT1ksZ0NBQVU7QUFxT3ZCO0lBQTBCLHdCQUFRO0lBc0I5QixjQUFZLEdBQVU7UUFBdEIsWUFDSSxpQkFBTyxTQWFWO1FBakNPLG1CQUFhLEdBQUcsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQVN6QyxrQkFBWSxHQUFtQixFQUFFLENBQUM7UUFZdEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFckIsSUFBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUM7U0FDdkI7UUFFRCxLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUM7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7O1NBRXhDOztJQUNMLENBQUM7SUFqQkQsc0JBQVcsV0FBRzthQUNkLGNBQWlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFBLENBQUM7YUFEbEMsVUFBZSxHQUFVLElBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUEsQ0FBQSxDQUFDOzs7T0FBQTtJQW1CM0Msc0JBQUksb0JBQUU7YUFBTjtZQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlCQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCx5QkFBVSxHQUFWO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDVCxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekUsSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUM7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JEO2lCQUFJO2dCQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFvQixDQUFDO2dCQUM1RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbkI7U0FDSjtJQUNMLENBQUM7SUFFRCwwQkFBVyxHQUFYLFVBQVksR0FBRztRQUVYLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFdEIsSUFBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFDaEI7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMEJBQVcsR0FBWCxVQUFZLFdBQWtCLEVBQUUsUUFBaUI7UUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDOUMsQ0FBQztJQUVELDZCQUFjLEdBQWQsVUFBZSxXQUFXOztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQy9CLElBQUcsT0FBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxPQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLFVBQVU7WUFBRSxPQUFPO1FBRW5HLENBQUEsS0FBQSxJQUFJLENBQUMsWUFBWSxDQUFBLENBQUMsV0FBVyxDQUFDLFdBQUksSUFBSSxFQUFFO0lBQzVDLENBQUM7SUFFRCxnQ0FBaUIsR0FBakIsVUFBa0IsTUFBbUIsRUFBRSxHQUFZLEVBQUUsSUFBZ0IsRUFBRSxPQUFRO1FBQzNFLElBQUcsTUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUNoQztZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN2QyxPQUFPO1NBQ1Y7UUFFRCxPQUFPLEdBQUcsT0FBTyxDQUFBLENBQUMsQ0FBQSxPQUFPLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELGdDQUFpQixHQUFqQixVQUFrQixPQUFPLEVBQUUsSUFBYTtRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQzdDLE1BQU0sQ0FBQyxpQkFBaUIsT0FBeEIsTUFBTSxHQUFtQixJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLFNBQUssSUFBSSxHQUFFO0lBQ2hFLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLFFBQVE7UUFDUixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixTQUFTO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsUUFBUTtRQUNSLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBQztZQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRWhDLHVCQUF1QjtRQUN2QixjQUFjO1FBQ2QsMENBQTBDO1FBQzFDLGdDQUFnQztRQUNoQyxXQUFXO1FBRVgsNkJBQTZCO1FBRTdCLHlEQUF5RDtRQUN6RCw2Q0FBNkM7UUFDN0MsV0FBVztRQUNYLElBQUk7UUFFSixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx3QkFBUyxHQUFULGNBQVksQ0FBQztJQUViLHVCQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsd0JBQVMsR0FBVCxVQUFVLElBQUssSUFBRyxDQUFDO0lBRW5CLDBCQUFXLEdBQVgsVUFBWSxRQUFRO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMkJBQVksR0FBWixVQUFhLEtBQUs7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELG1CQUFJLEdBQUosVUFBSyxJQUFLO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0F6SkEsQUF5SkMsQ0F6SnlCLFFBQVEsR0F5SmpDO0FBekpZLG9CQUFJO0FBMkpqQjtJQUNJO0lBQXNCLENBQUM7SUFFaEIsZUFBUSxHQUFmLFVBQWdCLElBQWUsRUFBRSxJQUFLO1FBQ2xDLElBQUcsQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUVqQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLFFBQVE7UUFDUix1Q0FBdUM7UUFDdkMsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9CLElBQUcsS0FBSyxFQUFDO1lBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFFTSxvQkFBYSxHQUFwQixVQUFxQixFQUFFO1FBQ25CLElBQUksSUFBSSxHQUFHLG9CQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBRyxJQUFJO1lBQ0gsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDOztZQUVsQixPQUFPLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0wsYUFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0Qlksd0JBQU07Ozs7QUMvYW5CLHlCQUEyQjtBQUczQix5Q0FBMkM7QUFFM0M7SUFBdUMscUNBQWE7SUFBcEQ7O0lBK0JBLENBQUM7SUE1Qkcsa0NBQU0sR0FBTixVQUFPLElBQUk7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTTtJQUNOLHlDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU07SUFDTix5Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0ksNkVBQTZFO0lBQ2pGLENBQUM7SUFDTCx3QkFBQztBQUFELENBL0JBLEFBK0JDLENBL0JzQyxFQUFFLENBQUMsVUFBVSxHQStCbkQ7QUEvQlksOENBQWlCOzs7O0FDUDlCLDRDQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQseUNBQTJDO0FBQzNDLCtDQUE0QztBQUM1Qyw2QkFBK0I7QUFDL0IsbUNBQXFDO0FBRXJDLHlDQUEyQztBQUUzQztJQUErQyw2Q0FBZTtJQUE5RDtRQUFBLHFFQWlJQztRQS9IVSxjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsWUFBTSxHQUFHLENBQUMsQ0FBQzs7SUE0SHZCLENBQUM7SUExSEcsMENBQU0sR0FBTixVQUFPLElBQUk7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRXpCLGNBQWM7UUFDZCxzRUFBc0U7UUFDdEUsbUJBQW1CO1FBQ25CLElBQUk7UUFFSixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEUsY0FBYztRQUNwQix1RUFBdUU7SUFDckUsQ0FBQztJQUVPLHFEQUFpQixHQUF6QjtRQUNJLHNCQUFzQjtRQUN0Qiw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFbEUsV0FBVztRQUNYLElBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3BCLDBDQUEwQztZQUMxQyxJQUFJLENBQUMsTUFBTSxJQUFJLG1CQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUMxQztJQUNMLENBQUM7SUFFRCxrREFBYyxHQUFkLFVBQWUsUUFBZSxFQUFFLE9BQWU7UUFDM0MsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLGFBQWEsR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQzlFLENBQUM7SUFFRCxLQUFLO0lBQ0wsK0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsUUFBUSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBRW5DLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLEVBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCwrQ0FBVyxHQUFYLFVBQVksV0FBVztRQUNuQixJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLDJEQUEyRDtRQUUzRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxRQUFRLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFBLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFFbkMsU0FBUztRQUNULElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLEVBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXZELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixzQ0FBc0M7WUFDdEMsb0JBQW9CO1lBQ3BCLElBQUk7U0FDUDtJQUNMLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0ksSUFBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxxQkFBVyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUxRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzREFBa0IsR0FBbEI7UUFDSSxJQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxJQUFJLEtBQUssRUFBQztZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVELHFEQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELGtEQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELCtDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGVBQWU7SUFDZiw0Q0FBUSxHQUFSO1FBQ0ksSUFBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUc7WUFBRSxPQUFPO1FBRS9CLElBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUM7WUFDOUQsSUFBRyxDQUFDLHFCQUFXLENBQUMsZ0JBQWdCO2dCQUFFLE9BQU87U0FDNUM7UUFFRCxJQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxJQUFJLEtBQUssRUFBQztZQUN6QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixPQUFPO1NBQ1Y7UUFFRCxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUNqQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixPQUFPO1NBQ1Y7UUFBQSxDQUFDO1FBRUYsSUFBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsa0JBQWtCO1lBQUUsT0FBTztRQUUvQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDJDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0FqSUEsQUFpSUMsQ0FqSThDLElBQUksQ0FBQyxVQUFVLEdBaUk3RDtBQWpJWSw4REFBeUI7Ozs7QUNUdEMsK0NBQTRDO0FBSTVDLDZCQUErQjtBQUcvQjtJQUF5Qyx1Q0FBUztJQUFsRDs7SUFnQkEsQ0FBQztJQWJHLHNDQUFRLEdBQVI7UUFDSSxNQUFNO1FBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsbUJBQVEsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO1FBRTFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHVDQUFTLEdBQVQ7SUFDQSxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQWhCQSxBQWdCQyxDQWhCd0MsSUFBSSxDQUFDLElBQUksR0FnQmpEO0FBaEJZLGtEQUFtQjs7OztBQ0xoQyx5QkFBMkI7QUFFM0IseUNBQTJDO0FBRzNDO0lBQWlDLCtCQUFPO0lBQXhDOztJQVlBLENBQUM7SUFURyw4QkFBUSxHQUFSO1FBQ0ksTUFBTTtRQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUU5RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFFRCwrQkFBUyxHQUFUO0lBQ0EsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FaQSxBQVlDLENBWmdDLEVBQUUsQ0FBQyxJQUFJLEdBWXZDO0FBWlksa0NBQVc7Ozs7QUNKeEIsNkJBQStCO0FBQy9CLHlCQUEyQjtBQUMzQix5Q0FBMkM7QUFFM0MsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7QUFFakQ7SUFBa0QsZ0RBQWU7SUFLN0Q7ZUFDSSxrQkFBTSxJQUFJLEVBQUUsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7SUFDdkQsQ0FBQztJQUVELDZDQUFNLEdBQU4sVUFBTyxJQUEyQjtRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU5RCxJQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxZQUFZLE1BQU0sQ0FBQyxlQUFlLElBQUksS0FBSyxFQUFDO1lBQy9ELE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUM1QyxPQUFPO1NBQ1Y7YUFBSTtZQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELG9EQUFhLEdBQWI7UUFDSSxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUM7WUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDhDQUFPLEdBQVA7SUFDQSxDQUFDO0lBL0JNLGlDQUFJLEdBQUcsSUFBSSxDQUFDO0lBZ0N2QixtQ0FBQztDQWpDRCxBQWlDQyxDQWpDaUQsSUFBSSxDQUFDLFVBQVUsR0FpQ2hFO0FBakNZLG9FQUE0Qjs7OztBQ0x6Qyw2QkFBK0I7QUFDL0IseUNBQTJDO0FBQzNDLHlDQUEyQztBQUUzQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQztBQUVqRDtJQUE0QywwQ0FBUztJQVVqRDtlQUNJLGtCQUFNLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCwwQ0FBUyxHQUFULFVBQVUsSUFBMkI7UUFDakMsSUFBRyxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWpCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELFFBQVEsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQixLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPO2dCQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBRVYsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBTTtnQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUVWLEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQjtnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07U0FDYjtRQUVELE1BQU07UUFDTixJQUFHLElBQUksQ0FBQyxhQUFhLEVBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMxQztRQUNELElBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFFRCw2Q0FBWSxHQUFaLFVBQWEsSUFBa0I7UUFBL0IsaUJBS0M7UUFKRyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDVixLQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLFVBQWdCO1FBQ3hCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCwwQ0FBUyxHQUFUO0lBQ0EsQ0FBQztJQWxFTSwyQkFBSSxHQUFHLElBQUksQ0FBQztJQW1FdkIsNkJBQUM7Q0FwRUQsQUFvRUMsQ0FwRTJDLElBQUksQ0FBQyxJQUFJLEdBb0VwRDtBQXBFWSx3REFBc0I7Ozs7Ozs7QUNWbkMsK0NBQTBDO0FBQzFDLHlDQUFvQztBQUNwQyw0QkFBdUI7QUFDdkIseUNBQW9DO0FBQ3BDLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMsbUNBQThCO0FBQzlCLG9EQUErQztBQUMvQyw4Q0FBeUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0ICogZnJvbSAnLi9FdmVudFR5cGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Jlc291cmNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9VdGlscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9naWNVdGlscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vV3hVdGlscyc7XHJcbiIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgR0V2ZW50IGZyb20gXCIuL0dFdmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50RGlzcGF0aGVyIGV4dGVuZHMgTGF5YS5TY3JpcHQzRCB7XHJcbiAgICBwcm90ZWN0ZWQgX2V2ZW50TGlzdCA9IG5ldyBBcnJheTxDb25maWcuRXZlbnRDbGFzcz4oKTsgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfc3RhdGljRXZlbnRMaXN0ID0gbmV3IEFycmF5PENvbmZpZy5FdmVudENsYXNzPigpOyAvL+mdmeaAgeaWueazleS6i+S7tlxyXG5cclxuICAgIC8v6Z2Z5oCB5pa55rOVXHJcbiAgICBzdGF0aWMgYWRkRXZlbnRMaXN0ZW5lcihrZXksIGxpc2VuZXI6RnVuY3Rpb24pe1xyXG4gICAgICAgIEdFdmVudC5BZGRMaXN0ZW5lcihrZXksIGxpc2VuZXIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRpY0V2ZW50TGlzdC5wdXNoKG5ldyBDb25maWcuRXZlbnRDbGFzcyhrZXksIGxpc2VuZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGlzcGF0Y2hFdmVudChrZXksIC4uLmRhdGEpe1xyXG4gICAgICAgIEdFdmVudC5EaXNwYXRjaChrZXksIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGVhckV2ZW50TGlzdGVuZXIoKXtcclxuICAgICAgICB0aGlzLl9zdGF0aWNFdmVudExpc3QuZm9yRWFjaChldnQ9PntcclxuICAgICAgICAgICAgR0V2ZW50LlJlbW92ZUxpc3RlbmVyKGV2dC5LZXksIGV2dC5MaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGV2dCA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByb2Nlc3NFdmVudChrZXksIGxpc3RlbmVyOkZ1bmN0aW9uLCAuLi5kYXRhKXtcclxuICAgICAgICAvLyBsaXN0ZW5lci5jYWxsKHRoaXMsIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5a6e5L6L5YyW6YeN6L295pa55rOVXHJcbiAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihrZXksIGxpc2VuZXI6RnVuY3Rpb24pe1xyXG4gICAgICAgIEdFdmVudC5BZGRMaXN0ZW5lcihrZXksIGxpc2VuZXIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdC5wdXNoKG5ldyBDb25maWcuRXZlbnRDbGFzcyhrZXksIGxpc2VuZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcGF0Y2hFdmVudChrZXksIC4uLmRhdGEpe1xyXG4gICAgICAgIEdFdmVudC5EaXNwYXRjaChrZXksIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5b+F6aG75Zyo6ZSA5q+B5pe25omn6KGM5q2k5pa55rOVXHJcbiAgICBwdWJsaWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpe1xyXG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdC5mb3JFYWNoKGV2dD0+e1xyXG4gICAgICAgICAgICBHRXZlbnQuUmVtb3ZlTGlzdGVuZXIoZXZ0LktleSwgZXZ0Lkxpc3RlbmVyKTtcclxuICAgICAgICAgICAgZXZ0ID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJvY2Vzc0V2ZW50KGtleSwgbGlzdGVuZXI6RnVuY3Rpb24sIC4uLmRhdGEpe1xyXG4gICAgICAgIC8vIGxpc3RlbmVyLmNhbGwodGhpcywgLi4uZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgLy/ph43lhpnmraTnu4Tku7bmlrnms5Xlv4XpobvmiafooYxcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQmFzZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBlbnVtIEV2ZW50U3BhbiB7XHJcbiAgICBNb2R1bGVTcGFuID0gMTAwMDAwLFxyXG4gICAgRnVuY1NwYW4gPSAxMDAwLFxyXG4gICAgVUlTcGFuID0gMSxcclxufVxyXG5cclxuLy/mqKHlnZflip/og71cclxuZW51bSBNb2R1bGVFdHlwZSB7XHJcbiAgICBTY2VuZSA9IDEsXHJcbiAgICBHYW1lID0gMixcclxuICAgIE5ldCA9IDMsXHJcbiAgICBVaSA9IDQsXHJcbiAgICBOcGMgPSA1LFxyXG4gICAgQ2hhcmFjdGVyID0gNixcclxuICAgIEFzc2V0ID0gNyxcclxuICAgIERhdGEgPSA4LFxyXG4gICAgQXVkaW8gPSA5LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNb2R1bGVFaWQge1xyXG4gICAgU2NlbmUgICAgICAgPSBNb2R1bGVFdHlwZS5TY2VuZSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLCAgIC8v5Zy65pmv5qih5Z2XXHJcbiAgICBOZXQgICAgICAgICA9IE1vZHVsZUV0eXBlLk5ldCAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLCAgIC8v572R57uc5qih5Z2XXHJcbiAgICBHYW1lICAgICAgICA9IE1vZHVsZUV0eXBlLkdhbWUgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgICAvL+eOqeazleaooeWdl1xyXG4gICAgRGF0YSAgICAgICAgPSBNb2R1bGVFdHlwZS5EYXRhICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sICAvL1VJ5qih5Z2XXHJcbiAgICBVaSAgICAgICAgICA9IE1vZHVsZUV0eXBlLlVpICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sICAvL1VJ5qih5Z2XXHJcbiAgICBDaGFyYWN0ZXIgICA9IE1vZHVsZUV0eXBlLkNoYXJhY3RlciAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLCAvL+eOqeWutuWxnuaAp+aooeWdl1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBNYW5hZ2VyRWlkIHtcclxuICAgIEdhbWVNYW5hZ2VyICAgICAgICAgPSBNb2R1bGVFdHlwZS5HYW1lICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sXHJcbiAgICBOZXRNYW5hZ2VyICAgICAgICAgID0gTW9kdWxlRXR5cGUuTmV0ICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sXHJcbiAgICBVaU1hbmFnZXIgICAgICAgICAgID0gTW9kdWxlRXR5cGUuVWkgKiBFdmVudFNwYW4uTW9kdWxlU3BhbixcclxuICAgIEFzc2V0TWFuYWdlciAgICAgICAgPSBNb2R1bGVFdHlwZS5Bc3NldCAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG4gICAgRGF0YU1hbmFnZXIgICAgICAgICA9IE1vZHVsZUV0eXBlLkRhdGEgKiBFdmVudFNwYW4uTW9kdWxlU3BhbixcclxuICAgIEF1ZGlvTWFuYWdlciAgICAgICAgPSBNb2R1bGVFdHlwZS5EYXRhICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLee9kee7nOaooeWdl+WKn+iDvS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IG5ldE1vZHVsZU51bSA9IDE7XHJcbmVudW0gTmV0TW9kdWxlSWQge1xyXG4gICAgSHR0cENvbm5ldCAgICAgICA9IE1vZHVsZUVpZC5OZXQgKyAobmV0TW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL0hUVFDov57mjqVcclxufVxyXG5cclxuLy9IVFRQ6L+e5o6lXHJcbmxldCBuZXRIdHRwQ29ubmVjdEVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIE5ldEh0dHBDb25uZWN0RWlkIHtcclxuICAgIFNlcnZpY2VSZXNwb25kICAgICAgPSBOZXRNb2R1bGVJZC5IdHRwQ29ubmV0ICsgbmV0SHR0cENvbm5lY3RFaWROdW0rKywgICAgLy/lk43lupTmiJDlip9cclxuICAgIENvbm5lY3RCZWdpbiAgICAgICAgPSBOZXRNb2R1bGVJZC5IdHRwQ29ubmV0ICsgbmV0SHR0cENvbm5lY3RFaWROdW0rKywgICAgLy/lvIDlp4vov57mjqVcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Zy65pmv5qih5Z2X5Yqf6IO9LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgc2NlbmVNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIFNjZW5lTW9kdWxlSWQge1xyXG4gICAgTG9naW4gICAgICAgPSBNb2R1bGVFaWQuU2NlbmUgKyAoc2NlbmVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v55m75b2VXHJcbiAgICBFbnRlciAgICAgICA9IE1vZHVsZUVpZC5TY2VuZSArIChzY2VuZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/ov5vlhaXlnLrmma/pgJrnn6VcclxufVxyXG5cclxuLy/nmbvlvZVcclxubGV0IHNjZW5lTG9naW5FaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBTY2VuZUxvZ2luRWlkIHtcclxuICAgIFNlcnZpY2VDaG9vc2VkICA9IFNjZW5lTW9kdWxlSWQuTG9naW4gKyBzY2VuZUxvZ2luRWlkTnVtKyssICAgIC8v5bey6YCJ5oup5pyN5Yqh5Zmo77yM5byA5Y+R55SoXHJcbiAgICBDb25maWdMb2FkZWQgICAgPSBTY2VuZU1vZHVsZUlkLkxvZ2luICsgc2NlbmVMb2dpbkVpZE51bSsrLCAgICAvL+mFjee9ruWKoOi9veWujOaIkFxyXG4gICAgUGFja2FnZUxvYWRlZCAgID0gU2NlbmVNb2R1bGVJZC5Mb2dpbiArIHNjZW5lTG9naW5FaWROdW0rKywgICAgLy/liqDovb3ljIXlrozmiJBcclxuICAgIExvZ2luU3VjY2VzcyAgICA9IFNjZW5lTW9kdWxlSWQuTG9naW4gKyBzY2VuZUxvZ2luRWlkTnVtKyssICAgIC8v55m75b2V5oiQ5YqfXHJcbiAgICBTaW1Qcm9ncmVzc0VuZCAgPSBTY2VuZU1vZHVsZUlkLkxvZ2luICsgc2NlbmVMb2dpbkVpZE51bSsrLCAgICAvL+WBh+i/m+W6puadoeivu+WujFxyXG59XHJcblxyXG4vL+i/m+WFpeWcuuaZr+mAmuefpVxyXG5sZXQgc2NlbmVFbnRlckVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIFNjZW5lRW50ZXJFaWQge1xyXG4gICAgTWFpbk1lbnUgICAgICAgID0gU2NlbmVNb2R1bGVJZC5FbnRlciArIHNjZW5lRW50ZXJFaWROdW0rKywgICAgLy/kuLvnlYzpnaLlnLrmma9cclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pWw5o2u5qih5Z2X5Yqf6IO9LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgZGF0YU1vZHVsZU51bSA9IDE7XHJcbmVudW0gRGF0YU1vZHVsZUlkIHtcclxuICAgIFBsYXllciAgICAgICA9IE1vZHVsZUVpZC5EYXRhICsgKHNjZW5lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+eOqeWutuaVsOaNrlxyXG4gICAgQWRvYmUgICAgICAgPSBNb2R1bGVFaWQuRGF0YSArIChzY2VuZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/mtJ7lupzmlbDmja5cclxuICAgIFNlY3QgICAgICAgPSBNb2R1bGVFaWQuRGF0YSArIChzY2VuZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/pl6jmtL7mlbDmja5cclxufVxyXG5cclxuLy/njqnlrrZcclxubGV0IGRhdGFQbGF5ZXJFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBEYXRhUGxheWVyRWlkIHtcclxuICAgIFJlZnJlc2hlZCAgICAgICAgICAgID0gRGF0YU1vZHVsZUlkLlBsYXllciArIGRhdGFQbGF5ZXJFaWROdW0rKywgIC8v5pWw5o2u5pu05paw6YCa55+lXHJcbiAgICBHbUFkZEJhZ0l0ZW1TdWNjZXNzICA9IERhdGFNb2R1bGVJZC5QbGF5ZXIgKyBkYXRhUGxheWVyRWlkTnVtKyssICAvL0dN5ZG95Luk5aKe5Yqg6IOM5YyF54mp5ZOB5oiQ5YqfXHJcbn1cclxuXHJcbi8v5rSe5bqcXHJcbmxldCBkYXRhQWRvYmVFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBEYXRhQWRvYmVFaWQge1xyXG4gICAgUmVmcmVzaGVkICAgID0gRGF0YU1vZHVsZUlkLkFkb2JlICsgZGF0YUFkb2JlRWlkTnVtKyssICAgIC8v5pWw5o2u5pu05paw6YCa55+lXHJcbn1cclxuXHJcbi8v6Zeo5rS+XHJcbmxldCBkYXRhU2VjdEVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIERhdGFTZWN0RWlkIHtcclxuICAgIFJlZnJlc2hlZCAgICAgICAgICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+aVsOaNruabtOaWsOmAmuefpVxyXG4gICAgR290SW5mbyAgICAgICAgICAgICAgICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v6I635b6X6Zeo5rS+VUnmlbDmja5cclxuICAgIEdvdFRhc2tJbmZvICAgICAgICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+iOt+W+l+mXqOa0vuS7u+WKoeaVsOaNrlxyXG4gICAgR290VHJhaW5Ub3dlckluZm8gICAgICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v6I635b6X5L+u54K85aGU5pWw5o2uXHJcbn1cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VSeaooeWdl+WKn+iDvS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IHVpTW9kdWxlTnVtID0gMTtcclxuZXhwb3J0IGVudW0gdWlNb2R1bGVJZCB7XHJcbiAgICBPcGVuICAgICAgID0gTW9kdWxlRWlkLlVpICsgKHVpTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+aJk+W8gOeVjOmdolxyXG4gICAgTm90aWNlICAgICA9IE1vZHVsZUVpZC5VaSArICh1aU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/pgJrnn6VcclxufVxyXG5cclxuLy/miZPlvIDnlYzpnaJcclxubGV0IHVpT3BlbkVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIFVpT3BlbkVpZCB7XHJcbiAgICBMb2FkaW5nUHJvZ3Jlc3MgICAgID0gdWlNb2R1bGVJZC5PcGVuICsgKHVpT3BlbkVpZE51bSsrKSAqIEV2ZW50U3Bhbi5VSVNwYW4sXHJcbiAgICBMb2FkaW5nICAgICAgICAgICAgID0gdWlNb2R1bGVJZC5PcGVuICsgKHVpT3BlbkVpZE51bSsrKSAqIEV2ZW50U3Bhbi5VSVNwYW4sXHJcbiAgICBDaG9vc2VTZXJ2aWNlICAgICAgID0gdWlNb2R1bGVJZC5PcGVuICsgKHVpT3BlbkVpZE51bSsrKSAqIEV2ZW50U3Bhbi5VSVNwYW4sXHJcbiAgICBNYWluTWVudSAgICAgICAgICAgID0gdWlNb2R1bGVJZC5PcGVuICsgKHVpT3BlbkVpZE51bSsrKSAqIEV2ZW50U3Bhbi5VSVNwYW4sXHJcbiAgICBDdWx0aXZhdGlvbkluZm8gICAgID0gdWlNb2R1bGVJZC5PcGVuICsgKHVpT3BlbkVpZE51bSsrKSAqIEV2ZW50U3Bhbi5VSVNwYW4sXHJcbiAgICBBZG9iZU1haW4gICAgICAgICAgID0gdWlNb2R1bGVJZC5PcGVuICsgKHVpT3BlbkVpZE51bSsrKSAqIEV2ZW50U3Bhbi5VSVNwYW4sXHJcbiAgICBBZG9iZVBvb2wgICAgICAgICAgID0gdWlNb2R1bGVJZC5PcGVuICsgKHVpT3BlbkVpZE51bSsrKSAqIEV2ZW50U3Bhbi5VSVNwYW4sXHJcbiAgICBBZG9iZVVwZ3JhZCAgICAgICAgID0gdWlNb2R1bGVJZC5PcGVuICsgKHVpT3BlbkVpZE51bSsrKSAqIEV2ZW50U3Bhbi5VSVNwYW4sXHJcbiAgICBQdWJsaWNDb25maXJtYXRpb24gID0gdWlNb2R1bGVJZC5PcGVuICsgKHVpT3BlbkVpZE51bSsrKSAqIEV2ZW50U3Bhbi5VSVNwYW4sXHJcbiAgICBKb2luU2VjdCAgICAgICAgICAgID0gdWlNb2R1bGVJZC5PcGVuICsgKHVpT3BlbkVpZE51bSsrKSAqIEV2ZW50U3Bhbi5VSVNwYW4sXHJcbiAgICBcclxufVxyXG5cclxuLy9VSemAmuefpVxyXG5sZXQgdWlOb3RpY2VFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBVaU5vdGljZUVpZCB7XHJcbiAgICBDbG9zZUNvbnRyb2xsZXIgICAgPSB1aU1vZHVsZUlkLk5vdGljZSArIHVpTm90aWNlRWlkTnVtKyssXHJcbiAgICBPcGVuRnVsbFNjcmVlbiAgICAgPSB1aU1vZHVsZUlkLk5vdGljZSArIHVpTm90aWNlRWlkTnVtKyssXHJcbiAgICBDbG9zZUZ1bGxTY3JlZW4gICAgPSB1aU1vZHVsZUlkLk5vdGljZSArIHVpTm90aWNlRWlkTnVtKyssXHJcbiAgICBPcGVuUG9wdXAgICAgICAgICAgPSB1aU1vZHVsZUlkLk5vdGljZSArIHVpTm90aWNlRWlkTnVtKyssXHJcbiAgICBDbG9zZVBvcHVwICAgICAgICAgPSB1aU1vZHVsZUlkLk5vdGljZSArIHVpTm90aWNlRWlkTnVtKyssXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeOqeWutuWxnuaAp+aooeWdl+WKn+iDvS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IGNoYXJhY3Rlck1vZHVsZU51bSA9IDE7XHJcbmVudW0gQ2hhcmFjdGVyTW9kdWxlSWQge1xyXG4gICAgQ3VsdGl2YXRpb24gICAgICAgPSBNb2R1bGVFaWQuQ2hhcmFjdGVyICsgKGNoYXJhY3Rlck1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/kv67kuLpcclxufVxyXG5cclxuLy/kv67kuLpcclxubGV0IGNoYXJhY3RlckN1bHRpdmF0aW9uRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gQ2hhcmFjdGVyQ3VsdGl2YXRpb25FaWQge1xyXG4gICAgVXBncmFkZSAgICAgID0gQ2hhcmFjdGVyTW9kdWxlSWQuQ3VsdGl2YXRpb24gKyBjaGFyYWN0ZXJDdWx0aXZhdGlvbkVpZE51bSsrLCAgICAvL+S/ruS4uuWNh+e6p1xyXG4gICAgQXV0b0NoYW5nZWQgICAgICAgICA9IENoYXJhY3Rlck1vZHVsZUlkLkN1bHRpdmF0aW9uICsgY2hhcmFjdGVyQ3VsdGl2YXRpb25FaWROdW0rKywgICAgLy/oh6rliqjkv67ngrzlj5jljJZcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t546p5rOV5qih5Z2X5Yqf6IO9LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgZ2FtZU1vZHVsZU51bSA9IDE7XHJcbmVudW0gR2FtZU1vZHVsZUlkIHtcclxuICAgIEFkb2JlICAgICAgID0gTW9kdWxlRWlkLkdhbWUgKyAoZ2FtZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/mtJ7lupxcclxuICAgIFNlY3QgICAgICAgID0gTW9kdWxlRWlkLkdhbWUgKyAoZ2FtZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/pl6jmtL5cclxuICAgIEtvbmdmYSAgICAgID0gTW9kdWxlRWlkLkdhbWUgKyAoZ2FtZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/mioDog73lip/ms5VcclxuICAgIFBsYXllciAgICAgID0gTW9kdWxlRWlkLkdhbWUgKyAoZ2FtZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/op5LoibJcclxuICAgIFJvYWQyRGlldHkgID0gTW9kdWxlRWlkLkdhbWUgKyAoZ2FtZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/mjJHmiJjku5npgJRcclxufVxyXG5cclxuLy/mtJ7lupznjqnms5VcclxubGV0IGdhbWVBZG9iZUVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIEdhbWVBZG9iZUVpZCB7XHJcbiAgICBIaXJlV29ya2VyU3VjY2VzcyAgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/mi5vli5/lt6XkurrmiJDlip9cclxuICAgIEFkZFdvcmtlclN1Y2Nlc3MgICAgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+a3u+WKoOW3peS6uuaIkOWKn1xyXG4gICAgUmVkdWNlV29ya2VyU3VjY2VzcyAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v5YeP5bCR5bel5Lq65oiQ5YqfXHJcbiAgICBVcGdyYWRlU3RvbmVTdWNjZXNzICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/ngbXnn7PljYfnuqfmiJDlip9cclxuICAgIFVwZ3JhZGVGb29kU3VjY2VzcyAgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+mjn+eJqeWNh+e6p+aIkOWKn1xyXG4gICAgVXBncmFkZVdvb2RTdWNjZXNzICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v5pyo5p2Q5Y2H57qn5oiQ5YqfXHJcbiAgICBVcGdyYWRlSXJvblN1Y2Nlc3MgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/pmajpk4HljYfnuqfmiJDlip9cclxuICAgIFVwZ3JhZGVQb29sU3VjY2VzcyAgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+eBteaxoOWNh+e6p+aIkOWKn1xyXG4gICAgVXBncmFkZUVuZWd5U3VjY2VzcyAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v6aOO5rC05Y2H57qn5oiQ5YqfXHJcbn1cclxuXHJcbi8v6Zeo5rS+546p5rOVXHJcbmxldCBnYW1lU2VjdEVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIEdhbWVTZWN0RWlkIHtcclxuICAgIEpvaW5TZWN0U3VjY2VzcyAgICAgICA9IEdhbWVNb2R1bGVJZC5TZWN0ICsgZ2FtZVNlY3RFaWROdW0rKywgICAgLy/liqDlhaXpl6jmtL7miJDlip9cclxuICAgIExlYXJuS0ZTdWNjZXNzICAgICAgICA9IEdhbWVNb2R1bGVJZC5TZWN0ICsgZ2FtZVNlY3RFaWROdW0rKywgIC8v5a2m5Lmg5oqA6IO95oiQ5YqfXHJcbiAgICBBZGRLZk51bSAgICAgICAgICAgICAgPSBHYW1lTW9kdWxlSWQuU2VjdCArIGdhbWVTZWN0RWlkTnVtKyssICAgIC8v5L+u54K85Yqf5rOVXHJcbiAgICBTdGFydFRhc2sgICAgICAgICAgICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v5byA5aeL6Zeo5rS+5Lu75YqhXHJcbiAgICBHcmFiVGFza0F3YXJkU3VjY2VzcyAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v6aKG5Y+W6Zeo5rS+5Lu75Yqh5aWW5Yqx5oiQ5YqfXHJcbiAgICBTdGFydE5vcm1hbFRvd2VyVHJhaW4gPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v5byA5aeL5pmu6YCa5L+u54K8XHJcbiAgICBFbmROb3JtYWxUb3dlclRyYWluID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+e7k+adn+aZrumAmuS/rueCvFxyXG4gICAgU3RhcnRCb3NzVG93ZXJUcmFpbiAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+W8gOWni+aOjOmXqOS/rueCvFxyXG4gICAgRW5kQm9zc1Rvd2VyVHJhaW4gICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/nu5PmnZ/mjozpl6jkv67ngrxcclxuICAgIEFma1NlY3QgICAgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/pgIDlh7rpl6jmtL5cclxufVxyXG5cclxuLy/mioDog73njqnms5VcclxubGV0IGdhbWVLb25nZmFFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lS29uZ2ZhRWlkIHtcclxuICAgIFVwZ3JhZGVLRlN1Y2Nlc3MgICAgICAgPSBHYW1lTW9kdWxlSWQuS29uZ2ZhICsgZ2FtZUtvbmdmYUVpZE51bSsrLCAgICAvL+WKoOWFpemXqOa0vuaIkOWKn1xyXG59XHJcblxyXG4vL+inkuiJslxyXG5sZXQgZ2FtZVBsYXllckVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIEdhbWVQbGF5ZXJFaWQge1xyXG4gICAgR2V0QmFnSW5mbyAgICAgICAgICAgPSBHYW1lTW9kdWxlSWQuUGxheWVyICsgZ2FtZVBsYXllckVpZE51bSsrLCAgICAvL+iOt+WPluWIsOiDjOWMheS/oeaBr1xyXG4gICAgQmFnU29ydFN1Y2Nlc3MgICAgICAgPSBHYW1lTW9kdWxlSWQuUGxheWVyICsgZ2FtZVBsYXllckVpZE51bSsrLCAgICAvL+aVtOeQhuiDjOWMheaIkOWKn1xyXG4gICAgQmFnRXhwYW5kU3VjY2VzcyAgICAgPSBHYW1lTW9kdWxlSWQuUGxheWVyICsgZ2FtZVBsYXllckVpZE51bSsrLCAgICAvL+aJqeWxleiDjOWMheaIkOWKn1xyXG4gICAgQmFnRXhwYW5kRmFpbCAgICAgICAgPSBHYW1lTW9kdWxlSWQuUGxheWVyICsgZ2FtZVBsYXllckVpZE51bSsrLCAgICAvL+aJqeWxleiDjOWMheWksei0pVxyXG4gICAgU29sZEJhZ0l0ZW1TdWNjZXNzICAgPSBHYW1lTW9kdWxlSWQuUGxheWVyICsgZ2FtZVBsYXllckVpZE51bSsrLCAgLy/lh7rllK7og4zljIXnianlk4HmiJDlip9cclxuICAgIFVzZUJhZ0l0ZW1TdWNjZXNzICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgIC8v5L2/55So6IOM5YyF54mp5ZOB5oiQ5YqfXHJcbn1cclxuXHJcbi8v5oyR5oiY5LuZ6YCU546p5rOVXHJcbmxldCBnYW1lUm9hZDJEaWV0eUVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIEdhbWVSb2FkMkRpZXR5YUVpZCB7XHJcbiAgICBHb01vbnN0ZXJSZXN1bHQgICAgICA9IEdhbWVNb2R1bGVJZC5Sb2FkMkRpZXR5ICsgZ2FtZVJvYWQyRGlldHlFaWROdW0rKywgICAgLy/mjJHmiJjplYflppbloZTnu5PmnpxcclxuICAgIEZhaWxHb01vbnN0ZXIgICAgICAgID0gR2FtZU1vZHVsZUlkLlJvYWQyRGlldHkgKyBnYW1lUm9hZDJEaWV0eUVpZE51bSsrLCAgICAvL+aXoOazleaMkeaImOmVh+WmluWhlFxyXG4gICAgSW52aXRlZEZyaWVuZCAgICAgICAgPSBHYW1lTW9kdWxlSWQuUm9hZDJEaWV0eSArIGdhbWVSb2FkMkRpZXR5RWlkTnVtKyssICAgIC8v6YKA6K+35pyL5Y+L5oyR5oiY6ZWH5aaW5aGUXHJcbiAgICBCYXR0bGVSZWNvcmRFbmQgICAgICA9IEdhbWVNb2R1bGVJZC5Sb2FkMkRpZXR5ICsgZ2FtZVJvYWQyRGlldHlFaWROdW0rKywgICAgLy/miJjmiqXmkq3mlL7lrozmr5VcclxuICAgIE1vbnN0ZXIxc3RCbG9vZCAgICAgID0gR2FtZU1vZHVsZUlkLlJvYWQyRGlldHkgKyBnYW1lUm9hZDJEaWV0eUVpZE51bSsrLCAgICAvL+mVh+WmluWhlOmmluadgFxyXG59IiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdFdmVudCB7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lvIDmlL7ln58tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy/liLfmlrDlpb3lj4vmlbDmja5cclxuICAgIHN0YXRpYyByZWFkb25seSBXWF9SRUZSRVNIX0ZSSUVORF9EQVRBID0gMTEwMDFcclxuICAgIC8v5omT5byA5o6S6KGMXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgT1BFTl9SQU5LX1VJID0gMTEwMDRcclxuICAgIC8v5pi+56S65pWF5LqL5o6S6KGMXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQ0xPU0VfUkFOS19VSSA9IDExMDA1XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgTGlzdGVuZXJzOkNvbmZpZy5EaWN0aW9uYXJ5PENvbmZpZy5MaXN0ZW5lckNsYXNzPiA9IHt9O1xyXG5cclxuICAgIHN0YXRpYyBBZGRMaXN0ZW5lcihrZXksIGZ1bmMsIHRhcmdldCkge1xyXG4gICAgICAgIGlmKCFrZXkgfHwgdHlwZW9mKGZ1bmMpICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZighdGhpcy5MaXN0ZW5lcnNba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLkxpc3RlbmVyc1trZXldID0gbmV3IENvbmZpZy5MaXN0ZW5lckNsYXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkxpc3RlbmVyc1trZXldLmFkZExpc3RlbmVyKGZ1bmMsIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFJlbW92ZUxpc3RlbmVyKGtleSwgZnVuYykge1xyXG4gICAgICAgIGlmKCFrZXkgfHwgdHlwZW9mKGZ1bmMpICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5MaXN0ZW5lcnNba2V5XTtcclxuICAgICAgICBpZighbGlzdCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxpc3QucmVtb3ZlTGlzdGVuZXIoZnVuYyk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHN0YXRpYyBEaXNwYXRjaChrZXksIC4uLmRhdGEpIHtcclxuICAgICAgICBpZigha2V5KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5MaXN0ZW5lcnNba2V5XTtcclxuICAgICAgICBpZighbGlzdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgaW4gbGlzdC5MaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mKGxpc3QuTGlzdGVuZXJzW2ldKSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxpc3QuTGlzdGVuZXJzW2ldLmNhbGwobGlzdC5UYXJnZXRzW2ldLCAuLi5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIENsZWFyKGtleSkge1xyXG4gICAgICAgIGlmKCFrZXkpIHJldHVyblxyXG5cclxuICAgICAgICBkZWxldGUgdGhpcy5MaXN0ZW5lcnNba2V5XTtcclxuICAgIH1cclxufSIsImltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuLy/orqHnrpflip/ms5XmgLvkurrnianlsZ7mgKdcclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNLZkFkZEF0dHIoa2ZMZXZlbDpudW1iZXIsIGtmU3RhZ2U6bnVtYmVyLCBmc0FkZDpudW1iZXIpe1xyXG4gICAgcmV0dXJuIGtmU3RhZ2UgKiAoa2ZMZXZlbCArIGZzQWRkKTtcclxufVxyXG5cclxuLy/orqHnrpflip/ms5XmgLvpo47msLTliqDmiJBcclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNLZkFkZEZlbmdzaHVpKGtmU3RhZ2U6bnVtYmVyLCBmc0FkZDpudW1iZXIpe1xyXG4gICAgcmV0dXJuIGtmU3RhZ2UgKiBmc0FkZDtcclxufSIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tICcuLi9Db25maWcvQ29uZmlnJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZSBleHRlbmRzIExheWEuU2NyaXB0e1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBSZXNvdXJjZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfYWRkZWRVaVBhY2thZ2VzOkNvbmZpZy5EaWN0aW9uYXJ5PGJvb2xlYW4+ID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX2luc3RhbmNlKXtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUmVzb3VyY2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZCh1cmwsIHRoaXNBcmc/LCBjb21wbGV0ZT86RnVuY3Rpb24sIHByb2dyZXNzPzpGdW5jdGlvbiwgcmVzVHlwZT86c3RyaW5nKXtcclxuICAgICAgICBMYXlhLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgICB1cmwsIFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXNBcmcsIGNvbXBsZXRlKSwgXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpc0FyZywgcHJvZ3Jlc3MpLFxyXG4gICAgICAgICAgICByZXNUeXBlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkVWlQYWNrYWdlKHBrZ05hbWU6c3RyaW5nKXtcclxuICAgICAgICBpZighdGhpcy5fYWRkZWRVaVBhY2thZ2VzW3BrZ05hbWVdKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WKoOi9vVVJ5YyF77yaJywgcGtnTmFtZSk7XHJcbiAgICAgICAgICAgIGZndWkuVUlQYWNrYWdlLmFkZFBhY2thZ2UoJ3Jlcy8nICsgcGtnTmFtZSArICcvJyArIHBrZ05hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRlZFVpUGFja2FnZXNbcGtnTmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UmVzKHBhdGg6c3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gTGF5YS5Mb2FkZXIuZ2V0UmVzKHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWxlYXNlUmVzKCl7XHJcbiAgICAgICAgTGF5YS5SZXNvdXJjZS5kZXN0cm95VW51c2VkUmVzb3VyY2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQXdha2UoKXtcclxuICAgICAgICBpZiAoUmVzb3VyY2UuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgUmVzb3VyY2UuX2luc3RhbmNlID0gdGhpcztcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZXNvdXJjZSBpbnN0YW5jZSBtdXN0IGJlIG9ubHkgb25lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQge1VJQ29uZmlnfSBmcm9tIFwiLi4vQ29uZmlnL1VJQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcblxyXG4vL+enkuaVsOi9rOS4uuaXtu+8muWIhu+8muenklxyXG5leHBvcnQgZnVuY3Rpb24gQ29udmVydFRpbWUoY2QsIGlnbm9yZUhvdXI/OmJvb2xlYW4pe1xyXG4gICAgaWYoY2QgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGhvdXJzID0gKFwiMFwiICsgTWF0aC5mbG9vcihjZCAvIDM2MDApKS5zbGljZSgtMik7XHJcbiAgICBsZXQgbWludXRlcyA9IChcIjBcIiArIE1hdGguZmxvb3IoKGNkICUgMzYwMCkgLyA2MCkpLnNsaWNlKC0yKTtcclxuICAgIGxldCBzZWNvbmRzID0gKFwiMFwiICsgTWF0aC5jZWlsKGNkICUgNjApKS5zbGljZSgtMik7XHJcblxyXG4gICAgaWYoaWdub3JlSG91cil7XHJcbiAgICAgICAgcmV0dXJuIG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzO1xyXG59XHJcblxyXG4vL+eql+WPo+W8ueWHuuWKqOeUu1xyXG4vKipcclxuICogQHBhcmFtICB7Zmd1aS5HQ29tcG9uZW50fSB3aW5kb3dVaVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXlQb3B1cEVmZmVjdCh3aW5kb3dVaSwgY2FsbGJhY2ssIHRoaXNBcmcpe1xyXG4gICAgaWYod2luZG93VWkgaW5zdGFuY2VvZiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICB3aW5kb3dVaS5zZXRQaXZvdCgwLjUsIDAuNSk7XHJcblxyXG4gICAgICAgIGZndWkuR1R3ZWVuLnRvKDAsIDEsIDAuNSlcclxuICAgICAgICAgICAgLnNldFRhcmdldCh3aW5kb3dVaSwgd2luZG93VWkuc2V0U2NhbGUpXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKGNhbGxiYWNrLCB0aGlzQXJnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy/ljYHlha3ov5vliLbpopzoibLovawxMOi/m+WItlxyXG4vL+S8oOWPguagvOW8j++8mlwiMDB8ZmZ8ZWVcIlxyXG4vKipcclxuICogQHBhcmFtICB7c3RyaW5nfSBjb2xvclN0clxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENvbG9ySGV4MkRlYyhjb2xvclN0cil7XHJcbiAgICBpZihjb2xvclN0ciA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgY29sb3JTdHIgPSBjb2xvclN0ci5zcGxpdChcInxcIik7XHJcbiAgICBpZihjb2xvclN0ciBpbnN0YW5jZW9mIEFycmF5ICYmIGNvbG9yU3RyLmxlbmd0aCA9PSAzKXtcclxuICAgICAgICBjb2xvclN0ci5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGNvbG9yU3RyW2luZGV4XSA9IHBhcnNlSW50KHZhbHVlLCAxNik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbG9yU3RyO1xyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQpuS4uueItue7hOS7tu+8iOWMheaLrOacrOS9k++8iVxyXG5leHBvcnQgZnVuY3Rpb24gaXNBbmNlc3Rvck9mKHBhcmVudDpmZ3VpLkdPYmplY3QsIGNoaWxkOmZndWkuR09iamVjdCk6Qm9vbGVhblxyXG57XHJcbiAgICBpZiAocGFyZW50ID09IG51bGwgfHwgY2hpbGQgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBcclxuICAgIC8v5pys5L2TXHJcbiAgICBpZihwYXJlbnQgPT0gY2hpbGQpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICBcclxuICAgIHZhciBwOmZndWkuR0NvbXBvbmVudCA9IGNoaWxkLnBhcmVudDtcclxuICAgIHdoaWxlKHApXHJcbiAgICB7XHJcbiAgICAgICAgaWYocCA9PSBwYXJlbnQpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHAgPSBwLnBhcmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy/liKTmlq3lnZDmoIfmmK/lkKblnKjnu4Tku7bnn6nlvaLojIPlm7TlhoVcclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5SZWN0KHh2Om51bWJlciwgeXY6bnVtYmVyLCBkZXN0OmZndWkuR09iamVjdCl7XHJcbiAgICBpZih4diA9PSBudWxsIHx8IHl2ID09IG51bGwgfHwgIWRlc3QpIHJldHVybjtcclxuXHJcbiAgICAvL+i9rOS4uuWxj+W5leWdkOagh1xyXG4gICAgbGV0IHB0ID0gZGVzdC5sb2NhbFRvR2xvYmFsKCk7XHJcblxyXG4gICAgaWYoeHYgPCBwdC54IHx8IHh2ID4gcHQueCArIGRlc3Qud2lkdGggfHwgeXYgPCBwdC55IHx8IHl2ID4gcHQueSArIGRlc3QuaGVpZ2h0KXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdG5JbmZvUGFydHN7XHJcbiAgICBQcm9ncmVzc19IZWFsdGg6Zmd1aS5HUHJvZ3Jlc3NCYXIsXHJcbiAgICBQcm9ncmVzc19FeHA6Zmd1aS5HUHJvZ3Jlc3NCYXIsXHJcbiAgICBUZXh0X0xldmVsOmZndWkuR1RleHRGaWVsZCxcclxuICAgIFRleHRfVGlwc0hlYWx0aDpmZ3VpLkdUZXh0RmllbGQsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdG5JbmZvUGFydHMoYnRuOmZndWkuR0NvbXBvbmVudCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFByb2dyZXNzX0hlYWx0aDpidG4uZ2V0Q2hpbGQoJ1Byb2dyZXNzX0hlYWx0aCcpLmFzUHJvZ3Jlc3MsXHJcbiAgICAgICAgUHJvZ3Jlc3NfRXhwOmJ0bi5nZXRDaGlsZCgnUHJvZ3Jlc3NfRXhwJykuYXNQcm9ncmVzcyxcclxuICAgICAgICBUZXh0X0xldmVsOmJ0bi5nZXRDaGlsZCgnVGV4dF9MZXZlbCcpLmFzVGV4dEZpZWxkLFxyXG4gICAgICAgIFRleHRfVGlwc0hlYWx0aDpidG4uZ2V0Q2hpbGQoJ1RleHRfVGlwc0hlYWx0aCcpLmFzVGV4dEZpZWxkLFxyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuvue9ruaWh+acrENhY2hlTW9kZeS4ukNIQVLpgb/lhY3lhoXlrZjmmrTmtqhHQ+WNoemhv1xyXG4vKipcclxuICogQHBhcmFtICB7Zmd1aS5HVGV4dEZpZWxkfSB0ZXh0RmlsZWRcclxuICogQHBhcmFtICB7Ym9vbGVhbn0gdXNlU3lzRm9udFxyXG4gKi9cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIFNldFR4dENhY2hlTW9kZSh0ZXh0RmlsZWQsIHVzZVN5c0ZvbnQpe1xyXG4vLyAgICAgaWYodGV4dEZpbGVkID09IG51bGwpIHJldHVybjtcclxuXHJcbi8vICAgICBpZih0ZXh0RmlsZWQuX2xhYmVsLmNhY2hlTW9kZSAhPSBjYy5MYWJlbC5DYWNoZU1vZGUuQ0hBUil7XHJcbi8vICAgICAgICAgdGV4dEZpbGVkLl9sYWJlbC5jYWNoZU1vZGUgPSBjYy5MYWJlbC5DYWNoZU1vZGUuQ0hBUjtcclxuXHJcbi8vICAgICAgICAgaWYodHlwZW9mIHVzZVN5c0ZvbnQgPT0gXCJib29sZWFuXCIpXHJcbi8vICAgICAgICAgICAgIHRleHRGaWxlZC5fbGFiZWwudXNlU3lzdGVtRm9udCA9IHVzZVN5c0ZvbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8v6K6+572u5paH5pys5Y2g5L2N56ymXHJcbi8vIFN0cmluZy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICBpZihhcmd1bWVudHMubGVuZ3RoID09IDApIHJldHVybiB0aGlzO1xyXG4vLyAgICAgbGV0IHBhcmFtID0gYXJndW1lbnRzWzBdO1xyXG4vLyAgICAgbGV0IHMgPSB0aGlzO1xyXG4vLyAgICAgaWYodHlwZW9mKHBhcmFtKSA9PSAnb2JqZWN0Jykge1xyXG4vLyAgICAgICAgIGZvcihsZXQga2V5IGluIHBhcmFtKVxyXG4vLyAgICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBrZXkgKyBcIlxcXFx9XCIsIFwiZ1wiKSwgcGFyYW1ba2V5XSk7XHJcbi8vICAgICAgICAgcmV0dXJuIHM7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbi8vICAgICAgICAgcyA9IHMucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHtcIiArIGkgKyBcIlxcXFx9XCIsIFwiZ1wiKSwgYXJndW1lbnRzW2ldKTtcclxuLy8gICAgICAgICByZXR1cm4gcztcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8v6K6+572u5paH5pys5Y2g5L2N56ymXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJnc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFN0cmluZ0Zvcm1hdChzdHIsIC4uLmFyZ3Mpe1xyXG4gICAgaWYodHlwZW9mKHN0cikgIT0gJ3N0cmluZycpIHJldHVybjtcclxuXHJcbiAgICBpZihhcmdzID09IG51bGwgfHwgYXJncy5sZW5ndGggPT0gMCkgcmV0dXJuIHN0cjtcclxuXHJcbiAgICBsZXQgcGFyYW0gPSBhcmdzWzBdO1xyXG4gICAgbGV0IHMgPSBzdHI7XHJcbiAgICBpZih0eXBlb2YocGFyYW0pID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW0pXHJcbiAgICAgICAgcyA9IHMucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHtcIiArIGtleSArIFwiXFxcXH1cIiwgXCJnXCIpLCBwYXJhbVtrZXldKTtcclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgcyA9IHMucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHtcIiArIGkgKyBcIlxcXFx9XCIsIFwiZ1wiKSwgYXJnc1tpXSk7XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6K6+572u5paH5pys5bGe5oCnXHJcbmV4cG9ydCBmdW5jdGlvbiBTZXRUeHRQcm9wZXJ0eSh0eHQsIGlzQm9sZCwgaXNVbmRlcmxpbmUpe1xyXG4gICAgaWYodHh0IGluc3RhbmNlb2YgZmd1aS5HVGV4dEZpZWxkID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgaWYodHlwZW9mKGlzQm9sZCkgPT0gJ2Jvb2xlYW4nKXtcclxuICAgICAgICB0eHQuX2xhYmVsLl9pc0JvbGQgPSBpc0JvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodHlwZW9mKGlzVW5kZXJsaW5lKSA9PSAnYm9vbGVhbicpe1xyXG4gICAgICAgIHR4dC5fbGFiZWwuX2lzVW5kZXJsaW5lID0gaXNVbmRlcmxpbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5ZCv5Yqo5Z6D5Zy+5Zue5pS2XHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBUcmlnZ2VyR0MoKXtcclxuLy8gICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4vLyAgICAgICAgIHd4LnRyaWdnZXJHQygpO1xyXG4vLyAgICAgfWVsc2V7XHJcbi8vICAgICAgICAgY2Muc3lzLmdhcmJhZ2VDb2xsZWN0KCk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8v6K6+572u6Z2e6LSf5pWwXHJcbmV4cG9ydCBmdW5jdGlvbiBTZXROb25uZWdhdGl2ZShudW06bnVtYmVyKXtcclxuICAgIGlmKG51bSA8IDApe1xyXG4gICAgICAgIG51bSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bTtcclxufVxyXG5cclxuLy/lip/og73mmK/lkKblvIDlkK9cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIElzRnVuY0FjdGl2YXRlZChmdW5jRW51bSl7XHJcbi8vICAgICBpZihmdW5jRW51bSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4vLyAgICAgc3dpdGNoIChmdW5jRW51bSkge1xyXG4vLyAgICAgICAgIGNhc2UgTG9jYWxDb25maWcuRnVuY0VudW0uUGxheUdvOlxyXG4vLyAgICAgICAgICAgICByZXR1cm4gRGF0YUJhc2UuUm9sZURhdGEuVW5sb2NrQ2hhcHRlcklkID49IDM7XHJcbiAgICBcclxuLy8gICAgICAgICBjYXNlIExvY2FsQ29uZmlnLkZ1bmNFbnVtLkZ1bjpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIERhdGFCYXNlLlJvbGVEYXRhLlVubG9ja0NoYXB0ZXJJZCA+PSA0O1xyXG5cclxuLy8gICAgICAgICBjYXNlIExvY2FsQ29uZmlnLkZ1bmNFbnVtLlN0b3J5SmFkZTpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIERhdGFCYXNlLlJvbGVEYXRhLlVubG9ja0NoYXB0ZXJJZCA+IDEgfHwgRGF0YUJhc2UuUm9sZURhdGEuRHJvcE1heFRleHROdW0gPj0gNSB8fCBEYXRhQmFzZS5Sb2xlRGF0YS5DaGFwdGVyUGxheVRpbWVzID4gMTtcclxuXHJcbi8vICAgICAgICAgY2FzZSBMb2NhbENvbmZpZy5GdW5jRW51bS5Ub3BMZWZ0TGlzdDpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIERhdGFCYXNlLlJvbGVEYXRhLkNoYXB0ZXJJZCA+IDEgfHwgRGF0YUJhc2UuUm9sZURhdGEuQ2hhcHRlclBsYXlUaW1lcyA+IDE7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8v6K6+572uZmd1aeaOp+WItuWZqOmhteetvlxyXG5leHBvcnQgZnVuY3Rpb24gU2V0R0NvbnRyb2xsZXJJZHgoZ2N0cmw6Zmd1aS5Db250cm9sbGVyLCBpZHg6bnVtYmVyKXtcclxuICAgIGlmKGdjdHJsIGluc3RhbmNlb2YgZmd1aS5Db250cm9sbGVyID09IGZhbHNlIHx8IHR5cGVvZiBpZHggIT0gJ251bWJlcicpIHJldHVybjtcclxuXHJcbiAgICBpZihpZHggPCAwIHx8IGlkeCA+PSBnY3RybC5wYWdlQ291bnQpIHJldHVybjtcclxuXHJcbiAgICBnY3RybC5zZWxlY3RlZEluZGV4ID0gaWR4O1xyXG59XHJcblxyXG4vL+WIpOaWree7k+aehOS9k+mVv+W6plxyXG5leHBvcnQgZnVuY3Rpb24gR2V0T2JqZWN0TGVuZ3RoKG9iamVjdCl7XHJcbiAgICBpZighb2JqZWN0KSByZXR1cm4gMDtcclxuXHJcbiAgICBsZXQgbGVuID0gMDtcclxuICAgIGZvcihsZXQgaSBpbiBvYmplY3Qpe1xyXG4gICAgICAgIGxlbisrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsZW47XHJcbn1cclxuXHJcbi8v5q+U6L6DMuS4quaVsOe7hOaYr+WQpuebuOetiVxyXG4vKipcclxuICogQHBhcmFtICB7QXJyYXl9IGFycjFcclxuICogQHBhcmFtICB7QXJyYXl9IGFycjJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnJheUVxdWFscyhhcnIxLCBhcnIyKSB7XHJcbiAgICAvLyBpZiB0aGUgb3RoZXIgYXJyYXkgaXMgYSBmYWxzeSB2YWx1ZSwgcmV0dXJuXHJcbiAgICBpZiAoIWFycjEgfHwgIWFycjIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIC8vIGNvbXBhcmUgbGVuZ3RocyAtIGNhbiBzYXZlIGEgbG90IG9mIHRpbWUgXHJcbiAgICBpZiAoYXJyMS5sZW5ndGggIT0gYXJyMi5sZW5ndGgpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyMS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIG5lc3RlZCBhcnJheXNcclxuICAgICAgICBpZiAoYXJyMVtpXSBpbnN0YW5jZW9mIEFycmF5ICYmIGFycjJbaV0gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAvLyByZWN1cnNlIGludG8gdGhlIG5lc3RlZCBhcnJheXNcclxuICAgICAgICAgICAgaWYgKEFycmF5RXF1YWxzKGFycjEsIGFycjIpID09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICBcclxuICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICBlbHNlIGlmIChhcnIxW2ldICE9IGFycjJbaV0pIHsgXHJcbiAgICAgICAgICAgIC8vIFdhcm5pbmcgLSB0d28gZGlmZmVyZW50IG9iamVjdCBpbnN0YW5jZXMgd2lsbCBuZXZlciBiZSBlcXVhbDoge3g6MjB9ICE9IHt4OjIwfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICB9ICAgICAgIFxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8v5pCc5a+75pWw57uE6ZSu5YC8XHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hBcnJheShhcnI6QXJyYXk8YW55PiwgcGFyYW06c3RyaW5nLCB2YWx1ZSl7XHJcbiAgICBpZihBcnJheS5pc0FycmF5KGFycikgPT0gZmFsc2UgfHwgYXJyLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIG9yIGVtcHR5IGFycmF5Jyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgdGFyZ2V0O1xyXG4gICAgYXJyLnNvbWUodj0+e1xyXG4gICAgICAgIGlmKHZbcGFyYW1dID09IHZhbHVlKXtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdjtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmRQYXRoKF9kYXRhKXtcclxuICAgIGlmKCFfZGF0YS5QaWNVcmwpXHJcbiAgICAgICAgcmV0dXJuIHtwYXRoOlwiXCIsIHVybDogXCJcIn1cclxuICAgIFxyXG4gICAgbGV0IHBha051bSA9IE1hdGguY2VpbChfZGF0YS5QaWNVcmwvNik7XHJcbiAgICBsZXQgcGFrTmFtZSA9IFwiUG9zdGNhcmRcIisgcGFrTnVtO1xyXG4gICAgbGV0IHVybCA9ICBcInVpOi8vXCIrcGFrTmFtZStcIi9cIitfZGF0YS5UaXRsZTtcclxuICAgIGxldCBpbmZvPXtwYXRoOnBha05hbWUrXCIvXCIrcGFrTmFtZSx1cmw6dXJsfVxyXG4gICAgcmV0dXJuIGluZm9cclxufVxyXG5cclxuLy/liKTmlq3mmK/lkKblsI/muLjmiI9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTWluaUdhbWUoKXtcclxuICAgIC8vIHJldHVybiBMYXlhLkJyb3dzZXIub25XZWlYaW4gfHwgTGF5YS5Ccm93c2VyLm9uQkRNaW5pR2FtZTtcclxuICAgIHJldHVybiBMYXlhLkJyb3dzZXIub25NaW5pR2FtZTtcclxufVxyXG5cclxuLy/liKTmlq3mmK/lkKblvq7kv6FcclxuZXhwb3J0IGZ1bmN0aW9uIGlzT25XZWl4aW4oKXtcclxuICAgIHJldHVybiBMYXlhLkJyb3dzZXIub25XZWlYaW47XHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCmUVFcclxuZXhwb3J0IGZ1bmN0aW9uIGlzT25RUSgpe1xyXG4gICAgcmV0dXJuIExheWEuQnJvd3Nlci5vbk1RUUJyb3dzZXI7XHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCm6IW+6K6v57O7XHJcbmV4cG9ydCBmdW5jdGlvbiBpc09uVGVuY2VudCgpe1xyXG4gICAgcmV0dXJuIGlzT25RUSgpIHx8IGlzT25XZWl4aW4oKTtcclxufVxyXG5cclxuLy/lub/lkYrpooblj5bnu4Tku7ZcclxuLyoqXHJcbiAqIEBwYXJhbSAge2ZndWkuR0NvbXBvbmVudH0gYWRDb21cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBBZEdldFJld2FyZEJ0bihhZENvbSl7XHJcbiAgICBpZighYWRDb20pIHJldHVybjtcclxuXHJcbiAgICAvL+mihuWPluaMiemSrlxyXG4gICAgbGV0IGJ1dHRvbl9HZXRSZXdhcmQgPSBhZENvbS5nZXRDaGlsZChcIkJ1dHRvbl9HZXRSZXdhcmRcIikuYXNCdXR0b247XHJcbiAgICBsZXQgYnV0dG9uX0RvdWJsZVJld2FyZCA9IGFkQ29tLmdldENoaWxkKFwiQnV0dG9uX0RvdWJsZVJld2FyZFwiKS5hc0J1dHRvbjtcclxuICAgIGxldCBidXR0b25fQWRHZXRSZXdhcmQgPSBhZENvbS5nZXRDaGlsZChcIkJ1dHRvbl9BZEdldFJld2FyZFwiKS5hc0J1dHRvbjtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8v6aKG5Y+W57G75Z6LXHJcbiAgICAgICAgR2V0QnRuVHlwZTogYWRDb20uZ2V0Q29udHJvbGxlcignQnRuVHlwZV9DJyksXHJcbiAgICAgICAgLy/ljZXmjInpkq7pooblj5ZcclxuICAgICAgICBCdXR0b25fR2V0UmV3YXJkOiBidXR0b25fR2V0UmV3YXJkLFxyXG4gICAgICAgIC8v57qv6aKG5Y+WXHJcbiAgICAgICAgQnV0dG9uX09uZVJld2FyZDogYWRDb20uZ2V0Q2hpbGQoXCJCdXR0b25fT25lUmV3YXJkXCIpLmFzQnV0dG9uLFxyXG4gICAgICAgIC8v5bm/5ZGK5Y+M5YCN6aKG5Y+WXHJcbiAgICAgICAgQnV0dG9uX0RvdWJsZVJld2FyZDogYnV0dG9uX0RvdWJsZVJld2FyZCxcclxuICAgICAgICAvL+WNleaMiemSruW5v+WRiumihuWPllxyXG4gICAgICAgIEJ1dHRvbl9BZEdldFJld2FyZDogYnV0dG9uX0FkR2V0UmV3YXJkLFxyXG4gICAgICAgIC8v5Y2V5oyJ6ZKu6aKG5Y+W5pa55byPXHJcbiAgICAgICAgR2V0UmV3YXJkVHlwZTogYnV0dG9uX0FkR2V0UmV3YXJkLmdldENvbnRyb2xsZXIoJ1R5cGVfQycpLFxyXG4gICAgICAgIC8v5Y+M5YCN6aKG5Y+W5pa55byPXHJcbiAgICAgICAgR2V0RG91YmxlUmV3YXJkVHlwZTogYnV0dG9uX0RvdWJsZVJld2FyZC5nZXRDb250cm9sbGVyKCdUeXBlX0MnKSxcclxuICAgIH1cclxufVxyXG5cclxuLy/mnKzlnLDlrZjlgqhcclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2NhbFN0b3JhZ2Uoa2V5OnN0cmluZywgdmFsdWU6c3RyaW5nKXtcclxuICAgIGlmKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZShrZXk6c3RyaW5nKXtcclxuICAgIHJldHVybiBMYXlhLkxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxKc29uKGtleTpzdHJpbmcsIHZhbHVlKXtcclxuICAgIC8v5Y+v5a2Y5YKo5pWw57uEXHJcbiAgICBpZighdmFsdWUpIHJldHVybjtcclxuICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04oa2V5LCB2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbEpzb24oa2V5OnN0cmluZyl7XHJcbiAgICByZXR1cm4gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SlNPTihrZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29weURhdGEoc3JjRGF0YSwgdGFyZ2V0RGF0YSl7XHJcbiAgICBpZighc3JjRGF0YSB8fCAhdGFyZ2V0RGF0YSkgcmV0dXJuO1xyXG5cclxuICAgIGZvcihsZXQgaSBpbiBzcmNEYXRhKXtcclxuICAgICAgICBpZih0eXBlb2Ygc3JjRGF0YVtpXSAhPSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgdGFyZ2V0RGF0YVtpXSA9IHNyY0RhdGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuvue9ruW5v+WRiue7hOS7tuagt+W8j1xyXG4vKipcclxuICogQHBhcmFtICB7Zmd1aS5HQ29tcG9uZW50fSBhZENvbVxyXG4gKiBAcGFyYW0gIHtib29sZWFufSBpc1NpbmdsZVxyXG4gKi9cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIFNldEFkQnRuU3R5bGUoYWRDb20sIGlzU2luZ2xlKXtcclxuLy8gICAgIGlmKCFhZENvbSkgcmV0dXJuO1xyXG5cclxuLy8gICAgIGxldCBidG4gPSBBZEdldFJld2FyZEJ0bihhZENvbSk7XHJcbi8vICAgICBsZXQgYWRUeXBlID0gaXNTaW5nbGU/IE1hbmFnZXIuR2V0UmVjZWl2ZUF3YXJkc1R5cGUuU2luZ2xlQWRUeXBlKCk6IE1hbmFnZXIuR2V0UmVjZWl2ZUF3YXJkc1R5cGUuZ2V0VHlwZSgpO1xyXG4vLyAgICAgc3dpdGNoIChhZFR5cGUpIHtcclxuLy8gICAgICAgICBjYXNlIENvbmZpZy5Bd2FyZFR5cGUuTm90OlxyXG4vLyAgICAgICAgICAgICBidG4uR2V0QnRuVHlwZS5zZWxlY3RlZEluZGV4ID0gMDtcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuLy8gICAgICAgICBjYXNlIENvbmZpZy5Bd2FyZFR5cGUuU2hhcmU6XHJcbi8vICAgICAgICAgICAgIGJ0bi5HZXREb3VibGVSZXdhcmRUeXBlLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4vLyAgICAgICAgIGNhc2UgQ29uZmlnLkF3YXJkVHlwZS5BRDpcclxuLy8gICAgICAgICAgICAgYnRuLkdldERvdWJsZVJld2FyZFR5cGUuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbi8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbi8vICAgICAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICAgICAgYWRDb20uZW5hYmxlZCA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gYnRuO1xyXG4vLyB9XHJcblxyXG4vL+mjmOWtl1xyXG5sZXQgdGlwc1VpOmZndWkuR0NvbXBvbmVudDtcclxuZXhwb3J0IGZ1bmN0aW9uIFNob3dUaXBzKG1zZzpzdHJpbmcpe1xyXG4gICAgaWYoIXRpcHNVaSl7XHJcbiAgICAgICAgbGV0IHZpZXdOYW1lID0gQ29uZmlnLlZpZXdLaXQuVGlwc0xhYmVsO1xyXG4gICAgICAgIHRpcHNVaSA9IE1hbmFnZXIuU3Bhd25NYW5hZ2VyLkxvYWRWaWV3KHZpZXdOYW1lLlBrZywgdmlld05hbWUuQ29tKTtcclxuICAgICAgICB0aXBzVWkuc29ydGluZ09yZGVyID0gVUlDb25maWcuU29ydGluZ09yZGVyLk1zZ1RpcHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuI3ph43lpI3mmL7npLpcclxuICAgIGlmKHRpcHNVaS52aXNpYmxlKSByZXR1cm47XHJcblxyXG4gICAgbXNnID0gbXNnPyBtc2c6IENvbmZpZy5Mb2NhbENvbnRlbnQuRmx5aW5nVGlwc0RlZmF1bHQ7XHJcbiAgICB0aXBzVWkudGV4dCA9IG1zZztcclxuICAgIHRpcHNVaS52aXNpYmxlID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgdGlwc1VpLmdldFRyYW5zaXRpb24oJ0VmZmVjdF9TaG93JykucGxheShMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpPT57dGlwc1VpLnZpc2libGUgPSBmYWxzZX0pKTtcclxufVxyXG5cclxuLy/mtJ7lupzliqDotYTmupDpo5jlrZdcclxuaW50ZXJmYWNlIEFkb2JlQWRkVGlwc1Vpe1xyXG4gICAgVWk6Zmd1aS5HQ29tcG9uZW50O1xyXG4gICAgVGV4dF9BZGRTdG9uZTpmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICBUZXh0X0FkZEZvb2Q6Zmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgVGV4dF9BZGRXb29kOmZndWkuR1RleHRGaWVsZDtcclxuICAgIFRleHRfQWRkSXJvbjpmZ3VpLkdUZXh0RmllbGQ7XHJcbn1cclxubGV0IGFkb2JlQWRkVGlwc1VpOkFkb2JlQWRkVGlwc1VpO1xyXG5cclxuZnVuY3Rpb24gc2V0QWRvYmVSZXNOdW0odHh0Q29tOmZndWkuR1RleHRGaWVsZCwgcmVzTnVtOm51bWJlcil7XHJcbiAgICBpZihyZXNOdW0gPj0gMCl7XHJcbiAgICAgICAgdHh0Q29tLmNvbG9yID0gJyMwMEZGMDAnO1xyXG4gICAgICAgIHR4dENvbS50ZXh0ID0gJysnICsgcmVzTnVtO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdHh0Q29tLmNvbG9yID0gJyNGRjAwMDAnO1xyXG4gICAgICAgIHR4dENvbS50ZXh0ID0gJy0nICsgLXJlc051bTtcclxuICAgIH1cclxufVxyXG5cclxuLy/orr7nva7mloflrZfmipXlvbEx5YOP57SgXHJcbmxldCB0eHRTaGFkb3dGaWx0ZXI6TGF5YS5HbG93RmlsdGVyO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VHh0U2hhZG93KGd0eHQ6Zmd1aS5HT2JqZWN0KXtcclxuICAgIGlmKCFndHh0KSByZXR1cm47XHJcbiAgICBpZighdHh0U2hhZG93RmlsdGVyKXtcclxuICAgICAgICB0eHRTaGFkb3dGaWx0ZXIgPSBuZXcgTGF5YS5HbG93RmlsdGVyKCcjMDAwMDAwJywgMSwgMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ3R4dC5kaXNwbGF5T2JqZWN0LmZpbHRlcnMgPSBbdHh0U2hhZG93RmlsdGVyXTtcclxufVxyXG5cclxuLy/orr7nva5VSeiKgueCueS4jumAgumFjVxyXG4vLyBleHBvcnQgZnVuY3Rpb24gc2V0VWlOb2RlKCl7XHJcbi8vICAgICBpZighZmd1aS5HUm9vdC5pbnN0KSByZXR1cm47XHJcbiAgICBcclxuLy8gICAgIGxldCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4vLyAgICAgZmd1aS5HUm9vdC5pbnN0Lm5vZGUucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuLy8gICAgIGZndWkuR1Jvb3QuaW5zdC5ub2RlLnggPSAtY2FudmFzLndpZHRoICogMC41O1xyXG4vLyAgICAgZmd1aS5HUm9vdC5pbnN0Lm5vZGUueSA9IGNhbnZhcy5oZWlnaHQgKiAwLjU7XHJcbi8vIH1cclxuXHJcbi8v6LCD55SoamF2YVxyXG4vKipcclxuICogQHBhcmFtICB7c3RyaW5nfSBjbGFzc1BhdGgg5a6M5pW055qE57G76Lev5b6EXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gamF2YUZ1bmMgamF2YemdmeaAgeaWueazleWQjVxyXG4gKiBAcGFyYW0gIHt9IGRhdGFcclxuICogQHBhcmFtICB7Ym9vbGVhbn0gd2lkdGhCYWNrIOaYr+WQpuaciWphdmHlkIzmraXlm57osINcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBKc0NhbGxKYXZhKGNsYXNzUGF0aDpzdHJpbmcsIGphdmFGdW5jOnN0cmluZywgZGF0YT8sIHdpZHRoQmFjaz86Ym9vbGVhbil7XHJcbiAgICBpZighTGF5YS5Ccm93c2VyLm9uQW5kcm9pZCkgcmV0dXJuO1xyXG5cclxuICAgIC8v6ZyA6KaB5a6M5pW055qE57G76Lev5b6E77yM5rOo5oSP5LiOaU9T55qE5LiN5ZCMXHJcbiAgICBsZXQgYnJpZGdlID0gd2luZG93W1wiUGxhdGZvcm1DbGFzc1wiXS5jcmVhdGVDbGFzcyhjbGFzc1BhdGgpOy8v5Yib5bu66ISa5pys5Luj55CGXHJcbiAgICBpZih3aWR0aEJhY2spe1xyXG4gICAgICAgIGxldCBvYmogPSB7dmFsdWU6IGRhdGF9O1xyXG4gICAgICAgIGJyaWRnZS5jYWxsV2l0aEJhY2soZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IEpTT04ucGFyc2UodmFsdWUpXHJcbiAgICAgICAgICAgIGFsZXJ0KG9iai52YWx1ZSk7XHJcbiAgICAgICAgfSwgamF2YUZ1bmMsIEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgbGV0IHJlc3AgPSBicmlkZ2UuY2FsbChqYXZhRnVuYywgZGF0YSk7XHJcbiAgICAgICAgYWxlcnQocmVzcCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6K6h566X5a2X56ym5a2X6IqC5pWwLS3mraPliJnms5VcclxuZnVuY3Rpb24gZ2V0Qnl0ZXNMZW5ndGgoc3RyKSB7XHJcbiAgICBpZighc3RyIHx8IHR5cGVvZiBzdHIgIT0gJ3N0cmluZycpe1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgLy8g5ZyoR0JL57yW56CB6YeM77yM6Zmk5LqGQVNDSUnlrZfnrKbvvIzlhbblroPpg73ljaDkuKTkuKrlrZfnrKblrr1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW15cXHgwMC1cXHhmZl0vZywgJ3h4JykubGVuZ3RoO1xyXG59XHJcblxyXG4vL+iuoeeul+Wtl+espuWtl+iKguaVsC0t6YGN5Y6G5rOVLS3mlYjnjofovoPpq5hcclxuZXhwb3J0IGZ1bmN0aW9uIHN0ckJ5dGVMZW4oc3RyOnN0cmluZyl7IFxyXG4gICAgbGV0IGJ5dGVMZW4gPSAwLCBsZW46bnVtYmVyOyBcclxuICAgIGlmKHN0ciAmJiB0eXBlb2Ygc3RyID09ICdzdHJpbmcnKXtcclxuICAgICAgICBsZW4gPSBzdHIubGVuZ3RoO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHN0ci5jaGFyQ29kZUF0KGkpID4gMjU1KXsgXHJcbiAgICAgICAgICAgICAgICBieXRlTGVuICs9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXsgXHJcbiAgICAgICAgICAgICAgICBieXRlTGVuKys7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBieXRlTGVuO1xyXG59XHJcblxyXG4vL+a3seaLt+i0nVxyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkoc3JjOm9iamVjdCwgdGFyZ2V0Om9iamVjdCl7XHJcbiAgICBpZighc3JjIHx8ICF0YXJnZXQpIHJldHVybjtcclxuXHJcbiAgICBpZihzcmMgIT0gbnVsbCl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHNyYyl7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHNyY1tpXTtcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gW107XHJcbiAgICAgICAgICAgICAgICBbLi4udGFyZ2V0W2ldXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0ge307XHJcbiAgICAgICAgICAgICAgICBkZWVwQ29weSh2YWx1ZSwgdGFyZ2V0W2ldKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy/loavlhYXnianlk4HmjInpkq5cclxuZXhwb3J0IGNsYXNzIEl0ZW1CdG5QYXJ0c0NsYXNzIHtcclxuICAgIFRleHRfVGl0bGU6Zmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgVGV4dF9Bd2FyZE51bTpmZ3VpLkdUZXh0RmllbGQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYnRuOmZndWkuR0NvbXBvbmVudCl7XHJcbiAgICAgICAgdGhpcy5UZXh0X1RpdGxlID0gYnRuLmdldENoaWxkKCd0aXRsZScpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMuVGV4dF9Bd2FyZE51bSA9IGJ0bi5nZXRDaGlsZCgnVGV4dF9Bd2FyZE51bScpLmFzVGV4dEZpZWxkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbEl0ZW1EYXRhKGl0ZW1kYXRhLCBidG46Zmd1aS5HQ29tcG9uZW50KXtcclxuICAgIGlmKCFpdGVtZGF0YSB8fCAhYnRuKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHBhcnRzID0gbmV3IEl0ZW1CdG5QYXJ0c0NsYXNzKGJ0bik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsSXRlbUxpc3REYXRhKGl0ZW1kYXRhQXJyOmFueVtdLCBsaXN0OmZndWkuR0xpc3Qpe1xyXG4gICAgaWYoIWl0ZW1kYXRhQXJyIHx8ICFsaXN0KSByZXR1cm47XHJcblxyXG4gICAgaXRlbWRhdGFBcnIuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgZmlsbEl0ZW1EYXRhKHYsIGxpc3QuYWRkSXRlbUZyb21Qb29sKCkuYXNDb20pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5YiX6KGo54K55Ye75Zue6LCDXHJcbmZ1bmN0aW9uIG9uQ2xpY2tMaXN0SXRlbSh0aGlzQXJnLCBmdW5jOkZ1bmN0aW9uLCBkYXRhLCBpdGVtOmZndWkuR0NvbXBvbmVudCl7XHJcbiAgICBsZXQgaWR4ID0gaXRlbS5wYXJlbnQuYXNMaXN0LmdldENoaWxkSW5kZXgoaXRlbSk7XHJcbiAgICBmdW5jLmNhbGwodGhpc0FyZywgaWR4ICsgMSwgLi4uZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGlja0xpc3RDYWxsYmFjayhsaXN0OmZndWkuR0xpc3QsIHRoaXNBcmcsIGZ1bmM6RnVuY3Rpb24sIC4uLmRhdGEpe1xyXG4gICAgaWYoIWxpc3QgfHwgIWZ1bmMpIHJldHVybjtcclxuXHJcbiAgICBsaXN0Lm9uKGZndWkuRXZlbnRzLkNMSUNLX0lURU0sIHRoaXNBcmcsIG9uQ2xpY2tMaXN0SXRlbSwgW3RoaXNBcmcsIGZ1bmMsIGRhdGFdKTtcclxufSIsImltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0IEdFdmVudCBmcm9tIFwiLi9HRXZlbnRcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5cclxuLy/lvq7kv6Hmk43kvZxcclxubGV0IHBsYXRmb3JtID0gd2luZG93Wyd3eCddO1xyXG4vL+eZu+W9leW+ruS/oeWPt1xyXG5leHBvcnQgZnVuY3Rpb24gTG9naW4oaXNVbmlvbklkOmJvb2xlYW4pIHtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLmxvZ2luKHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzVW5pb25JZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2V0dGluZyhyZXMuY29kZSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlj5HotbfnvZHnu5zor7fmsYJcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxID0gQ29uZmlnLlJlcURhdGEuTG9naW47XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxLk5hbWUgPSByZXMuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICBEYXRhLkxvZ2luRGF0YS5TZW5kUmVxKHJlcSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy/liqDovb3liIbljIVcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBbGxTdWJwYWNrYWdlcyh0aGlzQXJnLCBjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UgfHwgQ29uZmlnLlVJQ29uZmlnLlN1YlBrZ3MubGVuZ3RoID09IDApIHtcclxuICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcblxyXG4gICAgQ29uZmlnLlVJQ29uZmlnLlN1YlBrZ3MuZm9yRWFjaChwa2c9PntcclxuICAgICAgICBjb25zdCBsb2FkVGFzayA9IHBsYXRmb3JtLmxvYWRTdWJwYWNrYWdlKHtcclxuICAgICAgICAgICAgbmFtZTogcGtnLCAvLyBuYW1lIOWPr+S7peWhqyBuYW1lIOaIluiAhSByb290XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy8g5YiG5YyF5Yqg6L295oiQ5Yqf5ZCO6YCa6L+HIHN1Y2Nlc3Mg5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy8g5YiG5YyF5Yqg6L295aSx6LSl6YCa6L+HIGZhaWwg5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhaWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+iuvue9ruWIhuS6q3RpY2tldFxyXG5leHBvcnQgZnVuY3Rpb24gc2hhcmVUaWNrZXRNb2RlKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS51cGRhdGVTaGFyZU1lbnUoe1xyXG4gICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZSxcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+iOt+WPluWIhuS6q3RpY2tldFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hhcmVUaWNrZXQoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsYXVuY2hJbmZvID0gcGxhdGZvcm0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+Pj4+Pj4+5b6u5L+h55m75b2V5L+h5oGv77yaJywgbGF1bmNoSW5mbyk7XHJcbiAgICBpZihsYXVuY2hJbmZvICYmIGxhdW5jaEluZm8uc2hhcmVUaWNrZXQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+Pj4+Pj4+PnNoYXJlVGlja2V077yaJywgbGF1bmNoSW5mby5zaGFyZVRpY2tldCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsYXVuY2hJbmZvLnNoYXJlVGlja2V0O1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6Kej5p6Q5YiG5LqrdGlja2V0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaGFyZUluZm8oKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCB0aWNrZXQgPSBnZXRTaGFyZVRpY2tldCgpO1xyXG4gICAgLy8gaWYoIXRpY2tldCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsYXVuY2hJbmZvID0gcGxhdGZvcm0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIGlmKGxhdW5jaEluZm8gJiYgbGF1bmNoSW5mby5xdWVyeSl7XHJcbiAgICAgICAgLy8gRGF0YUJhc2UuU2VuZFNoYXJlSW5mby5TZW5kUmVxKGxhdW5jaEluZm8ucXVlcnkuc2hhcmVJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGV0IHNoYXJlSW5mbyA9IHtcclxuICAgIC8vICAgICBFbmNyeXB0ZWREYXRhOiAnJyxcclxuICAgIC8vICAgICBJdjogJydcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwbGF0Zm9ybS5sb2dpbih7XHJcbiAgICAvLyAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgY29kZSA9IHJlcy5jb2RlO1xyXG4gICAgLy8gICAgICAgICAgICAgcGxhdGZvcm0uZ2V0U2hhcmVJbmZvKHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzaGFyZVRpY2tldDogdGlja2V0LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfop6PmnpDliIbkuqvkv6Hmga/vvJonLCByZXMpO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVuY3J5cHRlZERhdGEpe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVJbmZvLkVuY3J5cHRlZERhdGEgPSByZXMuZW5jcnlwdGVkRGF0YTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlSW5mby5JdiA9IHJlcy5pdjtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIERhdGFCYXNlLlNlbmRTaGFyZUluZm8uU2VuZFJlcShjb2RlLCByZXMuZW5jcnlwdGVkRGF0YSwgcmVzLml2KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leWksei0pe+8gScgKyByZXMuZXJyTXNnKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHJldHVybiBzaGFyZUluZm87XHJcbn1cclxuXHJcbi8v5pi+56S65Y+z5LiK6KeS6L2s5Y+RXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93U2hhcmVNZW51KCkge1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0uc2hvd1NoYXJlTWVudSh7XHJcbiAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBwbGF0Zm9ybS5vblNoYXJlQXBwTWVzc2FnZSgoKSA9PiAoe1xyXG4gICAgICAgIHRpdGxlOiBEYXRhLkdldFNoYXJlV29yZCgpLFxyXG4gICAgICAgIGltYWdlVXJsOiBDb25maWcuVUlDb25maWcuU2hhcmVJbWFnZVBhdGguSW52aXRlRnJpZW5kLFxyXG4gICAgICAgIHF1ZXJ5OiAnc2hhcmVJRD0nICsgRGF0YS5Mb2dpbkRhdGEuQWNjb3VudEtleSxcclxuICAgIH0pKTtcclxufVxyXG5cclxuLy/liIbkuqtcclxuZXhwb3J0IGZ1bmN0aW9uIFNoYXJlTWVzc2FnZShtc2c6c3RyaW5nLCBpbWdQYXRoPzpzdHJpbmcsIHVzZVNjcmVlblNob3Q/OmJvb2xlYW4pIHtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBzeXNJbmZvID0gcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbiAgICAvL+S9v+eUqOWxj+W5leaIquWbvlxyXG4gICAgaWYodXNlU2NyZWVuU2hvdCA9PSB0cnVlKXtcclxuICAgICAgICBpbWdQYXRoID0gd2luZG93W1wiY2FudmFzXCJdLnRvVGVtcEZpbGVQYXRoU3luYyh7XHJcbiAgICAgICAgICAgIGRlc3RXaWR0aDogc3lzSW5mby53aW5kb3dXaWR0aCAqIHN5c0luZm8ucGl4ZWxSYXRpbyxcclxuICAgICAgICAgICAgZGVzdEhlaWdodDogc3lzSW5mby53aW5kb3dIZWlnaHQgKiBzeXNJbmZvLnBpeGVsUmF0aW9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF0Zm9ybS5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgIHRpdGxlOiBtc2csXHJcbiAgICAgICAgaW1hZ2VVcmw6IGltZ1BhdGgsXHJcbiAgICAgICAgcXVlcnk6ICdzaGFyZUlEPScgKyBEYXRhLkxvZ2luRGF0YS5BY2NvdW50S2V5XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uU2hvdyhjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5vblNob3coY2FsbGJhY2spO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2ZmU2hvdyhjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5vZmZTaG93KGNhbGxiYWNrKTtcclxufVxyXG5cclxuLy/muIXnkIbnvJPlrZhcclxuZXhwb3J0IGZ1bmN0aW9uIENsZWFyTG9jYWxDYWNoZSgpIHtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHdpbmRvd1tcImNhbnZhc1wiXS5nZXRTYXZlZEZpbGVMaXN0KHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZmlsZUxpc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5maWxlTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZmlsZUxpc3QuZm9yRWFjaCgoZmlsZSk9PntcclxuICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybS5yZW1vdmVTYXZlZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aDogZmlsZS5maWxlUGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhbnZhc1RvVGVtcEZpbGVQYXRoKGNhbGxiYWNrOkZ1bmN0aW9uKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGxldCB3aWR0aCAgPSBmZ3VpLkdSb290Lmluc3Qud2lkdGg7XHJcbiAgICAvLyBsZXQgaGVpZ2h0ICA9IGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQ7XHJcbiAgICBsZXQgc3lzSW5mbyA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICBjb25zb2xlLmxvZyhzeXNJbmZvKTtcclxuXHJcbiAgICBsZXQgZGVzdFNpemUgPSBuZXcgTGF5YS5Qb2ludChzeXNJbmZvLndpbmRvd1dpZHRoICogc3lzSW5mby5waXhlbFJhdGlvLCBzeXNJbmZvLndpbmRvd0hlaWdodCAqIHN5c0luZm8ucGl4ZWxSYXRpbyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGVzdFNpemUpO1xyXG5cclxuICAgIHdpbmRvd1tcImNhbnZhc1wiXS50b1RlbXBGaWxlUGF0aCh7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHdpZHRoOiBkZXN0U2l6ZS54LFxyXG4gICAgICAgIGhlaWdodDogZGVzdFNpemUueSxcclxuICAgICAgICBkZXN0V2lkdGg6IGRlc3RTaXplLngsXHJcbiAgICAgICAgZGVzdEhlaWdodDogZGVzdFNpemUueSxcclxuICAgICAgICBjYW52YXNJZDogJ215Q2FudmFzJyxcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudGVtcEZpbGVQYXRoKTtcclxuICAgICAgICAgICAgcGxhdGZvcm0uc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XHJcbiAgICAgICAgICAgICAgICBmaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkv53lrZjlm77niYfmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOifkv53lrZjmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246J3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOjIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5aSx6LSlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIuZXJyTXNnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0ub3BlblNldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhzZXR0aW5nZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNldHRpbmdkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ2RhdGEuYXV0aFNldHRpbmdbXCJzY29wZS53cml0ZVBob3Rvc0FsYnVtXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bmnYPpmZDmiJDlip/vvIznu5nlh7rlho3mrKHngrnlh7vlm77niYfkv53lrZjliLDnm7jlhoznmoTmj5DnpLrjgIInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bmnYPpmZDlpLHotKXvvIznu5nlh7rkuI3nu5nmnYPpmZDlsLHml6Dms5XmraPluLjkvb/nlKjnmoTmj5DnpLonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlck5pY2tOYW1lKGNhbGxiYWNrOkZ1bmN0aW9uKXtcclxuICAgIGlmKCFwbGF0Zm9ybSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLmdldFNldHRpbmcoe1xyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGlmICghcmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybS5hdXRob3JpemUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnc2NvcGUudXNlckluZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeUqOaIt+W3sue7j+WQjOaEj+Wwj+eoi+W6j+S9v+eUqOW9lemfs+WKn+iDve+8jOWQjue7reiwg+eUqCB3eC5zdGFydFJlY29yZCDmjqXlj6PkuI3kvJrlvLnnqpfor6Lpl65cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0uc3RhcnRSZWNvcmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGxhdGZvcm0uZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICBjb25zdCBuaWNrTmFtZSA9IHVzZXJJbmZvLm5pY2tOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBhdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmw7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlbmRlciA9IHVzZXJJbmZvLmdlbmRlcjsgLy8g5oCn5YirIDDvvJrmnKrnn6XjgIEx77ya55S344CBMu+8muWls1xyXG4gICAgICAgICAgICBjb25zdCBwcm92aW5jZSA9IHVzZXJJbmZvLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICBjb25zdCBjaXR5ID0gdXNlckluZm8uY2l0eTtcclxuICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IHVzZXJJbmZvLmNvdW50cnk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5b6u5L+h5o+Q56S65by556qXXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93VGlwc1dpbmRvdyh0aXBUaXRsZTpzdHJpbmcsIHRpcENvbnRlbnQ6c3RyaW5nLCB0aXBzQ29uZmlybVR4dDpzdHJpbmcsIGNvbmZpcm1DYWxsYmFrOkZ1bmN0aW9uLCBjYW5jZWxDYWxsYmFjaz86RnVuY3Rpb24pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0uc2hvd01vZGFsKHtcclxuICAgICAgICB0aXRsZTogdGlwVGl0bGUgfHwgJ+aPkOekuicsXHJcbiAgICAgICAgY29udGVudDogdGlwQ29udGVudCxcclxuICAgICAgICBjb25maXJtVGV4dDogdGlwc0NvbmZpcm1UeHQgfHwgJ+ehruWumicsXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY29uZmlybUNhbGxiYWspID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1DYWxsYmFrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKGNhbmNlbENhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+a/gOWKseW5v+WRilxyXG5sZXQgcmV3YXJkZWRWaWRlb0FkO1xyXG5sZXQgcmV3YXJkQWRJZHggPSAwO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkNsb3NlQ2FsbGJhY2tcclxuICogQHBhcmFtICB7ZnVuY3Rpb259IG9uRXJyb3JDYWxsYmFja1xyXG4gKiBAcGFyYW0gIHt9IHRoaXNUYXJnZXRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZXdhcmRlZFZpZGVvQWQob25DbG9zZUNhbGxiYWNrPzpGdW5jdGlvbiwgb25FcnJvckNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc1RhcmdldD8pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgLy/ln7rnoYDlupPniYjmnKzlj7cgPj0gMi4wLjRcclxuICAgIGxldCBzZGtWZXJzaW9uID0gcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKS5TREtWZXJzaW9uO1xyXG4gICAgaWYoIXNka1ZlcnNpb24gfHwgcGFyc2VJbnQoc2RrVmVyc2lvbi5yZXBsYWNlKC9cXC4vZywgJycpKSA8IDIwNCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBhZEluZm8gPSB7YWRVbml0SWQ6XCJcIn07XHJcbiAgICAvL+i9ruaNouW5v+WRilxyXG4gICAgaWYocmV3YXJkQWRJZHggPj0gTG9jYWxDb25maWcuUmV3YXJkQWRMaXN0Lmxlbmd0aClcclxuICAgICAgICByZXdhcmRBZElkeCA9IDA7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ+a/gOWKseW5v+WRiu+8micsTG9jYWxDb25maWcuUmV3YXJkQWRMaXN0W3Jld2FyZEFkSWR4XSk7XHJcbiAgICBhZEluZm8uYWRVbml0SWQgPSBMb2NhbENvbmZpZy5SZXdhcmRBZExpc3RbcmV3YXJkQWRJZHhdO1xyXG5cclxuICAgIGlmKHJld2FyZGVkVmlkZW9BZCA9PSBudWxsKXtcclxuICAgICAgICByZXdhcmRlZFZpZGVvQWQgPSBwbGF0Zm9ybS5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoYWRJbmZvKTtcclxuICAgIH1cclxuICAgIGlmKHJld2FyZGVkVmlkZW9BZCA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgcmV3YXJkZWRWaWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICByZXdhcmRlZFZpZGVvQWQuc2hvdygpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliJvlu7rmv4DlirHlub/lkYrlpLHotKXvvJonLCBlcnIpO1xyXG4gICAgICAgICAgICAvLyByZXdhcmRlZFZpZGVvQWQubG9hZCgpLnRoZW4oKCkgPT4gcmV3YXJkZWRWaWRlb0FkLnNob3coKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgLy/kuozmrKHlpLHotKXlm57osINcclxuICAgICAgICAgICAgLy8gICAgIG9uRXJyb3JDYWxsYmFjay5jYWxsKHRoaXNUYXJnZXQpO1xyXG4gICAgICAgICAgICAvLyB9KSk7XHJcblxyXG4gICAgICAgICAgICBvbkVycm9yQ2FsbGJhY2suY2FsbCh0aGlzVGFyZ2V0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJld2FyZEFkSWR4Kys7XHJcblxyXG4gICAgcmV3YXJkZWRWaWRlb0FkLm9uRXJyb3Iob25SZXdhcmRBZEVycm9yKTtcclxuXHJcbiAgICAvLyBpZih0eXBlb2Yob25Mb2FkQ2FsbGJhY2spID09ICdmdW5jdGlvbicpe1xyXG4gICAgLy8gICAgIC8vIHJld2FyZGVkVmlkZW9BZC5vbkxvYWQoKCk9PntcclxuICAgIC8vICAgICAvLyAgICAgb25Mb2FkQ2FsbGJhY2suY2FsbCh0aGlzVGFyZ2V0LCB0cnVlKTtcclxuICAgIC8vICAgICAvLyAgICAgLy8gcmV3YXJkZWRWaWRlb0FkLnNob3coKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgLy8gICAgIC8vICAgICAvLyAgICAgcmV3YXJkZWRWaWRlb0FkLmxvYWQoKVxyXG4gICAgLy8gICAgIC8vICAgICAvLyAgICAgICAudGhlbigoKSA9PiByZXdhcmRlZFZpZGVvQWQuc2hvdygpKTtcclxuICAgIC8vICAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy/lhbPpl63lm57osIPlj4LmlbAgcmVzLmlzRW5kZWQ6Ym9vbGVhbiDop4bpopHmmK/lkKbmmK/lnKjnlKjmiLflrozmlbTop4LnnIvnmoTmg4XlhrXkuIvooqvlhbPpl63nmoRcclxuICAgIGxldCBjbG9zZUZ1bmMgPSBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmmK/lkKbnnIvlrozlub/lkYrvvJonLHJlcyk7XHJcblxyXG4gICAgICAgIGlmKHJlcy5pc0VuZGVkICYmIHR5cGVvZihvbkNsb3NlQ2FsbGJhY2spID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICBvbkNsb3NlQ2FsbGJhY2suY2FsbCh0aGlzVGFyZ2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJld2FyZGVkVmlkZW9BZC5vZmZDbG9zZShjbG9zZUZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJld2FyZGVkVmlkZW9BZC5vbkNsb3NlKGNsb3NlRnVuYyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUmV3YXJkQWRFcnJvcihlcnIpe1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIHJld2FyZGVkVmlkZW9BZC5vZmZFcnJvcihvblJld2FyZEFkRXJyb3IpO1xyXG59XHJcblxyXG4vL0Jhbm5lcuW5v+WRilxyXG5sZXQgYmFubmVyQWQ7XHJcbmxldCBiYW5uZXJJZHggPSAwO1xyXG5cclxuZXhwb3J0IHR5cGUgYmFubmVyQWRJbmZvID0ge1xyXG4gICAgYWRVbml0SWQ/OnN0cmluZyxcclxuICAgIHN0eWxlPzp7XHJcbiAgICAgICAgbGVmdDpudW1iZXIsIFxyXG4gICAgICAgIHRvcDpudW1iZXIsIFxyXG4gICAgICAgIHdpZHRoPzpudW1iZXIsIFxyXG4gICAgICAgIGhlaWdodD86bnVtYmVyXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHt7YWRVbml0SWQ6c3RyaW5nLCBzdHlsZTp7bGVmdDpudW1iZXIsIHRvcDpudW1iZXIsIHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlcn19fSBhZEluZm9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYW5uZXJBZChhZEluZm8/OmJhbm5lckFkSW5mbyl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICAvLyBsZWZ0OiBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoICogMC41IC0gMTAwLFxyXG4gICAgLy8gICAgICAgICB0b3A6IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0ICogMC41ICsgMTAwLFxyXG4gICAgbGV0IHN5c0luZm8gPSBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuICAgIC8v5Z+656GA5bqT54mI5pys5Y+3ID49IDIuMC40XHJcbiAgICBsZXQgc2RrVmVyc2lvbiA9IHN5c0luZm8uU0RLVmVyc2lvbjtcclxuICAgIGlmKCFzZGtWZXJzaW9uIHx8IHBhcnNlSW50KHNka1ZlcnNpb24ucmVwbGFjZSgvXFwuL2csICcnKSkgPCAyMDQpIHJldHVybjtcclxuXHJcbiAgICBpZighYWRJbmZvKVxyXG4gICAgICAgIGFkSW5mbyA9IHt9O1xyXG4gICAgLy/ova7mjaLlub/lkYpcclxuICAgIGlmKGJhbm5lcklkeCA+PSBMb2NhbENvbmZpZy5CYW5uZXJBZExpc3QubGVuZ3RoKVxyXG4gICAgICAgIGJhbm5lcklkeCA9IDA7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCdCYW5uZXLlub/lkYrvvJonLExvY2FsQ29uZmlnLkJhbm5lckFkTGlzdFtiYW5uZXJJZHhdKTtcclxuICAgIGFkSW5mby5hZFVuaXRJZCA9IExvY2FsQ29uZmlnLkJhbm5lckFkTGlzdFtiYW5uZXJJZHhdO1xyXG5cclxuICAgIC8v5L2N572uXHJcbiAgICBhZEluZm8uc3R5bGUgPSB7XHJcbiAgICAgICAgbGVmdDowLCBcclxuICAgICAgICB0b3A6c3lzSW5mby53aW5kb3dIZWlnaHQgLSAxMDAsXHJcbiAgICAgICAgd2lkdGg6c3lzSW5mby53aW5kb3dXaWR0aCwgXHJcbiAgICAgICAgLy8gaGVpZ2h0OjEwMFxyXG4gICAgfVxyXG5cclxuICAgIGlmKGJhbm5lckFkID09IG51bGwpe1xyXG4gICAgICAgIGJhbm5lckFkID0gcGxhdGZvcm0uY3JlYXRlQmFubmVyQWQoYWRJbmZvKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGJhbm5lckFkLmRlc3Ryb3koKTtcclxuICAgICAgICBiYW5uZXJBZCA9IHBsYXRmb3JtLmNyZWF0ZUJhbm5lckFkKGFkSW5mbyk7XHJcbiAgICB9XHJcbiAgICBpZihiYW5uZXJBZCA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy9iYW5uZXLkvY3nva7pgILphY1cclxuICAgIGJhbm5lckFkLm9uUmVzaXplKHJlcyA9PiB7XHJcbiAgICAgICAgYmFubmVyQWQuc3R5bGUudG9wID0gc3lzSW5mby53aW5kb3dIZWlnaHQgLSByZXMuaGVpZ2h0O1xyXG4gICAgICAgIGlmKHN5c0luZm8ubW9kZWwgPT0gJ2lQaG9uZSBYJyl7XHJcbiAgICAgICAgICAgIGJhbm5lckFkLnN0eWxlLnRvcC09MjA7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYmFubmVyQWQub25FcnJvcihvbkJhbm5lckFkRXJyb3IpO1xyXG5cclxuICAgIGJhbm5lckFkLnNob3coKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfliJvlu7pCYW5uZXLlub/lkYrlpLHotKXvvJonLCBlcnIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYmFubmVySWR4Kys7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQmFubmVyQWRFcnJvcihlcnIpe1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIGJhbm5lckFkLm9mZkVycm9yKG9uQmFubmVyQWRFcnJvcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQmFubmVyQWQoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgaWYoYmFubmVyQWQgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGJhbm5lckFkLmhpZGUoKTtcclxufVxyXG5cclxuLy/kuIvovb3ov5znqIvmlofku7ZcclxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkRmlsZSh1cmwsIGNhbGxiYWNrKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSB8fCAhdXJsKSByZXR1cm47XHJcblxyXG4gICAgY29uc29sZS5sb2coJ+S4i+i9veWcsOWdgO+8micsdXJsKTtcclxuXHJcbiAgICBwbGF0Zm9ybS5kb3dubG9hZEZpbGUoe1xyXG4gICAgICAgIHVybDogdXJsLCBcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAvLyDlj6ropoHmnI3liqHlmajmnInlk43lupTmlbDmja7vvIzlsLHkvJrmiorlk43lupTlhoXlrrnlhpnlhaXmlofku7blubbov5vlhaUgc3VjY2VzcyDlm57osIPvvIzkuJrliqHpnIDopoHoh6rooYzliKTmlq3mmK/lkKbkuIvovb3liLDkuobmg7PopoHnmoTlhoXlrrlcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzLnRlbXBGaWxlUGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vL+iOt+WPluW+ruS/oeWxj+W5leWwuuWvuFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZG93U2l6ZSgpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHN5c0luZm8gPSBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgY29uc29sZS5sb2coc3lzSW5mbyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogc3lzSW5mby53aW5kb3dXaWR0aCAqIHN5c0luZm8ucGl4ZWxSYXRpbywgXHJcbiAgICAgICAgaGVpZ2h0OiBzeXNJbmZvLndpbmRvd0hlaWdodCAqIHN5c0luZm8ucGl4ZWxSYXRpb1xyXG4gICAgfTtcclxufVxyXG5cclxuLy/ojrflj5bnlKjmiLfmjojmnYPkv6Hmga9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldHRpbmcobG9naW5Db2RlKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLmdldFNldHRpbmcoe1xyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIC8vIHJlcy5hdXRoU2V0dGluZyA9IHtcclxuICAgICAgICAgICAgLy8gICBcInNjb3BlLnVzZXJJbmZvXCI6IHRydWUsICAgIC8v5piv5ZCm5o6I5p2D55So5oi35L+h5oGvXHJcbiAgICAgICAgICAgIC8vICAgXCJzY29wZS51c2VyTG9jYXRpb25cIjogdHJ1ZSwgICAgLy/mmK/lkKbmjojmnYPlnLDnkIbkvY3nva5cclxuICAgICAgICAgICAgLy8gICBcInNjb3BlLndlcnVuXCI6IGZhbHNlLCAgLy/mmK/lkKbmjojmnYPlvq7kv6Hov5DliqjmraXmlbBcclxuICAgICAgICAgICAgLy8gICBcInNjb3BlLndyaXRlUGhvdG9zQWxidW1cIjogZmFsc2UgICAgLy/mmK/lkKbmjojmnYPkv53lrZjliLDnm7jlhoxcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmF1dGhTZXR0aW5nKTtcclxuICAgICAgICAgICAgLy8gaWYodHlwZW9mKGNhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgLy8gICAgIGNhbGxiYWNrKHJlcy5hdXRoU2V0dGluZ1tcInNjb3BlLnVzZXJJbmZvXCJdKTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensFxyXG4gICAgICAgICAgICAgICAgcGxhdGZvcm0uZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5jb2RlID0gbG9naW5Db2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRhLkxvZ2luRGF0YS5Mb2dpblJlcSgnJywgcmVzLmNvZGUsIHJlcy5lbmNyeXB0ZWREYXRhLCByZXMuaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlVXNlckluZm9CdXR0b24obG9naW5Db2RlKTtcclxuICAgICAgICAgICAgICAgIC8v5pi+56S65o6I5p2DXHJcbiAgICAgICAgICAgICAgICBMb2NhbENvbmZpZy5Jc1d4QXV0aCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgTWFuYWdlci5Mb2FkaW5nUHJvZ3Jlc3NNYW5hZ2VyLkluc3QuU2hvd1d4TG9naW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+eUqOaIt+aOiOadg+aMiemSrlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXNlckluZm9CdXR0b24obG9naW5Db2RlKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBzeXNJbmZvID0gcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IHBsYXRmb3JtLmNyZWF0ZVVzZXJJbmZvQnV0dG9uKHtcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgLy8gaW1hZ2U6IENvbmZpZy5VSUNvbmZpZy5TaGFyZUltYWdlUGF0aC5JbnZpdGVGcmllbmQsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogc3lzSW5mby53aW5kb3dXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBzeXNJbmZvLndpbmRvd0hlaWdodCxcclxuICAgICAgICAgICAgLy8gbGluZUhlaWdodDogNDAsXHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJycsXHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgIC8vIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIC8vIGZvbnRTaXplOiAyNixcclxuICAgICAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiA0XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYnV0dG9uLm9uVGFwKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIC8v56Gu6K6k5o6I5p2D5ZCO6ZSA5q+B5oyJ6ZKuXHJcbiAgICAgICAgaWYocmVzLmVuY3J5cHRlZERhdGEpe1xyXG4gICAgICAgICAgICByZXMuY29kZSA9IGxvZ2luQ29kZTtcclxuICAgICAgICAgICAgLy8gRGF0YS5Mb2dpbkRhdGEuTG9naW5SZXEoJycsIHJlcy5jb2RlLCByZXMuZW5jcnlwdGVkRGF0YSwgcmVzLml2KTtcclxuICAgICAgICAgICAgYnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBHRXZlbnQuQWRkTGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuTG9naW5TdWNjZXNzLCAoKT0+e2J1dHRvbi5kZXN0cm95KCk7fSwgdGhpcyk7XHJcbn1cclxuXHJcbi8v5qOA5p+l54mI5pys5pu05pawXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1VwZGF0ZShjYWxsYmFjaz86RnVuY3Rpb24pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgaWYodHlwZW9mKHBsYXRmb3JtLmdldFVwZGF0ZU1hbmFnZXIpID09PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICBjb25zdCB1cGRhdGVNYW5hZ2VyID0gcGxhdGZvcm0uZ2V0VXBkYXRlTWFuYWdlcigpO1xyXG5cclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAvLyDor7fmsYLlrozmlrDniYjmnKzkv6Hmga/nmoTlm57osINcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+ajgOafpeaWsOeJiOacrOe7k+aenO+8micsIHJlcy5oYXNVcGRhdGUpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAvL+Wbnuiwg+mAmuefpee7k+aenFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzLmhhc1VwZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5riF55CG57yT5a2YXHJcbiAgICAgICAgICAgIGlmKHJlcy5oYXNVcGRhdGUpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93W1wid3hEb3dubG9hZGVyXCJdLmNsZWFuT2xkQXNzZXRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgIC8v5Zue6LCD6YCa55+l57uT5p6cXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGxhdGZvcm0uc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5pu05paw5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmlrDniYjmnKzlt7Lnu4/lh4blpIflpb3vvIzljbPlsIbph43lkK/muLjmiI8nLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmlrDnmoTniYjmnKzlt7Lnu4/kuIvovb3lpb3vvIzosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTWFuYWdlci5hcHBseVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZUZhaWxlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIOaWsOeJiOacrOS4i+i9veWksei0pVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WQkeW8gOaUvuWfn+WPkemAgea2iOaBr1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zdE9wZW5SZWdpb25NZXNzYWdlKGV2ZW50SWQpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgb3BlbkRhdGFDb250ZXh0ID0gcGxhdGZvcm0uZ2V0T3BlbkRhdGFDb250ZXh0KClcclxuICAgIG9wZW5EYXRhQ29udGV4dC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgZXZlbnRJZDogZXZlbnRJZCxcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+WQkeW8gOaUvuWfn+WPkemAgeaVsOaNrlxyXG5leHBvcnQgZnVuY3Rpb24gcG9zdE9wZW5SZWdpb25EYXRhKGRhdGEpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgb3BlbkRhdGFDb250ZXh0ID0gcGxhdGZvcm0uZ2V0T3BlbkRhdGFDb250ZXh0KClcclxuICAgIG9wZW5EYXRhQ29udGV4dC5wb3N0TWVzc2FnZShkYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOS4iuS8oOa4uOaIj+aVsOaNrlxyXG4gKiBodHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9taW5pZ2FtZS9kZXYvYXBpL3d4LnNldFVzZXJDbG91ZFN0b3JhZ2UuaHRtbFxyXG4gKiBcclxuICogQHBhcmFtICB7fSBkYXRhXHJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0gIHt9IHRoaXNBcmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyQ2xvdWRTdG9yYWdlKGRhdGEsIGNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0uc2V0VXNlckNsb3VkU3RvcmFnZSh7XHJcbiAgICAgICAgS1ZEYXRhTGlzdDogZGF0YSxcclxuICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+iOt+WPluWwj+a4uOaIj+WQr+WKqOS/oeaBr1xyXG4vL2h0dHBzOi8vZGV2ZWxvcGVycy53ZWl4aW4ucXEuY29tL21pbmlnYW1lL2Rldi9hcGkvd3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMuaHRtbFxyXG4vLyBsYXVuY2hJbmZvID0ge1xyXG4vLyAgICAgc2NlbmUsXHJcbi8vICAgICBxdWVyeSxcclxuLy8gICAgIHNoYXJlVGlja2V0LFxyXG4vLyAgICAgcmVmZXJyZXJJbmZvOntcclxuLy8gICAgICAgICBhcHBJZCxcclxuLy8gICAgICAgICBleHRyYURhdGFcclxuLy8gICAgIH1cclxuLy8gfVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsYXVuY2hJbmZvID0gcGxhdGZvcm0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIGNvbnNvbGUubG9nKCflkK/liqjkv6Hmga/vvJonLCBsYXVuY2hJbmZvKTtcclxuXHJcbiAgICByZXR1cm4gbGF1bmNoSW5mbztcclxufVxyXG5cclxuLy/ojrflj5blhaXlj6NhcHBpZFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9naW5BcHBpZCgpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGxhdW5jaEluZm8gPSBwbGF0Zm9ybS5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgaWYobGF1bmNoSW5mbyAmJiBsYXVuY2hJbmZvLnJlZmVycmVySW5mbyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WFpeWPo0FwcGlk77yaJyxsYXVuY2hJbmZvLnJlZmVycmVySW5mby5hcHBJZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsYXVuY2hJbmZvLnJlZmVycmVySW5mby5hcHBJZDtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+iOt+WPluWFpeWPo+WcuuaZr+WAvFxyXG4vL2h0dHBzOi8vZGV2ZWxvcGVycy53ZWl4aW4ucXEuY29tL21pbmlnYW1lL2Rldi9yZWZlcmVuY2Uvc2NlbmUtbGlzdC5odG1sXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXVuY2hTY2VuZSgpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGxhdW5jaEluZm8gPSBwbGF0Zm9ybS5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgY29uc29sZS5sb2coJ+WcuuaZr+WAvO+8micsbGF1bmNoSW5mby5zY2VuZSk7XHJcbiAgICBpZihsYXVuY2hJbmZvKXtcclxuICAgICAgICByZXR1cm4gbGF1bmNoSW5mby5zY2VuZTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+aYr+WQpuS7juKAnOaIkeeahOWwj+eoi+W6j+i/m+WFpeKAnVxyXG5leHBvcnQgZnVuY3Rpb24gSXNMb2dpbkZyb21GYXZvdXJpdGUoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBzY2VuZSA9IGdldExhdW5jaFNjZW5lKCk7XHJcbiAgICAvLyByZXR1cm4gc2NlbmUgPT0gMTA4OSB8fCBzY2VuZSA9PSAxMTAzO1xyXG4gICAgcmV0dXJuIHNjZW5lID09IDExMDQgfHwgc2NlbmUgPT0gMTEwMztcclxufVxyXG5cclxuLyoqXHJcbiAqIOi3s+i9rOWwj+eoi+W6j1xyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGFwcElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gcGF0aFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGV4dHJhRGF0YVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVudlZlcnNpb25cclxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSAge30gdGhpc0FyZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVG9NaW5pUHJvZ3JhbShhcHBJZDpzdHJpbmcsIHBhdGg/OnN0cmluZywgZXh0cmFEYXRhPywgZW52VmVyc2lvbj8sIGNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlIHx8ICFhcHBJZCkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XHJcbiAgICAgICAgYXBwSWQ6IGFwcElkLFxyXG4gICAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgICAgZXh0cmFEYXRhOiBleHRyYURhdGEsXHJcbiAgICAgICAgZW52VmVyc2lvbjogZW52VmVyc2lvbixcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgLy8g5omT5byA5oiQ5YqfXHJcbiAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOi3s+i9rOWIsOWNluWFi+aYn+eQg1xyXG4gKiBAcGFyYW0gIHtKU09OfSBleHRyYURhdGFcclxuICogQHBhcmFtICB7c3RyaW5nfSBlbnZWZXJzaW9uXHJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0gIHt9IHRoaXNBcmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnb01haWtlU2hvcHBpbmcoZXh0cmFEYXRhPywgY2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPywgZW52VmVyc2lvbj86c3RyaW5nKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIG5hdmlnYXRlVG9NaW5pUHJvZ3JhbShMb2NhbENvbmZpZy5NaW5pUHJvZ3JhbUFwcElkLk1haWtlLCBudWxsLCBleHRyYURhdGEsIGVudlZlcnNpb24sIGNhbGxiYWNrLCB0aGlzQXJnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7juWFtuS7luWwj+eoi+W6j+i/lOWbnlxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2JcclxuICogQHBhcmFtICB7fSB0aGlzQXJnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb25SZXR1cm5HYW1lKGNiOkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBpZih0eXBlb2YgY2IgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgb25TaG93KGNiKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIEB0eXBlIHtjYy5Ob2RlfSAqL1xyXG5sZXQgc3ViQ29udGVudFZpZXc7XHJcbi8v6K6+572u5a2Q5Z+f57uE5Lu2XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdWJDb250ZW50VmlldyhzdWJWaWV3KXtcclxuICAgIGlmKCFzdWJWaWV3KSByZXR1cm47XHJcblxyXG4gICAgc3ViQ29udGVudFZpZXcgPSBzdWJWaWV3O1xyXG59XHJcblxyXG4vL+iOt+WPluWtkOWfn+e7hOS7tlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ViQ29udGVudFZpZXcoKXtcclxuICAgIHJldHVybiBzdWJDb250ZW50VmlldztcclxufVxyXG5cclxuLy/pmpDol4/miJbmmL7npLrlrZDln5/nu4Tku7ZcclxuLyoqXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGFjdGl2ZVxyXG4gKi9cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNldFN1YkNvbnRlbnRBY3RpdmUoYWN0aXZlKXtcclxuLy8gICAgIGlmKCFzdWJDb250ZW50VmlldyB8fCB0eXBlb2YgYWN0aXZlICE9ICdib29sZWFuJykgcmV0dXJuO1xyXG5cclxuLy8gICAgIHN1YkNvbnRlbnRWaWV3LmFjdGl2ZSA9IGFjdGl2ZTtcclxuLy8gICAgIHN1YkNvbnRlbnRWaWV3LmdldENvbXBvbmVudChjYy5XWFN1YkNvbnRleHRWaWV3KS5lbmFibGVkID0gYWN0aXZlO1xyXG4vLyB9XHJcblxyXG4vLyAvL+abtOaWsOWtkOWfn1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gdXBkYXRlU3ViQ29udGVudFZpZXcoKXtcclxuLy8gICAgIGlmKCFzdWJDb250ZW50VmlldykgcmV0dXJuO1xyXG5cclxuLy8gICAgIHN1YkNvbnRlbnRWaWV3LmdldENvbXBvbmVudChjYy5XWFN1YkNvbnRleHRWaWV3KS51cGRhdGUoKTtcclxuLy8gfVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL0xvY2FsQ29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9SZXNVcmxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2dpblJlc1VybHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL0RlZmluZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVUlDb25maWcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0RhdGFDb25maWcnO1xyXG5leHBvcnQgKiBmcm9tICcuL05ldENvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9jYWxDb250ZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9Db25maWdVdGlscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3RhdGVDb25maWcnO1xyXG5leHBvcnQgKiBmcm9tICcuL09iamVjdENvbmZpZyc7XHJcbiIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi9Mb2NhbENvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENvbmZpZyhjb25maWc6QXJyYXk8YW55PiwgcGFyYW06c3RyaW5nLCB2YWx1ZSl7XHJcbiAgICBpZihudWxsID09IHZhbHVlKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdWYWx1ZSBpcyBudWxsJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKEFycmF5LmlzQXJyYXkoY29uZmlnKSA9PSBmYWxzZSB8fCBjb25maWcubGVuZ3RoID09IDApe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgb3IgZW1wdHkgY29uZmlnIGFycmF5Jyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgdGFyZ2V0OkNvbmZpZy5Db25maWdUeXBlO1xyXG4gICAgY29uZmlnLnNvbWUodj0+e1xyXG4gICAgICAgIGlmKCF2W3BhcmFtXSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01pc3MgYXJyYXkgcGFyYW06ICcsIHBhcmFtKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfWVsc2UgaWYodltwYXJhbV0gPT0gdmFsdWUpe1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB2O1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG4vL+agueaNrmlk5pCc57Si6YWN572uXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDb25maWdCeUlkKGNvbmZpZzpBcnJheTxhbnk+LCB2YWx1ZSl7XHJcbiAgICByZXR1cm4gc2VhcmNoQ29uZmlnKGNvbmZpZywgJ0lkJywgdmFsdWUpO1xyXG59XHJcblxyXG4vL+mFjee9rueahOWGheWtmOe8k+WtmFxyXG5sZXQgY29uZmlnQ2FjaGU6Q29uZmlnLkRpY3Rpb25hcnk8Q29uZmlnLkNvbmZpZ1R5cGVbXT4gPSB7fTtcclxubGV0IGxldmVsQ29uZmlnQ2FjaGU6Q29uZmlnLkRpY3Rpb25hcnk8QXJyYXk8Q29uZmlnLkNvbmZpZ1R5cGU+PiA9IHt9O1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnQnlLZXkoa2V5OnN0cmluZyl7XHJcbiAgICBpZigha2V5KSByZXR1cm47XHJcblxyXG4gICAgaWYobnVsbCA9PSBjb25maWdDYWNoZVtrZXldKXtcclxuICAgICAgICBjb25maWdDYWNoZVtrZXldID0gQ29uZmlnLkRhdGFDb25maWcuZ2V0TG9jYWxDb25maWcoa2V5KTtcclxuICAgICAgICBsZXZlbENvbmZpZ0NhY2hlW2tleV0gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29uZmlnQ2FjaGVba2V5XTtcclxufVxyXG5cclxuLy/pgJrov4dJZOaQnOWvu+mFjee9rlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnQnlJZChrZXk6c3RyaW5nLCBpZDpudW1iZXIpe1xyXG4gICAgcmV0dXJuIHNlYXJjaENvbmZpZ0J5SWQoZ2V0Q29uZmlnQnlLZXkoa2V5KSwgaWQpO1xyXG59XHJcblxyXG4vL+mAmui/h+etiee6p+aQnOWvu1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnQnlMZXZlbChrZXk6c3RyaW5nLCBsZXZlbDpudW1iZXIpe1xyXG4gICAgLy9pZOetieS6jmxldmVsXHJcbiAgICByZXR1cm4gZ2V0Q29uZmlnQnlJZChrZXksIGxldmVsKTtcclxufVxyXG5cclxuLy/pgJrov4fku7vmhI/lrZfmrrXmkJzlr7tcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZ0J5QXJnKGtleTpzdHJpbmcsIGFyZzpzdHJpbmcsIHZhbHVlKXtcclxuICAgIHJldHVybiBzZWFyY2hDb25maWcoZ2V0Q29uZmlnQnlLZXkoa2V5KSwgYXJnLCB2YWx1ZSk7XHJcbn1cclxuXHJcbi8v5oyJ5a2X5q615o6S5YiX6YWN572uXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0Q29uZmlnQnlQYXJhbShzcmM6QXJyYXk8YW55PiwgcGFyYW06c3RyaW5nLCBvdXQ/OkFycmF5PEFycmF5PGFueT4+KXtcclxuICAgIGlmKCFwYXJhbSB8fCBBcnJheS5pc0FycmF5KHNyYykgPT0gZmFsc2Upe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgcGFyYW0gb3Igc291cmNlIGNvbmZpZycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYoQXJyYXkuaXNBcnJheShvdXQpID09IGZhbHNlKXtcclxuICAgICAgICBvdXQgPSBbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3JjLnNvbWUodj0+e1xyXG4gICAgICAgIGlmKG51bGwgPT0gdltwYXJhbV0pe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29uZmlnIG1pc3MgcGFyYW06ICcsIHBhcmFtKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihudWxsID09IG91dFt2W3BhcmFtXV0pe1xyXG4gICAgICAgICAgICBvdXRbdltwYXJhbV1dID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dFt2W3BhcmFtXV0ucHVzaCh2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvdXQ7XHJcbn1cclxuXHJcbi8v6L6T5YWl6YWN572u77yM5oyJ5a2X5q616L+U5Zue5ZCM57G76YWN572u5pWw57uEXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb25maWdCeVBhcmFtKHNyYzpBcnJheTxhbnk+LCBwYXJhbTpzdHJpbmcsIHZhbHVlLCBvdXQ/OkFycmF5PGFueT4pe1xyXG4gICAgaWYoIXBhcmFtIHx8IEFycmF5LmlzQXJyYXkoc3JjKSA9PSBmYWxzZSl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBwYXJhbSBvciBzb3VyY2UgY29uZmlnJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKEFycmF5LmlzQXJyYXkob3V0KSA9PSBmYWxzZSl7XHJcbiAgICAgICAgb3V0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3JjLnNvbWUodj0+e1xyXG4gICAgICAgIGlmKG51bGwgPT0gdltwYXJhbV0pe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29uZmlnIG1pc3MgcGFyYW06ICcsIHBhcmFtKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih2W3BhcmFtXSA9PSB2YWx1ZSl7XHJcbiAgICAgICAgICAgIG91dC5wdXNoKHYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvdXQ7XHJcbn1cclxuXHJcbi8v6L6T5YWl6YWN572ua2V577yM5oyJ5a2X5q616L+U5Zue5ZCM57G76YWN572u5pWw57uEXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb25maWcoa2V5OnN0cmluZywgcGFyYW06c3RyaW5nLCB2YWx1ZSwgb3V0PzpBcnJheTxhbnk+KXtcclxuICAgIHJldHVybiBmaWx0ZXJDb25maWdCeVBhcmFtKGdldENvbmZpZ0J5S2V5KGtleSksIHBhcmFtLCB2YWx1ZSwgb3V0KTtcclxufVxyXG5cclxuLy/ojrflj5bpgZPlhbfphY3nva5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1Db25maWcoaWQ6bnVtYmVyKXtcclxuICAgIHJldHVybiBnZXRDb25maWdCeUlkKENvbmZpZy5MT0NBTENPTkZJR19LRVkuSVRFTSwgaWQpIGFzIENvbmZpZy5JdGVtQ29uZmlnVHlwZTtcclxufSIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi9Mb2NhbENvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKc29uSG90e1xyXG4gICAgaWQ6bnVtYmVyO1xyXG4gICAgVHlwZTpzdHJpbmc7XHJcbiAgICBVcmw6c3RyaW5nO1xyXG59XHJcblxyXG4vL+acrOWcsOmFjee9ruWtmOWCqOWJjee8gFxyXG5jb25zdCBQUkVGSVhfTE9DQUxDT05GSUdfS0VZID0gXCJjb25maWdsb2NhbF9wcmVmaXhcIjtcclxuXHJcbi8v5a+55bqU5ZCO56uv55qE6KGo5qC8dGFibGVJZFxyXG5sZXQgdGFibGVJZE51bSA9IDE7XHJcbmV4cG9ydCBjb25zdCBMT0NBTENPTkZJR19LRVkgPSB7XHJcbiAgICAvL+S/ruS4uumYtuautVxyXG4gICAgQ1VMVElWQVRJT05fUEVSSU9EOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/pu5jorqTlgLxcclxuICAgIERFRkFVTFRfQ09ORklHOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/mtJ7lupzpo5/nialcclxuICAgIEFET0JFX0ZPT0Q6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+a0nuW6nOmZqOmTgVxyXG4gICAgQURPQkVfSVJPTjogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5rSe5bqc54G155+zXHJcbiAgICBBRE9CRV9TVE9ORTogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5rSe5bqc6buY6K6k6YWN572uXHJcbiAgICBBRE9CRV9ERUZBVUxUOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/mtJ7lupzmnKjmnZBcclxuICAgIEFET0JFX1dPT0Q6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+a0nuW6nOeBteaxoFxyXG4gICAgQURPQkVfUE9PTDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v54G15rGg6buY6K6k5YC8XHJcbiAgICBBRE9CRV9QT09MX0RFRkFVTFQ6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mjjuawtOWcn1xyXG4gICAgQURPQkVfUE9PTF9TT0lMOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/po47msLTmnKhcclxuICAgIEFET0JFX1BPT0xfV09PRDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6aOO5rC05rC0XHJcbiAgICBBRE9CRV9QT09MX1dBVEVSOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/po47msLTngatcclxuICAgIEFET0JFX1BPT0xfRklSRTogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6aOO5rC06YeRXHJcbiAgICBBRE9CRV9QT09MX0dPTEQ6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+maj+acuuivreWPpVxyXG4gICAgUkFORE9NX1dPUkRTOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/pl6jmtL5cclxuICAgIFNFQ1RTOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/pl6jmtL7kurrnialcclxuICAgIFNFQ1RFUlM6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vuWTgemYtlxyXG4gICAgU0VDVF9HUkFERTogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+5oqA6IO9XHJcbiAgICBTRUNUX0tGOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/pl6jmtL7mioDog73ljYfnuqdcclxuICAgIFNFQ1RfS0ZfVVBHUkFERTogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+5oqA6IO95Y2H57qn5oC76YePXHJcbiAgICBTRUNUX0tGX0FERF9OVU06IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vuS7u+WKoVxyXG4gICAgU0VDVF9UQVNLOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/pl6jmtL7kv67ngrzloZRcclxuICAgIFNFQ1RfVFJBSU5fVE9XRVI6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vum7mOiupOWAvFxyXG4gICAgU0VDVF9ERUZBVUxUOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/kuabnsY3mioDog71cclxuICAgIEJPT0tfU0tJTEw6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+WCqOeJqeiii+WNh+e6p+a2iOiAl1xyXG4gICAgQkFHX1VQX0NPU1Q6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+eJqeWTgVxyXG4gICAgSVRFTTogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6KOF5aSHXHJcbiAgICBFUVVJUE1FTlQ6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vuaLm+W8j1xyXG4gICAgU0VDVF9aSEFPU0hJOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/miJjmlpflpZblirFcclxuICAgIEJBVFRMRV9BV0FSRFM6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+acuuWZqOS6ulxyXG4gICAgQkFUVExFX0FJOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/plYflppbloZTlsYLnuqdcclxuICAgIE1PTlNURVJfVE9XRVI6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhQ29uZmlne1xyXG4gICAgcHVibGljIGNvdW50TnVtID0wOyAvL+mFjee9ruiuoeaVsFxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIElzQ29uZmlnTG9hZGVkID0gZmFsc2U7ICAgLy/mmK/lkKblt7LliqDovb3phY3nva5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgSlNPTkhPVF9VUkwgID0gJ3Jlcy9jb25maWcvSnNvbkhvdC5qc29uJztcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIFNZTlRIRVNJU19VUkwgID0gJ3Jlcy9jb25maWcvU3ludGhlc2lzLmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBMRVZFTFVQX1VSTCAgPSAncmVzL2NvbmZpZy9MZXZlbFVwLmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBLT05HRlVfVVJMICA9ICdyZXMvY29uZmlnL0tvbmdGdS5qc29uJztcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgS09OR0ZVX0FUVFJJQlVURV9VUkwgID0gJ3Jlcy9jb25maWcvS29uZ0Z1QXR0cmlidXRlLmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBXRUFQT05fVFlQRV9VUkwgID0gJ3Jlcy9jb25maWcvV2VhcG9uVHlwZS5qc29uJztcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgWU9LRV9VUkwgID0gJ3Jlcy9jb25maWcvWW9rZS5qc29uJztcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgU0VDVF9VUkwgID0gJ3Jlcy9jb25maWcvU2VjdC5qc29uJztcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgSEVST19VUkwgID0gJ3Jlcy9jb25maWcvSGVyby5qc29uJztcclxuXHJcbiAgICAvL+mFjee9rmlk77yM6aG75LiOcmVzL0NvbmZpZy9Kc29uSG90LlR5cGXnm7jlkIxcclxuICAgIHB1YmxpYyBzdGF0aWMgQ1VMVElWQVRJT05fS0VZID0gXCJDdWx0aXZhdGlvblwiO1xyXG4gICAgLy/lr7nlupTlkI7nq6/nmoTooajmoLx0YWJsZUlkXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9DVUxUSVZBVElPTl9QRVJJT0QgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMTsgIC8v5L+u5Li66Zi25q61XHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9GT09EID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDM7ICAvL+a0nuW6nOmjn+eJqVxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfSVJPTiA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyA0OyAgLy/mtJ7lupzpmajpk4FcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX1NUT05FID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDU7ICAvL+a0nuW6nOeBteefs1xyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfV09PRCA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyA3OyAgLy/mtJ7lupzmnKjmnZBcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX0RFRkFVTFQgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgNjsgIC8v5rSe5bqc6buY6K6k6YWN572uXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9QT09MID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDg7ICAvL+a0nuW6nOeBteaxoFxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfUE9PTF9ERUZBVUxUID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDk7ICAvL+eBteaxoOm7mOiupOWAvFxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfUE9PTF9TT0lMID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDEwOyAgLy/po47msLTlnJ9cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX1BPT0xfV09PRCA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyAxMTsgIC8v6aOO5rC05pyoXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9QT09MX1dBVEVSID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDEyOyAgLy/po47msLTmsLRcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX1BPT0xfRklSRSA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyAxMzsgIC8v6aOO5rC054GrXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9QT09MX0dPTEQgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMTQ7ICAvL+mjjuawtOmHkVxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfUkFORE9NX1dPUkRTID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDE1OyAgLy/pmo/mnLror63lj6VcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNZTlRIRVNJU19LRVkgPSBcInN5bnRoZXNpc1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBMRVZFTFVQX0tFWSA9IFwibGV2ZWxVcFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBLT05HRlVfS0VZID0gXCJrb25nRnVcIlxyXG4gICAgcHVibGljIHN0YXRpYyBLT05HRlVfQVRUUklCVVRFX0tFWSA9XCJrb25nRnVBdHRyaWJ1dGVcIlxyXG4gICAgcHVibGljIHN0YXRpYyBXRUFQT05fVFlQRV9LRVkgPVwid2VhcG9uX1R5cGVcIlxyXG4gICAgcHVibGljIHN0YXRpYyBZT0tFX0tFWSA9IFwieW9rZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTRUNUX0tFWSA9IFwic2VjdFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBIZXJvX0tFWSA9IFwiSGVyb1wiO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSlNPTl9DT05GSUdTID0gXCJqc29uX2NvbmZpZ3NcIjtcclxuXHJcbiAgICAvL+acgOWkp+eUn+WRveWAvFxyXG4gICAgc3RhdGljIHJlYWRvbmx5IE1BWF9IRUFMVEggPSAxMDA7XHJcbiAgICAvL+WIneWni+mHkeW4gVxyXG4gICAgc3RhdGljIHJlYWRvbmx5IElOSVRfR09MRCA9IDU7XHJcbiAgICAvL+WbnuWQiOi0reS5sENEXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgUk9VTkRfQ0QgPSAxNTtcclxuICAgIC8v5LiK6Zi15pWw55uuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgVFJPT1BfTlVNID0gOTtcclxuICAgIC8v6IOM5YyF5pWw55uuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQkFHX1RPVEFMID0gODtcclxuXHJcbiAgICAvL+mAieaLqea0vuWIq1xyXG4gICAgc3RhdGljIEhlcm9TZWN0ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2UgOiBEYXRhQ29uZmlnO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSA6IERhdGFDb25maWcge1xyXG4gICAgICAgIGlmKHRoaXMuX2luc3RhbmNlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBEYXRhQ29uZmlnKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpIDogRGF0YUNvbmZpZyB7XHJcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IERhdGFDb25maWcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldENvbmZpZ0J5TmFtZShrZXk6c3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXRDb25maWdCeU5hbWUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldENvbmZpZ0J5SWQoa2V5OnN0cmluZywgaWQ6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXRDb25maWdCeUlkKGtleSwgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VhcmNoQ29uZmlnKGNvbmZpZzpBcnJheTxhbnk+LCBwYXJhbTpzdHJpbmcsIHZhbHVlKXtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gQ29tbW9uLnNlYXJjaEFycmF5KGNvbmZpZywgcGFyYW0sIHZhbHVlKTtcclxuICAgICAgICBpZighdGFyZ2V0KXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign5om+5LiN5Yiw6YWN572u77yaJywgcGFyYW0sIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNlYXJjaENvbmZpZ0J5SWQoY29uZmlnOkFycmF5PGFueT4sIGlkOm51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoQ29uZmlnKGNvbmZpZywgJ0lkJywgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TG9jYWxDb25maWdCeUlkKGtleTpzdHJpbmcsIGlkOm51bWJlcil7XHJcbiAgICAgICAgbGV0IGNvbmZpZzpBcnJheTxhbnk+ID0gdGhpcy5nZXRMb2NhbENvbmZpZyhrZXkpO1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hDb25maWdCeUlkKGNvbmZpZywgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25maWdEYXRhOntba2V5OnN0cmluZ106QXJyYXk8YW55Pn0gPSB7fTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgbG9hZENvbmZpZyh1cmw6c3RyaW5nLCBrZXk6c3RyaW5nLCBjYj86RnVuY3Rpb24pIDogdm9pZCB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIubG9hZCh1cmwsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgY29uZmlnPT57XHJcbiAgICAgICAgICAgIGNvbmZpZyA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZyk7XHJcbiAgICAgICAgICAgIHZhciBjb25maWdKc29uID0gSlNPTi5wYXJzZShjb25maWcpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ0RhdGFba2V5XSA9IGNvbmZpZ0pzb247XHJcbiAgICAgICAgICAgIHRoaXMuY291bnROdW0rKztcclxuXHJcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0Q29uZmlnKGNiPzpGdW5jdGlvbikgOiB2b2lkIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5sb2FkKERhdGFDb25maWcuSlNPTkhPVF9VUkwsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgY29uZmlnPT57XHJcbiAgICAgICAgICAgIGNvbmZpZyA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZyk7XHJcbiAgICAgICAgICAgIGxldCBob3RKc29uczpKc29uSG90W10gPSBKU09OLnBhcnNlKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoaG90SnNvbnMpKXtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IGhvdEpzb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGhvdEpzb25zLmZvckVhY2goKGNmZywgaWR4KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlkeCA+PSB0b3RhbCAtIDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb25maWcoY2ZnLlVybCwgY2ZnLlR5cGUsIGNiKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29uZmlnKGNmZy5VcmwsIGNmZy5UeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+acrOWcsOe8k+WtmFxyXG4gICAgcHVibGljIHN0b3JlQ29uZmlnKGtleTpzdHJpbmcgfCBudW1iZXIsIGRhdGEpe1xyXG4gICAgICAgIC8vIGlmKHR5cGVvZihkYXRhKSA9PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgLy8gICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBDb21tb24uc2F2ZUxvY2FsSnNvbihrZXksIGRhdGEpO1xyXG5cclxuICAgICAgICAvL+WQjuerr+WPkeadpWpzb27lrZfnrKbkuLJcclxuICAgICAgICBDb21tb24uc2F2ZUxvY2FsU3RvcmFnZShQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsga2V5LCBkYXRhKTtcclxuICAgICAgICB0aGlzLmNvdW50TnVtKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVBbGxDb25maWcoZGF0YSl7XHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbEpzb24oQ29uZmlnLkRhdGFDb25maWcuSlNPTl9DT05GSUdTLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUNvbmZpZ1ZlcnNpb24oZGF0YTpDb25maWcuQ29uZmlnRGF0YVBhcmFtW10pe1xyXG4gICAgICAgIC8v5b+F6aG75piv5pWw57uEXHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSA9PSBmYWxzZSB8fCBkYXRhLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0b0xvY2FsID0gbmV3IEFycmF5PENvbmZpZy5Db25maWdEYXRhUGFyYW0+KCk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKHY9PntcclxuICAgICAgICAgICAgdG9Mb2NhbC5wdXNoKG5ldyBDb25maWcuQ29uZmlnRGF0YVBhcmFtKHYuVGFibGVJZCwgdi5WZXJzaW9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbEpzb24oQ29uZmlnLkRhdGFDb25maWcuSlNPTl9DT05GSUdTLCB0b0xvY2FsKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TG9jYWxDb25maWcoa2V5OnN0cmluZyl7XHJcbiAgICAgICAgaWYoIWtleSl7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGNvbmZpZyBrZXk6ICcsIGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb25maWcgPSBDb21tb24uZ2V0TG9jYWxTdG9yYWdlKGtleSk7XHJcbiAgICAgICAgaWYoIWNvbmZpZyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+mFjee9ruS4uuepuu+8micsIGtleSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXR1cm4gQ29tbW9uLmdldExvY2FsSnNvbihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWdWZXJzaW9uKGNvbmZpZzpDb25maWcuQ29uZmlnRGF0YVBhcmFtKXtcclxuICAgICAgICByZXR1cm4gY29uZmlnICYmIGNvbmZpZy5WZXJzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWdWZXJzaW9uQnlLZXkoa2V5OnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnVmVyc2lvbih0aGlzLmdldExvY2FsQ29uZmlnKGtleSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5pys5Zyw5omA5pyJ6YWN572uXHJcbiAgICBzdGF0aWMgZ2V0IGxvY2FsQ29uZmlncygpOkNvbmZpZy5Db25maWdEYXRhUGFyYW1bXXtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLmdldExvY2FsSnNvbihEYXRhQ29uZmlnLkpTT05fQ09ORklHUykgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbmZpZ0J5TmFtZShrZXk6c3RyaW5nKSA6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnRGF0YVtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb25maWdCeUlkKGtleTpzdHJpbmcsaWQ6bnVtYmVyKSA6IGFueSB7XHJcbiAgICAgICAgaWYodGhpcy5jb25maWdEYXRhW2tleV0pIHtcclxuICAgICAgICAgICAgdmFyIGNvbmZpZ3MgPSB0aGlzLmNvbmZpZ0RhdGFba2V5XTtcclxuICAgICAgICAgICAgZm9yKHZhciBpOm51bWJlciA9IDA7IGkgPCBjb25maWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihjb25maWdzW2ldWydpZCddID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3NbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbmZpZ3NCeVR5cGUoa2V5OnN0cmluZywgdHlwZTpudW1iZXIpIDogYW55IHtcclxuICAgICAgICBpZih0aGlzLmNvbmZpZ0RhdGFba2V5XSkge1xyXG4gICAgICAgICAgICB2YXIgY29uZmlncyA9IHRoaXMuY29uZmlnRGF0YVtrZXldO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0OkFycmF5PGFueT4gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpOm51bWJlciA9IDA7IGkgPCBjb25maWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihjb25maWdzW2ldWyd0eXBlJ10gPT0gdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbmZpZ3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUNvbmZpZ0RhdGEge1xyXG4gICAgc3RhdGljIENPTkZJR19LRVk6c3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBjb25maWc6QXJyYXk8YW55PjtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IENvbmZpZygpe1xyXG4gICAgICAgIGlmKCF0aGlzLmNvbmZpZyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gRGF0YUNvbmZpZy5nZXRMb2NhbENvbmZpZyh0aGlzLkNPTkZJR19LRVkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWdCeUlkKGlkOm51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIERhdGFDb25maWcuc2VhcmNoQ29uZmlnQnlJZCh0aGlzLkNvbmZpZywgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWdCeUxldmVsKGxldmVsOm51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIENvbW1vbi5zZWFyY2hBcnJheSh0aGlzLkNvbmZpZywgJ0xldmVsJywgbGV2ZWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLemFjee9ruWtl+autS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy/mqKHmnb/phY3nva5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgTmFtZTpzdHJpbmc7XHJcbiAgICBMZXZlbDpudW1iZXI7XHJcbiAgICBUeXBlOm51bWJlcjtcclxuICAgIFBpYzpzdHJpbmc7IFxyXG59XHJcblxyXG4vL+S/ruS4uumFjee9rlxyXG5leHBvcnQgY2xhc3MgQ3VsdGl2YXRpb25QZXJpb2QgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIFhpdXdlaU5hbWU6c3RyaW5nOyAgLy/kv67kuLrnuqfliKvlkI3np7BcclxuICAgIENvc3Q6bnVtYmVyOyAgICAvL+WNh+e6p+a2iOiAl+S/ruS4ulxyXG4gICAgU3VjY2VzczpudW1iZXI7IC8v5rih5Yqr5oiQ5Yqf546HXHJcbiAgICBBZGRFZmZpY2llbmN5Om51bWJlcjtcclxuICAgIEZhaWxSZXR1cm46bnVtYmVyO1xyXG59XHJcblxyXG4vL+a0nuW6nOi1hOa6kFxyXG5leHBvcnQgaW50ZXJmYWNlIEFkb2JlUmVzIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBMZXZlbDpudW1iZXI7ICBcclxuICAgIFBpYzpzdHJpbmc7IFxyXG4gICAgU3RvcmFnZUxpbWl0Om51bWJlcjtcclxuICAgIFNlcnZhbnRMaW1pdDpudW1iZXI7XHJcbiAgICBTZXJ2YW50UHJvZHVjdDpudW1iZXI7ICAvL+S6p+mHj++8iDHkuKrku5nku4bvvIlcclxuICAgIFNlcnZhbnRDb3N0Om51bWJlcjsgLy/mtojogJfvvIgx5Liq5LuZ5LuG77yJXHJcbiAgICBXb29kQ29zdDpudW1iZXI7ICAgIC8v5Y2H57qn5raI6ICX5pyo5p2QXHJcbn1cclxuXHJcbi8v54G15rGgXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRvYmVQb29sIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBMZXZlbDpudW1iZXI7ICBcclxuICAgIFBpYzpzdHJpbmc7IFxyXG4gICAgU3RvcmFnZUxpbWl0Om51bWJlcjtcclxuICAgIFJlaWtpUHJvZHVjdDpudW1iZXI7XHJcbiAgICBVcENvc3RXb29kOm51bWJlcjsgIC8v5Y2H57qn5raI6ICX5pyo5p2QXHJcbiAgICBVcENvc3RJcm9uOm51bWJlcjsgLy/ljYfnuqfmtojogJfpmajpk4FcclxuICAgIFVwQ29zdFN0b25lOm51bWJlcjsgICAgLy/ljYfnuqfmtojogJfngbXnn7NcclxufVxyXG5cclxuLy/po47msLRcclxuZXhwb3J0IGludGVyZmFjZSBGZW5nc2h1aUNvbmZpZ1R5cGUgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIExldmVsOm51bWJlcjsgIFxyXG4gICAgTGV2ZWxOYW1lOnN0cmluZztcclxuICAgIFBpYzpzdHJpbmc7IFxyXG4gICAgR29uZ2ZhQWRkOm51bWJlcjtcclxuICAgIFVwQ29zdFJlaWtpOm51bWJlcjtcclxufVxyXG5cclxuLy/pmo/mnLror63lj6VcclxuZXhwb3J0IGludGVyZmFjZSBSYW5kb21Xb29kcyBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgVHlwZTpudW1iZXI7ICBcclxuICAgIENvbnRlbnQ6c3RyaW5nO1xyXG59XHJcblxyXG4vL+mXqOa0vlxyXG5leHBvcnQgaW50ZXJmYWNlIFNlY3RzIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBOYW1lOnN0cmluZztcclxuICAgIFN0YWdlSWQ6bnVtYmVyO1xyXG4gICAgTGVhZGVySWQ6bnVtYmVyO1xyXG4gICAgRWxkZXJJZDpudW1iZXI7XHJcbiAgICBGb2xsb3dlck9uZTpudW1iZXI7XHJcbiAgICBGb2xsb3dlclR3bzpudW1iZXI7XHJcbiAgICBGb2xsb3dlclRocmVlOm51bWJlcjtcclxuICAgIFhpdXdlaUlkOm51bWJlcjtcclxuICAgIFF1YWxpZmljYXRpb246bnVtYmVyO1xyXG4gICAgRGVzYzpzdHJpbmc7XHJcbn1cclxuXHJcbi8v6Zeo5rS+5Lq654mpXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGVycyBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgTmFtZTpzdHJpbmc7XHJcbiAgICBBdmF0YXI6c3RyaW5nO1xyXG4gICAgU3RhZ2U6c3RyaW5nO1xyXG4gICAgRGVzYzpzdHJpbmc7XHJcbn1cclxuXHJcbi8v6Zeo5rS+5oqA6IO95Y2H57qnXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdEtGVXBncmFkZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgLy8gVHlwZTpudW1iZXI7XHJcbiAgICAvLyBMb3dMZXZlbDpudW1iZXI7XHJcbiAgICAvLyBVcExldmVsOm51bWJlcjtcclxuICAgIENvc3Q6bnVtYmVyO1xyXG59XHJcblxyXG4vL+mXqOa0vuWTgemYtlxyXG5leHBvcnQgaW50ZXJmYWNlIFNlY3RHcmFkZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgTmFtZTpzdHJpbmc7XHJcbiAgICBMb3dTdGFnZTpudW1iZXI7XHJcbn1cclxuXHJcbi8v6Zeo5rS+5oqA6IO9XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdEtGIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBOYW1lOnN0cmluZzsgLy/pl6jmtL7lip/ms5XlkI3np7BcclxuICAgIEFkZFR5cGU6bnVtYmVyOyAvL+WinuWKoOWxnuaAp+exu+Weiygx54G15YqbMuaguemqqDPkvZPprYQ06Lqr5rOVKVxyXG4gICAgR3JvdXBJZDpudW1iZXI7IC8v6Zeo5rS+SURcclxuICAgIFN0YWdlTGV2ZWw6bnVtYmVyOyAvL+mXqOa0vuaKgOiDveWTgemYtlxyXG4gICAgU3RhZ2VOYW1lOnN0cmluZzsgLy/pl6jmtL7mioDog73lk4HpmLblkI3np7BcclxuICAgIEZlbmdzaHVpVHlwZTpudW1iZXI7IC8v6Zeo5rS+5oqA6IO96aOO5rC057G75Z6LXHJcbiAgICBGZW5nc2h1aU5hbWU6c3RyaW5nOyAvL+mXqOa0vuaKgOiDvemjjuawtOWQjeensFxyXG4gICAgQ29zdDpudW1iZXI7IC8v5a2m5Lmg5raI6ICX6Zeo5rS+6LSh54yu5YC8XHJcbn1cclxuXHJcbi8v6Zeo5rS+5oqA6IO95oC76YeP5Y2H57qnXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdEtGQWRkTnVtIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBDb3N0Om51bWJlcjtcclxufVxyXG5cclxuLy/pl6jmtL7ku7vliqFcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0VGFzayBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG5cdFN0YWdlOm51bWJlciAvL+S7u+WKoeWTgemYtlxyXG5cdENvbXBsZXRlVGltZTpudW1iZXIgLy/lrozmiJDogJfml7ZzXHJcblx0UmV3YXJkR29uZ3hpYW46bnVtYmVyIC8v5aWW5Yqx6LSh54yu5YC8XHJcblx0UmV3YXJkU3RvbmU6bnVtYmVyIC8v5aWW5Yqx54G155+z5pWw6YePXHJcblx0UmV3YXJkV2Vpd2FuZzpudW1iZXIgLy/lpZblirHlqIHmnJvlgLxcclxuXHREZXNjOnN0cmluZyAvL+mXqOa0vuS7i+e7jVxyXG59XHJcblxyXG4vL+S/rueCvOWhlFxyXG5leHBvcnQgaW50ZXJmYWNlIFNlY3RUcmFpblRvd2VyIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcblx0Tm9ybWFsQ29zdCAgOm51bWJlciAvL+aZrumAmuS/rueCvOa2iOiAl+eBteefs1xyXG5cdE5vcm1hbFRpbWUgIDpudW1iZXIgLy/mma7pgJrkv67ngrzml7bplb8o56eSKVxyXG5cdE5vcm1hbFVwICAgIDpudW1iZXIgLy/mma7pgJrkv67ngrzmj5DljYflgI3mlbBcclxuXHROb3JtYWxUaW1lcyA6bnVtYmVyIC8v5pmu6YCa5L+u54K85q+P5aSp5qyh5pWwXHJcblx0TGVhZGVyQ29zdCAgOm51bWJlciAvL+aOjOmXqOS8oOWKn+a2iOiAl+eBteefs1xyXG5cdExlYWRlclRpbWUgIDpudW1iZXIgLy/mjozpl6jkvKDlip/ml7bplb8o56eSKVxyXG5cdExlYWRlclVwICAgIDpudW1iZXIgLy/mjozpl6jkvKDlip/mj5DljYflgI3mlbBcclxuXHRMZWFkZXJUaW1lcyA6bnVtYmVyIC8v5o6M6Zeo5Lyg5Yqf5q+P5aSp5qyh5pWwXHJcbn1cclxuXHJcbi8v6Zeo5rS+6buY6K6kXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdERlZmF1bHQgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuXHRXZWl3YW5nQ29zdCA6bnVtYmVyIC8v6YCA5Ye66Zeo5rS+5omj6Zmk5aiB5pybXHJcblx0R3JvdXBHb25neGlhbkNvc3QgOm51bWJlciAvL+mAgOWHuumXqOa0vuaJo+mZpOmXqOa0vui0oeeMruWAvFxyXG59XHJcblxyXG4vL+WCqOeJqeiii+WNh+e6p+a2iOiAl1xyXG5leHBvcnQgaW50ZXJmYWNlIEJhZ1VwQ29zdCBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG5cdFN0b25lTnVtIDpudW1iZXIgLy/mt7vliqDmoLzlrZDmtojogJfngbXnn7PnmoTmlbDph49cclxuXHRHb29kSWQgOm51bWJlciAvL+a3u+WKoOagvOWtkOa2iOiAl+eJqeWTgUlEXHJcblx0R29vZE51bSA6bnVtYmVyIC8v5re75Yqg5qC85a2Q5raI6ICX54mp5ZOB5pWw6YePXHJcbn1cclxuXHJcbi8v6YGT5YW3XHJcbmV4cG9ydCBpbnRlcmZhY2UgSXRlbUNvbmZpZ1R5cGUgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuXHRQaWM6c3RyaW5nOyAgICAgIC8v54mp5ZOB5Zu+54mHXHJcblx0RGVzYzpzdHJpbmc7ICAgICAvL+eJqeWTgeaPj+i/sFxyXG5cdFF1YWxpdHk6bnVtYmVyOyAvL+eJqeWTgeWTgei0qFxyXG5cdFN0b3JhZ2VMaW1pdCAgICAgICA6bnVtYmVyOyAvL+iDjOWMheacgOWkp+WPoOWKoOaVsOmHj1xyXG5cdFNlbGxQcmljZSAgICAgICAgICA6bnVtYmVyOyAvL+WHuuWUruS7t+agvFxyXG5cdENhblVzZSA6bnVtYmVyOyAvL+iDveS4jeiDveS9v+eUqFxyXG5cdFVzZVR5cGUgOm51bWJlcjsgLy/nianlk4HnsbvlnosoMeWxnuaAp+a3u+WKoDLmuKHliqvmpoLnjofmt7vliqAz5raI6ICX5ZOBNOaKgOiDveWtpuS5oClcclxuXHRQcm9wZXJ0eUFkZFR5cGUgICAgOm51bWJlcjsgLy/mt7vliqDnmoTlsZ7mgKfnsbvlnosoMeeBteefszLpo5/niakz5pyo5p2QNOmTgeefvzXku5nnjok26Zeo5rS+6LSh54yu5YC8N+Wogeacm+WAvDjmraPkuYnlgLw56YKq5oG25YC8MTDkv67kuLrlgLwxMeS/ruecn+W5tOm+hDEy6YGT6KGMMTPngbXlipsxNOaguemqqDE15L2T6a2EMTbouqvms5UxN+aCn+aApzE456aP57yYMTnotYTotKgyMOS6uuaXj+S8pOWuszIx5aaW5peP5Lyk5a6zMjLku5nml4/kvKTlrrMyM+msvOaXj+S8pOWuszI06a2U5peP5Lyk5a6zMjXpvpnml4/kvKTlrrMpXHJcblx0UHJvcGVydHlBZGRWYWx1ZSAgIDpudW1iZXI7IC8v5bGe5oCn5re75Yqg5YC8XHJcblx0RHVqaWVBZGRYaXV3ZWlMaW1pdDpudW1iZXI7IC8v5rih5Yqr5re75Yqg5qaC546H5L+u5Li66Zi25q616ZmQ5Yi2XHJcblx0RHVqaWVBZGRWYWx1ZSAgICAgIDpudW1iZXI7IC8v5rih5Yqr5qaC546H5re75Yqg5YC8XHJcblx0Qm9va1NraWxsSWQgICAgICAgIDpudW1iZXI7IC8v5a2m5Lmg55qE5Lmm5pys5oqA6IO9SURcclxufVxyXG5cclxuLy/oo4XlpIdcclxuZXhwb3J0IGludGVyZmFjZSBFcXVpcENvbmZpZ1R5cGUgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuXHRUeXBlOm51bWJlcjsgLy/oo4XlpIfnsbvlnovvvJox54G15YmRMuWPkeewqjPooaPmnI006Z205a2QNeaMh+eOrzbnjonkvak35omL6ZWvOOe9l+ebmFxyXG5cdFBpYzpzdHJpbmc7IC8v6KOF5aSH5Zu+54mHXHJcblx0RGVzYzpzdHJpbmc7Ly/oo4XlpIfmj4/ov7BcclxuXHRRdWFsaXR5ICAgICAgOm51bWJlcjsgLy/oo4XlpIflk4HotKhcclxuXHRTdG9yYWdlTGltaXQgOm51bWJlcjsgLy/og4zljIXmnIDlpKflj6DliqDmlbDph49cclxuXHRTZWxsUHJpY2UgICAgOm51bWJlcjsgLy/lh7rllK7ku7fmoLxcclxuXHRDYW5Vc2UgICAgICAgOm51bWJlcjsgLy/og73kuI3og73kvb/nlKhcclxuXHRQcm9wZXJ0eUFkZE9uZVR5cGUgICAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDnsbvlnos6MeeBteefszLpo5/niakz5pyo5p2QNOmTgeefvzXku5nnjok26Zeo5rS+6LSh54yu5YC8N+Wogeacm+WAvDjmraPkuYnlgLw56YKq5oG25YC8MTDkv67kuLrlgLwxMemBk+ihjDEy54G15YqbMTPmoLnpqqgxNOS9k+mthDE16Lqr5rOVMTbmgp/mgKcxN+emj+e8mDE46LWE6LSoMTnkurrml4/kvKTlrrMyMOWmluaXj+S8pOWuszIx5LuZ5peP5Lyk5a6zMjLprLzml4/kvKTlrrMyM+mtlOaXj+S8pOWuszI06b6Z5peP5Lyk5a6zXHJcblx0UHJvcGVydHlBZGRPbmVWYWx1ZSAgIDpudW1iZXI7IC8v5bGe5oCn5re75Yqg5YC8XHJcblx0UHJvcGVydHlBZGRUd29UeXBlICAgIDpudW1iZXI7IC8v5bGe5oCn5re75Yqg57G75Z6LOjHngbXnn7My6aOf54mpM+acqOadkDTpk4Hnn7815LuZ546JNumXqOa0vui0oeeMruWAvDflqIHmnJvlgLw45q2j5LmJ5YC8OemCquaBtuWAvDEw5L+u5Li65YC8MTHpgZPooYwxMueBteWKmzEz5qC56aqoMTTkvZPprYQxNei6q+azlTE25oKf5oCnMTfnpo/nvJgxOOi1hOi0qDE55Lq65peP5Lyk5a6zMjDlppbml4/kvKTlrrMyMeS7meaXj+S8pOWuszIy6ay85peP5Lyk5a6zMjPprZTml4/kvKTlrrMyNOm+meaXj+S8pOWus1xyXG5cdFByb3BlcnR5QWRkVHdvVmFsdWUgICA6bnVtYmVyOyAvL+WxnuaAp+a3u+WKoOWAvFxyXG5cdFByb3BlcnR5QWRkVGhyZWVUeXBlICA6bnVtYmVyOyAvL+WxnuaAp+a3u+WKoOexu+Weizox54G155+zMumjn+eJqTPmnKjmnZA06ZOB55+/NeS7meeOiTbpl6jmtL7otKHnjK7lgLw35aiB5pyb5YC8OOato+S5ieWAvDnpgqrmgbblgLwxMOS/ruS4uuWAvDEx6YGT6KGMMTLngbXlipsxM+aguemqqDE05L2T6a2EMTXouqvms5UxNuaCn+aApzE356aP57yYMTjotYTotKgxOeS6uuaXj+S8pOWuszIw5aaW5peP5Lyk5a6zMjHku5nml4/kvKTlrrMyMumsvOaXj+S8pOWuszIz6a2U5peP5Lyk5a6zMjTpvpnml4/kvKTlrrNcclxuXHRQcm9wZXJ0eUFkZFRocmVlVmFsdWUgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDlgLxcclxuXHRQcm9wZXJ0eUFkZEZvdXJUeXBlICAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDnsbvlnos6MeeBteefszLpo5/niakz5pyo5p2QNOmTgeefvzXku5nnjok26Zeo5rS+6LSh54yu5YC8N+Wogeacm+WAvDjmraPkuYnlgLw56YKq5oG25YC8MTDkv67kuLrlgLwxMemBk+ihjDEy54G15YqbMTPmoLnpqqgxNOS9k+mthDE16Lqr5rOVMTbmgp/mgKcxN+emj+e8mDE46LWE6LSoMTnkurrml4/kvKTlrrMyMOWmluaXj+S8pOWuszIx5LuZ5peP5Lyk5a6zMjLprLzml4/kvKTlrrMyM+mtlOaXj+S8pOWuszI06b6Z5peP5Lyk5a6zXHJcblx0UHJvcGVydHlBZGRGb3VyVmFsdWUgIDpudW1iZXI7IC8v5bGe5oCn5re75Yqg5YC8XHJcbn1cclxuXHJcbi8v5Lmm57GN5oqA6IO9XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2tpbGxDb25maWdUeXBlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcblx0U2tpbGxUeXBlICA6bnVtYmVyOyAvL+aKgOiDveexu+Weiygy56eY57GNM+ecn+ivgDTlv4Pnu4816YGB5pyvNue7neWtpjfmrovpobU45oub5byPKVxyXG5cdEFkZFR5cGUgICAgOm51bWJlcjsgLy/lop7liqDlsZ7mgKfnsbvlnosoMeeBteWKmzLmoLnpqqgz5L2T6a2ENOi6q+azlSlcclxuXHRTdGFnZUxldmVsIDpudW1iZXI7IC8v6Zeo5rS+5oqA6IO95ZOB6Zi2XHJcblx0U3RhZ2VOYW1lIDpzdHJpbmc7ICAvL+mXqOa0vuaKgOiDveWTgemYtuWQjeensFxyXG5cdEZlbmdzaHVpVHlwZSA6bnVtYmVyOyAvL+mXqOa0vuaKgOiDvemjjuawtOexu+Wei1xyXG5cdEZlbmdzaHVpTmFtZSA6c3RyaW5nOyAvL+mXqOa0vuaKgOiDvemjjuawtOWQjeensFxyXG5cdENvc3QgICAgICAgOm51bWJlcjsgLy/lrabkuaDmtojogJfpl6jmtL7otKHnjK7lgLxcclxufVxyXG5cclxuLy/pl6jmtL7mi5vlvI9cclxuZXhwb3J0IGludGVyZmFjZSBTZWN0QmF0dGxlU2tpbGxDZmdUeXBlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBIdXJ0QWRkOm51bWJlcjsgLy/mi5vlvI/kvKTlrrPliqDmiJBcclxufVxyXG5cclxuLy/mnLrlmajkurpcclxuZXhwb3J0IGludGVyZmFjZSBCYXR0bGVBaUNmZ1R5cGUgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIERlc2MgICAgICAgICA6c3RyaW5nOyAvL+eugOS7i1xyXG5cdFJhY2lhbFR5cGUgICA6bnVtYmVyOyAvL+enjeaXj+exu+WeizHkurrml48y5aaW5pePM+S7meaXjzTprLzml4816a2U5pePNum+meaXj1xyXG5cdFhpdXdlaVN0YWdlICA6bnVtYmVyOyAvL+S/ruS4uumYtuautVxyXG5cdExpbmdsaSAgICAgICA6bnVtYmVyOyAvL+eBteWKm1xyXG5cdEdlbmd1ICAgICAgICA6bnVtYmVyOyAvL+aguemqqFxyXG5cdFRpcG8gICAgICAgICA6bnVtYmVyOyAvL+S9k+mthFxyXG5cdFNoZW5mYSAgICAgICA6bnVtYmVyOyAvL+i6q+azlVxyXG5cdEh1cnRBZGQgICAgICA6bnVtYmVyOyAvL+S8pOWus+WKoOWxglxyXG5cdEh1cnRSZWR1Y2UgICA6bnVtYmVyOyAvL+S8pOWus+WHj+WFjVxyXG5cdEdyb3VwU3R5bGVJZCA6bnVtYmVyOyAvL+mXqOa0vuaLm+W8j0lEXHJcblx0SHVydFJlbnp1ICAgIDpudW1iZXI7IC8v5Lq65peP5Lyk5a6zXHJcblx0SHVydFlhb3p1ICAgIDpudW1iZXI7IC8v5aaW5peP5Lyk5a6zXHJcblx0SHVydFhpYW56dSAgIDpudW1iZXI7IC8v5LuZ5peP5Lyk5a6zXHJcblx0SHVydEd1aXp1ICAgIDpudW1iZXI7IC8v6ay85peP5Lyk5a6zXHJcblx0SHVydE1venUgICAgIDpudW1iZXI7IC8v6a2U5peP5Lyk5a6zXHJcblx0SHVydExvbmd6dSAgIDpudW1iZXI7IC8v6b6Z5peP5Lyk5a6zXHJcbn1cclxuXHJcbi8v6ZWH5aaW5aGU5bGC57qnXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9uc3RlclRvd2VyQ2ZnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgRGVzYyAgICAgICAgOnN0cmluZzsgLy/nroDku4tcclxuXHRMb3dTdGFnZSAgICA6bnVtYmVyOyAvL+aMkeaImOeahOacgOS9juS/ruS4ulxyXG5cdFJld2FyZElkICAgIDpudW1iZXI7IC8v5aWW5Yqx6KGoSURcclxuXHRIZWxwT25lSWQgICA6bnVtYmVyOyAvL+WKqeaImOacuuWZqOS6ujFJRFxyXG5cdEhlbHBUd29JZCAgIDpudW1iZXI7IC8v5Yqp5oiY5py65Zmo5Lq6MklEXHJcblx0SGVscFRocmVlSWQgOm51bWJlcjsgLy/liqnmiJjmnLrlmajkurozSURcclxuXHRIZWxwRm91cklkICA6bnVtYmVyOyAvL+WKqeaImOacuuWZqOS6ujRJRFxyXG5cdEhlbHBGaXZlSWQgIDpudW1iZXI7IC8v5Yqp5oiY5py65Zmo5Lq6NUlEXHJcblx0QmF0dGxlT25lSWQgOm51bWJlcjsgLy/lr7nmiJjmnLrlmajkuroxSURcclxuXHRCYXR0bGVUd29JZCA6bnVtYmVyOyAvL+WvueaImOacuuWZqOS6ujJJRFxyXG5cdEJhdHRsZVRocmVlSWQgOm51bWJlcjsgLy/lr7nmiJjmnLrlmajkurozSURcclxuXHRCYXR0bGVGb3VySWQgIDpudW1iZXI7IC8v5a+55oiY5py65Zmo5Lq6NElEXHJcblx0QmF0dGxlRml2ZUlkICA6bnVtYmVyOyAvL+WvueaImOacuuWZqOS6ujVJRFxyXG59XHJcblxyXG4vL+aImOaWl+WlluWKsVxyXG5leHBvcnQgaW50ZXJmYWNlIEJhdHRsZUF3YXJkQ2ZnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG5cdE9uZVR5cGUgICA6bnVtYmVyOyAvL+WlluWKsTHnsbvlnosgMS3nianlk4EyLeijheWkh1xyXG5cdE9uZUlkICAgICA6bnVtYmVyOyAvL+WlluWKsTFJRFxyXG5cdE9uZU51bSAgICA6bnVtYmVyOyAvL+WlluWKsTHmlbDph49cclxuXHRUd29UeXBlICAgOm51bWJlcjsgLy/lpZblirEy57G75Z6LIDEt54mp5ZOBMi3oo4XlpIdcclxuXHRUd29JZCAgICAgOm51bWJlcjsgLy/lpZblirEySURcclxuXHRUd29OdW0gICAgOm51bWJlcjsgLy/lpZblirEy5pWw6YePXHJcblx0VGhyZWVUeXBlIDpudW1iZXI7IC8v5aWW5YqxM+exu+WeiyAxLeeJqeWTgTIt6KOF5aSHXHJcblx0VGhyZWVJZCAgIDpudW1iZXI7IC8v5aWW5YqxM0lEXHJcblx0VGhyZWVOdW0gIDpudW1iZXI7IC8v5aWW5YqxM+aVsOmHj1xyXG5cdEZvdXJUeXBlICA6bnVtYmVyOyAvL+WlluWKsTTnsbvlnosgMS3nianlk4EyLeijheWkh1xyXG5cdEZvdXJJZCAgICA6bnVtYmVyOyAvL+WlluWKsTRJRFxyXG5cdEZvdXJOdW0gICA6bnVtYmVyOyAvL+WlluWKsTTmlbDph49cclxufSIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWN0aW9uYXJ5PFQ+IHtcclxuICAgIFtLZXk6IHN0cmluZ106IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudENsYXNzIHtcclxuICAgIEtleTpzdHJpbmc7XHJcbiAgICBMaXN0ZW5lcjpGdW5jdGlvbjtcclxuICAgIFRhcmdldDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6c3RyaW5nLCBsaXN0ZW5lcjpGdW5jdGlvbiwgdGFyZ2V0Pyl7XHJcbiAgICAgICAgdGhpcy5LZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5MaXN0ZW5lciA9IGxpc3RlbmVyO1xyXG4gICAgICAgIHRoaXMuVGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdGVuZXJDbGFzcyB7XHJcbiAgICBMaXN0ZW5lcnMgPSBuZXcgQXJyYXk8RnVuY3Rpb24+KCk7XHJcbiAgICBUYXJnZXRzID0gbmV3IEFycmF5PENvbW1vbi5FdmVudERpc3BhdGhlcj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyOkZ1bmN0aW9uLCB0YXJnZXQ/KXtcclxuICAgICAgICB0aGlzLkxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgICAgICB0aGlzLlRhcmdldHMucHVzaCh0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVyKGxpc2VuZXI6RnVuY3Rpb24pe1xyXG4gICAgICAgIGxldCBpZHggPSB0aGlzLkxpc3RlbmVycy5pbmRleE9mKGxpc2VuZXIpO1xyXG4gICAgICAgIGlmKGlkeCA+PSAwKXtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuTGlzdGVuZXJzW2lkeF07XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLlRhcmdldHNbaWR4XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnREaXNwYXRoZXJJbnRlcmZhY2V7XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKGtleSwgbGlzZW5lcjpGdW5jdGlvbik7XHJcbiAgICBkaXNwYXRjaEV2ZW50KGtleSk7XHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbn1cclxuXHJcbi8v54mI5pys5o6n5Yi2XHJcbmV4cG9ydCBlbnVtIFZlcnNpb25Db25maWcge1xyXG4gICAgLy/lvIDlj5HniYjmnKxcclxuICAgIERldmVsb3AgPSAwLFxyXG4gICAgLy/lr7nlpJbniYjmnKxcclxuICAgIFJlbGVhc2UgPSAxLFxyXG59XHJcblxyXG4vL+axoOexu+Wei1xyXG5leHBvcnQgY29uc3QgUG9vbFR5cGUgPSB7XHJcbiAgICAvL+iuoeaXtuWZqFxyXG4gICAgVGltZXI6ICdUaW1lcicsXHJcbiAgICAvL+eOqeWutuWktOmDqFxyXG4gICAgSGVhZE1vZGVsOiAnSGVhZE1vZGVsJyxcclxuICAgIC8v546p5a626Lqr5L2TXHJcbiAgICBCb2R5TW9kZWw6ICdCb2R5TW9kZWwnLFxyXG4gICAgLy/lvLnluZVcclxuICAgIFBhc3NieVR4dDogJ1Bhc3NieVR4dCcsXHJcbiAgICAvL2ZhaXJ5Z3Vp5a+56LGhXHJcbiAgICBGZ3VpT2JqOiAnRmd1aU9iaicsXHJcbiAgICBIYW5kOiAnSGFuZCcsXHJcbiAgICBEZXNrOiAnRGVzaycsXHJcbn1cclxuXHJcbi8v5rGg54mp5ZOB57G75Z6LXHJcbmV4cG9ydCBjb25zdCBQb29sSXRlbUtleSA9IHtcclxuICAgIC8v546p5a626Lqr5L2TXHJcbiAgICBCb2R5U3BpbmU6ICdCb2R5U3BpbmUnLCAgICBcclxuICAgIC8v5o2i6KOF5qih5p2/XHJcbiAgICBEcmVzc1RlbXBsYXRlOiAnRHJlc3NUZW1wbGF0ZScsICAgIFxyXG59XHJcblxyXG4vL+maj+acuuivreWPpeexu+Wei1xyXG5leHBvcnQgY29uc3QgUmFuZFdvcmRUeXBlID0ge1xyXG4gICAgLy/muKHliqtcclxuICAgIEN1bHRpdmF0aW9uOiAxLFxyXG59XHJcblxyXG4vL+W5v+WRiuexu+Wei1xyXG5leHBvcnQgZW51bSBBd2FyZFR5cGUge1xyXG4gICAgTm90ID0gMCxcclxuICAgIEFEID0gMSxcclxuICAgIFNoYXJlID0gMlxyXG59XHJcblxyXG4vL+W5v+WRiuS8mOWFiOe6p+mFjee9rlxyXG5leHBvcnQgZW51bSBBZENvbmZpZ1R5cGUge1xyXG4gICAgLy/mv4DlirHop4bpopHkvJjlhYhcclxuICAgIFZpZGVvID0gMCxcclxuICAgIC8v5YiG5Lqr5LyY5YWIXHJcbiAgICBTaGFyZSA9IDFcclxufVxyXG5cclxuLy/liIbkuqvor63lj6XnsbvlnotcclxuZXhwb3J0IGVudW0gU2hhcmVXb3JkRW51bSB7XHJcbiAgICBDYXJkV29yZHMgPSAxLFxyXG4gICAgSGFtc3RlcldvcmRzID0gMixcclxuICAgIENvaW5Xb3JkcyA9IDMsXHJcbiAgICBPdGhlcldvcmRzID0gNCxcclxufVxyXG5cclxuLy/mqKHlnovmlbDmja7lrprkuYlcclxuZXhwb3J0IGNsYXNzIE1vZGVsRGF0YVN0cnVjdCB7XHJcbiAgICBtc3A6TGF5YS5TcHJpdGUzRDtcclxuICAgIGFuaTpMYXlhLkFuaW1hdG9yO1xyXG4gICAgYW5pU3RhdGU6TGF5YS5BbmltYXRvclBsYXlTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtc3A6TGF5YS5TcHJpdGUzRCwgYW5pOkxheWEuQW5pbWF0b3IsIGFuaVN0YXRlOkxheWEuQW5pbWF0b3JQbGF5U3RhdGUpe1xyXG4gICAgICAgIHRoaXMubXNwID0gbXNwO1xyXG4gICAgICAgIHRoaXMuYW5pID0gYW5pO1xyXG4gICAgICAgIHRoaXMuYW5pU3RhdGUgPSBhbmlTdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLy/lhazlhbHnoa7orqTlvLnnqpfnsbvlnotcclxuZXhwb3J0IGNvbnN0IENvbmZpcm1XaW5kb3dUeXBlID0ge1xyXG4gICAgLy/mloflrZdcclxuICAgIENvbnRlbnQ6IDEsXHJcbiAgICAvL+WlluWKseeJqeWTgVxyXG4gICAgUmV3YXJkOiAyLFxyXG4gICAgLy/mloflrZcr5aWW5YqxXHJcbiAgICBDb250ZW50QW5kUmV3YXJkOiAzLFxyXG59XHJcblxyXG4vL+W8ueWHuueql+WPo+aVsOaNrlxyXG5leHBvcnQgY2xhc3MgUG9wdXBXaW5kb3dEYXRhIHtcclxuICAgIENvbnRlbnQ6c3RyaW5nW107XHJcbiAgICBXaW5kb3dUeXBlOm51bWJlcjtcclxuICAgIFllc0J0bkNvbnRlbnQ6c3RyaW5nO1xyXG4gICAgWWVzQnRuQ2FsbGJhY2s6RnVuY3Rpb247XHJcbiAgICBDYW5jZWxCdG5Db250ZW50OnN0cmluZztcclxuICAgIFJld2FyZERhdGE7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGVudDpzdHJpbmdbXSwgeWVzQnRuQ2FsbGJhY2s/OkZ1bmN0aW9uLCB3aW5kb3dUeXBlPzpudW1iZXIsIHJld2FyZERhdGE/LCBidG5ZZXNUeHQ/OnN0cmluZywgYnRuQ2FuY2VsVHh0PzpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuQ29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5ZZXNCdG5DYWxsYmFjayA9IHllc0J0bkNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuWWVzQnRuQ29udGVudCA9IGJ0blllc1R4dD8gYnRuWWVzVHh0OiAn56Gu5a6aJztcclxuICAgICAgICB0aGlzLkNhbmNlbEJ0bkNvbnRlbnQgPSBidG5DYW5jZWxUeHQ/IGJ0bkNhbmNlbFR4dDogJ+WPlua2iCc7XHJcbiAgICAgICAgdGhpcy5XaW5kb3dUeXBlID0gd2luZG93VHlwZTtcclxuICAgICAgICB0aGlzLlJld2FyZERhdGEgPSByZXdhcmREYXRhO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbENvbmZpZyB7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQ3VsdGl2YXRpb25fRmx5X0ludGVydmFsID0gNjsgICAgLy/kv67kuLrpo5jlrZfpl7TpmpQv5q+r56eSXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQWRvYmVfUHJvZHVjdGlvbl9JbnRlcnZhbCA9IDEwOyAgICAvL+a0nuW6nOeUn+S6p+mXtOmalC/mr6vnp5JcclxuICAgIHN0YXRpYyByZWFkb25seSBUb3dlcl9NYXhfSW52aXRlX051bSA9IDQ7ICAvL+mVh+WmluWhlOacgOWkp+WPr+mCgOivt+aVsOmHj1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IE1heF9SZWFkeSA9IDg7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgTWF4X0xldmVsID0gODtcclxuICAgIHN0YXRpYyByZWFkb25seSBNYXhfQmF0dGxlID0gOTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHN0YXRpYyBJc0Nob29zZWRTZXJ2aWNlID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgSXNTaW1Qcm9ncmVzc0VuZCA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBSZXdhcmRBZExpc3QgPSBbXHJcbiAgICAgICAgJ2FkdW5pdC1kOTUwNmI4NTZkYTY1MWQ5JyxcclxuICAgICAgICAnYWR1bml0LTI3N2ExNDkwYmRkOTY1ODYnLFxyXG4gICAgICAgICdhZHVuaXQtMjRjOTgxYmI2ZTI2MWMxMicsXHJcbiAgICAgICAgJ2FkdW5pdC1iYTE0NzQyNDJlMGIwN2NjJyxcclxuICAgICAgICAnYWR1bml0LTVlZGM1MjU2Yjg5OTQ2Y2UnXHJcbiAgICBdO1xyXG5cclxuICAgIHN0YXRpYyBCYW5uZXJBZExpc3QgPSBbXHJcbiAgICAgICAgJ2FkdW5pdC02NGYzMmViZjM5MWEzZWVhJyxcclxuICAgICAgICAnYWR1bml0LWYxYmQ5NzAyOTQxMmRjMzUnLFxyXG4gICAgICAgICdhZHVuaXQtNzkyMTA5ZmFjNjhlZjA4YicsXHJcbiAgICAgICAgJ2FkdW5pdC1lZDhmMDBkZDQyZGQyZGQ4JyxcclxuICAgICAgICAnYWR1bml0LWE5MjRjMjk2ZWE5YjIzYTUnXHJcbiAgICBdO1xyXG5cclxuICAgIHN0YXRpYyByZWFkb25seSBNaW5pUHJvZ3JhbUFwcElkID0ge1xyXG4gICAgICAgIE1haWtlOiAnd3g2ZjFiOWI4MTQ2N2NjM2RhJyxcclxuICAgIH07XHJcblxyXG4gICAgLy/nlKjmiLfmmK/lkKblt7LmjojmnYNcclxuICAgIHN0YXRpYyBJc1d4QXV0aCA9IHRydWU7XHJcblxyXG4gICAgLy/lrZjlgqjnlKjmiLflkI1cclxuICAgIHN0YXRpYyBHZXRBY291bnROYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIENvbW1vbi5nZXRMb2NhbFN0b3JhZ2UoXCJBY291bnROYW1lXCIpIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBTYXZlQWNvdW50TmFtZShfdmFsdWUpe1xyXG4gICAgICAgIENvbW1vbi5zYXZlTG9jYWxTdG9yYWdlKFwiQWNvdW50TmFtZVwiLCBfdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2FsQ29udGVudCA9IHtcclxuICAgIEludml0ZTogJ+mCgOivtycsXHJcblxyXG4gICAgTmV0RXJyb3I6ICfnvZHnu5zlvIDlsI/lt64nLFxyXG5cclxuICAgIFllczogJ+ehruWumicsXHJcblxyXG4gICAgQ29taW5nU29vbjogJ+aaguacquW8gOaUvicsXHJcblxyXG4gICAgR2V0QXdhcmQ6ICfpooblj5YnLFxyXG5cclxuICAgIEZseWluZ1RpcHNEZWZhdWx0OiAn5oGt5Zac6I635b6X5aWW5YqxJyxcclxuXHJcbiAgICBDb25zQXdhcmQ6IFwi5oGt5Zac6I635b6XXCIsXHJcblxyXG4gICAgU2hhcmVGYWlsVGlwczogXCLliIbkuqvnm7jlkIzmnIvlj4vlnIjml6Dms5XojrflvpflpZblirFcIixcclxufSIsImV4cG9ydCBsZXQgbG9naW5SZXNVcmxzID0gW1xyXG4gICAgeyB1cmw6ICdyZXMvQ2hvb3NlU2VydmljZS9DaG9vc2VTZXJ2aWNlLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvTG9hZGluZ1VJL0xvYWRpbmdVSS50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL0xvYWRpbmdVSS9Mb2FkaW5nVUlfYXRsYXMyLnBuZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbl0iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cFJlcWJvZHlCYXNle1xyXG4gICAgc3RhdGljIHJlcWJvZHlzOkNvbmZpZy5EaWN0aW9uYXJ5PEh0dHBSZXFib2R5QmFzZT4gPSB7fTtcclxuICAgIEtleTpzdHJpbmc7XHJcbiAgICBNb2R1bGVDb2RlOiBudW1iZXI7XHJcbiAgICBSZXFDb2RlOiBudW1iZXI7XHJcbiAgICBTZXNzaW9uOiBzdHJpbmc7XHJcbiAgICBBY2NvdW50S2V5OiBzdHJpbmc7XHJcbiAgICBSZXFEYXRhOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioa2V5OnN0cmluZywgbW9kQ29kZTpudW1iZXIsIHJlcUNvZGU6bnVtYmVyLCBzZXNzaW9uPzpzdHJpbmcsIGFjY05hbWU/OnN0cmluZywgcmVxZGF0YT8pe1xyXG4gICAgICAgIGlmKHR5cGVvZihyZXFkYXRhKSA9PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgLy/lpoLlt7LovazmjaLliJnovazlm55KU09OXHJcbiAgICAgICAgICAgIHJlcWRhdGEgPSBKU09OLnBhcnNlKHJlcWRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5LZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5Nb2R1bGVDb2RlID0gbW9kQ29kZTtcclxuICAgICAgICB0aGlzLlJlcUNvZGUgPSByZXFDb2RlO1xyXG4gICAgICAgIHRoaXMuU2Vzc2lvbiA9IHNlc3Npb247XHJcbiAgICAgICAgdGhpcy5BY2NvdW50S2V5ID0gYWNjTmFtZTtcclxuICAgICAgICB0aGlzLlJlcURhdGEgPSByZXFkYXRhO1xyXG5cclxuICAgICAgICBIdHRwUmVxYm9keUJhc2UucmVxYm9keXNba2V5XSA9IHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6K+35rGC57uT5p6EXHJcbmV4cG9ydCB2YXIgUmVxRGF0YSA9IHtcclxuICAgIExvZ2luOntcIk5hbWVcIjogXCJ0YW5keVwifSxcclxuICAgIEFkb2JlUG9vbFVwZ3JhZGU6e1wiVHlwZVwiOiAxfSxcclxuICAgIEpvaW5TZWN0OntcIkdyb3VwU3RhZ2VJZFwiOiAxLFwiR3JvdXBJZFwiOiAxfSxcclxuICAgIExlYXJuU2VjdEtmOntcIlNraWxsSWRcIjogMX0sXHJcbiAgICBVcGdyYWRlS29uZ2ZhOntcIlNraWxsVHlwZVwiOjEsXCJTa2lsbElkXCI6IDF9LFxyXG4gICAgU3RhcnRTZWN0VGFzazp7XCJUYXNrSWRcIjoxfSxcclxuICAgIEdyYWJTZWN0VGFza0F3YXJkOntcIlRhc2tJZFwiOjF9LFxyXG4gICAgU2VsbEJhZ0l0ZW06e1wiUG9zaXRpb25cIjogMSxcIlR5cGVcIjogMSxcIklkXCI6IDEsXCJOdW1cIjogMX0sXHJcbiAgICBVc2VCYWdJdGVtOntcIlBvc2l0aW9uXCI6IDEsXCJUeXBlXCI6IDEsXCJJZFwiOiAxLFwiTnVtXCI6IDF9LFxyXG4gICAgR21BZGRCYWdJdGVtOntcIlR5cGVcIjogMSxcIklkXCI6IDEsXCJOdW1cIjogMX0sXHJcbiAgICAvL+aMkeaImOmVh+WmluWhlFxyXG4gICAgR29Nb25zdGVyVG93ZXI6e1wiQ2hhbGxlbmdlTGV2ZWxcIjogMSwgXCJIZWxwSGVyb3NcIjogbmV3IEFycmF5PEhlbHBIZXJvc0RhdGFDbGFzcz4oKX0sXHJcbn1cclxuXHJcbi8v6ZWH5aaW5aGU6YKA6K+35LuZ5Y+L5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBIZWxwSGVyb3NEYXRhQ2xhc3Mge1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIElzUm9ib3Q6Ym9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6c3RyaW5nLCBpc1JvYm90OmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuS2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuSXNSb2JvdCA9IGlzUm9ib3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ml6DliqnmiJjoi7Hpm4RcclxuICAgIHN0YXRpYyBnZXQgTm9uZUhlbHBIZXJvKCl7XHJcbiAgICAgICAgcmV0dXJuIFtFbXB0eUhlbHBIZXJvLCBFbXB0eUhlbHBIZXJvLCBFbXB0eUhlbHBIZXJvLCBFbXB0eUhlbHBIZXJvXTtcclxuICAgIH1cclxufVxyXG5cclxuLy/liqnmiJjoi7Hpm4TnqbrkvY1cclxuZXhwb3J0IGNvbnN0IEVtcHR5SGVscEhlcm8gPSBuZXcgSGVscEhlcm9zRGF0YUNsYXNzKCcnLCBmYWxzZSk7XHJcblxyXG5leHBvcnQgZW51bSBSZXFib2R5S2V5e1xyXG4gICAgQ29uZmlnID0gXCJDb25maWdcIixcclxuICAgIExvZ2luID0gXCJMb2dpblwiLFxyXG4gICAgVXBncmFkZSA9IFwiVXBncmFkZVwiLFxyXG4gICAgQWRvYmVVaUluZm8gPSBcIkFkb2JlVWlJbmZvXCIsXHJcbiAgICBBZG9iZUhpcmVXb3JrZXIgPSBcIkFkb2JlSGlyZVdvcmtlclwiLFxyXG4gICAgQWRvYmVBZGRXb3JrZXIgPSBcIkFkb2JlQWRkV29ya2VyXCIsXHJcbiAgICBBZG9iZVJlZHVjZVdvcmtlciA9IFwiQWRvYmVSZWR1Y2VXb3JrZXJcIixcclxuICAgIEFkb2JlVXBTdG9uZSA9IFwiQWRvYmVVcFN0b25lXCIsXHJcbiAgICBBZG9iZVVwRm9vZCA9IFwiQWRvYmVVcEZvb2RcIixcclxuICAgIEFkb2JlVXBXb29kID0gXCJBZG9iZVVwV29vZFwiLFxyXG4gICAgQWRvYmVVcElyb24gPSBcIkFkb2JlVXBJcm9uXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgTmV0Q29uZmlnID0ge1xyXG4gICAgUmVxdWVzdFVybDpcImh0dHA6Ly83LmxpZ2h0cGF3LmNvbS90cnV0aFwiLFxyXG5cclxuICAgIC8vIEh0dHBSZXF1ZXN0VXJsOlwiaHR0cDovLzcwNi5saWdodHBhdy5jb206NzcyMC9oYXBweV90cmF2ZWxcIixcclxuXHJcbiAgICBIdHRwUmVxdWVzdFVybDpcImh0dHBzOi8vOXo5YWN2OTAxZy5leGVjdXRlLWFwaS5jbi1ub3J0aHdlc3QtMS5hbWF6b25hd3MuY29tLmNuL2JldGFcIixcclxuICAgIFxyXG4gICAgTG9jYWxSZXF1ZXN0VXJsOlwiaHR0cDovLzcubGlnaHRwYXcuY29tL3RydXRoXCIsXHJcblxyXG4gICAgTG9jYWxXZWNoYXRSZXF1ZXN0VXJsOlwiaHR0cDovL3N2ZjM3ZS5uYXRhcHBmcmVlLmNjL2hhcHB5X3RyYXZlbFwiLFxyXG5cclxuICAgIEdNVXJsOlwiaHR0cDovLzcubGlnaHRwYXcuY29tL2hhcHB5X3RyYXZlbC9yZXdhcmRcIixcclxuXHJcbiAgICBUZW1wTmFtZTpcIlwiLFxyXG59XHJcblxyXG4vL+i/nuaOpeeKtuaAgVxyXG5leHBvcnQgZW51bSBIdHRwQ29ubmVjdFN0YXRlIHtcclxuICAgIEVycm9yID0gMCxcclxuICAgIFN1Y2Nlc3MgPSAxLFxyXG59XHJcblxyXG4vL+WTjeW6lOe7k+aehOS9k1xyXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BEYXRhU3RydWN0IHtcclxuICAgIFJlc3BDb2RlOiBudW1iZXI7XHJcbiAgICBSZXNwTXNnOiBzdHJpbmc7XHJcbiAgICBSZXNwRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc3BEYXRhKGRhdGE6UmVzcERhdGFTdHJ1Y3Qpe1xyXG4gICAgcmV0dXJuIGRhdGEgJiYgZGF0YS5SZXNwRGF0YTtcclxufVxyXG5cclxuLy/mi4nlj5bphY3nva7or7fmsYLkvZNcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0RhdGFQYXJhbSB7XHJcbiAgICBUYWJsZUlkOiBudW1iZXI7XHJcbiAgICBUYWJsZU5hbWU6IHN0cmluZztcclxuICAgIFZlcnNpb246IG51bWJlcjtcclxuICAgIERhdGE6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgdmVyc2lvbjpudW1iZXIsIG5hbWU/OnN0cmluZywgZGF0YT8pe1xyXG4gICAgICAgIHRoaXMuVGFibGVJZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuVmVyc2lvbiA9IHZlcnNpb247XHJcbiAgICAgICAgaWYobmFtZSl7XHJcbiAgICAgICAgICAgIHRoaXMuVGFibGVOYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IENvbmZpZ1JlcURhdGEgPSBuZXcgQXJyYXk8Q29uZmlnRGF0YVBhcmFtPigpO1xyXG5cclxuLy/nmbvlvZXor7fmsYLkvZNcclxuZXhwb3J0IGNsYXNzIExvZ2luUmVxRGF0YSB7XHJcbiAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICBKc0NvZGU/OiBzdHJpbmc7XHJcbiAgICBFbmNyeXB0ZWREYXRhPzogc3RyaW5nO1xyXG4gICAgSXY/OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZT86c3RyaW5nLCBwdz86c3RyaW5nLCBqc2NvZGU/OnN0cmluZywgZW5jcnlwdGVkRGF0YT86c3RyaW5nLCBpdj86c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5OYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLlBhc3N3b3JkID0gcHc7XHJcbiAgICAgICAgdGhpcy5Kc0NvZGUgPSBqc2NvZGU7XHJcbiAgICAgICAgdGhpcy5FbmNyeXB0ZWREYXRhID0gZW5jcnlwdGVkRGF0YTtcclxuICAgICAgICB0aGlzLkl2ID0gaXY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v55m75b2V5ZON5bqU5pWw5o2u5L2TXHJcbmV4cG9ydCB0eXBlIExvZ2luUmVzcERhdGFTdHJ1Y3QgPSB7XHJcbiAgICBcIkFjY291bnRCYXNlSW5mb1wiOiB7XHJcbiAgICAgICAgXCJBY2NvdW50S2V5XCI6IHN0cmluZyxcclxuICAgICAgICBcIlZlcmlmeVNlc3Npb25cIjogc3RyaW5nLFxyXG4gICAgICAgIFwiTmlja05hbWVcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiQXZhdGFyXCI6IHN0cmluZyxcclxuICAgICAgICBcIkNyZWF0ZVRpbWVcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRGFvaGVuZ1wiOiBudW1iZXIsXHJcbiAgICAgICAgXCJMaW5nbGlcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiR2VuZ3VcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiVGlwb1wiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTaGVuZmFcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiV3V4aW5nXCI6IG51bWJlcixcclxuICAgICAgICBcIkZ1eXVhblwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJaaXpoaVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJaaGVuZ3lpXCI6IG51bWJlcixcclxuICAgICAgICBcIlhpZWVcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiV2Vpd2FuZ1wiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHcm91cEdvbmd4aWFuXCI6IG51bWJlcixcclxuICAgICAgICBcIlhpYW55dVwiOiBudW1iZXIsXHJcbiAgICB9LFxyXG4gICAgXCJYaXV3ZWlJbmZvXCI6IHtcclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiU3RhZ2VcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiQ3VycmVudFZhbHVlXCI6IG51bWJlcixcclxuICAgICAgICBcIkVmZmljaWVuY3lcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU2V0dGxlbWVudFRpbWVcIjogbnVtYmVyXHJcbiAgICB9LFxyXG4gICAgXCJQYWdvZGFJbmZvXCI6IHtcclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiTm9ybWFsTXVsdGlwbGVJbmZvc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiU3RhcnRTdGFtcFwiOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcIkVuZFN0YW1wXCI6IG51bWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIk5vcm1hbFN0YXJ0VGltZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJOb3JtYWxUaW1lc1wiOiBudW1iZXIsXHJcbiAgICAgICAgXCJOb3JtYWxMZXN0VGltZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJMZWFkZXJNdWx0aXBsZUluZm9zXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJTdGFydFN0YW1wXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiRW5kU3RhbXBcIjogbnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiTGVhZGVyU3RhcnRUaW1lXCI6IG51bWJlcixcclxuICAgICAgICBcIkxlYWRlclRpbWVzXCI6IG51bWJlcixcclxuICAgICAgICBcIkxlYWRlckxlc3RUaW1lXCI6IG51bWJlclxyXG4gICAgfSxcclxuICAgIFwiRG9uZ2Z1SW5mb1wiOiB7IC8v6LSm5oi35pyA5paw5rSe5bqc5L+h5oGvXHJcbiAgICAgICAgXCJBY2NvdW50S2V5XCI6IHN0cmluZyxcclxuICAgICAgICBcIlRvdGFsU2VydmFudE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTdG9uZUxldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU3RvbmVOdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU3RvbmVTZXJ2YW50TnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIkZvb2RMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIkZvb2ROdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRm9vZFNlcnZhbnROdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiV29vZExldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiV29vZE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXb29kU2VydmFudE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJJcm9uTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJJcm9uTnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIklyb25TZXJ2YW50TnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIlNldHRsZW1lbnRUaW1lXCI6IG51bWJlclxyXG4gICAgfSxcclxuICAgIFwiUG9vbEluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJQb29sTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJSZWlraU51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHb2xkTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXb29kTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXYXRlckxldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRmlyZUxldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU29pbExldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU2V0dGxlbWVudFRpbWVcIjogbnVtYmVyLFxyXG4gICAgfSxcclxuICAgIFwiR3JvdXBJbmZvXCI6IHtcclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiR3JvdXBJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHcm91cFNraWxsTnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIlN0dWR5U2tpbGxzXCI6IFtcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIFwiU2tpbGxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgIFwiU2tpbGxUeXBlXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgXCJMZXZlbFwiOiBudW1iZXJcclxuICAgICAgICAgICB9XHJcbiAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgXCJTdG9yYWdlSW5mb1wiOiB7XHJcbiAgICAgICAgXCJTd29yZElkXCI6IG51bWJlcixcclxuICAgICAgICBcIkhhaXJwaW5JZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJDbG90aGVzSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU2hvZXNJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJSaW5nSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiSmFkZUlkXCI6IG51bWJlcixcclxuICAgICAgICBcIkJyYWNlbGV0SWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiQ29tcGFzc0lkXCI6IG51bWJlcixcclxuICAgICAgICBcIk9wZW5OdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiR29vZEluZm9zXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJUeXBlXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiSWRcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJOdW1cIjogbnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIFwiRGFtb25JbmZvXCI6IHtcclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiQ2hhbGxlbmdlTGV2ZWxcIjogbnVtYmVyXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZG9iZUFkZFdvcmtlclJlcURhdGEge1xyXG4gICAgV29ya1R5cGU6bnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdvcmtUeXBlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuV29ya1R5cGUgPSB3b3JrVHlwZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT2JqZWN0Q29uZmlnID0ge1xyXG4gICAgREVTS19QT1M6IG5ldyBMYXlhLlZlY3RvcjMoMi41LCA0LCAtNSksXHJcbiAgICBERVNLX0VORF9QT1M6IG5ldyBMYXlhLlZlY3RvcjMoMi41LCAtMSwgLTUpLFxyXG4gICAgREVTS19FTlRFUl9QT1M6IG5ldyBMYXlhLlZlY3RvcjMoNiwgNCwgLTUpLFxyXG4gICAgSEFORF9QT1M6IG5ldyBMYXlhLlZlY3RvcjMoLTMsIC0yLCAtNSksXHJcbiAgICBIQU5EX0VORF9QT1M6IG5ldyBMYXlhLlZlY3RvcjMoMCwgLTIsIC01KSxcclxuICAgIERFU0tfU0laRTogbmV3IExheWEuVmVjdG9yMygwLjIsIDMsIDIpLFxyXG4gICAgSEFORF9TSVpFOiBuZXcgTGF5YS5WZWN0b3IzKDYsIDAuNSwgMC41KSxcclxuICAgIC8vc3BlZWRcclxuICAgIFNQRUVEX0ZPUldBUkRfREVTSzogbmV3IExheWEuVmVjdG9yMygwLCAtMTAsIDApLFxyXG4gICAgU1BFRURfQkFDS19ERVNLOiBuZXcgTGF5YS5WZWN0b3IzKDAsIDEwLCAwKSxcclxuICAgIFNQRUVEX0hBTkQ6IDAuMDMsXHJcbn0iLCJsZXQgdXJscyA9IFtcclxuICAgIHsgdXJsOiAncmVzL0Fkb2JlL0Fkb2JlLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQWRvYmUvQWRvYmVfYXRsYXMwLmpwZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9BZG9iZS9BZG9iZV9hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL2F0bGFzL2NvbXAucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL0NoZXNzQm9hcmQvQ2hlc3NCb2FyZC50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL0NoZXNzQm9hcmQvQ2hlc3NCb2FyZF9hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL0Nob29zZVNlcnZpY2UvQ2hvb3NlU2VydmljZS50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL0ljb25zL0ljb25zLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvSWNvbnMvSWNvbnNfYXRsYXMyLnBuZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9NYWluTWVudS9NYWluTWVudS50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL01haW5NZW51L01haW5NZW51X2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUGxheWVyL1BsYXllci50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL1B1YmxpYy9QdWJsaWMudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QdWJsaWMvUHVibGljX2F0bGFzMS5qcGcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczFfMS5qcGcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL1B1YmxpYy9QdWJsaWNfYXRsYXMyXzEucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL1B1YmxpYy9QdWJsaWNfYXRsYXMyXzIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL1B1YmxpYy9QdWJsaWNfYXRsYXMyXzMucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL1JvYWRUb0RpZXR5L1JvYWRUb0RpZXR5LnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvU2VjdC9TZWN0LnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG5dXHJcbmV4cG9ydCB7dXJsc307IiwiXHJcbmV4cG9ydCBjb25zdCBTdGF0ZUNvbmZpZyA9IHtcclxuICAgIElERUw6ICdJREVMJywgIC8v5b6F5py6XHJcbiAgICBERUFEOiAnREVBRCcsXHJcbiAgICBCQUNLX1BBU1NFRDogJ0JBQ0tfUEFTU0VEJywgICAgLy/lt7LnvKnlm57lronlhajljLpcclxuICAgIE1PVkVfRk9SV0FSRDogJ01PVkVfRk9SV0FSRCcsICAgIC8v5YmN5Ly4XHJcbiAgICBNT1ZFX0JBQ0s6ICdNT1ZFX0JBQ0snLCAgICAvL+e8qeWbnlxyXG4gICAgU1RPUDogJ1NUT1AnLCAgICAvL+WBnOatoui/kOWKqFxyXG4gICAgREVTS19MRUFWRTogJ0RFU0tfTEVBVkUnLCAgICAvL+WIgOWPsOemu+WculxyXG4gICAgREVTS19FTlRFUjogJ0RFU0tfRU5URVInLCAgICAvL+WIgOWPsOi/m+WculxyXG59IiwiXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlld0NvbmZpZ3tcclxuICAgIEtleTogc3RyaW5nLFxyXG4gICAgUGtnQWRyczogc3RyaW5nLFxyXG4gICAgUGtnOiBzdHJpbmcsXHJcbiAgICBDb206IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVmlld0tpdCA9IHtcclxuICAgIC8v5Yqg6L296I+K6IqxXHJcbiAgICBMb2FkaW5nTWFpbjoge1xyXG4gICAgICAgIEtleTogXCJMb2FkaW5nTWFpblwiLFxyXG4gICAgICAgIFBrZzogXCJMb2FkaW5nVUlcIixcclxuICAgICAgICBDb206XCJMb2FkaW5nTWFpblwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6YCJ5oup5pyN5Yqh5ZmoXHJcbiAgICBDaG9vc2VTZXJ2aWNlOntcclxuICAgICAgICBLZXk6IFwiQ2hvb3NlU2VydmljZVwiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwiQ2hvb3NlU2VydmljZS9DaG9vc2VTZXJ2aWNlXCIsXHJcbiAgICAgICAgUGtnOiBcIkNob29zZVNlcnZpY2VcIixcclxuICAgICAgICBDb206XCJDaG9vc2VTZXJ2aWNlXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/or7vmnaHov5vluqZcclxuICAgIExvYWRpbmdQcm9ncmVzczoge1xyXG4gICAgICAgIEtleTogXCJMb2FkaW5nUHJvZ3Jlc3NcIixcclxuICAgICAgICBQa2dBZHJzOiBcInJlcy9Mb2FkaW5nVUkvTG9hZGluZ1VJXCIsXHJcbiAgICAgICAgUGtnOiBcIkxvYWRpbmdVSVwiLFxyXG4gICAgICAgIENvbTpcIkxvYWRpbmdQcm9ncmVzc1wiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5Li755WM6Z2iXHJcbiAgICBNYWluTWVudToge1xyXG4gICAgICAgIEtleTogXCJNYWluTWVudVwiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwicmVzL01haW5NZW51L01haW5NZW51XCIsXHJcbiAgICAgICAgUGtnOiBcIk1haW5NZW51XCIsXHJcbiAgICAgICAgQ29tOlwiTWFpbk1lbnVcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+S/rueCvOaTjeS9nFxyXG4gICAgQ3VsdGl2YXRpb25JbmZvOiB7XHJcbiAgICAgICAgS2V5OiBcIkN1bHRpdmF0aW9uSW5mb1wiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwicmVzL01haW5NZW51L01haW5NZW51XCIsXHJcbiAgICAgICAgUGtnOiBcIk1haW5NZW51XCIsXHJcbiAgICAgICAgQ29tOlwiQ3VsdGl2YXRpb25JbmZvXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/po5jlrZdcclxuICAgIFRpcHNMYWJlbDoge1xyXG4gICAgICAgIEtleTogXCJUaXBzTGFiZWxcIixcclxuICAgICAgICBQa2dBZHJzOiBcIlB1YmxpYy9QdWJsaWNcIixcclxuICAgICAgICBQa2c6IFwiUHVibGljXCIsXHJcbiAgICAgICAgQ29tOlwiVGlwc0xhYmVsXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/po5jlrZdcclxuICAgIFJlc1Byb2R1Y3Rpb25UaXBzOiB7XHJcbiAgICAgICAgS2V5OiBcIlJlc1Byb2R1Y3Rpb25UaXBzXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJBZG9iZS9BZG9iZVwiLFxyXG4gICAgICAgIFBrZzogXCJBZG9iZVwiLFxyXG4gICAgICAgIENvbTpcIlJlc1Byb2R1Y3Rpb25UaXBzXCJcclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8v5rSe5bqcXHJcbiAgICBBZG9iZU1haW46IHtcclxuICAgICAgICBLZXk6IFwiQWRvYmVNYWluXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJBZG9iZS9BZG9iZVwiLFxyXG4gICAgICAgIFBrZzogXCJBZG9iZVwiLFxyXG4gICAgICAgIENvbTpcIkFkb2JlTWFpblwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5YWs55So56Gu6K6k56qX5Y+jXHJcbiAgICBQdWJsaWNDb25maXJtYXRpb246IHtcclxuICAgICAgICBLZXk6IFwiUHVibGljQ29uZmlybWF0aW9uXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJQdWJsaWMvUHVibGljXCIsXHJcbiAgICAgICAgUGtnOiBcIlB1YmxpY1wiLFxyXG4gICAgICAgIENvbTpcIlB1YmxpY0NvbmZpcm1hdGlvblwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5rSe5bqc5Y2H57qnXHJcbiAgICBBZG9iZVVwZ3JhZGU6IHtcclxuICAgICAgICBLZXk6IFwiQWRvYmVVcGdyYWRlXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJBZG9iZS9BZG9iZVwiLFxyXG4gICAgICAgIFBrZzogXCJBZG9iZVwiLFxyXG4gICAgICAgIENvbTpcIkFkb2JlVXBncmFkZVwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+WKoOWFpemXqOa0vlxyXG4gICAgSm9pblNlY3Q6IHtcclxuICAgICAgICBLZXk6IFwiSm9pblNlY3RcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIkpvaW5TZWN0XCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v5Yqg5YWl6Zeo5rS+XHJcbiAgICBTZWN0TWFpbjoge1xyXG4gICAgICAgIEtleTogXCJTZWN0TWFpblwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiU2VjdE1haW5cIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/pl6jmtL7kv67ngrzloZRcclxuICAgIFRyYWluVG93ZXI6IHtcclxuICAgICAgICBLZXk6IFwiVHJhaW5Ub3dlclwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiVHJhaW5Ub3dlclwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+mXqOa0vuS7u+WKoVxyXG4gICAgU2VjdFRhc2s6IHtcclxuICAgICAgICBLZXk6IFwiU2VjdFRhc2tcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIlNlY3RUYXNrXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/lrabkuaDlip/ms5VcclxuICAgIExlYXJuS29uZ2ZhOiB7XHJcbiAgICAgICAgS2V5OiBcIkxlYXJuS29uZ2ZhXCIsXHJcbiAgICAgICAgUGtnOiBcIlNlY3RcIixcclxuICAgICAgICBDb206XCJMZWFybktvbmdmYVwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+WtpuS5oOWKn+azlVxyXG4gICAgVXBncmFkZUtvbmdmYToge1xyXG4gICAgICAgIEtleTogXCJVcGdyYWRlS29uZ2ZhXCIsXHJcbiAgICAgICAgUGtnOiBcIlNlY3RcIixcclxuICAgICAgICBDb206XCJVcGdyYWRlS29uZ2ZhXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/op5LoibJcclxuICAgIFBsYXllck1haW46IHtcclxuICAgICAgICBLZXk6IFwiUGxheWVyTWFpblwiLFxyXG4gICAgICAgIFBrZzogXCJQbGF5ZXJcIixcclxuICAgICAgICBDb206XCJQbGF5ZXJNYWluXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v6KeS6Imy5bGe5oCnXHJcbiAgICBQbGF5ZXJBdHRyaWJ1dGlvbjoge1xyXG4gICAgICAgIEtleTogXCJQbGF5ZXJBdHRyaWJ1dGlvblwiLFxyXG4gICAgICAgIFBrZzogXCJQbGF5ZXJcIixcclxuICAgICAgICBDb206XCJQbGF5ZXJBdHRyaWJ1dGlvblwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5aKe5Yqg5YKo54mp6KKL56m66Ze0XHJcbiAgICBBZGRCYWdOdW06IHtcclxuICAgICAgICBLZXk6IFwiQWRkQmFnTnVtXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIkFkZEJhZ051bVwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5L+u54K85biu5YqpXHJcbiAgICBDdWx0aXZhdGlvbkVmZmljaWVuY3k6IHtcclxuICAgICAgICBLZXk6IFwiQ3VsdGl2YXRpb25FZmZpY2llbmN5XCIsXHJcbiAgICAgICAgUGtnOiBcIk1haW5NZW51XCIsXHJcbiAgICAgICAgQ29tOlwiQ3VsdGl2YXRpb25FZmZpY2llbmN5XCJcclxuICAgIH0sXHJcblxyXG4gICAgLy9HTeWKoOeJqeWTgVxyXG4gICAgR21BZGRCYWdJdGVtOiB7XHJcbiAgICAgICAgS2V5OiBcIkdtQWRkQmFnSXRlbVwiLFxyXG4gICAgICAgIFBrZzogXCJQbGF5ZXJcIixcclxuICAgICAgICBDb206XCJHbUFkZEJhZ0l0ZW1cIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/ku5npgJTkuLvnlYzpnaJcclxuICAgIFJvYWRUb0RpZXR5TWFpbjoge1xyXG4gICAgICAgIEtleTogXCJSb2FkVG9EaWV0eU1haW5cIixcclxuICAgICAgICBQa2c6IFwiUm9hZFRvRGlldHlcIixcclxuICAgICAgICBDb206XCJSb2FkVG9EaWV0eU1haW5cIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/miJjmlpfov4fnqItcclxuICAgIEJhdHRsZUluZm86IHtcclxuICAgICAgICBLZXk6IFwiQmF0dGxlSW5mb1wiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIkJhdHRsZUluZm9cIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/miavojaHku5npgJRcclxuICAgIFN3ZWVwQ2hhcHRlcnM6IHtcclxuICAgICAgICBLZXk6IFwiU3dlZXBDaGFwdGVyc1wiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIlN3ZWVwQ2hhcHRlcnNcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mVh+WmluWhlFxyXG4gICAgTW9uc3RlclRvd2VyOiB7XHJcbiAgICAgICAgS2V5OiBcIk1vbnN0ZXJUb3dlclwiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIk1vbnN0ZXJUb3dlclwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6ZWH5aaW5aGU6aaW5p2A5qacXHJcbiAgICBGaXJzdEJsb29kUmFuazoge1xyXG4gICAgICAgIEtleTogXCJGaXJzdEJsb29kUmFua1wiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIkZpcnN0Qmxvb2RSYW5rXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/ku5nlj4vlnIhcclxuICAgIEZyaWVuZENpcmNsZToge1xyXG4gICAgICAgIEtleTogXCJGcmllbmRDaXJjbGVcIixcclxuICAgICAgICBQa2c6IFwiUm9hZFRvRGlldHlcIixcclxuICAgICAgICBDb206XCJGcmllbmRDaXJjbGVcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+S7memAlOaji+ebmFxyXG4gICAgQ2hlc3NNYXA6IHtcclxuICAgICAgICBLZXk6IFwiQ2hlc3NNYXBcIixcclxuICAgICAgICBQa2c6IFwiQ2hlc3NCb2FyZFwiLFxyXG4gICAgICAgIENvbTpcIkNoZXNzTWFwXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v6L2s55SfXHJcbiAgICBSZWJpcnRoOiB7XHJcbiAgICAgICAgS2V5OiBcIlJlYmlydGhcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJSZWJpcnRoXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/pl6jmtL7ol4/nu4/pmIHlhaXlj6NcclxuICAgIEppbmdMaWJFbnRyYW5jZToge1xyXG4gICAgICAgIEtleTogXCJKaW5nTGliRW50cmFuY2VcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIkppbmdMaWJFbnRyYW5jZVwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6Zeo5rS+6JeP57uP6ZiBXHJcbiAgICBKaW5nTGliOiB7XHJcbiAgICAgICAgS2V5OiBcIkppbmdMaWJcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIkppbmdMaWJcIlxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSUNvbmZpZ3tcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcbiAgICBwdWJsaWMgc3RhdGljIExvZ2luUGFja2FnZUxvYWRlZCA9IGZhbHNlOyAgIC8v5piv5ZCm5bey5Yqg6L2955m75b2VVUnljIVcclxuICAgIFxyXG4gICAgLy/nmbvlvZXliqDovb3nmoRVSeWMhVxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFVJUGtncyA9IFtcclxuICAgICAgICBcIkljb25zXCIsXHJcbiAgICAgICAgXCJQdWJsaWNcIixcclxuICAgICAgICBcIk1haW5NZW51XCIsXHJcbiAgICBdO1xyXG5cclxuICAgIC8v5b6u5L+h5bCP5ri45oiP5a2Q5YyFXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU3ViUGtncyA9IFtcclxuICAgICAgICBcInN1YkxpYnNcIixcclxuICAgIF07XHJcblxyXG4gICAgLy8gVUnmuLLmn5PliIblsYJcclxuICAgIHN0YXRpYyByZWFkb25seSBTb3J0aW5nT3JkZXIgPSB7XHJcbiAgICAgICAgLy/kuLvnlYzpnaLmjInpkq5cclxuICAgICAgICBNYWluVUk6IDEwMCxcclxuICAgICAgICAvLyDkv6Hmga/lkIzmraVcclxuICAgICAgICBNc2dTeW5jOiAxNTAsXHJcbiAgICAgICAgLy8g5Zy65pmv5Yqg6L29XHJcbiAgICAgICAgU2NlbmVMb2FkaW5nOiAyMDAsXHJcbiAgICAgICAgLy8g5paw5omL5byV5a+8XHJcbiAgICAgICAgTm92aWNlR3VpZGU6IDI1MCxcclxuICAgICAgICAvLyDmlrDlip/og73lvIDlkK9cclxuICAgICAgICBOZXdGdW5jdGlvbk9wZW46IDI2MCxcclxuICAgICAgICAvLyDkurrnianlr7nnmb1cclxuICAgICAgICBEaWFsb2c6IDMwMCxcclxuICAgICAgICAvLyDlvLnlh7rnqpflj6NcclxuICAgICAgICBQb3B1cDogMzUwLFxyXG4gICAgICAgIC8vIOWFqOWxj+WxleekulxyXG4gICAgICAgIEZ1bGxTY3JlZW5TaG93OiA0NTAsXHJcbiAgICAgICAgLy8g572R57uc5L+h5Y+3XHJcbiAgICAgICAgTmV0U2lnbmFsOiA1MDAsXHJcbiAgICAgICAgLy8g572R57uc5by55qGGXHJcbiAgICAgICAgTmV0RXJyb3I6IDU1MCxcclxuICAgICAgICAvLyDns7vnu5/lub/mkq1cclxuICAgICAgICBTeXN0ZW1Nc2c6IDYwMCxcclxuICAgICAgICAvLyDmtojmga/mj5DnpLpcclxuICAgICAgICBNc2dUaXBzOiA2NTAsXHJcbiAgICAgICAgLy8g54K55Ye754m55pWIXHJcbiAgICAgICAgQ2xpY2tFZmZlY3Q6IDcwMCxcclxuICAgICAgICAvLyDmnI3liqHlmajml7bpl7RcclxuICAgICAgICBTZXJ2ZXJUaW1lOiAxMDAwLFxyXG4gICAgICAgIC8vIGdt5oyH5LukXHJcbiAgICAgICAgR21PcmRlcjogMTAwMSxcclxuICAgIH07XHJcblxyXG4gICAgLy9TcGluZei3r+W+hFxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNwaW5lUGF0aCA9IHtcclxuICAgICAgICBZYW95YW86e1xyXG4gICAgICAgICAgICBMZWZ0OlwiU3BpbmUvdHV6aVwiLFxyXG4gICAgICAgICAgICBSaWdodDpcIlByZWZhYi90dXppXzJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIERpY2U6XCJTcGluZS9zcGluZV9zYWl6aVwiLFxyXG4gICAgICAgIFxyXG4gICAgICAgIE5hbnpodTp7XHJcbiAgICAgICAgICAgIExlZnQ6XCJTcGluZS9uYW56aHVcIixcclxuICAgICAgICAgICAgUmlnaHQ6XCJQcmVmYWIvbmFuemh1XzJcIixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBZdXNoZW5neWk6e1xyXG4gICAgICAgICAgICBMZWZ0OlwiU3BpbmUveXVzaGVuZ3lpXCIsXHJcbiAgICAgICAgICAgIFJpZ2h0OlwiUHJlZmFiL3l1c2hlbmd5aV8yXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgLy/lo7Dpn7NcclxuICAgIHN0YXRpYyByZWFkb25seSBTb3VuZFBhdGggPSB7XHJcbiAgICAgICAgQnV0dG9uQ2xpY2s6XCJ1aTovL1B1YmxpYy/ngrnlh7vmjInpkq5cIixcclxuICAgIH07XHJcblxyXG4gICAgLy/lvaLosaHlm77moIfphY3nva5cclxuICAgIHN0YXRpYyByZWFkb25seSBQb3J0cmFpdFBhdGggPSB7XHJcbiAgICAgICAgWWFveWFvOid1aTovL1B1YmxpYy/lpK3lpK1f5YWo6LqrJyxcclxuICAgIH07XHJcblxyXG4gICAgLy/lsI/lm77moIfphY3nva5cclxuICAgIHN0YXRpYyByZWFkb25seSBTbWFsbEljb25QYXRoID0ge1xyXG4gICAgICAgIFlhb3lhbzondWk6Ly9QdWJsaWMv5aSt5aSt5bCP5aS05YOPJyxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNoYXJlSW1hZ2VQYXRoID0ge1xyXG4gICAgICAgIEludml0ZUZyaWVuZDonaHR0cHM6Ly9tbW9jZ2FtZS5xcGljLmNuL3dlY2hhdGdhbWUvSENsb0tYcFloNEFJYXIyMWlhdkJIVXMxQmdTM2Y0dUdzbllYNWliS2R1T2lhckFkZ1RWOUd3SmtTdFJPUGpicmFrTC8wJyxcclxuICAgIH07XHJcblxyXG4gICAgLy9TcGluZeWKqOeUu+WIh+aNolxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNwaW5lU3RhdGUgPSB7XHJcbiAgICAgICAgWWFveWFvOntcclxuICAgICAgICAgICAgUnVuOlwicnVuXCIsXHJcbiAgICAgICAgICAgIFN0YW5kOlwic3RhbmRcIixcclxuICAgICAgICAgICAgSWRsZTE6XCJpZGxlMVwiLFxyXG4gICAgICAgICAgICBJZGxlMjpcImlkbGUyXCIsXHJcbiAgICAgICAgICAgIFRvdWNoMTpcInRvdWNoMVwiLFxyXG4gICAgICAgICAgICBUb3VjaDI6XCJ0b3VjaDJcIixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+W8uuWItuW8leWvvFxyXG4gICAgc3RhdGljIHJlYWRvbmx5IEd1aWRlck5hbWUgPSB7XHJcbiAgICAgICAgUm9sZU1lbnVHdWlkZTpcIlJvbGVNZW51R3VpZGVcIixcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIHJlYWRvbmx5IEZvbnRDb2xvciA9IHtcclxuICAgICAgICBGaWdodFJlY19NZTogJyNGRkZGMDAnLFxyXG4gICAgfTtcclxufSIsImV4cG9ydCAqIGZyb20gJy4vUmlnaWRPYmplY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL09iamVjdFByb3h5JztcclxuIiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9Db3JlL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCB7IE9iamVjdENvbmZpZyB9IGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0UHJveHkge1xyXG4gICAgc3RhdGljIGNyZWF0ZUhhbmQoKXtcclxuICAgICAgICBsZXQgaGFuZCA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lLmFkZENoaWxkKFxyXG4gICAgICAgICAgICBuZXcgTGF5YS5NZXNoU3ByaXRlM0QoTGF5YS5QcmltaXRpdmVNZXNoLmNyZWF0ZUJveChcclxuICAgICAgICAgICAgICAgIE9iamVjdENvbmZpZy5IQU5EX1NJWkUueCwgXHJcbiAgICAgICAgICAgICAgICBPYmplY3RDb25maWcuSEFORF9TSVpFLnksIFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0Q29uZmlnLkhBTkRfU0laRS56XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKSBhcyBMYXlhLk1lc2hTcHJpdGUzRDtcclxuICAgICAgICB0aGlzLmFkZFBoeXNpY3MoaGFuZCwgT2JqZWN0Q29uZmlnLkhBTkRfU0laRSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVEZXNrKCl7XHJcbiAgICAgICAgbGV0IGRlc2sgPSBNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZS5hZGRDaGlsZChcclxuICAgICAgICAgICAgbmV3IExheWEuTWVzaFNwcml0ZTNEKExheWEuUHJpbWl0aXZlTWVzaC5jcmVhdGVCb3goXHJcbiAgICAgICAgICAgICAgICBPYmplY3RDb25maWcuREVTS19TSVpFLngsIFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0Q29uZmlnLkRFU0tfU0laRS55LCBcclxuICAgICAgICAgICAgICAgIE9iamVjdENvbmZpZy5ERVNLX1NJWkUuelxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICkgYXMgTGF5YS5NZXNoU3ByaXRlM0Q7XHJcbiAgICAgICAgdGhpcy5hZGRQaHlzaWNzKGRlc2ssIE9iamVjdENvbmZpZy5ERVNLX1NJWkUpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzaztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0T2JqKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLlBvb2xUeXBlLkhhbmQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFuYWdlci5Qb29sTWFuYWdlci5nZXRPYmpCeUZ1bmMoQ29uZmlnLlBvb2xUeXBlLkhhbmQsIHRoaXMuY3JlYXRlSGFuZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDb25maWcuUG9vbFR5cGUuRGVzazpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYW5hZ2VyLlBvb2xNYW5hZ2VyLmdldE9iakJ5RnVuYyhDb25maWcuUG9vbFR5cGUuRGVzaywgdGhpcy5jcmVhdGVEZXNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkUGh5c2ljcyh0YXJnZXQ6TGF5YS5TcHJpdGUzRCwgc2l6ZTpMYXlhLlZlY3RvcjMpe1xyXG4gICAgICAgIGxldCByaWdpZEJvZHk6TGF5YS5SaWdpZGJvZHkzRCA9IHRhcmdldC5hZGRDb21wb25lbnQoTGF5YS5SaWdpZGJvZHkzRCk7Ly9SaWdpZGJvZHkzROWPr+S4jlN0YXRpY0NvbGxpZGVy5ZKMUmlnaWRCb2R5M0TkuqfnlJ/norDmkp5cclxuICAgICAgICByaWdpZEJvZHkuY29sbGlkZXJTaGFwZSA9IG5ldyBMYXlhLkJveENvbGxpZGVyU2hhcGUoc2l6ZS54LCBzaXplLnksIHNpemUueik7XHJcbiAgICAgICAgcmlnaWRCb2R5LmdyYXZpdHkgPSBMYXlhLlZlY3RvcjMuX1pFUk87XHJcbiAgICAgICAgcmlnaWRCb2R5LmlzVHJpZ2dlciA9IHRydWU7XHJcbiAgICAgICAgcmlnaWRCb2R5LmlzS2luZW1hdGljID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkU2NyaXB0KHJpZ2lkT2JqOkNvcmUuUmlnaWRPYmplY3QsIHNjcmlwdCl7XHJcbiAgICAgICAgaWYoIXJpZ2lkT2JqIHx8ICFzY3JpcHQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICByaWdpZE9iai5PYmouYWRkQ29tcG9uZW50KHNjcmlwdCk7XHJcbiAgICAgICAgcmV0dXJuIHNjcmlwdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hhbmdlTW9kZWwob2xkTW9kZWw6TGF5YS5TcHJpdGUzRCwgb2xkUGF0aDpzdHJpbmcsIG5ld1BhdGg6c3RyaW5nKXtcclxuICAgICAgICBpZighb2xkTW9kZWwgfHwgIW9sZE1vZGVsIHx8ICFuZXdQYXRoIHx8IG9sZFBhdGggPT0gbmV3UGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZihvbGRNb2RlbCkge1xyXG4gICAgICAgICAgICBNYW5hZ2VyLlBvb2xNYW5hZ2VyLnJlY292ZXIob2xkUGF0aCwgb2xkTW9kZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1vZGVsID0gTWFuYWdlci5Qb29sTWFuYWdlci5nZXRJdGVtKG5ld1BhdGgpO1xyXG4gICAgICAgIGlmKG1vZGVsIGluc3RhbmNlb2YgTGF5YS5NZXNoU3ByaXRlM0Qpe1xyXG4gICAgICAgICAgICBvbGRNb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBNYW5hZ2VyLlNwYXduTWFuYWdlci5Mb2FkM2RNb2RlbChuZXdQYXRoLCAobWRhdGE6Q29uZmlnLk1vZGVsRGF0YVN0cnVjdCk9PntcclxuICAgICAgICAgICAgICAgIG9sZE1vZGVsID0gbWRhdGEubXNwIGFzIExheWEuTWVzaFNwcml0ZTNEO1xyXG4gICAgICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vQ29yZS9Db3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmlnaWRPYmplY3R7XHJcbiAgICBTdGF0ZTpNYW5hZ2VyLlN0YXRlQmFzZTtcclxuICAgIHByaXZhdGUgX21vZGVsUGF0aDpzdHJpbmc7XHJcbiAgICBPYmo6TGF5YS5NZXNoU3ByaXRlM0Q7XHJcbiAgICBSaWdpZDNEOkxheWEuUmlnaWRib2R5M0Q7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob2JqOkxheWEuTWVzaFNwcml0ZTNEKXtcclxuICAgICAgICB0aGlzLk9iaiA9IG9iajtcclxuICAgICAgICB0aGlzLlN0YXRlID0gbmV3IE1hbmFnZXIuU3RhdGVCYXNlKCk7XHJcbiAgICAgICAgdGhpcy5SaWdpZDNEID0gb2JqLmdldENvbXBvbmVudChMYXlhLlJpZ2lkYm9keTNEKTtcclxuICAgICAgICBpZighdGhpcy5SaWdpZDNEKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJpZ2lkIE9iamVjdCBtaXNzIHJpZ2lkYm9keTNkIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFBvc2l0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuT2JqLnRyYW5zZm9ybS5wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VNb2RlbChwYXRoOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXBhdGggfHwgdGhpcy5fbW9kZWxQYXRoID09IHBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgQ29yZS5PYmplY3RQcm94eS5jaGFuZ2VNb2RlbCh0aGlzLk9iaiwgdGhpcy5fbW9kZWxQYXRoLCBwYXRoKTtcclxuICAgICAgICB0aGlzLl9tb2RlbFBhdGggPSBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZU9iaihrZXk6c3RyaW5nKXtcclxuICAgICAgICBNYW5hZ2VyLlBvb2xNYW5hZ2VyLnJlY292ZXIoa2V5LCB0aGlzLk9iaik7XHJcbiAgICAgICAgdGhpcy5PYmogPSBDb3JlLk9iamVjdFByb3h5LmdldE9iaihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHBvczpMYXlhLlZlY3RvcjMpe1xyXG4gICAgICAgIGlmKHRoaXMuT2JqKVxyXG4gICAgICAgICAgICB0aGlzLk9iai50cmFuc2Zvcm0ucG9zaXRpb24gPSBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdGUoc3RhdGU6c3RyaW5nKXtcclxuICAgICAgICBpZighc3RhdGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5TdGF0ZS5jaGFuZ2VTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0RhdGFCYXNlJztcclxuIiwiaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCBHRXZlbnQgZnJvbSBcIi4uL0NvbW1vbi9HRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVxYm9keUJhc2V7XHJcbiAgICBLZXk6c3RyaW5nO1xyXG4gICAgTW9kdWxlQ29kZTogbnVtYmVyO1xyXG4gICAgUmVxQ29kZTogbnVtYmVyO1xyXG4gICAgU2Vzc2lvbjogc3RyaW5nO1xyXG4gICAgQWNjb3VudEtleTogc3RyaW5nO1xyXG4gICAgUmVxRGF0YTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vZENvZGU6bnVtYmVyLCByZXFDb2RlOm51bWJlciwgc2Vzc2lvbj86c3RyaW5nLCBhY2NOYW1lPzpzdHJpbmcsIHJlcWRhdGE/KXtcclxuICAgICAgICBpZih0eXBlb2YocmVxZGF0YSkgPT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgIC8v5aaC5bey6L2s5o2i5YiZ6L2s5ZueSlNPTlxyXG4gICAgICAgICAgICByZXFkYXRhID0gSlNPTi5wYXJzZShyZXFkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuTW9kdWxlQ29kZSA9IG1vZENvZGU7XHJcbiAgICAgICAgdGhpcy5SZXFDb2RlID0gcmVxQ29kZTtcclxuICAgICAgICB0aGlzLlNlc3Npb24gPSBzZXNzaW9uO1xyXG4gICAgICAgIHRoaXMuQWNjb3VudEtleSA9IGFjY05hbWU7XHJcbiAgICAgICAgdGhpcy5SZXFEYXRhID0gcmVxZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhdGFTdHJ1Y3QgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXJ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfTmV0TWdyOk1hbmFnZXIuSHR0cE1hbmFnZXI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfcmVxa2V5cyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfaHR0cE1ncjpNYW5hZ2VyLkh0dHBNYW5hZ2VyO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyByZXFCb2R5Okh0dHBSZXFib2R5QmFzZTtcclxuXHJcbiAgICBzdGF0aWMgaXNSZXNwb25zZWQ6Ym9vbGVhbjtcclxuICAgIHN0YXRpYyBEaWNlTnVtOm51bWJlcjtcclxuXHJcbiAgICBzdGF0aWMgU2VuZFJlcShyZXFEYXRhPyl7XHJcbiAgICAgICAgdGhpcy5yZXFCb2R5LlJlcURhdGEgPSByZXFEYXRhO1xyXG4gICAgICAgIHRoaXMuX05ldE1nciA9IG5ldyBNYW5hZ2VyLkh0dHBNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5fTmV0TWdyLkNvbm5lY3QoJycsIHRoaXMucmVxQm9keSwgdGhpcy5vblJlc3BvbnNlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQgUmVxQm9keShib2R5KXtcclxuICAgICAgICBpZighdGhpcy5yZXFCb2R5KVxyXG4gICAgICAgICAgICB0aGlzLnJlcUJvZHkgPSBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQgRGF0YShkYXRhKXt9XHJcblxyXG4gICAgc3RhdGljIG9uQ29ubmVjdEVuZChkYXRhOkNvbmZpZy5SZXNwRGF0YVN0cnVjdCl7fVxyXG5cclxuICAgIHN0YXRpYyBvblJlc3BvbnNlKGRhdGE6Q29uZmlnLlJlc3BEYXRhU3RydWN0KXtcclxuICAgICAgICBpZihkYXRhICYmIGRhdGEuUmVzcERhdGEgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuRGF0YSA9IGRhdGEuUmVzcERhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6aKE55WZ5o6l5Y+j77yM6YG/5YWN5ZCO56uv5rKh5pyJ6L+U5Zue5pWw5o2uXHJcbiAgICAgICAgdGhpcy5vbkNvbm5lY3RFbmQoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZXFCb2R5LlJlcURhdGEgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgTmV0TWdyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX05ldE1ncil7XHJcbiAgICAgICAgICAgIHRoaXMuX05ldE1nciA9IG5ldyBNYW5hZ2VyLkh0dHBNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fTmV0TWdyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDb25uZWN0KHJlcWtleTpzdHJpbmcsIHJlcWJvZHk6SHR0cFJlcWJvZHlCYXNlLCBjYWxsYmFjaz86RnVuY3Rpb24sIGlzU2hvd0xvYWRpbmc/LCBJc0dtPzpib29sZWFuKXtcclxuICAgICAgICB0aGlzLk5ldE1nci5Db25uZWN0KHJlcWtleSwgcmVxYm9keSwgdGhpcy5Pbkh0dHBSZXF1ZXN0Q29tcGxldGUuYmluZCh0aGlzKSwgaXNTaG93TG9hZGluZywgSXNHbSk7XHJcbiAgICAgICAgdGhpcy5fcmVxa2V5cy5wdXNoKHJlcWtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIE9uSHR0cFJlcXVlc3RDb21wbGV0ZShkYXRhOkNvbmZpZy5SZXNwRGF0YVN0cnVjdCwgcmVxa2V5OnN0cmluZywgcmVxRGF0YSl7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGV2UmVxQm9keSBleHRlbmRzIEh0dHBSZXFib2R5QmFzZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNCYXNlQm9keUluaXRlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNCb2R5SW5pdGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8v6K+35rGC5L2TXHJcbiAgICBzdGF0aWMgQ29uZmlnQm9keTpIdHRwUmVxYm9keUJhc2U7ICAgLy/phY3nva5cclxuICAgIHN0YXRpYyBMb2dpbkJvZHk6SHR0cFJlcWJvZHlCYXNlOyAgICAvL+eZu+W9lVxyXG4gICAgc3RhdGljIFVwZ3JhZGVCb2R5Okh0dHBSZXFib2R5QmFzZTsgICAgLy/ljYfpmLZcclxuICAgIHN0YXRpYyBBZG9iZVVpSW5mb0JvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc5bGV56S6XHJcbiAgICBzdGF0aWMgQWRvYmVIaXJlV29ya2VyQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzmi5vli5/ku5nku4ZcclxuICAgIHN0YXRpYyBBZG9iZUFkZFdvcmtlckJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc5re75Yqg5bel5L2c5LuZ5LuGXHJcbiAgICBzdGF0aWMgQWRvYmVSZWR1Y2VXb3JrZXJCb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOWHj+WwkeW3peS9nOS7meS7hlxyXG4gICAgc3RhdGljIEFkb2JlVXBTdG9uZUJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc54G155+z5Y2H57qnXHJcbiAgICBzdGF0aWMgQWRvYmVVcEZvb2RCb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOmjn+eJqeWNh+e6p1xyXG4gICAgc3RhdGljIEFkb2JlVXBXb29kQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzmnKjmnZDljYfnuqdcclxuICAgIHN0YXRpYyBBZG9iZVVwSXJvbkJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc6Zmo6ZOB5Y2H57qnXHJcblxyXG4gICAgc3RhdGljIGdldCBpc0luaXRlZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0JvZHlJbml0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobW9kQ29kZTpudW1iZXIsIHJlcUNvZGU6bnVtYmVyLCByZXFEYXRhPyl7XHJcbiAgICAgICAgaWYoIUxvZ2luRGF0YS5TZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BscyBsb2dpbiBmaXJzdCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3VwZXIobW9kQ29kZSwgcmVxQ29kZSwgTG9naW5EYXRhLlNlc3Npb24sIExvZ2luRGF0YS5BY2NvdW50S2V5LCByZXFEYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxudHlwZSBEYW1vbkluZm9UeXBlID0ge1xyXG4gICAgXCJDaGFsbGVuZ2VMZXZlbFwiOiBudW1iZXIsXHJcbn1cclxuXHJcbi8v546p5a625pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJEYXRhIHtcclxuICAgIHN0YXRpYyBOaWtlTmFtZTpzdHJpbmc7XHJcbiAgICBzdGF0aWMgQXZhdGFyOnN0cmluZztcclxuICAgIHN0YXRpYyBQb2ludCA9IDA7XHJcblxyXG4gICAgc3RhdGljIHNldCBEYXRhKGRhdGEpe1xyXG4gICAgICAgIGlmKG51bGwgIT0gZGF0YS5OaWNrTmFtZSl7XHJcbiAgICAgICAgICAgIHRoaXMuTmlrZU5hbWUgPSBkYXRhLk5pY2tOYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobnVsbCAhPSBkYXRhLkF2YXRhcil7XHJcbiAgICAgICAgICAgIHRoaXMuQXZhdGFyID0gZGF0YS5BdmF0YXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHRXZlbnQuRGlzcGF0Y2goQ29tbW9uLkRhdGFQbGF5ZXJFaWQuUmVmcmVzaGVkKTtcclxuICAgIH1cclxufVxyXG5cclxuLy/liIbkuqvor63lj6VcclxuaW50ZXJmYWNlIFNoYXJlRGV0YWlsIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIFNoYXJlVHlwZTpudW1iZXI7ICAgICAgICAgICAgLy/liIbkuqvnsbvlnosx5piO5L+h54mHXHJcbiAgICBTaGFyZVdvcmQ6c3RyaW5nICAvL+WIhuS6q+ivreWPpVxyXG59XHJcblxyXG5leHBvcnQgbGV0IFNoYXJlV29yZCA9IHtcclxuICAgIFwiQ2FyZFdvcmRzXCI6IG5ldyBBcnJheTxTaGFyZURldGFpbD4oKSwgICAgICAgIC8v5piO5L+h54mH5YiG5Lqr6K+t5Y+lXHJcbiAgICBcIkhhbXN0ZXJXb3Jkc1wiOiBuZXcgQXJyYXk8U2hhcmVEZXRhaWw+KCksICAgICAvL+aJk+WcsOm8oOWIhuS6q+ivreWPpVxyXG4gICAgXCJDb2luV29yZHNcIjogbmV3IEFycmF5PFNoYXJlRGV0YWlsPigpLCAgICAgICAgLy/mjqXph5HluIHliIbkuqvor63lj6VcclxuICAgIFwiT3RoZXJXb3Jkc1wiOiBuZXcgQXJyYXk8U2hhcmVEZXRhaWw+KCkgICAgICAgIC8v5YW25LuW5YiG5Lqr6K+t5Y+lXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRTaGFyZVdvcmQoc2hhcmVUeXBlPyl7XHJcbiAgICBsZXQgcmFuZCA9IDA7XHJcbiAgICBzd2l0Y2ggKHNoYXJlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgQ29uZmlnLlNoYXJlV29yZEVudW0uQ2FyZFdvcmRzOlxyXG4gICAgICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogU2hhcmVXb3JkLkNhcmRXb3Jkcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gU2hhcmVXb3JkLkNhcmRXb3Jkc1tyYW5kXS5TaGFyZVdvcmQ7XHJcbiAgICBcclxuICAgICAgICBjYXNlIENvbmZpZy5TaGFyZVdvcmRFbnVtLkhhbXN0ZXJXb3JkczpcclxuICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNoYXJlV29yZC5IYW1zdGVyV29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFNoYXJlV29yZC5IYW1zdGVyV29yZHNbcmFuZF0uU2hhcmVXb3JkO1xyXG5cclxuICAgICAgICBjYXNlIENvbmZpZy5TaGFyZVdvcmRFbnVtLkNvaW5Xb3JkczpcclxuICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNoYXJlV29yZC5Db2luV29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFNoYXJlV29yZC5Db2luV29yZHNbcmFuZF0uU2hhcmVXb3JkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogU2hhcmVXb3JkLk90aGVyV29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFNoYXJlV29yZC5PdGhlcldvcmRzW3JhbmRdLlNoYXJlV29yZDtcclxuICAgIH1cclxufVxyXG5cclxuLy/phY3nva7mlbDmja5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0RhdGEgZXh0ZW5kcyBEYXRhU3RydWN0e1xyXG4gICAgc3RhdGljIHNldCBEYXRhKHJlc3BfZGF0YTpDb25maWcuQ29uZmlnRGF0YVBhcmFtW10pe1xyXG4gICAgICAgIHNldENvbmZpZ0RhdGEocmVzcF9kYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29uZmlnRGF0YShyZXNwX2RhdGE6Q29uZmlnLkNvbmZpZ0RhdGFQYXJhbVtdKXtcclxuICAgIGNvbnNvbGUubG9nKCfphY3nva7mlbDmja7vvJonLCByZXNwX2RhdGEpO1xyXG4gICAgaWYoIXJlc3BfZGF0YSkgcmV0dXJuO1xyXG5cclxuICAgIENvbmZpZy5EYXRhQ29uZmlnLmluc3RhbmNlLnNhdmVDb25maWdWZXJzaW9uKHJlc3BfZGF0YSk7XHJcbiAgICBmb3IobGV0IGkgaW4gcmVzcF9kYXRhKXtcclxuICAgICAgICBpZihyZXNwX2RhdGFbaV0pe1xyXG4gICAgICAgICAgICBDb25maWcuRGF0YUNvbmZpZy5pbnN0YW5jZS5zdG9yZUNvbmZpZyhyZXNwX2RhdGFbaV0uVGFibGVJZCwgcmVzcF9kYXRhW2ldLkRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBDb25maWcuRGF0YUNvbmZpZy5Jc0NvbmZpZ0xvYWRlZCA9IHRydWU7XHJcbiAgICBHRXZlbnQuRGlzcGF0Y2goQ29tbW9uLlNjZW5lTG9naW5FaWQuQ29uZmlnTG9hZGVkKTtcclxufVxyXG5cclxuLy/nmbvlvZXmlbDmja5cclxuZXhwb3J0IGNsYXNzIExvZ2luRGF0YSBleHRlbmRzIERhdGFTdHJ1Y3R7XHJcbiAgICBzdGF0aWMgU2Vzc2lvbjpzdHJpbmc7XHJcbiAgICBzdGF0aWMgQWNjb3VudEtleTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNMb2dpbmVkID0gZmFsc2U7ICAvL+aYr+WQpuW3sueZu+W9lVxyXG5cclxuICAgIHN0YXRpYyBnZXQgSXNMb2dpbmVkKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTG9naW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0IERhdGEoZGF0YTpDb25maWcuTG9naW5SZXNwRGF0YVN0cnVjdCl7XHJcbiAgICAgICAgaWYoZGF0YS5BY2NvdW50QmFzZUluZm8pe1xyXG4gICAgICAgICAgICB0aGlzLlNlc3Npb24gPSBkYXRhLkFjY291bnRCYXNlSW5mby5WZXJpZnlTZXNzaW9uO1xyXG4gICAgICAgICAgICB0aGlzLkFjY291bnRLZXkgPSBkYXRhLkFjY291bnRCYXNlSW5mby5BY2NvdW50S2V5O1xyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhLkRhdGEgPSBkYXRhLkFjY291bnRCYXNlSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGRhdGEuWGl1d2VpSW5mbyl7XHJcbiAgICAgICAgICAgIFBsYXllckRhdGEuRGF0YSA9IGRhdGEuWGl1d2VpSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLl9pc0xvZ2luZWQpe1xyXG4gICAgICAgICAgICB0aGlzLl9pc0xvZ2luZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUxvZ2luRWlkLkxvZ2luU3VjY2Vzcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5Y2H57qn5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBVcGdyYWRlRGF0YSBleHRlbmRzIERhdGFTdHJ1Y3R7XHJcbiAgICBzdGF0aWMgc2V0IERhdGEocmVzcERhdGEpe1xyXG4gICAgICAgIGlmKHJlc3BEYXRhLlhpdXdlaUluZm8pe1xyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhLkRhdGEgPSByZXNwRGF0YS5YaXV3ZWlJbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5DaGFyYWN0ZXJDdWx0aXZhdGlvbkVpZC5VcGdyYWRlLCByZXNwRGF0YS5VcE9rKTtcclxuICAgIH1cclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5cclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTc1MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTEzMzQ7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cImZpeGVkd2lkdGhcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cInZlcnRpY2FsXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cInRvcFwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJsZWZ0XCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG5cclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJcclxuaW1wb3J0IHsgRGF0YUNvbmZpZyB9IGZyb20gXCIuL0NvbmZpZy9EYXRhQ29uZmlnXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tICcuL0RhdGEvRGF0YSc7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIExvZ2ljIGZyb20gXCIuL0xvZ2ljL0xvZ2ljXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lICBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlciB7XHJcblx0cHJvdGVjdGVkIHN0YXRpYyBfaW5zdDpHYW1lU2NlbmU7XHJcblx0cHVibGljIGxvYWRpbmdVaVBhY2thZ2U6c3RyaW5nO1xyXG5cclxuXHRzdGF0aWMgZ2V0IGluc3QoKXtcclxuXHRcdHJldHVybiB0aGlzLl9pbnN0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIG9uQXdha2UoKXtcclxuXHRcdEdhbWVTY2VuZS5faW5zdCA9IHRoaXM7XHJcblx0XHR0aGlzLm93bmVyLmFkZENvbXBvbmVudChMb2dpYy5HcmFiTG9naWMpXHJcblxyXG5cdFx0Ly8gdGhpcy5pbml0KCk7XHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuQ29uZmlnTG9hZGVkLCB0aGlzLm9uQ29uZmlnTG9hZGVkKTtcclxuXHRcdC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5TZXJ2aWNlQ2hvb3NlZCwgdGhpcy5vblZlcnNpb25DaGVja2VkKTtcclxuXHRcdC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MsIHRoaXMub25Mb2dpbmVkKTtcclxuXHRcdC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5TaW1Qcm9ncmVzc0VuZCwgdGhpcy5vcGVuTWFpblVpKTtcclxuXHR9XHJcblxyXG4gICAgcHVibGljIGluaXQoKXtcclxuXHRcdC8vIENvbW1vbi5Kc0NhbGxKYXZhKFwiZGVtby5KU0JyaWRnZVwiLCBcInRlc3RTdHJpbmdcIiwgXCJIZWxsbyBiYWJ5IVwiKTtcclxuXHRcdC8v5ri45oiP5byA5Y+R54mI5pysXHJcblx0XHRNYW5hZ2VyLlZlcnNpb25NYW5hZ2VyLlZlcnNpb24gPSBDb25maWcuVmVyc2lvbkNvbmZpZy5EZXZlbG9wO1xyXG5cclxuXHRcdC8v5Yqo5oCB5Yqg6L29XHJcblx0XHRpZihMYXlhLkJyb3dzZXIub25NaW5pR2FtZSl7XHJcblx0XHRcdExheWEuVVJMLmJhc2VQYXRoID0gXCJodHRwczovLzcwNi5saWdodHBhdy5jbi9oNWMvcmVzQ2FjaGUvRGlldHlSb2FkL1wiO1x0XHJcblx0XHRcdC8vIExheWEuVVJMLmJhc2VQYXRoID0gXCJodHRwczovL3MzLmNuLW5vcnRod2VzdC0xLmFtYXpvbmF3cy5jb20uY24vaDVjbGllbnQvRGVtb3MvRHJlYW1DaGVzc1wiO1xyXG5cdFx0XHRMYXlhLk1pbmlBZHB0ZXIubmF0aXZlZmlsZXMgPSAgW1xyXG5cdFx0XHRcdFwibGlic1wiLFxyXG5cdFx0XHRcdFwicmVzL2NvbmZpZ1wiLFxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pbml0RmFpcnlndWkoKTtcclxuXHRcdHRoaXMubG9hZExvZ2luVWlSZXMoKTtcclxuXHRcdC8vIENvbW1vbi5sb2FkQWxsU3VicGFja2FnZXModGhpcywgdGhpcy5sb2FkTG9naW5VaVJlcyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRGYWlyeWd1aSgpe1xyXG5cdFx0Zmd1aS5VSUNvbmZpZy5wYWNrYWdlRmlsZUV4dGVuc2lvbiA9IFwidHh0XCI7XHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKGZndWkuR1Jvb3QuaW5zdC5kaXNwbGF5T2JqZWN0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9hZExvZ2luVWlSZXMoKXtcclxuXHRcdENvbW1vbi5SZXNvdXJjZS5sb2FkKENvbmZpZy5sb2dpblJlc1VybHMsIHRoaXMsIHRoaXMub25Mb2dpbmdSZXNMb2FkZWQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkxvZ2luZ1Jlc0xvYWRlZCgpe1xyXG5cdFx0dGhpcy5wcmVMb2dpbigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2FkUmVzKCl7XHJcblx0XHRDb21tb24uUmVzb3VyY2UubG9hZChDb25maWcudXJscywgdGhpcywgdGhpcy5vblJlc0xvYWRlZCwgdGhpcy5vbkxvYWRpbmcpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkxvYWRpbmcocHJvZ3Jlc3M6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCLliqDovb3ov5vluqY6IFwiICsgcHJvZ3Jlc3MpO1xyXG5cdFx0Ly8gTWFuYWdlci5Mb2FkaW5nUHJvZ3Jlc3NNYW5hZ2VyLkluc3Quc2hvd1VpUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblJlc0xvYWRlZChpbmZvKXtcclxuXHRcdGlmKCFpbmZvKXtcclxuXHRcdFx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0xvYWQgZmFpcnlndWkgcGFja2FnZSBmYWlsJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly/lhaznlKjljIVcclxuXHRcdENvbmZpZy5VSUNvbmZpZy5VSVBrZ3MuZm9yRWFjaChwa2c9PntcclxuXHRcdFx0Q29tbW9uLlJlc291cmNlLmFkZFVpUGFja2FnZShwa2cpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Q29uZmlnLlVJQ29uZmlnLkxvZ2luUGFja2FnZUxvYWRlZCA9IHRydWU7XHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlNjZW5lTG9naW5FaWQuUGFja2FnZUxvYWRlZCk7XHJcblx0XHR0aGlzLmxvYWRDb25maWcoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcHJlTG9naW4oKXtcclxuXHRcdHRoaXMub3BlbkxvZ2luVUkoKTtcclxuXHRcdHRoaXMuY2hlY2tWZXJzaW9uKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNoZWNrVmVyc2lvbigpe1xyXG5cdFx0c3dpdGNoIChNYW5hZ2VyLlZlcnNpb25NYW5hZ2VyLlZlcnNpb24pIHtcclxuXHRcdFx0Y2FzZSBDb25maWcuVmVyc2lvbkNvbmZpZy5EZXZlbG9wOlxyXG5cdFx0XHRcdHRoaXMub3BlbkNob29zZVNlcnZpY2VVaSgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIENvbmZpZy5WZXJzaW9uQ29uZmlnLlJlbGVhc2U6XHJcblx0XHRcdFx0Ly/lr7nlpJbniYjmnKznmbvlvZXlpJbnvZFcclxuXHRcdFx0XHRDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwgPSBDb25maWcuTmV0Q29uZmlnLkh0dHBSZXF1ZXN0VXJsO1xyXG5cclxuXHRcdFx0XHQvLyBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuXHRcdFx0XHQvLyBcdFd4VXRpbHMuTG9naW4odHJ1ZSk7XHJcblx0XHRcdFx0Ly8gfWVsc2V7XHJcblx0XHRcdFx0Ly8gXHR0aGlzLm9uVmVyc2lvbkNoZWNrZWQoKTtcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uVmVyc2lvbkNoZWNrZWQoKXtcclxuXHRcdHRoaXMubG9hZFJlcygpO1xyXG5cdFx0Ly8gdGhpcy5sb2dpbkdhbWUoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb3BlbkxvZ2luVUkoKXtcclxuXHRcdE1hbmFnZXIuTG9hZGluZ1Byb2dyZXNzTWFuYWdlci5JbnN0LnNob3dVaVByb2dyZXNzKDUpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvcGVuQ2hvb3NlU2VydmljZVVpKCl7XHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoQ29uZmlnLlZpZXdLaXQuQ2hvb3NlU2VydmljZS5LZXkpO1xyXG5cdH1cclxuXHJcblx0bG9hZENvbmZpZygpe1xyXG5cdFx0Ly/mi4nlj5bphY3nva5cclxuXHRcdC8vIERhdGEuQ29uZmlnRGF0YS5TZW5kUmVxKENvbmZpZy5EYXRhQ29uZmlnLmxvY2FsQ29uZmlncyk7XHJcblx0XHREYXRhLkNvbmZpZ0RhdGEuU2VuZFJlcShbXSk7XHJcblxyXG5cdFx0Ly/mi4nlj5bmnKzlnLDphY3nva7vvIznm67liY3nlLHlkI7nq6/lj5HpgIHvvIzmmoLlvIPnlKhcclxuXHRcdC8vIERhdGFDb25maWcuaW5zdGFuY2UuaW5pdENvbmZpZyh0aGlzLmNyZWF0ZTJkU2NlbmUuYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uQ29uZmlnTG9hZGVkKCl7XHJcblx0XHR0aGlzLmxvZ2luR2FtZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2dpbkdhbWUoKSB7XHJcblx0XHRpZihDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwgPT0gQ29uZmlnLk5ldENvbmZpZy5Mb2NhbFJlcXVlc3RVcmwpe1xyXG5cdFx0XHR0aGlzLnRlc3RMb2dpbigpO1xyXG5cdFx0XHQvLyBXeFV0aWxzLkxvZ2luKHRydWUpO1xyXG5cdFx0fWVsc2UgaWYoQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID09IENvbmZpZy5OZXRDb25maWcuTG9jYWxXZWNoYXRSZXF1ZXN0VXJsICYmIENvbW1vbi5pc09uV2VpeGluKCkpe1xyXG5cdFx0XHQvLyBXeFV0aWxzLkxvZ2luKHRydWUpO1xyXG5cdFx0fWVsc2UgaWYoQ29tbW9uLmlzT25XZWl4aW4oKSl7XHJcblx0XHRcdC8vIFd4VXRpbHMuTG9naW4odHJ1ZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy50ZXN0TG9naW4oKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRlc3RMb2dpbigpe1xyXG5cdFx0bGV0IGFjYzpzdHJpbmc7XHJcblx0XHRsZXQgdGVtcE5hbWUgPSBDb25maWcuTmV0Q29uZmlnLlRlbXBOYW1lO1xyXG5cdFx0aWYodGVtcE5hbWUpe1xyXG5cdFx0XHRhY2MgPSB0ZW1wTmFtZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHQvL+maj+acuuW4kOWPt+eZu+W9le+8jOaWueS+v+a1i+ivlVxyXG5cdFx0XHRhY2MgPSBcInRlbXBcIiArIE1hdGgucmFuZG9tKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHJlcWRhdGEgPSBuZXcgQ29uZmlnLkxvZ2luUmVxRGF0YShhY2MpO1xyXG5cdFx0RGF0YS5Mb2dpbkRhdGEuU2VuZFJlcShyZXFkYXRhKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Mb2dpbmVkKCl7XHJcblx0XHR0aGlzLm9wZW5NYWluVWkoKTtcclxuXHR9XHJcblxyXG5cdG9wZW5NYWluVWkoKXtcclxuXHRcdC8vIGlmKCFDb25maWcuVUlDb25maWcuTG9naW5QYWNrYWdlTG9hZGVkIHx8ICFDb25maWcuRGF0YUNvbmZpZy5Jc0NvbmZpZ0xvYWRlZCkge1xyXG5cdFx0Ly8gXHRMYXlhLnRpbWVyLm9uY2UoNTAwLCB0aGlzLCB0aGlzLm9wZW5NYWluVWkpO1xyXG5cdFx0Ly8gXHRyZXR1cm47XHJcblx0XHQvLyB9O1xyXG5cclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uU2NlbmVFbnRlckVpZC5NYWluTWVudSk7XHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoQ29uZmlnLlZpZXdLaXQuTWFpbk1lbnUuS2V5KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaXNpb25TY3JpcHRCYXNlIGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVyIHtcclxuXHRwdWJsaWMga2luZW1hdGljU3ByaXRlOkxheWEuU3ByaXRlM0Q7XHJcblx0cHJvdGVjdGVkIF9pc0hpdCA9IGZhbHNlO1xyXG5cclxuXHRnZXQgSXNIaXQoKXtcclxuXHRcdHJldHVybiB0aGlzLl9pc0hpdDtcclxuXHR9XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJTdGF0dXMoKXtcclxuXHRcdHRoaXMuX2lzSGl0ID0gZmFsc2U7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJFbnRlcihvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdFx0aWYgKG90aGVyLm93bmVyID09PSB0aGlzLmtpbmVtYXRpY1Nwcml0ZSl7XHJcblx0XHRcdHRoaXMuX2lzSGl0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlclN0YXkob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlckV4aXQob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uRW50ZXIoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHRcdGlmIChjb2xsaXNpb24ub3RoZXIub3duZXIgPT09IHRoaXMua2luZW1hdGljU3ByaXRlKXtcclxuXHRcdFx0dGhpcy5faXNIaXQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25TdGF5KGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvbkV4aXQoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHR9XHJcblxyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVza0NvbGxpc2lvblNjcmlwdCBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlciB7XHJcblx0cHVibGljIGtpbmVtYXRpY1Nwcml0ZTpMYXlhLlNwcml0ZTNEO1xyXG5cdF9pc0hpdCA9IGZhbHNlO1xyXG5cclxuXHRnZXQgSXNIaXQoKXtcclxuXHRcdHJldHVybiB0aGlzLl9pc0hpdDtcclxuXHR9XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJTdGF0dXMoKXtcclxuXHRcdHRoaXMuX2lzSGl0ID0gZmFsc2U7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJFbnRlcihvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdFx0aWYgKG90aGVyLm93bmVyID09PSB0aGlzLmtpbmVtYXRpY1Nwcml0ZSl7XHJcblx0XHRcdHRoaXMuX2lzSGl0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlclN0YXkob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlckV4aXQob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uRW50ZXIoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHRcdGlmIChjb2xsaXNpb24ub3RoZXIub3duZXIgPT09IHRoaXMua2luZW1hdGljU3ByaXRlKXtcclxuXHRcdFx0dGhpcy5faXNIaXQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25TdGF5KGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvbkV4aXQoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHR9XHJcblxyXG59IiwiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9Db3JlL0NvcmVcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyBMb2dpYyBmcm9tIFwiLi9Mb2dpY1wiO1xyXG5cclxubGV0IGtub2NrX3RpbWUgPSAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYWJMb2dpYyBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlciB7XHJcbiAgICBJc0luaXRlZCA9IGZhbHNlO1xyXG4gICAgVmRpciA9IG5ldyBMYXlhLlZlY3RvcjMoKTtcclxuICAgIERlc2tQb3NpdGlvbiA9IG5ldyBMYXlhLlZlY3RvcjMoKTtcclxuICAgIEdTY2VuZTpMYXlhLlNjZW5lM0Q7XHJcbiAgICBIYW5kU3RhdGU6c3RyaW5nO1xyXG4gICAgRGVza0NsYXNzOkNvcmUuUmlnaWRPYmplY3Q7XHJcbiAgICBIYW5kQ2xhc3M6Q29yZS5SaWdpZE9iamVjdDtcclxuICAgIGRlc2tTY3JpcHQ6TG9naWMuRGVza0NvbGxpc2lvblNjcmlwdDtcclxuICAgIGhhbmRTY3JpcHQ6TG9naWMuSGFuZENvbGxpc2lvblNjcmlwdDtcclxuICAgIHByaXZhdGUgdGltZUxpbmU6TGF5YS5UaW1lTGluZSA9IG5ldyBMYXlhLlRpbWVMaW5lKCk7XHJcblxyXG4gICAgb25Bd2FrZSgpe1xyXG4gICAgICAgIHRoaXMuR1NjZW5lID0gTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUgYXMgTGF5YS5TY2VuZTNEO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzID0gbmV3IENvcmUuUmlnaWRPYmplY3QoQ29yZS5PYmplY3RQcm94eS5nZXRPYmooQ29uZmlnLlBvb2xUeXBlLkRlc2spKTtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5zZXRQb3NpdGlvbihDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfUE9TKTtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcyA9IG5ldyBDb3JlLlJpZ2lkT2JqZWN0KENvcmUuT2JqZWN0UHJveHkuZ2V0T2JqKENvbmZpZy5Qb29sVHlwZS5IYW5kKSk7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3Muc2V0UG9zaXRpb24oQ29uZmlnLk9iamVjdENvbmZpZy5IQU5EX1BPUyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb2xsaXNpb25TY3JpcHQoKTtcclxuICAgICAgICAvLyBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMua25vY2tPbmNlKTtcclxuICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMubW92ZUhhbmQpO1xyXG4gICAgICAgIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5ET1VCTEVfQ0xJQ0ssIHRoaXMsIHRoaXMucmVzdGFydCk7XHJcblxyXG4gICAgICAgIHRoaXMuSXNJbml0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVzZXRWZWMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVRpbWVyTGluZSgpO1xyXG4gICAgICAgIHRoaXMubW92ZURlc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDb2xsaXNpb25TY3JpcHQoKXtcclxuICAgICAgICB0aGlzLmRlc2tTY3JpcHQgPSBDb3JlLk9iamVjdFByb3h5LmFkZFNjcmlwdCh0aGlzLkRlc2tDbGFzcywgTG9naWMuRGVza0NvbGxpc2lvblNjcmlwdCkgYXMgTG9naWMuRGVza0NvbGxpc2lvblNjcmlwdDtcclxuICAgICAgICB0aGlzLmRlc2tTY3JpcHQua2luZW1hdGljU3ByaXRlID0gdGhpcy5IYW5kQ2xhc3MuT2JqO1xyXG4gICAgICAgIHRoaXMuaGFuZFNjcmlwdCA9IENvcmUuT2JqZWN0UHJveHkuYWRkU2NyaXB0KHRoaXMuSGFuZENsYXNzLCBMb2dpYy5IYW5kQ29sbGlzaW9uU2NyaXB0KSBhcyBMb2dpYy5IYW5kQ29sbGlzaW9uU2NyaXB0O1xyXG4gICAgICAgIHRoaXMuaGFuZFNjcmlwdC5raW5lbWF0aWNTcHJpdGUgPSB0aGlzLkRlc2tDbGFzcy5PYmo7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNvbXBsZXRlKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGtub2NrX3RpbWUrKztcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRpbWVMaW5lIGNvbXBsZXRlISEhIVwiLCBrbm9ja190aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTGFiZWwobGFiZWw6U3RyaW5nKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMYWJlbE5hbWU6XCIgKyBsYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVUaW1lckxpbmUoKXtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLm9uKExheWEuRXZlbnQuQ09NUExFVEUsdGhpcyx0aGlzLm9uQ29tcGxldGUpO1xyXG4gICAgICAgIHRoaXMudGltZUxpbmUub24oTGF5YS5FdmVudC5MQUJFTCwgdGhpcywgdGhpcy5vbkxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0VmVjKCl7XHJcbiAgICAgICAgdGhpcy5WZGlyLnggPSBDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfUE9TLng7XHJcbiAgICAgICAgdGhpcy5WZGlyLnkgPSBDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfUE9TLnk7XHJcbiAgICAgICAgdGhpcy5WZGlyLnogPSBDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfUE9TLnpcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGtub2NrT25jZSgpe1xyXG4gICAgICAgIHRoaXMucmVzZXRWZWMoKTtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5hZGRLbm9jaygpO1xyXG4gICAgICAgIHRoaXMuYWRkS25vY2soMSk7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5wbGF5KDAsZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkU3RheShfc3RheVRpbWU/Om51bWJlcil7XHJcbiAgICAgICAgX3N0YXlUaW1lID0gX3N0YXlUaW1lPyBfc3RheVRpbWUgKiAxMDAwOiAwO1xyXG4gICAgICAgIHRoaXMudGltZUxpbmUuYWRkTGFiZWwoXCJzdGF5XCIsMCkudG8odGhpcy5WZGlyLCB7eTpDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfUE9TLnl9LCBfc3RheVRpbWUsIG51bGwsIDApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRLbm9jayhfZGVsdGFUaW1lPzpudW1iZXIpe1xyXG4gICAgICAgIF9kZWx0YVRpbWUgPSBfZGVsdGFUaW1lPyBfZGVsdGFUaW1lICogMTAwMDogMDtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lXHJcbiAgICAgICAgICAgIC50byh0aGlzLlZkaXIse3k6Q29uZmlnLk9iamVjdENvbmZpZy5ERVNLX0VORF9QT1MueX0sMjAwLG51bGwsX2RlbHRhVGltZSlcclxuICAgICAgICAgICAgLnRvKHRoaXMuVmRpcix7eTpDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfUE9TLnl9LDIwMCxudWxsLDApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5kZXNrU2NyaXB0LmNsZWFyU3RhdHVzKCk7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLklERUwpO1xyXG4gICAgICAgIHRoaXMubW92ZURlc2soKTtcclxuICAgICAgICB0aGlzLnJlc2V0SGFuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV3TGV2ZWwoKXtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuREVTS19MRUFWRSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRGVzaygpe1xyXG4gICAgICAgIC8vIHRoaXMuZGVza0Rvd24oKTtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9GT1JXQVJEKTtcclxuICAgICAgICB0aGlzLnJlc2V0VmVjKCk7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuYWRkS25vY2soKTtcclxuICAgICAgICB0aGlzLmFkZEtub2NrKDEpO1xyXG4gICAgICAgIHRoaXMudGltZUxpbmUucGxheSgwLHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXREZXNrKCl7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3Muc2V0UG9zaXRpb24oQ29uZmlnLk9iamVjdENvbmZpZy5ERVNLX1BPUyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9wRGVzaygpe1xyXG4gICAgICAgIHRoaXMudGltZUxpbmUucGF1c2UoKTtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuU1RPUCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZXNrRG93bigpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZlYyA9IHRoaXMuRGVza0NsYXNzLlBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy55IC09IDAuMztcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5zZXRQb3NpdGlvbih2ZWMpO1xyXG5cclxuICAgICAgICBpZih2ZWMueSA8PSBDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfRU5EX1BPUy55KXtcclxuICAgICAgICAgICAgdGhpcy5EZXNrQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLk1PVkVfQkFDSyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVza1VwKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdmVjID0gdGhpcy5EZXNrQ2xhc3MuUG9zaXRpb247XHJcbiAgICAgICAgdmVjLnkgKz0gMC4zO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLnNldFBvc2l0aW9uKHZlYyk7XHJcblxyXG4gICAgICAgIGlmKHZlYy55ID49IENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueSl7XHJcbiAgICAgICAgICAgIHRoaXMuRGVza0NsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0ZPUldBUkQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlc2tFbnRlcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB2ZWMgPSB0aGlzLkRlc2tDbGFzcy5Qb3NpdGlvbjtcclxuICAgICAgICB2ZWMueCAtPSAwLjE7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3Muc2V0UG9zaXRpb24odmVjKTtcclxuXHJcbiAgICAgICAgaWYodmVjLnggPD0gQ29uZmlnLk9iamVjdENvbmZpZy5ERVNLX1BPUy54KXtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRGVzaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRGVza0Rpc2FwcGVhcigpe1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLmNoYW5nZU9iaihDb25maWcuUG9vbFR5cGUuRGVzayk7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3Muc2V0UG9zaXRpb24oQ29uZmlnLk9iamVjdENvbmZpZy5ERVNLX0VOVEVSX1BPUyk7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLkRFU0tfRU5URVIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVza0xlYXZlKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHZlYyA9IHRoaXMuRGVza0NsYXNzLlBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy54IC09IDAuMTtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5zZXRQb3NpdGlvbih2ZWMpO1xyXG5cclxuICAgICAgICBpZih2ZWMueCA8PSAtMil7XHJcbiAgICAgICAgICAgIHRoaXMub25EZXNrRGlzYXBwZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURlc2soKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLmRlc2tTY3JpcHQuSXNIaXQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RGVzaygpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BEZXNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5EZXNrQ2xhc3MuU3RhdGUuY3VyU3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDb25maWcuU3RhdGVDb25maWcuSURFTDpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDb25maWcuU3RhdGVDb25maWcuTU9WRV9GT1JXQVJEOlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kZXNrRG93bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EZXNrQ2xhc3Muc2V0UG9zaXRpb24odGhpcy5WZGlyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDb25maWcuU3RhdGVDb25maWcuTU9WRV9CQUNLOlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kZXNrVXAoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDb25maWcuU3RhdGVDb25maWcuREVTS19MRUFWRTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVza0xlYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLlN0YXRlQ29uZmlnLkRFU0tfRU5URVI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2tFbnRlcigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVIYW5kKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5IYW5kQ2xhc3MuU3RhdGUuY3VyU3RhdGUpO1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYodGhpcy5IYW5kQ2xhc3MuU3RhdGUuY3VyU3RhdGUgPT0gQ29uZmlnLlN0YXRlQ29uZmlnLlNUT1ApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5IYW5kQ2xhc3MuU3RhdGUuY3VyU3RhdGUgPT0gQ29uZmlnLlN0YXRlQ29uZmlnLklERUwpe1xyXG4gICAgICAgICAgICB0aGlzLkhhbmRDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9GT1JXQVJEKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZEZvcndhcmQoKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB2ZWMgPSB0aGlzLkhhbmRDbGFzcy5Qb3NpdGlvbjtcclxuICAgICAgICB2ZWMueCArPSBDb25maWcuT2JqZWN0Q29uZmlnLlNQRUVEX0hBTkQgKiBMYXlhLnRpbWVyLmRlbHRhO1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLnNldFBvc2l0aW9uKHZlYyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSGFuZENsYXNzLlBvc2l0aW9uLnggPj0gQ29uZmlnLk9iamVjdENvbmZpZy5IQU5EX0VORF9QT1MueCl7XHJcbiAgICAgICAgICAgIHRoaXMuSGFuZENsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0JBQ0spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUmVhY2hGaW5pc2goKXtcclxuICAgICAgICB0aGlzLnJlc2V0SGFuZCgpO1xyXG4gICAgICAgIC8v5Yiw6L6+57uI54K55Yqg5YiGXHJcbiAgICAgICAgRGF0YS5QbGF5ZXJEYXRhLlBvaW50ICs9IDEwMDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+5b6X5YiG77yaXCIsRGF0YS5QbGF5ZXJEYXRhLlBvaW50KTtcclxuICAgICAgICBpZihEYXRhLlBsYXllckRhdGEuUG9pbnQgPj0gMzAwKXtcclxuICAgICAgICAgICAgdGhpcy5uZXdMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRCYWNrKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLkhhbmRDbGFzcy5Qb3NpdGlvbi54IDw9IENvbmZpZy5PYmplY3RDb25maWcuSEFORF9QT1MueCl7XHJcbiAgICAgICAgICAgIHRoaXMub25SZWFjaEZpbmlzaCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLkhhbmRDbGFzcy5Qb3NpdGlvbi54IDwgQ29uZmlnLk9iamVjdENvbmZpZy5ERVNLX1BPUy54KXtcclxuICAgICAgICAgICAgdGhpcy5IYW5kQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLkJBQ0tfUEFTU0VEKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2ZWMgPSB0aGlzLkhhbmRDbGFzcy5Qb3NpdGlvbjtcclxuICAgICAgICB2ZWMueCAtPSBDb25maWcuT2JqZWN0Q29uZmlnLlNQRUVEX0hBTkQgKiBMYXlhLnRpbWVyLmRlbHRhOztcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5zZXRQb3NpdGlvbih2ZWMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRIYW5kKCl7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3Muc2V0UG9zaXRpb24oQ29uZmlnLk9iamVjdENvbmZpZy5IQU5EX1BPUyk7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLklERUwpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlSGFuZEdyYXZpdHkoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcEhhbmQoKXtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuU1RPUCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmFibGVIYW5kR3Jhdml0eShfb3Blbjpib29sZWFuKXtcclxuICAgICAgICBpZih0aGlzLkhhbmRDbGFzcy5SaWdpZDNELmlzS2luZW1hdGljID09ICFfb3BlbikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5SaWdpZDNELmlzS2luZW1hdGljID0gIV9vcGVuO1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLlJpZ2lkM0QuZ3Jhdml0eSA9IF9vcGVuPyBuZXcgTGF5YS5WZWN0b3IzKDAsIC0xMCwgMCk6IExheWEuVmVjdG9yMy5fWkVSTztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uSGFuZEhpdCgpe1xyXG4gICAgICAgIERhdGEuUGxheWVyRGF0YS5Qb2ludCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdG9wSGFuZCgpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlSGFuZEdyYXZpdHkodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZGVza1NjcmlwdC5Jc0hpdCl7XHJcbiAgICAgICAgICAgIHRoaXMub25IYW5kSGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5IYW5kQ2xhc3MuU3RhdGUuY3VyU3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDb25maWcuU3RhdGVDb25maWcuSURFTDpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDb25maWcuU3RhdGVDb25maWcuTU9WRV9GT1JXQVJEOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kRm9yd2FyZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDb25maWcuU3RhdGVDb25maWcuTU9WRV9CQUNLOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kQmFjaygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDb25maWcuU3RhdGVDb25maWcuQkFDS19QQVNTRUQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRCYWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5q+P5LiA5bin5pe26Ze077yaJyxMYXlhLnRpbWVyLmRlbHRhKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURlc2soKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUhhbmQoKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhbmRDb2xsaXNpb25TY3JpcHQgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG5cdHB1YmxpYyBraW5lbWF0aWNTcHJpdGU6TGF5YS5TcHJpdGUzRDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJFbnRlcihvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJTdGF5KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJFeGl0KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uRW50ZXIoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi56Kw5pKe77yBXCIpO1xyXG5cdFx0aWYgKGNvbGxpc2lvbi5vdGhlci5vd25lciA9PT0gdGhpcy5raW5lbWF0aWNTcHJpdGUpe1xyXG5cdFx0XHQvLyAodGhpcy5vd25lci5nZXRDb21wb25lbnQoTGF5YS5SaWdpZGJvZHkzRCkgYXMgTGF5YS5SaWdpZGJvZHkzRCkuZ3Jhdml0eSA9IG5ldyBMYXlhLlZlY3RvcjMoMCwgLTEwLCAwKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uU3RheShjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25FeGl0KGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0fVxyXG5cclxufSIsImV4cG9ydCAqIGZyb20gJy4vR3JhYkxvZ2ljJztcclxuZXhwb3J0ICogZnJvbSAnLi9EZXNrQ29sbGlzaW9uU2NyaXB0JztcclxuZXhwb3J0ICogZnJvbSAnLi9IYW5kQ29sbGlzaW9uU2NyaXB0JztcclxuZXhwb3J0ICogZnJvbSAnLi9Db2xsaXNpb25TY3JpcHRCYXNlJztcclxuIiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gXCIuL0dhbWVTY2VuZVwiO1xyXG5cclxuY2xhc3MgTWFpbiB7XHJcblx0cHJpdmF0ZSBhbmltYXRpb25zOkFycmF5PHN0cmluZz4gPSBbJ2F0dGFjazEnLCAnYXR0YWNrMicsICdhdHRhY2szJywgJ3dpbiddO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxyXG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG5cdFx0Ly/miYvmnLrkuI5QQ+mAgumFjeS4jeWQjFxyXG5cdFx0aWYoTGF5YS5Ccm93c2VyLm9uUEMpe1xyXG5cdFx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IExheWEuU3RhZ2UuU0NBTEVfU0hPV0FMTDtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IExheWEuU3RhZ2UuU0NBTEVfRklYRURfV0lEVEg7XHJcblx0XHR9XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBMYXlhLlN0YWdlLlNDUkVFTl9WRVJUSUNBTDtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWU7XHJcblxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKSB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcblxyXG5cdG9uQ29uZmlnTG9hZGVkKCkge1xyXG5cdFx0TWFuYWdlci5TY2VuZU1hbmFnZXIuY3JlYXRlM2RTY2VuZSgpO1xyXG5cclxuXHRcdC8vIENvbW1vbi5sb2FkQWxsU3VicGFja2FnZXModGhpcywgdGhpcy5vblN1YlBhY2thZ2VMb2FkZWQpO1xyXG5cdH1cclxuXHJcblx0b25TdWJQYWNrYWdlTG9hZGVkKCl7XHJcblx0XHRNYW5hZ2VyLlNjZW5lTWFuYWdlci5jcmVhdGUzZFNjZW5lKCk7XHJcblx0fVxyXG59XHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7XHJcbiIsIu+7v2ltcG9ydCAqIGFzIENvbmZpZyBmcm9tICcuLi9Db25maWcvQ29uZmlnJztcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VNYW5hZ2VyIGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVyIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX2luc3Q6QmFzZU1hbmFnZXI7XHJcbiAgICBwcml2YXRlIF9tc2dUeXBlOm51bWJlcjtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3QoKXtcclxuICAgICAgICBpZighTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgY3JlYWUgYSBzY2VuZSBmaXJzdCEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRoaXMuX2luc3Qpe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0ID0gTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUuZ2V0Q29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICBpZighdGhpcy5faW5zdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0ID0gTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUuYWRkQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG4vL+eCueWHu+eJueaViFxyXG5leHBvcnQgY2xhc3MgQ2xpY2tFZmZlY3RNYW5hZ2Vye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgVG91Y2hDb206Zmd1aS5HQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgc3RhdGljIEluaXQoKXtcclxuICAgICAgICBpZih0aGlzLlRvdWNoQ29tKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGdyb290SW5zdCA9IGZndWkuR1Jvb3QuaW5zdDtcclxuXHRcdHRoaXMuVG91Y2hDb20gPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3RGcm9tVVJMKCd1aTovL01haW5VSS9Db21wb25lbnRfZGlhbmppJykuYXNDb207XHJcblx0XHRncm9vdEluc3QuYWRkQ2hpbGQodGhpcy5Ub3VjaENvbSk7XHJcblx0XHR0aGlzLlRvdWNoQ29tLnNvcnRpbmdPcmRlciA9IENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuQ2xpY2tFZmZlY3Q7XHJcbiAgICAgICAgLy8gdGhpcy5Ub3VjaENvbS5ub2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XHJcbiAgICAgICAgLy8gdGhpcy5Ub3VjaENvbS5kaXNwbGF5T2JqZWN0LnNldFNpYmxpbmdJbmRleCh0aGlzLlRvdWNoQ29tLm5vZGUucGFyZW50LmNoaWxkcmVuQ291bnQpO1xyXG5cclxuICAgICAgICBncm9vdEluc3QuZGlzcGxheU9iamVjdC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLnBsYXlDbGlja0VmZmVjdCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtjYy5FdmVudC5FdmVudFRvdWNofSBldnRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBsYXlDbGlja0VmZmVjdChldnQpe1xyXG4gICAgICAgIGxldCBwb3MgPSBldnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLlRvdWNoQ29tLnNldFhZKHBvcy54LCBmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gcG9zLnkpO1xyXG4gICAgICAgIHRoaXMuVG91Y2hDb20uZ2V0VHJhbnNpdGlvbignRWZmZWN0X1QnKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhpZGUoKXtcclxuICAgICAgICB0aGlzLlRvdWNoQ29tLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAvLyBmZ3VpLkdSb290Lmluc3Qubm9kZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3coKXtcclxuICAgICAgICB0aGlzLlRvdWNoQ29tLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vVUkvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0IHtEZXZSZXFCb2R5LCBMb2dpbkRhdGF9IGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2VyIHtcclxuICAgIHN0YXRpYyBJbnN0OkRhdGFNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBfaXNCYXNlQm9keUluaXRlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9pc0JvZHlJbml0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICAvLyBEYXRhLkRldlJlcUJvZHkuSW5pdEJhc2VCb2R5KCk7XHJcbiAgICAgICAgdGhpcy5pbml0QmFzZUJvZHkoKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuTG9naW5TdWNjZXNzLCB0aGlzLm9uTG9naW5TdWNjZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRCYXNlQm9keSgpe1xyXG4gICAgICAgIGlmKHRoaXMuX2lzQmFzZUJvZHlJbml0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy/kuI7nmbvlvZXml6DlhbPnmoTmjqXlj6Pnm7TmjqXliJvlu7pcclxuICAgICAgICAvL+mFjee9rlxyXG4gICAgICAgIERhdGEuQ29uZmlnRGF0YS5SZXFCb2R5ID0gbmV3IERhdGEuSHR0cFJlcWJvZHlCYXNlKDAsIDEwMDAyKTsgICBcclxuICAgICAgICAvL+eZu+W9lVxyXG4gICAgICAgIERhdGEuTG9naW5EYXRhLlJlcUJvZHkgPSBuZXcgRGF0YS5IdHRwUmVxYm9keUJhc2UoMCwgMTAwMDMpOyBcclxuXHJcbiAgICAgICAgdGhpcy5faXNCYXNlQm9keUluaXRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkxvZ2luU3VjY2Vzcygpe1xyXG4gICAgICAgIHRoaXMuaW5pdERldkJvZGllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdERldkJvZGllcygpe1xyXG4gICAgICAgIC8v5Lul5LiL6K+35rGC5L2T6ZyA6KaB55m75b2V5omN5Y+v5Yib5bu6XHJcbiAgICAgICAgaWYodGhpcy5faXNCb2R5SW5pdGVkIHx8ICFEYXRhLkxvZ2luRGF0YS5TZXNzaW9uKSByZXR1cm47XHJcbiAgICAgICAgLy8jMTA4MDIg6I635Y+W6aaW5p2A5qacXHJcbiAgICAgICAgRGF0YS5VcGdyYWRlRGF0YS5SZXFCb2R5ID0gbmV3IERldlJlcUJvZHkoOCwgMTA4MDIpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5faXNCb2R5SW5pdGVkID0gdHJ1ZTtcclxuICAgIH1cclxufSAiLCJpbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbi8v6I+K6Iqx566h55CGXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nSWNvbk1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2VyIHtcclxuICAgIHN0YXRpYyBJbnN0OkxvYWRpbmdJY29uTWFuYWdlcjtcclxuICAgIHB1YmxpYyBJc0luaXRlZDpCb29sZWFuO1xyXG4gICAgcHVibGljIENvbnRyb2xsZXI6VUkuTG9hZGluZ0NvbnRyb2xsZXI7XHJcblxyXG4gICAgb25Bd2FrZSgpe1xyXG4gICAgICAgIHRoaXMuSW5pdCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBJbml0KCl7XHJcbiAgICAgICAgaWYodGhpcy5Jc0luaXRlZCA9PSB0cnVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuSXNJbml0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIgPSBNYW5hZ2VyLlVJTWFuYWdlci5vcGVuQ29udHJvbGxlcihVSS5Mb2FkaW5nQ29udHJvbGxlcikgYXMgVUkuTG9hZGluZ0NvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd0xvYWRpbmcoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyLnNob3dMb2FkaW5nKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEhpZGVMb2FkaW5nKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyLmhpZGVMb2FkaW5nKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9VSS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gJy4uL01hbmFnZXIvTWFuYWdlcic7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tICcuLi9Db21tb24vQ29tbW9uJztcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcblxyXG4vL+eZu+W9lei/m+W6pueuoeeQhlxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1Byb2dyZXNzTWFuYWdlciBleHRlbmRzIE1hbmFnZXIuQmFzZU1hbmFnZXJ7XHJcbiAgICBzdGF0aWMgSW5zdDpMb2FkaW5nUHJvZ3Jlc3NNYW5hZ2VyO1xyXG4gICAgcHVibGljIElzSW5pdGVkOkJvb2xlYW47XHJcbiAgICBwdWJsaWMgQ29udHJvbGxlcjpVSS5Mb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyO1xyXG5cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICB0aGlzLkluaXQoKTtcclxuICAgICAgICAvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2ltUHJvZ3Jlc3NFbmQsIHRoaXMub25Mb2FkaW5nQ29tcGxldGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBJbml0KCl7XHJcbiAgICAgICAgaWYodGhpcy5Jc0luaXRlZCA9PSB0cnVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuSXNJbml0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIgPSBNYW5hZ2VyLlVJTWFuYWdlci5vcGVuQ29udHJvbGxlcihVSS5Mb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyKSBhcyBVSS5Mb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyO1xyXG5cclxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5TaW1Qcm9ncmVzc0VuZCwgdGhpcy5vbkxvYWRpbmdDb21wbGV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VpUHJvZ3Jlc3MocHJvZ3Jlc3M6bnVtYmVyLCBwa2dOYW1lPzpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyLnNob3dVaVByb2dyZXNzKHByb2dyZXNzLCBwa2dOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBTaG93V3hMb2dpbigpIHtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlci5zaG93V3hMb2dpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb25maWdQcm9ncmVzcygpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyLnNob3dDb25maWdQcm9ncmVzcygpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkaW5nQ29tcGxldGUoKXtcclxuICAgICAgICAvL+WKoOi9veaIkOWKn+WQjuW6n+mZpOiHquW3sVxyXG4gICAgICAgIExvY2FsQ29uZmlnLklzU2ltUHJvZ3Jlc3NFbmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuSXNJbml0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vQmFzZU1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0NsaWNrRWZmZWN0TWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ0ljb25NYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nUHJvZ3Jlc3NNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9OZXRNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Sb2xlQmFzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3RhdGVCYXNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9TY2VuZU1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1NwYXduTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vVGltZXJNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9VSU1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1ZlcnNpb25NYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vUG9vbE1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1JvbGVNYW5hZ2VyJztcclxuIiwiaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vVUkvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG4vL+aYr+WQpuesrOS4gOasoei/nuaOpVxyXG5sZXQgaXNGaXJzdFNlbmQgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIF9ocjpYTUxIdHRwUmVxdWVzdDtcclxuICAgIHByaXZhdGUgX3JlcUtleTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaG1NYXA6Q29uZmlnLkRpY3Rpb25hcnk8SHR0cE1hbmFnZXI+ID0ge307XHJcbiAgICBwcm90ZWN0ZWQgRGF0YTpEYXRhLkh0dHBSZXFib2R5QmFzZTtcclxuICAgIHByaXZhdGUgQ2FsbGJhY2s6RnVuY3Rpb247XHJcbiAgICBwcml2YXRlIENvbm5lY3RUaW1lczpudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIElzU2hvd0xvYWRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzQ29ubmVjdGluZzpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Bd2FrZSgpe1xyXG4gICAgICAgIC8vIERhdGEuRGV2UmVxQm9keS5Jbml0QmFzZUJvZHkoKTtcclxuICAgICAgICAvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuTG9naW5TdWNjZXNzLCB0aGlzLmluaXREZXZCb2RpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQgUmVxdWVzdFVybCh1cmw6c3RyaW5nKXtcclxuICAgICAgICBDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgQ29ubmVjdChyZXFrZXk6c3RyaW5nLCBkYXRhOkRhdGEuSHR0cFJlcWJvZHlCYXNlLCBjYWxsYmFjaz86RnVuY3Rpb24sIGlzU2hvd0xvYWRpbmc/OmJvb2xlYW4sIElzR20/OmJvb2xlYW4pIHtcclxuICAgICAgICBpZighZGF0YSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl9ociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHRoaXMuX3JlcUtleSA9IHJlcWtleTtcclxuXHJcbiAgICAgICAgaWYoSXNHbSlcclxuICAgICAgICAgICAgdGhpcy5faHIub3BlbihcInBvc3RcIiwgQ29uZmlnLk5ldENvbmZpZy5HTVVybCwgdHJ1ZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9oci5vcGVuKFwicG9zdFwiLCBDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwsIHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2hyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHRoaXMuT25IdHRwUmVxdWVzdENvbXBsZXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy/otoXml7ZcclxuICAgICAgICB0aGlzLl9oci50aW1lb3V0ID0gNTAwMDtcclxuICAgICAgICB0aGlzLl9oci5vbnRpbWVvdXQgPSB0aGlzLk9uVGltZW91dC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2hyLm9uZXJyb3IgPSB0aGlzLk9uSHR0cFJlcXVlc3RFcnJvci5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICBpZih0eXBlb2YoZGF0YS5SZXFEYXRhKSA9PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgICAgIGRhdGEuUmVxRGF0YSA9IEpTT04ucGFyc2UoZGF0YS5SZXFEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5EYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLkNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5Jc1Nob3dMb2FkaW5nID0gaXNTaG93TG9hZGluZztcclxuICAgICAgICAvL+mHjei/nuasoeaVsFxyXG4gICAgICAgIHRoaXMuQ29ubmVjdFRpbWVzKys7XHJcbiAgICAgICAgLy/otoXml7bmr6vnp5LmlbBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9oci50aW1lb3V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5faHIucmVzcG9uc2VUeXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgaWYodHlwZW9mIGRhdGEuUmVxRGF0YSAhPSAnc3RyaW5nJyl7XHJcbiAgICAgICAgICAgIGRhdGEuUmVxRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEuUmVxRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hyLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIC8v5piv5ZCm5q2j5Zyo6L+e5o6l77yM5YyF5ous6LaF5pe2XHJcbiAgICAgICAgdGhpcy5Jc0Nvbm5lY3RpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAvL+iPiuiKsVxyXG4gICAgICAgIGlmKGlzRmlyc3RTZW5kKXtcclxuICAgICAgICAgICAgaXNGaXJzdFNlbmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gTWFuYWdlci5Mb2FkaW5nSWNvbk1hbmFnZXIuSW5pdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaXNTaG93TG9hZGluZyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgTWFuYWdlci5Mb2FkaW5nSWNvbk1hbmFnZXIuSW5zdC5TaG93TG9hZGluZygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBNYW5hZ2VyLkxvYWRpbmdJY29uTWFuYWdlci5JbnN0LkhpZGVMb2FkaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAvLzPnp5LlkI7lho3ovazoj4roirFcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLkxhdGVTaG93TG9hZGluZy5iaW5kKHRoaXMpLCAzMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5OZXRIdHRwQ29ubmVjdEVpZC5Db25uZWN0QmVnaW4pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBMYXRlU2hvd0xvYWRpbmcoKXtcclxuICAgICAgICBpZiAodGhpcy5Jc0Nvbm5lY3RpbmcgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIE1hbmFnZXIuTG9hZGluZ0ljb25NYW5hZ2VyLkluc3QuU2hvd0xvYWRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/or7fmsYLplJnor69cclxuXHRPbkh0dHBSZXF1ZXN0RXJyb3IoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgICAgICB0aGlzLnRyeUF1dG9SZWNvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy/otoXml7ZcclxuICAgIE9uVGltZW91dChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJ5QXV0b1JlY29ubmVjdCgpO1xyXG5cdH1cclxuXHJcblx0T25IdHRwUmVxdWVzdFByb2dyZXNzKGUpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5Yqg6L296L+b5bqmPj4+Pj4+Pj4+Pj4+Pj4+Pj4+PlwiLGUubG9hZGVkIC8gZS50b3RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVtb3ZlUmVxdWVzdCgpe1xyXG4gICAgICAgIC8v56e76Zmk5b2T5YmN6L+e5o6l77yM5b+F6aG75YWI6K6+572u6L+e5o6l54q25oCBSXNDb25uZWN0aW5n5Li6ZmFsc2XlkI7lho3osIPnlKhcclxuICAgICAgICBpZih0aGlzLklzQ29ubmVjdGluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl9ociA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5EYXRhID0gbnVsbDtcclxuICAgICAgICBIdHRwTWFuYWdlci5faG1NYXBbdGhpcy5fcmVxS2V5XSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cnlBdXRvUmVjb25uZWN0KCl7XHJcbiAgICAgICAgLy/nrZbnlaXvvJowLjXnp5Lph43ov57kuIDmrKHvvIzph43or5U15qyhXHJcbiAgICAgICAgaWYodGhpcy5Db25uZWN0VGltZXMgPCAzKXtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDUwMCwgdGhpcywgdGhpcy5hdXRvUmVDb25uZWN0KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29ubmVjdFdpbmRvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF1dG9SZUNvbm5lY3QoKXtcclxuICAgICAgICB0aGlzLkNvbm5lY3QoJycsIHRoaXMuRGF0YSwgdGhpcy5DYWxsYmFjaywgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgc2hvd0Nvbm5lY3RXaW5kb3coKXtcclxuICAgICAgICB0aGlzLklzQ29ubmVjdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIE1hbmFnZXIuTG9hZGluZ0ljb25NYW5hZ2VyLkluc3QuSGlkZUxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHBvcHVwRGF0YSA9IHtcclxuICAgICAgICAvLyAgICAgQ29udGVudDogQ29uZmlnLkxvY2FsQ29udGVudC5OZXRFcnJvcixcclxuICAgICAgICAvLyAgICAgWWVzQnRuQ29udGVudDpDb25maWcuTG9jYWxDb250ZW50LlllcyxcclxuICAgICAgICAvLyAgICAgLy8gQnRuU3R5bGU6IDEsXHJcbiAgICAgICAgLy8gICAgIEhhc0JnOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgWWVzQnRuQ2FsbGJhY2s6dGhpcy5Db25uZWN0LmJpbmQodGhpcywgJycsIHRoaXMuRGF0YSwgdGhpcy5DYWxsYmFjaywgdGhpcy5Jc1Nob3dMb2FkaW5nKVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBbQ29uZmlnLkxvY2FsQ29udGVudC5OZXRFcnJvcl07XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIE1hbmFnZXIuVUlNYW5hZ2VyLm9wZW5Db25maXJtV2luZG93KFxyXG4gICAgICAgICAgICBjb250ZW50LCBcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLkNvbm5lY3QoJycsIHNlbGYuRGF0YSwgc2VsZi5DYWxsYmFjaywgc2VsZi5Jc1Nob3dMb2FkaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cdE9uSHR0cFJlcXVlc3RDb21wbGV0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faHIucmVhZHlTdGF0ZSAhPSA0IHx8ICh0aGlzLl9oci5zdGF0dXMgPCAyMDAgfHwgdGhpcy5faHIuc3RhdHVzID49IDQwMCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Jc0Nvbm5lY3RpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkNvbm5lY3RUaW1lcyA9IDA7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLl9oci5yZXNwb25zZVRleHQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuX2hyLnJlc3BvbnNlVGV4dCkgYXMgQ29uZmlnLlJlc3BEYXRhU3RydWN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+Pj4+Pj4+Pj4+Pui/nuaOpeeKtuaAge+8micsIGRhdGEuUmVzcENvZGUsIGRhdGEuUmVzcE1zZyk7XHJcbiAgICAgICAgLy/ov57mjqXlpLHotKVcclxuICAgICAgICAvLyBpZihkYXRhLlJlc3BDb2RlICE9IENvbmZpZy5IdHRwQ29ubmVjdFN0YXRlLlN1Y2Nlc3MpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodHlwZW9mKHRoaXMuQ2FsbGJhY2spID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICB0aGlzLkNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/lj5HpgIHlk43lupTmlbDmja7vvIzlm57kvKDor7fmsYLmlbDmja5cclxuICAgICAgICAvLyBpZih0eXBlb2YodGhpcy5EYXRhLlJlcURhdGEpID09ICdzdHJpbmcnKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5EYXRhLlJlcURhdGEgPSBKU09OLnBhcnNlKHRoaXMuRGF0YS5SZXFEYXRhKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gRGF0YS5EYXRhU3RydWN0Lk9uSHR0cFJlcXVlc3RDb21wbGV0ZShkYXRhLCB0aGlzLl9yZXFLZXksIHRoaXMuRGF0YS5SZXFEYXRhKTtcclxuXHJcbiAgICAgICAgLy/ov57mjqXnu5PmnZ/liKDpmaTlr7nosaFcclxuICAgICAgICB0aGlzLl9yZW1vdmVSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uTmV0SHR0cENvbm5lY3RFaWQuU2VydmljZVJlc3BvbmQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvY2tldE1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6U29ja2V0TWFuYWdlcjtcclxuICAgIHByaXZhdGUgc29ja2V0OiBMYXlhLlNvY2tldDtcclxuICAgIHByaXZhdGUgb3V0cHV0OiBMYXlhLkJ5dGU7XHJcbiAgICBwcml2YXRlIF9kYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIC8qKiDlv4Pot7PljIXlrprml7blmaggKi9cclxuICAgIHByaXZhdGUgX3RpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOW/g+i3s+WMheacjeWKoeWZqOi2heaXtuWumuaXtuWZqCAqL1xyXG4gICAgcHJpdmF0ZSBfc2VydmVyVGltZXI6IG51bWJlciA9IDA7XHJcbiAgICAvKiog5b+D6Lez5YyF6LaF5pe25pe26Ze077yM5Y2V5L2NbXMs5pe26Ze05Y+q6IO95piv5pW056eS5pWw77yMc2V0VGltZW91dOWcqOWQjuWPsOavj+enkuaJp+ihjOS4gOasoSAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdGltZW91dDogbnVtYmVyID0gMTAwMDA7XHJcbiAgICAvKiog6Z2Z6buY6YeN6L+e5a6a5pe25ZmoICovXHJcbiAgICBwcml2YXRlIF9zaWxlbnRUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIC8qKiDlv4Pot7PljIXmnI3liqHlmajotoXml7bml7bpl7TvvIzljZXkvY1tcyzml7bpl7Tlj6rog73mmK/mlbTnp5LmlbDvvIxzZXRUaW1lb3V05Zyo5ZCO5Y+w5q+P56eS5omn6KGM5LiA5qyhICovXHJcbiAgICBwcml2YXRlIF9zZXJ2ZXJUaW1lb3V0OiBudW1iZXIgPSAxMDAwMDsgLy9UT0RP6LCD6K+V5oqK5pe26Ze05Yqg6ZW/MzYwMDAwMO+8jOWOnzEwMDAwXHJcbiAgICAvKiog5pat57q/57G75Z6L77yaMS7ooqvmjKTkuIvnur8sIDIu5YGc5pyN57u05oqkKHNvY2tldOaWreW8gCksMyDpnZ7ms5Xmk43kvZwgKi9cclxuICAgIHByaXZhdGUgX2Rpc2Nvbm5lY3RUeXBlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9pbnN0KXtcclxuICAgICAgICAgICAgdGhpcy5faW5zdCA9IG5ldyBTb2NrZXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdDtcclxuICAgIH0gXHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcih1cmw/OnN0cmluZywgcG9ydD86bnVtYmVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jb25uZWN0KHVybCwgcG9ydCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbm5lY3QodXJsOnN0cmluZywgcG9ydD86bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmluc3QuY29ubmVjdCh1cmwsIHBvcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29ubmVjdCh1cmw6c3RyaW5nLCBwb3J0PzpudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBMYXlhLlNvY2tldCgpO1xyXG5cclxuICAgICAgICBpZihwb3J0ICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5jb25uZWN0KHVybCwgcG9ydCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNvbm5lY3RCeVVybCh1cmwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSB0aGlzLnNvY2tldC5vdXRwdXQ7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKExheWEuRXZlbnQuT1BFTiwgdGhpcywgdGhpcy5vblNvY2tldE9wZW4pO1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKExheWEuRXZlbnQuQ0xPU0UsIHRoaXMsIHRoaXMub25Tb2NrZXRDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oTGF5YS5FdmVudC5NRVNTQUdFLCB0aGlzLCB0aGlzLm9uTWVzc2FnZVJldmVpdmVkKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbihMYXlhLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLm9uQ29ubmVjdEVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+W/g+i3s+ajgOa1i1xyXG4gICAgcHJpdmF0ZSBzdGFydEhlYXJ0YmVhdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9kYXRlLnRvVVRDU3RyaW5nKCkgKyBcIiBzdGFydCBoZWFydGJlYXRcIik7XHJcbiAgICAgICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KHRoaXMudGltZXJIYW5kbGVyLmJpbmQodGhpcyksIHRoaXMuX3RpbWVvdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGltZXJIYW5kbGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGUudG9VVENTdHJpbmcoKSArIFwiIHNlbmQgaGVhcnRiZWF0XCIpO1xyXG5cclxuICAgICAgICAvL+WPkemAgeS4gOS4quW/g+i3s++8jOWQjuerr+aUtuWIsOWQju+8jOi/lOWbnuS4gOS4quW/g+i3s+a2iOaBr1xyXG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoJ3IgdSB0aGVyZT8nKTtcclxuICAgICAgICB0aGlzLl9zZXJ2ZXJUaW1lciA9IHNldFRpbWVvdXQodGhpcy5zZXJ2ZXJUaW1lckhhbmRsZXIuYmluZCh0aGlzKSwgdGhpcy5fc2VydmVyVGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJUaW1lckhhbmRsZXIoKSB7XHJcbiAgICAgICAgLy/mnI3liqHlmajotoXml7bmsqHmnInlm57ljIXvvIzmlq3lvIDov57mjqXnhLblkI7ph43ov55cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9kYXRlLnRvVVRDU3RyaW5nKCkgKyBcIiB3YWl0IHNlcnZlciByZXBseSB0aW1lb3V0XCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnNvY2tldCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0SGVhcnRiZWF0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGUudG9VVENTdHJpbmcoKSArIFwiIHJlc2V0IGhlYXJ0YmVhdFwiKTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zZXJ2ZXJUaW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNvY2tldE9wZW4oKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRIZWFydGJlYXQoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0SGVhcnRiZWF0KCk7XHJcblxyXG4gICAgICAgIC8vIOWPkemAgeWtl+espuS4slxyXG4gICAgICAgIHRoaXMuc29ja2V0LnNlbmQoXCJkZW1vbnN0cmF0ZSA8c2VuZFN0cmluZz5cIik7XHJcblxyXG4gICAgICAgIC8vIOS9v+eUqG91dHB1dC53cml0ZUJ5dGXlj5HpgIFcclxuICAgICAgICB2YXIgbWVzc2FnZTogc3RyaW5nID0gXCJkZW1vbnN0cmF0ZSA8b3V0cHV0LndyaXRlQnl0ZT5cIjtcclxuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dC53cml0ZUJ5dGUobWVzc2FnZS5jaGFyQ29kZUF0KGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZmx1c2goKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU29ja2V0Q2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTb2NrZXQgY2xvc2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25NZXNzYWdlUmV2ZWl2ZWQobWVzc2FnZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWdlIGZyb20gc2VydmVyOlwiLCBtZXNzYWdlKTtcclxuXHJcbiAgICAgICAgLy/ojrflj5bliLDmtojmga/ph43nva7lv4Pot7Pmo4DmtYtcclxuICAgICAgICB0aGlzLnJlc2V0SGVhcnRiZWF0KCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEhlYXJ0YmVhdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1lbHNlIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3IExheWEuQnl0ZShtZXNzYWdlKS5yZWFkVVRGQnl0ZXMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5pbnB1dC5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Db25uZWN0RXJyb3IoZTogTGF5YS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOaWree6v+exu+Wei++8mjEu6KKr5oyk5LiL57q/LCAyLuWBnOacjee7tOaKpChzb2NrZXTmlq3lvIApLDMg6Z2e5rOV5pON5L2cICovXHJcbiAgICBwdWJsaWMgc2V0RGlzY29ubmVjdCh0eXBlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9kaXNjb25uZWN0VHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9kaXNjb25uZWN0VHlwZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNldEhlYXJ0YmVhdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnNvY2tldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9Db3JlL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvb2xNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlciB7XHJcbiAgICBzdGF0aWMgSW5zdDpQb29sTWFuYWdlcjtcclxuXHJcbiAgICAvL2ZndWnlr7nosaHmsaBcclxuICAgIHByaXZhdGUgc3RhdGljIGZndWlQb29sID0gbmV3IGZndWkuR09iamVjdFBvb2woKTtcclxuXHJcbiAgICAvL2ZndWnlr7nosaHmsaBcclxuICAgIHN0YXRpYyBnZXQgRmd1aVBvb2woKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5mZ3VpUG9vbDtcclxuICAgIH1cclxuXHJcbiAgICAvL+WktOmDqOaxoFxyXG4gICAgc3RhdGljIGdldCBIZWFkUG9vbCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvb2woQ29uZmlnLlBvb2xUeXBlLkhlYWRNb2RlbCkgYXMgTGF5YS5TcHJpdGUzRFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6Lqr5L2T5rGgXHJcbiAgICBzdGF0aWMgZ2V0IEJvZHlQb29sKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbChDb25maWcuUG9vbFR5cGUuQm9keU1vZGVsKSBhcyBMYXlhLlNwcml0ZTNEW107XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQXdha2UoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlY292ZXIoa2V5OnN0cmluZywgaXRlbSwgY2xzVHlwZT8pe1xyXG4gICAgICAgIGlmKCFrZXkgfHwgIWl0ZW0pIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBpZihjbHNUeXBlKXtcclxuICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXJCeUNsYXNzKGNsc1R5cGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25maWcuUG9vbFR5cGUuRmd1aU9iajpcclxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtIGluc3RhbmNlb2YgZmd1aS5HT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkZndWlQb29sLnJldHVybk9iamVjdChpdGVtKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKGtleSwgaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEl0ZW0oa2V5OnN0cmluZywgY2xzVHlwZT8pe1xyXG4gICAgICAgIGlmKGNsc1R5cGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gTGF5YS5Qb29sLmdldEl0ZW1CeUNsYXNzKGtleSwgY2xzVHlwZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICcnOlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExheWEuUG9vbC5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFBvb2woa2V5OnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIExheWEuUG9vbC5nZXRQb29sQnlTaWduKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsZWFyUG9vbChrZXk6c3RyaW5nKXtcclxuICAgICAgICBMYXlhLlBvb2wuY2xlYXJCeVNpZ24oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXJBbGxQb29scygpe1xyXG4gICAgICAgIHRoaXMuRmd1aVBvb2wuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TW9kZWxCeVR5cGUocG9vbFR5cGU6c3RyaW5nLCBwYXRoOnN0cmluZywgY2FsbGJhY2s6RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICBsZXQgaGVhZCA9IHRoaXMuZ2V0SXRlbShwb29sVHlwZSkgYXMgTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICBpZighaGVhZCl7XHJcbiAgICAgICAgICAgIE1hbmFnZXIuU3Bhd25NYW5hZ2VyLkxvYWQzZE1vZGVsKFxyXG4gICAgICAgICAgICAgICAgcGF0aCwgXHJcbiAgICAgICAgICAgICAgICAobW9kZWw6Q29uZmlnLk1vZGVsRGF0YVN0cnVjdCk9PntcclxuICAgICAgICAgICAgICAgICAgICBoZWFkID0gbW9kZWwubXNwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCBoZWFkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIHRoaXNBcmdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCBoZWFkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0T2JqQnlGdW5jKGtleTpzdHJpbmcsIGZ1bmM6RnVuY3Rpb24pe1xyXG4gICAgICAgIHJldHVybiBMYXlhLlBvb2wuZ2V0SXRlbUJ5Q3JlYXRlRnVuKGtleSwgZnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEhlYWQocGF0aDpzdHJpbmcsIGNhbGxiYWNrOkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICAgICAgdGhpcy5nZXRNb2RlbEJ5VHlwZShDb25maWcuUG9vbFR5cGUuSGVhZE1vZGVsLCBwYXRoLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEJvZHkocGF0aDpzdHJpbmcsIGNhbGxiYWNrOkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICAgICAgdGhpcy5nZXRNb2RlbEJ5VHlwZShDb25maWcuUG9vbFR5cGUuQm9keU1vZGVsLCBwYXRoLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJldHVybkZndWlPYmooYm94OmZndWkuR09iamVjdCl7XHJcbiAgICAgICAgdGhpcy5yZWNvdmVyKENvbmZpZy5Qb29sVHlwZS5GZ3VpT2JqLCBib3gpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvbGVCYXNle1xyXG4gICAgSGVhZDpmZ3VpLkdMb2FkZXI7XHJcbiAgICBCb2R5U2xvdDpmZ3VpLkdPYmplY3Q7XHJcbiAgICBCb2R5OkxheWEuU2tlbGV0b247XHJcbiAgICAvLyBBbmk6TGF5YS5BbmltYXRvcjtcclxuICAgIFN0YXRlOk1hbmFnZXIuU3RhdGVCYXNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhlYWQ6Zmd1aS5HTG9hZGVyLCBib2R5U2xvdDpmZ3VpLkdPYmplY3QsIGJvZHk/OkxheWEuU2tlbGV0b24pe1xyXG4gICAgICAgIHRoaXMuSGVhZCA9IGhlYWQ7XHJcbiAgICAgICAgdGhpcy5Cb2R5U2xvdCA9IGJvZHlTbG90O1xyXG4gICAgICAgIHRoaXMuQm9keSA9IGJvZHk7XHJcbiAgICAgICAgLy8gdGhpcy5BbmkgPSBib2R5LmdldENvbXBvbmVudChMYXlhLkFuaW1hdG9yKSBhcyBMYXlhLkFuaW1hdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldCBBbmlTdGF0ZSgpe1xyXG4gICAgLy8gICAgIGlmKCF0aGlzLkFuaSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLkFuaS5nZXRDdXJyZW50QW5pbWF0b3JQbGF5U3RhdGUoKTtcclxuICAgIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllclJvbGUgZXh0ZW5kcyBSb2xlQmFzZSB7XHJcbiAgICBwcml2YXRlIG1DdXJySW5kZXg6bnVtYmVyID0gMDtcclxuICAgIG1GYWN0b3J5OkxheWEuVGVtcGxldDtcclxuICAgIHNldEJvZHlDYWxsYmFjazpGdW5jdGlvbjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoaGVhZDpmZ3VpLkdMb2FkZXIsIGJvZHlTbG90OmZndWkuR09iamVjdCl7XHJcbiAgICAgICAgc3VwZXIoaGVhZCwgYm9keVNsb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25BbmlUZW1wbGV0RXJyb3IoKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiUGxheWVyIGFuaVRlbXBsZXQgZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkJvZHlBbmlTdG9wKCl7XHJcbiAgICAgICAgLy/lvqrnjq/mkq3mlL5cclxuICAgICAgICAvLyB0aGlzLnBsYXlCb2R5QW5pKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5Qm9keUFuaShsb29wPzpib29sZWFuKXtcclxuICAgICAgICAvL+m7mOiupOW+queOr+aSreaUvlxyXG4gICAgICAgIGxvb3AgPSBudWxsICE9IGxvb3A/IGxvb3A6IHRydWU7XHJcbiAgICAgICAgdGhpcy5Cb2R5LnBsYXkoMCwgbG9vcCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgcGFyc2VUZW1wbGV0Q29tcGxldGUoY2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPyk6dm9pZCB7XHJcbiAgICAgICAgLy/liJvlu7rmqKHlvI/kuLox77yM5Y+v5Lul5ZCv55So5o2i6KOFXHJcbiAgICAgICAgdGhpcy5Cb2R5ID0gdGhpcy5tRmFjdG9yeS5idWlsZEFybWF0dXJlKDEpO1xyXG4gICAgICAgIHRoaXMuQm9keVNsb3QuZGlzcGxheU9iamVjdC5hZGRDaGlsZCh0aGlzLkJvZHkpO1xyXG4gICAgICAgIHRoaXMuQm9keS5vbihMYXlhLkV2ZW50LlNUT1BQRUQsIHRoaXMsIHRoaXMub25Cb2R5QW5pU3RvcCk7XHJcbiAgICAgICAgdGhpcy5wbGF5Qm9keUFuaSgpO1xyXG5cclxuICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEJvZHkoYm9keVBhdGg6c3RyaW5nLCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/LCAuLi5kYXRhKXtcclxuICAgICAgICB0aGlzLm1GYWN0b3J5ID0gTWFuYWdlci5Qb29sTWFuYWdlci5nZXRJdGVtKENvbmZpZy5Qb29sSXRlbUtleS5EcmVzc1RlbXBsYXRlLCBMYXlhLlRlbXBsZXQpO1xyXG4gICAgICAgIHRoaXMubUZhY3Rvcnkub24oTGF5YS5FdmVudC5DT01QTEVURSwgdGhpcywgdGhpcy5wYXJzZVRlbXBsZXRDb21wbGV0ZSwgW2NhbGxiYWNrLCB0aGlzQXJnXSk7XHJcbiAgICAgICAgdGhpcy5tRmFjdG9yeS5vbihMYXlhLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLm9uQW5pVGVtcGxldEVycm9yKTtcclxuICAgICAgICB0aGlzLm1GYWN0b3J5LmxvYWRBbmkoYm9keVBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhlYWQodXJsOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5IZWFkLnVybCA9IHVybDtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9sZU1hbmFnZXJ7XHJcbiAgICBzdGF0aWMgUExBWUVSID0gJ1BsYXllcic7XHJcbiAgICBzdGF0aWMgRU5FTVkgPSAnRW5lbXknO1xyXG4gICAgLy/liqjnlLvlkI1cclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUlNfTU9WRSA9IFsnd2FsaycsICdydW4nXTtcclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUlNfQVRUQUNLID0gWydhdHRhY2sxJywgJ2F0dGFjazInXTtcclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUlNfUExBWUVSX1NLSUxMID0gJ3NraWxsJztcclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUl9ERUFEID0gJ2RlYXRoJztcclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUl9XSU4gPSAnd2luJztcclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUl9JRExFID0gJ0ZpZ2h0SWRsZSc7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQU5JTUFUT1JfUFJPVk9DX0VORU1ZID0gJ2FwcGVhcic7XHJcblxyXG4gICAgc3RhdGljIFBsYXllcjpNYW5hZ2VyLlBsYXllclJvbGU7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGhhc1BsYXllcigpOmJvb2xlYW57XHJcbiAgICAgICAgaWYodGhpcy5QbGF5ZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ3JlYXRlIHJvbGUgZmlyc3QhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIENyZWF0ZVJvbGUoaGVhZDpmZ3VpLkdMb2FkZXIsIGhlYWRVcmw6c3RyaW5nLCBib2R5U2xvdDpmZ3VpLkdPYmplY3QsIGJvZHlQYXRoOnN0cmluZywgY2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICAgICAgaWYoIWJvZHlQYXRoIHx8ICFoZWFkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuUGxheWVyID0gbmV3IE1hbmFnZXIuUGxheWVyUm9sZShoZWFkLCBib2R5U2xvdCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VIZWFkKGhlYWRVcmwpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQm9keShib2R5UGF0aCwgY2FsbGJhY2ssIHRoaXNBcmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5o2i5aS0XHJcbiAgICBzdGF0aWMgY2hhbmdlSGVhZCh1cmw6c3RyaW5nKXtcclxuICAgICAgICBpZighdGhpcy5oYXNQbGF5ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5QbGF5ZXIuc2V0SGVhZCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5o2i6KOFXHJcbiAgICBzdGF0aWMgY2hhbmdlQm9keShwYXRoOnN0cmluZywgY2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPywgLi4uZGF0YSl7XHJcbiAgICAgICAgaWYoIXRoaXMuaGFzUGxheWVyKSByZXR1cm47XHJcbiAgICAgICAgaWYoIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgTWFuYWdlci5Qb29sTWFuYWdlci5yZWNvdmVyKENvbmZpZy5Qb29sSXRlbUtleS5EcmVzc1RlbXBsYXRlLCB0aGlzLlBsYXllci5tRmFjdG9yeSk7XHJcbiAgICAgICAgdGhpcy5QbGF5ZXIuc2V0Qm9keShwYXRoLCBjYWxsYmFjaywgdGhpc0FyZywgLi4uZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldFN0YXRlKGFuaU5hbWU6c3RyaW5nLCByb2xlOk1hbmFnZXIuUm9sZUJhc2Upe1xyXG4gICAgICAgIHN3aXRjaCAoYW5pTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMuQU5JTUFUT1JfSURMRTpcclxuICAgICAgICAgICAgICAgIHJvbGUuU3RhdGUuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLklERUwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuQU5JTUFUT1JfREVBRDpcclxuICAgICAgICAgICAgICAgIHJvbGUuU3RhdGUuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLkRFQUQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tIFwiLi4vR2FtZVNjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmVNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlcntcclxuICAgIHB1YmxpYyBzdGF0aWMgX2luc3Q6U2NlbmVNYW5hZ2VyO1xyXG4gICAgcHVibGljIHN0YXRpYyBDdXJTY2VuZTpMYXlhLlNjZW5lM0QgfCBMYXlhLlNjZW5lO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGUyZFNjZW5lKCl7XHJcbiAgICAgICAgTGF5YS5TY2VuZS5sb2FkKEdhbWVDb25maWcuc3RhcnRTY2VuZSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uT3BlblNjZW5lKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBjcmVhdGUzZFNjZW5lKCl7XHJcblx0XHQvL+a3u+WKoDNE5Zy65pmvXHJcblx0XHRsZXQgc2NlbmUgPSBMYXlhLnN0YWdlLmFkZENoaWxkKG5ldyBMYXlhLlNjZW5lM0QoKSkgYXMgTGF5YS5TY2VuZTNEO1xyXG5cclxuXHRcdC8v5re75Yqg54Wn55u45py6XHJcblx0XHRsZXQgY2FtZXJhID0gKHNjZW5lLmFkZENoaWxkKG5ldyBMYXlhLkNhbWVyYSgwLCAwLjEsIDEwMCkpKSBhcyBMYXlhLkNhbWVyYTtcclxuXHRcdGNhbWVyYS50cmFuc2Zvcm0udHJhbnNsYXRlKG5ldyBMYXlhLlZlY3RvcjMoMSwgMSwgMykpO1xyXG5cdFx0Ly8gY2FtZXJhLnRyYW5zZm9ybS5yb3RhdGUobmV3IExheWEuVmVjdG9yMygtMzAsIDAsIDApLCB0cnVlLCBmYWxzZSk7XHJcblx0XHRjYW1lcmEuY2xlYXJGbGFnID0gTGF5YS5CYXNlQ2FtZXJhLkNMRUFSRkxBR19ERVBUSE9OTFk7XHJcblxyXG5cdFx0Ly/mt7vliqDmlrnlkJHlhYlcclxuXHRcdGxldCBkaXJlY3Rpb25MaWdodCA9IHNjZW5lLmFkZENoaWxkKG5ldyBMYXlhLkRpcmVjdGlvbkxpZ2h0KCkpIGFzIExheWEuRGlyZWN0aW9uTGlnaHQ7XHJcblx0XHRkaXJlY3Rpb25MaWdodC5jb2xvciA9IG5ldyBMYXlhLlZlY3RvcjMoMC42LCAwLjYsIDAuNik7XHJcblx0XHRkaXJlY3Rpb25MaWdodC50cmFuc2Zvcm0ud29ybGRNYXRyaXguc2V0Rm9yd2FyZChuZXcgTGF5YS5WZWN0b3IzKDEsIC0xLCAwKSk7XHJcblxyXG5cdFx0dGhpcy5vbk9wZW5TY2VuZShzY2VuZSk7XHJcblx0fVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG9uT3BlblNjZW5lKHNjZW5lPzpMYXlhLlNjZW5lM0QgfCBMYXlhLlNjZW5lKXtcclxuXHRcdGlmKHNjZW5lKXtcclxuXHRcdFx0TGF5YS5zdGFnZS5hZGRDaGlsZChzY2VuZSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ3VyU2NlbmUgPSBzY2VuZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNjZW5lLmFkZENvbXBvbmVudChNYW5hZ2VyLlNjZW5lTWFuYWdlcik7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZENvbXBvbmVudChNYW5hZ2VyLkh0dHBNYW5hZ2VyKTtcclxuICAgICAgICAgICAgc2NlbmUuYWRkQ29tcG9uZW50KE1hbmFnZXIuVUlNYW5hZ2VyKTtcclxuICAgICAgICAgICAgc2NlbmUuYWRkQ29tcG9uZW50KE1hbmFnZXIuRGF0YU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRDb21wb25lbnQoR2FtZVNjZW5lKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9VSS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgR0V2ZW50IGZyb20gXCIuLi9Db21tb24vR0V2ZW50XCI7XHJcblxyXG4vL2NvY29z55SoXHJcbi8vIGxldCBsb2FkZWRQYWNrYWdlOntba2V5OnN0cmluZ106Ym9vbGVhbn0gPSB7fTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGF3bk1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbG9hZDNkTW9kZWw7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBwb29sT2Jqczp7W2tleTpzdHJpbmddOiBhbnl9O1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcbiAgICBcclxuICAgIC8v5Yqg6L295qih5Z6LXHJcbiAgICBzdGF0aWMgTG9hZDNkTW9kZWwocGF0aDpzdHJpbmcsIGNvbXBsZXRlQ2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICAgICAgaWYoIU1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lIHx8ICFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIExheWEubG9hZGVyLmNyZWF0ZShwYXRoLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXNBcmcsIGNvbXBsZXRlQ2FsbGJhY2spKTtcclxuXHJcbiAgICAgICAgTGF5YS5TcHJpdGUzRC5sb2FkKHBhdGgsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCk9PntcclxuICAgICAgICAgICAgaWYodHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3AgPSBDb21tb24uUmVzb3VyY2UuZ2V0UmVzKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXNwKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1zcCA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lLmFkZENoaWxkKHNwKSBhcyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaSA9IG1zcC5nZXRDb21wb25lbnQoTGF5YS5BbmltYXRvcikgYXMgTGF5YS5BbmltYXRvcjtcclxuICAgICAgICAgICAgICAgIGxldCBhbmlTdGF0ZTpMYXlhLkFuaW1hdG9yUGxheVN0YXRlO1xyXG4gICAgICAgICAgICAgICAgaWYoYW5pKXtcclxuICAgICAgICAgICAgICAgICAgICBhbmlTdGF0ZSA9IGFuaS5nZXRDdXJyZW50QW5pbWF0b3JQbGF5U3RhdGUoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9kZWxEYXRhID0gbmV3IENvbmZpZy5Nb2RlbERhdGFTdHJ1Y3QobXNwLCBhbmksIGFuaVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2suY2FsbCh0aGlzQXJnLCBtb2RlbERhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqg6L29572R5qC8XHJcbiAgICBzdGF0aWMgTG9hZDNkTWVzaChwYXRoOnN0cmluZywgY29tcGxldGVDYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZighcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBDb21tb24uUmVzb3VyY2UubG9hZChwYXRoLCB0aGlzQXJnLCBjb21wbGV0ZUNhbGxiYWNrLCBudWxsLCBMYXlhLkxvYWRlci5NRVNIKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WKoOi9veadkOi0qFxyXG4gICAgc3RhdGljIExvYWRNYXRlcmlhbChwYXRoOnN0cmluZywgY29tcGxldGVDYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZighcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBDb21tb24uUmVzb3VyY2UubG9hZChwYXRoLCB0aGlzQXJnLCBjb21wbGV0ZUNhbGxiYWNrLCBudWxsLCBMYXlhLkxvYWRlci5NQVRFUklBTCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqjmgIHliqDovb1VSeWMhSAgY29jb3PnlKhcclxuICAgIC8vIHN0YXRpYyBMb2FkVUlQYWNrYWdlKF9wYXRoLCBjYWxsYmFjaykge1xyXG4gICAgLy8gICAgIGlmKHR5cGVvZihfcGF0aCkgIT0gXCJzdHJpbmdcIikgcmV0dXJuO1xyXG5cclxuICAgIC8vICAgICBpZihsb2FkZWRQYWNrYWdlW19wYXRoXSl7XHJcbiAgICAvLyAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgIC8vICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgZmd1aS5VSVBhY2thZ2UuYWRkUGFja2FnZShfcGF0aCwgKGVycik9PntcclxuICAgIC8vICAgICAgICAgICAgIGlmKGVycil7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGxvYWRlZFBhY2thZ2VbX3BhdGhdID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8v5LuO5rGg5Lit5Yib5bu65a+56LGhXHJcbiAgICBzdGF0aWMgQ3JlYXRlT2JqZWN0RnJvbVBvb2woX3BhdGg6c3RyaW5nLCBfc2xvdDpmZ3VpLkdHcmFwaCkge1xyXG4gICAgICAgIGlmKCFfcGF0aCB8fCAhX3Nsb3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy/ku47msaDkuK3liJvlu7rkuIDkuKpTa2VsZXRvbuWvueixoVxyXG4gICAgICAgIGxldCBvYmogPSBMYXlhLlBvb2wuZ2V0SXRlbShfcGF0aCk7XHJcbiAgICAgICAgaWYoIW9iaikgcmV0dXJuO1xyXG5cclxuICAgICAgICAvL+eUn+aIkOWUr+S4gGdpZFxyXG4gICAgICAgIGlmKCFvYmpbJyRQb29sR0lEJ10pe1xyXG4gICAgICAgICAgICBvYmpbJyRQb29sR0lEJ10gPSBMYXlhLlV0aWxzLmdldEdJRCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighb2JqWyckUGF0aCddKXtcclxuICAgICAgICAgICAgb2JqWyckUGF0aCddID0gX3BhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9vbE9ianNbb2JqWyckUG9vbEdJRCddXSA9IG9iajtcclxuXHJcbiAgICAgICAgX3Nsb3QuZGlzcGxheU9iamVjdC5hZGRDaGlsZChvYmopO1xyXG5cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LuO5Yib5bu6U3BpbmXmiJZEcmFnb25Cb25l5Yqo55S7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gX3BhdGgg6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gIHtmZ3VpLkdHcmFwaH0gX3Nsb3Qg54i25a+56LGhIGZndWkgZ3JhcGhcclxuICAgICAqIEBwYXJhbSAge3N0cmluZyB8IG51bWJlcn0gX25hbWUg5Yqo55S75ZCN5a2X5oiW6ICF57Si5byVXHJcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBfaXNMb29wIOaYr+WQpuW+queOr+aSreaUvu+8jOm7mOiupOW+queOr+aSreaUvlxyXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gX2lzUGxheSDmmK/lkKbnq4vljbPmkq3mlL7vvIzpu5jorqTmkq3mlL5cclxuICAgICAqIEByZXR1cm4ge3NwLlNrZWxldG9ufVxyXG4gICAgICovXHJcbiAgICAvLyBzdGF0aWMgQ3JlYXRlU3BpbmUoX3BhdGgsIF9zbG90LCBfbmFtZSwgX2lzTG9vcCwgX2lzUGxheSkge1xyXG4gICAgLy8gICAgIGlmKHR5cGVvZihfcGF0aCkgIT0gXCJzdHJpbmdcIiB8fCAhX3Nsb3QgfHwgIV9zbG90Lm5vZGUpIHJldHVyblxyXG5cclxuICAgIC8vICAgICBsZXQgc2tlbGV0b24gPSBfc2xvdC5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAvLyAgICAgaWYoc2tlbGV0b24gPT0gbnVsbCl7XHJcbiAgICAvLyAgICAgICAgIHNrZWxldG9uID0gX3Nsb3Qubm9kZS5hZGRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgc2tlbGV0b24ucHJlbXVsdGlwbGllZEFscGhhID0gZmFsc2U7XHJcblxyXG4gICAgLy8gICAgIGxldCBvblByb2Nlc3MgPSBmdW5jdGlvbihjb21wbGV0ZUNvdW50LCB0b3RhbENvdW50LCBpdGVtKSB7fVxyXG4gICAgLy8gICAgIGxldCBjYiA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcclxuICAgIC8vICAgICAgICAgc2tlbGV0b24uc2tlbGV0b25EYXRhID0gcmVzO1xyXG5cclxuICAgIC8vICAgICAgICAgX2lzTG9vcCA9IF9pc0xvb3A/IF9pc0xvb3A6IHRydWU7XHJcbiAgICAvLyAgICAgICAgIGlmKHNrZWxldG9uLnNrZWxldG9uRGF0YSAmJiBza2VsZXRvbi5za2VsZXRvbkRhdGEubG9hZGVkICYmIF9uYW1lKXtcclxuICAgIC8vICAgICAgICAgICAgIHNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBfbmFtZSwgX2lzTG9vcClcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgc2tlbGV0b24ucGF1c2VkID0gX2lzUGxheSA9PSBmYWxzZVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgY2MubG9hZGVyLmxvYWRSZXMoX3BhdGgsIHNwLlNrZWxldG9uRGF0YSwgb25Qcm9jZXNzLCBjYilcclxuXHJcblxyXG4gICAgLy8gICAgIHJldHVybiBza2VsZXRvblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8v6YCa6L+H6aKE5Yi25L2T5Yib5bu6U3BpbmVcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBfcGF0aCBQcmVmYWLot6/lvoRcclxuICAgICAqIEBwYXJhbSAge2ZndWkuR0dyYXBofSBfc2xvdCDniLblr7nosaEgZmd1aSBncmFwaFxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGxiYWNrIOWKqOeUu+WQjeWtl+aIluiAhee0ouW8lVxyXG4gICAgICovXHJcbiAgICAvLyBzdGF0aWMgQ3JlYXRlU3BpbmVGcm9tUHJlZmFiKF9wYXRoLCBfc2xvdCwgY2FsbGJhY2spIHtcclxuICAgIC8vICAgICBpZih0eXBlb2YoX3BhdGgpICE9IFwic3RyaW5nXCIgfHwgIV9zbG90IHx8ICFfc2xvdC5ub2RlKSByZXR1cm47XHJcblxyXG4gICAgLy8gICAgIC8qKiBAdHlwZSB7c3AuU2tlbGV0b259ICovXHJcbiAgICAvLyAgICAgLy8gbGV0IHNrZWxldG9uO1xyXG4gICAgLy8gICAgIGNjLmxvYWRlci5sb2FkUmVzKF9wYXRoLCBjYy5QcmVmYWIsIGZ1bmN0aW9uKGVyciwgcHJlZmFiKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgcHJlZmFiTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAvLyAgICAgICAgICAgICAvKiogQHR5cGUge3NwLlNrZWxldG9ufSAqL1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHNrZWxldG9uID0gIHByZWZhYk5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgIC8vICAgICAgICAgICAgIF9zbG90Lm5vZGUuYWRkQ2hpbGQocHJlZmFiTm9kZSk7XHJcbiAgICAvLyAgICAgICAgICAgICBwcmVmYWJOb2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayhza2VsZXRvbik7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgR0V2ZW50LkRpc3BhdGNoKEdFdmVudC5TUElORV9QUkVGQUJfTE9BREVEKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3RhdGljIExvYWRWaWV3KHBrZzpzdHJpbmcsIGNvbTpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCFwa2cgfHwgIWNvbSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBDb21tb24uUmVzb3VyY2UuYWRkVWlQYWNrYWdlKHBrZyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGdyb290SW5zdCA9IGZndWkuR1Jvb3QuaW5zdDtcclxuICAgICAgICBsZXQgdWkgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QocGtnLCBjb20pLmFzQ29tO1xyXG4gICAgICAgIGlmKHVpKXtcclxuICAgICAgICAgICAgZ3Jvb3RJbnN0LmFkZENoaWxkKHVpKTtcclxuICAgICAgICAgICAgdWkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL+Wwj+a4uOaIj+mAgumFjVxyXG4gICAgICAgICAgICB1aS5zZXRTaXplKGdyb290SW5zdC53aWR0aCwgZ3Jvb3RJbnN0LmhlaWdodCk7XHJcbiAgICAgICAgICAgIHVpLnNldFhZKDAsIDApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbCB0byBhZGQgdWkgcGFja2FnZTogXCIsIHBrZywgY29tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1aTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZUJhc2V7XHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gQ29uZmlnLlN0YXRlQ29uZmlnLklERUw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1clN0YXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVN0YXRlKHN0YXRlOnN0cmluZyl7XHJcbiAgICAgICAgaWYodGhpcy5fc3RhdGUgPT0gc3RhdGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmxldCB0aW1lcklkID0gLTFcclxuLy/orqHml7blmajmsaBcclxubGV0IHRpbWVyUG9vbCA9IG5ldyBBcnJheTxUaW1lcj4oKVxyXG5sZXQgdGltZXJMaXN0ID0gbmV3IEFycmF5PFRpbWVyPigpXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZXIge1xyXG4gICAgcHVibGljIElkOm51bWJlcjtcclxuICAgIHB1YmxpYyBNYXhDZDpudW1iZXI7XHJcbiAgICBwdWJsaWMgQ3VyQ2QgPSAwO1xyXG4gICAgcHVibGljIE9uU3RhcnQ6RnVuY3Rpb247XHJcbiAgICBwdWJsaWMgT25VcGRhdGU6RnVuY3Rpb247XHJcbiAgICBwdWJsaWMgT25FbmQ6RnVuY3Rpb247XHJcbiAgICBwdWJsaWMgVGFyZ2V0O1xyXG4gICAgcHVibGljIFRoaXNBcmc6Q29tbW9uLkV2ZW50RGlzcGF0aGVyO1xyXG4gICAgcHVibGljIEVuZFRpbWUgPSAwO1xyXG4gICAgcHVibGljIElzUnVuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNTdGFydCA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzQWxpdmUgPSB0cnVlO1xyXG4gICAgcHVibGljIFN0YXJ0VGltZTpudW1iZXI7XHJcbiAgICBwcml2YXRlIGF1dG9SZW1vdmU6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgSW5pdChjZDpudW1iZXIsIHN0YXJ0Q2FsbGJhY2s6RnVuY3Rpb24sIHVwZGF0ZUNhbGxiYWNrOkZ1bmN0aW9uLCBlbmRDYWxsYmFjazpGdW5jdGlvbiwgdGFyZ2V0LCB0aGlzQXJnLCBhdXRvUmVtb3ZlPzpib29sZWFuLCBhdXRvU3RhcnQ/OmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuSWQgPSB0aW1lcklkICsgMVxyXG4gICAgICAgIHRoaXMuTWF4Q2QgPSBjZFxyXG4gICAgICAgIHRoaXMuQ3VyQ2QgPSAwXHJcbiAgICAgICAgdGhpcy5PblN0YXJ0ID0gc3RhcnRDYWxsYmFja1xyXG4gICAgICAgIHRoaXMuT25VcGRhdGUgPSB1cGRhdGVDYWxsYmFja1xyXG4gICAgICAgIHRoaXMuT25FbmQgPSBlbmRDYWxsYmFja1xyXG4gICAgICAgIHRoaXMuVGFyZ2V0ID0gdGFyZ2V0XHJcbiAgICAgICAgdGhpcy5UaGlzQXJnID0gdGhpc0FyZ1xyXG4gICAgICAgIHRoaXMuRW5kVGltZSA9IDBcclxuICAgICAgICB0aGlzLklzUnVuID0gZmFsc2VcclxuICAgICAgICB0aGlzLklzU3RhcnQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuSXNBbGl2ZSA9IHRydWVcclxuICAgICAgICAvL+m7mOiupOiHquWKqOmUgOavgVxyXG4gICAgICAgIHRoaXMuYXV0b1JlbW92ZSA9IGF1dG9SZW1vdmUgIT0gbnVsbD8gYXV0b1JlbW92ZTogdHJ1ZTtcclxuICAgICAgICAvL+m7mOiupOiHquWKqOW8gOWni1xyXG4gICAgICAgIGlmKGF1dG9TdGFydCAhPSBmYWxzZSl7XHJcbiAgICAgICAgICAgIHRoaXMuU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNBbGl2ZSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjdXJydGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgaWYoY3VycnRpbWUgPCB0aGlzLkVuZFRpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLkN1ckNkID0gKHRoaXMuRW5kVGltZSAtIGN1cnJ0aW1lKSAqIDAuMDAxXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZih0aGlzLk9uVXBkYXRlKSA9PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5PblVwZGF0ZS5jYWxsKHRoaXMuVGhpc0FyZywgdGhpcy5DdXJDZCwgdGhpcy5UYXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5VcGRhdGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuSXNSdW4gPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLklzU3RhcnQgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgaWYodHlwZW9mKHRoaXMuT25FbmQpID09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uRW5kLmNhbGwodGhpcy5UaGlzQXJnLCB0aGlzLlRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYXV0b1JlbW92ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5Jc1J1biA9IHRydWVcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuSXNTdGFydCl7XHJcbiAgICAgICAgICAgIHRoaXMuSXNTdGFydCA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgLy/orqHml7bnu5PmnZ/ml7bpl7RcclxuICAgICAgICAgICAgdGhpcy5FbmRUaW1lID0gdGhpcy5TdGFydFRpbWUgKyB0aGlzLk1heENkICogMTAwMDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYodHlwZW9mKHRoaXMuT25TdGFydCkgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uU3RhcnQuY2FsbCh0aGlzLlRoaXNBcmcsIHRoaXMuVGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5VcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUmVzZXRDZChjZCl7XHJcbiAgICAgICAgaWYodHlwZW9mKGNkKSAhPSBcIm51bWJlclwiKSByZXR1cm5cclxuXHJcbiAgICAgICAgdGhpcy5NYXhDZCA9IGNkXHJcbiAgICAgICAgdGhpcy5FbmRUaW1lID0gRGF0ZS5ub3coKSArIHRoaXMuTWF4Q2QgKiAxMDAwXHJcbiAgICB9XHJcblxyXG4gICAgUmVtb3ZlKCl7XHJcbiAgICAgICAgLy8gdGhpcy5NYXhDZCA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5DdXJDZCA9IDA7XHJcbiAgICAgICAgdGhpcy5PblN0YXJ0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLk9uVXBkYXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLk9uRW5kID0gbnVsbDtcclxuICAgICAgICB0aGlzLlRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5UaGlzQXJnID0gbnVsbDtcclxuICAgICAgICAvLyB0aGlzLkVuZFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuSXNSdW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLklzU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLklzQWxpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy/np7vliqjliLDpppbkvY1cclxuICAgICAgICBsZXQgaW5kZXggPSB0aW1lclBvb2wuaW5kZXhPZih0aGlzKTtcclxuICAgICAgICBpZihpbmRleCA+IDApe1xyXG4gICAgICAgICAgICB0aW1lclBvb2wuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGltZXJQb29sLnVuc2hpZnQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZXJNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7fSB0aGlzQXJnIOaJp+ihjOWfn1xyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBjZFxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IHN0YXJ0Q2FsbGJhY2sg5byA5aeL5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gdXBkYXRlQ2FsbGJhY2sg6L+H56iL5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gZW5kQ2FsbGJhY2sg57uT5p2f5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gIHt9IHRhcmdldCDorqHml7bnm67moIdcclxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGF1dG9SZW1vdmUg5piv5ZCm6Ieq5Yqo5Yi35paw77yM6buY6K6k6Ieq5YqoXHJcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBhdXRvU3RhcnQg5piv5ZCm6Ieq5Yqo5byA5aeL77yM6buY6K6k6Ieq5YqoXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBOZXdUaW1lcih0aGlzQXJnLCBjZDpudW1iZXIsIHN0YXJ0Q2FsbGJhY2s6RnVuY3Rpb24sIHVwZGF0ZUNhbGxiYWNrOkZ1bmN0aW9uLCBlbmRDYWxsYmFjazpGdW5jdGlvbiwgdGFyZ2V0PywgYXV0b1JlbW92ZT86Ym9vbGVhbiwgYXV0b1N0YXJ0Pzpib29sZWFuKXtcclxuICAgICAgICBsZXQgdCA9IHRpbWVyUG9vbFswXTtcclxuICAgICAgICBpZighdCB8fCB0LklzQWxpdmUpe1xyXG4gICAgICAgICAgICB0ID0gbmV3IFRpbWVyKClcclxuICAgICAgICAgICAgdGltZXJMaXN0W3QuSWRdID0gdFxyXG4gICAgICAgICAgICB0aW1lclBvb2wucHVzaCh0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0LkluaXQoY2QsIHN0YXJ0Q2FsbGJhY2ssIHVwZGF0ZUNhbGxiYWNrLCBlbmRDYWxsYmFjaywgdGFyZ2V0LCB0aGlzQXJnLCBhdXRvUmVtb3ZlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFJlbW92ZVRpbWVyKHRoaXNBcmc6Q29tbW9uLkV2ZW50RGlzcGF0aGVyKXtcclxuICAgICAgICBpZighdGhpc0FyZykgcmV0dXJuO1xyXG4gICAgICAgIHRpbWVyUG9vbC5mb3JFYWNoKHRpbWVyPT57XHJcbiAgICAgICAgICAgIGlmKHRpbWVyLlRoaXNBcmcgJiYgdGltZXIuVGhpc0FyZy5pZCA9PSB0aGlzQXJnLmlkKXtcclxuICAgICAgICAgICAgICAgIHRpbWVyLlJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFJlbW92ZUFsbFRpbWVyKCl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRpbWVyTGlzdCl7XHJcbiAgICAgICAgICAgIHRpbWVyTGlzdFtpXS5SZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFVwZGF0ZSgpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aW1lckxpc3Qpe1xyXG4gICAgICAgICAgICBpZih0aW1lckxpc3RbaV0uSXNBbGl2ZSl7XHJcbiAgICAgICAgICAgICAgICB0aW1lckxpc3RbaV0uVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIENsZWFyQWxsVGltZXIoKXtcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGltZXJMaXN0KXtcclxuICAgICAgICAgICAgdGltZXJMaXN0W2ldLlJlbW92ZSgpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGltZXJMaXN0W2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG4vL+W8uuWItuW8leWvvFxyXG5sZXQgR3VpZGVMaXN0ID0gbmV3IEFycmF5PGZndWkuR0NvbXBvbmVudD4oKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2VyIHtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX2luc3Q6VUlNYW5hZ2VyO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX2luc3Qpe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0ID0gbmV3IFVJTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgb25Bd2FrZSgpe1xyXG4gICAgICAgIFVJTWFuYWdlci5faW5zdCA9IHRoaXM7XHJcbiAgICAgICAgVUlNYW5hZ2VyLnNldFVpS2V5cygpO1xyXG4gICAgICAgIFVJTWFuYWdlci5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0VWlLZXlzKCl7XHJcbiAgICAgICAgbGV0IGNmZyA9IENvbmZpZy5WaWV3S2l0O1xyXG4gICAgICAgIFVJLkxvYWRpbmdQcm9ncmVzc0NvbnRyb2xsZXIuaW5pdChjZmcuTG9hZGluZ1Byb2dyZXNzLktleSwgVUkuTG9hZGluZ1Byb2dyZXNzVmlldyk7XHJcbiAgICAgICAgVUkuTG9hZGluZ0NvbnRyb2xsZXIuaW5pdChjZmcuTG9hZGluZ01haW4uS2V5LCBVSS5Mb2FkaW5nVmlldyk7XHJcbiAgICAgICAgVUkuQ2hvb3NlU2VydmljZUNvbnRyb2xsZXIuaW5pdChjZmcuQ2hvb3NlU2VydmljZS5LZXksIFVJLkNob29zZVNlcnZpY2VWaWV3KTtcclxuICAgICAgICBVSS5QdWJsaWNDb25maXJtYXRpb25Db250cm9sbGVyLmluaXQoY2ZnLlB1YmxpY0NvbmZpcm1hdGlvbi5LZXksIFVJLlB1YmxpY0NvbmZpcm1hdGlvblZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFkZExpc3RlbmVycygpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiBDb25maWcuVmlld0tpdCl7XHJcbiAgICAgICAgICAgIGxldCBjZmc6Q29uZmlnLlZpZXdDb25maWcgPSBDb25maWcuVmlld0tpdFtpXTtcclxuICAgICAgICAgICAgaWYoY2ZnICYmIGNmZy5LZXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGNmZy5LZXksIHRoaXMuZ29PcGVuLmJpbmQodGhpcywgY2ZnLktleSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlQ29udHJvbGxlciwgdGhpcy5vbkNsb3NlQ29udHJvbGxlcik7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5VaU5vdGljZUVpZC5PcGVuRnVsbFNjcmVlbiwgdGhpcy5vbk9wZW5GdWxsc2NyZWVuKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlRnVsbFNjcmVlbiwgdGhpcy5vbkNsb3NlRnVsbHNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5VaU5vdGljZUVpZC5DbG9zZVBvcHVwLCB0aGlzLm9wZW5OZXh0UG9wdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdvT3BlbihrZXksIC4uLmRhdGEpe1xyXG4gICAgICAgIGxldCBjID0gQ29yZS5DdHJsTWFwQXJyYXlba2V5XSBhcyB0eXBlb2YgQ29yZS5Db250cm9sbGVyO1xyXG4gICAgICAgIGlmKGMpe1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Db250cm9sbGVyKGMsIC4uLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb3BlbkNvbnRyb2xsZXIoY3RybDp0eXBlb2YgQ29yZS5Db250cm9sbGVyLCAuLi5fZGF0YSkge1xyXG4gICAgICAgIGlmKCFjdHJsKSByZXR1cm5cclxuXHJcbiAgICAgICAgbGV0IGNLZXkgPSBjdHJsLktleTtcclxuICAgICAgICBsZXQgY3RybEluc3QgPSBDb3JlLk9wZW5lZEN0cmxbY0tleV07XHJcbiAgICAgICAgaWYoIWN0cmxJbnN0IHx8IGN0cmxJbnN0LklzRGVzdHJveWVkKXtcclxuICAgICAgICAgICAgY3RybEluc3QgPSBuZXcgY3RybChjdHJsLktleSwgY3RybC52aWV3KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy/lj6rlhYHorrjliJvlu7rkuIDkuKrlrp7kvotcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRyb2xsZXIgaGFzIG9wZW5lZDogJywgY0tleSk7XHJcbiAgICAgICAgICAgIGN0cmxJbnN0LnNob3coLi4uX2RhdGEpO1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3Quc2V0Q2hpbGRJbmRleChDb3JlLlZpZXdNYXBbY0tleV0uVUksIGZndWkuR1Jvb3QuaW5zdC5udW1DaGlsZHJlbik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrT3BlbkN0cmxJbnN0KGN0cmxJbnN0LCAuLi5fZGF0YSk7XHJcblxyXG4gICAgICAgIC8vIGxldCBkb25lID0gY3RybEluc3QuY3JlYXRlKCk7XHJcbiAgICAgICAgLy8gaWYoZG9uZSl7XHJcbiAgICAgICAgLy8gICAgIGN0cmxJbnN0Lm9wZW4oLi4uX2RhdGEpXHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJPcGVuIGNvbnRyb2xsZXIgZmFpbGVkXCIpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAvL+iuvue9rua4suafk+Wxgue6p1xyXG4gICAgICAgIC8vIGlmKGN0cmxJbnN0LklzUG9wdXApe1xyXG4gICAgICAgIC8vICAgICBjdHJsSW5zdC5Tb3J0aW5nT3JkZXIoQ29uZmlnLlVJQ29uZmlnLlNvcnRpbmdPcmRlci5Qb3B1cCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyByZXR1cm4gY3RybEluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tPcGVuQ3RybEluc3QoY3RybEluc3Q6Q29yZS5Db250cm9sbGVyLCAuLi5fZGF0YSl7XHJcbiAgICAgICAgaWYoY3RybEluc3QuSXNQb3B1cCl7XHJcbiAgICAgICAgICAgIGN0cmxJbnN0ID0gdGhpcy5nZXROZXh0UG9wdXAoY3RybEluc3QsIC4uLl9kYXRhKTtcclxuICAgICAgICAgICAgaWYoIWN0cmxJbnN0KSByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZG9uZSA9IGN0cmxJbnN0LmNyZWF0ZSgpO1xyXG4gICAgICAgIGlmKGRvbmUpe1xyXG4gICAgICAgICAgICBjdHJsSW5zdC5vcGVuKC4uLl9kYXRhKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiT3BlbiBjb250cm9sbGVyIGZhaWxlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/orr7nva7muLLmn5PlsYLnuqdcclxuICAgICAgICBpZihjdHJsSW5zdC5Jc1BvcHVwKXtcclxuICAgICAgICAgICAgY3RybEluc3QuU29ydGluZ09yZGVyKENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuUG9wdXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGN0cmxJbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8v5YWz6Zet55WM6Z2i5aSE55CGXHJcbiAgICBzdGF0aWMgb25DbG9zZUNvbnRyb2xsZXIoY2tleTpzdHJpbmcpe1xyXG4gICAgICAgIGxldCBjdHJsID0gQ29yZS5PcGVuZWRDdHJsW2NrZXldIGFzIENvcmUuQ29udHJvbGxlcjtcclxuICAgICAgICAvL+a4hemZpOaJgOacieiuoeaXtuWZqFxyXG4gICAgICAgIE1hbmFnZXIuVGltZXJNYW5hZ2VyLlJlbW92ZVRpbWVyKGN0cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5YWo5bGP55WM6Z2i5aSE55CGXHJcbiAgICBzdGF0aWMgb25PcGVuRnVsbHNjcmVlbihja2V5OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5oaWRlT3RoZXJVSShja2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb25DbG9zZUZ1bGxzY3JlZW4oY2tleTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuc2hvd090aGVyVUkoY2tleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhpZGVPdGhlclVJKGNrZXk6c3RyaW5nKXtcclxuICAgICAgICBmb3IobGV0IGkgaW4gQ29yZS5PcGVuZWRDdHJsKXtcclxuICAgICAgICAgICAgaWYoaSA9PSBja2V5KSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGxldCBjdHJsID0gQ29yZS5PcGVuZWRDdHJsW2ldO1xyXG4gICAgICAgICAgICBpZihjdHJsICYmIGN0cmwuSXNTaG93KXtcclxuICAgICAgICAgICAgICAgIGN0cmwuVmlldy5VSS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dPdGhlclVJKGNrZXk6c3RyaW5nKXtcclxuICAgICAgICBmb3IobGV0IGkgaW4gQ29yZS5PcGVuZWRDdHJsKXtcclxuICAgICAgICAgICAgaWYoaSA9PSBja2V5KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgY3RybCA9IENvcmUuT3BlbmVkQ3RybFtpXTtcclxuICAgICAgICAgICAgaWYoY3RybCAmJiBjdHJsLklzU2hvdyl7XHJcbiAgICAgICAgICAgICAgICBjdHJsLlZpZXcuVUkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RhdGljIG9wZW5HdWlkZSA9IGZ1bmN0aW9uKGd1aWRlTmFtZSwgdGFyZ2V0Q29tKXtcclxuICAgIC8vICAgICBpZighZ3VpZGVOYW1lKSByZXR1cm47XHJcblxyXG4gICAgLy8gICAgIGxldCBncm9vdEluc3QgPSBmZ3VpLkdSb290Lmluc3RcclxuXHJcbiAgICAvLyAgICAgbGV0IGd1aWRlQ29tID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KENvbmZpZy5WaWV3S2l0Lkd1aWRlci5Qa2csIGd1aWRlTmFtZSkuYXNDb21cclxuICAgIC8vICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXSA9IGd1aWRlQ29tXHJcblxyXG4gICAgLy8gICAgIGdyb290SW5zdC5hZGRDaGlsZChndWlkZUNvbSlcclxuICAgIC8vICAgICBndWlkZUNvbS5zZXRTaXplKGdyb290SW5zdC53aWR0aCwgZ3Jvb3RJbnN0LmhlaWdodClcclxuICAgIC8vICAgICBsZXQgZ3VpZGVNYXNrID0gZ3VpZGVDb20uZ2V0Q2hpbGQoXCJNYXNrXCIpXHJcbiAgICAvLyAgICAgaWYodGFyZ2V0Q29tKXtcclxuICAgIC8vICAgICAgICAgZ3VpZGVNYXNrLnNldFhZKHRhcmdldENvbS54LCB0YXJnZXRDb20ueSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3RhdGljIGNsb3NlR3VpZGUgPSBmdW5jdGlvbihndWlkZU5hbWUpe1xyXG4gICAgICAgIGlmKCFHdWlkZUxpc3RbZ3VpZGVOYW1lXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgR3VpZGVMaXN0W2d1aWRlTmFtZV0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuZXh0R3VpZGUgPSBmdW5jdGlvbihndWlkZU5hbWUpe1xyXG4gICAgICAgIGlmKCFHdWlkZUxpc3RbZ3VpZGVOYW1lXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgaW4gR3VpZGVMaXN0KXtcclxuICAgICAgICAgICAgR3VpZGVMaXN0W2d1aWRlTmFtZV0gJiYgR3VpZGVMaXN0W2d1aWRlTmFtZV0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBQb3B1cE1hcCA9IG5ldyBBcnJheTx0eXBlb2YgQ29yZS5Db250cm9sbGVyPigpO1xyXG4gICAgc3RhdGljIFBvcHVwUXVldWUgPSBuZXcgQXJyYXk8Q29yZS5Db250cm9sbGVyPigpO1xyXG4gICAgc3RhdGljIFBvcHVwRGF0YSA9IHt9O1xyXG5cclxuXHJcbiAgICAvL+aJk+W8gOW8ueeql1xyXG4gICAgc3RhdGljIG9wZW5Qb3B1cCAocG9wdXBDdHJsOnR5cGVvZiBDb3JlLkNvbnRyb2xsZXIsIGRhdGEpe1xyXG4gICAgICAgIGlmKCFwb3B1cEN0cmwpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoVUlNYW5hZ2VyLlBvcHVwTWFwLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBNYXAucHVzaChwb3B1cEN0cmwpO1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBEYXRhW3BvcHVwQ3RybC5LZXldID0gZGF0YTtcclxuICAgICAgICAgICAgbGV0IHBvcHVwID0gVUlNYW5hZ2VyLlBvcHVwTWFwLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuQ29udHJvbGxlcihwb3B1cCwgVUlNYW5hZ2VyLlBvcHVwRGF0YVtwb3B1cC5LZXldKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5Db250cm9sbGVyKHBvcHVwQ3RybCwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldE5leHRQb3B1cCAocG9wdXBDdHJsOkNvcmUuQ29udHJvbGxlciwgLi4uZGF0YSl7XHJcbiAgICAgICAgaWYoIXBvcHVwQ3RybCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZihVSU1hbmFnZXIuUG9wdXBRdWV1ZS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLlBvcHVwUXVldWUucHVzaChwb3B1cEN0cmwpO1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBEYXRhW3BvcHVwQ3RybC5tdWx0aXRvbktleV0gPSBkYXRhO1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gVUlNYW5hZ2VyLlBvcHVwUXVldWUuc2hpZnQoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHBvcHVwQ3RybDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIDkuIvkuIDkuKrlvLnnqpdcclxuICAgIHByaXZhdGUgc3RhdGljIG9wZW5OZXh0UG9wdXAgKCl7XHJcbiAgICAgICAgLy8gVUlNYW5hZ2VyLlBvcHVwTWFwLnNvbWUoKHZhbHVlLCBpZHgpPT57XHJcbiAgICAgICAgLy8gICAgIGlmKHBvcHVwQ3RybCBpbnN0YW5jZW9mIHZhbHVlKXtcclxuICAgICAgICAvLyAgICAgICAgIFVJTWFuYWdlci5Qb3B1cE1hcC5zcGxpY2UoaWR4LCAxKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIFVJTWFuYWdlci5Qb3B1cERhdGFbcG9wdXBDdHJsLm11bHRpdG9uS2V5XSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmKFVJTWFuYWdlci5Qb3B1cFF1ZXVlLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBRdWV1ZS5wb3AoKTtcclxuICAgICAgICAgICAgbGV0IHBvcHVwID0gVUlNYW5hZ2VyLlBvcHVwUXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgaWYocG9wdXApe1xyXG4gICAgICAgICAgICAgICAgVUlNYW5hZ2VyLmNoZWNrT3BlbkN0cmxJbnN0KHBvcHVwLCAuLi5VSU1hbmFnZXIuUG9wdXBEYXRhW3BvcHVwLm11bHRpdG9uS2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIDmloflrZfnoa7orqTlvLnnqpdcclxuICAgIHN0YXRpYyBvcGVuQ29uZmlybVdpbmRvdyhjb250ZW50OnN0cmluZ1tdLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5vcGVuUG9wdXAoVUkuUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlciwgbmV3IENvbmZpZy5Qb3B1cFdpbmRvd0RhdGEoY29udGVudCwgeWVzQnRuQ2FsbGJhY2ssIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5Db250ZW50LCBidG5ZZXNUeHQsIGJ0bkNhbmNlbFR4dCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5omT5byA5aWW5Yqx5by556qXXHJcbiAgICBzdGF0aWMgb3BlblJld2FyZFdpbmRvdyhyZXdhcmREYXRhLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5vcGVuUG9wdXAoVUkuUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlciwgbmV3IENvbmZpZy5Qb3B1cFdpbmRvd0RhdGEobnVsbCwgeWVzQnRuQ2FsbGJhY2ssIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5SZXdhcmQsIHJld2FyZERhdGEsIGJ0blllc1R4dCwgYnRuQ2FuY2VsVHh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIDmloflrZcr5aWW5Yqx5by556qXXHJcbiAgICBzdGF0aWMgb3BlbkNvbnRlbnRSZXdhcmRXaW5kb3coY29udGVudDpzdHJpbmdbXSwgcmV3YXJkRGF0YSwgeWVzQnRuQ2FsbGJhY2s/OkZ1bmN0aW9uLCBidG5ZZXNUeHQ/OnN0cmluZywgYnRuQ2FuY2VsVHh0PzpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMub3BlblBvcHVwKFVJLlB1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXIsIG5ldyBDb25maWcuUG9wdXBXaW5kb3dEYXRhKFxyXG4gICAgICAgICAgICBjb250ZW50LCBcclxuICAgICAgICAgICAgeWVzQnRuQ2FsbGJhY2ssIFxyXG4gICAgICAgICAgICBDb25maWcuQ29uZmlybVdpbmRvd1R5cGUuQ29udGVudEFuZFJld2FyZCwgXHJcbiAgICAgICAgICAgIHJld2FyZERhdGEsIFxyXG4gICAgICAgICAgICBidG5ZZXNUeHQsIFxyXG4gICAgICAgICAgICBidG5DYW5jZWxUeHRcclxuICAgICAgICApKTtcclxuICAgIH1cclxufSIsIlxyXG4vL+eJiOacrOeuoeeQhlxyXG5leHBvcnQgY2xhc3MgVmVyc2lvbk1hbmFnZXJ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdmVyc2lvbjpudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBzdGF0aWMgc2V0IFZlcnNpb24odmVyc2lvbjpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX3ZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgVmVyc2lvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENob29zZVNlcnZpY2VDb250cm9sbGVyIGV4dGVuZHMgQ29yZS5Db250cm9sbGVye1xyXG4gICAgVmlldzpVSS5DaG9vc2VTZXJ2aWNlVmlldztcclxuXHJcbiAgICBvbkNyZWF0ZSgpe1xyXG4gICAgICAgIHRoaXMuU29ydGluZ09yZGVyKENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuTmV0U2lnbmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW4oZGF0YSkge1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uTGlzZW50ZXIodGhpcy5WaWV3LkxvY2FsLCB0aGlzLm9wZW5Mb2NhbFNlcnZpY2UpO1xyXG5cclxuICAgICAgICB0aGlzLlZpZXcuQWNjb3VudE5hbWUudGV4dCA9IExvY2FsQ29uZmlnLkdldEFjb3VudE5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTG9jYWxTZXJ2aWNlKCl7XHJcbiAgICAgICAgbGV0IGFjY291bnQgPSB0aGlzLlZpZXcuQWNjb3VudE5hbWUudGV4dDtcclxuICAgICAgICBpZih0eXBlb2YoYWNjb3VudCkgPT0gJ3N0cmluZycgJiYgYWNjb3VudC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgQ29uZmlnLk5ldENvbmZpZy5UZW1wTmFtZSA9IGFjY291bnQ7XHJcbiAgICAgICAgICAgIExvY2FsQ29uZmlnLlNhdmVBY291bnROYW1lKGFjY291bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwgPSBDb25maWcuTmV0Q29uZmlnLkxvY2FsUmVxdWVzdFVybDtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbkh0dHBTZXJ2aWNlKCl7XHJcbiAgICAgICAgQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID0gQ29uZmlnLk5ldENvbmZpZy5IdHRwUmVxdWVzdFVybDtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkxvY2FsV2VjaGF0U2VydmljZSgpe1xyXG4gICAgICAgIENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9IENvbmZpZy5OZXRDb25maWcuTG9jYWxXZWNoYXRSZXF1ZXN0VXJsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfor7fmsYLlnLDlnYDvvJonLENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKXtcclxuICAgICAgICBMb2NhbENvbmZpZy5Jc0Nob29zZWRTZXJ2aWNlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2VydmljZUNob29zZWQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi9Db3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hvb3NlU2VydmljZVZpZXcgZXh0ZW5kcyBDb3JlLlZpZXd7XHJcbiAgICBMb2NhbDpmZ3VpLkdPYmplY3Q7XHJcbiAgICBIdHRwOmZndWkuR09iamVjdDtcclxuICAgIExvY2FsV2VjaGF0OmZndWkuR09iamVjdDtcclxuICAgIEFjY291bnROYW1lOmZndWkuR1RleHRJbnB1dDtcclxuXHJcbiAgICBMb2FkVmlldygpIHtcclxuICAgICAgICB0aGlzLkxvY2FsID0gdGhpcy5VSS5nZXRDaGlsZChcIkxvY2FsXCIpXHJcbiAgICAgICAgdGhpcy5IdHRwID0gdGhpcy5VSS5nZXRDaGlsZChcIkh0dHBcIilcclxuICAgICAgICB0aGlzLkxvY2FsV2VjaGF0ID0gdGhpcy5VSS5nZXRDaGlsZChcIkxvY2FsV2VjaGF0XCIpXHJcblxyXG4gICAgICAgIHRoaXMuQWNjb3VudE5hbWUgPSB0aGlzLlVJLmdldENoaWxkKFwiQWNjb3VudE5hbWVcIikuYXNUZXh0SW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXN0cm95KCl7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuLyoqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBDb250cm9sbGVyPn0gKi9cclxuLy8gbGV0IEN0cmxNYXA6Q29uZmlnLkRpY3Rpb25hcnk8Q29udHJvbGxlcj4gPSB7fTtcclxuXHJcbi8qKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgVmlldz59ICovXHJcbmxldCBWaWV3TWFwOntba2V5OnN0cmluZ106Vmlld30gPSB7fTtcclxuXHJcbi8qKiBAdHlwZSB7Q29udHJvbGxlcltdfSAqL1xyXG5sZXQgT3BlbmVkQ3RybCA9IG5ldyBBcnJheTxDb250cm9sbGVyPigpO1xyXG5cclxuLy8gZXhwb3J0IGxldCBDdHJsTWFwQXJyYXk6Q29uZmlnLkRpY3Rpb25hcnk8dHlwZW9mIENvbnRyb2xsZXI+ID0ge307XHJcbmV4cG9ydCBsZXQgQ3RybE1hcEFycmF5ID0gbmV3IEFycmF5PHR5cGVvZiBDb250cm9sbGVyPigpO1xyXG5leHBvcnQgbGV0IFZpZXdNYXBBcnJheTpDb25maWcuRGljdGlvbmFyeTx0eXBlb2YgVmlldz4gPSB7fTtcclxuXHJcbmNsYXNzIEN0cmxMaXNlbmVye1xyXG4gICAgcHVibGljIE9iajpmZ3VpLkdPYmplY3Q7XHJcbiAgICBwdWJsaWMgTGlzZW5lcjpGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvYmo6Zmd1aS5HT2JqZWN0LCBsaXNlbmVyOkZ1bmN0aW9uKXtcclxuICAgICAgICBpZighb2JqKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuT2JqID0gb2JqO1xyXG4gICAgICAgIHRoaXMuTGlzZW5lciA9IGxpc2VuZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCl7XHJcbiAgICAgICAgdGhpcy5PYmoub2ZmQ2xpY2sodGhpcywgdGhpcy5MaXNlbmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPcGVuZWRDdHJsLCBWaWV3TWFwfVxyXG5cclxuLy8vIDxzdW1tYXJ5PlxyXG4vLy8g5ZCRVWlNYW5hZ2VyIOazqOWGjOiEmuacrCDov5jmnInkuIDkupsgTVNHSURcclxuLy8vIOS4gOiIrOaYr3BhbmVsIOaMgui9vei/meagt+eahOiEmuacrCDpnIDopoHlkJHlhbbku5bmqKHlnZcg5oiW6ICF6ISa5pys6YCa5L+hXHJcbi8vLyA8L3N1bW1hcnk+XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVaUNWQmFzZSBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlcntcclxuICAgIHB1YmxpYyBtdWx0aXRvbktleTpzdHJpbmc7XHJcblxyXG4gICAgb25EZXN0cm95KClcclxuICAgIHtcclxuICAgICAgICAvL+mHjeWGmeatpOe7hOS7tuaWueazleW/hemhu+aJp+ihjFxyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIFVpQ1ZCYXNle1xyXG4gICAgc3RhdGljIGNLZXk6c3RyaW5nO1xyXG4gICAgc3RhdGljIHZpZXc6dHlwZW9mIFZpZXc7XHJcblxyXG4gICAgLy8gcHVibGljIG11bHRpdG9uS2V5OnN0cmluZztcclxuICAgIHB1YmxpYyBWaWV3OlZpZXc7XHJcblxyXG4gICAgcHVibGljIERhdGE7XHJcbiAgICBwdWJsaWMgSXNPcGVuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNEZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgcHVibGljIElzU2hvdyA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzUG9wdXAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0Z1bGxTY3JlZW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0RlZmF1bHQgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0ludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgbGlzZW50ZXJBcnJheSA9IG5ldyBBcnJheTxDdHJsTGlzZW5lcj4oKTtcclxuICAgIFxyXG4gICAgc3RhdGljIHNldCBLZXkoa2V5OnN0cmluZyl7dGhpcy5jS2V5ID0ga2V5fVxyXG4gICAgc3RhdGljIGdldCBLZXkoKXtyZXR1cm4gdGhpcy5jS2V5fVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihjS2V5PzpzdHJpbmcsIHZpZXc/OnR5cGVvZiBWaWV3LCBpc0Z1bGxTY3JlZW4/OmJvb2xlYW4sIGlzUG9wdXA/OmJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZighY0tleSB8fCAhdmlldykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBrZXkgb3Igdmlld1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKCFPcGVuZWRDdHJsW2NLZXldKSB7XHJcbiAgICAgICAgICAgIE9wZW5lZEN0cmxbY0tleV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGxldCB2S2V5ID0gdmlldy5LZXk7XHJcbiAgICAgICAgaWYoIVZpZXdNYXBbdktleV0pe1xyXG4gICAgICAgICAgICBWaWV3TWFwW3ZLZXldID0gbmV3IHZpZXcodktleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm11bHRpdG9uS2V5ID0gY0tleTtcclxuICAgICAgICB0aGlzLlZpZXcgPSBWaWV3TWFwW3ZLZXldO1xyXG4gICAgICAgIHRoaXMuSXNGdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuID09IHRydWU7XHJcbiAgICAgICAgdGhpcy5Jc1BvcHVwID0gaXNQb3B1cCA9PSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDdHJsKGlkOm51bWJlcil7XHJcbiAgICAgICAgQ3RybE1hcEFycmF5W2lkXSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXQoY0tleSwgdmlldzp0eXBlb2YgVmlldywgdktleT86c3RyaW5nKXtcclxuICAgICAgICB0aGlzLktleSA9IGNLZXk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgICAgICB0aGlzLnZpZXcuS2V5ID0gdktleT8gdktleTogY0tleTtcclxuICAgICAgICBDdHJsTWFwQXJyYXlbdGhpcy5LZXldID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVWaWV3KHZpZXc6IHR5cGVvZiBWaWV3LCBrZXk6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuVmlldyA9IG5ldyB2aWV3KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5WaWV3KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyB2aWV3IGNyZWF0ZWQhXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSXNEZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlZpZXcuSW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ3JlYXRlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oX2RhdGE/KSB7XHJcbiAgICAgICAgdGhpcy5Jc09wZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuRGF0YSA9IF9kYXRhO1xyXG5cclxuICAgICAgICAvLyBGYWNhZGUuUHVzaEN0cmwodGhpcywgdGhpcy5EYXRhKTtcclxuICAgICAgICB0aGlzLnNob3coX2RhdGEpO1xyXG4gICAgICAgIHRoaXMub3Blbk92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuT3ZlcigpIHtcclxuICAgICAgICBpZih0aGlzLklzRnVsbFNjcmVlbil7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uVWlOb3RpY2VFaWQuT3BlbkZ1bGxTY3JlZW4sIHRoaXMubXVsdGl0b25LZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5Jc1BvcHVwKXtcclxuICAgICAgICAgICAgdGhpcy5Tb3J0aW5nT3JkZXIoQ29uZmlnLlVJQ29uZmlnLlNvcnRpbmdPcmRlci5Qb3B1cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uT3Blbih0aGlzLkRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJ1dHRvbkxpc2VudGVyKG9iamVjdDpmZ3VpLkdPYmplY3QsIGZ1bjpGdW5jdGlvbiwgZGF0YT86QXJyYXk8YW55PiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKG9iamVjdCA9PSBudWxsIHx8IGZ1biA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm9iamVjdCBvciBmdW4gaXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpc0FyZyA9IHRoaXNBcmc/dGhpc0FyZzogdGhpcztcclxuICAgICAgICBvYmplY3Qub25DbGljayh0aGlzQXJnLCBmdW4sIGRhdGEpO1xyXG4gICAgICAgIHRoaXMubGlzZW50ZXJBcnJheS5wdXNoKG5ldyBDdHJsTGlzZW5lcihvYmplY3QsIGZ1bikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIGlmKHRoaXMuSXNPcGVuID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuSXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uVWlOb3RpY2VFaWQuQ2xvc2VDb250cm9sbGVyLCB0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLklzUG9wdXApe1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlUG9wdXAsIHRoaXMubXVsdGl0b25LZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5Jc0Z1bGxTY3JlZW4pe1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlRnVsbFNjcmVlbiwgdGhpcy5tdWx0aXRvbktleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkZWxldGUgQ3RybE1hcFt0aGlzLm11bHRpdG9uS2V5XTtcclxuICAgICAgICAvLyBPcGVuZWRDdHJsLnNwbGljZShPcGVuZWRDdHJsLmluZGV4T2YodGhpcyksIDEpO1xyXG4gICAgICAgIE9wZW5lZEN0cmxbdGhpcy5tdWx0aXRvbktleV0gPSBudWxsO1xyXG5cclxuICAgICAgICAvL+a4heepuueCueWHu+S6i+S7tlxyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aGlzLmxpc2VudGVyQXJyYXkpe1xyXG4gICAgICAgICAgICB0aGlzLmxpc2VudGVyQXJyYXlbaV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzZW50ZXJBcnJheVtpXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+a4hemZpOebkeWQrOS6i+S7tlxyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgIC8v5riF6Zmk5omA5pyJ6K6h5pe25ZmoXHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5Jc0Rlc3Ryb3llZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLklzRGVzdHJveWVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuVmlldyAmJiB0aGlzLlZpZXcuZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5WaWV3LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuVmlldyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Jc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkRhdGEgPSBudWxsO1xyXG5cclxuICAgICAgICAvL+mUgOavgeiKgueCuVxyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaYvuekuueVjOmdolxyXG4gICAgc2hvdyhkYXRhPykge1xyXG4gICAgICAgIGRhdGEgPSBkYXRhPyBkYXRhOiB0aGlzLkRhdGE7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLklzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbihkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5pyqb3BlbueKtuaAge+8jOS4jeWkhOeQhlxyXG4gICAgICAgIGlmICghdGhpcy5Jc09wZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuSXNTaG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5Jc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICB0aGlzLlZpZXcuc2hvdyhkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSXNTaG93ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uU2hvdyhkYXRhKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDpmpDol4/nlYzpnaJcclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLklzU2hvdykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5Jc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICB0aGlzLlZpZXcuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5Jc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uSGlkZSgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiuvue9rua4suafk+mhuuW6j1xyXG4gICAgU29ydGluZ09yZGVyKG9yZGVyOm51bWJlcikge1xyXG4gICAgICAgIGlmKCF0aGlzLklzRGVzdHJveWVkKXtcclxuICAgICAgICAgICAgdGhpcy5WaWV3LlNvcnRpbmdPcmRlcihvcmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOaYr+WQpuWPr+inpuaOp1xyXG4gICAgaW50ZXJhY3RpdmUoY2FuVG91Y2g6Ym9vbGVhbil7XHJcbiAgICAgICAgaWYoY2FuVG91Y2ggPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Jc0ludGVyYWN0aXZlID0gY2FuVG91Y2g7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5Jc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICB0aGlzLlZpZXcuaW50ZXJhY3RpdmUoY2FuVG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm9uSW50ZXJhY3RpdmUoY2FuVG91Y2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hVSShkYXRhPyl7XHJcbiAgICAgICAgdGhpcy5WaWV3LnJlZnJlc2hVSShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKCkge31cclxuXHJcbiAgICBvbkNyZWF0ZSgpIHt9XHJcblxyXG4gICAgb25PcGVuKGRhdGE/KSB7fVxyXG5cclxuICAgIG9uU2hvdyhkYXRhPykge31cclxuXHJcbiAgICBvbkhpZGUoKSB7fVxyXG4gICAgXHJcbiAgICBvbkludGVyYWN0aXZlKGNhblRvdWNoOmJvb2xlYW4pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3IGV4dGVuZHMgVWlDVkJhc2Uge1xyXG4gICAgc3RhdGljIHZLZXk6c3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgbGlzZW50ZXJBcnJheSA9IG5ldyBBcnJheTxDdHJsTGlzZW5lcj4oKTtcclxuICAgIHByaXZhdGUgX2lzQWxpdmU6Ym9vbGVhbjtcclxuICAgIC8vIHB1YmxpYyBtdWx0aXRvbktleTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIEZ1aUltYWdlVXJsOnN0cmluZztcclxuICAgIHByaXZhdGUgRnVpQnVmZmVyVXJsOnN0cmluZztcclxuICAgIHByaXZhdGUgUGtnQWRyczpzdHJpbmc7XHJcbiAgICBwcml2YXRlIFBrZzpzdHJpbmc7XHJcbiAgICBwcml2YXRlIENvbTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9VSTpmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIENhbGxiYWNrTGlzdDpBcnJheTxGdW5jdGlvbj4gPSBbXTtcclxuICAgIHByaXZhdGUgdWlDZmc6Q29uZmlnLlZpZXdDb25maWc7XHJcblxyXG4gICAgcHVibGljIFdpbmRvdzpmZ3VpLkdDb21wb25lbnQ7IC8v5by55Ye656qX5Y+j77yM5rOo5oSP57uE5Lu25ZG95ZCN5Li6V2luZG93XHJcbiAgICBwdWJsaWMgQnRuX0JhY2s6Zmd1aS5HQnV0dG9uOyAgIC8v5YWz6Zet5oyJ6ZKu77yM5ZG95ZCN5Li6QnRuX0JhY2tcclxuICAgIHB1YmxpYyBMaXN0OmZndWkuR0xpc3Q7ICAvL+WIl+ihqO+8jOmcgOiHquihjOWumuS5iVxyXG5cclxuICAgIHN0YXRpYyBzZXQgS2V5KGtleTpzdHJpbmcpe3RoaXMudktleSA9IGtleX1cclxuICAgIHN0YXRpYyBnZXQgS2V5KCl7cmV0dXJuIHRoaXMudktleX1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3Ioa2V5OnN0cmluZyl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm11bHRpdG9uS2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuX2lzQWxpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZighVmlld01hcFtrZXldKSB7XHJcbiAgICAgICAgICAgIFZpZXdNYXBba2V5XSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVpQ2ZnID0gQ29uZmlnLlZpZXdLaXRba2V5XTtcclxuICAgICAgICBpZighdGhpcy51aUNmZyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luY29ycmVjdCB2aWV3IGtleSEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgVUkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVUk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IElzQWxpdmUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNBbGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0aWFsaXplKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX1VJKXtcclxuICAgICAgICAgICAgdGhpcy5fVUkgPSBNYW5hZ2VyLlNwYXduTWFuYWdlci5Mb2FkVmlldyh0aGlzLnVpQ2ZnLlBrZywgdGhpcy51aUNmZy5Db20pO1xyXG4gICAgICAgICAgICBpZighdGhpcy5fVUkpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBVaSBjb206ICcsIHRoaXMudWlDZmcuS2V5KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLldpbmRvdyA9IHRoaXMuVUkuZ2V0Q2hpbGQoJ1dpbmRvdycpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuTG9hZFZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZShrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZighVmlld01hcFtrZXldKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmlld01hcFtrZXldID0gbmV3IFZpZXcoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBWaWV3TWFwW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNhbGxiYWNrS2V5XHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgc2V0Q2FsbGJhY2soY2FsbGJhY2tLZXk6c3RyaW5nLCBjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICAgICAgdGhpcy5DYWxsYmFja0xpc3RbY2FsbGJhY2tLZXldID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaW52b2tlQ2FsbGJhY2soY2FsbGJhY2tLZXksIC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmKHR5cGVvZihjYWxsYmFja0tleSkgIT0gJ3N0cmluZycgfHwgdHlwZW9mKHRoaXMuQ2FsbGJhY2tMaXN0W2NhbGxiYWNrS2V5XSkgIT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkNhbGxiYWNrTGlzdFtjYWxsYmFja0tleV0oLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQnV0dG9uTGlzZW50ZXIob2JqZWN0OmZndWkuR09iamVjdCwgZnVuOkZ1bmN0aW9uLCBkYXRhPzpBcnJheTxhbnk+LCB0aGlzQXJnPyl7XHJcbiAgICAgICAgaWYob2JqZWN0ID09IG51bGwgfHwgZnVuID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwib2JqZWN0IG9yIGZ1biBpcyBudWxsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzQXJnID0gdGhpc0FyZz90aGlzQXJnOiB0aGlzO1xyXG4gICAgICAgIG9iamVjdC5vbkNsaWNrKHRoaXNBcmcsIGZ1biwgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5saXNlbnRlckFycmF5LnB1c2gobmV3IEN0cmxMaXNlbmVyKG9iamVjdCwgZnVuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tMaXN0Q2FsbGJhY2sodGhpc0FyZywgZnVuYzpGdW5jdGlvbiwgLi4uZGF0YSl7XHJcbiAgICAgICAgQ29tbW9uLmNsaWNrTGlzdENhbGxiYWNrKHRoaXMuTGlzdCwgdGhpc0FyZywgZnVuYywgLi4uZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2lzQWxpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy/muIXpmaTnm5HlkKzkuovku7ZcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICAvL+a4hemZpOaJgOacieiuoeaXtuWZqFxyXG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgLy/muIXnqbrngrnlh7vkuovku7ZcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5saXNlbnRlckFycmF5KXtcclxuICAgICAgICAgICAgdGhpcy5saXNlbnRlckFycmF5W2ldLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc2VudGVyQXJyYXlbaV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVsZXRlIFZpZXdNYXBbdGhpcy5tdWx0aXRvbktleV1cclxuICAgICAgICBcclxuICAgICAgICAvLyBmb3IobGV0IGkgaW4gdGhpcykge1xyXG4gICAgICAgIC8vICAgICAvLyDplIDmr4FVSVxyXG4gICAgICAgIC8vICAgICAvLyBpZih0aGlzW2ldICYmIHRoaXNbaV0uZGlzcG9zZSkge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgdGhpc1tpXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgLy8gICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXNbaV0gPSB1bmRlZmluZWRcclxuXHJcbiAgICAgICAgLy8gICAgIC8vIGlmKHRoaXNbaV0gaW5zdGFuY2VvZiBmZ3VpLkdDb21wb25lbnQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICB0aGlzW2ldLmRpc3BsYXlPYmplY3Qub2ZmQWxsKCk7XHJcbiAgICAgICAgLy8gICAgIC8vIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMuX1VJLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIG9uRGVzdHJveSgpe31cclxuXHJcbiAgICBMb2FkVmlldygpIHt9XHJcblxyXG4gICAgcmVmcmVzaFVJKGRhdGE/KSB7fVxyXG5cclxuICAgIGludGVyYWN0aXZlKGNhblRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5fVUkudG91Y2hhYmxlID0gY2FuVG91Y2g7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBTb3J0aW5nT3JkZXIob3JkZXIpIHtcclxuICAgICAgICB0aGlzLl9VSS5zb3J0aW5nT3JkZXIgPSBvcmRlcjtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIHNob3coZGF0YT8pe1xyXG4gICAgICAgIHRoaXMuX1VJLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKXtcclxuICAgICAgICB0aGlzLl9VSS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNhZGV7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHN0YXRpYyBQdXNoQ3RybChjdHJsOkNvbnRyb2xsZXIsIGRhdGE/KXtcclxuICAgICAgICBpZighY3RybCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBPcGVuZWRDdHJsLnB1c2goY3RybCk7XHJcbiAgICAgICAgLy/mmL7npLrmoIjlupXnlYzpnaJcclxuICAgICAgICAvLyBPcGVuZWRDdHJsLmZvckVhY2goKHYpPT4ge3Yuc2hvdygpfSlcclxuICAgICAgICBsZXQgbmV4dGMgPSBPcGVuZWRDdHJsLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYobmV4dGMpe1xyXG4gICAgICAgICAgICBuZXh0Yy5zaG93KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29udHJvbGxlcihpZCl7XHJcbiAgICAgICAgbGV0IGN0cmwgPSBDdHJsTWFwQXJyYXlbaWRdO1xyXG4gICAgICAgIGlmKGN0cmwpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgY3RybCgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSAnLi4vRGF0YS9EYXRhJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb250cm9sbGVyIGV4dGVuZHMgVUkuQ29udHJvbGxlcntcclxuICAgIHB1YmxpYyBWaWV3OlVJLkxvYWRpbmdWaWV3O1xyXG5cclxuICAgIG9uT3BlbihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5WaWV3LlNob3dfQy5zZWxlY3RlZEluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5OZXRIdHRwQ29ubmVjdEVpZC5Db25uZWN0QmVnaW4sIHRoaXMub3Blbkh0dHBTdGFydCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5OZXRIdHRwQ29ubmVjdEVpZC5TZXJ2aWNlUmVzcG9uZCwgdGhpcy5vbkh0dHBSZXNwb25kKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TG9hZGluZygpe1xyXG4gICAgICAgIHRoaXMuVmlldy5TaG93X0Muc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUxvYWRpbmcoKXtcclxuICAgICAgICB0aGlzLlZpZXcuU2hvd19DLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6L+e5o6l5a6M5oiQXHJcbiAgICBvbkh0dHBSZXNwb25kKCl7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lvIDlp4vov57mjqVcclxuICAgIG9wZW5IdHRwU3RhcnQoKXtcclxuICAgICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKCl7XHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3Iub2ZmKGNjLkRpcmVjdG9yLkVWRU5UX0JFRk9SRV9TQ0VORV9MT0FESU5HLCB0aGlzLmNsb3NlLCB0aGlzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tICcuLi9Db25maWcvQ29uZmlnJztcclxuaW1wb3J0IHtVSUNvbmZpZ30gZnJvbSBcIi4uL0NvbmZpZy9VSUNvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdQcm9ncmVzc0NvbnRyb2xsZXIgZXh0ZW5kcyBDb3JlLkNvbnRyb2xsZXJ7XHJcbiAgICBwdWJsaWMgVmlldzpVSS5Mb2FkaW5nUHJvZ3Jlc3NWaWV3O1xyXG4gICAgcHVibGljIFByb2dyZXNzID0gMDtcclxuICAgIHB1YmxpYyBJc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBQa2dOdW0gPSAwO1xyXG4gICAgcHJpdmF0ZSBSZXNOdW0gPSAwO1xyXG5cclxuICAgIG9uT3BlbihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSBcIjAlXCI7XHJcblxyXG4gICAgICAgIC8v5byA5Y+R54mI5YWI5pi+56S66YCJ5pyN5Yqh5Zmo55S76Z2iXHJcbiAgICAgICAgLy8gaWYoTWFuYWdlci5WZXJzaW9uTWFuYWdlci5WZXJzaW9uID09IENvbmZpZy5WZXJzaW9uQ29uZmlnLkRldmVsb3Ape1xyXG4gICAgICAgIC8vICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3NOdW1iZXIoKTtcclxuICAgICAgICB0aGlzLnNpbVByb2dyZXNzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5QYWNrYWdlTG9hZGVkLCB0aGlzLm9uUmVzTG9hZGVkKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuTG9naW5TdWNjZXNzLCB0aGlzLm9uTG9naW5TdWNjZXNzKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuQ29uZmlnTG9hZGVkLCB0aGlzLnRyeUNsb3NlKTtcclxuICAgICAgICAvL+i/m+WcuuaZr+S5n+mcgOimgeetieW+heaooeaLn+i/m+W6plxyXG5cdFx0Ly8gdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUVudGVyRWlkLk1haW5NZW51LCB0aGlzLnRyeUNsb3NlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFByb2dyZXNzTnVtYmVyKCl7XHJcbiAgICAgICAgLy/nmbvlvZXpnIDopoHliqDovb3nmoRVSeWMheaVsOmHjy0tY29jb3PnlKhcclxuICAgICAgICAvLyB0aGlzLlBrZ051bSA9IFVJQ29uZmlnLlVJUGtncy5sZW5ndGggKiAyO1xyXG4gICAgICAgIHRoaXMuUmVzTnVtID0gQ29uZmlnLmxvZ2luUmVzVXJscy5sZW5ndGggKyBDb25maWcudXJscy5sZW5ndGggKyA1O1xyXG5cclxuICAgICAgICAvL+Wwj+a4uOaIj+WKoOS4iuWIhuWMhei/m+W6plxyXG4gICAgICAgIGlmKENvbW1vbi5pc01pbmlHYW1lKCkpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5Qa2dOdW0gKz0gVUlDb25maWcuU3ViUGtncy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzTnVtICs9IFVJQ29uZmlnLlN1YlBrZ3MubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93VWlQcm9ncmVzcyhwcm9ncmVzczpudW1iZXIsIHBrZ05hbWU/OnN0cmluZyl7XHJcbiAgICAgICAgcGtnTmFtZSA9IHBrZ05hbWUgfHwgJyc7XHJcbiAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSAnTG9hZGluZyB1aSAnICsgcGtnTmFtZSArICc6ICcgKyBwcm9ncmVzcyAqIDEwMCArICclJztcclxuICAgIH1cclxuXHJcbiAgICAvL+WBh+i/m+W6plxyXG4gICAgc2ltUHJvZ3Jlc3MoKXtcclxuICAgICAgICB0aGlzLlByb2dyZXNzICs9IDEwMCAvIHRoaXMuUmVzTnVtO1xyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IE1hdGguY2VpbCh0aGlzLlByb2dyZXNzKTtcclxuICAgICAgICBwcm9ncmVzcyA9IHByb2dyZXNzID4gMTAwPyAxMDA6IHByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMuVmlldy5VSS50ZXh0ID0gcHJvZ3Jlc3MgKyBcIiVcIjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5Qcm9ncmVzcyA+PSAxMDApe1xyXG4gICAgICAgICAgICB0aGlzLnRyeUNsb3NlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExheWEudGltZXIub25jZSgxMDAsIHRoaXMsIHRoaXMuc2ltUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2dyZXNzKGFkZFByb2dyZXNzKXtcclxuICAgICAgICB0aGlzLlByb2dyZXNzICs9IDEwMCAvIHRoaXMuUGtnTnVtO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUHJvZ3Jlc3MpO1xyXG4gICAgICAgIC8vIHRoaXMuUHJvZ3Jlc3MgPSB0aGlzLlByb2dyZXNzID4gMTAwPyAxMDA6IHRoaXMuUHJvZ3Jlc3M7XHJcblxyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IE1hdGguY2VpbCh0aGlzLlByb2dyZXNzKTtcclxuICAgICAgICBwcm9ncmVzcyA9IHByb2dyZXNzID4gMTAwPyAxMDA6IHByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMuVmlldy5VSS50ZXh0ID0gcHJvZ3Jlc3MgKyBcIiVcIjtcclxuXHJcbiAgICAgICAgLy/liqDovb3lrozmiJBVSeWMhVxyXG4gICAgICAgIGlmKHRoaXMuUHJvZ3Jlc3MgPj0gMTAwKXtcclxuICAgICAgICAgICAgdGhpcy5Jc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uU2NlbmVMb2dpbkVpZC5QYWNrYWdlTG9hZGVkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1d4TG9naW4oKTtcclxuICAgICAgICAgICAgLy8gaWYoRGF0YUJhc2UuTG9naW5EYXRhLkFjY291bnROYW1lKXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93V3hMb2dpbigpe1xyXG4gICAgICAgIGlmKCFDb21tb24uaXNNaW5pR2FtZSgpIHx8IExvY2FsQ29uZmlnLklzV3hBdXRoIHx8ICF0aGlzLklzTG9hZGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuVmlldy5zaG93V3hMb2dpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb25maWdQcm9ncmVzcygpe1xyXG4gICAgICAgIGlmKENvbmZpZy5EYXRhQ29uZmlnLklzQ29uZmlnTG9hZGVkID09IGZhbHNlKXtcclxuICAgICAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSBcIuWKoOi9vemFjee9ruS4rVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93TG9naW5Qcm9ncmVzcygpe1xyXG4gICAgICAgIHRoaXMuVmlldy5VSS50ZXh0ID0gXCLnmbvlvZXkuK1cIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvZ2luU3VjY2Vzcygpe1xyXG4gICAgICAgIHRoaXMudHJ5Q2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlc0xvYWRlZCgpe1xyXG4gICAgICAgIHRoaXMuSXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHJ5Q2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+a7oei2s+aJgOacieadoeS7tuaJjeWFs+mXreWKoOi9veeVjOmdolxyXG4gICAgdHJ5Q2xvc2UoKXtcclxuICAgICAgICBpZih0aGlzLlByb2dyZXNzIDwgMTAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKE1hbmFnZXIuVmVyc2lvbk1hbmFnZXIuVmVyc2lvbiA9PSBDb25maWcuVmVyc2lvbkNvbmZpZy5EZXZlbG9wKXtcclxuICAgICAgICAgICAgaWYoIUxvY2FsQ29uZmlnLklzQ2hvb3NlZFNlcnZpY2UpIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKENvbmZpZy5EYXRhQ29uZmlnLklzQ29uZmlnTG9hZGVkID09IGZhbHNlKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlnUHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoRGF0YS5Mb2dpbkRhdGEuSXNMb2dpbmVkICE9IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TG9naW5Qcm9ncmVzcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBpZighQ29uZmlnLlVJQ29uZmlnLkxvZ2luUGFja2FnZUxvYWRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZSgpe1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uU2NlbmVMb2dpbkVpZC5TaW1Qcm9ncmVzc0VuZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtVSUNvbmZpZ30gZnJvbSBcIi4uL0NvbmZpZy9VSUNvbmZpZ1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4vQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdQcm9ncmVzc1ZpZXcgZXh0ZW5kcyBDb3JlLlZpZXd7XHJcbiAgICBwdWJsaWMgTG9naW5fQzpmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgTG9hZFZpZXcoKSB7XHJcbiAgICAgICAgLy/muLLmn5PlsYLnuqdcclxuICAgICAgICB0aGlzLlVJLnNvcnRpbmdPcmRlciA9IFVJQ29uZmlnLlNvcnRpbmdPcmRlci5TY2VuZUxvYWRpbmc7XHJcblxyXG4gICAgICAgIHRoaXMuTG9naW5fQyA9IHRoaXMuVUkuZ2V0Q29udHJvbGxlcignTG9naW5fQycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dXeExvZ2luKCl7XHJcbiAgICAgICAgdGhpcy5Mb2dpbl9DLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gJy4uL0RhdGEvRGF0YSc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nVmlldyBleHRlbmRzIFVJLlZpZXd7XHJcbiAgICBwdWJsaWMgU2hvd19DOmZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBMb2FkVmlldygpIHtcclxuICAgICAgICAvL+a4suafk+Wxgue6p1xyXG4gICAgICAgIHRoaXMuVUkuc29ydGluZ09yZGVyID0gQ29uZmlnLlVJQ29uZmlnLlNvcnRpbmdPcmRlci5OZXRTaWduYWw7XHJcblxyXG4gICAgICAgIHRoaXMuU2hvd19DID0gdGhpcy5VSS5nZXRDb250cm9sbGVyKFwiU2hvd19DXCIpXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCB7VUlDb25maWd9IGZyb20gXCIuLi9Db25maWcvVUlDb25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5cclxubGV0IGNLZXkgPSBDb25maWcuVmlld0tpdC5QdWJsaWNDb25maXJtYXRpb24uS2V5O1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXIgZXh0ZW5kcyBDb3JlLkNvbnRyb2xsZXJ7XHJcbiAgICBzdGF0aWMgY0tleSA9IGNLZXk7XHJcbiAgICBWaWV3OlVJLlB1YmxpY0NvbmZpcm1hdGlvblZpZXc7XHJcbiAgICBDYWxsYmFjazpGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKGNLZXksIFVJLlB1YmxpY0NvbmZpcm1hdGlvblZpZXcsIGZhbHNlLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW4oZGF0YTpDb25maWcuUG9wdXBXaW5kb3dEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b25MaXNlbnRlcih0aGlzLlZpZXcuQnRuX0Nsb3NlLCB0aGlzLmNsb3NlKTtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbkxpc2VudGVyKHRoaXMuVmlldy5CdG5fQ2FuY2VsLCB0aGlzLmNsb3NlKTtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbkxpc2VudGVyKHRoaXMuVmlldy5CdG5fWWVzLCB0aGlzLnllc0J0bk9uQ2xpY2spO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRhdGEgPT0gbnVsbCB8fCBkYXRhIGluc3RhbmNlb2YgQ29uZmlnLlBvcHVwV2luZG93RGF0YSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgcG9wdXAgd2luZG93IGRhdGEuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5DYWxsYmFjayA9IGRhdGEuWWVzQnRuQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFVJKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB5ZXNCdG5PbkNsaWNrKCl7XHJcbiAgICAgICAgaWYodGhpcy5DYWxsYmFjayl7XHJcbiAgICAgICAgICAgIHRoaXMuQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKCl7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtVSUNvbmZpZ30gZnJvbSBcIi4uL0NvbmZpZy9VSUNvbmZpZ1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4vQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5sZXQgdktleSA9IENvbmZpZy5WaWV3S2l0LlB1YmxpY0NvbmZpcm1hdGlvbi5LZXk7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVibGljQ29uZmlybWF0aW9uVmlldyBleHRlbmRzIENvcmUuVmlld3tcclxuICAgIHN0YXRpYyB2S2V5ID0gdktleTtcclxuICAgIEJ0bl9DbG9zZTpmZ3VpLkdCdXR0b247XHJcbiAgICBCdG5fWWVzOmZndWkuR0J1dHRvbjtcclxuICAgIEJ0bl9DYW5jZWw6Zmd1aS5HQnV0dG9uO1xyXG4gICAgTGlzdF9Db250ZW50OmZndWkuR0xpc3Q7XHJcbiAgICBMaXN0X1Jld2FyZDpmZ3VpLkdMaXN0O1xyXG4gICAgQ29udGVudF9DOmZndWkuQ29udHJvbGxlcjtcclxuICAgIEJ0blR5cGVfQzpmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih2S2V5KVxyXG4gICAgfVxyXG5cclxuICAgIExvYWRWaWV3KCkge1xyXG4gICAgICAgIHRoaXMuQnRuX0Nsb3NlID0gdGhpcy5XaW5kb3cuZ2V0Q2hpbGQoJ0J0bl9DbG9zZScpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuQnRuX1llcyA9IHRoaXMuV2luZG93LmdldENoaWxkKCdCdG5fWWVzJykuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5CdG5fQ2FuY2VsID0gdGhpcy5XaW5kb3cuZ2V0Q2hpbGQoJ0J0bl9DYW5jZWwnKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLkxpc3RfQ29udGVudCA9IHRoaXMuV2luZG93LmdldENoaWxkKCdMaXN0X0NvbnRlbnQnKS5hc0xpc3Q7XHJcbiAgICAgICAgdGhpcy5MaXN0X1Jld2FyZCA9IHRoaXMuV2luZG93LmdldENoaWxkKCdMaXN0X1Jld2FyZCcpLmFzTGlzdDtcclxuICAgICAgICB0aGlzLkNvbnRlbnRfQyA9IHRoaXMuV2luZG93LmdldENvbnRyb2xsZXIoJ0NvbnRlbnRfQycpO1xyXG4gICAgICAgIHRoaXMuQnRuVHlwZV9DID0gdGhpcy5XaW5kb3cuZ2V0Q29udHJvbGxlcignQnRuVHlwZV9DJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFVJKGRhdGE6Q29uZmlnLlBvcHVwV2luZG93RGF0YSl7XHJcbiAgICAgICAgaWYoIWRhdGEpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Db250ZW50X0Muc2VsZWN0ZWRJbmRleCA9IGRhdGEuV2luZG93VHlwZSAtIDE7XHJcbiAgICAgICAgc3dpdGNoIChkYXRhLldpbmRvd1R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDb25maWcuQ29uZmlybVdpbmRvd1R5cGUuQ29udGVudDpcclxuICAgICAgICAgICAgICAgIHRoaXMuQnRuVHlwZV9DLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsQ29udGVudHMoZGF0YS5Db250ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5SZXdhcmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJ0blR5cGVfQy5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbFJld2FyZHMoZGF0YS5SZXdhcmREYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDb25maWcuQ29uZmlybVdpbmRvd1R5cGUuQ29udGVudEFuZFJld2FyZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuQnRuVHlwZV9DLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsQ29udGVudHMoZGF0YS5Db250ZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbFJld2FyZHMoZGF0YS5SZXdhcmREYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mjInpkq7mloflrZdcclxuICAgICAgICBpZihkYXRhLlllc0J0bkNvbnRlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLkJ0bl9ZZXMudGV4dCA9IGRhdGEuWWVzQnRuQ29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZGF0YS5DYW5jZWxCdG5Db250ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5CdG5fQ2FuY2VsLnRleHQgPSBkYXRhLkNhbmNlbEJ0bkNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpbGxDb250ZW50cyhkYXRhOkFycmF5PHN0cmluZz4pe1xyXG4gICAgICAgIHRoaXMuTGlzdF9Db250ZW50LnJlbW92ZUNoaWxkcmVuVG9Qb29sKCk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKHY9PntcclxuICAgICAgICAgICAgdGhpcy5MaXN0X0NvbnRlbnQuYWRkSXRlbUZyb21Qb29sKCkudGV4dCA9IHY7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbFJld2FyZHMocmV3YXJkRGF0YTphbnlbXSl7XHJcbiAgICAgICAgQ29tbW9uLmZpbGxJdGVtTGlzdERhdGEocmV3YXJkRGF0YSwgdGhpcy5MaXN0X1Jld2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0Nob29zZVNlcnZpY2VDb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9DaG9vc2VTZXJ2aWNlVmlldyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29yZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ0NvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvYWRpbmdQcm9ncmVzc0NvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvYWRpbmdQcm9ncmVzc1ZpZXcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvYWRpbmdWaWV3JztcclxuZXhwb3J0ICogZnJvbSAnLi9QdWJsaWNDb25maXJtYXRpb25Db250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9QdWJsaWNDb25maXJtYXRpb25WaWV3JztcclxuIl19

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
var LocalConfig = {
    IsChoosedService: false,
    IsSimProgressEnd: false,
    RewardAdList: [
        'adunit-d9506b856da651d9',
        'adunit-277a1490bdd96586',
        'adunit-24c981bb6e261c12',
        'adunit-ba1474242e0b07cc',
        'adunit-5edc5256b89946ce'
    ],
    BannerAdList: [
        'adunit-64f32ebf391a3eea',
        'adunit-f1bd97029412dc35',
        'adunit-792109fac68ef08b',
        'adunit-ed8f00dd42dd2dd8',
        'adunit-a924c296ea9b23a5'
    ],
    MiniProgramAppId: {
        Maike: 'wx6f1b9b81467cc3da',
    },
    //用户是否已授权
    IsWxAuth: true,
    //存储用户名
    GetAcountName: function () {
        return Common.getLocalStorage("AcountName") || '';
    },
    SaveAcountName: function (_value) {
        Common.saveLocalStorage("AcountName", _value);
    }
};
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
        this.createTimeLine();
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
    GrabLogic.prototype.createTimeLine = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvTGF5YUFpcklERS9yZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29tbW9uL0NvbW1vbi50cyIsInNyYy9Db21tb24vRXZlbnRUeXBlLnRzIiwic3JjL0NvbW1vbi9HRXZlbnQudHMiLCJzcmMvQ29tbW9uL0xvZ2ljVXRpbHMudHMiLCJzcmMvQ29tbW9uL1Jlc291cmNlLnRzIiwic3JjL0NvbW1vbi9VdGlscy50cyIsInNyYy9Db21tb24vV3hVdGlscy50cyIsInNyYy9Db25maWcvQ29uZmlnLnRzIiwic3JjL0NvbmZpZy9Db25maWdVdGlscy50cyIsInNyYy9Db25maWcvRGF0YUNvbmZpZy50cyIsInNyYy9Db25maWcvRGVmaW5lLnRzIiwic3JjL0NvbmZpZy9Mb2NhbENvbmZpZy50cyIsInNyYy9Db25maWcvTG9jYWxDb250ZW50LnRzIiwic3JjL0NvbmZpZy9Mb2dpblJlc1VybHMudHMiLCJzcmMvQ29uZmlnL05ldENvbmZpZy50cyIsInNyYy9Db25maWcvT2JqZWN0Q29uZmlnLnRzIiwic3JjL0NvbmZpZy9SZXNVcmxzLnRzIiwic3JjL0NvbmZpZy9TdGF0ZUNvbmZpZy50cyIsInNyYy9Db25maWcvVUlDb25maWcudHMiLCJzcmMvQ29yZS9Db3JlLnRzIiwic3JjL0NvcmUvT2JqZWN0UHJveHkudHMiLCJzcmMvQ29yZS9PYmplY3RTdGF0ZS50cyIsInNyYy9Db3JlL1JpZ2lkT2JqZWN0LnRzIiwic3JjL0RhdGEvRGF0YS50cyIsInNyYy9EYXRhL0RhdGFCYXNlLnRzIiwic3JjL0dhbWVDb25maWcudHMiLCJzcmMvR2FtZVNjZW5lLnRzIiwic3JjL0xvZ2ljL0NvbGxpc2lvblNjcmlwdEJhc2UudHMiLCJzcmMvTG9naWMvRGVza0NvbGxpc2lvblNjcmlwdC50cyIsInNyYy9Mb2dpYy9HcmFiTG9naWMudHMiLCJzcmMvTG9naWMvSGFuZENvbGxpc2lvblNjcmlwdC50cyIsInNyYy9Mb2dpYy9Mb2dpYy50cyIsInNyYy9NYWluLnRzIiwic3JjL01hbmFnZXIvQmFzZU1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9DbGlja0VmZmVjdE1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9EYXRhTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL0xvYWRpbmdJY29uTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL0xvYWRpbmdQcm9ncmVzc01hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9NYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvTmV0TWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1Bvb2xNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvU2NlbmVNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvU3Bhd25NYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvU3RhdGVCYXNlLnRzIiwic3JjL01hbmFnZXIvVGltZXJNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvVUlNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvVmVyc2lvbk1hbmFnZXIudHMiLCJzcmMvVUkvQ2hvb3NlU2VydmljZUNvbnRyb2xsZXIudHMiLCJzcmMvVUkvQ2hvb3NlU2VydmljZVZpZXcudHMiLCJzcmMvVUkvQ29yZS50cyIsInNyYy9VSS9Mb2FkaW5nQ29udHJvbGxlci50cyIsInNyYy9VSS9Mb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyLnRzIiwic3JjL1VJL0xvYWRpbmdQcm9ncmVzc1ZpZXcudHMiLCJzcmMvVUkvTG9hZGluZ1ZpZXcudHMiLCJzcmMvVUkvUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlci50cyIsInNyYy9VSS9QdWJsaWNDb25maXJtYXRpb25WaWV3LnRzIiwic3JjL1VJL1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1ZBLGlDQUE0QjtBQUM1QixnQ0FBMkI7QUFDM0IsNkJBQXdCO0FBQ3hCLGtD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LEdBQVgsVUFBWSxVQUFnQjtRQUN4QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsMENBQVMsR0FBVDtJQUNBLENBQUM7SUFsRU0sMkJBQUksR0FBRyxJQUFJLENBQUM7SUFtRXZCLDZCQUFDO0NBcEVELEFBb0VDLENBcEUyQyxJQUFJLENBQUMsSUFBSSxHQW9FcEQ7QUFwRVksd0RBQXNCOzs7Ozs7O0FDVm5DLCtDQUEwQztBQUMxQyx5Q0FBb0M7QUFDcEMsNEJBQXVCO0FBQ3ZCLHlDQUFvQztBQUNwQyxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLG1DQUE4QjtBQUM5QixvREFBK0M7QUFDL0MsOENBQXlDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCAqIGZyb20gJy4vRXZlbnRUeXBlJztcclxuZXhwb3J0ICogZnJvbSAnLi9SZXNvdXJjZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvZ2ljVXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL1d4VXRpbHMnO1xyXG4iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0IEdFdmVudCBmcm9tIFwiLi9HRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudERpc3BhdGhlciBleHRlbmRzIExheWEuU2NyaXB0M0Qge1xyXG4gICAgcHJvdGVjdGVkIF9ldmVudExpc3QgPSBuZXcgQXJyYXk8Q29uZmlnLkV2ZW50Q2xhc3M+KCk7ICBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX3N0YXRpY0V2ZW50TGlzdCA9IG5ldyBBcnJheTxDb25maWcuRXZlbnRDbGFzcz4oKTsgLy/pnZnmgIHmlrnms5Xkuovku7ZcclxuXHJcbiAgICAvL+mdmeaAgeaWueazlVxyXG4gICAgc3RhdGljIGFkZEV2ZW50TGlzdGVuZXIoa2V5LCBsaXNlbmVyOkZ1bmN0aW9uKXtcclxuICAgICAgICBHRXZlbnQuQWRkTGlzdGVuZXIoa2V5LCBsaXNlbmVyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9zdGF0aWNFdmVudExpc3QucHVzaChuZXcgQ29uZmlnLkV2ZW50Q2xhc3Moa2V5LCBsaXNlbmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpc3BhdGNoRXZlbnQoa2V5LCAuLi5kYXRhKXtcclxuICAgICAgICBHRXZlbnQuRGlzcGF0Y2goa2V5LCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXJFdmVudExpc3RlbmVyKCl7XHJcbiAgICAgICAgdGhpcy5fc3RhdGljRXZlbnRMaXN0LmZvckVhY2goZXZ0PT57XHJcbiAgICAgICAgICAgIEdFdmVudC5SZW1vdmVMaXN0ZW5lcihldnQuS2V5LCBldnQuTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBldnQgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcm9jZXNzRXZlbnQoa2V5LCBsaXN0ZW5lcjpGdW5jdGlvbiwgLi4uZGF0YSl7XHJcbiAgICAgICAgLy8gbGlzdGVuZXIuY2FsbCh0aGlzLCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WunuS+i+WMlumHjei9veaWueazlVxyXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoa2V5LCBsaXNlbmVyOkZ1bmN0aW9uKXtcclxuICAgICAgICBHRXZlbnQuQWRkTGlzdGVuZXIoa2V5LCBsaXNlbmVyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9ldmVudExpc3QucHVzaChuZXcgQ29uZmlnLkV2ZW50Q2xhc3Moa2V5LCBsaXNlbmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3BhdGNoRXZlbnQoa2V5LCAuLi5kYXRhKXtcclxuICAgICAgICBHRXZlbnQuRGlzcGF0Y2goa2V5LCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+W/hemhu+WcqOmUgOavgeaXtuaJp+ihjOatpOaWueazlVxyXG4gICAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoKXtcclxuICAgICAgICB0aGlzLl9ldmVudExpc3QuZm9yRWFjaChldnQ9PntcclxuICAgICAgICAgICAgR0V2ZW50LlJlbW92ZUxpc3RlbmVyKGV2dC5LZXksIGV2dC5MaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGV2dCA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByb2Nlc3NFdmVudChrZXksIGxpc3RlbmVyOkZ1bmN0aW9uLCAuLi5kYXRhKXtcclxuICAgICAgICAvLyBsaXN0ZW5lci5jYWxsKHRoaXMsIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIC8v6YeN5YaZ5q2k57uE5Lu25pa55rOV5b+F6aG75omn6KGMXHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJhc2UtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgZW51bSBFdmVudFNwYW4ge1xyXG4gICAgTW9kdWxlU3BhbiA9IDEwMDAwMCxcclxuICAgIEZ1bmNTcGFuID0gMTAwMCxcclxuICAgIFVJU3BhbiA9IDEsXHJcbn1cclxuXHJcbi8v5qih5Z2X5Yqf6IO9XHJcbmVudW0gTW9kdWxlRXR5cGUge1xyXG4gICAgU2NlbmUgPSAxLFxyXG4gICAgR2FtZSA9IDIsXHJcbiAgICBOZXQgPSAzLFxyXG4gICAgVWkgPSA0LFxyXG4gICAgTnBjID0gNSxcclxuICAgIENoYXJhY3RlciA9IDYsXHJcbiAgICBBc3NldCA9IDcsXHJcbiAgICBEYXRhID0gOCxcclxuICAgIEF1ZGlvID0gOSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTW9kdWxlRWlkIHtcclxuICAgIFNjZW5lICAgICAgID0gTW9kdWxlRXR5cGUuU2NlbmUgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgICAvL+WcuuaZr+aooeWdl1xyXG4gICAgTmV0ICAgICAgICAgPSBNb2R1bGVFdHlwZS5OZXQgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgICAvL+e9kee7nOaooeWdl1xyXG4gICAgR2FtZSAgICAgICAgPSBNb2R1bGVFdHlwZS5HYW1lICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sICAgLy/njqnms5XmqKHlnZdcclxuICAgIERhdGEgICAgICAgID0gTW9kdWxlRXR5cGUuRGF0YSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLCAgLy9VSeaooeWdl1xyXG4gICAgVWkgICAgICAgICAgPSBNb2R1bGVFdHlwZS5VaSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLCAgLy9VSeaooeWdl1xyXG4gICAgQ2hhcmFjdGVyICAgPSBNb2R1bGVFdHlwZS5DaGFyYWN0ZXIgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgLy/njqnlrrblsZ7mgKfmqKHlnZdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFuYWdlckVpZCB7XHJcbiAgICBHYW1lTWFuYWdlciAgICAgICAgID0gTW9kdWxlRXR5cGUuR2FtZSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG4gICAgTmV0TWFuYWdlciAgICAgICAgICA9IE1vZHVsZUV0eXBlLk5ldCAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG4gICAgVWlNYW5hZ2VyICAgICAgICAgICA9IE1vZHVsZUV0eXBlLlVpICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sXHJcbiAgICBBc3NldE1hbmFnZXIgICAgICAgID0gTW9kdWxlRXR5cGUuQXNzZXQgKiBFdmVudFNwYW4uTW9kdWxlU3BhbixcclxuICAgIERhdGFNYW5hZ2VyICAgICAgICAgPSBNb2R1bGVFdHlwZS5EYXRhICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sXHJcbiAgICBBdWRpb01hbmFnZXIgICAgICAgID0gTW9kdWxlRXR5cGUuRGF0YSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3nvZHnu5zmqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBuZXRNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIE5ldE1vZHVsZUlkIHtcclxuICAgIEh0dHBDb25uZXQgICAgICAgPSBNb2R1bGVFaWQuTmV0ICsgKG5ldE1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy9IVFRQ6L+e5o6lXHJcbn1cclxuXHJcbi8vSFRUUOi/nuaOpVxyXG5sZXQgbmV0SHR0cENvbm5lY3RFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBOZXRIdHRwQ29ubmVjdEVpZCB7XHJcbiAgICBTZXJ2aWNlUmVzcG9uZCAgICAgID0gTmV0TW9kdWxlSWQuSHR0cENvbm5ldCArIG5ldEh0dHBDb25uZWN0RWlkTnVtKyssICAgIC8v5ZON5bqU5oiQ5YqfXHJcbiAgICBDb25uZWN0QmVnaW4gICAgICAgID0gTmV0TW9kdWxlSWQuSHR0cENvbm5ldCArIG5ldEh0dHBDb25uZWN0RWlkTnVtKyssICAgIC8v5byA5aeL6L+e5o6lXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWcuuaZr+aooeWdl+WKn+iDvS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IHNjZW5lTW9kdWxlTnVtID0gMTtcclxuZW51bSBTY2VuZU1vZHVsZUlkIHtcclxuICAgIExvZ2luICAgICAgID0gTW9kdWxlRWlkLlNjZW5lICsgKHNjZW5lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+eZu+W9lVxyXG4gICAgRW50ZXIgICAgICAgPSBNb2R1bGVFaWQuU2NlbmUgKyAoc2NlbmVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6L+b5YWl5Zy65pmv6YCa55+lXHJcbn1cclxuXHJcbi8v55m75b2VXHJcbmxldCBzY2VuZUxvZ2luRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gU2NlbmVMb2dpbkVpZCB7XHJcbiAgICBTZXJ2aWNlQ2hvb3NlZCAgPSBTY2VuZU1vZHVsZUlkLkxvZ2luICsgc2NlbmVMb2dpbkVpZE51bSsrLCAgICAvL+W3sumAieaLqeacjeWKoeWZqO+8jOW8gOWPkeeUqFxyXG4gICAgQ29uZmlnTG9hZGVkICAgID0gU2NlbmVNb2R1bGVJZC5Mb2dpbiArIHNjZW5lTG9naW5FaWROdW0rKywgICAgLy/phY3nva7liqDovb3lrozmiJBcclxuICAgIFBhY2thZ2VMb2FkZWQgICA9IFNjZW5lTW9kdWxlSWQuTG9naW4gKyBzY2VuZUxvZ2luRWlkTnVtKyssICAgIC8v5Yqg6L295YyF5a6M5oiQXHJcbiAgICBMb2dpblN1Y2Nlc3MgICAgPSBTY2VuZU1vZHVsZUlkLkxvZ2luICsgc2NlbmVMb2dpbkVpZE51bSsrLCAgICAvL+eZu+W9leaIkOWKn1xyXG4gICAgU2ltUHJvZ3Jlc3NFbmQgID0gU2NlbmVNb2R1bGVJZC5Mb2dpbiArIHNjZW5lTG9naW5FaWROdW0rKywgICAgLy/lgYfov5vluqbmnaHor7vlroxcclxufVxyXG5cclxuLy/ov5vlhaXlnLrmma/pgJrnn6VcclxubGV0IHNjZW5lRW50ZXJFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBTY2VuZUVudGVyRWlkIHtcclxuICAgIE1haW5NZW51ICAgICAgICA9IFNjZW5lTW9kdWxlSWQuRW50ZXIgKyBzY2VuZUVudGVyRWlkTnVtKyssICAgIC8v5Li755WM6Z2i5Zy65pmvXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeaVsOaNruaooeWdl+WKn+iDvS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IGRhdGFNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIERhdGFNb2R1bGVJZCB7XHJcbiAgICBQbGF5ZXIgICAgICAgPSBNb2R1bGVFaWQuRGF0YSArIChzY2VuZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/njqnlrrbmlbDmja5cclxuICAgIEFkb2JlICAgICAgID0gTW9kdWxlRWlkLkRhdGEgKyAoc2NlbmVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5rSe5bqc5pWw5o2uXHJcbiAgICBTZWN0ICAgICAgID0gTW9kdWxlRWlkLkRhdGEgKyAoc2NlbmVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6Zeo5rS+5pWw5o2uXHJcbn1cclxuXHJcbi8v546p5a62XHJcbmxldCBkYXRhUGxheWVyRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gRGF0YVBsYXllckVpZCB7XHJcbiAgICBSZWZyZXNoZWQgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5QbGF5ZXIgKyBkYXRhUGxheWVyRWlkTnVtKyssICAvL+aVsOaNruabtOaWsOmAmuefpVxyXG4gICAgR21BZGRCYWdJdGVtU3VjY2VzcyAgPSBEYXRhTW9kdWxlSWQuUGxheWVyICsgZGF0YVBsYXllckVpZE51bSsrLCAgLy9HTeWRveS7pOWinuWKoOiDjOWMheeJqeWTgeaIkOWKn1xyXG59XHJcblxyXG4vL+a0nuW6nFxyXG5sZXQgZGF0YUFkb2JlRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gRGF0YUFkb2JlRWlkIHtcclxuICAgIFJlZnJlc2hlZCAgICA9IERhdGFNb2R1bGVJZC5BZG9iZSArIGRhdGFBZG9iZUVpZE51bSsrLCAgICAvL+aVsOaNruabtOaWsOmAmuefpVxyXG59XHJcblxyXG4vL+mXqOa0vlxyXG5sZXQgZGF0YVNlY3RFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBEYXRhU2VjdEVpZCB7XHJcbiAgICBSZWZyZXNoZWQgICAgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/mlbDmja7mm7TmlrDpgJrnn6VcclxuICAgIEdvdEluZm8gICAgICAgICAgICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+iOt+W+l+mXqOa0vlVJ5pWw5o2uXHJcbiAgICBHb3RUYXNrSW5mbyAgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/ojrflvpfpl6jmtL7ku7vliqHmlbDmja5cclxuICAgIEdvdFRyYWluVG93ZXJJbmZvICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+iOt+W+l+S/rueCvOWhlOaVsOaNrlxyXG59XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVUnmqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCB1aU1vZHVsZU51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIHVpTW9kdWxlSWQge1xyXG4gICAgT3BlbiAgICAgICA9IE1vZHVsZUVpZC5VaSArICh1aU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/miZPlvIDnlYzpnaJcclxuICAgIE5vdGljZSAgICAgPSBNb2R1bGVFaWQuVWkgKyAodWlNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6YCa55+lXHJcbn1cclxuXHJcbi8v5omT5byA55WM6Z2iXHJcbmxldCB1aU9wZW5FaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBVaU9wZW5FaWQge1xyXG4gICAgTG9hZGluZ1Byb2dyZXNzICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgTG9hZGluZyAgICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQ2hvb3NlU2VydmljZSAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgTWFpbk1lbnUgICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQ3VsdGl2YXRpb25JbmZvICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQWRvYmVNYWluICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQWRvYmVQb29sICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQWRvYmVVcGdyYWQgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgUHVibGljQ29uZmlybWF0aW9uICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgSm9pblNlY3QgICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgXHJcbn1cclxuXHJcbi8vVUnpgJrnn6VcclxubGV0IHVpTm90aWNlRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gVWlOb3RpY2VFaWQge1xyXG4gICAgQ2xvc2VDb250cm9sbGVyICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG4gICAgT3BlbkZ1bGxTY3JlZW4gICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG4gICAgQ2xvc2VGdWxsU2NyZWVuICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG4gICAgT3BlblBvcHVwICAgICAgICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG4gICAgQ2xvc2VQb3B1cCAgICAgICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3njqnlrrblsZ7mgKfmqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBjaGFyYWN0ZXJNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIENoYXJhY3Rlck1vZHVsZUlkIHtcclxuICAgIEN1bHRpdmF0aW9uICAgICAgID0gTW9kdWxlRWlkLkNoYXJhY3RlciArIChjaGFyYWN0ZXJNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5L+u5Li6XHJcbn1cclxuXHJcbi8v5L+u5Li6XHJcbmxldCBjaGFyYWN0ZXJDdWx0aXZhdGlvbkVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIENoYXJhY3RlckN1bHRpdmF0aW9uRWlkIHtcclxuICAgIFVwZ3JhZGUgICAgICA9IENoYXJhY3Rlck1vZHVsZUlkLkN1bHRpdmF0aW9uICsgY2hhcmFjdGVyQ3VsdGl2YXRpb25FaWROdW0rKywgICAgLy/kv67kuLrljYfnuqdcclxuICAgIEF1dG9DaGFuZ2VkICAgICAgICAgPSBDaGFyYWN0ZXJNb2R1bGVJZC5DdWx0aXZhdGlvbiArIGNoYXJhY3RlckN1bHRpdmF0aW9uRWlkTnVtKyssICAgIC8v6Ieq5Yqo5L+u54K85Y+Y5YyWXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeOqeazleaooeWdl+WKn+iDvS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IGdhbWVNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIEdhbWVNb2R1bGVJZCB7XHJcbiAgICBBZG9iZSAgICAgICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5rSe5bqcXHJcbiAgICBTZWN0ICAgICAgICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6Zeo5rS+XHJcbiAgICBLb25nZmEgICAgICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5oqA6IO95Yqf5rOVXHJcbiAgICBQbGF5ZXIgICAgICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6KeS6ImyXHJcbiAgICBSb2FkMkRpZXR5ICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5oyR5oiY5LuZ6YCUXHJcbn1cclxuXHJcbi8v5rSe5bqc546p5rOVXHJcbmxldCBnYW1lQWRvYmVFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lQWRvYmVFaWQge1xyXG4gICAgSGlyZVdvcmtlclN1Y2Nlc3MgICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v5oub5Yuf5bel5Lq65oiQ5YqfXHJcbiAgICBBZGRXb3JrZXJTdWNjZXNzICAgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/mt7vliqDlt6XkurrmiJDlip9cclxuICAgIFJlZHVjZVdvcmtlclN1Y2Nlc3MgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+WHj+WwkeW3peS6uuaIkOWKn1xyXG4gICAgVXBncmFkZVN0b25lU3VjY2VzcyAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v54G155+z5Y2H57qn5oiQ5YqfXHJcbiAgICBVcGdyYWRlRm9vZFN1Y2Nlc3MgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/po5/nianljYfnuqfmiJDlip9cclxuICAgIFVwZ3JhZGVXb29kU3VjY2VzcyAgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+acqOadkOWNh+e6p+aIkOWKn1xyXG4gICAgVXBncmFkZUlyb25TdWNjZXNzICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v6Zmo6ZOB5Y2H57qn5oiQ5YqfXHJcbiAgICBVcGdyYWRlUG9vbFN1Y2Nlc3MgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/ngbXmsaDljYfnuqfmiJDlip9cclxuICAgIFVwZ3JhZGVFbmVneVN1Y2Nlc3MgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+mjjuawtOWNh+e6p+aIkOWKn1xyXG59XHJcblxyXG4vL+mXqOa0vueOqeazlVxyXG5sZXQgZ2FtZVNlY3RFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lU2VjdEVpZCB7XHJcbiAgICBKb2luU2VjdFN1Y2Nlc3MgICAgICAgPSBHYW1lTW9kdWxlSWQuU2VjdCArIGdhbWVTZWN0RWlkTnVtKyssICAgIC8v5Yqg5YWl6Zeo5rS+5oiQ5YqfXHJcbiAgICBMZWFybktGU3VjY2VzcyAgICAgICAgPSBHYW1lTW9kdWxlSWQuU2VjdCArIGdhbWVTZWN0RWlkTnVtKyssICAvL+WtpuS5oOaKgOiDveaIkOWKn1xyXG4gICAgQWRkS2ZOdW0gICAgICAgICAgICAgID0gR2FtZU1vZHVsZUlkLlNlY3QgKyBnYW1lU2VjdEVpZE51bSsrLCAgICAvL+S/rueCvOWKn+azlVxyXG4gICAgU3RhcnRUYXNrICAgICAgICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+W8gOWni+mXqOa0vuS7u+WKoVxyXG4gICAgR3JhYlRhc2tBd2FyZFN1Y2Nlc3MgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+mihuWPlumXqOa0vuS7u+WKoeWlluWKseaIkOWKn1xyXG4gICAgU3RhcnROb3JtYWxUb3dlclRyYWluID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+W8gOWni+aZrumAmuS/rueCvFxyXG4gICAgRW5kTm9ybWFsVG93ZXJUcmFpbiA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/nu5PmnZ/mma7pgJrkv67ngrxcclxuICAgIFN0YXJ0Qm9zc1Rvd2VyVHJhaW4gICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/lvIDlp4vmjozpl6jkv67ngrxcclxuICAgIEVuZEJvc3NUb3dlclRyYWluICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v57uT5p2f5o6M6Zeo5L+u54K8XHJcbiAgICBBZmtTZWN0ICAgICAgICAgICAgICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v6YCA5Ye66Zeo5rS+XHJcbn1cclxuXHJcbi8v5oqA6IO9546p5rOVXHJcbmxldCBnYW1lS29uZ2ZhRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gR2FtZUtvbmdmYUVpZCB7XHJcbiAgICBVcGdyYWRlS0ZTdWNjZXNzICAgICAgID0gR2FtZU1vZHVsZUlkLktvbmdmYSArIGdhbWVLb25nZmFFaWROdW0rKywgICAgLy/liqDlhaXpl6jmtL7miJDlip9cclxufVxyXG5cclxuLy/op5LoibJcclxubGV0IGdhbWVQbGF5ZXJFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lUGxheWVyRWlkIHtcclxuICAgIEdldEJhZ0luZm8gICAgICAgICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgICAgLy/ojrflj5bliLDog4zljIXkv6Hmga9cclxuICAgIEJhZ1NvcnRTdWNjZXNzICAgICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgICAgLy/mlbTnkIbog4zljIXmiJDlip9cclxuICAgIEJhZ0V4cGFuZFN1Y2Nlc3MgICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgICAgLy/mianlsZXog4zljIXmiJDlip9cclxuICAgIEJhZ0V4cGFuZEZhaWwgICAgICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgICAgLy/mianlsZXog4zljIXlpLHotKVcclxuICAgIFNvbGRCYWdJdGVtU3VjY2VzcyAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgIC8v5Ye65ZSu6IOM5YyF54mp5ZOB5oiQ5YqfXHJcbiAgICBVc2VCYWdJdGVtU3VjY2VzcyAgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAvL+S9v+eUqOiDjOWMheeJqeWTgeaIkOWKn1xyXG59XHJcblxyXG4vL+aMkeaImOS7memAlOeOqeazlVxyXG5sZXQgZ2FtZVJvYWQyRGlldHlFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lUm9hZDJEaWV0eWFFaWQge1xyXG4gICAgR29Nb25zdGVyUmVzdWx0ICAgICAgPSBHYW1lTW9kdWxlSWQuUm9hZDJEaWV0eSArIGdhbWVSb2FkMkRpZXR5RWlkTnVtKyssICAgIC8v5oyR5oiY6ZWH5aaW5aGU57uT5p6cXHJcbiAgICBGYWlsR29Nb25zdGVyICAgICAgICA9IEdhbWVNb2R1bGVJZC5Sb2FkMkRpZXR5ICsgZ2FtZVJvYWQyRGlldHlFaWROdW0rKywgICAgLy/ml6Dms5XmjJHmiJjplYflppbloZRcclxuICAgIEludml0ZWRGcmllbmQgICAgICAgID0gR2FtZU1vZHVsZUlkLlJvYWQyRGlldHkgKyBnYW1lUm9hZDJEaWV0eUVpZE51bSsrLCAgICAvL+mCgOivt+aci+WPi+aMkeaImOmVh+WmluWhlFxyXG4gICAgQmF0dGxlUmVjb3JkRW5kICAgICAgPSBHYW1lTW9kdWxlSWQuUm9hZDJEaWV0eSArIGdhbWVSb2FkMkRpZXR5RWlkTnVtKyssICAgIC8v5oiY5oql5pKt5pS+5a6M5q+VXHJcbiAgICBNb25zdGVyMXN0Qmxvb2QgICAgICA9IEdhbWVNb2R1bGVJZC5Sb2FkMkRpZXR5ICsgZ2FtZVJvYWQyRGlldHlFaWROdW0rKywgICAgLy/plYflppbloZTpppbmnYBcclxufSIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHRXZlbnQge1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5byA5pS+5Z+fLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8v5Yi35paw5aW95Y+L5pWw5o2uXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgV1hfUkVGUkVTSF9GUklFTkRfREFUQSA9IDExMDAxXHJcbiAgICAvL+aJk+W8gOaOkuihjFxyXG4gICAgc3RhdGljIHJlYWRvbmx5IE9QRU5fUkFOS19VSSA9IDExMDA0XHJcbiAgICAvL+aYvuekuuaVheS6i+aOkuihjFxyXG4gICAgc3RhdGljIHJlYWRvbmx5IENMT1NFX1JBTktfVUkgPSAxMTAwNVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIExpc3RlbmVyczpDb25maWcuRGljdGlvbmFyeTxDb25maWcuTGlzdGVuZXJDbGFzcz4gPSB7fTtcclxuXHJcbiAgICBzdGF0aWMgQWRkTGlzdGVuZXIoa2V5LCBmdW5jLCB0YXJnZXQpIHtcclxuICAgICAgICBpZigha2V5IHx8IHR5cGVvZihmdW5jKSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuTGlzdGVuZXJzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5MaXN0ZW5lcnNba2V5XSA9IG5ldyBDb25maWcuTGlzdGVuZXJDbGFzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5MaXN0ZW5lcnNba2V5XS5hZGRMaXN0ZW5lcihmdW5jLCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBSZW1vdmVMaXN0ZW5lcihrZXksIGZ1bmMpIHtcclxuICAgICAgICBpZigha2V5IHx8IHR5cGVvZihmdW5jKSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuTGlzdGVuZXJzW2tleV07XHJcbiAgICAgICAgaWYoIWxpc3QpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsaXN0LnJlbW92ZUxpc3RlbmVyKGZ1bmMpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBzdGF0aWMgRGlzcGF0Y2goa2V5LCAuLi5kYXRhKSB7XHJcbiAgICAgICAgaWYoIWtleSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuTGlzdGVuZXJzW2tleV07XHJcbiAgICAgICAgaWYoIWxpc3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpIGluIGxpc3QuTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihsaXN0Lkxpc3RlbmVyc1tpXSkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsaXN0Lkxpc3RlbmVyc1tpXS5jYWxsKGxpc3QuVGFyZ2V0c1tpXSwgLi4uZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDbGVhcihrZXkpIHtcclxuICAgICAgICBpZigha2V5KSByZXR1cm5cclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuTGlzdGVuZXJzW2tleV07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbi8v6K6h566X5Yqf5rOV5oC75Lq654mp5bGe5oCnXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjS2ZBZGRBdHRyKGtmTGV2ZWw6bnVtYmVyLCBrZlN0YWdlOm51bWJlciwgZnNBZGQ6bnVtYmVyKXtcclxuICAgIHJldHVybiBrZlN0YWdlICogKGtmTGV2ZWwgKyBmc0FkZCk7XHJcbn1cclxuXHJcbi8v6K6h566X5Yqf5rOV5oC76aOO5rC05Yqg5oiQXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjS2ZBZGRGZW5nc2h1aShrZlN0YWdlOm51bWJlciwgZnNBZGQ6bnVtYmVyKXtcclxuICAgIHJldHVybiBrZlN0YWdlICogZnNBZGQ7XHJcbn0iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSAnLi4vQ29uZmlnL0NvbmZpZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzb3VyY2UgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUmVzb3VyY2UgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2FkZGVkVWlQYWNrYWdlczpDb25maWcuRGljdGlvbmFyeTxib29sZWFuPiA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9pbnN0YW5jZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFJlc291cmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWQodXJsLCB0aGlzQXJnPywgY29tcGxldGU/OkZ1bmN0aW9uLCBwcm9ncmVzcz86RnVuY3Rpb24sIHJlc1R5cGU/OnN0cmluZyl7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIubG9hZChcclxuICAgICAgICAgICAgdXJsLCBcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzQXJnLCBjb21wbGV0ZSksIFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXNBcmcsIHByb2dyZXNzKSxcclxuICAgICAgICAgICAgcmVzVHlwZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFVpUGFja2FnZShwa2dOYW1lOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXRoaXMuX2FkZGVkVWlQYWNrYWdlc1twa2dOYW1lXSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliqDovb1VSeWMhe+8micsIHBrZ05hbWUpO1xyXG4gICAgICAgICAgICBmZ3VpLlVJUGFja2FnZS5hZGRQYWNrYWdlKCdyZXMvJyArIHBrZ05hbWUgKyAnLycgKyBwa2dOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkZWRVaVBhY2thZ2VzW3BrZ05hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJlcyhwYXRoOnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIExheWEuTG9hZGVyLmdldFJlcyhwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVsZWFzZVJlcygpe1xyXG4gICAgICAgIExheWEuUmVzb3VyY2UuZGVzdHJveVVudXNlZFJlc291cmNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkF3YWtlKCl7XHJcbiAgICAgICAgaWYgKFJlc291cmNlLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFJlc291cmNlLl9pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVzb3VyY2UgaW5zdGFuY2UgbXVzdCBiZSBvbmx5IG9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0IHtVSUNvbmZpZ30gZnJvbSBcIi4uL0NvbmZpZy9VSUNvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5cclxuLy/np5LmlbDovazkuLrml7bvvJrliIbvvJrnp5JcclxuZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRUaW1lKGNkLCBpZ25vcmVIb3VyPzpib29sZWFuKXtcclxuICAgIGlmKGNkID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBob3VycyA9IChcIjBcIiArIE1hdGguZmxvb3IoY2QgLyAzNjAwKSkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IG1pbnV0ZXMgPSAoXCIwXCIgKyBNYXRoLmZsb29yKChjZCAlIDM2MDApIC8gNjApKS5zbGljZSgtMik7XHJcbiAgICBsZXQgc2Vjb25kcyA9IChcIjBcIiArIE1hdGguY2VpbChjZCAlIDYwKSkuc2xpY2UoLTIpO1xyXG5cclxuICAgIGlmKGlnbm9yZUhvdXIpe1xyXG4gICAgICAgIHJldHVybiBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBob3VycyArIFwiOlwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb25kcztcclxufVxyXG5cclxuLy/nqpflj6PlvLnlh7rliqjnlLtcclxuLyoqXHJcbiAqIEBwYXJhbSAge2ZndWkuR0NvbXBvbmVudH0gd2luZG93VWlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5UG9wdXBFZmZlY3Qod2luZG93VWksIGNhbGxiYWNrLCB0aGlzQXJnKXtcclxuICAgIGlmKHdpbmRvd1VpIGluc3RhbmNlb2YgZmd1aS5HT2JqZWN0KSB7XHJcbiAgICAgICAgd2luZG93VWkuc2V0UGl2b3QoMC41LCAwLjUpO1xyXG5cclxuICAgICAgICBmZ3VpLkdUd2Vlbi50bygwLCAxLCAwLjUpXHJcbiAgICAgICAgICAgIC5zZXRUYXJnZXQod2luZG93VWksIHdpbmRvd1VpLnNldFNjYWxlKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZShjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5Y2B5YWt6L+b5Yi26aKc6Imy6L2sMTDov5vliLZcclxuLy/kvKDlj4LmoLzlvI/vvJpcIjAwfGZmfGVlXCJcclxuLyoqXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY29sb3JTdHJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb2xvckhleDJEZWMoY29sb3JTdHIpe1xyXG4gICAgaWYoY29sb3JTdHIgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbG9yU3RyID0gY29sb3JTdHIuc3BsaXQoXCJ8XCIpO1xyXG4gICAgaWYoY29sb3JTdHIgaW5zdGFuY2VvZiBBcnJheSAmJiBjb2xvclN0ci5sZW5ndGggPT0gMyl7XHJcbiAgICAgICAgY29sb3JTdHIuZm9yRWFjaCgodmFsdWUsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBjb2xvclN0cltpbmRleF0gPSBwYXJzZUludCh2YWx1ZSwgMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb2xvclN0cjtcclxufVxyXG5cclxuLy/liKTmlq3mmK/lkKbkuLrniLbnu4Tku7bvvIjljIXmi6zmnKzkvZPvvIlcclxuZXhwb3J0IGZ1bmN0aW9uIGlzQW5jZXN0b3JPZihwYXJlbnQ6Zmd1aS5HT2JqZWN0LCBjaGlsZDpmZ3VpLkdPYmplY3QpOkJvb2xlYW5cclxue1xyXG4gICAgaWYgKHBhcmVudCA9PSBudWxsIHx8IGNoaWxkID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgXHJcbiAgICAvL+acrOS9k1xyXG4gICAgaWYocGFyZW50ID09IGNoaWxkKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgXHJcbiAgICB2YXIgcDpmZ3VpLkdDb21wb25lbnQgPSBjaGlsZC5wYXJlbnQ7XHJcbiAgICB3aGlsZShwKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHAgPT0gcGFyZW50KVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICBwID0gcC5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8v5Yik5pat5Z2Q5qCH5piv5ZCm5Zyo57uE5Lu255+p5b2i6IyD5Zu05YaFXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0luUmVjdCh4djpudW1iZXIsIHl2Om51bWJlciwgZGVzdDpmZ3VpLkdPYmplY3Qpe1xyXG4gICAgaWYoeHYgPT0gbnVsbCB8fCB5diA9PSBudWxsIHx8ICFkZXN0KSByZXR1cm47XHJcblxyXG4gICAgLy/ovazkuLrlsY/luZXlnZDmoIdcclxuICAgIGxldCBwdCA9IGRlc3QubG9jYWxUb0dsb2JhbCgpO1xyXG5cclxuICAgIGlmKHh2IDwgcHQueCB8fCB4diA+IHB0LnggKyBkZXN0LndpZHRoIHx8IHl2IDwgcHQueSB8fCB5diA+IHB0LnkgKyBkZXN0LmhlaWdodCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnRuSW5mb1BhcnRze1xyXG4gICAgUHJvZ3Jlc3NfSGVhbHRoOmZndWkuR1Byb2dyZXNzQmFyLFxyXG4gICAgUHJvZ3Jlc3NfRXhwOmZndWkuR1Byb2dyZXNzQmFyLFxyXG4gICAgVGV4dF9MZXZlbDpmZ3VpLkdUZXh0RmllbGQsXHJcbiAgICBUZXh0X1RpcHNIZWFsdGg6Zmd1aS5HVGV4dEZpZWxkLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnRuSW5mb1BhcnRzKGJ0bjpmZ3VpLkdDb21wb25lbnQpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBQcm9ncmVzc19IZWFsdGg6YnRuLmdldENoaWxkKCdQcm9ncmVzc19IZWFsdGgnKS5hc1Byb2dyZXNzLFxyXG4gICAgICAgIFByb2dyZXNzX0V4cDpidG4uZ2V0Q2hpbGQoJ1Byb2dyZXNzX0V4cCcpLmFzUHJvZ3Jlc3MsXHJcbiAgICAgICAgVGV4dF9MZXZlbDpidG4uZ2V0Q2hpbGQoJ1RleHRfTGV2ZWwnKS5hc1RleHRGaWVsZCxcclxuICAgICAgICBUZXh0X1RpcHNIZWFsdGg6YnRuLmdldENoaWxkKCdUZXh0X1RpcHNIZWFsdGgnKS5hc1RleHRGaWVsZCxcclxuICAgIH1cclxufVxyXG5cclxuLy/orr7nva7mlofmnKxDYWNoZU1vZGXkuLpDSEFS6YG/5YWN5YaF5a2Y5pq05raoR0PljaHpob9cclxuLyoqXHJcbiAqIEBwYXJhbSAge2ZndWkuR1RleHRGaWVsZH0gdGV4dEZpbGVkXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IHVzZVN5c0ZvbnRcclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBTZXRUeHRDYWNoZU1vZGUodGV4dEZpbGVkLCB1c2VTeXNGb250KXtcclxuLy8gICAgIGlmKHRleHRGaWxlZCA9PSBudWxsKSByZXR1cm47XHJcblxyXG4vLyAgICAgaWYodGV4dEZpbGVkLl9sYWJlbC5jYWNoZU1vZGUgIT0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVIpe1xyXG4vLyAgICAgICAgIHRleHRGaWxlZC5fbGFiZWwuY2FjaGVNb2RlID0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVI7XHJcblxyXG4vLyAgICAgICAgIGlmKHR5cGVvZiB1c2VTeXNGb250ID09IFwiYm9vbGVhblwiKVxyXG4vLyAgICAgICAgICAgICB0ZXh0RmlsZWQuX2xhYmVsLnVzZVN5c3RlbUZvbnQgPSB1c2VTeXNGb250O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vL+iuvue9ruaWh+acrOWNoOS9jeesplxyXG4vLyBTdHJpbmcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSByZXR1cm4gdGhpcztcclxuLy8gICAgIGxldCBwYXJhbSA9IGFyZ3VtZW50c1swXTtcclxuLy8gICAgIGxldCBzID0gdGhpcztcclxuLy8gICAgIGlmKHR5cGVvZihwYXJhbSkgPT0gJ29iamVjdCcpIHtcclxuLy8gICAgICAgICBmb3IobGV0IGtleSBpbiBwYXJhbSlcclxuLy8gICAgICAgICBzID0gcy5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiICsga2V5ICsgXCJcXFxcfVwiLCBcImdcIiksIHBhcmFtW2tleV0pO1xyXG4vLyAgICAgICAgIHJldHVybiBzO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4vLyAgICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdcIiksIGFyZ3VtZW50c1tpXSk7XHJcbi8vICAgICAgICAgcmV0dXJuIHM7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vL+iuvue9ruaWh+acrOWNoOS9jeesplxyXG4vKipcclxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcclxuICogQHBhcmFtICB7QXJyYXl9IGFyZ3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTdHJpbmdGb3JtYXQoc3RyLCAuLi5hcmdzKXtcclxuICAgIGlmKHR5cGVvZihzdHIpICE9ICdzdHJpbmcnKSByZXR1cm47XHJcblxyXG4gICAgaWYoYXJncyA9PSBudWxsIHx8IGFyZ3MubGVuZ3RoID09IDApIHJldHVybiBzdHI7XHJcblxyXG4gICAgbGV0IHBhcmFtID0gYXJnc1swXTtcclxuICAgIGxldCBzID0gc3RyO1xyXG4gICAgaWYodHlwZW9mKHBhcmFtKSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGZvcihsZXQga2V5IGluIHBhcmFtKVxyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBrZXkgKyBcIlxcXFx9XCIsIFwiZ1wiKSwgcGFyYW1ba2V5XSk7XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdcIiksIGFyZ3NbaV0pO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuvue9ruaWh+acrOWxnuaAp1xyXG5leHBvcnQgZnVuY3Rpb24gU2V0VHh0UHJvcGVydHkodHh0LCBpc0JvbGQsIGlzVW5kZXJsaW5lKXtcclxuICAgIGlmKHR4dCBpbnN0YW5jZW9mIGZndWkuR1RleHRGaWVsZCA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmKHR5cGVvZihpc0JvbGQpID09ICdib29sZWFuJyl7XHJcbiAgICAgICAgdHh0Ll9sYWJlbC5faXNCb2xkID0gaXNCb2xkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHR5cGVvZihpc1VuZGVybGluZSkgPT0gJ2Jvb2xlYW4nKXtcclxuICAgICAgICB0eHQuX2xhYmVsLl9pc1VuZGVybGluZSA9IGlzVW5kZXJsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WQr+WKqOWeg+WcvuWbnuaUtlxyXG4vLyBleHBvcnQgZnVuY3Rpb24gVHJpZ2dlckdDKCl7XHJcbi8vICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuLy8gICAgICAgICB3eC50cmlnZ2VyR0MoKTtcclxuLy8gICAgIH1lbHNle1xyXG4vLyAgICAgICAgIGNjLnN5cy5nYXJiYWdlQ29sbGVjdCgpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vL+iuvue9rumdnui0n+aVsFxyXG5leHBvcnQgZnVuY3Rpb24gU2V0Tm9ubmVnYXRpdmUobnVtOm51bWJlcil7XHJcbiAgICBpZihudW0gPCAwKXtcclxuICAgICAgICBudW0gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW07XHJcbn1cclxuXHJcbi8v5Yqf6IO95piv5ZCm5byA5ZCvXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBJc0Z1bmNBY3RpdmF0ZWQoZnVuY0VudW0pe1xyXG4vLyAgICAgaWYoZnVuY0VudW0gPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuLy8gICAgIHN3aXRjaCAoZnVuY0VudW0pIHtcclxuLy8gICAgICAgICBjYXNlIExvY2FsQ29uZmlnLkZ1bmNFbnVtLlBsYXlHbzpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIERhdGFCYXNlLlJvbGVEYXRhLlVubG9ja0NoYXB0ZXJJZCA+PSAzO1xyXG4gICAgXHJcbi8vICAgICAgICAgY2FzZSBMb2NhbENvbmZpZy5GdW5jRW51bS5GdW46XHJcbi8vICAgICAgICAgICAgIHJldHVybiBEYXRhQmFzZS5Sb2xlRGF0YS5VbmxvY2tDaGFwdGVySWQgPj0gNDtcclxuXHJcbi8vICAgICAgICAgY2FzZSBMb2NhbENvbmZpZy5GdW5jRW51bS5TdG9yeUphZGU6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBEYXRhQmFzZS5Sb2xlRGF0YS5VbmxvY2tDaGFwdGVySWQgPiAxIHx8IERhdGFCYXNlLlJvbGVEYXRhLkRyb3BNYXhUZXh0TnVtID49IDUgfHwgRGF0YUJhc2UuUm9sZURhdGEuQ2hhcHRlclBsYXlUaW1lcyA+IDE7XHJcblxyXG4vLyAgICAgICAgIGNhc2UgTG9jYWxDb25maWcuRnVuY0VudW0uVG9wTGVmdExpc3Q6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBEYXRhQmFzZS5Sb2xlRGF0YS5DaGFwdGVySWQgPiAxIHx8IERhdGFCYXNlLlJvbGVEYXRhLkNoYXB0ZXJQbGF5VGltZXMgPiAxO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vL+iuvue9rmZndWnmjqfliLblmajpobXnrb5cclxuZXhwb3J0IGZ1bmN0aW9uIFNldEdDb250cm9sbGVySWR4KGdjdHJsOmZndWkuQ29udHJvbGxlciwgaWR4Om51bWJlcil7XHJcbiAgICBpZihnY3RybCBpbnN0YW5jZW9mIGZndWkuQ29udHJvbGxlciA9PSBmYWxzZSB8fCB0eXBlb2YgaWR4ICE9ICdudW1iZXInKSByZXR1cm47XHJcblxyXG4gICAgaWYoaWR4IDwgMCB8fCBpZHggPj0gZ2N0cmwucGFnZUNvdW50KSByZXR1cm47XHJcblxyXG4gICAgZ2N0cmwuc2VsZWN0ZWRJbmRleCA9IGlkeDtcclxufVxyXG5cclxuLy/liKTmlq3nu5PmnoTkvZPplb/luqZcclxuZXhwb3J0IGZ1bmN0aW9uIEdldE9iamVjdExlbmd0aChvYmplY3Qpe1xyXG4gICAgaWYoIW9iamVjdCkgcmV0dXJuIDA7XHJcblxyXG4gICAgbGV0IGxlbiA9IDA7XHJcbiAgICBmb3IobGV0IGkgaW4gb2JqZWN0KXtcclxuICAgICAgICBsZW4rKztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGVuO1xyXG59XHJcblxyXG4vL+avlOi+gzLkuKrmlbDnu4TmmK/lkKbnm7jnrYlcclxuLyoqXHJcbiAqIEBwYXJhbSAge0FycmF5fSBhcnIxXHJcbiAqIEBwYXJhbSAge0FycmF5fSBhcnIyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQXJyYXlFcXVhbHMoYXJyMSwgYXJyMikge1xyXG4gICAgLy8gaWYgdGhlIG90aGVyIGFycmF5IGlzIGEgZmFsc3kgdmFsdWUsIHJldHVyblxyXG4gICAgaWYgKCFhcnIxIHx8ICFhcnIyKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvLyBjb21wYXJlIGxlbmd0aHMgLSBjYW4gc2F2ZSBhIGxvdCBvZiB0aW1lIFxyXG4gICAgaWYgKGFycjEubGVuZ3RoICE9IGFycjIubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycjEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBuZXN0ZWQgYXJyYXlzXHJcbiAgICAgICAgaWYgKGFycjFbaV0gaW5zdGFuY2VvZiBBcnJheSAmJiBhcnIyW2ldIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgLy8gcmVjdXJzZSBpbnRvIHRoZSBuZXN0ZWQgYXJyYXlzXHJcbiAgICAgICAgICAgIGlmIChBcnJheUVxdWFscyhhcnIxLCBhcnIyKSA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgICAgICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgZWxzZSBpZiAoYXJyMVtpXSAhPSBhcnIyW2ldKSB7IFxyXG4gICAgICAgICAgICAvLyBXYXJuaW5nIC0gdHdvIGRpZmZlcmVudCBvYmplY3QgaW5zdGFuY2VzIHdpbGwgbmV2ZXIgYmUgZXF1YWw6IHt4OjIwfSAhPSB7eDoyMH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgIFxyXG4gICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgfSAgICAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vL+aQnOWvu+aVsOe7hOmUruWAvFxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQXJyYXkoYXJyOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgdmFsdWUpe1xyXG4gICAgaWYoQXJyYXkuaXNBcnJheShhcnIpID09IGZhbHNlIHx8IGFyci5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBvciBlbXB0eSBhcnJheScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHRhcmdldDtcclxuICAgIGFyci5zb21lKHY9PntcclxuICAgICAgICBpZih2W3BhcmFtXSA9PSB2YWx1ZSl7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHY7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJkUGF0aChfZGF0YSl7XHJcbiAgICBpZighX2RhdGEuUGljVXJsKVxyXG4gICAgICAgIHJldHVybiB7cGF0aDpcIlwiLCB1cmw6IFwiXCJ9XHJcbiAgICBcclxuICAgIGxldCBwYWtOdW0gPSBNYXRoLmNlaWwoX2RhdGEuUGljVXJsLzYpO1xyXG4gICAgbGV0IHBha05hbWUgPSBcIlBvc3RjYXJkXCIrIHBha051bTtcclxuICAgIGxldCB1cmwgPSAgXCJ1aTovL1wiK3Bha05hbWUrXCIvXCIrX2RhdGEuVGl0bGU7XHJcbiAgICBsZXQgaW5mbz17cGF0aDpwYWtOYW1lK1wiL1wiK3Bha05hbWUsdXJsOnVybH1cclxuICAgIHJldHVybiBpbmZvXHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCm5bCP5ri45oiPXHJcbmV4cG9ydCBmdW5jdGlvbiBpc01pbmlHYW1lKCl7XHJcbiAgICAvLyByZXR1cm4gTGF5YS5Ccm93c2VyLm9uV2VpWGluIHx8IExheWEuQnJvd3Nlci5vbkJETWluaUdhbWU7XHJcbiAgICByZXR1cm4gTGF5YS5Ccm93c2VyLm9uTWluaUdhbWU7XHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCm5b6u5L+hXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09uV2VpeGluKCl7XHJcbiAgICByZXR1cm4gTGF5YS5Ccm93c2VyLm9uV2VpWGluO1xyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQplFRXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09uUVEoKXtcclxuICAgIHJldHVybiBMYXlhLkJyb3dzZXIub25NUVFCcm93c2VyO1xyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQpuiFvuiur+ezu1xyXG5leHBvcnQgZnVuY3Rpb24gaXNPblRlbmNlbnQoKXtcclxuICAgIHJldHVybiBpc09uUVEoKSB8fCBpc09uV2VpeGluKCk7XHJcbn1cclxuXHJcbi8v5bm/5ZGK6aKG5Y+W57uE5Lu2XHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtmZ3VpLkdDb21wb25lbnR9IGFkQ29tXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQWRHZXRSZXdhcmRCdG4oYWRDb20pe1xyXG4gICAgaWYoIWFkQ29tKSByZXR1cm47XHJcblxyXG4gICAgLy/pooblj5bmjInpkq5cclxuICAgIGxldCBidXR0b25fR2V0UmV3YXJkID0gYWRDb20uZ2V0Q2hpbGQoXCJCdXR0b25fR2V0UmV3YXJkXCIpLmFzQnV0dG9uO1xyXG4gICAgbGV0IGJ1dHRvbl9Eb3VibGVSZXdhcmQgPSBhZENvbS5nZXRDaGlsZChcIkJ1dHRvbl9Eb3VibGVSZXdhcmRcIikuYXNCdXR0b247XHJcbiAgICBsZXQgYnV0dG9uX0FkR2V0UmV3YXJkID0gYWRDb20uZ2V0Q2hpbGQoXCJCdXR0b25fQWRHZXRSZXdhcmRcIikuYXNCdXR0b247XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL+mihuWPluexu+Wei1xyXG4gICAgICAgIEdldEJ0blR5cGU6IGFkQ29tLmdldENvbnRyb2xsZXIoJ0J0blR5cGVfQycpLFxyXG4gICAgICAgIC8v5Y2V5oyJ6ZKu6aKG5Y+WXHJcbiAgICAgICAgQnV0dG9uX0dldFJld2FyZDogYnV0dG9uX0dldFJld2FyZCxcclxuICAgICAgICAvL+e6r+mihuWPllxyXG4gICAgICAgIEJ1dHRvbl9PbmVSZXdhcmQ6IGFkQ29tLmdldENoaWxkKFwiQnV0dG9uX09uZVJld2FyZFwiKS5hc0J1dHRvbixcclxuICAgICAgICAvL+W5v+WRiuWPjOWAjemihuWPllxyXG4gICAgICAgIEJ1dHRvbl9Eb3VibGVSZXdhcmQ6IGJ1dHRvbl9Eb3VibGVSZXdhcmQsXHJcbiAgICAgICAgLy/ljZXmjInpkq7lub/lkYrpooblj5ZcclxuICAgICAgICBCdXR0b25fQWRHZXRSZXdhcmQ6IGJ1dHRvbl9BZEdldFJld2FyZCxcclxuICAgICAgICAvL+WNleaMiemSrumihuWPluaWueW8j1xyXG4gICAgICAgIEdldFJld2FyZFR5cGU6IGJ1dHRvbl9BZEdldFJld2FyZC5nZXRDb250cm9sbGVyKCdUeXBlX0MnKSxcclxuICAgICAgICAvL+WPjOWAjemihuWPluaWueW8j1xyXG4gICAgICAgIEdldERvdWJsZVJld2FyZFR5cGU6IGJ1dHRvbl9Eb3VibGVSZXdhcmQuZ2V0Q29udHJvbGxlcignVHlwZV9DJyksXHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5pys5Zyw5a2Y5YKoXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxTdG9yYWdlKGtleTpzdHJpbmcsIHZhbHVlOnN0cmluZyl7XHJcbiAgICBpZighdmFsdWUpIHJldHVybjtcclxuICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2Uoa2V5OnN0cmluZyl7XHJcbiAgICByZXR1cm4gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsSnNvbihrZXk6c3RyaW5nLCB2YWx1ZSl7XHJcbiAgICAvL+WPr+WtmOWCqOaVsOe7hFxyXG4gICAgaWYoIXZhbHVlKSByZXR1cm47XHJcbiAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKGtleSwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxKc29uKGtleTpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04oa2V5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlEYXRhKHNyY0RhdGEsIHRhcmdldERhdGEpe1xyXG4gICAgaWYoIXNyY0RhdGEgfHwgIXRhcmdldERhdGEpIHJldHVybjtcclxuXHJcbiAgICBmb3IobGV0IGkgaW4gc3JjRGF0YSl7XHJcbiAgICAgICAgaWYodHlwZW9mIHNyY0RhdGFbaV0gIT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIHRhcmdldERhdGFbaV0gPSBzcmNEYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy/orr7nva7lub/lkYrnu4Tku7bmoLflvI9cclxuLyoqXHJcbiAqIEBwYXJhbSAge2ZndWkuR0NvbXBvbmVudH0gYWRDb21cclxuICogQHBhcmFtICB7Ym9vbGVhbn0gaXNTaW5nbGVcclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBTZXRBZEJ0blN0eWxlKGFkQ29tLCBpc1NpbmdsZSl7XHJcbi8vICAgICBpZighYWRDb20pIHJldHVybjtcclxuXHJcbi8vICAgICBsZXQgYnRuID0gQWRHZXRSZXdhcmRCdG4oYWRDb20pO1xyXG4vLyAgICAgbGV0IGFkVHlwZSA9IGlzU2luZ2xlPyBNYW5hZ2VyLkdldFJlY2VpdmVBd2FyZHNUeXBlLlNpbmdsZUFkVHlwZSgpOiBNYW5hZ2VyLkdldFJlY2VpdmVBd2FyZHNUeXBlLmdldFR5cGUoKTtcclxuLy8gICAgIHN3aXRjaCAoYWRUeXBlKSB7XHJcbi8vICAgICAgICAgY2FzZSBDb25maWcuQXdhcmRUeXBlLk5vdDpcclxuLy8gICAgICAgICAgICAgYnRuLkdldEJ0blR5cGUuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbi8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbi8vICAgICAgICAgY2FzZSBDb25maWcuQXdhcmRUeXBlLlNoYXJlOlxyXG4vLyAgICAgICAgICAgICBidG4uR2V0RG91YmxlUmV3YXJkVHlwZS5zZWxlY3RlZEluZGV4ID0gMTtcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuLy8gICAgICAgICBjYXNlIENvbmZpZy5Bd2FyZFR5cGUuQUQ6XHJcbi8vICAgICAgICAgICAgIGJ0bi5HZXREb3VibGVSZXdhcmRUeXBlLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4vLyAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgIGFkQ29tLmVuYWJsZWQgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIGJ0bjtcclxuLy8gfVxyXG5cclxuLy/po5jlrZdcclxubGV0IHRpcHNVaTpmZ3VpLkdDb21wb25lbnQ7XHJcbmV4cG9ydCBmdW5jdGlvbiBTaG93VGlwcyhtc2c6c3RyaW5nKXtcclxuICAgIGlmKCF0aXBzVWkpe1xyXG4gICAgICAgIGxldCB2aWV3TmFtZSA9IENvbmZpZy5WaWV3S2l0LlRpcHNMYWJlbDtcclxuICAgICAgICB0aXBzVWkgPSBNYW5hZ2VyLlNwYXduTWFuYWdlci5Mb2FkVmlldyh2aWV3TmFtZS5Qa2csIHZpZXdOYW1lLkNvbSk7XHJcbiAgICAgICAgdGlwc1VpLnNvcnRpbmdPcmRlciA9IFVJQ29uZmlnLlNvcnRpbmdPcmRlci5Nc2dUaXBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LiN6YeN5aSN5pi+56S6XHJcbiAgICBpZih0aXBzVWkudmlzaWJsZSkgcmV0dXJuO1xyXG5cclxuICAgIG1zZyA9IG1zZz8gbXNnOiBDb25maWcuTG9jYWxDb250ZW50LkZseWluZ1RpcHNEZWZhdWx0O1xyXG4gICAgdGlwc1VpLnRleHQgPSBtc2c7XHJcbiAgICB0aXBzVWkudmlzaWJsZSA9IHRydWU7XHJcbiAgICBcclxuICAgIHRpcHNVaS5nZXRUcmFuc2l0aW9uKCdFZmZlY3RfU2hvdycpLnBsYXkoTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKT0+e3RpcHNVaS52aXNpYmxlID0gZmFsc2V9KSk7XHJcbn1cclxuXHJcbi8v5rSe5bqc5Yqg6LWE5rqQ6aOY5a2XXHJcbmludGVyZmFjZSBBZG9iZUFkZFRpcHNVaXtcclxuICAgIFVpOmZndWkuR0NvbXBvbmVudDtcclxuICAgIFRleHRfQWRkU3RvbmU6Zmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgVGV4dF9BZGRGb29kOmZndWkuR1RleHRGaWVsZDtcclxuICAgIFRleHRfQWRkV29vZDpmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICBUZXh0X0FkZElyb246Zmd1aS5HVGV4dEZpZWxkO1xyXG59XHJcbmxldCBhZG9iZUFkZFRpcHNVaTpBZG9iZUFkZFRpcHNVaTtcclxuXHJcbmZ1bmN0aW9uIHNldEFkb2JlUmVzTnVtKHR4dENvbTpmZ3VpLkdUZXh0RmllbGQsIHJlc051bTpudW1iZXIpe1xyXG4gICAgaWYocmVzTnVtID49IDApe1xyXG4gICAgICAgIHR4dENvbS5jb2xvciA9ICcjMDBGRjAwJztcclxuICAgICAgICB0eHRDb20udGV4dCA9ICcrJyArIHJlc051bTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHR4dENvbS5jb2xvciA9ICcjRkYwMDAwJztcclxuICAgICAgICB0eHRDb20udGV4dCA9ICctJyArIC1yZXNOdW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6K6+572u5paH5a2X5oqV5b2xMeWDj+e0oFxyXG5sZXQgdHh0U2hhZG93RmlsdGVyOkxheWEuR2xvd0ZpbHRlcjtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFR4dFNoYWRvdyhndHh0OmZndWkuR09iamVjdCl7XHJcbiAgICBpZighZ3R4dCkgcmV0dXJuO1xyXG4gICAgaWYoIXR4dFNoYWRvd0ZpbHRlcil7XHJcbiAgICAgICAgdHh0U2hhZG93RmlsdGVyID0gbmV3IExheWEuR2xvd0ZpbHRlcignIzAwMDAwMCcsIDEsIDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGd0eHQuZGlzcGxheU9iamVjdC5maWx0ZXJzID0gW3R4dFNoYWRvd0ZpbHRlcl07XHJcbn1cclxuXHJcbi8v6K6+572uVUnoioLngrnkuI7pgILphY1cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNldFVpTm9kZSgpe1xyXG4vLyAgICAgaWYoIWZndWkuR1Jvb3QuaW5zdCkgcmV0dXJuO1xyXG4gICAgXHJcbi8vICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuLy8gICAgIGZndWkuR1Jvb3QuaW5zdC5ub2RlLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbi8vICAgICBmZ3VpLkdSb290Lmluc3Qubm9kZS54ID0gLWNhbnZhcy53aWR0aCAqIDAuNTtcclxuLy8gICAgIGZndWkuR1Jvb3QuaW5zdC5ub2RlLnkgPSBjYW52YXMuaGVpZ2h0ICogMC41O1xyXG4vLyB9XHJcblxyXG4vL+iwg+eUqGphdmFcclxuLyoqXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NQYXRoIOWujOaVtOeahOexu+i3r+W+hFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGphdmFGdW5jIGphdmHpnZnmgIHmlrnms5XlkI1cclxuICogQHBhcmFtICB7fSBkYXRhXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IHdpZHRoQmFjayDmmK/lkKbmnIlqYXZh5ZCM5q2l5Zue6LCDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSnNDYWxsSmF2YShjbGFzc1BhdGg6c3RyaW5nLCBqYXZhRnVuYzpzdHJpbmcsIGRhdGE/LCB3aWR0aEJhY2s/OmJvb2xlYW4pe1xyXG4gICAgaWYoIUxheWEuQnJvd3Nlci5vbkFuZHJvaWQpIHJldHVybjtcclxuXHJcbiAgICAvL+mcgOimgeWujOaVtOeahOexu+i3r+W+hO+8jOazqOaEj+S4jmlPU+eahOS4jeWQjFxyXG4gICAgbGV0IGJyaWRnZSA9IHdpbmRvd1tcIlBsYXRmb3JtQ2xhc3NcIl0uY3JlYXRlQ2xhc3MoY2xhc3NQYXRoKTsvL+WIm+W7uuiEmuacrOS7o+eQhlxyXG4gICAgaWYod2lkdGhCYWNrKXtcclxuICAgICAgICBsZXQgb2JqID0ge3ZhbHVlOiBkYXRhfTtcclxuICAgICAgICBicmlkZ2UuY2FsbFdpdGhCYWNrKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBKU09OLnBhcnNlKHZhbHVlKVxyXG4gICAgICAgICAgICBhbGVydChvYmoudmFsdWUpO1xyXG4gICAgICAgIH0sIGphdmFGdW5jLCBKU09OLnN0cmluZ2lmeShvYmopKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGxldCByZXNwID0gYnJpZGdlLmNhbGwoamF2YUZ1bmMsIGRhdGEpO1xyXG4gICAgICAgIGFsZXJ0KHJlc3ApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuoeeul+Wtl+espuWtl+iKguaVsC0t5q2j5YiZ5rOVXHJcbmZ1bmN0aW9uIGdldEJ5dGVzTGVuZ3RoKHN0cikge1xyXG4gICAgaWYoIXN0ciB8fCB0eXBlb2Ygc3RyICE9ICdzdHJpbmcnKXtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8vIOWcqEdCS+e8lueggemHjO+8jOmZpOS6hkFTQ0lJ5a2X56ym77yM5YW25a6D6YO95Y2g5Lik5Liq5a2X56ym5a69XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1teXFx4MDAtXFx4ZmZdL2csICd4eCcpLmxlbmd0aDtcclxufVxyXG5cclxuLy/orqHnrpflrZfnrKblrZfoioLmlbAtLemBjeWOhuazlS0t5pWI546H6L6D6auYXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJCeXRlTGVuKHN0cjpzdHJpbmcpeyBcclxuICAgIGxldCBieXRlTGVuID0gMCwgbGVuOm51bWJlcjsgXHJcbiAgICBpZihzdHIgJiYgdHlwZW9mIHN0ciA9PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgbGVuID0gc3RyLmxlbmd0aDtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xyXG4gICAgICAgICAgICBpZihzdHIuY2hhckNvZGVBdChpKSA+IDI1NSl7IFxyXG4gICAgICAgICAgICAgICAgYnl0ZUxlbiArPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7IFxyXG4gICAgICAgICAgICAgICAgYnl0ZUxlbisrOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnl0ZUxlbjtcclxufVxyXG5cclxuLy/mt7Hmi7fotJ1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5KHNyYzpvYmplY3QsIHRhcmdldDpvYmplY3Qpe1xyXG4gICAgaWYoIXNyYyB8fCAhdGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgaWYoc3JjICE9IG51bGwpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiBzcmMpe1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNbaV07XHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUpKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgWy4uLnRhcmdldFtpXV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZGVlcENvcHkodmFsdWUsIHRhcmdldFtpXSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5aGr5YWF54mp5ZOB5oyJ6ZKuXHJcbmV4cG9ydCBjbGFzcyBJdGVtQnRuUGFydHNDbGFzcyB7XHJcbiAgICBUZXh0X1RpdGxlOmZndWkuR1RleHRGaWVsZDtcclxuICAgIFRleHRfQXdhcmROdW06Zmd1aS5HVGV4dEZpZWxkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJ0bjpmZ3VpLkdDb21wb25lbnQpe1xyXG4gICAgICAgIHRoaXMuVGV4dF9UaXRsZSA9IGJ0bi5nZXRDaGlsZCgndGl0bGUnKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLlRleHRfQXdhcmROdW0gPSBidG4uZ2V0Q2hpbGQoJ1RleHRfQXdhcmROdW0nKS5hc1RleHRGaWVsZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxJdGVtRGF0YShpdGVtZGF0YSwgYnRuOmZndWkuR0NvbXBvbmVudCl7XHJcbiAgICBpZighaXRlbWRhdGEgfHwgIWJ0bikgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwYXJ0cyA9IG5ldyBJdGVtQnRuUGFydHNDbGFzcyhidG4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbEl0ZW1MaXN0RGF0YShpdGVtZGF0YUFycjphbnlbXSwgbGlzdDpmZ3VpLkdMaXN0KXtcclxuICAgIGlmKCFpdGVtZGF0YUFyciB8fCAhbGlzdCkgcmV0dXJuO1xyXG5cclxuICAgIGl0ZW1kYXRhQXJyLmZvckVhY2godj0+e1xyXG4gICAgICAgIGZpbGxJdGVtRGF0YSh2LCBsaXN0LmFkZEl0ZW1Gcm9tUG9vbCgpLmFzQ29tKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+WIl+ihqOeCueWHu+Wbnuiwg1xyXG5mdW5jdGlvbiBvbkNsaWNrTGlzdEl0ZW0odGhpc0FyZywgZnVuYzpGdW5jdGlvbiwgZGF0YSwgaXRlbTpmZ3VpLkdDb21wb25lbnQpe1xyXG4gICAgbGV0IGlkeCA9IGl0ZW0ucGFyZW50LmFzTGlzdC5nZXRDaGlsZEluZGV4KGl0ZW0pO1xyXG4gICAgZnVuYy5jYWxsKHRoaXNBcmcsIGlkeCArIDEsIC4uLmRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tMaXN0Q2FsbGJhY2sobGlzdDpmZ3VpLkdMaXN0LCB0aGlzQXJnLCBmdW5jOkZ1bmN0aW9uLCAuLi5kYXRhKXtcclxuICAgIGlmKCFsaXN0IHx8ICFmdW5jKSByZXR1cm47XHJcblxyXG4gICAgbGlzdC5vbihmZ3VpLkV2ZW50cy5DTElDS19JVEVNLCB0aGlzQXJnLCBvbkNsaWNrTGlzdEl0ZW0sIFt0aGlzQXJnLCBmdW5jLCBkYXRhXSk7XHJcbn0iLCJpbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCBHRXZlbnQgZnJvbSBcIi4vR0V2ZW50XCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuXHJcbi8v5b6u5L+h5pON5L2cXHJcbmxldCBwbGF0Zm9ybSA9IHdpbmRvd1snd3gnXTtcclxuLy/nmbvlvZXlvq7kv6Hlj7dcclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luKGlzVW5pb25JZDpib29sZWFuKSB7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5sb2dpbih7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc1VuaW9uSWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFNldHRpbmcocmVzLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Y+R6LW3572R57uc6K+35rGCXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcSA9IENvbmZpZy5SZXFEYXRhLkxvZ2luO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcS5OYW1lID0gcmVzLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS5Mb2dpbkRhdGEuU2VuZFJlcShyZXEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leWksei0pe+8gScgKyByZXMuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8v5Yqg6L295YiG5YyFXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQWxsU3VicGFja2FnZXModGhpc0FyZywgY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlIHx8IENvbmZpZy5VSUNvbmZpZy5TdWJQa2dzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIENvbmZpZy5VSUNvbmZpZy5TdWJQa2dzLmZvckVhY2gocGtnPT57XHJcbiAgICAgICAgY29uc3QgbG9hZFRhc2sgPSBwbGF0Zm9ybS5sb2FkU3VicGFja2FnZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IHBrZywgLy8gbmFtZSDlj6/ku6XloasgbmFtZSDmiJbogIUgcm9vdFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWIhuWMheWKoOi9veaIkOWKn+WQjumAmui/hyBzdWNjZXNzIOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWIhuWMheWKoOi9veWksei0pemAmui/hyBmYWlsIOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/orr7nva7liIbkuqt0aWNrZXRcclxuZXhwb3J0IGZ1bmN0aW9uIHNoYXJlVGlja2V0TW9kZSgpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0udXBkYXRlU2hhcmVNZW51KHtcclxuICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWUsXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/ojrflj5bliIbkuqt0aWNrZXRcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNoYXJlVGlja2V0KCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBjb25zb2xlLmxvZygnPj4+Pj4+Pj4+Pj4+PuW+ruS/oeeZu+W9leS/oeaBr++8micsIGxhdW5jaEluZm8pO1xyXG4gICAgaWYobGF1bmNoSW5mbyAmJiBsYXVuY2hJbmZvLnNoYXJlVGlja2V0KXtcclxuICAgICAgICBjb25zb2xlLmxvZygnPj4+Pj4+Pj4+Pj4+Pj5zaGFyZVRpY2tldO+8micsIGxhdW5jaEluZm8uc2hhcmVUaWNrZXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbGF1bmNoSW5mby5zaGFyZVRpY2tldDtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+ino+aekOWIhuS6q3RpY2tldFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hhcmVJbmZvKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdGlja2V0ID0gZ2V0U2hhcmVUaWNrZXQoKTtcclxuICAgIC8vIGlmKCF0aWNrZXQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBpZihsYXVuY2hJbmZvICYmIGxhdW5jaEluZm8ucXVlcnkpe1xyXG4gICAgICAgIC8vIERhdGFCYXNlLlNlbmRTaGFyZUluZm8uU2VuZFJlcShsYXVuY2hJbmZvLnF1ZXJ5LnNoYXJlSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxldCBzaGFyZUluZm8gPSB7XHJcbiAgICAvLyAgICAgRW5jcnlwdGVkRGF0YTogJycsXHJcbiAgICAvLyAgICAgSXY6ICcnXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcGxhdGZvcm0ubG9naW4oe1xyXG4gICAgLy8gICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGNvZGUgPSByZXMuY29kZTtcclxuICAgIC8vICAgICAgICAgICAgIHBsYXRmb3JtLmdldFNoYXJlSW5mbyh7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc2hhcmVUaWNrZXQ6IHRpY2tldCxcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6Kej5p6Q5YiG5Lqr5L+h5oGv77yaJywgcmVzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lbmNyeXB0ZWREYXRhKXtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlSW5mby5FbmNyeXB0ZWREYXRhID0gcmVzLmVuY3J5cHRlZERhdGE7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZUluZm8uSXYgPSByZXMuaXY7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhQmFzZS5TZW5kU2hhcmVJbmZvLlNlbmRSZXEoY29kZSwgcmVzLmVuY3J5cHRlZERhdGEsIHJlcy5pdik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXlpLHotKXvvIEnICsgcmVzLmVyck1zZyk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyByZXR1cm4gc2hhcmVJbmZvO1xyXG59XHJcblxyXG4vL+aYvuekuuWPs+S4iuinkui9rOWPkVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NoYXJlTWVudSgpIHtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGxhdGZvcm0ub25TaGFyZUFwcE1lc3NhZ2UoKCkgPT4gKHtcclxuICAgICAgICB0aXRsZTogRGF0YS5HZXRTaGFyZVdvcmQoKSxcclxuICAgICAgICBpbWFnZVVybDogQ29uZmlnLlVJQ29uZmlnLlNoYXJlSW1hZ2VQYXRoLkludml0ZUZyaWVuZCxcclxuICAgICAgICBxdWVyeTogJ3NoYXJlSUQ9JyArIERhdGEuTG9naW5EYXRhLkFjY291bnRLZXksXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbi8v5YiG5LqrXHJcbmV4cG9ydCBmdW5jdGlvbiBTaGFyZU1lc3NhZ2UobXNnOnN0cmluZywgaW1nUGF0aD86c3RyaW5nLCB1c2VTY3JlZW5TaG90Pzpib29sZWFuKSB7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgc3lzSW5mbyA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG4gICAgLy/kvb/nlKjlsY/luZXmiKrlm75cclxuICAgIGlmKHVzZVNjcmVlblNob3QgPT0gdHJ1ZSl7XHJcbiAgICAgICAgaW1nUGF0aCA9IHdpbmRvd1tcImNhbnZhc1wiXS50b1RlbXBGaWxlUGF0aFN5bmMoe1xyXG4gICAgICAgICAgICBkZXN0V2lkdGg6IHN5c0luZm8ud2luZG93V2lkdGggKiBzeXNJbmZvLnBpeGVsUmF0aW8sXHJcbiAgICAgICAgICAgIGRlc3RIZWlnaHQ6IHN5c0luZm8ud2luZG93SGVpZ2h0ICogc3lzSW5mby5waXhlbFJhdGlvXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhdGZvcm0uc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICB0aXRsZTogbXNnLFxyXG4gICAgICAgIGltYWdlVXJsOiBpbWdQYXRoLFxyXG4gICAgICAgIHF1ZXJ5OiAnc2hhcmVJRD0nICsgRGF0YS5Mb2dpbkRhdGEuQWNjb3VudEtleVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvblNob3coY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0ub25TaG93KGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9mZlNob3coY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0ub2ZmU2hvdyhjYWxsYmFjayk7XHJcbn1cclxuXHJcbi8v5riF55CG57yT5a2YXHJcbmV4cG9ydCBmdW5jdGlvbiBDbGVhckxvY2FsQ2FjaGUoKSB7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICB3aW5kb3dbXCJjYW52YXNcIl0uZ2V0U2F2ZWRGaWxlTGlzdCh7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmZpbGVMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZmlsZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzLmZpbGVMaXN0LmZvckVhY2goKGZpbGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0ucmVtb3ZlU2F2ZWRGaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IGZpbGUuZmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYW52YXNUb1RlbXBGaWxlUGF0aChjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICAvLyBsZXQgd2lkdGggID0gZmd1aS5HUm9vdC5pbnN0LndpZHRoO1xyXG4gICAgLy8gbGV0IGhlaWdodCAgPSBmZ3VpLkdSb290Lmluc3QuaGVpZ2h0O1xyXG4gICAgbGV0IHN5c0luZm8gPSBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgY29uc29sZS5sb2coc3lzSW5mbyk7XHJcblxyXG4gICAgbGV0IGRlc3RTaXplID0gbmV3IExheWEuUG9pbnQoc3lzSW5mby53aW5kb3dXaWR0aCAqIHN5c0luZm8ucGl4ZWxSYXRpbywgc3lzSW5mby53aW5kb3dIZWlnaHQgKiBzeXNJbmZvLnBpeGVsUmF0aW8pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRlc3RTaXplKTtcclxuXHJcbiAgICB3aW5kb3dbXCJjYW52YXNcIl0udG9UZW1wRmlsZVBhdGgoe1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogZGVzdFNpemUueCxcclxuICAgICAgICBoZWlnaHQ6IGRlc3RTaXplLnksXHJcbiAgICAgICAgZGVzdFdpZHRoOiBkZXN0U2l6ZS54LFxyXG4gICAgICAgIGRlc3RIZWlnaHQ6IGRlc3RTaXplLnksXHJcbiAgICAgICAgY2FudmFzSWQ6ICdteUNhbnZhcycsXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnRlbXBGaWxlUGF0aCk7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5L+d5a2Y5Zu+54mH5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0uc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTon5L+d5a2Y5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOidzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjoyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+Wksei0pScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLmVyck1zZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtLm9wZW5TZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3Moc2V0dGluZ2RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXR0aW5nZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdkYXRhLmF1dGhTZXR0aW5nW1wic2NvcGUud3JpdGVQaG90b3NBbGJ1bVwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5p2D6ZmQ5oiQ5Yqf77yM57uZ5Ye65YaN5qyh54K55Ye75Zu+54mH5L+d5a2Y5Yiw55u45YaM55qE5o+Q56S644CCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5p2D6ZmQ5aSx6LSl77yM57uZ5Ye65LiN57uZ5p2D6ZmQ5bCx5peg5rOV5q2j5bi45L2/55So55qE5o+Q56S6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJOaWNrTmFtZShjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICBpZighcGxhdGZvcm0pIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5nZXRTZXR0aW5nKHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICAgICAgcGxhdGZvcm0uYXV0aG9yaXplKHtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZTogJ3Njb3BlLnVzZXJJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDnlKjmiLflt7Lnu4/lkIzmhI/lsI/nqIvluo/kvb/nlKjlvZXpn7Plip/og73vvIzlkI7nu63osIPnlKggd3guc3RhcnRSZWNvcmQg5o6l5Y+j5LiN5Lya5by556qX6K+i6ZeuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtLnN0YXJ0UmVjb3JkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHBsYXRmb3JtLmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlcy51c2VySW5mbztcclxuICAgICAgICAgICAgY29uc3Qgbmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZTtcclxuICAgICAgICAgICAgY29uc3QgYXZhdGFyVXJsID0gdXNlckluZm8uYXZhdGFyVXJsO1xyXG4gICAgICAgICAgICBjb25zdCBnZW5kZXIgPSB1c2VySW5mby5nZW5kZXI7IC8vIOaAp+WIqyAw77ya5pyq55+l44CBMe+8mueUt+OAgTLvvJrlpbNcclxuICAgICAgICAgICAgY29uc3QgcHJvdmluY2UgPSB1c2VySW5mby5wcm92aW5jZTtcclxuICAgICAgICAgICAgY29uc3QgY2l0eSA9IHVzZXJJbmZvLmNpdHk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSB1c2VySW5mby5jb3VudHJ5O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+W+ruS/oeaPkOekuuW8ueeql1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RpcHNXaW5kb3codGlwVGl0bGU6c3RyaW5nLCB0aXBDb250ZW50OnN0cmluZywgdGlwc0NvbmZpcm1UeHQ6c3RyaW5nLCBjb25maXJtQ2FsbGJhazpGdW5jdGlvbiwgY2FuY2VsQ2FsbGJhY2s/OkZ1bmN0aW9uKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6IHRpcFRpdGxlIHx8ICfmj5DnpLonLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRpcENvbnRlbnQsXHJcbiAgICAgICAgY29uZmlybVRleHQ6IHRpcHNDb25maXJtVHh0IHx8ICfnoa7lrponLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKGNvbmZpcm1DYWxsYmFrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQ2FsbGJhaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjYW5jZWxDYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/mv4DlirHlub/lkYpcclxubGV0IHJld2FyZGVkVmlkZW9BZDtcclxubGV0IHJld2FyZEFkSWR4ID0gMDtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25DbG9zZUNhbGxiYWNrXHJcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkVycm9yQ2FsbGJhY2tcclxuICogQHBhcmFtICB7fSB0aGlzVGFyZ2V0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmV3YXJkZWRWaWRlb0FkKG9uQ2xvc2VDYWxsYmFjaz86RnVuY3Rpb24sIG9uRXJyb3JDYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNUYXJnZXQ/KXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIC8v5Z+656GA5bqT54mI5pys5Y+3ID49IDIuMC40XHJcbiAgICBsZXQgc2RrVmVyc2lvbiA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCkuU0RLVmVyc2lvbjtcclxuICAgIGlmKCFzZGtWZXJzaW9uIHx8IHBhcnNlSW50KHNka1ZlcnNpb24ucmVwbGFjZSgvXFwuL2csICcnKSkgPCAyMDQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgYWRJbmZvID0ge2FkVW5pdElkOlwiXCJ9O1xyXG4gICAgLy/ova7mjaLlub/lkYpcclxuICAgIGlmKHJld2FyZEFkSWR4ID49IExvY2FsQ29uZmlnLlJld2FyZEFkTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgcmV3YXJkQWRJZHggPSAwO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCfmv4DlirHlub/lkYrvvJonLExvY2FsQ29uZmlnLlJld2FyZEFkTGlzdFtyZXdhcmRBZElkeF0pO1xyXG4gICAgYWRJbmZvLmFkVW5pdElkID0gTG9jYWxDb25maWcuUmV3YXJkQWRMaXN0W3Jld2FyZEFkSWR4XTtcclxuXHJcbiAgICBpZihyZXdhcmRlZFZpZGVvQWQgPT0gbnVsbCl7XHJcbiAgICAgICAgcmV3YXJkZWRWaWRlb0FkID0gcGxhdGZvcm0uY3JlYXRlUmV3YXJkZWRWaWRlb0FkKGFkSW5mbyk7XHJcbiAgICB9XHJcbiAgICBpZihyZXdhcmRlZFZpZGVvQWQgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIHJld2FyZGVkVmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV3YXJkZWRWaWRlb0FkLnNob3coKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Yib5bu65r+A5Yqx5bm/5ZGK5aSx6LSl77yaJywgZXJyKTtcclxuICAgICAgICAgICAgLy8gcmV3YXJkZWRWaWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHJld2FyZGVkVmlkZW9BZC5zaG93KCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIC8v5LqM5qyh5aSx6LSl5Zue6LCDXHJcbiAgICAgICAgICAgIC8vICAgICBvbkVycm9yQ2FsbGJhY2suY2FsbCh0aGlzVGFyZ2V0KTtcclxuICAgICAgICAgICAgLy8gfSkpO1xyXG5cclxuICAgICAgICAgICAgb25FcnJvckNhbGxiYWNrLmNhbGwodGhpc1RhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXdhcmRBZElkeCsrO1xyXG5cclxuICAgIHJld2FyZGVkVmlkZW9BZC5vbkVycm9yKG9uUmV3YXJkQWRFcnJvcik7XHJcblxyXG4gICAgLy8gaWYodHlwZW9mKG9uTG9hZENhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgIC8vICAgICAvLyByZXdhcmRlZFZpZGVvQWQub25Mb2FkKCgpPT57XHJcbiAgICAvLyAgICAgLy8gICAgIG9uTG9hZENhbGxiYWNrLmNhbGwodGhpc1RhcmdldCwgdHJ1ZSk7XHJcbiAgICAvLyAgICAgLy8gICAgIC8vIHJld2FyZGVkVmlkZW9BZC5zaG93KCkuY2F0Y2goZXJyID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgLy8gICAgIHJld2FyZGVkVmlkZW9BZC5sb2FkKClcclxuICAgIC8vICAgICAvLyAgICAgLy8gICAgICAgLnRoZW4oKCkgPT4gcmV3YXJkZWRWaWRlb0FkLnNob3coKSk7XHJcbiAgICAvLyAgICAgLy8gICAgIC8vIH0pO1xyXG4gICAgLy8gICAgIC8vIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8v5YWz6Zet5Zue6LCD5Y+C5pWwIHJlcy5pc0VuZGVkOmJvb2xlYW4g6KeG6aKR5piv5ZCm5piv5Zyo55So5oi35a6M5pW06KeC55yL55qE5oOF5Ya15LiL6KKr5YWz6Zet55qEXHJcbiAgICBsZXQgY2xvc2VGdW5jID0gZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn5piv5ZCm55yL5a6M5bm/5ZGK77yaJyxyZXMpO1xyXG5cclxuICAgICAgICBpZihyZXMuaXNFbmRlZCAmJiB0eXBlb2Yob25DbG9zZUNhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgb25DbG9zZUNhbGxiYWNrLmNhbGwodGhpc1RhcmdldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXdhcmRlZFZpZGVvQWQub2ZmQ2xvc2UoY2xvc2VGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICByZXdhcmRlZFZpZGVvQWQub25DbG9zZShjbG9zZUZ1bmMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblJld2FyZEFkRXJyb3IoZXJyKXtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICByZXdhcmRlZFZpZGVvQWQub2ZmRXJyb3Iob25SZXdhcmRBZEVycm9yKTtcclxufVxyXG5cclxuLy9CYW5uZXLlub/lkYpcclxubGV0IGJhbm5lckFkO1xyXG5sZXQgYmFubmVySWR4ID0gMDtcclxuXHJcbmV4cG9ydCB0eXBlIGJhbm5lckFkSW5mbyA9IHtcclxuICAgIGFkVW5pdElkPzpzdHJpbmcsXHJcbiAgICBzdHlsZT86e1xyXG4gICAgICAgIGxlZnQ6bnVtYmVyLCBcclxuICAgICAgICB0b3A6bnVtYmVyLCBcclxuICAgICAgICB3aWR0aD86bnVtYmVyLCBcclxuICAgICAgICBoZWlnaHQ/Om51bWJlclxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICB7e2FkVW5pdElkOnN0cmluZywgc3R5bGU6e2xlZnQ6bnVtYmVyLCB0b3A6bnVtYmVyLCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXJ9fX0gYWRJbmZvXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFubmVyQWQoYWRJbmZvPzpiYW5uZXJBZEluZm8pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgLy8gbGVmdDogcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCAqIDAuNSAtIDEwMCxcclxuICAgIC8vICAgICAgICAgdG9wOiBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAqIDAuNSArIDEwMCxcclxuICAgIGxldCBzeXNJbmZvID0gcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbiAgICAvL+WfuuehgOW6k+eJiOacrOWPtyA+PSAyLjAuNFxyXG4gICAgbGV0IHNka1ZlcnNpb24gPSBzeXNJbmZvLlNES1ZlcnNpb247XHJcbiAgICBpZighc2RrVmVyc2lvbiB8fCBwYXJzZUludChzZGtWZXJzaW9uLnJlcGxhY2UoL1xcLi9nLCAnJykpIDwgMjA0KSByZXR1cm47XHJcblxyXG4gICAgaWYoIWFkSW5mbylcclxuICAgICAgICBhZEluZm8gPSB7fTtcclxuICAgIC8v6L2u5o2i5bm/5ZGKXHJcbiAgICBpZihiYW5uZXJJZHggPj0gTG9jYWxDb25maWcuQmFubmVyQWRMaXN0Lmxlbmd0aClcclxuICAgICAgICBiYW5uZXJJZHggPSAwO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnQmFubmVy5bm/5ZGK77yaJyxMb2NhbENvbmZpZy5CYW5uZXJBZExpc3RbYmFubmVySWR4XSk7XHJcbiAgICBhZEluZm8uYWRVbml0SWQgPSBMb2NhbENvbmZpZy5CYW5uZXJBZExpc3RbYmFubmVySWR4XTtcclxuXHJcbiAgICAvL+S9jee9rlxyXG4gICAgYWRJbmZvLnN0eWxlID0ge1xyXG4gICAgICAgIGxlZnQ6MCwgXHJcbiAgICAgICAgdG9wOnN5c0luZm8ud2luZG93SGVpZ2h0IC0gMTAwLFxyXG4gICAgICAgIHdpZHRoOnN5c0luZm8ud2luZG93V2lkdGgsIFxyXG4gICAgICAgIC8vIGhlaWdodDoxMDBcclxuICAgIH1cclxuXHJcbiAgICBpZihiYW5uZXJBZCA9PSBudWxsKXtcclxuICAgICAgICBiYW5uZXJBZCA9IHBsYXRmb3JtLmNyZWF0ZUJhbm5lckFkKGFkSW5mbyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBiYW5uZXJBZC5kZXN0cm95KCk7XHJcbiAgICAgICAgYmFubmVyQWQgPSBwbGF0Zm9ybS5jcmVhdGVCYW5uZXJBZChhZEluZm8pO1xyXG4gICAgfVxyXG4gICAgaWYoYmFubmVyQWQgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIC8vYmFubmVy5L2N572u6YCC6YWNXHJcbiAgICBiYW5uZXJBZC5vblJlc2l6ZShyZXMgPT4ge1xyXG4gICAgICAgIGJhbm5lckFkLnN0eWxlLnRvcCA9IHN5c0luZm8ud2luZG93SGVpZ2h0IC0gcmVzLmhlaWdodDtcclxuICAgICAgICBpZihzeXNJbmZvLm1vZGVsID09ICdpUGhvbmUgWCcpe1xyXG4gICAgICAgICAgICBiYW5uZXJBZC5zdHlsZS50b3AtPTIwO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJhbm5lckFkLm9uRXJyb3Iob25CYW5uZXJBZEVycm9yKTtcclxuXHJcbiAgICBiYW5uZXJBZC5zaG93KCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5Yib5bu6QmFubmVy5bm/5ZGK5aSx6LSl77yaJywgZXJyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJhbm5lcklkeCsrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkJhbm5lckFkRXJyb3IoZXJyKXtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICBiYW5uZXJBZC5vZmZFcnJvcihvbkJhbm5lckFkRXJyb3IpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUJhbm5lckFkKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuICAgIGlmKGJhbm5lckFkID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBiYW5uZXJBZC5oaWRlKCk7XHJcbn1cclxuXHJcbi8v5LiL6L296L+c56iL5paH5Lu2XHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUodXJsLCBjYWxsYmFjayl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UgfHwgIXVybCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCfkuIvovb3lnLDlnYDvvJonLHVybCk7XHJcblxyXG4gICAgcGxhdGZvcm0uZG93bmxvYWRGaWxlKHtcclxuICAgICAgICB1cmw6IHVybCwgXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgLy8g5Y+q6KaB5pyN5Yqh5Zmo5pyJ5ZON5bqU5pWw5o2u77yM5bCx5Lya5oqK5ZON5bqU5YaF5a655YaZ5YWl5paH5Lu25bm26L+b5YWlIHN1Y2Nlc3Mg5Zue6LCD77yM5Lia5Yqh6ZyA6KaB6Ieq6KGM5Yik5pat5piv5ZCm5LiL6L295Yiw5LqG5oOz6KaB55qE5YaF5a65XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2FsbGJhY2spID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcy50ZW1wRmlsZVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy/ojrflj5blvq7kv6HlsY/luZXlsLrlr7hcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbmRvd1NpemUoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBzeXNJbmZvID0gcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgIGNvbnNvbGUubG9nKHN5c0luZm8pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGg6IHN5c0luZm8ud2luZG93V2lkdGggKiBzeXNJbmZvLnBpeGVsUmF0aW8sIFxyXG4gICAgICAgIGhlaWdodDogc3lzSW5mby53aW5kb3dIZWlnaHQgKiBzeXNJbmZvLnBpeGVsUmF0aW9cclxuICAgIH07XHJcbn1cclxuXHJcbi8v6I635Y+W55So5oi35o6I5p2D5L+h5oGvXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXR0aW5nKGxvZ2luQ29kZSl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5nZXRTZXR0aW5nKHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAvLyByZXMuYXV0aFNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC8vICAgXCJzY29wZS51c2VySW5mb1wiOiB0cnVlLCAgICAvL+aYr+WQpuaOiOadg+eUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAvLyAgIFwic2NvcGUudXNlckxvY2F0aW9uXCI6IHRydWUsICAgIC8v5piv5ZCm5o6I5p2D5Zyw55CG5L2N572uXHJcbiAgICAgICAgICAgIC8vICAgXCJzY29wZS53ZXJ1blwiOiBmYWxzZSwgIC8v5piv5ZCm5o6I5p2D5b6u5L+h6L+Q5Yqo5q2l5pWwXHJcbiAgICAgICAgICAgIC8vICAgXCJzY29wZS53cml0ZVBob3Rvc0FsYnVtXCI6IGZhbHNlICAgIC8v5piv5ZCm5o6I5p2D5L+d5a2Y5Yiw55u45YaMXHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5hdXRoU2V0dGluZyk7XHJcbiAgICAgICAgICAgIC8vIGlmKHR5cGVvZihjYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIC8vICAgICBjYWxsYmFjayhyZXMuYXV0aFNldHRpbmdbXCJzY29wZS51c2VySW5mb1wiXSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcclxuICAgICAgICAgICAgICAgIHBsYXRmb3JtLmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuY29kZSA9IGxvZ2luQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGF0YS5Mb2dpbkRhdGEuTG9naW5SZXEoJycsIHJlcy5jb2RlLCByZXMuZW5jcnlwdGVkRGF0YSwgcmVzLml2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVVzZXJJbmZvQnV0dG9uKGxvZ2luQ29kZSk7XHJcbiAgICAgICAgICAgICAgICAvL+aYvuekuuaOiOadg1xyXG4gICAgICAgICAgICAgICAgTG9jYWxDb25maWcuSXNXeEF1dGggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIE1hbmFnZXIuTG9hZGluZ1Byb2dyZXNzTWFuYWdlci5JbnN0LlNob3dXeExvZ2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/nlKjmiLfmjojmnYPmjInpkq5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVzZXJJbmZvQnV0dG9uKGxvZ2luQ29kZSl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgc3lzSW5mbyA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICBjb25zdCBidXR0b24gPSBwbGF0Zm9ybS5jcmVhdGVVc2VySW5mb0J1dHRvbih7XHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgIC8vIGltYWdlOiBDb25maWcuVUlDb25maWcuU2hhcmVJbWFnZVBhdGguSW52aXRlRnJpZW5kLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgd2lkdGg6IHN5c0luZm8ud2luZG93V2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogc3lzSW5mby53aW5kb3dIZWlnaHQsXHJcbiAgICAgICAgICAgIC8vIGxpbmVIZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcnLFxyXG4gICAgICAgICAgICAvLyBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAvLyB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAvLyBmb250U2l6ZTogMjYsXHJcbiAgICAgICAgICAgIC8vIGJvcmRlclJhZGl1czogNFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJ1dHRvbi5vblRhcCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAvL+ehruiupOaOiOadg+WQjumUgOavgeaMiemSrlxyXG4gICAgICAgIGlmKHJlcy5lbmNyeXB0ZWREYXRhKXtcclxuICAgICAgICAgICAgcmVzLmNvZGUgPSBsb2dpbkNvZGU7XHJcbiAgICAgICAgICAgIC8vIERhdGEuTG9naW5EYXRhLkxvZ2luUmVxKCcnLCByZXMuY29kZSwgcmVzLmVuY3J5cHRlZERhdGEsIHJlcy5pdik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgR0V2ZW50LkFkZExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkxvZ2luU3VjY2VzcywgKCk9PntidXR0b24uZGVzdHJveSgpO30sIHRoaXMpO1xyXG59XHJcblxyXG4vL+ajgOafpeeJiOacrOabtOaWsFxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tVcGRhdGUoY2FsbGJhY2s/OkZ1bmN0aW9uKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmKHR5cGVvZihwbGF0Zm9ybS5nZXRVcGRhdGVNYW5hZ2VyKSA9PT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlTWFuYWdlciA9IHBsYXRmb3JtLmdldFVwZGF0ZU1hbmFnZXIoKTtcclxuXHJcbiAgICAgICAgdXBkYXRlTWFuYWdlci5vbkNoZWNrRm9yVXBkYXRlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmo4Dmn6XmlrDniYjmnKznu5PmnpzvvJonLCByZXMuaGFzVXBkYXRlKTtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgLy/lm57osIPpgJrnn6Xnu5PmnpxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcy5oYXNVcGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+a4heeQhue8k+WtmFxyXG4gICAgICAgICAgICBpZihyZXMuaGFzVXBkYXRlKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1tcInd4RG93bmxvYWRlclwiXS5jbGVhbk9sZEFzc2V0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAvL+Wbnuiwg+mAmuefpee7k+aenFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsYXRmb3JtLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+abtOaWsOaPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5Y2z5bCG6YeN5ZCv5ri45oiPJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5paw55qE54mI5pys5bey57uP5LiL6L295aW977yM6LCD55SoIGFwcGx5VXBkYXRlIOW6lOeUqOaWsOeJiOacrOW5tumHjeWQr1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyDmlrDniYjmnKzkuIvovb3lpLHotKVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy/lkJHlvIDmlL7ln5/lj5HpgIHmtojmga9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RPcGVuUmVnaW9uTWVzc2FnZShldmVudElkKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG9wZW5EYXRhQ29udGV4dCA9IHBsYXRmb3JtLmdldE9wZW5EYXRhQ29udGV4dCgpXHJcbiAgICBvcGVuRGF0YUNvbnRleHQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIGV2ZW50SWQ6IGV2ZW50SWQsXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/lkJHlvIDmlL7ln5/lj5HpgIHmlbDmja5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RPcGVuUmVnaW9uRGF0YShkYXRhKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG9wZW5EYXRhQ29udGV4dCA9IHBsYXRmb3JtLmdldE9wZW5EYXRhQ29udGV4dCgpXHJcbiAgICBvcGVuRGF0YUNvbnRleHQucG9zdE1lc3NhZ2UoZGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkuIrkvKDmuLjmiI/mlbDmja5cclxuICogaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaWdhbWUvZGV2L2FwaS93eC5zZXRVc2VyQ2xvdWRTdG9yYWdlLmh0bWxcclxuICogXHJcbiAqIEBwYXJhbSAge30gZGF0YVxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHBhcmFtICB7fSB0aGlzQXJnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlckNsb3VkU3RvcmFnZShkYXRhLCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLnNldFVzZXJDbG91ZFN0b3JhZ2Uoe1xyXG4gICAgICAgIEtWRGF0YUxpc3Q6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/ojrflj5blsI/muLjmiI/lkK/liqjkv6Hmga9cclxuLy9odHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9taW5pZ2FtZS9kZXYvYXBpL3d4LmdldExhdW5jaE9wdGlvbnNTeW5jLmh0bWxcclxuLy8gbGF1bmNoSW5mbyA9IHtcclxuLy8gICAgIHNjZW5lLFxyXG4vLyAgICAgcXVlcnksXHJcbi8vICAgICBzaGFyZVRpY2tldCxcclxuLy8gICAgIHJlZmVycmVySW5mbzp7XHJcbi8vICAgICAgICAgYXBwSWQsXHJcbi8vICAgICAgICAgZXh0cmFEYXRhXHJcbi8vICAgICB9XHJcbi8vIH1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhdW5jaE9wdGlvbnNTeW5jKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBjb25zb2xlLmxvZygn5ZCv5Yqo5L+h5oGv77yaJywgbGF1bmNoSW5mbyk7XHJcblxyXG4gICAgcmV0dXJuIGxhdW5jaEluZm87XHJcbn1cclxuXHJcbi8v6I635Y+W5YWl5Y+jYXBwaWRcclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2luQXBwaWQoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsYXVuY2hJbmZvID0gcGxhdGZvcm0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIGlmKGxhdW5jaEluZm8gJiYgbGF1bmNoSW5mby5yZWZlcnJlckluZm8pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflhaXlj6NBcHBpZO+8micsbGF1bmNoSW5mby5yZWZlcnJlckluZm8uYXBwSWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbGF1bmNoSW5mby5yZWZlcnJlckluZm8uYXBwSWQ7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLy/ojrflj5blhaXlj6PlnLrmma/lgLxcclxuLy9odHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9taW5pZ2FtZS9kZXYvcmVmZXJlbmNlL3NjZW5lLWxpc3QuaHRtbFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF1bmNoU2NlbmUoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsYXVuY2hJbmZvID0gcGxhdGZvcm0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIGNvbnNvbGUubG9nKCflnLrmma/lgLzvvJonLGxhdW5jaEluZm8uc2NlbmUpO1xyXG4gICAgaWYobGF1bmNoSW5mbyl7XHJcbiAgICAgICAgcmV0dXJuIGxhdW5jaEluZm8uc2NlbmU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLy/mmK/lkKbku47igJzmiJHnmoTlsI/nqIvluo/ov5vlhaXigJ1cclxuZXhwb3J0IGZ1bmN0aW9uIElzTG9naW5Gcm9tRmF2b3VyaXRlKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgc2NlbmUgPSBnZXRMYXVuY2hTY2VuZSgpO1xyXG4gICAgLy8gcmV0dXJuIHNjZW5lID09IDEwODkgfHwgc2NlbmUgPT0gMTEwMztcclxuICAgIHJldHVybiBzY2VuZSA9PSAxMTA0IHx8IHNjZW5lID09IDExMDM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDot7PovazlsI/nqIvluo9cclxuICogQHBhcmFtICB7c3RyaW5nfSBhcHBJZFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHBhdGhcclxuICogQHBhcmFtICB7c3RyaW5nfSBleHRyYURhdGFcclxuICogQHBhcmFtICB7c3RyaW5nfSBlbnZWZXJzaW9uXHJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0gIHt9IHRoaXNBcmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVRvTWluaVByb2dyYW0oYXBwSWQ6c3RyaW5nLCBwYXRoPzpzdHJpbmcsIGV4dHJhRGF0YT8sIGVudlZlcnNpb24/LCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSB8fCAhYXBwSWQpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgIGFwcElkOiBhcHBJZCxcclxuICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgIGV4dHJhRGF0YTogZXh0cmFEYXRhLFxyXG4gICAgICAgIGVudlZlcnNpb246IGVudlZlcnNpb24sXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIC8vIOaJk+W8gOaIkOWKn1xyXG4gICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDot7PovazliLDljZblhYvmmJ/nkINcclxuICogQHBhcmFtICB7SlNPTn0gZXh0cmFEYXRhXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW52VmVyc2lvblxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHBhcmFtICB7fSB0aGlzQXJnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ29NYWlrZVNob3BwaW5nKGV4dHJhRGF0YT8sIGNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8sIGVudlZlcnNpb24/OnN0cmluZyl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBuYXZpZ2F0ZVRvTWluaVByb2dyYW0oTG9jYWxDb25maWcuTWluaVByb2dyYW1BcHBJZC5NYWlrZSwgbnVsbCwgZXh0cmFEYXRhLCBlbnZWZXJzaW9uLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku47lhbbku5blsI/nqIvluo/ov5Tlm55cclxuICogQHBhcmFtICB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSAge30gdGhpc0FyZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uUmV0dXJuR2FtZShjYjpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgaWYodHlwZW9mIGNiID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgIG9uU2hvdyhjYik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZSB7Y2MuTm9kZX0gKi9cclxubGV0IHN1YkNvbnRlbnRWaWV3O1xyXG4vL+iuvue9ruWtkOWfn+e7hOS7tlxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3ViQ29udGVudFZpZXcoc3ViVmlldyl7XHJcbiAgICBpZighc3ViVmlldykgcmV0dXJuO1xyXG5cclxuICAgIHN1YkNvbnRlbnRWaWV3ID0gc3ViVmlldztcclxufVxyXG5cclxuLy/ojrflj5blrZDln5/nu4Tku7ZcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN1YkNvbnRlbnRWaWV3KCl7XHJcbiAgICByZXR1cm4gc3ViQ29udGVudFZpZXc7XHJcbn1cclxuXHJcbi8v6ZqQ6JeP5oiW5pi+56S65a2Q5Z+f57uE5Lu2XHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtib29sZWFufSBhY3RpdmVcclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBzZXRTdWJDb250ZW50QWN0aXZlKGFjdGl2ZSl7XHJcbi8vICAgICBpZighc3ViQ29udGVudFZpZXcgfHwgdHlwZW9mIGFjdGl2ZSAhPSAnYm9vbGVhbicpIHJldHVybjtcclxuXHJcbi8vICAgICBzdWJDb250ZW50Vmlldy5hY3RpdmUgPSBhY3RpdmU7XHJcbi8vICAgICBzdWJDb250ZW50Vmlldy5nZXRDb21wb25lbnQoY2MuV1hTdWJDb250ZXh0VmlldykuZW5hYmxlZCA9IGFjdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gLy/mm7TmlrDlrZDln59cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN1YkNvbnRlbnRWaWV3KCl7XHJcbi8vICAgICBpZighc3ViQ29udGVudFZpZXcpIHJldHVybjtcclxuXHJcbi8vICAgICBzdWJDb250ZW50Vmlldy5nZXRDb21wb25lbnQoY2MuV1hTdWJDb250ZXh0VmlldykudXBkYXRlKCk7XHJcbi8vIH1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9Mb2NhbENvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVzVXJscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9naW5SZXNVcmxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9EZWZpbmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1VJQ29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9EYXRhQ29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9OZXRDb25maWcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvY2FsQ29udGVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29uZmlnVXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL1N0YXRlQ29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9PYmplY3RDb25maWcnO1xyXG4iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4vTG9jYWxDb25maWdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hDb25maWcoY29uZmlnOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgdmFsdWUpe1xyXG4gICAgaWYobnVsbCA9PSB2YWx1ZSl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignVmFsdWUgaXMgbnVsbCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZihBcnJheS5pc0FycmF5KGNvbmZpZykgPT0gZmFsc2UgfHwgY29uZmlnLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIG9yIGVtcHR5IGNvbmZpZyBhcnJheScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHRhcmdldDpDb25maWcuQ29uZmlnVHlwZTtcclxuICAgIGNvbmZpZy5zb21lKHY9PntcclxuICAgICAgICBpZighdltwYXJhbV0pe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNaXNzIGFycmF5IHBhcmFtOiAnLCBwYXJhbSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1lbHNlIGlmKHZbcGFyYW1dID09IHZhbHVlKXtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdjtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuLy/moLnmja5pZOaQnOe0oumFjee9rlxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ29uZmlnQnlJZChjb25maWc6QXJyYXk8YW55PiwgdmFsdWUpe1xyXG4gICAgcmV0dXJuIHNlYXJjaENvbmZpZyhjb25maWcsICdJZCcsIHZhbHVlKTtcclxufVxyXG5cclxuLy/phY3nva7nmoTlhoXlrZjnvJPlrZhcclxubGV0IGNvbmZpZ0NhY2hlOkNvbmZpZy5EaWN0aW9uYXJ5PENvbmZpZy5Db25maWdUeXBlW10+ID0ge307XHJcbmxldCBsZXZlbENvbmZpZ0NhY2hlOkNvbmZpZy5EaWN0aW9uYXJ5PEFycmF5PENvbmZpZy5Db25maWdUeXBlPj4gPSB7fTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZ0J5S2V5KGtleTpzdHJpbmcpe1xyXG4gICAgaWYoIWtleSkgcmV0dXJuO1xyXG5cclxuICAgIGlmKG51bGwgPT0gY29uZmlnQ2FjaGVba2V5XSl7XHJcbiAgICAgICAgY29uZmlnQ2FjaGVba2V5XSA9IENvbmZpZy5EYXRhQ29uZmlnLmdldExvY2FsQ29uZmlnKGtleSk7XHJcbiAgICAgICAgbGV2ZWxDb25maWdDYWNoZVtrZXldID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZ0NhY2hlW2tleV07XHJcbn1cclxuXHJcbi8v6YCa6L+HSWTmkJzlr7vphY3nva5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZ0J5SWQoa2V5OnN0cmluZywgaWQ6bnVtYmVyKXtcclxuICAgIHJldHVybiBzZWFyY2hDb25maWdCeUlkKGdldENvbmZpZ0J5S2V5KGtleSksIGlkKTtcclxufVxyXG5cclxuLy/pgJrov4fnrYnnuqfmkJzlr7tcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZ0J5TGV2ZWwoa2V5OnN0cmluZywgbGV2ZWw6bnVtYmVyKXtcclxuICAgIC8vaWTnrYnkuo5sZXZlbFxyXG4gICAgcmV0dXJuIGdldENvbmZpZ0J5SWQoa2V5LCBsZXZlbCk7XHJcbn1cclxuXHJcbi8v6YCa6L+H5Lu75oSP5a2X5q615pCc5a+7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWdCeUFyZyhrZXk6c3RyaW5nLCBhcmc6c3RyaW5nLCB2YWx1ZSl7XHJcbiAgICByZXR1cm4gc2VhcmNoQ29uZmlnKGdldENvbmZpZ0J5S2V5KGtleSksIGFyZywgdmFsdWUpO1xyXG59XHJcblxyXG4vL+aMieWtl+auteaOkuWIl+mFjee9rlxyXG5leHBvcnQgZnVuY3Rpb24gc29ydENvbmZpZ0J5UGFyYW0oc3JjOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgb3V0PzpBcnJheTxBcnJheTxhbnk+Pil7XHJcbiAgICBpZighcGFyYW0gfHwgQXJyYXkuaXNBcnJheShzcmMpID09IGZhbHNlKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHBhcmFtIG9yIHNvdXJjZSBjb25maWcnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKEFycmF5LmlzQXJyYXkob3V0KSA9PSBmYWxzZSl7XHJcbiAgICAgICAgb3V0ID0gW107XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNyYy5zb21lKHY9PntcclxuICAgICAgICBpZihudWxsID09IHZbcGFyYW1dKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpZyBtaXNzIHBhcmFtOiAnLCBwYXJhbSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobnVsbCA9PSBvdXRbdltwYXJhbV1dKXtcclxuICAgICAgICAgICAgb3V0W3ZbcGFyYW1dXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRbdltwYXJhbV1dLnB1c2godik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gb3V0O1xyXG59XHJcblxyXG4vL+i+k+WFpemFjee9ru+8jOaMieWtl+autei/lOWbnuWQjOexu+mFjee9ruaVsOe7hFxyXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29uZmlnQnlQYXJhbShzcmM6QXJyYXk8YW55PiwgcGFyYW06c3RyaW5nLCB2YWx1ZSwgb3V0PzpBcnJheTxhbnk+KXtcclxuICAgIGlmKCFwYXJhbSB8fCBBcnJheS5pc0FycmF5KHNyYykgPT0gZmFsc2Upe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgcGFyYW0gb3Igc291cmNlIGNvbmZpZycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZihBcnJheS5pc0FycmF5KG91dCkgPT0gZmFsc2Upe1xyXG4gICAgICAgIG91dCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHNyYy5zb21lKHY9PntcclxuICAgICAgICBpZihudWxsID09IHZbcGFyYW1dKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpZyBtaXNzIHBhcmFtOiAnLCBwYXJhbSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodltwYXJhbV0gPT0gdmFsdWUpe1xyXG4gICAgICAgICAgICBvdXQucHVzaCh2KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gb3V0O1xyXG59XHJcblxyXG4vL+i+k+WFpemFjee9rmtlee+8jOaMieWtl+autei/lOWbnuWQjOexu+mFjee9ruaVsOe7hFxyXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29uZmlnKGtleTpzdHJpbmcsIHBhcmFtOnN0cmluZywgdmFsdWUsIG91dD86QXJyYXk8YW55Pil7XHJcbiAgICByZXR1cm4gZmlsdGVyQ29uZmlnQnlQYXJhbShnZXRDb25maWdCeUtleShrZXkpLCBwYXJhbSwgdmFsdWUsIG91dCk7XHJcbn0iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4vTG9jYWxDb25maWdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSnNvbkhvdHtcclxuICAgIGlkOm51bWJlcjtcclxuICAgIFR5cGU6c3RyaW5nO1xyXG4gICAgVXJsOnN0cmluZztcclxufVxyXG5cclxuLy/mnKzlnLDphY3nva7lrZjlgqjliY3nvIBcclxuY29uc3QgUFJFRklYX0xPQ0FMQ09ORklHX0tFWSA9IFwiY29uZmlnbG9jYWxfcHJlZml4XCI7XHJcblxyXG4vL+WvueW6lOWQjuerr+eahOihqOagvHRhYmxlSWRcclxubGV0IHRhYmxlSWROdW0gPSAxO1xyXG5leHBvcnQgY29uc3QgTE9DQUxDT05GSUdfS0VZID0ge1xyXG4gICAgLy/kv67kuLrpmLbmrrVcclxuICAgIENVTFRJVkFUSU9OX1BFUklPRDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFDb25maWd7XHJcbiAgICBwdWJsaWMgc3RhdGljIElzQ29uZmlnTG9hZGVkID0gZmFsc2U7ICAgLy/mmK/lkKblt7LliqDovb3phY3nva5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgSlNPTkhPVF9VUkwgID0gJ3Jlcy9jb25maWcvSnNvbkhvdC5qc29uJztcclxuICAgIC8v6YWN572uaWTvvIzpobvkuI5yZXMvQ29uZmlnL0pzb25Ib3QuVHlwZeebuOWQjFxyXG4gICAgcHVibGljIHN0YXRpYyBDVUxUSVZBVElPTl9LRVkgPSBcIkN1bHRpdmF0aW9uXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEpTT05fQ09ORklHUyA9IFwianNvbl9jb25maWdzXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlIDogRGF0YUNvbmZpZztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCkgOiBEYXRhQ29uZmlnIHtcclxuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRGF0YUNvbmZpZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSA6IERhdGFDb25maWcge1xyXG4gICAgICAgIGlmKHRoaXMuX2luc3RhbmNlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBEYXRhQ29uZmlnKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb25maWdCeU5hbWUoa2V5OnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0Q29uZmlnQnlOYW1lKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb25maWdCeUlkKGtleTpzdHJpbmcsIGlkOm51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0Q29uZmlnQnlJZChrZXksIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNlYXJjaENvbmZpZyhjb25maWc6QXJyYXk8YW55PiwgcGFyYW06c3RyaW5nLCB2YWx1ZSl7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IENvbW1vbi5zZWFyY2hBcnJheShjb25maWcsIHBhcmFtLCB2YWx1ZSk7XHJcbiAgICAgICAgaWYoIXRhcmdldCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+aJvuS4jeWIsOmFjee9ru+8micsIHBhcmFtLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZWFyY2hDb25maWdCeUlkKGNvbmZpZzpBcnJheTxhbnk+LCBpZDpudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaENvbmZpZyhjb25maWcsICdJZCcsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExvY2FsQ29uZmlnQnlJZChrZXk6c3RyaW5nLCBpZDpudW1iZXIpe1xyXG4gICAgICAgIGxldCBjb25maWc6QXJyYXk8YW55PiA9IHRoaXMuZ2V0TG9jYWxDb25maWcoa2V5KTtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoQ29uZmlnQnlJZChjb25maWcsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uZmlnRGF0YTp7W2tleTpzdHJpbmddOkFycmF5PGFueT59ID0ge307XHJcblxyXG4gICAgcHJvdGVjdGVkIGxvYWRDb25maWcodXJsOnN0cmluZywga2V5OnN0cmluZywgY2I/OkZ1bmN0aW9uKSA6IHZvaWQge1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQodXJsLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIGNvbmZpZz0+e1xyXG4gICAgICAgICAgICBjb25maWcgPSBKU09OLnN0cmluZ2lmeShjb25maWcpO1xyXG4gICAgICAgICAgICB2YXIgY29uZmlnSnNvbiA9IEpTT04ucGFyc2UoY29uZmlnKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdEYXRhW2tleV0gPSBjb25maWdKc29uO1xyXG5cclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRDb25maWcoY2I/OkZ1bmN0aW9uKSA6IHZvaWQge1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoRGF0YUNvbmZpZy5KU09OSE9UX1VSTCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCBjb25maWc9PntcclxuICAgICAgICAgICAgY29uZmlnID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnKTtcclxuICAgICAgICAgICAgbGV0IGhvdEpzb25zOkpzb25Ib3RbXSA9IEpTT04ucGFyc2UoY29uZmlnKTtcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShob3RKc29ucykpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gaG90SnNvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaG90SnNvbnMuZm9yRWFjaCgoY2ZnLCBpZHgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaWR4ID49IHRvdGFsIC0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbmZpZyhjZmcuVXJsLCBjZmcuVHlwZSwgY2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb25maWcoY2ZnLlVybCwgY2ZnLlR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pys5Zyw57yT5a2YXHJcbiAgICBwdWJsaWMgc3RvcmVDb25maWcoa2V5OnN0cmluZyB8IG51bWJlciwgZGF0YSl7XHJcbiAgICAgICAgLy/lkI7nq6/lj5HmnaVqc29u5a2X56ym5LiyXHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbFN0b3JhZ2UoUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIGtleSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVBbGxDb25maWcoZGF0YSl7XHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbEpzb24oQ29uZmlnLkRhdGFDb25maWcuSlNPTl9DT05GSUdTLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUNvbmZpZ1ZlcnNpb24oZGF0YTpDb25maWcuQ29uZmlnRGF0YVBhcmFtW10pe1xyXG4gICAgICAgIC8v5b+F6aG75piv5pWw57uEXHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSA9PSBmYWxzZSB8fCBkYXRhLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0b0xvY2FsID0gbmV3IEFycmF5PENvbmZpZy5Db25maWdEYXRhUGFyYW0+KCk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKHY9PntcclxuICAgICAgICAgICAgdG9Mb2NhbC5wdXNoKG5ldyBDb25maWcuQ29uZmlnRGF0YVBhcmFtKHYuVGFibGVJZCwgdi5WZXJzaW9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbEpzb24oQ29uZmlnLkRhdGFDb25maWcuSlNPTl9DT05GSUdTLCB0b0xvY2FsKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TG9jYWxDb25maWcoa2V5OnN0cmluZyl7XHJcbiAgICAgICAgaWYoIWtleSl7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGNvbmZpZyBrZXk6ICcsIGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb25maWcgPSBDb21tb24uZ2V0TG9jYWxTdG9yYWdlKGtleSk7XHJcbiAgICAgICAgaWYoIWNvbmZpZyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+mFjee9ruS4uuepuu+8micsIGtleSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWdWZXJzaW9uKGNvbmZpZzpDb25maWcuQ29uZmlnRGF0YVBhcmFtKXtcclxuICAgICAgICByZXR1cm4gY29uZmlnICYmIGNvbmZpZy5WZXJzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWdWZXJzaW9uQnlLZXkoa2V5OnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnVmVyc2lvbih0aGlzLmdldExvY2FsQ29uZmlnKGtleSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5pys5Zyw5omA5pyJ6YWN572uXHJcbiAgICBzdGF0aWMgZ2V0IGxvY2FsQ29uZmlncygpOkNvbmZpZy5Db25maWdEYXRhUGFyYW1bXXtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLmdldExvY2FsSnNvbihEYXRhQ29uZmlnLkpTT05fQ09ORklHUykgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbmZpZ0J5TmFtZShrZXk6c3RyaW5nKSA6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnRGF0YVtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb25maWdCeUlkKGtleTpzdHJpbmcsaWQ6bnVtYmVyKSA6IGFueSB7XHJcbiAgICAgICAgaWYodGhpcy5jb25maWdEYXRhW2tleV0pIHtcclxuICAgICAgICAgICAgdmFyIGNvbmZpZ3MgPSB0aGlzLmNvbmZpZ0RhdGFba2V5XTtcclxuICAgICAgICAgICAgZm9yKHZhciBpOm51bWJlciA9IDA7IGkgPCBjb25maWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihjb25maWdzW2ldWydpZCddID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3NbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbmZpZ3NCeVR5cGUoa2V5OnN0cmluZywgdHlwZTpudW1iZXIpIDogYW55IHtcclxuICAgICAgICBpZih0aGlzLmNvbmZpZ0RhdGFba2V5XSkge1xyXG4gICAgICAgICAgICB2YXIgY29uZmlncyA9IHRoaXMuY29uZmlnRGF0YVtrZXldO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0OkFycmF5PGFueT4gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpOm51bWJlciA9IDA7IGkgPCBjb25maWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihjb25maWdzW2ldWyd0eXBlJ10gPT0gdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbmZpZ3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUNvbmZpZ0RhdGEge1xyXG4gICAgc3RhdGljIENPTkZJR19LRVk6c3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBjb25maWc6QXJyYXk8YW55PjtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IENvbmZpZygpe1xyXG4gICAgICAgIGlmKCF0aGlzLmNvbmZpZyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gRGF0YUNvbmZpZy5nZXRMb2NhbENvbmZpZyh0aGlzLkNPTkZJR19LRVkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWdCeUlkKGlkOm51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIERhdGFDb25maWcuc2VhcmNoQ29uZmlnQnlJZCh0aGlzLkNvbmZpZywgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maWdCeUxldmVsKGxldmVsOm51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIENvbW1vbi5zZWFyY2hBcnJheSh0aGlzLkNvbmZpZywgJ0xldmVsJywgbGV2ZWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLemFjee9ruWtl+autS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy/mqKHmnb/phY3nva5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgTmFtZTpzdHJpbmc7XHJcbiAgICBMZXZlbDpudW1iZXI7XHJcbiAgICBUeXBlOm51bWJlcjtcclxuICAgIFBpYzpzdHJpbmc7IFxyXG59XHJcblxyXG4vL+S/ruS4uumFjee9rlxyXG5leHBvcnQgY2xhc3MgQ3VsdGl2YXRpb25QZXJpb2QgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIFhpdXdlaU5hbWU6c3RyaW5nOyAgLy/kv67kuLrnuqfliKvlkI3np7BcclxuICAgIENvc3Q6bnVtYmVyOyAgICAvL+WNh+e6p+a2iOiAl+S/ruS4ulxyXG4gICAgU3VjY2VzczpudW1iZXI7IC8v5rih5Yqr5oiQ5Yqf546HXHJcbiAgICBBZGRFZmZpY2llbmN5Om51bWJlcjtcclxuICAgIEZhaWxSZXR1cm46bnVtYmVyO1xyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpY3Rpb25hcnk8VD4ge1xyXG4gICAgW0tleTogc3RyaW5nXTogVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50Q2xhc3Mge1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIExpc3RlbmVyOkZ1bmN0aW9uO1xyXG4gICAgVGFyZ2V0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcsIGxpc3RlbmVyOkZ1bmN0aW9uLCB0YXJnZXQ/KXtcclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLkxpc3RlbmVyID0gbGlzdGVuZXI7XHJcbiAgICAgICAgdGhpcy5UYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0ZW5lckNsYXNzIHtcclxuICAgIExpc3RlbmVycyA9IG5ldyBBcnJheTxGdW5jdGlvbj4oKTtcclxuICAgIFRhcmdldHMgPSBuZXcgQXJyYXk8Q29tbW9uLkV2ZW50RGlzcGF0aGVyPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXIobGlzdGVuZXI6RnVuY3Rpb24sIHRhcmdldD8pe1xyXG4gICAgICAgIHRoaXMuTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIHRoaXMuVGFyZ2V0cy5wdXNoKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIobGlzZW5lcjpGdW5jdGlvbil7XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuTGlzdGVuZXJzLmluZGV4T2YobGlzZW5lcik7XHJcbiAgICAgICAgaWYoaWR4ID49IDApe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5MaXN0ZW5lcnNbaWR4XTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuVGFyZ2V0c1tpZHhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudERpc3BhdGhlckludGVyZmFjZXtcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoa2V5LCBsaXNlbmVyOkZ1bmN0aW9uKTtcclxuICAgIGRpc3BhdGNoRXZlbnQoa2V5KTtcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxufVxyXG5cclxuLy/niYjmnKzmjqfliLZcclxuZXhwb3J0IGVudW0gVmVyc2lvbkNvbmZpZyB7XHJcbiAgICAvL+W8gOWPkeeJiOacrFxyXG4gICAgRGV2ZWxvcCA9IDAsXHJcbiAgICAvL+WvueWklueJiOacrFxyXG4gICAgUmVsZWFzZSA9IDEsXHJcbn1cclxuXHJcbi8v5rGg57G75Z6LXHJcbmV4cG9ydCBjb25zdCBQb29sVHlwZSA9IHtcclxuICAgIC8v6K6h5pe25ZmoXHJcbiAgICBUaW1lcjogJ1RpbWVyJyxcclxuICAgIC8v546p5a625aS06YOoXHJcbiAgICBIZWFkTW9kZWw6ICdIZWFkTW9kZWwnLFxyXG4gICAgLy/njqnlrrbouqvkvZNcclxuICAgIEJvZHlNb2RlbDogJ0JvZHlNb2RlbCcsXHJcbiAgICAvL+W8ueW5lVxyXG4gICAgUGFzc2J5VHh0OiAnUGFzc2J5VHh0JyxcclxuICAgIC8vZmFpcnlndWnlr7nosaFcclxuICAgIEZndWlPYmo6ICdGZ3VpT2JqJyxcclxuICAgIEhhbmQ6ICdIYW5kJyxcclxuICAgIERlc2s6ICdEZXNrJyxcclxufVxyXG5cclxuLy/msaDnianlk4HnsbvlnotcclxuZXhwb3J0IGNvbnN0IFBvb2xJdGVtS2V5ID0ge1xyXG4gICAgLy/njqnlrrbouqvkvZNcclxuICAgIEJvZHlTcGluZTogJ0JvZHlTcGluZScsICAgIFxyXG4gICAgLy/mjaLoo4XmqKHmnb9cclxuICAgIERyZXNzVGVtcGxhdGU6ICdEcmVzc1RlbXBsYXRlJywgICAgXHJcbn1cclxuXHJcbi8v6ZqP5py66K+t5Y+l57G75Z6LXHJcbmV4cG9ydCBjb25zdCBSYW5kV29yZFR5cGUgPSB7XHJcbiAgICAvL+a4oeWKq1xyXG4gICAgQ3VsdGl2YXRpb246IDEsXHJcbn1cclxuXHJcbi8v5bm/5ZGK57G75Z6LXHJcbmV4cG9ydCBlbnVtIEF3YXJkVHlwZSB7XHJcbiAgICBOb3QgPSAwLFxyXG4gICAgQUQgPSAxLFxyXG4gICAgU2hhcmUgPSAyXHJcbn1cclxuXHJcbi8v5bm/5ZGK5LyY5YWI57qn6YWN572uXHJcbmV4cG9ydCBlbnVtIEFkQ29uZmlnVHlwZSB7XHJcbiAgICAvL+a/gOWKseinhumikeS8mOWFiFxyXG4gICAgVmlkZW8gPSAwLFxyXG4gICAgLy/liIbkuqvkvJjlhYhcclxuICAgIFNoYXJlID0gMVxyXG59XHJcblxyXG4vL+WIhuS6q+ivreWPpeexu+Wei1xyXG5leHBvcnQgZW51bSBTaGFyZVdvcmRFbnVtIHtcclxuICAgIENhcmRXb3JkcyA9IDEsXHJcbiAgICBIYW1zdGVyV29yZHMgPSAyLFxyXG4gICAgQ29pbldvcmRzID0gMyxcclxuICAgIE90aGVyV29yZHMgPSA0LFxyXG59XHJcblxyXG4vL+aooeWei+aVsOaNruWumuS5iVxyXG5leHBvcnQgY2xhc3MgTW9kZWxEYXRhU3RydWN0IHtcclxuICAgIG1zcDpMYXlhLlNwcml0ZTNEO1xyXG4gICAgYW5pOkxheWEuQW5pbWF0b3I7XHJcbiAgICBhbmlTdGF0ZTpMYXlhLkFuaW1hdG9yUGxheVN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1zcDpMYXlhLlNwcml0ZTNELCBhbmk6TGF5YS5BbmltYXRvciwgYW5pU3RhdGU6TGF5YS5BbmltYXRvclBsYXlTdGF0ZSl7XHJcbiAgICAgICAgdGhpcy5tc3AgPSBtc3A7XHJcbiAgICAgICAgdGhpcy5hbmkgPSBhbmk7XHJcbiAgICAgICAgdGhpcy5hbmlTdGF0ZSA9IGFuaVN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WFrOWFseehruiupOW8ueeql+exu+Wei1xyXG5leHBvcnQgY29uc3QgQ29uZmlybVdpbmRvd1R5cGUgPSB7XHJcbiAgICAvL+aWh+Wtl1xyXG4gICAgQ29udGVudDogMSxcclxuICAgIC8v5aWW5Yqx54mp5ZOBXHJcbiAgICBSZXdhcmQ6IDIsXHJcbiAgICAvL+aWh+WtlyvlpZblirFcclxuICAgIENvbnRlbnRBbmRSZXdhcmQ6IDMsXHJcbn1cclxuXHJcbi8v5by55Ye656qX5Y+j5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpbmRvd0RhdGEge1xyXG4gICAgQ29udGVudDpzdHJpbmdbXTtcclxuICAgIFdpbmRvd1R5cGU6bnVtYmVyO1xyXG4gICAgWWVzQnRuQ29udGVudDpzdHJpbmc7XHJcbiAgICBZZXNCdG5DYWxsYmFjazpGdW5jdGlvbjtcclxuICAgIENhbmNlbEJ0bkNvbnRlbnQ6c3RyaW5nO1xyXG4gICAgUmV3YXJkRGF0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50OnN0cmluZ1tdLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIHdpbmRvd1R5cGU/Om51bWJlciwgcmV3YXJkRGF0YT8sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5Db250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLlllc0J0bkNhbGxiYWNrID0geWVzQnRuQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5ZZXNCdG5Db250ZW50ID0gYnRuWWVzVHh0PyBidG5ZZXNUeHQ6ICfnoa7lrponO1xyXG4gICAgICAgIHRoaXMuQ2FuY2VsQnRuQ29udGVudCA9IGJ0bkNhbmNlbFR4dD8gYnRuQ2FuY2VsVHh0OiAn5Y+W5raIJztcclxuICAgICAgICB0aGlzLldpbmRvd1R5cGUgPSB3aW5kb3dUeXBlO1xyXG4gICAgICAgIHRoaXMuUmV3YXJkRGF0YSA9IHJld2FyZERhdGE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmxldCBMb2NhbENvbmZpZyA9IHtcclxuICAgIElzQ2hvb3NlZFNlcnZpY2U6IGZhbHNlLFxyXG4gICAgSXNTaW1Qcm9ncmVzc0VuZDogZmFsc2UsXHJcblxyXG4gICAgUmV3YXJkQWRMaXN0OiBbXHJcbiAgICAgICAgJ2FkdW5pdC1kOTUwNmI4NTZkYTY1MWQ5JyxcclxuICAgICAgICAnYWR1bml0LTI3N2ExNDkwYmRkOTY1ODYnLFxyXG4gICAgICAgICdhZHVuaXQtMjRjOTgxYmI2ZTI2MWMxMicsXHJcbiAgICAgICAgJ2FkdW5pdC1iYTE0NzQyNDJlMGIwN2NjJyxcclxuICAgICAgICAnYWR1bml0LTVlZGM1MjU2Yjg5OTQ2Y2UnXHJcbiAgICBdLFxyXG5cclxuICAgIEJhbm5lckFkTGlzdDogW1xyXG4gICAgICAgICdhZHVuaXQtNjRmMzJlYmYzOTFhM2VlYScsXHJcbiAgICAgICAgJ2FkdW5pdC1mMWJkOTcwMjk0MTJkYzM1JyxcclxuICAgICAgICAnYWR1bml0LTc5MjEwOWZhYzY4ZWYwOGInLFxyXG4gICAgICAgICdhZHVuaXQtZWQ4ZjAwZGQ0MmRkMmRkOCcsXHJcbiAgICAgICAgJ2FkdW5pdC1hOTI0YzI5NmVhOWIyM2E1J1xyXG4gICAgXSxcclxuXHJcbiAgICBNaW5pUHJvZ3JhbUFwcElkOiB7XHJcbiAgICAgICAgTWFpa2U6ICd3eDZmMWI5YjgxNDY3Y2MzZGEnLFxyXG4gICAgfSxcclxuXHJcbiAgICAvL+eUqOaIt+aYr+WQpuW3suaOiOadg1xyXG4gICAgSXNXeEF1dGg6IHRydWUsXHJcblxyXG4gICAgLy/lrZjlgqjnlKjmiLflkI1cclxuICAgIEdldEFjb3VudE5hbWUoKXtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLmdldExvY2FsU3RvcmFnZShcIkFjb3VudE5hbWVcIikgfHwgJyc7XHJcbiAgICB9LFxyXG5cclxuICAgIFNhdmVBY291bnROYW1lKF92YWx1ZSl7XHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbFN0b3JhZ2UoXCJBY291bnROYW1lXCIsIF92YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2FsQ29uZmlnOyIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2FsQ29udGVudCA9IHtcclxuICAgIEludml0ZTogJ+mCgOivtycsXHJcblxyXG4gICAgTmV0RXJyb3I6ICfnvZHnu5zlvIDlsI/lt64nLFxyXG5cclxuICAgIFllczogJ+ehruWumicsXHJcblxyXG4gICAgQ29taW5nU29vbjogJ+aaguacquW8gOaUvicsXHJcblxyXG4gICAgR2V0QXdhcmQ6ICfpooblj5YnLFxyXG5cclxuICAgIEZseWluZ1RpcHNEZWZhdWx0OiAn5oGt5Zac6I635b6X5aWW5YqxJyxcclxuXHJcbiAgICBDb25zQXdhcmQ6IFwi5oGt5Zac6I635b6XXCIsXHJcblxyXG4gICAgU2hhcmVGYWlsVGlwczogXCLliIbkuqvnm7jlkIzmnIvlj4vlnIjml6Dms5XojrflvpflpZblirFcIixcclxufSIsImV4cG9ydCBsZXQgbG9naW5SZXNVcmxzID0gW1xyXG4gICAgeyB1cmw6ICdyZXMvQ2hvb3NlU2VydmljZS9DaG9vc2VTZXJ2aWNlLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvTG9hZGluZ1VJL0xvYWRpbmdVSS50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL0xvYWRpbmdVSS9Mb2FkaW5nVUlfYXRsYXMyLnBuZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbl0iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cFJlcWJvZHlCYXNle1xyXG4gICAgc3RhdGljIHJlcWJvZHlzOkNvbmZpZy5EaWN0aW9uYXJ5PEh0dHBSZXFib2R5QmFzZT4gPSB7fTtcclxuICAgIEtleTpzdHJpbmc7XHJcbiAgICBNb2R1bGVDb2RlOiBudW1iZXI7XHJcbiAgICBSZXFDb2RlOiBudW1iZXI7XHJcbiAgICBTZXNzaW9uOiBzdHJpbmc7XHJcbiAgICBBY2NvdW50S2V5OiBzdHJpbmc7XHJcbiAgICBSZXFEYXRhOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioa2V5OnN0cmluZywgbW9kQ29kZTpudW1iZXIsIHJlcUNvZGU6bnVtYmVyLCBzZXNzaW9uPzpzdHJpbmcsIGFjY05hbWU/OnN0cmluZywgcmVxZGF0YT8pe1xyXG4gICAgICAgIGlmKHR5cGVvZihyZXFkYXRhKSA9PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgLy/lpoLlt7LovazmjaLliJnovazlm55KU09OXHJcbiAgICAgICAgICAgIHJlcWRhdGEgPSBKU09OLnBhcnNlKHJlcWRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5LZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5Nb2R1bGVDb2RlID0gbW9kQ29kZTtcclxuICAgICAgICB0aGlzLlJlcUNvZGUgPSByZXFDb2RlO1xyXG4gICAgICAgIHRoaXMuU2Vzc2lvbiA9IHNlc3Npb247XHJcbiAgICAgICAgdGhpcy5BY2NvdW50S2V5ID0gYWNjTmFtZTtcclxuICAgICAgICB0aGlzLlJlcURhdGEgPSByZXFkYXRhO1xyXG5cclxuICAgICAgICBIdHRwUmVxYm9keUJhc2UucmVxYm9keXNba2V5XSA9IHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6K+35rGC57uT5p6EXHJcbmV4cG9ydCB2YXIgUmVxRGF0YSA9IHtcclxuICAgIExvZ2luOntcIk5hbWVcIjogXCJ0YW5keVwifSxcclxuICAgIEFkb2JlUG9vbFVwZ3JhZGU6e1wiVHlwZVwiOiAxfSxcclxuICAgIEpvaW5TZWN0OntcIkdyb3VwU3RhZ2VJZFwiOiAxLFwiR3JvdXBJZFwiOiAxfSxcclxuICAgIExlYXJuU2VjdEtmOntcIlNraWxsSWRcIjogMX0sXHJcbiAgICBVcGdyYWRlS29uZ2ZhOntcIlNraWxsVHlwZVwiOjEsXCJTa2lsbElkXCI6IDF9LFxyXG4gICAgU3RhcnRTZWN0VGFzazp7XCJUYXNrSWRcIjoxfSxcclxuICAgIEdyYWJTZWN0VGFza0F3YXJkOntcIlRhc2tJZFwiOjF9LFxyXG4gICAgU2VsbEJhZ0l0ZW06e1wiUG9zaXRpb25cIjogMSxcIlR5cGVcIjogMSxcIklkXCI6IDEsXCJOdW1cIjogMX0sXHJcbiAgICBVc2VCYWdJdGVtOntcIlBvc2l0aW9uXCI6IDEsXCJUeXBlXCI6IDEsXCJJZFwiOiAxLFwiTnVtXCI6IDF9LFxyXG4gICAgR21BZGRCYWdJdGVtOntcIlR5cGVcIjogMSxcIklkXCI6IDEsXCJOdW1cIjogMX0sXHJcbiAgICAvL+aMkeaImOmVh+WmluWhlFxyXG4gICAgR29Nb25zdGVyVG93ZXI6e1wiQ2hhbGxlbmdlTGV2ZWxcIjogMSwgXCJIZWxwSGVyb3NcIjogbmV3IEFycmF5PEhlbHBIZXJvc0RhdGFDbGFzcz4oKX0sXHJcbn1cclxuXHJcbi8v6ZWH5aaW5aGU6YKA6K+35LuZ5Y+L5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBIZWxwSGVyb3NEYXRhQ2xhc3Mge1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIElzUm9ib3Q6Ym9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6c3RyaW5nLCBpc1JvYm90OmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuS2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuSXNSb2JvdCA9IGlzUm9ib3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ml6DliqnmiJjoi7Hpm4RcclxuICAgIHN0YXRpYyBnZXQgTm9uZUhlbHBIZXJvKCl7XHJcbiAgICAgICAgcmV0dXJuIFtFbXB0eUhlbHBIZXJvLCBFbXB0eUhlbHBIZXJvLCBFbXB0eUhlbHBIZXJvLCBFbXB0eUhlbHBIZXJvXTtcclxuICAgIH1cclxufVxyXG5cclxuLy/liqnmiJjoi7Hpm4TnqbrkvY1cclxuZXhwb3J0IGNvbnN0IEVtcHR5SGVscEhlcm8gPSBuZXcgSGVscEhlcm9zRGF0YUNsYXNzKCcnLCBmYWxzZSk7XHJcblxyXG5leHBvcnQgZW51bSBSZXFib2R5S2V5e1xyXG4gICAgQ29uZmlnID0gXCJDb25maWdcIixcclxuICAgIExvZ2luID0gXCJMb2dpblwiLFxyXG4gICAgVXBncmFkZSA9IFwiVXBncmFkZVwiLFxyXG4gICAgQWRvYmVVaUluZm8gPSBcIkFkb2JlVWlJbmZvXCIsXHJcbiAgICBBZG9iZUhpcmVXb3JrZXIgPSBcIkFkb2JlSGlyZVdvcmtlclwiLFxyXG4gICAgQWRvYmVBZGRXb3JrZXIgPSBcIkFkb2JlQWRkV29ya2VyXCIsXHJcbiAgICBBZG9iZVJlZHVjZVdvcmtlciA9IFwiQWRvYmVSZWR1Y2VXb3JrZXJcIixcclxuICAgIEFkb2JlVXBTdG9uZSA9IFwiQWRvYmVVcFN0b25lXCIsXHJcbiAgICBBZG9iZVVwRm9vZCA9IFwiQWRvYmVVcEZvb2RcIixcclxuICAgIEFkb2JlVXBXb29kID0gXCJBZG9iZVVwV29vZFwiLFxyXG4gICAgQWRvYmVVcElyb24gPSBcIkFkb2JlVXBJcm9uXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgTmV0Q29uZmlnID0ge1xyXG4gICAgUmVxdWVzdFVybDpcImh0dHA6Ly83LmxpZ2h0cGF3LmNvbS90cnV0aFwiLFxyXG5cclxuICAgIC8vIEh0dHBSZXF1ZXN0VXJsOlwiaHR0cDovLzcwNi5saWdodHBhdy5jb206NzcyMC9oYXBweV90cmF2ZWxcIixcclxuXHJcbiAgICBIdHRwUmVxdWVzdFVybDpcImh0dHBzOi8vOXo5YWN2OTAxZy5leGVjdXRlLWFwaS5jbi1ub3J0aHdlc3QtMS5hbWF6b25hd3MuY29tLmNuL2JldGFcIixcclxuICAgIFxyXG4gICAgTG9jYWxSZXF1ZXN0VXJsOlwiaHR0cDovLzcubGlnaHRwYXcuY29tL3RydXRoXCIsXHJcblxyXG4gICAgTG9jYWxXZWNoYXRSZXF1ZXN0VXJsOlwiaHR0cDovL3N2ZjM3ZS5uYXRhcHBmcmVlLmNjL2hhcHB5X3RyYXZlbFwiLFxyXG5cclxuICAgIEdNVXJsOlwiaHR0cDovLzcubGlnaHRwYXcuY29tL2hhcHB5X3RyYXZlbC9yZXdhcmRcIixcclxuXHJcbiAgICBUZW1wTmFtZTpcIlwiLFxyXG59XHJcblxyXG4vL+i/nuaOpeeKtuaAgVxyXG5leHBvcnQgZW51bSBIdHRwQ29ubmVjdFN0YXRlIHtcclxuICAgIEVycm9yID0gMCxcclxuICAgIFN1Y2Nlc3MgPSAxLFxyXG59XHJcblxyXG4vL+WTjeW6lOe7k+aehOS9k1xyXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BEYXRhU3RydWN0IHtcclxuICAgIFJlc3BDb2RlOiBudW1iZXI7XHJcbiAgICBSZXNwTXNnOiBzdHJpbmc7XHJcbiAgICBSZXNwRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc3BEYXRhKGRhdGE6UmVzcERhdGFTdHJ1Y3Qpe1xyXG4gICAgcmV0dXJuIGRhdGEgJiYgZGF0YS5SZXNwRGF0YTtcclxufVxyXG5cclxuLy/mi4nlj5bphY3nva7or7fmsYLkvZNcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0RhdGFQYXJhbSB7XHJcbiAgICBUYWJsZUlkOiBudW1iZXI7XHJcbiAgICBUYWJsZU5hbWU6IHN0cmluZztcclxuICAgIFZlcnNpb246IG51bWJlcjtcclxuICAgIERhdGE6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlciwgdmVyc2lvbjpudW1iZXIsIG5hbWU/OnN0cmluZywgZGF0YT8pe1xyXG4gICAgICAgIHRoaXMuVGFibGVJZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuVmVyc2lvbiA9IHZlcnNpb247XHJcbiAgICAgICAgaWYobmFtZSl7XHJcbiAgICAgICAgICAgIHRoaXMuVGFibGVOYW1lID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIHRoaXMuRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IENvbmZpZ1JlcURhdGEgPSBuZXcgQXJyYXk8Q29uZmlnRGF0YVBhcmFtPigpO1xyXG5cclxuLy/nmbvlvZXor7fmsYLkvZNcclxuZXhwb3J0IGNsYXNzIExvZ2luUmVxRGF0YSB7XHJcbiAgICBOYW1lPzogc3RyaW5nO1xyXG4gICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICBKc0NvZGU/OiBzdHJpbmc7XHJcbiAgICBFbmNyeXB0ZWREYXRhPzogc3RyaW5nO1xyXG4gICAgSXY/OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZT86c3RyaW5nLCBwdz86c3RyaW5nLCBqc2NvZGU/OnN0cmluZywgZW5jcnlwdGVkRGF0YT86c3RyaW5nLCBpdj86c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5OYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLlBhc3N3b3JkID0gcHc7XHJcbiAgICAgICAgdGhpcy5Kc0NvZGUgPSBqc2NvZGU7XHJcbiAgICAgICAgdGhpcy5FbmNyeXB0ZWREYXRhID0gZW5jcnlwdGVkRGF0YTtcclxuICAgICAgICB0aGlzLkl2ID0gaXY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v55m75b2V5ZON5bqU5pWw5o2u5L2TXHJcbmV4cG9ydCB0eXBlIExvZ2luUmVzcERhdGFTdHJ1Y3QgPSB7XHJcbiAgICBcIkFjY291bnRCYXNlSW5mb1wiOiB7XHJcbiAgICAgICAgXCJBY2NvdW50S2V5XCI6IHN0cmluZyxcclxuICAgICAgICBcIlZlcmlmeVNlc3Npb25cIjogc3RyaW5nLFxyXG4gICAgICAgIFwiTmlja05hbWVcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiQXZhdGFyXCI6IHN0cmluZyxcclxuICAgICAgICBcIkNyZWF0ZVRpbWVcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRGFvaGVuZ1wiOiBudW1iZXIsXHJcbiAgICAgICAgXCJMaW5nbGlcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiR2VuZ3VcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiVGlwb1wiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTaGVuZmFcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiV3V4aW5nXCI6IG51bWJlcixcclxuICAgICAgICBcIkZ1eXVhblwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJaaXpoaVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJaaGVuZ3lpXCI6IG51bWJlcixcclxuICAgICAgICBcIlhpZWVcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiV2Vpd2FuZ1wiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHcm91cEdvbmd4aWFuXCI6IG51bWJlcixcclxuICAgICAgICBcIlhpYW55dVwiOiBudW1iZXIsXHJcbiAgICB9LFxyXG4gICAgXCJYaXV3ZWlJbmZvXCI6IHtcclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiU3RhZ2VcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiQ3VycmVudFZhbHVlXCI6IG51bWJlcixcclxuICAgICAgICBcIkVmZmljaWVuY3lcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU2V0dGxlbWVudFRpbWVcIjogbnVtYmVyXHJcbiAgICB9LFxyXG4gICAgXCJQYWdvZGFJbmZvXCI6IHtcclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiTm9ybWFsTXVsdGlwbGVJbmZvc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiU3RhcnRTdGFtcFwiOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcIkVuZFN0YW1wXCI6IG51bWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIk5vcm1hbFN0YXJ0VGltZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJOb3JtYWxUaW1lc1wiOiBudW1iZXIsXHJcbiAgICAgICAgXCJOb3JtYWxMZXN0VGltZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJMZWFkZXJNdWx0aXBsZUluZm9zXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJTdGFydFN0YW1wXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiRW5kU3RhbXBcIjogbnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiTGVhZGVyU3RhcnRUaW1lXCI6IG51bWJlcixcclxuICAgICAgICBcIkxlYWRlclRpbWVzXCI6IG51bWJlcixcclxuICAgICAgICBcIkxlYWRlckxlc3RUaW1lXCI6IG51bWJlclxyXG4gICAgfSxcclxuICAgIFwiRG9uZ2Z1SW5mb1wiOiB7IC8v6LSm5oi35pyA5paw5rSe5bqc5L+h5oGvXHJcbiAgICAgICAgXCJBY2NvdW50S2V5XCI6IHN0cmluZyxcclxuICAgICAgICBcIlRvdGFsU2VydmFudE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTdG9uZUxldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU3RvbmVOdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU3RvbmVTZXJ2YW50TnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIkZvb2RMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIkZvb2ROdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRm9vZFNlcnZhbnROdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiV29vZExldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiV29vZE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXb29kU2VydmFudE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJJcm9uTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJJcm9uTnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIklyb25TZXJ2YW50TnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIlNldHRsZW1lbnRUaW1lXCI6IG51bWJlclxyXG4gICAgfSxcclxuICAgIFwiUG9vbEluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJQb29sTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJSZWlraU51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHb2xkTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXb29kTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXYXRlckxldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRmlyZUxldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU29pbExldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU2V0dGxlbWVudFRpbWVcIjogbnVtYmVyLFxyXG4gICAgfSxcclxuICAgIFwiR3JvdXBJbmZvXCI6IHtcclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiR3JvdXBJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHcm91cFNraWxsTnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIlN0dWR5U2tpbGxzXCI6IFtcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIFwiU2tpbGxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgIFwiU2tpbGxUeXBlXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgXCJMZXZlbFwiOiBudW1iZXJcclxuICAgICAgICAgICB9XHJcbiAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgXCJTdG9yYWdlSW5mb1wiOiB7XHJcbiAgICAgICAgXCJTd29yZElkXCI6IG51bWJlcixcclxuICAgICAgICBcIkhhaXJwaW5JZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJDbG90aGVzSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU2hvZXNJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJSaW5nSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiSmFkZUlkXCI6IG51bWJlcixcclxuICAgICAgICBcIkJyYWNlbGV0SWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiQ29tcGFzc0lkXCI6IG51bWJlcixcclxuICAgICAgICBcIk9wZW5OdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiR29vZEluZm9zXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJUeXBlXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiSWRcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJOdW1cIjogbnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIFwiRGFtb25JbmZvXCI6IHtcclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiQ2hhbGxlbmdlTGV2ZWxcIjogbnVtYmVyXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZG9iZUFkZFdvcmtlclJlcURhdGEge1xyXG4gICAgV29ya1R5cGU6bnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdvcmtUeXBlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuV29ya1R5cGUgPSB3b3JrVHlwZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT2JqZWN0Q29uZmlnID0ge1xyXG4gICAgREVTS19QT1M6IG5ldyBMYXlhLlZlY3RvcjMoMi41LCA0LCAtNSksXHJcbiAgICBERVNLX0VORF9QT1M6IG5ldyBMYXlhLlZlY3RvcjMoMi41LCAtMSwgLTUpLFxyXG4gICAgREVTS19FTlRFUl9QT1M6IG5ldyBMYXlhLlZlY3RvcjMoNiwgNCwgLTUpLFxyXG4gICAgSEFORF9QT1M6IG5ldyBMYXlhLlZlY3RvcjMoLTMsIC0yLCAtNSksXHJcbiAgICBIQU5EX0VORF9QT1M6IG5ldyBMYXlhLlZlY3RvcjMoMCwgLTIsIC01KSxcclxuICAgIERFU0tfU0laRTogbmV3IExheWEuVmVjdG9yMygwLjIsIDMsIDIpLFxyXG4gICAgSEFORF9TSVpFOiBuZXcgTGF5YS5WZWN0b3IzKDYsIDAuNSwgMC41KSxcclxuICAgIC8vc3BlZWRcclxuICAgIFNQRUVEX0ZPUldBUkRfREVTSzogbmV3IExheWEuVmVjdG9yMygwLCAtMTAsIDApLFxyXG4gICAgU1BFRURfQkFDS19ERVNLOiBuZXcgTGF5YS5WZWN0b3IzKDAsIDEwLCAwKSxcclxuICAgIFNQRUVEX0hBTkQ6IDAuMDMsXHJcbn0iLCJsZXQgdXJscyA9IFtcclxuICAgIHsgdXJsOiAncmVzL0Fkb2JlL0Fkb2JlLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQWRvYmUvQWRvYmVfYXRsYXMwLmpwZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9BZG9iZS9BZG9iZV9hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL2F0bGFzL2NvbXAucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL0NoZXNzQm9hcmQvQ2hlc3NCb2FyZC50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL0NoZXNzQm9hcmQvQ2hlc3NCb2FyZF9hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL0Nob29zZVNlcnZpY2UvQ2hvb3NlU2VydmljZS50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL0ljb25zL0ljb25zLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvSWNvbnMvSWNvbnNfYXRsYXMyLnBuZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9NYWluTWVudS9NYWluTWVudS50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL01haW5NZW51L01haW5NZW51X2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUGxheWVyL1BsYXllci50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL1B1YmxpYy9QdWJsaWMudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QdWJsaWMvUHVibGljX2F0bGFzMS5qcGcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczFfMS5qcGcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL1B1YmxpYy9QdWJsaWNfYXRsYXMyXzEucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL1B1YmxpYy9QdWJsaWNfYXRsYXMyXzIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL1B1YmxpYy9QdWJsaWNfYXRsYXMyXzMucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL1JvYWRUb0RpZXR5L1JvYWRUb0RpZXR5LnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvU2VjdC9TZWN0LnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG5dXHJcbmV4cG9ydCB7dXJsc307IiwiXHJcbmV4cG9ydCBjb25zdCBTdGF0ZUNvbmZpZyA9IHtcclxuICAgIElERUw6ICdJREVMJywgIC8v5b6F5py6XHJcbiAgICBERUFEOiAnREVBRCcsXHJcbiAgICBCQUNLX1BBU1NFRDogJ0JBQ0tfUEFTU0VEJywgICAgLy/lt7LnvKnlm57lronlhajljLpcclxuICAgIE1PVkVfRk9SV0FSRDogJ01PVkVfRk9SV0FSRCcsICAgIC8v5YmN5Ly4XHJcbiAgICBNT1ZFX0JBQ0s6ICdNT1ZFX0JBQ0snLCAgICAvL+e8qeWbnlxyXG4gICAgU1RPUDogJ1NUT1AnLCAgICAvL+WBnOatoui/kOWKqFxyXG4gICAgREVTS19MRUFWRTogJ0RFU0tfTEVBVkUnLCAgICAvL+WIgOWPsOemu+WculxyXG4gICAgREVTS19FTlRFUjogJ0RFU0tfRU5URVInLCAgICAvL+WIgOWPsOi/m+WculxyXG59IiwiXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlld0NvbmZpZ3tcclxuICAgIEtleTogc3RyaW5nLFxyXG4gICAgUGtnQWRyczogc3RyaW5nLFxyXG4gICAgUGtnOiBzdHJpbmcsXHJcbiAgICBDb206IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVmlld0tpdCA9IHtcclxuICAgIC8v5Yqg6L296I+K6IqxXHJcbiAgICBMb2FkaW5nTWFpbjoge1xyXG4gICAgICAgIEtleTogXCJMb2FkaW5nTWFpblwiLFxyXG4gICAgICAgIFBrZzogXCJMb2FkaW5nVUlcIixcclxuICAgICAgICBDb206XCJMb2FkaW5nTWFpblwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6YCJ5oup5pyN5Yqh5ZmoXHJcbiAgICBDaG9vc2VTZXJ2aWNlOntcclxuICAgICAgICBLZXk6IFwiQ2hvb3NlU2VydmljZVwiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwiQ2hvb3NlU2VydmljZS9DaG9vc2VTZXJ2aWNlXCIsXHJcbiAgICAgICAgUGtnOiBcIkNob29zZVNlcnZpY2VcIixcclxuICAgICAgICBDb206XCJDaG9vc2VTZXJ2aWNlXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/or7vmnaHov5vluqZcclxuICAgIExvYWRpbmdQcm9ncmVzczoge1xyXG4gICAgICAgIEtleTogXCJMb2FkaW5nUHJvZ3Jlc3NcIixcclxuICAgICAgICBQa2dBZHJzOiBcInJlcy9Mb2FkaW5nVUkvTG9hZGluZ1VJXCIsXHJcbiAgICAgICAgUGtnOiBcIkxvYWRpbmdVSVwiLFxyXG4gICAgICAgIENvbTpcIkxvYWRpbmdQcm9ncmVzc1wiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5Li755WM6Z2iXHJcbiAgICBNYWluTWVudToge1xyXG4gICAgICAgIEtleTogXCJNYWluTWVudVwiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwicmVzL01haW5NZW51L01haW5NZW51XCIsXHJcbiAgICAgICAgUGtnOiBcIk1haW5NZW51XCIsXHJcbiAgICAgICAgQ29tOlwiTWFpbk1lbnVcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+S/rueCvOaTjeS9nFxyXG4gICAgQ3VsdGl2YXRpb25JbmZvOiB7XHJcbiAgICAgICAgS2V5OiBcIkN1bHRpdmF0aW9uSW5mb1wiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwicmVzL01haW5NZW51L01haW5NZW51XCIsXHJcbiAgICAgICAgUGtnOiBcIk1haW5NZW51XCIsXHJcbiAgICAgICAgQ29tOlwiQ3VsdGl2YXRpb25JbmZvXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/po5jlrZdcclxuICAgIFRpcHNMYWJlbDoge1xyXG4gICAgICAgIEtleTogXCJUaXBzTGFiZWxcIixcclxuICAgICAgICBQa2dBZHJzOiBcIlB1YmxpYy9QdWJsaWNcIixcclxuICAgICAgICBQa2c6IFwiUHVibGljXCIsXHJcbiAgICAgICAgQ29tOlwiVGlwc0xhYmVsXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/po5jlrZdcclxuICAgIFJlc1Byb2R1Y3Rpb25UaXBzOiB7XHJcbiAgICAgICAgS2V5OiBcIlJlc1Byb2R1Y3Rpb25UaXBzXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJBZG9iZS9BZG9iZVwiLFxyXG4gICAgICAgIFBrZzogXCJBZG9iZVwiLFxyXG4gICAgICAgIENvbTpcIlJlc1Byb2R1Y3Rpb25UaXBzXCJcclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8v5rSe5bqcXHJcbiAgICBBZG9iZU1haW46IHtcclxuICAgICAgICBLZXk6IFwiQWRvYmVNYWluXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJBZG9iZS9BZG9iZVwiLFxyXG4gICAgICAgIFBrZzogXCJBZG9iZVwiLFxyXG4gICAgICAgIENvbTpcIkFkb2JlTWFpblwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5YWs55So56Gu6K6k56qX5Y+jXHJcbiAgICBQdWJsaWNDb25maXJtYXRpb246IHtcclxuICAgICAgICBLZXk6IFwiUHVibGljQ29uZmlybWF0aW9uXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJQdWJsaWMvUHVibGljXCIsXHJcbiAgICAgICAgUGtnOiBcIlB1YmxpY1wiLFxyXG4gICAgICAgIENvbTpcIlB1YmxpY0NvbmZpcm1hdGlvblwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5rSe5bqc5Y2H57qnXHJcbiAgICBBZG9iZVVwZ3JhZGU6IHtcclxuICAgICAgICBLZXk6IFwiQWRvYmVVcGdyYWRlXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJBZG9iZS9BZG9iZVwiLFxyXG4gICAgICAgIFBrZzogXCJBZG9iZVwiLFxyXG4gICAgICAgIENvbTpcIkFkb2JlVXBncmFkZVwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+WKoOWFpemXqOa0vlxyXG4gICAgSm9pblNlY3Q6IHtcclxuICAgICAgICBLZXk6IFwiSm9pblNlY3RcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIkpvaW5TZWN0XCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v5Yqg5YWl6Zeo5rS+XHJcbiAgICBTZWN0TWFpbjoge1xyXG4gICAgICAgIEtleTogXCJTZWN0TWFpblwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiU2VjdE1haW5cIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/pl6jmtL7kv67ngrzloZRcclxuICAgIFRyYWluVG93ZXI6IHtcclxuICAgICAgICBLZXk6IFwiVHJhaW5Ub3dlclwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiVHJhaW5Ub3dlclwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+mXqOa0vuS7u+WKoVxyXG4gICAgU2VjdFRhc2s6IHtcclxuICAgICAgICBLZXk6IFwiU2VjdFRhc2tcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIlNlY3RUYXNrXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/lrabkuaDlip/ms5VcclxuICAgIExlYXJuS29uZ2ZhOiB7XHJcbiAgICAgICAgS2V5OiBcIkxlYXJuS29uZ2ZhXCIsXHJcbiAgICAgICAgUGtnOiBcIlNlY3RcIixcclxuICAgICAgICBDb206XCJMZWFybktvbmdmYVwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+WtpuS5oOWKn+azlVxyXG4gICAgVXBncmFkZUtvbmdmYToge1xyXG4gICAgICAgIEtleTogXCJVcGdyYWRlS29uZ2ZhXCIsXHJcbiAgICAgICAgUGtnOiBcIlNlY3RcIixcclxuICAgICAgICBDb206XCJVcGdyYWRlS29uZ2ZhXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/op5LoibJcclxuICAgIFBsYXllck1haW46IHtcclxuICAgICAgICBLZXk6IFwiUGxheWVyTWFpblwiLFxyXG4gICAgICAgIFBrZzogXCJQbGF5ZXJcIixcclxuICAgICAgICBDb206XCJQbGF5ZXJNYWluXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v6KeS6Imy5bGe5oCnXHJcbiAgICBQbGF5ZXJBdHRyaWJ1dGlvbjoge1xyXG4gICAgICAgIEtleTogXCJQbGF5ZXJBdHRyaWJ1dGlvblwiLFxyXG4gICAgICAgIFBrZzogXCJQbGF5ZXJcIixcclxuICAgICAgICBDb206XCJQbGF5ZXJBdHRyaWJ1dGlvblwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5aKe5Yqg5YKo54mp6KKL56m66Ze0XHJcbiAgICBBZGRCYWdOdW06IHtcclxuICAgICAgICBLZXk6IFwiQWRkQmFnTnVtXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIkFkZEJhZ051bVwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5L+u54K85biu5YqpXHJcbiAgICBDdWx0aXZhdGlvbkVmZmljaWVuY3k6IHtcclxuICAgICAgICBLZXk6IFwiQ3VsdGl2YXRpb25FZmZpY2llbmN5XCIsXHJcbiAgICAgICAgUGtnOiBcIk1haW5NZW51XCIsXHJcbiAgICAgICAgQ29tOlwiQ3VsdGl2YXRpb25FZmZpY2llbmN5XCJcclxuICAgIH0sXHJcblxyXG4gICAgLy9HTeWKoOeJqeWTgVxyXG4gICAgR21BZGRCYWdJdGVtOiB7XHJcbiAgICAgICAgS2V5OiBcIkdtQWRkQmFnSXRlbVwiLFxyXG4gICAgICAgIFBrZzogXCJQbGF5ZXJcIixcclxuICAgICAgICBDb206XCJHbUFkZEJhZ0l0ZW1cIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/ku5npgJTkuLvnlYzpnaJcclxuICAgIFJvYWRUb0RpZXR5TWFpbjoge1xyXG4gICAgICAgIEtleTogXCJSb2FkVG9EaWV0eU1haW5cIixcclxuICAgICAgICBQa2c6IFwiUm9hZFRvRGlldHlcIixcclxuICAgICAgICBDb206XCJSb2FkVG9EaWV0eU1haW5cIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/miJjmlpfov4fnqItcclxuICAgIEJhdHRsZUluZm86IHtcclxuICAgICAgICBLZXk6IFwiQmF0dGxlSW5mb1wiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIkJhdHRsZUluZm9cIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/miavojaHku5npgJRcclxuICAgIFN3ZWVwQ2hhcHRlcnM6IHtcclxuICAgICAgICBLZXk6IFwiU3dlZXBDaGFwdGVyc1wiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIlN3ZWVwQ2hhcHRlcnNcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mVh+WmluWhlFxyXG4gICAgTW9uc3RlclRvd2VyOiB7XHJcbiAgICAgICAgS2V5OiBcIk1vbnN0ZXJUb3dlclwiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIk1vbnN0ZXJUb3dlclwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6ZWH5aaW5aGU6aaW5p2A5qacXHJcbiAgICBGaXJzdEJsb29kUmFuazoge1xyXG4gICAgICAgIEtleTogXCJGaXJzdEJsb29kUmFua1wiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIkZpcnN0Qmxvb2RSYW5rXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/ku5nlj4vlnIhcclxuICAgIEZyaWVuZENpcmNsZToge1xyXG4gICAgICAgIEtleTogXCJGcmllbmRDaXJjbGVcIixcclxuICAgICAgICBQa2c6IFwiUm9hZFRvRGlldHlcIixcclxuICAgICAgICBDb206XCJGcmllbmRDaXJjbGVcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+S7memAlOaji+ebmFxyXG4gICAgQ2hlc3NNYXA6IHtcclxuICAgICAgICBLZXk6IFwiQ2hlc3NNYXBcIixcclxuICAgICAgICBQa2c6IFwiQ2hlc3NCb2FyZFwiLFxyXG4gICAgICAgIENvbTpcIkNoZXNzTWFwXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v6L2s55SfXHJcbiAgICBSZWJpcnRoOiB7XHJcbiAgICAgICAgS2V5OiBcIlJlYmlydGhcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJSZWJpcnRoXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/pl6jmtL7ol4/nu4/pmIHlhaXlj6NcclxuICAgIEppbmdMaWJFbnRyYW5jZToge1xyXG4gICAgICAgIEtleTogXCJKaW5nTGliRW50cmFuY2VcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIkppbmdMaWJFbnRyYW5jZVwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6Zeo5rS+6JeP57uP6ZiBXHJcbiAgICBKaW5nTGliOiB7XHJcbiAgICAgICAgS2V5OiBcIkppbmdMaWJcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIkppbmdMaWJcIlxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBVSUNvbmZpZ3tcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcbiAgICBwdWJsaWMgc3RhdGljIExvZ2luUGFja2FnZUxvYWRlZCA9IGZhbHNlOyAgIC8v5piv5ZCm5bey5Yqg6L2955m75b2VVUnljIVcclxuICAgIFxyXG4gICAgLy/nmbvlvZXliqDovb3nmoRVSeWMhVxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFVJUGtncyA9IFtcclxuICAgICAgICBcIkljb25zXCIsXHJcbiAgICAgICAgXCJQdWJsaWNcIixcclxuICAgICAgICBcIk1haW5NZW51XCIsXHJcbiAgICBdO1xyXG5cclxuICAgIC8v5b6u5L+h5bCP5ri45oiP5a2Q5YyFXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU3ViUGtncyA9IFtcclxuICAgICAgICBcInN1YkxpYnNcIixcclxuICAgIF07XHJcblxyXG4gICAgLy8gVUnmuLLmn5PliIblsYJcclxuICAgIHN0YXRpYyByZWFkb25seSBTb3J0aW5nT3JkZXIgPSB7XHJcbiAgICAgICAgLy/kuLvnlYzpnaLmjInpkq5cclxuICAgICAgICBNYWluVUk6IDEwMCxcclxuICAgICAgICAvLyDkv6Hmga/lkIzmraVcclxuICAgICAgICBNc2dTeW5jOiAxNTAsXHJcbiAgICAgICAgLy8g5Zy65pmv5Yqg6L29XHJcbiAgICAgICAgU2NlbmVMb2FkaW5nOiAyMDAsXHJcbiAgICAgICAgLy8g5paw5omL5byV5a+8XHJcbiAgICAgICAgTm92aWNlR3VpZGU6IDI1MCxcclxuICAgICAgICAvLyDmlrDlip/og73lvIDlkK9cclxuICAgICAgICBOZXdGdW5jdGlvbk9wZW46IDI2MCxcclxuICAgICAgICAvLyDkurrnianlr7nnmb1cclxuICAgICAgICBEaWFsb2c6IDMwMCxcclxuICAgICAgICAvLyDlvLnlh7rnqpflj6NcclxuICAgICAgICBQb3B1cDogMzUwLFxyXG4gICAgICAgIC8vIOWFqOWxj+WxleekulxyXG4gICAgICAgIEZ1bGxTY3JlZW5TaG93OiA0NTAsXHJcbiAgICAgICAgLy8g572R57uc5L+h5Y+3XHJcbiAgICAgICAgTmV0U2lnbmFsOiA1MDAsXHJcbiAgICAgICAgLy8g572R57uc5by55qGGXHJcbiAgICAgICAgTmV0RXJyb3I6IDU1MCxcclxuICAgICAgICAvLyDns7vnu5/lub/mkq1cclxuICAgICAgICBTeXN0ZW1Nc2c6IDYwMCxcclxuICAgICAgICAvLyDmtojmga/mj5DnpLpcclxuICAgICAgICBNc2dUaXBzOiA2NTAsXHJcbiAgICAgICAgLy8g54K55Ye754m55pWIXHJcbiAgICAgICAgQ2xpY2tFZmZlY3Q6IDcwMCxcclxuICAgICAgICAvLyDmnI3liqHlmajml7bpl7RcclxuICAgICAgICBTZXJ2ZXJUaW1lOiAxMDAwLFxyXG4gICAgICAgIC8vIGdt5oyH5LukXHJcbiAgICAgICAgR21PcmRlcjogMTAwMSxcclxuICAgIH07XHJcblxyXG4gICAgLy9TcGluZei3r+W+hFxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNwaW5lUGF0aCA9IHtcclxuICAgICAgICBZYW95YW86e1xyXG4gICAgICAgICAgICBMZWZ0OlwiU3BpbmUvdHV6aVwiLFxyXG4gICAgICAgICAgICBSaWdodDpcIlByZWZhYi90dXppXzJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIERpY2U6XCJTcGluZS9zcGluZV9zYWl6aVwiLFxyXG4gICAgICAgIFxyXG4gICAgICAgIE5hbnpodTp7XHJcbiAgICAgICAgICAgIExlZnQ6XCJTcGluZS9uYW56aHVcIixcclxuICAgICAgICAgICAgUmlnaHQ6XCJQcmVmYWIvbmFuemh1XzJcIixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBZdXNoZW5neWk6e1xyXG4gICAgICAgICAgICBMZWZ0OlwiU3BpbmUveXVzaGVuZ3lpXCIsXHJcbiAgICAgICAgICAgIFJpZ2h0OlwiUHJlZmFiL3l1c2hlbmd5aV8yXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgLy/lo7Dpn7NcclxuICAgIHN0YXRpYyByZWFkb25seSBTb3VuZFBhdGggPSB7XHJcbiAgICAgICAgQnV0dG9uQ2xpY2s6XCJ1aTovL1B1YmxpYy/ngrnlh7vmjInpkq5cIixcclxuICAgIH07XHJcblxyXG4gICAgLy/lvaLosaHlm77moIfphY3nva5cclxuICAgIHN0YXRpYyByZWFkb25seSBQb3J0cmFpdFBhdGggPSB7XHJcbiAgICAgICAgWWFveWFvOid1aTovL1B1YmxpYy/lpK3lpK1f5YWo6LqrJyxcclxuICAgIH07XHJcblxyXG4gICAgLy/lsI/lm77moIfphY3nva5cclxuICAgIHN0YXRpYyByZWFkb25seSBTbWFsbEljb25QYXRoID0ge1xyXG4gICAgICAgIFlhb3lhbzondWk6Ly9QdWJsaWMv5aSt5aSt5bCP5aS05YOPJyxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNoYXJlSW1hZ2VQYXRoID0ge1xyXG4gICAgICAgIEludml0ZUZyaWVuZDonaHR0cHM6Ly9tbW9jZ2FtZS5xcGljLmNuL3dlY2hhdGdhbWUvSENsb0tYcFloNEFJYXIyMWlhdkJIVXMxQmdTM2Y0dUdzbllYNWliS2R1T2lhckFkZ1RWOUd3SmtTdFJPUGpicmFrTC8wJyxcclxuICAgIH07XHJcblxyXG4gICAgLy9TcGluZeWKqOeUu+WIh+aNolxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNwaW5lU3RhdGUgPSB7XHJcbiAgICAgICAgWWFveWFvOntcclxuICAgICAgICAgICAgUnVuOlwicnVuXCIsXHJcbiAgICAgICAgICAgIFN0YW5kOlwic3RhbmRcIixcclxuICAgICAgICAgICAgSWRsZTE6XCJpZGxlMVwiLFxyXG4gICAgICAgICAgICBJZGxlMjpcImlkbGUyXCIsXHJcbiAgICAgICAgICAgIFRvdWNoMTpcInRvdWNoMVwiLFxyXG4gICAgICAgICAgICBUb3VjaDI6XCJ0b3VjaDJcIixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+W8uuWItuW8leWvvFxyXG4gICAgc3RhdGljIHJlYWRvbmx5IEd1aWRlck5hbWUgPSB7XHJcbiAgICAgICAgUm9sZU1lbnVHdWlkZTpcIlJvbGVNZW51R3VpZGVcIixcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIHJlYWRvbmx5IEZvbnRDb2xvciA9IHtcclxuICAgICAgICBGaWdodFJlY19NZTogJyNGRkZGMDAnLFxyXG4gICAgfTtcclxufSIsImV4cG9ydCAqIGZyb20gJy4vUmlnaWRPYmplY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL09iamVjdFByb3h5JztcclxuZXhwb3J0ICogZnJvbSAnLi9PYmplY3RTdGF0ZSc7XHJcbiIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vQ29yZS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgeyBPYmplY3RDb25maWcgfSBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdFByb3h5IHtcclxuICAgIHN0YXRpYyBjcmVhdGVIYW5kKCl7XHJcbiAgICAgICAgbGV0IGhhbmQgPSBNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZS5hZGRDaGlsZChcclxuICAgICAgICAgICAgbmV3IExheWEuTWVzaFNwcml0ZTNEKExheWEuUHJpbWl0aXZlTWVzaC5jcmVhdGVCb3goXHJcbiAgICAgICAgICAgICAgICBPYmplY3RDb25maWcuSEFORF9TSVpFLngsIFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0Q29uZmlnLkhBTkRfU0laRS55LCBcclxuICAgICAgICAgICAgICAgIE9iamVjdENvbmZpZy5IQU5EX1NJWkUuelxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICkgYXMgTGF5YS5NZXNoU3ByaXRlM0Q7XHJcbiAgICAgICAgdGhpcy5hZGRQaHlzaWNzKGhhbmQsIE9iamVjdENvbmZpZy5IQU5EX1NJWkUpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGFuZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlRGVzaygpe1xyXG4gICAgICAgIGxldCBkZXNrID0gTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUuYWRkQ2hpbGQoXHJcbiAgICAgICAgICAgIG5ldyBMYXlhLk1lc2hTcHJpdGUzRChMYXlhLlByaW1pdGl2ZU1lc2guY3JlYXRlQm94KFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0Q29uZmlnLkRFU0tfU0laRS54LCBcclxuICAgICAgICAgICAgICAgIE9iamVjdENvbmZpZy5ERVNLX1NJWkUueSwgXHJcbiAgICAgICAgICAgICAgICBPYmplY3RDb25maWcuREVTS19TSVpFLnpcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApIGFzIExheWEuTWVzaFNwcml0ZTNEO1xyXG4gICAgICAgIHRoaXMuYWRkUGh5c2ljcyhkZXNrLCBPYmplY3RDb25maWcuREVTS19TSVpFKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc2s7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldE9iaihrZXk6c3RyaW5nKXtcclxuICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbmZpZy5Qb29sVHlwZS5IYW5kOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hbmFnZXIuUG9vbE1hbmFnZXIuZ2V0T2JqQnlGdW5jKENvbmZpZy5Qb29sVHlwZS5IYW5kLCB0aGlzLmNyZWF0ZUhhbmQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLlBvb2xUeXBlLkRlc2s6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFuYWdlci5Qb29sTWFuYWdlci5nZXRPYmpCeUZ1bmMoQ29uZmlnLlBvb2xUeXBlLkRlc2ssIHRoaXMuY3JlYXRlRGVzay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFBoeXNpY3ModGFyZ2V0OkxheWEuU3ByaXRlM0QsIHNpemU6TGF5YS5WZWN0b3IzKXtcclxuICAgICAgICBpZighdGFyZ2V0IHx8ICFzaXplKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCByaWdpZEJvZHk6TGF5YS5SaWdpZGJvZHkzRCA9IHRhcmdldC5hZGRDb21wb25lbnQoTGF5YS5SaWdpZGJvZHkzRCk7Ly9SaWdpZGJvZHkzROWPr+S4jlN0YXRpY0NvbGxpZGVy5ZKMUmlnaWRCb2R5M0TkuqfnlJ/norDmkp5cclxuICAgICAgICByaWdpZEJvZHkuY29sbGlkZXJTaGFwZSA9IG5ldyBMYXlhLkJveENvbGxpZGVyU2hhcGUoc2l6ZS54LCBzaXplLnksIHNpemUueik7XHJcbiAgICAgICAgcmlnaWRCb2R5LmdyYXZpdHkgPSBMYXlhLlZlY3RvcjMuX1pFUk87XHJcbiAgICAgICAgcmlnaWRCb2R5LmlzVHJpZ2dlciA9IHRydWU7XHJcbiAgICAgICAgcmlnaWRCb2R5LmlzS2luZW1hdGljID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkU2NyaXB0KHJpZ2lkT2JqOkNvcmUuUmlnaWRPYmplY3QsIHNjcmlwdCl7XHJcbiAgICAgICAgaWYoIXJpZ2lkT2JqIHx8ICFzY3JpcHQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmlnaWRPYmouT2JqLmFkZENvbXBvbmVudChzY3JpcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGFuZ2VNb2RlbChvbGRNb2RlbDpMYXlhLlNwcml0ZTNELCBvbGRQYXRoOnN0cmluZywgbmV3UGF0aDpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCFvbGRNb2RlbCB8fCAhb2xkTW9kZWwgfHwgIW5ld1BhdGggfHwgb2xkUGF0aCA9PSBuZXdQYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKG9sZE1vZGVsKSB7XHJcbiAgICAgICAgICAgIE1hbmFnZXIuUG9vbE1hbmFnZXIucmVjb3ZlcihvbGRQYXRoLCBvbGRNb2RlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbW9kZWwgPSBNYW5hZ2VyLlBvb2xNYW5hZ2VyLmdldEl0ZW0obmV3UGF0aCk7XHJcbiAgICAgICAgaWYobW9kZWwgaW5zdGFuY2VvZiBMYXlhLk1lc2hTcHJpdGUzRCl7XHJcbiAgICAgICAgICAgIG9sZE1vZGVsID0gbW9kZWw7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIE1hbmFnZXIuU3Bhd25NYW5hZ2VyLkxvYWQzZE1vZGVsKG5ld1BhdGgsIChtZGF0YTpDb25maWcuTW9kZWxEYXRhU3RydWN0KT0+e1xyXG4gICAgICAgICAgICAgICAgb2xkTW9kZWwgPSBtZGF0YS5tc3AgYXMgTGF5YS5NZXNoU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9Db3JlL0NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RTdGF0ZXtcclxuICAgIFN0YXRlOnN0cmluZztcclxuICAgIE9uRW50ZXI6RnVuY3Rpb247XHJcbiAgICBPblVwZGF0ZTpGdW5jdGlvbjtcclxuICAgIE9uRXhpdDpGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTpzdHJpbmcsIG9uVXBkYXRlPzpGdW5jdGlvbiwgb25FbnRlcj86RnVuY3Rpb24sIG9uRXhpdD86RnVuY3Rpb24pe1xyXG4gICAgICAgIHRoaXMuU3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLk9uVXBkYXRlID0gb25VcGRhdGU7XHJcbiAgICAgICAgdGhpcy5PbkVudGVyID0gb25FbnRlcjtcclxuICAgICAgICB0aGlzLk9uRXhpdCA9IG9uRXhpdDtcclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGUoKXtcclxuICAgICAgICBpZih0aGlzLk9uVXBkYXRlKXtcclxuICAgICAgICAgICAgdGhpcy5PblVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vQ29yZS9Db3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmlnaWRPYmplY3R7XHJcbiAgICBwcml2YXRlIF9tb2RlbFBhdGg6c3RyaW5nO1xyXG4gICAgU3RhdGVMaXN0OkNvcmUuT2JqZWN0U3RhdGVbXTtcclxuICAgIFN0YXRlOk1hbmFnZXIuU3RhdGVCYXNlO1xyXG4gICAgT2JqOkxheWEuTWVzaFNwcml0ZTNEO1xyXG4gICAgUmlnaWQzRDpMYXlhLlJpZ2lkYm9keTNEO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9iajpMYXlhLk1lc2hTcHJpdGUzRCwgLi4uc3RhdGVzOkNvcmUuT2JqZWN0U3RhdGVbXSl7XHJcbiAgICAgICAgdGhpcy5PYmogPSBvYmo7XHJcbiAgICAgICAgdGhpcy5TdGF0ZSA9IG5ldyBNYW5hZ2VyLlN0YXRlQmFzZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFN0YXRlTGlzdCguLi5zdGF0ZXMpO1xyXG4gICAgICAgIHRoaXMuUmlnaWQzRCA9IG9iai5nZXRDb21wb25lbnQoTGF5YS5SaWdpZGJvZHkzRCk7XHJcbiAgICAgICAgaWYoIXRoaXMuUmlnaWQzRCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSaWdpZCBPYmplY3QgbWlzcyByaWdpZGJvZHkzZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBQb3NpdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLk9iai50cmFuc2Zvcm0ucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEN1clN0YXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuU3RhdGUuY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2NyaXB0KHNjcmlwdCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuT2JqLmdldENvbXBvbmVudChzY3JpcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNjcmlwdChzY3JpcHQpe1xyXG4gICAgICAgIGlmKCFzY3JpcHQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5PYmouYWRkQ29tcG9uZW50KHNjcmlwdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTW9kZWwocGF0aDpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCFwYXRoIHx8IHRoaXMuX21vZGVsUGF0aCA9PSBwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIENvcmUuT2JqZWN0UHJveHkuY2hhbmdlTW9kZWwodGhpcy5PYmosIHRoaXMuX21vZGVsUGF0aCwgcGF0aCk7XHJcbiAgICAgICAgdGhpcy5fbW9kZWxQYXRoID0gcGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VPYmooa2V5OnN0cmluZyl7XHJcbiAgICAgICAgTWFuYWdlci5Qb29sTWFuYWdlci5yZWNvdmVyKGtleSwgdGhpcy5PYmopO1xyXG4gICAgICAgIHRoaXMuT2JqID0gQ29yZS5PYmplY3RQcm94eS5nZXRPYmooa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbihwb3M6TGF5YS5WZWN0b3IzKXtcclxuICAgICAgICBpZih0aGlzLk9iailcclxuICAgICAgICAgICAgdGhpcy5PYmoudHJhbnNmb3JtLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTdGF0ZUxpc3QoLi4uc3RhdGVzOkNvcmUuT2JqZWN0U3RhdGVbXSl7XHJcbiAgICAgICAgdGhpcy5TdGF0ZUxpc3QgPSBzdGF0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdGUoc3RhdGU6c3RyaW5nKXtcclxuICAgICAgICBpZighc3RhdGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5TdGF0ZS5jaGFuZ2VTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdGUoKXtcclxuICAgICAgICBpZighQXJyYXkuaXNBcnJheSh0aGlzLlN0YXRlTGlzdCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5TdGF0ZUxpc3Quc29tZShzdD0+e1xyXG4gICAgICAgICAgICBpZihzdC5TdGF0ZSA9PSB0aGlzLkN1clN0YXRlKXtcclxuICAgICAgICAgICAgICAgIHN0LlVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vRGF0YUJhc2UnO1xyXG4iLCJpbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0IEdFdmVudCBmcm9tIFwiLi4vQ29tbW9uL0dFdmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBSZXFib2R5QmFzZXtcclxuICAgIEtleTpzdHJpbmc7XHJcbiAgICBNb2R1bGVDb2RlOiBudW1iZXI7XHJcbiAgICBSZXFDb2RlOiBudW1iZXI7XHJcbiAgICBTZXNzaW9uOiBzdHJpbmc7XHJcbiAgICBBY2NvdW50S2V5OiBzdHJpbmc7XHJcbiAgICBSZXFEYXRhOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IobW9kQ29kZTpudW1iZXIsIHJlcUNvZGU6bnVtYmVyLCBzZXNzaW9uPzpzdHJpbmcsIGFjY05hbWU/OnN0cmluZywgcmVxZGF0YT8pe1xyXG4gICAgICAgIGlmKHR5cGVvZihyZXFkYXRhKSA9PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgLy/lpoLlt7LovazmjaLliJnovazlm55KU09OXHJcbiAgICAgICAgICAgIHJlcWRhdGEgPSBKU09OLnBhcnNlKHJlcWRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5Nb2R1bGVDb2RlID0gbW9kQ29kZTtcclxuICAgICAgICB0aGlzLlJlcUNvZGUgPSByZXFDb2RlO1xyXG4gICAgICAgIHRoaXMuU2Vzc2lvbiA9IHNlc3Npb247XHJcbiAgICAgICAgdGhpcy5BY2NvdW50S2V5ID0gYWNjTmFtZTtcclxuICAgICAgICB0aGlzLlJlcURhdGEgPSByZXFkYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0YVN0cnVjdCBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlcntcclxuICAgIHByaXZhdGUgc3RhdGljIF9OZXRNZ3I6TWFuYWdlci5IdHRwTWFuYWdlcjtcclxuICAgIHByaXZhdGUgc3RhdGljIF9yZXFrZXlzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9odHRwTWdyOk1hbmFnZXIuSHR0cE1hbmFnZXI7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIHJlcUJvZHk6SHR0cFJlcWJvZHlCYXNlO1xyXG5cclxuICAgIHN0YXRpYyBpc1Jlc3BvbnNlZDpib29sZWFuO1xyXG4gICAgc3RhdGljIERpY2VOdW06bnVtYmVyO1xyXG5cclxuICAgIHN0YXRpYyBTZW5kUmVxKHJlcURhdGE/KXtcclxuICAgICAgICB0aGlzLnJlcUJvZHkuUmVxRGF0YSA9IHJlcURhdGE7XHJcbiAgICAgICAgdGhpcy5fTmV0TWdyID0gbmV3IE1hbmFnZXIuSHR0cE1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLl9OZXRNZ3IuQ29ubmVjdCgnJywgdGhpcy5yZXFCb2R5LCB0aGlzLm9uUmVzcG9uc2UuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldCBSZXFCb2R5KGJvZHkpe1xyXG4gICAgICAgIGlmKCF0aGlzLnJlcUJvZHkpXHJcbiAgICAgICAgICAgIHRoaXMucmVxQm9keSA9IGJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldCBEYXRhKGRhdGEpe31cclxuXHJcbiAgICBzdGF0aWMgb25Db25uZWN0RW5kKGRhdGE6Q29uZmlnLlJlc3BEYXRhU3RydWN0KXt9XHJcblxyXG4gICAgc3RhdGljIG9uUmVzcG9uc2UoZGF0YTpDb25maWcuUmVzcERhdGFTdHJ1Y3Qpe1xyXG4gICAgICAgIGlmKGRhdGEgJiYgZGF0YS5SZXNwRGF0YSAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5EYXRhID0gZGF0YS5SZXNwRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/pooTnlZnmjqXlj6PvvIzpgb/lhY3lkI7nq6/msqHmnInov5Tlm57mlbDmja5cclxuICAgICAgICB0aGlzLm9uQ29ubmVjdEVuZChkYXRhKTtcclxuICAgICAgICB0aGlzLnJlcUJvZHkuUmVxRGF0YSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBOZXRNZ3IoKXtcclxuICAgICAgICBpZighdGhpcy5fTmV0TWdyKXtcclxuICAgICAgICAgICAgdGhpcy5fTmV0TWdyID0gbmV3IE1hbmFnZXIuSHR0cE1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9OZXRNZ3I7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIENvbm5lY3QocmVxa2V5OnN0cmluZywgcmVxYm9keTpIdHRwUmVxYm9keUJhc2UsIGNhbGxiYWNrPzpGdW5jdGlvbiwgaXNTaG93TG9hZGluZz8sIElzR20/OmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuTmV0TWdyLkNvbm5lY3QocmVxa2V5LCByZXFib2R5LCB0aGlzLk9uSHR0cFJlcXVlc3RDb21wbGV0ZS5iaW5kKHRoaXMpLCBpc1Nob3dMb2FkaW5nLCBJc0dtKTtcclxuICAgICAgICB0aGlzLl9yZXFrZXlzLnB1c2gocmVxa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgT25IdHRwUmVxdWVzdENvbXBsZXRlKGRhdGE6Q29uZmlnLlJlc3BEYXRhU3RydWN0LCByZXFrZXk6c3RyaW5nLCByZXFEYXRhKXtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZXZSZXFCb2R5IGV4dGVuZHMgSHR0cFJlcWJvZHlCYXNlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pc0Jhc2VCb2R5SW5pdGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pc0JvZHlJbml0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy/or7fmsYLkvZNcclxuICAgIHN0YXRpYyBDb25maWdCb2R5Okh0dHBSZXFib2R5QmFzZTsgICAvL+mFjee9rlxyXG4gICAgc3RhdGljIExvZ2luQm9keTpIdHRwUmVxYm9keUJhc2U7ICAgIC8v55m75b2VXHJcbiAgICBzdGF0aWMgVXBncmFkZUJvZHk6SHR0cFJlcWJvZHlCYXNlOyAgICAvL+WNh+mYtlxyXG4gICAgc3RhdGljIEFkb2JlVWlJbmZvQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzlsZXnpLpcclxuICAgIHN0YXRpYyBBZG9iZUhpcmVXb3JrZXJCb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOaLm+WLn+S7meS7hlxyXG4gICAgc3RhdGljIEFkb2JlQWRkV29ya2VyQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzmt7vliqDlt6XkvZzku5nku4ZcclxuICAgIHN0YXRpYyBBZG9iZVJlZHVjZVdvcmtlckJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc5YeP5bCR5bel5L2c5LuZ5LuGXHJcbiAgICBzdGF0aWMgQWRvYmVVcFN0b25lQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzngbXnn7PljYfnuqdcclxuICAgIHN0YXRpYyBBZG9iZVVwRm9vZEJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc6aOf54mp5Y2H57qnXHJcbiAgICBzdGF0aWMgQWRvYmVVcFdvb2RCb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOacqOadkOWNh+e6p1xyXG4gICAgc3RhdGljIEFkb2JlVXBJcm9uQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzpmajpk4HljYfnuqdcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGlzSW5pdGVkKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQm9keUluaXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RDb2RlOm51bWJlciwgcmVxQ29kZTpudW1iZXIsIHJlcURhdGE/KXtcclxuICAgICAgICBpZighTG9naW5EYXRhLlNlc3Npb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxzIGxvZ2luIGZpcnN0Jyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdXBlcihtb2RDb2RlLCByZXFDb2RlLCBMb2dpbkRhdGEuU2Vzc2lvbiwgTG9naW5EYXRhLkFjY291bnRLZXksIHJlcURhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG50eXBlIERhbW9uSW5mb1R5cGUgPSB7XHJcbiAgICBcIkNoYWxsZW5nZUxldmVsXCI6IG51bWJlcixcclxufVxyXG5cclxuLy/njqnlrrbmlbDmja5cclxuZXhwb3J0IGNsYXNzIFBsYXllckRhdGEge1xyXG4gICAgc3RhdGljIE5pa2VOYW1lOnN0cmluZztcclxuICAgIHN0YXRpYyBBdmF0YXI6c3RyaW5nO1xyXG4gICAgc3RhdGljIFBvaW50ID0gMDtcclxuXHJcbiAgICBzdGF0aWMgc2V0IERhdGEoZGF0YSl7XHJcbiAgICAgICAgaWYobnVsbCAhPSBkYXRhLk5pY2tOYW1lKXtcclxuICAgICAgICAgICAgdGhpcy5OaWtlTmFtZSA9IGRhdGEuTmlja05hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihudWxsICE9IGRhdGEuQXZhdGFyKXtcclxuICAgICAgICAgICAgdGhpcy5BdmF0YXIgPSBkYXRhLkF2YXRhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdFdmVudC5EaXNwYXRjaChDb21tb24uRGF0YVBsYXllckVpZC5SZWZyZXNoZWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WIhuS6q+ivreWPpVxyXG5pbnRlcmZhY2UgU2hhcmVEZXRhaWwge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgU2hhcmVUeXBlOm51bWJlcjsgICAgICAgICAgICAvL+WIhuS6q+exu+WeizHmmI7kv6HniYdcclxuICAgIFNoYXJlV29yZDpzdHJpbmcgIC8v5YiG5Lqr6K+t5Y+lXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgU2hhcmVXb3JkID0ge1xyXG4gICAgXCJDYXJkV29yZHNcIjogbmV3IEFycmF5PFNoYXJlRGV0YWlsPigpLCAgICAgICAgLy/mmI7kv6HniYfliIbkuqvor63lj6VcclxuICAgIFwiSGFtc3RlcldvcmRzXCI6IG5ldyBBcnJheTxTaGFyZURldGFpbD4oKSwgICAgIC8v5omT5Zyw6byg5YiG5Lqr6K+t5Y+lXHJcbiAgICBcIkNvaW5Xb3Jkc1wiOiBuZXcgQXJyYXk8U2hhcmVEZXRhaWw+KCksICAgICAgICAvL+aOpemHkeW4geWIhuS6q+ivreWPpVxyXG4gICAgXCJPdGhlcldvcmRzXCI6IG5ldyBBcnJheTxTaGFyZURldGFpbD4oKSAgICAgICAgLy/lhbbku5bliIbkuqvor63lj6VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFNoYXJlV29yZChzaGFyZVR5cGU/KXtcclxuICAgIGxldCByYW5kID0gMDtcclxuICAgIHN3aXRjaCAoc2hhcmVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBDb25maWcuU2hhcmVXb3JkRW51bS5DYXJkV29yZHM6XHJcbiAgICAgICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTaGFyZVdvcmQuQ2FyZFdvcmRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTaGFyZVdvcmQuQ2FyZFdvcmRzW3JhbmRdLlNoYXJlV29yZDtcclxuICAgIFxyXG4gICAgICAgIGNhc2UgQ29uZmlnLlNoYXJlV29yZEVudW0uSGFtc3RlcldvcmRzOlxyXG4gICAgICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogU2hhcmVXb3JkLkhhbXN0ZXJXb3Jkcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gU2hhcmVXb3JkLkhhbXN0ZXJXb3Jkc1tyYW5kXS5TaGFyZVdvcmQ7XHJcblxyXG4gICAgICAgIGNhc2UgQ29uZmlnLlNoYXJlV29yZEVudW0uQ29pbldvcmRzOlxyXG4gICAgICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogU2hhcmVXb3JkLkNvaW5Xb3Jkcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gU2hhcmVXb3JkLkNvaW5Xb3Jkc1tyYW5kXS5TaGFyZVdvcmQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTaGFyZVdvcmQuT3RoZXJXb3Jkcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gU2hhcmVXb3JkLk90aGVyV29yZHNbcmFuZF0uU2hhcmVXb3JkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+mFjee9ruaVsOaNrlxyXG5leHBvcnQgY2xhc3MgQ29uZmlnRGF0YSBleHRlbmRzIERhdGFTdHJ1Y3R7XHJcbiAgICBzdGF0aWMgc2V0IERhdGEocmVzcF9kYXRhOkNvbmZpZy5Db25maWdEYXRhUGFyYW1bXSl7XHJcbiAgICAgICAgc2V0Q29uZmlnRGF0YShyZXNwX2RhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDb25maWdEYXRhKHJlc3BfZGF0YTpDb25maWcuQ29uZmlnRGF0YVBhcmFtW10pe1xyXG4gICAgY29uc29sZS5sb2coJ+mFjee9ruaVsOaNru+8micsIHJlc3BfZGF0YSk7XHJcbiAgICBpZighcmVzcF9kYXRhKSByZXR1cm47XHJcblxyXG4gICAgQ29uZmlnLkRhdGFDb25maWcuaW5zdGFuY2Uuc2F2ZUNvbmZpZ1ZlcnNpb24ocmVzcF9kYXRhKTtcclxuICAgIGZvcihsZXQgaSBpbiByZXNwX2RhdGEpe1xyXG4gICAgICAgIGlmKHJlc3BfZGF0YVtpXSl7XHJcbiAgICAgICAgICAgIENvbmZpZy5EYXRhQ29uZmlnLmluc3RhbmNlLnN0b3JlQ29uZmlnKHJlc3BfZGF0YVtpXS5UYWJsZUlkLCByZXNwX2RhdGFbaV0uRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIENvbmZpZy5EYXRhQ29uZmlnLklzQ29uZmlnTG9hZGVkID0gdHJ1ZTtcclxuICAgIEdFdmVudC5EaXNwYXRjaChDb21tb24uU2NlbmVMb2dpbkVpZC5Db25maWdMb2FkZWQpO1xyXG59XHJcblxyXG4vL+eZu+W9leaVsOaNrlxyXG5leHBvcnQgY2xhc3MgTG9naW5EYXRhIGV4dGVuZHMgRGF0YVN0cnVjdHtcclxuICAgIHN0YXRpYyBTZXNzaW9uOnN0cmluZztcclxuICAgIHN0YXRpYyBBY2NvdW50S2V5OnN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGljIF9pc0xvZ2luZWQgPSBmYWxzZTsgIC8v5piv5ZCm5bey55m75b2VXHJcblxyXG4gICAgc3RhdGljIGdldCBJc0xvZ2luZWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNMb2dpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQgRGF0YShkYXRhOkNvbmZpZy5Mb2dpblJlc3BEYXRhU3RydWN0KXtcclxuICAgICAgICBpZihkYXRhLkFjY291bnRCYXNlSW5mbyl7XHJcbiAgICAgICAgICAgIHRoaXMuU2Vzc2lvbiA9IGRhdGEuQWNjb3VudEJhc2VJbmZvLlZlcmlmeVNlc3Npb247XHJcbiAgICAgICAgICAgIHRoaXMuQWNjb3VudEtleSA9IGRhdGEuQWNjb3VudEJhc2VJbmZvLkFjY291bnRLZXk7XHJcbiAgICAgICAgICAgIFBsYXllckRhdGEuRGF0YSA9IGRhdGEuQWNjb3VudEJhc2VJbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZGF0YS5YaXV3ZWlJbmZvKXtcclxuICAgICAgICAgICAgUGxheWVyRGF0YS5EYXRhID0gZGF0YS5YaXV3ZWlJbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRoaXMuX2lzTG9naW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9naW5lZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlNjZW5lTG9naW5FaWQuTG9naW5TdWNjZXNzKTtcclxuICAgIH1cclxufVxyXG5cclxuLy/ljYfnuqfmlbDmja5cclxuZXhwb3J0IGNsYXNzIFVwZ3JhZGVEYXRhIGV4dGVuZHMgRGF0YVN0cnVjdHtcclxuICAgIHN0YXRpYyBzZXQgRGF0YShyZXNwRGF0YSl7XHJcbiAgICAgICAgaWYocmVzcERhdGEuWGl1d2VpSW5mbyl7XHJcbiAgICAgICAgICAgIFBsYXllckRhdGEuRGF0YSA9IHJlc3BEYXRhLlhpdXdlaUluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLkNoYXJhY3RlckN1bHRpdmF0aW9uRWlkLlVwZ3JhZGUsIHJlc3BEYXRhLlVwT2spO1xyXG4gICAgfVxyXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcblxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9NzUwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTMzNDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwidmVydGljYWxcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cIlwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcblxyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsIlxyXG5pbXBvcnQgeyBEYXRhQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnL0RhdGFDb25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gJy4vRGF0YS9EYXRhJztcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgTG9naWMgZnJvbSBcIi4vTG9naWMvTG9naWNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgIGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVyIHtcclxuXHRwcm90ZWN0ZWQgc3RhdGljIF9pbnN0OkdhbWVTY2VuZTtcclxuXHRwdWJsaWMgbG9hZGluZ1VpUGFja2FnZTpzdHJpbmc7XHJcblxyXG5cdHN0YXRpYyBnZXQgaW5zdCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX2luc3Q7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25Bd2FrZSgpe1xyXG5cdFx0R2FtZVNjZW5lLl9pbnN0ID0gdGhpcztcclxuXHRcdHRoaXMub3duZXIuYWRkQ29tcG9uZW50KExvZ2ljLkdyYWJMb2dpYylcclxuXHJcblx0XHQvLyB0aGlzLmluaXQoKTtcclxuXHRcdC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Db25maWdMb2FkZWQsIHRoaXMub25Db25maWdMb2FkZWQpO1xyXG5cdFx0Ly8gdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLlNlcnZpY2VDaG9vc2VkLCB0aGlzLm9uVmVyc2lvbkNoZWNrZWQpO1xyXG5cdFx0Ly8gdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkxvZ2luU3VjY2VzcywgdGhpcy5vbkxvZ2luZWQpO1xyXG5cdFx0Ly8gdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLlNpbVByb2dyZXNzRW5kLCB0aGlzLm9wZW5NYWluVWkpO1xyXG5cdH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpe1xyXG5cdFx0Ly8gQ29tbW9uLkpzQ2FsbEphdmEoXCJkZW1vLkpTQnJpZGdlXCIsIFwidGVzdFN0cmluZ1wiLCBcIkhlbGxvIGJhYnkhXCIpO1xyXG5cdFx0Ly/muLjmiI/lvIDlj5HniYjmnKxcclxuXHRcdE1hbmFnZXIuVmVyc2lvbk1hbmFnZXIuVmVyc2lvbiA9IENvbmZpZy5WZXJzaW9uQ29uZmlnLkRldmVsb3A7XHJcblxyXG5cdFx0Ly/liqjmgIHliqDovb1cclxuXHRcdGlmKExheWEuQnJvd3Nlci5vbk1pbmlHYW1lKXtcclxuXHRcdFx0TGF5YS5VUkwuYmFzZVBhdGggPSBcImh0dHBzOi8vNzA2LmxpZ2h0cGF3LmNuL2g1Yy9yZXNDYWNoZS9EaWV0eVJvYWQvXCI7XHRcclxuXHRcdFx0Ly8gTGF5YS5VUkwuYmFzZVBhdGggPSBcImh0dHBzOi8vczMuY24tbm9ydGh3ZXN0LTEuYW1hem9uYXdzLmNvbS5jbi9oNWNsaWVudC9EZW1vcy9EcmVhbUNoZXNzXCI7XHJcblx0XHRcdExheWEuTWluaUFkcHRlci5uYXRpdmVmaWxlcyA9ICBbXHJcblx0XHRcdFx0XCJsaWJzXCIsXHJcblx0XHRcdFx0XCJyZXMvY29uZmlnXCIsXHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmluaXRGYWlyeWd1aSgpO1xyXG5cdFx0dGhpcy5sb2FkTG9naW5VaVJlcygpO1xyXG5cdFx0Ly8gQ29tbW9uLmxvYWRBbGxTdWJwYWNrYWdlcyh0aGlzLCB0aGlzLmxvYWRMb2dpblVpUmVzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdEZhaXJ5Z3VpKCl7XHJcblx0XHRmZ3VpLlVJQ29uZmlnLnBhY2thZ2VGaWxlRXh0ZW5zaW9uID0gXCJ0eHRcIjtcclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQoZmd1aS5HUm9vdC5pbnN0LmRpc3BsYXlPYmplY3QpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2FkTG9naW5VaVJlcygpe1xyXG5cdFx0Q29tbW9uLlJlc291cmNlLmxvYWQoQ29uZmlnLmxvZ2luUmVzVXJscywgdGhpcywgdGhpcy5vbkxvZ2luZ1Jlc0xvYWRlZCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uTG9naW5nUmVzTG9hZGVkKCl7XHJcblx0XHR0aGlzLnByZUxvZ2luKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRSZXMoKXtcclxuXHRcdENvbW1vbi5SZXNvdXJjZS5sb2FkKENvbmZpZy51cmxzLCB0aGlzLCB0aGlzLm9uUmVzTG9hZGVkLCB0aGlzLm9uTG9hZGluZyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uTG9hZGluZyhwcm9ncmVzczogbnVtYmVyKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuWKoOi9vei/m+W6pjogXCIgKyBwcm9ncmVzcyk7XHJcblx0XHQvLyBNYW5hZ2VyLkxvYWRpbmdQcm9ncmVzc01hbmFnZXIuSW5zdC5zaG93VWlQcm9ncmVzcyhwcm9ncmVzcyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uUmVzTG9hZGVkKGluZm8pe1xyXG5cdFx0aWYoIWluZm8pe1xyXG5cdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcignTG9hZCBmYWlyeWd1aSBwYWNrYWdlIGZhaWwnKTtcclxuXHRcdH1cclxuXHJcblx0XHQvL+WFrOeUqOWMhVxyXG5cdFx0Q29uZmlnLlVJQ29uZmlnLlVJUGtncy5mb3JFYWNoKHBrZz0+e1xyXG5cdFx0XHRDb21tb24uUmVzb3VyY2UuYWRkVWlQYWNrYWdlKHBrZyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRDb25maWcuVUlDb25maWcuTG9naW5QYWNrYWdlTG9hZGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uU2NlbmVMb2dpbkVpZC5QYWNrYWdlTG9hZGVkKTtcclxuXHRcdHRoaXMubG9hZENvbmZpZygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwcmVMb2dpbigpe1xyXG5cdFx0dGhpcy5vcGVuTG9naW5VSSgpO1xyXG5cdFx0dGhpcy5jaGVja1ZlcnNpb24oKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2hlY2tWZXJzaW9uKCl7XHJcblx0XHRzd2l0Y2ggKE1hbmFnZXIuVmVyc2lvbk1hbmFnZXIuVmVyc2lvbikge1xyXG5cdFx0XHRjYXNlIENvbmZpZy5WZXJzaW9uQ29uZmlnLkRldmVsb3A6XHJcblx0XHRcdFx0dGhpcy5vcGVuQ2hvb3NlU2VydmljZVVpKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQ29uZmlnLlZlcnNpb25Db25maWcuUmVsZWFzZTpcclxuXHRcdFx0XHQvL+WvueWklueJiOacrOeZu+W9leWklue9kVxyXG5cdFx0XHRcdENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9IENvbmZpZy5OZXRDb25maWcuSHR0cFJlcXVlc3RVcmw7XHJcblxyXG5cdFx0XHRcdC8vIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG5cdFx0XHRcdC8vIFx0V3hVdGlscy5Mb2dpbih0cnVlKTtcclxuXHRcdFx0XHQvLyB9ZWxzZXtcclxuXHRcdFx0XHQvLyBcdHRoaXMub25WZXJzaW9uQ2hlY2tlZCgpO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25WZXJzaW9uQ2hlY2tlZCgpe1xyXG5cdFx0dGhpcy5sb2FkUmVzKCk7XHJcblx0XHQvLyB0aGlzLmxvZ2luR2FtZSgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvcGVuTG9naW5VSSgpe1xyXG5cdFx0TWFuYWdlci5Mb2FkaW5nUHJvZ3Jlc3NNYW5hZ2VyLkluc3Quc2hvd1VpUHJvZ3Jlc3MoNSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9wZW5DaG9vc2VTZXJ2aWNlVWkoKXtcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChDb25maWcuVmlld0tpdC5DaG9vc2VTZXJ2aWNlLktleSk7XHJcblx0fVxyXG5cclxuXHRsb2FkQ29uZmlnKCl7XHJcblx0XHQvL+aLieWPlumFjee9rlxyXG5cdFx0Ly8gRGF0YS5Db25maWdEYXRhLlNlbmRSZXEoQ29uZmlnLkRhdGFDb25maWcubG9jYWxDb25maWdzKTtcclxuXHRcdERhdGEuQ29uZmlnRGF0YS5TZW5kUmVxKFtdKTtcclxuXHJcblx0XHQvL+aLieWPluacrOWcsOmFjee9ru+8jOebruWJjeeUseWQjuerr+WPkemAge+8jOaaguW8g+eUqFxyXG5cdFx0Ly8gRGF0YUNvbmZpZy5pbnN0YW5jZS5pbml0Q29uZmlnKHRoaXMuY3JlYXRlMmRTY2VuZS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Db25maWdMb2FkZWQoKXtcclxuXHRcdHRoaXMubG9naW5HYW1lKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvZ2luR2FtZSgpIHtcclxuXHRcdGlmKENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9PSBDb25maWcuTmV0Q29uZmlnLkxvY2FsUmVxdWVzdFVybCl7XHJcblx0XHRcdHRoaXMudGVzdExvZ2luKCk7XHJcblx0XHRcdC8vIFd4VXRpbHMuTG9naW4odHJ1ZSk7XHJcblx0XHR9ZWxzZSBpZihDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwgPT0gQ29uZmlnLk5ldENvbmZpZy5Mb2NhbFdlY2hhdFJlcXVlc3RVcmwgJiYgQ29tbW9uLmlzT25XZWl4aW4oKSl7XHJcblx0XHRcdC8vIFd4VXRpbHMuTG9naW4odHJ1ZSk7XHJcblx0XHR9ZWxzZSBpZihDb21tb24uaXNPbldlaXhpbigpKXtcclxuXHRcdFx0Ly8gV3hVdGlscy5Mb2dpbih0cnVlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnRlc3RMb2dpbigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGVzdExvZ2luKCl7XHJcblx0XHRsZXQgYWNjOnN0cmluZztcclxuXHRcdGxldCB0ZW1wTmFtZSA9IENvbmZpZy5OZXRDb25maWcuVGVtcE5hbWU7XHJcblx0XHRpZih0ZW1wTmFtZSl7XHJcblx0XHRcdGFjYyA9IHRlbXBOYW1lO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdC8v6ZqP5py65biQ5Y+355m75b2V77yM5pa55L6/5rWL6K+VXHJcblx0XHRcdGFjYyA9IFwidGVtcFwiICsgTWF0aC5yYW5kb20oKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcmVxZGF0YSA9IG5ldyBDb25maWcuTG9naW5SZXFEYXRhKGFjYyk7XHJcblx0XHREYXRhLkxvZ2luRGF0YS5TZW5kUmVxKHJlcWRhdGEpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkxvZ2luZWQoKXtcclxuXHRcdHRoaXMub3Blbk1haW5VaSgpO1xyXG5cdH1cclxuXHJcblx0b3Blbk1haW5VaSgpe1xyXG5cdFx0Ly8gaWYoIUNvbmZpZy5VSUNvbmZpZy5Mb2dpblBhY2thZ2VMb2FkZWQgfHwgIUNvbmZpZy5EYXRhQ29uZmlnLklzQ29uZmlnTG9hZGVkKSB7XHJcblx0XHQvLyBcdExheWEudGltZXIub25jZSg1MDAsIHRoaXMsIHRoaXMub3Blbk1haW5VaSk7XHJcblx0XHQvLyBcdHJldHVybjtcclxuXHRcdC8vIH07XHJcblxyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUVudGVyRWlkLk1haW5NZW51KTtcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChDb25maWcuVmlld0tpdC5NYWluTWVudS5LZXkpO1xyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpc2lvblNjcmlwdEJhc2UgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG5cdHB1YmxpYyBraW5lbWF0aWNTcHJpdGU6TGF5YS5TcHJpdGUzRDtcclxuXHRwcm90ZWN0ZWQgX2lzSGl0ID0gZmFsc2U7XHJcblxyXG5cdGdldCBJc0hpdCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lzSGl0O1xyXG5cdH1cclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhclN0YXR1cygpe1xyXG5cdFx0dGhpcy5faXNIaXQgPSBmYWxzZTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlckVudGVyKG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHRpZiAob3RoZXIub3duZXIgPT09IHRoaXMua2luZW1hdGljU3ByaXRlKXtcclxuXHRcdFx0dGhpcy5faXNIaXQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyU3RheShvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdFxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyRXhpdChvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25FbnRlcihjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdFx0aWYgKGNvbGxpc2lvbi5vdGhlci5vd25lciA9PT0gdGhpcy5raW5lbWF0aWNTcHJpdGUpe1xyXG5cdFx0XHR0aGlzLl9pc0hpdCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvblN0YXkoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uRXhpdChjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNrQ29sbGlzaW9uU2NyaXB0IGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVyIHtcclxuXHRwdWJsaWMga2luZW1hdGljU3ByaXRlOkxheWEuU3ByaXRlM0Q7XHJcblx0X2lzSGl0ID0gZmFsc2U7XHJcblxyXG5cdGdldCBJc0hpdCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lzSGl0O1xyXG5cdH1cclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhclN0YXR1cygpe1xyXG5cdFx0dGhpcy5faXNIaXQgPSBmYWxzZTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlckVudGVyKG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHRpZiAob3RoZXIub3duZXIgPT09IHRoaXMua2luZW1hdGljU3ByaXRlKXtcclxuXHRcdFx0dGhpcy5faXNIaXQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyU3RheShvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdFxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyRXhpdChvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25FbnRlcihjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdFx0aWYgKGNvbGxpc2lvbi5vdGhlci5vd25lciA9PT0gdGhpcy5raW5lbWF0aWNTcHJpdGUpe1xyXG5cdFx0XHR0aGlzLl9pc0hpdCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvblN0YXkoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uRXhpdChjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vQ29tbW9uL1V0aWxzXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL0NvcmUvQ29yZVwiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIExvZ2ljIGZyb20gXCIuL0xvZ2ljXCI7XHJcblxyXG5sZXQga25vY2tfdGltZSA9IDA7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JhYkxvZ2ljIGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVyIHtcclxuICAgIElzSW5pdGVkID0gZmFsc2U7XHJcbiAgICBWZGlyID0gbmV3IExheWEuVmVjdG9yMygpO1xyXG4gICAgR1NjZW5lOkxheWEuU2NlbmUzRDtcclxuICAgIEhhbmRTdGF0ZTpzdHJpbmc7XHJcbiAgICBEZXNrQ2xhc3M6Q29yZS5SaWdpZE9iamVjdDtcclxuICAgIEhhbmRDbGFzczpDb3JlLlJpZ2lkT2JqZWN0O1xyXG4gICAgZGVza1NjcmlwdDpMb2dpYy5EZXNrQ29sbGlzaW9uU2NyaXB0O1xyXG4gICAgaGFuZFNjcmlwdDpMb2dpYy5IYW5kQ29sbGlzaW9uU2NyaXB0O1xyXG4gICAgcHJpdmF0ZSB0aW1lTGluZTpMYXlhLlRpbWVMaW5lID0gbmV3IExheWEuVGltZUxpbmUoKTtcclxuXHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgdGhpcy5HU2NlbmUgPSBNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZSBhcyBMYXlhLlNjZW5lM0Q7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3MgPSBuZXcgQ29yZS5SaWdpZE9iamVjdChcclxuICAgICAgICAgICAgQ29yZS5PYmplY3RQcm94eS5nZXRPYmooQ29uZmlnLlBvb2xUeXBlLkRlc2spLFxyXG4gICAgICAgICAgICBuZXcgQ29yZS5PYmplY3RTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9GT1JXQVJELCB0aGlzLmRlc2tEb3duLmJpbmQodGhpcykpLFxyXG4gICAgICAgICAgICBuZXcgQ29yZS5PYmplY3RTdGF0ZShDb25maWcuU3RhdGVDb25maWcuREVTS19MRUFWRSwgdGhpcy5kZXNrTGVhdmUuYmluZCh0aGlzKSksXHJcbiAgICAgICAgICAgIG5ldyBDb3JlLk9iamVjdFN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5ERVNLX0VOVEVSLCB0aGlzLmRlc2tFbnRlci5iaW5kKHRoaXMpKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLnNldFBvc2l0aW9uKENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MpO1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzID0gbmV3IENvcmUuUmlnaWRPYmplY3QoXHJcbiAgICAgICAgICAgIENvcmUuT2JqZWN0UHJveHkuZ2V0T2JqKENvbmZpZy5Qb29sVHlwZS5IYW5kKSxcclxuICAgICAgICAgICAgbmV3IENvcmUuT2JqZWN0U3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLk1PVkVfRk9SV0FSRCwgdGhpcy5oYW5kRm9yd2FyZC5iaW5kKHRoaXMpKSxcclxuICAgICAgICAgICAgbmV3IENvcmUuT2JqZWN0U3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLk1PVkVfQkFDSywgdGhpcy5oYW5kQmFjay5iaW5kKHRoaXMpKSxcclxuICAgICAgICAgICAgbmV3IENvcmUuT2JqZWN0U3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLkJBQ0tfUEFTU0VELCB0aGlzLmhhbmRCYWNrLmJpbmQodGhpcykpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3Muc2V0UG9zaXRpb24oQ29uZmlnLk9iamVjdENvbmZpZy5IQU5EX1BPUyk7XHJcbiAgICAgICAgdGhpcy5hZGRDb2xsaXNpb25TY3JpcHQoKTtcclxuICAgICAgICAvLyBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMua25vY2tPbmNlKTtcclxuICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMubW92ZUhhbmQpO1xyXG4gICAgICAgIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5ET1VCTEVfQ0xJQ0ssIHRoaXMsIHRoaXMucmVzdGFydCk7XHJcblxyXG4gICAgICAgIHRoaXMuSXNJbml0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVzZXRWZWMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVRpbWVMaW5lKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGVzaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENvbGxpc2lvblNjcmlwdCgpe1xyXG4gICAgICAgIHRoaXMuZGVza1NjcmlwdCA9IHRoaXMuRGVza0NsYXNzLmFkZFNjcmlwdChMb2dpYy5EZXNrQ29sbGlzaW9uU2NyaXB0KSBhcyBMb2dpYy5EZXNrQ29sbGlzaW9uU2NyaXB0O1xyXG4gICAgICAgIHRoaXMuZGVza1NjcmlwdC5raW5lbWF0aWNTcHJpdGUgPSB0aGlzLkhhbmRDbGFzcy5PYmo7XHJcbiAgICAgICAgdGhpcy5oYW5kU2NyaXB0ID0gdGhpcy5IYW5kQ2xhc3MuYWRkU2NyaXB0KExvZ2ljLkhhbmRDb2xsaXNpb25TY3JpcHQpIGFzIExvZ2ljLkhhbmRDb2xsaXNpb25TY3JpcHQ7XHJcbiAgICAgICAgdGhpcy5oYW5kU2NyaXB0LmtpbmVtYXRpY1Nwcml0ZSA9IHRoaXMuRGVza0NsYXNzLk9iajtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVGltZWxpbmVDb21wbGV0ZSgpe1xyXG4gICAgICAgIGtub2NrX3RpbWUrKztcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRpbWVMaW5lIGNvbXBsZXRlISEhIVwiLCBrbm9ja190aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTGFiZWwobGFiZWw6U3RyaW5nKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMYWJlbE5hbWU6XCIgKyBsYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVUaW1lTGluZSgpe1xyXG4gICAgICAgIHRoaXMudGltZUxpbmUub24oTGF5YS5FdmVudC5DT01QTEVURSx0aGlzLHRoaXMub25UaW1lbGluZUNvbXBsZXRlKTtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLm9uKExheWEuRXZlbnQuTEFCRUwsIHRoaXMsIHRoaXMub25MYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldFZlYygpe1xyXG4gICAgICAgIHRoaXMuVmRpci54ID0gQ29uZmlnLk9iamVjdENvbmZpZy5ERVNLX1BPUy54O1xyXG4gICAgICAgIHRoaXMuVmRpci55ID0gQ29uZmlnLk9iamVjdENvbmZpZy5ERVNLX1BPUy55O1xyXG4gICAgICAgIHRoaXMuVmRpci56ID0gQ29uZmlnLk9iamVjdENvbmZpZy5ERVNLX1BPUy56XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBrbm9ja09uY2UoKXtcclxuICAgICAgICB0aGlzLnJlc2V0VmVjKCk7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuYWRkS25vY2soKTtcclxuICAgICAgICB0aGlzLmFkZEtub2NrKDEpO1xyXG4gICAgICAgIHRoaXMudGltZUxpbmUucGxheSgwLGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFN0YXkoX3N0YXlUaW1lPzpudW1iZXIpe1xyXG4gICAgICAgIF9zdGF5VGltZSA9IF9zdGF5VGltZT8gX3N0YXlUaW1lICogMTAwMDogMDtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLmFkZExhYmVsKFwic3RheVwiLDApLnRvKHRoaXMuVmRpciwge3k6Q29uZmlnLk9iamVjdENvbmZpZy5ERVNLX1BPUy55fSwgX3N0YXlUaW1lLCBudWxsLCAwKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkS25vY2soX2RlbHRhVGltZT86bnVtYmVyKXtcclxuICAgICAgICBfZGVsdGFUaW1lID0gX2RlbHRhVGltZT8gX2RlbHRhVGltZSAqIDEwMDA6IDA7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZVxyXG4gICAgICAgICAgICAudG8odGhpcy5WZGlyLHt5OkNvbmZpZy5PYmplY3RDb25maWcuREVTS19FTkRfUE9TLnl9LDIwMCxudWxsLF9kZWx0YVRpbWUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLlZkaXIse3k6Q29uZmlnLk9iamVjdENvbmZpZy5ERVNLX1BPUy55fSwyMDAsbnVsbCwwKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzdGFydCgpe1xyXG4gICAgICAgIHRoaXMuZGVza1NjcmlwdC5jbGVhclN0YXR1cygpO1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5JREVMKTtcclxuICAgICAgICB0aGlzLm1vdmVEZXNrKCk7XHJcbiAgICAgICAgdGhpcy5yZXNldEhhbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5ld0xldmVsKCl7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLkRFU0tfTEVBVkUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZURlc2soKXtcclxuICAgICAgICAvLyB0aGlzLmRlc2tEb3duKCk7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLk1PVkVfRk9SV0FSRCk7XHJcbiAgICAgICAgdGhpcy5yZXNldFZlYygpO1xyXG4gICAgICAgIHRoaXMudGltZUxpbmUucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmFkZEtub2NrKCk7XHJcbiAgICAgICAgdGhpcy5hZGRLbm9jaygxKTtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLnBsYXkoMCx0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0RGVzaygpe1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLnNldFBvc2l0aW9uKENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcERlc2soKXtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLlNUT1ApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVza0Rvd24oKXtcclxuICAgICAgICAvLyBsZXQgdmVjID0gdGhpcy5EZXNrQ2xhc3MuUG9zaXRpb247XHJcbiAgICAgICAgLy8gdmVjLnkgLT0gMC4zO1xyXG4gICAgICAgIC8vIHRoaXMuRGVza0NsYXNzLnNldFBvc2l0aW9uKHZlYyk7XHJcblxyXG4gICAgICAgIC8vIGlmKHZlYy55IDw9IENvbmZpZy5PYmplY3RDb25maWcuREVTS19FTkRfUE9TLnkpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLkRlc2tDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9CQUNLKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLnNldFBvc2l0aW9uKHRoaXMuVmRpcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZXNrVXAoKXtcclxuICAgICAgICBsZXQgdmVjID0gdGhpcy5EZXNrQ2xhc3MuUG9zaXRpb247XHJcbiAgICAgICAgdmVjLnkgKz0gMC4zO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLnNldFBvc2l0aW9uKHZlYyk7XHJcblxyXG4gICAgICAgIGlmKHZlYy55ID49IENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueSl7XHJcbiAgICAgICAgICAgIHRoaXMuRGVza0NsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0ZPUldBUkQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlc2tFbnRlcigpe1xyXG4gICAgICAgIGxldCB2ZWMgPSB0aGlzLkRlc2tDbGFzcy5Qb3NpdGlvbjtcclxuICAgICAgICB2ZWMueCAtPSAwLjE7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3Muc2V0UG9zaXRpb24odmVjKTtcclxuXHJcbiAgICAgICAgaWYodmVjLnggPD0gQ29uZmlnLk9iamVjdENvbmZpZy5ERVNLX1BPUy54KXtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRGVzaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRGVza0Rpc2FwcGVhcigpe1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLmNoYW5nZU9iaihDb25maWcuUG9vbFR5cGUuRGVzayk7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3Muc2V0UG9zaXRpb24oQ29uZmlnLk9iamVjdENvbmZpZy5ERVNLX0VOVEVSX1BPUyk7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLkRFU0tfRU5URVIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVza0xlYXZlKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHZlYyA9IHRoaXMuRGVza0NsYXNzLlBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy54IC09IDAuMTtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5zZXRQb3NpdGlvbih2ZWMpO1xyXG5cclxuICAgICAgICBpZih2ZWMueCA8PSAtMil7XHJcbiAgICAgICAgICAgIHRoaXMub25EZXNrRGlzYXBwZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlRGVzaygpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZGVza1NjcmlwdC5Jc0hpdCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXREZXNrKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcERlc2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3MudXBkYXRlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlSGFuZCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuSGFuZENsYXNzLkN1clN0YXRlKTtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMuSGFuZENsYXNzLkN1clN0YXRlID09IENvbmZpZy5TdGF0ZUNvbmZpZy5TVE9QKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSGFuZENsYXNzLkN1clN0YXRlID09IENvbmZpZy5TdGF0ZUNvbmZpZy5JREVMKXtcclxuICAgICAgICAgICAgdGhpcy5IYW5kQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLk1PVkVfRk9SV0FSRCk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRGb3J3YXJkKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdmVjID0gdGhpcy5IYW5kQ2xhc3MuUG9zaXRpb247XHJcbiAgICAgICAgdmVjLnggKz0gQ29uZmlnLk9iamVjdENvbmZpZy5TUEVFRF9IQU5EICogTGF5YS50aW1lci5kZWx0YTtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5zZXRQb3NpdGlvbih2ZWMpO1xyXG5cclxuICAgICAgICBpZih0aGlzLkhhbmRDbGFzcy5Qb3NpdGlvbi54ID49IENvbmZpZy5PYmplY3RDb25maWcuSEFORF9FTkRfUE9TLngpe1xyXG4gICAgICAgICAgICB0aGlzLkhhbmRDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9CQUNLKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJlYWNoRmluaXNoKCl7XHJcbiAgICAgICAgdGhpcy5yZXNldEhhbmQoKTtcclxuICAgICAgICAvL+WIsOi+vue7iOeCueWKoOWIhlxyXG4gICAgICAgIERhdGEuUGxheWVyRGF0YS5Qb2ludCArPSAxMDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PuW+l+WIhu+8mlwiLERhdGEuUGxheWVyRGF0YS5Qb2ludCk7XHJcbiAgICAgICAgaWYoRGF0YS5QbGF5ZXJEYXRhLlBvaW50ID49IDMwMCl7XHJcbiAgICAgICAgICAgIHRoaXMubmV3TGV2ZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kQmFjaygpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5IYW5kQ2xhc3MuUG9zaXRpb24ueCA8PSBDb25maWcuT2JqZWN0Q29uZmlnLkhBTkRfUE9TLngpe1xyXG4gICAgICAgICAgICB0aGlzLm9uUmVhY2hGaW5pc2goKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5IYW5kQ2xhc3MuUG9zaXRpb24ueCA8IENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueCl7XHJcbiAgICAgICAgICAgIHRoaXMuSGFuZENsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5CQUNLX1BBU1NFRCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdmVjID0gdGhpcy5IYW5kQ2xhc3MuUG9zaXRpb247XHJcbiAgICAgICAgdmVjLnggLT0gQ29uZmlnLk9iamVjdENvbmZpZy5TUEVFRF9IQU5EICogTGF5YS50aW1lci5kZWx0YTs7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3Muc2V0UG9zaXRpb24odmVjKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0SGFuZCgpe1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLnNldFBvc2l0aW9uKENvbmZpZy5PYmplY3RDb25maWcuSEFORF9QT1MpO1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5JREVMKTtcclxuICAgICAgICB0aGlzLmVuYWJsZUhhbmRHcmF2aXR5KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BIYW5kKCl7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLlNUT1ApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5hYmxlSGFuZEdyYXZpdHkoX29wZW46Ym9vbGVhbil7XHJcbiAgICAgICAgaWYodGhpcy5IYW5kQ2xhc3MuUmlnaWQzRC5pc0tpbmVtYXRpYyA9PSAhX29wZW4pIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MuUmlnaWQzRC5pc0tpbmVtYXRpYyA9ICFfb3BlbjtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5SaWdpZDNELmdyYXZpdHkgPSBfb3Blbj8gbmV3IExheWEuVmVjdG9yMygwLCAtMTAsIDApOiBMYXlhLlZlY3RvcjMuX1pFUk87XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkhhbmRIaXQoKXtcclxuICAgICAgICBEYXRhLlBsYXllckRhdGEuUG9pbnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RvcEhhbmQoKTtcclxuICAgICAgICB0aGlzLmVuYWJsZUhhbmRHcmF2aXR5KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmQoKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLmRlc2tTY3JpcHQuSXNIaXQpe1xyXG4gICAgICAgICAgICB0aGlzLm9uSGFuZEhpdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy51cGRhdGVTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+avj+S4gOW4p+aXtumXtO+8micsTGF5YS50aW1lci5kZWx0YSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXNrKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYW5kQ29sbGlzaW9uU2NyaXB0IGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVyIHtcclxuXHRwdWJsaWMga2luZW1hdGljU3ByaXRlOkxheWEuU3ByaXRlM0Q7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyRW50ZXIob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyU3RheShvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdFxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyRXhpdChvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvbkVudGVyKGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIueisOaSnu+8gVwiKTtcclxuXHRcdGlmIChjb2xsaXNpb24ub3RoZXIub3duZXIgPT09IHRoaXMua2luZW1hdGljU3ByaXRlKXtcclxuXHRcdFx0Ly8gKHRoaXMub3duZXIuZ2V0Q29tcG9uZW50KExheWEuUmlnaWRib2R5M0QpIGFzIExheWEuUmlnaWRib2R5M0QpLmdyYXZpdHkgPSBuZXcgTGF5YS5WZWN0b3IzKDAsIC0xMCwgMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvblN0YXkoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uRXhpdChjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdH1cclxuXHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0dyYWJMb2dpYyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGVza0NvbGxpc2lvblNjcmlwdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSGFuZENvbGxpc2lvblNjcmlwdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29sbGlzaW9uU2NyaXB0QmFzZSc7XHJcbiIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tIFwiLi9HYW1lU2NlbmVcIjtcclxuXHJcbmNsYXNzIE1haW4ge1xyXG5cdHByaXZhdGUgYW5pbWF0aW9uczpBcnJheTxzdHJpbmc+ID0gWydhdHRhY2sxJywgJ2F0dGFjazInLCAnYXR0YWNrMycsICd3aW4nXTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcclxuXHRcdGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuXHRcdGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHRcdC8v5omL5py65LiOUEPpgILphY3kuI3lkIxcclxuXHRcdGlmKExheWEuQnJvd3Nlci5vblBDKXtcclxuXHRcdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBMYXlhLlN0YWdlLlNDQUxFX1NIT1dBTEw7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBMYXlhLlN0YWdlLlNDQUxFX0ZJWEVEX1dJRFRIO1xyXG5cdFx0fVxyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gTGF5YS5TdGFnZS5TQ1JFRU5fVkVSVElDQUw7XHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlO1xyXG5cclxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCkge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG5cclxuXHRvbkNvbmZpZ0xvYWRlZCgpIHtcclxuXHRcdE1hbmFnZXIuU2NlbmVNYW5hZ2VyLmNyZWF0ZTNkU2NlbmUoKTtcclxuXHJcblx0XHQvLyBDb21tb24ubG9hZEFsbFN1YnBhY2thZ2VzKHRoaXMsIHRoaXMub25TdWJQYWNrYWdlTG9hZGVkKTtcclxuXHR9XHJcblxyXG5cdG9uU3ViUGFja2FnZUxvYWRlZCgpe1xyXG5cdFx0TWFuYWdlci5TY2VuZU1hbmFnZXIuY3JlYXRlM2RTY2VuZSgpO1xyXG5cdH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG4iLCLvu79pbXBvcnQgKiBhcyBDb25maWcgZnJvbSAnLi4vQ29uZmlnL0NvbmZpZyc7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlTWFuYWdlciBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlciB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9pbnN0OkJhc2VNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBfbXNnVHlwZTpudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0KCl7XHJcbiAgICAgICAgaWYoIU1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIGNyZWFlIGEgc2NlbmUgZmlyc3QhJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLl9pbnN0KXtcclxuICAgICAgICAgICAgdGhpcy5faW5zdCA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lLmdldENvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuX2luc3Qpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdCA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lLmFkZENvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG4vL+eCueWHu+eJueaViFxyXG5leHBvcnQgY2xhc3MgQ2xpY2tFZmZlY3RNYW5hZ2Vye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgVG91Y2hDb206Zmd1aS5HQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgc3RhdGljIEluaXQoKXtcclxuICAgICAgICBpZih0aGlzLlRvdWNoQ29tKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGdyb290SW5zdCA9IGZndWkuR1Jvb3QuaW5zdDtcclxuXHRcdHRoaXMuVG91Y2hDb20gPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3RGcm9tVVJMKCd1aTovL01haW5VSS9Db21wb25lbnRfZGlhbmppJykuYXNDb207XHJcblx0XHRncm9vdEluc3QuYWRkQ2hpbGQodGhpcy5Ub3VjaENvbSk7XHJcblx0XHR0aGlzLlRvdWNoQ29tLnNvcnRpbmdPcmRlciA9IENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuQ2xpY2tFZmZlY3Q7XHJcbiAgICAgICAgLy8gdGhpcy5Ub3VjaENvbS5ub2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XHJcbiAgICAgICAgLy8gdGhpcy5Ub3VjaENvbS5kaXNwbGF5T2JqZWN0LnNldFNpYmxpbmdJbmRleCh0aGlzLlRvdWNoQ29tLm5vZGUucGFyZW50LmNoaWxkcmVuQ291bnQpO1xyXG5cclxuICAgICAgICBncm9vdEluc3QuZGlzcGxheU9iamVjdC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLnBsYXlDbGlja0VmZmVjdCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtjYy5FdmVudC5FdmVudFRvdWNofSBldnRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBsYXlDbGlja0VmZmVjdChldnQpe1xyXG4gICAgICAgIGxldCBwb3MgPSBldnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLlRvdWNoQ29tLnNldFhZKHBvcy54LCBmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gcG9zLnkpO1xyXG4gICAgICAgIHRoaXMuVG91Y2hDb20uZ2V0VHJhbnNpdGlvbignRWZmZWN0X1QnKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhpZGUoKXtcclxuICAgICAgICB0aGlzLlRvdWNoQ29tLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAvLyBmZ3VpLkdSb290Lmluc3Qubm9kZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3coKXtcclxuICAgICAgICB0aGlzLlRvdWNoQ29tLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vVUkvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0IHtEZXZSZXFCb2R5LCBMb2dpbkRhdGF9IGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2VyIHtcclxuICAgIHN0YXRpYyBJbnN0OkRhdGFNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBfaXNCYXNlQm9keUluaXRlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9pc0JvZHlJbml0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICAvLyBEYXRhLkRldlJlcUJvZHkuSW5pdEJhc2VCb2R5KCk7XHJcbiAgICAgICAgdGhpcy5pbml0QmFzZUJvZHkoKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuTG9naW5TdWNjZXNzLCB0aGlzLm9uTG9naW5TdWNjZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRCYXNlQm9keSgpe1xyXG4gICAgICAgIGlmKHRoaXMuX2lzQmFzZUJvZHlJbml0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy/kuI7nmbvlvZXml6DlhbPnmoTmjqXlj6Pnm7TmjqXliJvlu7pcclxuICAgICAgICAvL+mFjee9rlxyXG4gICAgICAgIERhdGEuQ29uZmlnRGF0YS5SZXFCb2R5ID0gbmV3IERhdGEuSHR0cFJlcWJvZHlCYXNlKDAsIDEwMDAyKTsgICBcclxuICAgICAgICAvL+eZu+W9lVxyXG4gICAgICAgIERhdGEuTG9naW5EYXRhLlJlcUJvZHkgPSBuZXcgRGF0YS5IdHRwUmVxYm9keUJhc2UoMCwgMTAwMDMpOyBcclxuXHJcbiAgICAgICAgdGhpcy5faXNCYXNlQm9keUluaXRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkxvZ2luU3VjY2Vzcygpe1xyXG4gICAgICAgIHRoaXMuaW5pdERldkJvZGllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdERldkJvZGllcygpe1xyXG4gICAgICAgIC8v5Lul5LiL6K+35rGC5L2T6ZyA6KaB55m75b2V5omN5Y+v5Yib5bu6XHJcbiAgICAgICAgaWYodGhpcy5faXNCb2R5SW5pdGVkIHx8ICFEYXRhLkxvZ2luRGF0YS5TZXNzaW9uKSByZXR1cm47XHJcbiAgICAgICAgLy8jMTA4MDIg6I635Y+W6aaW5p2A5qacXHJcbiAgICAgICAgRGF0YS5VcGdyYWRlRGF0YS5SZXFCb2R5ID0gbmV3IERldlJlcUJvZHkoOCwgMTA4MDIpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5faXNCb2R5SW5pdGVkID0gdHJ1ZTtcclxuICAgIH1cclxufSAiLCJpbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbi8v6I+K6Iqx566h55CGXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nSWNvbk1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2VyIHtcclxuICAgIHN0YXRpYyBJbnN0OkxvYWRpbmdJY29uTWFuYWdlcjtcclxuICAgIHB1YmxpYyBJc0luaXRlZDpCb29sZWFuO1xyXG4gICAgcHVibGljIENvbnRyb2xsZXI6VUkuTG9hZGluZ0NvbnRyb2xsZXI7XHJcblxyXG4gICAgb25Bd2FrZSgpe1xyXG4gICAgICAgIHRoaXMuSW5pdCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBJbml0KCl7XHJcbiAgICAgICAgaWYodGhpcy5Jc0luaXRlZCA9PSB0cnVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuSXNJbml0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIgPSBNYW5hZ2VyLlVJTWFuYWdlci5vcGVuQ29udHJvbGxlcihVSS5Mb2FkaW5nQ29udHJvbGxlcikgYXMgVUkuTG9hZGluZ0NvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd0xvYWRpbmcoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyLnNob3dMb2FkaW5nKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEhpZGVMb2FkaW5nKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyLmhpZGVMb2FkaW5nKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9VSS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gJy4uL01hbmFnZXIvTWFuYWdlcic7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tICcuLi9Db21tb24vQ29tbW9uJztcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcblxyXG4vL+eZu+W9lei/m+W6pueuoeeQhlxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1Byb2dyZXNzTWFuYWdlciBleHRlbmRzIE1hbmFnZXIuQmFzZU1hbmFnZXJ7XHJcbiAgICBzdGF0aWMgSW5zdDpMb2FkaW5nUHJvZ3Jlc3NNYW5hZ2VyO1xyXG4gICAgcHVibGljIElzSW5pdGVkOkJvb2xlYW47XHJcbiAgICBwdWJsaWMgQ29udHJvbGxlcjpVSS5Mb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyO1xyXG5cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICB0aGlzLkluaXQoKTtcclxuICAgICAgICAvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2ltUHJvZ3Jlc3NFbmQsIHRoaXMub25Mb2FkaW5nQ29tcGxldGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBJbml0KCl7XHJcbiAgICAgICAgaWYodGhpcy5Jc0luaXRlZCA9PSB0cnVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuSXNJbml0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIgPSBNYW5hZ2VyLlVJTWFuYWdlci5vcGVuQ29udHJvbGxlcihVSS5Mb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyKSBhcyBVSS5Mb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyO1xyXG5cclxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5TaW1Qcm9ncmVzc0VuZCwgdGhpcy5vbkxvYWRpbmdDb21wbGV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VpUHJvZ3Jlc3MocHJvZ3Jlc3M6bnVtYmVyLCBwa2dOYW1lPzpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyLnNob3dVaVByb2dyZXNzKHByb2dyZXNzLCBwa2dOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBTaG93V3hMb2dpbigpIHtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlci5zaG93V3hMb2dpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb25maWdQcm9ncmVzcygpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyLnNob3dDb25maWdQcm9ncmVzcygpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkaW5nQ29tcGxldGUoKXtcclxuICAgICAgICAvL+WKoOi9veaIkOWKn+WQjuW6n+mZpOiHquW3sVxyXG4gICAgICAgIExvY2FsQ29uZmlnLklzU2ltUHJvZ3Jlc3NFbmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuSXNJbml0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vQmFzZU1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0NsaWNrRWZmZWN0TWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ0ljb25NYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nUHJvZ3Jlc3NNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9OZXRNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TdGF0ZUJhc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL1NjZW5lTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3Bhd25NYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9UaW1lck1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1VJTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vVmVyc2lvbk1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0RhdGFNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Qb29sTWFuYWdlcic7IiwiaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vVUkvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG4vL+aYr+WQpuesrOS4gOasoei/nuaOpVxyXG5sZXQgaXNGaXJzdFNlbmQgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIF9ocjpYTUxIdHRwUmVxdWVzdDtcclxuICAgIHByaXZhdGUgX3JlcUtleTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaG1NYXA6Q29uZmlnLkRpY3Rpb25hcnk8SHR0cE1hbmFnZXI+ID0ge307XHJcbiAgICBwcm90ZWN0ZWQgRGF0YTpEYXRhLkh0dHBSZXFib2R5QmFzZTtcclxuICAgIHByaXZhdGUgQ2FsbGJhY2s6RnVuY3Rpb247XHJcbiAgICBwcml2YXRlIENvbm5lY3RUaW1lczpudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIElzU2hvd0xvYWRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzQ29ubmVjdGluZzpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIHNldCBSZXF1ZXN0VXJsKHVybDpzdHJpbmcpe1xyXG4gICAgICAgIENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBDb25uZWN0KHJlcWtleTpzdHJpbmcsIGRhdGE6RGF0YS5IdHRwUmVxYm9keUJhc2UsIGNhbGxiYWNrPzpGdW5jdGlvbiwgaXNTaG93TG9hZGluZz86Ym9vbGVhbiwgSXNHbT86Ym9vbGVhbikge1xyXG4gICAgICAgIGlmKCFkYXRhKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2hyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgdGhpcy5fcmVxS2V5ID0gcmVxa2V5O1xyXG5cclxuICAgICAgICBpZihJc0dtKVxyXG4gICAgICAgICAgICB0aGlzLl9oci5vcGVuKFwicG9zdFwiLCBDb25maWcuTmV0Q29uZmlnLkdNVXJsLCB0cnVlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2hyLm9wZW4oXCJwb3N0XCIsIENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCwgdHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5faHIub25yZWFkeXN0YXRlY2hhbmdlID0gdGhpcy5Pbkh0dHBSZXF1ZXN0Q29tcGxldGUuYmluZCh0aGlzKTtcclxuICAgICAgICAvL+i2heaXtlxyXG4gICAgICAgIHRoaXMuX2hyLnRpbWVvdXQgPSA1MDAwO1xyXG4gICAgICAgIHRoaXMuX2hyLm9udGltZW91dCA9IHRoaXMuT25UaW1lb3V0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5faHIub25lcnJvciA9IHRoaXMuT25IdHRwUmVxdWVzdEVycm9yLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZihkYXRhLlJlcURhdGEpID09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgZGF0YS5SZXFEYXRhID0gSlNPTi5wYXJzZShkYXRhLlJlcURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLklzU2hvd0xvYWRpbmcgPSBpc1Nob3dMb2FkaW5nO1xyXG4gICAgICAgIC8v6YeN6L+e5qyh5pWwXHJcbiAgICAgICAgdGhpcy5Db25uZWN0VGltZXMrKztcclxuICAgICAgICAvL+i2heaXtuavq+enkuaVsFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2hyLnRpbWVvdXQpO1xyXG5cclxuICAgICAgICB0aGlzLl9oci5yZXNwb25zZVR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpZih0eXBlb2YgZGF0YS5SZXFEYXRhICE9ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgZGF0YS5SZXFEYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YS5SZXFEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgLy/mmK/lkKbmraPlnKjov57mjqXvvIzljIXmi6zotoXml7ZcclxuICAgICAgICB0aGlzLklzQ29ubmVjdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIC8v6I+K6IqxXHJcbiAgICAgICAgaWYoaXNGaXJzdFNlbmQpe1xyXG4gICAgICAgICAgICBpc0ZpcnN0U2VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBNYW5hZ2VyLkxvYWRpbmdJY29uTWFuYWdlci5Jbml0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpc1Nob3dMb2FkaW5nID09IHRydWUpe1xyXG4gICAgICAgICAgICBNYW5hZ2VyLkxvYWRpbmdJY29uTWFuYWdlci5JbnN0LlNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIE1hbmFnZXIuTG9hZGluZ0ljb25NYW5hZ2VyLkluc3QuSGlkZUxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIC8vM+enkuWQjuWGjei9rOiPiuiKsVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuTGF0ZVNob3dMb2FkaW5nLmJpbmQodGhpcyksIDMwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLk5ldEh0dHBDb25uZWN0RWlkLkNvbm5lY3RCZWdpbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIExhdGVTaG93TG9hZGluZygpe1xyXG4gICAgICAgIGlmICh0aGlzLklzQ29ubmVjdGluZyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgTWFuYWdlci5Mb2FkaW5nSWNvbk1hbmFnZXIuSW5zdC5TaG93TG9hZGluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+ivt+axgumUmeivr1xyXG5cdE9uSHR0cFJlcXVlc3RFcnJvcihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJ5QXV0b1JlY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL+i2heaXtlxyXG4gICAgT25UaW1lb3V0KGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICAgICAgdGhpcy50cnlBdXRvUmVjb25uZWN0KCk7XHJcblx0fVxyXG5cclxuXHRPbkh0dHBSZXF1ZXN0UHJvZ3Jlc3MoZSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCLliqDovb3ov5vluqY+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+XCIsZS5sb2FkZWQgLyBlLnRvdGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZW1vdmVSZXF1ZXN0KCl7XHJcbiAgICAgICAgLy/np7vpmaTlvZPliY3ov57mjqXvvIzlv4XpobvlhYjorr7nva7ov57mjqXnirbmgIFJc0Nvbm5lY3RpbmfkuLpmYWxzZeWQjuWGjeiwg+eUqFxyXG4gICAgICAgIGlmKHRoaXMuSXNDb25uZWN0aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2hyID0gbnVsbDtcclxuICAgICAgICB0aGlzLkRhdGEgPSBudWxsO1xyXG4gICAgICAgIEh0dHBNYW5hZ2VyLl9obU1hcFt0aGlzLl9yZXFLZXldID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRyeUF1dG9SZWNvbm5lY3QoKXtcclxuICAgICAgICAvL+etlueVpe+8mjAuNeenkumHjei/nuS4gOasoe+8jOmHjeivlTXmrKFcclxuICAgICAgICBpZih0aGlzLkNvbm5lY3RUaW1lcyA8IDMpe1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoNTAwLCB0aGlzLCB0aGlzLmF1dG9SZUNvbm5lY3QpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb25uZWN0V2luZG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXV0b1JlQ29ubmVjdCgpe1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdCgnJywgdGhpcy5EYXRhLCB0aGlzLkNhbGxiYWNrLCB0cnVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzaG93Q29ubmVjdFdpbmRvdygpe1xyXG4gICAgICAgIHRoaXMuSXNDb25uZWN0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgTWFuYWdlci5Mb2FkaW5nSWNvbk1hbmFnZXIuSW5zdC5IaWRlTG9hZGluZygpO1xyXG5cclxuICAgICAgICBsZXQgY29udGVudCA9IFtDb25maWcuTG9jYWxDb250ZW50Lk5ldEVycm9yXTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgTWFuYWdlci5VSU1hbmFnZXIub3BlbkNvbmZpcm1XaW5kb3coXHJcbiAgICAgICAgICAgIGNvbnRlbnQsIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgICAgIHNlbGYuQ29ubmVjdCgnJywgc2VsZi5EYXRhLCBzZWxmLkNhbGxiYWNrLCBzZWxmLklzU2hvd0xvYWRpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblx0T25IdHRwUmVxdWVzdENvbXBsZXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9oci5yZWFkeVN0YXRlICE9IDQgfHwgKHRoaXMuX2hyLnN0YXR1cyA8IDIwMCB8fCB0aGlzLl9oci5zdGF0dXMgPj0gNDAwKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLklzQ29ubmVjdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdFRpbWVzID0gMDtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuX2hyLnJlc3BvbnNlVGV4dCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5faHIucmVzcG9uc2VUZXh0KSBhcyBDb25maWcuUmVzcERhdGFTdHJ1Y3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+Pj4+Pj4+Pj4+Pj4+6L+e5o6l54q25oCB77yaJywgZGF0YS5SZXNwQ29kZSwgZGF0YS5SZXNwTXNnKTtcclxuICAgICAgICAvL+i/nuaOpeWksei0pVxyXG4gICAgICAgIC8vIGlmKGRhdGEuUmVzcENvZGUgIT0gQ29uZmlnLkh0dHBDb25uZWN0U3RhdGUuU3VjY2VzcykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0eXBlb2YodGhpcy5DYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIHRoaXMuQ2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+i/nuaOpee7k+adn+WIoOmZpOWvueixoVxyXG4gICAgICAgIHRoaXMuX3JlbW92ZVJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5OZXRIdHRwQ29ubmVjdEVpZC5TZXJ2aWNlUmVzcG9uZCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU29ja2V0TWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdDpTb2NrZXRNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBzb2NrZXQ6IExheWEuU29ja2V0O1xyXG4gICAgcHJpdmF0ZSBvdXRwdXQ6IExheWEuQnl0ZTtcclxuICAgIHByaXZhdGUgX2RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLyoqIOW/g+i3s+WMheWumuaXtuWZqCAqL1xyXG4gICAgcHJpdmF0ZSBfdGltZXI6IG51bWJlciA9IDA7XHJcbiAgICAvKiog5b+D6Lez5YyF5pyN5Yqh5Zmo6LaF5pe25a6a5pe25ZmoICovXHJcbiAgICBwcml2YXRlIF9zZXJ2ZXJUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIC8qKiDlv4Pot7PljIXotoXml7bml7bpl7TvvIzljZXkvY1tcyzml7bpl7Tlj6rog73mmK/mlbTnp5LmlbDvvIxzZXRUaW1lb3V05Zyo5ZCO5Y+w5q+P56eS5omn6KGM5LiA5qyhICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF90aW1lb3V0OiBudW1iZXIgPSAxMDAwMDtcclxuICAgIC8qKiDpnZnpu5jph43ov57lrprml7blmaggKi9cclxuICAgIHByaXZhdGUgX3NpbGVudFRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOW/g+i3s+WMheacjeWKoeWZqOi2heaXtuaXtumXtO+8jOWNleS9jW1zLOaXtumXtOWPquiDveaYr+aVtOenkuaVsO+8jHNldFRpbWVvdXTlnKjlkI7lj7Dmr4/np5LmiafooYzkuIDmrKEgKi9cclxuICAgIHByaXZhdGUgX3NlcnZlclRpbWVvdXQ6IG51bWJlciA9IDEwMDAwOyAvL1RPRE/osIPor5Xmiorml7bpl7TliqDplb8zNjAwMDAw77yM5Y6fMTAwMDBcclxuICAgIC8qKiDmlq3nur/nsbvlnovvvJoxLuiiq+aMpOS4i+e6vywgMi7lgZzmnI3nu7TmiqQoc29ja2V05pat5byAKSwzIOmdnuazleaTjeS9nCAqL1xyXG4gICAgcHJpdmF0ZSBfZGlzY29ubmVjdFR5cGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX2luc3Qpe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0ID0gbmV3IFNvY2tldE1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xyXG4gICAgfSBcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHVybD86c3RyaW5nLCBwb3J0PzpudW1iZXIpIHtcclxuICAgICAgICAvLyB0aGlzLmNvbm5lY3QodXJsLCBwb3J0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29ubmVjdCh1cmw6c3RyaW5nLCBwb3J0PzpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaW5zdC5jb25uZWN0KHVybCwgcG9ydCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25uZWN0KHVybDpzdHJpbmcsIHBvcnQ/Om51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IExheWEuU29ja2V0KCk7XHJcblxyXG4gICAgICAgIGlmKHBvcnQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNvbm5lY3QodXJsLCBwb3J0KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY29ubmVjdEJ5VXJsKHVybCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMuc29ja2V0Lm91dHB1dDtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oTGF5YS5FdmVudC5PUEVOLCB0aGlzLCB0aGlzLm9uU29ja2V0T3Blbik7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oTGF5YS5FdmVudC5DTE9TRSwgdGhpcywgdGhpcy5vblNvY2tldENsb3NlKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbihMYXlhLkV2ZW50Lk1FU1NBR0UsIHRoaXMsIHRoaXMub25NZXNzYWdlUmV2ZWl2ZWQpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKExheWEuRXZlbnQuRVJST1IsIHRoaXMsIHRoaXMub25Db25uZWN0RXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5b+D6Lez5qOA5rWLXHJcbiAgICBwcml2YXRlIHN0YXJ0SGVhcnRiZWF0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGUudG9VVENTdHJpbmcoKSArIFwiIHN0YXJ0IGhlYXJ0YmVhdFwiKTtcclxuICAgICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQodGhpcy50aW1lckhhbmRsZXIuYmluZCh0aGlzKSwgdGhpcy5fdGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lckhhbmRsZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0ZS50b1VUQ1N0cmluZygpICsgXCIgc2VuZCBoZWFydGJlYXRcIik7XHJcblxyXG4gICAgICAgIC8v5Y+R6YCB5LiA5Liq5b+D6Lez77yM5ZCO56uv5pS25Yiw5ZCO77yM6L+U5Zue5LiA5Liq5b+D6Lez5raI5oGvXHJcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZCgnciB1IHRoZXJlPycpO1xyXG4gICAgICAgIHRoaXMuX3NlcnZlclRpbWVyID0gc2V0VGltZW91dCh0aGlzLnNlcnZlclRpbWVySGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLl9zZXJ2ZXJUaW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlcnZlclRpbWVySGFuZGxlcigpIHtcclxuICAgICAgICAvL+acjeWKoeWZqOi2heaXtuayoeacieWbnuWMhe+8jOaWreW8gOi/nuaOpeeEtuWQjumHjei/nlxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGUudG9VVENTdHJpbmcoKSArIFwiIHdhaXQgc2VydmVyIHJlcGx5IHRpbWVvdXRcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRIZWFydGJlYXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0ZS50b1VUQ1N0cmluZygpICsgXCIgcmVzZXQgaGVhcnRiZWF0XCIpO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3NlcnZlclRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU29ja2V0T3BlbigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldEhlYXJ0YmVhdCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRIZWFydGJlYXQoKTtcclxuXHJcbiAgICAgICAgLy8g5Y+R6YCB5a2X56ym5LiyXHJcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChcImRlbW9uc3RyYXRlIDxzZW5kU3RyaW5nPlwiKTtcclxuXHJcbiAgICAgICAgLy8g5L2/55Sob3V0cHV0LndyaXRlQnl0ZeWPkemAgVxyXG4gICAgICAgIHZhciBtZXNzYWdlOiBzdHJpbmcgPSBcImRlbW9uc3RyYXRlIDxvdXRwdXQud3JpdGVCeXRlPlwiO1xyXG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LndyaXRlQnl0ZShtZXNzYWdlLmNoYXJDb2RlQXQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvY2tldC5mbHVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Tb2NrZXRDbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvY2tldCBjbG9zZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk1lc3NhZ2VSZXZlaXZlZChtZXNzYWdlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgZnJvbSBzZXJ2ZXI6XCIsIG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAvL+iOt+WPluWIsOa2iOaBr+mHjee9ruW/g+i3s+ajgOa1i1xyXG4gICAgICAgIHRoaXMucmVzZXRIZWFydGJlYXQoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0SGVhcnRiZWF0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgfWVsc2UgaWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgTGF5YS5CeXRlKG1lc3NhZ2UpLnJlYWRVVEZCeXRlcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0LmlucHV0LmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNvbm5lY3RFcnJvcihlOiBMYXlhLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5pat57q/57G75Z6L77yaMS7ooqvmjKTkuIvnur8sIDIu5YGc5pyN57u05oqkKHNvY2tldOaWreW8gCksMyDpnZ7ms5Xmk43kvZwgKi9cclxuICAgIHB1YmxpYyBzZXREaXNjb25uZWN0KHR5cGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2Rpc2Nvbm5lY3RUeXBlID0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuX2Rpc2Nvbm5lY3RUeXBlID0gMDtcclxuICAgICAgICB0aGlzLnJlc2V0SGVhcnRiZWF0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL0NvcmUvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9vbE1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2VyIHtcclxuICAgIHN0YXRpYyBJbnN0OlBvb2xNYW5hZ2VyO1xyXG5cclxuICAgIC8vZmd1aeWvueixoeaxoFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmd1aVBvb2wgPSBuZXcgZmd1aS5HT2JqZWN0UG9vbCgpO1xyXG5cclxuICAgIC8vZmd1aeWvueixoeaxoFxyXG4gICAgc3RhdGljIGdldCBGZ3VpUG9vbCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZndWlQb29sO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5aS06YOo5rGgXHJcbiAgICBzdGF0aWMgZ2V0IEhlYWRQb29sKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbChDb25maWcuUG9vbFR5cGUuSGVhZE1vZGVsKSBhcyBMYXlhLlNwcml0ZTNEW107XHJcbiAgICB9XHJcblxyXG4gICAgLy/ouqvkvZPmsaBcclxuICAgIHN0YXRpYyBnZXQgQm9keVBvb2woKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb29sKENvbmZpZy5Qb29sVHlwZS5Cb2R5TW9kZWwpIGFzIExheWEuU3ByaXRlM0RbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25Bd2FrZSgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVjb3ZlcihrZXk6c3RyaW5nLCBpdGVtLCBjbHNUeXBlPyl7XHJcbiAgICAgICAgaWYoIWtleSB8fCAhaXRlbSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNsc1R5cGUpe1xyXG4gICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlckJ5Q2xhc3MoY2xzVHlwZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIENvbmZpZy5Qb29sVHlwZS5GZ3VpT2JqOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0gaW5zdGFuY2VvZiBmZ3VpLkdPYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRmd1aVBvb2wucmV0dXJuT2JqZWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIoa2V5LCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SXRlbShrZXk6c3RyaW5nLCBjbHNUeXBlPyl7XHJcbiAgICAgICAgaWYoY2xzVHlwZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBMYXlhLlBvb2wuZ2V0SXRlbUJ5Q2xhc3Moa2V5LCBjbHNUeXBlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJyc6XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTGF5YS5Qb29sLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UG9vbChrZXk6c3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gTGF5YS5Qb29sLmdldFBvb2xCeVNpZ24oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXJQb29sKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIExheWEuUG9vbC5jbGVhckJ5U2lnbihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGVhckFsbFBvb2xzKCl7XHJcbiAgICAgICAgdGhpcy5GZ3VpUG9vbC5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRNb2RlbEJ5VHlwZShwb29sVHlwZTpzdHJpbmcsIHBhdGg6c3RyaW5nLCBjYWxsYmFjazpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGxldCBoZWFkID0gdGhpcy5nZXRJdGVtKHBvb2xUeXBlKSBhcyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgIGlmKCFoZWFkKXtcclxuICAgICAgICAgICAgTWFuYWdlci5TcGF3bk1hbmFnZXIuTG9hZDNkTW9kZWwoXHJcbiAgICAgICAgICAgICAgICBwYXRoLCBcclxuICAgICAgICAgICAgICAgIChtb2RlbDpDb25maWcuTW9kZWxEYXRhU3RydWN0KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWQgPSBtb2RlbC5tc3A7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGhlYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgdGhpc0FyZ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGhlYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRPYmpCeUZ1bmMoa2V5OnN0cmluZywgZnVuYzpGdW5jdGlvbil7XHJcbiAgICAgICAgcmV0dXJuIExheWEuUG9vbC5nZXRJdGVtQnlDcmVhdGVGdW4oa2V5LCBmdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SGVhZChwYXRoOnN0cmluZywgY2FsbGJhY2s6RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICB0aGlzLmdldE1vZGVsQnlUeXBlKENvbmZpZy5Qb29sVHlwZS5IZWFkTW9kZWwsIHBhdGgsIGNhbGxiYWNrLCB0aGlzQXJnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Qm9keShwYXRoOnN0cmluZywgY2FsbGJhY2s6RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICB0aGlzLmdldE1vZGVsQnlUeXBlKENvbmZpZy5Qb29sVHlwZS5Cb2R5TW9kZWwsIHBhdGgsIGNhbGxiYWNrLCB0aGlzQXJnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmV0dXJuRmd1aU9iaihib3g6Zmd1aS5HT2JqZWN0KXtcclxuICAgICAgICB0aGlzLnJlY292ZXIoQ29uZmlnLlBvb2xUeXBlLkZndWlPYmosIGJveCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gXCIuLi9HYW1lU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2Vye1xyXG4gICAgcHVibGljIHN0YXRpYyBfaW5zdDpTY2VuZU1hbmFnZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEN1clNjZW5lOkxheWEuU2NlbmUzRCB8IExheWEuU2NlbmU7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZTJkU2NlbmUoKXtcclxuICAgICAgICBMYXlhLlNjZW5lLmxvYWQoR2FtZUNvbmZpZy5zdGFydFNjZW5lLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25PcGVuU2NlbmUpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGNyZWF0ZTNkU2NlbmUoKXtcclxuXHRcdC8v5re75YqgM0TlnLrmma9cclxuXHRcdGxldCBzY2VuZSA9IExheWEuc3RhZ2UuYWRkQ2hpbGQobmV3IExheWEuU2NlbmUzRCgpKSBhcyBMYXlhLlNjZW5lM0Q7XHJcblxyXG5cdFx0Ly/mt7vliqDnhafnm7jmnLpcclxuXHRcdGxldCBjYW1lcmEgPSAoc2NlbmUuYWRkQ2hpbGQobmV3IExheWEuQ2FtZXJhKDAsIDAuMSwgMTAwKSkpIGFzIExheWEuQ2FtZXJhO1xyXG5cdFx0Y2FtZXJhLnRyYW5zZm9ybS50cmFuc2xhdGUobmV3IExheWEuVmVjdG9yMygxLCAxLCAzKSk7XHJcblx0XHQvLyBjYW1lcmEudHJhbnNmb3JtLnJvdGF0ZShuZXcgTGF5YS5WZWN0b3IzKC0zMCwgMCwgMCksIHRydWUsIGZhbHNlKTtcclxuXHRcdGNhbWVyYS5jbGVhckZsYWcgPSBMYXlhLkJhc2VDYW1lcmEuQ0xFQVJGTEFHX0RFUFRIT05MWTtcclxuXHJcblx0XHQvL+a3u+WKoOaWueWQkeWFiVxyXG5cdFx0bGV0IGRpcmVjdGlvbkxpZ2h0ID0gc2NlbmUuYWRkQ2hpbGQobmV3IExheWEuRGlyZWN0aW9uTGlnaHQoKSkgYXMgTGF5YS5EaXJlY3Rpb25MaWdodDtcclxuXHRcdGRpcmVjdGlvbkxpZ2h0LmNvbG9yID0gbmV3IExheWEuVmVjdG9yMygwLjYsIDAuNiwgMC42KTtcclxuXHRcdGRpcmVjdGlvbkxpZ2h0LnRyYW5zZm9ybS53b3JsZE1hdHJpeC5zZXRGb3J3YXJkKG5ldyBMYXlhLlZlY3RvcjMoMSwgLTEsIDApKTtcclxuXHJcblx0XHR0aGlzLm9uT3BlblNjZW5lKHNjZW5lKTtcclxuXHR9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb25PcGVuU2NlbmUoc2NlbmU/OkxheWEuU2NlbmUzRCB8IExheWEuU2NlbmUpe1xyXG5cdFx0aWYoc2NlbmUpe1xyXG5cdFx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHNjZW5lKTtcclxuICAgICAgICAgICAgdGhpcy5DdXJTY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2NlbmUuYWRkQ29tcG9uZW50KE1hbmFnZXIuU2NlbmVNYW5hZ2VyKTtcclxuICAgICAgICAgICAgc2NlbmUuYWRkQ29tcG9uZW50KE1hbmFnZXIuSHR0cE1hbmFnZXIpO1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRDb21wb25lbnQoTWFuYWdlci5VSU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRDb21wb25lbnQoTWFuYWdlci5EYXRhTWFuYWdlcik7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZENvbXBvbmVudChHYW1lU2NlbmUpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vQ29tbW9uL1V0aWxzXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCBHRXZlbnQgZnJvbSBcIi4uL0NvbW1vbi9HRXZlbnRcIjtcclxuXHJcbi8vY29jb3PnlKhcclxuLy8gbGV0IGxvYWRlZFBhY2thZ2U6e1trZXk6c3RyaW5nXTpib29sZWFufSA9IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXduTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBsb2FkM2RNb2RlbDtcclxuICAgIHByaXZhdGUgc3RhdGljIHBvb2xPYmpzOntba2V5OnN0cmluZ106IGFueX07XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuICAgIFxyXG4gICAgLy/liqDovb3mqKHlnotcclxuICAgIHN0YXRpYyBMb2FkM2RNb2RlbChwYXRoOnN0cmluZywgY29tcGxldGVDYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZighTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUgfHwgIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gTGF5YS5sb2FkZXIuY3JlYXRlKHBhdGgsIExheWEuSGFuZGxlci5jcmVhdGUodGhpc0FyZywgY29tcGxldGVDYWxsYmFjaykpO1xyXG5cclxuICAgICAgICBMYXlhLlNwcml0ZTNELmxvYWQocGF0aCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKT0+e1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgY29tcGxldGVDYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgIGxldCBzcCA9IENvbW1vbi5SZXNvdXJjZS5nZXRSZXMocGF0aCk7XHJcbiAgICAgICAgICAgICAgICBpZighc3ApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbXNwID0gTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUuYWRkQ2hpbGQoc3ApIGFzIExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pID0gbXNwLmdldENvbXBvbmVudChMYXlhLkFuaW1hdG9yKSBhcyBMYXlhLkFuaW1hdG9yO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaVN0YXRlOkxheWEuQW5pbWF0b3JQbGF5U3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpZihhbmkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaVN0YXRlID0gYW5pLmdldEN1cnJlbnRBbmltYXRvclBsYXlTdGF0ZSgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBtb2RlbERhdGEgPSBuZXcgQ29uZmlnLk1vZGVsRGF0YVN0cnVjdChtc3AsIGFuaSwgYW5pU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjay5jYWxsKHRoaXNBcmcsIG1vZGVsRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqDovb3nvZHmoLxcclxuICAgIHN0YXRpYyBMb2FkM2RNZXNoKHBhdGg6c3RyaW5nLCBjb21wbGV0ZUNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKCFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIENvbW1vbi5SZXNvdXJjZS5sb2FkKHBhdGgsIHRoaXNBcmcsIGNvbXBsZXRlQ2FsbGJhY2ssIG51bGwsIExheWEuTG9hZGVyLk1FU0gpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqg6L295p2Q6LSoXHJcbiAgICBzdGF0aWMgTG9hZE1hdGVyaWFsKHBhdGg6c3RyaW5nLCBjb21wbGV0ZUNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKCFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIENvbW1vbi5SZXNvdXJjZS5sb2FkKHBhdGgsIHRoaXNBcmcsIGNvbXBsZXRlQ2FsbGJhY2ssIG51bGwsIExheWEuTG9hZGVyLk1BVEVSSUFMKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WKqOaAgeWKoOi9vVVJ5YyFICBjb2Nvc+eUqFxyXG4gICAgLy8gc3RhdGljIExvYWRVSVBhY2thZ2UoX3BhdGgsIGNhbGxiYWNrKSB7XHJcbiAgICAvLyAgICAgaWYodHlwZW9mKF9wYXRoKSAhPSBcInN0cmluZ1wiKSByZXR1cm47XHJcblxyXG4gICAgLy8gICAgIGlmKGxvYWRlZFBhY2thZ2VbX3BhdGhdKXtcclxuICAgIC8vICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xyXG4gICAgLy8gICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1lbHNle1xyXG4gICAgLy8gICAgICAgICBmZ3VpLlVJUGFja2FnZS5hZGRQYWNrYWdlKF9wYXRoLCAoZXJyKT0+e1xyXG4gICAgLy8gICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgbG9hZGVkUGFja2FnZVtfcGF0aF0gPSB0cnVlO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy/ku47msaDkuK3liJvlu7rlr7nosaFcclxuICAgIHN0YXRpYyBDcmVhdGVPYmplY3RGcm9tUG9vbChfcGF0aDpzdHJpbmcsIF9zbG90OmZndWkuR0dyYXBoKSB7XHJcbiAgICAgICAgaWYoIV9wYXRoIHx8ICFfc2xvdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvL+S7juaxoOS4reWIm+W7uuS4gOS4qlNrZWxldG9u5a+56LGhXHJcbiAgICAgICAgbGV0IG9iaiA9IExheWEuUG9vbC5nZXRJdGVtKF9wYXRoKTtcclxuICAgICAgICBpZighb2JqKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8v55Sf5oiQ5ZSv5LiAZ2lkXHJcbiAgICAgICAgaWYoIW9ialsnJFBvb2xHSUQnXSl7XHJcbiAgICAgICAgICAgIG9ialsnJFBvb2xHSUQnXSA9IExheWEuVXRpbHMuZ2V0R0lEKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFvYmpbJyRQYXRoJ10pe1xyXG4gICAgICAgICAgICBvYmpbJyRQYXRoJ10gPSBfcGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb29sT2Jqc1tvYmpbJyRQb29sR0lEJ11dID0gb2JqO1xyXG5cclxuICAgICAgICBfc2xvdC5kaXNwbGF5T2JqZWN0LmFkZENoaWxkKG9iaik7XHJcblxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ku47liJvlu7pTcGluZeaIlkRyYWdvbkJvbmXliqjnlLtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBfcGF0aCDot6/lvoRcclxuICAgICAqIEBwYXJhbSAge2ZndWkuR0dyYXBofSBfc2xvdCDniLblr7nosaEgZmd1aSBncmFwaFxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nIHwgbnVtYmVyfSBfbmFtZSDliqjnlLvlkI3lrZfmiJbogIXntKLlvJVcclxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IF9pc0xvb3Ag5piv5ZCm5b6q546v5pKt5pS+77yM6buY6K6k5b6q546v5pKt5pS+XHJcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBfaXNQbGF5IOaYr+WQpueri+WNs+aSreaUvu+8jOm7mOiupOaSreaUvlxyXG4gICAgICogQHJldHVybiB7c3AuU2tlbGV0b259XHJcbiAgICAgKi9cclxuICAgIC8vIHN0YXRpYyBDcmVhdGVTcGluZShfcGF0aCwgX3Nsb3QsIF9uYW1lLCBfaXNMb29wLCBfaXNQbGF5KSB7XHJcbiAgICAvLyAgICAgaWYodHlwZW9mKF9wYXRoKSAhPSBcInN0cmluZ1wiIHx8ICFfc2xvdCB8fCAhX3Nsb3Qubm9kZSkgcmV0dXJuXHJcblxyXG4gICAgLy8gICAgIGxldCBza2VsZXRvbiA9IF9zbG90Lm5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgIC8vICAgICBpZihza2VsZXRvbiA9PSBudWxsKXtcclxuICAgIC8vICAgICAgICAgc2tlbGV0b24gPSBfc2xvdC5ub2RlLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBza2VsZXRvbi5wcmVtdWx0aXBsaWVkQWxwaGEgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAgICAgbGV0IG9uUHJvY2VzcyA9IGZ1bmN0aW9uKGNvbXBsZXRlQ291bnQsIHRvdGFsQ291bnQsIGl0ZW0pIHt9XHJcbiAgICAvLyAgICAgbGV0IGNiID0gZnVuY3Rpb24oZXJyLCByZXMpe1xyXG4gICAgLy8gICAgICAgICBza2VsZXRvbi5za2VsZXRvbkRhdGEgPSByZXM7XHJcblxyXG4gICAgLy8gICAgICAgICBfaXNMb29wID0gX2lzTG9vcD8gX2lzTG9vcDogdHJ1ZTtcclxuICAgIC8vICAgICAgICAgaWYoc2tlbGV0b24uc2tlbGV0b25EYXRhICYmIHNrZWxldG9uLnNrZWxldG9uRGF0YS5sb2FkZWQgJiYgX25hbWUpe1xyXG4gICAgLy8gICAgICAgICAgICAgc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIF9uYW1lLCBfaXNMb29wKVxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICBza2VsZXRvbi5wYXVzZWQgPSBfaXNQbGF5ID09IGZhbHNlXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBjYy5sb2FkZXIubG9hZFJlcyhfcGF0aCwgc3AuU2tlbGV0b25EYXRhLCBvblByb2Nlc3MsIGNiKVxyXG5cclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHNrZWxldG9uXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy/pgJrov4fpooTliLbkvZPliJvlu7pTcGluZVxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IF9wYXRoIFByZWZhYui3r+W+hFxyXG4gICAgICogQHBhcmFtICB7Zmd1aS5HR3JhcGh9IF9zbG90IOeItuWvueixoSBmZ3VpIGdyYXBoXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsbGJhY2sg5Yqo55S75ZCN5a2X5oiW6ICF57Si5byVXHJcbiAgICAgKi9cclxuICAgIC8vIHN0YXRpYyBDcmVhdGVTcGluZUZyb21QcmVmYWIoX3BhdGgsIF9zbG90LCBjYWxsYmFjaykge1xyXG4gICAgLy8gICAgIGlmKHR5cGVvZihfcGF0aCkgIT0gXCJzdHJpbmdcIiB8fCAhX3Nsb3QgfHwgIV9zbG90Lm5vZGUpIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgLyoqIEB0eXBlIHtzcC5Ta2VsZXRvbn0gKi9cclxuICAgIC8vICAgICAvLyBsZXQgc2tlbGV0b247XHJcbiAgICAvLyAgICAgY2MubG9hZGVyLmxvYWRSZXMoX3BhdGgsIGNjLlByZWZhYiwgZnVuY3Rpb24oZXJyLCBwcmVmYWIpIHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGxldCBwcmVmYWJOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgIC8vICAgICAgICAgICAgIC8qKiBAdHlwZSB7c3AuU2tlbGV0b259ICovXHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgc2tlbGV0b24gPSAgcHJlZmFiTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgLy8gICAgICAgICAgICAgX3Nsb3Qubm9kZS5hZGRDaGlsZChwcmVmYWJOb2RlKTtcclxuICAgIC8vICAgICAgICAgICAgIHByZWZhYk5vZGUucG9zaXRpb24gPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKHNrZWxldG9uKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBHRXZlbnQuRGlzcGF0Y2goR0V2ZW50LlNQSU5FX1BSRUZBQl9MT0FERUQpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBzdGF0aWMgTG9hZFZpZXcocGtnOnN0cmluZywgY29tOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXBrZyB8fCAhY29tKSByZXR1cm47XHJcblxyXG4gICAgICAgIENvbW1vbi5SZXNvdXJjZS5hZGRVaVBhY2thZ2UocGtnKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZ3Jvb3RJbnN0ID0gZmd1aS5HUm9vdC5pbnN0O1xyXG4gICAgICAgIGxldCB1aSA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChwa2csIGNvbSkuYXNDb207XHJcbiAgICAgICAgaWYodWkpe1xyXG4gICAgICAgICAgICBncm9vdEluc3QuYWRkQ2hpbGQodWkpO1xyXG4gICAgICAgICAgICB1aS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8v5bCP5ri45oiP6YCC6YWNXHJcbiAgICAgICAgICAgIHVpLnNldFNpemUoZ3Jvb3RJbnN0LndpZHRoLCBncm9vdEluc3QuaGVpZ2h0KTtcclxuICAgICAgICAgICAgdWkuc2V0WFkoMCwgMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsIHRvIGFkZCB1aSBwYWNrYWdlOiBcIiwgcGtnLCBjb20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlQmFzZXtcclxuICAgIHByb3RlY3RlZCBfc3RhdGU6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBDb25maWcuU3RhdGVDb25maWcuSURFTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VyU3RhdGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdGUoc3RhdGU6c3RyaW5nKXtcclxuICAgICAgICBpZih0aGlzLl9zdGF0ZSA9PSBzdGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vVUkvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxubGV0IHRpbWVySWQgPSAtMVxyXG4vL+iuoeaXtuWZqOaxoFxyXG5sZXQgdGltZXJQb29sID0gbmV3IEFycmF5PFRpbWVyPigpXHJcbmxldCB0aW1lckxpc3QgPSBuZXcgQXJyYXk8VGltZXI+KClcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lciB7XHJcbiAgICBwdWJsaWMgSWQ6bnVtYmVyO1xyXG4gICAgcHVibGljIE1heENkOm51bWJlcjtcclxuICAgIHB1YmxpYyBDdXJDZCA9IDA7XHJcbiAgICBwdWJsaWMgT25TdGFydDpGdW5jdGlvbjtcclxuICAgIHB1YmxpYyBPblVwZGF0ZTpGdW5jdGlvbjtcclxuICAgIHB1YmxpYyBPbkVuZDpGdW5jdGlvbjtcclxuICAgIHB1YmxpYyBUYXJnZXQ7XHJcbiAgICBwdWJsaWMgVGhpc0FyZzpDb21tb24uRXZlbnREaXNwYXRoZXI7XHJcbiAgICBwdWJsaWMgRW5kVGltZSA9IDA7XHJcbiAgICBwdWJsaWMgSXNSdW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc1N0YXJ0ID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNBbGl2ZSA9IHRydWU7XHJcbiAgICBwdWJsaWMgU3RhcnRUaW1lOm51bWJlcjtcclxuICAgIHByaXZhdGUgYXV0b1JlbW92ZTpib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBJbml0KGNkOm51bWJlciwgc3RhcnRDYWxsYmFjazpGdW5jdGlvbiwgdXBkYXRlQ2FsbGJhY2s6RnVuY3Rpb24sIGVuZENhbGxiYWNrOkZ1bmN0aW9uLCB0YXJnZXQsIHRoaXNBcmcsIGF1dG9SZW1vdmU/OmJvb2xlYW4sIGF1dG9TdGFydD86Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5JZCA9IHRpbWVySWQgKyAxXHJcbiAgICAgICAgdGhpcy5NYXhDZCA9IGNkXHJcbiAgICAgICAgdGhpcy5DdXJDZCA9IDBcclxuICAgICAgICB0aGlzLk9uU3RhcnQgPSBzdGFydENhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5PblVwZGF0ZSA9IHVwZGF0ZUNhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5PbkVuZCA9IGVuZENhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5UYXJnZXQgPSB0YXJnZXRcclxuICAgICAgICB0aGlzLlRoaXNBcmcgPSB0aGlzQXJnXHJcbiAgICAgICAgdGhpcy5FbmRUaW1lID0gMFxyXG4gICAgICAgIHRoaXMuSXNSdW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuSXNTdGFydCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5Jc0FsaXZlID0gdHJ1ZVxyXG4gICAgICAgIC8v6buY6K6k6Ieq5Yqo6ZSA5q+BXHJcbiAgICAgICAgdGhpcy5hdXRvUmVtb3ZlID0gYXV0b1JlbW92ZSAhPSBudWxsPyBhdXRvUmVtb3ZlOiB0cnVlO1xyXG4gICAgICAgIC8v6buY6K6k6Ieq5Yqo5byA5aeLXHJcbiAgICAgICAgaWYoYXV0b1N0YXJ0ICE9IGZhbHNlKXtcclxuICAgICAgICAgICAgdGhpcy5TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGUoKXtcclxuICAgICAgICBpZighdGhpcy5Jc0FsaXZlKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGN1cnJ0aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBpZihjdXJydGltZSA8IHRoaXMuRW5kVGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMuQ3VyQ2QgPSAodGhpcy5FbmRUaW1lIC0gY3VycnRpbWUpICogMC4wMDFcclxuICAgICAgICAgICAgaWYodHlwZW9mKHRoaXMuT25VcGRhdGUpID09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uVXBkYXRlLmNhbGwodGhpcy5UaGlzQXJnLCB0aGlzLkN1ckNkLCB0aGlzLlRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLlVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5Jc1J1biA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuSXNTdGFydCA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICBpZih0eXBlb2YodGhpcy5PbkVuZCkgPT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuT25FbmQuY2FsbCh0aGlzLlRoaXNBcmcsIHRoaXMuVGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hdXRvUmVtb3ZlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU3RhcnQoKXtcclxuICAgICAgICB0aGlzLklzUnVuID0gdHJ1ZVxyXG5cclxuICAgICAgICBpZighdGhpcy5Jc1N0YXJ0KXtcclxuICAgICAgICAgICAgdGhpcy5Jc1N0YXJ0ID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5TdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAvL+iuoeaXtue7k+adn+aXtumXtFxyXG4gICAgICAgICAgICB0aGlzLkVuZFRpbWUgPSB0aGlzLlN0YXJ0VGltZSArIHRoaXMuTWF4Q2QgKiAxMDAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZih0eXBlb2YodGhpcy5PblN0YXJ0KSA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuT25TdGFydC5jYWxsKHRoaXMuVGhpc0FyZywgdGhpcy5UYXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBSZXNldENkKGNkKXtcclxuICAgICAgICBpZih0eXBlb2YoY2QpICE9IFwibnVtYmVyXCIpIHJldHVyblxyXG5cclxuICAgICAgICB0aGlzLk1heENkID0gY2RcclxuICAgICAgICB0aGlzLkVuZFRpbWUgPSBEYXRlLm5vdygpICsgdGhpcy5NYXhDZCAqIDEwMDBcclxuICAgIH1cclxuXHJcbiAgICBSZW1vdmUoKXtcclxuICAgICAgICAvLyB0aGlzLk1heENkID0gMDtcclxuICAgICAgICAvLyB0aGlzLkN1ckNkID0gMDtcclxuICAgICAgICB0aGlzLk9uU3RhcnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuT25VcGRhdGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuT25FbmQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLlRoaXNBcmcgPSBudWxsO1xyXG4gICAgICAgIC8vIHRoaXMuRW5kVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5Jc1J1biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuSXNTdGFydCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuSXNBbGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL+enu+WKqOWIsOmmluS9jVxyXG4gICAgICAgIGxldCBpbmRleCA9IHRpbWVyUG9vbC5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgIGlmKGluZGV4ID4gMCl7XHJcbiAgICAgICAgICAgIHRpbWVyUG9vbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aW1lclBvb2wudW5zaGlmdCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lck1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHt9IHRoaXNBcmcg5omn6KGM5Z+fXHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGNkXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gc3RhcnRDYWxsYmFjayDlvIDlp4vlm57osINcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSB1cGRhdGVDYWxsYmFjayDov4fnqIvlm57osINcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBlbmRDYWxsYmFjayDnu5PmnZ/lm57osINcclxuICAgICAqIEBwYXJhbSAge30gdGFyZ2V0IOiuoeaXtuebruagh1xyXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gYXV0b1JlbW92ZSDmmK/lkKboh6rliqjliLfmlrDvvIzpu5jorqToh6rliqhcclxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGF1dG9TdGFydCDmmK/lkKboh6rliqjlvIDlp4vvvIzpu5jorqToh6rliqhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIE5ld1RpbWVyKHRoaXNBcmcsIGNkOm51bWJlciwgc3RhcnRDYWxsYmFjazpGdW5jdGlvbiwgdXBkYXRlQ2FsbGJhY2s6RnVuY3Rpb24sIGVuZENhbGxiYWNrOkZ1bmN0aW9uLCB0YXJnZXQ/LCBhdXRvUmVtb3ZlPzpib29sZWFuLCBhdXRvU3RhcnQ/OmJvb2xlYW4pe1xyXG4gICAgICAgIGxldCB0ID0gdGltZXJQb29sWzBdO1xyXG4gICAgICAgIGlmKCF0IHx8IHQuSXNBbGl2ZSl7XHJcbiAgICAgICAgICAgIHQgPSBuZXcgVGltZXIoKVxyXG4gICAgICAgICAgICB0aW1lckxpc3RbdC5JZF0gPSB0XHJcbiAgICAgICAgICAgIHRpbWVyUG9vbC5wdXNoKHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHQuSW5pdChjZCwgc3RhcnRDYWxsYmFjaywgdXBkYXRlQ2FsbGJhY2ssIGVuZENhbGxiYWNrLCB0YXJnZXQsIHRoaXNBcmcsIGF1dG9SZW1vdmUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgUmVtb3ZlVGltZXIodGhpc0FyZzpDb21tb24uRXZlbnREaXNwYXRoZXIpe1xyXG4gICAgICAgIGlmKCF0aGlzQXJnKSByZXR1cm47XHJcbiAgICAgICAgdGltZXJQb29sLmZvckVhY2godGltZXI9PntcclxuICAgICAgICAgICAgaWYodGltZXIuVGhpc0FyZyAmJiB0aW1lci5UaGlzQXJnLmlkID09IHRoaXNBcmcuaWQpe1xyXG4gICAgICAgICAgICAgICAgdGltZXIuUmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgUmVtb3ZlQWxsVGltZXIoKXtcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGltZXJMaXN0KXtcclxuICAgICAgICAgICAgdGltZXJMaXN0W2ldLlJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgVXBkYXRlKCl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRpbWVyTGlzdCl7XHJcbiAgICAgICAgICAgIGlmKHRpbWVyTGlzdFtpXS5Jc0FsaXZlKXtcclxuICAgICAgICAgICAgICAgIHRpbWVyTGlzdFtpXS5VcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ2xlYXJBbGxUaW1lcigpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aW1lckxpc3Qpe1xyXG4gICAgICAgICAgICB0aW1lckxpc3RbaV0uUmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aW1lckxpc3RbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vVUkvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbi8v5by65Yi25byV5a+8XHJcbmxldCBHdWlkZUxpc3QgPSBuZXcgQXJyYXk8Zmd1aS5HQ29tcG9uZW50PigpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJTWFuYWdlciBleHRlbmRzIE1hbmFnZXIuQmFzZU1hbmFnZXIge1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfaW5zdDpVSU1hbmFnZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3QoKXtcclxuICAgICAgICBpZighdGhpcy5faW5zdCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3QgPSBuZXcgVUlNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdDtcclxuICAgIH1cclxuXHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgVUlNYW5hZ2VyLl9pbnN0ID0gdGhpcztcclxuICAgICAgICBVSU1hbmFnZXIuc2V0VWlLZXlzKCk7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRVaUtleXMoKXtcclxuICAgICAgICBsZXQgY2ZnID0gQ29uZmlnLlZpZXdLaXQ7XHJcbiAgICAgICAgVUkuTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlci5pbml0KGNmZy5Mb2FkaW5nUHJvZ3Jlc3MuS2V5LCBVSS5Mb2FkaW5nUHJvZ3Jlc3NWaWV3KTtcclxuICAgICAgICBVSS5Mb2FkaW5nQ29udHJvbGxlci5pbml0KGNmZy5Mb2FkaW5nTWFpbi5LZXksIFVJLkxvYWRpbmdWaWV3KTtcclxuICAgICAgICBVSS5DaG9vc2VTZXJ2aWNlQ29udHJvbGxlci5pbml0KGNmZy5DaG9vc2VTZXJ2aWNlLktleSwgVUkuQ2hvb3NlU2VydmljZVZpZXcpO1xyXG4gICAgICAgIFVJLlB1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXIuaW5pdChjZmcuUHVibGljQ29uZmlybWF0aW9uLktleSwgVUkuUHVibGljQ29uZmlybWF0aW9uVmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkTGlzdGVuZXJzKCl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIENvbmZpZy5WaWV3S2l0KXtcclxuICAgICAgICAgICAgbGV0IGNmZzpDb25maWcuVmlld0NvbmZpZyA9IENvbmZpZy5WaWV3S2l0W2ldO1xyXG4gICAgICAgICAgICBpZihjZmcgJiYgY2ZnLktleSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoY2ZnLktleSwgdGhpcy5nb09wZW4uYmluZCh0aGlzLCBjZmcuS2V5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uVWlOb3RpY2VFaWQuQ2xvc2VDb250cm9sbGVyLCB0aGlzLm9uQ2xvc2VDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlVpTm90aWNlRWlkLk9wZW5GdWxsU2NyZWVuLCB0aGlzLm9uT3BlbkZ1bGxzY3JlZW4pO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uVWlOb3RpY2VFaWQuQ2xvc2VGdWxsU2NyZWVuLCB0aGlzLm9uQ2xvc2VGdWxsc2NyZWVuKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlUG9wdXAsIHRoaXMub3Blbk5leHRQb3B1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ29PcGVuKGtleSwgLi4uZGF0YSl7XHJcbiAgICAgICAgbGV0IGMgPSBDb3JlLkN0cmxNYXBBcnJheVtrZXldIGFzIHR5cGVvZiBDb3JlLkNvbnRyb2xsZXI7XHJcbiAgICAgICAgaWYoYyl7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkNvbnRyb2xsZXIoYywgLi4uZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvcGVuQ29udHJvbGxlcihjdHJsOnR5cGVvZiBDb3JlLkNvbnRyb2xsZXIsIC4uLl9kYXRhKSB7XHJcbiAgICAgICAgaWYoIWN0cmwpIHJldHVyblxyXG5cclxuICAgICAgICBsZXQgY0tleSA9IGN0cmwuS2V5O1xyXG4gICAgICAgIGxldCBjdHJsSW5zdCA9IENvcmUuT3BlbmVkQ3RybFtjS2V5XTtcclxuICAgICAgICBpZighY3RybEluc3QgfHwgY3RybEluc3QuSXNEZXN0cm95ZWQpe1xyXG4gICAgICAgICAgICBjdHJsSW5zdCA9IG5ldyBjdHJsKGN0cmwuS2V5LCBjdHJsLnZpZXcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvL+WPquWFgeiuuOWIm+W7uuS4gOS4quWunuS+i1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udHJvbGxlciBoYXMgb3BlbmVkOiAnLCBjS2V5KTtcclxuICAgICAgICAgICAgY3RybEluc3Quc2hvdyguLi5fZGF0YSk7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5zZXRDaGlsZEluZGV4KENvcmUuVmlld01hcFtjS2V5XS5VSSwgZmd1aS5HUm9vdC5pbnN0Lm51bUNoaWxkcmVuKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tPcGVuQ3RybEluc3QoY3RybEluc3QsIC4uLl9kYXRhKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGRvbmUgPSBjdHJsSW5zdC5jcmVhdGUoKTtcclxuICAgICAgICAvLyBpZihkb25lKXtcclxuICAgICAgICAvLyAgICAgY3RybEluc3Qub3BlbiguLi5fZGF0YSlcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihcIk9wZW4gY29udHJvbGxlciBmYWlsZWRcIik7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIC8v6K6+572u5riy5p+T5bGC57qnXHJcbiAgICAgICAgLy8gaWYoY3RybEluc3QuSXNQb3B1cCl7XHJcbiAgICAgICAgLy8gICAgIGN0cmxJbnN0LlNvcnRpbmdPcmRlcihDb25maWcuVUlDb25maWcuU29ydGluZ09yZGVyLlBvcHVwKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBjdHJsSW5zdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjaGVja09wZW5DdHJsSW5zdChjdHJsSW5zdDpDb3JlLkNvbnRyb2xsZXIsIC4uLl9kYXRhKXtcclxuICAgICAgICBpZihjdHJsSW5zdC5Jc1BvcHVwKXtcclxuICAgICAgICAgICAgY3RybEluc3QgPSB0aGlzLmdldE5leHRQb3B1cChjdHJsSW5zdCwgLi4uX2RhdGEpO1xyXG4gICAgICAgICAgICBpZighY3RybEluc3QpIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkb25lID0gY3RybEluc3QuY3JlYXRlKCk7XHJcbiAgICAgICAgaWYoZG9uZSl7XHJcbiAgICAgICAgICAgIGN0cmxJbnN0Lm9wZW4oLi4uX2RhdGEpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJPcGVuIGNvbnRyb2xsZXIgZmFpbGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iuvue9rua4suafk+Wxgue6p1xyXG4gICAgICAgIGlmKGN0cmxJbnN0LklzUG9wdXApe1xyXG4gICAgICAgICAgICBjdHJsSW5zdC5Tb3J0aW5nT3JkZXIoQ29uZmlnLlVJQ29uZmlnLlNvcnRpbmdPcmRlci5Qb3B1cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3RybEluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lhbPpl63nlYzpnaLlpITnkIZcclxuICAgIHN0YXRpYyBvbkNsb3NlQ29udHJvbGxlcihja2V5OnN0cmluZyl7XHJcbiAgICAgICAgbGV0IGN0cmwgPSBDb3JlLk9wZW5lZEN0cmxbY2tleV0gYXMgQ29yZS5Db250cm9sbGVyO1xyXG4gICAgICAgIC8v5riF6Zmk5omA5pyJ6K6h5pe25ZmoXHJcbiAgICAgICAgTWFuYWdlci5UaW1lck1hbmFnZXIuUmVtb3ZlVGltZXIoY3RybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lhajlsY/nlYzpnaLlpITnkIZcclxuICAgIHN0YXRpYyBvbk9wZW5GdWxsc2NyZWVuKGNrZXk6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmhpZGVPdGhlclVJKGNrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvbkNsb3NlRnVsbHNjcmVlbihja2V5OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5zaG93T3RoZXJVSShja2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGlkZU90aGVyVUkoY2tleTpzdHJpbmcpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiBDb3JlLk9wZW5lZEN0cmwpe1xyXG4gICAgICAgICAgICBpZihpID09IGNrZXkpIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN0cmwgPSBDb3JlLk9wZW5lZEN0cmxbaV07XHJcbiAgICAgICAgICAgIGlmKGN0cmwgJiYgY3RybC5Jc1Nob3cpe1xyXG4gICAgICAgICAgICAgICAgY3RybC5WaWV3LlVJLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd090aGVyVUkoY2tleTpzdHJpbmcpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiBDb3JlLk9wZW5lZEN0cmwpe1xyXG4gICAgICAgICAgICBpZihpID09IGNrZXkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdHJsID0gQ29yZS5PcGVuZWRDdHJsW2ldO1xyXG4gICAgICAgICAgICBpZihjdHJsICYmIGN0cmwuSXNTaG93KXtcclxuICAgICAgICAgICAgICAgIGN0cmwuVmlldy5VSS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGF0aWMgb3Blbkd1aWRlID0gZnVuY3Rpb24oZ3VpZGVOYW1lLCB0YXJnZXRDb20pe1xyXG4gICAgLy8gICAgIGlmKCFndWlkZU5hbWUpIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgbGV0IGdyb290SW5zdCA9IGZndWkuR1Jvb3QuaW5zdFxyXG5cclxuICAgIC8vICAgICBsZXQgZ3VpZGVDb20gPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoQ29uZmlnLlZpZXdLaXQuR3VpZGVyLlBrZywgZ3VpZGVOYW1lKS5hc0NvbVxyXG4gICAgLy8gICAgIEd1aWRlTGlzdFtndWlkZU5hbWVdID0gZ3VpZGVDb21cclxuXHJcbiAgICAvLyAgICAgZ3Jvb3RJbnN0LmFkZENoaWxkKGd1aWRlQ29tKVxyXG4gICAgLy8gICAgIGd1aWRlQ29tLnNldFNpemUoZ3Jvb3RJbnN0LndpZHRoLCBncm9vdEluc3QuaGVpZ2h0KVxyXG4gICAgLy8gICAgIGxldCBndWlkZU1hc2sgPSBndWlkZUNvbS5nZXRDaGlsZChcIk1hc2tcIilcclxuICAgIC8vICAgICBpZih0YXJnZXRDb20pe1xyXG4gICAgLy8gICAgICAgICBndWlkZU1hc2suc2V0WFkodGFyZ2V0Q29tLngsIHRhcmdldENvbS55KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBzdGF0aWMgY2xvc2VHdWlkZSA9IGZ1bmN0aW9uKGd1aWRlTmFtZSl7XHJcbiAgICAgICAgaWYoIUd1aWRlTGlzdFtndWlkZU5hbWVdKSByZXR1cm47XHJcblxyXG4gICAgICAgIEd1aWRlTGlzdFtndWlkZU5hbWVdLmRpc3Bvc2UoKTtcclxuICAgICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5leHRHdWlkZSA9IGZ1bmN0aW9uKGd1aWRlTmFtZSl7XHJcbiAgICAgICAgaWYoIUd1aWRlTGlzdFtndWlkZU5hbWVdKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSBpbiBHdWlkZUxpc3Qpe1xyXG4gICAgICAgICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXSAmJiBHdWlkZUxpc3RbZ3VpZGVOYW1lXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIEd1aWRlTGlzdFtndWlkZU5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFBvcHVwTWFwID0gbmV3IEFycmF5PHR5cGVvZiBDb3JlLkNvbnRyb2xsZXI+KCk7XHJcbiAgICBzdGF0aWMgUG9wdXBRdWV1ZSA9IG5ldyBBcnJheTxDb3JlLkNvbnRyb2xsZXI+KCk7XHJcbiAgICBzdGF0aWMgUG9wdXBEYXRhID0ge307XHJcblxyXG5cclxuICAgIC8v5omT5byA5by556qXXHJcbiAgICBzdGF0aWMgb3BlblBvcHVwIChwb3B1cEN0cmw6dHlwZW9mIENvcmUuQ29udHJvbGxlciwgZGF0YSl7XHJcbiAgICAgICAgaWYoIXBvcHVwQ3RybCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZihVSU1hbmFnZXIuUG9wdXBNYXAubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5Qb3B1cE1hcC5wdXNoKHBvcHVwQ3RybCk7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5Qb3B1cERhdGFbcG9wdXBDdHJsLktleV0gPSBkYXRhO1xyXG4gICAgICAgICAgICBsZXQgcG9wdXAgPSBVSU1hbmFnZXIuUG9wdXBNYXAuc2hpZnQoKTtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5Db250cm9sbGVyKHBvcHVwLCBVSU1hbmFnZXIuUG9wdXBEYXRhW3BvcHVwLktleV0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIub3BlbkNvbnRyb2xsZXIocG9wdXBDdHJsLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0TmV4dFBvcHVwIChwb3B1cEN0cmw6Q29yZS5Db250cm9sbGVyLCAuLi5kYXRhKXtcclxuICAgICAgICBpZighcG9wdXBDdHJsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKFVJTWFuYWdlci5Qb3B1cFF1ZXVlLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBRdWV1ZS5wdXNoKHBvcHVwQ3RybCk7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5Qb3B1cERhdGFbcG9wdXBDdHJsLm11bHRpdG9uS2V5XSA9IGRhdGE7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBVSU1hbmFnZXIuUG9wdXBRdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gcG9wdXBDdHJsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+W8gOS4i+S4gOS4quW8ueeql1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb3Blbk5leHRQb3B1cCAoKXtcclxuICAgICAgICAvLyBVSU1hbmFnZXIuUG9wdXBNYXAuc29tZSgodmFsdWUsIGlkeCk9PntcclxuICAgICAgICAvLyAgICAgaWYocG9wdXBDdHJsIGluc3RhbmNlb2YgdmFsdWUpe1xyXG4gICAgICAgIC8vICAgICAgICAgVUlNYW5hZ2VyLlBvcHVwTWFwLnNwbGljZShpZHgsIDEpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gVUlNYW5hZ2VyLlBvcHVwRGF0YVtwb3B1cEN0cmwubXVsdGl0b25LZXldID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYoVUlNYW5hZ2VyLlBvcHVwUXVldWUubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5Qb3B1cFF1ZXVlLnBvcCgpO1xyXG4gICAgICAgICAgICBsZXQgcG9wdXAgPSBVSU1hbmFnZXIuUG9wdXBRdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgICAgICBpZihwb3B1cCl7XHJcbiAgICAgICAgICAgICAgICBVSU1hbmFnZXIuY2hlY2tPcGVuQ3RybEluc3QocG9wdXAsIC4uLlVJTWFuYWdlci5Qb3B1cERhdGFbcG9wdXAubXVsdGl0b25LZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+W8gOaWh+Wtl+ehruiupOW8ueeql1xyXG4gICAgc3RhdGljIG9wZW5Db25maXJtV2luZG93KGNvbnRlbnQ6c3RyaW5nW10sIHllc0J0bkNhbGxiYWNrPzpGdW5jdGlvbiwgYnRuWWVzVHh0PzpzdHJpbmcsIGJ0bkNhbmNlbFR4dD86c3RyaW5nKXtcclxuICAgICAgICB0aGlzLm9wZW5Qb3B1cChVSS5QdWJsaWNDb25maXJtYXRpb25Db250cm9sbGVyLCBuZXcgQ29uZmlnLlBvcHVwV2luZG93RGF0YShjb250ZW50LCB5ZXNCdG5DYWxsYmFjaywgQ29uZmlnLkNvbmZpcm1XaW5kb3dUeXBlLkNvbnRlbnQsIGJ0blllc1R4dCwgYnRuQ2FuY2VsVHh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIDlpZblirHlvLnnqpdcclxuICAgIHN0YXRpYyBvcGVuUmV3YXJkV2luZG93KHJld2FyZERhdGEsIHllc0J0bkNhbGxiYWNrPzpGdW5jdGlvbiwgYnRuWWVzVHh0PzpzdHJpbmcsIGJ0bkNhbmNlbFR4dD86c3RyaW5nKXtcclxuICAgICAgICB0aGlzLm9wZW5Qb3B1cChVSS5QdWJsaWNDb25maXJtYXRpb25Db250cm9sbGVyLCBuZXcgQ29uZmlnLlBvcHVwV2luZG93RGF0YShudWxsLCB5ZXNCdG5DYWxsYmFjaywgQ29uZmlnLkNvbmZpcm1XaW5kb3dUeXBlLlJld2FyZCwgcmV3YXJkRGF0YSwgYnRuWWVzVHh0LCBidG5DYW5jZWxUeHQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+W8gOaWh+WtlyvlpZblirHlvLnnqpdcclxuICAgIHN0YXRpYyBvcGVuQ29udGVudFJld2FyZFdpbmRvdyhjb250ZW50OnN0cmluZ1tdLCByZXdhcmREYXRhLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5vcGVuUG9wdXAoVUkuUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlciwgbmV3IENvbmZpZy5Qb3B1cFdpbmRvd0RhdGEoXHJcbiAgICAgICAgICAgIGNvbnRlbnQsIFxyXG4gICAgICAgICAgICB5ZXNCdG5DYWxsYmFjaywgXHJcbiAgICAgICAgICAgIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5Db250ZW50QW5kUmV3YXJkLCBcclxuICAgICAgICAgICAgcmV3YXJkRGF0YSwgXHJcbiAgICAgICAgICAgIGJ0blllc1R4dCwgXHJcbiAgICAgICAgICAgIGJ0bkNhbmNlbFR4dFxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG59IiwiXHJcbi8v54mI5pys566h55CGXHJcbmV4cG9ydCBjbGFzcyBWZXJzaW9uTWFuYWdlcntcclxuICAgIHByaXZhdGUgc3RhdGljIF92ZXJzaW9uOm51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHN0YXRpYyBzZXQgVmVyc2lvbih2ZXJzaW9uOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBWZXJzaW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4vQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hvb3NlU2VydmljZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb3JlLkNvbnRyb2xsZXJ7XHJcbiAgICBWaWV3OlVJLkNob29zZVNlcnZpY2VWaWV3O1xyXG5cclxuICAgIG9uQ3JlYXRlKCl7XHJcbiAgICAgICAgdGhpcy5Tb3J0aW5nT3JkZXIoQ29uZmlnLlVJQ29uZmlnLlNvcnRpbmdPcmRlci5OZXRTaWduYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b25MaXNlbnRlcih0aGlzLlZpZXcuTG9jYWwsIHRoaXMub3BlbkxvY2FsU2VydmljZSk7XHJcblxyXG4gICAgICAgIHRoaXMuVmlldy5BY2NvdW50TmFtZS50ZXh0ID0gTG9jYWxDb25maWcuR2V0QWNvdW50TmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Mb2NhbFNlcnZpY2UoKXtcclxuICAgICAgICBsZXQgYWNjb3VudCA9IHRoaXMuVmlldy5BY2NvdW50TmFtZS50ZXh0O1xyXG4gICAgICAgIGlmKHR5cGVvZihhY2NvdW50KSA9PSAnc3RyaW5nJyAmJiBhY2NvdW50Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBDb25maWcuTmV0Q29uZmlnLlRlbXBOYW1lID0gYWNjb3VudDtcclxuICAgICAgICAgICAgTG9jYWxDb25maWcuU2F2ZUFjb3VudE5hbWUoYWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9IENvbmZpZy5OZXRDb25maWcuTG9jYWxSZXF1ZXN0VXJsO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuSHR0cFNlcnZpY2UoKXtcclxuICAgICAgICBDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwgPSBDb25maWcuTmV0Q29uZmlnLkh0dHBSZXF1ZXN0VXJsO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTG9jYWxXZWNoYXRTZXJ2aWNlKCl7XHJcbiAgICAgICAgQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID0gQ29uZmlnLk5ldENvbmZpZy5Mb2NhbFdlY2hhdFJlcXVlc3RVcmw7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+ivt+axguWcsOWdgO+8micsQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsKTtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZSgpe1xyXG4gICAgICAgIExvY2FsQ29uZmlnLklzQ2hvb3NlZFNlcnZpY2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uU2NlbmVMb2dpbkVpZC5TZXJ2aWNlQ2hvb3NlZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaG9vc2VTZXJ2aWNlVmlldyBleHRlbmRzIENvcmUuVmlld3tcclxuICAgIExvY2FsOmZndWkuR09iamVjdDtcclxuICAgIEh0dHA6Zmd1aS5HT2JqZWN0O1xyXG4gICAgTG9jYWxXZWNoYXQ6Zmd1aS5HT2JqZWN0O1xyXG4gICAgQWNjb3VudE5hbWU6Zmd1aS5HVGV4dElucHV0O1xyXG5cclxuICAgIExvYWRWaWV3KCkge1xyXG4gICAgICAgIHRoaXMuTG9jYWwgPSB0aGlzLlVJLmdldENoaWxkKFwiTG9jYWxcIilcclxuICAgICAgICB0aGlzLkh0dHAgPSB0aGlzLlVJLmdldENoaWxkKFwiSHR0cFwiKVxyXG4gICAgICAgIHRoaXMuTG9jYWxXZWNoYXQgPSB0aGlzLlVJLmdldENoaWxkKFwiTG9jYWxXZWNoYXRcIilcclxuXHJcbiAgICAgICAgdGhpcy5BY2NvdW50TmFtZSA9IHRoaXMuVUkuZ2V0Q2hpbGQoXCJBY2NvdW50TmFtZVwiKS5hc1RleHRJbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc3Ryb3koKXtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG4vKiogQHR5cGUge09iamVjdDxzdHJpbmcsIENvbnRyb2xsZXI+fSAqL1xyXG4vLyBsZXQgQ3RybE1hcDpDb25maWcuRGljdGlvbmFyeTxDb250cm9sbGVyPiA9IHt9O1xyXG5cclxuLyoqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBWaWV3Pn0gKi9cclxubGV0IFZpZXdNYXA6e1trZXk6c3RyaW5nXTpWaWV3fSA9IHt9O1xyXG5cclxuLyoqIEB0eXBlIHtDb250cm9sbGVyW119ICovXHJcbmxldCBPcGVuZWRDdHJsOkNvbmZpZy5EaWN0aW9uYXJ5PENvbnRyb2xsZXI+ID0ge307XHJcblxyXG5leHBvcnQgbGV0IEN0cmxNYXBBcnJheTpDb25maWcuRGljdGlvbmFyeTx0eXBlb2YgQ29udHJvbGxlcj4gPSB7fTtcclxuXHJcbmNsYXNzIEN0cmxMaXNlbmVye1xyXG4gICAgcHVibGljIE9iajpmZ3VpLkdPYmplY3Q7XHJcbiAgICBwdWJsaWMgTGlzZW5lcjpGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvYmo6Zmd1aS5HT2JqZWN0LCBsaXNlbmVyOkZ1bmN0aW9uKXtcclxuICAgICAgICBpZighb2JqKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuT2JqID0gb2JqO1xyXG4gICAgICAgIHRoaXMuTGlzZW5lciA9IGxpc2VuZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCl7XHJcbiAgICAgICAgdGhpcy5PYmoub2ZmQ2xpY2sodGhpcywgdGhpcy5MaXNlbmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtPcGVuZWRDdHJsLCBWaWV3TWFwfVxyXG5cclxuLy8vIDxzdW1tYXJ5PlxyXG4vLy8g5ZCRVWlNYW5hZ2VyIOazqOWGjOiEmuacrCDov5jmnInkuIDkupsgTVNHSURcclxuLy8vIOS4gOiIrOaYr3BhbmVsIOaMgui9vei/meagt+eahOiEmuacrCDpnIDopoHlkJHlhbbku5bmqKHlnZcg5oiW6ICF6ISa5pys6YCa5L+hXHJcbi8vLyA8L3N1bW1hcnk+XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVaUNWQmFzZSBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlcntcclxuICAgIHB1YmxpYyBtdWx0aXRvbktleTpzdHJpbmc7XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgLy/ph43lhpnmraTnu4Tku7bmlrnms5Xlv4XpobvmiafooYxcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBVaUNWQmFzZXtcclxuICAgIHN0YXRpYyBjS2V5OnN0cmluZztcclxuICAgIHN0YXRpYyB2aWV3OnR5cGVvZiBWaWV3O1xyXG5cclxuICAgIHB1YmxpYyBWaWV3OlZpZXc7XHJcblxyXG4gICAgcHVibGljIERhdGE7XHJcbiAgICBwdWJsaWMgSXNPcGVuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNEZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgcHVibGljIElzU2hvdyA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzUG9wdXAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0Z1bGxTY3JlZW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0RlZmF1bHQgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0ludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgbGlzZW50ZXJBcnJheSA9IG5ldyBBcnJheTxDdHJsTGlzZW5lcj4oKTtcclxuICAgIFxyXG4gICAgc3RhdGljIHNldCBLZXkoa2V5OnN0cmluZyl7dGhpcy5jS2V5ID0ga2V5fVxyXG4gICAgc3RhdGljIGdldCBLZXkoKXtyZXR1cm4gdGhpcy5jS2V5fVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihjS2V5PzpzdHJpbmcsIHZpZXc/OnR5cGVvZiBWaWV3LCBpc0Z1bGxTY3JlZW4/OmJvb2xlYW4sIGlzUG9wdXA/OmJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZighY0tleSB8fCAhdmlldykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBrZXkgb3Igdmlld1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKCFPcGVuZWRDdHJsW2NLZXldKSB7XHJcbiAgICAgICAgICAgIE9wZW5lZEN0cmxbY0tleV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGxldCB2S2V5ID0gdmlldy5LZXk7XHJcbiAgICAgICAgaWYoIVZpZXdNYXBbdktleV0pe1xyXG4gICAgICAgICAgICBWaWV3TWFwW3ZLZXldID0gbmV3IHZpZXcodktleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm11bHRpdG9uS2V5ID0gY0tleTtcclxuICAgICAgICB0aGlzLlZpZXcgPSBWaWV3TWFwW3ZLZXldO1xyXG4gICAgICAgIHRoaXMuSXNGdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuID09IHRydWU7XHJcbiAgICAgICAgdGhpcy5Jc1BvcHVwID0gaXNQb3B1cCA9PSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbml0KGNLZXksIHZpZXc6dHlwZW9mIFZpZXcsIHZLZXk/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5LZXkgPSBjS2V5O1xyXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XHJcbiAgICAgICAgdGhpcy52aWV3LktleSA9IHZLZXk/IHZLZXk6IGNLZXk7XHJcbiAgICAgICAgQ3RybE1hcEFycmF5W3RoaXMuS2V5XSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5WaWV3KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyB2aWV3IGNyZWF0ZWQhXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSXNEZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlZpZXcuSW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ3JlYXRlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oX2RhdGE/KSB7XHJcbiAgICAgICAgdGhpcy5Jc09wZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuRGF0YSA9IF9kYXRhO1xyXG5cclxuICAgICAgICAvLyBGYWNhZGUuUHVzaEN0cmwodGhpcywgdGhpcy5EYXRhKTtcclxuICAgICAgICB0aGlzLnNob3coX2RhdGEpO1xyXG4gICAgICAgIHRoaXMub3Blbk92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuT3ZlcigpIHtcclxuICAgICAgICBpZih0aGlzLklzRnVsbFNjcmVlbil7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uVWlOb3RpY2VFaWQuT3BlbkZ1bGxTY3JlZW4sIHRoaXMubXVsdGl0b25LZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5Jc1BvcHVwKXtcclxuICAgICAgICAgICAgdGhpcy5Tb3J0aW5nT3JkZXIoQ29uZmlnLlVJQ29uZmlnLlNvcnRpbmdPcmRlci5Qb3B1cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uT3Blbih0aGlzLkRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJ1dHRvbkxpc2VudGVyKG9iamVjdDpmZ3VpLkdPYmplY3QsIGZ1bjpGdW5jdGlvbiwgZGF0YT86QXJyYXk8YW55PiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKG9iamVjdCA9PSBudWxsIHx8IGZ1biA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm9iamVjdCBvciBmdW4gaXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpc0FyZyA9IHRoaXNBcmc/dGhpc0FyZzogdGhpcztcclxuICAgICAgICBvYmplY3Qub25DbGljayh0aGlzQXJnLCBmdW4sIGRhdGEpO1xyXG4gICAgICAgIHRoaXMubGlzZW50ZXJBcnJheS5wdXNoKG5ldyBDdHJsTGlzZW5lcihvYmplY3QsIGZ1bikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIGlmKHRoaXMuSXNPcGVuID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuSXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uVWlOb3RpY2VFaWQuQ2xvc2VDb250cm9sbGVyLCB0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLklzUG9wdXApe1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlUG9wdXAsIHRoaXMubXVsdGl0b25LZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5Jc0Z1bGxTY3JlZW4pe1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlRnVsbFNjcmVlbiwgdGhpcy5tdWx0aXRvbktleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkZWxldGUgQ3RybE1hcFt0aGlzLm11bHRpdG9uS2V5XTtcclxuICAgICAgICAvLyBPcGVuZWRDdHJsLnNwbGljZShPcGVuZWRDdHJsLmluZGV4T2YodGhpcyksIDEpO1xyXG4gICAgICAgIE9wZW5lZEN0cmxbdGhpcy5tdWx0aXRvbktleV0gPSBudWxsO1xyXG5cclxuICAgICAgICAvL+a4heepuueCueWHu+S6i+S7tlxyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aGlzLmxpc2VudGVyQXJyYXkpe1xyXG4gICAgICAgICAgICB0aGlzLmxpc2VudGVyQXJyYXlbaV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzZW50ZXJBcnJheVtpXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+a4hemZpOebkeWQrOS6i+S7tlxyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgIC8v5riF6Zmk5omA5pyJ6K6h5pe25ZmoXHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5Jc0Rlc3Ryb3llZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLklzRGVzdHJveWVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuVmlldyAmJiB0aGlzLlZpZXcuZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5WaWV3LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuVmlldyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Jc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkRhdGEgPSBudWxsO1xyXG5cclxuICAgICAgICAvL+mUgOavgeiKgueCuVxyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaYvuekuueVjOmdolxyXG4gICAgc2hvdyhkYXRhPykge1xyXG4gICAgICAgIGRhdGEgPSBkYXRhPyBkYXRhOiB0aGlzLkRhdGE7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLklzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbihkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5pyqb3BlbueKtuaAge+8jOS4jeWkhOeQhlxyXG4gICAgICAgIGlmICghdGhpcy5Jc09wZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuSXNTaG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5Jc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICB0aGlzLlZpZXcuc2hvdyhkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSXNTaG93ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uU2hvdyhkYXRhKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDpmpDol4/nlYzpnaJcclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLklzU2hvdykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5Jc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICB0aGlzLlZpZXcuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5Jc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uSGlkZSgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiuvue9rua4suafk+mhuuW6j1xyXG4gICAgU29ydGluZ09yZGVyKG9yZGVyOm51bWJlcikge1xyXG4gICAgICAgIGlmKCF0aGlzLklzRGVzdHJveWVkKXtcclxuICAgICAgICAgICAgdGhpcy5WaWV3LlNvcnRpbmdPcmRlcihvcmRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOaYr+WQpuWPr+inpuaOp1xyXG4gICAgaW50ZXJhY3RpdmUoY2FuVG91Y2g6Ym9vbGVhbil7XHJcbiAgICAgICAgaWYoY2FuVG91Y2ggPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Jc0ludGVyYWN0aXZlID0gY2FuVG91Y2g7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5Jc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICB0aGlzLlZpZXcuaW50ZXJhY3RpdmUoY2FuVG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm9uSW50ZXJhY3RpdmUoY2FuVG91Y2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hVSShkYXRhPyl7XHJcbiAgICAgICAgdGhpcy5WaWV3LnJlZnJlc2hVSShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKCkge31cclxuXHJcbiAgICBvbkNyZWF0ZSgpIHt9XHJcblxyXG4gICAgb25PcGVuKGRhdGE/KSB7fVxyXG5cclxuICAgIG9uU2hvdyhkYXRhPykge31cclxuXHJcbiAgICBvbkhpZGUoKSB7fVxyXG4gICAgXHJcbiAgICBvbkludGVyYWN0aXZlKGNhblRvdWNoOmJvb2xlYW4pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3IGV4dGVuZHMgVWlDVkJhc2Uge1xyXG4gICAgc3RhdGljIHZLZXk6c3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgbGlzZW50ZXJBcnJheSA9IG5ldyBBcnJheTxDdHJsTGlzZW5lcj4oKTtcclxuICAgIHByaXZhdGUgX2lzQWxpdmU6Ym9vbGVhbjtcclxuICAgIC8vIHB1YmxpYyBtdWx0aXRvbktleTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIEZ1aUltYWdlVXJsOnN0cmluZztcclxuICAgIHByaXZhdGUgRnVpQnVmZmVyVXJsOnN0cmluZztcclxuICAgIHByaXZhdGUgUGtnQWRyczpzdHJpbmc7XHJcbiAgICBwcml2YXRlIFBrZzpzdHJpbmc7XHJcbiAgICBwcml2YXRlIENvbTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9VSTpmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIENhbGxiYWNrTGlzdDpBcnJheTxGdW5jdGlvbj4gPSBbXTtcclxuICAgIHByaXZhdGUgdWlDZmc6Q29uZmlnLlZpZXdDb25maWc7XHJcblxyXG4gICAgcHVibGljIFdpbmRvdzpmZ3VpLkdDb21wb25lbnQ7IC8v5by55Ye656qX5Y+j77yM5rOo5oSP57uE5Lu25ZG95ZCN5Li6V2luZG93XHJcbiAgICBwdWJsaWMgQnRuX0JhY2s6Zmd1aS5HQnV0dG9uOyAgIC8v5YWz6Zet5oyJ6ZKu77yM5ZG95ZCN5Li6QnRuX0JhY2tcclxuICAgIHB1YmxpYyBMaXN0OmZndWkuR0xpc3Q7ICAvL+WIl+ihqO+8jOmcgOiHquihjOWumuS5iVxyXG5cclxuICAgIHN0YXRpYyBzZXQgS2V5KGtleTpzdHJpbmcpe3RoaXMudktleSA9IGtleX1cclxuICAgIHN0YXRpYyBnZXQgS2V5KCl7cmV0dXJuIHRoaXMudktleX1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3Ioa2V5OnN0cmluZyl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm11bHRpdG9uS2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuX2lzQWxpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZighVmlld01hcFtrZXldKSB7XHJcbiAgICAgICAgICAgIFZpZXdNYXBba2V5XSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVpQ2ZnID0gQ29uZmlnLlZpZXdLaXRba2V5XTtcclxuICAgICAgICBpZighdGhpcy51aUNmZyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luY29ycmVjdCB2aWV3IGtleSEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgVUkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVUk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IElzQWxpdmUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNBbGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0aWFsaXplKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX1VJKXtcclxuICAgICAgICAgICAgdGhpcy5fVUkgPSBNYW5hZ2VyLlNwYXduTWFuYWdlci5Mb2FkVmlldyh0aGlzLnVpQ2ZnLlBrZywgdGhpcy51aUNmZy5Db20pO1xyXG4gICAgICAgICAgICBpZighdGhpcy5fVUkpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBVaSBjb206ICcsIHRoaXMudWlDZmcuS2V5KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLldpbmRvdyA9IHRoaXMuVUkuZ2V0Q2hpbGQoJ1dpbmRvdycpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuTG9hZFZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZShrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZighVmlld01hcFtrZXldKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmlld01hcFtrZXldID0gbmV3IFZpZXcoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBWaWV3TWFwW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNhbGxiYWNrS2V5XHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgc2V0Q2FsbGJhY2soY2FsbGJhY2tLZXk6c3RyaW5nLCBjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICAgICAgdGhpcy5DYWxsYmFja0xpc3RbY2FsbGJhY2tLZXldID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaW52b2tlQ2FsbGJhY2soY2FsbGJhY2tLZXksIC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmKHR5cGVvZihjYWxsYmFja0tleSkgIT0gJ3N0cmluZycgfHwgdHlwZW9mKHRoaXMuQ2FsbGJhY2tMaXN0W2NhbGxiYWNrS2V5XSkgIT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkNhbGxiYWNrTGlzdFtjYWxsYmFja0tleV0oLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQnV0dG9uTGlzZW50ZXIob2JqZWN0OmZndWkuR09iamVjdCwgZnVuOkZ1bmN0aW9uLCBkYXRhPzpBcnJheTxhbnk+LCB0aGlzQXJnPyl7XHJcbiAgICAgICAgaWYob2JqZWN0ID09IG51bGwgfHwgZnVuID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwib2JqZWN0IG9yIGZ1biBpcyBudWxsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzQXJnID0gdGhpc0FyZz90aGlzQXJnOiB0aGlzO1xyXG4gICAgICAgIG9iamVjdC5vbkNsaWNrKHRoaXNBcmcsIGZ1biwgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5saXNlbnRlckFycmF5LnB1c2gobmV3IEN0cmxMaXNlbmVyKG9iamVjdCwgZnVuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tMaXN0Q2FsbGJhY2sodGhpc0FyZywgZnVuYzpGdW5jdGlvbiwgLi4uZGF0YSl7XHJcbiAgICAgICAgQ29tbW9uLmNsaWNrTGlzdENhbGxiYWNrKHRoaXMuTGlzdCwgdGhpc0FyZywgZnVuYywgLi4uZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2lzQWxpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy/muIXpmaTnm5HlkKzkuovku7ZcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICAvL+a4hemZpOaJgOacieiuoeaXtuWZqFxyXG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgLy/muIXnqbrngrnlh7vkuovku7ZcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5saXNlbnRlckFycmF5KXtcclxuICAgICAgICAgICAgdGhpcy5saXNlbnRlckFycmF5W2ldLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc2VudGVyQXJyYXlbaV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVsZXRlIFZpZXdNYXBbdGhpcy5tdWx0aXRvbktleV1cclxuICAgICAgICBcclxuICAgICAgICAvLyBmb3IobGV0IGkgaW4gdGhpcykge1xyXG4gICAgICAgIC8vICAgICAvLyDplIDmr4FVSVxyXG4gICAgICAgIC8vICAgICAvLyBpZih0aGlzW2ldICYmIHRoaXNbaV0uZGlzcG9zZSkge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgdGhpc1tpXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgLy8gICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXNbaV0gPSB1bmRlZmluZWRcclxuXHJcbiAgICAgICAgLy8gICAgIC8vIGlmKHRoaXNbaV0gaW5zdGFuY2VvZiBmZ3VpLkdDb21wb25lbnQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICB0aGlzW2ldLmRpc3BsYXlPYmplY3Qub2ZmQWxsKCk7XHJcbiAgICAgICAgLy8gICAgIC8vIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMuX1VJLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIG9uRGVzdHJveSgpe31cclxuXHJcbiAgICBMb2FkVmlldygpIHt9XHJcblxyXG4gICAgcmVmcmVzaFVJKGRhdGE/KSB7fVxyXG5cclxuICAgIGludGVyYWN0aXZlKGNhblRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5fVUkudG91Y2hhYmxlID0gY2FuVG91Y2g7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBTb3J0aW5nT3JkZXIob3JkZXIpIHtcclxuICAgICAgICB0aGlzLl9VSS5zb3J0aW5nT3JkZXIgPSBvcmRlcjtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIHNob3coZGF0YT8pe1xyXG4gICAgICAgIHRoaXMuX1VJLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKXtcclxuICAgICAgICB0aGlzLl9VSS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNhZGV7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHN0YXRpYyBQdXNoQ3RybChjdHJsOkNvbnRyb2xsZXIsIGRhdGE/KXtcclxuICAgICAgICBpZighY3RybCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBPcGVuZWRDdHJsW2N0cmwubXVsdGl0b25LZXldID0gY3RybDtcclxuICAgICAgICBsZXQgbmV4dGMgPSBPcGVuZWRDdHJsW09iamVjdC5rZXlzKE9wZW5lZEN0cmwpWzBdXTtcclxuICAgICAgICBpZihuZXh0Yyl7XHJcbiAgICAgICAgICAgIG5leHRjLnNob3coZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb250cm9sbGVyKGlkKXtcclxuICAgICAgICBsZXQgY3RybCA9IEN0cmxNYXBBcnJheVtpZF07XHJcbiAgICAgICAgaWYoY3RybClcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjdHJsKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tICcuLi9EYXRhL0RhdGEnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbnRyb2xsZXIgZXh0ZW5kcyBVSS5Db250cm9sbGVye1xyXG4gICAgcHVibGljIFZpZXc6VUkuTG9hZGluZ1ZpZXc7XHJcblxyXG4gICAgb25PcGVuKGRhdGEpIHtcclxuICAgICAgICB0aGlzLlZpZXcuU2hvd19DLnNlbGVjdGVkSW5kZXggPSAxO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLk5ldEh0dHBDb25uZWN0RWlkLkNvbm5lY3RCZWdpbiwgdGhpcy5vcGVuSHR0cFN0YXJ0KTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLk5ldEh0dHBDb25uZWN0RWlkLlNlcnZpY2VSZXNwb25kLCB0aGlzLm9uSHR0cFJlc3BvbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2FkaW5nKCl7XHJcbiAgICAgICAgdGhpcy5WaWV3LlNob3dfQy5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTG9hZGluZygpe1xyXG4gICAgICAgIHRoaXMuVmlldy5TaG93X0Muc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ov57mjqXlrozmiJBcclxuICAgIG9uSHR0cFJlc3BvbmQoKXtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+W8gOWni+i/nuaOpVxyXG4gICAgb3Blbkh0dHBTdGFydCgpe1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKXtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5vZmYoY2MuRGlyZWN0b3IuRVZFTlRfQkVGT1JFX1NDRU5FX0xPQURJTkcsIHRoaXMuY2xvc2UsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Db25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdQcm9ncmVzc0NvbnRyb2xsZXIgZXh0ZW5kcyBDb3JlLkNvbnRyb2xsZXJ7XHJcbiAgICBwdWJsaWMgVmlldzpVSS5Mb2FkaW5nUHJvZ3Jlc3NWaWV3O1xyXG4gICAgcHVibGljIFByb2dyZXNzID0gMDtcclxuICAgIHB1YmxpYyBJc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBQa2dOdW0gPSAwO1xyXG4gICAgcHJpdmF0ZSBSZXNOdW0gPSAwO1xyXG5cclxuICAgIG9uT3BlbihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSBcIjAlXCI7XHJcblxyXG4gICAgICAgIC8v5byA5Y+R54mI5YWI5pi+56S66YCJ5pyN5Yqh5Zmo55S76Z2iXHJcbiAgICAgICAgLy8gaWYoTWFuYWdlci5WZXJzaW9uTWFuYWdlci5WZXJzaW9uID09IENvbmZpZy5WZXJzaW9uQ29uZmlnLkRldmVsb3Ape1xyXG4gICAgICAgIC8vICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3NOdW1iZXIoKTtcclxuICAgICAgICB0aGlzLnNpbVByb2dyZXNzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5QYWNrYWdlTG9hZGVkLCB0aGlzLm9uUmVzTG9hZGVkKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuTG9naW5TdWNjZXNzLCB0aGlzLm9uTG9naW5TdWNjZXNzKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuQ29uZmlnTG9hZGVkLCB0aGlzLnRyeUNsb3NlKTtcclxuICAgICAgICAvL+i/m+WcuuaZr+S5n+mcgOimgeetieW+heaooeaLn+i/m+W6plxyXG5cdFx0Ly8gdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUVudGVyRWlkLk1haW5NZW51LCB0aGlzLnRyeUNsb3NlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFByb2dyZXNzTnVtYmVyKCl7XHJcbiAgICAgICAgLy/nmbvlvZXpnIDopoHliqDovb3nmoRVSeWMheaVsOmHjy0tY29jb3PnlKhcclxuICAgICAgICAvLyB0aGlzLlBrZ051bSA9IFVJQ29uZmlnLlVJUGtncy5sZW5ndGggKiAyO1xyXG4gICAgICAgIHRoaXMuUmVzTnVtID0gQ29uZmlnLmxvZ2luUmVzVXJscy5sZW5ndGggKyBDb25maWcudXJscy5sZW5ndGggKyA1O1xyXG5cclxuICAgICAgICAvL+Wwj+a4uOaIj+WKoOS4iuWIhuWMhei/m+W6plxyXG4gICAgICAgIGlmKENvbW1vbi5pc01pbmlHYW1lKCkpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5Qa2dOdW0gKz0gVUlDb25maWcuU3ViUGtncy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzTnVtICs9IENvbmZpZy5VSUNvbmZpZy5TdWJQa2dzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VpUHJvZ3Jlc3MocHJvZ3Jlc3M6bnVtYmVyLCBwa2dOYW1lPzpzdHJpbmcpe1xyXG4gICAgICAgIHBrZ05hbWUgPSBwa2dOYW1lIHx8ICcnO1xyXG4gICAgICAgIHRoaXMuVmlldy5VSS50ZXh0ID0gJ0xvYWRpbmcgdWkgJyArIHBrZ05hbWUgKyAnOiAnICsgcHJvZ3Jlc3MgKiAxMDAgKyAnJSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lgYfov5vluqZcclxuICAgIHNpbVByb2dyZXNzKCl7XHJcbiAgICAgICAgdGhpcy5Qcm9ncmVzcyArPSAxMDAgLyB0aGlzLlJlc051bTtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLmNlaWwodGhpcy5Qcm9ncmVzcyk7XHJcbiAgICAgICAgcHJvZ3Jlc3MgPSBwcm9ncmVzcyA+IDEwMD8gMTAwOiBwcm9ncmVzcztcclxuICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9IHByb2dyZXNzICsgXCIlXCI7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuUHJvZ3Jlc3MgPj0gMTAwKXtcclxuICAgICAgICAgICAgdGhpcy50cnlDbG9zZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMTAwLCB0aGlzLCB0aGlzLnNpbVByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9ncmVzcyhhZGRQcm9ncmVzcyl7XHJcbiAgICAgICAgdGhpcy5Qcm9ncmVzcyArPSAxMDAgLyB0aGlzLlBrZ051bTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlByb2dyZXNzKTtcclxuICAgICAgICAvLyB0aGlzLlByb2dyZXNzID0gdGhpcy5Qcm9ncmVzcyA+IDEwMD8gMTAwOiB0aGlzLlByb2dyZXNzO1xyXG5cclxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLmNlaWwodGhpcy5Qcm9ncmVzcyk7XHJcbiAgICAgICAgcHJvZ3Jlc3MgPSBwcm9ncmVzcyA+IDEwMD8gMTAwOiBwcm9ncmVzcztcclxuICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9IHByb2dyZXNzICsgXCIlXCI7XHJcblxyXG4gICAgICAgIC8v5Yqg6L295a6M5oiQVUnljIVcclxuICAgICAgICBpZih0aGlzLlByb2dyZXNzID49IDEwMCl7XHJcbiAgICAgICAgICAgIHRoaXMuSXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlNjZW5lTG9naW5FaWQuUGFja2FnZUxvYWRlZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dXeExvZ2luKCk7XHJcbiAgICAgICAgICAgIC8vIGlmKERhdGFCYXNlLkxvZ2luRGF0YS5BY2NvdW50TmFtZSl7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1d4TG9naW4oKXtcclxuICAgICAgICBpZighQ29tbW9uLmlzTWluaUdhbWUoKSB8fCBMb2NhbENvbmZpZy5Jc1d4QXV0aCB8fCAhdGhpcy5Jc0xvYWRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLlZpZXcuc2hvd1d4TG9naW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q29uZmlnUHJvZ3Jlc3MoKXtcclxuICAgICAgICBpZihDb25maWcuRGF0YUNvbmZpZy5Jc0NvbmZpZ0xvYWRlZCA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIHRoaXMuVmlldy5VSS50ZXh0ID0gXCLliqDovb3phY3nva7kuK1cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0xvZ2luUHJvZ3Jlc3MoKXtcclxuICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9IFwi55m75b2V5LitXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2dpblN1Y2Nlc3MoKXtcclxuICAgICAgICB0aGlzLnRyeUNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNMb2FkZWQoKXtcclxuICAgICAgICB0aGlzLklzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRyeUNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mu6HotrPmiYDmnInmnaHku7bmiY3lhbPpl63liqDovb3nlYzpnaJcclxuICAgIHRyeUNsb3NlKCl7XHJcbiAgICAgICAgaWYodGhpcy5Qcm9ncmVzcyA8IDEwMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZihNYW5hZ2VyLlZlcnNpb25NYW5hZ2VyLlZlcnNpb24gPT0gQ29uZmlnLlZlcnNpb25Db25maWcuRGV2ZWxvcCl7XHJcbiAgICAgICAgICAgIGlmKCFMb2NhbENvbmZpZy5Jc0Nob29zZWRTZXJ2aWNlKSByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihDb25maWcuRGF0YUNvbmZpZy5Jc0NvbmZpZ0xvYWRlZCA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpZ1Byb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKERhdGEuTG9naW5EYXRhLklzTG9naW5lZCAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvZ2luUHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIUNvbmZpZy5VSUNvbmZpZy5Mb2dpblBhY2thZ2VMb2FkZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKXtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2ltUHJvZ3Jlc3NFbmQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7VUlDb25maWd9IGZyb20gXCIuLi9Db25maWcvVUlDb25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUHJvZ3Jlc3NWaWV3IGV4dGVuZHMgQ29yZS5WaWV3e1xyXG4gICAgcHVibGljIExvZ2luX0M6Zmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIExvYWRWaWV3KCkge1xyXG4gICAgICAgIC8v5riy5p+T5bGC57qnXHJcbiAgICAgICAgdGhpcy5VSS5zb3J0aW5nT3JkZXIgPSBVSUNvbmZpZy5Tb3J0aW5nT3JkZXIuU2NlbmVMb2FkaW5nO1xyXG5cclxuICAgICAgICB0aGlzLkxvZ2luX0MgPSB0aGlzLlVJLmdldENvbnRyb2xsZXIoJ0xvZ2luX0MnKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93V3hMb2dpbigpe1xyXG4gICAgICAgIHRoaXMuTG9naW5fQy5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tICcuLi9EYXRhL0RhdGEnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1ZpZXcgZXh0ZW5kcyBVSS5WaWV3e1xyXG4gICAgcHVibGljIFNob3dfQzpmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgTG9hZFZpZXcoKSB7XHJcbiAgICAgICAgLy/muLLmn5PlsYLnuqdcclxuICAgICAgICB0aGlzLlVJLnNvcnRpbmdPcmRlciA9IENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuTmV0U2lnbmFsO1xyXG5cclxuICAgICAgICB0aGlzLlNob3dfQyA9IHRoaXMuVUkuZ2V0Q29udHJvbGxlcihcIlNob3dfQ1wiKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQge1VJQ29uZmlnfSBmcm9tIFwiLi4vQ29uZmlnL1VJQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4vQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuXHJcbmxldCBjS2V5ID0gQ29uZmlnLlZpZXdLaXQuUHVibGljQ29uZmlybWF0aW9uLktleTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdWJsaWNDb25maXJtYXRpb25Db250cm9sbGVyIGV4dGVuZHMgQ29yZS5Db250cm9sbGVye1xyXG4gICAgc3RhdGljIGNLZXkgPSBjS2V5O1xyXG4gICAgVmlldzpVSS5QdWJsaWNDb25maXJtYXRpb25WaWV3O1xyXG4gICAgQ2FsbGJhY2s6RnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcihjS2V5LCBVSS5QdWJsaWNDb25maXJtYXRpb25WaWV3LCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuKGRhdGE6Q29uZmlnLlBvcHVwV2luZG93RGF0YSkge1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uTGlzZW50ZXIodGhpcy5WaWV3LkJ0bl9DbG9zZSwgdGhpcy5jbG9zZSk7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b25MaXNlbnRlcih0aGlzLlZpZXcuQnRuX0NhbmNlbCwgdGhpcy5jbG9zZSk7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b25MaXNlbnRlcih0aGlzLlZpZXcuQnRuX1llcywgdGhpcy55ZXNCdG5PbkNsaWNrKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihkYXRhID09IG51bGwgfHwgZGF0YSBpbnN0YW5jZW9mIENvbmZpZy5Qb3B1cFdpbmRvd0RhdGEgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHBvcHVwIHdpbmRvdyBkYXRhLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuQ2FsbGJhY2sgPSBkYXRhLlllc0J0bkNhbGxiYWNrO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hVSShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgeWVzQnRuT25DbGljaygpe1xyXG4gICAgICAgIGlmKHRoaXMuQ2FsbGJhY2spe1xyXG4gICAgICAgICAgICB0aGlzLkNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZSgpe1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7VUlDb25maWd9IGZyb20gXCIuLi9Db25maWcvVUlDb25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxubGV0IHZLZXkgPSBDb25maWcuVmlld0tpdC5QdWJsaWNDb25maXJtYXRpb24uS2V5O1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1YmxpY0NvbmZpcm1hdGlvblZpZXcgZXh0ZW5kcyBDb3JlLlZpZXd7XHJcbiAgICBzdGF0aWMgdktleSA9IHZLZXk7XHJcbiAgICBCdG5fQ2xvc2U6Zmd1aS5HQnV0dG9uO1xyXG4gICAgQnRuX1llczpmZ3VpLkdCdXR0b247XHJcbiAgICBCdG5fQ2FuY2VsOmZndWkuR0J1dHRvbjtcclxuICAgIExpc3RfQ29udGVudDpmZ3VpLkdMaXN0O1xyXG4gICAgTGlzdF9SZXdhcmQ6Zmd1aS5HTGlzdDtcclxuICAgIENvbnRlbnRfQzpmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBCdG5UeXBlX0M6Zmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIodktleSlcclxuICAgIH1cclxuXHJcbiAgICBMb2FkVmlldygpIHtcclxuICAgICAgICB0aGlzLkJ0bl9DbG9zZSA9IHRoaXMuV2luZG93LmdldENoaWxkKCdCdG5fQ2xvc2UnKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLkJ0bl9ZZXMgPSB0aGlzLldpbmRvdy5nZXRDaGlsZCgnQnRuX1llcycpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuQnRuX0NhbmNlbCA9IHRoaXMuV2luZG93LmdldENoaWxkKCdCdG5fQ2FuY2VsJykuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5MaXN0X0NvbnRlbnQgPSB0aGlzLldpbmRvdy5nZXRDaGlsZCgnTGlzdF9Db250ZW50JykuYXNMaXN0O1xyXG4gICAgICAgIHRoaXMuTGlzdF9SZXdhcmQgPSB0aGlzLldpbmRvdy5nZXRDaGlsZCgnTGlzdF9SZXdhcmQnKS5hc0xpc3Q7XHJcbiAgICAgICAgdGhpcy5Db250ZW50X0MgPSB0aGlzLldpbmRvdy5nZXRDb250cm9sbGVyKCdDb250ZW50X0MnKTtcclxuICAgICAgICB0aGlzLkJ0blR5cGVfQyA9IHRoaXMuV2luZG93LmdldENvbnRyb2xsZXIoJ0J0blR5cGVfQycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hVSShkYXRhOkNvbmZpZy5Qb3B1cFdpbmRvd0RhdGEpe1xyXG4gICAgICAgIGlmKCFkYXRhKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuQ29udGVudF9DLnNlbGVjdGVkSW5kZXggPSBkYXRhLldpbmRvd1R5cGUgLSAxO1xyXG4gICAgICAgIHN3aXRjaCAoZGF0YS5XaW5kb3dUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLkNvbmZpcm1XaW5kb3dUeXBlLkNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJ0blR5cGVfQy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbENvbnRlbnRzKGRhdGEuQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDb25maWcuQ29uZmlybVdpbmRvd1R5cGUuUmV3YXJkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5CdG5UeXBlX0Muc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxSZXdhcmRzKGRhdGEuUmV3YXJkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLkNvbmZpcm1XaW5kb3dUeXBlLkNvbnRlbnRBbmRSZXdhcmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJ0blR5cGVfQy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbENvbnRlbnRzKGRhdGEuQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxSZXdhcmRzKGRhdGEuUmV3YXJkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5oyJ6ZKu5paH5a2XXHJcbiAgICAgICAgaWYoZGF0YS5ZZXNCdG5Db250ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5CdG5fWWVzLnRleHQgPSBkYXRhLlllc0J0bkNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRhdGEuQ2FuY2VsQnRuQ29udGVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuQnRuX0NhbmNlbC50ZXh0ID0gZGF0YS5DYW5jZWxCdG5Db250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaWxsQ29udGVudHMoZGF0YTpBcnJheTxzdHJpbmc+KXtcclxuICAgICAgICB0aGlzLkxpc3RfQ29udGVudC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICAgIHRoaXMuTGlzdF9Db250ZW50LmFkZEl0ZW1Gcm9tUG9vbCgpLnRleHQgPSB2O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxSZXdhcmRzKHJld2FyZERhdGE6YW55W10pe1xyXG4gICAgICAgIENvbW1vbi5maWxsSXRlbUxpc3REYXRhKHJld2FyZERhdGEsIHRoaXMuTGlzdF9SZXdhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9DaG9vc2VTZXJ2aWNlQ29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ2hvb3NlU2VydmljZVZpZXcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvcmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvYWRpbmdDb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nUHJvZ3Jlc3NWaWV3JztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nVmlldyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vUHVibGljQ29uZmlybWF0aW9uVmlldyc7XHJcbiJdfQ==

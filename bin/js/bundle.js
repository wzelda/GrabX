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
},{"../Config/Config":8,"../Config/UIConfig":18,"../Manager/Manager":36}],7:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"../Data/Data":22,"../Manager/Manager":36,"./GEvent":3,"./Utils":6}],8:[function(require,module,exports){
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
},{"./ConfigUtils":9,"./DataConfig":10,"./Define":11,"./LocalConfig":12,"./LocalContent":13,"./LoginResUrls":14,"./NetConfig":15,"./ResUrls":16,"./StateConfig":17,"./UIConfig":18}],9:[function(require,module,exports){
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
exports.StateConfig = {
    IDEL: 'IDEL',
    DEAD: 'DEAD',
    BACK_PASSED: 'BACK_PASSED',
    MOVE_FORWARD: 'MOVE_FORWARD',
    MOVE_BACK: 'MOVE_BACK',
    STOP: 'STOP',
};
},{}],18:[function(require,module,exports){
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
},{}],19:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./RigidObject"));
__export(require("./ObjectProxy"));
},{"./ObjectProxy":20,"./RigidObject":21}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = require("../Manager/Manager");
var ObjectProxy = /** @class */ (function () {
    function ObjectProxy() {
    }
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
},{"../Manager/Manager":36}],21:[function(require,module,exports){
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
    RigidObject.prototype.changeModel = function (path) {
        if (!path || this._modelPath == path)
            return;
        Core.ObjectProxy.changeModel(this.Obj, this._modelPath, path);
        this._modelPath = path;
    };
    return RigidObject;
}());
exports.RigidObject = RigidObject;
},{"../Core/Core":19,"../Manager/Manager":36}],22:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./DataBase"));
},{"./DataBase":23}],23:[function(require,module,exports){
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
},{"../Common/Common":1,"../Common/GEvent":3,"../Config/Config":8,"../Manager/Manager":36}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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
},{"./Common/Common":1,"./Config/Config":8,"./Data/Data":22,"./Logic/Logic":29,"./Manager/Manager":36}],26:[function(require,module,exports){
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
},{"../Common/Common":1}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Core = require("../Core/Core");
var Config = require("../Config/Config");
var Manager = require("../Manager/Manager");
var Data = require("../Data/Data");
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
var SPEED_HAND = 0.03;
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
        this.Hand = this.GScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(HAND_SIZE.x, HAND_SIZE.y, HAND_SIZE.z)));
        this.Desk = this.GScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(DESK_SIZE.x, DESK_SIZE.y, DESK_SIZE.z)));
        this.Hand.transform.position = HAND_POS;
        this.Desk.transform.position = DESK_POS;
        this.addPhysics(this.Hand, HAND_SIZE);
        this.addPhysics(this.Desk, DESK_SIZE);
        this.DeskClass = new Core.RigidObject(this.Desk);
        this.HandClass = new Core.RigidObject(this.Hand);
        this.addCollisionScript();
        // Laya.stage.on(Laya.Event.CLICK, this, this.knockOnce);
        Laya.stage.on(Laya.Event.CLICK, this, this.moveHand);
        Laya.stage.on(Laya.Event.DOUBLE_CLICK, this, this.restart);
        this.IsInited = true;
        this.resetVec();
        this.createTimerLine();
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
        this.Vdir.x = DESK_POS.x;
        this.Vdir.y = DESK_POS.y;
        this.Vdir.z = DESK_POS.z;
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
        this.timeLine.addLabel("stay", 0).to(this.Vdir, { y: DESK_POS.y }, _stayTime, null, 0);
    };
    GrabLogic.prototype.addKnock = function (_deltaTime) {
        _deltaTime = _deltaTime ? _deltaTime * 1000 : 0;
        this.timeLine
            .to(this.Vdir, { y: DESK_END_POS.y }, 200, null, _deltaTime)
            .to(this.Vdir, { y: DESK_POS.y }, 200, null, 0);
    };
    GrabLogic.prototype.restart = function () {
        this.deskScript.clearStatus();
        this.HandClass.State.changeState(Config.StateConfig.IDEL);
        this.moveDesk();
        this.resetHand();
    };
    GrabLogic.prototype.moveDesk = function () {
        // this.deskDown();
        this.DeskClass.State.changeState(Config.StateConfig.MOVE_FORWARD);
        this.resetVec();
        this.timeLine.reset();
        this.addKnock();
        this.addKnock(1);
        this.timeLine.play(0, true);
    };
    GrabLogic.prototype.resetDesk = function () {
        this.DeskClass.Obj.transform.position = DESK_POS;
    };
    GrabLogic.prototype.stopDesk = function () {
        this.timeLine.pause();
        this.DeskClass.State.changeState(Config.StateConfig.STOP);
    };
    GrabLogic.prototype.deskDown = function () {
        if (!this.IsInited)
            return;
        var vec = this.DeskClass.Obj.transform.position;
        vec.y -= 0.3;
        this.DeskClass.Obj.transform.position = vec;
        if (vec.y <= DESK_END_POS.y) {
            this.DeskClass.State.changeState(Config.StateConfig.MOVE_BACK);
        }
    };
    GrabLogic.prototype.deskUp = function () {
        if (!this.IsInited)
            return;
        var vec = this.DeskClass.Obj.transform.position;
        vec.y += 0.3;
        this.DeskClass.Obj.transform.position = vec;
        if (vec.y >= DESK_POS.y) {
            this.DeskClass.State.changeState(Config.StateConfig.MOVE_FORWARD);
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
                this.DeskClass.Obj.transform.position = this.Vdir;
                break;
            case Config.StateConfig.MOVE_BACK:
                // this.deskUp();
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
            this.HandClass.State.changeState(Config.StateConfig.MOVE_FORWARD);
        }
    };
    GrabLogic.prototype.handForward = function () {
        if (!this.IsInited)
            return;
        var vec = this.HandClass.Obj.transform.position;
        vec.x += SPEED_HAND * Laya.timer.delta;
        this.HandClass.Obj.transform.position = vec;
        if (this.HandClass.Obj.transform.position.x >= HAND_END_POS.x) {
            this.HandClass.State.changeState(Config.StateConfig.MOVE_BACK);
        }
    };
    GrabLogic.prototype.handBack = function () {
        if (!this.IsInited)
            return;
        if (this.HandClass.Obj.transform.position.x <= HAND_POS.x) {
            this.resetHand();
            //到达终点加分
            Data.PlayerData.Point += 100;
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>得分：", Data.PlayerData.Point);
            return;
        }
        if (this.HandClass.Obj.transform.position.x < DESK_POS.x) {
            this.HandClass.State.changeState(Config.StateConfig.BACK_PASSED);
        }
        var vec = this.HandClass.Obj.transform.position;
        vec.x -= SPEED_HAND * Laya.timer.delta;
        ;
        this.HandClass.Obj.transform.position = vec;
    };
    GrabLogic.prototype.resetHand = function () {
        this.HandClass.Obj.transform.position = HAND_POS;
        this.HandClass.State.changeState(Config.StateConfig.IDEL);
        this.enableHandGravity(false);
    };
    GrabLogic.prototype.stopHand = function () {
        this.HandClass.State.changeState(Config.StateConfig.STOP);
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
},{"../Common/Common":1,"../Config/Config":8,"../Core/Core":19,"../Data/Data":22,"../Manager/Manager":36,"./Logic":29}],28:[function(require,module,exports){
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
},{"../Common/Common":1}],29:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./GrabLogic"));
__export(require("./DeskCollisionScript"));
__export(require("./HandCollisionScript"));
},{"./DeskCollisionScript":26,"./GrabLogic":27,"./HandCollisionScript":28}],30:[function(require,module,exports){
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
},{"./GameConfig":24,"./Manager/Manager":36}],31:[function(require,module,exports){
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
},{"../Common/Common":1,"./Manager":36}],32:[function(require,module,exports){
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
},{"../Config/Config":8}],33:[function(require,module,exports){
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
},{"../Common/Common":1,"../Data/Data":22,"./Manager":36}],34:[function(require,module,exports){
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
},{"../UI/UI":56,"./Manager":36}],35:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/LocalConfig":12,"../Manager/Manager":36,"../UI/UI":56}],36:[function(require,module,exports){
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
},{"./BaseManager":31,"./ClickEffectManager":32,"./DataManager":33,"./LoadingIconManager":34,"./LoadingProgressManager":35,"./NetManager":37,"./PoolManager":38,"./RoleBase":39,"./RoleManager":40,"./SceneManager":41,"./SpawnManager":42,"./StateBase":43,"./TimerManager":44,"./UIManager":45,"./VersionManager":46}],37:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"./Manager":36}],38:[function(require,module,exports){
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
},{"../Config/Config":8,"./Manager":36}],39:[function(require,module,exports){
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
},{"../Config/Config":8,"./Manager":36}],40:[function(require,module,exports){
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
},{"../Config/Config":8,"../Manager/Manager":36}],41:[function(require,module,exports){
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
},{"../GameConfig":24,"../GameScene":25,"./Manager":36}],42:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"./Manager":36}],43:[function(require,module,exports){
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
},{"../Config/Config":8}],44:[function(require,module,exports){
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
},{}],45:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../UI/Core":49,"../UI/UI":56,"./Manager":36}],46:[function(require,module,exports){
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
},{}],47:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"./Core":49}],48:[function(require,module,exports){
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
},{"./Core":49}],49:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../Manager/Manager":36}],50:[function(require,module,exports){
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
},{"../Common/Common":1,"./UI":56}],51:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"../Config/UIConfig":18,"../Data/Data":22,"../Manager/Manager":36,"./Core":49}],52:[function(require,module,exports){
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
},{"../Config/UIConfig":18,"./Core":49}],53:[function(require,module,exports){
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
},{"../Config/Config":8,"./UI":56}],54:[function(require,module,exports){
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
},{"../Config/Config":8,"./Core":49,"./UI":56}],55:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"./Core":49}],56:[function(require,module,exports){
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
},{"./ChooseServiceController":47,"./ChooseServiceView":48,"./Core":49,"./LoadingController":50,"./LoadingProgressController":51,"./LoadingProgressView":52,"./LoadingView":53,"./PublicConfirmationController":54,"./PublicConfirmationView":55}]},{},[30])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvTGF5YUFpcklERS9yZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29tbW9uL0NvbW1vbi50cyIsInNyYy9Db21tb24vRXZlbnRUeXBlLnRzIiwic3JjL0NvbW1vbi9HRXZlbnQudHMiLCJzcmMvQ29tbW9uL0xvZ2ljVXRpbHMudHMiLCJzcmMvQ29tbW9uL1Jlc291cmNlLnRzIiwic3JjL0NvbW1vbi9VdGlscy50cyIsInNyYy9Db21tb24vV3hVdGlscy50cyIsInNyYy9Db25maWcvQ29uZmlnLnRzIiwic3JjL0NvbmZpZy9Db25maWdVdGlscy50cyIsInNyYy9Db25maWcvRGF0YUNvbmZpZy50cyIsInNyYy9Db25maWcvRGVmaW5lLnRzIiwic3JjL0NvbmZpZy9Mb2NhbENvbmZpZy50cyIsInNyYy9Db25maWcvTG9jYWxDb250ZW50LnRzIiwic3JjL0NvbmZpZy9Mb2dpblJlc1VybHMudHMiLCJzcmMvQ29uZmlnL05ldENvbmZpZy50cyIsInNyYy9Db25maWcvUmVzVXJscy50cyIsInNyYy9Db25maWcvU3RhdGVDb25maWcudHMiLCJzcmMvQ29uZmlnL1VJQ29uZmlnLnRzIiwic3JjL0NvcmUvQ29yZS50cyIsInNyYy9Db3JlL09iamVjdFByb3h5LnRzIiwic3JjL0NvcmUvUmlnaWRPYmplY3QudHMiLCJzcmMvRGF0YS9EYXRhLnRzIiwic3JjL0RhdGEvRGF0YUJhc2UudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9HYW1lU2NlbmUudHMiLCJzcmMvTG9naWMvRGVza0NvbGxpc2lvblNjcmlwdC50cyIsInNyYy9Mb2dpYy9HcmFiTG9naWMudHMiLCJzcmMvTG9naWMvSGFuZENvbGxpc2lvblNjcmlwdC50cyIsInNyYy9Mb2dpYy9Mb2dpYy50cyIsInNyYy9NYWluLnRzIiwic3JjL01hbmFnZXIvQmFzZU1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9DbGlja0VmZmVjdE1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9EYXRhTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL0xvYWRpbmdJY29uTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL0xvYWRpbmdQcm9ncmVzc01hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9NYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvTmV0TWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1Bvb2xNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvUm9sZUJhc2UudHMiLCJzcmMvTWFuYWdlci9Sb2xlTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1NjZW5lTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1NwYXduTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1N0YXRlQmFzZS50cyIsInNyYy9NYW5hZ2VyL1RpbWVyTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1VJTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1ZlcnNpb25NYW5hZ2VyLnRzIiwic3JjL1VJL0Nob29zZVNlcnZpY2VDb250cm9sbGVyLnRzIiwic3JjL1VJL0Nob29zZVNlcnZpY2VWaWV3LnRzIiwic3JjL1VJL0NvcmUudHMiLCJzcmMvVUkvTG9hZGluZ0NvbnRyb2xsZXIudHMiLCJzcmMvVUkvTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlci50cyIsInNyYy9VSS9Mb2FkaW5nUHJvZ3Jlc3NWaWV3LnRzIiwic3JjL1VJL0xvYWRpbmdWaWV3LnRzIiwic3JjL1VJL1B1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXIudHMiLCJzcmMvVUkvUHVibGljQ29uZmlybWF0aW9uVmlldy50cyIsInNyYy9VSS9VSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNWQSxpQ0FBNEI7QUFDNUIsZ0NBQTJCO0FBQzNCLDZCQUF3QjtBQUN4QixrQ0FBNkI7QUFDN0IsK0JBQTBCOzs7O0FDSjFCLHlDQUEyQztB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QixvREFBK0M7QUFDL0MsOENBQXlDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCAqIGZyb20gJy4vRXZlbnRUeXBlJztcclxuZXhwb3J0ICogZnJvbSAnLi9SZXNvdXJjZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vVXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvZ2ljVXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL1d4VXRpbHMnO1xyXG4iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0IEdFdmVudCBmcm9tIFwiLi9HRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudERpc3BhdGhlciBleHRlbmRzIExheWEuU2NyaXB0M0Qge1xyXG4gICAgcHJvdGVjdGVkIF9ldmVudExpc3QgPSBuZXcgQXJyYXk8Q29uZmlnLkV2ZW50Q2xhc3M+KCk7ICBcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX3N0YXRpY0V2ZW50TGlzdCA9IG5ldyBBcnJheTxDb25maWcuRXZlbnRDbGFzcz4oKTsgLy/pnZnmgIHmlrnms5Xkuovku7ZcclxuXHJcbiAgICAvL+mdmeaAgeaWueazlVxyXG4gICAgc3RhdGljIGFkZEV2ZW50TGlzdGVuZXIoa2V5LCBsaXNlbmVyOkZ1bmN0aW9uKXtcclxuICAgICAgICBHRXZlbnQuQWRkTGlzdGVuZXIoa2V5LCBsaXNlbmVyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9zdGF0aWNFdmVudExpc3QucHVzaChuZXcgQ29uZmlnLkV2ZW50Q2xhc3Moa2V5LCBsaXNlbmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpc3BhdGNoRXZlbnQoa2V5LCAuLi5kYXRhKXtcclxuICAgICAgICBHRXZlbnQuRGlzcGF0Y2goa2V5LCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXJFdmVudExpc3RlbmVyKCl7XHJcbiAgICAgICAgdGhpcy5fc3RhdGljRXZlbnRMaXN0LmZvckVhY2goZXZ0PT57XHJcbiAgICAgICAgICAgIEdFdmVudC5SZW1vdmVMaXN0ZW5lcihldnQuS2V5LCBldnQuTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBldnQgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcm9jZXNzRXZlbnQoa2V5LCBsaXN0ZW5lcjpGdW5jdGlvbiwgLi4uZGF0YSl7XHJcbiAgICAgICAgLy8gbGlzdGVuZXIuY2FsbCh0aGlzLCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WunuS+i+WMlumHjei9veaWueazlVxyXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoa2V5LCBsaXNlbmVyOkZ1bmN0aW9uKXtcclxuICAgICAgICBHRXZlbnQuQWRkTGlzdGVuZXIoa2V5LCBsaXNlbmVyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9ldmVudExpc3QucHVzaChuZXcgQ29uZmlnLkV2ZW50Q2xhc3Moa2V5LCBsaXNlbmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3BhdGNoRXZlbnQoa2V5LCAuLi5kYXRhKXtcclxuICAgICAgICBHRXZlbnQuRGlzcGF0Y2goa2V5LCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+W/hemhu+WcqOmUgOavgeaXtuaJp+ihjOatpOaWueazlVxyXG4gICAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoKXtcclxuICAgICAgICB0aGlzLl9ldmVudExpc3QuZm9yRWFjaChldnQ9PntcclxuICAgICAgICAgICAgR0V2ZW50LlJlbW92ZUxpc3RlbmVyKGV2dC5LZXksIGV2dC5MaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGV2dCA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByb2Nlc3NFdmVudChrZXksIGxpc3RlbmVyOkZ1bmN0aW9uLCAuLi5kYXRhKXtcclxuICAgICAgICAvLyBsaXN0ZW5lci5jYWxsKHRoaXMsIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIC8v6YeN5YaZ5q2k57uE5Lu25pa55rOV5b+F6aG75omn6KGMXHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJhc2UtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgZW51bSBFdmVudFNwYW4ge1xyXG4gICAgTW9kdWxlU3BhbiA9IDEwMDAwMCxcclxuICAgIEZ1bmNTcGFuID0gMTAwMCxcclxuICAgIFVJU3BhbiA9IDEsXHJcbn1cclxuXHJcbi8v5qih5Z2X5Yqf6IO9XHJcbmVudW0gTW9kdWxlRXR5cGUge1xyXG4gICAgU2NlbmUgPSAxLFxyXG4gICAgR2FtZSA9IDIsXHJcbiAgICBOZXQgPSAzLFxyXG4gICAgVWkgPSA0LFxyXG4gICAgTnBjID0gNSxcclxuICAgIENoYXJhY3RlciA9IDYsXHJcbiAgICBBc3NldCA9IDcsXHJcbiAgICBEYXRhID0gOCxcclxuICAgIEF1ZGlvID0gOSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTW9kdWxlRWlkIHtcclxuICAgIFNjZW5lICAgICAgID0gTW9kdWxlRXR5cGUuU2NlbmUgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgICAvL+WcuuaZr+aooeWdl1xyXG4gICAgTmV0ICAgICAgICAgPSBNb2R1bGVFdHlwZS5OZXQgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgICAvL+e9kee7nOaooeWdl1xyXG4gICAgR2FtZSAgICAgICAgPSBNb2R1bGVFdHlwZS5HYW1lICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sICAgLy/njqnms5XmqKHlnZdcclxuICAgIERhdGEgICAgICAgID0gTW9kdWxlRXR5cGUuRGF0YSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLCAgLy9VSeaooeWdl1xyXG4gICAgVWkgICAgICAgICAgPSBNb2R1bGVFdHlwZS5VaSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLCAgLy9VSeaooeWdl1xyXG4gICAgQ2hhcmFjdGVyICAgPSBNb2R1bGVFdHlwZS5DaGFyYWN0ZXIgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgLy/njqnlrrblsZ7mgKfmqKHlnZdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWFuYWdlckVpZCB7XHJcbiAgICBHYW1lTWFuYWdlciAgICAgICAgID0gTW9kdWxlRXR5cGUuR2FtZSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG4gICAgTmV0TWFuYWdlciAgICAgICAgICA9IE1vZHVsZUV0eXBlLk5ldCAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG4gICAgVWlNYW5hZ2VyICAgICAgICAgICA9IE1vZHVsZUV0eXBlLlVpICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sXHJcbiAgICBBc3NldE1hbmFnZXIgICAgICAgID0gTW9kdWxlRXR5cGUuQXNzZXQgKiBFdmVudFNwYW4uTW9kdWxlU3BhbixcclxuICAgIERhdGFNYW5hZ2VyICAgICAgICAgPSBNb2R1bGVFdHlwZS5EYXRhICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sXHJcbiAgICBBdWRpb01hbmFnZXIgICAgICAgID0gTW9kdWxlRXR5cGUuRGF0YSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3nvZHnu5zmqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBuZXRNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIE5ldE1vZHVsZUlkIHtcclxuICAgIEh0dHBDb25uZXQgICAgICAgPSBNb2R1bGVFaWQuTmV0ICsgKG5ldE1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy9IVFRQ6L+e5o6lXHJcbn1cclxuXHJcbi8vSFRUUOi/nuaOpVxyXG5sZXQgbmV0SHR0cENvbm5lY3RFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBOZXRIdHRwQ29ubmVjdEVpZCB7XHJcbiAgICBTZXJ2aWNlUmVzcG9uZCAgICAgID0gTmV0TW9kdWxlSWQuSHR0cENvbm5ldCArIG5ldEh0dHBDb25uZWN0RWlkTnVtKyssICAgIC8v5ZON5bqU5oiQ5YqfXHJcbiAgICBDb25uZWN0QmVnaW4gICAgICAgID0gTmV0TW9kdWxlSWQuSHR0cENvbm5ldCArIG5ldEh0dHBDb25uZWN0RWlkTnVtKyssICAgIC8v5byA5aeL6L+e5o6lXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWcuuaZr+aooeWdl+WKn+iDvS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IHNjZW5lTW9kdWxlTnVtID0gMTtcclxuZW51bSBTY2VuZU1vZHVsZUlkIHtcclxuICAgIExvZ2luICAgICAgID0gTW9kdWxlRWlkLlNjZW5lICsgKHNjZW5lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+eZu+W9lVxyXG4gICAgRW50ZXIgICAgICAgPSBNb2R1bGVFaWQuU2NlbmUgKyAoc2NlbmVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6L+b5YWl5Zy65pmv6YCa55+lXHJcbn1cclxuXHJcbi8v55m75b2VXHJcbmxldCBzY2VuZUxvZ2luRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gU2NlbmVMb2dpbkVpZCB7XHJcbiAgICBTZXJ2aWNlQ2hvb3NlZCAgPSBTY2VuZU1vZHVsZUlkLkxvZ2luICsgc2NlbmVMb2dpbkVpZE51bSsrLCAgICAvL+W3sumAieaLqeacjeWKoeWZqO+8jOW8gOWPkeeUqFxyXG4gICAgQ29uZmlnTG9hZGVkICAgID0gU2NlbmVNb2R1bGVJZC5Mb2dpbiArIHNjZW5lTG9naW5FaWROdW0rKywgICAgLy/phY3nva7liqDovb3lrozmiJBcclxuICAgIFBhY2thZ2VMb2FkZWQgICA9IFNjZW5lTW9kdWxlSWQuTG9naW4gKyBzY2VuZUxvZ2luRWlkTnVtKyssICAgIC8v5Yqg6L295YyF5a6M5oiQXHJcbiAgICBMb2dpblN1Y2Nlc3MgICAgPSBTY2VuZU1vZHVsZUlkLkxvZ2luICsgc2NlbmVMb2dpbkVpZE51bSsrLCAgICAvL+eZu+W9leaIkOWKn1xyXG4gICAgU2ltUHJvZ3Jlc3NFbmQgID0gU2NlbmVNb2R1bGVJZC5Mb2dpbiArIHNjZW5lTG9naW5FaWROdW0rKywgICAgLy/lgYfov5vluqbmnaHor7vlroxcclxufVxyXG5cclxuLy/ov5vlhaXlnLrmma/pgJrnn6VcclxubGV0IHNjZW5lRW50ZXJFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBTY2VuZUVudGVyRWlkIHtcclxuICAgIE1haW5NZW51ICAgICAgICA9IFNjZW5lTW9kdWxlSWQuRW50ZXIgKyBzY2VuZUVudGVyRWlkTnVtKyssICAgIC8v5Li755WM6Z2i5Zy65pmvXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeaVsOaNruaooeWdl+WKn+iDvS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IGRhdGFNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIERhdGFNb2R1bGVJZCB7XHJcbiAgICBQbGF5ZXIgICAgICAgPSBNb2R1bGVFaWQuRGF0YSArIChzY2VuZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/njqnlrrbmlbDmja5cclxuICAgIEFkb2JlICAgICAgID0gTW9kdWxlRWlkLkRhdGEgKyAoc2NlbmVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5rSe5bqc5pWw5o2uXHJcbiAgICBTZWN0ICAgICAgID0gTW9kdWxlRWlkLkRhdGEgKyAoc2NlbmVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6Zeo5rS+5pWw5o2uXHJcbn1cclxuXHJcbi8v546p5a62XHJcbmxldCBkYXRhUGxheWVyRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gRGF0YVBsYXllckVpZCB7XHJcbiAgICBSZWZyZXNoZWQgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5QbGF5ZXIgKyBkYXRhUGxheWVyRWlkTnVtKyssICAvL+aVsOaNruabtOaWsOmAmuefpVxyXG4gICAgR21BZGRCYWdJdGVtU3VjY2VzcyAgPSBEYXRhTW9kdWxlSWQuUGxheWVyICsgZGF0YVBsYXllckVpZE51bSsrLCAgLy9HTeWRveS7pOWinuWKoOiDjOWMheeJqeWTgeaIkOWKn1xyXG59XHJcblxyXG4vL+a0nuW6nFxyXG5sZXQgZGF0YUFkb2JlRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gRGF0YUFkb2JlRWlkIHtcclxuICAgIFJlZnJlc2hlZCAgICA9IERhdGFNb2R1bGVJZC5BZG9iZSArIGRhdGFBZG9iZUVpZE51bSsrLCAgICAvL+aVsOaNruabtOaWsOmAmuefpVxyXG59XHJcblxyXG4vL+mXqOa0vlxyXG5sZXQgZGF0YVNlY3RFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBEYXRhU2VjdEVpZCB7XHJcbiAgICBSZWZyZXNoZWQgICAgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/mlbDmja7mm7TmlrDpgJrnn6VcclxuICAgIEdvdEluZm8gICAgICAgICAgICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+iOt+W+l+mXqOa0vlVJ5pWw5o2uXHJcbiAgICBHb3RUYXNrSW5mbyAgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/ojrflvpfpl6jmtL7ku7vliqHmlbDmja5cclxuICAgIEdvdFRyYWluVG93ZXJJbmZvICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+iOt+W+l+S/rueCvOWhlOaVsOaNrlxyXG59XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVUnmqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCB1aU1vZHVsZU51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIHVpTW9kdWxlSWQge1xyXG4gICAgT3BlbiAgICAgICA9IE1vZHVsZUVpZC5VaSArICh1aU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/miZPlvIDnlYzpnaJcclxuICAgIE5vdGljZSAgICAgPSBNb2R1bGVFaWQuVWkgKyAodWlNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6YCa55+lXHJcbn1cclxuXHJcbi8v5omT5byA55WM6Z2iXHJcbmxldCB1aU9wZW5FaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBVaU9wZW5FaWQge1xyXG4gICAgTG9hZGluZ1Byb2dyZXNzICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgTG9hZGluZyAgICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQ2hvb3NlU2VydmljZSAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgTWFpbk1lbnUgICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQ3VsdGl2YXRpb25JbmZvICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQWRvYmVNYWluICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQWRvYmVQb29sICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgQWRvYmVVcGdyYWQgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgUHVibGljQ29uZmlybWF0aW9uICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgSm9pblNlY3QgICAgICAgICAgICA9IHVpTW9kdWxlSWQuT3BlbiArICh1aU9wZW5FaWROdW0rKykgKiBFdmVudFNwYW4uVUlTcGFuLFxyXG4gICAgXHJcbn1cclxuXHJcbi8vVUnpgJrnn6VcclxubGV0IHVpTm90aWNlRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gVWlOb3RpY2VFaWQge1xyXG4gICAgQ2xvc2VDb250cm9sbGVyICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG4gICAgT3BlbkZ1bGxTY3JlZW4gICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG4gICAgQ2xvc2VGdWxsU2NyZWVuICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG4gICAgT3BlblBvcHVwICAgICAgICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG4gICAgQ2xvc2VQb3B1cCAgICAgICAgID0gdWlNb2R1bGVJZC5Ob3RpY2UgKyB1aU5vdGljZUVpZE51bSsrLFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3njqnlrrblsZ7mgKfmqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBjaGFyYWN0ZXJNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIENoYXJhY3Rlck1vZHVsZUlkIHtcclxuICAgIEN1bHRpdmF0aW9uICAgICAgID0gTW9kdWxlRWlkLkNoYXJhY3RlciArIChjaGFyYWN0ZXJNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5L+u5Li6XHJcbn1cclxuXHJcbi8v5L+u5Li6XHJcbmxldCBjaGFyYWN0ZXJDdWx0aXZhdGlvbkVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIENoYXJhY3RlckN1bHRpdmF0aW9uRWlkIHtcclxuICAgIFVwZ3JhZGUgICAgICA9IENoYXJhY3Rlck1vZHVsZUlkLkN1bHRpdmF0aW9uICsgY2hhcmFjdGVyQ3VsdGl2YXRpb25FaWROdW0rKywgICAgLy/kv67kuLrljYfnuqdcclxuICAgIEF1dG9DaGFuZ2VkICAgICAgICAgPSBDaGFyYWN0ZXJNb2R1bGVJZC5DdWx0aXZhdGlvbiArIGNoYXJhY3RlckN1bHRpdmF0aW9uRWlkTnVtKyssICAgIC8v6Ieq5Yqo5L+u54K85Y+Y5YyWXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeOqeazleaooeWdl+WKn+iDvS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IGdhbWVNb2R1bGVOdW0gPSAxO1xyXG5lbnVtIEdhbWVNb2R1bGVJZCB7XHJcbiAgICBBZG9iZSAgICAgICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5rSe5bqcXHJcbiAgICBTZWN0ICAgICAgICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6Zeo5rS+XHJcbiAgICBLb25nZmEgICAgICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5oqA6IO95Yqf5rOVXHJcbiAgICBQbGF5ZXIgICAgICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v6KeS6ImyXHJcbiAgICBSb2FkMkRpZXR5ICA9IE1vZHVsZUVpZC5HYW1lICsgKGdhbWVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5oyR5oiY5LuZ6YCUXHJcbn1cclxuXHJcbi8v5rSe5bqc546p5rOVXHJcbmxldCBnYW1lQWRvYmVFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lQWRvYmVFaWQge1xyXG4gICAgSGlyZVdvcmtlclN1Y2Nlc3MgICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v5oub5Yuf5bel5Lq65oiQ5YqfXHJcbiAgICBBZGRXb3JrZXJTdWNjZXNzICAgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/mt7vliqDlt6XkurrmiJDlip9cclxuICAgIFJlZHVjZVdvcmtlclN1Y2Nlc3MgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+WHj+WwkeW3peS6uuaIkOWKn1xyXG4gICAgVXBncmFkZVN0b25lU3VjY2VzcyAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v54G155+z5Y2H57qn5oiQ5YqfXHJcbiAgICBVcGdyYWRlRm9vZFN1Y2Nlc3MgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/po5/nianljYfnuqfmiJDlip9cclxuICAgIFVwZ3JhZGVXb29kU3VjY2VzcyAgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+acqOadkOWNh+e6p+aIkOWKn1xyXG4gICAgVXBncmFkZUlyb25TdWNjZXNzICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v6Zmo6ZOB5Y2H57qn5oiQ5YqfXHJcbiAgICBVcGdyYWRlUG9vbFN1Y2Nlc3MgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/ngbXmsaDljYfnuqfmiJDlip9cclxuICAgIFVwZ3JhZGVFbmVneVN1Y2Nlc3MgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+mjjuawtOWNh+e6p+aIkOWKn1xyXG59XHJcblxyXG4vL+mXqOa0vueOqeazlVxyXG5sZXQgZ2FtZVNlY3RFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lU2VjdEVpZCB7XHJcbiAgICBKb2luU2VjdFN1Y2Nlc3MgICAgICAgPSBHYW1lTW9kdWxlSWQuU2VjdCArIGdhbWVTZWN0RWlkTnVtKyssICAgIC8v5Yqg5YWl6Zeo5rS+5oiQ5YqfXHJcbiAgICBMZWFybktGU3VjY2VzcyAgICAgICAgPSBHYW1lTW9kdWxlSWQuU2VjdCArIGdhbWVTZWN0RWlkTnVtKyssICAvL+WtpuS5oOaKgOiDveaIkOWKn1xyXG4gICAgQWRkS2ZOdW0gICAgICAgICAgICAgID0gR2FtZU1vZHVsZUlkLlNlY3QgKyBnYW1lU2VjdEVpZE51bSsrLCAgICAvL+S/rueCvOWKn+azlVxyXG4gICAgU3RhcnRUYXNrICAgICAgICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+W8gOWni+mXqOa0vuS7u+WKoVxyXG4gICAgR3JhYlRhc2tBd2FyZFN1Y2Nlc3MgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+mihuWPlumXqOa0vuS7u+WKoeWlluWKseaIkOWKn1xyXG4gICAgU3RhcnROb3JtYWxUb3dlclRyYWluID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+W8gOWni+aZrumAmuS/rueCvFxyXG4gICAgRW5kTm9ybWFsVG93ZXJUcmFpbiA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/nu5PmnZ/mma7pgJrkv67ngrxcclxuICAgIFN0YXJ0Qm9zc1Rvd2VyVHJhaW4gICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/lvIDlp4vmjozpl6jkv67ngrxcclxuICAgIEVuZEJvc3NUb3dlclRyYWluICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v57uT5p2f5o6M6Zeo5L+u54K8XHJcbiAgICBBZmtTZWN0ICAgICAgICAgICAgICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v6YCA5Ye66Zeo5rS+XHJcbn1cclxuXHJcbi8v5oqA6IO9546p5rOVXHJcbmxldCBnYW1lS29uZ2ZhRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gR2FtZUtvbmdmYUVpZCB7XHJcbiAgICBVcGdyYWRlS0ZTdWNjZXNzICAgICAgID0gR2FtZU1vZHVsZUlkLktvbmdmYSArIGdhbWVLb25nZmFFaWROdW0rKywgICAgLy/liqDlhaXpl6jmtL7miJDlip9cclxufVxyXG5cclxuLy/op5LoibJcclxubGV0IGdhbWVQbGF5ZXJFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lUGxheWVyRWlkIHtcclxuICAgIEdldEJhZ0luZm8gICAgICAgICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgICAgLy/ojrflj5bliLDog4zljIXkv6Hmga9cclxuICAgIEJhZ1NvcnRTdWNjZXNzICAgICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgICAgLy/mlbTnkIbog4zljIXmiJDlip9cclxuICAgIEJhZ0V4cGFuZFN1Y2Nlc3MgICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgICAgLy/mianlsZXog4zljIXmiJDlip9cclxuICAgIEJhZ0V4cGFuZEZhaWwgICAgICAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgICAgLy/mianlsZXog4zljIXlpLHotKVcclxuICAgIFNvbGRCYWdJdGVtU3VjY2VzcyAgID0gR2FtZU1vZHVsZUlkLlBsYXllciArIGdhbWVQbGF5ZXJFaWROdW0rKywgIC8v5Ye65ZSu6IOM5YyF54mp5ZOB5oiQ5YqfXHJcbiAgICBVc2VCYWdJdGVtU3VjY2VzcyAgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAvL+S9v+eUqOiDjOWMheeJqeWTgeaIkOWKn1xyXG59XHJcblxyXG4vL+aMkeaImOS7memAlOeOqeazlVxyXG5sZXQgZ2FtZVJvYWQyRGlldHlFaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBHYW1lUm9hZDJEaWV0eWFFaWQge1xyXG4gICAgR29Nb25zdGVyUmVzdWx0ICAgICAgPSBHYW1lTW9kdWxlSWQuUm9hZDJEaWV0eSArIGdhbWVSb2FkMkRpZXR5RWlkTnVtKyssICAgIC8v5oyR5oiY6ZWH5aaW5aGU57uT5p6cXHJcbiAgICBGYWlsR29Nb25zdGVyICAgICAgICA9IEdhbWVNb2R1bGVJZC5Sb2FkMkRpZXR5ICsgZ2FtZVJvYWQyRGlldHlFaWROdW0rKywgICAgLy/ml6Dms5XmjJHmiJjplYflppbloZRcclxuICAgIEludml0ZWRGcmllbmQgICAgICAgID0gR2FtZU1vZHVsZUlkLlJvYWQyRGlldHkgKyBnYW1lUm9hZDJEaWV0eUVpZE51bSsrLCAgICAvL+mCgOivt+aci+WPi+aMkeaImOmVh+WmluWhlFxyXG4gICAgQmF0dGxlUmVjb3JkRW5kICAgICAgPSBHYW1lTW9kdWxlSWQuUm9hZDJEaWV0eSArIGdhbWVSb2FkMkRpZXR5RWlkTnVtKyssICAgIC8v5oiY5oql5pKt5pS+5a6M5q+VXHJcbiAgICBNb25zdGVyMXN0Qmxvb2QgICAgICA9IEdhbWVNb2R1bGVJZC5Sb2FkMkRpZXR5ICsgZ2FtZVJvYWQyRGlldHlFaWROdW0rKywgICAgLy/plYflppbloZTpppbmnYBcclxufSIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHRXZlbnQge1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5byA5pS+5Z+fLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8v5Yi35paw5aW95Y+L5pWw5o2uXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgV1hfUkVGUkVTSF9GUklFTkRfREFUQSA9IDExMDAxXHJcbiAgICAvL+aJk+W8gOaOkuihjFxyXG4gICAgc3RhdGljIHJlYWRvbmx5IE9QRU5fUkFOS19VSSA9IDExMDA0XHJcbiAgICAvL+aYvuekuuaVheS6i+aOkuihjFxyXG4gICAgc3RhdGljIHJlYWRvbmx5IENMT1NFX1JBTktfVUkgPSAxMTAwNVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIExpc3RlbmVyczpDb25maWcuRGljdGlvbmFyeTxDb25maWcuTGlzdGVuZXJDbGFzcz4gPSB7fTtcclxuXHJcbiAgICBzdGF0aWMgQWRkTGlzdGVuZXIoa2V5LCBmdW5jLCB0YXJnZXQpIHtcclxuICAgICAgICBpZigha2V5IHx8IHR5cGVvZihmdW5jKSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuTGlzdGVuZXJzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5MaXN0ZW5lcnNba2V5XSA9IG5ldyBDb25maWcuTGlzdGVuZXJDbGFzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5MaXN0ZW5lcnNba2V5XS5hZGRMaXN0ZW5lcihmdW5jLCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBSZW1vdmVMaXN0ZW5lcihrZXksIGZ1bmMpIHtcclxuICAgICAgICBpZigha2V5IHx8IHR5cGVvZihmdW5jKSAhPSBcImZ1bmN0aW9uXCIpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuTGlzdGVuZXJzW2tleV07XHJcbiAgICAgICAgaWYoIWxpc3QpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsaXN0LnJlbW92ZUxpc3RlbmVyKGZ1bmMpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBzdGF0aWMgRGlzcGF0Y2goa2V5LCAuLi5kYXRhKSB7XHJcbiAgICAgICAgaWYoIWtleSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuTGlzdGVuZXJzW2tleV07XHJcbiAgICAgICAgaWYoIWxpc3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpIGluIGxpc3QuTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihsaXN0Lkxpc3RlbmVyc1tpXSkgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsaXN0Lkxpc3RlbmVyc1tpXS5jYWxsKGxpc3QuVGFyZ2V0c1tpXSwgLi4uZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDbGVhcihrZXkpIHtcclxuICAgICAgICBpZigha2V5KSByZXR1cm5cclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuTGlzdGVuZXJzW2tleV07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbi8v6K6h566X5Yqf5rOV5oC75Lq654mp5bGe5oCnXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjS2ZBZGRBdHRyKGtmTGV2ZWw6bnVtYmVyLCBrZlN0YWdlOm51bWJlciwgZnNBZGQ6bnVtYmVyKXtcclxuICAgIHJldHVybiBrZlN0YWdlICogKGtmTGV2ZWwgKyBmc0FkZCk7XHJcbn1cclxuXHJcbi8v6K6h566X5Yqf5rOV5oC76aOO5rC05Yqg5oiQXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjS2ZBZGRGZW5nc2h1aShrZlN0YWdlOm51bWJlciwgZnNBZGQ6bnVtYmVyKXtcclxuICAgIHJldHVybiBrZlN0YWdlICogZnNBZGQ7XHJcbn0iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSAnLi4vQ29uZmlnL0NvbmZpZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzb3VyY2UgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUmVzb3VyY2UgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2FkZGVkVWlQYWNrYWdlczpDb25maWcuRGljdGlvbmFyeTxib29sZWFuPiA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9pbnN0YW5jZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFJlc291cmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWQodXJsLCB0aGlzQXJnPywgY29tcGxldGU/OkZ1bmN0aW9uLCBwcm9ncmVzcz86RnVuY3Rpb24sIHJlc1R5cGU/OnN0cmluZyl7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIubG9hZChcclxuICAgICAgICAgICAgdXJsLCBcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzQXJnLCBjb21wbGV0ZSksIFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXNBcmcsIHByb2dyZXNzKSxcclxuICAgICAgICAgICAgcmVzVHlwZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFVpUGFja2FnZShwa2dOYW1lOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXRoaXMuX2FkZGVkVWlQYWNrYWdlc1twa2dOYW1lXSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliqDovb1VSeWMhe+8micsIHBrZ05hbWUpO1xyXG4gICAgICAgICAgICBmZ3VpLlVJUGFja2FnZS5hZGRQYWNrYWdlKCdyZXMvJyArIHBrZ05hbWUgKyAnLycgKyBwa2dOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkZWRVaVBhY2thZ2VzW3BrZ05hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJlcyhwYXRoOnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIExheWEuTG9hZGVyLmdldFJlcyhwYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVsZWFzZVJlcygpe1xyXG4gICAgICAgIExheWEuUmVzb3VyY2UuZGVzdHJveVVudXNlZFJlc291cmNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkF3YWtlKCl7XHJcbiAgICAgICAgaWYgKFJlc291cmNlLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFJlc291cmNlLl9pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVzb3VyY2UgaW5zdGFuY2UgbXVzdCBiZSBvbmx5IG9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0IHtVSUNvbmZpZ30gZnJvbSBcIi4uL0NvbmZpZy9VSUNvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5cclxuLy/np5LmlbDovazkuLrml7bvvJrliIbvvJrnp5JcclxuZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRUaW1lKGNkLCBpZ25vcmVIb3VyPzpib29sZWFuKXtcclxuICAgIGlmKGNkID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBob3VycyA9IChcIjBcIiArIE1hdGguZmxvb3IoY2QgLyAzNjAwKSkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IG1pbnV0ZXMgPSAoXCIwXCIgKyBNYXRoLmZsb29yKChjZCAlIDM2MDApIC8gNjApKS5zbGljZSgtMik7XHJcbiAgICBsZXQgc2Vjb25kcyA9IChcIjBcIiArIE1hdGguY2VpbChjZCAlIDYwKSkuc2xpY2UoLTIpO1xyXG5cclxuICAgIGlmKGlnbm9yZUhvdXIpe1xyXG4gICAgICAgIHJldHVybiBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBob3VycyArIFwiOlwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb25kcztcclxufVxyXG5cclxuLy/nqpflj6PlvLnlh7rliqjnlLtcclxuLyoqXHJcbiAqIEBwYXJhbSAge2ZndWkuR0NvbXBvbmVudH0gd2luZG93VWlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5UG9wdXBFZmZlY3Qod2luZG93VWksIGNhbGxiYWNrLCB0aGlzQXJnKXtcclxuICAgIGlmKHdpbmRvd1VpIGluc3RhbmNlb2YgZmd1aS5HT2JqZWN0KSB7XHJcbiAgICAgICAgd2luZG93VWkuc2V0UGl2b3QoMC41LCAwLjUpO1xyXG5cclxuICAgICAgICBmZ3VpLkdUd2Vlbi50bygwLCAxLCAwLjUpXHJcbiAgICAgICAgICAgIC5zZXRUYXJnZXQod2luZG93VWksIHdpbmRvd1VpLnNldFNjYWxlKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZShjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5Y2B5YWt6L+b5Yi26aKc6Imy6L2sMTDov5vliLZcclxuLy/kvKDlj4LmoLzlvI/vvJpcIjAwfGZmfGVlXCJcclxuLyoqXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY29sb3JTdHJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb2xvckhleDJEZWMoY29sb3JTdHIpe1xyXG4gICAgaWYoY29sb3JTdHIgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbG9yU3RyID0gY29sb3JTdHIuc3BsaXQoXCJ8XCIpO1xyXG4gICAgaWYoY29sb3JTdHIgaW5zdGFuY2VvZiBBcnJheSAmJiBjb2xvclN0ci5sZW5ndGggPT0gMyl7XHJcbiAgICAgICAgY29sb3JTdHIuZm9yRWFjaCgodmFsdWUsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBjb2xvclN0cltpbmRleF0gPSBwYXJzZUludCh2YWx1ZSwgMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb2xvclN0cjtcclxufVxyXG5cclxuLy/liKTmlq3mmK/lkKbkuLrniLbnu4Tku7bvvIjljIXmi6zmnKzkvZPvvIlcclxuZXhwb3J0IGZ1bmN0aW9uIGlzQW5jZXN0b3JPZihwYXJlbnQ6Zmd1aS5HT2JqZWN0LCBjaGlsZDpmZ3VpLkdPYmplY3QpOkJvb2xlYW5cclxue1xyXG4gICAgaWYgKHBhcmVudCA9PSBudWxsIHx8IGNoaWxkID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgXHJcbiAgICAvL+acrOS9k1xyXG4gICAgaWYocGFyZW50ID09IGNoaWxkKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgXHJcbiAgICB2YXIgcDpmZ3VpLkdDb21wb25lbnQgPSBjaGlsZC5wYXJlbnQ7XHJcbiAgICB3aGlsZShwKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHAgPT0gcGFyZW50KVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICBwID0gcC5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8v5Yik5pat5Z2Q5qCH5piv5ZCm5Zyo57uE5Lu255+p5b2i6IyD5Zu05YaFXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0luUmVjdCh4djpudW1iZXIsIHl2Om51bWJlciwgZGVzdDpmZ3VpLkdPYmplY3Qpe1xyXG4gICAgaWYoeHYgPT0gbnVsbCB8fCB5diA9PSBudWxsIHx8ICFkZXN0KSByZXR1cm47XHJcblxyXG4gICAgLy/ovazkuLrlsY/luZXlnZDmoIdcclxuICAgIGxldCBwdCA9IGRlc3QubG9jYWxUb0dsb2JhbCgpO1xyXG5cclxuICAgIGlmKHh2IDwgcHQueCB8fCB4diA+IHB0LnggKyBkZXN0LndpZHRoIHx8IHl2IDwgcHQueSB8fCB5diA+IHB0LnkgKyBkZXN0LmhlaWdodCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnRuSW5mb1BhcnRze1xyXG4gICAgUHJvZ3Jlc3NfSGVhbHRoOmZndWkuR1Byb2dyZXNzQmFyLFxyXG4gICAgUHJvZ3Jlc3NfRXhwOmZndWkuR1Byb2dyZXNzQmFyLFxyXG4gICAgVGV4dF9MZXZlbDpmZ3VpLkdUZXh0RmllbGQsXHJcbiAgICBUZXh0X1RpcHNIZWFsdGg6Zmd1aS5HVGV4dEZpZWxkLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnRuSW5mb1BhcnRzKGJ0bjpmZ3VpLkdDb21wb25lbnQpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBQcm9ncmVzc19IZWFsdGg6YnRuLmdldENoaWxkKCdQcm9ncmVzc19IZWFsdGgnKS5hc1Byb2dyZXNzLFxyXG4gICAgICAgIFByb2dyZXNzX0V4cDpidG4uZ2V0Q2hpbGQoJ1Byb2dyZXNzX0V4cCcpLmFzUHJvZ3Jlc3MsXHJcbiAgICAgICAgVGV4dF9MZXZlbDpidG4uZ2V0Q2hpbGQoJ1RleHRfTGV2ZWwnKS5hc1RleHRGaWVsZCxcclxuICAgICAgICBUZXh0X1RpcHNIZWFsdGg6YnRuLmdldENoaWxkKCdUZXh0X1RpcHNIZWFsdGgnKS5hc1RleHRGaWVsZCxcclxuICAgIH1cclxufVxyXG5cclxuLy/orr7nva7mlofmnKxDYWNoZU1vZGXkuLpDSEFS6YG/5YWN5YaF5a2Y5pq05raoR0PljaHpob9cclxuLyoqXHJcbiAqIEBwYXJhbSAge2ZndWkuR1RleHRGaWVsZH0gdGV4dEZpbGVkXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IHVzZVN5c0ZvbnRcclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBTZXRUeHRDYWNoZU1vZGUodGV4dEZpbGVkLCB1c2VTeXNGb250KXtcclxuLy8gICAgIGlmKHRleHRGaWxlZCA9PSBudWxsKSByZXR1cm47XHJcblxyXG4vLyAgICAgaWYodGV4dEZpbGVkLl9sYWJlbC5jYWNoZU1vZGUgIT0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVIpe1xyXG4vLyAgICAgICAgIHRleHRGaWxlZC5fbGFiZWwuY2FjaGVNb2RlID0gY2MuTGFiZWwuQ2FjaGVNb2RlLkNIQVI7XHJcblxyXG4vLyAgICAgICAgIGlmKHR5cGVvZiB1c2VTeXNGb250ID09IFwiYm9vbGVhblwiKVxyXG4vLyAgICAgICAgICAgICB0ZXh0RmlsZWQuX2xhYmVsLnVzZVN5c3RlbUZvbnQgPSB1c2VTeXNGb250O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vL+iuvue9ruaWh+acrOWNoOS9jeesplxyXG4vLyBTdHJpbmcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSByZXR1cm4gdGhpcztcclxuLy8gICAgIGxldCBwYXJhbSA9IGFyZ3VtZW50c1swXTtcclxuLy8gICAgIGxldCBzID0gdGhpcztcclxuLy8gICAgIGlmKHR5cGVvZihwYXJhbSkgPT0gJ29iamVjdCcpIHtcclxuLy8gICAgICAgICBmb3IobGV0IGtleSBpbiBwYXJhbSlcclxuLy8gICAgICAgICBzID0gcy5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiICsga2V5ICsgXCJcXFxcfVwiLCBcImdcIiksIHBhcmFtW2tleV0pO1xyXG4vLyAgICAgICAgIHJldHVybiBzO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4vLyAgICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdcIiksIGFyZ3VtZW50c1tpXSk7XHJcbi8vICAgICAgICAgcmV0dXJuIHM7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vL+iuvue9ruaWh+acrOWNoOS9jeesplxyXG4vKipcclxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcclxuICogQHBhcmFtICB7QXJyYXl9IGFyZ3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTdHJpbmdGb3JtYXQoc3RyLCAuLi5hcmdzKXtcclxuICAgIGlmKHR5cGVvZihzdHIpICE9ICdzdHJpbmcnKSByZXR1cm47XHJcblxyXG4gICAgaWYoYXJncyA9PSBudWxsIHx8IGFyZ3MubGVuZ3RoID09IDApIHJldHVybiBzdHI7XHJcblxyXG4gICAgbGV0IHBhcmFtID0gYXJnc1swXTtcclxuICAgIGxldCBzID0gc3RyO1xyXG4gICAgaWYodHlwZW9mKHBhcmFtKSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGZvcihsZXQga2V5IGluIHBhcmFtKVxyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBrZXkgKyBcIlxcXFx9XCIsIFwiZ1wiKSwgcGFyYW1ba2V5XSk7XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdcIiksIGFyZ3NbaV0pO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuvue9ruaWh+acrOWxnuaAp1xyXG5leHBvcnQgZnVuY3Rpb24gU2V0VHh0UHJvcGVydHkodHh0LCBpc0JvbGQsIGlzVW5kZXJsaW5lKXtcclxuICAgIGlmKHR4dCBpbnN0YW5jZW9mIGZndWkuR1RleHRGaWVsZCA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmKHR5cGVvZihpc0JvbGQpID09ICdib29sZWFuJyl7XHJcbiAgICAgICAgdHh0Ll9sYWJlbC5faXNCb2xkID0gaXNCb2xkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHR5cGVvZihpc1VuZGVybGluZSkgPT0gJ2Jvb2xlYW4nKXtcclxuICAgICAgICB0eHQuX2xhYmVsLl9pc1VuZGVybGluZSA9IGlzVW5kZXJsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WQr+WKqOWeg+WcvuWbnuaUtlxyXG4vLyBleHBvcnQgZnVuY3Rpb24gVHJpZ2dlckdDKCl7XHJcbi8vICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuLy8gICAgICAgICB3eC50cmlnZ2VyR0MoKTtcclxuLy8gICAgIH1lbHNle1xyXG4vLyAgICAgICAgIGNjLnN5cy5nYXJiYWdlQ29sbGVjdCgpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vL+iuvue9rumdnui0n+aVsFxyXG5leHBvcnQgZnVuY3Rpb24gU2V0Tm9ubmVnYXRpdmUobnVtOm51bWJlcil7XHJcbiAgICBpZihudW0gPCAwKXtcclxuICAgICAgICBudW0gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW07XHJcbn1cclxuXHJcbi8v5Yqf6IO95piv5ZCm5byA5ZCvXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBJc0Z1bmNBY3RpdmF0ZWQoZnVuY0VudW0pe1xyXG4vLyAgICAgaWYoZnVuY0VudW0gPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuLy8gICAgIHN3aXRjaCAoZnVuY0VudW0pIHtcclxuLy8gICAgICAgICBjYXNlIExvY2FsQ29uZmlnLkZ1bmNFbnVtLlBsYXlHbzpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIERhdGFCYXNlLlJvbGVEYXRhLlVubG9ja0NoYXB0ZXJJZCA+PSAzO1xyXG4gICAgXHJcbi8vICAgICAgICAgY2FzZSBMb2NhbENvbmZpZy5GdW5jRW51bS5GdW46XHJcbi8vICAgICAgICAgICAgIHJldHVybiBEYXRhQmFzZS5Sb2xlRGF0YS5VbmxvY2tDaGFwdGVySWQgPj0gNDtcclxuXHJcbi8vICAgICAgICAgY2FzZSBMb2NhbENvbmZpZy5GdW5jRW51bS5TdG9yeUphZGU6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBEYXRhQmFzZS5Sb2xlRGF0YS5VbmxvY2tDaGFwdGVySWQgPiAxIHx8IERhdGFCYXNlLlJvbGVEYXRhLkRyb3BNYXhUZXh0TnVtID49IDUgfHwgRGF0YUJhc2UuUm9sZURhdGEuQ2hhcHRlclBsYXlUaW1lcyA+IDE7XHJcblxyXG4vLyAgICAgICAgIGNhc2UgTG9jYWxDb25maWcuRnVuY0VudW0uVG9wTGVmdExpc3Q6XHJcbi8vICAgICAgICAgICAgIHJldHVybiBEYXRhQmFzZS5Sb2xlRGF0YS5DaGFwdGVySWQgPiAxIHx8IERhdGFCYXNlLlJvbGVEYXRhLkNoYXB0ZXJQbGF5VGltZXMgPiAxO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vL+iuvue9rmZndWnmjqfliLblmajpobXnrb5cclxuZXhwb3J0IGZ1bmN0aW9uIFNldEdDb250cm9sbGVySWR4KGdjdHJsOmZndWkuQ29udHJvbGxlciwgaWR4Om51bWJlcil7XHJcbiAgICBpZihnY3RybCBpbnN0YW5jZW9mIGZndWkuQ29udHJvbGxlciA9PSBmYWxzZSB8fCB0eXBlb2YgaWR4ICE9ICdudW1iZXInKSByZXR1cm47XHJcblxyXG4gICAgaWYoaWR4IDwgMCB8fCBpZHggPj0gZ2N0cmwucGFnZUNvdW50KSByZXR1cm47XHJcblxyXG4gICAgZ2N0cmwuc2VsZWN0ZWRJbmRleCA9IGlkeDtcclxufVxyXG5cclxuLy/liKTmlq3nu5PmnoTkvZPplb/luqZcclxuZXhwb3J0IGZ1bmN0aW9uIEdldE9iamVjdExlbmd0aChvYmplY3Qpe1xyXG4gICAgaWYoIW9iamVjdCkgcmV0dXJuIDA7XHJcblxyXG4gICAgbGV0IGxlbiA9IDA7XHJcbiAgICBmb3IobGV0IGkgaW4gb2JqZWN0KXtcclxuICAgICAgICBsZW4rKztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGVuO1xyXG59XHJcblxyXG4vL+avlOi+gzLkuKrmlbDnu4TmmK/lkKbnm7jnrYlcclxuLyoqXHJcbiAqIEBwYXJhbSAge0FycmF5fSBhcnIxXHJcbiAqIEBwYXJhbSAge0FycmF5fSBhcnIyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQXJyYXlFcXVhbHMoYXJyMSwgYXJyMikge1xyXG4gICAgLy8gaWYgdGhlIG90aGVyIGFycmF5IGlzIGEgZmFsc3kgdmFsdWUsIHJldHVyblxyXG4gICAgaWYgKCFhcnIxIHx8ICFhcnIyKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvLyBjb21wYXJlIGxlbmd0aHMgLSBjYW4gc2F2ZSBhIGxvdCBvZiB0aW1lIFxyXG4gICAgaWYgKGFycjEubGVuZ3RoICE9IGFycjIubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycjEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBuZXN0ZWQgYXJyYXlzXHJcbiAgICAgICAgaWYgKGFycjFbaV0gaW5zdGFuY2VvZiBBcnJheSAmJiBhcnIyW2ldIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgLy8gcmVjdXJzZSBpbnRvIHRoZSBuZXN0ZWQgYXJyYXlzXHJcbiAgICAgICAgICAgIGlmIChBcnJheUVxdWFscyhhcnIxLCBhcnIyKSA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgICAgICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgZWxzZSBpZiAoYXJyMVtpXSAhPSBhcnIyW2ldKSB7IFxyXG4gICAgICAgICAgICAvLyBXYXJuaW5nIC0gdHdvIGRpZmZlcmVudCBvYmplY3QgaW5zdGFuY2VzIHdpbGwgbmV2ZXIgYmUgZXF1YWw6IHt4OjIwfSAhPSB7eDoyMH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgIFxyXG4gICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgfSAgICAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vL+aQnOWvu+aVsOe7hOmUruWAvFxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQXJyYXkoYXJyOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgdmFsdWUpe1xyXG4gICAgaWYoQXJyYXkuaXNBcnJheShhcnIpID09IGZhbHNlIHx8IGFyci5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBvciBlbXB0eSBhcnJheScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHRhcmdldDtcclxuICAgIGFyci5zb21lKHY9PntcclxuICAgICAgICBpZih2W3BhcmFtXSA9PSB2YWx1ZSl7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHY7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJkUGF0aChfZGF0YSl7XHJcbiAgICBpZighX2RhdGEuUGljVXJsKVxyXG4gICAgICAgIHJldHVybiB7cGF0aDpcIlwiLCB1cmw6IFwiXCJ9XHJcbiAgICBcclxuICAgIGxldCBwYWtOdW0gPSBNYXRoLmNlaWwoX2RhdGEuUGljVXJsLzYpO1xyXG4gICAgbGV0IHBha05hbWUgPSBcIlBvc3RjYXJkXCIrIHBha051bTtcclxuICAgIGxldCB1cmwgPSAgXCJ1aTovL1wiK3Bha05hbWUrXCIvXCIrX2RhdGEuVGl0bGU7XHJcbiAgICBsZXQgaW5mbz17cGF0aDpwYWtOYW1lK1wiL1wiK3Bha05hbWUsdXJsOnVybH1cclxuICAgIHJldHVybiBpbmZvXHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCm5bCP5ri45oiPXHJcbmV4cG9ydCBmdW5jdGlvbiBpc01pbmlHYW1lKCl7XHJcbiAgICAvLyByZXR1cm4gTGF5YS5Ccm93c2VyLm9uV2VpWGluIHx8IExheWEuQnJvd3Nlci5vbkJETWluaUdhbWU7XHJcbiAgICByZXR1cm4gTGF5YS5Ccm93c2VyLm9uTWluaUdhbWU7XHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCm5b6u5L+hXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09uV2VpeGluKCl7XHJcbiAgICByZXR1cm4gTGF5YS5Ccm93c2VyLm9uV2VpWGluO1xyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQplFRXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09uUVEoKXtcclxuICAgIHJldHVybiBMYXlhLkJyb3dzZXIub25NUVFCcm93c2VyO1xyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQpuiFvuiur+ezu1xyXG5leHBvcnQgZnVuY3Rpb24gaXNPblRlbmNlbnQoKXtcclxuICAgIHJldHVybiBpc09uUVEoKSB8fCBpc09uV2VpeGluKCk7XHJcbn1cclxuXHJcbi8v5bm/5ZGK6aKG5Y+W57uE5Lu2XHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtmZ3VpLkdDb21wb25lbnR9IGFkQ29tXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQWRHZXRSZXdhcmRCdG4oYWRDb20pe1xyXG4gICAgaWYoIWFkQ29tKSByZXR1cm47XHJcblxyXG4gICAgLy/pooblj5bmjInpkq5cclxuICAgIGxldCBidXR0b25fR2V0UmV3YXJkID0gYWRDb20uZ2V0Q2hpbGQoXCJCdXR0b25fR2V0UmV3YXJkXCIpLmFzQnV0dG9uO1xyXG4gICAgbGV0IGJ1dHRvbl9Eb3VibGVSZXdhcmQgPSBhZENvbS5nZXRDaGlsZChcIkJ1dHRvbl9Eb3VibGVSZXdhcmRcIikuYXNCdXR0b247XHJcbiAgICBsZXQgYnV0dG9uX0FkR2V0UmV3YXJkID0gYWRDb20uZ2V0Q2hpbGQoXCJCdXR0b25fQWRHZXRSZXdhcmRcIikuYXNCdXR0b247XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL+mihuWPluexu+Wei1xyXG4gICAgICAgIEdldEJ0blR5cGU6IGFkQ29tLmdldENvbnRyb2xsZXIoJ0J0blR5cGVfQycpLFxyXG4gICAgICAgIC8v5Y2V5oyJ6ZKu6aKG5Y+WXHJcbiAgICAgICAgQnV0dG9uX0dldFJld2FyZDogYnV0dG9uX0dldFJld2FyZCxcclxuICAgICAgICAvL+e6r+mihuWPllxyXG4gICAgICAgIEJ1dHRvbl9PbmVSZXdhcmQ6IGFkQ29tLmdldENoaWxkKFwiQnV0dG9uX09uZVJld2FyZFwiKS5hc0J1dHRvbixcclxuICAgICAgICAvL+W5v+WRiuWPjOWAjemihuWPllxyXG4gICAgICAgIEJ1dHRvbl9Eb3VibGVSZXdhcmQ6IGJ1dHRvbl9Eb3VibGVSZXdhcmQsXHJcbiAgICAgICAgLy/ljZXmjInpkq7lub/lkYrpooblj5ZcclxuICAgICAgICBCdXR0b25fQWRHZXRSZXdhcmQ6IGJ1dHRvbl9BZEdldFJld2FyZCxcclxuICAgICAgICAvL+WNleaMiemSrumihuWPluaWueW8j1xyXG4gICAgICAgIEdldFJld2FyZFR5cGU6IGJ1dHRvbl9BZEdldFJld2FyZC5nZXRDb250cm9sbGVyKCdUeXBlX0MnKSxcclxuICAgICAgICAvL+WPjOWAjemihuWPluaWueW8j1xyXG4gICAgICAgIEdldERvdWJsZVJld2FyZFR5cGU6IGJ1dHRvbl9Eb3VibGVSZXdhcmQuZ2V0Q29udHJvbGxlcignVHlwZV9DJyksXHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5pys5Zyw5a2Y5YKoXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxTdG9yYWdlKGtleTpzdHJpbmcsIHZhbHVlOnN0cmluZyl7XHJcbiAgICBpZighdmFsdWUpIHJldHVybjtcclxuICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2Uoa2V5OnN0cmluZyl7XHJcbiAgICByZXR1cm4gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsSnNvbihrZXk6c3RyaW5nLCB2YWx1ZSl7XHJcbiAgICAvL+WPr+WtmOWCqOaVsOe7hFxyXG4gICAgaWYoIXZhbHVlKSByZXR1cm47XHJcbiAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKGtleSwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxKc29uKGtleTpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04oa2V5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlEYXRhKHNyY0RhdGEsIHRhcmdldERhdGEpe1xyXG4gICAgaWYoIXNyY0RhdGEgfHwgIXRhcmdldERhdGEpIHJldHVybjtcclxuXHJcbiAgICBmb3IobGV0IGkgaW4gc3JjRGF0YSl7XHJcbiAgICAgICAgaWYodHlwZW9mIHNyY0RhdGFbaV0gIT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIHRhcmdldERhdGFbaV0gPSBzcmNEYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy/orr7nva7lub/lkYrnu4Tku7bmoLflvI9cclxuLyoqXHJcbiAqIEBwYXJhbSAge2ZndWkuR0NvbXBvbmVudH0gYWRDb21cclxuICogQHBhcmFtICB7Ym9vbGVhbn0gaXNTaW5nbGVcclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBTZXRBZEJ0blN0eWxlKGFkQ29tLCBpc1NpbmdsZSl7XHJcbi8vICAgICBpZighYWRDb20pIHJldHVybjtcclxuXHJcbi8vICAgICBsZXQgYnRuID0gQWRHZXRSZXdhcmRCdG4oYWRDb20pO1xyXG4vLyAgICAgbGV0IGFkVHlwZSA9IGlzU2luZ2xlPyBNYW5hZ2VyLkdldFJlY2VpdmVBd2FyZHNUeXBlLlNpbmdsZUFkVHlwZSgpOiBNYW5hZ2VyLkdldFJlY2VpdmVBd2FyZHNUeXBlLmdldFR5cGUoKTtcclxuLy8gICAgIHN3aXRjaCAoYWRUeXBlKSB7XHJcbi8vICAgICAgICAgY2FzZSBDb25maWcuQXdhcmRUeXBlLk5vdDpcclxuLy8gICAgICAgICAgICAgYnRuLkdldEJ0blR5cGUuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbi8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbi8vICAgICAgICAgY2FzZSBDb25maWcuQXdhcmRUeXBlLlNoYXJlOlxyXG4vLyAgICAgICAgICAgICBidG4uR2V0RG91YmxlUmV3YXJkVHlwZS5zZWxlY3RlZEluZGV4ID0gMTtcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuLy8gICAgICAgICBjYXNlIENvbmZpZy5Bd2FyZFR5cGUuQUQ6XHJcbi8vICAgICAgICAgICAgIGJ0bi5HZXREb3VibGVSZXdhcmRUeXBlLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4vLyAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgIGFkQ29tLmVuYWJsZWQgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIGJ0bjtcclxuLy8gfVxyXG5cclxuLy/po5jlrZdcclxubGV0IHRpcHNVaTpmZ3VpLkdDb21wb25lbnQ7XHJcbmV4cG9ydCBmdW5jdGlvbiBTaG93VGlwcyhtc2c6c3RyaW5nKXtcclxuICAgIGlmKCF0aXBzVWkpe1xyXG4gICAgICAgIGxldCB2aWV3TmFtZSA9IENvbmZpZy5WaWV3S2l0LlRpcHNMYWJlbDtcclxuICAgICAgICB0aXBzVWkgPSBNYW5hZ2VyLlNwYXduTWFuYWdlci5Mb2FkVmlldyh2aWV3TmFtZS5Qa2csIHZpZXdOYW1lLkNvbSk7XHJcbiAgICAgICAgdGlwc1VpLnNvcnRpbmdPcmRlciA9IFVJQ29uZmlnLlNvcnRpbmdPcmRlci5Nc2dUaXBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LiN6YeN5aSN5pi+56S6XHJcbiAgICBpZih0aXBzVWkudmlzaWJsZSkgcmV0dXJuO1xyXG5cclxuICAgIG1zZyA9IG1zZz8gbXNnOiBDb25maWcuTG9jYWxDb250ZW50LkZseWluZ1RpcHNEZWZhdWx0O1xyXG4gICAgdGlwc1VpLnRleHQgPSBtc2c7XHJcbiAgICB0aXBzVWkudmlzaWJsZSA9IHRydWU7XHJcbiAgICBcclxuICAgIHRpcHNVaS5nZXRUcmFuc2l0aW9uKCdFZmZlY3RfU2hvdycpLnBsYXkoTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKT0+e3RpcHNVaS52aXNpYmxlID0gZmFsc2V9KSk7XHJcbn1cclxuXHJcbi8v5rSe5bqc5Yqg6LWE5rqQ6aOY5a2XXHJcbmludGVyZmFjZSBBZG9iZUFkZFRpcHNVaXtcclxuICAgIFVpOmZndWkuR0NvbXBvbmVudDtcclxuICAgIFRleHRfQWRkU3RvbmU6Zmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgVGV4dF9BZGRGb29kOmZndWkuR1RleHRGaWVsZDtcclxuICAgIFRleHRfQWRkV29vZDpmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICBUZXh0X0FkZElyb246Zmd1aS5HVGV4dEZpZWxkO1xyXG59XHJcbmxldCBhZG9iZUFkZFRpcHNVaTpBZG9iZUFkZFRpcHNVaTtcclxuXHJcbmZ1bmN0aW9uIHNldEFkb2JlUmVzTnVtKHR4dENvbTpmZ3VpLkdUZXh0RmllbGQsIHJlc051bTpudW1iZXIpe1xyXG4gICAgaWYocmVzTnVtID49IDApe1xyXG4gICAgICAgIHR4dENvbS5jb2xvciA9ICcjMDBGRjAwJztcclxuICAgICAgICB0eHRDb20udGV4dCA9ICcrJyArIHJlc051bTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHR4dENvbS5jb2xvciA9ICcjRkYwMDAwJztcclxuICAgICAgICB0eHRDb20udGV4dCA9ICctJyArIC1yZXNOdW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6K6+572u5paH5a2X5oqV5b2xMeWDj+e0oFxyXG5sZXQgdHh0U2hhZG93RmlsdGVyOkxheWEuR2xvd0ZpbHRlcjtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFR4dFNoYWRvdyhndHh0OmZndWkuR09iamVjdCl7XHJcbiAgICBpZighZ3R4dCkgcmV0dXJuO1xyXG4gICAgaWYoIXR4dFNoYWRvd0ZpbHRlcil7XHJcbiAgICAgICAgdHh0U2hhZG93RmlsdGVyID0gbmV3IExheWEuR2xvd0ZpbHRlcignIzAwMDAwMCcsIDEsIDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGd0eHQuZGlzcGxheU9iamVjdC5maWx0ZXJzID0gW3R4dFNoYWRvd0ZpbHRlcl07XHJcbn1cclxuXHJcbi8v6K6+572uVUnoioLngrnkuI7pgILphY1cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNldFVpTm9kZSgpe1xyXG4vLyAgICAgaWYoIWZndWkuR1Jvb3QuaW5zdCkgcmV0dXJuO1xyXG4gICAgXHJcbi8vICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuLy8gICAgIGZndWkuR1Jvb3QuaW5zdC5ub2RlLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbi8vICAgICBmZ3VpLkdSb290Lmluc3Qubm9kZS54ID0gLWNhbnZhcy53aWR0aCAqIDAuNTtcclxuLy8gICAgIGZndWkuR1Jvb3QuaW5zdC5ub2RlLnkgPSBjYW52YXMuaGVpZ2h0ICogMC41O1xyXG4vLyB9XHJcblxyXG4vL+iwg+eUqGphdmFcclxuLyoqXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY2xhc3NQYXRoIOWujOaVtOeahOexu+i3r+W+hFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGphdmFGdW5jIGphdmHpnZnmgIHmlrnms5XlkI1cclxuICogQHBhcmFtICB7fSBkYXRhXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IHdpZHRoQmFjayDmmK/lkKbmnIlqYXZh5ZCM5q2l5Zue6LCDXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSnNDYWxsSmF2YShjbGFzc1BhdGg6c3RyaW5nLCBqYXZhRnVuYzpzdHJpbmcsIGRhdGE/LCB3aWR0aEJhY2s/OmJvb2xlYW4pe1xyXG4gICAgaWYoIUxheWEuQnJvd3Nlci5vbkFuZHJvaWQpIHJldHVybjtcclxuXHJcbiAgICAvL+mcgOimgeWujOaVtOeahOexu+i3r+W+hO+8jOazqOaEj+S4jmlPU+eahOS4jeWQjFxyXG4gICAgbGV0IGJyaWRnZSA9IHdpbmRvd1tcIlBsYXRmb3JtQ2xhc3NcIl0uY3JlYXRlQ2xhc3MoY2xhc3NQYXRoKTsvL+WIm+W7uuiEmuacrOS7o+eQhlxyXG4gICAgaWYod2lkdGhCYWNrKXtcclxuICAgICAgICBsZXQgb2JqID0ge3ZhbHVlOiBkYXRhfTtcclxuICAgICAgICBicmlkZ2UuY2FsbFdpdGhCYWNrKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBKU09OLnBhcnNlKHZhbHVlKVxyXG4gICAgICAgICAgICBhbGVydChvYmoudmFsdWUpO1xyXG4gICAgICAgIH0sIGphdmFGdW5jLCBKU09OLnN0cmluZ2lmeShvYmopKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGxldCByZXNwID0gYnJpZGdlLmNhbGwoamF2YUZ1bmMsIGRhdGEpO1xyXG4gICAgICAgIGFsZXJ0KHJlc3ApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuoeeul+Wtl+espuWtl+iKguaVsC0t5q2j5YiZ5rOVXHJcbmZ1bmN0aW9uIGdldEJ5dGVzTGVuZ3RoKHN0cikge1xyXG4gICAgaWYoIXN0ciB8fCB0eXBlb2Ygc3RyICE9ICdzdHJpbmcnKXtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8vIOWcqEdCS+e8lueggemHjO+8jOmZpOS6hkFTQ0lJ5a2X56ym77yM5YW25a6D6YO95Y2g5Lik5Liq5a2X56ym5a69XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1teXFx4MDAtXFx4ZmZdL2csICd4eCcpLmxlbmd0aDtcclxufVxyXG5cclxuLy/orqHnrpflrZfnrKblrZfoioLmlbAtLemBjeWOhuazlS0t5pWI546H6L6D6auYXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJCeXRlTGVuKHN0cjpzdHJpbmcpeyBcclxuICAgIGxldCBieXRlTGVuID0gMCwgbGVuOm51bWJlcjsgXHJcbiAgICBpZihzdHIgJiYgdHlwZW9mIHN0ciA9PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgbGVuID0gc3RyLmxlbmd0aDtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xyXG4gICAgICAgICAgICBpZihzdHIuY2hhckNvZGVBdChpKSA+IDI1NSl7IFxyXG4gICAgICAgICAgICAgICAgYnl0ZUxlbiArPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7IFxyXG4gICAgICAgICAgICAgICAgYnl0ZUxlbisrOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnl0ZUxlbjtcclxufVxyXG5cclxuLy/mt7Hmi7fotJ1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5KHNyYzpvYmplY3QsIHRhcmdldDpvYmplY3Qpe1xyXG4gICAgaWYoIXNyYyB8fCAhdGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgaWYoc3JjICE9IG51bGwpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiBzcmMpe1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNbaV07XHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUpKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgWy4uLnRhcmdldFtpXV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZGVlcENvcHkodmFsdWUsIHRhcmdldFtpXSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5aGr5YWF54mp5ZOB5oyJ6ZKuXHJcbmV4cG9ydCBjbGFzcyBJdGVtQnRuUGFydHNDbGFzcyB7XHJcbiAgICBUZXh0X1RpdGxlOmZndWkuR1RleHRGaWVsZDtcclxuICAgIFRleHRfQXdhcmROdW06Zmd1aS5HVGV4dEZpZWxkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJ0bjpmZ3VpLkdDb21wb25lbnQpe1xyXG4gICAgICAgIHRoaXMuVGV4dF9UaXRsZSA9IGJ0bi5nZXRDaGlsZCgndGl0bGUnKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLlRleHRfQXdhcmROdW0gPSBidG4uZ2V0Q2hpbGQoJ1RleHRfQXdhcmROdW0nKS5hc1RleHRGaWVsZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxJdGVtRGF0YShpdGVtZGF0YSwgYnRuOmZndWkuR0NvbXBvbmVudCl7XHJcbiAgICBpZighaXRlbWRhdGEgfHwgIWJ0bikgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwYXJ0cyA9IG5ldyBJdGVtQnRuUGFydHNDbGFzcyhidG4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbEl0ZW1MaXN0RGF0YShpdGVtZGF0YUFycjphbnlbXSwgbGlzdDpmZ3VpLkdMaXN0KXtcclxuICAgIGlmKCFpdGVtZGF0YUFyciB8fCAhbGlzdCkgcmV0dXJuO1xyXG5cclxuICAgIGl0ZW1kYXRhQXJyLmZvckVhY2godj0+e1xyXG4gICAgICAgIGZpbGxJdGVtRGF0YSh2LCBsaXN0LmFkZEl0ZW1Gcm9tUG9vbCgpLmFzQ29tKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+WIl+ihqOeCueWHu+Wbnuiwg1xyXG5mdW5jdGlvbiBvbkNsaWNrTGlzdEl0ZW0odGhpc0FyZywgZnVuYzpGdW5jdGlvbiwgZGF0YSwgaXRlbTpmZ3VpLkdDb21wb25lbnQpe1xyXG4gICAgbGV0IGlkeCA9IGl0ZW0ucGFyZW50LmFzTGlzdC5nZXRDaGlsZEluZGV4KGl0ZW0pO1xyXG4gICAgZnVuYy5jYWxsKHRoaXNBcmcsIGlkeCArIDEsIC4uLmRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tMaXN0Q2FsbGJhY2sobGlzdDpmZ3VpLkdMaXN0LCB0aGlzQXJnLCBmdW5jOkZ1bmN0aW9uLCAuLi5kYXRhKXtcclxuICAgIGlmKCFsaXN0IHx8ICFmdW5jKSByZXR1cm47XHJcblxyXG4gICAgbGlzdC5vbihmZ3VpLkV2ZW50cy5DTElDS19JVEVNLCB0aGlzQXJnLCBvbkNsaWNrTGlzdEl0ZW0sIFt0aGlzQXJnLCBmdW5jLCBkYXRhXSk7XHJcbn0iLCJpbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCBHRXZlbnQgZnJvbSBcIi4vR0V2ZW50XCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuXHJcbi8v5b6u5L+h5pON5L2cXHJcbmxldCBwbGF0Zm9ybSA9IHdpbmRvd1snd3gnXTtcclxuLy/nmbvlvZXlvq7kv6Hlj7dcclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luKGlzVW5pb25JZDpib29sZWFuKSB7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5sb2dpbih7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc1VuaW9uSWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFNldHRpbmcocmVzLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Y+R6LW3572R57uc6K+35rGCXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcSA9IENvbmZpZy5SZXFEYXRhLkxvZ2luO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcS5OYW1lID0gcmVzLmNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YS5Mb2dpbkRhdGEuU2VuZFJlcShyZXEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leWksei0pe+8gScgKyByZXMuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8v5Yqg6L295YiG5YyFXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQWxsU3VicGFja2FnZXModGhpc0FyZywgY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlIHx8IENvbmZpZy5VSUNvbmZpZy5TdWJQa2dzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIENvbmZpZy5VSUNvbmZpZy5TdWJQa2dzLmZvckVhY2gocGtnPT57XHJcbiAgICAgICAgY29uc3QgbG9hZFRhc2sgPSBwbGF0Zm9ybS5sb2FkU3VicGFja2FnZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IHBrZywgLy8gbmFtZSDlj6/ku6XloasgbmFtZSDmiJbogIUgcm9vdFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWIhuWMheWKoOi9veaIkOWKn+WQjumAmui/hyBzdWNjZXNzIOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWIhuWMheWKoOi9veWksei0pemAmui/hyBmYWlsIOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/orr7nva7liIbkuqt0aWNrZXRcclxuZXhwb3J0IGZ1bmN0aW9uIHNoYXJlVGlja2V0TW9kZSgpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0udXBkYXRlU2hhcmVNZW51KHtcclxuICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWUsXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/ojrflj5bliIbkuqt0aWNrZXRcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNoYXJlVGlja2V0KCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBjb25zb2xlLmxvZygnPj4+Pj4+Pj4+Pj4+PuW+ruS/oeeZu+W9leS/oeaBr++8micsIGxhdW5jaEluZm8pO1xyXG4gICAgaWYobGF1bmNoSW5mbyAmJiBsYXVuY2hJbmZvLnNoYXJlVGlja2V0KXtcclxuICAgICAgICBjb25zb2xlLmxvZygnPj4+Pj4+Pj4+Pj4+Pj5zaGFyZVRpY2tldO+8micsIGxhdW5jaEluZm8uc2hhcmVUaWNrZXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbGF1bmNoSW5mby5zaGFyZVRpY2tldDtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+ino+aekOWIhuS6q3RpY2tldFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hhcmVJbmZvKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgdGlja2V0ID0gZ2V0U2hhcmVUaWNrZXQoKTtcclxuICAgIC8vIGlmKCF0aWNrZXQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBpZihsYXVuY2hJbmZvICYmIGxhdW5jaEluZm8ucXVlcnkpe1xyXG4gICAgICAgIC8vIERhdGFCYXNlLlNlbmRTaGFyZUluZm8uU2VuZFJlcShsYXVuY2hJbmZvLnF1ZXJ5LnNoYXJlSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxldCBzaGFyZUluZm8gPSB7XHJcbiAgICAvLyAgICAgRW5jcnlwdGVkRGF0YTogJycsXHJcbiAgICAvLyAgICAgSXY6ICcnXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcGxhdGZvcm0ubG9naW4oe1xyXG4gICAgLy8gICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGNvZGUgPSByZXMuY29kZTtcclxuICAgIC8vICAgICAgICAgICAgIHBsYXRmb3JtLmdldFNoYXJlSW5mbyh7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc2hhcmVUaWNrZXQ6IHRpY2tldCxcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6Kej5p6Q5YiG5Lqr5L+h5oGv77yaJywgcmVzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lbmNyeXB0ZWREYXRhKXtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlSW5mby5FbmNyeXB0ZWREYXRhID0gcmVzLmVuY3J5cHRlZERhdGE7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZUluZm8uSXYgPSByZXMuaXY7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhQmFzZS5TZW5kU2hhcmVJbmZvLlNlbmRSZXEoY29kZSwgcmVzLmVuY3J5cHRlZERhdGEsIHJlcy5pdik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXlpLHotKXvvIEnICsgcmVzLmVyck1zZyk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyByZXR1cm4gc2hhcmVJbmZvO1xyXG59XHJcblxyXG4vL+aYvuekuuWPs+S4iuinkui9rOWPkVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NoYXJlTWVudSgpIHtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGxhdGZvcm0ub25TaGFyZUFwcE1lc3NhZ2UoKCkgPT4gKHtcclxuICAgICAgICB0aXRsZTogRGF0YS5HZXRTaGFyZVdvcmQoKSxcclxuICAgICAgICBpbWFnZVVybDogQ29uZmlnLlVJQ29uZmlnLlNoYXJlSW1hZ2VQYXRoLkludml0ZUZyaWVuZCxcclxuICAgICAgICBxdWVyeTogJ3NoYXJlSUQ9JyArIERhdGEuTG9naW5EYXRhLkFjY291bnRLZXksXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbi8v5YiG5LqrXHJcbmV4cG9ydCBmdW5jdGlvbiBTaGFyZU1lc3NhZ2UobXNnOnN0cmluZywgaW1nUGF0aD86c3RyaW5nLCB1c2VTY3JlZW5TaG90Pzpib29sZWFuKSB7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgc3lzSW5mbyA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG4gICAgLy/kvb/nlKjlsY/luZXmiKrlm75cclxuICAgIGlmKHVzZVNjcmVlblNob3QgPT0gdHJ1ZSl7XHJcbiAgICAgICAgaW1nUGF0aCA9IHdpbmRvd1tcImNhbnZhc1wiXS50b1RlbXBGaWxlUGF0aFN5bmMoe1xyXG4gICAgICAgICAgICBkZXN0V2lkdGg6IHN5c0luZm8ud2luZG93V2lkdGggKiBzeXNJbmZvLnBpeGVsUmF0aW8sXHJcbiAgICAgICAgICAgIGRlc3RIZWlnaHQ6IHN5c0luZm8ud2luZG93SGVpZ2h0ICogc3lzSW5mby5waXhlbFJhdGlvXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhdGZvcm0uc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICB0aXRsZTogbXNnLFxyXG4gICAgICAgIGltYWdlVXJsOiBpbWdQYXRoLFxyXG4gICAgICAgIHF1ZXJ5OiAnc2hhcmVJRD0nICsgRGF0YS5Mb2dpbkRhdGEuQWNjb3VudEtleVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvblNob3coY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0ub25TaG93KGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9mZlNob3coY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0ub2ZmU2hvdyhjYWxsYmFjayk7XHJcbn1cclxuXHJcbi8v5riF55CG57yT5a2YXHJcbmV4cG9ydCBmdW5jdGlvbiBDbGVhckxvY2FsQ2FjaGUoKSB7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICB3aW5kb3dbXCJjYW52YXNcIl0uZ2V0U2F2ZWRGaWxlTGlzdCh7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmZpbGVMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZmlsZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzLmZpbGVMaXN0LmZvckVhY2goKGZpbGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0ucmVtb3ZlU2F2ZWRGaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IGZpbGUuZmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYW52YXNUb1RlbXBGaWxlUGF0aChjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICAvLyBsZXQgd2lkdGggID0gZmd1aS5HUm9vdC5pbnN0LndpZHRoO1xyXG4gICAgLy8gbGV0IGhlaWdodCAgPSBmZ3VpLkdSb290Lmluc3QuaGVpZ2h0O1xyXG4gICAgbGV0IHN5c0luZm8gPSBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgY29uc29sZS5sb2coc3lzSW5mbyk7XHJcblxyXG4gICAgbGV0IGRlc3RTaXplID0gbmV3IExheWEuUG9pbnQoc3lzSW5mby53aW5kb3dXaWR0aCAqIHN5c0luZm8ucGl4ZWxSYXRpbywgc3lzSW5mby53aW5kb3dIZWlnaHQgKiBzeXNJbmZvLnBpeGVsUmF0aW8pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRlc3RTaXplKTtcclxuXHJcbiAgICB3aW5kb3dbXCJjYW52YXNcIl0udG9UZW1wRmlsZVBhdGgoe1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogZGVzdFNpemUueCxcclxuICAgICAgICBoZWlnaHQ6IGRlc3RTaXplLnksXHJcbiAgICAgICAgZGVzdFdpZHRoOiBkZXN0U2l6ZS54LFxyXG4gICAgICAgIGRlc3RIZWlnaHQ6IGRlc3RTaXplLnksXHJcbiAgICAgICAgY2FudmFzSWQ6ICdteUNhbnZhcycsXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnRlbXBGaWxlUGF0aCk7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5L+d5a2Y5Zu+54mH5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm0uc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTon5L+d5a2Y5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOidzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjoyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+Wksei0pScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLmVyck1zZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtLm9wZW5TZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3Moc2V0dGluZ2RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXR0aW5nZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdkYXRhLmF1dGhTZXR0aW5nW1wic2NvcGUud3JpdGVQaG90b3NBbGJ1bVwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5p2D6ZmQ5oiQ5Yqf77yM57uZ5Ye65YaN5qyh54K55Ye75Zu+54mH5L+d5a2Y5Yiw55u45YaM55qE5o+Q56S644CCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5p2D6ZmQ5aSx6LSl77yM57uZ5Ye65LiN57uZ5p2D6ZmQ5bCx5peg5rOV5q2j5bi45L2/55So55qE5o+Q56S6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJOaWNrTmFtZShjYWxsYmFjazpGdW5jdGlvbil7XHJcbiAgICBpZighcGxhdGZvcm0pIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5nZXRTZXR0aW5nKHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICAgICAgcGxhdGZvcm0uYXV0aG9yaXplKHtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZTogJ3Njb3BlLnVzZXJJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDnlKjmiLflt7Lnu4/lkIzmhI/lsI/nqIvluo/kvb/nlKjlvZXpn7Plip/og73vvIzlkI7nu63osIPnlKggd3guc3RhcnRSZWNvcmQg5o6l5Y+j5LiN5Lya5by556qX6K+i6ZeuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtLnN0YXJ0UmVjb3JkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHBsYXRmb3JtLmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IHJlcy51c2VySW5mbztcclxuICAgICAgICAgICAgY29uc3Qgbmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZTtcclxuICAgICAgICAgICAgY29uc3QgYXZhdGFyVXJsID0gdXNlckluZm8uYXZhdGFyVXJsO1xyXG4gICAgICAgICAgICBjb25zdCBnZW5kZXIgPSB1c2VySW5mby5nZW5kZXI7IC8vIOaAp+WIqyAw77ya5pyq55+l44CBMe+8mueUt+OAgTLvvJrlpbNcclxuICAgICAgICAgICAgY29uc3QgcHJvdmluY2UgPSB1c2VySW5mby5wcm92aW5jZTtcclxuICAgICAgICAgICAgY29uc3QgY2l0eSA9IHVzZXJJbmZvLmNpdHk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSB1c2VySW5mby5jb3VudHJ5O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+W+ruS/oeaPkOekuuW8ueeql1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RpcHNXaW5kb3codGlwVGl0bGU6c3RyaW5nLCB0aXBDb250ZW50OnN0cmluZywgdGlwc0NvbmZpcm1UeHQ6c3RyaW5nLCBjb25maXJtQ2FsbGJhazpGdW5jdGlvbiwgY2FuY2VsQ2FsbGJhY2s/OkZ1bmN0aW9uKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6IHRpcFRpdGxlIHx8ICfmj5DnpLonLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRpcENvbnRlbnQsXHJcbiAgICAgICAgY29uZmlybVRleHQ6IHRpcHNDb25maXJtVHh0IHx8ICfnoa7lrponLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKGNvbmZpcm1DYWxsYmFrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQ2FsbGJhaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjYW5jZWxDYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/mv4DlirHlub/lkYpcclxubGV0IHJld2FyZGVkVmlkZW9BZDtcclxubGV0IHJld2FyZEFkSWR4ID0gMDtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25DbG9zZUNhbGxiYWNrXHJcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkVycm9yQ2FsbGJhY2tcclxuICogQHBhcmFtICB7fSB0aGlzVGFyZ2V0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmV3YXJkZWRWaWRlb0FkKG9uQ2xvc2VDYWxsYmFjaz86RnVuY3Rpb24sIG9uRXJyb3JDYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNUYXJnZXQ/KXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIC8v5Z+656GA5bqT54mI5pys5Y+3ID49IDIuMC40XHJcbiAgICBsZXQgc2RrVmVyc2lvbiA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCkuU0RLVmVyc2lvbjtcclxuICAgIGlmKCFzZGtWZXJzaW9uIHx8IHBhcnNlSW50KHNka1ZlcnNpb24ucmVwbGFjZSgvXFwuL2csICcnKSkgPCAyMDQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgYWRJbmZvID0ge2FkVW5pdElkOlwiXCJ9O1xyXG4gICAgLy/ova7mjaLlub/lkYpcclxuICAgIGlmKHJld2FyZEFkSWR4ID49IExvY2FsQ29uZmlnLlJld2FyZEFkTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgcmV3YXJkQWRJZHggPSAwO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCfmv4DlirHlub/lkYrvvJonLExvY2FsQ29uZmlnLlJld2FyZEFkTGlzdFtyZXdhcmRBZElkeF0pO1xyXG4gICAgYWRJbmZvLmFkVW5pdElkID0gTG9jYWxDb25maWcuUmV3YXJkQWRMaXN0W3Jld2FyZEFkSWR4XTtcclxuXHJcbiAgICBpZihyZXdhcmRlZFZpZGVvQWQgPT0gbnVsbCl7XHJcbiAgICAgICAgcmV3YXJkZWRWaWRlb0FkID0gcGxhdGZvcm0uY3JlYXRlUmV3YXJkZWRWaWRlb0FkKGFkSW5mbyk7XHJcbiAgICB9XHJcbiAgICBpZihyZXdhcmRlZFZpZGVvQWQgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIHJld2FyZGVkVmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV3YXJkZWRWaWRlb0FkLnNob3coKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Yib5bu65r+A5Yqx5bm/5ZGK5aSx6LSl77yaJywgZXJyKTtcclxuICAgICAgICAgICAgLy8gcmV3YXJkZWRWaWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHJld2FyZGVkVmlkZW9BZC5zaG93KCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIC8v5LqM5qyh5aSx6LSl5Zue6LCDXHJcbiAgICAgICAgICAgIC8vICAgICBvbkVycm9yQ2FsbGJhY2suY2FsbCh0aGlzVGFyZ2V0KTtcclxuICAgICAgICAgICAgLy8gfSkpO1xyXG5cclxuICAgICAgICAgICAgb25FcnJvckNhbGxiYWNrLmNhbGwodGhpc1RhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXdhcmRBZElkeCsrO1xyXG5cclxuICAgIHJld2FyZGVkVmlkZW9BZC5vbkVycm9yKG9uUmV3YXJkQWRFcnJvcik7XHJcblxyXG4gICAgLy8gaWYodHlwZW9mKG9uTG9hZENhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgIC8vICAgICAvLyByZXdhcmRlZFZpZGVvQWQub25Mb2FkKCgpPT57XHJcbiAgICAvLyAgICAgLy8gICAgIG9uTG9hZENhbGxiYWNrLmNhbGwodGhpc1RhcmdldCwgdHJ1ZSk7XHJcbiAgICAvLyAgICAgLy8gICAgIC8vIHJld2FyZGVkVmlkZW9BZC5zaG93KCkuY2F0Y2goZXJyID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgLy8gICAgIHJld2FyZGVkVmlkZW9BZC5sb2FkKClcclxuICAgIC8vICAgICAvLyAgICAgLy8gICAgICAgLnRoZW4oKCkgPT4gcmV3YXJkZWRWaWRlb0FkLnNob3coKSk7XHJcbiAgICAvLyAgICAgLy8gICAgIC8vIH0pO1xyXG4gICAgLy8gICAgIC8vIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8v5YWz6Zet5Zue6LCD5Y+C5pWwIHJlcy5pc0VuZGVkOmJvb2xlYW4g6KeG6aKR5piv5ZCm5piv5Zyo55So5oi35a6M5pW06KeC55yL55qE5oOF5Ya15LiL6KKr5YWz6Zet55qEXHJcbiAgICBsZXQgY2xvc2VGdW5jID0gZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn5piv5ZCm55yL5a6M5bm/5ZGK77yaJyxyZXMpO1xyXG5cclxuICAgICAgICBpZihyZXMuaXNFbmRlZCAmJiB0eXBlb2Yob25DbG9zZUNhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgb25DbG9zZUNhbGxiYWNrLmNhbGwodGhpc1RhcmdldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXdhcmRlZFZpZGVvQWQub2ZmQ2xvc2UoY2xvc2VGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICByZXdhcmRlZFZpZGVvQWQub25DbG9zZShjbG9zZUZ1bmMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblJld2FyZEFkRXJyb3IoZXJyKXtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICByZXdhcmRlZFZpZGVvQWQub2ZmRXJyb3Iob25SZXdhcmRBZEVycm9yKTtcclxufVxyXG5cclxuLy9CYW5uZXLlub/lkYpcclxubGV0IGJhbm5lckFkO1xyXG5sZXQgYmFubmVySWR4ID0gMDtcclxuXHJcbmV4cG9ydCB0eXBlIGJhbm5lckFkSW5mbyA9IHtcclxuICAgIGFkVW5pdElkPzpzdHJpbmcsXHJcbiAgICBzdHlsZT86e1xyXG4gICAgICAgIGxlZnQ6bnVtYmVyLCBcclxuICAgICAgICB0b3A6bnVtYmVyLCBcclxuICAgICAgICB3aWR0aD86bnVtYmVyLCBcclxuICAgICAgICBoZWlnaHQ/Om51bWJlclxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICB7e2FkVW5pdElkOnN0cmluZywgc3R5bGU6e2xlZnQ6bnVtYmVyLCB0b3A6bnVtYmVyLCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXJ9fX0gYWRJbmZvXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFubmVyQWQoYWRJbmZvPzpiYW5uZXJBZEluZm8pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgLy8gbGVmdDogcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aCAqIDAuNSAtIDEwMCxcclxuICAgIC8vICAgICAgICAgdG9wOiBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAqIDAuNSArIDEwMCxcclxuICAgIGxldCBzeXNJbmZvID0gcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbiAgICAvL+WfuuehgOW6k+eJiOacrOWPtyA+PSAyLjAuNFxyXG4gICAgbGV0IHNka1ZlcnNpb24gPSBzeXNJbmZvLlNES1ZlcnNpb247XHJcbiAgICBpZighc2RrVmVyc2lvbiB8fCBwYXJzZUludChzZGtWZXJzaW9uLnJlcGxhY2UoL1xcLi9nLCAnJykpIDwgMjA0KSByZXR1cm47XHJcblxyXG4gICAgaWYoIWFkSW5mbylcclxuICAgICAgICBhZEluZm8gPSB7fTtcclxuICAgIC8v6L2u5o2i5bm/5ZGKXHJcbiAgICBpZihiYW5uZXJJZHggPj0gTG9jYWxDb25maWcuQmFubmVyQWRMaXN0Lmxlbmd0aClcclxuICAgICAgICBiYW5uZXJJZHggPSAwO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnQmFubmVy5bm/5ZGK77yaJyxMb2NhbENvbmZpZy5CYW5uZXJBZExpc3RbYmFubmVySWR4XSk7XHJcbiAgICBhZEluZm8uYWRVbml0SWQgPSBMb2NhbENvbmZpZy5CYW5uZXJBZExpc3RbYmFubmVySWR4XTtcclxuXHJcbiAgICAvL+S9jee9rlxyXG4gICAgYWRJbmZvLnN0eWxlID0ge1xyXG4gICAgICAgIGxlZnQ6MCwgXHJcbiAgICAgICAgdG9wOnN5c0luZm8ud2luZG93SGVpZ2h0IC0gMTAwLFxyXG4gICAgICAgIHdpZHRoOnN5c0luZm8ud2luZG93V2lkdGgsIFxyXG4gICAgICAgIC8vIGhlaWdodDoxMDBcclxuICAgIH1cclxuXHJcbiAgICBpZihiYW5uZXJBZCA9PSBudWxsKXtcclxuICAgICAgICBiYW5uZXJBZCA9IHBsYXRmb3JtLmNyZWF0ZUJhbm5lckFkKGFkSW5mbyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBiYW5uZXJBZC5kZXN0cm95KCk7XHJcbiAgICAgICAgYmFubmVyQWQgPSBwbGF0Zm9ybS5jcmVhdGVCYW5uZXJBZChhZEluZm8pO1xyXG4gICAgfVxyXG4gICAgaWYoYmFubmVyQWQgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIC8vYmFubmVy5L2N572u6YCC6YWNXHJcbiAgICBiYW5uZXJBZC5vblJlc2l6ZShyZXMgPT4ge1xyXG4gICAgICAgIGJhbm5lckFkLnN0eWxlLnRvcCA9IHN5c0luZm8ud2luZG93SGVpZ2h0IC0gcmVzLmhlaWdodDtcclxuICAgICAgICBpZihzeXNJbmZvLm1vZGVsID09ICdpUGhvbmUgWCcpe1xyXG4gICAgICAgICAgICBiYW5uZXJBZC5zdHlsZS50b3AtPTIwO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJhbm5lckFkLm9uRXJyb3Iob25CYW5uZXJBZEVycm9yKTtcclxuXHJcbiAgICBiYW5uZXJBZC5zaG93KCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5Yib5bu6QmFubmVy5bm/5ZGK5aSx6LSl77yaJywgZXJyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJhbm5lcklkeCsrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkJhbm5lckFkRXJyb3IoZXJyKXtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICBiYW5uZXJBZC5vZmZFcnJvcihvbkJhbm5lckFkRXJyb3IpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUJhbm5lckFkKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuICAgIGlmKGJhbm5lckFkID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBiYW5uZXJBZC5oaWRlKCk7XHJcbn1cclxuXHJcbi8v5LiL6L296L+c56iL5paH5Lu2XHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUodXJsLCBjYWxsYmFjayl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UgfHwgIXVybCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCfkuIvovb3lnLDlnYDvvJonLHVybCk7XHJcblxyXG4gICAgcGxhdGZvcm0uZG93bmxvYWRGaWxlKHtcclxuICAgICAgICB1cmw6IHVybCwgXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgLy8g5Y+q6KaB5pyN5Yqh5Zmo5pyJ5ZON5bqU5pWw5o2u77yM5bCx5Lya5oqK5ZON5bqU5YaF5a655YaZ5YWl5paH5Lu25bm26L+b5YWlIHN1Y2Nlc3Mg5Zue6LCD77yM5Lia5Yqh6ZyA6KaB6Ieq6KGM5Yik5pat5piv5ZCm5LiL6L295Yiw5LqG5oOz6KaB55qE5YaF5a65XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2FsbGJhY2spID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcy50ZW1wRmlsZVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy/ojrflj5blvq7kv6HlsY/luZXlsLrlr7hcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbmRvd1NpemUoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBzeXNJbmZvID0gcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgIGNvbnNvbGUubG9nKHN5c0luZm8pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGg6IHN5c0luZm8ud2luZG93V2lkdGggKiBzeXNJbmZvLnBpeGVsUmF0aW8sIFxyXG4gICAgICAgIGhlaWdodDogc3lzSW5mby53aW5kb3dIZWlnaHQgKiBzeXNJbmZvLnBpeGVsUmF0aW9cclxuICAgIH07XHJcbn1cclxuXHJcbi8v6I635Y+W55So5oi35o6I5p2D5L+h5oGvXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXR0aW5nKGxvZ2luQ29kZSl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5nZXRTZXR0aW5nKHtcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAvLyByZXMuYXV0aFNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgIC8vICAgXCJzY29wZS51c2VySW5mb1wiOiB0cnVlLCAgICAvL+aYr+WQpuaOiOadg+eUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAvLyAgIFwic2NvcGUudXNlckxvY2F0aW9uXCI6IHRydWUsICAgIC8v5piv5ZCm5o6I5p2D5Zyw55CG5L2N572uXHJcbiAgICAgICAgICAgIC8vICAgXCJzY29wZS53ZXJ1blwiOiBmYWxzZSwgIC8v5piv5ZCm5o6I5p2D5b6u5L+h6L+Q5Yqo5q2l5pWwXHJcbiAgICAgICAgICAgIC8vICAgXCJzY29wZS53cml0ZVBob3Rvc0FsYnVtXCI6IGZhbHNlICAgIC8v5piv5ZCm5o6I5p2D5L+d5a2Y5Yiw55u45YaMXHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5hdXRoU2V0dGluZyk7XHJcbiAgICAgICAgICAgIC8vIGlmKHR5cGVvZihjYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIC8vICAgICBjYWxsYmFjayhyZXMuYXV0aFNldHRpbmdbXCJzY29wZS51c2VySW5mb1wiXSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcclxuICAgICAgICAgICAgICAgIHBsYXRmb3JtLmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuY29kZSA9IGxvZ2luQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGF0YS5Mb2dpbkRhdGEuTG9naW5SZXEoJycsIHJlcy5jb2RlLCByZXMuZW5jcnlwdGVkRGF0YSwgcmVzLml2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVVzZXJJbmZvQnV0dG9uKGxvZ2luQ29kZSk7XHJcbiAgICAgICAgICAgICAgICAvL+aYvuekuuaOiOadg1xyXG4gICAgICAgICAgICAgICAgTG9jYWxDb25maWcuSXNXeEF1dGggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIE1hbmFnZXIuTG9hZGluZ1Byb2dyZXNzTWFuYWdlci5JbnN0LlNob3dXeExvZ2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/nlKjmiLfmjojmnYPmjInpkq5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVzZXJJbmZvQnV0dG9uKGxvZ2luQ29kZSl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgc3lzSW5mbyA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICBjb25zdCBidXR0b24gPSBwbGF0Zm9ybS5jcmVhdGVVc2VySW5mb0J1dHRvbih7XHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgIC8vIGltYWdlOiBDb25maWcuVUlDb25maWcuU2hhcmVJbWFnZVBhdGguSW52aXRlRnJpZW5kLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgd2lkdGg6IHN5c0luZm8ud2luZG93V2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogc3lzSW5mby53aW5kb3dIZWlnaHQsXHJcbiAgICAgICAgICAgIC8vIGxpbmVIZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcnLFxyXG4gICAgICAgICAgICAvLyBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAvLyB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAvLyBmb250U2l6ZTogMjYsXHJcbiAgICAgICAgICAgIC8vIGJvcmRlclJhZGl1czogNFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJ1dHRvbi5vblRhcCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAvL+ehruiupOaOiOadg+WQjumUgOavgeaMiemSrlxyXG4gICAgICAgIGlmKHJlcy5lbmNyeXB0ZWREYXRhKXtcclxuICAgICAgICAgICAgcmVzLmNvZGUgPSBsb2dpbkNvZGU7XHJcbiAgICAgICAgICAgIC8vIERhdGEuTG9naW5EYXRhLkxvZ2luUmVxKCcnLCByZXMuY29kZSwgcmVzLmVuY3J5cHRlZERhdGEsIHJlcy5pdik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgR0V2ZW50LkFkZExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkxvZ2luU3VjY2VzcywgKCk9PntidXR0b24uZGVzdHJveSgpO30sIHRoaXMpO1xyXG59XHJcblxyXG4vL+ajgOafpeeJiOacrOabtOaWsFxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tVcGRhdGUoY2FsbGJhY2s/OkZ1bmN0aW9uKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmKHR5cGVvZihwbGF0Zm9ybS5nZXRVcGRhdGVNYW5hZ2VyKSA9PT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlTWFuYWdlciA9IHBsYXRmb3JtLmdldFVwZGF0ZU1hbmFnZXIoKTtcclxuXHJcbiAgICAgICAgdXBkYXRlTWFuYWdlci5vbkNoZWNrRm9yVXBkYXRlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmo4Dmn6XmlrDniYjmnKznu5PmnpzvvJonLCByZXMuaGFzVXBkYXRlKTtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgLy/lm57osIPpgJrnn6Xnu5PmnpxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcy5oYXNVcGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+a4heeQhue8k+WtmFxyXG4gICAgICAgICAgICBpZihyZXMuaGFzVXBkYXRlKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1tcInd4RG93bmxvYWRlclwiXS5jbGVhbk9sZEFzc2V0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAvL+Wbnuiwg+mAmuefpee7k+aenFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsYXRmb3JtLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+abtOaWsOaPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5Y2z5bCG6YeN5ZCv5ri45oiPJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5paw55qE54mI5pys5bey57uP5LiL6L295aW977yM6LCD55SoIGFwcGx5VXBkYXRlIOW6lOeUqOaWsOeJiOacrOW5tumHjeWQr1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyDmlrDniYjmnKzkuIvovb3lpLHotKVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy/lkJHlvIDmlL7ln5/lj5HpgIHmtojmga9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RPcGVuUmVnaW9uTWVzc2FnZShldmVudElkKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG9wZW5EYXRhQ29udGV4dCA9IHBsYXRmb3JtLmdldE9wZW5EYXRhQ29udGV4dCgpXHJcbiAgICBvcGVuRGF0YUNvbnRleHQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIGV2ZW50SWQ6IGV2ZW50SWQsXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/lkJHlvIDmlL7ln5/lj5HpgIHmlbDmja5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RPcGVuUmVnaW9uRGF0YShkYXRhKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG9wZW5EYXRhQ29udGV4dCA9IHBsYXRmb3JtLmdldE9wZW5EYXRhQ29udGV4dCgpXHJcbiAgICBvcGVuRGF0YUNvbnRleHQucG9zdE1lc3NhZ2UoZGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkuIrkvKDmuLjmiI/mlbDmja5cclxuICogaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaWdhbWUvZGV2L2FwaS93eC5zZXRVc2VyQ2xvdWRTdG9yYWdlLmh0bWxcclxuICogXHJcbiAqIEBwYXJhbSAge30gZGF0YVxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHBhcmFtICB7fSB0aGlzQXJnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlckNsb3VkU3RvcmFnZShkYXRhLCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLnNldFVzZXJDbG91ZFN0b3JhZ2Uoe1xyXG4gICAgICAgIEtWRGF0YUxpc3Q6IGRhdGEsXHJcbiAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/ojrflj5blsI/muLjmiI/lkK/liqjkv6Hmga9cclxuLy9odHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9taW5pZ2FtZS9kZXYvYXBpL3d4LmdldExhdW5jaE9wdGlvbnNTeW5jLmh0bWxcclxuLy8gbGF1bmNoSW5mbyA9IHtcclxuLy8gICAgIHNjZW5lLFxyXG4vLyAgICAgcXVlcnksXHJcbi8vICAgICBzaGFyZVRpY2tldCxcclxuLy8gICAgIHJlZmVycmVySW5mbzp7XHJcbi8vICAgICAgICAgYXBwSWQsXHJcbi8vICAgICAgICAgZXh0cmFEYXRhXHJcbi8vICAgICB9XHJcbi8vIH1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhdW5jaE9wdGlvbnNTeW5jKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBjb25zb2xlLmxvZygn5ZCv5Yqo5L+h5oGv77yaJywgbGF1bmNoSW5mbyk7XHJcblxyXG4gICAgcmV0dXJuIGxhdW5jaEluZm87XHJcbn1cclxuXHJcbi8v6I635Y+W5YWl5Y+jYXBwaWRcclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2luQXBwaWQoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsYXVuY2hJbmZvID0gcGxhdGZvcm0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIGlmKGxhdW5jaEluZm8gJiYgbGF1bmNoSW5mby5yZWZlcnJlckluZm8pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflhaXlj6NBcHBpZO+8micsbGF1bmNoSW5mby5yZWZlcnJlckluZm8uYXBwSWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbGF1bmNoSW5mby5yZWZlcnJlckluZm8uYXBwSWQ7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLy/ojrflj5blhaXlj6PlnLrmma/lgLxcclxuLy9odHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9taW5pZ2FtZS9kZXYvcmVmZXJlbmNlL3NjZW5lLWxpc3QuaHRtbFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF1bmNoU2NlbmUoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsYXVuY2hJbmZvID0gcGxhdGZvcm0uZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIGNvbnNvbGUubG9nKCflnLrmma/lgLzvvJonLGxhdW5jaEluZm8uc2NlbmUpO1xyXG4gICAgaWYobGF1bmNoSW5mbyl7XHJcbiAgICAgICAgcmV0dXJuIGxhdW5jaEluZm8uc2NlbmU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLy/mmK/lkKbku47igJzmiJHnmoTlsI/nqIvluo/ov5vlhaXigJ1cclxuZXhwb3J0IGZ1bmN0aW9uIElzTG9naW5Gcm9tRmF2b3VyaXRlKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgc2NlbmUgPSBnZXRMYXVuY2hTY2VuZSgpO1xyXG4gICAgLy8gcmV0dXJuIHNjZW5lID09IDEwODkgfHwgc2NlbmUgPT0gMTEwMztcclxuICAgIHJldHVybiBzY2VuZSA9PSAxMTA0IHx8IHNjZW5lID09IDExMDM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDot7PovazlsI/nqIvluo9cclxuICogQHBhcmFtICB7c3RyaW5nfSBhcHBJZFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHBhdGhcclxuICogQHBhcmFtICB7c3RyaW5nfSBleHRyYURhdGFcclxuICogQHBhcmFtICB7c3RyaW5nfSBlbnZWZXJzaW9uXHJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0gIHt9IHRoaXNBcmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVRvTWluaVByb2dyYW0oYXBwSWQ6c3RyaW5nLCBwYXRoPzpzdHJpbmcsIGV4dHJhRGF0YT8sIGVudlZlcnNpb24/LCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSB8fCAhYXBwSWQpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgIGFwcElkOiBhcHBJZCxcclxuICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgIGV4dHJhRGF0YTogZXh0cmFEYXRhLFxyXG4gICAgICAgIGVudlZlcnNpb246IGVudlZlcnNpb24sXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIC8vIOaJk+W8gOaIkOWKn1xyXG4gICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDot7PovazliLDljZblhYvmmJ/nkINcclxuICogQHBhcmFtICB7SlNPTn0gZXh0cmFEYXRhXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW52VmVyc2lvblxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHBhcmFtICB7fSB0aGlzQXJnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ29NYWlrZVNob3BwaW5nKGV4dHJhRGF0YT8sIGNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8sIGVudlZlcnNpb24/OnN0cmluZyl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBuYXZpZ2F0ZVRvTWluaVByb2dyYW0oTG9jYWxDb25maWcuTWluaVByb2dyYW1BcHBJZC5NYWlrZSwgbnVsbCwgZXh0cmFEYXRhLCBlbnZWZXJzaW9uLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku47lhbbku5blsI/nqIvluo/ov5Tlm55cclxuICogQHBhcmFtICB7RnVuY3Rpb259IGNiXHJcbiAqIEBwYXJhbSAge30gdGhpc0FyZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uUmV0dXJuR2FtZShjYjpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgaWYodHlwZW9mIGNiID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgIG9uU2hvdyhjYik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBAdHlwZSB7Y2MuTm9kZX0gKi9cclxubGV0IHN1YkNvbnRlbnRWaWV3O1xyXG4vL+iuvue9ruWtkOWfn+e7hOS7tlxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3ViQ29udGVudFZpZXcoc3ViVmlldyl7XHJcbiAgICBpZighc3ViVmlldykgcmV0dXJuO1xyXG5cclxuICAgIHN1YkNvbnRlbnRWaWV3ID0gc3ViVmlldztcclxufVxyXG5cclxuLy/ojrflj5blrZDln5/nu4Tku7ZcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN1YkNvbnRlbnRWaWV3KCl7XHJcbiAgICByZXR1cm4gc3ViQ29udGVudFZpZXc7XHJcbn1cclxuXHJcbi8v6ZqQ6JeP5oiW5pi+56S65a2Q5Z+f57uE5Lu2XHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtib29sZWFufSBhY3RpdmVcclxuICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBzZXRTdWJDb250ZW50QWN0aXZlKGFjdGl2ZSl7XHJcbi8vICAgICBpZighc3ViQ29udGVudFZpZXcgfHwgdHlwZW9mIGFjdGl2ZSAhPSAnYm9vbGVhbicpIHJldHVybjtcclxuXHJcbi8vICAgICBzdWJDb250ZW50Vmlldy5hY3RpdmUgPSBhY3RpdmU7XHJcbi8vICAgICBzdWJDb250ZW50Vmlldy5nZXRDb21wb25lbnQoY2MuV1hTdWJDb250ZXh0VmlldykuZW5hYmxlZCA9IGFjdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gLy/mm7TmlrDlrZDln59cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN1YkNvbnRlbnRWaWV3KCl7XHJcbi8vICAgICBpZighc3ViQ29udGVudFZpZXcpIHJldHVybjtcclxuXHJcbi8vICAgICBzdWJDb250ZW50Vmlldy5nZXRDb21wb25lbnQoY2MuV1hTdWJDb250ZXh0VmlldykudXBkYXRlKCk7XHJcbi8vIH1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9Mb2NhbENvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVzVXJscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9naW5SZXNVcmxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9EZWZpbmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1VJQ29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9EYXRhQ29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9OZXRDb25maWcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvY2FsQ29udGVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29uZmlnVXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL1N0YXRlQ29uZmlnJztcclxuIiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuL0xvY2FsQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ29uZmlnKGNvbmZpZzpBcnJheTxhbnk+LCBwYXJhbTpzdHJpbmcsIHZhbHVlKXtcclxuICAgIGlmKG51bGwgPT0gdmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZhbHVlIGlzIG51bGwnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoQXJyYXkuaXNBcnJheShjb25maWcpID09IGZhbHNlIHx8IGNvbmZpZy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBvciBlbXB0eSBjb25maWcgYXJyYXknKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCB0YXJnZXQ6Q29uZmlnLkNvbmZpZ1R5cGU7XHJcbiAgICBjb25maWcuc29tZSh2PT57XHJcbiAgICAgICAgaWYoIXZbcGFyYW1dKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWlzcyBhcnJheSBwYXJhbTogJywgcGFyYW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9ZWxzZSBpZih2W3BhcmFtXSA9PSB2YWx1ZSl7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHY7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbi8v5qC55o2uaWTmkJzntKLphY3nva5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENvbmZpZ0J5SWQoY29uZmlnOkFycmF5PGFueT4sIHZhbHVlKXtcclxuICAgIHJldHVybiBzZWFyY2hDb25maWcoY29uZmlnLCAnSWQnLCB2YWx1ZSk7XHJcbn1cclxuXHJcbi8v6YWN572u55qE5YaF5a2Y57yT5a2YXHJcbmxldCBjb25maWdDYWNoZTpDb25maWcuRGljdGlvbmFyeTxDb25maWcuQ29uZmlnVHlwZVtdPiA9IHt9O1xyXG5sZXQgbGV2ZWxDb25maWdDYWNoZTpDb25maWcuRGljdGlvbmFyeTxBcnJheTxDb25maWcuQ29uZmlnVHlwZT4+ID0ge307XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWdCeUtleShrZXk6c3RyaW5nKXtcclxuICAgIGlmKCFrZXkpIHJldHVybjtcclxuXHJcbiAgICBpZihudWxsID09IGNvbmZpZ0NhY2hlW2tleV0pe1xyXG4gICAgICAgIGNvbmZpZ0NhY2hlW2tleV0gPSBDb25maWcuRGF0YUNvbmZpZy5nZXRMb2NhbENvbmZpZyhrZXkpO1xyXG4gICAgICAgIGxldmVsQ29uZmlnQ2FjaGVba2V5XSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25maWdDYWNoZVtrZXldO1xyXG59XHJcblxyXG4vL+mAmui/h0lk5pCc5a+76YWN572uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWdCeUlkKGtleTpzdHJpbmcsIGlkOm51bWJlcil7XHJcbiAgICByZXR1cm4gc2VhcmNoQ29uZmlnQnlJZChnZXRDb25maWdCeUtleShrZXkpLCBpZCk7XHJcbn1cclxuXHJcbi8v6YCa6L+H562J57qn5pCc5a+7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWdCeUxldmVsKGtleTpzdHJpbmcsIGxldmVsOm51bWJlcil7XHJcbiAgICAvL2lk562J5LqObGV2ZWxcclxuICAgIHJldHVybiBnZXRDb25maWdCeUlkKGtleSwgbGV2ZWwpO1xyXG59XHJcblxyXG4vL+mAmui/h+S7u+aEj+Wtl+auteaQnOWvu1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnQnlBcmcoa2V5OnN0cmluZywgYXJnOnN0cmluZywgdmFsdWUpe1xyXG4gICAgcmV0dXJuIHNlYXJjaENvbmZpZyhnZXRDb25maWdCeUtleShrZXkpLCBhcmcsIHZhbHVlKTtcclxufVxyXG5cclxuLy/mjInlrZfmrrXmjpLliJfphY3nva5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRDb25maWdCeVBhcmFtKHNyYzpBcnJheTxhbnk+LCBwYXJhbTpzdHJpbmcsIG91dD86QXJyYXk8QXJyYXk8YW55Pj4pe1xyXG4gICAgaWYoIXBhcmFtIHx8IEFycmF5LmlzQXJyYXkoc3JjKSA9PSBmYWxzZSl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBwYXJhbSBvciBzb3VyY2UgY29uZmlnJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZihBcnJheS5pc0FycmF5KG91dCkgPT0gZmFsc2Upe1xyXG4gICAgICAgIG91dCA9IFtdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcmMuc29tZSh2PT57XHJcbiAgICAgICAgaWYobnVsbCA9PSB2W3BhcmFtXSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25maWcgbWlzcyBwYXJhbTogJywgcGFyYW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG51bGwgPT0gb3V0W3ZbcGFyYW1dXSl7XHJcbiAgICAgICAgICAgIG91dFt2W3BhcmFtXV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0W3ZbcGFyYW1dXS5wdXNoKHYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5cclxuLy/ovpPlhaXphY3nva7vvIzmjInlrZfmrrXov5Tlm57lkIznsbvphY3nva7mlbDnu4RcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNvbmZpZ0J5UGFyYW0oc3JjOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgdmFsdWUsIG91dD86QXJyYXk8YW55Pil7XHJcbiAgICBpZighcGFyYW0gfHwgQXJyYXkuaXNBcnJheShzcmMpID09IGZhbHNlKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHBhcmFtIG9yIHNvdXJjZSBjb25maWcnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoQXJyYXkuaXNBcnJheShvdXQpID09IGZhbHNlKXtcclxuICAgICAgICBvdXQgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzcmMuc29tZSh2PT57XHJcbiAgICAgICAgaWYobnVsbCA9PSB2W3BhcmFtXSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25maWcgbWlzcyBwYXJhbTogJywgcGFyYW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHZbcGFyYW1dID09IHZhbHVlKXtcclxuICAgICAgICAgICAgb3V0LnB1c2godik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5cclxuLy/ovpPlhaXphY3nva5rZXnvvIzmjInlrZfmrrXov5Tlm57lkIznsbvphY3nva7mlbDnu4RcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNvbmZpZyhrZXk6c3RyaW5nLCBwYXJhbTpzdHJpbmcsIHZhbHVlLCBvdXQ/OkFycmF5PGFueT4pe1xyXG4gICAgcmV0dXJuIGZpbHRlckNvbmZpZ0J5UGFyYW0oZ2V0Q29uZmlnQnlLZXkoa2V5KSwgcGFyYW0sIHZhbHVlLCBvdXQpO1xyXG59XHJcblxyXG4vL+iOt+WPlumBk+WFt+mFjee9rlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUNvbmZpZyhpZDpudW1iZXIpe1xyXG4gICAgcmV0dXJuIGdldENvbmZpZ0J5SWQoQ29uZmlnLkxPQ0FMQ09ORklHX0tFWS5JVEVNLCBpZCkgYXMgQ29uZmlnLkl0ZW1Db25maWdUeXBlO1xyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuL0xvY2FsQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpzb25Ib3R7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICBUeXBlOnN0cmluZztcclxuICAgIFVybDpzdHJpbmc7XHJcbn1cclxuXHJcbi8v5pys5Zyw6YWN572u5a2Y5YKo5YmN57yAXHJcbmNvbnN0IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgPSBcImNvbmZpZ2xvY2FsX3ByZWZpeFwiO1xyXG5cclxuLy/lr7nlupTlkI7nq6/nmoTooajmoLx0YWJsZUlkXHJcbmxldCB0YWJsZUlkTnVtID0gMTtcclxuZXhwb3J0IGNvbnN0IExPQ0FMQ09ORklHX0tFWSA9IHtcclxuICAgIC8v5L+u5Li66Zi25q61XHJcbiAgICBDVUxUSVZBVElPTl9QRVJJT0Q6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+m7mOiupOWAvFxyXG4gICAgREVGQVVMVF9DT05GSUc6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+a0nuW6nOmjn+eJqVxyXG4gICAgQURPQkVfRk9PRDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5rSe5bqc6Zmo6ZOBXHJcbiAgICBBRE9CRV9JUk9OOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/mtJ7lupzngbXnn7NcclxuICAgIEFET0JFX1NUT05FOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/mtJ7lupzpu5jorqTphY3nva5cclxuICAgIEFET0JFX0RFRkFVTFQ6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+a0nuW6nOacqOadkFxyXG4gICAgQURPQkVfV09PRDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5rSe5bqc54G15rGgXHJcbiAgICBBRE9CRV9QT09MOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/ngbXmsaDpu5jorqTlgLxcclxuICAgIEFET0JFX1BPT0xfREVGQVVMVDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6aOO5rC05ZyfXHJcbiAgICBBRE9CRV9QT09MX1NPSUw6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mjjuawtOacqFxyXG4gICAgQURPQkVfUE9PTF9XT09EOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/po47msLTmsLRcclxuICAgIEFET0JFX1BPT0xfV0FURVI6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mjjuawtOeBq1xyXG4gICAgQURPQkVfUE9PTF9GSVJFOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/po47msLTph5FcclxuICAgIEFET0JFX1BPT0xfR09MRDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6ZqP5py66K+t5Y+lXHJcbiAgICBSQU5ET01fV09SRFM6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vlxyXG4gICAgU0VDVFM6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vuS6uueJqVxyXG4gICAgU0VDVEVSUzogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+5ZOB6Zi2XHJcbiAgICBTRUNUX0dSQURFOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/pl6jmtL7mioDog71cclxuICAgIFNFQ1RfS0Y6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vuaKgOiDveWNh+e6p1xyXG4gICAgU0VDVF9LRl9VUEdSQURFOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/pl6jmtL7mioDog73ljYfnuqfmgLvph49cclxuICAgIFNFQ1RfS0ZfQUREX05VTTogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+5Lu75YqhXHJcbiAgICBTRUNUX1RBU0s6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vuS/rueCvOWhlFxyXG4gICAgU0VDVF9UUkFJTl9UT1dFUjogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+6buY6K6k5YC8XHJcbiAgICBTRUNUX0RFRkFVTFQ6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+S5puexjeaKgOiDvVxyXG4gICAgQk9PS19TS0lMTDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5YKo54mp6KKL5Y2H57qn5raI6ICXXHJcbiAgICBCQUdfVVBfQ09TVDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v54mp5ZOBXHJcbiAgICBJVEVNOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/oo4XlpIdcclxuICAgIEVRVUlQTUVOVDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+5oub5byPXHJcbiAgICBTRUNUX1pIQU9TSEk6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+aImOaWl+WlluWKsVxyXG4gICAgQkFUVExFX0FXQVJEUzogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5py65Zmo5Lq6XHJcbiAgICBCQVRUTEVfQUk6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mVh+WmluWhlOWxgue6p1xyXG4gICAgTU9OU1RFUl9UT1dFUjogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFDb25maWd7XHJcbiAgICBwdWJsaWMgY291bnROdW0gPTA7IC8v6YWN572u6K6h5pWwXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgSXNDb25maWdMb2FkZWQgPSBmYWxzZTsgICAvL+aYr+WQpuW3suWKoOi9vemFjee9rlxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBKU09OSE9UX1VSTCAgPSAncmVzL2NvbmZpZy9Kc29uSG90Lmpzb24nO1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgU1lOVEhFU0lTX1VSTCAgPSAncmVzL2NvbmZpZy9TeW50aGVzaXMuanNvbic7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIExFVkVMVVBfVVJMICA9ICdyZXMvY29uZmlnL0xldmVsVXAuanNvbic7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIEtPTkdGVV9VUkwgID0gJ3Jlcy9jb25maWcvS29uZ0Z1Lmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBLT05HRlVfQVRUUklCVVRFX1VSTCAgPSAncmVzL2NvbmZpZy9Lb25nRnVBdHRyaWJ1dGUuanNvbic7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIFdFQVBPTl9UWVBFX1VSTCAgPSAncmVzL2NvbmZpZy9XZWFwb25UeXBlLmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBZT0tFX1VSTCAgPSAncmVzL2NvbmZpZy9Zb2tlLmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBTRUNUX1VSTCAgPSAncmVzL2NvbmZpZy9TZWN0Lmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBIRVJPX1VSTCAgPSAncmVzL2NvbmZpZy9IZXJvLmpzb24nO1xyXG5cclxuICAgIC8v6YWN572uaWTvvIzpobvkuI5yZXMvQ29uZmlnL0pzb25Ib3QuVHlwZeebuOWQjFxyXG4gICAgcHVibGljIHN0YXRpYyBDVUxUSVZBVElPTl9LRVkgPSBcIkN1bHRpdmF0aW9uXCI7XHJcbiAgICAvL+WvueW6lOWQjuerr+eahOihqOagvHRhYmxlSWRcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0NVTFRJVkFUSU9OX1BFUklPRCA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyAxOyAgLy/kv67kuLrpmLbmrrVcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX0ZPT0QgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMzsgIC8v5rSe5bqc6aOf54mpXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9JUk9OID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDQ7ICAvL+a0nuW6nOmZqOmTgVxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfU1RPTkUgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgNTsgIC8v5rSe5bqc54G155+zXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9XT09EID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDc7ICAvL+a0nuW6nOacqOadkFxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfREVGQVVMVCA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyA2OyAgLy/mtJ7lupzpu5jorqTphY3nva5cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX1BPT0wgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgODsgIC8v5rSe5bqc54G15rGgXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9QT09MX0RFRkFVTFQgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgOTsgIC8v54G15rGg6buY6K6k5YC8XHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9QT09MX1NPSUwgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMTA7ICAvL+mjjuawtOWcn1xyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfUE9PTF9XT09EID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDExOyAgLy/po47msLTmnKhcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX1BPT0xfV0FURVIgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMTI7ICAvL+mjjuawtOawtFxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfUE9PTF9GSVJFID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDEzOyAgLy/po47msLTngatcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX1BPT0xfR09MRCA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyAxNDsgIC8v6aOO5rC06YeRXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9SQU5ET01fV09SRFMgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMTU7ICAvL+maj+acuuivreWPpVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU1lOVEhFU0lTX0tFWSA9IFwic3ludGhlc2lzXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIExFVkVMVVBfS0VZID0gXCJsZXZlbFVwXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEtPTkdGVV9LRVkgPSBcImtvbmdGdVwiXHJcbiAgICBwdWJsaWMgc3RhdGljIEtPTkdGVV9BVFRSSUJVVEVfS0VZID1cImtvbmdGdUF0dHJpYnV0ZVwiXHJcbiAgICBwdWJsaWMgc3RhdGljIFdFQVBPTl9UWVBFX0tFWSA9XCJ3ZWFwb25fVHlwZVwiXHJcbiAgICBwdWJsaWMgc3RhdGljIFlPS0VfS0VZID0gXCJ5b2tlXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNFQ1RfS0VZID0gXCJzZWN0XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEhlcm9fS0VZID0gXCJIZXJvXCI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBKU09OX0NPTkZJR1MgPSBcImpzb25fY29uZmlnc1wiO1xyXG5cclxuICAgIC8v5pyA5aSn55Sf5ZG95YC8XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgTUFYX0hFQUxUSCA9IDEwMDtcclxuICAgIC8v5Yid5aeL6YeR5biBXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgSU5JVF9HT0xEID0gNTtcclxuICAgIC8v5Zue5ZCI6LSt5LmwQ0RcclxuICAgIHN0YXRpYyByZWFkb25seSBST1VORF9DRCA9IDE1O1xyXG4gICAgLy/kuIrpmLXmlbDnm65cclxuICAgIHN0YXRpYyByZWFkb25seSBUUk9PUF9OVU0gPSA5O1xyXG4gICAgLy/og4zljIXmlbDnm65cclxuICAgIHN0YXRpYyByZWFkb25seSBCQUdfVE9UQUwgPSA4O1xyXG5cclxuICAgIC8v6YCJ5oup5rS+5YirXHJcbiAgICBzdGF0aWMgSGVyb1NlY3QgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZSA6IERhdGFDb25maWc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIDogRGF0YUNvbmZpZyB7XHJcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IERhdGFDb25maWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkgOiBEYXRhQ29uZmlnIHtcclxuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRGF0YUNvbmZpZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnQnlOYW1lKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldENvbmZpZ0J5TmFtZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnQnlJZChrZXk6c3RyaW5nLCBpZDpudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldENvbmZpZ0J5SWQoa2V5LCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZWFyY2hDb25maWcoY29uZmlnOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgdmFsdWUpe1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBDb21tb24uc2VhcmNoQXJyYXkoY29uZmlnLCBwYXJhbSwgdmFsdWUpO1xyXG4gICAgICAgIGlmKCF0YXJnZXQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfmib7kuI3liLDphY3nva7vvJonLCBwYXJhbSwgdmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VhcmNoQ29uZmlnQnlJZChjb25maWc6QXJyYXk8YW55PiwgaWQ6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hDb25maWcoY29uZmlnLCAnSWQnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMb2NhbENvbmZpZ0J5SWQoa2V5OnN0cmluZywgaWQ6bnVtYmVyKXtcclxuICAgICAgICBsZXQgY29uZmlnOkFycmF5PGFueT4gPSB0aGlzLmdldExvY2FsQ29uZmlnKGtleSk7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaENvbmZpZ0J5SWQoY29uZmlnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbmZpZ0RhdGE6e1trZXk6c3RyaW5nXTpBcnJheTxhbnk+fSA9IHt9O1xyXG5cclxuICAgIHByb3RlY3RlZCBsb2FkQ29uZmlnKHVybDpzdHJpbmcsIGtleTpzdHJpbmcsIGNiPzpGdW5jdGlvbikgOiB2b2lkIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5sb2FkKHVybCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCBjb25maWc9PntcclxuICAgICAgICAgICAgY29uZmlnID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnKTtcclxuICAgICAgICAgICAgdmFyIGNvbmZpZ0pzb24gPSBKU09OLnBhcnNlKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnRGF0YVtrZXldID0gY29uZmlnSnNvbjtcclxuICAgICAgICAgICAgdGhpcy5jb3VudE51bSsrO1xyXG5cclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRDb25maWcoY2I/OkZ1bmN0aW9uKSA6IHZvaWQge1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoRGF0YUNvbmZpZy5KU09OSE9UX1VSTCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCBjb25maWc9PntcclxuICAgICAgICAgICAgY29uZmlnID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnKTtcclxuICAgICAgICAgICAgbGV0IGhvdEpzb25zOkpzb25Ib3RbXSA9IEpTT04ucGFyc2UoY29uZmlnKTtcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShob3RKc29ucykpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gaG90SnNvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaG90SnNvbnMuZm9yRWFjaCgoY2ZnLCBpZHgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaWR4ID49IHRvdGFsIC0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbmZpZyhjZmcuVXJsLCBjZmcuVHlwZSwgY2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb25maWcoY2ZnLlVybCwgY2ZnLlR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pys5Zyw57yT5a2YXHJcbiAgICBwdWJsaWMgc3RvcmVDb25maWcoa2V5OnN0cmluZyB8IG51bWJlciwgZGF0YSl7XHJcbiAgICAgICAgLy8gaWYodHlwZW9mKGRhdGEpID09ICdzdHJpbmcnKXtcclxuICAgICAgICAvLyAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIENvbW1vbi5zYXZlTG9jYWxKc29uKGtleSwgZGF0YSk7XHJcblxyXG4gICAgICAgIC8v5ZCO56uv5Y+R5p2lanNvbuWtl+espuS4slxyXG4gICAgICAgIENvbW1vbi5zYXZlTG9jYWxTdG9yYWdlKFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyBrZXksIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuY291bnROdW0rKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUFsbENvbmZpZyhkYXRhKXtcclxuICAgICAgICBDb21tb24uc2F2ZUxvY2FsSnNvbihDb25maWcuRGF0YUNvbmZpZy5KU09OX0NPTkZJR1MsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlQ29uZmlnVmVyc2lvbihkYXRhOkNvbmZpZy5Db25maWdEYXRhUGFyYW1bXSl7XHJcbiAgICAgICAgLy/lv4XpobvmmK/mlbDnu4RcclxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpID09IGZhbHNlIHx8IGRhdGEubGVuZ3RoID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRvTG9jYWwgPSBuZXcgQXJyYXk8Q29uZmlnLkNvbmZpZ0RhdGFQYXJhbT4oKTtcclxuICAgICAgICBkYXRhLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICB0b0xvY2FsLnB1c2gobmV3IENvbmZpZy5Db25maWdEYXRhUGFyYW0odi5UYWJsZUlkLCB2LlZlcnNpb24pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBDb21tb24uc2F2ZUxvY2FsSnNvbihDb25maWcuRGF0YUNvbmZpZy5KU09OX0NPTkZJR1MsIHRvTG9jYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRMb2NhbENvbmZpZyhrZXk6c3RyaW5nKXtcclxuICAgICAgICBpZigha2V5KXtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY29uZmlnIGtleTogJywga2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IENvbW1vbi5nZXRMb2NhbFN0b3JhZ2Uoa2V5KTtcclxuICAgICAgICBpZighY29uZmlnKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign6YWN572u5Li656m677yaJywga2V5KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBDb21tb24uZ2V0TG9jYWxKc29uKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZ1ZlcnNpb24oY29uZmlnOkNvbmZpZy5Db25maWdEYXRhUGFyYW0pe1xyXG4gICAgICAgIHJldHVybiBjb25maWcgJiYgY29uZmlnLlZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZ1ZlcnNpb25CeUtleShrZXk6c3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb25maWdWZXJzaW9uKHRoaXMuZ2V0TG9jYWxDb25maWcoa2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5bmnKzlnLDmiYDmnInphY3nva5cclxuICAgIHN0YXRpYyBnZXQgbG9jYWxDb25maWdzKCk6Q29uZmlnLkNvbmZpZ0RhdGFQYXJhbVtde1xyXG4gICAgICAgIHJldHVybiBDb21tb24uZ2V0TG9jYWxKc29uKERhdGFDb25maWcuSlNPTl9DT05GSUdTKSB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29uZmlnQnlOYW1lKGtleTpzdHJpbmcpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWdEYXRhW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbmZpZ0J5SWQoa2V5OnN0cmluZyxpZDpudW1iZXIpIDogYW55IHtcclxuICAgICAgICBpZih0aGlzLmNvbmZpZ0RhdGFba2V5XSkge1xyXG4gICAgICAgICAgICB2YXIgY29uZmlncyA9IHRoaXMuY29uZmlnRGF0YVtrZXldO1xyXG4gICAgICAgICAgICBmb3IodmFyIGk6bnVtYmVyID0gMDsgaSA8IGNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKGNvbmZpZ3NbaV1bJ2lkJ10gPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29uZmlnc0J5VHlwZShrZXk6c3RyaW5nLCB0eXBlOm51bWJlcikgOiBhbnkge1xyXG4gICAgICAgIGlmKHRoaXMuY29uZmlnRGF0YVtrZXldKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25maWdzID0gdGhpcy5jb25maWdEYXRhW2tleV07XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQ6QXJyYXk8YW55PiA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGk6bnVtYmVyID0gMDsgaSA8IGNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKGNvbmZpZ3NbaV1bJ3R5cGUnXSA9PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29uZmlnc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29uZmlnRGF0YSB7XHJcbiAgICBzdGF0aWMgQ09ORklHX0tFWTpzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGNvbmZpZzpBcnJheTxhbnk+O1xyXG5cclxuICAgIHN0YXRpYyBnZXQgQ29uZmlnKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuY29uZmlnKXtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBEYXRhQ29uZmlnLmdldExvY2FsQ29uZmlnKHRoaXMuQ09ORklHX0tFWSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZ0J5SWQoaWQ6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gRGF0YUNvbmZpZy5zZWFyY2hDb25maWdCeUlkKHRoaXMuQ29uZmlnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZ0J5TGV2ZWwobGV2ZWw6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLnNlYXJjaEFycmF5KHRoaXMuQ29uZmlnLCAnTGV2ZWwnLCBsZXZlbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t6YWN572u5a2X5q61LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL+aooeadv+mFjee9rlxyXG5leHBvcnQgY2xhc3MgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBOYW1lOnN0cmluZztcclxuICAgIExldmVsOm51bWJlcjtcclxuICAgIFR5cGU6bnVtYmVyO1xyXG4gICAgUGljOnN0cmluZzsgXHJcbn1cclxuXHJcbi8v5L+u5Li66YWN572uXHJcbmV4cG9ydCBjbGFzcyBDdWx0aXZhdGlvblBlcmlvZCBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgWGl1d2VpTmFtZTpzdHJpbmc7ICAvL+S/ruS4uue6p+WIq+WQjeensFxyXG4gICAgQ29zdDpudW1iZXI7ICAgIC8v5Y2H57qn5raI6ICX5L+u5Li6XHJcbiAgICBTdWNjZXNzOm51bWJlcjsgLy/muKHliqvmiJDlip/njodcclxuICAgIEFkZEVmZmljaWVuY3k6bnVtYmVyO1xyXG4gICAgRmFpbFJldHVybjpudW1iZXI7XHJcbn1cclxuXHJcbi8v5rSe5bqc6LWE5rqQXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRvYmVSZXMgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIExldmVsOm51bWJlcjsgIFxyXG4gICAgUGljOnN0cmluZzsgXHJcbiAgICBTdG9yYWdlTGltaXQ6bnVtYmVyO1xyXG4gICAgU2VydmFudExpbWl0Om51bWJlcjtcclxuICAgIFNlcnZhbnRQcm9kdWN0Om51bWJlcjsgIC8v5Lqn6YeP77yIMeS4quS7meS7hu+8iVxyXG4gICAgU2VydmFudENvc3Q6bnVtYmVyOyAvL+a2iOiAl++8iDHkuKrku5nku4bvvIlcclxuICAgIFdvb2RDb3N0Om51bWJlcjsgICAgLy/ljYfnuqfmtojogJfmnKjmnZBcclxufVxyXG5cclxuLy/ngbXmsaBcclxuZXhwb3J0IGludGVyZmFjZSBBZG9iZVBvb2wgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIExldmVsOm51bWJlcjsgIFxyXG4gICAgUGljOnN0cmluZzsgXHJcbiAgICBTdG9yYWdlTGltaXQ6bnVtYmVyO1xyXG4gICAgUmVpa2lQcm9kdWN0Om51bWJlcjtcclxuICAgIFVwQ29zdFdvb2Q6bnVtYmVyOyAgLy/ljYfnuqfmtojogJfmnKjmnZBcclxuICAgIFVwQ29zdElyb246bnVtYmVyOyAvL+WNh+e6p+a2iOiAl+mZqOmTgVxyXG4gICAgVXBDb3N0U3RvbmU6bnVtYmVyOyAgICAvL+WNh+e6p+a2iOiAl+eBteefs1xyXG59XHJcblxyXG4vL+mjjuawtFxyXG5leHBvcnQgaW50ZXJmYWNlIEZlbmdzaHVpQ29uZmlnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgTGV2ZWw6bnVtYmVyOyAgXHJcbiAgICBMZXZlbE5hbWU6c3RyaW5nO1xyXG4gICAgUGljOnN0cmluZzsgXHJcbiAgICBHb25nZmFBZGQ6bnVtYmVyO1xyXG4gICAgVXBDb3N0UmVpa2k6bnVtYmVyO1xyXG59XHJcblxyXG4vL+maj+acuuivreWPpVxyXG5leHBvcnQgaW50ZXJmYWNlIFJhbmRvbVdvb2RzIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBUeXBlOm51bWJlcjsgIFxyXG4gICAgQ29udGVudDpzdHJpbmc7XHJcbn1cclxuXHJcbi8v6Zeo5rS+XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdHMgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIE5hbWU6c3RyaW5nO1xyXG4gICAgU3RhZ2VJZDpudW1iZXI7XHJcbiAgICBMZWFkZXJJZDpudW1iZXI7XHJcbiAgICBFbGRlcklkOm51bWJlcjtcclxuICAgIEZvbGxvd2VyT25lOm51bWJlcjtcclxuICAgIEZvbGxvd2VyVHdvOm51bWJlcjtcclxuICAgIEZvbGxvd2VyVGhyZWU6bnVtYmVyO1xyXG4gICAgWGl1d2VpSWQ6bnVtYmVyO1xyXG4gICAgUXVhbGlmaWNhdGlvbjpudW1iZXI7XHJcbiAgICBEZXNjOnN0cmluZztcclxufVxyXG5cclxuLy/pl6jmtL7kurrnialcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0ZXJzIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBOYW1lOnN0cmluZztcclxuICAgIEF2YXRhcjpzdHJpbmc7XHJcbiAgICBTdGFnZTpzdHJpbmc7XHJcbiAgICBEZXNjOnN0cmluZztcclxufVxyXG5cclxuLy/pl6jmtL7mioDog73ljYfnuqdcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0S0ZVcGdyYWRlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICAvLyBUeXBlOm51bWJlcjtcclxuICAgIC8vIExvd0xldmVsOm51bWJlcjtcclxuICAgIC8vIFVwTGV2ZWw6bnVtYmVyO1xyXG4gICAgQ29zdDpudW1iZXI7XHJcbn1cclxuXHJcbi8v6Zeo5rS+5ZOB6Zi2XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdEdyYWRlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBOYW1lOnN0cmluZztcclxuICAgIExvd1N0YWdlOm51bWJlcjtcclxufVxyXG5cclxuLy/pl6jmtL7mioDog71cclxuZXhwb3J0IGludGVyZmFjZSBTZWN0S0YgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIE5hbWU6c3RyaW5nOyAvL+mXqOa0vuWKn+azleWQjeensFxyXG4gICAgQWRkVHlwZTpudW1iZXI7IC8v5aKe5Yqg5bGe5oCn57G75Z6LKDHngbXlipsy5qC56aqoM+S9k+mthDTouqvms5UpXHJcbiAgICBHcm91cElkOm51bWJlcjsgLy/pl6jmtL5JRFxyXG4gICAgU3RhZ2VMZXZlbDpudW1iZXI7IC8v6Zeo5rS+5oqA6IO95ZOB6Zi2XHJcbiAgICBTdGFnZU5hbWU6c3RyaW5nOyAvL+mXqOa0vuaKgOiDveWTgemYtuWQjeensFxyXG4gICAgRmVuZ3NodWlUeXBlOm51bWJlcjsgLy/pl6jmtL7mioDog73po47msLTnsbvlnotcclxuICAgIEZlbmdzaHVpTmFtZTpzdHJpbmc7IC8v6Zeo5rS+5oqA6IO96aOO5rC05ZCN56ewXHJcbiAgICBDb3N0Om51bWJlcjsgLy/lrabkuaDmtojogJfpl6jmtL7otKHnjK7lgLxcclxufVxyXG5cclxuLy/pl6jmtL7mioDog73mgLvph4/ljYfnuqdcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0S0ZBZGROdW0gZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIENvc3Q6bnVtYmVyO1xyXG59XHJcblxyXG4vL+mXqOa0vuS7u+WKoVxyXG5leHBvcnQgaW50ZXJmYWNlIFNlY3RUYXNrIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcblx0U3RhZ2U6bnVtYmVyIC8v5Lu75Yqh5ZOB6Zi2XHJcblx0Q29tcGxldGVUaW1lOm51bWJlciAvL+WujOaIkOiAl+aXtnNcclxuXHRSZXdhcmRHb25neGlhbjpudW1iZXIgLy/lpZblirHotKHnjK7lgLxcclxuXHRSZXdhcmRTdG9uZTpudW1iZXIgLy/lpZblirHngbXnn7PmlbDph49cclxuXHRSZXdhcmRXZWl3YW5nOm51bWJlciAvL+WlluWKseWogeacm+WAvFxyXG5cdERlc2M6c3RyaW5nIC8v6Zeo5rS+5LuL57uNXHJcbn1cclxuXHJcbi8v5L+u54K85aGUXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdFRyYWluVG93ZXIgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuXHROb3JtYWxDb3N0ICA6bnVtYmVyIC8v5pmu6YCa5L+u54K85raI6ICX54G155+zXHJcblx0Tm9ybWFsVGltZSAgOm51bWJlciAvL+aZrumAmuS/rueCvOaXtumVvyjnp5IpXHJcblx0Tm9ybWFsVXAgICAgOm51bWJlciAvL+aZrumAmuS/rueCvOaPkOWNh+WAjeaVsFxyXG5cdE5vcm1hbFRpbWVzIDpudW1iZXIgLy/mma7pgJrkv67ngrzmr4/lpKnmrKHmlbBcclxuXHRMZWFkZXJDb3N0ICA6bnVtYmVyIC8v5o6M6Zeo5Lyg5Yqf5raI6ICX54G155+zXHJcblx0TGVhZGVyVGltZSAgOm51bWJlciAvL+aOjOmXqOS8oOWKn+aXtumVvyjnp5IpXHJcblx0TGVhZGVyVXAgICAgOm51bWJlciAvL+aOjOmXqOS8oOWKn+aPkOWNh+WAjeaVsFxyXG5cdExlYWRlclRpbWVzIDpudW1iZXIgLy/mjozpl6jkvKDlip/mr4/lpKnmrKHmlbBcclxufVxyXG5cclxuLy/pl6jmtL7pu5jorqRcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0RGVmYXVsdCBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG5cdFdlaXdhbmdDb3N0IDpudW1iZXIgLy/pgIDlh7rpl6jmtL7miaPpmaTlqIHmnJtcclxuXHRHcm91cEdvbmd4aWFuQ29zdCA6bnVtYmVyIC8v6YCA5Ye66Zeo5rS+5omj6Zmk6Zeo5rS+6LSh54yu5YC8XHJcbn1cclxuXHJcbi8v5YKo54mp6KKL5Y2H57qn5raI6ICXXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFnVXBDb3N0IGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcblx0U3RvbmVOdW0gOm51bWJlciAvL+a3u+WKoOagvOWtkOa2iOiAl+eBteefs+eahOaVsOmHj1xyXG5cdEdvb2RJZCA6bnVtYmVyIC8v5re75Yqg5qC85a2Q5raI6ICX54mp5ZOBSURcclxuXHRHb29kTnVtIDpudW1iZXIgLy/mt7vliqDmoLzlrZDmtojogJfnianlk4HmlbDph49cclxufVxyXG5cclxuLy/pgZPlhbdcclxuZXhwb3J0IGludGVyZmFjZSBJdGVtQ29uZmlnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG5cdFBpYzpzdHJpbmc7ICAgICAgLy/nianlk4Hlm77niYdcclxuXHREZXNjOnN0cmluZzsgICAgIC8v54mp5ZOB5o+P6L+wXHJcblx0UXVhbGl0eTpudW1iZXI7IC8v54mp5ZOB5ZOB6LSoXHJcblx0U3RvcmFnZUxpbWl0ICAgICAgIDpudW1iZXI7IC8v6IOM5YyF5pyA5aSn5Y+g5Yqg5pWw6YePXHJcblx0U2VsbFByaWNlICAgICAgICAgIDpudW1iZXI7IC8v5Ye65ZSu5Lu35qC8XHJcblx0Q2FuVXNlIDpudW1iZXI7IC8v6IO95LiN6IO95L2/55SoXHJcblx0VXNlVHlwZSA6bnVtYmVyOyAvL+eJqeWTgeexu+Weiygx5bGe5oCn5re75YqgMua4oeWKq+amgueOh+a3u+WKoDPmtojogJflk4E05oqA6IO95a2m5LmgKVxyXG5cdFByb3BlcnR5QWRkVHlwZSAgICA6bnVtYmVyOyAvL+a3u+WKoOeahOWxnuaAp+exu+Weiygx54G155+zMumjn+eJqTPmnKjmnZA06ZOB55+/NeS7meeOiTbpl6jmtL7otKHnjK7lgLw35aiB5pyb5YC8OOato+S5ieWAvDnpgqrmgbblgLwxMOS/ruS4uuWAvDEx5L+u55yf5bm06b6EMTLpgZPooYwxM+eBteWKmzE05qC56aqoMTXkvZPprYQxNui6q+azlTE35oKf5oCnMTjnpo/nvJgxOei1hOi0qDIw5Lq65peP5Lyk5a6zMjHlppbml4/kvKTlrrMyMuS7meaXj+S8pOWuszIz6ay85peP5Lyk5a6zMjTprZTml4/kvKTlrrMyNem+meaXj+S8pOWusylcclxuXHRQcm9wZXJ0eUFkZFZhbHVlICAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDlgLxcclxuXHREdWppZUFkZFhpdXdlaUxpbWl0Om51bWJlcjsgLy/muKHliqvmt7vliqDmpoLnjofkv67kuLrpmLbmrrXpmZDliLZcclxuXHREdWppZUFkZFZhbHVlICAgICAgOm51bWJlcjsgLy/muKHliqvmpoLnjofmt7vliqDlgLxcclxuXHRCb29rU2tpbGxJZCAgICAgICAgOm51bWJlcjsgLy/lrabkuaDnmoTkuabmnKzmioDog71JRFxyXG59XHJcblxyXG4vL+ijheWkh1xyXG5leHBvcnQgaW50ZXJmYWNlIEVxdWlwQ29uZmlnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG5cdFR5cGU6bnVtYmVyOyAvL+ijheWkh+exu+Wei++8mjHngbXliZEy5Y+R57CqM+iho+acjTTpnbTlrZA15oyH546vNueOieS9qTfmiYvpla84572X55uYXHJcblx0UGljOnN0cmluZzsgLy/oo4XlpIflm77niYdcclxuXHREZXNjOnN0cmluZzsvL+ijheWkh+aPj+i/sFxyXG5cdFF1YWxpdHkgICAgICA6bnVtYmVyOyAvL+ijheWkh+WTgei0qFxyXG5cdFN0b3JhZ2VMaW1pdCA6bnVtYmVyOyAvL+iDjOWMheacgOWkp+WPoOWKoOaVsOmHj1xyXG5cdFNlbGxQcmljZSAgICA6bnVtYmVyOyAvL+WHuuWUruS7t+agvFxyXG5cdENhblVzZSAgICAgICA6bnVtYmVyOyAvL+iDveS4jeiDveS9v+eUqFxyXG5cdFByb3BlcnR5QWRkT25lVHlwZSAgICA6bnVtYmVyOyAvL+WxnuaAp+a3u+WKoOexu+Weizox54G155+zMumjn+eJqTPmnKjmnZA06ZOB55+/NeS7meeOiTbpl6jmtL7otKHnjK7lgLw35aiB5pyb5YC8OOato+S5ieWAvDnpgqrmgbblgLwxMOS/ruS4uuWAvDEx6YGT6KGMMTLngbXlipsxM+aguemqqDE05L2T6a2EMTXouqvms5UxNuaCn+aApzE356aP57yYMTjotYTotKgxOeS6uuaXj+S8pOWuszIw5aaW5peP5Lyk5a6zMjHku5nml4/kvKTlrrMyMumsvOaXj+S8pOWuszIz6a2U5peP5Lyk5a6zMjTpvpnml4/kvKTlrrNcclxuXHRQcm9wZXJ0eUFkZE9uZVZhbHVlICAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDlgLxcclxuXHRQcm9wZXJ0eUFkZFR3b1R5cGUgICAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDnsbvlnos6MeeBteefszLpo5/niakz5pyo5p2QNOmTgeefvzXku5nnjok26Zeo5rS+6LSh54yu5YC8N+Wogeacm+WAvDjmraPkuYnlgLw56YKq5oG25YC8MTDkv67kuLrlgLwxMemBk+ihjDEy54G15YqbMTPmoLnpqqgxNOS9k+mthDE16Lqr5rOVMTbmgp/mgKcxN+emj+e8mDE46LWE6LSoMTnkurrml4/kvKTlrrMyMOWmluaXj+S8pOWuszIx5LuZ5peP5Lyk5a6zMjLprLzml4/kvKTlrrMyM+mtlOaXj+S8pOWuszI06b6Z5peP5Lyk5a6zXHJcblx0UHJvcGVydHlBZGRUd29WYWx1ZSAgIDpudW1iZXI7IC8v5bGe5oCn5re75Yqg5YC8XHJcblx0UHJvcGVydHlBZGRUaHJlZVR5cGUgIDpudW1iZXI7IC8v5bGe5oCn5re75Yqg57G75Z6LOjHngbXnn7My6aOf54mpM+acqOadkDTpk4Hnn7815LuZ546JNumXqOa0vui0oeeMruWAvDflqIHmnJvlgLw45q2j5LmJ5YC8OemCquaBtuWAvDEw5L+u5Li65YC8MTHpgZPooYwxMueBteWKmzEz5qC56aqoMTTkvZPprYQxNei6q+azlTE25oKf5oCnMTfnpo/nvJgxOOi1hOi0qDE55Lq65peP5Lyk5a6zMjDlppbml4/kvKTlrrMyMeS7meaXj+S8pOWuszIy6ay85peP5Lyk5a6zMjPprZTml4/kvKTlrrMyNOm+meaXj+S8pOWus1xyXG5cdFByb3BlcnR5QWRkVGhyZWVWYWx1ZSA6bnVtYmVyOyAvL+WxnuaAp+a3u+WKoOWAvFxyXG5cdFByb3BlcnR5QWRkRm91clR5cGUgICA6bnVtYmVyOyAvL+WxnuaAp+a3u+WKoOexu+Weizox54G155+zMumjn+eJqTPmnKjmnZA06ZOB55+/NeS7meeOiTbpl6jmtL7otKHnjK7lgLw35aiB5pyb5YC8OOato+S5ieWAvDnpgqrmgbblgLwxMOS/ruS4uuWAvDEx6YGT6KGMMTLngbXlipsxM+aguemqqDE05L2T6a2EMTXouqvms5UxNuaCn+aApzE356aP57yYMTjotYTotKgxOeS6uuaXj+S8pOWuszIw5aaW5peP5Lyk5a6zMjHku5nml4/kvKTlrrMyMumsvOaXj+S8pOWuszIz6a2U5peP5Lyk5a6zMjTpvpnml4/kvKTlrrNcclxuXHRQcm9wZXJ0eUFkZEZvdXJWYWx1ZSAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDlgLxcclxufVxyXG5cclxuLy/kuabnsY3mioDog71cclxuZXhwb3J0IGludGVyZmFjZSBTa2lsbENvbmZpZ1R5cGUgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuXHRTa2lsbFR5cGUgIDpudW1iZXI7IC8v5oqA6IO957G75Z6LKDLnp5jnsY0z55yf6K+ANOW/g+e7jzXpgYHmnK8257ud5a2mN+aui+mhtTjmi5vlvI8pXHJcblx0QWRkVHlwZSAgICA6bnVtYmVyOyAvL+WinuWKoOWxnuaAp+exu+Weiygx54G15YqbMuaguemqqDPkvZPprYQ06Lqr5rOVKVxyXG5cdFN0YWdlTGV2ZWwgOm51bWJlcjsgLy/pl6jmtL7mioDog73lk4HpmLZcclxuXHRTdGFnZU5hbWUgOnN0cmluZzsgIC8v6Zeo5rS+5oqA6IO95ZOB6Zi25ZCN56ewXHJcblx0RmVuZ3NodWlUeXBlIDpudW1iZXI7IC8v6Zeo5rS+5oqA6IO96aOO5rC057G75Z6LXHJcblx0RmVuZ3NodWlOYW1lIDpzdHJpbmc7IC8v6Zeo5rS+5oqA6IO96aOO5rC05ZCN56ewXHJcblx0Q29zdCAgICAgICA6bnVtYmVyOyAvL+WtpuS5oOa2iOiAl+mXqOa0vui0oeeMruWAvFxyXG59XHJcblxyXG4vL+mXqOa0vuaLm+W8j1xyXG5leHBvcnQgaW50ZXJmYWNlIFNlY3RCYXR0bGVTa2lsbENmZ1R5cGUgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIEh1cnRBZGQ6bnVtYmVyOyAvL+aLm+W8j+S8pOWus+WKoOaIkFxyXG59XHJcblxyXG4vL+acuuWZqOS6ulxyXG5leHBvcnQgaW50ZXJmYWNlIEJhdHRsZUFpQ2ZnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgRGVzYyAgICAgICAgIDpzdHJpbmc7IC8v566A5LuLXHJcblx0UmFjaWFsVHlwZSAgIDpudW1iZXI7IC8v56eN5peP57G75Z6LMeS6uuaXjzLlppbml48z5LuZ5pePNOmsvOaXjzXprZTml4826b6Z5pePXHJcblx0WGl1d2VpU3RhZ2UgIDpudW1iZXI7IC8v5L+u5Li66Zi25q61XHJcblx0TGluZ2xpICAgICAgIDpudW1iZXI7IC8v54G15YqbXHJcblx0R2VuZ3UgICAgICAgIDpudW1iZXI7IC8v5qC56aqoXHJcblx0VGlwbyAgICAgICAgIDpudW1iZXI7IC8v5L2T6a2EXHJcblx0U2hlbmZhICAgICAgIDpudW1iZXI7IC8v6Lqr5rOVXHJcblx0SHVydEFkZCAgICAgIDpudW1iZXI7IC8v5Lyk5a6z5Yqg5bGCXHJcblx0SHVydFJlZHVjZSAgIDpudW1iZXI7IC8v5Lyk5a6z5YeP5YWNXHJcblx0R3JvdXBTdHlsZUlkIDpudW1iZXI7IC8v6Zeo5rS+5oub5byPSURcclxuXHRIdXJ0UmVuenUgICAgOm51bWJlcjsgLy/kurrml4/kvKTlrrNcclxuXHRIdXJ0WWFvenUgICAgOm51bWJlcjsgLy/lppbml4/kvKTlrrNcclxuXHRIdXJ0WGlhbnp1ICAgOm51bWJlcjsgLy/ku5nml4/kvKTlrrNcclxuXHRIdXJ0R3VpenUgICAgOm51bWJlcjsgLy/prLzml4/kvKTlrrNcclxuXHRIdXJ0TW96dSAgICAgOm51bWJlcjsgLy/prZTml4/kvKTlrrNcclxuXHRIdXJ0TG9uZ3p1ICAgOm51bWJlcjsgLy/pvpnml4/kvKTlrrNcclxufVxyXG5cclxuLy/plYflppbloZTlsYLnuqdcclxuZXhwb3J0IGludGVyZmFjZSBNb25zdGVyVG93ZXJDZmdUeXBlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBEZXNjICAgICAgICA6c3RyaW5nOyAvL+eugOS7i1xyXG5cdExvd1N0YWdlICAgIDpudW1iZXI7IC8v5oyR5oiY55qE5pyA5L2O5L+u5Li6XHJcblx0UmV3YXJkSWQgICAgOm51bWJlcjsgLy/lpZblirHooahJRFxyXG5cdEhlbHBPbmVJZCAgIDpudW1iZXI7IC8v5Yqp5oiY5py65Zmo5Lq6MUlEXHJcblx0SGVscFR3b0lkICAgOm51bWJlcjsgLy/liqnmiJjmnLrlmajkuroySURcclxuXHRIZWxwVGhyZWVJZCA6bnVtYmVyOyAvL+WKqeaImOacuuWZqOS6ujNJRFxyXG5cdEhlbHBGb3VySWQgIDpudW1iZXI7IC8v5Yqp5oiY5py65Zmo5Lq6NElEXHJcblx0SGVscEZpdmVJZCAgOm51bWJlcjsgLy/liqnmiJjmnLrlmajkuro1SURcclxuXHRCYXR0bGVPbmVJZCA6bnVtYmVyOyAvL+WvueaImOacuuWZqOS6ujFJRFxyXG5cdEJhdHRsZVR3b0lkIDpudW1iZXI7IC8v5a+55oiY5py65Zmo5Lq6MklEXHJcblx0QmF0dGxlVGhyZWVJZCA6bnVtYmVyOyAvL+WvueaImOacuuWZqOS6ujNJRFxyXG5cdEJhdHRsZUZvdXJJZCAgOm51bWJlcjsgLy/lr7nmiJjmnLrlmajkuro0SURcclxuXHRCYXR0bGVGaXZlSWQgIDpudW1iZXI7IC8v5a+55oiY5py65Zmo5Lq6NUlEXHJcbn1cclxuXHJcbi8v5oiY5paX5aWW5YqxXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmF0dGxlQXdhcmRDZmdUeXBlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcblx0T25lVHlwZSAgIDpudW1iZXI7IC8v5aWW5YqxMeexu+WeiyAxLeeJqeWTgTIt6KOF5aSHXHJcblx0T25lSWQgICAgIDpudW1iZXI7IC8v5aWW5YqxMUlEXHJcblx0T25lTnVtICAgIDpudW1iZXI7IC8v5aWW5YqxMeaVsOmHj1xyXG5cdFR3b1R5cGUgICA6bnVtYmVyOyAvL+WlluWKsTLnsbvlnosgMS3nianlk4EyLeijheWkh1xyXG5cdFR3b0lkICAgICA6bnVtYmVyOyAvL+WlluWKsTJJRFxyXG5cdFR3b051bSAgICA6bnVtYmVyOyAvL+WlluWKsTLmlbDph49cclxuXHRUaHJlZVR5cGUgOm51bWJlcjsgLy/lpZblirEz57G75Z6LIDEt54mp5ZOBMi3oo4XlpIdcclxuXHRUaHJlZUlkICAgOm51bWJlcjsgLy/lpZblirEzSURcclxuXHRUaHJlZU51bSAgOm51bWJlcjsgLy/lpZblirEz5pWw6YePXHJcblx0Rm91clR5cGUgIDpudW1iZXI7IC8v5aWW5YqxNOexu+WeiyAxLeeJqeWTgTIt6KOF5aSHXHJcblx0Rm91cklkICAgIDpudW1iZXI7IC8v5aWW5YqxNElEXHJcblx0Rm91ck51bSAgIDpudW1iZXI7IC8v5aWW5YqxNOaVsOmHj1xyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpY3Rpb25hcnk8VD4ge1xyXG4gICAgW0tleTogc3RyaW5nXTogVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50Q2xhc3Mge1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIExpc3RlbmVyOkZ1bmN0aW9uO1xyXG4gICAgVGFyZ2V0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcsIGxpc3RlbmVyOkZ1bmN0aW9uLCB0YXJnZXQ/KXtcclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLkxpc3RlbmVyID0gbGlzdGVuZXI7XHJcbiAgICAgICAgdGhpcy5UYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0ZW5lckNsYXNzIHtcclxuICAgIExpc3RlbmVycyA9IG5ldyBBcnJheTxGdW5jdGlvbj4oKTtcclxuICAgIFRhcmdldHMgPSBuZXcgQXJyYXk8Q29tbW9uLkV2ZW50RGlzcGF0aGVyPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXIobGlzdGVuZXI6RnVuY3Rpb24sIHRhcmdldD8pe1xyXG4gICAgICAgIHRoaXMuTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIHRoaXMuVGFyZ2V0cy5wdXNoKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIobGlzZW5lcjpGdW5jdGlvbil7XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuTGlzdGVuZXJzLmluZGV4T2YobGlzZW5lcik7XHJcbiAgICAgICAgaWYoaWR4ID49IDApe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5MaXN0ZW5lcnNbaWR4XTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuVGFyZ2V0c1tpZHhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudERpc3BhdGhlckludGVyZmFjZXtcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoa2V5LCBsaXNlbmVyOkZ1bmN0aW9uKTtcclxuICAgIGRpc3BhdGNoRXZlbnQoa2V5KTtcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxufVxyXG5cclxuLy/niYjmnKzmjqfliLZcclxuZXhwb3J0IGVudW0gVmVyc2lvbkNvbmZpZyB7XHJcbiAgICAvL+W8gOWPkeeJiOacrFxyXG4gICAgRGV2ZWxvcCA9IDAsXHJcbiAgICAvL+WvueWklueJiOacrFxyXG4gICAgUmVsZWFzZSA9IDEsXHJcbn1cclxuXHJcbi8v5rGg57G75Z6LXHJcbmV4cG9ydCBjb25zdCBQb29sVHlwZSA9IHtcclxuICAgIC8v6K6h5pe25ZmoXHJcbiAgICBUaW1lcjogJ1RpbWVyJyxcclxuICAgIC8v546p5a625aS06YOoXHJcbiAgICBIZWFkTW9kZWw6ICdIZWFkTW9kZWwnLFxyXG4gICAgLy/njqnlrrbouqvkvZNcclxuICAgIEJvZHlNb2RlbDogJ0JvZHlNb2RlbCcsXHJcbiAgICAvL+W8ueW5lVxyXG4gICAgUGFzc2J5VHh0OiAnUGFzc2J5VHh0JyxcclxuICAgIC8vZmFpcnlndWnlr7nosaFcclxuICAgIEZndWlPYmo6ICdGZ3VpT2JqJyxcclxufVxyXG5cclxuLy/msaDnianlk4HnsbvlnotcclxuZXhwb3J0IGNvbnN0IFBvb2xJdGVtS2V5ID0ge1xyXG4gICAgLy/njqnlrrbouqvkvZNcclxuICAgIEJvZHlTcGluZTogJ0JvZHlTcGluZScsICAgIFxyXG4gICAgLy/mjaLoo4XmqKHmnb9cclxuICAgIERyZXNzVGVtcGxhdGU6ICdEcmVzc1RlbXBsYXRlJywgICAgXHJcbn1cclxuXHJcbi8v6ZqP5py66K+t5Y+l57G75Z6LXHJcbmV4cG9ydCBjb25zdCBSYW5kV29yZFR5cGUgPSB7XHJcbiAgICAvL+a4oeWKq1xyXG4gICAgQ3VsdGl2YXRpb246IDEsXHJcbn1cclxuXHJcbi8v5bm/5ZGK57G75Z6LXHJcbmV4cG9ydCBlbnVtIEF3YXJkVHlwZSB7XHJcbiAgICBOb3QgPSAwLFxyXG4gICAgQUQgPSAxLFxyXG4gICAgU2hhcmUgPSAyXHJcbn1cclxuXHJcbi8v5bm/5ZGK5LyY5YWI57qn6YWN572uXHJcbmV4cG9ydCBlbnVtIEFkQ29uZmlnVHlwZSB7XHJcbiAgICAvL+a/gOWKseinhumikeS8mOWFiFxyXG4gICAgVmlkZW8gPSAwLFxyXG4gICAgLy/liIbkuqvkvJjlhYhcclxuICAgIFNoYXJlID0gMVxyXG59XHJcblxyXG4vL+WIhuS6q+ivreWPpeexu+Wei1xyXG5leHBvcnQgZW51bSBTaGFyZVdvcmRFbnVtIHtcclxuICAgIENhcmRXb3JkcyA9IDEsXHJcbiAgICBIYW1zdGVyV29yZHMgPSAyLFxyXG4gICAgQ29pbldvcmRzID0gMyxcclxuICAgIE90aGVyV29yZHMgPSA0LFxyXG59XHJcblxyXG4vL+aooeWei+aVsOaNruWumuS5iVxyXG5leHBvcnQgY2xhc3MgTW9kZWxEYXRhU3RydWN0IHtcclxuICAgIG1zcDpMYXlhLlNwcml0ZTNEO1xyXG4gICAgYW5pOkxheWEuQW5pbWF0b3I7XHJcbiAgICBhbmlTdGF0ZTpMYXlhLkFuaW1hdG9yUGxheVN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1zcDpMYXlhLlNwcml0ZTNELCBhbmk6TGF5YS5BbmltYXRvciwgYW5pU3RhdGU6TGF5YS5BbmltYXRvclBsYXlTdGF0ZSl7XHJcbiAgICAgICAgdGhpcy5tc3AgPSBtc3A7XHJcbiAgICAgICAgdGhpcy5hbmkgPSBhbmk7XHJcbiAgICAgICAgdGhpcy5hbmlTdGF0ZSA9IGFuaVN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WFrOWFseehruiupOW8ueeql+exu+Wei1xyXG5leHBvcnQgY29uc3QgQ29uZmlybVdpbmRvd1R5cGUgPSB7XHJcbiAgICAvL+aWh+Wtl1xyXG4gICAgQ29udGVudDogMSxcclxuICAgIC8v5aWW5Yqx54mp5ZOBXHJcbiAgICBSZXdhcmQ6IDIsXHJcbiAgICAvL+aWh+WtlyvlpZblirFcclxuICAgIENvbnRlbnRBbmRSZXdhcmQ6IDMsXHJcbn1cclxuXHJcbi8v5by55Ye656qX5Y+j5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpbmRvd0RhdGEge1xyXG4gICAgQ29udGVudDpzdHJpbmdbXTtcclxuICAgIFdpbmRvd1R5cGU6bnVtYmVyO1xyXG4gICAgWWVzQnRuQ29udGVudDpzdHJpbmc7XHJcbiAgICBZZXNCdG5DYWxsYmFjazpGdW5jdGlvbjtcclxuICAgIENhbmNlbEJ0bkNvbnRlbnQ6c3RyaW5nO1xyXG4gICAgUmV3YXJkRGF0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50OnN0cmluZ1tdLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIHdpbmRvd1R5cGU/Om51bWJlciwgcmV3YXJkRGF0YT8sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5Db250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLlllc0J0bkNhbGxiYWNrID0geWVzQnRuQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5ZZXNCdG5Db250ZW50ID0gYnRuWWVzVHh0PyBidG5ZZXNUeHQ6ICfnoa7lrponO1xyXG4gICAgICAgIHRoaXMuQ2FuY2VsQnRuQ29udGVudCA9IGJ0bkNhbmNlbFR4dD8gYnRuQ2FuY2VsVHh0OiAn5Y+W5raIJztcclxuICAgICAgICB0aGlzLldpbmRvd1R5cGUgPSB3aW5kb3dUeXBlO1xyXG4gICAgICAgIHRoaXMuUmV3YXJkRGF0YSA9IHJld2FyZERhdGE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsQ29uZmlnIHtcclxuICAgIHN0YXRpYyByZWFkb25seSBDdWx0aXZhdGlvbl9GbHlfSW50ZXJ2YWwgPSA2OyAgICAvL+S/ruS4uumjmOWtl+mXtOmalC/mr6vnp5JcclxuICAgIHN0YXRpYyByZWFkb25seSBBZG9iZV9Qcm9kdWN0aW9uX0ludGVydmFsID0gMTA7ICAgIC8v5rSe5bqc55Sf5Lqn6Ze06ZqUL+avq+enklxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFRvd2VyX01heF9JbnZpdGVfTnVtID0gNDsgIC8v6ZWH5aaW5aGU5pyA5aSn5Y+v6YKA6K+35pWw6YePXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgTWF4X1JlYWR5ID0gODtcclxuICAgIHN0YXRpYyByZWFkb25seSBNYXhfTGV2ZWwgPSA4O1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IE1heF9CYXR0bGUgPSA5O1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgc3RhdGljIElzQ2hvb3NlZFNlcnZpY2UgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBJc1NpbVByb2dyZXNzRW5kID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIFJld2FyZEFkTGlzdCA9IFtcclxuICAgICAgICAnYWR1bml0LWQ5NTA2Yjg1NmRhNjUxZDknLFxyXG4gICAgICAgICdhZHVuaXQtMjc3YTE0OTBiZGQ5NjU4NicsXHJcbiAgICAgICAgJ2FkdW5pdC0yNGM5ODFiYjZlMjYxYzEyJyxcclxuICAgICAgICAnYWR1bml0LWJhMTQ3NDI0MmUwYjA3Y2MnLFxyXG4gICAgICAgICdhZHVuaXQtNWVkYzUyNTZiODk5NDZjZSdcclxuICAgIF07XHJcblxyXG4gICAgc3RhdGljIEJhbm5lckFkTGlzdCA9IFtcclxuICAgICAgICAnYWR1bml0LTY0ZjMyZWJmMzkxYTNlZWEnLFxyXG4gICAgICAgICdhZHVuaXQtZjFiZDk3MDI5NDEyZGMzNScsXHJcbiAgICAgICAgJ2FkdW5pdC03OTIxMDlmYWM2OGVmMDhiJyxcclxuICAgICAgICAnYWR1bml0LWVkOGYwMGRkNDJkZDJkZDgnLFxyXG4gICAgICAgICdhZHVuaXQtYTkyNGMyOTZlYTliMjNhNSdcclxuICAgIF07XHJcblxyXG4gICAgc3RhdGljIHJlYWRvbmx5IE1pbmlQcm9ncmFtQXBwSWQgPSB7XHJcbiAgICAgICAgTWFpa2U6ICd3eDZmMWI5YjgxNDY3Y2MzZGEnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+eUqOaIt+aYr+WQpuW3suaOiOadg1xyXG4gICAgc3RhdGljIElzV3hBdXRoID0gdHJ1ZTtcclxuXHJcbiAgICAvL+WtmOWCqOeUqOaIt+WQjVxyXG4gICAgc3RhdGljIEdldEFjb3VudE5hbWUoKXtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLmdldExvY2FsU3RvcmFnZShcIkFjb3VudE5hbWVcIikgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFNhdmVBY291bnROYW1lKF92YWx1ZSl7XHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbFN0b3JhZ2UoXCJBY291bnROYW1lXCIsIF92YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTG9jYWxDb250ZW50ID0ge1xyXG4gICAgSW52aXRlOiAn6YKA6K+3JyxcclxuXHJcbiAgICBOZXRFcnJvcjogJ+e9kee7nOW8gOWwj+W3ricsXHJcblxyXG4gICAgWWVzOiAn56Gu5a6aJyxcclxuXHJcbiAgICBDb21pbmdTb29uOiAn5pqC5pyq5byA5pS+JyxcclxuXHJcbiAgICBHZXRBd2FyZDogJ+mihuWPlicsXHJcblxyXG4gICAgRmx5aW5nVGlwc0RlZmF1bHQ6ICfmga3llpzojrflvpflpZblirEnLFxyXG5cclxuICAgIENvbnNBd2FyZDogXCLmga3llpzojrflvpdcIixcclxuXHJcbiAgICBTaGFyZUZhaWxUaXBzOiBcIuWIhuS6q+ebuOWQjOaci+WPi+WciOaXoOazleiOt+W+l+WlluWKsVwiLFxyXG59IiwiZXhwb3J0IGxldCBsb2dpblJlc1VybHMgPSBbXHJcbiAgICB7IHVybDogJ3Jlcy9DaG9vc2VTZXJ2aWNlL0Nob29zZVNlcnZpY2UudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9Mb2FkaW5nVUkvTG9hZGluZ1VJLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvTG9hZGluZ1VJL0xvYWRpbmdVSV9hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuXSIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVxYm9keUJhc2V7XHJcbiAgICBzdGF0aWMgcmVxYm9keXM6Q29uZmlnLkRpY3Rpb25hcnk8SHR0cFJlcWJvZHlCYXNlPiA9IHt9O1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIE1vZHVsZUNvZGU6IG51bWJlcjtcclxuICAgIFJlcUNvZGU6IG51bWJlcjtcclxuICAgIFNlc3Npb246IHN0cmluZztcclxuICAgIEFjY291bnRLZXk6IHN0cmluZztcclxuICAgIFJlcURhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6c3RyaW5nLCBtb2RDb2RlOm51bWJlciwgcmVxQ29kZTpudW1iZXIsIHNlc3Npb24/OnN0cmluZywgYWNjTmFtZT86c3RyaW5nLCByZXFkYXRhPyl7XHJcbiAgICAgICAgaWYodHlwZW9mKHJlcWRhdGEpID09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAvL+WmguW3sui9rOaNouWImei9rOWbnkpTT05cclxuICAgICAgICAgICAgcmVxZGF0YSA9IEpTT04ucGFyc2UocmVxZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLk1vZHVsZUNvZGUgPSBtb2RDb2RlO1xyXG4gICAgICAgIHRoaXMuUmVxQ29kZSA9IHJlcUNvZGU7XHJcbiAgICAgICAgdGhpcy5TZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLkFjY291bnRLZXkgPSBhY2NOYW1lO1xyXG4gICAgICAgIHRoaXMuUmVxRGF0YSA9IHJlcWRhdGE7XHJcblxyXG4gICAgICAgIEh0dHBSZXFib2R5QmFzZS5yZXFib2R5c1trZXldID0gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuLy/or7fmsYLnu5PmnoRcclxuZXhwb3J0IHZhciBSZXFEYXRhID0ge1xyXG4gICAgTG9naW46e1wiTmFtZVwiOiBcInRhbmR5XCJ9LFxyXG4gICAgQWRvYmVQb29sVXBncmFkZTp7XCJUeXBlXCI6IDF9LFxyXG4gICAgSm9pblNlY3Q6e1wiR3JvdXBTdGFnZUlkXCI6IDEsXCJHcm91cElkXCI6IDF9LFxyXG4gICAgTGVhcm5TZWN0S2Y6e1wiU2tpbGxJZFwiOiAxfSxcclxuICAgIFVwZ3JhZGVLb25nZmE6e1wiU2tpbGxUeXBlXCI6MSxcIlNraWxsSWRcIjogMX0sXHJcbiAgICBTdGFydFNlY3RUYXNrOntcIlRhc2tJZFwiOjF9LFxyXG4gICAgR3JhYlNlY3RUYXNrQXdhcmQ6e1wiVGFza0lkXCI6MX0sXHJcbiAgICBTZWxsQmFnSXRlbTp7XCJQb3NpdGlvblwiOiAxLFwiVHlwZVwiOiAxLFwiSWRcIjogMSxcIk51bVwiOiAxfSxcclxuICAgIFVzZUJhZ0l0ZW06e1wiUG9zaXRpb25cIjogMSxcIlR5cGVcIjogMSxcIklkXCI6IDEsXCJOdW1cIjogMX0sXHJcbiAgICBHbUFkZEJhZ0l0ZW06e1wiVHlwZVwiOiAxLFwiSWRcIjogMSxcIk51bVwiOiAxfSxcclxuICAgIC8v5oyR5oiY6ZWH5aaW5aGUXHJcbiAgICBHb01vbnN0ZXJUb3dlcjp7XCJDaGFsbGVuZ2VMZXZlbFwiOiAxLCBcIkhlbHBIZXJvc1wiOiBuZXcgQXJyYXk8SGVscEhlcm9zRGF0YUNsYXNzPigpfSxcclxufVxyXG5cclxuLy/plYflppbloZTpgoDor7fku5nlj4vmlbDmja5cclxuZXhwb3J0IGNsYXNzIEhlbHBIZXJvc0RhdGFDbGFzcyB7XHJcbiAgICBLZXk6c3RyaW5nO1xyXG4gICAgSXNSb2JvdDpib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcsIGlzUm9ib3Q6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5LZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5Jc1JvYm90ID0gaXNSb2JvdDtcclxuICAgIH1cclxuXHJcbiAgICAvL+aXoOWKqeaImOiLsembhFxyXG4gICAgc3RhdGljIGdldCBOb25lSGVscEhlcm8oKXtcclxuICAgICAgICByZXR1cm4gW0VtcHR5SGVscEhlcm8sIEVtcHR5SGVscEhlcm8sIEVtcHR5SGVscEhlcm8sIEVtcHR5SGVscEhlcm9dO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WKqeaImOiLsembhOepuuS9jVxyXG5leHBvcnQgY29uc3QgRW1wdHlIZWxwSGVybyA9IG5ldyBIZWxwSGVyb3NEYXRhQ2xhc3MoJycsIGZhbHNlKTtcclxuXHJcbmV4cG9ydCBlbnVtIFJlcWJvZHlLZXl7XHJcbiAgICBDb25maWcgPSBcIkNvbmZpZ1wiLFxyXG4gICAgTG9naW4gPSBcIkxvZ2luXCIsXHJcbiAgICBVcGdyYWRlID0gXCJVcGdyYWRlXCIsXHJcbiAgICBBZG9iZVVpSW5mbyA9IFwiQWRvYmVVaUluZm9cIixcclxuICAgIEFkb2JlSGlyZVdvcmtlciA9IFwiQWRvYmVIaXJlV29ya2VyXCIsXHJcbiAgICBBZG9iZUFkZFdvcmtlciA9IFwiQWRvYmVBZGRXb3JrZXJcIixcclxuICAgIEFkb2JlUmVkdWNlV29ya2VyID0gXCJBZG9iZVJlZHVjZVdvcmtlclwiLFxyXG4gICAgQWRvYmVVcFN0b25lID0gXCJBZG9iZVVwU3RvbmVcIixcclxuICAgIEFkb2JlVXBGb29kID0gXCJBZG9iZVVwRm9vZFwiLFxyXG4gICAgQWRvYmVVcFdvb2QgPSBcIkFkb2JlVXBXb29kXCIsXHJcbiAgICBBZG9iZVVwSXJvbiA9IFwiQWRvYmVVcElyb25cIixcclxufVxyXG5cclxuZXhwb3J0IGxldCBOZXRDb25maWcgPSB7XHJcbiAgICBSZXF1ZXN0VXJsOlwiaHR0cDovLzcubGlnaHRwYXcuY29tL3RydXRoXCIsXHJcblxyXG4gICAgLy8gSHR0cFJlcXVlc3RVcmw6XCJodHRwOi8vNzA2LmxpZ2h0cGF3LmNvbTo3NzIwL2hhcHB5X3RyYXZlbFwiLFxyXG5cclxuICAgIEh0dHBSZXF1ZXN0VXJsOlwiaHR0cHM6Ly85ejlhY3Y5MDFnLmV4ZWN1dGUtYXBpLmNuLW5vcnRod2VzdC0xLmFtYXpvbmF3cy5jb20uY24vYmV0YVwiLFxyXG4gICAgXHJcbiAgICBMb2NhbFJlcXVlc3RVcmw6XCJodHRwOi8vNy5saWdodHBhdy5jb20vdHJ1dGhcIixcclxuXHJcbiAgICBMb2NhbFdlY2hhdFJlcXVlc3RVcmw6XCJodHRwOi8vc3ZmMzdlLm5hdGFwcGZyZWUuY2MvaGFwcHlfdHJhdmVsXCIsXHJcblxyXG4gICAgR01Vcmw6XCJodHRwOi8vNy5saWdodHBhdy5jb20vaGFwcHlfdHJhdmVsL3Jld2FyZFwiLFxyXG5cclxuICAgIFRlbXBOYW1lOlwiXCIsXHJcbn1cclxuXHJcbi8v6L+e5o6l54q25oCBXHJcbmV4cG9ydCBlbnVtIEh0dHBDb25uZWN0U3RhdGUge1xyXG4gICAgRXJyb3IgPSAwLFxyXG4gICAgU3VjY2VzcyA9IDEsXHJcbn1cclxuXHJcbi8v5ZON5bqU57uT5p6E5L2TXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzcERhdGFTdHJ1Y3Qge1xyXG4gICAgUmVzcENvZGU6IG51bWJlcjtcclxuICAgIFJlc3BNc2c6IHN0cmluZztcclxuICAgIFJlc3BEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzcERhdGEoZGF0YTpSZXNwRGF0YVN0cnVjdCl7XHJcbiAgICByZXR1cm4gZGF0YSAmJiBkYXRhLlJlc3BEYXRhO1xyXG59XHJcblxyXG4vL+aLieWPlumFjee9ruivt+axguS9k1xyXG5leHBvcnQgY2xhc3MgQ29uZmlnRGF0YVBhcmFtIHtcclxuICAgIFRhYmxlSWQ6IG51bWJlcjtcclxuICAgIFRhYmxlTmFtZTogc3RyaW5nO1xyXG4gICAgVmVyc2lvbjogbnVtYmVyO1xyXG4gICAgRGF0YTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6bnVtYmVyLCB2ZXJzaW9uOm51bWJlciwgbmFtZT86c3RyaW5nLCBkYXRhPyl7XHJcbiAgICAgICAgdGhpcy5UYWJsZUlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5WZXJzaW9uID0gdmVyc2lvbjtcclxuICAgICAgICBpZihuYW1lKXtcclxuICAgICAgICAgICAgdGhpcy5UYWJsZU5hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5EYXRhID0gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgQ29uZmlnUmVxRGF0YSA9IG5ldyBBcnJheTxDb25maWdEYXRhUGFyYW0+KCk7XHJcblxyXG4vL+eZu+W9leivt+axguS9k1xyXG5leHBvcnQgY2xhc3MgTG9naW5SZXFEYXRhIHtcclxuICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIEpzQ29kZT86IHN0cmluZztcclxuICAgIEVuY3J5cHRlZERhdGE/OiBzdHJpbmc7XHJcbiAgICBJdj86IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lPzpzdHJpbmcsIHB3PzpzdHJpbmcsIGpzY29kZT86c3RyaW5nLCBlbmNyeXB0ZWREYXRhPzpzdHJpbmcsIGl2PzpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLk5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuUGFzc3dvcmQgPSBwdztcclxuICAgICAgICB0aGlzLkpzQ29kZSA9IGpzY29kZTtcclxuICAgICAgICB0aGlzLkVuY3J5cHRlZERhdGEgPSBlbmNyeXB0ZWREYXRhO1xyXG4gICAgICAgIHRoaXMuSXYgPSBpdjtcclxuICAgIH1cclxufVxyXG5cclxuLy/nmbvlvZXlk43lupTmlbDmja7kvZNcclxuZXhwb3J0IHR5cGUgTG9naW5SZXNwRGF0YVN0cnVjdCA9IHtcclxuICAgIFwiQWNjb3VudEJhc2VJbmZvXCI6IHtcclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiVmVyaWZ5U2Vzc2lvblwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJOaWNrTmFtZVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJBdmF0YXJcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiQ3JlYXRlVGltZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJEYW9oZW5nXCI6IG51bWJlcixcclxuICAgICAgICBcIkxpbmdsaVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHZW5ndVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJUaXBvXCI6IG51bWJlcixcclxuICAgICAgICBcIlNoZW5mYVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXdXhpbmdcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRnV5dWFuXCI6IG51bWJlcixcclxuICAgICAgICBcIlppemhpXCI6IG51bWJlcixcclxuICAgICAgICBcIlpoZW5neWlcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiWGllZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXZWl3YW5nXCI6IG51bWJlcixcclxuICAgICAgICBcIkdyb3VwR29uZ3hpYW5cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiWGlhbnl1XCI6IG51bWJlcixcclxuICAgIH0sXHJcbiAgICBcIlhpdXdlaUluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJTdGFnZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJDdXJyZW50VmFsdWVcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRWZmaWNpZW5jeVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTZXR0bGVtZW50VGltZVwiOiBudW1iZXJcclxuICAgIH0sXHJcbiAgICBcIlBhZ29kYUluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJOb3JtYWxNdWx0aXBsZUluZm9zXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJTdGFydFN0YW1wXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiRW5kU3RhbXBcIjogbnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiTm9ybWFsU3RhcnRUaW1lXCI6IG51bWJlcixcclxuICAgICAgICBcIk5vcm1hbFRpbWVzXCI6IG51bWJlcixcclxuICAgICAgICBcIk5vcm1hbExlc3RUaW1lXCI6IG51bWJlcixcclxuICAgICAgICBcIkxlYWRlck11bHRpcGxlSW5mb3NcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIlN0YXJ0U3RhbXBcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJFbmRTdGFtcFwiOiBudW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJMZWFkZXJTdGFydFRpbWVcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiTGVhZGVyVGltZXNcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiTGVhZGVyTGVzdFRpbWVcIjogbnVtYmVyXHJcbiAgICB9LFxyXG4gICAgXCJEb25nZnVJbmZvXCI6IHsgLy/otKbmiLfmnIDmlrDmtJ7lupzkv6Hmga9cclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiVG90YWxTZXJ2YW50TnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIlN0b25lTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTdG9uZU51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTdG9uZVNlcnZhbnROdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRm9vZExldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRm9vZE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJGb29kU2VydmFudE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXb29kTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXb29kTnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIldvb2RTZXJ2YW50TnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIklyb25MZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIklyb25OdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiSXJvblNlcnZhbnROdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU2V0dGxlbWVudFRpbWVcIjogbnVtYmVyXHJcbiAgICB9LFxyXG4gICAgXCJQb29sSW5mb1wiOiB7XHJcbiAgICAgICAgXCJBY2NvdW50S2V5XCI6IHN0cmluZyxcclxuICAgICAgICBcIlBvb2xMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIlJlaWtpTnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIkdvbGRMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIldvb2RMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIldhdGVyTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJGaXJlTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTb2lsTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTZXR0bGVtZW50VGltZVwiOiBudW1iZXIsXHJcbiAgICB9LFxyXG4gICAgXCJHcm91cEluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJHcm91cElkXCI6IG51bWJlcixcclxuICAgICAgICBcIkdyb3VwU2tpbGxOdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU3R1ZHlTa2lsbHNcIjogW1xyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgXCJTa2lsbElkXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgXCJTa2lsbFR5cGVcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICBcIkxldmVsXCI6IG51bWJlclxyXG4gICAgICAgICAgIH1cclxuICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBcIlN0b3JhZ2VJbmZvXCI6IHtcclxuICAgICAgICBcIlN3b3JkSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiSGFpcnBpbklkXCI6IG51bWJlcixcclxuICAgICAgICBcIkNsb3RoZXNJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTaG9lc0lkXCI6IG51bWJlcixcclxuICAgICAgICBcIlJpbmdJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJKYWRlSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiQnJhY2VsZXRJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJDb21wYXNzSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiT3Blbk51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHb29kSW5mb3NcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIlR5cGVcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcIk51bVwiOiBudW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgXCJEYW1vbkluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJDaGFsbGVuZ2VMZXZlbFwiOiBudW1iZXJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkb2JlQWRkV29ya2VyUmVxRGF0YSB7XHJcbiAgICBXb3JrVHlwZTpudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod29ya1R5cGU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5Xb3JrVHlwZSA9IHdvcmtUeXBlO1xyXG4gICAgfVxyXG59XHJcbiIsImxldCB1cmxzID0gW1xyXG4gICAgeyB1cmw6ICdyZXMvQWRvYmUvQWRvYmUudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9BZG9iZS9BZG9iZV9hdGxhczAuanBnJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL0Fkb2JlL0Fkb2JlX2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvYXRsYXMvY29tcC5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQ2hlc3NCb2FyZC9DaGVzc0JvYXJkLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQ2hlc3NCb2FyZC9DaGVzc0JvYXJkX2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQ2hvb3NlU2VydmljZS9DaG9vc2VTZXJ2aWNlLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvSWNvbnMvSWNvbnMudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9JY29ucy9JY29uc19hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL01haW5NZW51L01haW5NZW51LnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvTWFpbk1lbnUvTWFpbk1lbnVfYXRsYXMyLnBuZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QbGF5ZXIvUGxheWVyLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpYy50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL1B1YmxpYy9QdWJsaWNfYXRsYXMxLmpwZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QdWJsaWMvUHVibGljX2F0bGFzMV8xLmpwZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QdWJsaWMvUHVibGljX2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczJfMS5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczJfMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczJfMy5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUm9hZFRvRGlldHkvUm9hZFRvRGlldHkudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9TZWN0L1NlY3QudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbl1cclxuZXhwb3J0IHt1cmxzfTsiLCJcclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29uZmlnID0ge1xyXG4gICAgSURFTDogJ0lERUwnLCAgLy/lvoXmnLpcclxuICAgIERFQUQ6ICdERUFEJyxcclxuICAgIEJBQ0tfUEFTU0VEOiAnQkFDS19QQVNTRUQnLCAgICAvL+W3sue8qeWbnuWuieWFqOWMulxyXG4gICAgTU9WRV9GT1JXQVJEOiAnTU9WRV9GT1JXQVJEJywgICAgLy/liY3kvLhcclxuICAgIE1PVkVfQkFDSzogJ01PVkVfQkFDSycsICAgIC8v57yp5ZueXHJcbiAgICBTVE9QOiAnU1RPUCcsICAgIC8v5YGc5q2i6L+Q5YqoXHJcbn0iLCJcclxuZXhwb3J0IGludGVyZmFjZSBWaWV3Q29uZmlne1xyXG4gICAgS2V5OiBzdHJpbmcsXHJcbiAgICBQa2dBZHJzOiBzdHJpbmcsXHJcbiAgICBQa2c6IHN0cmluZyxcclxuICAgIENvbTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBWaWV3S2l0ID0ge1xyXG4gICAgLy/liqDovb3oj4roirFcclxuICAgIExvYWRpbmdNYWluOiB7XHJcbiAgICAgICAgS2V5OiBcIkxvYWRpbmdNYWluXCIsXHJcbiAgICAgICAgUGtnOiBcIkxvYWRpbmdVSVwiLFxyXG4gICAgICAgIENvbTpcIkxvYWRpbmdNYWluXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/pgInmi6nmnI3liqHlmahcclxuICAgIENob29zZVNlcnZpY2U6e1xyXG4gICAgICAgIEtleTogXCJDaG9vc2VTZXJ2aWNlXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJDaG9vc2VTZXJ2aWNlL0Nob29zZVNlcnZpY2VcIixcclxuICAgICAgICBQa2c6IFwiQ2hvb3NlU2VydmljZVwiLFxyXG4gICAgICAgIENvbTpcIkNob29zZVNlcnZpY2VcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+ivu+adoei/m+W6plxyXG4gICAgTG9hZGluZ1Byb2dyZXNzOiB7XHJcbiAgICAgICAgS2V5OiBcIkxvYWRpbmdQcm9ncmVzc1wiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwicmVzL0xvYWRpbmdVSS9Mb2FkaW5nVUlcIixcclxuICAgICAgICBQa2c6IFwiTG9hZGluZ1VJXCIsXHJcbiAgICAgICAgQ29tOlwiTG9hZGluZ1Byb2dyZXNzXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/kuLvnlYzpnaJcclxuICAgIE1haW5NZW51OiB7XHJcbiAgICAgICAgS2V5OiBcIk1haW5NZW51XCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJyZXMvTWFpbk1lbnUvTWFpbk1lbnVcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJNYWluTWVudVwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5L+u54K85pON5L2cXHJcbiAgICBDdWx0aXZhdGlvbkluZm86IHtcclxuICAgICAgICBLZXk6IFwiQ3VsdGl2YXRpb25JbmZvXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJyZXMvTWFpbk1lbnUvTWFpbk1lbnVcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJDdWx0aXZhdGlvbkluZm9cIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mjmOWtl1xyXG4gICAgVGlwc0xhYmVsOiB7XHJcbiAgICAgICAgS2V5OiBcIlRpcHNMYWJlbFwiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwiUHVibGljL1B1YmxpY1wiLFxyXG4gICAgICAgIFBrZzogXCJQdWJsaWNcIixcclxuICAgICAgICBDb206XCJUaXBzTGFiZWxcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mjmOWtl1xyXG4gICAgUmVzUHJvZHVjdGlvblRpcHM6IHtcclxuICAgICAgICBLZXk6IFwiUmVzUHJvZHVjdGlvblRpcHNcIixcclxuICAgICAgICBQa2dBZHJzOiBcIkFkb2JlL0Fkb2JlXCIsXHJcbiAgICAgICAgUGtnOiBcIkFkb2JlXCIsXHJcbiAgICAgICAgQ29tOlwiUmVzUHJvZHVjdGlvblRpcHNcIlxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy/mtJ7lupxcclxuICAgIEFkb2JlTWFpbjoge1xyXG4gICAgICAgIEtleTogXCJBZG9iZU1haW5cIixcclxuICAgICAgICBQa2dBZHJzOiBcIkFkb2JlL0Fkb2JlXCIsXHJcbiAgICAgICAgUGtnOiBcIkFkb2JlXCIsXHJcbiAgICAgICAgQ29tOlwiQWRvYmVNYWluXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/lhaznlKjnoa7orqTnqpflj6NcclxuICAgIFB1YmxpY0NvbmZpcm1hdGlvbjoge1xyXG4gICAgICAgIEtleTogXCJQdWJsaWNDb25maXJtYXRpb25cIixcclxuICAgICAgICBQa2dBZHJzOiBcIlB1YmxpYy9QdWJsaWNcIixcclxuICAgICAgICBQa2c6IFwiUHVibGljXCIsXHJcbiAgICAgICAgQ29tOlwiUHVibGljQ29uZmlybWF0aW9uXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/mtJ7lupzljYfnuqdcclxuICAgIEFkb2JlVXBncmFkZToge1xyXG4gICAgICAgIEtleTogXCJBZG9iZVVwZ3JhZGVcIixcclxuICAgICAgICBQa2dBZHJzOiBcIkFkb2JlL0Fkb2JlXCIsXHJcbiAgICAgICAgUGtnOiBcIkFkb2JlXCIsXHJcbiAgICAgICAgQ29tOlwiQWRvYmVVcGdyYWRlXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v5Yqg5YWl6Zeo5rS+XHJcbiAgICBKb2luU2VjdDoge1xyXG4gICAgICAgIEtleTogXCJKb2luU2VjdFwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiSm9pblNlY3RcIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/liqDlhaXpl6jmtL5cclxuICAgIFNlY3RNYWluOiB7XHJcbiAgICAgICAgS2V5OiBcIlNlY3RNYWluXCIsXHJcbiAgICAgICAgUGtnOiBcIlNlY3RcIixcclxuICAgICAgICBDb206XCJTZWN0TWFpblwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+mXqOa0vuS/rueCvOWhlFxyXG4gICAgVHJhaW5Ub3dlcjoge1xyXG4gICAgICAgIEtleTogXCJUcmFpblRvd2VyXCIsXHJcbiAgICAgICAgUGtnOiBcIlNlY3RcIixcclxuICAgICAgICBDb206XCJUcmFpblRvd2VyXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v6Zeo5rS+5Lu75YqhXHJcbiAgICBTZWN0VGFzazoge1xyXG4gICAgICAgIEtleTogXCJTZWN0VGFza1wiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiU2VjdFRhc2tcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+WtpuS5oOWKn+azlVxyXG4gICAgTGVhcm5Lb25nZmE6IHtcclxuICAgICAgICBLZXk6IFwiTGVhcm5Lb25nZmFcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIkxlYXJuS29uZ2ZhXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v5a2m5Lmg5Yqf5rOVXHJcbiAgICBVcGdyYWRlS29uZ2ZhOiB7XHJcbiAgICAgICAgS2V5OiBcIlVwZ3JhZGVLb25nZmFcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIlVwZ3JhZGVLb25nZmFcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+inkuiJslxyXG4gICAgUGxheWVyTWFpbjoge1xyXG4gICAgICAgIEtleTogXCJQbGF5ZXJNYWluXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIlBsYXllck1haW5cIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/op5LoibLlsZ7mgKdcclxuICAgIFBsYXllckF0dHJpYnV0aW9uOiB7XHJcbiAgICAgICAgS2V5OiBcIlBsYXllckF0dHJpYnV0aW9uXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIlBsYXllckF0dHJpYnV0aW9uXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/lop7liqDlgqjnianooovnqbrpl7RcclxuICAgIEFkZEJhZ051bToge1xyXG4gICAgICAgIEtleTogXCJBZGRCYWdOdW1cIixcclxuICAgICAgICBQa2c6IFwiUGxheWVyXCIsXHJcbiAgICAgICAgQ29tOlwiQWRkQmFnTnVtXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/kv67ngrzluK7liqlcclxuICAgIEN1bHRpdmF0aW9uRWZmaWNpZW5jeToge1xyXG4gICAgICAgIEtleTogXCJDdWx0aXZhdGlvbkVmZmljaWVuY3lcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJDdWx0aXZhdGlvbkVmZmljaWVuY3lcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL0dN5Yqg54mp5ZOBXHJcbiAgICBHbUFkZEJhZ0l0ZW06IHtcclxuICAgICAgICBLZXk6IFwiR21BZGRCYWdJdGVtXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIkdtQWRkQmFnSXRlbVwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+S7memAlOS4u+eVjOmdolxyXG4gICAgUm9hZFRvRGlldHlNYWluOiB7XHJcbiAgICAgICAgS2V5OiBcIlJvYWRUb0RpZXR5TWFpblwiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIlJvYWRUb0RpZXR5TWFpblwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+aImOaWl+i/h+eoi1xyXG4gICAgQmF0dGxlSW5mbzoge1xyXG4gICAgICAgIEtleTogXCJCYXR0bGVJbmZvXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiQmF0dGxlSW5mb1wiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+aJq+iNoeS7memAlFxyXG4gICAgU3dlZXBDaGFwdGVyczoge1xyXG4gICAgICAgIEtleTogXCJTd2VlcENoYXB0ZXJzXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiU3dlZXBDaGFwdGVyc1wiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6ZWH5aaW5aGUXHJcbiAgICBNb25zdGVyVG93ZXI6IHtcclxuICAgICAgICBLZXk6IFwiTW9uc3RlclRvd2VyXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiTW9uc3RlclRvd2VyXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/plYflppbloZTpppbmnYDmppxcclxuICAgIEZpcnN0Qmxvb2RSYW5rOiB7XHJcbiAgICAgICAgS2V5OiBcIkZpcnN0Qmxvb2RSYW5rXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiRmlyc3RCbG9vZFJhbmtcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+S7meWPi+WciFxyXG4gICAgRnJpZW5kQ2lyY2xlOiB7XHJcbiAgICAgICAgS2V5OiBcIkZyaWVuZENpcmNsZVwiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIkZyaWVuZENpcmNsZVwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5LuZ6YCU5qOL55uYXHJcbiAgICBDaGVzc01hcDoge1xyXG4gICAgICAgIEtleTogXCJDaGVzc01hcFwiLFxyXG4gICAgICAgIFBrZzogXCJDaGVzc0JvYXJkXCIsXHJcbiAgICAgICAgQ29tOlwiQ2hlc3NNYXBcIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/ovaznlJ9cclxuICAgIFJlYmlydGg6IHtcclxuICAgICAgICBLZXk6IFwiUmViaXJ0aFwiLFxyXG4gICAgICAgIFBrZzogXCJNYWluTWVudVwiLFxyXG4gICAgICAgIENvbTpcIlJlYmlydGhcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mXqOa0vuiXj+e7j+mYgeWFpeWPo1xyXG4gICAgSmluZ0xpYkVudHJhbmNlOiB7XHJcbiAgICAgICAgS2V5OiBcIkppbmdMaWJFbnRyYW5jZVwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiSmluZ0xpYkVudHJhbmNlXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/pl6jmtL7ol4/nu4/pmIFcclxuICAgIEppbmdMaWI6IHtcclxuICAgICAgICBLZXk6IFwiSmluZ0xpYlwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiSmluZ0xpYlwiXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJQ29uZmlne1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9naW5QYWNrYWdlTG9hZGVkID0gZmFsc2U7ICAgLy/mmK/lkKblt7LliqDovb3nmbvlvZVVSeWMhVxyXG4gICAgXHJcbiAgICAvL+eZu+W9leWKoOi9veeahFVJ5YyFXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgVUlQa2dzID0gW1xyXG4gICAgICAgIFwiSWNvbnNcIixcclxuICAgICAgICBcIlB1YmxpY1wiLFxyXG4gICAgICAgIFwiTWFpbk1lbnVcIixcclxuICAgIF07XHJcblxyXG4gICAgLy/lvq7kv6HlsI/muLjmiI/lrZDljIVcclxuICAgIHN0YXRpYyByZWFkb25seSBTdWJQa2dzID0gW1xyXG4gICAgICAgIFwic3ViTGlic1wiLFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBVSea4suafk+WIhuWxglxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNvcnRpbmdPcmRlciA9IHtcclxuICAgICAgICAvL+S4u+eVjOmdouaMiemSrlxyXG4gICAgICAgIE1haW5VSTogMTAwLFxyXG4gICAgICAgIC8vIOS/oeaBr+WQjOatpVxyXG4gICAgICAgIE1zZ1N5bmM6IDE1MCxcclxuICAgICAgICAvLyDlnLrmma/liqDovb1cclxuICAgICAgICBTY2VuZUxvYWRpbmc6IDIwMCxcclxuICAgICAgICAvLyDmlrDmiYvlvJXlr7xcclxuICAgICAgICBOb3ZpY2VHdWlkZTogMjUwLFxyXG4gICAgICAgIC8vIOaWsOWKn+iDveW8gOWQr1xyXG4gICAgICAgIE5ld0Z1bmN0aW9uT3BlbjogMjYwLFxyXG4gICAgICAgIC8vIOS6uueJqeWvueeZvVxyXG4gICAgICAgIERpYWxvZzogMzAwLFxyXG4gICAgICAgIC8vIOW8ueWHuueql+WPo1xyXG4gICAgICAgIFBvcHVwOiAzNTAsXHJcbiAgICAgICAgLy8g5YWo5bGP5bGV56S6XHJcbiAgICAgICAgRnVsbFNjcmVlblNob3c6IDQ1MCxcclxuICAgICAgICAvLyDnvZHnu5zkv6Hlj7dcclxuICAgICAgICBOZXRTaWduYWw6IDUwMCxcclxuICAgICAgICAvLyDnvZHnu5zlvLnmoYZcclxuICAgICAgICBOZXRFcnJvcjogNTUwLFxyXG4gICAgICAgIC8vIOezu+e7n+W5v+aSrVxyXG4gICAgICAgIFN5c3RlbU1zZzogNjAwLFxyXG4gICAgICAgIC8vIOa2iOaBr+aPkOekulxyXG4gICAgICAgIE1zZ1RpcHM6IDY1MCxcclxuICAgICAgICAvLyDngrnlh7vnibnmlYhcclxuICAgICAgICBDbGlja0VmZmVjdDogNzAwLFxyXG4gICAgICAgIC8vIOacjeWKoeWZqOaXtumXtFxyXG4gICAgICAgIFNlcnZlclRpbWU6IDEwMDAsXHJcbiAgICAgICAgLy8gZ23mjIfku6RcclxuICAgICAgICBHbU9yZGVyOiAxMDAxLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL1NwaW5l6Lev5b6EXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU3BpbmVQYXRoID0ge1xyXG4gICAgICAgIFlhb3lhbzp7XHJcbiAgICAgICAgICAgIExlZnQ6XCJTcGluZS90dXppXCIsXHJcbiAgICAgICAgICAgIFJpZ2h0OlwiUHJlZmFiL3R1emlfMlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgRGljZTpcIlNwaW5lL3NwaW5lX3NhaXppXCIsXHJcbiAgICAgICAgXHJcbiAgICAgICAgTmFuemh1OntcclxuICAgICAgICAgICAgTGVmdDpcIlNwaW5lL25hbnpodVwiLFxyXG4gICAgICAgICAgICBSaWdodDpcIlByZWZhYi9uYW56aHVfMlwiLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFl1c2hlbmd5aTp7XHJcbiAgICAgICAgICAgIExlZnQ6XCJTcGluZS95dXNoZW5neWlcIixcclxuICAgICAgICAgICAgUmlnaHQ6XCJQcmVmYWIveXVzaGVuZ3lpXzJcIixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+WjsOmfs1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNvdW5kUGF0aCA9IHtcclxuICAgICAgICBCdXR0b25DbGljazpcInVpOi8vUHVibGljL+eCueWHu+aMiemSrlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+W9ouixoeWbvuagh+mFjee9rlxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFBvcnRyYWl0UGF0aCA9IHtcclxuICAgICAgICBZYW95YW86J3VpOi8vUHVibGljL+WkreWkrV/lhajouqsnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+Wwj+Wbvuagh+mFjee9rlxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNtYWxsSWNvblBhdGggPSB7XHJcbiAgICAgICAgWWFveWFvOid1aTovL1B1YmxpYy/lpK3lpK3lsI/lpLTlg48nLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU2hhcmVJbWFnZVBhdGggPSB7XHJcbiAgICAgICAgSW52aXRlRnJpZW5kOidodHRwczovL21tb2NnYW1lLnFwaWMuY24vd2VjaGF0Z2FtZS9IQ2xvS1hwWWg0QUlhcjIxaWF2QkhVczFCZ1MzZjR1R3NuWVg1aWJLZHVPaWFyQWRnVFY5R3dKa1N0Uk9QamJyYWtMLzAnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL1NwaW5l5Yqo55S75YiH5o2iXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU3BpbmVTdGF0ZSA9IHtcclxuICAgICAgICBZYW95YW86e1xyXG4gICAgICAgICAgICBSdW46XCJydW5cIixcclxuICAgICAgICAgICAgU3RhbmQ6XCJzdGFuZFwiLFxyXG4gICAgICAgICAgICBJZGxlMTpcImlkbGUxXCIsXHJcbiAgICAgICAgICAgIElkbGUyOlwiaWRsZTJcIixcclxuICAgICAgICAgICAgVG91Y2gxOlwidG91Y2gxXCIsXHJcbiAgICAgICAgICAgIFRvdWNoMjpcInRvdWNoMlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8v5by65Yi25byV5a+8XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgR3VpZGVyTmFtZSA9IHtcclxuICAgICAgICBSb2xlTWVudUd1aWRlOlwiUm9sZU1lbnVHdWlkZVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgRm9udENvbG9yID0ge1xyXG4gICAgICAgIEZpZ2h0UmVjX01lOiAnI0ZGRkYwMCcsXHJcbiAgICB9O1xyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9SaWdpZE9iamVjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vT2JqZWN0UHJveHknO1xyXG4iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL0NvcmUvQ29yZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdFByb3h5IHtcclxuICAgIHN0YXRpYyBjaGFuZ2VNb2RlbChvbGRNb2RlbDpMYXlhLlNwcml0ZTNELCBvbGRQYXRoOnN0cmluZywgbmV3UGF0aDpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCFvbGRNb2RlbCB8fCAhb2xkTW9kZWwgfHwgIW5ld1BhdGggfHwgb2xkUGF0aCA9PSBuZXdQYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKG9sZE1vZGVsKSB7XHJcbiAgICAgICAgICAgIE1hbmFnZXIuUG9vbE1hbmFnZXIucmVjb3ZlcihvbGRQYXRoLCBvbGRNb2RlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbW9kZWwgPSBNYW5hZ2VyLlBvb2xNYW5hZ2VyLmdldEl0ZW0obmV3UGF0aCk7XHJcbiAgICAgICAgaWYobW9kZWwgaW5zdGFuY2VvZiBMYXlhLk1lc2hTcHJpdGUzRCl7XHJcbiAgICAgICAgICAgIG9sZE1vZGVsID0gbW9kZWw7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIE1hbmFnZXIuU3Bhd25NYW5hZ2VyLkxvYWQzZE1vZGVsKG5ld1BhdGgsIChtZGF0YTpDb25maWcuTW9kZWxEYXRhU3RydWN0KT0+e1xyXG4gICAgICAgICAgICAgICAgb2xkTW9kZWwgPSBtZGF0YS5tc3AgYXMgTGF5YS5NZXNoU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9Db3JlL0NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSaWdpZE9iamVjdHtcclxuICAgIFN0YXRlOk1hbmFnZXIuU3RhdGVCYXNlO1xyXG4gICAgcHJpdmF0ZSBfbW9kZWxQYXRoOnN0cmluZztcclxuICAgIE9iajpMYXlhLk1lc2hTcHJpdGUzRDtcclxuICAgIFJpZ2lkM0Q6TGF5YS5SaWdpZGJvZHkzRDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvYmo6TGF5YS5NZXNoU3ByaXRlM0Qpe1xyXG4gICAgICAgIHRoaXMuT2JqID0gb2JqO1xyXG4gICAgICAgIHRoaXMuU3RhdGUgPSBuZXcgTWFuYWdlci5TdGF0ZUJhc2UoKTtcclxuICAgICAgICB0aGlzLlJpZ2lkM0QgPSBvYmouZ2V0Q29tcG9uZW50KExheWEuUmlnaWRib2R5M0QpO1xyXG4gICAgICAgIGlmKCF0aGlzLlJpZ2lkM0Qpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmlnaWQgT2JqZWN0IG1pc3MgcmlnaWRib2R5M2QhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VNb2RlbChwYXRoOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXBhdGggfHwgdGhpcy5fbW9kZWxQYXRoID09IHBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgQ29yZS5PYmplY3RQcm94eS5jaGFuZ2VNb2RlbCh0aGlzLk9iaiwgdGhpcy5fbW9kZWxQYXRoLCBwYXRoKTtcclxuICAgICAgICB0aGlzLl9tb2RlbFBhdGggPSBwYXRoO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9EYXRhQmFzZSc7XHJcbiIsImltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgR0V2ZW50IGZyb20gXCIuLi9Db21tb24vR0V2ZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cFJlcWJvZHlCYXNle1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIE1vZHVsZUNvZGU6IG51bWJlcjtcclxuICAgIFJlcUNvZGU6IG51bWJlcjtcclxuICAgIFNlc3Npb246IHN0cmluZztcclxuICAgIEFjY291bnRLZXk6IHN0cmluZztcclxuICAgIFJlcURhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RDb2RlOm51bWJlciwgcmVxQ29kZTpudW1iZXIsIHNlc3Npb24/OnN0cmluZywgYWNjTmFtZT86c3RyaW5nLCByZXFkYXRhPyl7XHJcbiAgICAgICAgaWYodHlwZW9mKHJlcWRhdGEpID09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAvL+WmguW3sui9rOaNouWImei9rOWbnkpTT05cclxuICAgICAgICAgICAgcmVxZGF0YSA9IEpTT04ucGFyc2UocmVxZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLk1vZHVsZUNvZGUgPSBtb2RDb2RlO1xyXG4gICAgICAgIHRoaXMuUmVxQ29kZSA9IHJlcUNvZGU7XHJcbiAgICAgICAgdGhpcy5TZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLkFjY291bnRLZXkgPSBhY2NOYW1lO1xyXG4gICAgICAgIHRoaXMuUmVxRGF0YSA9IHJlcWRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRhU3RydWN0IGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX05ldE1ncjpNYW5hZ2VyLkh0dHBNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3JlcWtleXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cclxuICAgIHByaXZhdGUgX2h0dHBNZ3I6TWFuYWdlci5IdHRwTWFuYWdlcjtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgcmVxQm9keTpIdHRwUmVxYm9keUJhc2U7XHJcblxyXG4gICAgc3RhdGljIGlzUmVzcG9uc2VkOmJvb2xlYW47XHJcbiAgICBzdGF0aWMgRGljZU51bTpudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIFNlbmRSZXEocmVxRGF0YT8pe1xyXG4gICAgICAgIHRoaXMucmVxQm9keS5SZXFEYXRhID0gcmVxRGF0YTtcclxuICAgICAgICB0aGlzLl9OZXRNZ3IgPSBuZXcgTWFuYWdlci5IdHRwTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuX05ldE1nci5Db25uZWN0KCcnLCB0aGlzLnJlcUJvZHksIHRoaXMub25SZXNwb25zZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0IFJlcUJvZHkoYm9keSl7XHJcbiAgICAgICAgaWYoIXRoaXMucmVxQm9keSlcclxuICAgICAgICAgICAgdGhpcy5yZXFCb2R5ID0gYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0IERhdGEoZGF0YSl7fVxyXG5cclxuICAgIHN0YXRpYyBvbkNvbm5lY3RFbmQoZGF0YTpDb25maWcuUmVzcERhdGFTdHJ1Y3Qpe31cclxuXHJcbiAgICBzdGF0aWMgb25SZXNwb25zZShkYXRhOkNvbmZpZy5SZXNwRGF0YVN0cnVjdCl7XHJcbiAgICAgICAgaWYoZGF0YSAmJiBkYXRhLlJlc3BEYXRhICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLkRhdGEgPSBkYXRhLlJlc3BEYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mihOeVmeaOpeWPo++8jOmBv+WFjeWQjuerr+ayoeaciei/lOWbnuaVsOaNrlxyXG4gICAgICAgIHRoaXMub25Db25uZWN0RW5kKGRhdGEpO1xyXG4gICAgICAgIHRoaXMucmVxQm9keS5SZXFEYXRhID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IE5ldE1ncigpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9OZXRNZ3Ipe1xyXG4gICAgICAgICAgICB0aGlzLl9OZXRNZ3IgPSBuZXcgTWFuYWdlci5IdHRwTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX05ldE1ncjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ29ubmVjdChyZXFrZXk6c3RyaW5nLCByZXFib2R5Okh0dHBSZXFib2R5QmFzZSwgY2FsbGJhY2s/OkZ1bmN0aW9uLCBpc1Nob3dMb2FkaW5nPywgSXNHbT86Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5OZXRNZ3IuQ29ubmVjdChyZXFrZXksIHJlcWJvZHksIHRoaXMuT25IdHRwUmVxdWVzdENvbXBsZXRlLmJpbmQodGhpcyksIGlzU2hvd0xvYWRpbmcsIElzR20pO1xyXG4gICAgICAgIHRoaXMuX3JlcWtleXMucHVzaChyZXFrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBPbkh0dHBSZXF1ZXN0Q29tcGxldGUoZGF0YTpDb25maWcuUmVzcERhdGFTdHJ1Y3QsIHJlcWtleTpzdHJpbmcsIHJlcURhdGEpe1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERldlJlcUJvZHkgZXh0ZW5kcyBIdHRwUmVxYm9keUJhc2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQmFzZUJvZHlJbml0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQm9keUluaXRlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL+ivt+axguS9k1xyXG4gICAgc3RhdGljIENvbmZpZ0JvZHk6SHR0cFJlcWJvZHlCYXNlOyAgIC8v6YWN572uXHJcbiAgICBzdGF0aWMgTG9naW5Cb2R5Okh0dHBSZXFib2R5QmFzZTsgICAgLy/nmbvlvZVcclxuICAgIHN0YXRpYyBVcGdyYWRlQm9keTpIdHRwUmVxYm9keUJhc2U7ICAgIC8v5Y2H6Zi2XHJcbiAgICBzdGF0aWMgQWRvYmVVaUluZm9Cb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOWxleekulxyXG4gICAgc3RhdGljIEFkb2JlSGlyZVdvcmtlckJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc5oub5Yuf5LuZ5LuGXHJcbiAgICBzdGF0aWMgQWRvYmVBZGRXb3JrZXJCb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOa3u+WKoOW3peS9nOS7meS7hlxyXG4gICAgc3RhdGljIEFkb2JlUmVkdWNlV29ya2VyQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzlh4/lsJHlt6XkvZzku5nku4ZcclxuICAgIHN0YXRpYyBBZG9iZVVwU3RvbmVCb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOeBteefs+WNh+e6p1xyXG4gICAgc3RhdGljIEFkb2JlVXBGb29kQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzpo5/nianljYfnuqdcclxuICAgIHN0YXRpYyBBZG9iZVVwV29vZEJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc5pyo5p2Q5Y2H57qnXHJcbiAgICBzdGF0aWMgQWRvYmVVcElyb25Cb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOmZqOmTgeWNh+e6p1xyXG5cclxuICAgIHN0YXRpYyBnZXQgaXNJbml0ZWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNCb2R5SW5pdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vZENvZGU6bnVtYmVyLCByZXFDb2RlOm51bWJlciwgcmVxRGF0YT8pe1xyXG4gICAgICAgIGlmKCFMb2dpbkRhdGEuU2Vzc2lvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQbHMgbG9naW4gZmlyc3QnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN1cGVyKG1vZENvZGUsIHJlcUNvZGUsIExvZ2luRGF0YS5TZXNzaW9uLCBMb2dpbkRhdGEuQWNjb3VudEtleSwgcmVxRGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgRGFtb25JbmZvVHlwZSA9IHtcclxuICAgIFwiQ2hhbGxlbmdlTGV2ZWxcIjogbnVtYmVyLFxyXG59XHJcblxyXG4vL+eOqeWutuaVsOaNrlxyXG5leHBvcnQgY2xhc3MgUGxheWVyRGF0YSB7XHJcbiAgICBzdGF0aWMgTmlrZU5hbWU6c3RyaW5nO1xyXG4gICAgc3RhdGljIEF2YXRhcjpzdHJpbmc7XHJcbiAgICBzdGF0aWMgUG9pbnQgPSAwO1xyXG5cclxuICAgIHN0YXRpYyBzZXQgRGF0YShkYXRhKXtcclxuICAgICAgICBpZihudWxsICE9IGRhdGEuTmlja05hbWUpe1xyXG4gICAgICAgICAgICB0aGlzLk5pa2VOYW1lID0gZGF0YS5OaWNrTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG51bGwgIT0gZGF0YS5BdmF0YXIpe1xyXG4gICAgICAgICAgICB0aGlzLkF2YXRhciA9IGRhdGEuQXZhdGFyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR0V2ZW50LkRpc3BhdGNoKENvbW1vbi5EYXRhUGxheWVyRWlkLlJlZnJlc2hlZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5YiG5Lqr6K+t5Y+lXHJcbmludGVyZmFjZSBTaGFyZURldGFpbCB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBTaGFyZVR5cGU6bnVtYmVyOyAgICAgICAgICAgIC8v5YiG5Lqr57G75Z6LMeaYjuS/oeeJh1xyXG4gICAgU2hhcmVXb3JkOnN0cmluZyAgLy/liIbkuqvor63lj6VcclxufVxyXG5cclxuZXhwb3J0IGxldCBTaGFyZVdvcmQgPSB7XHJcbiAgICBcIkNhcmRXb3Jkc1wiOiBuZXcgQXJyYXk8U2hhcmVEZXRhaWw+KCksICAgICAgICAvL+aYjuS/oeeJh+WIhuS6q+ivreWPpVxyXG4gICAgXCJIYW1zdGVyV29yZHNcIjogbmV3IEFycmF5PFNoYXJlRGV0YWlsPigpLCAgICAgLy/miZPlnLDpvKDliIbkuqvor63lj6VcclxuICAgIFwiQ29pbldvcmRzXCI6IG5ldyBBcnJheTxTaGFyZURldGFpbD4oKSwgICAgICAgIC8v5o6l6YeR5biB5YiG5Lqr6K+t5Y+lXHJcbiAgICBcIk90aGVyV29yZHNcIjogbmV3IEFycmF5PFNoYXJlRGV0YWlsPigpICAgICAgICAvL+WFtuS7luWIhuS6q+ivreWPpVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0U2hhcmVXb3JkKHNoYXJlVHlwZT8pe1xyXG4gICAgbGV0IHJhbmQgPSAwO1xyXG4gICAgc3dpdGNoIChzaGFyZVR5cGUpIHtcclxuICAgICAgICBjYXNlIENvbmZpZy5TaGFyZVdvcmRFbnVtLkNhcmRXb3JkczpcclxuICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNoYXJlV29yZC5DYXJkV29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFNoYXJlV29yZC5DYXJkV29yZHNbcmFuZF0uU2hhcmVXb3JkO1xyXG4gICAgXHJcbiAgICAgICAgY2FzZSBDb25maWcuU2hhcmVXb3JkRW51bS5IYW1zdGVyV29yZHM6XHJcbiAgICAgICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTaGFyZVdvcmQuSGFtc3RlcldvcmRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTaGFyZVdvcmQuSGFtc3RlcldvcmRzW3JhbmRdLlNoYXJlV29yZDtcclxuXHJcbiAgICAgICAgY2FzZSBDb25maWcuU2hhcmVXb3JkRW51bS5Db2luV29yZHM6XHJcbiAgICAgICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTaGFyZVdvcmQuQ29pbldvcmRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTaGFyZVdvcmQuQ29pbldvcmRzW3JhbmRdLlNoYXJlV29yZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNoYXJlV29yZC5PdGhlcldvcmRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTaGFyZVdvcmQuT3RoZXJXb3Jkc1tyYW5kXS5TaGFyZVdvcmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6YWN572u5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBDb25maWdEYXRhIGV4dGVuZHMgRGF0YVN0cnVjdHtcclxuICAgIHN0YXRpYyBzZXQgRGF0YShyZXNwX2RhdGE6Q29uZmlnLkNvbmZpZ0RhdGFQYXJhbVtdKXtcclxuICAgICAgICBzZXRDb25maWdEYXRhKHJlc3BfZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbmZpZ0RhdGEocmVzcF9kYXRhOkNvbmZpZy5Db25maWdEYXRhUGFyYW1bXSl7XHJcbiAgICBjb25zb2xlLmxvZygn6YWN572u5pWw5o2u77yaJywgcmVzcF9kYXRhKTtcclxuICAgIGlmKCFyZXNwX2RhdGEpIHJldHVybjtcclxuXHJcbiAgICBDb25maWcuRGF0YUNvbmZpZy5pbnN0YW5jZS5zYXZlQ29uZmlnVmVyc2lvbihyZXNwX2RhdGEpO1xyXG4gICAgZm9yKGxldCBpIGluIHJlc3BfZGF0YSl7XHJcbiAgICAgICAgaWYocmVzcF9kYXRhW2ldKXtcclxuICAgICAgICAgICAgQ29uZmlnLkRhdGFDb25maWcuaW5zdGFuY2Uuc3RvcmVDb25maWcocmVzcF9kYXRhW2ldLlRhYmxlSWQsIHJlc3BfZGF0YVtpXS5EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ29uZmlnLkRhdGFDb25maWcuSXNDb25maWdMb2FkZWQgPSB0cnVlO1xyXG4gICAgR0V2ZW50LkRpc3BhdGNoKENvbW1vbi5TY2VuZUxvZ2luRWlkLkNvbmZpZ0xvYWRlZCk7XHJcbn1cclxuXHJcbi8v55m75b2V5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkRhdGEgZXh0ZW5kcyBEYXRhU3RydWN0e1xyXG4gICAgc3RhdGljIFNlc3Npb246c3RyaW5nO1xyXG4gICAgc3RhdGljIEFjY291bnRLZXk6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzTG9naW5lZCA9IGZhbHNlOyAgLy/mmK/lkKblt7LnmbvlvZVcclxuXHJcbiAgICBzdGF0aWMgZ2V0IElzTG9naW5lZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0xvZ2luZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldCBEYXRhKGRhdGE6Q29uZmlnLkxvZ2luUmVzcERhdGFTdHJ1Y3Qpe1xyXG4gICAgICAgIGlmKGRhdGEuQWNjb3VudEJhc2VJbmZvKXtcclxuICAgICAgICAgICAgdGhpcy5TZXNzaW9uID0gZGF0YS5BY2NvdW50QmFzZUluZm8uVmVyaWZ5U2Vzc2lvbjtcclxuICAgICAgICAgICAgdGhpcy5BY2NvdW50S2V5ID0gZGF0YS5BY2NvdW50QmFzZUluZm8uQWNjb3VudEtleTtcclxuICAgICAgICAgICAgUGxheWVyRGF0YS5EYXRhID0gZGF0YS5BY2NvdW50QmFzZUluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihkYXRhLlhpdXdlaUluZm8pe1xyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhLkRhdGEgPSBkYXRhLlhpdXdlaUluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5faXNMb2dpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5faXNMb2dpbmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WNh+e6p+aVsOaNrlxyXG5leHBvcnQgY2xhc3MgVXBncmFkZURhdGEgZXh0ZW5kcyBEYXRhU3RydWN0e1xyXG4gICAgc3RhdGljIHNldCBEYXRhKHJlc3BEYXRhKXtcclxuICAgICAgICBpZihyZXNwRGF0YS5YaXV3ZWlJbmZvKXtcclxuICAgICAgICAgICAgUGxheWVyRGF0YS5EYXRhID0gcmVzcERhdGEuWGl1d2VpSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uQ2hhcmFjdGVyQ3VsdGl2YXRpb25FaWQuVXBncmFkZSwgcmVzcERhdGEuVXBPayk7XHJcbiAgICB9XHJcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj03NTA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj0xMzM0O1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJ2ZXJ0aWNhbFwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuXHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiXHJcbmltcG9ydCB7IERhdGFDb25maWcgfSBmcm9tIFwiLi9Db25maWcvRGF0YUNvbmZpZ1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSAnLi9EYXRhL0RhdGEnO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyBMb2dpYyBmcm9tIFwiLi9Mb2dpYy9Mb2dpY1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSAgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG5cdHByb3RlY3RlZCBzdGF0aWMgX2luc3Q6R2FtZVNjZW5lO1xyXG5cdHB1YmxpYyBsb2FkaW5nVWlQYWNrYWdlOnN0cmluZztcclxuXHJcblx0c3RhdGljIGdldCBpbnN0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faW5zdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbkF3YWtlKCl7XHJcblx0XHRHYW1lU2NlbmUuX2luc3QgPSB0aGlzO1xyXG5cdFx0dGhpcy5vd25lci5hZGRDb21wb25lbnQoTG9naWMuR3JhYkxvZ2ljKVxyXG5cclxuXHRcdC8vIHRoaXMuaW5pdCgpO1xyXG5cdFx0Ly8gdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkNvbmZpZ0xvYWRlZCwgdGhpcy5vbkNvbmZpZ0xvYWRlZCk7XHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2VydmljZUNob29zZWQsIHRoaXMub25WZXJzaW9uQ2hlY2tlZCk7XHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuTG9naW5TdWNjZXNzLCB0aGlzLm9uTG9naW5lZCk7XHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2ltUHJvZ3Jlc3NFbmQsIHRoaXMub3Blbk1haW5VaSk7XHJcblx0fVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCl7XHJcblx0XHQvLyBDb21tb24uSnNDYWxsSmF2YShcImRlbW8uSlNCcmlkZ2VcIiwgXCJ0ZXN0U3RyaW5nXCIsIFwiSGVsbG8gYmFieSFcIik7XHJcblx0XHQvL+a4uOaIj+W8gOWPkeeJiOacrFxyXG5cdFx0TWFuYWdlci5WZXJzaW9uTWFuYWdlci5WZXJzaW9uID0gQ29uZmlnLlZlcnNpb25Db25maWcuRGV2ZWxvcDtcclxuXHJcblx0XHQvL+WKqOaAgeWKoOi9vVxyXG5cdFx0aWYoTGF5YS5Ccm93c2VyLm9uTWluaUdhbWUpe1xyXG5cdFx0XHRMYXlhLlVSTC5iYXNlUGF0aCA9IFwiaHR0cHM6Ly83MDYubGlnaHRwYXcuY24vaDVjL3Jlc0NhY2hlL0RpZXR5Um9hZC9cIjtcdFxyXG5cdFx0XHQvLyBMYXlhLlVSTC5iYXNlUGF0aCA9IFwiaHR0cHM6Ly9zMy5jbi1ub3J0aHdlc3QtMS5hbWF6b25hd3MuY29tLmNuL2g1Y2xpZW50L0RlbW9zL0RyZWFtQ2hlc3NcIjtcclxuXHRcdFx0TGF5YS5NaW5pQWRwdGVyLm5hdGl2ZWZpbGVzID0gIFtcclxuXHRcdFx0XHRcImxpYnNcIixcclxuXHRcdFx0XHRcInJlcy9jb25maWdcIixcclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5pdEZhaXJ5Z3VpKCk7XHJcblx0XHR0aGlzLmxvYWRMb2dpblVpUmVzKCk7XHJcblx0XHQvLyBDb21tb24ubG9hZEFsbFN1YnBhY2thZ2VzKHRoaXMsIHRoaXMubG9hZExvZ2luVWlSZXMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0RmFpcnlndWkoKXtcclxuXHRcdGZndWkuVUlDb25maWcucGFja2FnZUZpbGVFeHRlbnNpb24gPSBcInR4dFwiO1xyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZChmZ3VpLkdSb290Lmluc3QuZGlzcGxheU9iamVjdCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRMb2dpblVpUmVzKCl7XHJcblx0XHRDb21tb24uUmVzb3VyY2UubG9hZChDb25maWcubG9naW5SZXNVcmxzLCB0aGlzLCB0aGlzLm9uTG9naW5nUmVzTG9hZGVkKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Mb2dpbmdSZXNMb2FkZWQoKXtcclxuXHRcdHRoaXMucHJlTG9naW4oKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9hZFJlcygpe1xyXG5cdFx0Q29tbW9uLlJlc291cmNlLmxvYWQoQ29uZmlnLnVybHMsIHRoaXMsIHRoaXMub25SZXNMb2FkZWQsIHRoaXMub25Mb2FkaW5nKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Mb2FkaW5nKHByb2dyZXNzOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5Yqg6L296L+b5bqmOiBcIiArIHByb2dyZXNzKTtcclxuXHRcdC8vIE1hbmFnZXIuTG9hZGluZ1Byb2dyZXNzTWFuYWdlci5JbnN0LnNob3dVaVByb2dyZXNzKHByb2dyZXNzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25SZXNMb2FkZWQoaW5mbyl7XHJcblx0XHRpZighaW5mbyl7XHJcblx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKCdMb2FkIGZhaXJ5Z3VpIHBhY2thZ2UgZmFpbCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8v5YWs55So5YyFXHJcblx0XHRDb25maWcuVUlDb25maWcuVUlQa2dzLmZvckVhY2gocGtnPT57XHJcblx0XHRcdENvbW1vbi5SZXNvdXJjZS5hZGRVaVBhY2thZ2UocGtnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdENvbmZpZy5VSUNvbmZpZy5Mb2dpblBhY2thZ2VMb2FkZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUxvZ2luRWlkLlBhY2thZ2VMb2FkZWQpO1xyXG5cdFx0dGhpcy5sb2FkQ29uZmlnKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByZUxvZ2luKCl7XHJcblx0XHR0aGlzLm9wZW5Mb2dpblVJKCk7XHJcblx0XHR0aGlzLmNoZWNrVmVyc2lvbigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjaGVja1ZlcnNpb24oKXtcclxuXHRcdHN3aXRjaCAoTWFuYWdlci5WZXJzaW9uTWFuYWdlci5WZXJzaW9uKSB7XHJcblx0XHRcdGNhc2UgQ29uZmlnLlZlcnNpb25Db25maWcuRGV2ZWxvcDpcclxuXHRcdFx0XHR0aGlzLm9wZW5DaG9vc2VTZXJ2aWNlVWkoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBDb25maWcuVmVyc2lvbkNvbmZpZy5SZWxlYXNlOlxyXG5cdFx0XHRcdC8v5a+55aSW54mI5pys55m75b2V5aSW572RXHJcblx0XHRcdFx0Q29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID0gQ29uZmlnLk5ldENvbmZpZy5IdHRwUmVxdWVzdFVybDtcclxuXHJcblx0XHRcdFx0Ly8gaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcblx0XHRcdFx0Ly8gXHRXeFV0aWxzLkxvZ2luKHRydWUpO1xyXG5cdFx0XHRcdC8vIH1lbHNle1xyXG5cdFx0XHRcdC8vIFx0dGhpcy5vblZlcnNpb25DaGVja2VkKCk7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblZlcnNpb25DaGVja2VkKCl7XHJcblx0XHR0aGlzLmxvYWRSZXMoKTtcclxuXHRcdC8vIHRoaXMubG9naW5HYW1lKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9wZW5Mb2dpblVJKCl7XHJcblx0XHRNYW5hZ2VyLkxvYWRpbmdQcm9ncmVzc01hbmFnZXIuSW5zdC5zaG93VWlQcm9ncmVzcyg1KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb3BlbkNob29zZVNlcnZpY2VVaSgpe1xyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbmZpZy5WaWV3S2l0LkNob29zZVNlcnZpY2UuS2V5KTtcclxuXHR9XHJcblxyXG5cdGxvYWRDb25maWcoKXtcclxuXHRcdC8v5ouJ5Y+W6YWN572uXHJcblx0XHQvLyBEYXRhLkNvbmZpZ0RhdGEuU2VuZFJlcShDb25maWcuRGF0YUNvbmZpZy5sb2NhbENvbmZpZ3MpO1xyXG5cdFx0RGF0YS5Db25maWdEYXRhLlNlbmRSZXEoW10pO1xyXG5cclxuXHRcdC8v5ouJ5Y+W5pys5Zyw6YWN572u77yM55uu5YmN55Sx5ZCO56uv5Y+R6YCB77yM5pqC5byD55SoXHJcblx0XHQvLyBEYXRhQ29uZmlnLmluc3RhbmNlLmluaXRDb25maWcodGhpcy5jcmVhdGUyZFNjZW5lLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkNvbmZpZ0xvYWRlZCgpe1xyXG5cdFx0dGhpcy5sb2dpbkdhbWUoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9naW5HYW1lKCkge1xyXG5cdFx0aWYoQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID09IENvbmZpZy5OZXRDb25maWcuTG9jYWxSZXF1ZXN0VXJsKXtcclxuXHRcdFx0dGhpcy50ZXN0TG9naW4oKTtcclxuXHRcdFx0Ly8gV3hVdGlscy5Mb2dpbih0cnVlKTtcclxuXHRcdH1lbHNlIGlmKENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9PSBDb25maWcuTmV0Q29uZmlnLkxvY2FsV2VjaGF0UmVxdWVzdFVybCAmJiBDb21tb24uaXNPbldlaXhpbigpKXtcclxuXHRcdFx0Ly8gV3hVdGlscy5Mb2dpbih0cnVlKTtcclxuXHRcdH1lbHNlIGlmKENvbW1vbi5pc09uV2VpeGluKCkpe1xyXG5cdFx0XHQvLyBXeFV0aWxzLkxvZ2luKHRydWUpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMudGVzdExvZ2luKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0ZXN0TG9naW4oKXtcclxuXHRcdGxldCBhY2M6c3RyaW5nO1xyXG5cdFx0bGV0IHRlbXBOYW1lID0gQ29uZmlnLk5ldENvbmZpZy5UZW1wTmFtZTtcclxuXHRcdGlmKHRlbXBOYW1lKXtcclxuXHRcdFx0YWNjID0gdGVtcE5hbWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Ly/pmo/mnLrluJDlj7fnmbvlvZXvvIzmlrnkvr/mtYvor5VcclxuXHRcdFx0YWNjID0gXCJ0ZW1wXCIgKyBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCByZXFkYXRhID0gbmV3IENvbmZpZy5Mb2dpblJlcURhdGEoYWNjKTtcclxuXHRcdERhdGEuTG9naW5EYXRhLlNlbmRSZXEocmVxZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uTG9naW5lZCgpe1xyXG5cdFx0dGhpcy5vcGVuTWFpblVpKCk7XHJcblx0fVxyXG5cclxuXHRvcGVuTWFpblVpKCl7XHJcblx0XHQvLyBpZighQ29uZmlnLlVJQ29uZmlnLkxvZ2luUGFja2FnZUxvYWRlZCB8fCAhQ29uZmlnLkRhdGFDb25maWcuSXNDb25maWdMb2FkZWQpIHtcclxuXHRcdC8vIFx0TGF5YS50aW1lci5vbmNlKDUwMCwgdGhpcywgdGhpcy5vcGVuTWFpblVpKTtcclxuXHRcdC8vIFx0cmV0dXJuO1xyXG5cdFx0Ly8gfTtcclxuXHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlNjZW5lRW50ZXJFaWQuTWFpbk1lbnUpO1xyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbmZpZy5WaWV3S2l0Lk1haW5NZW51LktleSk7XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVza0NvbGxpc2lvblNjcmlwdCBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlciB7XHJcblx0cHVibGljIGtpbmVtYXRpY1Nwcml0ZTpMYXlhLlNwcml0ZTNEO1xyXG5cdF9pc0hpdCA9IGZhbHNlO1xyXG5cclxuXHRnZXQgSXNIaXQoKXtcclxuXHRcdHJldHVybiB0aGlzLl9pc0hpdDtcclxuXHR9XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJTdGF0dXMoKXtcclxuXHRcdHRoaXMuX2lzSGl0ID0gZmFsc2U7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJFbnRlcihvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdFx0aWYgKG90aGVyLm93bmVyID09PSB0aGlzLmtpbmVtYXRpY1Nwcml0ZSl7XHJcblx0XHRcdHRoaXMuX2lzSGl0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlclN0YXkob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlckV4aXQob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uRW50ZXIoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHRcdGlmIChjb2xsaXNpb24ub3RoZXIub3duZXIgPT09IHRoaXMua2luZW1hdGljU3ByaXRlKXtcclxuXHRcdFx0dGhpcy5faXNIaXQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25TdGF5KGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvbkV4aXQoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHR9XHJcblxyXG59IiwiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9Db3JlL0NvcmVcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyBMb2dpYyBmcm9tIFwiLi9Mb2dpY1wiO1xyXG5cclxuY29uc3QgREVTS19QT1MgPSBuZXcgTGF5YS5WZWN0b3IzKDIuNSwgNCwgLTUpO1xyXG5jb25zdCBERVNLX0VORF9QT1MgPSBuZXcgTGF5YS5WZWN0b3IzKDIuNSwgLTEsIC01KTtcclxuY29uc3QgSEFORF9QT1MgPSBuZXcgTGF5YS5WZWN0b3IzKC0zLCAtMiwgLTUpO1xyXG5jb25zdCBIQU5EX0VORF9QT1MgPSBuZXcgTGF5YS5WZWN0b3IzKDAsIC0yLCAtNSk7XHJcbmNvbnN0IERFU0tfU0laRSA9IG5ldyBMYXlhLlZlY3RvcjMoMC4yLCAzLCAyKTtcclxuY29uc3QgSEFORF9TSVpFID0gbmV3IExheWEuVmVjdG9yMyg2LCAwLjUsIDAuNSk7XHJcbi8vc3BlZWRcclxuY29uc3QgU1BFRURfRk9SV0FSRF9ERVNLID0gbmV3IExheWEuVmVjdG9yMygwLCAtMTAsIDApO1xyXG5jb25zdCBTUEVFRF9CQUNLX0RFU0sgPSBuZXcgTGF5YS5WZWN0b3IzKDAsIDEwLCAwKTtcclxuY29uc3QgU1BFRURfSEFORCA9IDAuMDM7XHJcblxyXG5sZXQga25vY2tfdGltZSA9IDA7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JhYkxvZ2ljIGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVyIHtcclxuICAgIElzSW5pdGVkID0gZmFsc2U7XHJcbiAgICBWZGlyID0gbmV3IExheWEuVmVjdG9yMygpO1xyXG4gICAgRGVza1Bvc2l0aW9uID0gbmV3IExheWEuVmVjdG9yMygpO1xyXG4gICAgR1NjZW5lOkxheWEuU2NlbmUzRDtcclxuICAgIEhhbmQ6TGF5YS5NZXNoU3ByaXRlM0Q7XHJcbiAgICBIYW5kU3RhdGU6c3RyaW5nO1xyXG4gICAgRGVzazpMYXlhLk1lc2hTcHJpdGUzRDtcclxuICAgIERlc2tDbGFzczpDb3JlLlJpZ2lkT2JqZWN0O1xyXG4gICAgSGFuZENsYXNzOkNvcmUuUmlnaWRPYmplY3Q7XHJcbiAgICBkZXNrU2NyaXB0OkxvZ2ljLkRlc2tDb2xsaXNpb25TY3JpcHQ7XHJcbiAgICBoYW5kU2NyaXB0OkxvZ2ljLkhhbmRDb2xsaXNpb25TY3JpcHQ7XHJcbiAgICBwcml2YXRlIHRpbWVMaW5lOkxheWEuVGltZUxpbmUgPSBuZXcgTGF5YS5UaW1lTGluZSgpO1xyXG5cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICB0aGlzLkdTY2VuZSA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lIGFzIExheWEuU2NlbmUzRDtcclxuICAgICAgICB0aGlzLkhhbmQgPSB0aGlzLkdTY2VuZS5hZGRDaGlsZChuZXcgTGF5YS5NZXNoU3ByaXRlM0QoTGF5YS5QcmltaXRpdmVNZXNoLmNyZWF0ZUJveChIQU5EX1NJWkUueCwgSEFORF9TSVpFLnksIEhBTkRfU0laRS56KSkpIGFzIExheWEuTWVzaFNwcml0ZTNEO1xyXG4gICAgICAgIHRoaXMuRGVzayA9IHRoaXMuR1NjZW5lLmFkZENoaWxkKG5ldyBMYXlhLk1lc2hTcHJpdGUzRChMYXlhLlByaW1pdGl2ZU1lc2guY3JlYXRlQm94KERFU0tfU0laRS54LCBERVNLX1NJWkUueSwgREVTS19TSVpFLnopKSkgYXMgTGF5YS5NZXNoU3ByaXRlM0Q7XHJcbiAgICAgICAgdGhpcy5IYW5kLnRyYW5zZm9ybS5wb3NpdGlvbiA9IEhBTkRfUE9TXHJcbiAgICAgICAgdGhpcy5EZXNrLnRyYW5zZm9ybS5wb3NpdGlvbiA9IERFU0tfUE9TXHJcblxyXG4gICAgICAgIHRoaXMuYWRkUGh5c2ljcyh0aGlzLkhhbmQsIEhBTkRfU0laRSk7XHJcbiAgICAgICAgdGhpcy5hZGRQaHlzaWNzKHRoaXMuRGVzaywgREVTS19TSVpFKTtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcyA9IG5ldyBDb3JlLlJpZ2lkT2JqZWN0KHRoaXMuRGVzayk7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MgPSBuZXcgQ29yZS5SaWdpZE9iamVjdCh0aGlzLkhhbmQpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29sbGlzaW9uU2NyaXB0KCk7XHJcbiAgICAgICAgLy8gTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLmtub2NrT25jZSk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm1vdmVIYW5kKTtcclxuICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuRE9VQkxFX0NMSUNLLCB0aGlzLCB0aGlzLnJlc3RhcnQpO1xyXG5cclxuICAgICAgICB0aGlzLklzSW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJlc2V0VmVjKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaW1lckxpbmUoKTtcclxuICAgICAgICB0aGlzLm1vdmVEZXNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUGh5c2ljcyh0YXJnZXQ6TGF5YS5TcHJpdGUzRCwgc2l6ZTpMYXlhLlZlY3RvcjMpe1xyXG4gICAgICAgIGxldCByaWdpZEJvZHk6TGF5YS5SaWdpZGJvZHkzRCA9IHRhcmdldC5hZGRDb21wb25lbnQoTGF5YS5SaWdpZGJvZHkzRCk7Ly9SaWdpZGJvZHkzROWPr+S4jlN0YXRpY0NvbGxpZGVy5ZKMUmlnaWRCb2R5M0TkuqfnlJ/norDmkp5cclxuICAgICAgICByaWdpZEJvZHkuY29sbGlkZXJTaGFwZSA9IG5ldyBMYXlhLkJveENvbGxpZGVyU2hhcGUoc2l6ZS54LCBzaXplLnksIHNpemUueik7XHJcbiAgICAgICAgcmlnaWRCb2R5LmdyYXZpdHkgPSBMYXlhLlZlY3RvcjMuX1pFUk87XHJcbiAgICAgICAgcmlnaWRCb2R5LmlzVHJpZ2dlciA9IHRydWU7XHJcbiAgICAgICAgcmlnaWRCb2R5LmlzS2luZW1hdGljID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDb2xsaXNpb25TY3JpcHQoKXtcclxuICAgICAgICB0aGlzLmRlc2tTY3JpcHQgPSB0aGlzLkRlc2suYWRkQ29tcG9uZW50KExvZ2ljLkRlc2tDb2xsaXNpb25TY3JpcHQpIGFzIExvZ2ljLkRlc2tDb2xsaXNpb25TY3JpcHQ7XHJcbiAgICAgICAgdGhpcy5kZXNrU2NyaXB0LmtpbmVtYXRpY1Nwcml0ZSA9IHRoaXMuSGFuZDtcclxuICAgICAgICB0aGlzLmhhbmRTY3JpcHQgPSB0aGlzLkhhbmQuYWRkQ29tcG9uZW50KExvZ2ljLkhhbmRDb2xsaXNpb25TY3JpcHQpIGFzIExvZ2ljLkhhbmRDb2xsaXNpb25TY3JpcHQ7XHJcbiAgICAgICAgdGhpcy5oYW5kU2NyaXB0LmtpbmVtYXRpY1Nwcml0ZSA9IHRoaXMuRGVzaztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ29tcGxldGUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAga25vY2tfdGltZSsrO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGltZUxpbmUgY29tcGxldGUhISEhXCIsIGtub2NrX3RpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25MYWJlbChsYWJlbDpTdHJpbmcpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxhYmVsTmFtZTpcIiArIGxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVRpbWVyTGluZSgpe1xyXG4gICAgICAgIHRoaXMudGltZUxpbmUub24oTGF5YS5FdmVudC5DT01QTEVURSx0aGlzLHRoaXMub25Db21wbGV0ZSk7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5vbihMYXlhLkV2ZW50LkxBQkVMLCB0aGlzLCB0aGlzLm9uTGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRWZWMoKXtcclxuICAgICAgICB0aGlzLlZkaXIueCA9IERFU0tfUE9TLng7XHJcbiAgICAgICAgdGhpcy5WZGlyLnkgPSBERVNLX1BPUy55O1xyXG4gICAgICAgIHRoaXMuVmRpci56ID0gREVTS19QT1MuelxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUga25vY2tPbmNlKCl7XHJcbiAgICAgICAgdGhpcy5yZXNldFZlYygpO1xyXG4gICAgICAgIHRoaXMudGltZUxpbmUucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmFkZEtub2NrKCk7XHJcbiAgICAgICAgdGhpcy5hZGRLbm9jaygxKTtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLnBsYXkoMCxmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRTdGF5KF9zdGF5VGltZT86bnVtYmVyKXtcclxuICAgICAgICBfc3RheVRpbWUgPSBfc3RheVRpbWU/IF9zdGF5VGltZSAqIDEwMDA6IDA7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5hZGRMYWJlbChcInN0YXlcIiwwKS50byh0aGlzLlZkaXIsIHt5OkRFU0tfUE9TLnl9LCBfc3RheVRpbWUsIG51bGwsIDApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRLbm9jayhfZGVsdGFUaW1lPzpudW1iZXIpe1xyXG4gICAgICAgIF9kZWx0YVRpbWUgPSBfZGVsdGFUaW1lPyBfZGVsdGFUaW1lICogMTAwMDogMDtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lXHJcbiAgICAgICAgICAgIC50byh0aGlzLlZkaXIse3k6REVTS19FTkRfUE9TLnl9LDIwMCxudWxsLF9kZWx0YVRpbWUpXHJcbiAgICAgICAgICAgIC50byh0aGlzLlZkaXIse3k6REVTS19QT1MueX0sMjAwLG51bGwsMClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc3RhcnQoKXtcclxuICAgICAgICB0aGlzLmRlc2tTY3JpcHQuY2xlYXJTdGF0dXMoKTtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5TdGF0ZS5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuSURFTCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGVzaygpO1xyXG4gICAgICAgIHRoaXMucmVzZXRIYW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRGVzaygpe1xyXG4gICAgICAgIC8vIHRoaXMuZGVza0Rvd24oKTtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5TdGF0ZS5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9GT1JXQVJEKTtcclxuICAgICAgICB0aGlzLnJlc2V0VmVjKCk7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuYWRkS25vY2soKTtcclxuICAgICAgICB0aGlzLmFkZEtub2NrKDEpO1xyXG4gICAgICAgIHRoaXMudGltZUxpbmUucGxheSgwLHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXREZXNrKCl7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3MuT2JqLnRyYW5zZm9ybS5wb3NpdGlvbiA9IERFU0tfUE9TO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcERlc2soKXtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3MuU3RhdGUuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLlNUT1ApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVza0Rvd24oKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB2ZWMgPSB0aGlzLkRlc2tDbGFzcy5PYmoudHJhbnNmb3JtLnBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy55IC09IDAuMztcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5PYmoudHJhbnNmb3JtLnBvc2l0aW9uID0gdmVjO1xyXG5cclxuICAgICAgICBpZih2ZWMueSA8PSBERVNLX0VORF9QT1MueSl7XHJcbiAgICAgICAgICAgIHRoaXMuRGVza0NsYXNzLlN0YXRlLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0JBQ0spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlc2tVcCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZlYyA9IHRoaXMuRGVza0NsYXNzLk9iai50cmFuc2Zvcm0ucG9zaXRpb247XHJcbiAgICAgICAgdmVjLnkgKz0gMC4zO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLk9iai50cmFuc2Zvcm0ucG9zaXRpb24gPSB2ZWM7XHJcblxyXG4gICAgICAgIGlmKHZlYy55ID49IERFU0tfUE9TLnkpe1xyXG4gICAgICAgICAgICB0aGlzLkRlc2tDbGFzcy5TdGF0ZS5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9GT1JXQVJEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGVzaygpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZGVza1NjcmlwdC5Jc0hpdCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXREZXNrKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcERlc2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLkRlc2tDbGFzcy5TdGF0ZS5jdXJTdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbmZpZy5TdGF0ZUNvbmZpZy5JREVMOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0ZPUldBUkQ6XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRlc2tEb3duKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkRlc2tDbGFzcy5PYmoudHJhbnNmb3JtLnBvc2l0aW9uID0gdGhpcy5WZGlyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0JBQ0s6XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRlc2tVcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVIYW5kKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5IYW5kQ2xhc3MuU3RhdGUuY3VyU3RhdGUpO1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYodGhpcy5IYW5kQ2xhc3MuU3RhdGUuY3VyU3RhdGUgPT0gQ29uZmlnLlN0YXRlQ29uZmlnLlNUT1ApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5IYW5kQ2xhc3MuU3RhdGUuY3VyU3RhdGUgPT0gQ29uZmlnLlN0YXRlQ29uZmlnLklERUwpe1xyXG4gICAgICAgICAgICB0aGlzLkhhbmRDbGFzcy5TdGF0ZS5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9GT1JXQVJEKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZEZvcndhcmQoKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB2ZWMgPSB0aGlzLkhhbmRDbGFzcy5PYmoudHJhbnNmb3JtLnBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy54ICs9IFNQRUVEX0hBTkQgKiBMYXlhLnRpbWVyLmRlbHRhO1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLk9iai50cmFuc2Zvcm0ucG9zaXRpb24gPSB2ZWM7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSGFuZENsYXNzLk9iai50cmFuc2Zvcm0ucG9zaXRpb24ueCA+PSBIQU5EX0VORF9QT1MueCl7XHJcbiAgICAgICAgICAgIHRoaXMuSGFuZENsYXNzLlN0YXRlLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0JBQ0spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRCYWNrKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLkhhbmRDbGFzcy5PYmoudHJhbnNmb3JtLnBvc2l0aW9uLnggPD0gSEFORF9QT1MueCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRIYW5kKCk7XHJcbiAgICAgICAgICAgIC8v5Yiw6L6+57uI54K55Yqg5YiGXHJcbiAgICAgICAgICAgIERhdGEuUGxheWVyRGF0YS5Qb2ludCArPSAxMDA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7lvpfliIbvvJpcIixEYXRhLlBsYXllckRhdGEuUG9pbnQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLkhhbmRDbGFzcy5PYmoudHJhbnNmb3JtLnBvc2l0aW9uLnggPCBERVNLX1BPUy54KXtcclxuICAgICAgICAgICAgdGhpcy5IYW5kQ2xhc3MuU3RhdGUuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLkJBQ0tfUEFTU0VEKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2ZWMgPSB0aGlzLkhhbmRDbGFzcy5PYmoudHJhbnNmb3JtLnBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy54IC09IFNQRUVEX0hBTkQgKiBMYXlhLnRpbWVyLmRlbHRhOztcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5PYmoudHJhbnNmb3JtLnBvc2l0aW9uID0gdmVjO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRIYW5kKCl7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MuT2JqLnRyYW5zZm9ybS5wb3NpdGlvbiA9IEhBTkRfUE9TO1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLlN0YXRlLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5JREVMKTtcclxuICAgICAgICB0aGlzLmVuYWJsZUhhbmRHcmF2aXR5KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BIYW5kKCl7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MuU3RhdGUuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLlNUT1ApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5hYmxlSGFuZEdyYXZpdHkoX29wZW46Ym9vbGVhbil7XHJcbiAgICAgICAgaWYodGhpcy5IYW5kQ2xhc3MuUmlnaWQzRC5pc0tpbmVtYXRpYyA9PSAhX29wZW4pIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MuUmlnaWQzRC5pc0tpbmVtYXRpYyA9ICFfb3BlbjtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5SaWdpZDNELmdyYXZpdHkgPSBfb3Blbj8gbmV3IExheWEuVmVjdG9yMygwLCAtMTAsIDApOiBMYXlhLlZlY3RvcjMuX1pFUk87XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkhhbmRIaXQoKXtcclxuICAgICAgICBEYXRhLlBsYXllckRhdGEuUG9pbnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RvcEhhbmQoKTtcclxuICAgICAgICB0aGlzLmVuYWJsZUhhbmRHcmF2aXR5KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmQoKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLmRlc2tTY3JpcHQuSXNIaXQpe1xyXG4gICAgICAgICAgICB0aGlzLm9uSGFuZEhpdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuSGFuZENsYXNzLlN0YXRlLmN1clN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLlN0YXRlQ29uZmlnLklERUw6XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLlN0YXRlQ29uZmlnLk1PVkVfRk9SV0FSRDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZEZvcndhcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLlN0YXRlQ29uZmlnLk1PVkVfQkFDSzpcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZEJhY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLlN0YXRlQ29uZmlnLkJBQ0tfUEFTU0VEOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVXBkYXRlKCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+avj+S4gOW4p+aXtumXtO+8micsTGF5YS50aW1lci5kZWx0YSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXNrKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYW5kQ29sbGlzaW9uU2NyaXB0IGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVyIHtcclxuXHRwdWJsaWMga2luZW1hdGljU3ByaXRlOkxheWEuU3ByaXRlM0Q7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyRW50ZXIob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyU3RheShvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdFxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyRXhpdChvdGhlcjpMYXlhLlBoeXNpY3NDb21wb25lbnQpOnZvaWQge1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvbkVudGVyKGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIueisOaSnu+8gVwiKTtcclxuXHRcdGlmIChjb2xsaXNpb24ub3RoZXIub3duZXIgPT09IHRoaXMua2luZW1hdGljU3ByaXRlKXtcclxuXHRcdFx0Ly8gKHRoaXMub3duZXIuZ2V0Q29tcG9uZW50KExheWEuUmlnaWRib2R5M0QpIGFzIExheWEuUmlnaWRib2R5M0QpLmdyYXZpdHkgPSBuZXcgTGF5YS5WZWN0b3IzKDAsIC0xMCwgMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvblN0YXkoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uRXhpdChjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdH1cclxuXHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL0dyYWJMb2dpYyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGVza0NvbGxpc2lvblNjcmlwdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSGFuZENvbGxpc2lvblNjcmlwdCc7XHJcbiIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tIFwiLi9HYW1lU2NlbmVcIjtcclxuXHJcbmNsYXNzIE1haW4ge1xyXG5cdHByaXZhdGUgYW5pbWF0aW9uczpBcnJheTxzdHJpbmc+ID0gWydhdHRhY2sxJywgJ2F0dGFjazInLCAnYXR0YWNrMycsICd3aW4nXTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcclxuXHRcdGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuXHRcdGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHRcdC8v5omL5py65LiOUEPpgILphY3kuI3lkIxcclxuXHRcdGlmKExheWEuQnJvd3Nlci5vblBDKXtcclxuXHRcdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBMYXlhLlN0YWdlLlNDQUxFX1NIT1dBTEw7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBMYXlhLlN0YWdlLlNDQUxFX0ZJWEVEX1dJRFRIO1xyXG5cdFx0fVxyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gTGF5YS5TdGFnZS5TQ1JFRU5fVkVSVElDQUw7XHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlO1xyXG5cclxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCkge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG5cclxuXHRvbkNvbmZpZ0xvYWRlZCgpIHtcclxuXHRcdE1hbmFnZXIuU2NlbmVNYW5hZ2VyLmNyZWF0ZTNkU2NlbmUoKTtcclxuXHJcblx0XHQvLyBDb21tb24ubG9hZEFsbFN1YnBhY2thZ2VzKHRoaXMsIHRoaXMub25TdWJQYWNrYWdlTG9hZGVkKTtcclxuXHR9XHJcblxyXG5cdG9uU3ViUGFja2FnZUxvYWRlZCgpe1xyXG5cdFx0TWFuYWdlci5TY2VuZU1hbmFnZXIuY3JlYXRlM2RTY2VuZSgpO1xyXG5cdH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG4iLCLvu79pbXBvcnQgKiBhcyBDb25maWcgZnJvbSAnLi4vQ29uZmlnL0NvbmZpZyc7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlTWFuYWdlciBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlciB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9pbnN0OkJhc2VNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBfbXNnVHlwZTpudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0KCl7XHJcbiAgICAgICAgaWYoIU1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIGNyZWFlIGEgc2NlbmUgZmlyc3QhJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLl9pbnN0KXtcclxuICAgICAgICAgICAgdGhpcy5faW5zdCA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lLmdldENvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuX2luc3Qpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdCA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lLmFkZENvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5cclxuLy/ngrnlh7vnibnmlYhcclxuZXhwb3J0IGNsYXNzIENsaWNrRWZmZWN0TWFuYWdlcntcclxuICAgIHByaXZhdGUgc3RhdGljIFRvdWNoQ29tOmZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHN0YXRpYyBJbml0KCl7XHJcbiAgICAgICAgaWYodGhpcy5Ub3VjaENvbSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBncm9vdEluc3QgPSBmZ3VpLkdSb290Lmluc3Q7XHJcblx0XHR0aGlzLlRvdWNoQ29tID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0RnJvbVVSTCgndWk6Ly9NYWluVUkvQ29tcG9uZW50X2RpYW5qaScpLmFzQ29tO1xyXG5cdFx0Z3Jvb3RJbnN0LmFkZENoaWxkKHRoaXMuVG91Y2hDb20pO1xyXG5cdFx0dGhpcy5Ub3VjaENvbS5zb3J0aW5nT3JkZXIgPSBDb25maWcuVUlDb25maWcuU29ydGluZ09yZGVyLkNsaWNrRWZmZWN0O1xyXG4gICAgICAgIC8vIHRoaXMuVG91Y2hDb20ubm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xyXG4gICAgICAgIC8vIHRoaXMuVG91Y2hDb20uZGlzcGxheU9iamVjdC5zZXRTaWJsaW5nSW5kZXgodGhpcy5Ub3VjaENvbS5ub2RlLnBhcmVudC5jaGlsZHJlbkNvdW50KTtcclxuXHJcbiAgICAgICAgZ3Jvb3RJbnN0LmRpc3BsYXlPYmplY3Qub24oTGF5YS5FdmVudC5DTElDSywgdGhpcy5wbGF5Q2xpY2tFZmZlY3QsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7Y2MuRXZlbnQuRXZlbnRUb3VjaH0gZXZ0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwbGF5Q2xpY2tFZmZlY3QoZXZ0KXtcclxuICAgICAgICBsZXQgcG9zID0gZXZ0LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5Ub3VjaENvbS5zZXRYWShwb3MueCwgZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHBvcy55KTtcclxuICAgICAgICB0aGlzLlRvdWNoQ29tLmdldFRyYW5zaXRpb24oJ0VmZmVjdF9UJykucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlKCl7XHJcbiAgICAgICAgdGhpcy5Ub3VjaENvbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gZmd1aS5HUm9vdC5pbnN0Lm5vZGUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93KCl7XHJcbiAgICAgICAgdGhpcy5Ub3VjaENvbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCB7RGV2UmVxQm9keSwgTG9naW5EYXRhfSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlciB7XHJcbiAgICBzdGF0aWMgSW5zdDpEYXRhTWFuYWdlcjtcclxuICAgIHByaXZhdGUgX2lzQmFzZUJvZHlJbml0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaXNCb2R5SW5pdGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgLy8gRGF0YS5EZXZSZXFCb2R5LkluaXRCYXNlQm9keSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEJhc2VCb2R5KCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkxvZ2luU3VjY2VzcywgdGhpcy5vbkxvZ2luU3VjY2Vzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0QmFzZUJvZHkoKXtcclxuICAgICAgICBpZih0aGlzLl9pc0Jhc2VCb2R5SW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8v5LiO55m75b2V5peg5YWz55qE5o6l5Y+j55u05o6l5Yib5bu6XHJcbiAgICAgICAgLy/phY3nva5cclxuICAgICAgICBEYXRhLkNvbmZpZ0RhdGEuUmVxQm9keSA9IG5ldyBEYXRhLkh0dHBSZXFib2R5QmFzZSgwLCAxMDAwMik7ICAgXHJcbiAgICAgICAgLy/nmbvlvZVcclxuICAgICAgICBEYXRhLkxvZ2luRGF0YS5SZXFCb2R5ID0gbmV3IERhdGEuSHR0cFJlcWJvZHlCYXNlKDAsIDEwMDAzKTsgXHJcblxyXG4gICAgICAgIHRoaXMuX2lzQmFzZUJvZHlJbml0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Mb2dpblN1Y2Nlc3MoKXtcclxuICAgICAgICB0aGlzLmluaXREZXZCb2RpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXREZXZCb2RpZXMoKXtcclxuICAgICAgICAvL+S7peS4i+ivt+axguS9k+mcgOimgeeZu+W9leaJjeWPr+WIm+W7ulxyXG4gICAgICAgIGlmKHRoaXMuX2lzQm9keUluaXRlZCB8fCAhRGF0YS5Mb2dpbkRhdGEuU2Vzc2lvbikgcmV0dXJuO1xyXG4gICAgICAgIC8vIzEwODAyIOiOt+WPlummluadgOamnFxyXG4gICAgICAgIERhdGEuVXBncmFkZURhdGEuUmVxQm9keSA9IG5ldyBEZXZSZXFCb2R5KDgsIDEwODAyKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuX2lzQm9keUluaXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbn0gIiwiaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG4vL+iPiuiKseeuoeeQhlxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0ljb25NYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlciB7XHJcbiAgICBzdGF0aWMgSW5zdDpMb2FkaW5nSWNvbk1hbmFnZXI7XHJcbiAgICBwdWJsaWMgSXNJbml0ZWQ6Qm9vbGVhbjtcclxuICAgIHB1YmxpYyBDb250cm9sbGVyOlVJLkxvYWRpbmdDb250cm9sbGVyO1xyXG5cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICB0aGlzLkluaXQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgSW5pdCgpe1xyXG4gICAgICAgIGlmKHRoaXMuSXNJbml0ZWQgPT0gdHJ1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLklzSW5pdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyID0gTWFuYWdlci5VSU1hbmFnZXIub3BlbkNvbnRyb2xsZXIoVUkuTG9hZGluZ0NvbnRyb2xsZXIpIGFzIFVJLkxvYWRpbmdDb250cm9sbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIFNob3dMb2FkaW5nKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlci5zaG93TG9hZGluZygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBIaWRlTG9hZGluZygpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlci5oaWRlTG9hZGluZygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vVUkvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tICcuLi9NYW5hZ2VyL01hbmFnZXInO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vQ29tbW9uL0NvbW1vbic7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5cclxuLy/nmbvlvZXov5vluqbnrqHnkIZcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdQcm9ncmVzc01hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2Vye1xyXG4gICAgc3RhdGljIEluc3Q6TG9hZGluZ1Byb2dyZXNzTWFuYWdlcjtcclxuICAgIHB1YmxpYyBJc0luaXRlZDpCb29sZWFuO1xyXG4gICAgcHVibGljIENvbnRyb2xsZXI6VUkuTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlcjtcclxuXHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgdGhpcy5Jbml0KCk7XHJcbiAgICAgICAgLy8gdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLlNpbVByb2dyZXNzRW5kLCB0aGlzLm9uTG9hZGluZ0NvbXBsZXRlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgSW5pdCgpe1xyXG4gICAgICAgIGlmKHRoaXMuSXNJbml0ZWQgPT0gdHJ1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLklzSW5pdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyID0gTWFuYWdlci5VSU1hbmFnZXIub3BlbkNvbnRyb2xsZXIoVUkuTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlcikgYXMgVUkuTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlcjtcclxuXHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2ltUHJvZ3Jlc3NFbmQsIHRoaXMub25Mb2FkaW5nQ29tcGxldGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dVaVByb2dyZXNzKHByb2dyZXNzOm51bWJlciwgcGtnTmFtZT86c3RyaW5nKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlci5zaG93VWlQcm9ncmVzcyhwcm9ncmVzcywgcGtnTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvd1d4TG9naW4oKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIuc2hvd1d4TG9naW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q29uZmlnUHJvZ3Jlc3MoKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlci5zaG93Q29uZmlnUHJvZ3Jlc3MoKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZGluZ0NvbXBsZXRlKCl7XHJcbiAgICAgICAgLy/liqDovb3miJDlip/lkI7lup/pmaToh6rlt7FcclxuICAgICAgICBMb2NhbENvbmZpZy5Jc1NpbVByb2dyZXNzRW5kID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLklzSW5pdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL0Jhc2VNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9DbGlja0VmZmVjdE1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvYWRpbmdJY29uTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ1Byb2dyZXNzTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTmV0TWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vUm9sZUJhc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL1N0YXRlQmFzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2NlbmVNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9TcGF3bk1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1RpbWVyTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vVUlNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9WZXJzaW9uTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGF0YU1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1Bvb2xNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Sb2xlTWFuYWdlcic7XHJcbiIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuLy/mmK/lkKbnrKzkuIDmrKHov57mjqVcclxubGV0IGlzRmlyc3RTZW5kID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwTWFuYWdlciBleHRlbmRzIE1hbmFnZXIuQmFzZU1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBfaHI6WE1MSHR0cFJlcXVlc3Q7XHJcbiAgICBwcml2YXRlIF9yZXFLZXk6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2htTWFwOkNvbmZpZy5EaWN0aW9uYXJ5PEh0dHBNYW5hZ2VyPiA9IHt9O1xyXG4gICAgcHJvdGVjdGVkIERhdGE6RGF0YS5IdHRwUmVxYm9keUJhc2U7XHJcbiAgICBwcml2YXRlIENhbGxiYWNrOkZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBDb25uZWN0VGltZXM6bnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBJc1Nob3dMb2FkaW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0Nvbm5lY3Rpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICAvLyBEYXRhLkRldlJlcUJvZHkuSW5pdEJhc2VCb2R5KCk7XHJcbiAgICAgICAgLy8gdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkxvZ2luU3VjY2VzcywgdGhpcy5pbml0RGV2Qm9kaWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0IFJlcXVlc3RVcmwodXJsOnN0cmluZyl7XHJcbiAgICAgICAgQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIENvbm5lY3QocmVxa2V5OnN0cmluZywgZGF0YTpEYXRhLkh0dHBSZXFib2R5QmFzZSwgY2FsbGJhY2s/OkZ1bmN0aW9uLCBpc1Nob3dMb2FkaW5nPzpib29sZWFuLCBJc0dtPzpib29sZWFuKSB7XHJcbiAgICAgICAgaWYoIWRhdGEpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5faHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB0aGlzLl9yZXFLZXkgPSByZXFrZXk7XHJcblxyXG4gICAgICAgIGlmKElzR20pXHJcbiAgICAgICAgICAgIHRoaXMuX2hyLm9wZW4oXCJwb3N0XCIsIENvbmZpZy5OZXRDb25maWcuR01VcmwsIHRydWUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5faHIub3BlbihcInBvc3RcIiwgQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsLCB0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9oci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSB0aGlzLk9uSHR0cFJlcXVlc3RDb21wbGV0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8v6LaF5pe2XHJcbiAgICAgICAgdGhpcy5faHIudGltZW91dCA9IDUwMDA7XHJcbiAgICAgICAgdGhpcy5faHIub250aW1lb3V0ID0gdGhpcy5PblRpbWVvdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9oci5vbmVycm9yID0gdGhpcy5Pbkh0dHBSZXF1ZXN0RXJyb3IuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYodHlwZW9mKGRhdGEuUmVxRGF0YSkgPT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICBkYXRhLlJlcURhdGEgPSBKU09OLnBhcnNlKGRhdGEuUmVxRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5DYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuSXNTaG93TG9hZGluZyA9IGlzU2hvd0xvYWRpbmc7XHJcbiAgICAgICAgLy/ph43ov57mrKHmlbBcclxuICAgICAgICB0aGlzLkNvbm5lY3RUaW1lcysrO1xyXG4gICAgICAgIC8v6LaF5pe25q+r56eS5pWwXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5faHIudGltZW91dCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hyLnJlc3BvbnNlVHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIGlmKHR5cGVvZiBkYXRhLlJlcURhdGEgIT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICBkYXRhLlJlcURhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhLlJlcURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAvL+aYr+WQpuato+WcqOi/nuaOpe+8jOWMheaLrOi2heaXtlxyXG4gICAgICAgIHRoaXMuSXNDb25uZWN0aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy/oj4roirFcclxuICAgICAgICBpZihpc0ZpcnN0U2VuZCl7XHJcbiAgICAgICAgICAgIGlzRmlyc3RTZW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIE1hbmFnZXIuTG9hZGluZ0ljb25NYW5hZ2VyLkluaXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGlzU2hvd0xvYWRpbmcgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIE1hbmFnZXIuTG9hZGluZ0ljb25NYW5hZ2VyLkluc3QuU2hvd0xvYWRpbmcoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgTWFuYWdlci5Mb2FkaW5nSWNvbk1hbmFnZXIuSW5zdC5IaWRlTG9hZGluZygpO1xyXG5cclxuICAgICAgICAgICAgLy8z56eS5ZCO5YaN6L2s6I+K6IqxXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5MYXRlU2hvd0xvYWRpbmcuYmluZCh0aGlzKSwgMzAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uTmV0SHR0cENvbm5lY3RFaWQuQ29ubmVjdEJlZ2luKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgTGF0ZVNob3dMb2FkaW5nKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuSXNDb25uZWN0aW5nID09IHRydWUpe1xyXG4gICAgICAgICAgICBNYW5hZ2VyLkxvYWRpbmdJY29uTWFuYWdlci5JbnN0LlNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6K+35rGC6ZSZ6K+vXHJcblx0T25IdHRwUmVxdWVzdEVycm9yKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICAgICAgdGhpcy50cnlBdXRvUmVjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8v6LaF5pe2XHJcbiAgICBPblRpbWVvdXQoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgICAgICB0aGlzLnRyeUF1dG9SZWNvbm5lY3QoKTtcclxuXHR9XHJcblxyXG5cdE9uSHR0cFJlcXVlc3RQcm9ncmVzcyhlKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuWKoOi9vei/m+W6pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj5cIixlLmxvYWRlZCAvIGUudG90YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlbW92ZVJlcXVlc3QoKXtcclxuICAgICAgICAvL+enu+mZpOW9k+WJjei/nuaOpe+8jOW/hemhu+WFiOiuvue9rui/nuaOpeeKtuaAgUlzQ29ubmVjdGluZ+S4umZhbHNl5ZCO5YaN6LCD55SoXHJcbiAgICAgICAgaWYodGhpcy5Jc0Nvbm5lY3RpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5faHIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuRGF0YSA9IG51bGw7XHJcbiAgICAgICAgSHR0cE1hbmFnZXIuX2htTWFwW3RoaXMuX3JlcUtleV0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJ5QXV0b1JlY29ubmVjdCgpe1xyXG4gICAgICAgIC8v562W55Wl77yaMC4156eS6YeN6L+e5LiA5qyh77yM6YeN6K+VNeasoVxyXG4gICAgICAgIGlmKHRoaXMuQ29ubmVjdFRpbWVzIDwgMyl7XHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZSg1MDAsIHRoaXMsIHRoaXMuYXV0b1JlQ29ubmVjdCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Nvbm5lY3RXaW5kb3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhdXRvUmVDb25uZWN0KCl7XHJcbiAgICAgICAgdGhpcy5Db25uZWN0KCcnLCB0aGlzLkRhdGEsIHRoaXMuQ2FsbGJhY2ssIHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHNob3dDb25uZWN0V2luZG93KCl7XHJcbiAgICAgICAgdGhpcy5Jc0Nvbm5lY3RpbmcgPSBmYWxzZTtcclxuICAgICAgICBNYW5hZ2VyLkxvYWRpbmdJY29uTWFuYWdlci5JbnN0LkhpZGVMb2FkaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIGxldCBwb3B1cERhdGEgPSB7XHJcbiAgICAgICAgLy8gICAgIENvbnRlbnQ6IENvbmZpZy5Mb2NhbENvbnRlbnQuTmV0RXJyb3IsXHJcbiAgICAgICAgLy8gICAgIFllc0J0bkNvbnRlbnQ6Q29uZmlnLkxvY2FsQ29udGVudC5ZZXMsXHJcbiAgICAgICAgLy8gICAgIC8vIEJ0blN0eWxlOiAxLFxyXG4gICAgICAgIC8vICAgICBIYXNCZzogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgIFllc0J0bkNhbGxiYWNrOnRoaXMuQ29ubmVjdC5iaW5kKHRoaXMsICcnLCB0aGlzLkRhdGEsIHRoaXMuQ2FsbGJhY2ssIHRoaXMuSXNTaG93TG9hZGluZylcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50ID0gW0NvbmZpZy5Mb2NhbENvbnRlbnQuTmV0RXJyb3JdO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBNYW5hZ2VyLlVJTWFuYWdlci5vcGVuQ29uZmlybVdpbmRvdyhcclxuICAgICAgICAgICAgY29udGVudCwgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICAgICAgc2VsZi5Db25uZWN0KCcnLCBzZWxmLkRhdGEsIHNlbGYuQ2FsbGJhY2ssIHNlbGYuSXNTaG93TG9hZGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHRPbkh0dHBSZXF1ZXN0Q29tcGxldGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hyLnJlYWR5U3RhdGUgIT0gNCB8fCAodGhpcy5faHIuc3RhdHVzIDwgMjAwIHx8IHRoaXMuX2hyLnN0YXR1cyA+PSA0MDApKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuSXNDb25uZWN0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Db25uZWN0VGltZXMgPSAwO1xyXG5cclxuICAgICAgICBpZighdGhpcy5faHIucmVzcG9uc2VUZXh0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLl9oci5yZXNwb25zZVRleHQpIGFzIENvbmZpZy5SZXNwRGF0YVN0cnVjdDtcclxuICAgICAgICBjb25zb2xlLmxvZygnPj4+Pj4+Pj4+Pj4+Pj4+Pj7ov57mjqXnirbmgIHvvJonLCBkYXRhLlJlc3BDb2RlLCBkYXRhLlJlc3BNc2cpO1xyXG4gICAgICAgIC8v6L+e5o6l5aSx6LSlXHJcbiAgICAgICAgLy8gaWYoZGF0YS5SZXNwQ29kZSAhPSBDb25maWcuSHR0cENvbm5lY3RTdGF0ZS5TdWNjZXNzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZih0aGlzLkNhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgdGhpcy5DYWxsYmFjayhkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Y+R6YCB5ZON5bqU5pWw5o2u77yM5Zue5Lyg6K+35rGC5pWw5o2uXHJcbiAgICAgICAgLy8gaWYodHlwZW9mKHRoaXMuRGF0YS5SZXFEYXRhKSA9PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuRGF0YS5SZXFEYXRhID0gSlNPTi5wYXJzZSh0aGlzLkRhdGEuUmVxRGF0YSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIERhdGEuRGF0YVN0cnVjdC5Pbkh0dHBSZXF1ZXN0Q29tcGxldGUoZGF0YSwgdGhpcy5fcmVxS2V5LCB0aGlzLkRhdGEuUmVxRGF0YSk7XHJcblxyXG4gICAgICAgIC8v6L+e5o6l57uT5p2f5Yig6Zmk5a+56LGhXHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLk5ldEh0dHBDb25uZWN0RWlkLlNlcnZpY2VSZXNwb25kKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OlNvY2tldE1hbmFnZXI7XHJcbiAgICBwcml2YXRlIHNvY2tldDogTGF5YS5Tb2NrZXQ7XHJcbiAgICBwcml2YXRlIG91dHB1dDogTGF5YS5CeXRlO1xyXG4gICAgcHJpdmF0ZSBfZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAvKiog5b+D6Lez5YyF5a6a5pe25ZmoICovXHJcbiAgICBwcml2YXRlIF90aW1lcjogbnVtYmVyID0gMDtcclxuICAgIC8qKiDlv4Pot7PljIXmnI3liqHlmajotoXml7blrprml7blmaggKi9cclxuICAgIHByaXZhdGUgX3NlcnZlclRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOW/g+i3s+WMhei2heaXtuaXtumXtO+8jOWNleS9jW1zLOaXtumXtOWPquiDveaYr+aVtOenkuaVsO+8jHNldFRpbWVvdXTlnKjlkI7lj7Dmr4/np5LmiafooYzkuIDmrKEgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3RpbWVvdXQ6IG51bWJlciA9IDEwMDAwO1xyXG4gICAgLyoqIOmdmem7mOmHjei/nuWumuaXtuWZqCAqL1xyXG4gICAgcHJpdmF0ZSBfc2lsZW50VGltZXI6IG51bWJlciA9IDA7XHJcbiAgICAvKiog5b+D6Lez5YyF5pyN5Yqh5Zmo6LaF5pe25pe26Ze077yM5Y2V5L2NbXMs5pe26Ze05Y+q6IO95piv5pW056eS5pWw77yMc2V0VGltZW91dOWcqOWQjuWPsOavj+enkuaJp+ihjOS4gOasoSAqL1xyXG4gICAgcHJpdmF0ZSBfc2VydmVyVGltZW91dDogbnVtYmVyID0gMTAwMDA7IC8vVE9ET+iwg+ivleaKiuaXtumXtOWKoOmVvzM2MDAwMDDvvIzljp8xMDAwMFxyXG4gICAgLyoqIOaWree6v+exu+Wei++8mjEu6KKr5oyk5LiL57q/LCAyLuWBnOacjee7tOaKpChzb2NrZXTmlq3lvIApLDMg6Z2e5rOV5pON5L2cICovXHJcbiAgICBwcml2YXRlIF9kaXNjb25uZWN0VHlwZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGluc3QoKXtcclxuICAgICAgICBpZighdGhpcy5faW5zdCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3QgPSBuZXcgU29ja2V0TWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XHJcbiAgICB9IFxyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IodXJsPzpzdHJpbmcsIHBvcnQ/Om51bWJlcikge1xyXG4gICAgICAgIC8vIHRoaXMuY29ubmVjdCh1cmwsIHBvcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb25uZWN0KHVybDpzdHJpbmcsIHBvcnQ/Om51bWJlcil7XHJcbiAgICAgICAgdGhpcy5pbnN0LmNvbm5lY3QodXJsLCBwb3J0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbm5lY3QodXJsOnN0cmluZywgcG9ydD86bnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgTGF5YS5Tb2NrZXQoKTtcclxuXHJcbiAgICAgICAgaWYocG9ydCAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY29ubmVjdCh1cmwsIHBvcnQpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5jb25uZWN0QnlVcmwodXJsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub3V0cHV0ID0gdGhpcy5zb2NrZXQub3V0cHV0O1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbihMYXlhLkV2ZW50Lk9QRU4sIHRoaXMsIHRoaXMub25Tb2NrZXRPcGVuKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbihMYXlhLkV2ZW50LkNMT1NFLCB0aGlzLCB0aGlzLm9uU29ja2V0Q2xvc2UpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKExheWEuRXZlbnQuTUVTU0FHRSwgdGhpcywgdGhpcy5vbk1lc3NhZ2VSZXZlaXZlZCk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oTGF5YS5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5vbkNvbm5lY3RFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lv4Pot7Pmo4DmtYtcclxuICAgIHByaXZhdGUgc3RhcnRIZWFydGJlYXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0ZS50b1VUQ1N0cmluZygpICsgXCIgc3RhcnQgaGVhcnRiZWF0XCIpO1xyXG4gICAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCh0aGlzLnRpbWVySGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLl90aW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRpbWVySGFuZGxlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9kYXRlLnRvVVRDU3RyaW5nKCkgKyBcIiBzZW5kIGhlYXJ0YmVhdFwiKTtcclxuXHJcbiAgICAgICAgLy/lj5HpgIHkuIDkuKrlv4Pot7PvvIzlkI7nq6/mlLbliLDlkI7vvIzov5Tlm57kuIDkuKrlv4Pot7Pmtojmga9cclxuICAgICAgICB0aGlzLnNvY2tldC5zZW5kKCdyIHUgdGhlcmU/Jyk7XHJcbiAgICAgICAgdGhpcy5fc2VydmVyVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuc2VydmVyVGltZXJIYW5kbGVyLmJpbmQodGhpcyksIHRoaXMuX3NlcnZlclRpbWVvdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VydmVyVGltZXJIYW5kbGVyKCkge1xyXG4gICAgICAgIC8v5pyN5Yqh5Zmo6LaF5pe25rKh5pyJ5Zue5YyF77yM5pat5byA6L+e5o6l54S25ZCO6YeN6L+eXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0ZS50b1VUQ1N0cmluZygpICsgXCIgd2FpdCBzZXJ2ZXIgcmVwbHkgdGltZW91dFwiKTtcclxuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEhlYXJ0YmVhdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9kYXRlLnRvVVRDU3RyaW5nKCkgKyBcIiByZXNldCBoZWFydGJlYXRcIik7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2VydmVyVGltZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Tb2NrZXRPcGVuKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2V0SGVhcnRiZWF0KCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEhlYXJ0YmVhdCgpO1xyXG5cclxuICAgICAgICAvLyDlj5HpgIHlrZfnrKbkuLJcclxuICAgICAgICB0aGlzLnNvY2tldC5zZW5kKFwiZGVtb25zdHJhdGUgPHNlbmRTdHJpbmc+XCIpO1xyXG5cclxuICAgICAgICAvLyDkvb/nlKhvdXRwdXQud3JpdGVCeXRl5Y+R6YCBXHJcbiAgICAgICAgdmFyIG1lc3NhZ2U6IHN0cmluZyA9IFwiZGVtb25zdHJhdGUgPG91dHB1dC53cml0ZUJ5dGU+XCI7XHJcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IG1lc3NhZ2UubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRwdXQud3JpdGVCeXRlKG1lc3NhZ2UuY2hhckNvZGVBdChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc29ja2V0LmZsdXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNvY2tldENsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU29ja2V0IGNsb3NlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTWVzc2FnZVJldmVpdmVkKG1lc3NhZ2U6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBmcm9tIHNlcnZlcjpcIiwgbWVzc2FnZSk7XHJcblxyXG4gICAgICAgIC8v6I635Y+W5Yiw5raI5oGv6YeN572u5b+D6Lez5qOA5rWLXHJcbiAgICAgICAgdGhpcy5yZXNldEhlYXJ0YmVhdCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRIZWFydGJlYXQoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgICAgICB9ZWxzZSBpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBMYXlhLkJ5dGUobWVzc2FnZSkucmVhZFVURkJ5dGVzKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQuaW5wdXQuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ29ubmVjdEVycm9yKGU6IExheWEuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmlq3nur/nsbvlnovvvJoxLuiiq+aMpOS4i+e6vywgMi7lgZzmnI3nu7TmiqQoc29ja2V05pat5byAKSwzIOmdnuazleaTjeS9nCAqL1xyXG4gICAgcHVibGljIHNldERpc2Nvbm5lY3QodHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzY29ubmVjdFR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzY29ubmVjdFR5cGUgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzZXRIZWFydGJlYXQoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5zb2NrZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vVUkvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9vbE1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2VyIHtcclxuICAgIHN0YXRpYyBJbnN0OlBvb2xNYW5hZ2VyO1xyXG5cclxuICAgIC8vZmd1aeWvueixoeaxoFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmd1aVBvb2wgPSBuZXcgZmd1aS5HT2JqZWN0UG9vbCgpO1xyXG5cclxuICAgIC8vZmd1aeWvueixoeaxoFxyXG4gICAgc3RhdGljIGdldCBGZ3VpUG9vbCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZndWlQb29sO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5aS06YOo5rGgXHJcbiAgICBzdGF0aWMgZ2V0IEhlYWRQb29sKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbChDb25maWcuUG9vbFR5cGUuSGVhZE1vZGVsKSBhcyBMYXlhLlNwcml0ZTNEW107XHJcbiAgICB9XHJcblxyXG4gICAgLy/ouqvkvZPmsaBcclxuICAgIHN0YXRpYyBnZXQgQm9keVBvb2woKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb29sKENvbmZpZy5Qb29sVHlwZS5Cb2R5TW9kZWwpIGFzIExheWEuU3ByaXRlM0RbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25Bd2FrZSgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVjb3ZlcihrZXk6c3RyaW5nLCBpdGVtLCBjbHNUeXBlPyl7XHJcbiAgICAgICAgaWYoIWtleSB8fCAhaXRlbSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNsc1R5cGUpe1xyXG4gICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlckJ5Q2xhc3MoY2xzVHlwZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIENvbmZpZy5Qb29sVHlwZS5GZ3VpT2JqOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0gaW5zdGFuY2VvZiBmZ3VpLkdPYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRmd1aVBvb2wucmV0dXJuT2JqZWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIoa2V5LCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SXRlbShrZXk6c3RyaW5nLCBjbHNUeXBlPyl7XHJcbiAgICAgICAgaWYoY2xzVHlwZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBMYXlhLlBvb2wuZ2V0SXRlbUJ5Q2xhc3Moa2V5LCBjbHNUeXBlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJyc6XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTGF5YS5Qb29sLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UG9vbChrZXk6c3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gTGF5YS5Qb29sLmdldFBvb2xCeVNpZ24oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXJQb29sKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIExheWEuUG9vbC5jbGVhckJ5U2lnbihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGVhckFsbFBvb2xzKCl7XHJcbiAgICAgICAgdGhpcy5GZ3VpUG9vbC5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRNb2RlbEJ5VHlwZShwb29sVHlwZTpzdHJpbmcsIHBhdGg6c3RyaW5nLCBjYWxsYmFjazpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGxldCBoZWFkID0gdGhpcy5nZXRJdGVtKHBvb2xUeXBlKSBhcyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgIGlmKCFoZWFkKXtcclxuICAgICAgICAgICAgTWFuYWdlci5TcGF3bk1hbmFnZXIuTG9hZDNkTW9kZWwoXHJcbiAgICAgICAgICAgICAgICBwYXRoLCBcclxuICAgICAgICAgICAgICAgIChtb2RlbDpDb25maWcuTW9kZWxEYXRhU3RydWN0KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWQgPSBtb2RlbC5tc3A7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGhlYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgdGhpc0FyZ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGhlYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRIZWFkKHBhdGg6c3RyaW5nLCBjYWxsYmFjazpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIHRoaXMuZ2V0TW9kZWxCeVR5cGUoQ29uZmlnLlBvb2xUeXBlLkhlYWRNb2RlbCwgcGF0aCwgY2FsbGJhY2ssIHRoaXNBcmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRCb2R5KHBhdGg6c3RyaW5nLCBjYWxsYmFjazpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIHRoaXMuZ2V0TW9kZWxCeVR5cGUoQ29uZmlnLlBvb2xUeXBlLkJvZHlNb2RlbCwgcGF0aCwgY2FsbGJhY2ssIHRoaXNBcmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZXR1cm5GZ3VpT2JqKGJveDpmZ3VpLkdPYmplY3Qpe1xyXG4gICAgICAgIHRoaXMucmVjb3ZlcihDb25maWcuUG9vbFR5cGUuRmd1aU9iaiwgYm94KTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb2xlQmFzZXtcclxuICAgIEhlYWQ6Zmd1aS5HTG9hZGVyO1xyXG4gICAgQm9keVNsb3Q6Zmd1aS5HT2JqZWN0O1xyXG4gICAgQm9keTpMYXlhLlNrZWxldG9uO1xyXG4gICAgLy8gQW5pOkxheWEuQW5pbWF0b3I7XHJcbiAgICBTdGF0ZTpNYW5hZ2VyLlN0YXRlQmFzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihoZWFkOmZndWkuR0xvYWRlciwgYm9keVNsb3Q6Zmd1aS5HT2JqZWN0LCBib2R5PzpMYXlhLlNrZWxldG9uKXtcclxuICAgICAgICB0aGlzLkhlYWQgPSBoZWFkO1xyXG4gICAgICAgIHRoaXMuQm9keVNsb3QgPSBib2R5U2xvdDtcclxuICAgICAgICB0aGlzLkJvZHkgPSBib2R5O1xyXG4gICAgICAgIC8vIHRoaXMuQW5pID0gYm9keS5nZXRDb21wb25lbnQoTGF5YS5BbmltYXRvcikgYXMgTGF5YS5BbmltYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgQW5pU3RhdGUoKXtcclxuICAgIC8vICAgICBpZighdGhpcy5BbmkpIHJldHVybiBudWxsO1xyXG5cclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5BbmkuZ2V0Q3VycmVudEFuaW1hdG9yUGxheVN0YXRlKCk7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJSb2xlIGV4dGVuZHMgUm9sZUJhc2Uge1xyXG4gICAgcHJpdmF0ZSBtQ3VyckluZGV4Om51bWJlciA9IDA7XHJcbiAgICBtRmFjdG9yeTpMYXlhLlRlbXBsZXQ7XHJcbiAgICBzZXRCb2R5Q2FsbGJhY2s6RnVuY3Rpb247XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGhlYWQ6Zmd1aS5HTG9hZGVyLCBib2R5U2xvdDpmZ3VpLkdPYmplY3Qpe1xyXG4gICAgICAgIHN1cGVyKGhlYWQsIGJvZHlTbG90KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQW5pVGVtcGxldEVycm9yKCl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlBsYXllciBhbmlUZW1wbGV0IGVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Cb2R5QW5pU3RvcCgpe1xyXG4gICAgICAgIC8v5b6q546v5pKt5pS+XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5Qm9keUFuaSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGxheUJvZHlBbmkobG9vcD86Ym9vbGVhbil7XHJcbiAgICAgICAgLy/pu5jorqTlvqrnjq/mkq3mlL5cclxuICAgICAgICBsb29wID0gbnVsbCAhPSBsb29wPyBsb29wOiB0cnVlO1xyXG4gICAgICAgIHRoaXMuQm9keS5wbGF5KDAsIGxvb3ApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHBhcnNlVGVtcGxldENvbXBsZXRlKGNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8pOnZvaWQge1xyXG4gICAgICAgIC8v5Yib5bu65qih5byP5Li6Me+8jOWPr+S7peWQr+eUqOaNouijhVxyXG4gICAgICAgIHRoaXMuQm9keSA9IHRoaXMubUZhY3RvcnkuYnVpbGRBcm1hdHVyZSgxKTtcclxuICAgICAgICB0aGlzLkJvZHlTbG90LmRpc3BsYXlPYmplY3QuYWRkQ2hpbGQodGhpcy5Cb2R5KTtcclxuICAgICAgICB0aGlzLkJvZHkub24oTGF5YS5FdmVudC5TVE9QUEVELCB0aGlzLCB0aGlzLm9uQm9keUFuaVN0b3ApO1xyXG4gICAgICAgIHRoaXMucGxheUJvZHlBbmkoKTtcclxuXHJcbiAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRCb2R5KGJvZHlQYXRoOnN0cmluZywgY2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPywgLi4uZGF0YSl7XHJcbiAgICAgICAgdGhpcy5tRmFjdG9yeSA9IE1hbmFnZXIuUG9vbE1hbmFnZXIuZ2V0SXRlbShDb25maWcuUG9vbEl0ZW1LZXkuRHJlc3NUZW1wbGF0ZSwgTGF5YS5UZW1wbGV0KTtcclxuICAgICAgICB0aGlzLm1GYWN0b3J5Lm9uKExheWEuRXZlbnQuQ09NUExFVEUsIHRoaXMsIHRoaXMucGFyc2VUZW1wbGV0Q29tcGxldGUsIFtjYWxsYmFjaywgdGhpc0FyZ10pO1xyXG4gICAgICAgIHRoaXMubUZhY3Rvcnkub24oTGF5YS5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5vbkFuaVRlbXBsZXRFcnJvcik7XHJcbiAgICAgICAgdGhpcy5tRmFjdG9yeS5sb2FkQW5pKGJvZHlQYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRIZWFkKHVybDpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuSGVhZC51cmwgPSB1cmw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvbGVNYW5hZ2Vye1xyXG4gICAgc3RhdGljIFBMQVlFUiA9ICdQbGF5ZXInO1xyXG4gICAgc3RhdGljIEVORU1ZID0gJ0VuZW15JztcclxuICAgIC8v5Yqo55S75ZCNXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQU5JTUFUT1JTX01PVkUgPSBbJ3dhbGsnLCAncnVuJ107XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQU5JTUFUT1JTX0FUVEFDSyA9IFsnYXR0YWNrMScsICdhdHRhY2syJ107XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQU5JTUFUT1JTX1BMQVlFUl9TS0lMTCA9ICdza2lsbCc7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQU5JTUFUT1JfREVBRCA9ICdkZWF0aCc7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQU5JTUFUT1JfV0lOID0gJ3dpbic7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQU5JTUFUT1JfSURMRSA9ICdGaWdodElkbGUnO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IEFOSU1BVE9SX1BST1ZPQ19FTkVNWSA9ICdhcHBlYXInO1xyXG5cclxuICAgIHN0YXRpYyBQbGF5ZXI6TWFuYWdlci5QbGF5ZXJSb2xlO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgc3RhdGljIGdldCBoYXNQbGF5ZXIoKTpib29sZWFue1xyXG4gICAgICAgIGlmKHRoaXMuUGxheWVyKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0ZSByb2xlIGZpcnN0IScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDcmVhdGVSb2xlKGhlYWQ6Zmd1aS5HTG9hZGVyLCBoZWFkVXJsOnN0cmluZywgYm9keVNsb3Q6Zmd1aS5HT2JqZWN0LCBib2R5UGF0aDpzdHJpbmcsIGNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKCFib2R5UGF0aCB8fCAhaGVhZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLlBsYXllciA9IG5ldyBNYW5hZ2VyLlBsYXllclJvbGUoaGVhZCwgYm9keVNsb3QpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlSGVhZChoZWFkVXJsKTtcclxuICAgICAgICB0aGlzLmNoYW5nZUJvZHkoYm9keVBhdGgsIGNhbGxiYWNrLCB0aGlzQXJnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aNouWktFxyXG4gICAgc3RhdGljIGNoYW5nZUhlYWQodXJsOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXRoaXMuaGFzUGxheWVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuUGxheWVyLnNldEhlYWQodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aNouijhVxyXG4gICAgc3RhdGljIGNoYW5nZUJvZHkocGF0aDpzdHJpbmcsIGNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8sIC4uLmRhdGEpe1xyXG4gICAgICAgIGlmKCF0aGlzLmhhc1BsYXllcikgcmV0dXJuO1xyXG4gICAgICAgIGlmKCFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIE1hbmFnZXIuUG9vbE1hbmFnZXIucmVjb3ZlcihDb25maWcuUG9vbEl0ZW1LZXkuRHJlc3NUZW1wbGF0ZSwgdGhpcy5QbGF5ZXIubUZhY3RvcnkpO1xyXG4gICAgICAgIHRoaXMuUGxheWVyLnNldEJvZHkocGF0aCwgY2FsbGJhY2ssIHRoaXNBcmcsIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRTdGF0ZShhbmlOYW1lOnN0cmluZywgcm9sZTpNYW5hZ2VyLlJvbGVCYXNlKXtcclxuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLkFOSU1BVE9SX0lETEU6XHJcbiAgICAgICAgICAgICAgICByb2xlLlN0YXRlLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5JREVMKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSB0aGlzLkFOSU1BVE9SX0RFQUQ6XHJcbiAgICAgICAgICAgICAgICByb2xlLlN0YXRlLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5ERUFEKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSBcIi4uL0dhbWVTY2VuZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lTWFuYWdlciBleHRlbmRzIE1hbmFnZXIuQmFzZU1hbmFnZXJ7XHJcbiAgICBwdWJsaWMgc3RhdGljIF9pbnN0OlNjZW5lTWFuYWdlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3VyU2NlbmU6TGF5YS5TY2VuZTNEIHwgTGF5YS5TY2VuZTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEluc3QoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlMmRTY2VuZSgpe1xyXG4gICAgICAgIExheWEuU2NlbmUubG9hZChHYW1lQ29uZmlnLnN0YXJ0U2NlbmUsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbk9wZW5TY2VuZSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgY3JlYXRlM2RTY2VuZSgpe1xyXG5cdFx0Ly/mt7vliqAzROWcuuaZr1xyXG5cdFx0bGV0IHNjZW5lID0gTGF5YS5zdGFnZS5hZGRDaGlsZChuZXcgTGF5YS5TY2VuZTNEKCkpIGFzIExheWEuU2NlbmUzRDtcclxuXHJcblx0XHQvL+a3u+WKoOeFp+ebuOaculxyXG5cdFx0bGV0IGNhbWVyYSA9IChzY2VuZS5hZGRDaGlsZChuZXcgTGF5YS5DYW1lcmEoMCwgMC4xLCAxMDApKSkgYXMgTGF5YS5DYW1lcmE7XHJcblx0XHRjYW1lcmEudHJhbnNmb3JtLnRyYW5zbGF0ZShuZXcgTGF5YS5WZWN0b3IzKDEsIDEsIDMpKTtcclxuXHRcdC8vIGNhbWVyYS50cmFuc2Zvcm0ucm90YXRlKG5ldyBMYXlhLlZlY3RvcjMoLTMwLCAwLCAwKSwgdHJ1ZSwgZmFsc2UpO1xyXG5cdFx0Y2FtZXJhLmNsZWFyRmxhZyA9IExheWEuQmFzZUNhbWVyYS5DTEVBUkZMQUdfREVQVEhPTkxZO1xyXG5cclxuXHRcdC8v5re75Yqg5pa55ZCR5YWJXHJcblx0XHRsZXQgZGlyZWN0aW9uTGlnaHQgPSBzY2VuZS5hZGRDaGlsZChuZXcgTGF5YS5EaXJlY3Rpb25MaWdodCgpKSBhcyBMYXlhLkRpcmVjdGlvbkxpZ2h0O1xyXG5cdFx0ZGlyZWN0aW9uTGlnaHQuY29sb3IgPSBuZXcgTGF5YS5WZWN0b3IzKDAuNiwgMC42LCAwLjYpO1xyXG5cdFx0ZGlyZWN0aW9uTGlnaHQudHJhbnNmb3JtLndvcmxkTWF0cml4LnNldEZvcndhcmQobmV3IExheWEuVmVjdG9yMygxLCAtMSwgMCkpO1xyXG5cclxuXHRcdHRoaXMub25PcGVuU2NlbmUoc2NlbmUpO1xyXG5cdH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbk9wZW5TY2VuZShzY2VuZT86TGF5YS5TY2VuZTNEIHwgTGF5YS5TY2VuZSl7XHJcblx0XHRpZihzY2VuZSl7XHJcblx0XHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQoc2NlbmUpO1xyXG4gICAgICAgICAgICB0aGlzLkN1clNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzY2VuZS5hZGRDb21wb25lbnQoTWFuYWdlci5TY2VuZU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRDb21wb25lbnQoTWFuYWdlci5IdHRwTWFuYWdlcik7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZENvbXBvbmVudChNYW5hZ2VyLlVJTWFuYWdlcik7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZENvbXBvbmVudChNYW5hZ2VyLkRhdGFNYW5hZ2VyKTtcclxuICAgICAgICAgICAgc2NlbmUuYWRkQ29tcG9uZW50KEdhbWVTY2VuZSk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vVUkvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0IEdFdmVudCBmcm9tIFwiLi4vQ29tbW9uL0dFdmVudFwiO1xyXG5cclxuLy9jb2Nvc+eUqFxyXG4vLyBsZXQgbG9hZGVkUGFja2FnZTp7W2tleTpzdHJpbmddOmJvb2xlYW59ID0ge307XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bhd25NYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGxvYWQzZE1vZGVsO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcG9vbE9ianM6e1trZXk6c3RyaW5nXTogYW55fTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgXHJcbiAgICAvL+WKoOi9veaooeWei1xyXG4gICAgc3RhdGljIExvYWQzZE1vZGVsKHBhdGg6c3RyaW5nLCBjb21wbGV0ZUNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKCFNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZSB8fCAhcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBMYXlhLmxvYWRlci5jcmVhdGUocGF0aCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzQXJnLCBjb21wbGV0ZUNhbGxiYWNrKSk7XHJcblxyXG4gICAgICAgIExheWEuU3ByaXRlM0QubG9hZChwYXRoLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpPT57XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwID0gQ29tbW9uLlJlc291cmNlLmdldFJlcyhwYXRoKTtcclxuICAgICAgICAgICAgICAgIGlmKCFzcCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtc3AgPSBNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZS5hZGRDaGlsZChzcCkgYXMgTGF5YS5TcHJpdGUzRDtcclxuICAgICAgICAgICAgICAgIGxldCBhbmkgPSBtc3AuZ2V0Q29tcG9uZW50KExheWEuQW5pbWF0b3IpIGFzIExheWEuQW5pbWF0b3I7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pU3RhdGU6TGF5YS5BbmltYXRvclBsYXlTdGF0ZTtcclxuICAgICAgICAgICAgICAgIGlmKGFuaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pU3RhdGUgPSBhbmkuZ2V0Q3VycmVudEFuaW1hdG9yUGxheVN0YXRlKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG1vZGVsRGF0YSA9IG5ldyBDb25maWcuTW9kZWxEYXRhU3RydWN0KG1zcCwgYW5pLCBhbmlTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrLmNhbGwodGhpc0FyZywgbW9kZWxEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WKoOi9vee9keagvFxyXG4gICAgc3RhdGljIExvYWQzZE1lc2gocGF0aDpzdHJpbmcsIGNvbXBsZXRlQ2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICAgICAgaWYoIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgQ29tbW9uLlJlc291cmNlLmxvYWQocGF0aCwgdGhpc0FyZywgY29tcGxldGVDYWxsYmFjaywgbnVsbCwgTGF5YS5Mb2FkZXIuTUVTSCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqDovb3mnZDotKhcclxuICAgIHN0YXRpYyBMb2FkTWF0ZXJpYWwocGF0aDpzdHJpbmcsIGNvbXBsZXRlQ2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICAgICAgaWYoIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgQ29tbW9uLlJlc291cmNlLmxvYWQocGF0aCwgdGhpc0FyZywgY29tcGxldGVDYWxsYmFjaywgbnVsbCwgTGF5YS5Mb2FkZXIuTUFURVJJQUwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqo5oCB5Yqg6L29VUnljIUgIGNvY29z55SoXHJcbiAgICAvLyBzdGF0aWMgTG9hZFVJUGFja2FnZShfcGF0aCwgY2FsbGJhY2spIHtcclxuICAgIC8vICAgICBpZih0eXBlb2YoX3BhdGgpICE9IFwic3RyaW5nXCIpIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgaWYobG9hZGVkUGFja2FnZVtfcGF0aF0pe1xyXG4gICAgLy8gICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAvLyAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICAgIGZndWkuVUlQYWNrYWdlLmFkZFBhY2thZ2UoX3BhdGgsIChlcnIpPT57XHJcbiAgICAvLyAgICAgICAgICAgICBpZihlcnIpe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICBsb2FkZWRQYWNrYWdlW19wYXRoXSA9IHRydWU7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvL+S7juaxoOS4reWIm+W7uuWvueixoVxyXG4gICAgc3RhdGljIENyZWF0ZU9iamVjdEZyb21Qb29sKF9wYXRoOnN0cmluZywgX3Nsb3Q6Zmd1aS5HR3JhcGgpIHtcclxuICAgICAgICBpZighX3BhdGggfHwgIV9zbG90KSByZXR1cm47XHJcblxyXG4gICAgICAgIC8v5LuO5rGg5Lit5Yib5bu65LiA5LiqU2tlbGV0b27lr7nosaFcclxuICAgICAgICBsZXQgb2JqID0gTGF5YS5Qb29sLmdldEl0ZW0oX3BhdGgpO1xyXG4gICAgICAgIGlmKCFvYmopIHJldHVybjtcclxuXHJcbiAgICAgICAgLy/nlJ/miJDllK/kuIBnaWRcclxuICAgICAgICBpZighb2JqWyckUG9vbEdJRCddKXtcclxuICAgICAgICAgICAgb2JqWyckUG9vbEdJRCddID0gTGF5YS5VdGlscy5nZXRHSUQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIW9ialsnJFBhdGgnXSl7XHJcbiAgICAgICAgICAgIG9ialsnJFBhdGgnXSA9IF9wYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvb2xPYmpzW29ialsnJFBvb2xHSUQnXV0gPSBvYmo7XHJcblxyXG4gICAgICAgIF9zbG90LmRpc3BsYXlPYmplY3QuYWRkQ2hpbGQob2JqKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICAvL+S7juWIm+W7ulNwaW5l5oiWRHJhZ29uQm9uZeWKqOeUu1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IF9wYXRoIOi3r+W+hFxyXG4gICAgICogQHBhcmFtICB7Zmd1aS5HR3JhcGh9IF9zbG90IOeItuWvueixoSBmZ3VpIGdyYXBoXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmcgfCBudW1iZXJ9IF9uYW1lIOWKqOeUu+WQjeWtl+aIluiAhee0ouW8lVxyXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gX2lzTG9vcCDmmK/lkKblvqrnjq/mkq3mlL7vvIzpu5jorqTlvqrnjq/mkq3mlL5cclxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IF9pc1BsYXkg5piv5ZCm56uL5Y2z5pKt5pS+77yM6buY6K6k5pKt5pS+XHJcbiAgICAgKiBAcmV0dXJuIHtzcC5Ta2VsZXRvbn1cclxuICAgICAqL1xyXG4gICAgLy8gc3RhdGljIENyZWF0ZVNwaW5lKF9wYXRoLCBfc2xvdCwgX25hbWUsIF9pc0xvb3AsIF9pc1BsYXkpIHtcclxuICAgIC8vICAgICBpZih0eXBlb2YoX3BhdGgpICE9IFwic3RyaW5nXCIgfHwgIV9zbG90IHx8ICFfc2xvdC5ub2RlKSByZXR1cm5cclxuXHJcbiAgICAvLyAgICAgbGV0IHNrZWxldG9uID0gX3Nsb3Qubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgLy8gICAgIGlmKHNrZWxldG9uID09IG51bGwpe1xyXG4gICAgLy8gICAgICAgICBza2VsZXRvbiA9IF9zbG90Lm5vZGUuYWRkQ29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHNrZWxldG9uLnByZW11bHRpcGxpZWRBbHBoYSA9IGZhbHNlO1xyXG5cclxuICAgIC8vICAgICBsZXQgb25Qcm9jZXNzID0gZnVuY3Rpb24oY29tcGxldGVDb3VudCwgdG90YWxDb3VudCwgaXRlbSkge31cclxuICAgIC8vICAgICBsZXQgY2IgPSBmdW5jdGlvbihlcnIsIHJlcyl7XHJcbiAgICAvLyAgICAgICAgIHNrZWxldG9uLnNrZWxldG9uRGF0YSA9IHJlcztcclxuXHJcbiAgICAvLyAgICAgICAgIF9pc0xvb3AgPSBfaXNMb29wPyBfaXNMb29wOiB0cnVlO1xyXG4gICAgLy8gICAgICAgICBpZihza2VsZXRvbi5za2VsZXRvbkRhdGEgJiYgc2tlbGV0b24uc2tlbGV0b25EYXRhLmxvYWRlZCAmJiBfbmFtZSl7XHJcbiAgICAvLyAgICAgICAgICAgICBza2VsZXRvbi5zZXRBbmltYXRpb24oMCwgX25hbWUsIF9pc0xvb3ApXHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHNrZWxldG9uLnBhdXNlZCA9IF9pc1BsYXkgPT0gZmFsc2VcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGNjLmxvYWRlci5sb2FkUmVzKF9wYXRoLCBzcC5Ta2VsZXRvbkRhdGEsIG9uUHJvY2VzcywgY2IpXHJcblxyXG5cclxuICAgIC8vICAgICByZXR1cm4gc2tlbGV0b25cclxuICAgIC8vIH1cclxuXHJcbiAgICAvL+mAmui/h+mihOWItuS9k+WIm+W7ulNwaW5lXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gX3BhdGggUHJlZmFi6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gIHtmZ3VpLkdHcmFwaH0gX3Nsb3Qg54i25a+56LGhIGZndWkgZ3JhcGhcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxsYmFjayDliqjnlLvlkI3lrZfmiJbogIXntKLlvJVcclxuICAgICAqL1xyXG4gICAgLy8gc3RhdGljIENyZWF0ZVNwaW5lRnJvbVByZWZhYihfcGF0aCwgX3Nsb3QsIGNhbGxiYWNrKSB7XHJcbiAgICAvLyAgICAgaWYodHlwZW9mKF9wYXRoKSAhPSBcInN0cmluZ1wiIHx8ICFfc2xvdCB8fCAhX3Nsb3Qubm9kZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vICAgICAvKiogQHR5cGUge3NwLlNrZWxldG9ufSAqL1xyXG4gICAgLy8gICAgIC8vIGxldCBza2VsZXRvbjtcclxuICAgIC8vICAgICBjYy5sb2FkZXIubG9hZFJlcyhfcGF0aCwgY2MuUHJlZmFiLCBmdW5jdGlvbihlcnIsIHByZWZhYikge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHByZWZhYk5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgLy8gICAgICAgICAgICAgLyoqIEB0eXBlIHtzcC5Ta2VsZXRvbn0gKi9cclxuICAgIC8vICAgICAgICAgICAgIGxldCBza2VsZXRvbiA9ICBwcmVmYWJOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAvLyAgICAgICAgICAgICBfc2xvdC5ub2RlLmFkZENoaWxkKHByZWZhYk5vZGUpO1xyXG4gICAgLy8gICAgICAgICAgICAgcHJlZmFiTm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soc2tlbGV0b24pO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIEdFdmVudC5EaXNwYXRjaChHRXZlbnQuU1BJTkVfUFJFRkFCX0xPQURFRCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHN0YXRpYyBMb2FkVmlldyhwa2c6c3RyaW5nLCBjb206c3RyaW5nKXtcclxuICAgICAgICBpZighcGtnIHx8ICFjb20pIHJldHVybjtcclxuXHJcbiAgICAgICAgQ29tbW9uLlJlc291cmNlLmFkZFVpUGFja2FnZShwa2cpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBncm9vdEluc3QgPSBmZ3VpLkdSb290Lmluc3Q7XHJcbiAgICAgICAgbGV0IHVpID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KHBrZywgY29tKS5hc0NvbTtcclxuICAgICAgICBpZih1aSl7XHJcbiAgICAgICAgICAgIGdyb290SW5zdC5hZGRDaGlsZCh1aSk7XHJcbiAgICAgICAgICAgIHVpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy/lsI/muLjmiI/pgILphY1cclxuICAgICAgICAgICAgdWkuc2V0U2l6ZShncm9vdEluc3Qud2lkdGgsIGdyb290SW5zdC5oZWlnaHQpO1xyXG4gICAgICAgICAgICB1aS5zZXRYWSgwLCAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWwgdG8gYWRkIHVpIHBhY2thZ2U6IFwiLCBwa2csIGNvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdWk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGVCYXNle1xyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IENvbmZpZy5TdGF0ZUNvbmZpZy5JREVMO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJTdGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTdGF0ZShzdGF0ZTpzdHJpbmcpe1xyXG4gICAgICAgIGlmKHRoaXMuX3N0YXRlID09IHN0YXRlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9VSS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vQ29tbW9uL1V0aWxzXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5sZXQgdGltZXJJZCA9IC0xXHJcbi8v6K6h5pe25Zmo5rGgXHJcbmxldCB0aW1lclBvb2wgPSBuZXcgQXJyYXk8VGltZXI+KClcclxubGV0IHRpbWVyTGlzdCA9IG5ldyBBcnJheTxUaW1lcj4oKVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVyIHtcclxuICAgIHB1YmxpYyBJZDpudW1iZXI7XHJcbiAgICBwdWJsaWMgTWF4Q2Q6bnVtYmVyO1xyXG4gICAgcHVibGljIEN1ckNkID0gMDtcclxuICAgIHB1YmxpYyBPblN0YXJ0OkZ1bmN0aW9uO1xyXG4gICAgcHVibGljIE9uVXBkYXRlOkZ1bmN0aW9uO1xyXG4gICAgcHVibGljIE9uRW5kOkZ1bmN0aW9uO1xyXG4gICAgcHVibGljIFRhcmdldDtcclxuICAgIHB1YmxpYyBUaGlzQXJnOkNvbW1vbi5FdmVudERpc3BhdGhlcjtcclxuICAgIHB1YmxpYyBFbmRUaW1lID0gMDtcclxuICAgIHB1YmxpYyBJc1J1biA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzU3RhcnQgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0FsaXZlID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBTdGFydFRpbWU6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBhdXRvUmVtb3ZlOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEluaXQoY2Q6bnVtYmVyLCBzdGFydENhbGxiYWNrOkZ1bmN0aW9uLCB1cGRhdGVDYWxsYmFjazpGdW5jdGlvbiwgZW5kQ2FsbGJhY2s6RnVuY3Rpb24sIHRhcmdldCwgdGhpc0FyZywgYXV0b1JlbW92ZT86Ym9vbGVhbiwgYXV0b1N0YXJ0Pzpib29sZWFuKXtcclxuICAgICAgICB0aGlzLklkID0gdGltZXJJZCArIDFcclxuICAgICAgICB0aGlzLk1heENkID0gY2RcclxuICAgICAgICB0aGlzLkN1ckNkID0gMFxyXG4gICAgICAgIHRoaXMuT25TdGFydCA9IHN0YXJ0Q2FsbGJhY2tcclxuICAgICAgICB0aGlzLk9uVXBkYXRlID0gdXBkYXRlQ2FsbGJhY2tcclxuICAgICAgICB0aGlzLk9uRW5kID0gZW5kQ2FsbGJhY2tcclxuICAgICAgICB0aGlzLlRhcmdldCA9IHRhcmdldFxyXG4gICAgICAgIHRoaXMuVGhpc0FyZyA9IHRoaXNBcmdcclxuICAgICAgICB0aGlzLkVuZFRpbWUgPSAwXHJcbiAgICAgICAgdGhpcy5Jc1J1biA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5Jc1N0YXJ0ID0gZmFsc2VcclxuICAgICAgICB0aGlzLklzQWxpdmUgPSB0cnVlXHJcbiAgICAgICAgLy/pu5jorqToh6rliqjplIDmr4FcclxuICAgICAgICB0aGlzLmF1dG9SZW1vdmUgPSBhdXRvUmVtb3ZlICE9IG51bGw/IGF1dG9SZW1vdmU6IHRydWU7XHJcbiAgICAgICAgLy/pu5jorqToh6rliqjlvIDlp4tcclxuICAgICAgICBpZihhdXRvU3RhcnQgIT0gZmFsc2Upe1xyXG4gICAgICAgICAgICB0aGlzLlN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzQWxpdmUpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY3VycnRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGlmKGN1cnJ0aW1lIDwgdGhpcy5FbmRUaW1lKXtcclxuICAgICAgICAgICAgdGhpcy5DdXJDZCA9ICh0aGlzLkVuZFRpbWUgLSBjdXJydGltZSkgKiAwLjAwMVxyXG4gICAgICAgICAgICBpZih0eXBlb2YodGhpcy5PblVwZGF0ZSkgPT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuT25VcGRhdGUuY2FsbCh0aGlzLlRoaXNBcmcsIHRoaXMuQ3VyQ2QsIHRoaXMuVGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuVXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLklzUnVuID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5Jc1N0YXJ0ID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZih0aGlzLk9uRW5kKSA9PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5PbkVuZC5jYWxsKHRoaXMuVGhpc0FyZywgdGhpcy5UYXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmF1dG9SZW1vdmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBTdGFydCgpe1xyXG4gICAgICAgIHRoaXMuSXNSdW4gPSB0cnVlXHJcblxyXG4gICAgICAgIGlmKCF0aGlzLklzU3RhcnQpe1xyXG4gICAgICAgICAgICB0aGlzLklzU3RhcnQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB0aGlzLlN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIC8v6K6h5pe257uT5p2f5pe26Ze0XHJcbiAgICAgICAgICAgIHRoaXMuRW5kVGltZSA9IHRoaXMuU3RhcnRUaW1lICsgdGhpcy5NYXhDZCAqIDEwMDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZih0aGlzLk9uU3RhcnQpID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5PblN0YXJ0LmNhbGwodGhpcy5UaGlzQXJnLCB0aGlzLlRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlc2V0Q2QoY2Qpe1xyXG4gICAgICAgIGlmKHR5cGVvZihjZCkgIT0gXCJudW1iZXJcIikgcmV0dXJuXHJcblxyXG4gICAgICAgIHRoaXMuTWF4Q2QgPSBjZFxyXG4gICAgICAgIHRoaXMuRW5kVGltZSA9IERhdGUubm93KCkgKyB0aGlzLk1heENkICogMTAwMFxyXG4gICAgfVxyXG5cclxuICAgIFJlbW92ZSgpe1xyXG4gICAgICAgIC8vIHRoaXMuTWF4Q2QgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMuQ3VyQ2QgPSAwO1xyXG4gICAgICAgIHRoaXMuT25TdGFydCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5PblVwZGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5PbkVuZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5UYXJnZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuVGhpc0FyZyA9IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5FbmRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLklzUnVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Jc1N0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Jc0FsaXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8v56e75Yqo5Yiw6aaW5L2NXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGltZXJQb29sLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgaWYoaW5kZXggPiAwKXtcclxuICAgICAgICAgICAgdGltZXJQb29sLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRpbWVyUG9vbC51bnNoaWZ0KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVyTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSAge30gdGhpc0FyZyDmiafooYzln59cclxuICAgICAqIEBwYXJhbSAge251bWJlcn0gY2RcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBzdGFydENhbGxiYWNrIOW8gOWni+Wbnuiwg1xyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IHVwZGF0ZUNhbGxiYWNrIOi/h+eoi+Wbnuiwg1xyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGVuZENhbGxiYWNrIOe7k+adn+Wbnuiwg1xyXG4gICAgICogQHBhcmFtICB7fSB0YXJnZXQg6K6h5pe255uu5qCHXHJcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBhdXRvUmVtb3ZlIOaYr+WQpuiHquWKqOWIt+aWsO+8jOm7mOiupOiHquWKqFxyXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gYXV0b1N0YXJ0IOaYr+WQpuiHquWKqOW8gOWni++8jOm7mOiupOiHquWKqFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgTmV3VGltZXIodGhpc0FyZywgY2Q6bnVtYmVyLCBzdGFydENhbGxiYWNrOkZ1bmN0aW9uLCB1cGRhdGVDYWxsYmFjazpGdW5jdGlvbiwgZW5kQ2FsbGJhY2s6RnVuY3Rpb24sIHRhcmdldD8sIGF1dG9SZW1vdmU/OmJvb2xlYW4sIGF1dG9TdGFydD86Ym9vbGVhbil7XHJcbiAgICAgICAgbGV0IHQgPSB0aW1lclBvb2xbMF07XHJcbiAgICAgICAgaWYoIXQgfHwgdC5Jc0FsaXZlKXtcclxuICAgICAgICAgICAgdCA9IG5ldyBUaW1lcigpXHJcbiAgICAgICAgICAgIHRpbWVyTGlzdFt0LklkXSA9IHRcclxuICAgICAgICAgICAgdGltZXJQb29sLnB1c2godClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdC5Jbml0KGNkLCBzdGFydENhbGxiYWNrLCB1cGRhdGVDYWxsYmFjaywgZW5kQ2FsbGJhY2ssIHRhcmdldCwgdGhpc0FyZywgYXV0b1JlbW92ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBSZW1vdmVUaW1lcih0aGlzQXJnOkNvbW1vbi5FdmVudERpc3BhdGhlcil7XHJcbiAgICAgICAgaWYoIXRoaXNBcmcpIHJldHVybjtcclxuICAgICAgICB0aW1lclBvb2wuZm9yRWFjaCh0aW1lcj0+e1xyXG4gICAgICAgICAgICBpZih0aW1lci5UaGlzQXJnICYmIHRpbWVyLlRoaXNBcmcuaWQgPT0gdGhpc0FyZy5pZCl7XHJcbiAgICAgICAgICAgICAgICB0aW1lci5SZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBSZW1vdmVBbGxUaW1lcigpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aW1lckxpc3Qpe1xyXG4gICAgICAgICAgICB0aW1lckxpc3RbaV0uUmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBVcGRhdGUoKXtcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGltZXJMaXN0KXtcclxuICAgICAgICAgICAgaWYodGltZXJMaXN0W2ldLklzQWxpdmUpe1xyXG4gICAgICAgICAgICAgICAgdGltZXJMaXN0W2ldLlVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBDbGVhckFsbFRpbWVyKCl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRpbWVyTGlzdCl7XHJcbiAgICAgICAgICAgIHRpbWVyTGlzdFtpXS5SZW1vdmUoKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRpbWVyTGlzdFtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9VSS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vQ29tbW9uL1V0aWxzXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuLy/lvLrliLblvJXlr7xcclxubGV0IEd1aWRlTGlzdCA9IG5ldyBBcnJheTxmZ3VpLkdDb21wb25lbnQ+KCk7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlciB7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9pbnN0OlVJTWFuYWdlcjtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9pbnN0KXtcclxuICAgICAgICAgICAgdGhpcy5faW5zdCA9IG5ldyBVSU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICBVSU1hbmFnZXIuX2luc3QgPSB0aGlzO1xyXG4gICAgICAgIFVJTWFuYWdlci5zZXRVaUtleXMoKTtcclxuICAgICAgICBVSU1hbmFnZXIuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldFVpS2V5cygpe1xyXG4gICAgICAgIGxldCBjZmcgPSBDb25maWcuVmlld0tpdDtcclxuICAgICAgICBVSS5Mb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyLmluaXQoY2ZnLkxvYWRpbmdQcm9ncmVzcy5LZXksIFVJLkxvYWRpbmdQcm9ncmVzc1ZpZXcpO1xyXG4gICAgICAgIFVJLkxvYWRpbmdDb250cm9sbGVyLmluaXQoY2ZnLkxvYWRpbmdNYWluLktleSwgVUkuTG9hZGluZ1ZpZXcpO1xyXG4gICAgICAgIFVJLkNob29zZVNlcnZpY2VDb250cm9sbGVyLmluaXQoY2ZnLkNob29zZVNlcnZpY2UuS2V5LCBVSS5DaG9vc2VTZXJ2aWNlVmlldyk7XHJcbiAgICAgICAgVUkuUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlci5pbml0KGNmZy5QdWJsaWNDb25maXJtYXRpb24uS2V5LCBVSS5QdWJsaWNDb25maXJtYXRpb25WaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhZGRMaXN0ZW5lcnMoKXtcclxuICAgICAgICBmb3IobGV0IGkgaW4gQ29uZmlnLlZpZXdLaXQpe1xyXG4gICAgICAgICAgICBsZXQgY2ZnOkNvbmZpZy5WaWV3Q29uZmlnID0gQ29uZmlnLlZpZXdLaXRbaV07XHJcbiAgICAgICAgICAgIGlmKGNmZyAmJiBjZmcuS2V5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihjZmcuS2V5LCB0aGlzLmdvT3Blbi5iaW5kKHRoaXMsIGNmZy5LZXkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5VaU5vdGljZUVpZC5DbG9zZUNvbnRyb2xsZXIsIHRoaXMub25DbG9zZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uVWlOb3RpY2VFaWQuT3BlbkZ1bGxTY3JlZW4sIHRoaXMub25PcGVuRnVsbHNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5VaU5vdGljZUVpZC5DbG9zZUZ1bGxTY3JlZW4sIHRoaXMub25DbG9zZUZ1bGxzY3JlZW4pO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uVWlOb3RpY2VFaWQuQ2xvc2VQb3B1cCwgdGhpcy5vcGVuTmV4dFBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnb09wZW4oa2V5LCAuLi5kYXRhKXtcclxuICAgICAgICBsZXQgYyA9IENvcmUuQ3RybE1hcEFycmF5W2tleV0gYXMgdHlwZW9mIENvcmUuQ29udHJvbGxlcjtcclxuICAgICAgICBpZihjKXtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQ29udHJvbGxlcihjLCAuLi5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG9wZW5Db250cm9sbGVyKGN0cmw6dHlwZW9mIENvcmUuQ29udHJvbGxlciwgLi4uX2RhdGEpIHtcclxuICAgICAgICBpZighY3RybCkgcmV0dXJuXHJcblxyXG4gICAgICAgIGxldCBjS2V5ID0gY3RybC5LZXk7XHJcbiAgICAgICAgbGV0IGN0cmxJbnN0ID0gQ29yZS5PcGVuZWRDdHJsW2NLZXldO1xyXG4gICAgICAgIGlmKCFjdHJsSW5zdCB8fCBjdHJsSW5zdC5Jc0Rlc3Ryb3llZCl7XHJcbiAgICAgICAgICAgIGN0cmxJbnN0ID0gbmV3IGN0cmwoY3RybC5LZXksIGN0cmwudmlldyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8v5Y+q5YWB6K645Yib5bu65LiA5Liq5a6e5L6LXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250cm9sbGVyIGhhcyBvcGVuZWQ6ICcsIGNLZXkpO1xyXG4gICAgICAgICAgICBjdHJsSW5zdC5zaG93KC4uLl9kYXRhKTtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnNldENoaWxkSW5kZXgoQ29yZS5WaWV3TWFwW2NLZXldLlVJLCBmZ3VpLkdSb290Lmluc3QubnVtQ2hpbGRyZW4pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja09wZW5DdHJsSW5zdChjdHJsSW5zdCwgLi4uX2RhdGEpO1xyXG5cclxuICAgICAgICAvLyBsZXQgZG9uZSA9IGN0cmxJbnN0LmNyZWF0ZSgpO1xyXG4gICAgICAgIC8vIGlmKGRvbmUpe1xyXG4gICAgICAgIC8vICAgICBjdHJsSW5zdC5vcGVuKC4uLl9kYXRhKVxyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwiT3BlbiBjb250cm9sbGVyIGZhaWxlZFwiKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gLy/orr7nva7muLLmn5PlsYLnuqdcclxuICAgICAgICAvLyBpZihjdHJsSW5zdC5Jc1BvcHVwKXtcclxuICAgICAgICAvLyAgICAgY3RybEluc3QuU29ydGluZ09yZGVyKENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuUG9wdXApO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIGN0cmxJbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNoZWNrT3BlbkN0cmxJbnN0KGN0cmxJbnN0OkNvcmUuQ29udHJvbGxlciwgLi4uX2RhdGEpe1xyXG4gICAgICAgIGlmKGN0cmxJbnN0LklzUG9wdXApe1xyXG4gICAgICAgICAgICBjdHJsSW5zdCA9IHRoaXMuZ2V0TmV4dFBvcHVwKGN0cmxJbnN0LCAuLi5fZGF0YSk7XHJcbiAgICAgICAgICAgIGlmKCFjdHJsSW5zdCkgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRvbmUgPSBjdHJsSW5zdC5jcmVhdGUoKTtcclxuICAgICAgICBpZihkb25lKXtcclxuICAgICAgICAgICAgY3RybEluc3Qub3BlbiguLi5fZGF0YSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk9wZW4gY29udHJvbGxlciBmYWlsZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6K6+572u5riy5p+T5bGC57qnXHJcbiAgICAgICAgaWYoY3RybEluc3QuSXNQb3B1cCl7XHJcbiAgICAgICAgICAgIGN0cmxJbnN0LlNvcnRpbmdPcmRlcihDb25maWcuVUlDb25maWcuU29ydGluZ09yZGVyLlBvcHVwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdHJsSW5zdDtcclxuICAgIH1cclxuXHJcbiAgICAvL+WFs+mXreeVjOmdouWkhOeQhlxyXG4gICAgc3RhdGljIG9uQ2xvc2VDb250cm9sbGVyKGNrZXk6c3RyaW5nKXtcclxuICAgICAgICBsZXQgY3RybCA9IENvcmUuT3BlbmVkQ3RybFtja2V5XSBhcyBDb3JlLkNvbnRyb2xsZXI7XHJcbiAgICAgICAgLy/muIXpmaTmiYDmnInorqHml7blmahcclxuICAgICAgICBNYW5hZ2VyLlRpbWVyTWFuYWdlci5SZW1vdmVUaW1lcihjdHJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WFqOWxj+eVjOmdouWkhOeQhlxyXG4gICAgc3RhdGljIG9uT3BlbkZ1bGxzY3JlZW4oY2tleTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuaGlkZU90aGVyVUkoY2tleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG9uQ2xvc2VGdWxsc2NyZWVuKGNrZXk6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnNob3dPdGhlclVJKGNrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlT3RoZXJVSShja2V5OnN0cmluZyl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIENvcmUuT3BlbmVkQ3RybCl7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gY2tleSkgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBsZXQgY3RybCA9IENvcmUuT3BlbmVkQ3RybFtpXTtcclxuICAgICAgICAgICAgaWYoY3RybCAmJiBjdHJsLklzU2hvdyl7XHJcbiAgICAgICAgICAgICAgICBjdHJsLlZpZXcuVUkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93T3RoZXJVSShja2V5OnN0cmluZyl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIENvcmUuT3BlbmVkQ3RybCl7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gY2tleSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN0cmwgPSBDb3JlLk9wZW5lZEN0cmxbaV07XHJcbiAgICAgICAgICAgIGlmKGN0cmwgJiYgY3RybC5Jc1Nob3cpe1xyXG4gICAgICAgICAgICAgICAgY3RybC5WaWV3LlVJLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0YXRpYyBvcGVuR3VpZGUgPSBmdW5jdGlvbihndWlkZU5hbWUsIHRhcmdldENvbSl7XHJcbiAgICAvLyAgICAgaWYoIWd1aWRlTmFtZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vICAgICBsZXQgZ3Jvb3RJbnN0ID0gZmd1aS5HUm9vdC5pbnN0XHJcblxyXG4gICAgLy8gICAgIGxldCBndWlkZUNvbSA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChDb25maWcuVmlld0tpdC5HdWlkZXIuUGtnLCBndWlkZU5hbWUpLmFzQ29tXHJcbiAgICAvLyAgICAgR3VpZGVMaXN0W2d1aWRlTmFtZV0gPSBndWlkZUNvbVxyXG5cclxuICAgIC8vICAgICBncm9vdEluc3QuYWRkQ2hpbGQoZ3VpZGVDb20pXHJcbiAgICAvLyAgICAgZ3VpZGVDb20uc2V0U2l6ZShncm9vdEluc3Qud2lkdGgsIGdyb290SW5zdC5oZWlnaHQpXHJcbiAgICAvLyAgICAgbGV0IGd1aWRlTWFzayA9IGd1aWRlQ29tLmdldENoaWxkKFwiTWFza1wiKVxyXG4gICAgLy8gICAgIGlmKHRhcmdldENvbSl7XHJcbiAgICAvLyAgICAgICAgIGd1aWRlTWFzay5zZXRYWSh0YXJnZXRDb20ueCwgdGFyZ2V0Q29tLnkpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHN0YXRpYyBjbG9zZUd1aWRlID0gZnVuY3Rpb24oZ3VpZGVOYW1lKXtcclxuICAgICAgICBpZighR3VpZGVMaXN0W2d1aWRlTmFtZV0pIHJldHVybjtcclxuXHJcbiAgICAgICAgR3VpZGVMaXN0W2d1aWRlTmFtZV0uZGlzcG9zZSgpO1xyXG4gICAgICAgIEd1aWRlTGlzdFtndWlkZU5hbWVdID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbmV4dEd1aWRlID0gZnVuY3Rpb24oZ3VpZGVOYW1lKXtcclxuICAgICAgICBpZighR3VpZGVMaXN0W2d1aWRlTmFtZV0pIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpIGluIEd1aWRlTGlzdCl7XHJcbiAgICAgICAgICAgIEd1aWRlTGlzdFtndWlkZU5hbWVdICYmIEd1aWRlTGlzdFtndWlkZU5hbWVdLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgR3VpZGVMaXN0W2d1aWRlTmFtZV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgUG9wdXBNYXAgPSBuZXcgQXJyYXk8dHlwZW9mIENvcmUuQ29udHJvbGxlcj4oKTtcclxuICAgIHN0YXRpYyBQb3B1cFF1ZXVlID0gbmV3IEFycmF5PENvcmUuQ29udHJvbGxlcj4oKTtcclxuICAgIHN0YXRpYyBQb3B1cERhdGEgPSB7fTtcclxuXHJcblxyXG4gICAgLy/miZPlvIDlvLnnqpdcclxuICAgIHN0YXRpYyBvcGVuUG9wdXAgKHBvcHVwQ3RybDp0eXBlb2YgQ29yZS5Db250cm9sbGVyLCBkYXRhKXtcclxuICAgICAgICBpZighcG9wdXBDdHJsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKFVJTWFuYWdlci5Qb3B1cE1hcC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLlBvcHVwTWFwLnB1c2gocG9wdXBDdHJsKTtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLlBvcHVwRGF0YVtwb3B1cEN0cmwuS2V5XSA9IGRhdGE7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cCA9IFVJTWFuYWdlci5Qb3B1cE1hcC5zaGlmdCgpO1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIub3BlbkNvbnRyb2xsZXIocG9wdXAsIFVJTWFuYWdlci5Qb3B1cERhdGFbcG9wdXAuS2V5XSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuQ29udHJvbGxlcihwb3B1cEN0cmwsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXROZXh0UG9wdXAgKHBvcHVwQ3RybDpDb3JlLkNvbnRyb2xsZXIsIC4uLmRhdGEpe1xyXG4gICAgICAgIGlmKCFwb3B1cEN0cmwpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoVUlNYW5hZ2VyLlBvcHVwUXVldWUubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5Qb3B1cFF1ZXVlLnB1c2gocG9wdXBDdHJsKTtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLlBvcHVwRGF0YVtwb3B1cEN0cmwubXVsdGl0b25LZXldID0gZGF0YTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIFVJTWFuYWdlci5Qb3B1cFF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3B1cEN0cmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5omT5byA5LiL5LiA5Liq5by556qXXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvcGVuTmV4dFBvcHVwICgpe1xyXG4gICAgICAgIC8vIFVJTWFuYWdlci5Qb3B1cE1hcC5zb21lKCh2YWx1ZSwgaWR4KT0+e1xyXG4gICAgICAgIC8vICAgICBpZihwb3B1cEN0cmwgaW5zdGFuY2VvZiB2YWx1ZSl7XHJcbiAgICAgICAgLy8gICAgICAgICBVSU1hbmFnZXIuUG9wdXBNYXAuc3BsaWNlKGlkeCwgMSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBVSU1hbmFnZXIuUG9wdXBEYXRhW3BvcHVwQ3RybC5tdWx0aXRvbktleV0gPSBudWxsO1xyXG5cclxuICAgICAgICBpZihVSU1hbmFnZXIuUG9wdXBRdWV1ZS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLlBvcHVwUXVldWUucG9wKCk7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cCA9IFVJTWFuYWdlci5Qb3B1cFF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIGlmKHBvcHVwKXtcclxuICAgICAgICAgICAgICAgIFVJTWFuYWdlci5jaGVja09wZW5DdHJsSW5zdChwb3B1cCwgLi4uVUlNYW5hZ2VyLlBvcHVwRGF0YVtwb3B1cC5tdWx0aXRvbktleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5omT5byA5paH5a2X56Gu6K6k5by556qXXHJcbiAgICBzdGF0aWMgb3BlbkNvbmZpcm1XaW5kb3coY29udGVudDpzdHJpbmdbXSwgeWVzQnRuQ2FsbGJhY2s/OkZ1bmN0aW9uLCBidG5ZZXNUeHQ/OnN0cmluZywgYnRuQ2FuY2VsVHh0PzpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMub3BlblBvcHVwKFVJLlB1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXIsIG5ldyBDb25maWcuUG9wdXBXaW5kb3dEYXRhKGNvbnRlbnQsIHllc0J0bkNhbGxiYWNrLCBDb25maWcuQ29uZmlybVdpbmRvd1R5cGUuQ29udGVudCwgYnRuWWVzVHh0LCBidG5DYW5jZWxUeHQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+W8gOWlluWKseW8ueeql1xyXG4gICAgc3RhdGljIG9wZW5SZXdhcmRXaW5kb3cocmV3YXJkRGF0YSwgeWVzQnRuQ2FsbGJhY2s/OkZ1bmN0aW9uLCBidG5ZZXNUeHQ/OnN0cmluZywgYnRuQ2FuY2VsVHh0PzpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMub3BlblBvcHVwKFVJLlB1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXIsIG5ldyBDb25maWcuUG9wdXBXaW5kb3dEYXRhKG51bGwsIHllc0J0bkNhbGxiYWNrLCBDb25maWcuQ29uZmlybVdpbmRvd1R5cGUuUmV3YXJkLCByZXdhcmREYXRhLCBidG5ZZXNUeHQsIGJ0bkNhbmNlbFR4dCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5omT5byA5paH5a2XK+WlluWKseW8ueeql1xyXG4gICAgc3RhdGljIG9wZW5Db250ZW50UmV3YXJkV2luZG93KGNvbnRlbnQ6c3RyaW5nW10sIHJld2FyZERhdGEsIHllc0J0bkNhbGxiYWNrPzpGdW5jdGlvbiwgYnRuWWVzVHh0PzpzdHJpbmcsIGJ0bkNhbmNlbFR4dD86c3RyaW5nKXtcclxuICAgICAgICB0aGlzLm9wZW5Qb3B1cChVSS5QdWJsaWNDb25maXJtYXRpb25Db250cm9sbGVyLCBuZXcgQ29uZmlnLlBvcHVwV2luZG93RGF0YShcclxuICAgICAgICAgICAgY29udGVudCwgXHJcbiAgICAgICAgICAgIHllc0J0bkNhbGxiYWNrLCBcclxuICAgICAgICAgICAgQ29uZmlnLkNvbmZpcm1XaW5kb3dUeXBlLkNvbnRlbnRBbmRSZXdhcmQsIFxyXG4gICAgICAgICAgICByZXdhcmREYXRhLCBcclxuICAgICAgICAgICAgYnRuWWVzVHh0LCBcclxuICAgICAgICAgICAgYnRuQ2FuY2VsVHh0XHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcbn0iLCJcclxuLy/niYjmnKznrqHnkIZcclxuZXhwb3J0IGNsYXNzIFZlcnNpb25NYW5hZ2Vye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3ZlcnNpb246bnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgc3RhdGljIHNldCBWZXJzaW9uKHZlcnNpb246bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl92ZXJzaW9uID0gdmVyc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IFZlcnNpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcclxuICAgIH1cclxufSIsImltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaG9vc2VTZXJ2aWNlQ29udHJvbGxlciBleHRlbmRzIENvcmUuQ29udHJvbGxlcntcclxuICAgIFZpZXc6VUkuQ2hvb3NlU2VydmljZVZpZXc7XHJcblxyXG4gICAgb25DcmVhdGUoKXtcclxuICAgICAgICB0aGlzLlNvcnRpbmdPcmRlcihDb25maWcuVUlDb25maWcuU29ydGluZ09yZGVyLk5ldFNpZ25hbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbkxpc2VudGVyKHRoaXMuVmlldy5Mb2NhbCwgdGhpcy5vcGVuTG9jYWxTZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5WaWV3LkFjY291bnROYW1lLnRleHQgPSBMb2NhbENvbmZpZy5HZXRBY291bnROYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkxvY2FsU2VydmljZSgpe1xyXG4gICAgICAgIGxldCBhY2NvdW50ID0gdGhpcy5WaWV3LkFjY291bnROYW1lLnRleHQ7XHJcbiAgICAgICAgaWYodHlwZW9mKGFjY291bnQpID09ICdzdHJpbmcnICYmIGFjY291bnQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIENvbmZpZy5OZXRDb25maWcuVGVtcE5hbWUgPSBhY2NvdW50O1xyXG4gICAgICAgICAgICBMb2NhbENvbmZpZy5TYXZlQWNvdW50TmFtZShhY2NvdW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID0gQ29uZmlnLk5ldENvbmZpZy5Mb2NhbFJlcXVlc3RVcmw7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5IdHRwU2VydmljZSgpe1xyXG4gICAgICAgIENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9IENvbmZpZy5OZXRDb25maWcuSHR0cFJlcXVlc3RVcmw7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Mb2NhbFdlY2hhdFNlcnZpY2UoKXtcclxuICAgICAgICBDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwgPSBDb25maWcuTmV0Q29uZmlnLkxvY2FsV2VjaGF0UmVxdWVzdFVybDtcclxuICAgICAgICBjb25zb2xlLmxvZygn6K+35rGC5Zyw5Z2A77yaJyxDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwpO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKCl7XHJcbiAgICAgICAgTG9jYWxDb25maWcuSXNDaG9vc2VkU2VydmljZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUxvZ2luRWlkLlNlcnZpY2VDaG9vc2VkKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4vQ29yZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENob29zZVNlcnZpY2VWaWV3IGV4dGVuZHMgQ29yZS5WaWV3e1xyXG4gICAgTG9jYWw6Zmd1aS5HT2JqZWN0O1xyXG4gICAgSHR0cDpmZ3VpLkdPYmplY3Q7XHJcbiAgICBMb2NhbFdlY2hhdDpmZ3VpLkdPYmplY3Q7XHJcbiAgICBBY2NvdW50TmFtZTpmZ3VpLkdUZXh0SW5wdXQ7XHJcblxyXG4gICAgTG9hZFZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5Mb2NhbCA9IHRoaXMuVUkuZ2V0Q2hpbGQoXCJMb2NhbFwiKVxyXG4gICAgICAgIHRoaXMuSHR0cCA9IHRoaXMuVUkuZ2V0Q2hpbGQoXCJIdHRwXCIpXHJcbiAgICAgICAgdGhpcy5Mb2NhbFdlY2hhdCA9IHRoaXMuVUkuZ2V0Q2hpbGQoXCJMb2NhbFdlY2hhdFwiKVxyXG5cclxuICAgICAgICB0aGlzLkFjY291bnROYW1lID0gdGhpcy5VSS5nZXRDaGlsZChcIkFjY291bnROYW1lXCIpLmFzVGV4dElucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzdHJveSgpe1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbi8qKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgQ29udHJvbGxlcj59ICovXHJcbi8vIGxldCBDdHJsTWFwOkNvbmZpZy5EaWN0aW9uYXJ5PENvbnRyb2xsZXI+ID0ge307XHJcblxyXG4vKiogQHR5cGUge09iamVjdDxzdHJpbmcsIFZpZXc+fSAqL1xyXG5sZXQgVmlld01hcDp7W2tleTpzdHJpbmddOlZpZXd9ID0ge307XHJcblxyXG4vKiogQHR5cGUge0NvbnRyb2xsZXJbXX0gKi9cclxubGV0IE9wZW5lZEN0cmwgPSBuZXcgQXJyYXk8Q29udHJvbGxlcj4oKTtcclxuXHJcbi8vIGV4cG9ydCBsZXQgQ3RybE1hcEFycmF5OkNvbmZpZy5EaWN0aW9uYXJ5PHR5cGVvZiBDb250cm9sbGVyPiA9IHt9O1xyXG5leHBvcnQgbGV0IEN0cmxNYXBBcnJheSA9IG5ldyBBcnJheTx0eXBlb2YgQ29udHJvbGxlcj4oKTtcclxuZXhwb3J0IGxldCBWaWV3TWFwQXJyYXk6Q29uZmlnLkRpY3Rpb25hcnk8dHlwZW9mIFZpZXc+ID0ge307XHJcblxyXG5jbGFzcyBDdHJsTGlzZW5lcntcclxuICAgIHB1YmxpYyBPYmo6Zmd1aS5HT2JqZWN0O1xyXG4gICAgcHVibGljIExpc2VuZXI6RnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3Iob2JqOmZndWkuR09iamVjdCwgbGlzZW5lcjpGdW5jdGlvbil7XHJcbiAgICAgICAgaWYoIW9iaikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLk9iaiA9IG9iajtcclxuICAgICAgICB0aGlzLkxpc2VuZXIgPSBsaXNlbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpe1xyXG4gICAgICAgIHRoaXMuT2JqLm9mZkNsaWNrKHRoaXMsIHRoaXMuTGlzZW5lcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7T3BlbmVkQ3RybCwgVmlld01hcH1cclxuXHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vIOWQkVVpTWFuYWdlciDms6jlhozohJrmnKwg6L+Y5pyJ5LiA5LqbIE1TR0lEXHJcbi8vLyDkuIDoiKzmmK9wYW5lbCDmjILovb3ov5nmoLfnmoTohJrmnKwg6ZyA6KaB5ZCR5YW25LuW5qih5Z2XIOaIluiAheiEmuacrOmAmuS/oVxyXG4vLy8gPC9zdW1tYXJ5PlxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVWlDVkJhc2UgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXJ7XHJcbiAgICBwdWJsaWMgbXVsdGl0b25LZXk6c3RyaW5nO1xyXG5cclxuICAgIG9uRGVzdHJveSgpXHJcbiAgICB7XHJcbiAgICAgICAgLy/ph43lhpnmraTnu4Tku7bmlrnms5Xlv4XpobvmiafooYxcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBVaUNWQmFzZXtcclxuICAgIHN0YXRpYyBjS2V5OnN0cmluZztcclxuICAgIHN0YXRpYyB2aWV3OnR5cGVvZiBWaWV3O1xyXG5cclxuICAgIC8vIHB1YmxpYyBtdWx0aXRvbktleTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgVmlldzpWaWV3O1xyXG5cclxuICAgIHB1YmxpYyBEYXRhO1xyXG4gICAgcHVibGljIElzT3BlbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzRGVzdHJveWVkID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBJc1Nob3cgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc1BvcHVwID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNGdWxsU2NyZWVuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNEZWZhdWx0ID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNJbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICBwcml2YXRlIGxpc2VudGVyQXJyYXkgPSBuZXcgQXJyYXk8Q3RybExpc2VuZXI+KCk7XHJcbiAgICBcclxuICAgIHN0YXRpYyBzZXQgS2V5KGtleTpzdHJpbmcpe3RoaXMuY0tleSA9IGtleX1cclxuICAgIHN0YXRpYyBnZXQgS2V5KCl7cmV0dXJuIHRoaXMuY0tleX1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoY0tleT86c3RyaW5nLCB2aWV3Pzp0eXBlb2YgVmlldywgaXNGdWxsU2NyZWVuPzpib29sZWFuLCBpc1BvcHVwPzpib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgaWYoIWNLZXkgfHwgIXZpZXcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQga2V5IG9yIHZpZXdcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZighT3BlbmVkQ3RybFtjS2V5XSkge1xyXG4gICAgICAgICAgICBPcGVuZWRDdHJsW2NLZXldID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsZXQgdktleSA9IHZpZXcuS2V5O1xyXG4gICAgICAgIGlmKCFWaWV3TWFwW3ZLZXldKXtcclxuICAgICAgICAgICAgVmlld01hcFt2S2V5XSA9IG5ldyB2aWV3KHZLZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tdWx0aXRvbktleSA9IGNLZXk7XHJcbiAgICAgICAgdGhpcy5WaWV3ID0gVmlld01hcFt2S2V5XTtcclxuICAgICAgICB0aGlzLklzRnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbiA9PSB0cnVlO1xyXG4gICAgICAgIHRoaXMuSXNQb3B1cCA9IGlzUG9wdXAgPT0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0Q3RybChpZDpudW1iZXIpe1xyXG4gICAgICAgIEN0cmxNYXBBcnJheVtpZF0gPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbml0KGNLZXksIHZpZXc6dHlwZW9mIFZpZXcsIHZLZXk/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5LZXkgPSBjS2V5O1xyXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XHJcbiAgICAgICAgdGhpcy52aWV3LktleSA9IHZLZXk/IHZLZXk6IGNLZXk7XHJcbiAgICAgICAgQ3RybE1hcEFycmF5W3RoaXMuS2V5XSA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVmlldyh2aWV3OiB0eXBlb2YgVmlldywga2V5OnN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLlZpZXcgPSBuZXcgdmlldyhrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuVmlldykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gdmlldyBjcmVhdGVkIVwiKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLklzRGVzdHJveWVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5WaWV3LkluaXRpYWxpemUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKF9kYXRhPykge1xyXG4gICAgICAgIHRoaXMuSXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkRhdGEgPSBfZGF0YTtcclxuXHJcbiAgICAgICAgLy8gRmFjYWRlLlB1c2hDdHJsKHRoaXMsIHRoaXMuRGF0YSk7XHJcbiAgICAgICAgdGhpcy5zaG93KF9kYXRhKTtcclxuICAgICAgICB0aGlzLm9wZW5PdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk92ZXIoKSB7XHJcbiAgICAgICAgaWYodGhpcy5Jc0Z1bGxTY3JlZW4pe1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlVpTm90aWNlRWlkLk9wZW5GdWxsU2NyZWVuLCB0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSXNQb3B1cCl7XHJcbiAgICAgICAgICAgIHRoaXMuU29ydGluZ09yZGVyKENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuUG9wdXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vbk9wZW4odGhpcy5EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRCdXR0b25MaXNlbnRlcihvYmplY3Q6Zmd1aS5HT2JqZWN0LCBmdW46RnVuY3Rpb24sIGRhdGE/OkFycmF5PGFueT4sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZihvYmplY3QgPT0gbnVsbCB8fCBmdW4gPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJvYmplY3Qgb3IgZnVuIGlzIG51bGxcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXNBcmcgPSB0aGlzQXJnP3RoaXNBcmc6IHRoaXM7XHJcbiAgICAgICAgb2JqZWN0Lm9uQ2xpY2sodGhpc0FyZywgZnVuLCBkYXRhKTtcclxuICAgICAgICB0aGlzLmxpc2VudGVyQXJyYXkucHVzaChuZXcgQ3RybExpc2VuZXIob2JqZWN0LCBmdW4pKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBpZih0aGlzLklzT3BlbiA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLklzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25DbG9zZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlQ29udHJvbGxlciwgdGhpcy5tdWx0aXRvbktleSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5Jc1BvcHVwKXtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5VaU5vdGljZUVpZC5DbG9zZVBvcHVwLCB0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSXNGdWxsU2NyZWVuKXtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5VaU5vdGljZUVpZC5DbG9zZUZ1bGxTY3JlZW4sIHRoaXMubXVsdGl0b25LZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGVsZXRlIEN0cmxNYXBbdGhpcy5tdWx0aXRvbktleV07XHJcbiAgICAgICAgLy8gT3BlbmVkQ3RybC5zcGxpY2UoT3BlbmVkQ3RybC5pbmRleE9mKHRoaXMpLCAxKTtcclxuICAgICAgICBPcGVuZWRDdHJsW3RoaXMubXVsdGl0b25LZXldID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy/muIXnqbrngrnlh7vkuovku7ZcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5saXNlbnRlckFycmF5KXtcclxuICAgICAgICAgICAgdGhpcy5saXNlbnRlckFycmF5W2ldLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc2VudGVyQXJyYXlbaV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/muIXpmaTnm5HlkKzkuovku7ZcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICAvL+a4hemZpOaJgOacieiuoeaXtuWZqFxyXG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSXNEZXN0cm95ZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5Jc0Rlc3Ryb3llZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLlZpZXcgJiYgdGhpcy5WaWV3LmRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVmlldy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlZpZXcgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLklzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuSXNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5EYXRhID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy/plIDmr4HoioLngrlcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmmL7npLrnlYzpnaJcclxuICAgIHNob3coZGF0YT8pIHtcclxuICAgICAgICBkYXRhID0gZGF0YT8gZGF0YTogdGhpcy5EYXRhO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5Jc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOacqm9wZW7nirbmgIHvvIzkuI3lpITnkIZcclxuICAgICAgICBpZiAoIXRoaXMuSXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLklzU2hvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuSXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5WaWV3LnNob3coZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLklzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vblNob3coZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6ZqQ6JeP55WM6Z2iXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5Jc1Nob3cpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMuSXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5WaWV3LmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSXNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkhpZGUoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDorr7nva7muLLmn5Ppobrluo9cclxuICAgIFNvcnRpbmdPcmRlcihvcmRlcjpudW1iZXIpIHtcclxuICAgICAgICBpZighdGhpcy5Jc0Rlc3Ryb3llZCl7XHJcbiAgICAgICAgICAgIHRoaXMuVmlldy5Tb3J0aW5nT3JkZXIob3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmmK/lkKblj6/op6bmjqdcclxuICAgIGludGVyYWN0aXZlKGNhblRvdWNoOmJvb2xlYW4pe1xyXG4gICAgICAgIGlmKGNhblRvdWNoID09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuSXNJbnRlcmFjdGl2ZSA9IGNhblRvdWNoO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuSXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5WaWV3LmludGVyYWN0aXZlKGNhblRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbkludGVyYWN0aXZlKGNhblRvdWNoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVUkoZGF0YT8pe1xyXG4gICAgICAgIHRoaXMuVmlldy5yZWZyZXNoVUkoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZSgpIHt9XHJcblxyXG4gICAgb25DcmVhdGUoKSB7fVxyXG5cclxuICAgIG9uT3BlbihkYXRhPykge31cclxuXHJcbiAgICBvblNob3coZGF0YT8pIHt9XHJcblxyXG4gICAgb25IaWRlKCkge31cclxuICAgIFxyXG4gICAgb25JbnRlcmFjdGl2ZShjYW5Ub3VjaDpib29sZWFuKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmlldyBleHRlbmRzIFVpQ1ZCYXNlIHtcclxuICAgIHN0YXRpYyB2S2V5OnN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGxpc2VudGVyQXJyYXkgPSBuZXcgQXJyYXk8Q3RybExpc2VuZXI+KCk7XHJcbiAgICBwcml2YXRlIF9pc0FsaXZlOmJvb2xlYW47XHJcbiAgICAvLyBwdWJsaWMgbXVsdGl0b25LZXk6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBGdWlJbWFnZVVybDpzdHJpbmc7XHJcbiAgICBwcml2YXRlIEZ1aUJ1ZmZlclVybDpzdHJpbmc7XHJcbiAgICBwcml2YXRlIFBrZ0FkcnM6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBQa2c6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBDb206c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfVUk6Zmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBDYWxsYmFja0xpc3Q6QXJyYXk8RnVuY3Rpb24+ID0gW107XHJcbiAgICBwcml2YXRlIHVpQ2ZnOkNvbmZpZy5WaWV3Q29uZmlnO1xyXG5cclxuICAgIHB1YmxpYyBXaW5kb3c6Zmd1aS5HQ29tcG9uZW50OyAvL+W8ueWHuueql+WPo++8jOazqOaEj+e7hOS7tuWRveWQjeS4uldpbmRvd1xyXG4gICAgcHVibGljIEJ0bl9CYWNrOmZndWkuR0J1dHRvbjsgICAvL+WFs+mXreaMiemSru+8jOWRveWQjeS4ukJ0bl9CYWNrXHJcbiAgICBwdWJsaWMgTGlzdDpmZ3VpLkdMaXN0OyAgLy/liJfooajvvIzpnIDoh6rooYzlrprkuYlcclxuXHJcbiAgICBzdGF0aWMgc2V0IEtleShrZXk6c3RyaW5nKXt0aGlzLnZLZXkgPSBrZXl9XHJcbiAgICBzdGF0aWMgZ2V0IEtleSgpe3JldHVybiB0aGlzLnZLZXl9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tdWx0aXRvbktleSA9IGtleTtcclxuICAgICAgICB0aGlzLl9pc0FsaXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYoIVZpZXdNYXBba2V5XSkge1xyXG4gICAgICAgICAgICBWaWV3TWFwW2tleV0gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51aUNmZyA9IENvbmZpZy5WaWV3S2l0W2tleV07XHJcbiAgICAgICAgaWYoIXRoaXMudWlDZmcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbmNvcnJlY3QgdmlldyBrZXkhJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFVJKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VJO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJc0FsaXZlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWxpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdGlhbGl6ZSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9VSSl7XHJcbiAgICAgICAgICAgIHRoaXMuX1VJID0gTWFuYWdlci5TcGF3bk1hbmFnZXIuTG9hZFZpZXcodGhpcy51aUNmZy5Qa2csIHRoaXMudWlDZmcuQ29tKTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuX1VJKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgVWkgY29tOiAnLCB0aGlzLnVpQ2ZnLktleSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5XaW5kb3cgPSB0aGlzLlVJLmdldENoaWxkKCdXaW5kb3cnKSBhcyBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxvYWRWaWV3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2Uoa2V5KVxyXG4gICAge1xyXG4gICAgICAgIGlmICgha2V5KSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoIVZpZXdNYXBba2V5XSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZpZXdNYXBba2V5XSA9IG5ldyBWaWV3KGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gVmlld01hcFtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjYWxsYmFja0tleVxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHNldENhbGxiYWNrKGNhbGxiYWNrS2V5OnN0cmluZywgY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgICAgIHRoaXMuQ2FsbGJhY2tMaXN0W2NhbGxiYWNrS2V5XSA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGludm9rZUNhbGxiYWNrKGNhbGxiYWNrS2V5LCAuLi5hcmdzKXtcclxuICAgICAgICBpZih0eXBlb2YoY2FsbGJhY2tLZXkpICE9ICdzdHJpbmcnIHx8IHR5cGVvZih0aGlzLkNhbGxiYWNrTGlzdFtjYWxsYmFja0tleV0pICE9ICdmdW5jdGlvbicpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5DYWxsYmFja0xpc3RbY2FsbGJhY2tLZXldKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJ1dHRvbkxpc2VudGVyKG9iamVjdDpmZ3VpLkdPYmplY3QsIGZ1bjpGdW5jdGlvbiwgZGF0YT86QXJyYXk8YW55PiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKG9iamVjdCA9PSBudWxsIHx8IGZ1biA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm9iamVjdCBvciBmdW4gaXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpc0FyZyA9IHRoaXNBcmc/dGhpc0FyZzogdGhpcztcclxuICAgICAgICBvYmplY3Qub25DbGljayh0aGlzQXJnLCBmdW4sIGRhdGEpO1xyXG4gICAgICAgIHRoaXMubGlzZW50ZXJBcnJheS5wdXNoKG5ldyBDdHJsTGlzZW5lcihvYmplY3QsIGZ1bikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrTGlzdENhbGxiYWNrKHRoaXNBcmcsIGZ1bmM6RnVuY3Rpb24sIC4uLmRhdGEpe1xyXG4gICAgICAgIENvbW1vbi5jbGlja0xpc3RDYWxsYmFjayh0aGlzLkxpc3QsIHRoaXNBcmcsIGZ1bmMsIC4uLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9pc0FsaXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8v5riF6Zmk55uR5ZCs5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgLy/muIXpmaTmiYDmnInorqHml7blmahcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIC8v5riF56m654K55Ye75LqL5Lu2XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRoaXMubGlzZW50ZXJBcnJheSl7XHJcbiAgICAgICAgICAgIHRoaXMubGlzZW50ZXJBcnJheVtpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5saXNlbnRlckFycmF5W2ldID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlbGV0ZSBWaWV3TWFwW3RoaXMubXVsdGl0b25LZXldXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZm9yKGxldCBpIGluIHRoaXMpIHtcclxuICAgICAgICAvLyAgICAgLy8g6ZSA5q+BVUlcclxuICAgICAgICAvLyAgICAgLy8gaWYodGhpc1tpXSAmJiB0aGlzW2ldLmRpc3Bvc2UpIHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIHRoaXNbaV0uZGlzcG9zZSgpO1xyXG4gICAgICAgIC8vICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vICAgICAvLyB0aGlzW2ldID0gdW5kZWZpbmVkXHJcblxyXG4gICAgICAgIC8vICAgICAvLyBpZih0aGlzW2ldIGluc3RhbmNlb2YgZmd1aS5HQ29tcG9uZW50ID09IHRydWUpe1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgdGhpc1tpXS5kaXNwbGF5T2JqZWN0Lm9mZkFsbCgpO1xyXG4gICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLl9VSS5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBvbkRlc3Ryb3koKXt9XHJcblxyXG4gICAgTG9hZFZpZXcoKSB7fVxyXG5cclxuICAgIHJlZnJlc2hVSShkYXRhPykge31cclxuXHJcbiAgICBpbnRlcmFjdGl2ZShjYW5Ub3VjaCkge1xyXG4gICAgICAgIHRoaXMuX1VJLnRvdWNoYWJsZSA9IGNhblRvdWNoO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgU29ydGluZ09yZGVyKG9yZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fVUkuc29ydGluZ09yZGVyID0gb3JkZXI7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBzaG93KGRhdGE/KXtcclxuICAgICAgICB0aGlzLl9VSS52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCl7XHJcbiAgICAgICAgdGhpcy5fVUkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjYWRle1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBzdGF0aWMgUHVzaEN0cmwoY3RybDpDb250cm9sbGVyLCBkYXRhPyl7XHJcbiAgICAgICAgaWYoIWN0cmwpIHJldHVybjtcclxuXHJcbiAgICAgICAgT3BlbmVkQ3RybC5wdXNoKGN0cmwpO1xyXG4gICAgICAgIC8v5pi+56S65qCI5bqV55WM6Z2iXHJcbiAgICAgICAgLy8gT3BlbmVkQ3RybC5mb3JFYWNoKCh2KT0+IHt2LnNob3coKX0pXHJcbiAgICAgICAgbGV0IG5leHRjID0gT3BlbmVkQ3RybC5zaGlmdCgpO1xyXG4gICAgICAgIGlmKG5leHRjKXtcclxuICAgICAgICAgICAgbmV4dGMuc2hvdyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbnRyb2xsZXIoaWQpe1xyXG4gICAgICAgIGxldCBjdHJsID0gQ3RybE1hcEFycmF5W2lkXTtcclxuICAgICAgICBpZihjdHJsKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGN0cmwoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gJy4uL0RhdGEvRGF0YSc7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29udHJvbGxlciBleHRlbmRzIFVJLkNvbnRyb2xsZXJ7XHJcbiAgICBwdWJsaWMgVmlldzpVSS5Mb2FkaW5nVmlldztcclxuXHJcbiAgICBvbk9wZW4oZGF0YSkge1xyXG4gICAgICAgIHRoaXMuVmlldy5TaG93X0Muc2VsZWN0ZWRJbmRleCA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uTmV0SHR0cENvbm5lY3RFaWQuQ29ubmVjdEJlZ2luLCB0aGlzLm9wZW5IdHRwU3RhcnQpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uTmV0SHR0cENvbm5lY3RFaWQuU2VydmljZVJlc3BvbmQsIHRoaXMub25IdHRwUmVzcG9uZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0xvYWRpbmcoKXtcclxuICAgICAgICB0aGlzLlZpZXcuU2hvd19DLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVMb2FkaW5nKCl7XHJcbiAgICAgICAgdGhpcy5WaWV3LlNob3dfQy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvL+i/nuaOpeWujOaIkFxyXG4gICAgb25IdHRwUmVzcG9uZCgpe1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5byA5aeL6L+e5o6lXHJcbiAgICBvcGVuSHR0cFN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZSgpe1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLm9mZihjYy5EaXJlY3Rvci5FVkVOVF9CRUZPUkVfU0NFTkVfTE9BRElORywgdGhpcy5jbG9zZSwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSAnLi4vQ29uZmlnL0NvbmZpZyc7XHJcbmltcG9ydCB7VUlDb25maWd9IGZyb20gXCIuLi9Db25maWcvVUlDb25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyIGV4dGVuZHMgQ29yZS5Db250cm9sbGVye1xyXG4gICAgcHVibGljIFZpZXc6VUkuTG9hZGluZ1Byb2dyZXNzVmlldztcclxuICAgIHB1YmxpYyBQcm9ncmVzcyA9IDA7XHJcbiAgICBwdWJsaWMgSXNMb2FkZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgUGtnTnVtID0gMDtcclxuICAgIHByaXZhdGUgUmVzTnVtID0gMDtcclxuXHJcbiAgICBvbk9wZW4oZGF0YSkge1xyXG4gICAgICAgIHRoaXMuVmlldy5VSS50ZXh0ID0gXCIwJVwiO1xyXG5cclxuICAgICAgICAvL+W8gOWPkeeJiOWFiOaYvuekuumAieacjeWKoeWZqOeUu+mdolxyXG4gICAgICAgIC8vIGlmKE1hbmFnZXIuVmVyc2lvbk1hbmFnZXIuVmVyc2lvbiA9PSBDb25maWcuVmVyc2lvbkNvbmZpZy5EZXZlbG9wKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLnNldFByb2dyZXNzTnVtYmVyKCk7XHJcbiAgICAgICAgdGhpcy5zaW1Qcm9ncmVzcygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuUGFja2FnZUxvYWRlZCwgdGhpcy5vblJlc0xvYWRlZCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkxvZ2luU3VjY2VzcywgdGhpcy5vbkxvZ2luU3VjY2Vzcyk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkNvbmZpZ0xvYWRlZCwgdGhpcy50cnlDbG9zZSk7XHJcbiAgICAgICAgLy/ov5vlnLrmma/kuZ/pnIDopoHnrYnlvoXmqKHmi5/ov5vluqZcclxuXHRcdC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVFbnRlckVpZC5NYWluTWVudSwgdGhpcy50cnlDbG9zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRQcm9ncmVzc051bWJlcigpe1xyXG4gICAgICAgIC8v55m75b2V6ZyA6KaB5Yqg6L2955qEVUnljIXmlbDph48tLWNvY29z55SoXHJcbiAgICAgICAgLy8gdGhpcy5Qa2dOdW0gPSBVSUNvbmZpZy5VSVBrZ3MubGVuZ3RoICogMjtcclxuICAgICAgICB0aGlzLlJlc051bSA9IENvbmZpZy5sb2dpblJlc1VybHMubGVuZ3RoICsgQ29uZmlnLnVybHMubGVuZ3RoICsgNTtcclxuXHJcbiAgICAgICAgLy/lsI/muLjmiI/liqDkuIrliIbljIXov5vluqZcclxuICAgICAgICBpZihDb21tb24uaXNNaW5pR2FtZSgpKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuUGtnTnVtICs9IFVJQ29uZmlnLlN1YlBrZ3MubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLlJlc051bSArPSBVSUNvbmZpZy5TdWJQa2dzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1VpUHJvZ3Jlc3MocHJvZ3Jlc3M6bnVtYmVyLCBwa2dOYW1lPzpzdHJpbmcpe1xyXG4gICAgICAgIHBrZ05hbWUgPSBwa2dOYW1lIHx8ICcnO1xyXG4gICAgICAgIHRoaXMuVmlldy5VSS50ZXh0ID0gJ0xvYWRpbmcgdWkgJyArIHBrZ05hbWUgKyAnOiAnICsgcHJvZ3Jlc3MgKiAxMDAgKyAnJSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lgYfov5vluqZcclxuICAgIHNpbVByb2dyZXNzKCl7XHJcbiAgICAgICAgdGhpcy5Qcm9ncmVzcyArPSAxMDAgLyB0aGlzLlJlc051bTtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLmNlaWwodGhpcy5Qcm9ncmVzcyk7XHJcbiAgICAgICAgcHJvZ3Jlc3MgPSBwcm9ncmVzcyA+IDEwMD8gMTAwOiBwcm9ncmVzcztcclxuICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9IHByb2dyZXNzICsgXCIlXCI7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuUHJvZ3Jlc3MgPj0gMTAwKXtcclxuICAgICAgICAgICAgdGhpcy50cnlDbG9zZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMTAwLCB0aGlzLCB0aGlzLnNpbVByb2dyZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9ncmVzcyhhZGRQcm9ncmVzcyl7XHJcbiAgICAgICAgdGhpcy5Qcm9ncmVzcyArPSAxMDAgLyB0aGlzLlBrZ051bTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlByb2dyZXNzKTtcclxuICAgICAgICAvLyB0aGlzLlByb2dyZXNzID0gdGhpcy5Qcm9ncmVzcyA+IDEwMD8gMTAwOiB0aGlzLlByb2dyZXNzO1xyXG5cclxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBNYXRoLmNlaWwodGhpcy5Qcm9ncmVzcyk7XHJcbiAgICAgICAgcHJvZ3Jlc3MgPSBwcm9ncmVzcyA+IDEwMD8gMTAwOiBwcm9ncmVzcztcclxuICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9IHByb2dyZXNzICsgXCIlXCI7XHJcblxyXG4gICAgICAgIC8v5Yqg6L295a6M5oiQVUnljIVcclxuICAgICAgICBpZih0aGlzLlByb2dyZXNzID49IDEwMCl7XHJcbiAgICAgICAgICAgIHRoaXMuSXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlNjZW5lTG9naW5FaWQuUGFja2FnZUxvYWRlZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dXeExvZ2luKCk7XHJcbiAgICAgICAgICAgIC8vIGlmKERhdGFCYXNlLkxvZ2luRGF0YS5BY2NvdW50TmFtZSl7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1d4TG9naW4oKXtcclxuICAgICAgICBpZighQ29tbW9uLmlzTWluaUdhbWUoKSB8fCBMb2NhbENvbmZpZy5Jc1d4QXV0aCB8fCAhdGhpcy5Jc0xvYWRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLlZpZXcuc2hvd1d4TG9naW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q29uZmlnUHJvZ3Jlc3MoKXtcclxuICAgICAgICBpZihDb25maWcuRGF0YUNvbmZpZy5Jc0NvbmZpZ0xvYWRlZCA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIHRoaXMuVmlldy5VSS50ZXh0ID0gXCLliqDovb3phY3nva7kuK1cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0xvZ2luUHJvZ3Jlc3MoKXtcclxuICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9IFwi55m75b2V5LitXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2dpblN1Y2Nlc3MoKXtcclxuICAgICAgICB0aGlzLnRyeUNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNMb2FkZWQoKXtcclxuICAgICAgICB0aGlzLklzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRyeUNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mu6HotrPmiYDmnInmnaHku7bmiY3lhbPpl63liqDovb3nlYzpnaJcclxuICAgIHRyeUNsb3NlKCl7XHJcbiAgICAgICAgaWYodGhpcy5Qcm9ncmVzcyA8IDEwMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZihNYW5hZ2VyLlZlcnNpb25NYW5hZ2VyLlZlcnNpb24gPT0gQ29uZmlnLlZlcnNpb25Db25maWcuRGV2ZWxvcCl7XHJcbiAgICAgICAgICAgIGlmKCFMb2NhbENvbmZpZy5Jc0Nob29zZWRTZXJ2aWNlKSByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihDb25maWcuRGF0YUNvbmZpZy5Jc0NvbmZpZ0xvYWRlZCA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpZ1Byb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKERhdGEuTG9naW5EYXRhLklzTG9naW5lZCAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvZ2luUHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIUNvbmZpZy5VSUNvbmZpZy5Mb2dpblBhY2thZ2VMb2FkZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKXtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2ltUHJvZ3Jlc3NFbmQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7VUlDb25maWd9IGZyb20gXCIuLi9Db25maWcvVUlDb25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUHJvZ3Jlc3NWaWV3IGV4dGVuZHMgQ29yZS5WaWV3e1xyXG4gICAgcHVibGljIExvZ2luX0M6Zmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIExvYWRWaWV3KCkge1xyXG4gICAgICAgIC8v5riy5p+T5bGC57qnXHJcbiAgICAgICAgdGhpcy5VSS5zb3J0aW5nT3JkZXIgPSBVSUNvbmZpZy5Tb3J0aW5nT3JkZXIuU2NlbmVMb2FkaW5nO1xyXG5cclxuICAgICAgICB0aGlzLkxvZ2luX0MgPSB0aGlzLlVJLmdldENvbnRyb2xsZXIoJ0xvZ2luX0MnKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93V3hMb2dpbigpe1xyXG4gICAgICAgIHRoaXMuTG9naW5fQy5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tICcuLi9EYXRhL0RhdGEnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1ZpZXcgZXh0ZW5kcyBVSS5WaWV3e1xyXG4gICAgcHVibGljIFNob3dfQzpmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgTG9hZFZpZXcoKSB7XHJcbiAgICAgICAgLy/muLLmn5PlsYLnuqdcclxuICAgICAgICB0aGlzLlVJLnNvcnRpbmdPcmRlciA9IENvbmZpZy5VSUNvbmZpZy5Tb3J0aW5nT3JkZXIuTmV0U2lnbmFsO1xyXG5cclxuICAgICAgICB0aGlzLlNob3dfQyA9IHRoaXMuVUkuZ2V0Q29udHJvbGxlcihcIlNob3dfQ1wiKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQge1VJQ29uZmlnfSBmcm9tIFwiLi4vQ29uZmlnL1VJQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4vQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuXHJcbmxldCBjS2V5ID0gQ29uZmlnLlZpZXdLaXQuUHVibGljQ29uZmlybWF0aW9uLktleTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdWJsaWNDb25maXJtYXRpb25Db250cm9sbGVyIGV4dGVuZHMgQ29yZS5Db250cm9sbGVye1xyXG4gICAgc3RhdGljIGNLZXkgPSBjS2V5O1xyXG4gICAgVmlldzpVSS5QdWJsaWNDb25maXJtYXRpb25WaWV3O1xyXG4gICAgQ2FsbGJhY2s6RnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcihjS2V5LCBVSS5QdWJsaWNDb25maXJtYXRpb25WaWV3LCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuKGRhdGE6Q29uZmlnLlBvcHVwV2luZG93RGF0YSkge1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uTGlzZW50ZXIodGhpcy5WaWV3LkJ0bl9DbG9zZSwgdGhpcy5jbG9zZSk7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b25MaXNlbnRlcih0aGlzLlZpZXcuQnRuX0NhbmNlbCwgdGhpcy5jbG9zZSk7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b25MaXNlbnRlcih0aGlzLlZpZXcuQnRuX1llcywgdGhpcy55ZXNCdG5PbkNsaWNrKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihkYXRhID09IG51bGwgfHwgZGF0YSBpbnN0YW5jZW9mIENvbmZpZy5Qb3B1cFdpbmRvd0RhdGEgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHBvcHVwIHdpbmRvdyBkYXRhLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuQ2FsbGJhY2sgPSBkYXRhLlllc0J0bkNhbGxiYWNrO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hVSShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgeWVzQnRuT25DbGljaygpe1xyXG4gICAgICAgIGlmKHRoaXMuQ2FsbGJhY2spe1xyXG4gICAgICAgICAgICB0aGlzLkNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZSgpe1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7VUlDb25maWd9IGZyb20gXCIuLi9Db25maWcvVUlDb25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxubGV0IHZLZXkgPSBDb25maWcuVmlld0tpdC5QdWJsaWNDb25maXJtYXRpb24uS2V5O1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1YmxpY0NvbmZpcm1hdGlvblZpZXcgZXh0ZW5kcyBDb3JlLlZpZXd7XHJcbiAgICBzdGF0aWMgdktleSA9IHZLZXk7XHJcbiAgICBCdG5fQ2xvc2U6Zmd1aS5HQnV0dG9uO1xyXG4gICAgQnRuX1llczpmZ3VpLkdCdXR0b247XHJcbiAgICBCdG5fQ2FuY2VsOmZndWkuR0J1dHRvbjtcclxuICAgIExpc3RfQ29udGVudDpmZ3VpLkdMaXN0O1xyXG4gICAgTGlzdF9SZXdhcmQ6Zmd1aS5HTGlzdDtcclxuICAgIENvbnRlbnRfQzpmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBCdG5UeXBlX0M6Zmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIodktleSlcclxuICAgIH1cclxuXHJcbiAgICBMb2FkVmlldygpIHtcclxuICAgICAgICB0aGlzLkJ0bl9DbG9zZSA9IHRoaXMuV2luZG93LmdldENoaWxkKCdCdG5fQ2xvc2UnKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLkJ0bl9ZZXMgPSB0aGlzLldpbmRvdy5nZXRDaGlsZCgnQnRuX1llcycpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuQnRuX0NhbmNlbCA9IHRoaXMuV2luZG93LmdldENoaWxkKCdCdG5fQ2FuY2VsJykuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5MaXN0X0NvbnRlbnQgPSB0aGlzLldpbmRvdy5nZXRDaGlsZCgnTGlzdF9Db250ZW50JykuYXNMaXN0O1xyXG4gICAgICAgIHRoaXMuTGlzdF9SZXdhcmQgPSB0aGlzLldpbmRvdy5nZXRDaGlsZCgnTGlzdF9SZXdhcmQnKS5hc0xpc3Q7XHJcbiAgICAgICAgdGhpcy5Db250ZW50X0MgPSB0aGlzLldpbmRvdy5nZXRDb250cm9sbGVyKCdDb250ZW50X0MnKTtcclxuICAgICAgICB0aGlzLkJ0blR5cGVfQyA9IHRoaXMuV2luZG93LmdldENvbnRyb2xsZXIoJ0J0blR5cGVfQycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hVSShkYXRhOkNvbmZpZy5Qb3B1cFdpbmRvd0RhdGEpe1xyXG4gICAgICAgIGlmKCFkYXRhKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuQ29udGVudF9DLnNlbGVjdGVkSW5kZXggPSBkYXRhLldpbmRvd1R5cGUgLSAxO1xyXG4gICAgICAgIHN3aXRjaCAoZGF0YS5XaW5kb3dUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLkNvbmZpcm1XaW5kb3dUeXBlLkNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJ0blR5cGVfQy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbENvbnRlbnRzKGRhdGEuQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDb25maWcuQ29uZmlybVdpbmRvd1R5cGUuUmV3YXJkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5CdG5UeXBlX0Muc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxSZXdhcmRzKGRhdGEuUmV3YXJkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLkNvbmZpcm1XaW5kb3dUeXBlLkNvbnRlbnRBbmRSZXdhcmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJ0blR5cGVfQy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbENvbnRlbnRzKGRhdGEuQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxSZXdhcmRzKGRhdGEuUmV3YXJkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5oyJ6ZKu5paH5a2XXHJcbiAgICAgICAgaWYoZGF0YS5ZZXNCdG5Db250ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5CdG5fWWVzLnRleHQgPSBkYXRhLlllc0J0bkNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRhdGEuQ2FuY2VsQnRuQ29udGVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuQnRuX0NhbmNlbC50ZXh0ID0gZGF0YS5DYW5jZWxCdG5Db250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaWxsQ29udGVudHMoZGF0YTpBcnJheTxzdHJpbmc+KXtcclxuICAgICAgICB0aGlzLkxpc3RfQ29udGVudC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCh2PT57XHJcbiAgICAgICAgICAgIHRoaXMuTGlzdF9Db250ZW50LmFkZEl0ZW1Gcm9tUG9vbCgpLnRleHQgPSB2O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxSZXdhcmRzKHJld2FyZERhdGE6YW55W10pe1xyXG4gICAgICAgIENvbW1vbi5maWxsSXRlbUxpc3REYXRhKHJld2FyZERhdGEsIHRoaXMuTGlzdF9SZXdhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9DaG9vc2VTZXJ2aWNlQ29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ2hvb3NlU2VydmljZVZpZXcnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvcmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvYWRpbmdDb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nUHJvZ3Jlc3NDb250cm9sbGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nUHJvZ3Jlc3NWaWV3JztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nVmlldyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vUHVibGljQ29uZmlybWF0aW9uVmlldyc7XHJcbiJdfQ==

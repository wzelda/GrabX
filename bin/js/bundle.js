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
},{"../UI/UI":59,"./Manager":39}],38:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/LocalConfig":12,"../Manager/Manager":39,"../UI/UI":59}],39:[function(require,module,exports){
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
},{"./BaseManager":34,"./ClickEffectManager":35,"./DataManager":36,"./LoadingIconManager":37,"./LoadingProgressManager":38,"./NetManager":40,"./PoolManager":41,"./RoleBase":42,"./RoleManager":43,"./SceneManager":44,"./SpawnManager":45,"./StateBase":46,"./TimerManager":47,"./UIManager":48,"./VersionManager":49}],40:[function(require,module,exports){
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
},{"../Config/Config":8,"./Manager":39}],43:[function(require,module,exports){
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
},{"../Config/Config":8,"../Manager/Manager":39}],44:[function(require,module,exports){
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
},{"../GameConfig":26,"../GameScene":27,"./Manager":39}],45:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"./Manager":39}],46:[function(require,module,exports){
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
},{"../Config/Config":8}],47:[function(require,module,exports){
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
},{}],48:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../UI/Core":52,"../UI/UI":59,"./Manager":39}],49:[function(require,module,exports){
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
},{}],50:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"./Core":52}],51:[function(require,module,exports){
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
},{"./Core":52}],52:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../Manager/Manager":39}],53:[function(require,module,exports){
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
},{"../Common/Common":1,"./UI":59}],54:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"../Config/LocalConfig":12,"../Config/UIConfig":19,"../Data/Data":24,"../Manager/Manager":39,"./Core":52}],55:[function(require,module,exports){
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
},{"../Config/UIConfig":19,"./Core":52}],56:[function(require,module,exports){
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
},{"../Config/Config":8,"./UI":59}],57:[function(require,module,exports){
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
},{"../Config/Config":8,"./Core":52,"./UI":59}],58:[function(require,module,exports){
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
},{"../Common/Common":1,"../Config/Config":8,"./Core":52}],59:[function(require,module,exports){
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
},{"./ChooseServiceController":50,"./ChooseServiceView":51,"./Core":52,"./LoadingController":53,"./LoadingProgressController":54,"./LoadingProgressView":55,"./LoadingView":56,"./PublicConfirmationController":57,"./PublicConfirmationView":58}]},{},[33])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvTGF5YUFpcklERS9yZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29tbW9uL0NvbW1vbi50cyIsInNyYy9Db21tb24vRXZlbnRUeXBlLnRzIiwic3JjL0NvbW1vbi9HRXZlbnQudHMiLCJzcmMvQ29tbW9uL0xvZ2ljVXRpbHMudHMiLCJzcmMvQ29tbW9uL1Jlc291cmNlLnRzIiwic3JjL0NvbW1vbi9VdGlscy50cyIsInNyYy9Db21tb24vV3hVdGlscy50cyIsInNyYy9Db25maWcvQ29uZmlnLnRzIiwic3JjL0NvbmZpZy9Db25maWdVdGlscy50cyIsInNyYy9Db25maWcvRGF0YUNvbmZpZy50cyIsInNyYy9Db25maWcvRGVmaW5lLnRzIiwic3JjL0NvbmZpZy9Mb2NhbENvbmZpZy50cyIsInNyYy9Db25maWcvTG9jYWxDb250ZW50LnRzIiwic3JjL0NvbmZpZy9Mb2dpblJlc1VybHMudHMiLCJzcmMvQ29uZmlnL05ldENvbmZpZy50cyIsInNyYy9Db25maWcvT2JqZWN0Q29uZmlnLnRzIiwic3JjL0NvbmZpZy9SZXNVcmxzLnRzIiwic3JjL0NvbmZpZy9TdGF0ZUNvbmZpZy50cyIsInNyYy9Db25maWcvVUlDb25maWcudHMiLCJzcmMvQ29yZS9Db3JlLnRzIiwic3JjL0NvcmUvT2JqZWN0UHJveHkudHMiLCJzcmMvQ29yZS9PYmplY3RTdGF0ZS50cyIsInNyYy9Db3JlL1JpZ2lkT2JqZWN0LnRzIiwic3JjL0RhdGEvRGF0YS50cyIsInNyYy9EYXRhL0RhdGFCYXNlLnRzIiwic3JjL0dhbWVDb25maWcudHMiLCJzcmMvR2FtZVNjZW5lLnRzIiwic3JjL0xvZ2ljL0NvbGxpc2lvblNjcmlwdEJhc2UudHMiLCJzcmMvTG9naWMvRGVza0NvbGxpc2lvblNjcmlwdC50cyIsInNyYy9Mb2dpYy9HcmFiTG9naWMudHMiLCJzcmMvTG9naWMvSGFuZENvbGxpc2lvblNjcmlwdC50cyIsInNyYy9Mb2dpYy9Mb2dpYy50cyIsInNyYy9NYWluLnRzIiwic3JjL01hbmFnZXIvQmFzZU1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9DbGlja0VmZmVjdE1hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9EYXRhTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL0xvYWRpbmdJY29uTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL0xvYWRpbmdQcm9ncmVzc01hbmFnZXIudHMiLCJzcmMvTWFuYWdlci9NYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvTmV0TWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1Bvb2xNYW5hZ2VyLnRzIiwic3JjL01hbmFnZXIvUm9sZUJhc2UudHMiLCJzcmMvTWFuYWdlci9Sb2xlTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1NjZW5lTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1NwYXduTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1N0YXRlQmFzZS50cyIsInNyYy9NYW5hZ2VyL1RpbWVyTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1VJTWFuYWdlci50cyIsInNyYy9NYW5hZ2VyL1ZlcnNpb25NYW5hZ2VyLnRzIiwic3JjL1VJL0Nob29zZVNlcnZpY2VDb250cm9sbGVyLnRzIiwic3JjL1VJL0Nob29zZVNlcnZpY2VWaWV3LnRzIiwic3JjL1VJL0NvcmUudHMiLCJzcmMvVUkvTG9hZGluZ0NvbnRyb2xsZXIudHMiLCJzcmMvVUkvTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlci50cyIsInNyYy9VSS9Mb2FkaW5nUHJvZ3Jlc3NWaWV3LnRzIiwic3JjL1VJL0xvYWRpbmdWaWV3LnRzIiwic3JjL1VJL1B1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXIudHMiLCJzcmMvVUkvUHVibGljQ29uZmlybWF0aW9uVmlldy50cyIsInNyYy9VSS9VSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNWQSxpQ0FBNEI7QUFDNUIsZ0NBQTJCO0FBQzNCLDZCQUF3QjtBQUN4QixrQ0FBNkI7QUFDN0IsK0JBQTBCOzs7O0FDSjFCLHlDQUEyQztBQUMzQyxtQ0FBOEI7QUFFOUI7SUFBb0Msa0NBQWE7SUFBakQ7UUFBQSxxRUFtREM7UUFsRGEsZ0JBQVUsR0FBRyxJQUFJLEtBQUssRUFBcUIsQ0FBQzs7SUFrRDFELENBQUM7SUEvQ0csTUFBTTtJQUNDLCtCQUFnQixHQUF2QixVQUF3QixHQUFHLEVBQUUsT0FBZ0I7UUFDekMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sNEJBQWEsR0FBcEIsVUFBcUIsR0FBRztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQzdCLGdCQUFNLENBQUMsUUFBUSxPQUFmLGdCQUFNLEdBQVUsR0FBRyxTQUFLLElBQUksR0FBRTtJQUNsQyxDQUFDO0lBRU0saUNBQWtCLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDN0IsZ0JBQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDJCQUFZLEdBQW5CLFVBQW9CLEdBQUcsRUFBRSxRQUFpQjtRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQy9DLGdDQUFnQztJQUNwQyxDQUFDO0lBRUQsU0FBUztJQUNGLHlDQUFnQixHQUF2QixVQUF3QixHQUFHLEVBQUUsT0FBZ0I7UUFDekMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXFCLEdBQUc7UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQUM3QixnQkFBTSxDQUFDLFFBQVEsT0FBZixnQkFBTSxHQUFVLEdBQUcsU0FBSyxJQUFJLEdBQUU7SUFDbEMsQ0FBQztJQUVELGFBQWE7SUFDTiw0Q0FBbUIsR0FBMUI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDdkIsZ0JBQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHFDQUFZLEdBQW5CLFVBQW9CLEdBQUcsRUFBRSxRQUFpQjtRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQy9DLGdDQUFnQztJQUNwQyxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLGFBQWE7UUFDYixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBaERnQiwrQkFBZ0IsR0FBRyxJQUFJLEtBQUssRUFBcUIsQ0FBQyxDQUFDLFFBQVE7SUFpRGhGLHFCQUFDO0NBbkRELEFBbURDLENBbkRtQyxJQUFJLENBQUMsUUFBUSxHQW1EaEQ7QUFuRFksd0NBQWM7QUFxRDNCLDBFQUEwRTtBQUUxRSxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIsMERBQW1CLENBQUE7SUFDbkIsb0RBQWUsQ0FBQTtJQUNmLDZDQUFVLENBQUE7QUFDZCxDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEI7QUFFRCxNQUFNO0FBQ04sSUFBSyxXQVVKO0FBVkQsV0FBSyxXQUFXO0lBQ1osK0NBQVMsQ0FBQTtJQUNULDZDQUFRLENBQUE7SUFDUiwyQ0FBTyxDQUFBO0lBQ1AseUNBQU0sQ0FBQTtJQUNOLDJDQUFPLENBQUE7SUFDUCx1REFBYSxDQUFBO0lBQ2IsK0NBQVMsQ0FBQTtJQUNULDZDQUFRLENBQUE7SUFDUiwrQ0FBUyxDQUFBO0FBQ2IsQ0FBQyxFQVZJLFdBQVcsS0FBWCxXQUFXLFFBVWY7QUFFRCxJQUFZLFNBT1g7QUFQRCxXQUFZLFNBQVM7SUFDakIsZ0RBQXNELENBQUE7SUFDdEQsNENBQW9ELENBQUE7SUFDcEQsOENBQXFELENBQUE7SUFDckQsOENBQXFELENBQUE7SUFDckQsMENBQW1ELENBQUE7SUFDbkQsd0RBQTBELENBQUE7QUFDOUQsQ0FBQyxFQVBXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBT3BCO0FBRUQsSUFBWSxVQU9YO0FBUEQsV0FBWSxVQUFVO0lBQ2xCLDhEQUE2RCxDQUFBO0lBQzdELDREQUE0RCxDQUFBO0lBQzVELDBEQUEyRCxDQUFBO0lBQzNELGdFQUE4RCxDQUFBO0lBQzlELDhEQUE2RCxDQUFBO0lBQzdELGdFQUE2RCxDQUFBO0FBQ2pFLENBQUMsRUFQVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQU9yQjtBQUVELDREQUE0RDtBQUU1RCxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDckIsSUFBSyxXQUVKO0FBRkQsV0FBSyxXQUFXO0lBQ1osd0NBQW1CLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLGdCQUFBLENBQUE7QUFDNUUsQ0FBQyxFQUZJLFdBQVcsS0FBWCxXQUFXLFFBRWY7QUFFRCxRQUFRO0FBQ1IsSUFBSSxvQkFBb0IsR0FBRyxDQUFDLENBQUM7QUFDN0IsSUFBWSxpQkFHWDtBQUhELFdBQVksaUJBQWlCO0lBQ3pCLHdEQUFzQixXQUFXLENBQUMsVUFBVSxHQUFHLG9CQUFvQixFQUFFLG9CQUFBLENBQUE7SUFDckUsc0RBQXNCLFdBQVcsQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLEVBQUUsa0JBQUEsQ0FBQTtBQUN6RSxDQUFDLEVBSFcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFHNUI7QUFFRCw0REFBNEQ7QUFFNUQsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLElBQUssYUFHSjtBQUhELFdBQUssYUFBYTtJQUNkLHVDQUFjLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLFdBQUEsQ0FBQTtJQUN2RSx1Q0FBYyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxXQUFBLENBQUE7QUFDM0UsQ0FBQyxFQUhJLGFBQWEsS0FBYixhQUFhLFFBR2pCO0FBRUQsSUFBSTtBQUNKLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLElBQVksYUFNWDtBQU5ELFdBQVksYUFBYTtJQUNyQixnREFBa0IsYUFBYSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsRUFBRSxvQkFBQSxDQUFBO0lBQzFELDhDQUFrQixhQUFhLENBQUMsS0FBSyxHQUFHLGdCQUFnQixFQUFFLGtCQUFBLENBQUE7SUFDMUQsK0NBQWtCLGFBQWEsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLEVBQUUsbUJBQUEsQ0FBQTtJQUMxRCw4Q0FBa0IsYUFBYSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsRUFBRSxrQkFBQSxDQUFBO0lBQzFELGdEQUFrQixhQUFhLENBQUMsS0FBSyxHQUFHLGdCQUFnQixFQUFFLG9CQUFBLENBQUE7QUFDOUQsQ0FBQyxFQU5XLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBTXhCO0FBRUQsUUFBUTtBQUNSLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLElBQVksYUFFWDtBQUZELFdBQVksYUFBYTtJQUNyQiwwQ0FBa0IsYUFBYSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsRUFBRSxjQUFBLENBQUE7QUFDOUQsQ0FBQyxFQUZXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBRXhCO0FBRUQsNERBQTREO0FBRTVELElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN0QixJQUFLLFlBSUo7QUFKRCxXQUFLLFlBQVk7SUFDYixzQ0FBZSxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxZQUFBLENBQUE7SUFDdkUscUNBQWMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsV0FBQSxDQUFBO0lBQ3RFLG9DQUFhLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLFVBQUEsQ0FBQTtBQUN6RSxDQUFDLEVBSkksWUFBWSxLQUFaLFlBQVksUUFJaEI7QUFFRCxJQUFJO0FBQ0osSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFDekIsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3JCLDJDQUF1QixZQUFZLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFFLGVBQUEsQ0FBQTtJQUMvRCxxREFBdUIsWUFBWSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSx5QkFBQSxDQUFBO0FBQ25FLENBQUMsRUFIVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUd4QjtBQUVELElBQUk7QUFDSixJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDeEIsSUFBWSxZQUVYO0FBRkQsV0FBWSxZQUFZO0lBQ3BCLHlDQUFlLFlBQVksQ0FBQyxLQUFLLEdBQUcsZUFBZSxFQUFFLGVBQUEsQ0FBQTtBQUN6RCxDQUFDLEVBRlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFFdkI7QUFFRCxJQUFJO0FBQ0osSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNuQix1Q0FBMEIsWUFBWSxDQUFDLElBQUksR0FBRyxjQUFjLEVBQUUsZUFBQSxDQUFBO0lBQzlELHFDQUEwQixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSxhQUFBLENBQUE7SUFDOUQseUNBQTBCLFlBQVksQ0FBQyxJQUFJLEdBQUcsY0FBYyxFQUFFLGlCQUFBLENBQUE7SUFDOUQsK0NBQTBCLFlBQVksQ0FBQyxJQUFJLEdBQUcsY0FBYyxFQUFFLHVCQUFBLENBQUE7QUFDbEUsQ0FBQyxFQUxXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBS3RCO0FBR0QsNERBQTREO0FBRTVELElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNwQixJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDbEIsZ0NBQWEsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsVUFBQSxDQUFBO0lBQ2hFLGtDQUFhLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLFlBQUEsQ0FBQTtBQUNwRSxDQUFDLEVBSFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFHckI7QUFFRCxNQUFNO0FBQ04sSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLElBQVksU0FZWDtBQVpELFdBQVksU0FBUztJQUNqQix5Q0FBc0IsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0scUJBQUEsQ0FBQTtJQUMzRSxpQ0FBc0IsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sYUFBQSxDQUFBO0lBQzNFLHVDQUFzQixVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxtQkFBQSxDQUFBO0lBQzNFLGtDQUFzQixVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxjQUFBLENBQUE7SUFDM0UseUNBQXNCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLHFCQUFBLENBQUE7SUFDM0UsbUNBQXNCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLGVBQUEsQ0FBQTtJQUMzRSxtQ0FBc0IsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sZUFBQSxDQUFBO0lBQzNFLHFDQUFzQixVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxpQkFBQSxDQUFBO0lBQzNFLDRDQUFzQixVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSx3QkFBQSxDQUFBO0lBQzNFLGtDQUFzQixVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxjQUFBLENBQUE7QUFFL0UsQ0FBQyxFQVpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBWXBCO0FBRUQsTUFBTTtBQUNOLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN2QixJQUFZLFdBTVg7QUFORCxXQUFZLFdBQVc7SUFDbkIsNkNBQXFCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsY0FBYyxFQUFFLHFCQUFBLENBQUE7SUFDekQsNENBQXFCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsY0FBYyxFQUFFLG9CQUFBLENBQUE7SUFDekQsNkNBQXFCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsY0FBYyxFQUFFLHFCQUFBLENBQUE7SUFDekQsdUNBQXFCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsY0FBYyxFQUFFLGVBQUEsQ0FBQTtJQUN6RCx3Q0FBcUIsVUFBVSxDQUFDLE1BQU0sR0FBRyxjQUFjLEVBQUUsZ0JBQUEsQ0FBQTtBQUM3RCxDQUFDLEVBTlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFNdEI7QUFFRCw4REFBOEQ7QUFFOUQsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFDM0IsSUFBSyxpQkFFSjtBQUZELFdBQUssaUJBQWlCO0lBQ2xCLHFEQUFvQixTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLGlCQUFBLENBQUE7QUFDekYsQ0FBQyxFQUZJLGlCQUFpQixLQUFqQixpQkFBaUIsUUFFckI7QUFFRCxJQUFJO0FBQ0osSUFBSSwwQkFBMEIsR0FBRyxDQUFDLENBQUM7QUFDbkMsSUFBWSx1QkFHWDtBQUhELFdBQVksdUJBQXVCO0lBQy9CLDZEQUFlLGlCQUFpQixDQUFDLFdBQVcsR0FBRywwQkFBMEIsRUFBRSxhQUFBLENBQUE7SUFDM0UsaUVBQXNCLGlCQUFpQixDQUFDLFdBQVcsR0FBRywwQkFBMEIsRUFBRSxpQkFBQSxDQUFBO0FBQ3RGLENBQUMsRUFIVyx1QkFBdUIsR0FBdkIsK0JBQXVCLEtBQXZCLCtCQUF1QixRQUdsQztBQUVELDREQUE0RDtBQUU1RCxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDdEIsSUFBSyxZQU1KO0FBTkQsV0FBSyxZQUFZO0lBQ2IscUNBQWMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsV0FBQSxDQUFBO0lBQ3JFLG9DQUFjLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLFVBQUEsQ0FBQTtJQUNyRSxzQ0FBYyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxZQUFBLENBQUE7SUFDckUsc0NBQWMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsWUFBQSxDQUFBO0lBQ3JFLDBDQUFjLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLGdCQUFBLENBQUE7QUFDekUsQ0FBQyxFQU5JLFlBQVksS0FBWixZQUFZLFFBTWhCO0FBRUQsTUFBTTtBQUNOLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztBQUN4QixJQUFZLFlBVVg7QUFWRCxXQUFZLFlBQVk7SUFDcEIsaURBQXdCLFlBQVksQ0FBQyxLQUFLLEdBQUcsZUFBZSxFQUFFLHVCQUFBLENBQUE7SUFDOUQsZ0RBQXdCLFlBQVksQ0FBQyxLQUFLLEdBQUcsZUFBZSxFQUFFLHNCQUFBLENBQUE7SUFDOUQsbURBQXdCLFlBQVksQ0FBQyxLQUFLLEdBQUcsZUFBZSxFQUFFLHlCQUFBLENBQUE7SUFDOUQsbURBQXdCLFlBQVksQ0FBQyxLQUFLLEdBQUcsZUFBZSxFQUFFLHlCQUFBLENBQUE7SUFDOUQsa0RBQXdCLFlBQVksQ0FBQyxLQUFLLEdBQUcsZUFBZSxFQUFFLHdCQUFBLENBQUE7SUFDOUQsa0RBQXdCLFlBQVksQ0FBQyxLQUFLLEdBQUcsZUFBZSxFQUFFLHdCQUFBLENBQUE7SUFDOUQsa0RBQXdCLFlBQVksQ0FBQyxLQUFLLEdBQUcsZUFBZSxFQUFFLHdCQUFBLENBQUE7SUFDOUQsa0RBQXdCLFlBQVksQ0FBQyxLQUFLLEdBQUcsZUFBZSxFQUFFLHdCQUFBLENBQUE7SUFDOUQsbURBQXdCLFlBQVksQ0FBQyxLQUFLLEdBQUcsZUFBZSxFQUFFLHlCQUFBLENBQUE7QUFDbEUsQ0FBQyxFQVZXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBVXZCO0FBRUQsTUFBTTtBQUNOLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN2QixJQUFZLFdBV1g7QUFYRCxXQUFZLFdBQVc7SUFDbkIsNkNBQXdCLFlBQVksQ0FBQyxJQUFJLEdBQUcsY0FBYyxFQUFFLHFCQUFBLENBQUE7SUFDNUQsNENBQXdCLFlBQVksQ0FBQyxJQUFJLEdBQUcsY0FBYyxFQUFFLG9CQUFBLENBQUE7SUFDNUQsc0NBQXdCLFlBQVksQ0FBQyxJQUFJLEdBQUcsY0FBYyxFQUFFLGNBQUEsQ0FBQTtJQUM1RCx1Q0FBd0IsWUFBWSxDQUFDLElBQUksR0FBRyxjQUFjLEVBQUUsZUFBQSxDQUFBO0lBQzVELGtEQUF3QixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSwwQkFBQSxDQUFBO0lBQzVELG1EQUF3QixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSwyQkFBQSxDQUFBO0lBQzVELGlEQUFzQixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSx5QkFBQSxDQUFBO0lBQzFELGlEQUF3QixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSx5QkFBQSxDQUFBO0lBQzVELCtDQUFzQixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSx1QkFBQSxDQUFBO0lBQzFELHFDQUF3QixZQUFZLENBQUMsSUFBSSxHQUFHLGNBQWMsRUFBRSxhQUFBLENBQUE7QUFDaEUsQ0FBQyxFQVhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBV3RCO0FBRUQsTUFBTTtBQUNOLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLElBQVksYUFFWDtBQUZELFdBQVksYUFBYTtJQUNyQixrREFBeUIsWUFBWSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxzQkFBQSxDQUFBO0FBQ3JFLENBQUMsRUFGVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUV4QjtBQUVELElBQUk7QUFDSixJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQUN6QixJQUFZLGFBT1g7QUFQRCxXQUFZLGFBQWE7SUFDckIsNENBQXVCLFlBQVksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsZ0JBQUEsQ0FBQTtJQUMvRCxnREFBdUIsWUFBWSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxvQkFBQSxDQUFBO0lBQy9ELGtEQUF1QixZQUFZLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFFLHNCQUFBLENBQUE7SUFDL0QsK0NBQXVCLFlBQVksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsbUJBQUEsQ0FBQTtJQUMvRCxvREFBdUIsWUFBWSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSx3QkFBQSxDQUFBO0lBQy9ELG1EQUF1QixZQUFZLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUFFLHVCQUFBLENBQUE7QUFDbkUsQ0FBQyxFQVBXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBT3hCO0FBRUQsUUFBUTtBQUNSLElBQUksb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLElBQVksa0JBTVg7QUFORCxXQUFZLGtCQUFrQjtJQUMxQiwyREFBdUIsWUFBWSxDQUFDLFVBQVUsR0FBRyxvQkFBb0IsRUFBRSxxQkFBQSxDQUFBO0lBQ3ZFLHlEQUF1QixZQUFZLENBQUMsVUFBVSxHQUFHLG9CQUFvQixFQUFFLG1CQUFBLENBQUE7SUFDdkUseURBQXVCLFlBQVksQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLEVBQUUsbUJBQUEsQ0FBQTtJQUN2RSwyREFBdUIsWUFBWSxDQUFDLFVBQVUsR0FBRyxvQkFBb0IsRUFBRSxxQkFBQSxDQUFBO0lBQ3ZFLDJEQUF1QixZQUFZLENBQUMsVUFBVSxHQUFHLG9CQUFvQixFQUFFLHFCQUFBLENBQUE7QUFDM0UsQ0FBQyxFQU5XLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBTTdCOzs7O0FDdFJELHlDQUEyQztBQUczQztJQUFBO0lBZ0RBLENBQUM7SUFyQ1Usa0JBQVcsR0FBbEIsVUFBbUIsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNO1FBQ2hDLElBQUcsQ0FBQyxHQUFHLElBQUksT0FBTSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVU7WUFBRSxPQUFPO1FBRTlDLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDcEQ7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLHFCQUFjLEdBQXJCLFVBQXNCLEdBQUcsRUFBRSxJQUFJO1FBQzNCLElBQUcsQ0FBQyxHQUFHLElBQUksT0FBTSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVU7WUFBRSxPQUFPO1FBRTlDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBRyxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWpCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLGVBQVEsR0FBZixVQUFnQixHQUFHOztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQ3hCLElBQUcsQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUVoQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUcsQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUVqQixLQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBRyxPQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVU7Z0JBQUUsT0FBTztZQUVuRCxDQUFBLEtBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLElBQUksWUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFLLElBQUksR0FBRTtTQUNwRDtJQUNMLENBQUM7SUFFTSxZQUFLLEdBQVosVUFBYSxHQUFHO1FBQ1osSUFBRyxDQUFDLEdBQUc7WUFBRSxPQUFNO1FBRWYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUE5Q0QsK0NBQStDO0lBQy9DLFFBQVE7SUFDUSw2QkFBc0IsR0FBRyxLQUFLLENBQUE7SUFDOUMsTUFBTTtJQUNVLG1CQUFZLEdBQUcsS0FBSyxDQUFBO0lBQ3BDLFFBQVE7SUFDUSxvQkFBYSxHQUFHLEtBQUssQ0FBQTtJQUV0QixnQkFBUyxHQUEyQyxFQUFFLENBQUM7SUF1QzFFLGFBQUM7Q0FoREQsQUFnREMsSUFBQTtrQkFoRG9CLE1BQU07Ozs7QUNHM0IsV0FBVztBQUNYLFNBQWdCLGFBQWEsQ0FBQyxPQUFjLEVBQUUsT0FBYyxFQUFFLEtBQVk7SUFDdEUsT0FBTyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUZELHNDQUVDO0FBRUQsV0FBVztBQUNYLFNBQWdCLGlCQUFpQixDQUFDLE9BQWMsRUFBRSxLQUFZO0lBQzFELE9BQU8sT0FBTyxHQUFHLEtBQUssQ0FBQztBQUMzQixDQUFDO0FBRkQsOENBRUM7Ozs7QUNaRDtJQUE4Qiw0QkFBVztJQUlyQztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELHNCQUFXLGdCQUFJO2FBQWY7WUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztnQkFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7YUFDbkM7WUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFTSxhQUFJLEdBQVgsVUFBWSxHQUFHLEVBQUUsT0FBUSxFQUFFLFFBQWtCLEVBQUUsUUFBa0IsRUFBRSxPQUFlO1FBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNaLEdBQUcsRUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFDdEMsT0FBTyxDQUNWLENBQUM7SUFDTixDQUFDO0lBRU0scUJBQVksR0FBbkIsVUFBb0IsT0FBYztRQUM5QixJQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRU0sZUFBTSxHQUFiLFVBQWMsSUFBVztRQUNyQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxtQkFBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sMEJBQU8sR0FBZDtRQUNJLElBQUksUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDNUIsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDN0I7YUFBSztZQUNGLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUM7SUE5Q2Msa0JBQVMsR0FBYSxJQUFJLENBQUM7SUFDM0IseUJBQWdCLEdBQThCLEVBQUUsQ0FBQztJQThDcEUsZUFBQztDQWhERCxBQWdEQyxDQWhENkIsSUFBSSxDQUFDLE1BQU0sR0FnRHhDO0FBaERZLDRCQUFROzs7O0FDRHJCLCtDQUE0QztBQUM1Qyx5Q0FBMkM7QUFFM0MsNENBQThDO0FBRTlDLFdBQVc7QUFDWCxTQUFnQixXQUFXLENBQUMsRUFBRSxFQUFFLFVBQW1CO0lBQy9DLElBQUcsRUFBRSxJQUFJLFNBQVM7UUFBRSxPQUFPO0lBRTNCLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkQsSUFBRyxVQUFVLEVBQUM7UUFDVixPQUFPLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxLQUFLLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO0FBQ2pELENBQUM7QUFaRCxrQ0FZQztBQUVELFFBQVE7QUFDUjs7R0FFRztBQUNILFNBQWdCLGVBQWUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU87SUFDdkQsSUFBRyxRQUFRLFlBQVksSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNqQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQzthQUNwQixTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFDdEMsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN0QztBQUNMLENBQUM7QUFSRCwwQ0FRQztBQUVELGFBQWE7QUFDYixpQkFBaUI7QUFDakI7O0dBRUc7QUFDSCxTQUFnQixZQUFZLENBQUMsUUFBUTtJQUNqQyxJQUFHLFFBQVEsSUFBSSxJQUFJO1FBQUUsT0FBTztJQUU1QixRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixJQUFHLFFBQVEsWUFBWSxLQUFLLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7UUFDakQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLO1lBQzFCLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0tBQ047SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBWEQsb0NBV0M7QUFFRCxnQkFBZ0I7QUFDaEIsU0FBZ0IsWUFBWSxDQUFDLE1BQW1CLEVBQUUsS0FBa0I7SUFFaEUsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJO1FBQy9CLE9BQU8sS0FBSyxDQUFDO0lBRWpCLElBQUk7SUFDSixJQUFHLE1BQU0sSUFBSSxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUM7SUFFaEIsSUFBSSxDQUFDLEdBQW1CLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDckMsT0FBTSxDQUFDLEVBQ1A7UUFDSSxJQUFHLENBQUMsSUFBSSxNQUFNO1lBQ1YsT0FBTyxJQUFJLENBQUM7UUFFaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7S0FDaEI7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBbEJELG9DQWtCQztBQUVELGdCQUFnQjtBQUNoQixTQUFnQixRQUFRLENBQUMsRUFBUyxFQUFFLEVBQVMsRUFBRSxJQUFpQjtJQUM1RCxJQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPO0lBRTdDLFFBQVE7SUFDUixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFFOUIsSUFBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUM7UUFDM0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7U0FBSTtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDTCxDQUFDO0FBWEQsNEJBV0M7QUFTRCxTQUFnQixlQUFlLENBQUMsR0FBbUI7SUFDL0MsT0FBTztRQUNILGVBQWUsRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVTtRQUMxRCxZQUFZLEVBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVO1FBQ3BELFVBQVUsRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVc7UUFDakQsZUFBZSxFQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxXQUFXO0tBQzlELENBQUE7QUFDTCxDQUFDO0FBUEQsMENBT0M7QUFFRCw4QkFBOEI7QUFDOUI7OztHQUdHO0FBQ0gsMERBQTBEO0FBQzFELG9DQUFvQztBQUVwQyxpRUFBaUU7QUFDakUsZ0VBQWdFO0FBRWhFLDZDQUE2QztBQUM3QywyREFBMkQ7QUFDM0QsUUFBUTtBQUNSLElBQUk7QUFFSixTQUFTO0FBQ1QseUNBQXlDO0FBQ3pDLDZDQUE2QztBQUM3QyxnQ0FBZ0M7QUFDaEMsb0JBQW9CO0FBQ3BCLHNDQUFzQztBQUN0QyxnQ0FBZ0M7QUFDaEMsMkVBQTJFO0FBQzNFLG9CQUFvQjtBQUNwQixlQUFlO0FBQ2Ysb0RBQW9EO0FBQ3BELDJFQUEyRTtBQUMzRSxvQkFBb0I7QUFDcEIsUUFBUTtBQUNSLElBQUk7QUFHSixTQUFTO0FBQ1Q7OztHQUdHO0FBQ0gsU0FBZ0IsWUFBWSxDQUFDLEdBQUc7SUFBRSxjQUFPO1NBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztRQUFQLDZCQUFPOztJQUNyQyxJQUFHLE9BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRO1FBQUUsT0FBTztJQUVuQyxJQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFFaEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNaLElBQUcsT0FBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsRUFBRTtRQUMxQixLQUFJLElBQUksR0FBRyxJQUFJLEtBQUs7WUFDcEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEUsT0FBTyxDQUFDLENBQUM7S0FDWjtTQUFNO1FBQ0gsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQ25DLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxDQUFDO0tBQ1o7QUFDTCxDQUFDO0FBaEJELG9DQWdCQztBQUVELFFBQVE7QUFDUixTQUFnQixjQUFjLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxXQUFXO0lBQ25ELElBQUcsR0FBRyxZQUFZLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSztRQUFFLE9BQU87SUFFbkQsSUFBRyxPQUFNLENBQUMsTUFBTSxDQUFDLElBQUksU0FBUyxFQUFDO1FBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztLQUMvQjtJQUVELElBQUcsT0FBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFNBQVMsRUFBQztRQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7S0FDekM7QUFDTCxDQUFDO0FBVkQsd0NBVUM7QUFFRCxRQUFRO0FBQ1IsK0JBQStCO0FBQy9CLGlEQUFpRDtBQUNqRCwwQkFBMEI7QUFDMUIsYUFBYTtBQUNiLG1DQUFtQztBQUNuQyxRQUFRO0FBQ1IsSUFBSTtBQUVKLE9BQU87QUFDUCxTQUFnQixjQUFjLENBQUMsR0FBVTtJQUNyQyxJQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUM7UUFDUCxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ1g7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFORCx3Q0FNQztBQUVELFFBQVE7QUFDUiw2Q0FBNkM7QUFDN0MsbUNBQW1DO0FBRW5DLDBCQUEwQjtBQUMxQiw0Q0FBNEM7QUFDNUMsNkRBQTZEO0FBRTdELHlDQUF5QztBQUN6Qyw2REFBNkQ7QUFFN0QsK0NBQStDO0FBQy9DLCtJQUErSTtBQUUvSSxpREFBaUQ7QUFDakQsZ0dBQWdHO0FBQ2hHLFFBQVE7QUFDUixJQUFJO0FBRUosYUFBYTtBQUNiLFNBQWdCLGlCQUFpQixDQUFDLEtBQXFCLEVBQUUsR0FBVTtJQUMvRCxJQUFHLEtBQUssWUFBWSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssSUFBSSxPQUFPLEdBQUcsSUFBSSxRQUFRO1FBQUUsT0FBTztJQUUvRSxJQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxTQUFTO1FBQUUsT0FBTztJQUU3QyxLQUFLLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUM5QixDQUFDO0FBTkQsOENBTUM7QUFFRCxTQUFTO0FBQ1QsU0FBZ0IsZUFBZSxDQUFDLE1BQU07SUFDbEMsSUFBRyxDQUFDLE1BQU07UUFBRSxPQUFPLENBQUMsQ0FBQztJQUVyQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixLQUFJLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBQztRQUNoQixHQUFHLEVBQUUsQ0FBQztLQUNUO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBVEQsMENBU0M7QUFFRCxZQUFZO0FBQ1o7OztHQUdHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJO0lBQ2xDLDhDQUE4QztJQUM5QyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSTtRQUNkLE9BQU8sS0FBSyxDQUFDO0lBRWpCLDRDQUE0QztJQUM1QyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU07UUFDMUIsT0FBTyxLQUFLLENBQUM7SUFFakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QyxpQ0FBaUM7UUFDakMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLEVBQUU7WUFDdEQsaUNBQWlDO1lBQ2pDLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLO2dCQUNoQyxPQUFPLEtBQUssQ0FBQztTQUNwQjthQUNJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN6QixpRkFBaUY7WUFDakYsT0FBTyxLQUFLLENBQUM7U0FDaEI7S0FDSjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUF0QkQsa0NBc0JDO0FBRUQsUUFBUTtBQUNSLFNBQWdCLFdBQVcsQ0FBQyxHQUFjLEVBQUUsS0FBWSxFQUFFLEtBQUs7SUFDM0QsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztRQUM5QyxPQUFPLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDeEMsT0FBTztLQUNWO0lBRUQsSUFBSSxNQUFNLENBQUM7SUFDWCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztRQUNOLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssRUFBQztZQUNqQixNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQWZELGtDQWVDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLEtBQUs7SUFDN0IsSUFBRyxDQUFDLEtBQUssQ0FBQyxNQUFNO1FBQ1osT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFBO0lBRTdCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFJLE9BQU8sR0FBRyxVQUFVLEdBQUUsTUFBTSxDQUFDO0lBQ2pDLElBQUksR0FBRyxHQUFJLE9BQU8sR0FBQyxPQUFPLEdBQUMsR0FBRyxHQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDM0MsSUFBSSxJQUFJLEdBQUMsRUFBQyxJQUFJLEVBQUMsT0FBTyxHQUFDLEdBQUcsR0FBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFBO0lBQzNDLE9BQU8sSUFBSSxDQUFBO0FBQ2YsQ0FBQztBQVRELGtDQVNDO0FBRUQsU0FBUztBQUNULFNBQWdCLFVBQVU7SUFDdEIsNkRBQTZEO0lBQzdELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDbkMsQ0FBQztBQUhELGdDQUdDO0FBRUQsUUFBUTtBQUNSLFNBQWdCLFVBQVU7SUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUNqQyxDQUFDO0FBRkQsZ0NBRUM7QUFFRCxRQUFRO0FBQ1IsU0FBZ0IsTUFBTTtJQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3JDLENBQUM7QUFGRCx3QkFFQztBQUVELFNBQVM7QUFDVCxTQUFnQixXQUFXO0lBQ3ZCLE9BQU8sTUFBTSxFQUFFLElBQUksVUFBVSxFQUFFLENBQUM7QUFDcEMsQ0FBQztBQUZELGtDQUVDO0FBRUQsUUFBUTtBQUNSOztHQUVHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFDLEtBQUs7SUFDaEMsSUFBRyxDQUFDLEtBQUs7UUFBRSxPQUFPO0lBRWxCLE1BQU07SUFDTixJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDbkUsSUFBSSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3pFLElBQUksa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUV2RSxPQUFPO1FBQ0gsTUFBTTtRQUNOLFVBQVUsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxPQUFPO1FBQ1AsZ0JBQWdCLEVBQUUsZ0JBQWdCO1FBQ2xDLEtBQUs7UUFDTCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUTtRQUM3RCxRQUFRO1FBQ1IsbUJBQW1CLEVBQUUsbUJBQW1CO1FBQ3hDLFNBQVM7UUFDVCxrQkFBa0IsRUFBRSxrQkFBa0I7UUFDdEMsU0FBUztRQUNULGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3pELFFBQVE7UUFDUixtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO0tBQ25FLENBQUE7QUFDTCxDQUFDO0FBeEJELHdDQXdCQztBQUVELE1BQU07QUFDTixTQUFnQixnQkFBZ0IsQ0FBQyxHQUFVLEVBQUUsS0FBWTtJQUNyRCxJQUFHLENBQUMsS0FBSztRQUFFLE9BQU87SUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFIRCw0Q0FHQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxHQUFVO0lBQ3RDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUZELDBDQUVDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLEdBQVUsRUFBRSxLQUFLO0lBQzNDLE9BQU87SUFDUCxJQUFHLENBQUMsS0FBSztRQUFFLE9BQU87SUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFKRCxzQ0FJQztBQUVELFNBQWdCLFlBQVksQ0FBQyxHQUFVO0lBQ25DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUZELG9DQUVDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVO0lBQ3hDLElBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxVQUFVO1FBQUUsT0FBTztJQUVuQyxLQUFJLElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBQztRQUNqQixJQUFHLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBQztZQUMvQixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0tBQ0o7QUFDTCxDQUFDO0FBUkQsNEJBUUM7QUFFRCxVQUFVO0FBQ1Y7OztHQUdHO0FBQ0gsa0RBQWtEO0FBQ2xELHlCQUF5QjtBQUV6Qix1Q0FBdUM7QUFDdkMsa0hBQWtIO0FBQ2xILHdCQUF3QjtBQUN4QixxQ0FBcUM7QUFDckMsZ0RBQWdEO0FBQ2hELHFCQUFxQjtBQUVyQix1Q0FBdUM7QUFDdkMseURBQXlEO0FBQ3pELHFCQUFxQjtBQUVyQixvQ0FBb0M7QUFDcEMseURBQXlEO0FBQ3pELHFCQUFxQjtBQUVyQixtQkFBbUI7QUFDbkIscUNBQXFDO0FBQ3JDLHFCQUFxQjtBQUNyQixRQUFRO0FBRVIsa0JBQWtCO0FBQ2xCLElBQUk7QUFFSixJQUFJO0FBQ0osSUFBSSxNQUFzQixDQUFDO0FBQzNCLFNBQWdCLFFBQVEsQ0FBQyxHQUFVO0lBQy9CLElBQUcsQ0FBQyxNQUFNLEVBQUM7UUFDUCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUN4QyxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLFlBQVksR0FBRyxtQkFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7S0FDdkQ7SUFFRCxPQUFPO0lBQ1AsSUFBRyxNQUFNLENBQUMsT0FBTztRQUFFLE9BQU87SUFFMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDO0lBQ3RELE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRXRCLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxjQUFLLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RyxDQUFDO0FBZkQsNEJBZUM7QUFVRCxJQUFJLGNBQTZCLENBQUM7QUFFbEMsU0FBUyxjQUFjLENBQUMsTUFBc0IsRUFBRSxNQUFhO0lBQ3pELElBQUcsTUFBTSxJQUFJLENBQUMsRUFBQztRQUNYLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUM5QjtTQUFJO1FBQ0QsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDekIsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7S0FDL0I7QUFDTCxDQUFDO0FBRUQsV0FBVztBQUNYLElBQUksZUFBK0IsQ0FBQztBQUNwQyxTQUFnQixZQUFZLENBQUMsSUFBaUI7SUFDMUMsSUFBRyxDQUFDLElBQUk7UUFBRSxPQUFPO0lBQ2pCLElBQUcsQ0FBQyxlQUFlLEVBQUM7UUFDaEIsZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUM3RDtJQUVELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQVBELG9DQU9DO0FBRUQsV0FBVztBQUNYLCtCQUErQjtBQUMvQixtQ0FBbUM7QUFFbkMsc0NBQXNDO0FBQ3RDLHVEQUF1RDtBQUN2RCxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BELElBQUk7QUFFSixRQUFRO0FBQ1I7Ozs7O0dBS0c7QUFDSCxTQUFnQixVQUFVLENBQUMsU0FBZ0IsRUFBRSxRQUFlLEVBQUUsSUFBSyxFQUFFLFNBQWtCO0lBQ25GLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7UUFBRSxPQUFPO0lBRW5DLG9CQUFvQjtJQUNwQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsUUFBUTtJQUNwRSxJQUFHLFNBQVMsRUFBQztRQUNULElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBUyxLQUFLO1lBQzlCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDM0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNyQztTQUFJO1FBQ0QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7QUFDTCxDQUFDO0FBZkQsZ0NBZUM7QUFFRCxjQUFjO0FBQ2QsU0FBUyxjQUFjLENBQUMsR0FBRztJQUN2QixJQUFHLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxJQUFJLFFBQVEsRUFBQztRQUM5QixPQUFPLENBQUMsQ0FBQztLQUNaO0lBQ0QsOEJBQThCO0lBQzlCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3JELENBQUM7QUFFRCxvQkFBb0I7QUFDcEIsU0FBZ0IsVUFBVSxDQUFDLEdBQVU7SUFDakMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQVUsQ0FBQztJQUM1QixJQUFHLEdBQUcsSUFBSSxPQUFPLEdBQUcsSUFBSSxRQUFRLEVBQUM7UUFDN0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDakIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN4QixJQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFDO2dCQUN2QixPQUFPLElBQUksQ0FBQyxDQUFDO2FBQ2hCO2lCQUNHO2dCQUNBLE9BQU8sRUFBRSxDQUFDO2FBQ2I7U0FDSjtLQUNKO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQWRELGdDQWNDO0FBRUQsS0FBSztBQUNMLFNBQWdCLFFBQVEsQ0FBQyxHQUFVLEVBQUUsTUFBYTtJQUM5QyxJQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUFFLE9BQU87SUFFM0IsSUFBRyxHQUFHLElBQUksSUFBSSxFQUFDO1FBQ1gsS0FBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUM7WUFDYixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFDO2dCQUNwQixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNkLDBCQUFZLENBQVU7YUFDMUI7aUJBQUssSUFBRyxPQUFPLEtBQUssSUFBSSxRQUFRLEVBQUM7Z0JBQzlCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2YsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QjtpQkFBSTtnQkFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1NBQ0o7S0FDSjtBQUNMLENBQUM7QUFqQkQsNEJBaUJDO0FBRUQsUUFBUTtBQUNSO0lBSUksMkJBQVksR0FBbUI7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ25FLENBQUM7SUFDTCx3QkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksOENBQWlCO0FBVTlCLFNBQWdCLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBbUI7SUFDdEQsSUFBRyxDQUFDLFFBQVEsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPO0lBRTdCLElBQUksS0FBSyxHQUFHLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUpELG9DQUlDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsV0FBaUIsRUFBRSxJQUFlO0lBQy9ELElBQUcsQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTztJQUVqQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztRQUNqQixZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCw0Q0FNQztBQUVELFFBQVE7QUFDUixTQUFTLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBYSxFQUFFLElBQUksRUFBRSxJQUFvQjtJQUN2RSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsSUFBSSxDQUFDLElBQUksT0FBVCxJQUFJLEdBQU0sT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLFNBQUssSUFBSSxHQUFFO0FBQ3pDLENBQUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxJQUFlLEVBQUUsT0FBTyxFQUFFLElBQWE7SUFBRSxjQUFPO1NBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztRQUFQLDZCQUFPOztJQUM5RSxJQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFFMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLENBQUM7QUFKRCw4Q0FJQzs7OztBQ3RqQkQsbUNBQXFDO0FBQ3JDLDRDQUE4QztBQUM5QyxtQ0FBOEI7QUFDOUIseUNBQTJDO0FBQzNDLHlDQUEyQztBQUMzQywrQkFBaUM7QUFDakMscURBQWdEO0FBRWhELE1BQU07QUFDTixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsT0FBTztBQUNQLFNBQWdCLEtBQUssQ0FBQyxTQUFpQjtJQUNuQyxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ1gsT0FBTyxZQUFDLEdBQUc7WUFDUCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ1YsSUFBRyxTQUFTLEVBQUM7b0JBQ1QsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDeEI7cUJBQUk7b0JBQ0QsU0FBUztvQkFDVCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDL0IsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO29CQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDL0I7YUFDSjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7UUFDTCxDQUFDO0tBQ0osQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQW5CRCxzQkFtQkM7QUFFRCxNQUFNO0FBQ04sU0FBZ0Isa0JBQWtCLENBQUMsT0FBTyxFQUFFLFFBQWlCO0lBQ3pELElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ25FLElBQUcsUUFBUSxFQUFDO1lBQ1IsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU87S0FDVjtJQUFBLENBQUM7SUFFRixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1FBQy9CLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDckMsSUFBSSxFQUFFLEdBQUc7WUFDVCxPQUFPLEVBQUUsVUFBUyxHQUFHO2dCQUNqQix1QkFBdUI7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUNELElBQUksRUFBRSxVQUFTLEdBQUc7Z0JBQ2QsbUJBQW1CO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFyQkQsZ0RBcUJDO0FBRUQsWUFBWTtBQUNaLFNBQWdCLGVBQWU7SUFDM0IsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUNyQixlQUFlLEVBQUUsSUFBSTtLQUN4QixDQUFDLENBQUM7QUFDUCxDQUFDO0FBTkQsMENBTUM7QUFFRCxZQUFZO0FBQ1osU0FBZ0IsY0FBYztJQUMxQixJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELElBQUcsVUFBVSxJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEUsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDO0tBQ2pDO1NBQUk7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO0FBQ0wsQ0FBQztBQVpELHdDQVlDO0FBRUQsWUFBWTtBQUNaLFNBQWdCLFlBQVk7SUFDeEIsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsSUFBSSxNQUFNLEdBQUcsY0FBYyxFQUFFLENBQUM7SUFDOUIsc0JBQXNCO0lBRXRCLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2pELElBQUcsVUFBVSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUM7UUFDOUIsNERBQTREO0tBQy9EO0lBRUQsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsSUFBSTtJQUVKLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLGlDQUFpQztJQUNqQyxtREFBbUQ7SUFFbkQsNkNBQTZDO0lBQzdDLHVFQUF1RTtJQUN2RSxpREFBaUQ7SUFDakQsMkZBQTJGO0lBQzNGLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpREFBaUQ7SUFDakQsWUFBWTtJQUNaLFFBQVE7SUFDUixNQUFNO0lBRU4sb0JBQW9CO0FBQ3hCLENBQUM7QUF2Q0Qsb0NBdUNDO0FBRUQsU0FBUztBQUNULFNBQWdCLGFBQWE7SUFDekIsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUNuQixlQUFlLEVBQUUsSUFBSTtLQUN4QixDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsaUJBQWlCLENBQUMsY0FBTSxPQUFBLENBQUM7UUFDOUIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVk7UUFDckQsS0FBSyxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7S0FDaEQsQ0FBQyxFQUorQixDQUkvQixDQUFDLENBQUM7QUFDUixDQUFDO0FBWkQsc0NBWUM7QUFFRCxJQUFJO0FBQ0osU0FBZ0IsWUFBWSxDQUFDLEdBQVUsRUFBRSxPQUFlLEVBQUUsYUFBc0I7SUFDNUUsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFFM0MsUUFBUTtJQUNSLElBQUcsYUFBYSxJQUFJLElBQUksRUFBQztRQUNyQixPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO1lBQzFDLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVO1lBQ25ELFVBQVUsRUFBRSxPQUFPLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxVQUFVO1NBQ3hELENBQUMsQ0FBQztLQUNOO0lBRUQsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUNyQixLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLEtBQUssRUFBRSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVO0tBQ2hELENBQUMsQ0FBQztBQUNQLENBQUM7QUFsQkQsb0NBa0JDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUMsUUFBaUI7SUFDcEMsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBSkQsd0JBSUM7QUFFRCxTQUFnQixPQUFPLENBQUMsUUFBaUI7SUFDckMsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBSkQsMEJBSUM7QUFFRCxNQUFNO0FBQ04sU0FBZ0IsZUFBZTtJQUMzQixJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUM7UUFDOUIsT0FBTyxZQUFDLEdBQUc7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtvQkFDdEIsUUFBUSxDQUFDLGVBQWUsQ0FBQzt3QkFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO3dCQUN2QixRQUFRLFlBQUMsR0FBRzs0QkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixDQUFDO3FCQUNKLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFsQkQsMENBa0JDO0FBR0QsU0FBZ0Isb0JBQW9CLENBQUMsUUFBaUI7SUFDbEQsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsc0NBQXNDO0lBQ3RDLHdDQUF3QztJQUN4QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXJCLElBQUksUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFbkgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV0QixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQzVCLENBQUMsRUFBRSxDQUFDO1FBQ0osQ0FBQyxFQUFFLENBQUM7UUFDSixLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xCLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQixVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxZQUFDLEdBQUc7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QixRQUFRLENBQUMsc0JBQXNCLENBQUM7Z0JBQzVCLFFBQVEsRUFBRSxHQUFHLENBQUMsWUFBWTtnQkFDMUIsT0FBTyxZQUFDLEdBQUc7b0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsUUFBUSxDQUFDLFNBQVMsQ0FBQzt3QkFDbkIsS0FBSyxFQUFDLE1BQU07d0JBQ1osSUFBSSxFQUFDLFNBQVM7d0JBQ2QsUUFBUSxFQUFDLElBQUk7cUJBQ1osQ0FBQyxDQUFDO29CQUVILFFBQVEsRUFBRSxDQUFDO2dCQUNmLENBQUM7Z0JBQ0QsSUFBSSxZQUFDLEdBQUc7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFakIsUUFBUSxFQUFFLENBQUM7b0JBRVgsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFDO3dCQUNYLFFBQVEsQ0FBQyxXQUFXLENBQUM7NEJBQ2pCLE9BQU8sWUFBQyxXQUFXO2dDQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0NBQ3pCLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO29DQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7aUNBQzNDO3FDQUFLO29DQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztpQ0FDMUM7NEJBQ0wsQ0FBQzt5QkFDSixDQUFDLENBQUE7cUJBQ0w7Z0JBQ0wsQ0FBQzthQUNKLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDO0FBekRELG9EQXlEQztBQUdELFNBQWdCLGVBQWUsQ0FBQyxRQUFpQjtJQUM3QyxJQUFHLENBQUMsUUFBUTtRQUFFLE9BQU87SUFFckIsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNoQixPQUFPLFlBQUMsR0FBRztZQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7Z0JBQ3BDLFFBQVEsQ0FBQyxTQUFTLENBQUM7b0JBQ2YsS0FBSyxFQUFFLGdCQUFnQjtvQkFDdkIsT0FBTzt3QkFDSCwrQ0FBK0M7d0JBQy9DLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDM0IsQ0FBQztpQkFDSixDQUFDLENBQUE7YUFDTDtRQUNMLENBQUM7S0FDSixDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ2pCLE9BQU8sWUFBQyxHQUFHO1lBQ1AsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ25DLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDckMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQjtZQUNsRCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ25DLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDM0IsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxDQUFDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQTVCRCwwQ0E0QkM7QUFFRCxRQUFRO0FBQ1IsU0FBZ0IsY0FBYyxDQUFDLFFBQWUsRUFBRSxVQUFpQixFQUFFLGNBQXFCLEVBQUUsY0FBdUIsRUFBRSxjQUF3QjtJQUN2SSxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ2YsS0FBSyxFQUFFLFFBQVEsSUFBSSxJQUFJO1FBQ3ZCLE9BQU8sRUFBRSxVQUFVO1FBQ25CLFdBQVcsRUFBRSxjQUFjLElBQUksSUFBSTtRQUNuQyxPQUFPLFlBQUMsR0FBRztZQUNQLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixJQUFHLE9BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxVQUFVLEVBQUM7b0JBQ3BDLGNBQWMsRUFBRSxDQUFDO2lCQUNwQjtnQkFFRCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsSUFBRyxPQUFNLENBQUMsY0FBYyxDQUFDLElBQUksVUFBVSxFQUFDO29CQUNwQyxjQUFjLEVBQUUsQ0FBQztpQkFDcEI7Z0JBRUQsT0FBTyxLQUFLLENBQUM7YUFDaEI7UUFDTCxDQUFDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQXpCRCx3Q0F5QkM7QUFFRCxNQUFNO0FBQ04sSUFBSSxlQUFlLENBQUM7QUFDcEIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBRXBCOzs7O0dBSUc7QUFDSCxTQUFnQixxQkFBcUIsQ0FBQyxlQUF5QixFQUFFLGVBQXlCLEVBQUUsVUFBVztJQUNuRyxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxpQkFBaUI7SUFDakIsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsVUFBVSxDQUFDO0lBQ3pELElBQUcsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRztRQUFFLE9BQU87SUFFeEUsSUFBSSxNQUFNLEdBQUcsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUM7SUFDM0IsTUFBTTtJQUNOLElBQUcsV0FBVyxJQUFJLHFCQUFXLENBQUMsWUFBWSxDQUFDLE1BQU07UUFDN0MsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxxQkFBVyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzNELE1BQU0sQ0FBQyxRQUFRLEdBQUcscUJBQVcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFeEQsSUFBRyxlQUFlLElBQUksSUFBSSxFQUFDO1FBQ3ZCLGVBQWUsR0FBRyxRQUFRLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDNUQ7SUFDRCxJQUFHLGVBQWUsSUFBSSxJQUFJO1FBQUUsT0FBTztJQUVuQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ3hCLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLDBFQUEwRTtZQUMxRSxlQUFlO1lBQ2Ysd0NBQXdDO1lBQ3hDLE9BQU87WUFFUCxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxXQUFXLEVBQUUsQ0FBQztJQUVkLGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFekMsNENBQTRDO0lBQzVDLHNDQUFzQztJQUN0QyxvREFBb0Q7SUFDcEQsc0RBQXNEO0lBQ3RELDJDQUEyQztJQUMzQywyREFBMkQ7SUFDM0Qsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixJQUFJO0lBRUosaURBQWlEO0lBQ2pELElBQUksU0FBUyxHQUFHLFVBQVMsR0FBRztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUUzQixJQUFHLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFVBQVUsRUFBQztZQUNwRCxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUE7SUFFRCxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUExREQsc0RBMERDO0FBRUQsU0FBUyxlQUFlLENBQUMsR0FBRztJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLGVBQWUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUVELFVBQVU7QUFDVixJQUFJLFFBQVEsQ0FBQztBQUNiLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQVlsQjs7R0FFRztBQUNILFNBQWdCLGNBQWMsQ0FBQyxNQUFvQjtJQUMvQyxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2Qyw4REFBOEQ7SUFDOUQsc0VBQXNFO0lBQ3RFLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBRTNDLGlCQUFpQjtJQUNqQixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ3BDLElBQUcsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRztRQUFFLE9BQU87SUFFeEUsSUFBRyxDQUFDLE1BQU07UUFDTixNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLE1BQU07SUFDTixJQUFHLFNBQVMsSUFBSSxxQkFBVyxDQUFDLFlBQVksQ0FBQyxNQUFNO1FBQzNDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFFbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMscUJBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RCxNQUFNLENBQUMsUUFBUSxHQUFHLHFCQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXRELElBQUk7SUFDSixNQUFNLENBQUMsS0FBSyxHQUFHO1FBQ1gsSUFBSSxFQUFDLENBQUM7UUFDTixHQUFHLEVBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxHQUFHO1FBQzlCLEtBQUssRUFBQyxPQUFPLENBQUMsV0FBVztLQUU1QixDQUFBO0lBRUQsSUFBRyxRQUFRLElBQUksSUFBSSxFQUFDO1FBQ2hCLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzlDO1NBQUk7UUFDRCxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUM7SUFDRCxJQUFHLFFBQVEsSUFBSSxJQUFJO1FBQUUsT0FBTztJQUU1QixZQUFZO0lBQ1osUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFBLEdBQUc7UUFDakIsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3ZELElBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxVQUFVLEVBQUM7WUFDM0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUUsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRWxDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxFQUFFLENBQUM7QUFDaEIsQ0FBQztBQW5ERCx3Q0FtREM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxHQUFHO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRUQsU0FBZ0IsWUFBWTtJQUN4QixJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUN2QyxJQUFHLFFBQVEsSUFBSSxJQUFJO1FBQUUsT0FBTztJQUU1QixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQUxELG9DQUtDO0FBRUQsUUFBUTtBQUNSLFNBQWdCLFlBQVksQ0FBQyxHQUFHLEVBQUUsUUFBUTtJQUN0QyxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTztJQUUvQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQztJQUV6QixRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ2xCLEdBQUcsRUFBRSxHQUFHO1FBQ1IsT0FBTyxZQUFDLEdBQUc7WUFDUCwyREFBMkQ7WUFDM0QsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsSUFBRyxPQUFNLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxFQUFDO29CQUM5QixRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUM5QjthQUNKO1FBQ0wsQ0FBQztLQUNKLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFoQkQsb0NBZ0JDO0FBRUQsVUFBVTtBQUNWLFNBQWdCLGFBQWE7SUFDekIsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVyQixPQUFPO1FBQ0gsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVU7UUFDL0MsTUFBTSxFQUFFLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFVBQVU7S0FDcEQsQ0FBQztBQUNOLENBQUM7QUFWRCxzQ0FVQztBQUVELFVBQVU7QUFDVixTQUFnQixVQUFVLENBQUMsU0FBUztJQUNoQyxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ2hCLE9BQU8sWUFBQyxHQUFHO1lBQ1Asc0JBQXNCO1lBQ3RCLDBDQUEwQztZQUMxQyw4Q0FBOEM7WUFDOUMsd0NBQXdDO1lBQ3hDLG1EQUFtRDtZQUNuRCxJQUFJO1lBRUosT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0Isc0NBQXNDO1lBQ3RDLG1EQUFtRDtZQUNuRCxJQUFJO1lBRUosSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7Z0JBQ25DLGlDQUFpQztnQkFDakMsUUFBUSxDQUFDLFdBQVcsQ0FBQztvQkFDakIsT0FBTyxZQUFDLEdBQUc7d0JBQ1AsR0FBRyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7d0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pCLG9FQUFvRTtvQkFDeEUsQ0FBQztpQkFDSixDQUFDLENBQUE7YUFDTDtpQkFBSTtnQkFDRCxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtnQkFDTixxQkFBVyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDckQ7UUFDTCxDQUFDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWxDRCxnQ0FrQ0M7QUFFRCxRQUFRO0FBQ1IsU0FBZ0Isb0JBQW9CLENBQUMsU0FBUztJQUMxQyxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUM7UUFDekMsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsRUFBRTtRQUNSLHNEQUFzRDtRQUN0RCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsQ0FBQztZQUNQLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQzFCLE1BQU0sRUFBRSxPQUFPLENBQUMsWUFBWTtTQU8vQjtLQUNKLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixXQUFXO1FBQ1gsSUFBRyxHQUFHLENBQUMsYUFBYSxFQUFDO1lBQ2pCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1lBQ3JCLG9FQUFvRTtZQUNwRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILGdCQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLGNBQUssTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUFqQ0Qsb0RBaUNDO0FBRUQsUUFBUTtBQUNSLFNBQWdCLFdBQVcsQ0FBQyxRQUFrQjtJQUMxQyxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxJQUFHLE9BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxVQUFVLEVBQUM7UUFDaEQsSUFBTSxlQUFhLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFbEQsZUFBYSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FBRztZQUN4QyxjQUFjO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUcsT0FBTyxRQUFRLElBQUksVUFBVSxFQUFDO2dCQUM3QixRQUFRO2dCQUNSLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0I7WUFFRCxNQUFNO1lBQ04sSUFBRyxHQUFHLENBQUMsU0FBUyxFQUFDO2dCQUNiLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUMzQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsZUFBYSxDQUFDLGFBQWEsQ0FBQztZQUN4QixJQUFHLE9BQU8sUUFBUSxJQUFJLFVBQVUsRUFBQztnQkFDN0IsUUFBUTtnQkFDUixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEI7WUFFRCxRQUFRLENBQUMsU0FBUyxDQUFDO2dCQUNmLEtBQUssRUFBRSxNQUFNO2dCQUNiLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFVBQVUsRUFBQyxLQUFLO2dCQUNoQixPQUFPLFlBQUMsR0FBRztvQkFDWCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7d0JBQ2Isb0NBQW9DO3dCQUNwQyxlQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQy9CO2dCQUNELENBQUM7YUFDSixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVILGVBQWEsQ0FBQyxjQUFjLENBQUM7WUFDekIsVUFBVTtRQUNkLENBQUMsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDO0FBM0NELGtDQTJDQztBQUVELFVBQVU7QUFDVixTQUFnQixxQkFBcUIsQ0FBQyxPQUFPO0lBQ3pDLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQ3JELGVBQWUsQ0FBQyxXQUFXLENBQUM7UUFDeEIsT0FBTyxFQUFFLE9BQU87S0FDbkIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVBELHNEQU9DO0FBRUQsVUFBVTtBQUNWLFNBQWdCLGtCQUFrQixDQUFDLElBQUk7SUFDbkMsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUE7SUFDckQsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBTEQsZ0RBS0M7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQWtCLEVBQUUsT0FBUTtJQUNsRSxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxRQUFRLENBQUMsbUJBQW1CLENBQUM7UUFDekIsVUFBVSxFQUFFLElBQUk7UUFDaEIsT0FBTztZQUNILElBQUcsT0FBTyxRQUFRLElBQUksVUFBVTtnQkFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixDQUFDO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVZELGtEQVVDO0FBRUQsV0FBVztBQUNYLGdGQUFnRjtBQUNoRixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsUUFBUTtBQUNSLElBQUk7QUFDSixTQUFnQixvQkFBb0I7SUFDaEMsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFakMsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQVBELG9EQU9DO0FBRUQsV0FBVztBQUNYLFNBQWdCLGFBQWE7SUFDekIsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDakQsSUFBRyxVQUFVLElBQUksVUFBVSxDQUFDLFlBQVksRUFBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRELE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7S0FDeEM7U0FBSTtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDTCxDQUFDO0FBWEQsc0NBV0M7QUFFRCxTQUFTO0FBQ1QseUVBQXlFO0FBQ3pFLFNBQWdCLGNBQWM7SUFDMUIsSUFBRyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSztRQUFFLE9BQU87SUFFdkMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLElBQUcsVUFBVSxFQUFDO1FBQ1YsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDO0tBQzNCO1NBQUk7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO0FBQ0wsQ0FBQztBQVZELHdDQVVDO0FBRUQsY0FBYztBQUNkLFNBQWdCLG9CQUFvQjtJQUNoQyxJQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLO1FBQUUsT0FBTztJQUV2QyxJQUFJLEtBQUssR0FBRyxjQUFjLEVBQUUsQ0FBQztJQUM3Qix5Q0FBeUM7SUFDekMsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUM7QUFDMUMsQ0FBQztBQU5ELG9EQU1DO0FBRUQ7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFnQixxQkFBcUIsQ0FBQyxLQUFZLEVBQUUsSUFBWSxFQUFFLFNBQVUsRUFBRSxVQUFXLEVBQUUsUUFBa0IsRUFBRSxPQUFRO0lBQ25ILElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPO0lBRWpELFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQztRQUMzQixLQUFLLEVBQUUsS0FBSztRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsU0FBUyxFQUFFLFNBQVM7UUFDcEIsVUFBVSxFQUFFLFVBQVU7UUFDdEIsT0FBTyxZQUFDLEdBQUc7WUFDVCxPQUFPO1lBQ1AsSUFBRyxPQUFPLFFBQVEsSUFBSSxVQUFVO2dCQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUM7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDO0FBZEQsc0RBY0M7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixlQUFlLENBQUMsU0FBVSxFQUFFLFFBQWtCLEVBQUUsT0FBUSxFQUFFLFVBQWtCO0lBQ3hGLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLHFCQUFxQixDQUFDLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5RyxDQUFDO0FBSkQsMENBSUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsWUFBWSxDQUFDLEVBQVcsRUFBRSxPQUFRO0lBQzlDLElBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBRXZDLElBQUcsT0FBTyxFQUFFLElBQUksVUFBVSxFQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNkO0FBQ0wsQ0FBQztBQU5ELG9DQU1DO0FBRUQsc0JBQXNCO0FBQ3RCLElBQUksY0FBYyxDQUFDO0FBQ25CLFFBQVE7QUFDUixTQUFnQixpQkFBaUIsQ0FBQyxPQUFPO0lBQ3JDLElBQUcsQ0FBQyxPQUFPO1FBQUUsT0FBTztJQUVwQixjQUFjLEdBQUcsT0FBTyxDQUFDO0FBQzdCLENBQUM7QUFKRCw4Q0FJQztBQUVELFFBQVE7QUFDUixTQUFnQixpQkFBaUI7SUFDN0IsT0FBTyxjQUFjLENBQUM7QUFDMUIsQ0FBQztBQUZELDhDQUVDO0FBRUQsV0FBVztBQUNYOztHQUVHO0FBQ0gsK0NBQStDO0FBQy9DLGdFQUFnRTtBQUVoRSxzQ0FBc0M7QUFDdEMseUVBQXlFO0FBQ3pFLElBQUk7QUFFSixTQUFTO0FBQ1QsMENBQTBDO0FBQzFDLGtDQUFrQztBQUVsQyxpRUFBaUU7QUFDakUsSUFBSTs7Ozs7OztBQzV4QkosbUNBQThCO0FBQzlCLCtCQUEwQjtBQUMxQixvQ0FBK0I7QUFDL0IsOEJBQXlCO0FBQ3pCLGdDQUEyQjtBQUMzQixrQ0FBNkI7QUFDN0IsaUNBQTRCO0FBQzVCLG9DQUErQjtBQUMvQixtQ0FBOEI7QUFDOUIsbUNBQThCO0FBQzlCLG9DQUErQjs7OztBQ1QvQixpQ0FBbUM7QUFHbkMsU0FBZ0IsWUFBWSxDQUFDLE1BQWlCLEVBQUUsS0FBWSxFQUFFLEtBQUs7SUFDL0QsSUFBRyxJQUFJLElBQUksS0FBSyxFQUFDO1FBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQixPQUFPO0tBQ1Y7SUFFRCxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO1FBQ3BELE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUMvQyxPQUFPO0tBQ1Y7SUFFRCxJQUFJLE1BQXdCLENBQUM7SUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7UUFDVCxJQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQztTQUNmO2FBQUssSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUFDO1lBQ3ZCLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBdkJELG9DQXVCQztBQUVELFVBQVU7QUFDVixTQUFnQixnQkFBZ0IsQ0FBQyxNQUFpQixFQUFFLEtBQUs7SUFDckQsT0FBTyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRkQsNENBRUM7QUFFRCxTQUFTO0FBQ1QsSUFBSSxXQUFXLEdBQTBDLEVBQUUsQ0FBQztBQUM1RCxJQUFJLGdCQUFnQixHQUErQyxFQUFFLENBQUM7QUFDdEUsU0FBZ0IsY0FBYyxDQUFDLEdBQVU7SUFDckMsSUFBRyxDQUFDLEdBQUc7UUFBRSxPQUFPO0lBRWhCLElBQUcsSUFBSSxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBQztRQUN4QixXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekQsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQzlCO0lBRUQsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQVRELHdDQVNDO0FBRUQsVUFBVTtBQUNWLFNBQWdCLGFBQWEsQ0FBQyxHQUFVLEVBQUUsRUFBUztJQUMvQyxPQUFPLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBRkQsc0NBRUM7QUFFRCxRQUFRO0FBQ1IsU0FBZ0IsZ0JBQWdCLENBQUMsR0FBVSxFQUFFLEtBQVk7SUFDckQsV0FBVztJQUNYLE9BQU8sYUFBYSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBSEQsNENBR0M7QUFFRCxVQUFVO0FBQ1YsU0FBZ0IsY0FBYyxDQUFDLEdBQVUsRUFBRSxHQUFVLEVBQUUsS0FBSztJQUN4RCxPQUFPLFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3pELENBQUM7QUFGRCx3Q0FFQztBQUVELFNBQVM7QUFDVCxTQUFnQixpQkFBaUIsQ0FBQyxHQUFjLEVBQUUsS0FBWSxFQUFFLEdBQXNCO0lBQ2xGLElBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUM7UUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ2hELE9BQU87S0FDVjtJQUVELElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUM7UUFDM0IsR0FBRyxHQUFHLEVBQUUsQ0FBQztLQUNaO0lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7UUFDTixJQUFHLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBRyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDO1lBQ3JCLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdEI7UUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBdkJELDhDQXVCQztBQUVELGtCQUFrQjtBQUNsQixTQUFnQixtQkFBbUIsQ0FBQyxHQUFjLEVBQUUsS0FBWSxFQUFFLEtBQUssRUFBRSxHQUFlO0lBQ3BGLElBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUM7UUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ2hELE9BQU87S0FDVjtJQUVELElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUM7UUFDM0IsR0FBRyxHQUFHLEVBQUUsQ0FBQztLQUNaO0lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7UUFDTixJQUFHLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUFDO1lBQ2pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBdEJELGtEQXNCQztBQUVELHFCQUFxQjtBQUNyQixTQUFnQixZQUFZLENBQUMsR0FBVSxFQUFFLEtBQVksRUFBRSxLQUFLLEVBQUUsR0FBZTtJQUN6RSxPQUFPLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFGRCxvQ0FFQztBQUVELFFBQVE7QUFDUixTQUFnQixhQUFhLENBQUMsRUFBUztJQUNuQyxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxFQUFFLENBQTBCLENBQUM7QUFDbkYsQ0FBQztBQUZELHNDQUVDOzs7O0FDM0hELHlDQUEyQztBQUMzQyxpQ0FBbUM7QUFTbkMsVUFBVTtBQUNWLElBQU0sc0JBQXNCLEdBQUcsb0JBQW9CLENBQUM7QUFFcEQsZ0JBQWdCO0FBQ2hCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNOLFFBQUEsZUFBZSxHQUFHO0lBQzNCLE1BQU07SUFDTixrQkFBa0IsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDekQsS0FBSztJQUNMLGNBQWMsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDckQsTUFBTTtJQUNOLFVBQVUsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDakQsTUFBTTtJQUNOLFVBQVUsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDakQsTUFBTTtJQUNOLFdBQVcsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDbEQsUUFBUTtJQUNSLGFBQWEsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDcEQsTUFBTTtJQUNOLFVBQVUsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDakQsTUFBTTtJQUNOLFVBQVUsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDakQsT0FBTztJQUNQLGtCQUFrQixFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUN6RCxLQUFLO0lBQ0wsZUFBZSxFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUN0RCxLQUFLO0lBQ0wsZUFBZSxFQUFFLHNCQUFzQixHQUFHLFVBQVUsRUFBRTtJQUN0RCxLQUFLO0lBQ0wsZ0JBQWdCLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ3ZELEtBQUs7SUFDTCxlQUFlLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ3RELEtBQUs7SUFDTCxlQUFlLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ3RELE1BQU07SUFDTixZQUFZLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ25ELElBQUk7SUFDSixLQUFLLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQzVDLE1BQU07SUFDTixPQUFPLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQzlDLE1BQU07SUFDTixVQUFVLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ2pELE1BQU07SUFDTixPQUFPLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQzlDLFFBQVE7SUFDUixlQUFlLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ3RELFVBQVU7SUFDVixlQUFlLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ3RELE1BQU07SUFDTixTQUFTLEVBQUUsc0JBQXNCLEdBQUcsVUFBVSxFQUFFO0lBQ2hELE9BQU87SUFDUCxnQkFBZ0IsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDdkQsT0FBTztJQUNQLFlBQVksRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDbkQsTUFBTTtJQUNOLFVBQVUsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDakQsU0FBUztJQUNULFdBQVcsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDbEQsSUFBSTtJQUNKLElBQUksRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDM0MsSUFBSTtJQUNKLFNBQVMsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDaEQsTUFBTTtJQUNOLFlBQVksRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDbkQsTUFBTTtJQUNOLGFBQWEsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDcEQsS0FBSztJQUNMLFNBQVMsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7SUFDaEQsT0FBTztJQUNQLGFBQWEsRUFBRSxzQkFBc0IsR0FBRyxVQUFVLEVBQUU7Q0FDdkQsQ0FBQTtBQUVEO0lBQUE7UUFDVyxhQUFRLEdBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQXFHaEIsZUFBVSxHQUE2QixFQUFFLENBQUM7SUFrSHhELENBQUM7SUE1SmlCLHNCQUFXLEdBQXpCO1FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELHNCQUFrQixzQkFBUTthQUExQjtZQUNJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQzthQUNyQztZQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVhLDBCQUFlLEdBQTdCLFVBQThCLEdBQVU7UUFDcEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRWEsd0JBQWEsR0FBM0IsVUFBNEIsR0FBVSxFQUFFLEVBQVM7UUFDN0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVhLHVCQUFZLEdBQTFCLFVBQTJCLE1BQWlCLEVBQUUsS0FBWSxFQUFFLEtBQUs7UUFDN0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUcsQ0FBQyxNQUFNLEVBQUM7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEMsT0FBTztTQUNWO2FBQUk7WUFDRCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFYSwyQkFBZ0IsR0FBOUIsVUFBK0IsTUFBaUIsRUFBRSxFQUFTO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFYSw2QkFBa0IsR0FBaEMsVUFBaUMsR0FBVSxFQUFFLEVBQVM7UUFDbEQsSUFBSSxNQUFNLEdBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUlTLCtCQUFVLEdBQXBCLFVBQXFCLEdBQVUsRUFBRSxHQUFVLEVBQUUsRUFBWTtRQUF6RCxpQkFTQztRQVJHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBQSxNQUFNO1lBQ2xELE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUM7WUFDbEMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRWhCLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRU0sK0JBQVUsR0FBakIsVUFBa0IsRUFBWTtRQUE5QixpQkFlQztRQWRHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQUEsTUFBTTtZQUNyRSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxJQUFJLFFBQVEsR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBQztnQkFDdkIsSUFBSSxPQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDNUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO29CQUN0QixJQUFHLEdBQUcsSUFBSSxPQUFLLEdBQUcsQ0FBQyxFQUFDO3dCQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztxQkFDMUM7eUJBQUk7d0JBQ0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDdEM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsTUFBTTtJQUNDLGdDQUFXLEdBQWxCLFVBQW1CLEdBQW1CLEVBQUUsSUFBSTtRQUN4QyxnQ0FBZ0M7UUFDaEMsK0JBQStCO1FBQy9CLElBQUk7UUFDSixtQ0FBbUM7UUFFbkMsYUFBYTtRQUNiLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxrQ0FBYSxHQUFwQixVQUFxQixJQUFJO1FBQ3JCLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLHNDQUFpQixHQUF4QixVQUF5QixJQUE2QjtRQUNsRCxPQUFPO1FBQ1AsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBRTVELElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxFQUEwQixDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLHlCQUFjLEdBQXJCLFVBQXNCLEdBQVU7UUFDNUIsSUFBRyxDQUFDLEdBQUcsRUFBQztZQUNKLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBRyxDQUFDLE1BQU0sRUFBQztZQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO2FBQUk7WUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7UUFFRCxtQ0FBbUM7SUFDdkMsQ0FBQztJQUVNLDJCQUFnQixHQUF2QixVQUF3QixNQUE2QjtRQUNqRCxPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxnQ0FBcUIsR0FBNUIsVUFBNkIsR0FBVTtRQUNuQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUdELHNCQUFXLDBCQUFZO1FBRHZCLFVBQVU7YUFDVjtZQUNJLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlELENBQUM7OztPQUFBO0lBRU0sb0NBQWUsR0FBdEIsVUFBdUIsR0FBVTtRQUM3QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLGtDQUFhLEdBQXBCLFVBQXFCLEdBQVUsRUFBQyxFQUFTO1FBQ3JDLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLEtBQUksSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQyxJQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ3ZCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyQjthQUNKO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0scUNBQWdCLEdBQXZCLFVBQXdCLEdBQVUsRUFBRSxJQUFXO1FBQzNDLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLElBQUksTUFBTSxHQUFjLElBQUksS0FBSyxFQUFFLENBQUM7WUFDcEMsS0FBSSxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0I7YUFDSjtZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQXBOYSx5QkFBYyxHQUFHLEtBQUssQ0FBQyxDQUFHLFNBQVM7SUFDaEMsc0JBQVcsR0FBSSx5QkFBeUIsQ0FBQztJQUV6Qyx3QkFBYSxHQUFJLDJCQUEyQixDQUFDO0lBQzdDLHNCQUFXLEdBQUkseUJBQXlCLENBQUM7SUFDekMscUJBQVUsR0FBSSx3QkFBd0IsQ0FBQztJQUN2QywrQkFBb0IsR0FBSSxpQ0FBaUMsQ0FBQztJQUMxRCwwQkFBZSxHQUFJLDRCQUE0QixDQUFDO0lBQ2hELG1CQUFRLEdBQUksc0JBQXNCLENBQUM7SUFDbkMsbUJBQVEsR0FBSSxzQkFBc0IsQ0FBQztJQUNuQyxtQkFBUSxHQUFJLHNCQUFzQixDQUFDO0lBRXBELGtDQUFrQztJQUNwQiwwQkFBZSxHQUFHLGFBQWEsQ0FBQztJQUM5QyxnQkFBZ0I7SUFDaEIsNkVBQTZFO0lBQzdFLHFFQUFxRTtJQUNyRSxxRUFBcUU7SUFDckUsc0VBQXNFO0lBQ3RFLHFFQUFxRTtJQUNyRSwwRUFBMEU7SUFDMUUscUVBQXFFO0lBQ3JFLDhFQUE4RTtJQUM5RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLDJFQUEyRTtJQUMzRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUUxRCx3QkFBYSxHQUFHLFdBQVcsQ0FBQztJQUM1QixzQkFBVyxHQUFHLFNBQVMsQ0FBQztJQUN4QixxQkFBVSxHQUFHLFFBQVEsQ0FBQTtJQUNyQiwrQkFBb0IsR0FBRSxpQkFBaUIsQ0FBQTtJQUN2QywwQkFBZSxHQUFFLGFBQWEsQ0FBQTtJQUM5QixtQkFBUSxHQUFHLE1BQU0sQ0FBQztJQUNsQixtQkFBUSxHQUFHLE1BQU0sQ0FBQztJQUNsQixtQkFBUSxHQUFHLE1BQU0sQ0FBQztJQUVsQix1QkFBWSxHQUFHLGNBQWMsQ0FBQztJQUU1QyxPQUFPO0lBQ1MscUJBQVUsR0FBRyxHQUFHLENBQUM7SUFDakMsTUFBTTtJQUNVLG9CQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLFFBQVE7SUFDUSxtQkFBUSxHQUFHLEVBQUUsQ0FBQztJQUM5QixNQUFNO0lBQ1Usb0JBQVMsR0FBRyxDQUFDLENBQUM7SUFDOUIsTUFBTTtJQUNVLG9CQUFTLEdBQUcsQ0FBQyxDQUFDO0lBRTlCLE1BQU07SUFDQyxtQkFBUSxHQUFHLENBQUMsQ0FBQztJQWdLeEIsaUJBQUM7Q0F4TkQsQUF3TkMsSUFBQTtBQXhOWSxnQ0FBVTtBQTBOdkI7SUFBQTtJQW1CQSxDQUFDO0lBZkcsc0JBQVcsd0JBQU07YUFBakI7WUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztnQkFDWixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzVEO1lBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRU0sNEJBQWEsR0FBcEIsVUFBcUIsRUFBUztRQUMxQixPQUFPLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSwrQkFBZ0IsR0FBdkIsVUFBd0IsS0FBWTtRQUNoQyxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSx3Q0FBYztBQXFCM0IscUZBQXFGO0FBQ3JGLE1BQU07QUFDTjtJQUFBO0lBTUEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSxnQ0FBVTtBQVF2QixNQUFNO0FBQ047SUFBdUMscUNBQVU7SUFBakQ7O0lBT0EsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FQQSxBQU9DLENBUHNDLFVBQVUsR0FPaEQ7QUFQWSw4Q0FBaUI7Ozs7QUN0VTlCO0lBS0ksb0JBQVksR0FBVSxFQUFFLFFBQWlCLEVBQUUsTUFBTztRQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFDTCxpQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksZ0NBQVU7QUFZdkI7SUFJSTtRQUhBLGNBQVMsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO1FBQ2xDLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBeUIsQ0FBQztJQUc3QyxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLFFBQWlCLEVBQUUsTUFBTztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLE9BQWdCO1FBQzNCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLElBQUcsR0FBRyxJQUFJLENBQUMsRUFBQztZQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLHNDQUFhO0FBMkIxQixNQUFNO0FBQ04sSUFBWSxhQUtYO0FBTEQsV0FBWSxhQUFhO0lBQ3JCLE1BQU07SUFDTix1REFBVyxDQUFBO0lBQ1gsTUFBTTtJQUNOLHVEQUFXLENBQUE7QUFDZixDQUFDLEVBTFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFLeEI7QUFFRCxLQUFLO0FBQ1EsUUFBQSxRQUFRLEdBQUc7SUFDcEIsS0FBSztJQUNMLEtBQUssRUFBRSxPQUFPO0lBQ2QsTUFBTTtJQUNOLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLE1BQU07SUFDTixTQUFTLEVBQUUsV0FBVztJQUN0QixJQUFJO0lBQ0osU0FBUyxFQUFFLFdBQVc7SUFDdEIsWUFBWTtJQUNaLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07Q0FDZixDQUFBO0FBRUQsT0FBTztBQUNNLFFBQUEsV0FBVyxHQUFHO0lBQ3ZCLE1BQU07SUFDTixTQUFTLEVBQUUsV0FBVztJQUN0QixNQUFNO0lBQ04sYUFBYSxFQUFFLGVBQWU7Q0FDakMsQ0FBQTtBQUVELFFBQVE7QUFDSyxRQUFBLFlBQVksR0FBRztJQUN4QixJQUFJO0lBQ0osV0FBVyxFQUFFLENBQUM7Q0FDakIsQ0FBQTtBQUVELE1BQU07QUFDTixJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIsdUNBQU8sQ0FBQTtJQUNQLHFDQUFNLENBQUE7SUFDTiwyQ0FBUyxDQUFBO0FBQ2IsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBRUQsU0FBUztBQUNULElBQVksWUFLWDtBQUxELFdBQVksWUFBWTtJQUNwQixRQUFRO0lBQ1IsaURBQVMsQ0FBQTtJQUNULE1BQU07SUFDTixpREFBUyxDQUFBO0FBQ2IsQ0FBQyxFQUxXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBS3ZCO0FBRUQsUUFBUTtBQUNSLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUNyQiwyREFBYSxDQUFBO0lBQ2IsaUVBQWdCLENBQUE7SUFDaEIsMkRBQWEsQ0FBQTtJQUNiLDZEQUFjLENBQUE7QUFDbEIsQ0FBQyxFQUxXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBS3hCO0FBRUQsUUFBUTtBQUNSO0lBS0kseUJBQVksR0FBaUIsRUFBRSxHQUFpQixFQUFFLFFBQStCO1FBQzdFLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLDBDQUFlO0FBWTVCLFVBQVU7QUFDRyxRQUFBLGlCQUFpQixHQUFHO0lBQzdCLElBQUk7SUFDSixPQUFPLEVBQUUsQ0FBQztJQUNWLE1BQU07SUFDTixNQUFNLEVBQUUsQ0FBQztJQUNULE9BQU87SUFDUCxnQkFBZ0IsRUFBRSxDQUFDO0NBQ3RCLENBQUE7QUFFRCxRQUFRO0FBQ1I7SUFRSSx5QkFBWSxPQUFnQixFQUFFLGNBQXdCLEVBQUUsVUFBa0IsRUFBRSxVQUFXLEVBQUUsU0FBaUIsRUFBRSxZQUFvQjtRQUM1SCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFlBQVksQ0FBQSxDQUFDLENBQUMsWUFBWSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSwwQ0FBZTs7OztBQ2xJNUIseUNBQTJDO0FBRTNDO0lBUUk7SUFBc0IsQ0FBQztJQTRCdkIsT0FBTztJQUNBLHlCQUFhLEdBQXBCO1FBQ0ksT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRU0sMEJBQWMsR0FBckIsVUFBc0IsTUFBTTtRQUN4QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUExQ2Usb0NBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUksV0FBVztJQUM1QyxxQ0FBeUIsR0FBRyxFQUFFLENBQUMsQ0FBSSxXQUFXO0lBQzlDLGdDQUFvQixHQUFHLENBQUMsQ0FBQyxDQUFFLFlBQVk7SUFDdkMscUJBQVMsR0FBRyxDQUFDLENBQUM7SUFDZCxxQkFBUyxHQUFHLENBQUMsQ0FBQztJQUNkLHNCQUFVLEdBQUcsQ0FBQyxDQUFDO0lBSXhCLDRCQUFnQixHQUFHLEtBQUssQ0FBQztJQUN6Qiw0QkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFFekIsd0JBQVksR0FBRztRQUNsQix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIseUJBQXlCO0tBQzVCLENBQUM7SUFFSyx3QkFBWSxHQUFHO1FBQ2xCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qix5QkFBeUI7S0FDNUIsQ0FBQztJQUVjLDRCQUFnQixHQUFHO1FBQy9CLEtBQUssRUFBRSxvQkFBb0I7S0FDOUIsQ0FBQztJQUVGLFNBQVM7SUFDRixvQkFBUSxHQUFHLElBQUksQ0FBQztJQVUzQixrQkFBQztDQTVDRCxBQTRDQyxJQUFBO2tCQTVDb0IsV0FBVzs7OztBQ0FuQixRQUFBLFlBQVksR0FBRztJQUN4QixNQUFNLEVBQUUsSUFBSTtJQUVaLFFBQVEsRUFBRSxPQUFPO0lBRWpCLEdBQUcsRUFBRSxJQUFJO0lBRVQsVUFBVSxFQUFFLE1BQU07SUFFbEIsUUFBUSxFQUFFLElBQUk7SUFFZCxpQkFBaUIsRUFBRSxRQUFRO0lBRTNCLFNBQVMsRUFBRSxNQUFNO0lBRWpCLGFBQWEsRUFBRSxlQUFlO0NBQ2pDLENBQUE7Ozs7QUNsQlUsUUFBQSxZQUFZLEdBQUc7SUFDdEIsRUFBRSxHQUFHLEVBQUUscUNBQXFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ3hFLEVBQUUsR0FBRyxFQUFFLDZCQUE2QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUNoRSxFQUFFLEdBQUcsRUFBRSxvQ0FBb0MsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Q0FDekUsQ0FBQTs7OztBQ0ZEO0lBU0kseUJBQVksR0FBVSxFQUFFLE9BQWMsRUFBRSxPQUFjLEVBQUUsT0FBZSxFQUFFLE9BQWUsRUFBRSxPQUFRO1FBQzlGLElBQUcsT0FBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBQztZQUMzQixhQUFhO1lBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUF0Qk0sd0JBQVEsR0FBc0MsRUFBRSxDQUFDO0lBdUI1RCxzQkFBQztDQXhCRCxBQXdCQyxJQUFBO0FBeEJZLDBDQUFlO0FBMEI1QixNQUFNO0FBQ0ssUUFBQSxPQUFPLEdBQUc7SUFDakIsS0FBSyxFQUFDLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQztJQUN2QixnQkFBZ0IsRUFBQyxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUM7SUFDNUIsUUFBUSxFQUFDLEVBQUMsY0FBYyxFQUFFLENBQUMsRUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO0lBQ3pDLFdBQVcsRUFBQyxFQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUM7SUFDMUIsYUFBYSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDO0lBQzFDLGFBQWEsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUM7SUFDMUIsaUJBQWlCLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDO0lBQzlCLFdBQVcsRUFBQyxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUM7SUFDdEQsVUFBVSxFQUFDLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQztJQUNyRCxZQUFZLEVBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQztJQUN6QyxPQUFPO0lBQ1AsY0FBYyxFQUFDLEVBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEtBQUssRUFBc0IsRUFBQztDQUNyRixDQUFBO0FBRUQsV0FBVztBQUNYO0lBSUksNEJBQVksR0FBVSxFQUFFLE9BQWU7UUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBR0Qsc0JBQVcsa0NBQVk7UUFEdkIsT0FBTzthQUNQO1lBQ0ksT0FBTyxDQUFDLHFCQUFhLEVBQUUscUJBQWEsRUFBRSxxQkFBYSxFQUFFLHFCQUFhLENBQUMsQ0FBQztRQUN4RSxDQUFDOzs7T0FBQTtJQUNMLHlCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxnREFBa0I7QUFlL0IsUUFBUTtBQUNLLFFBQUEsYUFBYSxHQUFHLElBQUksa0JBQWtCLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRS9ELElBQVksVUFZWDtBQVpELFdBQVksVUFBVTtJQUNsQiwrQkFBaUIsQ0FBQTtJQUNqQiw2QkFBZSxDQUFBO0lBQ2YsaUNBQW1CLENBQUE7SUFDbkIseUNBQTJCLENBQUE7SUFDM0IsaURBQW1DLENBQUE7SUFDbkMsK0NBQWlDLENBQUE7SUFDakMscURBQXVDLENBQUE7SUFDdkMsMkNBQTZCLENBQUE7SUFDN0IseUNBQTJCLENBQUE7SUFDM0IseUNBQTJCLENBQUE7SUFDM0IseUNBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQVpXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBWXJCO0FBRVUsUUFBQSxTQUFTLEdBQUc7SUFDbkIsVUFBVSxFQUFDLDZCQUE2QjtJQUV4Qyw4REFBOEQ7SUFFOUQsY0FBYyxFQUFDLHFFQUFxRTtJQUVwRixlQUFlLEVBQUMsNkJBQTZCO0lBRTdDLHFCQUFxQixFQUFDLDBDQUEwQztJQUVoRSxLQUFLLEVBQUMsMkNBQTJDO0lBRWpELFFBQVEsRUFBQyxFQUFFO0NBQ2QsQ0FBQTtBQUVELE1BQU07QUFDTixJQUFZLGdCQUdYO0FBSEQsV0FBWSxnQkFBZ0I7SUFDeEIseURBQVMsQ0FBQTtJQUNULDZEQUFXLENBQUE7QUFDZixDQUFDLEVBSFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFHM0I7QUFTRCxTQUFnQixXQUFXLENBQUMsSUFBbUI7SUFDM0MsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNqQyxDQUFDO0FBRkQsa0NBRUM7QUFFRCxTQUFTO0FBQ1Q7SUFNSSx5QkFBWSxFQUFTLEVBQUUsT0FBYyxFQUFFLElBQVksRUFBRSxJQUFLO1FBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUcsSUFBSSxFQUFDO1lBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekI7UUFDRCxJQUFHLElBQUksRUFBQztZQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSwwQ0FBZTtBQWtCakIsUUFBQSxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQW1CLENBQUM7QUFFeEQsT0FBTztBQUNQO0lBT0ksc0JBQVksSUFBWSxFQUFFLEVBQVUsRUFBRSxNQUFjLEVBQUUsYUFBcUIsRUFBRSxFQUFVO1FBQ25GLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTCxtQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksb0NBQVk7QUFrSXpCO0lBR0ksK0JBQVksUUFBZTtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLHNEQUFxQjs7OztBQ3BRckIsUUFBQSxZQUFZLEdBQUc7SUFDeEIsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLFlBQVksRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLFlBQVksRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUN4QyxPQUFPO0lBQ1Asa0JBQWtCLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsZUFBZSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzQyxVQUFVLEVBQUUsSUFBSTtDQUNuQixDQUFBOzs7O0FDZEQsSUFBSSxJQUFJLEdBQUc7SUFDUCxFQUFFLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDeEQsRUFBRSxHQUFHLEVBQUUsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQzlELEVBQUUsR0FBRyxFQUFFLDRCQUE0QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUM5RCxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDdEQsRUFBRSxHQUFHLEVBQUUsK0JBQStCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ2xFLEVBQUUsR0FBRyxFQUFFLHNDQUFzQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUN4RSxFQUFFLEdBQUcsRUFBRSxxQ0FBcUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDeEUsRUFBRSxHQUFHLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ3hELEVBQUUsR0FBRyxFQUFFLDRCQUE0QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUM5RCxFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDOUQsRUFBRSxHQUFHLEVBQUUsa0NBQWtDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ3BFLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUMxRCxFQUFFLEdBQUcsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDMUQsRUFBRSxHQUFHLEVBQUUsOEJBQThCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ2hFLEVBQUUsR0FBRyxFQUFFLGdDQUFnQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNsRSxFQUFFLEdBQUcsRUFBRSw4QkFBOEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDaEUsRUFBRSxHQUFHLEVBQUUsZ0NBQWdDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ2xFLEVBQUUsR0FBRyxFQUFFLGdDQUFnQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNsRSxFQUFFLEdBQUcsRUFBRSxnQ0FBZ0MsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDbEUsRUFBRSxHQUFHLEVBQUUsaUNBQWlDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ3BFLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtDQUN6RCxDQUFBO0FBQ08sb0JBQUk7Ozs7QUN0QkMsUUFBQSxXQUFXLEdBQUc7SUFDdkIsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLElBQUksRUFBRSxNQUFNO0lBQ1osVUFBVSxFQUFFLFlBQVk7SUFDeEIsVUFBVSxFQUFFLFlBQVk7Q0FDM0IsQ0FBQTs7OztBQ0ZZLFFBQUEsT0FBTyxHQUFHO0lBQ25CLE1BQU07SUFDTixXQUFXLEVBQUU7UUFDVCxHQUFHLEVBQUUsYUFBYTtRQUNsQixHQUFHLEVBQUUsV0FBVztRQUNoQixHQUFHLEVBQUMsYUFBYTtLQUNwQjtJQUVELE9BQU87SUFDUCxhQUFhLEVBQUM7UUFDVixHQUFHLEVBQUUsZUFBZTtRQUNwQixPQUFPLEVBQUUsNkJBQTZCO1FBQ3RDLEdBQUcsRUFBRSxlQUFlO1FBQ3BCLEdBQUcsRUFBQyxlQUFlO0tBQ3RCO0lBRUQsTUFBTTtJQUNOLGVBQWUsRUFBRTtRQUNiLEdBQUcsRUFBRSxpQkFBaUI7UUFDdEIsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxHQUFHLEVBQUUsV0FBVztRQUNoQixHQUFHLEVBQUMsaUJBQWlCO0tBQ3hCO0lBRUQsS0FBSztJQUNMLFFBQVEsRUFBRTtRQUNOLEdBQUcsRUFBRSxVQUFVO1FBQ2YsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxHQUFHLEVBQUUsVUFBVTtRQUNmLEdBQUcsRUFBQyxVQUFVO0tBQ2pCO0lBRUQsTUFBTTtJQUNOLGVBQWUsRUFBRTtRQUNiLEdBQUcsRUFBRSxpQkFBaUI7UUFDdEIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxHQUFHLEVBQUUsVUFBVTtRQUNmLEdBQUcsRUFBQyxpQkFBaUI7S0FDeEI7SUFFRCxJQUFJO0lBQ0osU0FBUyxFQUFFO1FBQ1AsR0FBRyxFQUFFLFdBQVc7UUFDaEIsT0FBTyxFQUFFLGVBQWU7UUFDeEIsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUMsV0FBVztLQUNsQjtJQUVELElBQUk7SUFDSixpQkFBaUIsRUFBRTtRQUNmLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsT0FBTyxFQUFFLGFBQWE7UUFDdEIsR0FBRyxFQUFFLE9BQU87UUFDWixHQUFHLEVBQUMsbUJBQW1CO0tBQzFCO0lBR0QsSUFBSTtJQUNKLFNBQVMsRUFBRTtRQUNQLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLEdBQUcsRUFBRSxPQUFPO1FBQ1osR0FBRyxFQUFDLFdBQVc7S0FDbEI7SUFFRCxRQUFRO0lBQ1Isa0JBQWtCLEVBQUU7UUFDaEIsR0FBRyxFQUFFLG9CQUFvQjtRQUN6QixPQUFPLEVBQUUsZUFBZTtRQUN4QixHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBQyxvQkFBb0I7S0FDM0I7SUFFRCxNQUFNO0lBQ04sWUFBWSxFQUFFO1FBQ1YsR0FBRyxFQUFFLGNBQWM7UUFDbkIsT0FBTyxFQUFFLGFBQWE7UUFDdEIsR0FBRyxFQUFFLE9BQU87UUFDWixHQUFHLEVBQUMsY0FBYztLQUNyQjtJQUVELE1BQU07SUFDTixRQUFRLEVBQUU7UUFDTixHQUFHLEVBQUUsVUFBVTtRQUNmLEdBQUcsRUFBRSxNQUFNO1FBQ1gsR0FBRyxFQUFDLFVBQVU7S0FDakI7SUFFRCxNQUFNO0lBQ04sUUFBUSxFQUFFO1FBQ04sR0FBRyxFQUFFLFVBQVU7UUFDZixHQUFHLEVBQUUsTUFBTTtRQUNYLEdBQUcsRUFBQyxVQUFVO0tBQ2pCO0lBRUQsT0FBTztJQUNQLFVBQVUsRUFBRTtRQUNSLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLEdBQUcsRUFBRSxNQUFNO1FBQ1gsR0FBRyxFQUFDLFlBQVk7S0FDbkI7SUFFRCxNQUFNO0lBQ04sUUFBUSxFQUFFO1FBQ04sR0FBRyxFQUFFLFVBQVU7UUFDZixHQUFHLEVBQUUsTUFBTTtRQUNYLEdBQUcsRUFBQyxVQUFVO0tBQ2pCO0lBRUQsTUFBTTtJQUNOLFdBQVcsRUFBRTtRQUNULEdBQUcsRUFBRSxhQUFhO1FBQ2xCLEdBQUcsRUFBRSxNQUFNO1FBQ1gsR0FBRyxFQUFDLGFBQWE7S0FDcEI7SUFFRCxNQUFNO0lBQ04sYUFBYSxFQUFFO1FBQ1gsR0FBRyxFQUFFLGVBQWU7UUFDcEIsR0FBRyxFQUFFLE1BQU07UUFDWCxHQUFHLEVBQUMsZUFBZTtLQUN0QjtJQUVELElBQUk7SUFDSixVQUFVLEVBQUU7UUFDUixHQUFHLEVBQUUsWUFBWTtRQUNqQixHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBQyxZQUFZO0tBQ25CO0lBRUQsTUFBTTtJQUNOLGlCQUFpQixFQUFFO1FBQ2YsR0FBRyxFQUFFLG1CQUFtQjtRQUN4QixHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBQyxtQkFBbUI7S0FDMUI7SUFFRCxTQUFTO0lBQ1QsU0FBUyxFQUFFO1FBQ1AsR0FBRyxFQUFFLFdBQVc7UUFDaEIsR0FBRyxFQUFFLFFBQVE7UUFDYixHQUFHLEVBQUMsV0FBVztLQUNsQjtJQUVELE1BQU07SUFDTixxQkFBcUIsRUFBRTtRQUNuQixHQUFHLEVBQUUsdUJBQXVCO1FBQzVCLEdBQUcsRUFBRSxVQUFVO1FBQ2YsR0FBRyxFQUFDLHVCQUF1QjtLQUM5QjtJQUVELE9BQU87SUFDUCxZQUFZLEVBQUU7UUFDVixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBQyxjQUFjO0tBQ3JCO0lBRUQsT0FBTztJQUNQLGVBQWUsRUFBRTtRQUNiLEdBQUcsRUFBRSxpQkFBaUI7UUFDdEIsR0FBRyxFQUFFLGFBQWE7UUFDbEIsR0FBRyxFQUFDLGlCQUFpQjtLQUN4QjtJQUVELE1BQU07SUFDTixVQUFVLEVBQUU7UUFDUixHQUFHLEVBQUUsWUFBWTtRQUNqQixHQUFHLEVBQUUsYUFBYTtRQUNsQixHQUFHLEVBQUMsWUFBWTtLQUNuQjtJQUVELE1BQU07SUFDTixhQUFhLEVBQUU7UUFDWCxHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsYUFBYTtRQUNsQixHQUFHLEVBQUMsZUFBZTtLQUN0QjtJQUVELEtBQUs7SUFDTCxZQUFZLEVBQUU7UUFDVixHQUFHLEVBQUUsY0FBYztRQUNuQixHQUFHLEVBQUUsYUFBYTtRQUNsQixHQUFHLEVBQUMsY0FBYztLQUNyQjtJQUVELFFBQVE7SUFDUixjQUFjLEVBQUU7UUFDWixHQUFHLEVBQUUsZ0JBQWdCO1FBQ3JCLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLEdBQUcsRUFBQyxnQkFBZ0I7S0FDdkI7SUFFRCxLQUFLO0lBQ0wsWUFBWSxFQUFFO1FBQ1YsR0FBRyxFQUFFLGNBQWM7UUFDbkIsR0FBRyxFQUFFLGFBQWE7UUFDbEIsR0FBRyxFQUFDLGNBQWM7S0FDckI7SUFFRCxNQUFNO0lBQ04sUUFBUSxFQUFFO1FBQ04sR0FBRyxFQUFFLFVBQVU7UUFDZixHQUFHLEVBQUUsWUFBWTtRQUNqQixHQUFHLEVBQUMsVUFBVTtLQUNqQjtJQUVELElBQUk7SUFDSixPQUFPLEVBQUU7UUFDTCxHQUFHLEVBQUUsU0FBUztRQUNkLEdBQUcsRUFBRSxVQUFVO1FBQ2YsR0FBRyxFQUFDLFNBQVM7S0FDaEI7SUFFRCxTQUFTO0lBQ1QsZUFBZSxFQUFFO1FBQ2IsR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixHQUFHLEVBQUUsTUFBTTtRQUNYLEdBQUcsRUFBQyxpQkFBaUI7S0FDeEI7SUFFRCxPQUFPO0lBQ1AsT0FBTyxFQUFFO1FBQ0wsR0FBRyxFQUFFLFNBQVM7UUFDZCxHQUFHLEVBQUUsTUFBTTtRQUNYLEdBQUcsRUFBQyxTQUFTO0tBQ2hCO0NBQ0osQ0FBQztBQUVGO0lBQ0k7SUFBc0IsQ0FBQztJQUNULDJCQUFrQixHQUFHLEtBQUssQ0FBQyxDQUFHLFlBQVk7SUFFeEQsVUFBVTtJQUNNLGVBQU0sR0FBRztRQUNyQixPQUFPO1FBQ1AsUUFBUTtRQUNSLFVBQVU7S0FDYixDQUFDO0lBRUYsU0FBUztJQUNPLGdCQUFPLEdBQUc7UUFDdEIsU0FBUztLQUNaLENBQUM7SUFFRixTQUFTO0lBQ08scUJBQVksR0FBRztRQUMzQixPQUFPO1FBQ1AsTUFBTSxFQUFFLEdBQUc7UUFDWCxPQUFPO1FBQ1AsT0FBTyxFQUFFLEdBQUc7UUFDWixPQUFPO1FBQ1AsWUFBWSxFQUFFLEdBQUc7UUFDakIsT0FBTztRQUNQLFdBQVcsRUFBRSxHQUFHO1FBQ2hCLFFBQVE7UUFDUixlQUFlLEVBQUUsR0FBRztRQUNwQixPQUFPO1FBQ1AsTUFBTSxFQUFFLEdBQUc7UUFDWCxPQUFPO1FBQ1AsS0FBSyxFQUFFLEdBQUc7UUFDVixPQUFPO1FBQ1AsY0FBYyxFQUFFLEdBQUc7UUFDbkIsT0FBTztRQUNQLFNBQVMsRUFBRSxHQUFHO1FBQ2QsT0FBTztRQUNQLFFBQVEsRUFBRSxHQUFHO1FBQ2IsT0FBTztRQUNQLFNBQVMsRUFBRSxHQUFHO1FBQ2QsT0FBTztRQUNQLE9BQU8sRUFBRSxHQUFHO1FBQ1osT0FBTztRQUNQLFdBQVcsRUFBRSxHQUFHO1FBQ2hCLFFBQVE7UUFDUixVQUFVLEVBQUUsSUFBSTtRQUNoQixPQUFPO1FBQ1AsT0FBTyxFQUFFLElBQUk7S0FDaEIsQ0FBQztJQUVGLFNBQVM7SUFDTyxrQkFBUyxHQUFHO1FBQ3hCLE1BQU0sRUFBQztZQUNILElBQUksRUFBQyxZQUFZO1lBQ2pCLEtBQUssRUFBQyxlQUFlO1NBQ3hCO1FBRUQsSUFBSSxFQUFDLG1CQUFtQjtRQUV4QixNQUFNLEVBQUM7WUFDSCxJQUFJLEVBQUMsY0FBYztZQUNuQixLQUFLLEVBQUMsaUJBQWlCO1NBQzFCO1FBRUQsU0FBUyxFQUFDO1lBQ04sSUFBSSxFQUFDLGlCQUFpQjtZQUN0QixLQUFLLEVBQUMsb0JBQW9CO1NBQzdCO0tBQ0osQ0FBQztJQUVGLElBQUk7SUFDWSxrQkFBUyxHQUFHO1FBQ3hCLFdBQVcsRUFBQyxrQkFBa0I7S0FDakMsQ0FBQztJQUVGLFFBQVE7SUFDUSxxQkFBWSxHQUFHO1FBQzNCLE1BQU0sRUFBQyxtQkFBbUI7S0FDN0IsQ0FBQztJQUVGLE9BQU87SUFDUyxzQkFBYSxHQUFHO1FBQzVCLE1BQU0sRUFBQyxtQkFBbUI7S0FDN0IsQ0FBQztJQUVjLHVCQUFjLEdBQUc7UUFDN0IsWUFBWSxFQUFDLDJHQUEyRztLQUMzSCxDQUFDO0lBRUYsV0FBVztJQUNLLG1CQUFVLEdBQUc7UUFDekIsTUFBTSxFQUFDO1lBQ0gsR0FBRyxFQUFDLEtBQUs7WUFDVCxLQUFLLEVBQUMsT0FBTztZQUNiLEtBQUssRUFBQyxPQUFPO1lBQ2IsS0FBSyxFQUFDLE9BQU87WUFDYixNQUFNLEVBQUMsUUFBUTtZQUNmLE1BQU0sRUFBQyxRQUFRO1NBQ2xCO0tBQ0osQ0FBQztJQUVGLE1BQU07SUFDVSxtQkFBVSxHQUFHO1FBQ3pCLGFBQWEsRUFBQyxlQUFlO0tBQ2hDLENBQUM7SUFFYyxrQkFBUyxHQUFHO1FBQ3hCLFdBQVcsRUFBRSxTQUFTO0tBQ3pCLENBQUM7SUFDTixlQUFDO0NBN0dELEFBNkdDLElBQUE7QUE3R1ksNEJBQVE7Ozs7Ozs7QUM3T3JCLG1DQUE4QjtBQUM5QixtQ0FBOEI7QUFDOUIsbUNBQThCOzs7O0FDRjlCLDRDQUE4QztBQUM5Qyx5Q0FBMkM7QUFHM0MsMkNBQWdEO0FBRWhEO0lBQUE7SUFxRUEsQ0FBQztJQXBFVSxzQkFBVSxHQUFqQjtRQUNJLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDN0MsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUM5QyxxQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ3hCLHFCQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFDeEIscUJBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUMzQixDQUFDLENBQ2dCLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUscUJBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sc0JBQVUsR0FBakI7UUFDSSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQzdDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDOUMscUJBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUN4QixxQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ3hCLHFCQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FDM0IsQ0FBQyxDQUNnQixDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLHFCQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFOUMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGtCQUFNLEdBQWIsVUFBYyxHQUFVO1FBQ3BCLFFBQVEsR0FBRyxFQUFFO1lBQ1QsS0FBSyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUk7Z0JBQ3JCLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUU5RixLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtnQkFDckIsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pHO0lBQ0wsQ0FBQztJQUVNLHNCQUFVLEdBQWpCLFVBQWtCLE1BQW9CLEVBQUUsSUFBaUI7UUFDckQsSUFBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRTVCLElBQUksU0FBUyxHQUFvQixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLDZDQUE2QztRQUNwSCxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN2QyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMzQixTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRU0scUJBQVMsR0FBaEIsVUFBaUIsUUFBeUIsRUFBRSxNQUFNO1FBQzlDLElBQUcsQ0FBQyxRQUFRLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUVoQyxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSx1QkFBVyxHQUFsQixVQUFtQixRQUFzQixFQUFFLE9BQWMsRUFBRSxPQUFjO1FBQ3JFLElBQUcsQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxJQUFJLE9BQU87WUFBRSxPQUFPO1FBRXBFLElBQUcsUUFBUSxFQUFFO1lBQ1QsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBRyxLQUFLLFlBQVksSUFBSSxDQUFDLFlBQVksRUFBQztZQUNsQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO2FBQUk7WUFDRCxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUE0QjtnQkFDbkUsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUF3QixDQUFDO1lBQzlDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUNYO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FyRUEsQUFxRUMsSUFBQTtBQXJFWSxrQ0FBVzs7OztBQ0Z4QjtJQU1JLHFCQUFZLEtBQVksRUFBRSxRQUFrQixFQUFFLE9BQWlCLEVBQUUsTUFBZ0I7UUFDN0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUM7WUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLGtDQUFXOzs7O0FDSnhCLDRDQUE4QztBQUU5QyxtQ0FBcUM7QUFFckM7SUFPSSxxQkFBWSxHQUFxQjtRQUFFLGdCQUE0QjthQUE1QixVQUE0QixFQUE1QixxQkFBNEIsRUFBNUIsSUFBNEI7WUFBNUIsK0JBQTRCOztRQUMzRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsT0FBbEIsSUFBSSxFQUFrQixNQUFNLEVBQUU7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUFFRCxzQkFBSSxpQ0FBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVELCtCQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ1osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLE1BQU07UUFDWixJQUFHLENBQUMsTUFBTTtZQUFFLE9BQU87UUFFbkIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLElBQVc7UUFDbkIsSUFBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRTVDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLEdBQVU7UUFDaEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksR0FBZ0I7UUFDeEIsSUFBRyxJQUFJLENBQUMsR0FBRztZQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDMUMsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFBYyxnQkFBNEI7YUFBNUIsVUFBNEIsRUFBNUIscUJBQTRCLEVBQTVCLElBQTRCO1lBQTVCLDJCQUE0Qjs7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLElBQUcsQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUVsQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUFBLGlCQVNDO1FBUkcsSUFBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUFFLE9BQU87UUFFMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO1lBQ2xCLElBQUcsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFDO2dCQUN6QixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ1osT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDTCxrQkFBQztBQUFELENBeEVBLEFBd0VDLElBQUE7QUF4RVksa0NBQVc7Ozs7Ozs7QUNKeEIsZ0NBQTJCOzs7O0FDQzNCLHlDQUEyQztBQUMzQyw0Q0FBOEM7QUFDOUMseUNBQTJDO0FBQzNDLDJDQUFzQztBQUV0QztJQVFJLHlCQUFZLE9BQWMsRUFBRSxPQUFjLEVBQUUsT0FBZSxFQUFFLE9BQWUsRUFBRSxPQUFRO1FBQ2xGLElBQUcsT0FBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBQztZQUMzQixhQUFhO1lBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLDBDQUFlO0FBc0I1QjtJQUF5Qyw4QkFBcUI7SUFBOUQ7O0lBaURBLENBQUM7SUF2Q1Usa0JBQU8sR0FBZCxVQUFlLE9BQVE7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsc0JBQVcscUJBQU87YUFBbEIsVUFBbUIsSUFBSTtZQUNuQixJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87Z0JBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxrQkFBSTthQUFmLFVBQWdCLElBQUksSUFBRSxDQUFDOzs7T0FBQTtJQUVoQix1QkFBWSxHQUFuQixVQUFvQixJQUEwQixJQUFFLENBQUM7SUFFMUMscUJBQVUsR0FBakIsVUFBa0IsSUFBMEI7UUFDeEMsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdCO1FBQ0QsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQkFBVyxvQkFBTTthQUFqQjtZQUNJLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDO2dCQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDNUM7WUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFTSxrQkFBTyxHQUFkLFVBQWUsTUFBYSxFQUFFLE9BQXVCLEVBQUUsUUFBa0IsRUFBRSxhQUFjLEVBQUUsSUFBYTtRQUNwRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxnQ0FBcUIsR0FBNUIsVUFBNkIsSUFBMEIsRUFBRSxNQUFhLEVBQUUsT0FBTztJQUMvRSxDQUFDO0lBQUEsQ0FBQztJQTlDYSxtQkFBUSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7SUErQ2xELGlCQUFDO0NBakRELEFBaURDLENBakR3QyxNQUFNLENBQUMsY0FBYyxHQWlEN0Q7QUFqRHFCLGdDQUFVO0FBbURoQztJQUFnQyw4QkFBZTtJQW9CM0Msb0JBQVksT0FBYyxFQUFFLE9BQWMsRUFBRSxPQUFRO1FBQXBELGlCQU9DO1FBTkcsSUFBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2pDLE9BQU87U0FDVjtRQUFBLENBQUM7UUFFRixRQUFBLGtCQUFNLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUFDOztJQUM5RSxDQUFDO0lBWEQsc0JBQVcsc0JBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFqQmMsNEJBQWlCLEdBQVcsS0FBSyxDQUFDO0lBQ2xDLHdCQUFhLEdBQVcsS0FBSyxDQUFDO0lBMEJqRCxpQkFBQztDQTVCRCxBQTRCQyxDQTVCK0IsZUFBZSxHQTRCOUM7QUE1QlksZ0NBQVU7QUFrQ3ZCLE1BQU07QUFDTjtJQUFBO0lBZ0JBLENBQUM7SUFYRyxzQkFBVyxrQkFBSTthQUFmLFVBQWdCLElBQUk7WUFDaEIsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBQztnQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2pDO1lBRUQsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBQztnQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzdCO1lBRUQsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQVpNLGdCQUFLLEdBQUcsQ0FBQyxDQUFDO0lBYXJCLGlCQUFDO0NBaEJELEFBZ0JDLElBQUE7QUFoQlksZ0NBQVU7QUF5QlosUUFBQSxTQUFTLEdBQUc7SUFDbkIsV0FBVyxFQUFFLElBQUksS0FBSyxFQUFlO0lBQ3JDLGNBQWMsRUFBRSxJQUFJLEtBQUssRUFBZTtJQUN4QyxXQUFXLEVBQUUsSUFBSSxLQUFLLEVBQWU7SUFDckMsWUFBWSxFQUFFLElBQUksS0FBSyxFQUFlLENBQVEsUUFBUTtDQUN6RCxDQUFBO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLFNBQVU7SUFDbkMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsUUFBUSxTQUFTLEVBQUU7UUFDZixLQUFLLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUztZQUMvQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsaUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUQsT0FBTyxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFL0MsS0FBSyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVk7WUFDbEMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGlCQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLE9BQU8saUJBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRWxELEtBQUssTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTO1lBQy9CLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RCxPQUFPLGlCQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUUvQztZQUNJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxpQkFBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRCxPQUFPLGlCQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztLQUNuRDtBQUNMLENBQUM7QUFuQkQsb0NBbUJDO0FBRUQsTUFBTTtBQUNOO0lBQWdDLDhCQUFVO0lBQTFDOztJQUlBLENBQUM7SUFIRyxzQkFBVyxrQkFBSTthQUFmLFVBQWdCLFNBQWtDO1lBQzlDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSitCLFVBQVUsR0FJekM7QUFKWSxnQ0FBVTtBQU12QixTQUFTLGFBQWEsQ0FBQyxTQUFrQztJQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNoQyxJQUFHLENBQUMsU0FBUztRQUFFLE9BQU87SUFFdEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEQsS0FBSSxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUM7UUFDbkIsSUFBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUM7WUFDWixNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkY7S0FDSjtJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUN4QyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFFRCxNQUFNO0FBQ047SUFBK0IsNkJBQVU7SUFBekM7O0lBMEJBLENBQUM7SUFyQkcsc0JBQVcsc0JBQVM7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxpQkFBSTthQUFmLFVBQWdCLElBQStCO1lBQzNDLElBQUcsSUFBSSxDQUFDLGVBQWUsRUFBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztnQkFDbEQsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQzFDO1lBRUQsSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFDO2dCQUNmLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNyQztZQUVELElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDO2dCQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUMxQjtZQUVELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTtJQXRCYyxvQkFBVSxHQUFHLEtBQUssQ0FBQyxDQUFFLE9BQU87SUF1Qi9DLGdCQUFDO0NBMUJELEFBMEJDLENBMUI4QixVQUFVLEdBMEJ4QztBQTFCWSw4QkFBUztBQTRCdEIsTUFBTTtBQUNOO0lBQWlDLCtCQUFVO0lBQTNDOztJQVFBLENBQUM7SUFQRyxzQkFBVyxtQkFBSTthQUFmLFVBQWdCLFFBQVE7WUFDcEIsSUFBRyxRQUFRLENBQUMsVUFBVSxFQUFDO2dCQUNuQixVQUFVLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7YUFDekM7WUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlFLENBQUM7OztPQUFBO0lBQ0wsa0JBQUM7QUFBRCxDQVJBLEFBUUMsQ0FSZ0MsVUFBVSxHQVExQztBQVJZLGtDQUFXOzs7QUMzTnhCLGdHQUFnRzs7QUFFaEc7O0VBRUU7QUFDRjtJQWFJO0lBQWMsQ0FBQztJQUNSLGVBQUksR0FBWDtRQUNJLElBQUksR0FBRyxHQUFhLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO0lBRWpELENBQUM7SUFoQk0sZ0JBQUssR0FBUSxHQUFHLENBQUM7SUFDakIsaUJBQU0sR0FBUSxJQUFJLENBQUM7SUFDbkIsb0JBQVMsR0FBUSxZQUFZLENBQUM7SUFDOUIscUJBQVUsR0FBUSxVQUFVLENBQUM7SUFDN0IsaUJBQU0sR0FBUSxLQUFLLENBQUM7SUFDcEIsaUJBQU0sR0FBUSxNQUFNLENBQUM7SUFDckIscUJBQVUsR0FBSyxFQUFFLENBQUM7SUFDbEIsb0JBQVMsR0FBUSxFQUFFLENBQUM7SUFDcEIsZ0JBQUssR0FBUyxLQUFLLENBQUM7SUFDcEIsZUFBSSxHQUFTLEtBQUssQ0FBQztJQUNuQix1QkFBWSxHQUFTLEtBQUssQ0FBQztJQUMzQiw0QkFBaUIsR0FBUyxJQUFJLENBQUM7SUFNMUMsaUJBQUM7Q0FsQkQsQUFrQkMsSUFBQTtrQkFsQm9CLFVBQVU7QUFtQi9CLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztBQ3JCbEIsd0NBQTBDO0FBQzFDLDJDQUE2QztBQUU3QyxrQ0FBb0M7QUFDcEMsd0NBQTBDO0FBQzFDLHFDQUF1QztBQUV2QztJQUFnQyw2QkFBcUI7SUFBckQ7O0lBdUtBLENBQUM7SUFuS0Esc0JBQVcsaUJBQUk7YUFBZjtZQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUVNLDJCQUFPLEdBQWQ7UUFDQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFeEMsZUFBZTtRQUNmLGlGQUFpRjtRQUNqRixxRkFBcUY7UUFDckYsNEVBQTRFO1FBQzVFLCtFQUErRTtJQUNoRixDQUFDO0lBRVMsd0JBQUksR0FBWDtRQUNGLG1FQUFtRTtRQUNuRSxRQUFRO1FBQ1IsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFFOUQsTUFBTTtRQUNOLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsaURBQWlELENBQUM7WUFDdEUsOEZBQThGO1lBQzlGLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFJO2dCQUM5QixNQUFNO2dCQUNOLFlBQVk7YUFDWixDQUFBO1NBQ0Q7UUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLHdEQUF3RDtJQUN6RCxDQUFDO0lBRU8sZ0NBQVksR0FBcEI7UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8sa0NBQWMsR0FBdEI7UUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8scUNBQWlCLEdBQXpCO1FBQ0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTywyQkFBTyxHQUFmO1FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVPLDZCQUFTLEdBQWpCLFVBQWtCLFFBQWdCO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLGdFQUFnRTtJQUNqRSxDQUFDO0lBRU8sK0JBQVcsR0FBbkIsVUFBb0IsSUFBSTtRQUN2QixJQUFHLENBQUMsSUFBSSxFQUFDO1lBQ1IsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDbkQ7UUFFRCxLQUFLO1FBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUNqQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLDRCQUFRLEdBQWhCO1FBQ0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sZ0NBQVksR0FBcEI7UUFDQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLEtBQUssTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPO2dCQUNoQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFFM0IsTUFBTTtZQUNQLEtBQUssTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPO2dCQUNoQyxVQUFVO2dCQUNWLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO2dCQUU5RCw2Q0FBNkM7Z0JBQzdDLHdCQUF3QjtnQkFDeEIsU0FBUztnQkFDVCw0QkFBNEI7Z0JBQzVCLElBQUk7Z0JBRUosTUFBTTtTQUNQO0lBQ0YsQ0FBQztJQUVPLG9DQUFnQixHQUF4QjtRQUNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLG9CQUFvQjtJQUNyQixDQUFDO0lBRU8sK0JBQVcsR0FBbkI7UUFDQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU8sdUNBQW1CLEdBQTNCO1FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNDLE1BQU07UUFDTiwyREFBMkQ7UUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUIsb0JBQW9CO1FBQ3BCLGlFQUFpRTtJQUNsRSxDQUFDO0lBRU8sa0NBQWMsR0FBdEI7UUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLDZCQUFTLEdBQWpCO1FBQ0MsSUFBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBQztZQUNsRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsdUJBQXVCO1NBQ3ZCO2FBQUssSUFBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLHFCQUFxQixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQztZQUNyRyx1QkFBdUI7U0FDdkI7YUFBSyxJQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQztZQUM1Qix1QkFBdUI7U0FDdkI7YUFBSTtZQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNqQjtJQUNGLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0MsSUFBSSxHQUFVLENBQUM7UUFDZixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFHLFFBQVEsRUFBQztZQUNYLEdBQUcsR0FBRyxRQUFRLENBQUM7U0FDZjthQUFJO1lBQ0osYUFBYTtZQUNiLEdBQUcsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyw2QkFBUyxHQUFqQjtRQUNDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsOEJBQVUsR0FBVjtRQUNDLGlGQUFpRjtRQUNqRixnREFBZ0Q7UUFDaEQsV0FBVztRQUNYLEtBQUs7UUFFTCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQXZLQSxBQXVLQyxDQXZLK0IsTUFBTSxDQUFDLGNBQWMsR0F1S3BEO0FBdktZLDhCQUFTOzs7O0FDVnRCLHlDQUEyQztBQUUzQztJQUF5Qyx1Q0FBcUI7SUFRN0Q7UUFBQSxZQUNDLGlCQUFPLFNBQ1A7UUFSUyxZQUFNLEdBQUcsS0FBSyxDQUFDOztJQVF6QixDQUFDO0lBTkQsc0JBQUksc0NBQUs7YUFBVDtZQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQU1ELHlDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRU0sNENBQWMsR0FBckIsVUFBc0IsS0FBMkI7UUFDaEQsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxlQUFlLEVBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDRixDQUFDO0lBRU0sMkNBQWEsR0FBcEIsVUFBcUIsS0FBMkI7SUFFaEQsQ0FBQztJQUVNLDJDQUFhLEdBQXBCLFVBQXFCLEtBQTJCO0lBQ2hELENBQUM7SUFFTSw4Q0FBZ0IsR0FBdkIsVUFBd0IsU0FBd0I7UUFDL0MsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztJQUVNLDZDQUFlLEdBQXRCLFVBQXVCLFNBQXdCO0lBQy9DLENBQUM7SUFFTSw2Q0FBZSxHQUF0QixVQUF1QixTQUF3QjtJQUMvQyxDQUFDO0lBRUYsMEJBQUM7QUFBRCxDQXpDQSxBQXlDQyxDQXpDd0MsTUFBTSxDQUFDLGNBQWMsR0F5QzdEO0FBekNZLGtEQUFtQjs7OztBQ0ZoQyx5Q0FBMkM7QUFFM0M7SUFBeUMsdUNBQXFCO0lBUTdEO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBUkQsWUFBTSxHQUFHLEtBQUssQ0FBQzs7SUFRZixDQUFDO0lBTkQsc0JBQUksc0NBQUs7YUFBVDtZQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQU1ELHlDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRU0sNENBQWMsR0FBckIsVUFBc0IsS0FBMkI7UUFDaEQsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxlQUFlLEVBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDRixDQUFDO0lBRU0sMkNBQWEsR0FBcEIsVUFBcUIsS0FBMkI7SUFFaEQsQ0FBQztJQUVNLDJDQUFhLEdBQXBCLFVBQXFCLEtBQTJCO0lBQ2hELENBQUM7SUFFTSw4Q0FBZ0IsR0FBdkIsVUFBd0IsU0FBd0I7UUFDL0MsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0lBQ0YsQ0FBQztJQUVNLDZDQUFlLEdBQXRCLFVBQXVCLFNBQXdCO0lBQy9DLENBQUM7SUFFTSw2Q0FBZSxHQUF0QixVQUF1QixTQUF3QjtJQUMvQyxDQUFDO0lBRUYsMEJBQUM7QUFBRCxDQXpDQSxBQXlDQyxDQXpDd0MsTUFBTSxDQUFDLGNBQWMsR0F5QzdEO0FBekNZLGtEQUFtQjs7OztBQ0RoQyxtQ0FBcUM7QUFFckMseUNBQTJDO0FBQzNDLDRDQUE4QztBQUM5QyxtQ0FBcUM7QUFDckMseUNBQTJDO0FBQzNDLCtCQUFpQztBQUVqQyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFFbkI7SUFBK0IsNkJBQXFCO0lBQXBEO1FBQUEscUVBMlFDO1FBMVFHLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLGtCQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFPMUIsY0FBUSxHQUFpQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7SUFpUXpELENBQUM7SUEvUEcsMkJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUF3QixDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUM3QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDL0UsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzlFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNqRixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDN0MsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2xGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUM1RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJ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QztBQUN0QyxtQ0FBOEI7QUFDOUIsb0RBQStDO0FBQy9DLDhDQUF5QyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgKiBmcm9tICcuL0V2ZW50VHlwZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVzb3VyY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL1V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2dpY1V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9XeFV0aWxzJztcclxuIiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCBHRXZlbnQgZnJvbSBcIi4vR0V2ZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnREaXNwYXRoZXIgZXh0ZW5kcyBMYXlhLlNjcmlwdDNEIHtcclxuICAgIHByb3RlY3RlZCBfZXZlbnRMaXN0ID0gbmV3IEFycmF5PENvbmZpZy5FdmVudENsYXNzPigpOyAgXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9zdGF0aWNFdmVudExpc3QgPSBuZXcgQXJyYXk8Q29uZmlnLkV2ZW50Q2xhc3M+KCk7IC8v6Z2Z5oCB5pa55rOV5LqL5Lu2XHJcblxyXG4gICAgLy/pnZnmgIHmlrnms5VcclxuICAgIHN0YXRpYyBhZGRFdmVudExpc3RlbmVyKGtleSwgbGlzZW5lcjpGdW5jdGlvbil7XHJcbiAgICAgICAgR0V2ZW50LkFkZExpc3RlbmVyKGtleSwgbGlzZW5lciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fc3RhdGljRXZlbnRMaXN0LnB1c2gobmV3IENvbmZpZy5FdmVudENsYXNzKGtleSwgbGlzZW5lcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXNwYXRjaEV2ZW50KGtleSwgLi4uZGF0YSl7XHJcbiAgICAgICAgR0V2ZW50LkRpc3BhdGNoKGtleSwgLi4uZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsZWFyRXZlbnRMaXN0ZW5lcigpe1xyXG4gICAgICAgIHRoaXMuX3N0YXRpY0V2ZW50TGlzdC5mb3JFYWNoKGV2dD0+e1xyXG4gICAgICAgICAgICBHRXZlbnQuUmVtb3ZlTGlzdGVuZXIoZXZ0LktleSwgZXZ0Lkxpc3RlbmVyKTtcclxuICAgICAgICAgICAgZXZ0ID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJvY2Vzc0V2ZW50KGtleSwgbGlzdGVuZXI6RnVuY3Rpb24sIC4uLmRhdGEpe1xyXG4gICAgICAgIC8vIGxpc3RlbmVyLmNhbGwodGhpcywgLi4uZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lrp7kvovljJbph43ovb3mlrnms5VcclxuICAgIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGtleSwgbGlzZW5lcjpGdW5jdGlvbil7XHJcbiAgICAgICAgR0V2ZW50LkFkZExpc3RlbmVyKGtleSwgbGlzZW5lciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0LnB1c2gobmV3IENvbmZpZy5FdmVudENsYXNzKGtleSwgbGlzZW5lcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwYXRjaEV2ZW50KGtleSwgLi4uZGF0YSl7XHJcbiAgICAgICAgR0V2ZW50LkRpc3BhdGNoKGtleSwgLi4uZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lv4XpobvlnKjplIDmr4Hml7bmiafooYzmraTmlrnms5VcclxuICAgIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKCl7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0LmZvckVhY2goZXZ0PT57XHJcbiAgICAgICAgICAgIEdFdmVudC5SZW1vdmVMaXN0ZW5lcihldnQuS2V5LCBldnQuTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBldnQgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcm9jZXNzRXZlbnQoa2V5LCBsaXN0ZW5lcjpGdW5jdGlvbiwgLi4uZGF0YSl7XHJcbiAgICAgICAgLy8gbGlzdGVuZXIuY2FsbCh0aGlzLCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICAvL+mHjeWGmeatpOe7hOS7tuaWueazleW/hemhu+aJp+ihjFxyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CYXNlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGVudW0gRXZlbnRTcGFuIHtcclxuICAgIE1vZHVsZVNwYW4gPSAxMDAwMDAsXHJcbiAgICBGdW5jU3BhbiA9IDEwMDAsXHJcbiAgICBVSVNwYW4gPSAxLFxyXG59XHJcblxyXG4vL+aooeWdl+WKn+iDvVxyXG5lbnVtIE1vZHVsZUV0eXBlIHtcclxuICAgIFNjZW5lID0gMSxcclxuICAgIEdhbWUgPSAyLFxyXG4gICAgTmV0ID0gMyxcclxuICAgIFVpID0gNCxcclxuICAgIE5wYyA9IDUsXHJcbiAgICBDaGFyYWN0ZXIgPSA2LFxyXG4gICAgQXNzZXQgPSA3LFxyXG4gICAgRGF0YSA9IDgsXHJcbiAgICBBdWRpbyA9IDksXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1vZHVsZUVpZCB7XHJcbiAgICBTY2VuZSAgICAgICA9IE1vZHVsZUV0eXBlLlNjZW5lICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sICAgLy/lnLrmma/mqKHlnZdcclxuICAgIE5ldCAgICAgICAgID0gTW9kdWxlRXR5cGUuTmV0ICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sICAgLy/nvZHnu5zmqKHlnZdcclxuICAgIEdhbWUgICAgICAgID0gTW9kdWxlRXR5cGUuR2FtZSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLCAgIC8v546p5rOV5qih5Z2XXHJcbiAgICBEYXRhICAgICAgICA9IE1vZHVsZUV0eXBlLkRhdGEgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgIC8vVUnmqKHlnZdcclxuICAgIFVpICAgICAgICAgID0gTW9kdWxlRXR5cGUuVWkgKiBFdmVudFNwYW4uTW9kdWxlU3BhbiwgIC8vVUnmqKHlnZdcclxuICAgIENoYXJhY3RlciAgID0gTW9kdWxlRXR5cGUuQ2hhcmFjdGVyICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sIC8v546p5a625bGe5oCn5qih5Z2XXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hbmFnZXJFaWQge1xyXG4gICAgR2FtZU1hbmFnZXIgICAgICAgICA9IE1vZHVsZUV0eXBlLkdhbWUgKiBFdmVudFNwYW4uTW9kdWxlU3BhbixcclxuICAgIE5ldE1hbmFnZXIgICAgICAgICAgPSBNb2R1bGVFdHlwZS5OZXQgKiBFdmVudFNwYW4uTW9kdWxlU3BhbixcclxuICAgIFVpTWFuYWdlciAgICAgICAgICAgPSBNb2R1bGVFdHlwZS5VaSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG4gICAgQXNzZXRNYW5hZ2VyICAgICAgICA9IE1vZHVsZUV0eXBlLkFzc2V0ICogRXZlbnRTcGFuLk1vZHVsZVNwYW4sXHJcbiAgICBEYXRhTWFuYWdlciAgICAgICAgID0gTW9kdWxlRXR5cGUuRGF0YSAqIEV2ZW50U3Bhbi5Nb2R1bGVTcGFuLFxyXG4gICAgQXVkaW9NYW5hZ2VyICAgICAgICA9IE1vZHVsZUV0eXBlLkRhdGEgKiBFdmVudFNwYW4uTW9kdWxlU3BhbixcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t572R57uc5qih5Z2X5Yqf6IO9LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgbmV0TW9kdWxlTnVtID0gMTtcclxuZW51bSBOZXRNb2R1bGVJZCB7XHJcbiAgICBIdHRwQ29ubmV0ICAgICAgID0gTW9kdWxlRWlkLk5ldCArIChuZXRNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8vSFRUUOi/nuaOpVxyXG59XHJcblxyXG4vL0hUVFDov57mjqVcclxubGV0IG5ldEh0dHBDb25uZWN0RWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gTmV0SHR0cENvbm5lY3RFaWQge1xyXG4gICAgU2VydmljZVJlc3BvbmQgICAgICA9IE5ldE1vZHVsZUlkLkh0dHBDb25uZXQgKyBuZXRIdHRwQ29ubmVjdEVpZE51bSsrLCAgICAvL+WTjeW6lOaIkOWKn1xyXG4gICAgQ29ubmVjdEJlZ2luICAgICAgICA9IE5ldE1vZHVsZUlkLkh0dHBDb25uZXQgKyBuZXRIdHRwQ29ubmVjdEVpZE51bSsrLCAgICAvL+W8gOWni+i/nuaOpVxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lnLrmma/mqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBzY2VuZU1vZHVsZU51bSA9IDE7XHJcbmVudW0gU2NlbmVNb2R1bGVJZCB7XHJcbiAgICBMb2dpbiAgICAgICA9IE1vZHVsZUVpZC5TY2VuZSArIChzY2VuZU1vZHVsZU51bSsrKSAqIEV2ZW50U3Bhbi5GdW5jU3BhbiwgLy/nmbvlvZVcclxuICAgIEVudGVyICAgICAgID0gTW9kdWxlRWlkLlNjZW5lICsgKHNjZW5lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+i/m+WFpeWcuuaZr+mAmuefpVxyXG59XHJcblxyXG4vL+eZu+W9lVxyXG5sZXQgc2NlbmVMb2dpbkVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIFNjZW5lTG9naW5FaWQge1xyXG4gICAgU2VydmljZUNob29zZWQgID0gU2NlbmVNb2R1bGVJZC5Mb2dpbiArIHNjZW5lTG9naW5FaWROdW0rKywgICAgLy/lt7LpgInmi6nmnI3liqHlmajvvIzlvIDlj5HnlKhcclxuICAgIENvbmZpZ0xvYWRlZCAgICA9IFNjZW5lTW9kdWxlSWQuTG9naW4gKyBzY2VuZUxvZ2luRWlkTnVtKyssICAgIC8v6YWN572u5Yqg6L295a6M5oiQXHJcbiAgICBQYWNrYWdlTG9hZGVkICAgPSBTY2VuZU1vZHVsZUlkLkxvZ2luICsgc2NlbmVMb2dpbkVpZE51bSsrLCAgICAvL+WKoOi9veWMheWujOaIkFxyXG4gICAgTG9naW5TdWNjZXNzICAgID0gU2NlbmVNb2R1bGVJZC5Mb2dpbiArIHNjZW5lTG9naW5FaWROdW0rKywgICAgLy/nmbvlvZXmiJDlip9cclxuICAgIFNpbVByb2dyZXNzRW5kICA9IFNjZW5lTW9kdWxlSWQuTG9naW4gKyBzY2VuZUxvZ2luRWlkTnVtKyssICAgIC8v5YGH6L+b5bqm5p2h6K+75a6MXHJcbn1cclxuXHJcbi8v6L+b5YWl5Zy65pmv6YCa55+lXHJcbmxldCBzY2VuZUVudGVyRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gU2NlbmVFbnRlckVpZCB7XHJcbiAgICBNYWluTWVudSAgICAgICAgPSBTY2VuZU1vZHVsZUlkLkVudGVyICsgc2NlbmVFbnRlckVpZE51bSsrLCAgICAvL+S4u+eVjOmdouWcuuaZr1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mlbDmja7mqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBkYXRhTW9kdWxlTnVtID0gMTtcclxuZW51bSBEYXRhTW9kdWxlSWQge1xyXG4gICAgUGxheWVyICAgICAgID0gTW9kdWxlRWlkLkRhdGEgKyAoc2NlbmVNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v546p5a625pWw5o2uXHJcbiAgICBBZG9iZSAgICAgICA9IE1vZHVsZUVpZC5EYXRhICsgKHNjZW5lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+a0nuW6nOaVsOaNrlxyXG4gICAgU2VjdCAgICAgICA9IE1vZHVsZUVpZC5EYXRhICsgKHNjZW5lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+mXqOa0vuaVsOaNrlxyXG59XHJcblxyXG4vL+eOqeWutlxyXG5sZXQgZGF0YVBsYXllckVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIERhdGFQbGF5ZXJFaWQge1xyXG4gICAgUmVmcmVzaGVkICAgICAgICAgICAgPSBEYXRhTW9kdWxlSWQuUGxheWVyICsgZGF0YVBsYXllckVpZE51bSsrLCAgLy/mlbDmja7mm7TmlrDpgJrnn6VcclxuICAgIEdtQWRkQmFnSXRlbVN1Y2Nlc3MgID0gRGF0YU1vZHVsZUlkLlBsYXllciArIGRhdGFQbGF5ZXJFaWROdW0rKywgIC8vR03lkb3ku6Tlop7liqDog4zljIXnianlk4HmiJDlip9cclxufVxyXG5cclxuLy/mtJ7lupxcclxubGV0IGRhdGFBZG9iZUVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIERhdGFBZG9iZUVpZCB7XHJcbiAgICBSZWZyZXNoZWQgICAgPSBEYXRhTW9kdWxlSWQuQWRvYmUgKyBkYXRhQWRvYmVFaWROdW0rKywgICAgLy/mlbDmja7mm7TmlrDpgJrnn6VcclxufVxyXG5cclxuLy/pl6jmtL5cclxubGV0IGRhdGFTZWN0RWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gRGF0YVNlY3RFaWQge1xyXG4gICAgUmVmcmVzaGVkICAgICAgICAgICAgICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v5pWw5o2u5pu05paw6YCa55+lXHJcbiAgICBHb3RJbmZvICAgICAgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/ojrflvpfpl6jmtL5VSeaVsOaNrlxyXG4gICAgR290VGFza0luZm8gICAgICAgICAgICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v6I635b6X6Zeo5rS+5Lu75Yqh5pWw5o2uXHJcbiAgICBHb3RUcmFpblRvd2VySW5mbyAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/ojrflvpfkv67ngrzloZTmlbDmja5cclxufVxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVJ5qih5Z2X5Yqf6IO9LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgdWlNb2R1bGVOdW0gPSAxO1xyXG5leHBvcnQgZW51bSB1aU1vZHVsZUlkIHtcclxuICAgIE9wZW4gICAgICAgPSBNb2R1bGVFaWQuVWkgKyAodWlNb2R1bGVOdW0rKykgKiBFdmVudFNwYW4uRnVuY1NwYW4sIC8v5omT5byA55WM6Z2iXHJcbiAgICBOb3RpY2UgICAgID0gTW9kdWxlRWlkLlVpICsgKHVpTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+mAmuefpVxyXG59XHJcblxyXG4vL+aJk+W8gOeVjOmdolxyXG5sZXQgdWlPcGVuRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gVWlPcGVuRWlkIHtcclxuICAgIExvYWRpbmdQcm9ncmVzcyAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIExvYWRpbmcgICAgICAgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIENob29zZVNlcnZpY2UgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIE1haW5NZW51ICAgICAgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIEN1bHRpdmF0aW9uSW5mbyAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIEFkb2JlTWFpbiAgICAgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIEFkb2JlUG9vbCAgICAgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIEFkb2JlVXBncmFkICAgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIFB1YmxpY0NvbmZpcm1hdGlvbiAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIEpvaW5TZWN0ICAgICAgICAgICAgPSB1aU1vZHVsZUlkLk9wZW4gKyAodWlPcGVuRWlkTnVtKyspICogRXZlbnRTcGFuLlVJU3BhbixcclxuICAgIFxyXG59XHJcblxyXG4vL1VJ6YCa55+lXHJcbmxldCB1aU5vdGljZUVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIFVpTm90aWNlRWlkIHtcclxuICAgIENsb3NlQ29udHJvbGxlciAgICA9IHVpTW9kdWxlSWQuTm90aWNlICsgdWlOb3RpY2VFaWROdW0rKyxcclxuICAgIE9wZW5GdWxsU2NyZWVuICAgICA9IHVpTW9kdWxlSWQuTm90aWNlICsgdWlOb3RpY2VFaWROdW0rKyxcclxuICAgIENsb3NlRnVsbFNjcmVlbiAgICA9IHVpTW9kdWxlSWQuTm90aWNlICsgdWlOb3RpY2VFaWROdW0rKyxcclxuICAgIE9wZW5Qb3B1cCAgICAgICAgICA9IHVpTW9kdWxlSWQuTm90aWNlICsgdWlOb3RpY2VFaWROdW0rKyxcclxuICAgIENsb3NlUG9wdXAgICAgICAgICA9IHVpTW9kdWxlSWQuTm90aWNlICsgdWlOb3RpY2VFaWROdW0rKyxcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t546p5a625bGe5oCn5qih5Z2X5Yqf6IO9LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgY2hhcmFjdGVyTW9kdWxlTnVtID0gMTtcclxuZW51bSBDaGFyYWN0ZXJNb2R1bGVJZCB7XHJcbiAgICBDdWx0aXZhdGlvbiAgICAgICA9IE1vZHVsZUVpZC5DaGFyYWN0ZXIgKyAoY2hhcmFjdGVyTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+S/ruS4ulxyXG59XHJcblxyXG4vL+S/ruS4ulxyXG5sZXQgY2hhcmFjdGVyQ3VsdGl2YXRpb25FaWROdW0gPSAxO1xyXG5leHBvcnQgZW51bSBDaGFyYWN0ZXJDdWx0aXZhdGlvbkVpZCB7XHJcbiAgICBVcGdyYWRlICAgICAgPSBDaGFyYWN0ZXJNb2R1bGVJZC5DdWx0aXZhdGlvbiArIGNoYXJhY3RlckN1bHRpdmF0aW9uRWlkTnVtKyssICAgIC8v5L+u5Li65Y2H57qnXHJcbiAgICBBdXRvQ2hhbmdlZCAgICAgICAgID0gQ2hhcmFjdGVyTW9kdWxlSWQuQ3VsdGl2YXRpb24gKyBjaGFyYWN0ZXJDdWx0aXZhdGlvbkVpZE51bSsrLCAgICAvL+iHquWKqOS/rueCvOWPmOWMllxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3njqnms5XmqKHlnZflip/og70tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBnYW1lTW9kdWxlTnVtID0gMTtcclxuZW51bSBHYW1lTW9kdWxlSWQge1xyXG4gICAgQWRvYmUgICAgICAgPSBNb2R1bGVFaWQuR2FtZSArIChnYW1lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+a0nuW6nFxyXG4gICAgU2VjdCAgICAgICAgPSBNb2R1bGVFaWQuR2FtZSArIChnYW1lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+mXqOa0vlxyXG4gICAgS29uZ2ZhICAgICAgPSBNb2R1bGVFaWQuR2FtZSArIChnYW1lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+aKgOiDveWKn+azlVxyXG4gICAgUGxheWVyICAgICAgPSBNb2R1bGVFaWQuR2FtZSArIChnYW1lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+inkuiJslxyXG4gICAgUm9hZDJEaWV0eSAgPSBNb2R1bGVFaWQuR2FtZSArIChnYW1lTW9kdWxlTnVtKyspICogRXZlbnRTcGFuLkZ1bmNTcGFuLCAvL+aMkeaImOS7memAlFxyXG59XHJcblxyXG4vL+a0nuW6nOeOqeazlVxyXG5sZXQgZ2FtZUFkb2JlRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gR2FtZUFkb2JlRWlkIHtcclxuICAgIEhpcmVXb3JrZXJTdWNjZXNzICAgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+aLm+WLn+W3peS6uuaIkOWKn1xyXG4gICAgQWRkV29ya2VyU3VjY2VzcyAgICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v5re75Yqg5bel5Lq65oiQ5YqfXHJcbiAgICBSZWR1Y2VXb3JrZXJTdWNjZXNzICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/lh4/lsJHlt6XkurrmiJDlip9cclxuICAgIFVwZ3JhZGVTdG9uZVN1Y2Nlc3MgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+eBteefs+WNh+e6p+aIkOWKn1xyXG4gICAgVXBncmFkZUZvb2RTdWNjZXNzICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v6aOf54mp5Y2H57qn5oiQ5YqfXHJcbiAgICBVcGdyYWRlV29vZFN1Y2Nlc3MgICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/mnKjmnZDljYfnuqfmiJDlip9cclxuICAgIFVwZ3JhZGVJcm9uU3VjY2VzcyAgICA9IEdhbWVNb2R1bGVJZC5BZG9iZSArIGdhbWVBZG9iZUVpZE51bSsrLCAgICAvL+mZqOmTgeWNh+e6p+aIkOWKn1xyXG4gICAgVXBncmFkZVBvb2xTdWNjZXNzICAgID0gR2FtZU1vZHVsZUlkLkFkb2JlICsgZ2FtZUFkb2JlRWlkTnVtKyssICAgIC8v54G15rGg5Y2H57qn5oiQ5YqfXHJcbiAgICBVcGdyYWRlRW5lZ3lTdWNjZXNzICAgPSBHYW1lTW9kdWxlSWQuQWRvYmUgKyBnYW1lQWRvYmVFaWROdW0rKywgICAgLy/po47msLTljYfnuqfmiJDlip9cclxufVxyXG5cclxuLy/pl6jmtL7njqnms5VcclxubGV0IGdhbWVTZWN0RWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gR2FtZVNlY3RFaWQge1xyXG4gICAgSm9pblNlY3RTdWNjZXNzICAgICAgID0gR2FtZU1vZHVsZUlkLlNlY3QgKyBnYW1lU2VjdEVpZE51bSsrLCAgICAvL+WKoOWFpemXqOa0vuaIkOWKn1xyXG4gICAgTGVhcm5LRlN1Y2Nlc3MgICAgICAgID0gR2FtZU1vZHVsZUlkLlNlY3QgKyBnYW1lU2VjdEVpZE51bSsrLCAgLy/lrabkuaDmioDog73miJDlip9cclxuICAgIEFkZEtmTnVtICAgICAgICAgICAgICA9IEdhbWVNb2R1bGVJZC5TZWN0ICsgZ2FtZVNlY3RFaWROdW0rKywgICAgLy/kv67ngrzlip/ms5VcclxuICAgIFN0YXJ0VGFzayAgICAgICAgICAgICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/lvIDlp4vpl6jmtL7ku7vliqFcclxuICAgIEdyYWJUYXNrQXdhcmRTdWNjZXNzICA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/pooblj5bpl6jmtL7ku7vliqHlpZblirHmiJDlip9cclxuICAgIFN0YXJ0Tm9ybWFsVG93ZXJUcmFpbiA9IERhdGFNb2R1bGVJZC5TZWN0ICsgZGF0YVNlY3RFaWROdW0rKywgICAgLy/lvIDlp4vmma7pgJrkv67ngrxcclxuICAgIEVuZE5vcm1hbFRvd2VyVHJhaW4gPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v57uT5p2f5pmu6YCa5L+u54K8XHJcbiAgICBTdGFydEJvc3NUb3dlclRyYWluICAgPSBEYXRhTW9kdWxlSWQuU2VjdCArIGRhdGFTZWN0RWlkTnVtKyssICAgIC8v5byA5aeL5o6M6Zeo5L+u54K8XHJcbiAgICBFbmRCb3NzVG93ZXJUcmFpbiAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+e7k+adn+aOjOmXqOS/rueCvFxyXG4gICAgQWZrU2VjdCAgICAgICAgICAgICAgID0gRGF0YU1vZHVsZUlkLlNlY3QgKyBkYXRhU2VjdEVpZE51bSsrLCAgICAvL+mAgOWHuumXqOa0vlxyXG59XHJcblxyXG4vL+aKgOiDveeOqeazlVxyXG5sZXQgZ2FtZUtvbmdmYUVpZE51bSA9IDE7XHJcbmV4cG9ydCBlbnVtIEdhbWVLb25nZmFFaWQge1xyXG4gICAgVXBncmFkZUtGU3VjY2VzcyAgICAgICA9IEdhbWVNb2R1bGVJZC5Lb25nZmEgKyBnYW1lS29uZ2ZhRWlkTnVtKyssICAgIC8v5Yqg5YWl6Zeo5rS+5oiQ5YqfXHJcbn1cclxuXHJcbi8v6KeS6ImyXHJcbmxldCBnYW1lUGxheWVyRWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gR2FtZVBsYXllckVpZCB7XHJcbiAgICBHZXRCYWdJbmZvICAgICAgICAgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAgIC8v6I635Y+W5Yiw6IOM5YyF5L+h5oGvXHJcbiAgICBCYWdTb3J0U3VjY2VzcyAgICAgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAgIC8v5pW055CG6IOM5YyF5oiQ5YqfXHJcbiAgICBCYWdFeHBhbmRTdWNjZXNzICAgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAgIC8v5omp5bGV6IOM5YyF5oiQ5YqfXHJcbiAgICBCYWdFeHBhbmRGYWlsICAgICAgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAgIC8v5omp5bGV6IOM5YyF5aSx6LSlXHJcbiAgICBTb2xkQmFnSXRlbVN1Y2Nlc3MgICA9IEdhbWVNb2R1bGVJZC5QbGF5ZXIgKyBnYW1lUGxheWVyRWlkTnVtKyssICAvL+WHuuWUruiDjOWMheeJqeWTgeaIkOWKn1xyXG4gICAgVXNlQmFnSXRlbVN1Y2Nlc3MgICAgPSBHYW1lTW9kdWxlSWQuUGxheWVyICsgZ2FtZVBsYXllckVpZE51bSsrLCAgLy/kvb/nlKjog4zljIXnianlk4HmiJDlip9cclxufVxyXG5cclxuLy/mjJHmiJjku5npgJTnjqnms5VcclxubGV0IGdhbWVSb2FkMkRpZXR5RWlkTnVtID0gMTtcclxuZXhwb3J0IGVudW0gR2FtZVJvYWQyRGlldHlhRWlkIHtcclxuICAgIEdvTW9uc3RlclJlc3VsdCAgICAgID0gR2FtZU1vZHVsZUlkLlJvYWQyRGlldHkgKyBnYW1lUm9hZDJEaWV0eUVpZE51bSsrLCAgICAvL+aMkeaImOmVh+WmluWhlOe7k+aenFxyXG4gICAgRmFpbEdvTW9uc3RlciAgICAgICAgPSBHYW1lTW9kdWxlSWQuUm9hZDJEaWV0eSArIGdhbWVSb2FkMkRpZXR5RWlkTnVtKyssICAgIC8v5peg5rOV5oyR5oiY6ZWH5aaW5aGUXHJcbiAgICBJbnZpdGVkRnJpZW5kICAgICAgICA9IEdhbWVNb2R1bGVJZC5Sb2FkMkRpZXR5ICsgZ2FtZVJvYWQyRGlldHlFaWROdW0rKywgICAgLy/pgoDor7fmnIvlj4vmjJHmiJjplYflppbloZRcclxuICAgIEJhdHRsZVJlY29yZEVuZCAgICAgID0gR2FtZU1vZHVsZUlkLlJvYWQyRGlldHkgKyBnYW1lUm9hZDJEaWV0eUVpZE51bSsrLCAgICAvL+aImOaKpeaSreaUvuWujOavlVxyXG4gICAgTW9uc3RlcjFzdEJsb29kICAgICAgPSBHYW1lTW9kdWxlSWQuUm9hZDJEaWV0eSArIGdhbWVSb2FkMkRpZXR5RWlkTnVtKyssICAgIC8v6ZWH5aaW5aGU6aaW5p2AXHJcbn0iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0V2ZW50IHtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeW8gOaUvuWfny0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvL+WIt+aWsOWlveWPi+aVsOaNrlxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFdYX1JFRlJFU0hfRlJJRU5EX0RBVEEgPSAxMTAwMVxyXG4gICAgLy/miZPlvIDmjpLooYxcclxuICAgIHN0YXRpYyByZWFkb25seSBPUEVOX1JBTktfVUkgPSAxMTAwNFxyXG4gICAgLy/mmL7npLrmlYXkuovmjpLooYxcclxuICAgIHN0YXRpYyByZWFkb25seSBDTE9TRV9SQU5LX1VJID0gMTEwMDVcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBMaXN0ZW5lcnM6Q29uZmlnLkRpY3Rpb25hcnk8Q29uZmlnLkxpc3RlbmVyQ2xhc3M+ID0ge307XHJcblxyXG4gICAgc3RhdGljIEFkZExpc3RlbmVyKGtleSwgZnVuYywgdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYoIWtleSB8fCB0eXBlb2YoZnVuYykgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLkxpc3RlbmVyc1trZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTGlzdGVuZXJzW2tleV0gPSBuZXcgQ29uZmlnLkxpc3RlbmVyQ2xhc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuTGlzdGVuZXJzW2tleV0uYWRkTGlzdGVuZXIoZnVuYywgdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgUmVtb3ZlTGlzdGVuZXIoa2V5LCBmdW5jKSB7XHJcbiAgICAgICAgaWYoIWtleSB8fCB0eXBlb2YoZnVuYykgIT0gXCJmdW5jdGlvblwiKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLkxpc3RlbmVyc1trZXldO1xyXG4gICAgICAgIGlmKCFsaXN0KSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGlzdC5yZW1vdmVMaXN0ZW5lcihmdW5jKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgc3RhdGljIERpc3BhdGNoKGtleSwgLi4uZGF0YSkge1xyXG4gICAgICAgIGlmKCFrZXkpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLkxpc3RlbmVyc1trZXldO1xyXG4gICAgICAgIGlmKCFsaXN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSBpbiBsaXN0Lkxpc3RlbmVycykge1xyXG4gICAgICAgICAgICBpZih0eXBlb2YobGlzdC5MaXN0ZW5lcnNbaV0pICE9IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGlzdC5MaXN0ZW5lcnNbaV0uY2FsbChsaXN0LlRhcmdldHNbaV0sIC4uLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ2xlYXIoa2V5KSB7XHJcbiAgICAgICAgaWYoIWtleSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLkxpc3RlbmVyc1trZXldO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG4vL+iuoeeul+WKn+azleaAu+S6uueJqeWxnuaAp1xyXG5leHBvcnQgZnVuY3Rpb24gY2FsY0tmQWRkQXR0cihrZkxldmVsOm51bWJlciwga2ZTdGFnZTpudW1iZXIsIGZzQWRkOm51bWJlcil7XHJcbiAgICByZXR1cm4ga2ZTdGFnZSAqIChrZkxldmVsICsgZnNBZGQpO1xyXG59XHJcblxyXG4vL+iuoeeul+WKn+azleaAu+mjjuawtOWKoOaIkFxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY0tmQWRkRmVuZ3NodWkoa2ZTdGFnZTpudW1iZXIsIGZzQWRkOm51bWJlcil7XHJcbiAgICByZXR1cm4ga2ZTdGFnZSAqIGZzQWRkO1xyXG59IiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Db25maWcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc291cmNlIGV4dGVuZHMgTGF5YS5TY3JpcHR7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFJlc291cmNlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGljIF9hZGRlZFVpUGFja2FnZXM6Q29uZmlnLkRpY3Rpb25hcnk8Ym9vbGVhbj4gPSB7fTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGluc3QoKXtcclxuICAgICAgICBpZighdGhpcy5faW5zdGFuY2Upe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBSZXNvdXJjZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb2FkKHVybCwgdGhpc0FyZz8sIGNvbXBsZXRlPzpGdW5jdGlvbiwgcHJvZ3Jlc3M/OkZ1bmN0aW9uLCByZXNUeXBlPzpzdHJpbmcpe1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIHVybCwgXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpc0FyZywgY29tcGxldGUpLCBcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzQXJnLCBwcm9ncmVzcyksXHJcbiAgICAgICAgICAgIHJlc1R5cGVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRVaVBhY2thZ2UocGtnTmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9hZGRlZFVpUGFja2FnZXNbcGtnTmFtZV0pe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Yqg6L29VUnljIXvvJonLCBwa2dOYW1lKTtcclxuICAgICAgICAgICAgZmd1aS5VSVBhY2thZ2UuYWRkUGFja2FnZSgncmVzLycgKyBwa2dOYW1lICsgJy8nICsgcGtnTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZGVkVWlQYWNrYWdlc1twa2dOYW1lXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSZXMocGF0aDpzdHJpbmcpe1xyXG4gICAgICAgIHJldHVybiBMYXlhLkxvYWRlci5nZXRSZXMocGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbGVhc2VSZXMoKXtcclxuICAgICAgICBMYXlhLlJlc291cmNlLmRlc3Ryb3lVbnVzZWRSZXNvdXJjZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Bd2FrZSgpe1xyXG4gICAgICAgIGlmIChSZXNvdXJjZS5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBSZXNvdXJjZS5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlc291cmNlIGluc3RhbmNlIG11c3QgYmUgb25seSBvbmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCB7VUlDb25maWd9IGZyb20gXCIuLi9Db25maWcvVUlDb25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuXHJcbi8v56eS5pWw6L2s5Li65pe277ya5YiG77ya56eSXHJcbmV4cG9ydCBmdW5jdGlvbiBDb252ZXJ0VGltZShjZCwgaWdub3JlSG91cj86Ym9vbGVhbil7XHJcbiAgICBpZihjZCA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBsZXQgaG91cnMgPSAoXCIwXCIgKyBNYXRoLmZsb29yKGNkIC8gMzYwMCkpLnNsaWNlKC0yKTtcclxuICAgIGxldCBtaW51dGVzID0gKFwiMFwiICsgTWF0aC5mbG9vcigoY2QgJSAzNjAwKSAvIDYwKSkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IHNlY29uZHMgPSAoXCIwXCIgKyBNYXRoLmNlaWwoY2QgJSA2MCkpLnNsaWNlKC0yKTtcclxuXHJcbiAgICBpZihpZ25vcmVIb3VyKXtcclxuICAgICAgICByZXR1cm4gbWludXRlcyArIFwiOlwiICsgc2Vjb25kcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaG91cnMgKyBcIjpcIiArIG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XHJcbn1cclxuXHJcbi8v56qX5Y+j5by55Ye65Yqo55S7XHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtmZ3VpLkdDb21wb25lbnR9IHdpbmRvd1VpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUGxheVBvcHVwRWZmZWN0KHdpbmRvd1VpLCBjYWxsYmFjaywgdGhpc0FyZyl7XHJcbiAgICBpZih3aW5kb3dVaSBpbnN0YW5jZW9mIGZndWkuR09iamVjdCkge1xyXG4gICAgICAgIHdpbmRvd1VpLnNldFBpdm90KDAuNSwgMC41KTtcclxuXHJcbiAgICAgICAgZmd1aS5HVHdlZW4udG8oMCwgMSwgMC41KVxyXG4gICAgICAgICAgICAuc2V0VGFyZ2V0KHdpbmRvd1VpLCB3aW5kb3dVaS5zZXRTY2FsZSlcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoY2FsbGJhY2ssIHRoaXNBcmcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WNgeWFrei/m+WItuminOiJsui9rDEw6L+b5Yi2XHJcbi8v5Lyg5Y+C5qC85byP77yaXCIwMHxmZnxlZVwiXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvbG9yU3RyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQ29sb3JIZXgyRGVjKGNvbG9yU3RyKXtcclxuICAgIGlmKGNvbG9yU3RyID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBjb2xvclN0ciA9IGNvbG9yU3RyLnNwbGl0KFwifFwiKTtcclxuICAgIGlmKGNvbG9yU3RyIGluc3RhbmNlb2YgQXJyYXkgJiYgY29sb3JTdHIubGVuZ3RoID09IDMpe1xyXG4gICAgICAgIGNvbG9yU3RyLmZvckVhY2goKHZhbHVlLCBpbmRleCk9PntcclxuICAgICAgICAgICAgY29sb3JTdHJbaW5kZXhdID0gcGFyc2VJbnQodmFsdWUsIDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29sb3JTdHI7XHJcbn1cclxuXHJcbi8v5Yik5pat5piv5ZCm5Li654i257uE5Lu277yI5YyF5ous5pys5L2T77yJXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FuY2VzdG9yT2YocGFyZW50OmZndWkuR09iamVjdCwgY2hpbGQ6Zmd1aS5HT2JqZWN0KTpCb29sZWFuXHJcbntcclxuICAgIGlmIChwYXJlbnQgPT0gbnVsbCB8fCBjaGlsZCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIFxyXG4gICAgLy/mnKzkvZNcclxuICAgIGlmKHBhcmVudCA9PSBjaGlsZClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIFxyXG4gICAgdmFyIHA6Zmd1aS5HQ29tcG9uZW50ID0gY2hpbGQucGFyZW50O1xyXG4gICAgd2hpbGUocClcclxuICAgIHtcclxuICAgICAgICBpZihwID09IHBhcmVudClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcCA9IHAucGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vL+WIpOaWreWdkOagh+aYr+WQpuWcqOe7hOS7tuefqeW9ouiMg+WbtOWGhVxyXG5leHBvcnQgZnVuY3Rpb24gaXNJblJlY3QoeHY6bnVtYmVyLCB5djpudW1iZXIsIGRlc3Q6Zmd1aS5HT2JqZWN0KXtcclxuICAgIGlmKHh2ID09IG51bGwgfHwgeXYgPT0gbnVsbCB8fCAhZGVzdCkgcmV0dXJuO1xyXG5cclxuICAgIC8v6L2s5Li65bGP5bmV5Z2Q5qCHXHJcbiAgICBsZXQgcHQgPSBkZXN0LmxvY2FsVG9HbG9iYWwoKTtcclxuXHJcbiAgICBpZih4diA8IHB0LnggfHwgeHYgPiBwdC54ICsgZGVzdC53aWR0aCB8fCB5diA8IHB0LnkgfHwgeXYgPiBwdC55ICsgZGVzdC5oZWlnaHQpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ0bkluZm9QYXJ0c3tcclxuICAgIFByb2dyZXNzX0hlYWx0aDpmZ3VpLkdQcm9ncmVzc0JhcixcclxuICAgIFByb2dyZXNzX0V4cDpmZ3VpLkdQcm9ncmVzc0JhcixcclxuICAgIFRleHRfTGV2ZWw6Zmd1aS5HVGV4dEZpZWxkLFxyXG4gICAgVGV4dF9UaXBzSGVhbHRoOmZndWkuR1RleHRGaWVsZCxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ0bkluZm9QYXJ0cyhidG46Zmd1aS5HQ29tcG9uZW50KXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgUHJvZ3Jlc3NfSGVhbHRoOmJ0bi5nZXRDaGlsZCgnUHJvZ3Jlc3NfSGVhbHRoJykuYXNQcm9ncmVzcyxcclxuICAgICAgICBQcm9ncmVzc19FeHA6YnRuLmdldENoaWxkKCdQcm9ncmVzc19FeHAnKS5hc1Byb2dyZXNzLFxyXG4gICAgICAgIFRleHRfTGV2ZWw6YnRuLmdldENoaWxkKCdUZXh0X0xldmVsJykuYXNUZXh0RmllbGQsXHJcbiAgICAgICAgVGV4dF9UaXBzSGVhbHRoOmJ0bi5nZXRDaGlsZCgnVGV4dF9UaXBzSGVhbHRoJykuYXNUZXh0RmllbGQsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6K6+572u5paH5pysQ2FjaGVNb2Rl5Li6Q0hBUumBv+WFjeWGheWtmOaatOa2qEdD5Y2h6aG/XHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtmZ3VpLkdUZXh0RmllbGR9IHRleHRGaWxlZFxyXG4gKiBAcGFyYW0gIHtib29sZWFufSB1c2VTeXNGb250XHJcbiAqL1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gU2V0VHh0Q2FjaGVNb2RlKHRleHRGaWxlZCwgdXNlU3lzRm9udCl7XHJcbi8vICAgICBpZih0ZXh0RmlsZWQgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuLy8gICAgIGlmKHRleHRGaWxlZC5fbGFiZWwuY2FjaGVNb2RlICE9IGNjLkxhYmVsLkNhY2hlTW9kZS5DSEFSKXtcclxuLy8gICAgICAgICB0ZXh0RmlsZWQuX2xhYmVsLmNhY2hlTW9kZSA9IGNjLkxhYmVsLkNhY2hlTW9kZS5DSEFSO1xyXG5cclxuLy8gICAgICAgICBpZih0eXBlb2YgdXNlU3lzRm9udCA9PSBcImJvb2xlYW5cIilcclxuLy8gICAgICAgICAgICAgdGV4dEZpbGVkLl9sYWJlbC51c2VTeXN0ZW1Gb250ID0gdXNlU3lzRm9udDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy/orr7nva7mlofmnKzljaDkvY3nrKZcclxuLy8gU3RyaW5nLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkgcmV0dXJuIHRoaXM7XHJcbi8vICAgICBsZXQgcGFyYW0gPSBhcmd1bWVudHNbMF07XHJcbi8vICAgICBsZXQgcyA9IHRoaXM7XHJcbi8vICAgICBpZih0eXBlb2YocGFyYW0pID09ICdvYmplY3QnKSB7XHJcbi8vICAgICAgICAgZm9yKGxldCBrZXkgaW4gcGFyYW0pXHJcbi8vICAgICAgICAgcyA9IHMucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHtcIiArIGtleSArIFwiXFxcXH1cIiwgXCJnXCIpLCBwYXJhbVtrZXldKTtcclxuLy8gICAgICAgICByZXR1cm4gcztcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuLy8gICAgICAgICBzID0gcy5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiICsgaSArIFwiXFxcXH1cIiwgXCJnXCIpLCBhcmd1bWVudHNbaV0pO1xyXG4vLyAgICAgICAgIHJldHVybiBzO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuLy/orr7nva7mlofmnKzljaDkvY3nrKZcclxuLyoqXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXHJcbiAqIEBwYXJhbSAge0FycmF5fSBhcmdzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gU3RyaW5nRm9ybWF0KHN0ciwgLi4uYXJncyl7XHJcbiAgICBpZih0eXBlb2Yoc3RyKSAhPSAnc3RyaW5nJykgcmV0dXJuO1xyXG5cclxuICAgIGlmKGFyZ3MgPT0gbnVsbCB8fCBhcmdzLmxlbmd0aCA9PSAwKSByZXR1cm4gc3RyO1xyXG5cclxuICAgIGxldCBwYXJhbSA9IGFyZ3NbMF07XHJcbiAgICBsZXQgcyA9IHN0cjtcclxuICAgIGlmKHR5cGVvZihwYXJhbSkgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICBmb3IobGV0IGtleSBpbiBwYXJhbSlcclxuICAgICAgICBzID0gcy5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiICsga2V5ICsgXCJcXFxcfVwiLCBcImdcIiksIHBhcmFtW2tleV0pO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKylcclxuICAgICAgICBzID0gcy5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiICsgaSArIFwiXFxcXH1cIiwgXCJnXCIpLCBhcmdzW2ldKTtcclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxufVxyXG5cclxuLy/orr7nva7mlofmnKzlsZ7mgKdcclxuZXhwb3J0IGZ1bmN0aW9uIFNldFR4dFByb3BlcnR5KHR4dCwgaXNCb2xkLCBpc1VuZGVybGluZSl7XHJcbiAgICBpZih0eHQgaW5zdGFuY2VvZiBmZ3VpLkdUZXh0RmllbGQgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBpZih0eXBlb2YoaXNCb2xkKSA9PSAnYm9vbGVhbicpe1xyXG4gICAgICAgIHR4dC5fbGFiZWwuX2lzQm9sZCA9IGlzQm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBpZih0eXBlb2YoaXNVbmRlcmxpbmUpID09ICdib29sZWFuJyl7XHJcbiAgICAgICAgdHh0Ll9sYWJlbC5faXNVbmRlcmxpbmUgPSBpc1VuZGVybGluZTtcclxuICAgIH1cclxufVxyXG5cclxuLy/lkK/liqjlnoPlnL7lm57mlLZcclxuLy8gZXhwb3J0IGZ1bmN0aW9uIFRyaWdnZXJHQygpe1xyXG4vLyAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbi8vICAgICAgICAgd3gudHJpZ2dlckdDKCk7XHJcbi8vICAgICB9ZWxzZXtcclxuLy8gICAgICAgICBjYy5zeXMuZ2FyYmFnZUNvbGxlY3QoKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy/orr7nva7pnZ7otJ/mlbBcclxuZXhwb3J0IGZ1bmN0aW9uIFNldE5vbm5lZ2F0aXZlKG51bTpudW1iZXIpe1xyXG4gICAgaWYobnVtIDwgMCl7XHJcbiAgICAgICAgbnVtID0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtO1xyXG59XHJcblxyXG4vL+WKn+iDveaYr+WQpuW8gOWQr1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gSXNGdW5jQWN0aXZhdGVkKGZ1bmNFbnVtKXtcclxuLy8gICAgIGlmKGZ1bmNFbnVtID09IG51bGwpIHJldHVybjtcclxuXHJcbi8vICAgICBzd2l0Y2ggKGZ1bmNFbnVtKSB7XHJcbi8vICAgICAgICAgY2FzZSBMb2NhbENvbmZpZy5GdW5jRW51bS5QbGF5R286XHJcbi8vICAgICAgICAgICAgIHJldHVybiBEYXRhQmFzZS5Sb2xlRGF0YS5VbmxvY2tDaGFwdGVySWQgPj0gMztcclxuICAgIFxyXG4vLyAgICAgICAgIGNhc2UgTG9jYWxDb25maWcuRnVuY0VudW0uRnVuOlxyXG4vLyAgICAgICAgICAgICByZXR1cm4gRGF0YUJhc2UuUm9sZURhdGEuVW5sb2NrQ2hhcHRlcklkID49IDQ7XHJcblxyXG4vLyAgICAgICAgIGNhc2UgTG9jYWxDb25maWcuRnVuY0VudW0uU3RvcnlKYWRlOlxyXG4vLyAgICAgICAgICAgICByZXR1cm4gRGF0YUJhc2UuUm9sZURhdGEuVW5sb2NrQ2hhcHRlcklkID4gMSB8fCBEYXRhQmFzZS5Sb2xlRGF0YS5Ecm9wTWF4VGV4dE51bSA+PSA1IHx8IERhdGFCYXNlLlJvbGVEYXRhLkNoYXB0ZXJQbGF5VGltZXMgPiAxO1xyXG5cclxuLy8gICAgICAgICBjYXNlIExvY2FsQ29uZmlnLkZ1bmNFbnVtLlRvcExlZnRMaXN0OlxyXG4vLyAgICAgICAgICAgICByZXR1cm4gRGF0YUJhc2UuUm9sZURhdGEuQ2hhcHRlcklkID4gMSB8fCBEYXRhQmFzZS5Sb2xlRGF0YS5DaGFwdGVyUGxheVRpbWVzID4gMTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy/orr7nva5mZ3Vp5o6n5Yi25Zmo6aG1562+XHJcbmV4cG9ydCBmdW5jdGlvbiBTZXRHQ29udHJvbGxlcklkeChnY3RybDpmZ3VpLkNvbnRyb2xsZXIsIGlkeDpudW1iZXIpe1xyXG4gICAgaWYoZ2N0cmwgaW5zdGFuY2VvZiBmZ3VpLkNvbnRyb2xsZXIgPT0gZmFsc2UgfHwgdHlwZW9mIGlkeCAhPSAnbnVtYmVyJykgcmV0dXJuO1xyXG5cclxuICAgIGlmKGlkeCA8IDAgfHwgaWR4ID49IGdjdHJsLnBhZ2VDb3VudCkgcmV0dXJuO1xyXG5cclxuICAgIGdjdHJsLnNlbGVjdGVkSW5kZXggPSBpZHg7XHJcbn1cclxuXHJcbi8v5Yik5pat57uT5p6E5L2T6ZW/5bqmXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRPYmplY3RMZW5ndGgob2JqZWN0KXtcclxuICAgIGlmKCFvYmplY3QpIHJldHVybiAwO1xyXG5cclxuICAgIGxldCBsZW4gPSAwO1xyXG4gICAgZm9yKGxldCBpIGluIG9iamVjdCl7XHJcbiAgICAgICAgbGVuKys7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxlbjtcclxufVxyXG5cclxuLy/mr5TovoMy5Liq5pWw57uE5piv5ZCm55u4562JXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyMVxyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5RXF1YWxzKGFycjEsIGFycjIpIHtcclxuICAgIC8vIGlmIHRoZSBvdGhlciBhcnJheSBpcyBhIGZhbHN5IHZhbHVlLCByZXR1cm5cclxuICAgIGlmICghYXJyMSB8fCAhYXJyMilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgLy8gY29tcGFyZSBsZW5ndGhzIC0gY2FuIHNhdmUgYSBsb3Qgb2YgdGltZSBcclxuICAgIGlmIChhcnIxLmxlbmd0aCAhPSBhcnIyLmxlbmd0aClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIxLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgbmVzdGVkIGFycmF5c1xyXG4gICAgICAgIGlmIChhcnIxW2ldIGluc3RhbmNlb2YgQXJyYXkgJiYgYXJyMltpXSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIC8vIHJlY3Vyc2UgaW50byB0aGUgbmVzdGVkIGFycmF5c1xyXG4gICAgICAgICAgICBpZiAoQXJyYXlFcXVhbHMoYXJyMSwgYXJyMikgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgICAgIFxyXG4gICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIGVsc2UgaWYgKGFycjFbaV0gIT0gYXJyMltpXSkgeyBcclxuICAgICAgICAgICAgLy8gV2FybmluZyAtIHR3byBkaWZmZXJlbnQgb2JqZWN0IGluc3RhbmNlcyB3aWxsIG5ldmVyIGJlIGVxdWFsOiB7eDoyMH0gIT0ge3g6MjB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgICBcclxuICAgICAgICB9ICAgICAgICAgICBcclxuICAgIH0gICAgICAgXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLy/mkJzlr7vmlbDnu4TplK7lgLxcclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEFycmF5KGFycjpBcnJheTxhbnk+LCBwYXJhbTpzdHJpbmcsIHZhbHVlKXtcclxuICAgIGlmKEFycmF5LmlzQXJyYXkoYXJyKSA9PSBmYWxzZSB8fCBhcnIubGVuZ3RoID09IDApe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgb3IgZW1wdHkgYXJyYXknKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCB0YXJnZXQ7XHJcbiAgICBhcnIuc29tZSh2PT57XHJcbiAgICAgICAgaWYodltwYXJhbV0gPT0gdmFsdWUpe1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB2O1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZFBhdGgoX2RhdGEpe1xyXG4gICAgaWYoIV9kYXRhLlBpY1VybClcclxuICAgICAgICByZXR1cm4ge3BhdGg6XCJcIiwgdXJsOiBcIlwifVxyXG4gICAgXHJcbiAgICBsZXQgcGFrTnVtID0gTWF0aC5jZWlsKF9kYXRhLlBpY1VybC82KTtcclxuICAgIGxldCBwYWtOYW1lID0gXCJQb3N0Y2FyZFwiKyBwYWtOdW07XHJcbiAgICBsZXQgdXJsID0gIFwidWk6Ly9cIitwYWtOYW1lK1wiL1wiK19kYXRhLlRpdGxlO1xyXG4gICAgbGV0IGluZm89e3BhdGg6cGFrTmFtZStcIi9cIitwYWtOYW1lLHVybDp1cmx9XHJcbiAgICByZXR1cm4gaW5mb1xyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQpuWwj+a4uOaIj1xyXG5leHBvcnQgZnVuY3Rpb24gaXNNaW5pR2FtZSgpe1xyXG4gICAgLy8gcmV0dXJuIExheWEuQnJvd3Nlci5vbldlaVhpbiB8fCBMYXlhLkJyb3dzZXIub25CRE1pbmlHYW1lO1xyXG4gICAgcmV0dXJuIExheWEuQnJvd3Nlci5vbk1pbmlHYW1lO1xyXG59XHJcblxyXG4vL+WIpOaWreaYr+WQpuW+ruS/oVxyXG5leHBvcnQgZnVuY3Rpb24gaXNPbldlaXhpbigpe1xyXG4gICAgcmV0dXJuIExheWEuQnJvd3Nlci5vbldlaVhpbjtcclxufVxyXG5cclxuLy/liKTmlq3mmK/lkKZRUVxyXG5leHBvcnQgZnVuY3Rpb24gaXNPblFRKCl7XHJcbiAgICByZXR1cm4gTGF5YS5Ccm93c2VyLm9uTVFRQnJvd3NlcjtcclxufVxyXG5cclxuLy/liKTmlq3mmK/lkKbohb7orq/ns7tcclxuZXhwb3J0IGZ1bmN0aW9uIGlzT25UZW5jZW50KCl7XHJcbiAgICByZXR1cm4gaXNPblFRKCkgfHwgaXNPbldlaXhpbigpO1xyXG59XHJcblxyXG4vL+W5v+WRiumihuWPlue7hOS7tlxyXG4vKipcclxuICogQHBhcmFtICB7Zmd1aS5HQ29tcG9uZW50fSBhZENvbVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEFkR2V0UmV3YXJkQnRuKGFkQ29tKXtcclxuICAgIGlmKCFhZENvbSkgcmV0dXJuO1xyXG5cclxuICAgIC8v6aKG5Y+W5oyJ6ZKuXHJcbiAgICBsZXQgYnV0dG9uX0dldFJld2FyZCA9IGFkQ29tLmdldENoaWxkKFwiQnV0dG9uX0dldFJld2FyZFwiKS5hc0J1dHRvbjtcclxuICAgIGxldCBidXR0b25fRG91YmxlUmV3YXJkID0gYWRDb20uZ2V0Q2hpbGQoXCJCdXR0b25fRG91YmxlUmV3YXJkXCIpLmFzQnV0dG9uO1xyXG4gICAgbGV0IGJ1dHRvbl9BZEdldFJld2FyZCA9IGFkQ29tLmdldENoaWxkKFwiQnV0dG9uX0FkR2V0UmV3YXJkXCIpLmFzQnV0dG9uO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy/pooblj5bnsbvlnotcclxuICAgICAgICBHZXRCdG5UeXBlOiBhZENvbS5nZXRDb250cm9sbGVyKCdCdG5UeXBlX0MnKSxcclxuICAgICAgICAvL+WNleaMiemSrumihuWPllxyXG4gICAgICAgIEJ1dHRvbl9HZXRSZXdhcmQ6IGJ1dHRvbl9HZXRSZXdhcmQsXHJcbiAgICAgICAgLy/nuq/pooblj5ZcclxuICAgICAgICBCdXR0b25fT25lUmV3YXJkOiBhZENvbS5nZXRDaGlsZChcIkJ1dHRvbl9PbmVSZXdhcmRcIikuYXNCdXR0b24sXHJcbiAgICAgICAgLy/lub/lkYrlj4zlgI3pooblj5ZcclxuICAgICAgICBCdXR0b25fRG91YmxlUmV3YXJkOiBidXR0b25fRG91YmxlUmV3YXJkLFxyXG4gICAgICAgIC8v5Y2V5oyJ6ZKu5bm/5ZGK6aKG5Y+WXHJcbiAgICAgICAgQnV0dG9uX0FkR2V0UmV3YXJkOiBidXR0b25fQWRHZXRSZXdhcmQsXHJcbiAgICAgICAgLy/ljZXmjInpkq7pooblj5bmlrnlvI9cclxuICAgICAgICBHZXRSZXdhcmRUeXBlOiBidXR0b25fQWRHZXRSZXdhcmQuZ2V0Q29udHJvbGxlcignVHlwZV9DJyksXHJcbiAgICAgICAgLy/lj4zlgI3pooblj5bmlrnlvI9cclxuICAgICAgICBHZXREb3VibGVSZXdhcmRUeXBlOiBidXR0b25fRG91YmxlUmV3YXJkLmdldENvbnRyb2xsZXIoJ1R5cGVfQycpLFxyXG4gICAgfVxyXG59XHJcblxyXG4vL+acrOWcsOWtmOWCqFxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsU3RvcmFnZShrZXk6c3RyaW5nLCB2YWx1ZTpzdHJpbmcpe1xyXG4gICAgaWYoIXZhbHVlKSByZXR1cm47XHJcbiAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKGtleTpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIExheWEuTG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2NhbEpzb24oa2V5OnN0cmluZywgdmFsdWUpe1xyXG4gICAgLy/lj6/lrZjlgqjmlbDnu4RcclxuICAgIGlmKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTihrZXksIHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsSnNvbihrZXk6c3RyaW5nKXtcclxuICAgIHJldHVybiBMYXlhLkxvY2FsU3RvcmFnZS5nZXRKU09OKGtleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5RGF0YShzcmNEYXRhLCB0YXJnZXREYXRhKXtcclxuICAgIGlmKCFzcmNEYXRhIHx8ICF0YXJnZXREYXRhKSByZXR1cm47XHJcblxyXG4gICAgZm9yKGxldCBpIGluIHNyY0RhdGEpe1xyXG4gICAgICAgIGlmKHR5cGVvZiBzcmNEYXRhW2ldICE9ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICB0YXJnZXREYXRhW2ldID0gc3JjRGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6K6+572u5bm/5ZGK57uE5Lu25qC35byPXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtmZ3VpLkdDb21wb25lbnR9IGFkQ29tXHJcbiAqIEBwYXJhbSAge2Jvb2xlYW59IGlzU2luZ2xlXHJcbiAqL1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gU2V0QWRCdG5TdHlsZShhZENvbSwgaXNTaW5nbGUpe1xyXG4vLyAgICAgaWYoIWFkQ29tKSByZXR1cm47XHJcblxyXG4vLyAgICAgbGV0IGJ0biA9IEFkR2V0UmV3YXJkQnRuKGFkQ29tKTtcclxuLy8gICAgIGxldCBhZFR5cGUgPSBpc1NpbmdsZT8gTWFuYWdlci5HZXRSZWNlaXZlQXdhcmRzVHlwZS5TaW5nbGVBZFR5cGUoKTogTWFuYWdlci5HZXRSZWNlaXZlQXdhcmRzVHlwZS5nZXRUeXBlKCk7XHJcbi8vICAgICBzd2l0Y2ggKGFkVHlwZSkge1xyXG4vLyAgICAgICAgIGNhc2UgQ29uZmlnLkF3YXJkVHlwZS5Ob3Q6XHJcbi8vICAgICAgICAgICAgIGJ0bi5HZXRCdG5UeXBlLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4vLyAgICAgICAgIGNhc2UgQ29uZmlnLkF3YXJkVHlwZS5TaGFyZTpcclxuLy8gICAgICAgICAgICAgYnRuLkdldERvdWJsZVJld2FyZFR5cGUuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbi8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbi8vICAgICAgICAgY2FzZSBDb25maWcuQXdhcmRUeXBlLkFEOlxyXG4vLyAgICAgICAgICAgICBidG4uR2V0RG91YmxlUmV3YXJkVHlwZS5zZWxlY3RlZEluZGV4ID0gMDtcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuLy8gICAgICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgICAgICBhZENvbS5lbmFibGVkID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiBidG47XHJcbi8vIH1cclxuXHJcbi8v6aOY5a2XXHJcbmxldCB0aXBzVWk6Zmd1aS5HQ29tcG9uZW50O1xyXG5leHBvcnQgZnVuY3Rpb24gU2hvd1RpcHMobXNnOnN0cmluZyl7XHJcbiAgICBpZighdGlwc1VpKXtcclxuICAgICAgICBsZXQgdmlld05hbWUgPSBDb25maWcuVmlld0tpdC5UaXBzTGFiZWw7XHJcbiAgICAgICAgdGlwc1VpID0gTWFuYWdlci5TcGF3bk1hbmFnZXIuTG9hZFZpZXcodmlld05hbWUuUGtnLCB2aWV3TmFtZS5Db20pO1xyXG4gICAgICAgIHRpcHNVaS5zb3J0aW5nT3JkZXIgPSBVSUNvbmZpZy5Tb3J0aW5nT3JkZXIuTXNnVGlwcztcclxuICAgIH1cclxuXHJcbiAgICAvL+S4jemHjeWkjeaYvuekulxyXG4gICAgaWYodGlwc1VpLnZpc2libGUpIHJldHVybjtcclxuXHJcbiAgICBtc2cgPSBtc2c/IG1zZzogQ29uZmlnLkxvY2FsQ29udGVudC5GbHlpbmdUaXBzRGVmYXVsdDtcclxuICAgIHRpcHNVaS50ZXh0ID0gbXNnO1xyXG4gICAgdGlwc1VpLnZpc2libGUgPSB0cnVlO1xyXG4gICAgXHJcbiAgICB0aXBzVWkuZ2V0VHJhbnNpdGlvbignRWZmZWN0X1Nob3cnKS5wbGF5KExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCk9Pnt0aXBzVWkudmlzaWJsZSA9IGZhbHNlfSkpO1xyXG59XHJcblxyXG4vL+a0nuW6nOWKoOi1hOa6kOmjmOWtl1xyXG5pbnRlcmZhY2UgQWRvYmVBZGRUaXBzVWl7XHJcbiAgICBVaTpmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICBUZXh0X0FkZFN0b25lOmZndWkuR1RleHRGaWVsZDtcclxuICAgIFRleHRfQWRkRm9vZDpmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICBUZXh0X0FkZFdvb2Q6Zmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgVGV4dF9BZGRJcm9uOmZndWkuR1RleHRGaWVsZDtcclxufVxyXG5sZXQgYWRvYmVBZGRUaXBzVWk6QWRvYmVBZGRUaXBzVWk7XHJcblxyXG5mdW5jdGlvbiBzZXRBZG9iZVJlc051bSh0eHRDb206Zmd1aS5HVGV4dEZpZWxkLCByZXNOdW06bnVtYmVyKXtcclxuICAgIGlmKHJlc051bSA+PSAwKXtcclxuICAgICAgICB0eHRDb20uY29sb3IgPSAnIzAwRkYwMCc7XHJcbiAgICAgICAgdHh0Q29tLnRleHQgPSAnKycgKyByZXNOdW07XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0eHRDb20uY29sb3IgPSAnI0ZGMDAwMCc7XHJcbiAgICAgICAgdHh0Q29tLnRleHQgPSAnLScgKyAtcmVzTnVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+iuvue9ruaWh+Wtl+aKleW9sTHlg4/ntKBcclxubGV0IHR4dFNoYWRvd0ZpbHRlcjpMYXlhLkdsb3dGaWx0ZXI7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUeHRTaGFkb3coZ3R4dDpmZ3VpLkdPYmplY3Qpe1xyXG4gICAgaWYoIWd0eHQpIHJldHVybjtcclxuICAgIGlmKCF0eHRTaGFkb3dGaWx0ZXIpe1xyXG4gICAgICAgIHR4dFNoYWRvd0ZpbHRlciA9IG5ldyBMYXlhLkdsb3dGaWx0ZXIoJyMwMDAwMDAnLCAxLCAxLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBndHh0LmRpc3BsYXlPYmplY3QuZmlsdGVycyA9IFt0eHRTaGFkb3dGaWx0ZXJdO1xyXG59XHJcblxyXG4vL+iuvue9rlVJ6IqC54K55LiO6YCC6YWNXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBzZXRVaU5vZGUoKXtcclxuLy8gICAgIGlmKCFmZ3VpLkdSb290Lmluc3QpIHJldHVybjtcclxuICAgIFxyXG4vLyAgICAgbGV0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbi8vICAgICBmZ3VpLkdSb290Lmluc3Qubm9kZS5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4vLyAgICAgZmd1aS5HUm9vdC5pbnN0Lm5vZGUueCA9IC1jYW52YXMud2lkdGggKiAwLjU7XHJcbi8vICAgICBmZ3VpLkdSb290Lmluc3Qubm9kZS55ID0gY2FudmFzLmhlaWdodCAqIDAuNTtcclxuLy8gfVxyXG5cclxuLy/osIPnlKhqYXZhXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNsYXNzUGF0aCDlrozmlbTnmoTnsbvot6/lvoRcclxuICogQHBhcmFtICB7c3RyaW5nfSBqYXZhRnVuYyBqYXZh6Z2Z5oCB5pa55rOV5ZCNXHJcbiAqIEBwYXJhbSAge30gZGF0YVxyXG4gKiBAcGFyYW0gIHtib29sZWFufSB3aWR0aEJhY2sg5piv5ZCm5pyJamF2YeWQjOatpeWbnuiwg1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEpzQ2FsbEphdmEoY2xhc3NQYXRoOnN0cmluZywgamF2YUZ1bmM6c3RyaW5nLCBkYXRhPywgd2lkdGhCYWNrPzpib29sZWFuKXtcclxuICAgIGlmKCFMYXlhLkJyb3dzZXIub25BbmRyb2lkKSByZXR1cm47XHJcblxyXG4gICAgLy/pnIDopoHlrozmlbTnmoTnsbvot6/lvoTvvIzms6jmhI/kuI5pT1PnmoTkuI3lkIxcclxuICAgIGxldCBicmlkZ2UgPSB3aW5kb3dbXCJQbGF0Zm9ybUNsYXNzXCJdLmNyZWF0ZUNsYXNzKGNsYXNzUGF0aCk7Ly/liJvlu7rohJrmnKzku6PnkIZcclxuICAgIGlmKHdpZHRoQmFjayl7XHJcbiAgICAgICAgbGV0IG9iaiA9IHt2YWx1ZTogZGF0YX07XHJcbiAgICAgICAgYnJpZGdlLmNhbGxXaXRoQmFjayhmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gSlNPTi5wYXJzZSh2YWx1ZSlcclxuICAgICAgICAgICAgYWxlcnQob2JqLnZhbHVlKTtcclxuICAgICAgICB9LCBqYXZhRnVuYywgSlNPTi5zdHJpbmdpZnkob2JqKSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBsZXQgcmVzcCA9IGJyaWRnZS5jYWxsKGphdmFGdW5jLCBkYXRhKTtcclxuICAgICAgICBhbGVydChyZXNwKTtcclxuICAgIH1cclxufVxyXG5cclxuLy/orqHnrpflrZfnrKblrZfoioLmlbAtLeato+WImeazlVxyXG5mdW5jdGlvbiBnZXRCeXRlc0xlbmd0aChzdHIpIHtcclxuICAgIGlmKCFzdHIgfHwgdHlwZW9mIHN0ciAhPSAnc3RyaW5nJyl7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICAvLyDlnKhHQkvnvJbnoIHph4zvvIzpmaTkuoZBU0NJSeWtl+espu+8jOWFtuWug+mDveWNoOS4pOS4quWtl+espuWuvVxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXlxceDAwLVxceGZmXS9nLCAneHgnKS5sZW5ndGg7XHJcbn1cclxuXHJcbi8v6K6h566X5a2X56ym5a2X6IqC5pWwLS3pgY3ljobms5UtLeaViOeOh+i+g+mrmFxyXG5leHBvcnQgZnVuY3Rpb24gc3RyQnl0ZUxlbihzdHI6c3RyaW5nKXsgXHJcbiAgICBsZXQgYnl0ZUxlbiA9IDAsIGxlbjpudW1iZXI7IFxyXG4gICAgaWYoc3RyICYmIHR5cGVvZiBzdHIgPT0gJ3N0cmluZycpe1xyXG4gICAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcclxuICAgICAgICAgICAgaWYoc3RyLmNoYXJDb2RlQXQoaSkgPiAyNTUpeyBcclxuICAgICAgICAgICAgICAgIGJ5dGVMZW4gKz0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNleyBcclxuICAgICAgICAgICAgICAgIGJ5dGVMZW4rKzsgXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ5dGVMZW47XHJcbn1cclxuXHJcbi8v5rex5ou36LSdXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weShzcmM6b2JqZWN0LCB0YXJnZXQ6b2JqZWN0KXtcclxuICAgIGlmKCFzcmMgfHwgIXRhcmdldCkgcmV0dXJuO1xyXG5cclxuICAgIGlmKHNyYyAhPSBudWxsKXtcclxuICAgICAgICBmb3IobGV0IGkgaW4gc3JjKXtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gc3JjW2ldO1xyXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBbXTtcclxuICAgICAgICAgICAgICAgIFsuLi50YXJnZXRbaV1dID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSB7fTtcclxuICAgICAgICAgICAgICAgIGRlZXBDb3B5KHZhbHVlLCB0YXJnZXRbaV0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL+Whq+WFheeJqeWTgeaMiemSrlxyXG5leHBvcnQgY2xhc3MgSXRlbUJ0blBhcnRzQ2xhc3Mge1xyXG4gICAgVGV4dF9UaXRsZTpmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICBUZXh0X0F3YXJkTnVtOmZndWkuR1RleHRGaWVsZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihidG46Zmd1aS5HQ29tcG9uZW50KXtcclxuICAgICAgICB0aGlzLlRleHRfVGl0bGUgPSBidG4uZ2V0Q2hpbGQoJ3RpdGxlJykuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgdGhpcy5UZXh0X0F3YXJkTnVtID0gYnRuLmdldENoaWxkKCdUZXh0X0F3YXJkTnVtJykuYXNUZXh0RmllbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsSXRlbURhdGEoaXRlbWRhdGEsIGJ0bjpmZ3VpLkdDb21wb25lbnQpe1xyXG4gICAgaWYoIWl0ZW1kYXRhIHx8ICFidG4pIHJldHVybjtcclxuXHJcbiAgICBsZXQgcGFydHMgPSBuZXcgSXRlbUJ0blBhcnRzQ2xhc3MoYnRuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxJdGVtTGlzdERhdGEoaXRlbWRhdGFBcnI6YW55W10sIGxpc3Q6Zmd1aS5HTGlzdCl7XHJcbiAgICBpZighaXRlbWRhdGFBcnIgfHwgIWxpc3QpIHJldHVybjtcclxuXHJcbiAgICBpdGVtZGF0YUFyci5mb3JFYWNoKHY9PntcclxuICAgICAgICBmaWxsSXRlbURhdGEodiwgbGlzdC5hZGRJdGVtRnJvbVBvb2woKS5hc0NvbSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/liJfooajngrnlh7vlm57osINcclxuZnVuY3Rpb24gb25DbGlja0xpc3RJdGVtKHRoaXNBcmcsIGZ1bmM6RnVuY3Rpb24sIGRhdGEsIGl0ZW06Zmd1aS5HQ29tcG9uZW50KXtcclxuICAgIGxldCBpZHggPSBpdGVtLnBhcmVudC5hc0xpc3QuZ2V0Q2hpbGRJbmRleChpdGVtKTtcclxuICAgIGZ1bmMuY2FsbCh0aGlzQXJnLCBpZHggKyAxLCAuLi5kYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrTGlzdENhbGxiYWNrKGxpc3Q6Zmd1aS5HTGlzdCwgdGhpc0FyZywgZnVuYzpGdW5jdGlvbiwgLi4uZGF0YSl7XHJcbiAgICBpZighbGlzdCB8fCAhZnVuYykgcmV0dXJuO1xyXG5cclxuICAgIGxpc3Qub24oZmd1aS5FdmVudHMuQ0xJQ0tfSVRFTSwgdGhpc0FyZywgb25DbGlja0xpc3RJdGVtLCBbdGhpc0FyZywgZnVuYywgZGF0YV0pO1xyXG59IiwiaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgR0V2ZW50IGZyb20gXCIuL0dFdmVudFwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcblxyXG4vL+W+ruS/oeaTjeS9nFxyXG5sZXQgcGxhdGZvcm0gPSB3aW5kb3dbJ3d4J107XHJcbi8v55m75b2V5b6u5L+h5Y+3XHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbihpc1VuaW9uSWQ6Ym9vbGVhbikge1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0ubG9naW4oe1xyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNVbmlvbklkKXtcclxuICAgICAgICAgICAgICAgICAgICBnZXRTZXR0aW5nKHJlcy5jb2RlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWPkei1t+e9kee7nOivt+axglxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXEgPSBDb25maWcuUmVxRGF0YS5Mb2dpbjtcclxuICAgICAgICAgICAgICAgICAgICByZXEuTmFtZSA9IHJlcy5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGEuTG9naW5EYXRhLlNlbmRSZXEocmVxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXlpLHotKXvvIEnICsgcmVzLmVyck1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vL+WKoOi9veWIhuWMhVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFsbFN1YnBhY2thZ2VzKHRoaXNBcmcsIGNhbGxiYWNrOkZ1bmN0aW9uKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSB8fCBDb25maWcuVUlDb25maWcuU3ViUGtncy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGlmKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuXHJcbiAgICBDb25maWcuVUlDb25maWcuU3ViUGtncy5mb3JFYWNoKHBrZz0+e1xyXG4gICAgICAgIGNvbnN0IGxvYWRUYXNrID0gcGxhdGZvcm0ubG9hZFN1YnBhY2thZ2Uoe1xyXG4gICAgICAgICAgICBuYW1lOiBwa2csIC8vIG5hbWUg5Y+v5Lul5aGrIG5hbWUg5oiW6ICFIHJvb3RcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3miJDlip/lkI7pgJrov4cgc3VjY2VzcyDlm57osINcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliIbljIXliqDovb3lpLHotKXpgJrov4cgZmFpbCDlm57osINcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v6K6+572u5YiG5LqrdGlja2V0XHJcbmV4cG9ydCBmdW5jdGlvbiBzaGFyZVRpY2tldE1vZGUoKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLnVwZGF0ZVNoYXJlTWVudSh7XHJcbiAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v6I635Y+W5YiG5LqrdGlja2V0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaGFyZVRpY2tldCgpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGxhdW5jaEluZm8gPSBwbGF0Zm9ybS5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgY29uc29sZS5sb2coJz4+Pj4+Pj4+Pj4+Pj7lvq7kv6HnmbvlvZXkv6Hmga/vvJonLCBsYXVuY2hJbmZvKTtcclxuICAgIGlmKGxhdW5jaEluZm8gJiYgbGF1bmNoSW5mby5zaGFyZVRpY2tldCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+Pj4+Pj4+Pj4+c2hhcmVUaWNrZXTvvJonLCBsYXVuY2hJbmZvLnNoYXJlVGlja2V0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxhdW5jaEluZm8uc2hhcmVUaWNrZXQ7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLy/op6PmnpDliIbkuqt0aWNrZXRcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNoYXJlSW5mbygpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHRpY2tldCA9IGdldFNoYXJlVGlja2V0KCk7XHJcbiAgICAvLyBpZighdGlja2V0KSByZXR1cm47XHJcblxyXG4gICAgbGV0IGxhdW5jaEluZm8gPSBwbGF0Zm9ybS5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgaWYobGF1bmNoSW5mbyAmJiBsYXVuY2hJbmZvLnF1ZXJ5KXtcclxuICAgICAgICAvLyBEYXRhQmFzZS5TZW5kU2hhcmVJbmZvLlNlbmRSZXEobGF1bmNoSW5mby5xdWVyeS5zaGFyZUlEKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsZXQgc2hhcmVJbmZvID0ge1xyXG4gICAgLy8gICAgIEVuY3J5cHRlZERhdGE6ICcnLFxyXG4gICAgLy8gICAgIEl2OiAnJ1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHBsYXRmb3JtLmxvZ2luKHtcclxuICAgIC8vICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgLy8gICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBjb2RlID0gcmVzLmNvZGU7XHJcbiAgICAvLyAgICAgICAgICAgICBwbGF0Zm9ybS5nZXRTaGFyZUluZm8oe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNoYXJlVGlja2V0OiB0aWNrZXQsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ino+aekOWIhuS6q+S/oeaBr++8micsIHJlcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZihyZXMuZW5jcnlwdGVkRGF0YSl7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZUluZm8uRW5jcnlwdGVkRGF0YSA9IHJlcy5lbmNyeXB0ZWREYXRhO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVJbmZvLkl2ID0gcmVzLml2O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgRGF0YUJhc2UuU2VuZFNoYXJlSW5mby5TZW5kUmVxKGNvZGUsIHJlcy5lbmNyeXB0ZWREYXRhLCByZXMuaXYpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gcmV0dXJuIHNoYXJlSW5mbztcclxufVxyXG5cclxuLy/mmL7npLrlj7PkuIrop5Lovazlj5FcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTaGFyZU1lbnUoKSB7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5zaG93U2hhcmVNZW51KHtcclxuICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHBsYXRmb3JtLm9uU2hhcmVBcHBNZXNzYWdlKCgpID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IERhdGEuR2V0U2hhcmVXb3JkKCksXHJcbiAgICAgICAgaW1hZ2VVcmw6IENvbmZpZy5VSUNvbmZpZy5TaGFyZUltYWdlUGF0aC5JbnZpdGVGcmllbmQsXHJcbiAgICAgICAgcXVlcnk6ICdzaGFyZUlEPScgKyBEYXRhLkxvZ2luRGF0YS5BY2NvdW50S2V5LFxyXG4gICAgfSkpO1xyXG59XHJcblxyXG4vL+WIhuS6q1xyXG5leHBvcnQgZnVuY3Rpb24gU2hhcmVNZXNzYWdlKG1zZzpzdHJpbmcsIGltZ1BhdGg/OnN0cmluZywgdXNlU2NyZWVuU2hvdD86Ym9vbGVhbikge1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHN5c0luZm8gPSBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuICAgIC8v5L2/55So5bGP5bmV5oiq5Zu+XHJcbiAgICBpZih1c2VTY3JlZW5TaG90ID09IHRydWUpe1xyXG4gICAgICAgIGltZ1BhdGggPSB3aW5kb3dbXCJjYW52YXNcIl0udG9UZW1wRmlsZVBhdGhTeW5jKHtcclxuICAgICAgICAgICAgZGVzdFdpZHRoOiBzeXNJbmZvLndpbmRvd1dpZHRoICogc3lzSW5mby5waXhlbFJhdGlvLFxyXG4gICAgICAgICAgICBkZXN0SGVpZ2h0OiBzeXNJbmZvLndpbmRvd0hlaWdodCAqIHN5c0luZm8ucGl4ZWxSYXRpb1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXRmb3JtLnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgdGl0bGU6IG1zZyxcclxuICAgICAgICBpbWFnZVVybDogaW1nUGF0aCxcclxuICAgICAgICBxdWVyeTogJ3NoYXJlSUQ9JyArIERhdGEuTG9naW5EYXRhLkFjY291bnRLZXlcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb25TaG93KGNhbGxiYWNrOkZ1bmN0aW9uKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLm9uU2hvdyhjYWxsYmFjayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvZmZTaG93KGNhbGxiYWNrOkZ1bmN0aW9uKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIHBsYXRmb3JtLm9mZlNob3coY2FsbGJhY2spO1xyXG59XHJcblxyXG4vL+a4heeQhue8k+WtmFxyXG5leHBvcnQgZnVuY3Rpb24gQ2xlYXJMb2NhbENhY2hlKCkge1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgd2luZG93W1wiY2FudmFzXCJdLmdldFNhdmVkRmlsZUxpc3Qoe1xyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5maWxlTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmZpbGVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlcy5maWxlTGlzdC5mb3JFYWNoKChmaWxlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtLnJlbW92ZVNhdmVkRmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiBmaWxlLmZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZShyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2FudmFzVG9UZW1wRmlsZVBhdGgoY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgLy8gbGV0IHdpZHRoICA9IGZndWkuR1Jvb3QuaW5zdC53aWR0aDtcclxuICAgIC8vIGxldCBoZWlnaHQgID0gZmd1aS5HUm9vdC5pbnN0LmhlaWdodDtcclxuICAgIGxldCBzeXNJbmZvID0gcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgIGNvbnNvbGUubG9nKHN5c0luZm8pO1xyXG5cclxuICAgIGxldCBkZXN0U2l6ZSA9IG5ldyBMYXlhLlBvaW50KHN5c0luZm8ud2luZG93V2lkdGggKiBzeXNJbmZvLnBpeGVsUmF0aW8sIHN5c0luZm8ud2luZG93SGVpZ2h0ICogc3lzSW5mby5waXhlbFJhdGlvKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkZXN0U2l6ZSk7XHJcblxyXG4gICAgd2luZG93W1wiY2FudmFzXCJdLnRvVGVtcEZpbGVQYXRoKHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IGRlc3RTaXplLngsXHJcbiAgICAgICAgaGVpZ2h0OiBkZXN0U2l6ZS55LFxyXG4gICAgICAgIGRlc3RXaWR0aDogZGVzdFNpemUueCxcclxuICAgICAgICBkZXN0SGVpZ2h0OiBkZXN0U2l6ZS55LFxyXG4gICAgICAgIGNhbnZhc0lkOiAnbXlDYW52YXMnLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZW1wRmlsZVBhdGgpO1xyXG4gICAgICAgICAgICBwbGF0Zm9ybS5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtcclxuICAgICAgICAgICAgICAgIGZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS/neWtmOWbvueJh+aIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6J+S/neWtmOaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjonc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246MjAwMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflpLHotKUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5lcnJNc2cpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybS5vcGVuU2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHNldHRpbmdkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2V0dGluZ2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nZGF0YS5hdXRoU2V0dGluZ1tcInNjb3BlLndyaXRlUGhvdG9zQWxidW1cIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluadg+mZkOaIkOWKn++8jOe7meWHuuWGjeasoeeCueWHu+WbvueJh+S/neWtmOWIsOebuOWGjOeahOaPkOekuuOAgicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluadg+mZkOWksei0pe+8jOe7meWHuuS4jee7meadg+mZkOWwseaXoOazleato+W4uOS9v+eUqOeahOaPkOekuicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyTmlja05hbWUoY2FsbGJhY2s6RnVuY3Rpb24pe1xyXG4gICAgaWYoIXBsYXRmb3JtKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0uZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgICAgIHBsYXRmb3JtLmF1dGhvcml6ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICdzY29wZS51c2VySW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g55So5oi35bey57uP5ZCM5oSP5bCP56iL5bqP5L2/55So5b2V6Z+z5Yqf6IO977yM5ZCO57ut6LCD55SoIHd4LnN0YXJ0UmVjb3JkIOaOpeWPo+S4jeS8muW8ueeql+ivoumXrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybS5zdGFydFJlY29yZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwbGF0Zm9ybS5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXMudXNlckluZm87XHJcbiAgICAgICAgICAgIGNvbnN0IG5pY2tOYW1lID0gdXNlckluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGF2YXRhclVybCA9IHVzZXJJbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgY29uc3QgZ2VuZGVyID0gdXNlckluZm8uZ2VuZGVyOyAvLyDmgKfliKsgMO+8muacquefpeOAgTHvvJrnlLfjgIEy77ya5aWzXHJcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlID0gdXNlckluZm8ucHJvdmluY2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGNpdHkgPSB1c2VySW5mby5jaXR5O1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudHJ5ID0gdXNlckluZm8uY291bnRyeTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy/lvq7kv6Hmj5DnpLrlvLnnqpdcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUaXBzV2luZG93KHRpcFRpdGxlOnN0cmluZywgdGlwQ29udGVudDpzdHJpbmcsIHRpcHNDb25maXJtVHh0OnN0cmluZywgY29uZmlybUNhbGxiYWs6RnVuY3Rpb24sIGNhbmNlbENhbGxiYWNrPzpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiB0aXBUaXRsZSB8fCAn5o+Q56S6JyxcclxuICAgICAgICBjb250ZW50OiB0aXBDb250ZW50LFxyXG4gICAgICAgIGNvbmZpcm1UZXh0OiB0aXBzQ29uZmlybVR4dCB8fCAn56Gu5a6aJyxcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjb25maXJtQ2FsbGJhaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNhbGxiYWsoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJyk7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2FuY2VsQ2FsbGJhY2spID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5r+A5Yqx5bm/5ZGKXHJcbmxldCByZXdhcmRlZFZpZGVvQWQ7XHJcbmxldCByZXdhcmRBZElkeCA9IDA7XHJcblxyXG4vKipcclxuICogQHBhcmFtICB7ZnVuY3Rpb259IG9uQ2xvc2VDYWxsYmFja1xyXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25FcnJvckNhbGxiYWNrXHJcbiAqIEBwYXJhbSAge30gdGhpc1RhcmdldFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJld2FyZGVkVmlkZW9BZChvbkNsb3NlQ2FsbGJhY2s/OkZ1bmN0aW9uLCBvbkVycm9yQ2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzVGFyZ2V0Pyl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICAvL+WfuuehgOW6k+eJiOacrOWPtyA+PSAyLjAuNFxyXG4gICAgbGV0IHNka1ZlcnNpb24gPSBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpLlNES1ZlcnNpb247XHJcbiAgICBpZighc2RrVmVyc2lvbiB8fCBwYXJzZUludChzZGtWZXJzaW9uLnJlcGxhY2UoL1xcLi9nLCAnJykpIDwgMjA0KSByZXR1cm47XHJcblxyXG4gICAgbGV0IGFkSW5mbyA9IHthZFVuaXRJZDpcIlwifTtcclxuICAgIC8v6L2u5o2i5bm/5ZGKXHJcbiAgICBpZihyZXdhcmRBZElkeCA+PSBMb2NhbENvbmZpZy5SZXdhcmRBZExpc3QubGVuZ3RoKVxyXG4gICAgICAgIHJld2FyZEFkSWR4ID0gMDtcclxuXHJcbiAgICBjb25zb2xlLmxvZygn5r+A5Yqx5bm/5ZGK77yaJyxMb2NhbENvbmZpZy5SZXdhcmRBZExpc3RbcmV3YXJkQWRJZHhdKTtcclxuICAgIGFkSW5mby5hZFVuaXRJZCA9IExvY2FsQ29uZmlnLlJld2FyZEFkTGlzdFtyZXdhcmRBZElkeF07XHJcblxyXG4gICAgaWYocmV3YXJkZWRWaWRlb0FkID09IG51bGwpe1xyXG4gICAgICAgIHJld2FyZGVkVmlkZW9BZCA9IHBsYXRmb3JtLmNyZWF0ZVJld2FyZGVkVmlkZW9BZChhZEluZm8pO1xyXG4gICAgfVxyXG4gICAgaWYocmV3YXJkZWRWaWRlb0FkID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICByZXdhcmRlZFZpZGVvQWQubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJld2FyZGVkVmlkZW9BZC5zaG93KCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WIm+W7uua/gOWKseW5v+WRiuWksei0pe+8micsIGVycik7XHJcbiAgICAgICAgICAgIC8vIHJld2FyZGVkVmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiByZXdhcmRlZFZpZGVvQWQuc2hvdygpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAvL+S6jOasoeWksei0peWbnuiwg1xyXG4gICAgICAgICAgICAvLyAgICAgb25FcnJvckNhbGxiYWNrLmNhbGwodGhpc1RhcmdldCk7XHJcbiAgICAgICAgICAgIC8vIH0pKTtcclxuXHJcbiAgICAgICAgICAgIG9uRXJyb3JDYWxsYmFjay5jYWxsKHRoaXNUYXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV3YXJkQWRJZHgrKztcclxuXHJcbiAgICByZXdhcmRlZFZpZGVvQWQub25FcnJvcihvblJld2FyZEFkRXJyb3IpO1xyXG5cclxuICAgIC8vIGlmKHR5cGVvZihvbkxvYWRDYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAvLyAgICAgLy8gcmV3YXJkZWRWaWRlb0FkLm9uTG9hZCgoKT0+e1xyXG4gICAgLy8gICAgIC8vICAgICBvbkxvYWRDYWxsYmFjay5jYWxsKHRoaXNUYXJnZXQsIHRydWUpO1xyXG4gICAgLy8gICAgIC8vICAgICAvLyByZXdhcmRlZFZpZGVvQWQuc2hvdygpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAvLyAgICAgLy8gICAgIC8vICAgICByZXdhcmRlZFZpZGVvQWQubG9hZCgpXHJcbiAgICAvLyAgICAgLy8gICAgIC8vICAgICAgIC50aGVuKCgpID0+IHJld2FyZGVkVmlkZW9BZC5zaG93KCkpO1xyXG4gICAgLy8gICAgIC8vICAgICAvLyB9KTtcclxuICAgIC8vICAgICAvLyB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvL+WFs+mXreWbnuiwg+WPguaVsCByZXMuaXNFbmRlZDpib29sZWFuIOinhumikeaYr+WQpuaYr+WcqOeUqOaIt+WujOaVtOingueci+eahOaDheWGteS4i+iiq+WFs+mXreeahFxyXG4gICAgbGV0IGNsb3NlRnVuYyA9IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+aYr+WQpueci+WujOW5v+WRiu+8micscmVzKTtcclxuXHJcbiAgICAgICAgaWYocmVzLmlzRW5kZWQgJiYgdHlwZW9mKG9uQ2xvc2VDYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIG9uQ2xvc2VDYWxsYmFjay5jYWxsKHRoaXNUYXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV3YXJkZWRWaWRlb0FkLm9mZkNsb3NlKGNsb3NlRnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV3YXJkZWRWaWRlb0FkLm9uQ2xvc2UoY2xvc2VGdW5jKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25SZXdhcmRBZEVycm9yKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgcmV3YXJkZWRWaWRlb0FkLm9mZkVycm9yKG9uUmV3YXJkQWRFcnJvcik7XHJcbn1cclxuXHJcbi8vQmFubmVy5bm/5ZGKXHJcbmxldCBiYW5uZXJBZDtcclxubGV0IGJhbm5lcklkeCA9IDA7XHJcblxyXG5leHBvcnQgdHlwZSBiYW5uZXJBZEluZm8gPSB7XHJcbiAgICBhZFVuaXRJZD86c3RyaW5nLFxyXG4gICAgc3R5bGU/OntcclxuICAgICAgICBsZWZ0Om51bWJlciwgXHJcbiAgICAgICAgdG9wOm51bWJlciwgXHJcbiAgICAgICAgd2lkdGg/Om51bWJlciwgXHJcbiAgICAgICAgaGVpZ2h0PzpudW1iZXJcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAge3thZFVuaXRJZDpzdHJpbmcsIHN0eWxlOntsZWZ0Om51bWJlciwgdG9wOm51bWJlciwgd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyfX19IGFkSW5mb1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJhbm5lckFkKGFkSW5mbz86YmFubmVyQWRJbmZvKXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGxlZnQ6IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGggKiAwLjUgLSAxMDAsXHJcbiAgICAvLyAgICAgICAgIHRvcDogcGxhdGZvcm0uZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQgKiAwLjUgKyAxMDAsXHJcbiAgICBsZXQgc3lzSW5mbyA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG4gICAgLy/ln7rnoYDlupPniYjmnKzlj7cgPj0gMi4wLjRcclxuICAgIGxldCBzZGtWZXJzaW9uID0gc3lzSW5mby5TREtWZXJzaW9uO1xyXG4gICAgaWYoIXNka1ZlcnNpb24gfHwgcGFyc2VJbnQoc2RrVmVyc2lvbi5yZXBsYWNlKC9cXC4vZywgJycpKSA8IDIwNCkgcmV0dXJuO1xyXG5cclxuICAgIGlmKCFhZEluZm8pXHJcbiAgICAgICAgYWRJbmZvID0ge307XHJcbiAgICAvL+i9ruaNouW5v+WRilxyXG4gICAgaWYoYmFubmVySWR4ID49IExvY2FsQ29uZmlnLkJhbm5lckFkTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgYmFubmVySWR4ID0gMDtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ0Jhbm5lcuW5v+WRiu+8micsTG9jYWxDb25maWcuQmFubmVyQWRMaXN0W2Jhbm5lcklkeF0pO1xyXG4gICAgYWRJbmZvLmFkVW5pdElkID0gTG9jYWxDb25maWcuQmFubmVyQWRMaXN0W2Jhbm5lcklkeF07XHJcblxyXG4gICAgLy/kvY3nva5cclxuICAgIGFkSW5mby5zdHlsZSA9IHtcclxuICAgICAgICBsZWZ0OjAsIFxyXG4gICAgICAgIHRvcDpzeXNJbmZvLndpbmRvd0hlaWdodCAtIDEwMCxcclxuICAgICAgICB3aWR0aDpzeXNJbmZvLndpbmRvd1dpZHRoLCBcclxuICAgICAgICAvLyBoZWlnaHQ6MTAwXHJcbiAgICB9XHJcblxyXG4gICAgaWYoYmFubmVyQWQgPT0gbnVsbCl7XHJcbiAgICAgICAgYmFubmVyQWQgPSBwbGF0Zm9ybS5jcmVhdGVCYW5uZXJBZChhZEluZm8pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYmFubmVyQWQuZGVzdHJveSgpO1xyXG4gICAgICAgIGJhbm5lckFkID0gcGxhdGZvcm0uY3JlYXRlQmFubmVyQWQoYWRJbmZvKTtcclxuICAgIH1cclxuICAgIGlmKGJhbm5lckFkID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAvL2Jhbm5lcuS9jee9rumAgumFjVxyXG4gICAgYmFubmVyQWQub25SZXNpemUocmVzID0+IHtcclxuICAgICAgICBiYW5uZXJBZC5zdHlsZS50b3AgPSBzeXNJbmZvLndpbmRvd0hlaWdodCAtIHJlcy5oZWlnaHQ7XHJcbiAgICAgICAgaWYoc3lzSW5mby5tb2RlbCA9PSAnaVBob25lIFgnKXtcclxuICAgICAgICAgICAgYmFubmVyQWQuc3R5bGUudG9wLT0yMDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBiYW5uZXJBZC5vbkVycm9yKG9uQmFubmVyQWRFcnJvcik7XHJcblxyXG4gICAgYmFubmVyQWQuc2hvdygpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WIm+W7ukJhbm5lcuW5v+WRiuWksei0pe+8micsIGVycik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBiYW5uZXJJZHgrKztcclxufVxyXG5cclxuZnVuY3Rpb24gb25CYW5uZXJBZEVycm9yKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgYmFubmVyQWQub2ZmRXJyb3Iob25CYW5uZXJBZEVycm9yKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVCYW5uZXJBZCgpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcbiAgICBpZihiYW5uZXJBZCA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgYmFubmVyQWQuaGlkZSgpO1xyXG59XHJcblxyXG4vL+S4i+i9vei/nOeoi+aWh+S7tlxyXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKHVybCwgY2FsbGJhY2spe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlIHx8ICF1cmwpIHJldHVybjtcclxuXHJcbiAgICBjb25zb2xlLmxvZygn5LiL6L295Zyw5Z2A77yaJyx1cmwpO1xyXG5cclxuICAgIHBsYXRmb3JtLmRvd25sb2FkRmlsZSh7XHJcbiAgICAgICAgdXJsOiB1cmwsIFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIC8vIOWPquimgeacjeWKoeWZqOacieWTjeW6lOaVsOaNru+8jOWwseS8muaKiuWTjeW6lOWGheWuueWGmeWFpeaWh+S7tuW5tui/m+WFpSBzdWNjZXNzIOWbnuiwg++8jOS4muWKoemcgOimgeiHquihjOWIpOaWreaYr+WQpuS4i+i9veWIsOS6huaDs+imgeeahOWGheWuuVxyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKGNhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMudGVtcEZpbGVQYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8v6I635Y+W5b6u5L+h5bGP5bmV5bC65a+4XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5kb3dTaXplKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgc3lzSW5mbyA9IHBsYXRmb3JtLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICBjb25zb2xlLmxvZyhzeXNJbmZvKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiBzeXNJbmZvLndpbmRvd1dpZHRoICogc3lzSW5mby5waXhlbFJhdGlvLCBcclxuICAgICAgICBoZWlnaHQ6IHN5c0luZm8ud2luZG93SGVpZ2h0ICogc3lzSW5mby5waXhlbFJhdGlvXHJcbiAgICB9O1xyXG59XHJcblxyXG4vL+iOt+WPlueUqOaIt+aOiOadg+S/oeaBr1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0dGluZyhsb2dpbkNvZGUpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0uZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgLy8gcmVzLmF1dGhTZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAvLyAgIFwic2NvcGUudXNlckluZm9cIjogdHJ1ZSwgICAgLy/mmK/lkKbmjojmnYPnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgLy8gICBcInNjb3BlLnVzZXJMb2NhdGlvblwiOiB0cnVlLCAgICAvL+aYr+WQpuaOiOadg+WcsOeQhuS9jee9rlxyXG4gICAgICAgICAgICAvLyAgIFwic2NvcGUud2VydW5cIjogZmFsc2UsICAvL+aYr+WQpuaOiOadg+W+ruS/oei/kOWKqOatpeaVsFxyXG4gICAgICAgICAgICAvLyAgIFwic2NvcGUud3JpdGVQaG90b3NBbGJ1bVwiOiBmYWxzZSAgICAvL+aYr+WQpuaOiOadg+S/neWtmOWIsOebuOWGjFxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuYXV0aFNldHRpbmcpO1xyXG4gICAgICAgICAgICAvLyBpZih0eXBlb2YoY2FsbGJhY2spID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAvLyAgICAgY2FsbGJhY2socmVzLmF1dGhTZXR0aW5nW1wic2NvcGUudXNlckluZm9cIl0pO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ewXHJcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybS5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmNvZGUgPSBsb2dpbkNvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdGEuTG9naW5EYXRhLkxvZ2luUmVxKCcnLCByZXMuY29kZSwgcmVzLmVuY3J5cHRlZERhdGEsIHJlcy5pdik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVVc2VySW5mb0J1dHRvbihsb2dpbkNvZGUpO1xyXG4gICAgICAgICAgICAgICAgLy/mmL7npLrmjojmnYNcclxuICAgICAgICAgICAgICAgIExvY2FsQ29uZmlnLklzV3hBdXRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBNYW5hZ2VyLkxvYWRpbmdQcm9ncmVzc01hbmFnZXIuSW5zdC5TaG93V3hMb2dpbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v55So5oi35o6I5p2D5oyJ6ZKuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVc2VySW5mb0J1dHRvbihsb2dpbkNvZGUpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHN5c0luZm8gPSBwbGF0Zm9ybS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gcGxhdGZvcm0uY3JlYXRlVXNlckluZm9CdXR0b24oe1xyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAvLyBpbWFnZTogQ29uZmlnLlVJQ29uZmlnLlNoYXJlSW1hZ2VQYXRoLkludml0ZUZyaWVuZCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBzeXNJbmZvLndpbmRvd1dpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHN5c0luZm8ud2luZG93SGVpZ2h0LFxyXG4gICAgICAgICAgICAvLyBsaW5lSGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAnJyxcclxuICAgICAgICAgICAgLy8gY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgICAgLy8gdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgLy8gZm9udFNpemU6IDI2LFxyXG4gICAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6IDRcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBidXR0b24ub25UYXAoKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgLy/noa7orqTmjojmnYPlkI7plIDmr4HmjInpkq5cclxuICAgICAgICBpZihyZXMuZW5jcnlwdGVkRGF0YSl7XHJcbiAgICAgICAgICAgIHJlcy5jb2RlID0gbG9naW5Db2RlO1xyXG4gICAgICAgICAgICAvLyBEYXRhLkxvZ2luRGF0YS5Mb2dpblJlcSgnJywgcmVzLmNvZGUsIHJlcy5lbmNyeXB0ZWREYXRhLCByZXMuaXYpO1xyXG4gICAgICAgICAgICBidXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIEdFdmVudC5BZGRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MsICgpPT57YnV0dG9uLmRlc3Ryb3koKTt9LCB0aGlzKTtcclxufVxyXG5cclxuLy/mo4Dmn6XniYjmnKzmm7TmlrBcclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVXBkYXRlKGNhbGxiYWNrPzpGdW5jdGlvbil7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBpZih0eXBlb2YocGxhdGZvcm0uZ2V0VXBkYXRlTWFuYWdlcikgPT09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZU1hbmFnZXIgPSBwbGF0Zm9ybS5nZXRVcGRhdGVNYW5hZ2VyKCk7XHJcblxyXG4gICAgICAgIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIC8vIOivt+axguWujOaWsOeJiOacrOS/oeaBr+eahOWbnuiwg1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5qOA5p+l5paw54mI5pys57uT5p6c77yaJywgcmVzLmhhc1VwZGF0ZSk7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgIC8v5Zue6LCD6YCa55+l57uT5p6cXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMuaGFzVXBkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/muIXnkIbnvJPlrZhcclxuICAgICAgICAgICAgaWYocmVzLmhhc1VwZGF0ZSl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJ3eERvd25sb2FkZXJcIl0uY2xlYW5PbGRBc3NldHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgLy/lm57osIPpgJrnn6Xnu5PmnpxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwbGF0Zm9ybS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmm7TmlrDmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+aWsOeJiOacrOW3sue7j+WHhuWkh+Wlve+8jOWNs+WwhumHjeWQr+a4uOaIjycsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaWsOeahOeJiOacrOW3sue7j+S4i+i9veWlve+8jOiwg+eUqCBhcHBseVVwZGF0ZSDlupTnlKjmlrDniYjmnKzlubbph43lkK9cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8g5paw54mI5pys5LiL6L295aSx6LSlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5ZCR5byA5pS+5Z+f5Y+R6YCB5raI5oGvXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0T3BlblJlZ2lvbk1lc3NhZ2UoZXZlbnRJZCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBvcGVuRGF0YUNvbnRleHQgPSBwbGF0Zm9ybS5nZXRPcGVuRGF0YUNvbnRleHQoKVxyXG4gICAgb3BlbkRhdGFDb250ZXh0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICBldmVudElkOiBldmVudElkLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5ZCR5byA5pS+5Z+f5Y+R6YCB5pWw5o2uXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0T3BlblJlZ2lvbkRhdGEoZGF0YSl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBvcGVuRGF0YUNvbnRleHQgPSBwbGF0Zm9ybS5nZXRPcGVuRGF0YUNvbnRleHQoKVxyXG4gICAgb3BlbkRhdGFDb250ZXh0LnBvc3RNZXNzYWdlKGRhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICog5LiK5Lyg5ri45oiP5pWw5o2uXHJcbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy53ZWl4aW4ucXEuY29tL21pbmlnYW1lL2Rldi9hcGkvd3guc2V0VXNlckNsb3VkU3RvcmFnZS5odG1sXHJcbiAqIFxyXG4gKiBAcGFyYW0gIHt9IGRhdGFcclxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSAge30gdGhpc0FyZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXJDbG91ZFN0b3JhZ2UoZGF0YSwgY2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBwbGF0Zm9ybS5zZXRVc2VyQ2xvdWRTdG9yYWdlKHtcclxuICAgICAgICBLVkRhdGFMaXN0OiBkYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v6I635Y+W5bCP5ri45oiP5ZCv5Yqo5L+h5oGvXHJcbi8vaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaWdhbWUvZGV2L2FwaS93eC5nZXRMYXVuY2hPcHRpb25zU3luYy5odG1sXHJcbi8vIGxhdW5jaEluZm8gPSB7XHJcbi8vICAgICBzY2VuZSxcclxuLy8gICAgIHF1ZXJ5LFxyXG4vLyAgICAgc2hhcmVUaWNrZXQsXHJcbi8vICAgICByZWZlcnJlckluZm86e1xyXG4vLyAgICAgICAgIGFwcElkLFxyXG4vLyAgICAgICAgIGV4dHJhRGF0YVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXVuY2hPcHRpb25zU3luYygpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGxhdW5jaEluZm8gPSBwbGF0Zm9ybS5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgY29uc29sZS5sb2coJ+WQr+WKqOS/oeaBr++8micsIGxhdW5jaEluZm8pO1xyXG5cclxuICAgIHJldHVybiBsYXVuY2hJbmZvO1xyXG59XHJcblxyXG4vL+iOt+WPluWFpeWPo2FwcGlkXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2dpbkFwcGlkKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBpZihsYXVuY2hJbmZvICYmIGxhdW5jaEluZm8ucmVmZXJyZXJJbmZvKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn5YWl5Y+jQXBwaWTvvJonLGxhdW5jaEluZm8ucmVmZXJyZXJJbmZvLmFwcElkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxhdW5jaEluZm8ucmVmZXJyZXJJbmZvLmFwcElkO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6I635Y+W5YWl5Y+j5Zy65pmv5YC8XHJcbi8vaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaWdhbWUvZGV2L3JlZmVyZW5jZS9zY2VuZS1saXN0Lmh0bWxcclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhdW5jaFNjZW5lKCl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbGF1bmNoSW5mbyA9IHBsYXRmb3JtLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICBjb25zb2xlLmxvZygn5Zy65pmv5YC877yaJyxsYXVuY2hJbmZvLnNjZW5lKTtcclxuICAgIGlmKGxhdW5jaEluZm8pe1xyXG4gICAgICAgIHJldHVybiBsYXVuY2hJbmZvLnNjZW5lO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5piv5ZCm5LuO4oCc5oiR55qE5bCP56iL5bqP6L+b5YWl4oCdXHJcbmV4cG9ydCBmdW5jdGlvbiBJc0xvZ2luRnJvbUZhdm91cml0ZSgpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHNjZW5lID0gZ2V0TGF1bmNoU2NlbmUoKTtcclxuICAgIC8vIHJldHVybiBzY2VuZSA9PSAxMDg5IHx8IHNjZW5lID09IDExMDM7XHJcbiAgICByZXR1cm4gc2NlbmUgPT0gMTEwNCB8fCBzY2VuZSA9PSAxMTAzO1xyXG59XHJcblxyXG4vKipcclxuICog6Lez6L2s5bCP56iL5bqPXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYXBwSWRcclxuICogQHBhcmFtICB7c3RyaW5nfSBwYXRoXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZXh0cmFEYXRhXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW52VmVyc2lvblxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHBhcmFtICB7fSB0aGlzQXJnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVUb01pbmlQcm9ncmFtKGFwcElkOnN0cmluZywgcGF0aD86c3RyaW5nLCBleHRyYURhdGE/LCBlbnZWZXJzaW9uPywgY2FsbGJhY2s/OkZ1bmN0aW9uLCB0aGlzQXJnPyl7XHJcbiAgICBpZihVdGlscy5pc01pbmlHYW1lKCkgPT0gZmFsc2UgfHwgIWFwcElkKSByZXR1cm47XHJcblxyXG4gICAgcGxhdGZvcm0ubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgICBhcHBJZDogYXBwSWQsXHJcbiAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICBleHRyYURhdGE6IGV4dHJhRGF0YSxcclxuICAgICAgICBlbnZWZXJzaW9uOiBlbnZWZXJzaW9uLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAvLyDmiZPlvIDmiJDlip9cclxuICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog6Lez6L2s5Yiw5Y2W5YWL5pif55CDXHJcbiAqIEBwYXJhbSAge0pTT059IGV4dHJhRGF0YVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVudlZlcnNpb25cclxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSAge30gdGhpc0FyZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdvTWFpa2VTaG9wcGluZyhleHRyYURhdGE/LCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/LCBlbnZWZXJzaW9uPzpzdHJpbmcpe1xyXG4gICAgaWYoVXRpbHMuaXNNaW5pR2FtZSgpID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgbmF2aWdhdGVUb01pbmlQcm9ncmFtKExvY2FsQ29uZmlnLk1pbmlQcm9ncmFtQXBwSWQuTWFpa2UsIG51bGwsIGV4dHJhRGF0YSwgZW52VmVyc2lvbiwgY2FsbGJhY2ssIHRoaXNBcmcpO1xyXG59XHJcblxyXG4vKipcclxuICog5LuO5YW25LuW5bCP56iL5bqP6L+U5ZueXHJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYlxyXG4gKiBAcGFyYW0gIHt9IHRoaXNBcmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvblJldHVybkdhbWUoY2I6RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgIGlmKFV0aWxzLmlzTWluaUdhbWUoKSA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmKHR5cGVvZiBjYiA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICBvblNob3coY2IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQHR5cGUge2NjLk5vZGV9ICovXHJcbmxldCBzdWJDb250ZW50VmlldztcclxuLy/orr7nva7lrZDln5/nu4Tku7ZcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN1YkNvbnRlbnRWaWV3KHN1YlZpZXcpe1xyXG4gICAgaWYoIXN1YlZpZXcpIHJldHVybjtcclxuXHJcbiAgICBzdWJDb250ZW50VmlldyA9IHN1YlZpZXc7XHJcbn1cclxuXHJcbi8v6I635Y+W5a2Q5Z+f57uE5Lu2XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdWJDb250ZW50Vmlldygpe1xyXG4gICAgcmV0dXJuIHN1YkNvbnRlbnRWaWV3O1xyXG59XHJcblxyXG4vL+makOiXj+aIluaYvuekuuWtkOWfn+e7hOS7tlxyXG4vKipcclxuICogQHBhcmFtICB7Ym9vbGVhbn0gYWN0aXZlXHJcbiAqL1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gc2V0U3ViQ29udGVudEFjdGl2ZShhY3RpdmUpe1xyXG4vLyAgICAgaWYoIXN1YkNvbnRlbnRWaWV3IHx8IHR5cGVvZiBhY3RpdmUgIT0gJ2Jvb2xlYW4nKSByZXR1cm47XHJcblxyXG4vLyAgICAgc3ViQ29udGVudFZpZXcuYWN0aXZlID0gYWN0aXZlO1xyXG4vLyAgICAgc3ViQ29udGVudFZpZXcuZ2V0Q29tcG9uZW50KGNjLldYU3ViQ29udGV4dFZpZXcpLmVuYWJsZWQgPSBhY3RpdmU7XHJcbi8vIH1cclxuXHJcbi8vIC8v5pu05paw5a2Q5Z+fXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdWJDb250ZW50Vmlldygpe1xyXG4vLyAgICAgaWYoIXN1YkNvbnRlbnRWaWV3KSByZXR1cm47XHJcblxyXG4vLyAgICAgc3ViQ29udGVudFZpZXcuZ2V0Q29tcG9uZW50KGNjLldYU3ViQ29udGV4dFZpZXcpLnVwZGF0ZSgpO1xyXG4vLyB9XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vTG9jYWxDb25maWcnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Jlc1VybHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvZ2luUmVzVXJscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGVmaW5lJztcclxuZXhwb3J0ICogZnJvbSAnLi9VSUNvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vRGF0YUNvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTmV0Q29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2NhbENvbnRlbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbmZpZ1V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9TdGF0ZUNvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vT2JqZWN0Q29uZmlnJztcclxuIiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuL0xvY2FsQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQ29uZmlnKGNvbmZpZzpBcnJheTxhbnk+LCBwYXJhbTpzdHJpbmcsIHZhbHVlKXtcclxuICAgIGlmKG51bGwgPT0gdmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZhbHVlIGlzIG51bGwnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoQXJyYXkuaXNBcnJheShjb25maWcpID09IGZhbHNlIHx8IGNvbmZpZy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBvciBlbXB0eSBjb25maWcgYXJyYXknKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCB0YXJnZXQ6Q29uZmlnLkNvbmZpZ1R5cGU7XHJcbiAgICBjb25maWcuc29tZSh2PT57XHJcbiAgICAgICAgaWYoIXZbcGFyYW1dKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWlzcyBhcnJheSBwYXJhbTogJywgcGFyYW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9ZWxzZSBpZih2W3BhcmFtXSA9PSB2YWx1ZSl7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHY7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbi8v5qC55o2uaWTmkJzntKLphY3nva5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaENvbmZpZ0J5SWQoY29uZmlnOkFycmF5PGFueT4sIHZhbHVlKXtcclxuICAgIHJldHVybiBzZWFyY2hDb25maWcoY29uZmlnLCAnSWQnLCB2YWx1ZSk7XHJcbn1cclxuXHJcbi8v6YWN572u55qE5YaF5a2Y57yT5a2YXHJcbmxldCBjb25maWdDYWNoZTpDb25maWcuRGljdGlvbmFyeTxDb25maWcuQ29uZmlnVHlwZVtdPiA9IHt9O1xyXG5sZXQgbGV2ZWxDb25maWdDYWNoZTpDb25maWcuRGljdGlvbmFyeTxBcnJheTxDb25maWcuQ29uZmlnVHlwZT4+ID0ge307XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWdCeUtleShrZXk6c3RyaW5nKXtcclxuICAgIGlmKCFrZXkpIHJldHVybjtcclxuXHJcbiAgICBpZihudWxsID09IGNvbmZpZ0NhY2hlW2tleV0pe1xyXG4gICAgICAgIGNvbmZpZ0NhY2hlW2tleV0gPSBDb25maWcuRGF0YUNvbmZpZy5nZXRMb2NhbENvbmZpZyhrZXkpO1xyXG4gICAgICAgIGxldmVsQ29uZmlnQ2FjaGVba2V5XSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25maWdDYWNoZVtrZXldO1xyXG59XHJcblxyXG4vL+mAmui/h0lk5pCc5a+76YWN572uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWdCeUlkKGtleTpzdHJpbmcsIGlkOm51bWJlcil7XHJcbiAgICByZXR1cm4gc2VhcmNoQ29uZmlnQnlJZChnZXRDb25maWdCeUtleShrZXkpLCBpZCk7XHJcbn1cclxuXHJcbi8v6YCa6L+H562J57qn5pCc5a+7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWdCeUxldmVsKGtleTpzdHJpbmcsIGxldmVsOm51bWJlcil7XHJcbiAgICAvL2lk562J5LqObGV2ZWxcclxuICAgIHJldHVybiBnZXRDb25maWdCeUlkKGtleSwgbGV2ZWwpO1xyXG59XHJcblxyXG4vL+mAmui/h+S7u+aEj+Wtl+auteaQnOWvu1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnQnlBcmcoa2V5OnN0cmluZywgYXJnOnN0cmluZywgdmFsdWUpe1xyXG4gICAgcmV0dXJuIHNlYXJjaENvbmZpZyhnZXRDb25maWdCeUtleShrZXkpLCBhcmcsIHZhbHVlKTtcclxufVxyXG5cclxuLy/mjInlrZfmrrXmjpLliJfphY3nva5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRDb25maWdCeVBhcmFtKHNyYzpBcnJheTxhbnk+LCBwYXJhbTpzdHJpbmcsIG91dD86QXJyYXk8QXJyYXk8YW55Pj4pe1xyXG4gICAgaWYoIXBhcmFtIHx8IEFycmF5LmlzQXJyYXkoc3JjKSA9PSBmYWxzZSl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBwYXJhbSBvciBzb3VyY2UgY29uZmlnJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZihBcnJheS5pc0FycmF5KG91dCkgPT0gZmFsc2Upe1xyXG4gICAgICAgIG91dCA9IFtdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcmMuc29tZSh2PT57XHJcbiAgICAgICAgaWYobnVsbCA9PSB2W3BhcmFtXSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25maWcgbWlzcyBwYXJhbTogJywgcGFyYW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG51bGwgPT0gb3V0W3ZbcGFyYW1dXSl7XHJcbiAgICAgICAgICAgIG91dFt2W3BhcmFtXV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0W3ZbcGFyYW1dXS5wdXNoKHYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5cclxuLy/ovpPlhaXphY3nva7vvIzmjInlrZfmrrXov5Tlm57lkIznsbvphY3nva7mlbDnu4RcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNvbmZpZ0J5UGFyYW0oc3JjOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgdmFsdWUsIG91dD86QXJyYXk8YW55Pil7XHJcbiAgICBpZighcGFyYW0gfHwgQXJyYXkuaXNBcnJheShzcmMpID09IGZhbHNlKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHBhcmFtIG9yIHNvdXJjZSBjb25maWcnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoQXJyYXkuaXNBcnJheShvdXQpID09IGZhbHNlKXtcclxuICAgICAgICBvdXQgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzcmMuc29tZSh2PT57XHJcbiAgICAgICAgaWYobnVsbCA9PSB2W3BhcmFtXSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25maWcgbWlzcyBwYXJhbTogJywgcGFyYW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHZbcGFyYW1dID09IHZhbHVlKXtcclxuICAgICAgICAgICAgb3V0LnB1c2godik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5cclxuLy/ovpPlhaXphY3nva5rZXnvvIzmjInlrZfmrrXov5Tlm57lkIznsbvphY3nva7mlbDnu4RcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNvbmZpZyhrZXk6c3RyaW5nLCBwYXJhbTpzdHJpbmcsIHZhbHVlLCBvdXQ/OkFycmF5PGFueT4pe1xyXG4gICAgcmV0dXJuIGZpbHRlckNvbmZpZ0J5UGFyYW0oZ2V0Q29uZmlnQnlLZXkoa2V5KSwgcGFyYW0sIHZhbHVlLCBvdXQpO1xyXG59XHJcblxyXG4vL+iOt+WPlumBk+WFt+mFjee9rlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUNvbmZpZyhpZDpudW1iZXIpe1xyXG4gICAgcmV0dXJuIGdldENvbmZpZ0J5SWQoQ29uZmlnLkxPQ0FMQ09ORklHX0tFWS5JVEVNLCBpZCkgYXMgQ29uZmlnLkl0ZW1Db25maWdUeXBlO1xyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuL0xvY2FsQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpzb25Ib3R7XHJcbiAgICBpZDpudW1iZXI7XHJcbiAgICBUeXBlOnN0cmluZztcclxuICAgIFVybDpzdHJpbmc7XHJcbn1cclxuXHJcbi8v5pys5Zyw6YWN572u5a2Y5YKo5YmN57yAXHJcbmNvbnN0IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgPSBcImNvbmZpZ2xvY2FsX3ByZWZpeFwiO1xyXG5cclxuLy/lr7nlupTlkI7nq6/nmoTooajmoLx0YWJsZUlkXHJcbmxldCB0YWJsZUlkTnVtID0gMTtcclxuZXhwb3J0IGNvbnN0IExPQ0FMQ09ORklHX0tFWSA9IHtcclxuICAgIC8v5L+u5Li66Zi25q61XHJcbiAgICBDVUxUSVZBVElPTl9QRVJJT0Q6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+m7mOiupOWAvFxyXG4gICAgREVGQVVMVF9DT05GSUc6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+a0nuW6nOmjn+eJqVxyXG4gICAgQURPQkVfRk9PRDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5rSe5bqc6Zmo6ZOBXHJcbiAgICBBRE9CRV9JUk9OOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/mtJ7lupzngbXnn7NcclxuICAgIEFET0JFX1NUT05FOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/mtJ7lupzpu5jorqTphY3nva5cclxuICAgIEFET0JFX0RFRkFVTFQ6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+a0nuW6nOacqOadkFxyXG4gICAgQURPQkVfV09PRDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5rSe5bqc54G15rGgXHJcbiAgICBBRE9CRV9QT09MOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/ngbXmsaDpu5jorqTlgLxcclxuICAgIEFET0JFX1BPT0xfREVGQVVMVDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6aOO5rC05ZyfXHJcbiAgICBBRE9CRV9QT09MX1NPSUw6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mjjuawtOacqFxyXG4gICAgQURPQkVfUE9PTF9XT09EOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/po47msLTmsLRcclxuICAgIEFET0JFX1BPT0xfV0FURVI6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mjjuawtOeBq1xyXG4gICAgQURPQkVfUE9PTF9GSVJFOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/po47msLTph5FcclxuICAgIEFET0JFX1BPT0xfR09MRDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6ZqP5py66K+t5Y+lXHJcbiAgICBSQU5ET01fV09SRFM6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vlxyXG4gICAgU0VDVFM6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vuS6uueJqVxyXG4gICAgU0VDVEVSUzogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+5ZOB6Zi2XHJcbiAgICBTRUNUX0dSQURFOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/pl6jmtL7mioDog71cclxuICAgIFNFQ1RfS0Y6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vuaKgOiDveWNh+e6p1xyXG4gICAgU0VDVF9LRl9VUEdSQURFOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/pl6jmtL7mioDog73ljYfnuqfmgLvph49cclxuICAgIFNFQ1RfS0ZfQUREX05VTTogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+5Lu75YqhXHJcbiAgICBTRUNUX1RBU0s6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mXqOa0vuS/rueCvOWhlFxyXG4gICAgU0VDVF9UUkFJTl9UT1dFUjogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+6buY6K6k5YC8XHJcbiAgICBTRUNUX0RFRkFVTFQ6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+S5puexjeaKgOiDvVxyXG4gICAgQk9PS19TS0lMTDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5YKo54mp6KKL5Y2H57qn5raI6ICXXHJcbiAgICBCQUdfVVBfQ09TVDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v54mp5ZOBXHJcbiAgICBJVEVNOiBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgdGFibGVJZE51bSsrLFxyXG4gICAgLy/oo4XlpIdcclxuICAgIEVRVUlQTUVOVDogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v6Zeo5rS+5oub5byPXHJcbiAgICBTRUNUX1pIQU9TSEk6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+aImOaWl+WlluWKsVxyXG4gICAgQkFUVExFX0FXQVJEUzogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxuICAgIC8v5py65Zmo5Lq6XHJcbiAgICBCQVRUTEVfQUk6IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyB0YWJsZUlkTnVtKyssXHJcbiAgICAvL+mVh+WmluWhlOWxgue6p1xyXG4gICAgTU9OU1RFUl9UT1dFUjogUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIHRhYmxlSWROdW0rKyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFDb25maWd7XHJcbiAgICBwdWJsaWMgY291bnROdW0gPTA7IC8v6YWN572u6K6h5pWwXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgSXNDb25maWdMb2FkZWQgPSBmYWxzZTsgICAvL+aYr+WQpuW3suWKoOi9vemFjee9rlxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBKU09OSE9UX1VSTCAgPSAncmVzL2NvbmZpZy9Kc29uSG90Lmpzb24nO1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgU1lOVEhFU0lTX1VSTCAgPSAncmVzL2NvbmZpZy9TeW50aGVzaXMuanNvbic7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIExFVkVMVVBfVVJMICA9ICdyZXMvY29uZmlnL0xldmVsVXAuanNvbic7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIEtPTkdGVV9VUkwgID0gJ3Jlcy9jb25maWcvS29uZ0Z1Lmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBLT05HRlVfQVRUUklCVVRFX1VSTCAgPSAncmVzL2NvbmZpZy9Lb25nRnVBdHRyaWJ1dGUuanNvbic7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIFdFQVBPTl9UWVBFX1VSTCAgPSAncmVzL2NvbmZpZy9XZWFwb25UeXBlLmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBZT0tFX1VSTCAgPSAncmVzL2NvbmZpZy9Zb2tlLmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBTRUNUX1VSTCAgPSAncmVzL2NvbmZpZy9TZWN0Lmpzb24nO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBIRVJPX1VSTCAgPSAncmVzL2NvbmZpZy9IZXJvLmpzb24nO1xyXG5cclxuICAgIC8v6YWN572uaWTvvIzpobvkuI5yZXMvQ29uZmlnL0pzb25Ib3QuVHlwZeebuOWQjFxyXG4gICAgcHVibGljIHN0YXRpYyBDVUxUSVZBVElPTl9LRVkgPSBcIkN1bHRpdmF0aW9uXCI7XHJcbiAgICAvL+WvueW6lOWQjuerr+eahOihqOagvHRhYmxlSWRcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0NVTFRJVkFUSU9OX1BFUklPRCA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyAxOyAgLy/kv67kuLrpmLbmrrVcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX0ZPT0QgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMzsgIC8v5rSe5bqc6aOf54mpXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9JUk9OID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDQ7ICAvL+a0nuW6nOmZqOmTgVxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfU1RPTkUgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgNTsgIC8v5rSe5bqc54G155+zXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9XT09EID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDc7ICAvL+a0nuW6nOacqOadkFxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfREVGQVVMVCA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyA2OyAgLy/mtJ7lupzpu5jorqTphY3nva5cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX1BPT0wgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgODsgIC8v5rSe5bqc54G15rGgXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9QT09MX0RFRkFVTFQgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgOTsgIC8v54G15rGg6buY6K6k5YC8XHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9BRE9CRV9QT09MX1NPSUwgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMTA7ICAvL+mjjuawtOWcn1xyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfUE9PTF9XT09EID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDExOyAgLy/po47msLTmnKhcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX1BPT0xfV0FURVIgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMTI7ICAvL+mjjuawtOawtFxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBLRVlfQURPQkVfUE9PTF9GSVJFID0gUFJFRklYX0xPQ0FMQ09ORklHX0tFWSArIDEzOyAgLy/po47msLTngatcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgS0VZX0FET0JFX1BPT0xfR09MRCA9IFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyAxNDsgIC8v6aOO5rC06YeRXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIEtFWV9SQU5ET01fV09SRFMgPSBQUkVGSVhfTE9DQUxDT05GSUdfS0VZICsgMTU7ICAvL+maj+acuuivreWPpVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU1lOVEhFU0lTX0tFWSA9IFwic3ludGhlc2lzXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIExFVkVMVVBfS0VZID0gXCJsZXZlbFVwXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEtPTkdGVV9LRVkgPSBcImtvbmdGdVwiXHJcbiAgICBwdWJsaWMgc3RhdGljIEtPTkdGVV9BVFRSSUJVVEVfS0VZID1cImtvbmdGdUF0dHJpYnV0ZVwiXHJcbiAgICBwdWJsaWMgc3RhdGljIFdFQVBPTl9UWVBFX0tFWSA9XCJ3ZWFwb25fVHlwZVwiXHJcbiAgICBwdWJsaWMgc3RhdGljIFlPS0VfS0VZID0gXCJ5b2tlXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNFQ1RfS0VZID0gXCJzZWN0XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEhlcm9fS0VZID0gXCJIZXJvXCI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBKU09OX0NPTkZJR1MgPSBcImpzb25fY29uZmlnc1wiO1xyXG5cclxuICAgIC8v5pyA5aSn55Sf5ZG95YC8XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgTUFYX0hFQUxUSCA9IDEwMDtcclxuICAgIC8v5Yid5aeL6YeR5biBXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgSU5JVF9HT0xEID0gNTtcclxuICAgIC8v5Zue5ZCI6LSt5LmwQ0RcclxuICAgIHN0YXRpYyByZWFkb25seSBST1VORF9DRCA9IDE1O1xyXG4gICAgLy/kuIrpmLXmlbDnm65cclxuICAgIHN0YXRpYyByZWFkb25seSBUUk9PUF9OVU0gPSA5O1xyXG4gICAgLy/og4zljIXmlbDnm65cclxuICAgIHN0YXRpYyByZWFkb25seSBCQUdfVE9UQUwgPSA4O1xyXG5cclxuICAgIC8v6YCJ5oup5rS+5YirXHJcbiAgICBzdGF0aWMgSGVyb1NlY3QgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZSA6IERhdGFDb25maWc7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIDogRGF0YUNvbmZpZyB7XHJcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IERhdGFDb25maWcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkgOiBEYXRhQ29uZmlnIHtcclxuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRGF0YUNvbmZpZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnQnlOYW1lKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldENvbmZpZ0J5TmFtZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnQnlJZChrZXk6c3RyaW5nLCBpZDpudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldENvbmZpZ0J5SWQoa2V5LCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZWFyY2hDb25maWcoY29uZmlnOkFycmF5PGFueT4sIHBhcmFtOnN0cmluZywgdmFsdWUpe1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBDb21tb24uc2VhcmNoQXJyYXkoY29uZmlnLCBwYXJhbSwgdmFsdWUpO1xyXG4gICAgICAgIGlmKCF0YXJnZXQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfmib7kuI3liLDphY3nva7vvJonLCBwYXJhbSwgdmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VhcmNoQ29uZmlnQnlJZChjb25maWc6QXJyYXk8YW55PiwgaWQ6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hDb25maWcoY29uZmlnLCAnSWQnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMb2NhbENvbmZpZ0J5SWQoa2V5OnN0cmluZywgaWQ6bnVtYmVyKXtcclxuICAgICAgICBsZXQgY29uZmlnOkFycmF5PGFueT4gPSB0aGlzLmdldExvY2FsQ29uZmlnKGtleSk7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaENvbmZpZ0J5SWQoY29uZmlnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbmZpZ0RhdGE6e1trZXk6c3RyaW5nXTpBcnJheTxhbnk+fSA9IHt9O1xyXG5cclxuICAgIHByb3RlY3RlZCBsb2FkQ29uZmlnKHVybDpzdHJpbmcsIGtleTpzdHJpbmcsIGNiPzpGdW5jdGlvbikgOiB2b2lkIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5sb2FkKHVybCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCBjb25maWc9PntcclxuICAgICAgICAgICAgY29uZmlnID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnKTtcclxuICAgICAgICAgICAgdmFyIGNvbmZpZ0pzb24gPSBKU09OLnBhcnNlKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnRGF0YVtrZXldID0gY29uZmlnSnNvbjtcclxuICAgICAgICAgICAgdGhpcy5jb3VudE51bSsrO1xyXG5cclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRDb25maWcoY2I/OkZ1bmN0aW9uKSA6IHZvaWQge1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoRGF0YUNvbmZpZy5KU09OSE9UX1VSTCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCBjb25maWc9PntcclxuICAgICAgICAgICAgY29uZmlnID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnKTtcclxuICAgICAgICAgICAgbGV0IGhvdEpzb25zOkpzb25Ib3RbXSA9IEpTT04ucGFyc2UoY29uZmlnKTtcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShob3RKc29ucykpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gaG90SnNvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaG90SnNvbnMuZm9yRWFjaCgoY2ZnLCBpZHgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaWR4ID49IHRvdGFsIC0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbmZpZyhjZmcuVXJsLCBjZmcuVHlwZSwgY2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDb25maWcoY2ZnLlVybCwgY2ZnLlR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pys5Zyw57yT5a2YXHJcbiAgICBwdWJsaWMgc3RvcmVDb25maWcoa2V5OnN0cmluZyB8IG51bWJlciwgZGF0YSl7XHJcbiAgICAgICAgLy8gaWYodHlwZW9mKGRhdGEpID09ICdzdHJpbmcnKXtcclxuICAgICAgICAvLyAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIENvbW1vbi5zYXZlTG9jYWxKc29uKGtleSwgZGF0YSk7XHJcblxyXG4gICAgICAgIC8v5ZCO56uv5Y+R5p2lanNvbuWtl+espuS4slxyXG4gICAgICAgIENvbW1vbi5zYXZlTG9jYWxTdG9yYWdlKFBSRUZJWF9MT0NBTENPTkZJR19LRVkgKyBrZXksIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuY291bnROdW0rKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZUFsbENvbmZpZyhkYXRhKXtcclxuICAgICAgICBDb21tb24uc2F2ZUxvY2FsSnNvbihDb25maWcuRGF0YUNvbmZpZy5KU09OX0NPTkZJR1MsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlQ29uZmlnVmVyc2lvbihkYXRhOkNvbmZpZy5Db25maWdEYXRhUGFyYW1bXSl7XHJcbiAgICAgICAgLy/lv4XpobvmmK/mlbDnu4RcclxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpID09IGZhbHNlIHx8IGRhdGEubGVuZ3RoID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRvTG9jYWwgPSBuZXcgQXJyYXk8Q29uZmlnLkNvbmZpZ0RhdGFQYXJhbT4oKTtcclxuICAgICAgICBkYXRhLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICB0b0xvY2FsLnB1c2gobmV3IENvbmZpZy5Db25maWdEYXRhUGFyYW0odi5UYWJsZUlkLCB2LlZlcnNpb24pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBDb21tb24uc2F2ZUxvY2FsSnNvbihDb25maWcuRGF0YUNvbmZpZy5KU09OX0NPTkZJR1MsIHRvTG9jYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRMb2NhbENvbmZpZyhrZXk6c3RyaW5nKXtcclxuICAgICAgICBpZigha2V5KXtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY29uZmlnIGtleTogJywga2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IENvbW1vbi5nZXRMb2NhbFN0b3JhZ2Uoa2V5KTtcclxuICAgICAgICBpZighY29uZmlnKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign6YWN572u5Li656m677yaJywga2V5KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBDb21tb24uZ2V0TG9jYWxKc29uKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZ1ZlcnNpb24oY29uZmlnOkNvbmZpZy5Db25maWdEYXRhUGFyYW0pe1xyXG4gICAgICAgIHJldHVybiBjb25maWcgJiYgY29uZmlnLlZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZ1ZlcnNpb25CeUtleShrZXk6c3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb25maWdWZXJzaW9uKHRoaXMuZ2V0TG9jYWxDb25maWcoa2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5bmnKzlnLDmiYDmnInphY3nva5cclxuICAgIHN0YXRpYyBnZXQgbG9jYWxDb25maWdzKCk6Q29uZmlnLkNvbmZpZ0RhdGFQYXJhbVtde1xyXG4gICAgICAgIHJldHVybiBDb21tb24uZ2V0TG9jYWxKc29uKERhdGFDb25maWcuSlNPTl9DT05GSUdTKSB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29uZmlnQnlOYW1lKGtleTpzdHJpbmcpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWdEYXRhW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbmZpZ0J5SWQoa2V5OnN0cmluZyxpZDpudW1iZXIpIDogYW55IHtcclxuICAgICAgICBpZih0aGlzLmNvbmZpZ0RhdGFba2V5XSkge1xyXG4gICAgICAgICAgICB2YXIgY29uZmlncyA9IHRoaXMuY29uZmlnRGF0YVtrZXldO1xyXG4gICAgICAgICAgICBmb3IodmFyIGk6bnVtYmVyID0gMDsgaSA8IGNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKGNvbmZpZ3NbaV1bJ2lkJ10gPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29uZmlnc0J5VHlwZShrZXk6c3RyaW5nLCB0eXBlOm51bWJlcikgOiBhbnkge1xyXG4gICAgICAgIGlmKHRoaXMuY29uZmlnRGF0YVtrZXldKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25maWdzID0gdGhpcy5jb25maWdEYXRhW2tleV07XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQ6QXJyYXk8YW55PiA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGk6bnVtYmVyID0gMDsgaSA8IGNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKGNvbmZpZ3NbaV1bJ3R5cGUnXSA9PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29uZmlnc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29uZmlnRGF0YSB7XHJcbiAgICBzdGF0aWMgQ09ORklHX0tFWTpzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGNvbmZpZzpBcnJheTxhbnk+O1xyXG5cclxuICAgIHN0YXRpYyBnZXQgQ29uZmlnKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuY29uZmlnKXtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBEYXRhQ29uZmlnLmdldExvY2FsQ29uZmlnKHRoaXMuQ09ORklHX0tFWSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZ0J5SWQoaWQ6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gRGF0YUNvbmZpZy5zZWFyY2hDb25maWdCeUlkKHRoaXMuQ29uZmlnLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbmZpZ0J5TGV2ZWwobGV2ZWw6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLnNlYXJjaEFycmF5KHRoaXMuQ29uZmlnLCAnTGV2ZWwnLCBsZXZlbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t6YWN572u5a2X5q61LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL+aooeadv+mFjee9rlxyXG5leHBvcnQgY2xhc3MgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBOYW1lOnN0cmluZztcclxuICAgIExldmVsOm51bWJlcjtcclxuICAgIFR5cGU6bnVtYmVyO1xyXG4gICAgUGljOnN0cmluZzsgXHJcbn1cclxuXHJcbi8v5L+u5Li66YWN572uXHJcbmV4cG9ydCBjbGFzcyBDdWx0aXZhdGlvblBlcmlvZCBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgWGl1d2VpTmFtZTpzdHJpbmc7ICAvL+S/ruS4uue6p+WIq+WQjeensFxyXG4gICAgQ29zdDpudW1iZXI7ICAgIC8v5Y2H57qn5raI6ICX5L+u5Li6XHJcbiAgICBTdWNjZXNzOm51bWJlcjsgLy/muKHliqvmiJDlip/njodcclxuICAgIEFkZEVmZmljaWVuY3k6bnVtYmVyO1xyXG4gICAgRmFpbFJldHVybjpudW1iZXI7XHJcbn1cclxuXHJcbi8v5rSe5bqc6LWE5rqQXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRvYmVSZXMgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIExldmVsOm51bWJlcjsgIFxyXG4gICAgUGljOnN0cmluZzsgXHJcbiAgICBTdG9yYWdlTGltaXQ6bnVtYmVyO1xyXG4gICAgU2VydmFudExpbWl0Om51bWJlcjtcclxuICAgIFNlcnZhbnRQcm9kdWN0Om51bWJlcjsgIC8v5Lqn6YeP77yIMeS4quS7meS7hu+8iVxyXG4gICAgU2VydmFudENvc3Q6bnVtYmVyOyAvL+a2iOiAl++8iDHkuKrku5nku4bvvIlcclxuICAgIFdvb2RDb3N0Om51bWJlcjsgICAgLy/ljYfnuqfmtojogJfmnKjmnZBcclxufVxyXG5cclxuLy/ngbXmsaBcclxuZXhwb3J0IGludGVyZmFjZSBBZG9iZVBvb2wgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIExldmVsOm51bWJlcjsgIFxyXG4gICAgUGljOnN0cmluZzsgXHJcbiAgICBTdG9yYWdlTGltaXQ6bnVtYmVyO1xyXG4gICAgUmVpa2lQcm9kdWN0Om51bWJlcjtcclxuICAgIFVwQ29zdFdvb2Q6bnVtYmVyOyAgLy/ljYfnuqfmtojogJfmnKjmnZBcclxuICAgIFVwQ29zdElyb246bnVtYmVyOyAvL+WNh+e6p+a2iOiAl+mZqOmTgVxyXG4gICAgVXBDb3N0U3RvbmU6bnVtYmVyOyAgICAvL+WNh+e6p+a2iOiAl+eBteefs1xyXG59XHJcblxyXG4vL+mjjuawtFxyXG5leHBvcnQgaW50ZXJmYWNlIEZlbmdzaHVpQ29uZmlnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgSWQ6bnVtYmVyO1xyXG4gICAgTGV2ZWw6bnVtYmVyOyAgXHJcbiAgICBMZXZlbE5hbWU6c3RyaW5nO1xyXG4gICAgUGljOnN0cmluZzsgXHJcbiAgICBHb25nZmFBZGQ6bnVtYmVyO1xyXG4gICAgVXBDb3N0UmVpa2k6bnVtYmVyO1xyXG59XHJcblxyXG4vL+maj+acuuivreWPpVxyXG5leHBvcnQgaW50ZXJmYWNlIFJhbmRvbVdvb2RzIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBUeXBlOm51bWJlcjsgIFxyXG4gICAgQ29udGVudDpzdHJpbmc7XHJcbn1cclxuXHJcbi8v6Zeo5rS+XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdHMgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIE5hbWU6c3RyaW5nO1xyXG4gICAgU3RhZ2VJZDpudW1iZXI7XHJcbiAgICBMZWFkZXJJZDpudW1iZXI7XHJcbiAgICBFbGRlcklkOm51bWJlcjtcclxuICAgIEZvbGxvd2VyT25lOm51bWJlcjtcclxuICAgIEZvbGxvd2VyVHdvOm51bWJlcjtcclxuICAgIEZvbGxvd2VyVGhyZWU6bnVtYmVyO1xyXG4gICAgWGl1d2VpSWQ6bnVtYmVyO1xyXG4gICAgUXVhbGlmaWNhdGlvbjpudW1iZXI7XHJcbiAgICBEZXNjOnN0cmluZztcclxufVxyXG5cclxuLy/pl6jmtL7kurrnialcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0ZXJzIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBOYW1lOnN0cmluZztcclxuICAgIEF2YXRhcjpzdHJpbmc7XHJcbiAgICBTdGFnZTpzdHJpbmc7XHJcbiAgICBEZXNjOnN0cmluZztcclxufVxyXG5cclxuLy/pl6jmtL7mioDog73ljYfnuqdcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0S0ZVcGdyYWRlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICAvLyBUeXBlOm51bWJlcjtcclxuICAgIC8vIExvd0xldmVsOm51bWJlcjtcclxuICAgIC8vIFVwTGV2ZWw6bnVtYmVyO1xyXG4gICAgQ29zdDpudW1iZXI7XHJcbn1cclxuXHJcbi8v6Zeo5rS+5ZOB6Zi2XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdEdyYWRlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBOYW1lOnN0cmluZztcclxuICAgIExvd1N0YWdlOm51bWJlcjtcclxufVxyXG5cclxuLy/pl6jmtL7mioDog71cclxuZXhwb3J0IGludGVyZmFjZSBTZWN0S0YgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIE5hbWU6c3RyaW5nOyAvL+mXqOa0vuWKn+azleWQjeensFxyXG4gICAgQWRkVHlwZTpudW1iZXI7IC8v5aKe5Yqg5bGe5oCn57G75Z6LKDHngbXlipsy5qC56aqoM+S9k+mthDTouqvms5UpXHJcbiAgICBHcm91cElkOm51bWJlcjsgLy/pl6jmtL5JRFxyXG4gICAgU3RhZ2VMZXZlbDpudW1iZXI7IC8v6Zeo5rS+5oqA6IO95ZOB6Zi2XHJcbiAgICBTdGFnZU5hbWU6c3RyaW5nOyAvL+mXqOa0vuaKgOiDveWTgemYtuWQjeensFxyXG4gICAgRmVuZ3NodWlUeXBlOm51bWJlcjsgLy/pl6jmtL7mioDog73po47msLTnsbvlnotcclxuICAgIEZlbmdzaHVpTmFtZTpzdHJpbmc7IC8v6Zeo5rS+5oqA6IO96aOO5rC05ZCN56ewXHJcbiAgICBDb3N0Om51bWJlcjsgLy/lrabkuaDmtojogJfpl6jmtL7otKHnjK7lgLxcclxufVxyXG5cclxuLy/pl6jmtL7mioDog73mgLvph4/ljYfnuqdcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0S0ZBZGROdW0gZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIElkOm51bWJlcjtcclxuICAgIENvc3Q6bnVtYmVyO1xyXG59XHJcblxyXG4vL+mXqOa0vuS7u+WKoVxyXG5leHBvcnQgaW50ZXJmYWNlIFNlY3RUYXNrIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcblx0U3RhZ2U6bnVtYmVyIC8v5Lu75Yqh5ZOB6Zi2XHJcblx0Q29tcGxldGVUaW1lOm51bWJlciAvL+WujOaIkOiAl+aXtnNcclxuXHRSZXdhcmRHb25neGlhbjpudW1iZXIgLy/lpZblirHotKHnjK7lgLxcclxuXHRSZXdhcmRTdG9uZTpudW1iZXIgLy/lpZblirHngbXnn7PmlbDph49cclxuXHRSZXdhcmRXZWl3YW5nOm51bWJlciAvL+WlluWKseWogeacm+WAvFxyXG5cdERlc2M6c3RyaW5nIC8v6Zeo5rS+5LuL57uNXHJcbn1cclxuXHJcbi8v5L+u54K85aGUXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdFRyYWluVG93ZXIgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuXHROb3JtYWxDb3N0ICA6bnVtYmVyIC8v5pmu6YCa5L+u54K85raI6ICX54G155+zXHJcblx0Tm9ybWFsVGltZSAgOm51bWJlciAvL+aZrumAmuS/rueCvOaXtumVvyjnp5IpXHJcblx0Tm9ybWFsVXAgICAgOm51bWJlciAvL+aZrumAmuS/rueCvOaPkOWNh+WAjeaVsFxyXG5cdE5vcm1hbFRpbWVzIDpudW1iZXIgLy/mma7pgJrkv67ngrzmr4/lpKnmrKHmlbBcclxuXHRMZWFkZXJDb3N0ICA6bnVtYmVyIC8v5o6M6Zeo5Lyg5Yqf5raI6ICX54G155+zXHJcblx0TGVhZGVyVGltZSAgOm51bWJlciAvL+aOjOmXqOS8oOWKn+aXtumVvyjnp5IpXHJcblx0TGVhZGVyVXAgICAgOm51bWJlciAvL+aOjOmXqOS8oOWKn+aPkOWNh+WAjeaVsFxyXG5cdExlYWRlclRpbWVzIDpudW1iZXIgLy/mjozpl6jkvKDlip/mr4/lpKnmrKHmlbBcclxufVxyXG5cclxuLy/pl6jmtL7pu5jorqRcclxuZXhwb3J0IGludGVyZmFjZSBTZWN0RGVmYXVsdCBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG5cdFdlaXdhbmdDb3N0IDpudW1iZXIgLy/pgIDlh7rpl6jmtL7miaPpmaTlqIHmnJtcclxuXHRHcm91cEdvbmd4aWFuQ29zdCA6bnVtYmVyIC8v6YCA5Ye66Zeo5rS+5omj6Zmk6Zeo5rS+6LSh54yu5YC8XHJcbn1cclxuXHJcbi8v5YKo54mp6KKL5Y2H57qn5raI6ICXXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFnVXBDb3N0IGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcblx0U3RvbmVOdW0gOm51bWJlciAvL+a3u+WKoOagvOWtkOa2iOiAl+eBteefs+eahOaVsOmHj1xyXG5cdEdvb2RJZCA6bnVtYmVyIC8v5re75Yqg5qC85a2Q5raI6ICX54mp5ZOBSURcclxuXHRHb29kTnVtIDpudW1iZXIgLy/mt7vliqDmoLzlrZDmtojogJfnianlk4HmlbDph49cclxufVxyXG5cclxuLy/pgZPlhbdcclxuZXhwb3J0IGludGVyZmFjZSBJdGVtQ29uZmlnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG5cdFBpYzpzdHJpbmc7ICAgICAgLy/nianlk4Hlm77niYdcclxuXHREZXNjOnN0cmluZzsgICAgIC8v54mp5ZOB5o+P6L+wXHJcblx0UXVhbGl0eTpudW1iZXI7IC8v54mp5ZOB5ZOB6LSoXHJcblx0U3RvcmFnZUxpbWl0ICAgICAgIDpudW1iZXI7IC8v6IOM5YyF5pyA5aSn5Y+g5Yqg5pWw6YePXHJcblx0U2VsbFByaWNlICAgICAgICAgIDpudW1iZXI7IC8v5Ye65ZSu5Lu35qC8XHJcblx0Q2FuVXNlIDpudW1iZXI7IC8v6IO95LiN6IO95L2/55SoXHJcblx0VXNlVHlwZSA6bnVtYmVyOyAvL+eJqeWTgeexu+Weiygx5bGe5oCn5re75YqgMua4oeWKq+amgueOh+a3u+WKoDPmtojogJflk4E05oqA6IO95a2m5LmgKVxyXG5cdFByb3BlcnR5QWRkVHlwZSAgICA6bnVtYmVyOyAvL+a3u+WKoOeahOWxnuaAp+exu+Weiygx54G155+zMumjn+eJqTPmnKjmnZA06ZOB55+/NeS7meeOiTbpl6jmtL7otKHnjK7lgLw35aiB5pyb5YC8OOato+S5ieWAvDnpgqrmgbblgLwxMOS/ruS4uuWAvDEx5L+u55yf5bm06b6EMTLpgZPooYwxM+eBteWKmzE05qC56aqoMTXkvZPprYQxNui6q+azlTE35oKf5oCnMTjnpo/nvJgxOei1hOi0qDIw5Lq65peP5Lyk5a6zMjHlppbml4/kvKTlrrMyMuS7meaXj+S8pOWuszIz6ay85peP5Lyk5a6zMjTprZTml4/kvKTlrrMyNem+meaXj+S8pOWusylcclxuXHRQcm9wZXJ0eUFkZFZhbHVlICAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDlgLxcclxuXHREdWppZUFkZFhpdXdlaUxpbWl0Om51bWJlcjsgLy/muKHliqvmt7vliqDmpoLnjofkv67kuLrpmLbmrrXpmZDliLZcclxuXHREdWppZUFkZFZhbHVlICAgICAgOm51bWJlcjsgLy/muKHliqvmpoLnjofmt7vliqDlgLxcclxuXHRCb29rU2tpbGxJZCAgICAgICAgOm51bWJlcjsgLy/lrabkuaDnmoTkuabmnKzmioDog71JRFxyXG59XHJcblxyXG4vL+ijheWkh1xyXG5leHBvcnQgaW50ZXJmYWNlIEVxdWlwQ29uZmlnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG5cdFR5cGU6bnVtYmVyOyAvL+ijheWkh+exu+Wei++8mjHngbXliZEy5Y+R57CqM+iho+acjTTpnbTlrZA15oyH546vNueOieS9qTfmiYvpla84572X55uYXHJcblx0UGljOnN0cmluZzsgLy/oo4XlpIflm77niYdcclxuXHREZXNjOnN0cmluZzsvL+ijheWkh+aPj+i/sFxyXG5cdFF1YWxpdHkgICAgICA6bnVtYmVyOyAvL+ijheWkh+WTgei0qFxyXG5cdFN0b3JhZ2VMaW1pdCA6bnVtYmVyOyAvL+iDjOWMheacgOWkp+WPoOWKoOaVsOmHj1xyXG5cdFNlbGxQcmljZSAgICA6bnVtYmVyOyAvL+WHuuWUruS7t+agvFxyXG5cdENhblVzZSAgICAgICA6bnVtYmVyOyAvL+iDveS4jeiDveS9v+eUqFxyXG5cdFByb3BlcnR5QWRkT25lVHlwZSAgICA6bnVtYmVyOyAvL+WxnuaAp+a3u+WKoOexu+Weizox54G155+zMumjn+eJqTPmnKjmnZA06ZOB55+/NeS7meeOiTbpl6jmtL7otKHnjK7lgLw35aiB5pyb5YC8OOato+S5ieWAvDnpgqrmgbblgLwxMOS/ruS4uuWAvDEx6YGT6KGMMTLngbXlipsxM+aguemqqDE05L2T6a2EMTXouqvms5UxNuaCn+aApzE356aP57yYMTjotYTotKgxOeS6uuaXj+S8pOWuszIw5aaW5peP5Lyk5a6zMjHku5nml4/kvKTlrrMyMumsvOaXj+S8pOWuszIz6a2U5peP5Lyk5a6zMjTpvpnml4/kvKTlrrNcclxuXHRQcm9wZXJ0eUFkZE9uZVZhbHVlICAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDlgLxcclxuXHRQcm9wZXJ0eUFkZFR3b1R5cGUgICAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDnsbvlnos6MeeBteefszLpo5/niakz5pyo5p2QNOmTgeefvzXku5nnjok26Zeo5rS+6LSh54yu5YC8N+Wogeacm+WAvDjmraPkuYnlgLw56YKq5oG25YC8MTDkv67kuLrlgLwxMemBk+ihjDEy54G15YqbMTPmoLnpqqgxNOS9k+mthDE16Lqr5rOVMTbmgp/mgKcxN+emj+e8mDE46LWE6LSoMTnkurrml4/kvKTlrrMyMOWmluaXj+S8pOWuszIx5LuZ5peP5Lyk5a6zMjLprLzml4/kvKTlrrMyM+mtlOaXj+S8pOWuszI06b6Z5peP5Lyk5a6zXHJcblx0UHJvcGVydHlBZGRUd29WYWx1ZSAgIDpudW1iZXI7IC8v5bGe5oCn5re75Yqg5YC8XHJcblx0UHJvcGVydHlBZGRUaHJlZVR5cGUgIDpudW1iZXI7IC8v5bGe5oCn5re75Yqg57G75Z6LOjHngbXnn7My6aOf54mpM+acqOadkDTpk4Hnn7815LuZ546JNumXqOa0vui0oeeMruWAvDflqIHmnJvlgLw45q2j5LmJ5YC8OemCquaBtuWAvDEw5L+u5Li65YC8MTHpgZPooYwxMueBteWKmzEz5qC56aqoMTTkvZPprYQxNei6q+azlTE25oKf5oCnMTfnpo/nvJgxOOi1hOi0qDE55Lq65peP5Lyk5a6zMjDlppbml4/kvKTlrrMyMeS7meaXj+S8pOWuszIy6ay85peP5Lyk5a6zMjPprZTml4/kvKTlrrMyNOm+meaXj+S8pOWus1xyXG5cdFByb3BlcnR5QWRkVGhyZWVWYWx1ZSA6bnVtYmVyOyAvL+WxnuaAp+a3u+WKoOWAvFxyXG5cdFByb3BlcnR5QWRkRm91clR5cGUgICA6bnVtYmVyOyAvL+WxnuaAp+a3u+WKoOexu+Weizox54G155+zMumjn+eJqTPmnKjmnZA06ZOB55+/NeS7meeOiTbpl6jmtL7otKHnjK7lgLw35aiB5pyb5YC8OOato+S5ieWAvDnpgqrmgbblgLwxMOS/ruS4uuWAvDEx6YGT6KGMMTLngbXlipsxM+aguemqqDE05L2T6a2EMTXouqvms5UxNuaCn+aApzE356aP57yYMTjotYTotKgxOeS6uuaXj+S8pOWuszIw5aaW5peP5Lyk5a6zMjHku5nml4/kvKTlrrMyMumsvOaXj+S8pOWuszIz6a2U5peP5Lyk5a6zMjTpvpnml4/kvKTlrrNcclxuXHRQcm9wZXJ0eUFkZEZvdXJWYWx1ZSAgOm51bWJlcjsgLy/lsZ7mgKfmt7vliqDlgLxcclxufVxyXG5cclxuLy/kuabnsY3mioDog71cclxuZXhwb3J0IGludGVyZmFjZSBTa2lsbENvbmZpZ1R5cGUgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuXHRTa2lsbFR5cGUgIDpudW1iZXI7IC8v5oqA6IO957G75Z6LKDLnp5jnsY0z55yf6K+ANOW/g+e7jzXpgYHmnK8257ud5a2mN+aui+mhtTjmi5vlvI8pXHJcblx0QWRkVHlwZSAgICA6bnVtYmVyOyAvL+WinuWKoOWxnuaAp+exu+Weiygx54G15YqbMuaguemqqDPkvZPprYQ06Lqr5rOVKVxyXG5cdFN0YWdlTGV2ZWwgOm51bWJlcjsgLy/pl6jmtL7mioDog73lk4HpmLZcclxuXHRTdGFnZU5hbWUgOnN0cmluZzsgIC8v6Zeo5rS+5oqA6IO95ZOB6Zi25ZCN56ewXHJcblx0RmVuZ3NodWlUeXBlIDpudW1iZXI7IC8v6Zeo5rS+5oqA6IO96aOO5rC057G75Z6LXHJcblx0RmVuZ3NodWlOYW1lIDpzdHJpbmc7IC8v6Zeo5rS+5oqA6IO96aOO5rC05ZCN56ewXHJcblx0Q29zdCAgICAgICA6bnVtYmVyOyAvL+WtpuS5oOa2iOiAl+mXqOa0vui0oeeMruWAvFxyXG59XHJcblxyXG4vL+mXqOa0vuaLm+W8j1xyXG5leHBvcnQgaW50ZXJmYWNlIFNlY3RCYXR0bGVTa2lsbENmZ1R5cGUgZXh0ZW5kcyBDb25maWdUeXBlIHtcclxuICAgIEh1cnRBZGQ6bnVtYmVyOyAvL+aLm+W8j+S8pOWus+WKoOaIkFxyXG59XHJcblxyXG4vL+acuuWZqOS6ulxyXG5leHBvcnQgaW50ZXJmYWNlIEJhdHRsZUFpQ2ZnVHlwZSBleHRlbmRzIENvbmZpZ1R5cGUge1xyXG4gICAgRGVzYyAgICAgICAgIDpzdHJpbmc7IC8v566A5LuLXHJcblx0UmFjaWFsVHlwZSAgIDpudW1iZXI7IC8v56eN5peP57G75Z6LMeS6uuaXjzLlppbml48z5LuZ5pePNOmsvOaXjzXprZTml4826b6Z5pePXHJcblx0WGl1d2VpU3RhZ2UgIDpudW1iZXI7IC8v5L+u5Li66Zi25q61XHJcblx0TGluZ2xpICAgICAgIDpudW1iZXI7IC8v54G15YqbXHJcblx0R2VuZ3UgICAgICAgIDpudW1iZXI7IC8v5qC56aqoXHJcblx0VGlwbyAgICAgICAgIDpudW1iZXI7IC8v5L2T6a2EXHJcblx0U2hlbmZhICAgICAgIDpudW1iZXI7IC8v6Lqr5rOVXHJcblx0SHVydEFkZCAgICAgIDpudW1iZXI7IC8v5Lyk5a6z5Yqg5bGCXHJcblx0SHVydFJlZHVjZSAgIDpudW1iZXI7IC8v5Lyk5a6z5YeP5YWNXHJcblx0R3JvdXBTdHlsZUlkIDpudW1iZXI7IC8v6Zeo5rS+5oub5byPSURcclxuXHRIdXJ0UmVuenUgICAgOm51bWJlcjsgLy/kurrml4/kvKTlrrNcclxuXHRIdXJ0WWFvenUgICAgOm51bWJlcjsgLy/lppbml4/kvKTlrrNcclxuXHRIdXJ0WGlhbnp1ICAgOm51bWJlcjsgLy/ku5nml4/kvKTlrrNcclxuXHRIdXJ0R3VpenUgICAgOm51bWJlcjsgLy/prLzml4/kvKTlrrNcclxuXHRIdXJ0TW96dSAgICAgOm51bWJlcjsgLy/prZTml4/kvKTlrrNcclxuXHRIdXJ0TG9uZ3p1ICAgOm51bWJlcjsgLy/pvpnml4/kvKTlrrNcclxufVxyXG5cclxuLy/plYflppbloZTlsYLnuqdcclxuZXhwb3J0IGludGVyZmFjZSBNb25zdGVyVG93ZXJDZmdUeXBlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcbiAgICBEZXNjICAgICAgICA6c3RyaW5nOyAvL+eugOS7i1xyXG5cdExvd1N0YWdlICAgIDpudW1iZXI7IC8v5oyR5oiY55qE5pyA5L2O5L+u5Li6XHJcblx0UmV3YXJkSWQgICAgOm51bWJlcjsgLy/lpZblirHooahJRFxyXG5cdEhlbHBPbmVJZCAgIDpudW1iZXI7IC8v5Yqp5oiY5py65Zmo5Lq6MUlEXHJcblx0SGVscFR3b0lkICAgOm51bWJlcjsgLy/liqnmiJjmnLrlmajkuroySURcclxuXHRIZWxwVGhyZWVJZCA6bnVtYmVyOyAvL+WKqeaImOacuuWZqOS6ujNJRFxyXG5cdEhlbHBGb3VySWQgIDpudW1iZXI7IC8v5Yqp5oiY5py65Zmo5Lq6NElEXHJcblx0SGVscEZpdmVJZCAgOm51bWJlcjsgLy/liqnmiJjmnLrlmajkuro1SURcclxuXHRCYXR0bGVPbmVJZCA6bnVtYmVyOyAvL+WvueaImOacuuWZqOS6ujFJRFxyXG5cdEJhdHRsZVR3b0lkIDpudW1iZXI7IC8v5a+55oiY5py65Zmo5Lq6MklEXHJcblx0QmF0dGxlVGhyZWVJZCA6bnVtYmVyOyAvL+WvueaImOacuuWZqOS6ujNJRFxyXG5cdEJhdHRsZUZvdXJJZCAgOm51bWJlcjsgLy/lr7nmiJjmnLrlmajkuro0SURcclxuXHRCYXR0bGVGaXZlSWQgIDpudW1iZXI7IC8v5a+55oiY5py65Zmo5Lq6NUlEXHJcbn1cclxuXHJcbi8v5oiY5paX5aWW5YqxXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmF0dGxlQXdhcmRDZmdUeXBlIGV4dGVuZHMgQ29uZmlnVHlwZSB7XHJcblx0T25lVHlwZSAgIDpudW1iZXI7IC8v5aWW5YqxMeexu+WeiyAxLeeJqeWTgTIt6KOF5aSHXHJcblx0T25lSWQgICAgIDpudW1iZXI7IC8v5aWW5YqxMUlEXHJcblx0T25lTnVtICAgIDpudW1iZXI7IC8v5aWW5YqxMeaVsOmHj1xyXG5cdFR3b1R5cGUgICA6bnVtYmVyOyAvL+WlluWKsTLnsbvlnosgMS3nianlk4EyLeijheWkh1xyXG5cdFR3b0lkICAgICA6bnVtYmVyOyAvL+WlluWKsTJJRFxyXG5cdFR3b051bSAgICA6bnVtYmVyOyAvL+WlluWKsTLmlbDph49cclxuXHRUaHJlZVR5cGUgOm51bWJlcjsgLy/lpZblirEz57G75Z6LIDEt54mp5ZOBMi3oo4XlpIdcclxuXHRUaHJlZUlkICAgOm51bWJlcjsgLy/lpZblirEzSURcclxuXHRUaHJlZU51bSAgOm51bWJlcjsgLy/lpZblirEz5pWw6YePXHJcblx0Rm91clR5cGUgIDpudW1iZXI7IC8v5aWW5YqxNOexu+WeiyAxLeeJqeWTgTIt6KOF5aSHXHJcblx0Rm91cklkICAgIDpudW1iZXI7IC8v5aWW5YqxNElEXHJcblx0Rm91ck51bSAgIDpudW1iZXI7IC8v5aWW5YqxNOaVsOmHj1xyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpY3Rpb25hcnk8VD4ge1xyXG4gICAgW0tleTogc3RyaW5nXTogVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50Q2xhc3Mge1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIExpc3RlbmVyOkZ1bmN0aW9uO1xyXG4gICAgVGFyZ2V0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcsIGxpc3RlbmVyOkZ1bmN0aW9uLCB0YXJnZXQ/KXtcclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLkxpc3RlbmVyID0gbGlzdGVuZXI7XHJcbiAgICAgICAgdGhpcy5UYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0ZW5lckNsYXNzIHtcclxuICAgIExpc3RlbmVycyA9IG5ldyBBcnJheTxGdW5jdGlvbj4oKTtcclxuICAgIFRhcmdldHMgPSBuZXcgQXJyYXk8Q29tbW9uLkV2ZW50RGlzcGF0aGVyPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXIobGlzdGVuZXI6RnVuY3Rpb24sIHRhcmdldD8pe1xyXG4gICAgICAgIHRoaXMuTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIHRoaXMuVGFyZ2V0cy5wdXNoKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIobGlzZW5lcjpGdW5jdGlvbil7XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuTGlzdGVuZXJzLmluZGV4T2YobGlzZW5lcik7XHJcbiAgICAgICAgaWYoaWR4ID49IDApe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5MaXN0ZW5lcnNbaWR4XTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuVGFyZ2V0c1tpZHhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudERpc3BhdGhlckludGVyZmFjZXtcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoa2V5LCBsaXNlbmVyOkZ1bmN0aW9uKTtcclxuICAgIGRpc3BhdGNoRXZlbnQoa2V5KTtcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxufVxyXG5cclxuLy/niYjmnKzmjqfliLZcclxuZXhwb3J0IGVudW0gVmVyc2lvbkNvbmZpZyB7XHJcbiAgICAvL+W8gOWPkeeJiOacrFxyXG4gICAgRGV2ZWxvcCA9IDAsXHJcbiAgICAvL+WvueWklueJiOacrFxyXG4gICAgUmVsZWFzZSA9IDEsXHJcbn1cclxuXHJcbi8v5rGg57G75Z6LXHJcbmV4cG9ydCBjb25zdCBQb29sVHlwZSA9IHtcclxuICAgIC8v6K6h5pe25ZmoXHJcbiAgICBUaW1lcjogJ1RpbWVyJyxcclxuICAgIC8v546p5a625aS06YOoXHJcbiAgICBIZWFkTW9kZWw6ICdIZWFkTW9kZWwnLFxyXG4gICAgLy/njqnlrrbouqvkvZNcclxuICAgIEJvZHlNb2RlbDogJ0JvZHlNb2RlbCcsXHJcbiAgICAvL+W8ueW5lVxyXG4gICAgUGFzc2J5VHh0OiAnUGFzc2J5VHh0JyxcclxuICAgIC8vZmFpcnlndWnlr7nosaFcclxuICAgIEZndWlPYmo6ICdGZ3VpT2JqJyxcclxuICAgIEhhbmQ6ICdIYW5kJyxcclxuICAgIERlc2s6ICdEZXNrJyxcclxufVxyXG5cclxuLy/msaDnianlk4HnsbvlnotcclxuZXhwb3J0IGNvbnN0IFBvb2xJdGVtS2V5ID0ge1xyXG4gICAgLy/njqnlrrbouqvkvZNcclxuICAgIEJvZHlTcGluZTogJ0JvZHlTcGluZScsICAgIFxyXG4gICAgLy/mjaLoo4XmqKHmnb9cclxuICAgIERyZXNzVGVtcGxhdGU6ICdEcmVzc1RlbXBsYXRlJywgICAgXHJcbn1cclxuXHJcbi8v6ZqP5py66K+t5Y+l57G75Z6LXHJcbmV4cG9ydCBjb25zdCBSYW5kV29yZFR5cGUgPSB7XHJcbiAgICAvL+a4oeWKq1xyXG4gICAgQ3VsdGl2YXRpb246IDEsXHJcbn1cclxuXHJcbi8v5bm/5ZGK57G75Z6LXHJcbmV4cG9ydCBlbnVtIEF3YXJkVHlwZSB7XHJcbiAgICBOb3QgPSAwLFxyXG4gICAgQUQgPSAxLFxyXG4gICAgU2hhcmUgPSAyXHJcbn1cclxuXHJcbi8v5bm/5ZGK5LyY5YWI57qn6YWN572uXHJcbmV4cG9ydCBlbnVtIEFkQ29uZmlnVHlwZSB7XHJcbiAgICAvL+a/gOWKseinhumikeS8mOWFiFxyXG4gICAgVmlkZW8gPSAwLFxyXG4gICAgLy/liIbkuqvkvJjlhYhcclxuICAgIFNoYXJlID0gMVxyXG59XHJcblxyXG4vL+WIhuS6q+ivreWPpeexu+Wei1xyXG5leHBvcnQgZW51bSBTaGFyZVdvcmRFbnVtIHtcclxuICAgIENhcmRXb3JkcyA9IDEsXHJcbiAgICBIYW1zdGVyV29yZHMgPSAyLFxyXG4gICAgQ29pbldvcmRzID0gMyxcclxuICAgIE90aGVyV29yZHMgPSA0LFxyXG59XHJcblxyXG4vL+aooeWei+aVsOaNruWumuS5iVxyXG5leHBvcnQgY2xhc3MgTW9kZWxEYXRhU3RydWN0IHtcclxuICAgIG1zcDpMYXlhLlNwcml0ZTNEO1xyXG4gICAgYW5pOkxheWEuQW5pbWF0b3I7XHJcbiAgICBhbmlTdGF0ZTpMYXlhLkFuaW1hdG9yUGxheVN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1zcDpMYXlhLlNwcml0ZTNELCBhbmk6TGF5YS5BbmltYXRvciwgYW5pU3RhdGU6TGF5YS5BbmltYXRvclBsYXlTdGF0ZSl7XHJcbiAgICAgICAgdGhpcy5tc3AgPSBtc3A7XHJcbiAgICAgICAgdGhpcy5hbmkgPSBhbmk7XHJcbiAgICAgICAgdGhpcy5hbmlTdGF0ZSA9IGFuaVN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WFrOWFseehruiupOW8ueeql+exu+Wei1xyXG5leHBvcnQgY29uc3QgQ29uZmlybVdpbmRvd1R5cGUgPSB7XHJcbiAgICAvL+aWh+Wtl1xyXG4gICAgQ29udGVudDogMSxcclxuICAgIC8v5aWW5Yqx54mp5ZOBXHJcbiAgICBSZXdhcmQ6IDIsXHJcbiAgICAvL+aWh+WtlyvlpZblirFcclxuICAgIENvbnRlbnRBbmRSZXdhcmQ6IDMsXHJcbn1cclxuXHJcbi8v5by55Ye656qX5Y+j5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpbmRvd0RhdGEge1xyXG4gICAgQ29udGVudDpzdHJpbmdbXTtcclxuICAgIFdpbmRvd1R5cGU6bnVtYmVyO1xyXG4gICAgWWVzQnRuQ29udGVudDpzdHJpbmc7XHJcbiAgICBZZXNCdG5DYWxsYmFjazpGdW5jdGlvbjtcclxuICAgIENhbmNlbEJ0bkNvbnRlbnQ6c3RyaW5nO1xyXG4gICAgUmV3YXJkRGF0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50OnN0cmluZ1tdLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIHdpbmRvd1R5cGU/Om51bWJlciwgcmV3YXJkRGF0YT8sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5Db250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLlllc0J0bkNhbGxiYWNrID0geWVzQnRuQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5ZZXNCdG5Db250ZW50ID0gYnRuWWVzVHh0PyBidG5ZZXNUeHQ6ICfnoa7lrponO1xyXG4gICAgICAgIHRoaXMuQ2FuY2VsQnRuQ29udGVudCA9IGJ0bkNhbmNlbFR4dD8gYnRuQ2FuY2VsVHh0OiAn5Y+W5raIJztcclxuICAgICAgICB0aGlzLldpbmRvd1R5cGUgPSB3aW5kb3dUeXBlO1xyXG4gICAgICAgIHRoaXMuUmV3YXJkRGF0YSA9IHJld2FyZERhdGE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsQ29uZmlnIHtcclxuICAgIHN0YXRpYyByZWFkb25seSBDdWx0aXZhdGlvbl9GbHlfSW50ZXJ2YWwgPSA2OyAgICAvL+S/ruS4uumjmOWtl+mXtOmalC/mr6vnp5JcclxuICAgIHN0YXRpYyByZWFkb25seSBBZG9iZV9Qcm9kdWN0aW9uX0ludGVydmFsID0gMTA7ICAgIC8v5rSe5bqc55Sf5Lqn6Ze06ZqUL+avq+enklxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFRvd2VyX01heF9JbnZpdGVfTnVtID0gNDsgIC8v6ZWH5aaW5aGU5pyA5aSn5Y+v6YKA6K+35pWw6YePXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgTWF4X1JlYWR5ID0gODtcclxuICAgIHN0YXRpYyByZWFkb25seSBNYXhfTGV2ZWwgPSA4O1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IE1heF9CYXR0bGUgPSA5O1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgc3RhdGljIElzQ2hvb3NlZFNlcnZpY2UgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBJc1NpbVByb2dyZXNzRW5kID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIFJld2FyZEFkTGlzdCA9IFtcclxuICAgICAgICAnYWR1bml0LWQ5NTA2Yjg1NmRhNjUxZDknLFxyXG4gICAgICAgICdhZHVuaXQtMjc3YTE0OTBiZGQ5NjU4NicsXHJcbiAgICAgICAgJ2FkdW5pdC0yNGM5ODFiYjZlMjYxYzEyJyxcclxuICAgICAgICAnYWR1bml0LWJhMTQ3NDI0MmUwYjA3Y2MnLFxyXG4gICAgICAgICdhZHVuaXQtNWVkYzUyNTZiODk5NDZjZSdcclxuICAgIF07XHJcblxyXG4gICAgc3RhdGljIEJhbm5lckFkTGlzdCA9IFtcclxuICAgICAgICAnYWR1bml0LTY0ZjMyZWJmMzkxYTNlZWEnLFxyXG4gICAgICAgICdhZHVuaXQtZjFiZDk3MDI5NDEyZGMzNScsXHJcbiAgICAgICAgJ2FkdW5pdC03OTIxMDlmYWM2OGVmMDhiJyxcclxuICAgICAgICAnYWR1bml0LWVkOGYwMGRkNDJkZDJkZDgnLFxyXG4gICAgICAgICdhZHVuaXQtYTkyNGMyOTZlYTliMjNhNSdcclxuICAgIF07XHJcblxyXG4gICAgc3RhdGljIHJlYWRvbmx5IE1pbmlQcm9ncmFtQXBwSWQgPSB7XHJcbiAgICAgICAgTWFpa2U6ICd3eDZmMWI5YjgxNDY3Y2MzZGEnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+eUqOaIt+aYr+WQpuW3suaOiOadg1xyXG4gICAgc3RhdGljIElzV3hBdXRoID0gdHJ1ZTtcclxuXHJcbiAgICAvL+WtmOWCqOeUqOaIt+WQjVxyXG4gICAgc3RhdGljIEdldEFjb3VudE5hbWUoKXtcclxuICAgICAgICByZXR1cm4gQ29tbW9uLmdldExvY2FsU3RvcmFnZShcIkFjb3VudE5hbWVcIikgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFNhdmVBY291bnROYW1lKF92YWx1ZSl7XHJcbiAgICAgICAgQ29tbW9uLnNhdmVMb2NhbFN0b3JhZ2UoXCJBY291bnROYW1lXCIsIF92YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTG9jYWxDb250ZW50ID0ge1xyXG4gICAgSW52aXRlOiAn6YKA6K+3JyxcclxuXHJcbiAgICBOZXRFcnJvcjogJ+e9kee7nOW8gOWwj+W3ricsXHJcblxyXG4gICAgWWVzOiAn56Gu5a6aJyxcclxuXHJcbiAgICBDb21pbmdTb29uOiAn5pqC5pyq5byA5pS+JyxcclxuXHJcbiAgICBHZXRBd2FyZDogJ+mihuWPlicsXHJcblxyXG4gICAgRmx5aW5nVGlwc0RlZmF1bHQ6ICfmga3llpzojrflvpflpZblirEnLFxyXG5cclxuICAgIENvbnNBd2FyZDogXCLmga3llpzojrflvpdcIixcclxuXHJcbiAgICBTaGFyZUZhaWxUaXBzOiBcIuWIhuS6q+ebuOWQjOaci+WPi+WciOaXoOazleiOt+W+l+WlluWKsVwiLFxyXG59IiwiZXhwb3J0IGxldCBsb2dpblJlc1VybHMgPSBbXHJcbiAgICB7IHVybDogJ3Jlcy9DaG9vc2VTZXJ2aWNlL0Nob29zZVNlcnZpY2UudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9Mb2FkaW5nVUkvTG9hZGluZ1VJLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvTG9hZGluZ1VJL0xvYWRpbmdVSV9hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuXSIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVxYm9keUJhc2V7XHJcbiAgICBzdGF0aWMgcmVxYm9keXM6Q29uZmlnLkRpY3Rpb25hcnk8SHR0cFJlcWJvZHlCYXNlPiA9IHt9O1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIE1vZHVsZUNvZGU6IG51bWJlcjtcclxuICAgIFJlcUNvZGU6IG51bWJlcjtcclxuICAgIFNlc3Npb246IHN0cmluZztcclxuICAgIEFjY291bnRLZXk6IHN0cmluZztcclxuICAgIFJlcURhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6c3RyaW5nLCBtb2RDb2RlOm51bWJlciwgcmVxQ29kZTpudW1iZXIsIHNlc3Npb24/OnN0cmluZywgYWNjTmFtZT86c3RyaW5nLCByZXFkYXRhPyl7XHJcbiAgICAgICAgaWYodHlwZW9mKHJlcWRhdGEpID09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAvL+WmguW3sui9rOaNouWImei9rOWbnkpTT05cclxuICAgICAgICAgICAgcmVxZGF0YSA9IEpTT04ucGFyc2UocmVxZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLk1vZHVsZUNvZGUgPSBtb2RDb2RlO1xyXG4gICAgICAgIHRoaXMuUmVxQ29kZSA9IHJlcUNvZGU7XHJcbiAgICAgICAgdGhpcy5TZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLkFjY291bnRLZXkgPSBhY2NOYW1lO1xyXG4gICAgICAgIHRoaXMuUmVxRGF0YSA9IHJlcWRhdGE7XHJcblxyXG4gICAgICAgIEh0dHBSZXFib2R5QmFzZS5yZXFib2R5c1trZXldID0gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuLy/or7fmsYLnu5PmnoRcclxuZXhwb3J0IHZhciBSZXFEYXRhID0ge1xyXG4gICAgTG9naW46e1wiTmFtZVwiOiBcInRhbmR5XCJ9LFxyXG4gICAgQWRvYmVQb29sVXBncmFkZTp7XCJUeXBlXCI6IDF9LFxyXG4gICAgSm9pblNlY3Q6e1wiR3JvdXBTdGFnZUlkXCI6IDEsXCJHcm91cElkXCI6IDF9LFxyXG4gICAgTGVhcm5TZWN0S2Y6e1wiU2tpbGxJZFwiOiAxfSxcclxuICAgIFVwZ3JhZGVLb25nZmE6e1wiU2tpbGxUeXBlXCI6MSxcIlNraWxsSWRcIjogMX0sXHJcbiAgICBTdGFydFNlY3RUYXNrOntcIlRhc2tJZFwiOjF9LFxyXG4gICAgR3JhYlNlY3RUYXNrQXdhcmQ6e1wiVGFza0lkXCI6MX0sXHJcbiAgICBTZWxsQmFnSXRlbTp7XCJQb3NpdGlvblwiOiAxLFwiVHlwZVwiOiAxLFwiSWRcIjogMSxcIk51bVwiOiAxfSxcclxuICAgIFVzZUJhZ0l0ZW06e1wiUG9zaXRpb25cIjogMSxcIlR5cGVcIjogMSxcIklkXCI6IDEsXCJOdW1cIjogMX0sXHJcbiAgICBHbUFkZEJhZ0l0ZW06e1wiVHlwZVwiOiAxLFwiSWRcIjogMSxcIk51bVwiOiAxfSxcclxuICAgIC8v5oyR5oiY6ZWH5aaW5aGUXHJcbiAgICBHb01vbnN0ZXJUb3dlcjp7XCJDaGFsbGVuZ2VMZXZlbFwiOiAxLCBcIkhlbHBIZXJvc1wiOiBuZXcgQXJyYXk8SGVscEhlcm9zRGF0YUNsYXNzPigpfSxcclxufVxyXG5cclxuLy/plYflppbloZTpgoDor7fku5nlj4vmlbDmja5cclxuZXhwb3J0IGNsYXNzIEhlbHBIZXJvc0RhdGFDbGFzcyB7XHJcbiAgICBLZXk6c3RyaW5nO1xyXG4gICAgSXNSb2JvdDpib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcsIGlzUm9ib3Q6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5LZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5Jc1JvYm90ID0gaXNSb2JvdDtcclxuICAgIH1cclxuXHJcbiAgICAvL+aXoOWKqeaImOiLsembhFxyXG4gICAgc3RhdGljIGdldCBOb25lSGVscEhlcm8oKXtcclxuICAgICAgICByZXR1cm4gW0VtcHR5SGVscEhlcm8sIEVtcHR5SGVscEhlcm8sIEVtcHR5SGVscEhlcm8sIEVtcHR5SGVscEhlcm9dO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WKqeaImOiLsembhOepuuS9jVxyXG5leHBvcnQgY29uc3QgRW1wdHlIZWxwSGVybyA9IG5ldyBIZWxwSGVyb3NEYXRhQ2xhc3MoJycsIGZhbHNlKTtcclxuXHJcbmV4cG9ydCBlbnVtIFJlcWJvZHlLZXl7XHJcbiAgICBDb25maWcgPSBcIkNvbmZpZ1wiLFxyXG4gICAgTG9naW4gPSBcIkxvZ2luXCIsXHJcbiAgICBVcGdyYWRlID0gXCJVcGdyYWRlXCIsXHJcbiAgICBBZG9iZVVpSW5mbyA9IFwiQWRvYmVVaUluZm9cIixcclxuICAgIEFkb2JlSGlyZVdvcmtlciA9IFwiQWRvYmVIaXJlV29ya2VyXCIsXHJcbiAgICBBZG9iZUFkZFdvcmtlciA9IFwiQWRvYmVBZGRXb3JrZXJcIixcclxuICAgIEFkb2JlUmVkdWNlV29ya2VyID0gXCJBZG9iZVJlZHVjZVdvcmtlclwiLFxyXG4gICAgQWRvYmVVcFN0b25lID0gXCJBZG9iZVVwU3RvbmVcIixcclxuICAgIEFkb2JlVXBGb29kID0gXCJBZG9iZVVwRm9vZFwiLFxyXG4gICAgQWRvYmVVcFdvb2QgPSBcIkFkb2JlVXBXb29kXCIsXHJcbiAgICBBZG9iZVVwSXJvbiA9IFwiQWRvYmVVcElyb25cIixcclxufVxyXG5cclxuZXhwb3J0IGxldCBOZXRDb25maWcgPSB7XHJcbiAgICBSZXF1ZXN0VXJsOlwiaHR0cDovLzcubGlnaHRwYXcuY29tL3RydXRoXCIsXHJcblxyXG4gICAgLy8gSHR0cFJlcXVlc3RVcmw6XCJodHRwOi8vNzA2LmxpZ2h0cGF3LmNvbTo3NzIwL2hhcHB5X3RyYXZlbFwiLFxyXG5cclxuICAgIEh0dHBSZXF1ZXN0VXJsOlwiaHR0cHM6Ly85ejlhY3Y5MDFnLmV4ZWN1dGUtYXBpLmNuLW5vcnRod2VzdC0xLmFtYXpvbmF3cy5jb20uY24vYmV0YVwiLFxyXG4gICAgXHJcbiAgICBMb2NhbFJlcXVlc3RVcmw6XCJodHRwOi8vNy5saWdodHBhdy5jb20vdHJ1dGhcIixcclxuXHJcbiAgICBMb2NhbFdlY2hhdFJlcXVlc3RVcmw6XCJodHRwOi8vc3ZmMzdlLm5hdGFwcGZyZWUuY2MvaGFwcHlfdHJhdmVsXCIsXHJcblxyXG4gICAgR01Vcmw6XCJodHRwOi8vNy5saWdodHBhdy5jb20vaGFwcHlfdHJhdmVsL3Jld2FyZFwiLFxyXG5cclxuICAgIFRlbXBOYW1lOlwiXCIsXHJcbn1cclxuXHJcbi8v6L+e5o6l54q25oCBXHJcbmV4cG9ydCBlbnVtIEh0dHBDb25uZWN0U3RhdGUge1xyXG4gICAgRXJyb3IgPSAwLFxyXG4gICAgU3VjY2VzcyA9IDEsXHJcbn1cclxuXHJcbi8v5ZON5bqU57uT5p6E5L2TXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzcERhdGFTdHJ1Y3Qge1xyXG4gICAgUmVzcENvZGU6IG51bWJlcjtcclxuICAgIFJlc3BNc2c6IHN0cmluZztcclxuICAgIFJlc3BEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzcERhdGEoZGF0YTpSZXNwRGF0YVN0cnVjdCl7XHJcbiAgICByZXR1cm4gZGF0YSAmJiBkYXRhLlJlc3BEYXRhO1xyXG59XHJcblxyXG4vL+aLieWPlumFjee9ruivt+axguS9k1xyXG5leHBvcnQgY2xhc3MgQ29uZmlnRGF0YVBhcmFtIHtcclxuICAgIFRhYmxlSWQ6IG51bWJlcjtcclxuICAgIFRhYmxlTmFtZTogc3RyaW5nO1xyXG4gICAgVmVyc2lvbjogbnVtYmVyO1xyXG4gICAgRGF0YTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6bnVtYmVyLCB2ZXJzaW9uOm51bWJlciwgbmFtZT86c3RyaW5nLCBkYXRhPyl7XHJcbiAgICAgICAgdGhpcy5UYWJsZUlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5WZXJzaW9uID0gdmVyc2lvbjtcclxuICAgICAgICBpZihuYW1lKXtcclxuICAgICAgICAgICAgdGhpcy5UYWJsZU5hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgdGhpcy5EYXRhID0gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgQ29uZmlnUmVxRGF0YSA9IG5ldyBBcnJheTxDb25maWdEYXRhUGFyYW0+KCk7XHJcblxyXG4vL+eZu+W9leivt+axguS9k1xyXG5leHBvcnQgY2xhc3MgTG9naW5SZXFEYXRhIHtcclxuICAgIE5hbWU/OiBzdHJpbmc7XHJcbiAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIEpzQ29kZT86IHN0cmluZztcclxuICAgIEVuY3J5cHRlZERhdGE/OiBzdHJpbmc7XHJcbiAgICBJdj86IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lPzpzdHJpbmcsIHB3PzpzdHJpbmcsIGpzY29kZT86c3RyaW5nLCBlbmNyeXB0ZWREYXRhPzpzdHJpbmcsIGl2PzpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLk5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuUGFzc3dvcmQgPSBwdztcclxuICAgICAgICB0aGlzLkpzQ29kZSA9IGpzY29kZTtcclxuICAgICAgICB0aGlzLkVuY3J5cHRlZERhdGEgPSBlbmNyeXB0ZWREYXRhO1xyXG4gICAgICAgIHRoaXMuSXYgPSBpdjtcclxuICAgIH1cclxufVxyXG5cclxuLy/nmbvlvZXlk43lupTmlbDmja7kvZNcclxuZXhwb3J0IHR5cGUgTG9naW5SZXNwRGF0YVN0cnVjdCA9IHtcclxuICAgIFwiQWNjb3VudEJhc2VJbmZvXCI6IHtcclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiVmVyaWZ5U2Vzc2lvblwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJOaWNrTmFtZVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJBdmF0YXJcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiQ3JlYXRlVGltZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJEYW9oZW5nXCI6IG51bWJlcixcclxuICAgICAgICBcIkxpbmdsaVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHZW5ndVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJUaXBvXCI6IG51bWJlcixcclxuICAgICAgICBcIlNoZW5mYVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXdXhpbmdcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRnV5dWFuXCI6IG51bWJlcixcclxuICAgICAgICBcIlppemhpXCI6IG51bWJlcixcclxuICAgICAgICBcIlpoZW5neWlcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiWGllZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXZWl3YW5nXCI6IG51bWJlcixcclxuICAgICAgICBcIkdyb3VwR29uZ3hpYW5cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiWGlhbnl1XCI6IG51bWJlcixcclxuICAgIH0sXHJcbiAgICBcIlhpdXdlaUluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJTdGFnZVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJDdXJyZW50VmFsdWVcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRWZmaWNpZW5jeVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTZXR0bGVtZW50VGltZVwiOiBudW1iZXJcclxuICAgIH0sXHJcbiAgICBcIlBhZ29kYUluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJOb3JtYWxNdWx0aXBsZUluZm9zXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJTdGFydFN0YW1wXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiRW5kU3RhbXBcIjogbnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiTm9ybWFsU3RhcnRUaW1lXCI6IG51bWJlcixcclxuICAgICAgICBcIk5vcm1hbFRpbWVzXCI6IG51bWJlcixcclxuICAgICAgICBcIk5vcm1hbExlc3RUaW1lXCI6IG51bWJlcixcclxuICAgICAgICBcIkxlYWRlck11bHRpcGxlSW5mb3NcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIlN0YXJ0U3RhbXBcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJFbmRTdGFtcFwiOiBudW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJMZWFkZXJTdGFydFRpbWVcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiTGVhZGVyVGltZXNcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiTGVhZGVyTGVzdFRpbWVcIjogbnVtYmVyXHJcbiAgICB9LFxyXG4gICAgXCJEb25nZnVJbmZvXCI6IHsgLy/otKbmiLfmnIDmlrDmtJ7lupzkv6Hmga9cclxuICAgICAgICBcIkFjY291bnRLZXlcIjogc3RyaW5nLFxyXG4gICAgICAgIFwiVG90YWxTZXJ2YW50TnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIlN0b25lTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTdG9uZU51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTdG9uZVNlcnZhbnROdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRm9vZExldmVsSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiRm9vZE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJGb29kU2VydmFudE51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXb29kTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJXb29kTnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIldvb2RTZXJ2YW50TnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIklyb25MZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIklyb25OdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiSXJvblNlcnZhbnROdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU2V0dGxlbWVudFRpbWVcIjogbnVtYmVyXHJcbiAgICB9LFxyXG4gICAgXCJQb29sSW5mb1wiOiB7XHJcbiAgICAgICAgXCJBY2NvdW50S2V5XCI6IHN0cmluZyxcclxuICAgICAgICBcIlBvb2xMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIlJlaWtpTnVtXCI6IG51bWJlcixcclxuICAgICAgICBcIkdvbGRMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIldvb2RMZXZlbElkXCI6IG51bWJlcixcclxuICAgICAgICBcIldhdGVyTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJGaXJlTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTb2lsTGV2ZWxJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTZXR0bGVtZW50VGltZVwiOiBudW1iZXIsXHJcbiAgICB9LFxyXG4gICAgXCJHcm91cEluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJHcm91cElkXCI6IG51bWJlcixcclxuICAgICAgICBcIkdyb3VwU2tpbGxOdW1cIjogbnVtYmVyLFxyXG4gICAgICAgIFwiU3R1ZHlTa2lsbHNcIjogW1xyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgXCJTa2lsbElkXCI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgXCJTa2lsbFR5cGVcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICBcIkxldmVsXCI6IG51bWJlclxyXG4gICAgICAgICAgIH1cclxuICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBcIlN0b3JhZ2VJbmZvXCI6IHtcclxuICAgICAgICBcIlN3b3JkSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiSGFpcnBpbklkXCI6IG51bWJlcixcclxuICAgICAgICBcIkNsb3RoZXNJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJTaG9lc0lkXCI6IG51bWJlcixcclxuICAgICAgICBcIlJpbmdJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJKYWRlSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiQnJhY2VsZXRJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJDb21wYXNzSWRcIjogbnVtYmVyLFxyXG4gICAgICAgIFwiT3Blbk51bVwiOiBudW1iZXIsXHJcbiAgICAgICAgXCJHb29kSW5mb3NcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIlR5cGVcIjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJJZFwiOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcIk51bVwiOiBudW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgXCJEYW1vbkluZm9cIjoge1xyXG4gICAgICAgIFwiQWNjb3VudEtleVwiOiBzdHJpbmcsXHJcbiAgICAgICAgXCJDaGFsbGVuZ2VMZXZlbFwiOiBudW1iZXJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkb2JlQWRkV29ya2VyUmVxRGF0YSB7XHJcbiAgICBXb3JrVHlwZTpudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod29ya1R5cGU6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5Xb3JrVHlwZSA9IHdvcmtUeXBlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPYmplY3RDb25maWcgPSB7XHJcbiAgICBERVNLX1BPUzogbmV3IExheWEuVmVjdG9yMygyLjUsIDQsIC01KSxcclxuICAgIERFU0tfRU5EX1BPUzogbmV3IExheWEuVmVjdG9yMygyLjUsIC0xLCAtNSksXHJcbiAgICBERVNLX0VOVEVSX1BPUzogbmV3IExheWEuVmVjdG9yMyg2LCA0LCAtNSksXHJcbiAgICBIQU5EX1BPUzogbmV3IExheWEuVmVjdG9yMygtMywgLTIsIC01KSxcclxuICAgIEhBTkRfRU5EX1BPUzogbmV3IExheWEuVmVjdG9yMygwLCAtMiwgLTUpLFxyXG4gICAgREVTS19TSVpFOiBuZXcgTGF5YS5WZWN0b3IzKDAuMiwgMywgMiksXHJcbiAgICBIQU5EX1NJWkU6IG5ldyBMYXlhLlZlY3RvcjMoNiwgMC41LCAwLjUpLFxyXG4gICAgLy9zcGVlZFxyXG4gICAgU1BFRURfRk9SV0FSRF9ERVNLOiBuZXcgTGF5YS5WZWN0b3IzKDAsIC0xMCwgMCksXHJcbiAgICBTUEVFRF9CQUNLX0RFU0s6IG5ldyBMYXlhLlZlY3RvcjMoMCwgMTAsIDApLFxyXG4gICAgU1BFRURfSEFORDogMC4wMyxcclxufSIsImxldCB1cmxzID0gW1xyXG4gICAgeyB1cmw6ICdyZXMvQWRvYmUvQWRvYmUudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9BZG9iZS9BZG9iZV9hdGxhczAuanBnJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL0Fkb2JlL0Fkb2JlX2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvYXRsYXMvY29tcC5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQ2hlc3NCb2FyZC9DaGVzc0JvYXJkLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQ2hlc3NCb2FyZC9DaGVzc0JvYXJkX2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvQ2hvb3NlU2VydmljZS9DaG9vc2VTZXJ2aWNlLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvSWNvbnMvSWNvbnMudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9JY29ucy9JY29uc19hdGxhczIucG5nJywgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0UgfSxcclxuICAgIHsgdXJsOiAncmVzL01haW5NZW51L01haW5NZW51LnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvTWFpbk1lbnUvTWFpbk1lbnVfYXRsYXMyLnBuZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QbGF5ZXIvUGxheWVyLnR4dCcsIHR5cGU6IExheWEuTG9hZGVyLkJVRkZFUiB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpYy50eHQnLCB0eXBlOiBMYXlhLkxvYWRlci5CVUZGRVIgfSxcclxuICAgIHsgdXJsOiAncmVzL1B1YmxpYy9QdWJsaWNfYXRsYXMxLmpwZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QdWJsaWMvUHVibGljX2F0bGFzMV8xLmpwZycsIHR5cGU6IExheWEuTG9hZGVyLklNQUdFIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9QdWJsaWMvUHVibGljX2F0bGFzMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczJfMS5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczJfMi5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUHVibGljL1B1YmxpY19hdGxhczJfMy5wbmcnLCB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRSB9LFxyXG4gICAgeyB1cmw6ICdyZXMvUm9hZFRvRGlldHkvUm9hZFRvRGlldHkudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbiAgICB7IHVybDogJ3Jlcy9TZWN0L1NlY3QudHh0JywgdHlwZTogTGF5YS5Mb2FkZXIuQlVGRkVSIH0sXHJcbl1cclxuZXhwb3J0IHt1cmxzfTsiLCJcclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29uZmlnID0ge1xyXG4gICAgSURFTDogJ0lERUwnLCAgLy/lvoXmnLpcclxuICAgIERFQUQ6ICdERUFEJyxcclxuICAgIEJBQ0tfUEFTU0VEOiAnQkFDS19QQVNTRUQnLCAgICAvL+W3sue8qeWbnuWuieWFqOWMulxyXG4gICAgTU9WRV9GT1JXQVJEOiAnTU9WRV9GT1JXQVJEJywgICAgLy/liY3kvLhcclxuICAgIE1PVkVfQkFDSzogJ01PVkVfQkFDSycsICAgIC8v57yp5ZueXHJcbiAgICBTVE9QOiAnU1RPUCcsICAgIC8v5YGc5q2i6L+Q5YqoXHJcbiAgICBERVNLX0xFQVZFOiAnREVTS19MRUFWRScsICAgIC8v5YiA5Y+w56a75Zy6XHJcbiAgICBERVNLX0VOVEVSOiAnREVTS19FTlRFUicsICAgIC8v5YiA5Y+w6L+b5Zy6XHJcbn0iLCJcclxuZXhwb3J0IGludGVyZmFjZSBWaWV3Q29uZmlne1xyXG4gICAgS2V5OiBzdHJpbmcsXHJcbiAgICBQa2dBZHJzOiBzdHJpbmcsXHJcbiAgICBQa2c6IHN0cmluZyxcclxuICAgIENvbTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBWaWV3S2l0ID0ge1xyXG4gICAgLy/liqDovb3oj4roirFcclxuICAgIExvYWRpbmdNYWluOiB7XHJcbiAgICAgICAgS2V5OiBcIkxvYWRpbmdNYWluXCIsXHJcbiAgICAgICAgUGtnOiBcIkxvYWRpbmdVSVwiLFxyXG4gICAgICAgIENvbTpcIkxvYWRpbmdNYWluXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/pgInmi6nmnI3liqHlmahcclxuICAgIENob29zZVNlcnZpY2U6e1xyXG4gICAgICAgIEtleTogXCJDaG9vc2VTZXJ2aWNlXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJDaG9vc2VTZXJ2aWNlL0Nob29zZVNlcnZpY2VcIixcclxuICAgICAgICBQa2c6IFwiQ2hvb3NlU2VydmljZVwiLFxyXG4gICAgICAgIENvbTpcIkNob29zZVNlcnZpY2VcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+ivu+adoei/m+W6plxyXG4gICAgTG9hZGluZ1Byb2dyZXNzOiB7XHJcbiAgICAgICAgS2V5OiBcIkxvYWRpbmdQcm9ncmVzc1wiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwicmVzL0xvYWRpbmdVSS9Mb2FkaW5nVUlcIixcclxuICAgICAgICBQa2c6IFwiTG9hZGluZ1VJXCIsXHJcbiAgICAgICAgQ29tOlwiTG9hZGluZ1Byb2dyZXNzXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/kuLvnlYzpnaJcclxuICAgIE1haW5NZW51OiB7XHJcbiAgICAgICAgS2V5OiBcIk1haW5NZW51XCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJyZXMvTWFpbk1lbnUvTWFpbk1lbnVcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJNYWluTWVudVwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5L+u54K85pON5L2cXHJcbiAgICBDdWx0aXZhdGlvbkluZm86IHtcclxuICAgICAgICBLZXk6IFwiQ3VsdGl2YXRpb25JbmZvXCIsXHJcbiAgICAgICAgUGtnQWRyczogXCJyZXMvTWFpbk1lbnUvTWFpbk1lbnVcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJDdWx0aXZhdGlvbkluZm9cIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mjmOWtl1xyXG4gICAgVGlwc0xhYmVsOiB7XHJcbiAgICAgICAgS2V5OiBcIlRpcHNMYWJlbFwiLFxyXG4gICAgICAgIFBrZ0FkcnM6IFwiUHVibGljL1B1YmxpY1wiLFxyXG4gICAgICAgIFBrZzogXCJQdWJsaWNcIixcclxuICAgICAgICBDb206XCJUaXBzTGFiZWxcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mjmOWtl1xyXG4gICAgUmVzUHJvZHVjdGlvblRpcHM6IHtcclxuICAgICAgICBLZXk6IFwiUmVzUHJvZHVjdGlvblRpcHNcIixcclxuICAgICAgICBQa2dBZHJzOiBcIkFkb2JlL0Fkb2JlXCIsXHJcbiAgICAgICAgUGtnOiBcIkFkb2JlXCIsXHJcbiAgICAgICAgQ29tOlwiUmVzUHJvZHVjdGlvblRpcHNcIlxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy/mtJ7lupxcclxuICAgIEFkb2JlTWFpbjoge1xyXG4gICAgICAgIEtleTogXCJBZG9iZU1haW5cIixcclxuICAgICAgICBQa2dBZHJzOiBcIkFkb2JlL0Fkb2JlXCIsXHJcbiAgICAgICAgUGtnOiBcIkFkb2JlXCIsXHJcbiAgICAgICAgQ29tOlwiQWRvYmVNYWluXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/lhaznlKjnoa7orqTnqpflj6NcclxuICAgIFB1YmxpY0NvbmZpcm1hdGlvbjoge1xyXG4gICAgICAgIEtleTogXCJQdWJsaWNDb25maXJtYXRpb25cIixcclxuICAgICAgICBQa2dBZHJzOiBcIlB1YmxpYy9QdWJsaWNcIixcclxuICAgICAgICBQa2c6IFwiUHVibGljXCIsXHJcbiAgICAgICAgQ29tOlwiUHVibGljQ29uZmlybWF0aW9uXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/mtJ7lupzljYfnuqdcclxuICAgIEFkb2JlVXBncmFkZToge1xyXG4gICAgICAgIEtleTogXCJBZG9iZVVwZ3JhZGVcIixcclxuICAgICAgICBQa2dBZHJzOiBcIkFkb2JlL0Fkb2JlXCIsXHJcbiAgICAgICAgUGtnOiBcIkFkb2JlXCIsXHJcbiAgICAgICAgQ29tOlwiQWRvYmVVcGdyYWRlXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v5Yqg5YWl6Zeo5rS+XHJcbiAgICBKb2luU2VjdDoge1xyXG4gICAgICAgIEtleTogXCJKb2luU2VjdFwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiSm9pblNlY3RcIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/liqDlhaXpl6jmtL5cclxuICAgIFNlY3RNYWluOiB7XHJcbiAgICAgICAgS2V5OiBcIlNlY3RNYWluXCIsXHJcbiAgICAgICAgUGtnOiBcIlNlY3RcIixcclxuICAgICAgICBDb206XCJTZWN0TWFpblwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+mXqOa0vuS/rueCvOWhlFxyXG4gICAgVHJhaW5Ub3dlcjoge1xyXG4gICAgICAgIEtleTogXCJUcmFpblRvd2VyXCIsXHJcbiAgICAgICAgUGtnOiBcIlNlY3RcIixcclxuICAgICAgICBDb206XCJUcmFpblRvd2VyXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v6Zeo5rS+5Lu75YqhXHJcbiAgICBTZWN0VGFzazoge1xyXG4gICAgICAgIEtleTogXCJTZWN0VGFza1wiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiU2VjdFRhc2tcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+WtpuS5oOWKn+azlVxyXG4gICAgTGVhcm5Lb25nZmE6IHtcclxuICAgICAgICBLZXk6IFwiTGVhcm5Lb25nZmFcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIkxlYXJuS29uZ2ZhXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v5a2m5Lmg5Yqf5rOVXHJcbiAgICBVcGdyYWRlS29uZ2ZhOiB7XHJcbiAgICAgICAgS2V5OiBcIlVwZ3JhZGVLb25nZmFcIixcclxuICAgICAgICBQa2c6IFwiU2VjdFwiLFxyXG4gICAgICAgIENvbTpcIlVwZ3JhZGVLb25nZmFcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+inkuiJslxyXG4gICAgUGxheWVyTWFpbjoge1xyXG4gICAgICAgIEtleTogXCJQbGF5ZXJNYWluXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIlBsYXllck1haW5cIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/op5LoibLlsZ7mgKdcclxuICAgIFBsYXllckF0dHJpYnV0aW9uOiB7XHJcbiAgICAgICAgS2V5OiBcIlBsYXllckF0dHJpYnV0aW9uXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIlBsYXllckF0dHJpYnV0aW9uXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/lop7liqDlgqjnianooovnqbrpl7RcclxuICAgIEFkZEJhZ051bToge1xyXG4gICAgICAgIEtleTogXCJBZGRCYWdOdW1cIixcclxuICAgICAgICBQa2c6IFwiUGxheWVyXCIsXHJcbiAgICAgICAgQ29tOlwiQWRkQmFnTnVtXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/kv67ngrzluK7liqlcclxuICAgIEN1bHRpdmF0aW9uRWZmaWNpZW5jeToge1xyXG4gICAgICAgIEtleTogXCJDdWx0aXZhdGlvbkVmZmljaWVuY3lcIixcclxuICAgICAgICBQa2c6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICBDb206XCJDdWx0aXZhdGlvbkVmZmljaWVuY3lcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL0dN5Yqg54mp5ZOBXHJcbiAgICBHbUFkZEJhZ0l0ZW06IHtcclxuICAgICAgICBLZXk6IFwiR21BZGRCYWdJdGVtXCIsXHJcbiAgICAgICAgUGtnOiBcIlBsYXllclwiLFxyXG4gICAgICAgIENvbTpcIkdtQWRkQmFnSXRlbVwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+S7memAlOS4u+eVjOmdolxyXG4gICAgUm9hZFRvRGlldHlNYWluOiB7XHJcbiAgICAgICAgS2V5OiBcIlJvYWRUb0RpZXR5TWFpblwiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIlJvYWRUb0RpZXR5TWFpblwiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+aImOaWl+i/h+eoi1xyXG4gICAgQmF0dGxlSW5mbzoge1xyXG4gICAgICAgIEtleTogXCJCYXR0bGVJbmZvXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiQmF0dGxlSW5mb1wiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+aJq+iNoeS7memAlFxyXG4gICAgU3dlZXBDaGFwdGVyczoge1xyXG4gICAgICAgIEtleTogXCJTd2VlcENoYXB0ZXJzXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiU3dlZXBDaGFwdGVyc1wiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6ZWH5aaW5aGUXHJcbiAgICBNb25zdGVyVG93ZXI6IHtcclxuICAgICAgICBLZXk6IFwiTW9uc3RlclRvd2VyXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiTW9uc3RlclRvd2VyXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/plYflppbloZTpppbmnYDmppxcclxuICAgIEZpcnN0Qmxvb2RSYW5rOiB7XHJcbiAgICAgICAgS2V5OiBcIkZpcnN0Qmxvb2RSYW5rXCIsXHJcbiAgICAgICAgUGtnOiBcIlJvYWRUb0RpZXR5XCIsXHJcbiAgICAgICAgQ29tOlwiRmlyc3RCbG9vZFJhbmtcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+S7meWPi+WciFxyXG4gICAgRnJpZW5kQ2lyY2xlOiB7XHJcbiAgICAgICAgS2V5OiBcIkZyaWVuZENpcmNsZVwiLFxyXG4gICAgICAgIFBrZzogXCJSb2FkVG9EaWV0eVwiLFxyXG4gICAgICAgIENvbTpcIkZyaWVuZENpcmNsZVwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5LuZ6YCU5qOL55uYXHJcbiAgICBDaGVzc01hcDoge1xyXG4gICAgICAgIEtleTogXCJDaGVzc01hcFwiLFxyXG4gICAgICAgIFBrZzogXCJDaGVzc0JvYXJkXCIsXHJcbiAgICAgICAgQ29tOlwiQ2hlc3NNYXBcIlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/ovaznlJ9cclxuICAgIFJlYmlydGg6IHtcclxuICAgICAgICBLZXk6IFwiUmViaXJ0aFwiLFxyXG4gICAgICAgIFBrZzogXCJNYWluTWVudVwiLFxyXG4gICAgICAgIENvbTpcIlJlYmlydGhcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvL+mXqOa0vuiXj+e7j+mYgeWFpeWPo1xyXG4gICAgSmluZ0xpYkVudHJhbmNlOiB7XHJcbiAgICAgICAgS2V5OiBcIkppbmdMaWJFbnRyYW5jZVwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiSmluZ0xpYkVudHJhbmNlXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy/pl6jmtL7ol4/nu4/pmIFcclxuICAgIEppbmdMaWI6IHtcclxuICAgICAgICBLZXk6IFwiSmluZ0xpYlwiLFxyXG4gICAgICAgIFBrZzogXCJTZWN0XCIsXHJcbiAgICAgICAgQ29tOlwiSmluZ0xpYlwiXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJQ29uZmlne1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9naW5QYWNrYWdlTG9hZGVkID0gZmFsc2U7ICAgLy/mmK/lkKblt7LliqDovb3nmbvlvZVVSeWMhVxyXG4gICAgXHJcbiAgICAvL+eZu+W9leWKoOi9veeahFVJ5YyFXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgVUlQa2dzID0gW1xyXG4gICAgICAgIFwiSWNvbnNcIixcclxuICAgICAgICBcIlB1YmxpY1wiLFxyXG4gICAgICAgIFwiTWFpbk1lbnVcIixcclxuICAgIF07XHJcblxyXG4gICAgLy/lvq7kv6HlsI/muLjmiI/lrZDljIVcclxuICAgIHN0YXRpYyByZWFkb25seSBTdWJQa2dzID0gW1xyXG4gICAgICAgIFwic3ViTGlic1wiLFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBVSea4suafk+WIhuWxglxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNvcnRpbmdPcmRlciA9IHtcclxuICAgICAgICAvL+S4u+eVjOmdouaMiemSrlxyXG4gICAgICAgIE1haW5VSTogMTAwLFxyXG4gICAgICAgIC8vIOS/oeaBr+WQjOatpVxyXG4gICAgICAgIE1zZ1N5bmM6IDE1MCxcclxuICAgICAgICAvLyDlnLrmma/liqDovb1cclxuICAgICAgICBTY2VuZUxvYWRpbmc6IDIwMCxcclxuICAgICAgICAvLyDmlrDmiYvlvJXlr7xcclxuICAgICAgICBOb3ZpY2VHdWlkZTogMjUwLFxyXG4gICAgICAgIC8vIOaWsOWKn+iDveW8gOWQr1xyXG4gICAgICAgIE5ld0Z1bmN0aW9uT3BlbjogMjYwLFxyXG4gICAgICAgIC8vIOS6uueJqeWvueeZvVxyXG4gICAgICAgIERpYWxvZzogMzAwLFxyXG4gICAgICAgIC8vIOW8ueWHuueql+WPo1xyXG4gICAgICAgIFBvcHVwOiAzNTAsXHJcbiAgICAgICAgLy8g5YWo5bGP5bGV56S6XHJcbiAgICAgICAgRnVsbFNjcmVlblNob3c6IDQ1MCxcclxuICAgICAgICAvLyDnvZHnu5zkv6Hlj7dcclxuICAgICAgICBOZXRTaWduYWw6IDUwMCxcclxuICAgICAgICAvLyDnvZHnu5zlvLnmoYZcclxuICAgICAgICBOZXRFcnJvcjogNTUwLFxyXG4gICAgICAgIC8vIOezu+e7n+W5v+aSrVxyXG4gICAgICAgIFN5c3RlbU1zZzogNjAwLFxyXG4gICAgICAgIC8vIOa2iOaBr+aPkOekulxyXG4gICAgICAgIE1zZ1RpcHM6IDY1MCxcclxuICAgICAgICAvLyDngrnlh7vnibnmlYhcclxuICAgICAgICBDbGlja0VmZmVjdDogNzAwLFxyXG4gICAgICAgIC8vIOacjeWKoeWZqOaXtumXtFxyXG4gICAgICAgIFNlcnZlclRpbWU6IDEwMDAsXHJcbiAgICAgICAgLy8gZ23mjIfku6RcclxuICAgICAgICBHbU9yZGVyOiAxMDAxLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL1NwaW5l6Lev5b6EXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU3BpbmVQYXRoID0ge1xyXG4gICAgICAgIFlhb3lhbzp7XHJcbiAgICAgICAgICAgIExlZnQ6XCJTcGluZS90dXppXCIsXHJcbiAgICAgICAgICAgIFJpZ2h0OlwiUHJlZmFiL3R1emlfMlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgRGljZTpcIlNwaW5lL3NwaW5lX3NhaXppXCIsXHJcbiAgICAgICAgXHJcbiAgICAgICAgTmFuemh1OntcclxuICAgICAgICAgICAgTGVmdDpcIlNwaW5lL25hbnpodVwiLFxyXG4gICAgICAgICAgICBSaWdodDpcIlByZWZhYi9uYW56aHVfMlwiLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFl1c2hlbmd5aTp7XHJcbiAgICAgICAgICAgIExlZnQ6XCJTcGluZS95dXNoZW5neWlcIixcclxuICAgICAgICAgICAgUmlnaHQ6XCJQcmVmYWIveXVzaGVuZ3lpXzJcIixcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+WjsOmfs1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNvdW5kUGF0aCA9IHtcclxuICAgICAgICBCdXR0b25DbGljazpcInVpOi8vUHVibGljL+eCueWHu+aMiemSrlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+W9ouixoeWbvuagh+mFjee9rlxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFBvcnRyYWl0UGF0aCA9IHtcclxuICAgICAgICBZYW95YW86J3VpOi8vUHVibGljL+WkreWkrV/lhajouqsnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+Wwj+Wbvuagh+mFjee9rlxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNtYWxsSWNvblBhdGggPSB7XHJcbiAgICAgICAgWWFveWFvOid1aTovL1B1YmxpYy/lpK3lpK3lsI/lpLTlg48nLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU2hhcmVJbWFnZVBhdGggPSB7XHJcbiAgICAgICAgSW52aXRlRnJpZW5kOidodHRwczovL21tb2NnYW1lLnFwaWMuY24vd2VjaGF0Z2FtZS9IQ2xvS1hwWWg0QUlhcjIxaWF2QkhVczFCZ1MzZjR1R3NuWVg1aWJLZHVPaWFyQWRnVFY5R3dKa1N0Uk9QamJyYWtMLzAnLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL1NwaW5l5Yqo55S75YiH5o2iXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU3BpbmVTdGF0ZSA9IHtcclxuICAgICAgICBZYW95YW86e1xyXG4gICAgICAgICAgICBSdW46XCJydW5cIixcclxuICAgICAgICAgICAgU3RhbmQ6XCJzdGFuZFwiLFxyXG4gICAgICAgICAgICBJZGxlMTpcImlkbGUxXCIsXHJcbiAgICAgICAgICAgIElkbGUyOlwiaWRsZTJcIixcclxuICAgICAgICAgICAgVG91Y2gxOlwidG91Y2gxXCIsXHJcbiAgICAgICAgICAgIFRvdWNoMjpcInRvdWNoMlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8v5by65Yi25byV5a+8XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgR3VpZGVyTmFtZSA9IHtcclxuICAgICAgICBSb2xlTWVudUd1aWRlOlwiUm9sZU1lbnVHdWlkZVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgRm9udENvbG9yID0ge1xyXG4gICAgICAgIEZpZ2h0UmVjX01lOiAnI0ZGRkYwMCcsXHJcbiAgICB9O1xyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9SaWdpZE9iamVjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vT2JqZWN0UHJveHknO1xyXG5leHBvcnQgKiBmcm9tICcuL09iamVjdFN0YXRlJztcclxuIiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9Db3JlL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCB7IE9iamVjdENvbmZpZyB9IGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0UHJveHkge1xyXG4gICAgc3RhdGljIGNyZWF0ZUhhbmQoKXtcclxuICAgICAgICBsZXQgaGFuZCA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lLmFkZENoaWxkKFxyXG4gICAgICAgICAgICBuZXcgTGF5YS5NZXNoU3ByaXRlM0QoTGF5YS5QcmltaXRpdmVNZXNoLmNyZWF0ZUJveChcclxuICAgICAgICAgICAgICAgIE9iamVjdENvbmZpZy5IQU5EX1NJWkUueCwgXHJcbiAgICAgICAgICAgICAgICBPYmplY3RDb25maWcuSEFORF9TSVpFLnksIFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0Q29uZmlnLkhBTkRfU0laRS56XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKSBhcyBMYXlhLk1lc2hTcHJpdGUzRDtcclxuICAgICAgICB0aGlzLmFkZFBoeXNpY3MoaGFuZCwgT2JqZWN0Q29uZmlnLkhBTkRfU0laRSk7XHJcblxyXG4gICAgICAgIHJldHVybiBoYW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVEZXNrKCl7XHJcbiAgICAgICAgbGV0IGRlc2sgPSBNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZS5hZGRDaGlsZChcclxuICAgICAgICAgICAgbmV3IExheWEuTWVzaFNwcml0ZTNEKExheWEuUHJpbWl0aXZlTWVzaC5jcmVhdGVCb3goXHJcbiAgICAgICAgICAgICAgICBPYmplY3RDb25maWcuREVTS19TSVpFLngsIFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0Q29uZmlnLkRFU0tfU0laRS55LCBcclxuICAgICAgICAgICAgICAgIE9iamVjdENvbmZpZy5ERVNLX1NJWkUuelxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICkgYXMgTGF5YS5NZXNoU3ByaXRlM0Q7XHJcbiAgICAgICAgdGhpcy5hZGRQaHlzaWNzKGRlc2ssIE9iamVjdENvbmZpZy5ERVNLX1NJWkUpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzaztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0T2JqKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLlBvb2xUeXBlLkhhbmQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFuYWdlci5Qb29sTWFuYWdlci5nZXRPYmpCeUZ1bmMoQ29uZmlnLlBvb2xUeXBlLkhhbmQsIHRoaXMuY3JlYXRlSGFuZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDb25maWcuUG9vbFR5cGUuRGVzazpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYW5hZ2VyLlBvb2xNYW5hZ2VyLmdldE9iakJ5RnVuYyhDb25maWcuUG9vbFR5cGUuRGVzaywgdGhpcy5jcmVhdGVEZXNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkUGh5c2ljcyh0YXJnZXQ6TGF5YS5TcHJpdGUzRCwgc2l6ZTpMYXlhLlZlY3RvcjMpe1xyXG4gICAgICAgIGlmKCF0YXJnZXQgfHwgIXNpemUpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHJpZ2lkQm9keTpMYXlhLlJpZ2lkYm9keTNEID0gdGFyZ2V0LmFkZENvbXBvbmVudChMYXlhLlJpZ2lkYm9keTNEKTsvL1JpZ2lkYm9keTNE5Y+v5LiOU3RhdGljQ29sbGlkZXLlkoxSaWdpZEJvZHkzROS6p+eUn+eisOaSnlxyXG4gICAgICAgIHJpZ2lkQm9keS5jb2xsaWRlclNoYXBlID0gbmV3IExheWEuQm94Q29sbGlkZXJTaGFwZShzaXplLngsIHNpemUueSwgc2l6ZS56KTtcclxuICAgICAgICByaWdpZEJvZHkuZ3Jhdml0eSA9IExheWEuVmVjdG9yMy5fWkVSTztcclxuICAgICAgICByaWdpZEJvZHkuaXNUcmlnZ2VyID0gdHJ1ZTtcclxuICAgICAgICByaWdpZEJvZHkuaXNLaW5lbWF0aWMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRTY3JpcHQocmlnaWRPYmo6Q29yZS5SaWdpZE9iamVjdCwgc2NyaXB0KXtcclxuICAgICAgICBpZighcmlnaWRPYmogfHwgIXNjcmlwdCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByaWdpZE9iai5PYmouYWRkQ29tcG9uZW50KHNjcmlwdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoYW5nZU1vZGVsKG9sZE1vZGVsOkxheWEuU3ByaXRlM0QsIG9sZFBhdGg6c3RyaW5nLCBuZXdQYXRoOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIW9sZE1vZGVsIHx8ICFvbGRNb2RlbCB8fCAhbmV3UGF0aCB8fCBvbGRQYXRoID09IG5ld1BhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYob2xkTW9kZWwpIHtcclxuICAgICAgICAgICAgTWFuYWdlci5Qb29sTWFuYWdlci5yZWNvdmVyKG9sZFBhdGgsIG9sZE1vZGVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtb2RlbCA9IE1hbmFnZXIuUG9vbE1hbmFnZXIuZ2V0SXRlbShuZXdQYXRoKTtcclxuICAgICAgICBpZihtb2RlbCBpbnN0YW5jZW9mIExheWEuTWVzaFNwcml0ZTNEKXtcclxuICAgICAgICAgICAgb2xkTW9kZWwgPSBtb2RlbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgTWFuYWdlci5TcGF3bk1hbmFnZXIuTG9hZDNkTW9kZWwobmV3UGF0aCwgKG1kYXRhOkNvbmZpZy5Nb2RlbERhdGFTdHJ1Y3QpPT57XHJcbiAgICAgICAgICAgICAgICBvbGRNb2RlbCA9IG1kYXRhLm1zcCBhcyBMYXlhLk1lc2hTcHJpdGUzRDtcclxuICAgICAgICAgICAgfSwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL0NvcmUvQ29yZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdFN0YXRle1xyXG4gICAgU3RhdGU6c3RyaW5nO1xyXG4gICAgT25FbnRlcjpGdW5jdGlvbjtcclxuICAgIE9uVXBkYXRlOkZ1bmN0aW9uO1xyXG4gICAgT25FeGl0OkZ1bmN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlOnN0cmluZywgb25VcGRhdGU/OkZ1bmN0aW9uLCBvbkVudGVyPzpGdW5jdGlvbiwgb25FeGl0PzpGdW5jdGlvbil7XHJcbiAgICAgICAgdGhpcy5TdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuT25VcGRhdGUgPSBvblVwZGF0ZTtcclxuICAgICAgICB0aGlzLk9uRW50ZXIgPSBvbkVudGVyO1xyXG4gICAgICAgIHRoaXMuT25FeGl0ID0gb25FeGl0O1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuT25VcGRhdGUpe1xyXG4gICAgICAgICAgICB0aGlzLk9uVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9Db3JlL0NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSaWdpZE9iamVjdHtcclxuICAgIHByaXZhdGUgX21vZGVsUGF0aDpzdHJpbmc7XHJcbiAgICBTdGF0ZUxpc3Q6Q29yZS5PYmplY3RTdGF0ZVtdO1xyXG4gICAgU3RhdGU6TWFuYWdlci5TdGF0ZUJhc2U7XHJcbiAgICBPYmo6TGF5YS5NZXNoU3ByaXRlM0Q7XHJcbiAgICBSaWdpZDNEOkxheWEuUmlnaWRib2R5M0Q7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob2JqOkxheWEuTWVzaFNwcml0ZTNELCAuLi5zdGF0ZXM6Q29yZS5PYmplY3RTdGF0ZVtdKXtcclxuICAgICAgICB0aGlzLk9iaiA9IG9iajtcclxuICAgICAgICB0aGlzLlN0YXRlID0gbmV3IE1hbmFnZXIuU3RhdGVCYXNlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U3RhdGVMaXN0KC4uLnN0YXRlcyk7XHJcbiAgICAgICAgdGhpcy5SaWdpZDNEID0gb2JqLmdldENvbXBvbmVudChMYXlhLlJpZ2lkYm9keTNEKTtcclxuICAgICAgICBpZighdGhpcy5SaWdpZDNEKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJpZ2lkIE9iamVjdCBtaXNzIHJpZ2lkYm9keTNkIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFBvc2l0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuT2JqLnRyYW5zZm9ybS5wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ3VyU3RhdGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5TdGF0ZS5jdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTY3JpcHQoc2NyaXB0KXtcclxuICAgICAgICByZXR1cm4gdGhpcy5PYmouZ2V0Q29tcG9uZW50KHNjcmlwdCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU2NyaXB0KHNjcmlwdCl7XHJcbiAgICAgICAgaWYoIXNjcmlwdCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLk9iai5hZGRDb21wb25lbnQoc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VNb2RlbChwYXRoOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXBhdGggfHwgdGhpcy5fbW9kZWxQYXRoID09IHBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgQ29yZS5PYmplY3RQcm94eS5jaGFuZ2VNb2RlbCh0aGlzLk9iaiwgdGhpcy5fbW9kZWxQYXRoLCBwYXRoKTtcclxuICAgICAgICB0aGlzLl9tb2RlbFBhdGggPSBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZU9iaihrZXk6c3RyaW5nKXtcclxuICAgICAgICBNYW5hZ2VyLlBvb2xNYW5hZ2VyLnJlY292ZXIoa2V5LCB0aGlzLk9iaik7XHJcbiAgICAgICAgdGhpcy5PYmogPSBDb3JlLk9iamVjdFByb3h5LmdldE9iaihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHBvczpMYXlhLlZlY3RvcjMpe1xyXG4gICAgICAgIGlmKHRoaXMuT2JqKVxyXG4gICAgICAgICAgICB0aGlzLk9iai50cmFuc2Zvcm0ucG9zaXRpb24gPSBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFN0YXRlTGlzdCguLi5zdGF0ZXM6Q29yZS5PYmplY3RTdGF0ZVtdKXtcclxuICAgICAgICB0aGlzLlN0YXRlTGlzdCA9IHN0YXRlcztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTdGF0ZShzdGF0ZTpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCFzdGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLlN0YXRlLmNoYW5nZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZSgpe1xyXG4gICAgICAgIGlmKCFBcnJheS5pc0FycmF5KHRoaXMuU3RhdGVMaXN0KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLlN0YXRlTGlzdC5zb21lKHN0PT57XHJcbiAgICAgICAgICAgIGlmKHN0LlN0YXRlID09IHRoaXMuQ3VyU3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgc3QuVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9EYXRhQmFzZSc7XHJcbiIsImltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgR0V2ZW50IGZyb20gXCIuLi9Db21tb24vR0V2ZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cFJlcWJvZHlCYXNle1xyXG4gICAgS2V5OnN0cmluZztcclxuICAgIE1vZHVsZUNvZGU6IG51bWJlcjtcclxuICAgIFJlcUNvZGU6IG51bWJlcjtcclxuICAgIFNlc3Npb246IHN0cmluZztcclxuICAgIEFjY291bnRLZXk6IHN0cmluZztcclxuICAgIFJlcURhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RDb2RlOm51bWJlciwgcmVxQ29kZTpudW1iZXIsIHNlc3Npb24/OnN0cmluZywgYWNjTmFtZT86c3RyaW5nLCByZXFkYXRhPyl7XHJcbiAgICAgICAgaWYodHlwZW9mKHJlcWRhdGEpID09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAvL+WmguW3sui9rOaNouWImei9rOWbnkpTT05cclxuICAgICAgICAgICAgcmVxZGF0YSA9IEpTT04ucGFyc2UocmVxZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLk1vZHVsZUNvZGUgPSBtb2RDb2RlO1xyXG4gICAgICAgIHRoaXMuUmVxQ29kZSA9IHJlcUNvZGU7XHJcbiAgICAgICAgdGhpcy5TZXNzaW9uID0gc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLkFjY291bnRLZXkgPSBhY2NOYW1lO1xyXG4gICAgICAgIHRoaXMuUmVxRGF0YSA9IHJlcWRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRhU3RydWN0IGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX05ldE1ncjpNYW5hZ2VyLkh0dHBNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3JlcWtleXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cclxuICAgIHByaXZhdGUgX2h0dHBNZ3I6TWFuYWdlci5IdHRwTWFuYWdlcjtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgcmVxQm9keTpIdHRwUmVxYm9keUJhc2U7XHJcblxyXG4gICAgc3RhdGljIGlzUmVzcG9uc2VkOmJvb2xlYW47XHJcbiAgICBzdGF0aWMgRGljZU51bTpudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIFNlbmRSZXEocmVxRGF0YT8pe1xyXG4gICAgICAgIHRoaXMucmVxQm9keS5SZXFEYXRhID0gcmVxRGF0YTtcclxuICAgICAgICB0aGlzLl9OZXRNZ3IgPSBuZXcgTWFuYWdlci5IdHRwTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuX05ldE1nci5Db25uZWN0KCcnLCB0aGlzLnJlcUJvZHksIHRoaXMub25SZXNwb25zZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0IFJlcUJvZHkoYm9keSl7XHJcbiAgICAgICAgaWYoIXRoaXMucmVxQm9keSlcclxuICAgICAgICAgICAgdGhpcy5yZXFCb2R5ID0gYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0IERhdGEoZGF0YSl7fVxyXG5cclxuICAgIHN0YXRpYyBvbkNvbm5lY3RFbmQoZGF0YTpDb25maWcuUmVzcERhdGFTdHJ1Y3Qpe31cclxuXHJcbiAgICBzdGF0aWMgb25SZXNwb25zZShkYXRhOkNvbmZpZy5SZXNwRGF0YVN0cnVjdCl7XHJcbiAgICAgICAgaWYoZGF0YSAmJiBkYXRhLlJlc3BEYXRhICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLkRhdGEgPSBkYXRhLlJlc3BEYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mihOeVmeaOpeWPo++8jOmBv+WFjeWQjuerr+ayoeaciei/lOWbnuaVsOaNrlxyXG4gICAgICAgIHRoaXMub25Db25uZWN0RW5kKGRhdGEpO1xyXG4gICAgICAgIHRoaXMucmVxQm9keS5SZXFEYXRhID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IE5ldE1ncigpe1xyXG4gICAgICAgIGlmKCF0aGlzLl9OZXRNZ3Ipe1xyXG4gICAgICAgICAgICB0aGlzLl9OZXRNZ3IgPSBuZXcgTWFuYWdlci5IdHRwTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX05ldE1ncjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ29ubmVjdChyZXFrZXk6c3RyaW5nLCByZXFib2R5Okh0dHBSZXFib2R5QmFzZSwgY2FsbGJhY2s/OkZ1bmN0aW9uLCBpc1Nob3dMb2FkaW5nPywgSXNHbT86Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5OZXRNZ3IuQ29ubmVjdChyZXFrZXksIHJlcWJvZHksIHRoaXMuT25IdHRwUmVxdWVzdENvbXBsZXRlLmJpbmQodGhpcyksIGlzU2hvd0xvYWRpbmcsIElzR20pO1xyXG4gICAgICAgIHRoaXMuX3JlcWtleXMucHVzaChyZXFrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBPbkh0dHBSZXF1ZXN0Q29tcGxldGUoZGF0YTpDb25maWcuUmVzcERhdGFTdHJ1Y3QsIHJlcWtleTpzdHJpbmcsIHJlcURhdGEpe1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERldlJlcUJvZHkgZXh0ZW5kcyBIdHRwUmVxYm9keUJhc2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQmFzZUJvZHlJbml0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQm9keUluaXRlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL+ivt+axguS9k1xyXG4gICAgc3RhdGljIENvbmZpZ0JvZHk6SHR0cFJlcWJvZHlCYXNlOyAgIC8v6YWN572uXHJcbiAgICBzdGF0aWMgTG9naW5Cb2R5Okh0dHBSZXFib2R5QmFzZTsgICAgLy/nmbvlvZVcclxuICAgIHN0YXRpYyBVcGdyYWRlQm9keTpIdHRwUmVxYm9keUJhc2U7ICAgIC8v5Y2H6Zi2XHJcbiAgICBzdGF0aWMgQWRvYmVVaUluZm9Cb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOWxleekulxyXG4gICAgc3RhdGljIEFkb2JlSGlyZVdvcmtlckJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc5oub5Yuf5LuZ5LuGXHJcbiAgICBzdGF0aWMgQWRvYmVBZGRXb3JrZXJCb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOa3u+WKoOW3peS9nOS7meS7hlxyXG4gICAgc3RhdGljIEFkb2JlUmVkdWNlV29ya2VyQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzlh4/lsJHlt6XkvZzku5nku4ZcclxuICAgIHN0YXRpYyBBZG9iZVVwU3RvbmVCb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOeBteefs+WNh+e6p1xyXG4gICAgc3RhdGljIEFkb2JlVXBGb29kQm9keTpEZXZSZXFCb2R5OyAgLy/mtJ7lupzpo5/nianljYfnuqdcclxuICAgIHN0YXRpYyBBZG9iZVVwV29vZEJvZHk6RGV2UmVxQm9keTsgIC8v5rSe5bqc5pyo5p2Q5Y2H57qnXHJcbiAgICBzdGF0aWMgQWRvYmVVcElyb25Cb2R5OkRldlJlcUJvZHk7ICAvL+a0nuW6nOmZqOmTgeWNh+e6p1xyXG5cclxuICAgIHN0YXRpYyBnZXQgaXNJbml0ZWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNCb2R5SW5pdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vZENvZGU6bnVtYmVyLCByZXFDb2RlOm51bWJlciwgcmVxRGF0YT8pe1xyXG4gICAgICAgIGlmKCFMb2dpbkRhdGEuU2Vzc2lvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQbHMgbG9naW4gZmlyc3QnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN1cGVyKG1vZENvZGUsIHJlcUNvZGUsIExvZ2luRGF0YS5TZXNzaW9uLCBMb2dpbkRhdGEuQWNjb3VudEtleSwgcmVxRGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgRGFtb25JbmZvVHlwZSA9IHtcclxuICAgIFwiQ2hhbGxlbmdlTGV2ZWxcIjogbnVtYmVyLFxyXG59XHJcblxyXG4vL+eOqeWutuaVsOaNrlxyXG5leHBvcnQgY2xhc3MgUGxheWVyRGF0YSB7XHJcbiAgICBzdGF0aWMgTmlrZU5hbWU6c3RyaW5nO1xyXG4gICAgc3RhdGljIEF2YXRhcjpzdHJpbmc7XHJcbiAgICBzdGF0aWMgUG9pbnQgPSAwO1xyXG5cclxuICAgIHN0YXRpYyBzZXQgRGF0YShkYXRhKXtcclxuICAgICAgICBpZihudWxsICE9IGRhdGEuTmlja05hbWUpe1xyXG4gICAgICAgICAgICB0aGlzLk5pa2VOYW1lID0gZGF0YS5OaWNrTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG51bGwgIT0gZGF0YS5BdmF0YXIpe1xyXG4gICAgICAgICAgICB0aGlzLkF2YXRhciA9IGRhdGEuQXZhdGFyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR0V2ZW50LkRpc3BhdGNoKENvbW1vbi5EYXRhUGxheWVyRWlkLlJlZnJlc2hlZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5YiG5Lqr6K+t5Y+lXHJcbmludGVyZmFjZSBTaGFyZURldGFpbCB7XHJcbiAgICBJZDpudW1iZXI7XHJcbiAgICBTaGFyZVR5cGU6bnVtYmVyOyAgICAgICAgICAgIC8v5YiG5Lqr57G75Z6LMeaYjuS/oeeJh1xyXG4gICAgU2hhcmVXb3JkOnN0cmluZyAgLy/liIbkuqvor63lj6VcclxufVxyXG5cclxuZXhwb3J0IGxldCBTaGFyZVdvcmQgPSB7XHJcbiAgICBcIkNhcmRXb3Jkc1wiOiBuZXcgQXJyYXk8U2hhcmVEZXRhaWw+KCksICAgICAgICAvL+aYjuS/oeeJh+WIhuS6q+ivreWPpVxyXG4gICAgXCJIYW1zdGVyV29yZHNcIjogbmV3IEFycmF5PFNoYXJlRGV0YWlsPigpLCAgICAgLy/miZPlnLDpvKDliIbkuqvor63lj6VcclxuICAgIFwiQ29pbldvcmRzXCI6IG5ldyBBcnJheTxTaGFyZURldGFpbD4oKSwgICAgICAgIC8v5o6l6YeR5biB5YiG5Lqr6K+t5Y+lXHJcbiAgICBcIk90aGVyV29yZHNcIjogbmV3IEFycmF5PFNoYXJlRGV0YWlsPigpICAgICAgICAvL+WFtuS7luWIhuS6q+ivreWPpVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0U2hhcmVXb3JkKHNoYXJlVHlwZT8pe1xyXG4gICAgbGV0IHJhbmQgPSAwO1xyXG4gICAgc3dpdGNoIChzaGFyZVR5cGUpIHtcclxuICAgICAgICBjYXNlIENvbmZpZy5TaGFyZVdvcmRFbnVtLkNhcmRXb3JkczpcclxuICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNoYXJlV29yZC5DYXJkV29yZHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFNoYXJlV29yZC5DYXJkV29yZHNbcmFuZF0uU2hhcmVXb3JkO1xyXG4gICAgXHJcbiAgICAgICAgY2FzZSBDb25maWcuU2hhcmVXb3JkRW51bS5IYW1zdGVyV29yZHM6XHJcbiAgICAgICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTaGFyZVdvcmQuSGFtc3RlcldvcmRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTaGFyZVdvcmQuSGFtc3RlcldvcmRzW3JhbmRdLlNoYXJlV29yZDtcclxuXHJcbiAgICAgICAgY2FzZSBDb25maWcuU2hhcmVXb3JkRW51bS5Db2luV29yZHM6XHJcbiAgICAgICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTaGFyZVdvcmQuQ29pbldvcmRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTaGFyZVdvcmQuQ29pbldvcmRzW3JhbmRdLlNoYXJlV29yZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNoYXJlV29yZC5PdGhlcldvcmRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBTaGFyZVdvcmQuT3RoZXJXb3Jkc1tyYW5kXS5TaGFyZVdvcmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v6YWN572u5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBDb25maWdEYXRhIGV4dGVuZHMgRGF0YVN0cnVjdHtcclxuICAgIHN0YXRpYyBzZXQgRGF0YShyZXNwX2RhdGE6Q29uZmlnLkNvbmZpZ0RhdGFQYXJhbVtdKXtcclxuICAgICAgICBzZXRDb25maWdEYXRhKHJlc3BfZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbmZpZ0RhdGEocmVzcF9kYXRhOkNvbmZpZy5Db25maWdEYXRhUGFyYW1bXSl7XHJcbiAgICBjb25zb2xlLmxvZygn6YWN572u5pWw5o2u77yaJywgcmVzcF9kYXRhKTtcclxuICAgIGlmKCFyZXNwX2RhdGEpIHJldHVybjtcclxuXHJcbiAgICBDb25maWcuRGF0YUNvbmZpZy5pbnN0YW5jZS5zYXZlQ29uZmlnVmVyc2lvbihyZXNwX2RhdGEpO1xyXG4gICAgZm9yKGxldCBpIGluIHJlc3BfZGF0YSl7XHJcbiAgICAgICAgaWYocmVzcF9kYXRhW2ldKXtcclxuICAgICAgICAgICAgQ29uZmlnLkRhdGFDb25maWcuaW5zdGFuY2Uuc3RvcmVDb25maWcocmVzcF9kYXRhW2ldLlRhYmxlSWQsIHJlc3BfZGF0YVtpXS5EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQ29uZmlnLkRhdGFDb25maWcuSXNDb25maWdMb2FkZWQgPSB0cnVlO1xyXG4gICAgR0V2ZW50LkRpc3BhdGNoKENvbW1vbi5TY2VuZUxvZ2luRWlkLkNvbmZpZ0xvYWRlZCk7XHJcbn1cclxuXHJcbi8v55m75b2V5pWw5o2uXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkRhdGEgZXh0ZW5kcyBEYXRhU3RydWN0e1xyXG4gICAgc3RhdGljIFNlc3Npb246c3RyaW5nO1xyXG4gICAgc3RhdGljIEFjY291bnRLZXk6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzTG9naW5lZCA9IGZhbHNlOyAgLy/mmK/lkKblt7LnmbvlvZVcclxuXHJcbiAgICBzdGF0aWMgZ2V0IElzTG9naW5lZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0xvZ2luZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldCBEYXRhKGRhdGE6Q29uZmlnLkxvZ2luUmVzcERhdGFTdHJ1Y3Qpe1xyXG4gICAgICAgIGlmKGRhdGEuQWNjb3VudEJhc2VJbmZvKXtcclxuICAgICAgICAgICAgdGhpcy5TZXNzaW9uID0gZGF0YS5BY2NvdW50QmFzZUluZm8uVmVyaWZ5U2Vzc2lvbjtcclxuICAgICAgICAgICAgdGhpcy5BY2NvdW50S2V5ID0gZGF0YS5BY2NvdW50QmFzZUluZm8uQWNjb3VudEtleTtcclxuICAgICAgICAgICAgUGxheWVyRGF0YS5EYXRhID0gZGF0YS5BY2NvdW50QmFzZUluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihkYXRhLlhpdXdlaUluZm8pe1xyXG4gICAgICAgICAgICBQbGF5ZXJEYXRhLkRhdGEgPSBkYXRhLlhpdXdlaUluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5faXNMb2dpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5faXNMb2dpbmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+WNh+e6p+aVsOaNrlxyXG5leHBvcnQgY2xhc3MgVXBncmFkZURhdGEgZXh0ZW5kcyBEYXRhU3RydWN0e1xyXG4gICAgc3RhdGljIHNldCBEYXRhKHJlc3BEYXRhKXtcclxuICAgICAgICBpZihyZXNwRGF0YS5YaXV3ZWlJbmZvKXtcclxuICAgICAgICAgICAgUGxheWVyRGF0YS5EYXRhID0gcmVzcERhdGEuWGl1d2VpSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uQ2hhcmFjdGVyQ3VsdGl2YXRpb25FaWQuVXBncmFkZSwgcmVzcERhdGEuVXBPayk7XHJcbiAgICB9XHJcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj03NTA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj0xMzM0O1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJ2ZXJ0aWNhbFwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuXHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiXHJcbmltcG9ydCB7IERhdGFDb25maWcgfSBmcm9tIFwiLi9Db25maWcvRGF0YUNvbmZpZ1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSAnLi9EYXRhL0RhdGEnO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4vQ29tbW9uL0NvbW1vblwiO1xyXG5pbXBvcnQgKiBhcyBMb2dpYyBmcm9tIFwiLi9Mb2dpYy9Mb2dpY1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSAgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG5cdHByb3RlY3RlZCBzdGF0aWMgX2luc3Q6R2FtZVNjZW5lO1xyXG5cdHB1YmxpYyBsb2FkaW5nVWlQYWNrYWdlOnN0cmluZztcclxuXHJcblx0c3RhdGljIGdldCBpbnN0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faW5zdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbkF3YWtlKCl7XHJcblx0XHRHYW1lU2NlbmUuX2luc3QgPSB0aGlzO1xyXG5cdFx0dGhpcy5vd25lci5hZGRDb21wb25lbnQoTG9naWMuR3JhYkxvZ2ljKVxyXG5cclxuXHRcdC8vIHRoaXMuaW5pdCgpO1xyXG5cdFx0Ly8gdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLkNvbmZpZ0xvYWRlZCwgdGhpcy5vbkNvbmZpZ0xvYWRlZCk7XHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2VydmljZUNob29zZWQsIHRoaXMub25WZXJzaW9uQ2hlY2tlZCk7XHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuTG9naW5TdWNjZXNzLCB0aGlzLm9uTG9naW5lZCk7XHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lTG9naW5FaWQuU2ltUHJvZ3Jlc3NFbmQsIHRoaXMub3Blbk1haW5VaSk7XHJcblx0fVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCl7XHJcblx0XHQvLyBDb21tb24uSnNDYWxsSmF2YShcImRlbW8uSlNCcmlkZ2VcIiwgXCJ0ZXN0U3RyaW5nXCIsIFwiSGVsbG8gYmFieSFcIik7XHJcblx0XHQvL+a4uOaIj+W8gOWPkeeJiOacrFxyXG5cdFx0TWFuYWdlci5WZXJzaW9uTWFuYWdlci5WZXJzaW9uID0gQ29uZmlnLlZlcnNpb25Db25maWcuRGV2ZWxvcDtcclxuXHJcblx0XHQvL+WKqOaAgeWKoOi9vVxyXG5cdFx0aWYoTGF5YS5Ccm93c2VyLm9uTWluaUdhbWUpe1xyXG5cdFx0XHRMYXlhLlVSTC5iYXNlUGF0aCA9IFwiaHR0cHM6Ly83MDYubGlnaHRwYXcuY24vaDVjL3Jlc0NhY2hlL0RpZXR5Um9hZC9cIjtcdFxyXG5cdFx0XHQvLyBMYXlhLlVSTC5iYXNlUGF0aCA9IFwiaHR0cHM6Ly9zMy5jbi1ub3J0aHdlc3QtMS5hbWF6b25hd3MuY29tLmNuL2g1Y2xpZW50L0RlbW9zL0RyZWFtQ2hlc3NcIjtcclxuXHRcdFx0TGF5YS5NaW5pQWRwdGVyLm5hdGl2ZWZpbGVzID0gIFtcclxuXHRcdFx0XHRcImxpYnNcIixcclxuXHRcdFx0XHRcInJlcy9jb25maWdcIixcclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5pdEZhaXJ5Z3VpKCk7XHJcblx0XHR0aGlzLmxvYWRMb2dpblVpUmVzKCk7XHJcblx0XHQvLyBDb21tb24ubG9hZEFsbFN1YnBhY2thZ2VzKHRoaXMsIHRoaXMubG9hZExvZ2luVWlSZXMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0RmFpcnlndWkoKXtcclxuXHRcdGZndWkuVUlDb25maWcucGFja2FnZUZpbGVFeHRlbnNpb24gPSBcInR4dFwiO1xyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZChmZ3VpLkdSb290Lmluc3QuZGlzcGxheU9iamVjdCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRMb2dpblVpUmVzKCl7XHJcblx0XHRDb21tb24uUmVzb3VyY2UubG9hZChDb25maWcubG9naW5SZXNVcmxzLCB0aGlzLCB0aGlzLm9uTG9naW5nUmVzTG9hZGVkKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Mb2dpbmdSZXNMb2FkZWQoKXtcclxuXHRcdHRoaXMucHJlTG9naW4oKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9hZFJlcygpe1xyXG5cdFx0Q29tbW9uLlJlc291cmNlLmxvYWQoQ29uZmlnLnVybHMsIHRoaXMsIHRoaXMub25SZXNMb2FkZWQsIHRoaXMub25Mb2FkaW5nKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Mb2FkaW5nKHByb2dyZXNzOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5Yqg6L296L+b5bqmOiBcIiArIHByb2dyZXNzKTtcclxuXHRcdC8vIE1hbmFnZXIuTG9hZGluZ1Byb2dyZXNzTWFuYWdlci5JbnN0LnNob3dVaVByb2dyZXNzKHByb2dyZXNzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25SZXNMb2FkZWQoaW5mbyl7XHJcblx0XHRpZighaW5mbyl7XHJcblx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKCdMb2FkIGZhaXJ5Z3VpIHBhY2thZ2UgZmFpbCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8v5YWs55So5YyFXHJcblx0XHRDb25maWcuVUlDb25maWcuVUlQa2dzLmZvckVhY2gocGtnPT57XHJcblx0XHRcdENvbW1vbi5SZXNvdXJjZS5hZGRVaVBhY2thZ2UocGtnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdENvbmZpZy5VSUNvbmZpZy5Mb2dpblBhY2thZ2VMb2FkZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUxvZ2luRWlkLlBhY2thZ2VMb2FkZWQpO1xyXG5cdFx0dGhpcy5sb2FkQ29uZmlnKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHByZUxvZ2luKCl7XHJcblx0XHR0aGlzLm9wZW5Mb2dpblVJKCk7XHJcblx0XHR0aGlzLmNoZWNrVmVyc2lvbigpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjaGVja1ZlcnNpb24oKXtcclxuXHRcdHN3aXRjaCAoTWFuYWdlci5WZXJzaW9uTWFuYWdlci5WZXJzaW9uKSB7XHJcblx0XHRcdGNhc2UgQ29uZmlnLlZlcnNpb25Db25maWcuRGV2ZWxvcDpcclxuXHRcdFx0XHR0aGlzLm9wZW5DaG9vc2VTZXJ2aWNlVWkoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBDb25maWcuVmVyc2lvbkNvbmZpZy5SZWxlYXNlOlxyXG5cdFx0XHRcdC8v5a+55aSW54mI5pys55m75b2V5aSW572RXHJcblx0XHRcdFx0Q29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID0gQ29uZmlnLk5ldENvbmZpZy5IdHRwUmVxdWVzdFVybDtcclxuXHJcblx0XHRcdFx0Ly8gaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcblx0XHRcdFx0Ly8gXHRXeFV0aWxzLkxvZ2luKHRydWUpO1xyXG5cdFx0XHRcdC8vIH1lbHNle1xyXG5cdFx0XHRcdC8vIFx0dGhpcy5vblZlcnNpb25DaGVja2VkKCk7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblZlcnNpb25DaGVja2VkKCl7XHJcblx0XHR0aGlzLmxvYWRSZXMoKTtcclxuXHRcdC8vIHRoaXMubG9naW5HYW1lKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9wZW5Mb2dpblVJKCl7XHJcblx0XHRNYW5hZ2VyLkxvYWRpbmdQcm9ncmVzc01hbmFnZXIuSW5zdC5zaG93VWlQcm9ncmVzcyg1KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb3BlbkNob29zZVNlcnZpY2VVaSgpe1xyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbmZpZy5WaWV3S2l0LkNob29zZVNlcnZpY2UuS2V5KTtcclxuXHR9XHJcblxyXG5cdGxvYWRDb25maWcoKXtcclxuXHRcdC8v5ouJ5Y+W6YWN572uXHJcblx0XHQvLyBEYXRhLkNvbmZpZ0RhdGEuU2VuZFJlcShDb25maWcuRGF0YUNvbmZpZy5sb2NhbENvbmZpZ3MpO1xyXG5cdFx0RGF0YS5Db25maWdEYXRhLlNlbmRSZXEoW10pO1xyXG5cclxuXHRcdC8v5ouJ5Y+W5pys5Zyw6YWN572u77yM55uu5YmN55Sx5ZCO56uv5Y+R6YCB77yM5pqC5byD55SoXHJcblx0XHQvLyBEYXRhQ29uZmlnLmluc3RhbmNlLmluaXRDb25maWcodGhpcy5jcmVhdGUyZFNjZW5lLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkNvbmZpZ0xvYWRlZCgpe1xyXG5cdFx0dGhpcy5sb2dpbkdhbWUoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9naW5HYW1lKCkge1xyXG5cdFx0aWYoQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID09IENvbmZpZy5OZXRDb25maWcuTG9jYWxSZXF1ZXN0VXJsKXtcclxuXHRcdFx0dGhpcy50ZXN0TG9naW4oKTtcclxuXHRcdFx0Ly8gV3hVdGlscy5Mb2dpbih0cnVlKTtcclxuXHRcdH1lbHNlIGlmKENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9PSBDb25maWcuTmV0Q29uZmlnLkxvY2FsV2VjaGF0UmVxdWVzdFVybCAmJiBDb21tb24uaXNPbldlaXhpbigpKXtcclxuXHRcdFx0Ly8gV3hVdGlscy5Mb2dpbih0cnVlKTtcclxuXHRcdH1lbHNlIGlmKENvbW1vbi5pc09uV2VpeGluKCkpe1xyXG5cdFx0XHQvLyBXeFV0aWxzLkxvZ2luKHRydWUpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMudGVzdExvZ2luKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0ZXN0TG9naW4oKXtcclxuXHRcdGxldCBhY2M6c3RyaW5nO1xyXG5cdFx0bGV0IHRlbXBOYW1lID0gQ29uZmlnLk5ldENvbmZpZy5UZW1wTmFtZTtcclxuXHRcdGlmKHRlbXBOYW1lKXtcclxuXHRcdFx0YWNjID0gdGVtcE5hbWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Ly/pmo/mnLrluJDlj7fnmbvlvZXvvIzmlrnkvr/mtYvor5VcclxuXHRcdFx0YWNjID0gXCJ0ZW1wXCIgKyBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCByZXFkYXRhID0gbmV3IENvbmZpZy5Mb2dpblJlcURhdGEoYWNjKTtcclxuXHRcdERhdGEuTG9naW5EYXRhLlNlbmRSZXEocmVxZGF0YSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uTG9naW5lZCgpe1xyXG5cdFx0dGhpcy5vcGVuTWFpblVpKCk7XHJcblx0fVxyXG5cclxuXHRvcGVuTWFpblVpKCl7XHJcblx0XHQvLyBpZighQ29uZmlnLlVJQ29uZmlnLkxvZ2luUGFja2FnZUxvYWRlZCB8fCAhQ29uZmlnLkRhdGFDb25maWcuSXNDb25maWdMb2FkZWQpIHtcclxuXHRcdC8vIFx0TGF5YS50aW1lci5vbmNlKDUwMCwgdGhpcywgdGhpcy5vcGVuTWFpblVpKTtcclxuXHRcdC8vIFx0cmV0dXJuO1xyXG5cdFx0Ly8gfTtcclxuXHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLlNjZW5lRW50ZXJFaWQuTWFpbk1lbnUpO1xyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbmZpZy5WaWV3S2l0Lk1haW5NZW51LktleSk7XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uU2NyaXB0QmFzZSBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlciB7XHJcblx0cHVibGljIGtpbmVtYXRpY1Nwcml0ZTpMYXlhLlNwcml0ZTNEO1xyXG5cdHByb3RlY3RlZCBfaXNIaXQgPSBmYWxzZTtcclxuXHJcblx0Z2V0IElzSGl0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faXNIaXQ7XHJcblx0fVxyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyU3RhdHVzKCl7XHJcblx0XHR0aGlzLl9pc0hpdCA9IGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyRW50ZXIob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcdGlmIChvdGhlci5vd25lciA9PT0gdGhpcy5raW5lbWF0aWNTcHJpdGUpe1xyXG5cdFx0XHR0aGlzLl9pc0hpdCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJTdGF5KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJFeGl0KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvbkVudGVyKGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0XHRpZiAoY29sbGlzaW9uLm90aGVyLm93bmVyID09PSB0aGlzLmtpbmVtYXRpY1Nwcml0ZSl7XHJcblx0XHRcdHRoaXMuX2lzSGl0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uU3RheShjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25FeGl0KGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0fVxyXG5cclxufSIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlc2tDb2xsaXNpb25TY3JpcHQgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG5cdHB1YmxpYyBraW5lbWF0aWNTcHJpdGU6TGF5YS5TcHJpdGUzRDtcclxuXHRfaXNIaXQgPSBmYWxzZTtcclxuXHJcblx0Z2V0IElzSGl0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faXNIaXQ7XHJcblx0fVxyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyU3RhdHVzKCl7XHJcblx0XHR0aGlzLl9pc0hpdCA9IGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25UcmlnZ2VyRW50ZXIob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcdGlmIChvdGhlci5vd25lciA9PT0gdGhpcy5raW5lbWF0aWNTcHJpdGUpe1xyXG5cdFx0XHR0aGlzLl9pc0hpdCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJTdGF5KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvblRyaWdnZXJFeGl0KG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvbkVudGVyKGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0XHRpZiAoY29sbGlzaW9uLm90aGVyLm93bmVyID09PSB0aGlzLmtpbmVtYXRpY1Nwcml0ZSl7XHJcblx0XHRcdHRoaXMuX2lzSGl0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uQ29sbGlzaW9uU3RheShjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25FeGl0KGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0fVxyXG5cclxufSIsImltcG9ydCAqIGFzIFV0aWxzIGZyb20gXCIuLi9Db21tb24vVXRpbHNcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vQ29yZS9Db3JlXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgTG9naWMgZnJvbSBcIi4vTG9naWNcIjtcclxuXHJcbmxldCBrbm9ja190aW1lID0gMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFiTG9naWMgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG4gICAgSXNJbml0ZWQgPSBmYWxzZTtcclxuICAgIFZkaXIgPSBuZXcgTGF5YS5WZWN0b3IzKCk7XHJcbiAgICBEZXNrUG9zaXRpb24gPSBuZXcgTGF5YS5WZWN0b3IzKCk7XHJcbiAgICBHU2NlbmU6TGF5YS5TY2VuZTNEO1xyXG4gICAgSGFuZFN0YXRlOnN0cmluZztcclxuICAgIERlc2tDbGFzczpDb3JlLlJpZ2lkT2JqZWN0O1xyXG4gICAgSGFuZENsYXNzOkNvcmUuUmlnaWRPYmplY3Q7XHJcbiAgICBkZXNrU2NyaXB0OkxvZ2ljLkRlc2tDb2xsaXNpb25TY3JpcHQ7XHJcbiAgICBoYW5kU2NyaXB0OkxvZ2ljLkhhbmRDb2xsaXNpb25TY3JpcHQ7XHJcbiAgICBwcml2YXRlIHRpbWVMaW5lOkxheWEuVGltZUxpbmUgPSBuZXcgTGF5YS5UaW1lTGluZSgpO1xyXG5cclxuICAgIG9uQXdha2UoKXtcclxuICAgICAgICB0aGlzLkdTY2VuZSA9IE1hbmFnZXIuU2NlbmVNYW5hZ2VyLkN1clNjZW5lIGFzIExheWEuU2NlbmUzRDtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcyA9IG5ldyBDb3JlLlJpZ2lkT2JqZWN0KFxyXG4gICAgICAgICAgICBDb3JlLk9iamVjdFByb3h5LmdldE9iaihDb25maWcuUG9vbFR5cGUuRGVzayksXHJcbiAgICAgICAgICAgIG5ldyBDb3JlLk9iamVjdFN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0ZPUldBUkQsIHRoaXMuZGVza0Rvd24uYmluZCh0aGlzKSksXHJcbiAgICAgICAgICAgIG5ldyBDb3JlLk9iamVjdFN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5ERVNLX0xFQVZFLCB0aGlzLmRlc2tMZWF2ZS5iaW5kKHRoaXMpKSxcclxuICAgICAgICAgICAgbmV3IENvcmUuT2JqZWN0U3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLkRFU0tfRU5URVIsIHRoaXMuZGVza0VudGVyLmJpbmQodGhpcykpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3Muc2V0UG9zaXRpb24oQ29uZmlnLk9iamVjdENvbmZpZy5ERVNLX1BPUyk7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MgPSBuZXcgQ29yZS5SaWdpZE9iamVjdChcclxuICAgICAgICAgICAgQ29yZS5PYmplY3RQcm94eS5nZXRPYmooQ29uZmlnLlBvb2xUeXBlLkhhbmQpLFxyXG4gICAgICAgICAgICBuZXcgQ29yZS5PYmplY3RTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9GT1JXQVJELCB0aGlzLmhhbmRGb3J3YXJkLmJpbmQodGhpcykpLFxyXG4gICAgICAgICAgICBuZXcgQ29yZS5PYmplY3RTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9CQUNLLCB0aGlzLmhhbmRCYWNrLmJpbmQodGhpcykpLFxyXG4gICAgICAgICAgICBuZXcgQ29yZS5PYmplY3RTdGF0ZShDb25maWcuU3RhdGVDb25maWcuQkFDS19QQVNTRUQsIHRoaXMuaGFuZEJhY2suYmluZCh0aGlzKSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5zZXRQb3NpdGlvbihDb25maWcuT2JqZWN0Q29uZmlnLkhBTkRfUE9TKTtcclxuICAgICAgICB0aGlzLmFkZENvbGxpc2lvblNjcmlwdCgpO1xyXG4gICAgICAgIC8vIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5rbm9ja09uY2UpO1xyXG4gICAgICAgIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5tb3ZlSGFuZCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50LkRPVUJMRV9DTElDSywgdGhpcywgdGhpcy5yZXN0YXJ0KTtcclxuXHJcbiAgICAgICAgdGhpcy5Jc0luaXRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZXNldFZlYygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGltZXJMaW5lKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGVzaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENvbGxpc2lvblNjcmlwdCgpe1xyXG4gICAgICAgIHRoaXMuZGVza1NjcmlwdCA9IHRoaXMuRGVza0NsYXNzLmFkZFNjcmlwdChMb2dpYy5EZXNrQ29sbGlzaW9uU2NyaXB0KSBhcyBMb2dpYy5EZXNrQ29sbGlzaW9uU2NyaXB0O1xyXG4gICAgICAgIHRoaXMuZGVza1NjcmlwdC5raW5lbWF0aWNTcHJpdGUgPSB0aGlzLkhhbmRDbGFzcy5PYmo7XHJcbiAgICAgICAgdGhpcy5oYW5kU2NyaXB0ID0gdGhpcy5IYW5kQ2xhc3MuYWRkU2NyaXB0KExvZ2ljLkhhbmRDb2xsaXNpb25TY3JpcHQpIGFzIExvZ2ljLkhhbmRDb2xsaXNpb25TY3JpcHQ7XHJcbiAgICAgICAgdGhpcy5oYW5kU2NyaXB0LmtpbmVtYXRpY1Nwcml0ZSA9IHRoaXMuRGVza0NsYXNzLk9iajtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVGltZWxpbmVDb21wbGV0ZSgpe1xyXG4gICAgICAgIGtub2NrX3RpbWUrKztcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRpbWVMaW5lIGNvbXBsZXRlISEhIVwiLCBrbm9ja190aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTGFiZWwobGFiZWw6U3RyaW5nKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMYWJlbE5hbWU6XCIgKyBsYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVUaW1lckxpbmUoKXtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLm9uKExheWEuRXZlbnQuQ09NUExFVEUsdGhpcyx0aGlzLm9uVGltZWxpbmVDb21wbGV0ZSk7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5vbihMYXlhLkV2ZW50LkxBQkVMLCB0aGlzLCB0aGlzLm9uTGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRWZWMoKXtcclxuICAgICAgICB0aGlzLlZkaXIueCA9IENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueDtcclxuICAgICAgICB0aGlzLlZkaXIueSA9IENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueTtcclxuICAgICAgICB0aGlzLlZkaXIueiA9IENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MuelxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUga25vY2tPbmNlKCl7XHJcbiAgICAgICAgdGhpcy5yZXNldFZlYygpO1xyXG4gICAgICAgIHRoaXMudGltZUxpbmUucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmFkZEtub2NrKCk7XHJcbiAgICAgICAgdGhpcy5hZGRLbm9jaygxKTtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLnBsYXkoMCxmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRTdGF5KF9zdGF5VGltZT86bnVtYmVyKXtcclxuICAgICAgICBfc3RheVRpbWUgPSBfc3RheVRpbWU/IF9zdGF5VGltZSAqIDEwMDA6IDA7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5hZGRMYWJlbChcInN0YXlcIiwwKS50byh0aGlzLlZkaXIsIHt5OkNvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueX0sIF9zdGF5VGltZSwgbnVsbCwgMClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEtub2NrKF9kZWx0YVRpbWU/Om51bWJlcil7XHJcbiAgICAgICAgX2RlbHRhVGltZSA9IF9kZWx0YVRpbWU/IF9kZWx0YVRpbWUgKiAxMDAwOiAwO1xyXG4gICAgICAgIHRoaXMudGltZUxpbmVcclxuICAgICAgICAgICAgLnRvKHRoaXMuVmRpcix7eTpDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfRU5EX1BPUy55fSwyMDAsbnVsbCxfZGVsdGFUaW1lKVxyXG4gICAgICAgICAgICAudG8odGhpcy5WZGlyLHt5OkNvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueX0sMjAwLG51bGwsMClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc3RhcnQoKXtcclxuICAgICAgICB0aGlzLmRlc2tTY3JpcHQuY2xlYXJTdGF0dXMoKTtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuSURFTCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGVzaygpO1xyXG4gICAgICAgIHRoaXMucmVzZXRIYW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXdMZXZlbCgpe1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5ERVNLX0xFQVZFKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVEZXNrKCl7XHJcbiAgICAgICAgLy8gdGhpcy5kZXNrRG93bigpO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0ZPUldBUkQpO1xyXG4gICAgICAgIHRoaXMucmVzZXRWZWMoKTtcclxuICAgICAgICB0aGlzLnRpbWVMaW5lLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5hZGRLbm9jaygpO1xyXG4gICAgICAgIHRoaXMuYWRkS25vY2soMSk7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5wbGF5KDAsdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldERlc2soKXtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5zZXRQb3NpdGlvbihDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfUE9TKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BEZXNrKCl7XHJcbiAgICAgICAgdGhpcy50aW1lTGluZS5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5TVE9QKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlc2tEb3duKCl7XHJcbiAgICAgICAgLy8gbGV0IHZlYyA9IHRoaXMuRGVza0NsYXNzLlBvc2l0aW9uO1xyXG4gICAgICAgIC8vIHZlYy55IC09IDAuMztcclxuICAgICAgICAvLyB0aGlzLkRlc2tDbGFzcy5zZXRQb3NpdGlvbih2ZWMpO1xyXG5cclxuICAgICAgICAvLyBpZih2ZWMueSA8PSBDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfRU5EX1BPUy55KXtcclxuICAgICAgICAvLyAgICAgdGhpcy5EZXNrQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLk1PVkVfQkFDSyk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5zZXRQb3NpdGlvbih0aGlzLlZkaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVza1VwKCl7XHJcbiAgICAgICAgbGV0IHZlYyA9IHRoaXMuRGVza0NsYXNzLlBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy55ICs9IDAuMztcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5zZXRQb3NpdGlvbih2ZWMpO1xyXG5cclxuICAgICAgICBpZih2ZWMueSA+PSBDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfUE9TLnkpe1xyXG4gICAgICAgICAgICB0aGlzLkRlc2tDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuTU9WRV9GT1JXQVJEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZXNrRW50ZXIoKXtcclxuICAgICAgICBsZXQgdmVjID0gdGhpcy5EZXNrQ2xhc3MuUG9zaXRpb247XHJcbiAgICAgICAgdmVjLnggLT0gMC4xO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLnNldFBvc2l0aW9uKHZlYyk7XHJcblxyXG4gICAgICAgIGlmKHZlYy54IDw9IENvbmZpZy5PYmplY3RDb25maWcuREVTS19QT1MueCl7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZURlc2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRlc2tEaXNhcHBlYXIoKXtcclxuICAgICAgICB0aGlzLkRlc2tDbGFzcy5jaGFuZ2VPYmooQ29uZmlnLlBvb2xUeXBlLkRlc2spO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLnNldFBvc2l0aW9uKENvbmZpZy5PYmplY3RDb25maWcuREVTS19FTlRFUl9QT1MpO1xyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5ERVNLX0VOVEVSKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlc2tMZWF2ZSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB2ZWMgPSB0aGlzLkRlc2tDbGFzcy5Qb3NpdGlvbjtcclxuICAgICAgICB2ZWMueCAtPSAwLjE7XHJcbiAgICAgICAgdGhpcy5EZXNrQ2xhc3Muc2V0UG9zaXRpb24odmVjKTtcclxuXHJcbiAgICAgICAgaWYodmVjLnggPD0gLTIpe1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVza0Rpc2FwcGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZURlc2soKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLmRlc2tTY3JpcHQuSXNIaXQpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0RGVzaygpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BEZXNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuRGVza0NsYXNzLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUhhbmQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkhhbmRDbGFzcy5DdXJTdGF0ZSk7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICBpZih0aGlzLkhhbmRDbGFzcy5DdXJTdGF0ZSA9PSBDb25maWcuU3RhdGVDb25maWcuU1RPUCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLkhhbmRDbGFzcy5DdXJTdGF0ZSA9PSBDb25maWcuU3RhdGVDb25maWcuSURFTCl7XHJcbiAgICAgICAgICAgIHRoaXMuSGFuZENsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5NT1ZFX0ZPUldBUkQpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kRm9yd2FyZCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZlYyA9IHRoaXMuSGFuZENsYXNzLlBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy54ICs9IENvbmZpZy5PYmplY3RDb25maWcuU1BFRURfSEFORCAqIExheWEudGltZXIuZGVsdGE7XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3Muc2V0UG9zaXRpb24odmVjKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5IYW5kQ2xhc3MuUG9zaXRpb24ueCA+PSBDb25maWcuT2JqZWN0Q29uZmlnLkhBTkRfRU5EX1BPUy54KXtcclxuICAgICAgICAgICAgdGhpcy5IYW5kQ2xhc3MuY2hhbmdlU3RhdGUoQ29uZmlnLlN0YXRlQ29uZmlnLk1PVkVfQkFDSyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25SZWFjaEZpbmlzaCgpe1xyXG4gICAgICAgIHRoaXMucmVzZXRIYW5kKCk7XHJcbiAgICAgICAgLy/liLDovr7nu4jngrnliqDliIZcclxuICAgICAgICBEYXRhLlBsYXllckRhdGEuUG9pbnQgKz0gMTAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7lvpfliIbvvJpcIixEYXRhLlBsYXllckRhdGEuUG9pbnQpO1xyXG4gICAgICAgIGlmKERhdGEuUGxheWVyRGF0YS5Qb2ludCA+PSAzMDApe1xyXG4gICAgICAgICAgICB0aGlzLm5ld0xldmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZEJhY2soKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuSGFuZENsYXNzLlBvc2l0aW9uLnggPD0gQ29uZmlnLk9iamVjdENvbmZpZy5IQU5EX1BPUy54KXtcclxuICAgICAgICAgICAgdGhpcy5vblJlYWNoRmluaXNoKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuSGFuZENsYXNzLlBvc2l0aW9uLnggPCBDb25maWcuT2JqZWN0Q29uZmlnLkRFU0tfUE9TLngpe1xyXG4gICAgICAgICAgICB0aGlzLkhhbmRDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuQkFDS19QQVNTRUQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZlYyA9IHRoaXMuSGFuZENsYXNzLlBvc2l0aW9uO1xyXG4gICAgICAgIHZlYy54IC09IENvbmZpZy5PYmplY3RDb25maWcuU1BFRURfSEFORCAqIExheWEudGltZXIuZGVsdGE7O1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLnNldFBvc2l0aW9uKHZlYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEhhbmQoKXtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5zZXRQb3NpdGlvbihDb25maWcuT2JqZWN0Q29uZmlnLkhBTkRfUE9TKTtcclxuICAgICAgICB0aGlzLkhhbmRDbGFzcy5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuSURFTCk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVIYW5kR3Jhdml0eShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9wSGFuZCgpe1xyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLmNoYW5nZVN0YXRlKENvbmZpZy5TdGF0ZUNvbmZpZy5TVE9QKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVuYWJsZUhhbmRHcmF2aXR5KF9vcGVuOmJvb2xlYW4pe1xyXG4gICAgICAgIGlmKHRoaXMuSGFuZENsYXNzLlJpZ2lkM0QuaXNLaW5lbWF0aWMgPT0gIV9vcGVuKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuSGFuZENsYXNzLlJpZ2lkM0QuaXNLaW5lbWF0aWMgPSAhX29wZW47XHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MuUmlnaWQzRC5ncmF2aXR5ID0gX29wZW4/IG5ldyBMYXlhLlZlY3RvcjMoMCwgLTEwLCAwKTogTGF5YS5WZWN0b3IzLl9aRVJPO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25IYW5kSGl0KCl7XHJcbiAgICAgICAgRGF0YS5QbGF5ZXJEYXRhLlBvaW50ID0gMDtcclxuICAgICAgICB0aGlzLnN0b3BIYW5kKCk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVIYW5kR3Jhdml0eSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5kZXNrU2NyaXB0LklzSGl0KXtcclxuICAgICAgICAgICAgdGhpcy5vbkhhbmRIaXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5IYW5kQ2xhc3MudXBkYXRlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZSgpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfmr4/kuIDluKfml7bpl7TvvJonLExheWEudGltZXIuZGVsdGEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGVzaygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSGFuZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGFuZENvbGxpc2lvblNjcmlwdCBleHRlbmRzIENvbW1vbi5FdmVudERpc3BhdGhlciB7XHJcblx0cHVibGljIGtpbmVtYXRpY1Nwcml0ZTpMYXlhLlNwcml0ZTNEO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlckVudGVyKG90aGVyOkxheWEuUGh5c2ljc0NvbXBvbmVudCk6dm9pZCB7XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlclN0YXkob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcclxuXHR9XHJcblx0XHJcblx0cHVibGljIG9uVHJpZ2dlckV4aXQob3RoZXI6TGF5YS5QaHlzaWNzQ29tcG9uZW50KTp2b2lkIHtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25FbnRlcihjb2xsaXNpb246TGF5YS5Db2xsaXNpb24pOnZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCLnorDmkp7vvIFcIik7XHJcblx0XHRpZiAoY29sbGlzaW9uLm90aGVyLm93bmVyID09PSB0aGlzLmtpbmVtYXRpY1Nwcml0ZSl7XHJcblx0XHRcdC8vICh0aGlzLm93bmVyLmdldENvbXBvbmVudChMYXlhLlJpZ2lkYm9keTNEKSBhcyBMYXlhLlJpZ2lkYm9keTNEKS5ncmF2aXR5ID0gbmV3IExheWEuVmVjdG9yMygwLCAtMTAsIDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgb25Db2xsaXNpb25TdGF5KGNvbGxpc2lvbjpMYXlhLkNvbGxpc2lvbik6dm9pZCB7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkNvbGxpc2lvbkV4aXQoY29sbGlzaW9uOkxheWEuQ29sbGlzaW9uKTp2b2lkIHtcclxuXHR9XHJcblxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9HcmFiTG9naWMnO1xyXG5leHBvcnQgKiBmcm9tICcuL0Rlc2tDb2xsaXNpb25TY3JpcHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0hhbmRDb2xsaXNpb25TY3JpcHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbGxpc2lvblNjcmlwdEJhc2UnO1xyXG4iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSBcIi4vR2FtZVNjZW5lXCI7XHJcblxyXG5jbGFzcyBNYWluIHtcclxuXHRwcml2YXRlIGFuaW1hdGlvbnM6QXJyYXk8c3RyaW5nPiA9IFsnYXR0YWNrMScsICdhdHRhY2syJywgJ2F0dGFjazMnLCAnd2luJ107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHQvL+aJi+acuuS4jlBD6YCC6YWN5LiN5ZCMXHJcblx0XHRpZihMYXlhLkJyb3dzZXIub25QQyl7XHJcblx0XHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gTGF5YS5TdGFnZS5TQ0FMRV9TSE9XQUxMO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gTGF5YS5TdGFnZS5TQ0FMRV9GSVhFRF9XSURUSDtcclxuXHRcdH1cclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IExheWEuU3RhZ2UuU0NSRUVOX1ZFUlRJQ0FMO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKSB7XHJcblx0XHRNYW5hZ2VyLlNjZW5lTWFuYWdlci5jcmVhdGUzZFNjZW5lKCk7XHJcblxyXG5cdFx0Ly8gQ29tbW9uLmxvYWRBbGxTdWJwYWNrYWdlcyh0aGlzLCB0aGlzLm9uU3ViUGFja2FnZUxvYWRlZCk7XHJcblx0fVxyXG5cclxuXHRvblN1YlBhY2thZ2VMb2FkZWQoKXtcclxuXHRcdE1hbmFnZXIuU2NlbmVNYW5hZ2VyLmNyZWF0ZTNkU2NlbmUoKTtcclxuXHR9XHJcbn1cclxuLy/mv4DmtLvlkK/liqjnsbtcclxubmV3IE1haW4oKTtcclxuIiwi77u/aW1wb3J0ICogYXMgQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Db25maWcnO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZU1hbmFnZXIgZXh0ZW5kcyBDb21tb24uRXZlbnREaXNwYXRoZXIge1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfaW5zdDpCYXNlTWFuYWdlcjtcclxuICAgIHByaXZhdGUgX21zZ1R5cGU6bnVtYmVyO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgSW5zdCgpe1xyXG4gICAgICAgIGlmKCFNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBjcmVhZSBhIHNjZW5lIGZpcnN0IScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5faW5zdCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3QgPSBNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZS5nZXRDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLl9pbnN0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3QgPSBNYW5hZ2VyLlNjZW5lTWFuYWdlci5DdXJTY2VuZS5hZGRDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuXHJcbi8v54K55Ye754m55pWIXHJcbmV4cG9ydCBjbGFzcyBDbGlja0VmZmVjdE1hbmFnZXJ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBUb3VjaENvbTpmZ3VpLkdDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgICBzdGF0aWMgSW5pdCgpe1xyXG4gICAgICAgIGlmKHRoaXMuVG91Y2hDb20pIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZ3Jvb3RJbnN0ID0gZmd1aS5HUm9vdC5pbnN0O1xyXG5cdFx0dGhpcy5Ub3VjaENvbSA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdEZyb21VUkwoJ3VpOi8vTWFpblVJL0NvbXBvbmVudF9kaWFuamknKS5hc0NvbTtcclxuXHRcdGdyb290SW5zdC5hZGRDaGlsZCh0aGlzLlRvdWNoQ29tKTtcclxuXHRcdHRoaXMuVG91Y2hDb20uc29ydGluZ09yZGVyID0gQ29uZmlnLlVJQ29uZmlnLlNvcnRpbmdPcmRlci5DbGlja0VmZmVjdDtcclxuICAgICAgICAvLyB0aGlzLlRvdWNoQ29tLm5vZGUuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcclxuICAgICAgICAvLyB0aGlzLlRvdWNoQ29tLmRpc3BsYXlPYmplY3Quc2V0U2libGluZ0luZGV4KHRoaXMuVG91Y2hDb20ubm9kZS5wYXJlbnQuY2hpbGRyZW5Db3VudCk7XHJcblxyXG4gICAgICAgIGdyb290SW5zdC5kaXNwbGF5T2JqZWN0Lm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMucGxheUNsaWNrRWZmZWN0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSAge2NjLkV2ZW50LkV2ZW50VG91Y2h9IGV2dFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGxheUNsaWNrRWZmZWN0KGV2dCl7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2dC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuVG91Y2hDb20uc2V0WFkocG9zLngsIGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSBwb3MueSk7XHJcbiAgICAgICAgdGhpcy5Ub3VjaENvbS5nZXRUcmFuc2l0aW9uKCdFZmZlY3RfVCcpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGlkZSgpe1xyXG4gICAgICAgIHRoaXMuVG91Y2hDb20udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGZndWkuR1Jvb3QuaW5zdC5ub2RlLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvdygpe1xyXG4gICAgICAgIHRoaXMuVG91Y2hDb20udmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9VSS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vQ29tbW9uL1V0aWxzXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQge0RldlJlcUJvZHksIExvZ2luRGF0YX0gZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhTWFuYWdlciBleHRlbmRzIE1hbmFnZXIuQmFzZU1hbmFnZXIge1xyXG4gICAgc3RhdGljIEluc3Q6RGF0YU1hbmFnZXI7XHJcbiAgICBwcml2YXRlIF9pc0Jhc2VCb2R5SW5pdGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2lzQm9keUluaXRlZDpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Bd2FrZSgpe1xyXG4gICAgICAgIC8vIERhdGEuRGV2UmVxQm9keS5Jbml0QmFzZUJvZHkoKTtcclxuICAgICAgICB0aGlzLmluaXRCYXNlQm9keSgpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MsIHRoaXMub25Mb2dpblN1Y2Nlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEJhc2VCb2R5KCl7XHJcbiAgICAgICAgaWYodGhpcy5faXNCYXNlQm9keUluaXRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvL+S4jueZu+W9leaXoOWFs+eahOaOpeWPo+ebtOaOpeWIm+W7ulxyXG4gICAgICAgIC8v6YWN572uXHJcbiAgICAgICAgRGF0YS5Db25maWdEYXRhLlJlcUJvZHkgPSBuZXcgRGF0YS5IdHRwUmVxYm9keUJhc2UoMCwgMTAwMDIpOyAgIFxyXG4gICAgICAgIC8v55m75b2VXHJcbiAgICAgICAgRGF0YS5Mb2dpbkRhdGEuUmVxQm9keSA9IG5ldyBEYXRhLkh0dHBSZXFib2R5QmFzZSgwLCAxMDAwMyk7IFxyXG5cclxuICAgICAgICB0aGlzLl9pc0Jhc2VCb2R5SW5pdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTG9naW5TdWNjZXNzKCl7XHJcbiAgICAgICAgdGhpcy5pbml0RGV2Qm9kaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0RGV2Qm9kaWVzKCl7XHJcbiAgICAgICAgLy/ku6XkuIvor7fmsYLkvZPpnIDopoHnmbvlvZXmiY3lj6/liJvlu7pcclxuICAgICAgICBpZih0aGlzLl9pc0JvZHlJbml0ZWQgfHwgIURhdGEuTG9naW5EYXRhLlNlc3Npb24pIHJldHVybjtcclxuICAgICAgICAvLyMxMDgwMiDojrflj5bpppbmnYDmppxcclxuICAgICAgICBEYXRhLlVwZ3JhZGVEYXRhLlJlcUJvZHkgPSBuZXcgRGV2UmVxQm9keSg4LCAxMDgwMik7XHJcbiAgICBcclxuICAgICAgICB0aGlzLl9pc0JvZHlJbml0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59ICIsImltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuLy/oj4roirHnrqHnkIZcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdJY29uTWFuYWdlciBleHRlbmRzIE1hbmFnZXIuQmFzZU1hbmFnZXIge1xyXG4gICAgc3RhdGljIEluc3Q6TG9hZGluZ0ljb25NYW5hZ2VyO1xyXG4gICAgcHVibGljIElzSW5pdGVkOkJvb2xlYW47XHJcbiAgICBwdWJsaWMgQ29udHJvbGxlcjpVSS5Mb2FkaW5nQ29udHJvbGxlcjtcclxuXHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgdGhpcy5Jbml0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEluaXQoKXtcclxuICAgICAgICBpZih0aGlzLklzSW5pdGVkID09IHRydWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Jc0luaXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlciA9IE1hbmFnZXIuVUlNYW5hZ2VyLm9wZW5Db250cm9sbGVyKFVJLkxvYWRpbmdDb250cm9sbGVyKSBhcyBVSS5Mb2FkaW5nQ29udHJvbGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBTaG93TG9hZGluZygpIHtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIuc2hvd0xvYWRpbmcoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgSGlkZUxvYWRpbmcoKXtcclxuICAgICAgICBpZighdGhpcy5Jc0luaXRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIuaGlkZUxvYWRpbmcoKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4uL1VJL1VJXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSAnLi4vTWFuYWdlci9NYW5hZ2VyJztcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gJy4uL0NvbW1vbi9Db21tb24nO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuXHJcbi8v55m75b2V6L+b5bqm566h55CGXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nUHJvZ3Jlc3NNYW5hZ2VyIGV4dGVuZHMgTWFuYWdlci5CYXNlTWFuYWdlcntcclxuICAgIHN0YXRpYyBJbnN0OkxvYWRpbmdQcm9ncmVzc01hbmFnZXI7XHJcbiAgICBwdWJsaWMgSXNJbml0ZWQ6Qm9vbGVhbjtcclxuICAgIHB1YmxpYyBDb250cm9sbGVyOlVJLkxvYWRpbmdQcm9ncmVzc0NvbnRyb2xsZXI7XHJcblxyXG4gICAgb25Bd2FrZSgpe1xyXG4gICAgICAgIHRoaXMuSW5pdCgpO1xyXG4gICAgICAgIC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5TaW1Qcm9ncmVzc0VuZCwgdGhpcy5vbkxvYWRpbmdDb21wbGV0ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEluaXQoKXtcclxuICAgICAgICBpZih0aGlzLklzSW5pdGVkID09IHRydWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Jc0luaXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlciA9IE1hbmFnZXIuVUlNYW5hZ2VyLm9wZW5Db250cm9sbGVyKFVJLkxvYWRpbmdQcm9ncmVzc0NvbnRyb2xsZXIpIGFzIFVJLkxvYWRpbmdQcm9ncmVzc0NvbnRyb2xsZXI7XHJcblxyXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLlNpbVByb2dyZXNzRW5kLCB0aGlzLm9uTG9hZGluZ0NvbXBsZXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VWlQcm9ncmVzcyhwcm9ncmVzczpudW1iZXIsIHBrZ05hbWU/OnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIuc2hvd1VpUHJvZ3Jlc3MocHJvZ3Jlc3MsIHBrZ05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIFNob3dXeExvZ2luKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLklzSW5pdGVkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5Db250cm9sbGVyLnNob3dXeExvZ2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvbmZpZ1Byb2dyZXNzKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNJbml0ZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLkNvbnRyb2xsZXIuc2hvd0NvbmZpZ1Byb2dyZXNzKCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWRpbmdDb21wbGV0ZSgpe1xyXG4gICAgICAgIC8v5Yqg6L295oiQ5Yqf5ZCO5bqf6Zmk6Ieq5bexXHJcbiAgICAgICAgTG9jYWxDb25maWcuSXNTaW1Qcm9ncmVzc0VuZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Jc0luaXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQ29udHJvbGxlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9CYXNlTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ2xpY2tFZmZlY3RNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nSWNvbk1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0xvYWRpbmdQcm9ncmVzc01hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL05ldE1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1JvbGVCYXNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9TdGF0ZUJhc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL1NjZW5lTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU3Bhd25NYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9UaW1lck1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1VJTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vVmVyc2lvbk1hbmFnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0RhdGFNYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Qb29sTWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vUm9sZU1hbmFnZXInO1xyXG4iLCJpbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuLi9VSS9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vQ29tbW9uL1V0aWxzXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbi8v5piv5ZCm56ys5LiA5qyh6L+e5o6lXHJcbmxldCBpc0ZpcnN0U2VuZCA9IHRydWU7XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cE1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgX2hyOlhNTEh0dHBSZXF1ZXN0O1xyXG4gICAgcHJpdmF0ZSBfcmVxS2V5OnN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGljIF9obU1hcDpDb25maWcuRGljdGlvbmFyeTxIdHRwTWFuYWdlcj4gPSB7fTtcclxuICAgIHByb3RlY3RlZCBEYXRhOkRhdGEuSHR0cFJlcWJvZHlCYXNlO1xyXG4gICAgcHJpdmF0ZSBDYWxsYmFjazpGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgQ29ubmVjdFRpbWVzOm51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgSXNTaG93TG9hZGluZzpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNDb25uZWN0aW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgLy8gRGF0YS5EZXZSZXFCb2R5LkluaXRCYXNlQm9keSgpO1xyXG4gICAgICAgIC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MsIHRoaXMuaW5pdERldkJvZGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldCBSZXF1ZXN0VXJsKHVybDpzdHJpbmcpe1xyXG4gICAgICAgIENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICBDb25uZWN0KHJlcWtleTpzdHJpbmcsIGRhdGE6RGF0YS5IdHRwUmVxYm9keUJhc2UsIGNhbGxiYWNrPzpGdW5jdGlvbiwgaXNTaG93TG9hZGluZz86Ym9vbGVhbiwgSXNHbT86Ym9vbGVhbikge1xyXG4gICAgICAgIGlmKCFkYXRhKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2hyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgdGhpcy5fcmVxS2V5ID0gcmVxa2V5O1xyXG5cclxuICAgICAgICBpZihJc0dtKVxyXG4gICAgICAgICAgICB0aGlzLl9oci5vcGVuKFwicG9zdFwiLCBDb25maWcuTmV0Q29uZmlnLkdNVXJsLCB0cnVlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2hyLm9wZW4oXCJwb3N0XCIsIENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCwgdHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5faHIub25yZWFkeXN0YXRlY2hhbmdlID0gdGhpcy5Pbkh0dHBSZXF1ZXN0Q29tcGxldGUuYmluZCh0aGlzKTtcclxuICAgICAgICAvL+i2heaXtlxyXG4gICAgICAgIHRoaXMuX2hyLnRpbWVvdXQgPSA1MDAwO1xyXG4gICAgICAgIHRoaXMuX2hyLm9udGltZW91dCA9IHRoaXMuT25UaW1lb3V0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5faHIub25lcnJvciA9IHRoaXMuT25IdHRwUmVxdWVzdEVycm9yLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZihkYXRhLlJlcURhdGEpID09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgZGF0YS5SZXFEYXRhID0gSlNPTi5wYXJzZShkYXRhLlJlcURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLklzU2hvd0xvYWRpbmcgPSBpc1Nob3dMb2FkaW5nO1xyXG4gICAgICAgIC8v6YeN6L+e5qyh5pWwXHJcbiAgICAgICAgdGhpcy5Db25uZWN0VGltZXMrKztcclxuICAgICAgICAvL+i2heaXtuavq+enkuaVsFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2hyLnRpbWVvdXQpO1xyXG5cclxuICAgICAgICB0aGlzLl9oci5yZXNwb25zZVR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpZih0eXBlb2YgZGF0YS5SZXFEYXRhICE9ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgZGF0YS5SZXFEYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YS5SZXFEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgLy/mmK/lkKbmraPlnKjov57mjqXvvIzljIXmi6zotoXml7ZcclxuICAgICAgICB0aGlzLklzQ29ubmVjdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIC8v6I+K6IqxXHJcbiAgICAgICAgaWYoaXNGaXJzdFNlbmQpe1xyXG4gICAgICAgICAgICBpc0ZpcnN0U2VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBNYW5hZ2VyLkxvYWRpbmdJY29uTWFuYWdlci5Jbml0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpc1Nob3dMb2FkaW5nID09IHRydWUpe1xyXG4gICAgICAgICAgICBNYW5hZ2VyLkxvYWRpbmdJY29uTWFuYWdlci5JbnN0LlNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIE1hbmFnZXIuTG9hZGluZ0ljb25NYW5hZ2VyLkluc3QuSGlkZUxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIC8vM+enkuWQjuWGjei9rOiPiuiKsVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuTGF0ZVNob3dMb2FkaW5nLmJpbmQodGhpcyksIDMwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQ29tbW9uLk5ldEh0dHBDb25uZWN0RWlkLkNvbm5lY3RCZWdpbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIExhdGVTaG93TG9hZGluZygpe1xyXG4gICAgICAgIGlmICh0aGlzLklzQ29ubmVjdGluZyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgTWFuYWdlci5Mb2FkaW5nSWNvbk1hbmFnZXIuSW5zdC5TaG93TG9hZGluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+ivt+axgumUmeivr1xyXG5cdE9uSHR0cFJlcXVlc3RFcnJvcihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJ5QXV0b1JlY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL+i2heaXtlxyXG4gICAgT25UaW1lb3V0KGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICAgICAgdGhpcy50cnlBdXRvUmVjb25uZWN0KCk7XHJcblx0fVxyXG5cclxuXHRPbkh0dHBSZXF1ZXN0UHJvZ3Jlc3MoZSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCLliqDovb3ov5vluqY+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+XCIsZS5sb2FkZWQgLyBlLnRvdGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZW1vdmVSZXF1ZXN0KCl7XHJcbiAgICAgICAgLy/np7vpmaTlvZPliY3ov57mjqXvvIzlv4XpobvlhYjorr7nva7ov57mjqXnirbmgIFJc0Nvbm5lY3RpbmfkuLpmYWxzZeWQjuWGjeiwg+eUqFxyXG4gICAgICAgIGlmKHRoaXMuSXNDb25uZWN0aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2hyID0gbnVsbDtcclxuICAgICAgICB0aGlzLkRhdGEgPSBudWxsO1xyXG4gICAgICAgIEh0dHBNYW5hZ2VyLl9obU1hcFt0aGlzLl9yZXFLZXldID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRyeUF1dG9SZWNvbm5lY3QoKXtcclxuICAgICAgICAvL+etlueVpe+8mjAuNeenkumHjei/nuS4gOasoe+8jOmHjeivlTXmrKFcclxuICAgICAgICBpZih0aGlzLkNvbm5lY3RUaW1lcyA8IDMpe1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoNTAwLCB0aGlzLCB0aGlzLmF1dG9SZUNvbm5lY3QpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb25uZWN0V2luZG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXV0b1JlQ29ubmVjdCgpe1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdCgnJywgdGhpcy5EYXRhLCB0aGlzLkNhbGxiYWNrLCB0cnVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzaG93Q29ubmVjdFdpbmRvdygpe1xyXG4gICAgICAgIHRoaXMuSXNDb25uZWN0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgTWFuYWdlci5Mb2FkaW5nSWNvbk1hbmFnZXIuSW5zdC5IaWRlTG9hZGluZygpO1xyXG5cclxuICAgICAgICAvLyBsZXQgcG9wdXBEYXRhID0ge1xyXG4gICAgICAgIC8vICAgICBDb250ZW50OiBDb25maWcuTG9jYWxDb250ZW50Lk5ldEVycm9yLFxyXG4gICAgICAgIC8vICAgICBZZXNCdG5Db250ZW50OkNvbmZpZy5Mb2NhbENvbnRlbnQuWWVzLFxyXG4gICAgICAgIC8vICAgICAvLyBCdG5TdHlsZTogMSxcclxuICAgICAgICAvLyAgICAgSGFzQmc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICBZZXNCdG5DYWxsYmFjazp0aGlzLkNvbm5lY3QuYmluZCh0aGlzLCAnJywgdGhpcy5EYXRhLCB0aGlzLkNhbGxiYWNrLCB0aGlzLklzU2hvd0xvYWRpbmcpXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBsZXQgY29udGVudCA9IFtDb25maWcuTG9jYWxDb250ZW50Lk5ldEVycm9yXTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgTWFuYWdlci5VSU1hbmFnZXIub3BlbkNvbmZpcm1XaW5kb3coXHJcbiAgICAgICAgICAgIGNvbnRlbnQsIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgICAgIHNlbGYuQ29ubmVjdCgnJywgc2VsZi5EYXRhLCBzZWxmLkNhbGxiYWNrLCBzZWxmLklzU2hvd0xvYWRpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblx0T25IdHRwUmVxdWVzdENvbXBsZXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9oci5yZWFkeVN0YXRlICE9IDQgfHwgKHRoaXMuX2hyLnN0YXR1cyA8IDIwMCB8fCB0aGlzLl9oci5zdGF0dXMgPj0gNDAwKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLklzQ29ubmVjdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdFRpbWVzID0gMDtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuX2hyLnJlc3BvbnNlVGV4dCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5faHIucmVzcG9uc2VUZXh0KSBhcyBDb25maWcuUmVzcERhdGFTdHJ1Y3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+Pj4+Pj4+Pj4+Pj4+6L+e5o6l54q25oCB77yaJywgZGF0YS5SZXNwQ29kZSwgZGF0YS5SZXNwTXNnKTtcclxuICAgICAgICAvL+i/nuaOpeWksei0pVxyXG4gICAgICAgIC8vIGlmKGRhdGEuUmVzcENvZGUgIT0gQ29uZmlnLkh0dHBDb25uZWN0U3RhdGUuU3VjY2VzcykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0eXBlb2YodGhpcy5DYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIHRoaXMuQ2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WPkemAgeWTjeW6lOaVsOaNru+8jOWbnuS8oOivt+axguaVsOaNrlxyXG4gICAgICAgIC8vIGlmKHR5cGVvZih0aGlzLkRhdGEuUmVxRGF0YSkgPT0gJ3N0cmluZycpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLkRhdGEuUmVxRGF0YSA9IEpTT04ucGFyc2UodGhpcy5EYXRhLlJlcURhdGEpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBEYXRhLkRhdGFTdHJ1Y3QuT25IdHRwUmVxdWVzdENvbXBsZXRlKGRhdGEsIHRoaXMuX3JlcUtleSwgdGhpcy5EYXRhLlJlcURhdGEpO1xyXG5cclxuICAgICAgICAvL+i/nuaOpee7k+adn+WIoOmZpOWvueixoVxyXG4gICAgICAgIHRoaXMuX3JlbW92ZVJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5OZXRIdHRwQ29ubmVjdEVpZC5TZXJ2aWNlUmVzcG9uZCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU29ja2V0TWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdDpTb2NrZXRNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBzb2NrZXQ6IExheWEuU29ja2V0O1xyXG4gICAgcHJpdmF0ZSBvdXRwdXQ6IExheWEuQnl0ZTtcclxuICAgIHByaXZhdGUgX2RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLyoqIOW/g+i3s+WMheWumuaXtuWZqCAqL1xyXG4gICAgcHJpdmF0ZSBfdGltZXI6IG51bWJlciA9IDA7XHJcbiAgICAvKiog5b+D6Lez5YyF5pyN5Yqh5Zmo6LaF5pe25a6a5pe25ZmoICovXHJcbiAgICBwcml2YXRlIF9zZXJ2ZXJUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIC8qKiDlv4Pot7PljIXotoXml7bml7bpl7TvvIzljZXkvY1tcyzml7bpl7Tlj6rog73mmK/mlbTnp5LmlbDvvIxzZXRUaW1lb3V05Zyo5ZCO5Y+w5q+P56eS5omn6KGM5LiA5qyhICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF90aW1lb3V0OiBudW1iZXIgPSAxMDAwMDtcclxuICAgIC8qKiDpnZnpu5jph43ov57lrprml7blmaggKi9cclxuICAgIHByaXZhdGUgX3NpbGVudFRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOW/g+i3s+WMheacjeWKoeWZqOi2heaXtuaXtumXtO+8jOWNleS9jW1zLOaXtumXtOWPquiDveaYr+aVtOenkuaVsO+8jHNldFRpbWVvdXTlnKjlkI7lj7Dmr4/np5LmiafooYzkuIDmrKEgKi9cclxuICAgIHByaXZhdGUgX3NlcnZlclRpbWVvdXQ6IG51bWJlciA9IDEwMDAwOyAvL1RPRE/osIPor5Xmiorml7bpl7TliqDplb8zNjAwMDAw77yM5Y6fMTAwMDBcclxuICAgIC8qKiDmlq3nur/nsbvlnovvvJoxLuiiq+aMpOS4i+e6vywgMi7lgZzmnI3nu7TmiqQoc29ja2V05pat5byAKSwzIOmdnuazleaTjeS9nCAqL1xyXG4gICAgcHJpdmF0ZSBfZGlzY29ubmVjdFR5cGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0KCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX2luc3Qpe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0ID0gbmV3IFNvY2tldE1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xyXG4gICAgfSBcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHVybD86c3RyaW5nLCBwb3J0PzpudW1iZXIpIHtcclxuICAgICAgICAvLyB0aGlzLmNvbm5lY3QodXJsLCBwb3J0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29ubmVjdCh1cmw6c3RyaW5nLCBwb3J0PzpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaW5zdC5jb25uZWN0KHVybCwgcG9ydCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25uZWN0KHVybDpzdHJpbmcsIHBvcnQ/Om51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IExheWEuU29ja2V0KCk7XHJcblxyXG4gICAgICAgIGlmKHBvcnQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNvbm5lY3QodXJsLCBwb3J0KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY29ubmVjdEJ5VXJsKHVybCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMuc29ja2V0Lm91dHB1dDtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oTGF5YS5FdmVudC5PUEVOLCB0aGlzLCB0aGlzLm9uU29ja2V0T3Blbik7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oTGF5YS5FdmVudC5DTE9TRSwgdGhpcywgdGhpcy5vblNvY2tldENsb3NlKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbihMYXlhLkV2ZW50Lk1FU1NBR0UsIHRoaXMsIHRoaXMub25NZXNzYWdlUmV2ZWl2ZWQpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKExheWEuRXZlbnQuRVJST1IsIHRoaXMsIHRoaXMub25Db25uZWN0RXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5b+D6Lez5qOA5rWLXHJcbiAgICBwcml2YXRlIHN0YXJ0SGVhcnRiZWF0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGUudG9VVENTdHJpbmcoKSArIFwiIHN0YXJ0IGhlYXJ0YmVhdFwiKTtcclxuICAgICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQodGhpcy50aW1lckhhbmRsZXIuYmluZCh0aGlzKSwgdGhpcy5fdGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lckhhbmRsZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0ZS50b1VUQ1N0cmluZygpICsgXCIgc2VuZCBoZWFydGJlYXRcIik7XHJcblxyXG4gICAgICAgIC8v5Y+R6YCB5LiA5Liq5b+D6Lez77yM5ZCO56uv5pS25Yiw5ZCO77yM6L+U5Zue5LiA5Liq5b+D6Lez5raI5oGvXHJcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZCgnciB1IHRoZXJlPycpO1xyXG4gICAgICAgIHRoaXMuX3NlcnZlclRpbWVyID0gc2V0VGltZW91dCh0aGlzLnNlcnZlclRpbWVySGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLl9zZXJ2ZXJUaW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlcnZlclRpbWVySGFuZGxlcigpIHtcclxuICAgICAgICAvL+acjeWKoeWZqOi2heaXtuayoeacieWbnuWMhe+8jOaWreW8gOi/nuaOpeeEtuWQjumHjei/nlxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RhdGUudG9VVENTdHJpbmcoKSArIFwiIHdhaXQgc2VydmVyIHJlcGx5IHRpbWVvdXRcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRIZWFydGJlYXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZGF0ZS50b1VUQ1N0cmluZygpICsgXCIgcmVzZXQgaGVhcnRiZWF0XCIpO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3NlcnZlclRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU29ja2V0T3BlbigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldEhlYXJ0YmVhdCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRIZWFydGJlYXQoKTtcclxuXHJcbiAgICAgICAgLy8g5Y+R6YCB5a2X56ym5LiyXHJcbiAgICAgICAgdGhpcy5zb2NrZXQuc2VuZChcImRlbW9uc3RyYXRlIDxzZW5kU3RyaW5nPlwiKTtcclxuXHJcbiAgICAgICAgLy8g5L2/55Sob3V0cHV0LndyaXRlQnl0ZeWPkemAgVxyXG4gICAgICAgIHZhciBtZXNzYWdlOiBzdHJpbmcgPSBcImRlbW9uc3RyYXRlIDxvdXRwdXQud3JpdGVCeXRlPlwiO1xyXG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LndyaXRlQnl0ZShtZXNzYWdlLmNoYXJDb2RlQXQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvY2tldC5mbHVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Tb2NrZXRDbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvY2tldCBjbG9zZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk1lc3NhZ2VSZXZlaXZlZChtZXNzYWdlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgZnJvbSBzZXJ2ZXI6XCIsIG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAvL+iOt+WPluWIsOa2iOaBr+mHjee9ruW/g+i3s+ajgOa1i1xyXG4gICAgICAgIHRoaXMucmVzZXRIZWFydGJlYXQoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0SGVhcnRiZWF0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgfWVsc2UgaWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgTGF5YS5CeXRlKG1lc3NhZ2UpLnJlYWRVVEZCeXRlcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0LmlucHV0LmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNvbm5lY3RFcnJvcihlOiBMYXlhLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5pat57q/57G75Z6L77yaMS7ooqvmjKTkuIvnur8sIDIu5YGc5pyN57u05oqkKHNvY2tldOaWreW8gCksMyDpnZ7ms5Xmk43kvZwgKi9cclxuICAgIHB1YmxpYyBzZXREaXNjb25uZWN0KHR5cGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2Rpc2Nvbm5lY3RUeXBlID0gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuX2Rpc2Nvbm5lY3RUeXBlID0gMDtcclxuICAgICAgICB0aGlzLnJlc2V0SGVhcnRiZWF0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL0NvcmUvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9vbE1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2VyIHtcclxuICAgIHN0YXRpYyBJbnN0OlBvb2xNYW5hZ2VyO1xyXG5cclxuICAgIC8vZmd1aeWvueixoeaxoFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmd1aVBvb2wgPSBuZXcgZmd1aS5HT2JqZWN0UG9vbCgpO1xyXG5cclxuICAgIC8vZmd1aeWvueixoeaxoFxyXG4gICAgc3RhdGljIGdldCBGZ3VpUG9vbCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZndWlQb29sO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5aS06YOo5rGgXHJcbiAgICBzdGF0aWMgZ2V0IEhlYWRQb29sKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbChDb25maWcuUG9vbFR5cGUuSGVhZE1vZGVsKSBhcyBMYXlhLlNwcml0ZTNEW107XHJcbiAgICB9XHJcblxyXG4gICAgLy/ouqvkvZPmsaBcclxuICAgIHN0YXRpYyBnZXQgQm9keVBvb2woKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb29sKENvbmZpZy5Qb29sVHlwZS5Cb2R5TW9kZWwpIGFzIExheWEuU3ByaXRlM0RbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25Bd2FrZSgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVjb3ZlcihrZXk6c3RyaW5nLCBpdGVtLCBjbHNUeXBlPyl7XHJcbiAgICAgICAgaWYoIWtleSB8fCAhaXRlbSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNsc1R5cGUpe1xyXG4gICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlckJ5Q2xhc3MoY2xzVHlwZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIENvbmZpZy5Qb29sVHlwZS5GZ3VpT2JqOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0gaW5zdGFuY2VvZiBmZ3VpLkdPYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRmd1aVBvb2wucmV0dXJuT2JqZWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIoa2V5LCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SXRlbShrZXk6c3RyaW5nLCBjbHNUeXBlPyl7XHJcbiAgICAgICAgaWYoY2xzVHlwZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBMYXlhLlBvb2wuZ2V0SXRlbUJ5Q2xhc3Moa2V5LCBjbHNUeXBlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJyc6XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTGF5YS5Qb29sLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UG9vbChrZXk6c3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gTGF5YS5Qb29sLmdldFBvb2xCeVNpZ24oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXJQb29sKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIExheWEuUG9vbC5jbGVhckJ5U2lnbihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGVhckFsbFBvb2xzKCl7XHJcbiAgICAgICAgdGhpcy5GZ3VpUG9vbC5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRNb2RlbEJ5VHlwZShwb29sVHlwZTpzdHJpbmcsIHBhdGg6c3RyaW5nLCBjYWxsYmFjazpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGxldCBoZWFkID0gdGhpcy5nZXRJdGVtKHBvb2xUeXBlKSBhcyBMYXlhLlNwcml0ZTNEO1xyXG4gICAgICAgIGlmKCFoZWFkKXtcclxuICAgICAgICAgICAgTWFuYWdlci5TcGF3bk1hbmFnZXIuTG9hZDNkTW9kZWwoXHJcbiAgICAgICAgICAgICAgICBwYXRoLCBcclxuICAgICAgICAgICAgICAgIChtb2RlbDpDb25maWcuTW9kZWxEYXRhU3RydWN0KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWQgPSBtb2RlbC5tc3A7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGhlYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgdGhpc0FyZ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGhlYWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRPYmpCeUZ1bmMoa2V5OnN0cmluZywgZnVuYzpGdW5jdGlvbil7XHJcbiAgICAgICAgcmV0dXJuIExheWEuUG9vbC5nZXRJdGVtQnlDcmVhdGVGdW4oa2V5LCBmdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SGVhZChwYXRoOnN0cmluZywgY2FsbGJhY2s6RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICB0aGlzLmdldE1vZGVsQnlUeXBlKENvbmZpZy5Qb29sVHlwZS5IZWFkTW9kZWwsIHBhdGgsIGNhbGxiYWNrLCB0aGlzQXJnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Qm9keShwYXRoOnN0cmluZywgY2FsbGJhY2s6RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICB0aGlzLmdldE1vZGVsQnlUeXBlKENvbmZpZy5Qb29sVHlwZS5Cb2R5TW9kZWwsIHBhdGgsIGNhbGxiYWNrLCB0aGlzQXJnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmV0dXJuRmd1aU9iaihib3g6Zmd1aS5HT2JqZWN0KXtcclxuICAgICAgICB0aGlzLnJlY292ZXIoQ29uZmlnLlBvb2xUeXBlLkZndWlPYmosIGJveCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9sZUJhc2V7XHJcbiAgICBIZWFkOmZndWkuR0xvYWRlcjtcclxuICAgIEJvZHlTbG90OmZndWkuR09iamVjdDtcclxuICAgIEJvZHk6TGF5YS5Ta2VsZXRvbjtcclxuICAgIC8vIEFuaTpMYXlhLkFuaW1hdG9yO1xyXG4gICAgU3RhdGU6TWFuYWdlci5TdGF0ZUJhc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaGVhZDpmZ3VpLkdMb2FkZXIsIGJvZHlTbG90OmZndWkuR09iamVjdCwgYm9keT86TGF5YS5Ta2VsZXRvbil7XHJcbiAgICAgICAgdGhpcy5IZWFkID0gaGVhZDtcclxuICAgICAgICB0aGlzLkJvZHlTbG90ID0gYm9keVNsb3Q7XHJcbiAgICAgICAgdGhpcy5Cb2R5ID0gYm9keTtcclxuICAgICAgICAvLyB0aGlzLkFuaSA9IGJvZHkuZ2V0Q29tcG9uZW50KExheWEuQW5pbWF0b3IpIGFzIExheWEuQW5pbWF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IEFuaVN0YXRlKCl7XHJcbiAgICAvLyAgICAgaWYoIXRoaXMuQW5pKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuQW5pLmdldEN1cnJlbnRBbmltYXRvclBsYXlTdGF0ZSgpO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyUm9sZSBleHRlbmRzIFJvbGVCYXNlIHtcclxuICAgIHByaXZhdGUgbUN1cnJJbmRleDpudW1iZXIgPSAwO1xyXG4gICAgbUZhY3Rvcnk6TGF5YS5UZW1wbGV0O1xyXG4gICAgc2V0Qm9keUNhbGxiYWNrOkZ1bmN0aW9uO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihoZWFkOmZndWkuR0xvYWRlciwgYm9keVNsb3Q6Zmd1aS5HT2JqZWN0KXtcclxuICAgICAgICBzdXBlcihoZWFkLCBib2R5U2xvdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkFuaVRlbXBsZXRFcnJvcigpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQbGF5ZXIgYW5pVGVtcGxldCBlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQm9keUFuaVN0b3AoKXtcclxuICAgICAgICAvL+W+queOr+aSreaUvlxyXG4gICAgICAgIC8vIHRoaXMucGxheUJvZHlBbmkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBsYXlCb2R5QW5pKGxvb3A/OmJvb2xlYW4pe1xyXG4gICAgICAgIC8v6buY6K6k5b6q546v5pKt5pS+XHJcbiAgICAgICAgbG9vcCA9IG51bGwgIT0gbG9vcD8gbG9vcDogdHJ1ZTtcclxuICAgICAgICB0aGlzLkJvZHkucGxheSgwLCBsb29wKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBwYXJzZVRlbXBsZXRDb21wbGV0ZShjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KTp2b2lkIHtcclxuICAgICAgICAvL+WIm+W7uuaooeW8j+S4ujHvvIzlj6/ku6XlkK/nlKjmjaLoo4VcclxuICAgICAgICB0aGlzLkJvZHkgPSB0aGlzLm1GYWN0b3J5LmJ1aWxkQXJtYXR1cmUoMSk7XHJcbiAgICAgICAgdGhpcy5Cb2R5U2xvdC5kaXNwbGF5T2JqZWN0LmFkZENoaWxkKHRoaXMuQm9keSk7XHJcbiAgICAgICAgdGhpcy5Cb2R5Lm9uKExheWEuRXZlbnQuU1RPUFBFRCwgdGhpcywgdGhpcy5vbkJvZHlBbmlTdG9wKTtcclxuICAgICAgICB0aGlzLnBsYXlCb2R5QW5pKCk7XHJcblxyXG4gICAgICAgIGlmKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Qm9keShib2R5UGF0aDpzdHJpbmcsIGNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8sIC4uLmRhdGEpe1xyXG4gICAgICAgIHRoaXMubUZhY3RvcnkgPSBNYW5hZ2VyLlBvb2xNYW5hZ2VyLmdldEl0ZW0oQ29uZmlnLlBvb2xJdGVtS2V5LkRyZXNzVGVtcGxhdGUsIExheWEuVGVtcGxldCk7XHJcbiAgICAgICAgdGhpcy5tRmFjdG9yeS5vbihMYXlhLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCB0aGlzLnBhcnNlVGVtcGxldENvbXBsZXRlLCBbY2FsbGJhY2ssIHRoaXNBcmddKTtcclxuICAgICAgICB0aGlzLm1GYWN0b3J5Lm9uKExheWEuRXZlbnQuRVJST1IsIHRoaXMsIHRoaXMub25BbmlUZW1wbGV0RXJyb3IpO1xyXG4gICAgICAgIHRoaXMubUZhY3RvcnkubG9hZEFuaShib2R5UGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SGVhZCh1cmw6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLkhlYWQudXJsID0gdXJsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb2xlTWFuYWdlcntcclxuICAgIHN0YXRpYyBQTEFZRVIgPSAnUGxheWVyJztcclxuICAgIHN0YXRpYyBFTkVNWSA9ICdFbmVteSc7XHJcbiAgICAvL+WKqOeUu+WQjVxyXG4gICAgc3RhdGljIHJlYWRvbmx5IEFOSU1BVE9SU19NT1ZFID0gWyd3YWxrJywgJ3J1biddO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IEFOSU1BVE9SU19BVFRBQ0sgPSBbJ2F0dGFjazEnLCAnYXR0YWNrMiddO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IEFOSU1BVE9SU19QTEFZRVJfU0tJTEwgPSAnc2tpbGwnO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IEFOSU1BVE9SX0RFQUQgPSAnZGVhdGgnO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IEFOSU1BVE9SX1dJTiA9ICd3aW4nO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IEFOSU1BVE9SX0lETEUgPSAnRmlnaHRJZGxlJztcclxuICAgIHN0YXRpYyByZWFkb25seSBBTklNQVRPUl9QUk9WT0NfRU5FTVkgPSAnYXBwZWFyJztcclxuXHJcbiAgICBzdGF0aWMgUGxheWVyOk1hbmFnZXIuUGxheWVyUm9sZTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaGFzUGxheWVyKCk6Ym9vbGVhbntcclxuICAgICAgICBpZih0aGlzLlBsYXllcil7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDcmVhdGUgcm9sZSBmaXJzdCEnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ3JlYXRlUm9sZShoZWFkOmZndWkuR0xvYWRlciwgaGVhZFVybDpzdHJpbmcsIGJvZHlTbG90OmZndWkuR09iamVjdCwgYm9keVBhdGg6c3RyaW5nLCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZighYm9keVBhdGggfHwgIWhlYWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5QbGF5ZXIgPSBuZXcgTWFuYWdlci5QbGF5ZXJSb2xlKGhlYWQsIGJvZHlTbG90KTtcclxuICAgICAgICB0aGlzLmNoYW5nZUhlYWQoaGVhZFVybCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VCb2R5KGJvZHlQYXRoLCBjYWxsYmFjaywgdGhpc0FyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mjaLlpLRcclxuICAgIHN0YXRpYyBjaGFuZ2VIZWFkKHVybDpzdHJpbmcpe1xyXG4gICAgICAgIGlmKCF0aGlzLmhhc1BsYXllcikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLlBsYXllci5zZXRIZWFkKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mjaLoo4VcclxuICAgIHN0YXRpYyBjaGFuZ2VCb2R5KHBhdGg6c3RyaW5nLCBjYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/LCAuLi5kYXRhKXtcclxuICAgICAgICBpZighdGhpcy5oYXNQbGF5ZXIpIHJldHVybjtcclxuICAgICAgICBpZighcGF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBNYW5hZ2VyLlBvb2xNYW5hZ2VyLnJlY292ZXIoQ29uZmlnLlBvb2xJdGVtS2V5LkRyZXNzVGVtcGxhdGUsIHRoaXMuUGxheWVyLm1GYWN0b3J5KTtcclxuICAgICAgICB0aGlzLlBsYXllci5zZXRCb2R5KHBhdGgsIGNhbGxiYWNrLCB0aGlzQXJnLCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0U3RhdGUoYW5pTmFtZTpzdHJpbmcsIHJvbGU6TWFuYWdlci5Sb2xlQmFzZSl7XHJcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BTklNQVRPUl9JRExFOlxyXG4gICAgICAgICAgICAgICAgcm9sZS5TdGF0ZS5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuSURFTCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BTklNQVRPUl9ERUFEOlxyXG4gICAgICAgICAgICAgICAgcm9sZS5TdGF0ZS5jaGFuZ2VTdGF0ZShDb25maWcuU3RhdGVDb25maWcuREVBRCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gXCIuLi9HYW1lU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyLkJhc2VNYW5hZ2Vye1xyXG4gICAgcHVibGljIHN0YXRpYyBfaW5zdDpTY2VuZU1hbmFnZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEN1clNjZW5lOkxheWEuU2NlbmUzRCB8IExheWEuU2NlbmU7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBJbnN0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZTJkU2NlbmUoKXtcclxuICAgICAgICBMYXlhLlNjZW5lLmxvYWQoR2FtZUNvbmZpZy5zdGFydFNjZW5lLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25PcGVuU2NlbmUpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGNyZWF0ZTNkU2NlbmUoKXtcclxuXHRcdC8v5re75YqgM0TlnLrmma9cclxuXHRcdGxldCBzY2VuZSA9IExheWEuc3RhZ2UuYWRkQ2hpbGQobmV3IExheWEuU2NlbmUzRCgpKSBhcyBMYXlhLlNjZW5lM0Q7XHJcblxyXG5cdFx0Ly/mt7vliqDnhafnm7jmnLpcclxuXHRcdGxldCBjYW1lcmEgPSAoc2NlbmUuYWRkQ2hpbGQobmV3IExheWEuQ2FtZXJhKDAsIDAuMSwgMTAwKSkpIGFzIExheWEuQ2FtZXJhO1xyXG5cdFx0Y2FtZXJhLnRyYW5zZm9ybS50cmFuc2xhdGUobmV3IExheWEuVmVjdG9yMygxLCAxLCAzKSk7XHJcblx0XHQvLyBjYW1lcmEudHJhbnNmb3JtLnJvdGF0ZShuZXcgTGF5YS5WZWN0b3IzKC0zMCwgMCwgMCksIHRydWUsIGZhbHNlKTtcclxuXHRcdGNhbWVyYS5jbGVhckZsYWcgPSBMYXlhLkJhc2VDYW1lcmEuQ0xFQVJGTEFHX0RFUFRIT05MWTtcclxuXHJcblx0XHQvL+a3u+WKoOaWueWQkeWFiVxyXG5cdFx0bGV0IGRpcmVjdGlvbkxpZ2h0ID0gc2NlbmUuYWRkQ2hpbGQobmV3IExheWEuRGlyZWN0aW9uTGlnaHQoKSkgYXMgTGF5YS5EaXJlY3Rpb25MaWdodDtcclxuXHRcdGRpcmVjdGlvbkxpZ2h0LmNvbG9yID0gbmV3IExheWEuVmVjdG9yMygwLjYsIDAuNiwgMC42KTtcclxuXHRcdGRpcmVjdGlvbkxpZ2h0LnRyYW5zZm9ybS53b3JsZE1hdHJpeC5zZXRGb3J3YXJkKG5ldyBMYXlhLlZlY3RvcjMoMSwgLTEsIDApKTtcclxuXHJcblx0XHR0aGlzLm9uT3BlblNjZW5lKHNjZW5lKTtcclxuXHR9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb25PcGVuU2NlbmUoc2NlbmU/OkxheWEuU2NlbmUzRCB8IExheWEuU2NlbmUpe1xyXG5cdFx0aWYoc2NlbmUpe1xyXG5cdFx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHNjZW5lKTtcclxuICAgICAgICAgICAgdGhpcy5DdXJTY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2NlbmUuYWRkQ29tcG9uZW50KE1hbmFnZXIuU2NlbmVNYW5hZ2VyKTtcclxuICAgICAgICAgICAgc2NlbmUuYWRkQ29tcG9uZW50KE1hbmFnZXIuSHR0cE1hbmFnZXIpO1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRDb21wb25lbnQoTWFuYWdlci5VSU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRDb21wb25lbnQoTWFuYWdlci5EYXRhTWFuYWdlcik7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZENvbXBvbmVudChHYW1lU2NlbmUpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4uL1VJL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuLi9VSS9VSVwiO1xyXG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tIFwiLi4vQ29tbW9uL1V0aWxzXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tICcuLi9Db25maWcvTG9jYWxDb25maWcnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcbmltcG9ydCBHRXZlbnQgZnJvbSBcIi4uL0NvbW1vbi9HRXZlbnRcIjtcclxuXHJcbi8vY29jb3PnlKhcclxuLy8gbGV0IGxvYWRlZFBhY2thZ2U6e1trZXk6c3RyaW5nXTpib29sZWFufSA9IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXduTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBsb2FkM2RNb2RlbDtcclxuICAgIHByaXZhdGUgc3RhdGljIHBvb2xPYmpzOntba2V5OnN0cmluZ106IGFueX07XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuICAgIFxyXG4gICAgLy/liqDovb3mqKHlnotcclxuICAgIHN0YXRpYyBMb2FkM2RNb2RlbChwYXRoOnN0cmluZywgY29tcGxldGVDYWxsYmFjaz86RnVuY3Rpb24sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZighTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUgfHwgIXBhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gTGF5YS5sb2FkZXIuY3JlYXRlKHBhdGgsIExheWEuSGFuZGxlci5jcmVhdGUodGhpc0FyZywgY29tcGxldGVDYWxsYmFjaykpO1xyXG5cclxuICAgICAgICBMYXlhLlNwcml0ZTNELmxvYWQocGF0aCwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKT0+e1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgY29tcGxldGVDYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgIGxldCBzcCA9IENvbW1vbi5SZXNvdXJjZS5nZXRSZXMocGF0aCk7XHJcbiAgICAgICAgICAgICAgICBpZighc3ApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbXNwID0gTWFuYWdlci5TY2VuZU1hbmFnZXIuQ3VyU2NlbmUuYWRkQ2hpbGQoc3ApIGFzIExheWEuU3ByaXRlM0Q7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pID0gbXNwLmdldENvbXBvbmVudChMYXlhLkFuaW1hdG9yKSBhcyBMYXlhLkFuaW1hdG9yO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaVN0YXRlOkxheWEuQW5pbWF0b3JQbGF5U3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpZihhbmkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaVN0YXRlID0gYW5pLmdldEN1cnJlbnRBbmltYXRvclBsYXlTdGF0ZSgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBtb2RlbERhdGEgPSBuZXcgQ29uZmlnLk1vZGVsRGF0YVN0cnVjdChtc3AsIGFuaSwgYW5pU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjay5jYWxsKHRoaXNBcmcsIG1vZGVsRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liqDovb3nvZHmoLxcclxuICAgIHN0YXRpYyBMb2FkM2RNZXNoKHBhdGg6c3RyaW5nLCBjb21wbGV0ZUNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKCFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIENvbW1vbi5SZXNvdXJjZS5sb2FkKHBhdGgsIHRoaXNBcmcsIGNvbXBsZXRlQ2FsbGJhY2ssIG51bGwsIExheWEuTG9hZGVyLk1FU0gpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqg6L295p2Q6LSoXHJcbiAgICBzdGF0aWMgTG9hZE1hdGVyaWFsKHBhdGg6c3RyaW5nLCBjb21wbGV0ZUNhbGxiYWNrPzpGdW5jdGlvbiwgdGhpc0FyZz8pe1xyXG4gICAgICAgIGlmKCFwYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIENvbW1vbi5SZXNvdXJjZS5sb2FkKHBhdGgsIHRoaXNBcmcsIGNvbXBsZXRlQ2FsbGJhY2ssIG51bGwsIExheWEuTG9hZGVyLk1BVEVSSUFMKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WKqOaAgeWKoOi9vVVJ5YyFICBjb2Nvc+eUqFxyXG4gICAgLy8gc3RhdGljIExvYWRVSVBhY2thZ2UoX3BhdGgsIGNhbGxiYWNrKSB7XHJcbiAgICAvLyAgICAgaWYodHlwZW9mKF9wYXRoKSAhPSBcInN0cmluZ1wiKSByZXR1cm47XHJcblxyXG4gICAgLy8gICAgIGlmKGxvYWRlZFBhY2thZ2VbX3BhdGhdKXtcclxuICAgIC8vICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xyXG4gICAgLy8gICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1lbHNle1xyXG4gICAgLy8gICAgICAgICBmZ3VpLlVJUGFja2FnZS5hZGRQYWNrYWdlKF9wYXRoLCAoZXJyKT0+e1xyXG4gICAgLy8gICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgbG9hZGVkUGFja2FnZVtfcGF0aF0gPSB0cnVlO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKXtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy/ku47msaDkuK3liJvlu7rlr7nosaFcclxuICAgIHN0YXRpYyBDcmVhdGVPYmplY3RGcm9tUG9vbChfcGF0aDpzdHJpbmcsIF9zbG90OmZndWkuR0dyYXBoKSB7XHJcbiAgICAgICAgaWYoIV9wYXRoIHx8ICFfc2xvdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvL+S7juaxoOS4reWIm+W7uuS4gOS4qlNrZWxldG9u5a+56LGhXHJcbiAgICAgICAgbGV0IG9iaiA9IExheWEuUG9vbC5nZXRJdGVtKF9wYXRoKTtcclxuICAgICAgICBpZighb2JqKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8v55Sf5oiQ5ZSv5LiAZ2lkXHJcbiAgICAgICAgaWYoIW9ialsnJFBvb2xHSUQnXSl7XHJcbiAgICAgICAgICAgIG9ialsnJFBvb2xHSUQnXSA9IExheWEuVXRpbHMuZ2V0R0lEKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFvYmpbJyRQYXRoJ10pe1xyXG4gICAgICAgICAgICBvYmpbJyRQYXRoJ10gPSBfcGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb29sT2Jqc1tvYmpbJyRQb29sR0lEJ11dID0gb2JqO1xyXG5cclxuICAgICAgICBfc2xvdC5kaXNwbGF5T2JqZWN0LmFkZENoaWxkKG9iaik7XHJcblxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ku47liJvlu7pTcGluZeaIlkRyYWdvbkJvbmXliqjnlLtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBfcGF0aCDot6/lvoRcclxuICAgICAqIEBwYXJhbSAge2ZndWkuR0dyYXBofSBfc2xvdCDniLblr7nosaEgZmd1aSBncmFwaFxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nIHwgbnVtYmVyfSBfbmFtZSDliqjnlLvlkI3lrZfmiJbogIXntKLlvJVcclxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IF9pc0xvb3Ag5piv5ZCm5b6q546v5pKt5pS+77yM6buY6K6k5b6q546v5pKt5pS+XHJcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBfaXNQbGF5IOaYr+WQpueri+WNs+aSreaUvu+8jOm7mOiupOaSreaUvlxyXG4gICAgICogQHJldHVybiB7c3AuU2tlbGV0b259XHJcbiAgICAgKi9cclxuICAgIC8vIHN0YXRpYyBDcmVhdGVTcGluZShfcGF0aCwgX3Nsb3QsIF9uYW1lLCBfaXNMb29wLCBfaXNQbGF5KSB7XHJcbiAgICAvLyAgICAgaWYodHlwZW9mKF9wYXRoKSAhPSBcInN0cmluZ1wiIHx8ICFfc2xvdCB8fCAhX3Nsb3Qubm9kZSkgcmV0dXJuXHJcblxyXG4gICAgLy8gICAgIGxldCBza2VsZXRvbiA9IF9zbG90Lm5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgIC8vICAgICBpZihza2VsZXRvbiA9PSBudWxsKXtcclxuICAgIC8vICAgICAgICAgc2tlbGV0b24gPSBfc2xvdC5ub2RlLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBza2VsZXRvbi5wcmVtdWx0aXBsaWVkQWxwaGEgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAgICAgbGV0IG9uUHJvY2VzcyA9IGZ1bmN0aW9uKGNvbXBsZXRlQ291bnQsIHRvdGFsQ291bnQsIGl0ZW0pIHt9XHJcbiAgICAvLyAgICAgbGV0IGNiID0gZnVuY3Rpb24oZXJyLCByZXMpe1xyXG4gICAgLy8gICAgICAgICBza2VsZXRvbi5za2VsZXRvbkRhdGEgPSByZXM7XHJcblxyXG4gICAgLy8gICAgICAgICBfaXNMb29wID0gX2lzTG9vcD8gX2lzTG9vcDogdHJ1ZTtcclxuICAgIC8vICAgICAgICAgaWYoc2tlbGV0b24uc2tlbGV0b25EYXRhICYmIHNrZWxldG9uLnNrZWxldG9uRGF0YS5sb2FkZWQgJiYgX25hbWUpe1xyXG4gICAgLy8gICAgICAgICAgICAgc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIF9uYW1lLCBfaXNMb29wKVxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICBza2VsZXRvbi5wYXVzZWQgPSBfaXNQbGF5ID09IGZhbHNlXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBjYy5sb2FkZXIubG9hZFJlcyhfcGF0aCwgc3AuU2tlbGV0b25EYXRhLCBvblByb2Nlc3MsIGNiKVxyXG5cclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHNrZWxldG9uXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy/pgJrov4fpooTliLbkvZPliJvlu7pTcGluZVxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IF9wYXRoIFByZWZhYui3r+W+hFxyXG4gICAgICogQHBhcmFtICB7Zmd1aS5HR3JhcGh9IF9zbG90IOeItuWvueixoSBmZ3VpIGdyYXBoXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsbGJhY2sg5Yqo55S75ZCN5a2X5oiW6ICF57Si5byVXHJcbiAgICAgKi9cclxuICAgIC8vIHN0YXRpYyBDcmVhdGVTcGluZUZyb21QcmVmYWIoX3BhdGgsIF9zbG90LCBjYWxsYmFjaykge1xyXG4gICAgLy8gICAgIGlmKHR5cGVvZihfcGF0aCkgIT0gXCJzdHJpbmdcIiB8fCAhX3Nsb3QgfHwgIV9zbG90Lm5vZGUpIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgLyoqIEB0eXBlIHtzcC5Ta2VsZXRvbn0gKi9cclxuICAgIC8vICAgICAvLyBsZXQgc2tlbGV0b247XHJcbiAgICAvLyAgICAgY2MubG9hZGVyLmxvYWRSZXMoX3BhdGgsIGNjLlByZWZhYiwgZnVuY3Rpb24oZXJyLCBwcmVmYWIpIHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIGxldCBwcmVmYWJOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgIC8vICAgICAgICAgICAgIC8qKiBAdHlwZSB7c3AuU2tlbGV0b259ICovXHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgc2tlbGV0b24gPSAgcHJlZmFiTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgLy8gICAgICAgICAgICAgX3Nsb3Qubm9kZS5hZGRDaGlsZChwcmVmYWJOb2RlKTtcclxuICAgIC8vICAgICAgICAgICAgIHByZWZhYk5vZGUucG9zaXRpb24gPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKHNrZWxldG9uKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBHRXZlbnQuRGlzcGF0Y2goR0V2ZW50LlNQSU5FX1BSRUZBQl9MT0FERUQpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBzdGF0aWMgTG9hZFZpZXcocGtnOnN0cmluZywgY29tOnN0cmluZyl7XHJcbiAgICAgICAgaWYoIXBrZyB8fCAhY29tKSByZXR1cm47XHJcblxyXG4gICAgICAgIENvbW1vbi5SZXNvdXJjZS5hZGRVaVBhY2thZ2UocGtnKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZ3Jvb3RJbnN0ID0gZmd1aS5HUm9vdC5pbnN0O1xyXG4gICAgICAgIGxldCB1aSA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChwa2csIGNvbSkuYXNDb207XHJcbiAgICAgICAgaWYodWkpe1xyXG4gICAgICAgICAgICBncm9vdEluc3QuYWRkQ2hpbGQodWkpO1xyXG4gICAgICAgICAgICB1aS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8v5bCP5ri45oiP6YCC6YWNXHJcbiAgICAgICAgICAgIHVpLnNldFNpemUoZ3Jvb3RJbnN0LndpZHRoLCBncm9vdEluc3QuaGVpZ2h0KTtcclxuICAgICAgICAgICAgdWkuc2V0WFkoMCwgMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsIHRvIGFkZCB1aSBwYWNrYWdlOiBcIiwgcGtnLCBjb20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlQmFzZXtcclxuICAgIHByb3RlY3RlZCBfc3RhdGU6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBDb25maWcuU3RhdGVDb25maWcuSURFTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VyU3RhdGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdGUoc3RhdGU6c3RyaW5nKXtcclxuICAgICAgICBpZih0aGlzLl9zdGF0ZSA9PSBzdGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vVUkvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxubGV0IHRpbWVySWQgPSAtMVxyXG4vL+iuoeaXtuWZqOaxoFxyXG5sZXQgdGltZXJQb29sID0gbmV3IEFycmF5PFRpbWVyPigpXHJcbmxldCB0aW1lckxpc3QgPSBuZXcgQXJyYXk8VGltZXI+KClcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lciB7XHJcbiAgICBwdWJsaWMgSWQ6bnVtYmVyO1xyXG4gICAgcHVibGljIE1heENkOm51bWJlcjtcclxuICAgIHB1YmxpYyBDdXJDZCA9IDA7XHJcbiAgICBwdWJsaWMgT25TdGFydDpGdW5jdGlvbjtcclxuICAgIHB1YmxpYyBPblVwZGF0ZTpGdW5jdGlvbjtcclxuICAgIHB1YmxpYyBPbkVuZDpGdW5jdGlvbjtcclxuICAgIHB1YmxpYyBUYXJnZXQ7XHJcbiAgICBwdWJsaWMgVGhpc0FyZzpDb21tb24uRXZlbnREaXNwYXRoZXI7XHJcbiAgICBwdWJsaWMgRW5kVGltZSA9IDA7XHJcbiAgICBwdWJsaWMgSXNSdW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc1N0YXJ0ID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNBbGl2ZSA9IHRydWU7XHJcbiAgICBwdWJsaWMgU3RhcnRUaW1lOm51bWJlcjtcclxuICAgIHByaXZhdGUgYXV0b1JlbW92ZTpib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBJbml0KGNkOm51bWJlciwgc3RhcnRDYWxsYmFjazpGdW5jdGlvbiwgdXBkYXRlQ2FsbGJhY2s6RnVuY3Rpb24sIGVuZENhbGxiYWNrOkZ1bmN0aW9uLCB0YXJnZXQsIHRoaXNBcmcsIGF1dG9SZW1vdmU/OmJvb2xlYW4sIGF1dG9TdGFydD86Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5JZCA9IHRpbWVySWQgKyAxXHJcbiAgICAgICAgdGhpcy5NYXhDZCA9IGNkXHJcbiAgICAgICAgdGhpcy5DdXJDZCA9IDBcclxuICAgICAgICB0aGlzLk9uU3RhcnQgPSBzdGFydENhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5PblVwZGF0ZSA9IHVwZGF0ZUNhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5PbkVuZCA9IGVuZENhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5UYXJnZXQgPSB0YXJnZXRcclxuICAgICAgICB0aGlzLlRoaXNBcmcgPSB0aGlzQXJnXHJcbiAgICAgICAgdGhpcy5FbmRUaW1lID0gMFxyXG4gICAgICAgIHRoaXMuSXNSdW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuSXNTdGFydCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5Jc0FsaXZlID0gdHJ1ZVxyXG4gICAgICAgIC8v6buY6K6k6Ieq5Yqo6ZSA5q+BXHJcbiAgICAgICAgdGhpcy5hdXRvUmVtb3ZlID0gYXV0b1JlbW92ZSAhPSBudWxsPyBhdXRvUmVtb3ZlOiB0cnVlO1xyXG4gICAgICAgIC8v6buY6K6k6Ieq5Yqo5byA5aeLXHJcbiAgICAgICAgaWYoYXV0b1N0YXJ0ICE9IGZhbHNlKXtcclxuICAgICAgICAgICAgdGhpcy5TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGUoKXtcclxuICAgICAgICBpZighdGhpcy5Jc0FsaXZlKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGN1cnJ0aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBpZihjdXJydGltZSA8IHRoaXMuRW5kVGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMuQ3VyQ2QgPSAodGhpcy5FbmRUaW1lIC0gY3VycnRpbWUpICogMC4wMDFcclxuICAgICAgICAgICAgaWYodHlwZW9mKHRoaXMuT25VcGRhdGUpID09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk9uVXBkYXRlLmNhbGwodGhpcy5UaGlzQXJnLCB0aGlzLkN1ckNkLCB0aGlzLlRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLlVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5Jc1J1biA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuSXNTdGFydCA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICBpZih0eXBlb2YodGhpcy5PbkVuZCkgPT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuT25FbmQuY2FsbCh0aGlzLlRoaXNBcmcsIHRoaXMuVGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hdXRvUmVtb3ZlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU3RhcnQoKXtcclxuICAgICAgICB0aGlzLklzUnVuID0gdHJ1ZVxyXG5cclxuICAgICAgICBpZighdGhpcy5Jc1N0YXJ0KXtcclxuICAgICAgICAgICAgdGhpcy5Jc1N0YXJ0ID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5TdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAvL+iuoeaXtue7k+adn+aXtumXtFxyXG4gICAgICAgICAgICB0aGlzLkVuZFRpbWUgPSB0aGlzLlN0YXJ0VGltZSArIHRoaXMuTWF4Q2QgKiAxMDAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZih0eXBlb2YodGhpcy5PblN0YXJ0KSA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuT25TdGFydC5jYWxsKHRoaXMuVGhpc0FyZywgdGhpcy5UYXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBSZXNldENkKGNkKXtcclxuICAgICAgICBpZih0eXBlb2YoY2QpICE9IFwibnVtYmVyXCIpIHJldHVyblxyXG5cclxuICAgICAgICB0aGlzLk1heENkID0gY2RcclxuICAgICAgICB0aGlzLkVuZFRpbWUgPSBEYXRlLm5vdygpICsgdGhpcy5NYXhDZCAqIDEwMDBcclxuICAgIH1cclxuXHJcbiAgICBSZW1vdmUoKXtcclxuICAgICAgICAvLyB0aGlzLk1heENkID0gMDtcclxuICAgICAgICAvLyB0aGlzLkN1ckNkID0gMDtcclxuICAgICAgICB0aGlzLk9uU3RhcnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuT25VcGRhdGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuT25FbmQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLlRoaXNBcmcgPSBudWxsO1xyXG4gICAgICAgIC8vIHRoaXMuRW5kVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5Jc1J1biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuSXNTdGFydCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuSXNBbGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL+enu+WKqOWIsOmmluS9jVxyXG4gICAgICAgIGxldCBpbmRleCA9IHRpbWVyUG9vbC5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgIGlmKGluZGV4ID4gMCl7XHJcbiAgICAgICAgICAgIHRpbWVyUG9vbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aW1lclBvb2wudW5zaGlmdCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lck1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHt9IHRoaXNBcmcg5omn6KGM5Z+fXHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGNkXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gc3RhcnRDYWxsYmFjayDlvIDlp4vlm57osINcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSB1cGRhdGVDYWxsYmFjayDov4fnqIvlm57osINcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBlbmRDYWxsYmFjayDnu5PmnZ/lm57osINcclxuICAgICAqIEBwYXJhbSAge30gdGFyZ2V0IOiuoeaXtuebruagh1xyXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gYXV0b1JlbW92ZSDmmK/lkKboh6rliqjliLfmlrDvvIzpu5jorqToh6rliqhcclxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGF1dG9TdGFydCDmmK/lkKboh6rliqjlvIDlp4vvvIzpu5jorqToh6rliqhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIE5ld1RpbWVyKHRoaXNBcmcsIGNkOm51bWJlciwgc3RhcnRDYWxsYmFjazpGdW5jdGlvbiwgdXBkYXRlQ2FsbGJhY2s6RnVuY3Rpb24sIGVuZENhbGxiYWNrOkZ1bmN0aW9uLCB0YXJnZXQ/LCBhdXRvUmVtb3ZlPzpib29sZWFuLCBhdXRvU3RhcnQ/OmJvb2xlYW4pe1xyXG4gICAgICAgIGxldCB0ID0gdGltZXJQb29sWzBdO1xyXG4gICAgICAgIGlmKCF0IHx8IHQuSXNBbGl2ZSl7XHJcbiAgICAgICAgICAgIHQgPSBuZXcgVGltZXIoKVxyXG4gICAgICAgICAgICB0aW1lckxpc3RbdC5JZF0gPSB0XHJcbiAgICAgICAgICAgIHRpbWVyUG9vbC5wdXNoKHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHQuSW5pdChjZCwgc3RhcnRDYWxsYmFjaywgdXBkYXRlQ2FsbGJhY2ssIGVuZENhbGxiYWNrLCB0YXJnZXQsIHRoaXNBcmcsIGF1dG9SZW1vdmUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgUmVtb3ZlVGltZXIodGhpc0FyZzpDb21tb24uRXZlbnREaXNwYXRoZXIpe1xyXG4gICAgICAgIGlmKCF0aGlzQXJnKSByZXR1cm47XHJcbiAgICAgICAgdGltZXJQb29sLmZvckVhY2godGltZXI9PntcclxuICAgICAgICAgICAgaWYodGltZXIuVGhpc0FyZyAmJiB0aW1lci5UaGlzQXJnLmlkID09IHRoaXNBcmcuaWQpe1xyXG4gICAgICAgICAgICAgICAgdGltZXIuUmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgUmVtb3ZlQWxsVGltZXIoKXtcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGltZXJMaXN0KXtcclxuICAgICAgICAgICAgdGltZXJMaXN0W2ldLlJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgVXBkYXRlKCl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRpbWVyTGlzdCl7XHJcbiAgICAgICAgICAgIGlmKHRpbWVyTGlzdFtpXS5Jc0FsaXZlKXtcclxuICAgICAgICAgICAgICAgIHRpbWVyTGlzdFtpXS5VcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQ2xlYXJBbGxUaW1lcigpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aW1lckxpc3Qpe1xyXG4gICAgICAgICAgICB0aW1lckxpc3RbaV0uUmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aW1lckxpc3RbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi4vVUkvQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi4vVUkvVUlcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4uL0NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbi8v5by65Yi25byV5a+8XHJcbmxldCBHdWlkZUxpc3QgPSBuZXcgQXJyYXk8Zmd1aS5HQ29tcG9uZW50PigpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJTWFuYWdlciBleHRlbmRzIE1hbmFnZXIuQmFzZU1hbmFnZXIge1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfaW5zdDpVSU1hbmFnZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3QoKXtcclxuICAgICAgICBpZighdGhpcy5faW5zdCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3QgPSBuZXcgVUlNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdDtcclxuICAgIH1cclxuXHJcbiAgICBvbkF3YWtlKCl7XHJcbiAgICAgICAgVUlNYW5hZ2VyLl9pbnN0ID0gdGhpcztcclxuICAgICAgICBVSU1hbmFnZXIuc2V0VWlLZXlzKCk7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRVaUtleXMoKXtcclxuICAgICAgICBsZXQgY2ZnID0gQ29uZmlnLlZpZXdLaXQ7XHJcbiAgICAgICAgVUkuTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlci5pbml0KGNmZy5Mb2FkaW5nUHJvZ3Jlc3MuS2V5LCBVSS5Mb2FkaW5nUHJvZ3Jlc3NWaWV3KTtcclxuICAgICAgICBVSS5Mb2FkaW5nQ29udHJvbGxlci5pbml0KGNmZy5Mb2FkaW5nTWFpbi5LZXksIFVJLkxvYWRpbmdWaWV3KTtcclxuICAgICAgICBVSS5DaG9vc2VTZXJ2aWNlQ29udHJvbGxlci5pbml0KGNmZy5DaG9vc2VTZXJ2aWNlLktleSwgVUkuQ2hvb3NlU2VydmljZVZpZXcpO1xyXG4gICAgICAgIFVJLlB1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXIuaW5pdChjZmcuUHVibGljQ29uZmlybWF0aW9uLktleSwgVUkuUHVibGljQ29uZmlybWF0aW9uVmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYWRkTGlzdGVuZXJzKCl7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIENvbmZpZy5WaWV3S2l0KXtcclxuICAgICAgICAgICAgbGV0IGNmZzpDb25maWcuVmlld0NvbmZpZyA9IENvbmZpZy5WaWV3S2l0W2ldO1xyXG4gICAgICAgICAgICBpZihjZmcgJiYgY2ZnLktleSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoY2ZnLktleSwgdGhpcy5nb09wZW4uYmluZCh0aGlzLCBjZmcuS2V5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uVWlOb3RpY2VFaWQuQ2xvc2VDb250cm9sbGVyLCB0aGlzLm9uQ2xvc2VDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlVpTm90aWNlRWlkLk9wZW5GdWxsU2NyZWVuLCB0aGlzLm9uT3BlbkZ1bGxzY3JlZW4pO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uVWlOb3RpY2VFaWQuQ2xvc2VGdWxsU2NyZWVuLCB0aGlzLm9uQ2xvc2VGdWxsc2NyZWVuKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlVpTm90aWNlRWlkLkNsb3NlUG9wdXAsIHRoaXMub3Blbk5leHRQb3B1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ29PcGVuKGtleSwgLi4uZGF0YSl7XHJcbiAgICAgICAgbGV0IGMgPSBDb3JlLkN0cmxNYXBBcnJheVtrZXldIGFzIHR5cGVvZiBDb3JlLkNvbnRyb2xsZXI7XHJcbiAgICAgICAgaWYoYyl7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkNvbnRyb2xsZXIoYywgLi4uZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvcGVuQ29udHJvbGxlcihjdHJsOnR5cGVvZiBDb3JlLkNvbnRyb2xsZXIsIC4uLl9kYXRhKSB7XHJcbiAgICAgICAgaWYoIWN0cmwpIHJldHVyblxyXG5cclxuICAgICAgICBsZXQgY0tleSA9IGN0cmwuS2V5O1xyXG4gICAgICAgIGxldCBjdHJsSW5zdCA9IENvcmUuT3BlbmVkQ3RybFtjS2V5XTtcclxuICAgICAgICBpZighY3RybEluc3QgfHwgY3RybEluc3QuSXNEZXN0cm95ZWQpe1xyXG4gICAgICAgICAgICBjdHJsSW5zdCA9IG5ldyBjdHJsKGN0cmwuS2V5LCBjdHJsLnZpZXcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvL+WPquWFgeiuuOWIm+W7uuS4gOS4quWunuS+i1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udHJvbGxlciBoYXMgb3BlbmVkOiAnLCBjS2V5KTtcclxuICAgICAgICAgICAgY3RybEluc3Quc2hvdyguLi5fZGF0YSk7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5zZXRDaGlsZEluZGV4KENvcmUuVmlld01hcFtjS2V5XS5VSSwgZmd1aS5HUm9vdC5pbnN0Lm51bUNoaWxkcmVuKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tPcGVuQ3RybEluc3QoY3RybEluc3QsIC4uLl9kYXRhKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGRvbmUgPSBjdHJsSW5zdC5jcmVhdGUoKTtcclxuICAgICAgICAvLyBpZihkb25lKXtcclxuICAgICAgICAvLyAgICAgY3RybEluc3Qub3BlbiguLi5fZGF0YSlcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihcIk9wZW4gY29udHJvbGxlciBmYWlsZWRcIik7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIC8v6K6+572u5riy5p+T5bGC57qnXHJcbiAgICAgICAgLy8gaWYoY3RybEluc3QuSXNQb3B1cCl7XHJcbiAgICAgICAgLy8gICAgIGN0cmxJbnN0LlNvcnRpbmdPcmRlcihDb25maWcuVUlDb25maWcuU29ydGluZ09yZGVyLlBvcHVwKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBjdHJsSW5zdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjaGVja09wZW5DdHJsSW5zdChjdHJsSW5zdDpDb3JlLkNvbnRyb2xsZXIsIC4uLl9kYXRhKXtcclxuICAgICAgICBpZihjdHJsSW5zdC5Jc1BvcHVwKXtcclxuICAgICAgICAgICAgY3RybEluc3QgPSB0aGlzLmdldE5leHRQb3B1cChjdHJsSW5zdCwgLi4uX2RhdGEpO1xyXG4gICAgICAgICAgICBpZighY3RybEluc3QpIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkb25lID0gY3RybEluc3QuY3JlYXRlKCk7XHJcbiAgICAgICAgaWYoZG9uZSl7XHJcbiAgICAgICAgICAgIGN0cmxJbnN0Lm9wZW4oLi4uX2RhdGEpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJPcGVuIGNvbnRyb2xsZXIgZmFpbGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+iuvue9rua4suafk+Wxgue6p1xyXG4gICAgICAgIGlmKGN0cmxJbnN0LklzUG9wdXApe1xyXG4gICAgICAgICAgICBjdHJsSW5zdC5Tb3J0aW5nT3JkZXIoQ29uZmlnLlVJQ29uZmlnLlNvcnRpbmdPcmRlci5Qb3B1cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3RybEluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lhbPpl63nlYzpnaLlpITnkIZcclxuICAgIHN0YXRpYyBvbkNsb3NlQ29udHJvbGxlcihja2V5OnN0cmluZyl7XHJcbiAgICAgICAgbGV0IGN0cmwgPSBDb3JlLk9wZW5lZEN0cmxbY2tleV0gYXMgQ29yZS5Db250cm9sbGVyO1xyXG4gICAgICAgIC8v5riF6Zmk5omA5pyJ6K6h5pe25ZmoXHJcbiAgICAgICAgTWFuYWdlci5UaW1lck1hbmFnZXIuUmVtb3ZlVGltZXIoY3RybCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lhajlsY/nlYzpnaLlpITnkIZcclxuICAgIHN0YXRpYyBvbk9wZW5GdWxsc2NyZWVuKGNrZXk6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmhpZGVPdGhlclVJKGNrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvbkNsb3NlRnVsbHNjcmVlbihja2V5OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5zaG93T3RoZXJVSShja2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGlkZU90aGVyVUkoY2tleTpzdHJpbmcpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiBDb3JlLk9wZW5lZEN0cmwpe1xyXG4gICAgICAgICAgICBpZihpID09IGNrZXkpIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN0cmwgPSBDb3JlLk9wZW5lZEN0cmxbaV07XHJcbiAgICAgICAgICAgIGlmKGN0cmwgJiYgY3RybC5Jc1Nob3cpe1xyXG4gICAgICAgICAgICAgICAgY3RybC5WaWV3LlVJLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd090aGVyVUkoY2tleTpzdHJpbmcpe1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiBDb3JlLk9wZW5lZEN0cmwpe1xyXG4gICAgICAgICAgICBpZihpID09IGNrZXkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdHJsID0gQ29yZS5PcGVuZWRDdHJsW2ldO1xyXG4gICAgICAgICAgICBpZihjdHJsICYmIGN0cmwuSXNTaG93KXtcclxuICAgICAgICAgICAgICAgIGN0cmwuVmlldy5VSS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGF0aWMgb3Blbkd1aWRlID0gZnVuY3Rpb24oZ3VpZGVOYW1lLCB0YXJnZXRDb20pe1xyXG4gICAgLy8gICAgIGlmKCFndWlkZU5hbWUpIHJldHVybjtcclxuXHJcbiAgICAvLyAgICAgbGV0IGdyb290SW5zdCA9IGZndWkuR1Jvb3QuaW5zdFxyXG5cclxuICAgIC8vICAgICBsZXQgZ3VpZGVDb20gPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoQ29uZmlnLlZpZXdLaXQuR3VpZGVyLlBrZywgZ3VpZGVOYW1lKS5hc0NvbVxyXG4gICAgLy8gICAgIEd1aWRlTGlzdFtndWlkZU5hbWVdID0gZ3VpZGVDb21cclxuXHJcbiAgICAvLyAgICAgZ3Jvb3RJbnN0LmFkZENoaWxkKGd1aWRlQ29tKVxyXG4gICAgLy8gICAgIGd1aWRlQ29tLnNldFNpemUoZ3Jvb3RJbnN0LndpZHRoLCBncm9vdEluc3QuaGVpZ2h0KVxyXG4gICAgLy8gICAgIGxldCBndWlkZU1hc2sgPSBndWlkZUNvbS5nZXRDaGlsZChcIk1hc2tcIilcclxuICAgIC8vICAgICBpZih0YXJnZXRDb20pe1xyXG4gICAgLy8gICAgICAgICBndWlkZU1hc2suc2V0WFkodGFyZ2V0Q29tLngsIHRhcmdldENvbS55KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBzdGF0aWMgY2xvc2VHdWlkZSA9IGZ1bmN0aW9uKGd1aWRlTmFtZSl7XHJcbiAgICAgICAgaWYoIUd1aWRlTGlzdFtndWlkZU5hbWVdKSByZXR1cm47XHJcblxyXG4gICAgICAgIEd1aWRlTGlzdFtndWlkZU5hbWVdLmRpc3Bvc2UoKTtcclxuICAgICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5leHRHdWlkZSA9IGZ1bmN0aW9uKGd1aWRlTmFtZSl7XHJcbiAgICAgICAgaWYoIUd1aWRlTGlzdFtndWlkZU5hbWVdKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSBpbiBHdWlkZUxpc3Qpe1xyXG4gICAgICAgICAgICBHdWlkZUxpc3RbZ3VpZGVOYW1lXSAmJiBHdWlkZUxpc3RbZ3VpZGVOYW1lXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIEd1aWRlTGlzdFtndWlkZU5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIFBvcHVwTWFwID0gbmV3IEFycmF5PHR5cGVvZiBDb3JlLkNvbnRyb2xsZXI+KCk7XHJcbiAgICBzdGF0aWMgUG9wdXBRdWV1ZSA9IG5ldyBBcnJheTxDb3JlLkNvbnRyb2xsZXI+KCk7XHJcbiAgICBzdGF0aWMgUG9wdXBEYXRhID0ge307XHJcblxyXG5cclxuICAgIC8v5omT5byA5by556qXXHJcbiAgICBzdGF0aWMgb3BlblBvcHVwIChwb3B1cEN0cmw6dHlwZW9mIENvcmUuQ29udHJvbGxlciwgZGF0YSl7XHJcbiAgICAgICAgaWYoIXBvcHVwQ3RybCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZihVSU1hbmFnZXIuUG9wdXBNYXAubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5Qb3B1cE1hcC5wdXNoKHBvcHVwQ3RybCk7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5Qb3B1cERhdGFbcG9wdXBDdHJsLktleV0gPSBkYXRhO1xyXG4gICAgICAgICAgICBsZXQgcG9wdXAgPSBVSU1hbmFnZXIuUG9wdXBNYXAuc2hpZnQoKTtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5Db250cm9sbGVyKHBvcHVwLCBVSU1hbmFnZXIuUG9wdXBEYXRhW3BvcHVwLktleV0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIub3BlbkNvbnRyb2xsZXIocG9wdXBDdHJsLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0TmV4dFBvcHVwIChwb3B1cEN0cmw6Q29yZS5Db250cm9sbGVyLCAuLi5kYXRhKXtcclxuICAgICAgICBpZighcG9wdXBDdHJsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKFVJTWFuYWdlci5Qb3B1cFF1ZXVlLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIuUG9wdXBRdWV1ZS5wdXNoKHBvcHVwQ3RybCk7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5Qb3B1cERhdGFbcG9wdXBDdHJsLm11bHRpdG9uS2V5XSA9IGRhdGE7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBVSU1hbmFnZXIuUG9wdXBRdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gcG9wdXBDdHJsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+W8gOS4i+S4gOS4quW8ueeql1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb3Blbk5leHRQb3B1cCAoKXtcclxuICAgICAgICAvLyBVSU1hbmFnZXIuUG9wdXBNYXAuc29tZSgodmFsdWUsIGlkeCk9PntcclxuICAgICAgICAvLyAgICAgaWYocG9wdXBDdHJsIGluc3RhbmNlb2YgdmFsdWUpe1xyXG4gICAgICAgIC8vICAgICAgICAgVUlNYW5hZ2VyLlBvcHVwTWFwLnNwbGljZShpZHgsIDEpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gVUlNYW5hZ2VyLlBvcHVwRGF0YVtwb3B1cEN0cmwubXVsdGl0b25LZXldID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYoVUlNYW5hZ2VyLlBvcHVwUXVldWUubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5Qb3B1cFF1ZXVlLnBvcCgpO1xyXG4gICAgICAgICAgICBsZXQgcG9wdXAgPSBVSU1hbmFnZXIuUG9wdXBRdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgICAgICBpZihwb3B1cCl7XHJcbiAgICAgICAgICAgICAgICBVSU1hbmFnZXIuY2hlY2tPcGVuQ3RybEluc3QocG9wdXAsIC4uLlVJTWFuYWdlci5Qb3B1cERhdGFbcG9wdXAubXVsdGl0b25LZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+W8gOaWh+Wtl+ehruiupOW8ueeql1xyXG4gICAgc3RhdGljIG9wZW5Db25maXJtV2luZG93KGNvbnRlbnQ6c3RyaW5nW10sIHllc0J0bkNhbGxiYWNrPzpGdW5jdGlvbiwgYnRuWWVzVHh0PzpzdHJpbmcsIGJ0bkNhbmNlbFR4dD86c3RyaW5nKXtcclxuICAgICAgICB0aGlzLm9wZW5Qb3B1cChVSS5QdWJsaWNDb25maXJtYXRpb25Db250cm9sbGVyLCBuZXcgQ29uZmlnLlBvcHVwV2luZG93RGF0YShjb250ZW50LCB5ZXNCdG5DYWxsYmFjaywgQ29uZmlnLkNvbmZpcm1XaW5kb3dUeXBlLkNvbnRlbnQsIGJ0blllc1R4dCwgYnRuQ2FuY2VsVHh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIDlpZblirHlvLnnqpdcclxuICAgIHN0YXRpYyBvcGVuUmV3YXJkV2luZG93KHJld2FyZERhdGEsIHllc0J0bkNhbGxiYWNrPzpGdW5jdGlvbiwgYnRuWWVzVHh0PzpzdHJpbmcsIGJ0bkNhbmNlbFR4dD86c3RyaW5nKXtcclxuICAgICAgICB0aGlzLm9wZW5Qb3B1cChVSS5QdWJsaWNDb25maXJtYXRpb25Db250cm9sbGVyLCBuZXcgQ29uZmlnLlBvcHVwV2luZG93RGF0YShudWxsLCB5ZXNCdG5DYWxsYmFjaywgQ29uZmlnLkNvbmZpcm1XaW5kb3dUeXBlLlJld2FyZCwgcmV3YXJkRGF0YSwgYnRuWWVzVHh0LCBidG5DYW5jZWxUeHQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+W8gOaWh+WtlyvlpZblirHlvLnnqpdcclxuICAgIHN0YXRpYyBvcGVuQ29udGVudFJld2FyZFdpbmRvdyhjb250ZW50OnN0cmluZ1tdLCByZXdhcmREYXRhLCB5ZXNCdG5DYWxsYmFjaz86RnVuY3Rpb24sIGJ0blllc1R4dD86c3RyaW5nLCBidG5DYW5jZWxUeHQ/OnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5vcGVuUG9wdXAoVUkuUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlciwgbmV3IENvbmZpZy5Qb3B1cFdpbmRvd0RhdGEoXHJcbiAgICAgICAgICAgIGNvbnRlbnQsIFxyXG4gICAgICAgICAgICB5ZXNCdG5DYWxsYmFjaywgXHJcbiAgICAgICAgICAgIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5Db250ZW50QW5kUmV3YXJkLCBcclxuICAgICAgICAgICAgcmV3YXJkRGF0YSwgXHJcbiAgICAgICAgICAgIGJ0blllc1R4dCwgXHJcbiAgICAgICAgICAgIGJ0bkNhbmNlbFR4dFxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG59IiwiXHJcbi8v54mI5pys566h55CGXHJcbmV4cG9ydCBjbGFzcyBWZXJzaW9uTWFuYWdlcntcclxuICAgIHByaXZhdGUgc3RhdGljIF92ZXJzaW9uOm51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICAgIHN0YXRpYyBzZXQgVmVyc2lvbih2ZXJzaW9uOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBWZXJzaW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTG9jYWxDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Mb2NhbENvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tIFwiLi4vRGF0YS9EYXRhXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4vQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBVSSBmcm9tIFwiLi9VSVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hvb3NlU2VydmljZUNvbnRyb2xsZXIgZXh0ZW5kcyBDb3JlLkNvbnRyb2xsZXJ7XHJcbiAgICBWaWV3OlVJLkNob29zZVNlcnZpY2VWaWV3O1xyXG5cclxuICAgIG9uQ3JlYXRlKCl7XHJcbiAgICAgICAgdGhpcy5Tb3J0aW5nT3JkZXIoQ29uZmlnLlVJQ29uZmlnLlNvcnRpbmdPcmRlci5OZXRTaWduYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b25MaXNlbnRlcih0aGlzLlZpZXcuTG9jYWwsIHRoaXMub3BlbkxvY2FsU2VydmljZSk7XHJcblxyXG4gICAgICAgIHRoaXMuVmlldy5BY2NvdW50TmFtZS50ZXh0ID0gTG9jYWxDb25maWcuR2V0QWNvdW50TmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Mb2NhbFNlcnZpY2UoKXtcclxuICAgICAgICBsZXQgYWNjb3VudCA9IHRoaXMuVmlldy5BY2NvdW50TmFtZS50ZXh0O1xyXG4gICAgICAgIGlmKHR5cGVvZihhY2NvdW50KSA9PSAnc3RyaW5nJyAmJiBhY2NvdW50Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBDb25maWcuTmV0Q29uZmlnLlRlbXBOYW1lID0gYWNjb3VudDtcclxuICAgICAgICAgICAgTG9jYWxDb25maWcuU2F2ZUFjb3VudE5hbWUoYWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvbmZpZy5OZXRDb25maWcuUmVxdWVzdFVybCA9IENvbmZpZy5OZXRDb25maWcuTG9jYWxSZXF1ZXN0VXJsO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuSHR0cFNlcnZpY2UoKXtcclxuICAgICAgICBDb25maWcuTmV0Q29uZmlnLlJlcXVlc3RVcmwgPSBDb25maWcuTmV0Q29uZmlnLkh0dHBSZXF1ZXN0VXJsO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTG9jYWxXZWNoYXRTZXJ2aWNlKCl7XHJcbiAgICAgICAgQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsID0gQ29uZmlnLk5ldENvbmZpZy5Mb2NhbFdlY2hhdFJlcXVlc3RVcmw7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+ivt+axguWcsOWdgO+8micsQ29uZmlnLk5ldENvbmZpZy5SZXF1ZXN0VXJsKTtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZSgpe1xyXG4gICAgICAgIExvY2FsQ29uZmlnLklzQ2hvb3NlZFNlcnZpY2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uU2NlbmVMb2dpbkVpZC5TZXJ2aWNlQ2hvb3NlZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gXCIuLi9Db25maWcvTG9jYWxDb25maWdcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9NYW5hZ2VyXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSBcIi4uL0RhdGEvRGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaG9vc2VTZXJ2aWNlVmlldyBleHRlbmRzIENvcmUuVmlld3tcclxuICAgIExvY2FsOmZndWkuR09iamVjdDtcclxuICAgIEh0dHA6Zmd1aS5HT2JqZWN0O1xyXG4gICAgTG9jYWxXZWNoYXQ6Zmd1aS5HT2JqZWN0O1xyXG4gICAgQWNjb3VudE5hbWU6Zmd1aS5HVGV4dElucHV0O1xyXG5cclxuICAgIExvYWRWaWV3KCkge1xyXG4gICAgICAgIHRoaXMuTG9jYWwgPSB0aGlzLlVJLmdldENoaWxkKFwiTG9jYWxcIilcclxuICAgICAgICB0aGlzLkh0dHAgPSB0aGlzLlVJLmdldENoaWxkKFwiSHR0cFwiKVxyXG4gICAgICAgIHRoaXMuTG9jYWxXZWNoYXQgPSB0aGlzLlVJLmdldENoaWxkKFwiTG9jYWxXZWNoYXRcIilcclxuXHJcbiAgICAgICAgdGhpcy5BY2NvdW50TmFtZSA9IHRoaXMuVUkuZ2V0Q2hpbGQoXCJBY2NvdW50TmFtZVwiKS5hc1RleHRJbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc3Ryb3koKXtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG4vKiogQHR5cGUge09iamVjdDxzdHJpbmcsIENvbnRyb2xsZXI+fSAqL1xyXG4vLyBsZXQgQ3RybE1hcDpDb25maWcuRGljdGlvbmFyeTxDb250cm9sbGVyPiA9IHt9O1xyXG5cclxuLyoqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBWaWV3Pn0gKi9cclxubGV0IFZpZXdNYXA6e1trZXk6c3RyaW5nXTpWaWV3fSA9IHt9O1xyXG5cclxuLyoqIEB0eXBlIHtDb250cm9sbGVyW119ICovXHJcbmxldCBPcGVuZWRDdHJsID0gbmV3IEFycmF5PENvbnRyb2xsZXI+KCk7XHJcblxyXG4vLyBleHBvcnQgbGV0IEN0cmxNYXBBcnJheTpDb25maWcuRGljdGlvbmFyeTx0eXBlb2YgQ29udHJvbGxlcj4gPSB7fTtcclxuZXhwb3J0IGxldCBDdHJsTWFwQXJyYXkgPSBuZXcgQXJyYXk8dHlwZW9mIENvbnRyb2xsZXI+KCk7XHJcbmV4cG9ydCBsZXQgVmlld01hcEFycmF5OkNvbmZpZy5EaWN0aW9uYXJ5PHR5cGVvZiBWaWV3PiA9IHt9O1xyXG5cclxuY2xhc3MgQ3RybExpc2VuZXJ7XHJcbiAgICBwdWJsaWMgT2JqOmZndWkuR09iamVjdDtcclxuICAgIHB1YmxpYyBMaXNlbmVyOkZ1bmN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9iajpmZ3VpLkdPYmplY3QsIGxpc2VuZXI6RnVuY3Rpb24pe1xyXG4gICAgICAgIGlmKCFvYmopIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5PYmogPSBvYmo7XHJcbiAgICAgICAgdGhpcy5MaXNlbmVyID0gbGlzZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKXtcclxuICAgICAgICB0aGlzLk9iai5vZmZDbGljayh0aGlzLCB0aGlzLkxpc2VuZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge09wZW5lZEN0cmwsIFZpZXdNYXB9XHJcblxyXG4vLy8gPHN1bW1hcnk+XHJcbi8vLyDlkJFVaU1hbmFnZXIg5rOo5YaM6ISa5pysIOi/mOacieS4gOS6myBNU0dJRFxyXG4vLy8g5LiA6Iis5pivcGFuZWwg5oyC6L296L+Z5qC355qE6ISa5pysIOmcgOimgeWQkeWFtuS7luaooeWdlyDmiJbogIXohJrmnKzpgJrkv6FcclxuLy8vIDwvc3VtbWFyeT5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVpQ1ZCYXNlIGV4dGVuZHMgQ29tbW9uLkV2ZW50RGlzcGF0aGVye1xyXG4gICAgcHVibGljIG11bHRpdG9uS2V5OnN0cmluZztcclxuXHJcbiAgICBvbkRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIC8v6YeN5YaZ5q2k57uE5Lu25pa55rOV5b+F6aG75omn6KGMXHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgVWlDVkJhc2V7XHJcbiAgICBzdGF0aWMgY0tleTpzdHJpbmc7XHJcbiAgICBzdGF0aWMgdmlldzp0eXBlb2YgVmlldztcclxuXHJcbiAgICAvLyBwdWJsaWMgbXVsdGl0b25LZXk6c3RyaW5nO1xyXG4gICAgcHVibGljIFZpZXc6VmlldztcclxuXHJcbiAgICBwdWJsaWMgRGF0YTtcclxuICAgIHB1YmxpYyBJc09wZW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBJc0Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICBwdWJsaWMgSXNTaG93ID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSXNQb3B1cCA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzRnVsbFNjcmVlbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzRGVmYXVsdCA9IGZhbHNlO1xyXG4gICAgcHVibGljIElzSW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBsaXNlbnRlckFycmF5ID0gbmV3IEFycmF5PEN0cmxMaXNlbmVyPigpO1xyXG4gICAgXHJcbiAgICBzdGF0aWMgc2V0IEtleShrZXk6c3RyaW5nKXt0aGlzLmNLZXkgPSBrZXl9XHJcbiAgICBzdGF0aWMgZ2V0IEtleSgpe3JldHVybiB0aGlzLmNLZXl9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGNLZXk/OnN0cmluZywgdmlldz86dHlwZW9mIFZpZXcsIGlzRnVsbFNjcmVlbj86Ym9vbGVhbiwgaXNQb3B1cD86Ym9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIGlmKCFjS2V5IHx8ICF2aWV3KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGtleSBvciB2aWV3XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYoIU9wZW5lZEN0cmxbY0tleV0pIHtcclxuICAgICAgICAgICAgT3BlbmVkQ3RybFtjS2V5XSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgbGV0IHZLZXkgPSB2aWV3LktleTtcclxuICAgICAgICBpZighVmlld01hcFt2S2V5XSl7XHJcbiAgICAgICAgICAgIFZpZXdNYXBbdktleV0gPSBuZXcgdmlldyh2S2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubXVsdGl0b25LZXkgPSBjS2V5O1xyXG4gICAgICAgIHRoaXMuVmlldyA9IFZpZXdNYXBbdktleV07XHJcbiAgICAgICAgdGhpcy5Jc0Z1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4gPT0gdHJ1ZTtcclxuICAgICAgICB0aGlzLklzUG9wdXAgPSBpc1BvcHVwID09IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEN0cmwoaWQ6bnVtYmVyKXtcclxuICAgICAgICBDdHJsTWFwQXJyYXlbaWRdID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5pdChjS2V5LCB2aWV3OnR5cGVvZiBWaWV3LCB2S2V5PzpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuS2V5ID0gY0tleTtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMudmlldy5LZXkgPSB2S2V5PyB2S2V5OiBjS2V5O1xyXG4gICAgICAgIEN0cmxNYXBBcnJheVt0aGlzLktleV0gPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVZpZXcodmlldzogdHlwZW9mIFZpZXcsIGtleTpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5WaWV3ID0gbmV3IHZpZXcoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLlZpZXcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHZpZXcgY3JlYXRlZCFcIilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5Jc0Rlc3Ryb3llZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuVmlldy5Jbml0aWFsaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMub25DcmVhdGUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbihfZGF0YT8pIHtcclxuICAgICAgICB0aGlzLklzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5EYXRhID0gX2RhdGE7XHJcblxyXG4gICAgICAgIC8vIEZhY2FkZS5QdXNoQ3RybCh0aGlzLCB0aGlzLkRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2hvdyhfZGF0YSk7XHJcbiAgICAgICAgdGhpcy5vcGVuT3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5PdmVyKCkge1xyXG4gICAgICAgIGlmKHRoaXMuSXNGdWxsU2NyZWVuKXtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5VaU5vdGljZUVpZC5PcGVuRnVsbFNjcmVlbiwgdGhpcy5tdWx0aXRvbktleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLklzUG9wdXApe1xyXG4gICAgICAgICAgICB0aGlzLlNvcnRpbmdPcmRlcihDb25maWcuVUlDb25maWcuU29ydGluZ09yZGVyLlBvcHVwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub25PcGVuKHRoaXMuRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQnV0dG9uTGlzZW50ZXIob2JqZWN0OmZndWkuR09iamVjdCwgZnVuOkZ1bmN0aW9uLCBkYXRhPzpBcnJheTxhbnk+LCB0aGlzQXJnPyl7XHJcbiAgICAgICAgaWYob2JqZWN0ID09IG51bGwgfHwgZnVuID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwib2JqZWN0IG9yIGZ1biBpcyBudWxsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzQXJnID0gdGhpc0FyZz90aGlzQXJnOiB0aGlzO1xyXG4gICAgICAgIG9iamVjdC5vbkNsaWNrKHRoaXNBcmcsIGZ1biwgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5saXNlbnRlckFycmF5LnB1c2gobmV3IEN0cmxMaXNlbmVyKG9iamVjdCwgZnVuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgaWYodGhpcy5Jc09wZW4gPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5Jc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5VaU5vdGljZUVpZC5DbG9zZUNvbnRyb2xsZXIsIHRoaXMubXVsdGl0b25LZXkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuSXNQb3B1cCl7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uVWlOb3RpY2VFaWQuQ2xvc2VQb3B1cCwgdGhpcy5tdWx0aXRvbktleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLklzRnVsbFNjcmVlbil7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChDb21tb24uVWlOb3RpY2VFaWQuQ2xvc2VGdWxsU2NyZWVuLCB0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRlbGV0ZSBDdHJsTWFwW3RoaXMubXVsdGl0b25LZXldO1xyXG4gICAgICAgIC8vIE9wZW5lZEN0cmwuc3BsaWNlKE9wZW5lZEN0cmwuaW5kZXhPZih0aGlzKSwgMSk7XHJcbiAgICAgICAgT3BlbmVkQ3RybFt0aGlzLm11bHRpdG9uS2V5XSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8v5riF56m654K55Ye75LqL5Lu2XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRoaXMubGlzZW50ZXJBcnJheSl7XHJcbiAgICAgICAgICAgIHRoaXMubGlzZW50ZXJBcnJheVtpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5saXNlbnRlckFycmF5W2ldID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5riF6Zmk55uR5ZCs5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgLy/muIXpmaTmiYDmnInorqHml7blmahcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG5cclxuICAgICAgICBpZih0aGlzLklzRGVzdHJveWVkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuSXNEZXN0cm95ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5WaWV3ICYmIHRoaXMuVmlldy5kZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlZpZXcuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5WaWV3ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5Jc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLklzU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuRGF0YSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8v6ZSA5q+B6IqC54K5XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pi+56S655WM6Z2iXHJcbiAgICBzaG93KGRhdGE/KSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGE/IGRhdGE6IHRoaXMuRGF0YTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmnKpvcGVu54q25oCB77yM5LiN5aSE55CGXHJcbiAgICAgICAgaWYgKCF0aGlzLklzT3Blbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5Jc1Nob3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLklzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVmlldy5zaG93KGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5Jc1Nob3cgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25TaG93KGRhdGEpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOmakOiXj+eVjOmdolxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuSXNTaG93KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLklzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVmlldy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLklzU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25IaWRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K6+572u5riy5p+T6aG65bqPXHJcbiAgICBTb3J0aW5nT3JkZXIob3JkZXI6bnVtYmVyKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuSXNEZXN0cm95ZWQpe1xyXG4gICAgICAgICAgICB0aGlzLlZpZXcuU29ydGluZ09yZGVyKG9yZGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5piv5ZCm5Y+v6Kem5o6nXHJcbiAgICBpbnRlcmFjdGl2ZShjYW5Ub3VjaDpib29sZWFuKXtcclxuICAgICAgICBpZihjYW5Ub3VjaCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLklzSW50ZXJhY3RpdmUgPSBjYW5Ub3VjaDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLklzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVmlldy5pbnRlcmFjdGl2ZShjYW5Ub3VjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub25JbnRlcmFjdGl2ZShjYW5Ub3VjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFVJKGRhdGE/KXtcclxuICAgICAgICB0aGlzLlZpZXcucmVmcmVzaFVJKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKSB7fVxyXG5cclxuICAgIG9uQ3JlYXRlKCkge31cclxuXHJcbiAgICBvbk9wZW4oZGF0YT8pIHt9XHJcblxyXG4gICAgb25TaG93KGRhdGE/KSB7fVxyXG5cclxuICAgIG9uSGlkZSgpIHt9XHJcbiAgICBcclxuICAgIG9uSW50ZXJhY3RpdmUoY2FuVG91Y2g6Ym9vbGVhbikge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXcgZXh0ZW5kcyBVaUNWQmFzZSB7XHJcbiAgICBzdGF0aWMgdktleTpzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBsaXNlbnRlckFycmF5ID0gbmV3IEFycmF5PEN0cmxMaXNlbmVyPigpO1xyXG4gICAgcHJpdmF0ZSBfaXNBbGl2ZTpib29sZWFuO1xyXG4gICAgLy8gcHVibGljIG11bHRpdG9uS2V5OnN0cmluZztcclxuICAgIHByaXZhdGUgRnVpSW1hZ2VVcmw6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBGdWlCdWZmZXJVcmw6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBQa2dBZHJzOnN0cmluZztcclxuICAgIHByaXZhdGUgUGtnOnN0cmluZztcclxuICAgIHByaXZhdGUgQ29tOnN0cmluZztcclxuICAgIHByaXZhdGUgX1VJOmZndWkuR0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgQ2FsbGJhY2tMaXN0OkFycmF5PEZ1bmN0aW9uPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSB1aUNmZzpDb25maWcuVmlld0NvbmZpZztcclxuXHJcbiAgICBwdWJsaWMgV2luZG93OmZndWkuR0NvbXBvbmVudDsgLy/lvLnlh7rnqpflj6PvvIzms6jmhI/nu4Tku7blkb3lkI3kuLpXaW5kb3dcclxuICAgIHB1YmxpYyBCdG5fQmFjazpmZ3VpLkdCdXR0b247ICAgLy/lhbPpl63mjInpkq7vvIzlkb3lkI3kuLpCdG5fQmFja1xyXG4gICAgcHVibGljIExpc3Q6Zmd1aS5HTGlzdDsgIC8v5YiX6KGo77yM6ZyA6Ieq6KGM5a6a5LmJXHJcblxyXG4gICAgc3RhdGljIHNldCBLZXkoa2V5OnN0cmluZyl7dGhpcy52S2V5ID0ga2V5fVxyXG4gICAgc3RhdGljIGdldCBLZXkoKXtyZXR1cm4gdGhpcy52S2V5fVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6c3RyaW5nKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25LZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5faXNBbGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmKCFWaWV3TWFwW2tleV0pIHtcclxuICAgICAgICAgICAgVmlld01hcFtrZXldID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudWlDZmcgPSBDb25maWcuVmlld0tpdFtrZXldO1xyXG4gICAgICAgIGlmKCF0aGlzLnVpQ2ZnKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW5jb3JyZWN0IHZpZXcga2V5IScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBVSSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9VSTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgSXNBbGl2ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FsaXZlO1xyXG4gICAgfVxyXG5cclxuICAgIEluaXRpYWxpemUoKXtcclxuICAgICAgICBpZighdGhpcy5fVUkpe1xyXG4gICAgICAgICAgICB0aGlzLl9VSSA9IE1hbmFnZXIuU3Bhd25NYW5hZ2VyLkxvYWRWaWV3KHRoaXMudWlDZmcuUGtnLCB0aGlzLnVpQ2ZnLkNvbSk7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLl9VSSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIFVpIGNvbTogJywgdGhpcy51aUNmZy5LZXkpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuV2luZG93ID0gdGhpcy5VSS5nZXRDaGlsZCgnV2luZG93JykgYXMgZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Mb2FkVmlldygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlKGtleSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIWtleSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKCFWaWV3TWFwW2tleV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBWaWV3TWFwW2tleV0gPSBuZXcgVmlldyhrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFZpZXdNYXBba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY2FsbGJhY2tLZXlcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBzZXRDYWxsYmFjayhjYWxsYmFja0tleTpzdHJpbmcsIGNhbGxiYWNrOkZ1bmN0aW9uKXtcclxuICAgICAgICB0aGlzLkNhbGxiYWNrTGlzdFtjYWxsYmFja0tleV0gPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBpbnZva2VDYWxsYmFjayhjYWxsYmFja0tleSwgLi4uYXJncyl7XHJcbiAgICAgICAgaWYodHlwZW9mKGNhbGxiYWNrS2V5KSAhPSAnc3RyaW5nJyB8fCB0eXBlb2YodGhpcy5DYWxsYmFja0xpc3RbY2FsbGJhY2tLZXldKSAhPSAnZnVuY3Rpb24nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuQ2FsbGJhY2tMaXN0W2NhbGxiYWNrS2V5XSguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRCdXR0b25MaXNlbnRlcihvYmplY3Q6Zmd1aS5HT2JqZWN0LCBmdW46RnVuY3Rpb24sIGRhdGE/OkFycmF5PGFueT4sIHRoaXNBcmc/KXtcclxuICAgICAgICBpZihvYmplY3QgPT0gbnVsbCB8fCBmdW4gPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJvYmplY3Qgb3IgZnVuIGlzIG51bGxcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXNBcmcgPSB0aGlzQXJnP3RoaXNBcmc6IHRoaXM7XHJcbiAgICAgICAgb2JqZWN0Lm9uQ2xpY2sodGhpc0FyZywgZnVuLCBkYXRhKTtcclxuICAgICAgICB0aGlzLmxpc2VudGVyQXJyYXkucHVzaChuZXcgQ3RybExpc2VuZXIob2JqZWN0LCBmdW4pKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja0xpc3RDYWxsYmFjayh0aGlzQXJnLCBmdW5jOkZ1bmN0aW9uLCAuLi5kYXRhKXtcclxuICAgICAgICBDb21tb24uY2xpY2tMaXN0Q2FsbGJhY2sodGhpcy5MaXN0LCB0aGlzQXJnLCBmdW5jLCAuLi5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5faXNBbGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL+a4hemZpOebkeWQrOS6i+S7tlxyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgIC8v5riF6Zmk5omA5pyJ6K6h5pe25ZmoXHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICAvL+a4heepuueCueWHu+S6i+S7tlxyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aGlzLmxpc2VudGVyQXJyYXkpe1xyXG4gICAgICAgICAgICB0aGlzLmxpc2VudGVyQXJyYXlbaV0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzZW50ZXJBcnJheVtpXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWxldGUgVmlld01hcFt0aGlzLm11bHRpdG9uS2V5XVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGZvcihsZXQgaSBpbiB0aGlzKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIOmUgOavgVVJXHJcbiAgICAgICAgLy8gICAgIC8vIGlmKHRoaXNbaV0gJiYgdGhpc1tpXS5kaXNwb3NlKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICB0aGlzW2ldLmRpc3Bvc2UoKTtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAgICAgLy8gdGhpc1tpXSA9IHVuZGVmaW5lZFxyXG5cclxuICAgICAgICAvLyAgICAgLy8gaWYodGhpc1tpXSBpbnN0YW5jZW9mIGZndWkuR0NvbXBvbmVudCA9PSB0cnVlKXtcclxuICAgICAgICAvLyAgICAgLy8gICAgIHRoaXNbaV0uZGlzcGxheU9iamVjdC5vZmZBbGwoKTtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5fVUkuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgb25EZXN0cm95KCl7fVxyXG5cclxuICAgIExvYWRWaWV3KCkge31cclxuXHJcbiAgICByZWZyZXNoVUkoZGF0YT8pIHt9XHJcblxyXG4gICAgaW50ZXJhY3RpdmUoY2FuVG91Y2gpIHtcclxuICAgICAgICB0aGlzLl9VSS50b3VjaGFibGUgPSBjYW5Ub3VjaDtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIFNvcnRpbmdPcmRlcihvcmRlcikge1xyXG4gICAgICAgIHRoaXMuX1VJLnNvcnRpbmdPcmRlciA9IG9yZGVyO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgc2hvdyhkYXRhPyl7XHJcbiAgICAgICAgdGhpcy5fVUkudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpe1xyXG4gICAgICAgIHRoaXMuX1VJLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2FkZXtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgc3RhdGljIFB1c2hDdHJsKGN0cmw6Q29udHJvbGxlciwgZGF0YT8pe1xyXG4gICAgICAgIGlmKCFjdHJsKSByZXR1cm47XHJcblxyXG4gICAgICAgIE9wZW5lZEN0cmwucHVzaChjdHJsKTtcclxuICAgICAgICAvL+aYvuekuuagiOW6leeVjOmdolxyXG4gICAgICAgIC8vIE9wZW5lZEN0cmwuZm9yRWFjaCgodik9PiB7di5zaG93KCl9KVxyXG4gICAgICAgIGxldCBuZXh0YyA9IE9wZW5lZEN0cmwuc2hpZnQoKTtcclxuICAgICAgICBpZihuZXh0Yyl7XHJcbiAgICAgICAgICAgIG5leHRjLnNob3coZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb250cm9sbGVyKGlkKXtcclxuICAgICAgICBsZXQgY3RybCA9IEN0cmxNYXBBcnJheVtpZF07XHJcbiAgICAgICAgaWYoY3RybClcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBjdHJsKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tICcuLi9EYXRhL0RhdGEnO1xyXG5pbXBvcnQgKiBhcyBDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9Db25maWdcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbnRyb2xsZXIgZXh0ZW5kcyBVSS5Db250cm9sbGVye1xyXG4gICAgcHVibGljIFZpZXc6VUkuTG9hZGluZ1ZpZXc7XHJcblxyXG4gICAgb25PcGVuKGRhdGEpIHtcclxuICAgICAgICB0aGlzLlZpZXcuU2hvd19DLnNlbGVjdGVkSW5kZXggPSAxO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLk5ldEh0dHBDb25uZWN0RWlkLkNvbm5lY3RCZWdpbiwgdGhpcy5vcGVuSHR0cFN0YXJ0KTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLk5ldEh0dHBDb25uZWN0RWlkLlNlcnZpY2VSZXNwb25kLCB0aGlzLm9uSHR0cFJlc3BvbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2FkaW5nKCl7XHJcbiAgICAgICAgdGhpcy5WaWV3LlNob3dfQy5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTG9hZGluZygpe1xyXG4gICAgICAgIHRoaXMuVmlldy5TaG93X0Muc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ov57mjqXlrozmiJBcclxuICAgIG9uSHR0cFJlc3BvbmQoKXtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+W8gOWni+i/nuaOpVxyXG4gICAgb3Blbkh0dHBTdGFydCgpe1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKXtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5vZmYoY2MuRGlyZWN0b3IuRVZFTlRfQkVGT1JFX1NDRU5FX0xPQURJTkcsIHRoaXMuY2xvc2UsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Db25maWcnO1xyXG5pbXBvcnQge1VJQ29uZmlnfSBmcm9tIFwiLi4vQ29uZmlnL1VJQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvcmUgZnJvbSBcIi4vQ29yZVwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gXCIuLi9Db21tb24vQ29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlciBleHRlbmRzIENvcmUuQ29udHJvbGxlcntcclxuICAgIHB1YmxpYyBWaWV3OlVJLkxvYWRpbmdQcm9ncmVzc1ZpZXc7XHJcbiAgICBwdWJsaWMgUHJvZ3Jlc3MgPSAwO1xyXG4gICAgcHVibGljIElzTG9hZGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIFBrZ051bSA9IDA7XHJcbiAgICBwcml2YXRlIFJlc051bSA9IDA7XHJcblxyXG4gICAgb25PcGVuKGRhdGEpIHtcclxuICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9IFwiMCVcIjtcclxuXHJcbiAgICAgICAgLy/lvIDlj5HniYjlhYjmmL7npLrpgInmnI3liqHlmajnlLvpnaJcclxuICAgICAgICAvLyBpZihNYW5hZ2VyLlZlcnNpb25NYW5hZ2VyLlZlcnNpb24gPT0gQ29uZmlnLlZlcnNpb25Db25maWcuRGV2ZWxvcCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzc051bWJlcigpO1xyXG4gICAgICAgIHRoaXMuc2ltUHJvZ3Jlc3MoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKENvbW1vbi5TY2VuZUxvZ2luRWlkLlBhY2thZ2VMb2FkZWQsIHRoaXMub25SZXNMb2FkZWQpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Mb2dpblN1Y2Nlc3MsIHRoaXMub25Mb2dpblN1Y2Nlc3MpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihDb21tb24uU2NlbmVMb2dpbkVpZC5Db25maWdMb2FkZWQsIHRoaXMudHJ5Q2xvc2UpO1xyXG4gICAgICAgIC8v6L+b5Zy65pmv5Lmf6ZyA6KaB562J5b6F5qih5ouf6L+b5bqmXHJcblx0XHQvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoQ29tbW9uLlNjZW5lRW50ZXJFaWQuTWFpbk1lbnUsIHRoaXMudHJ5Q2xvc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UHJvZ3Jlc3NOdW1iZXIoKXtcclxuICAgICAgICAvL+eZu+W9lemcgOimgeWKoOi9veeahFVJ5YyF5pWw6YePLS1jb2Nvc+eUqFxyXG4gICAgICAgIC8vIHRoaXMuUGtnTnVtID0gVUlDb25maWcuVUlQa2dzLmxlbmd0aCAqIDI7XHJcbiAgICAgICAgdGhpcy5SZXNOdW0gPSBDb25maWcubG9naW5SZXNVcmxzLmxlbmd0aCArIENvbmZpZy51cmxzLmxlbmd0aCArIDU7XHJcblxyXG4gICAgICAgIC8v5bCP5ri45oiP5Yqg5LiK5YiG5YyF6L+b5bqmXHJcbiAgICAgICAgaWYoQ29tbW9uLmlzTWluaUdhbWUoKSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLlBrZ051bSArPSBVSUNvbmZpZy5TdWJQa2dzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5SZXNOdW0gKz0gVUlDb25maWcuU3ViUGtncy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dVaVByb2dyZXNzKHByb2dyZXNzOm51bWJlciwgcGtnTmFtZT86c3RyaW5nKXtcclxuICAgICAgICBwa2dOYW1lID0gcGtnTmFtZSB8fCAnJztcclxuICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9ICdMb2FkaW5nIHVpICcgKyBwa2dOYW1lICsgJzogJyArIHByb2dyZXNzICogMTAwICsgJyUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5YGH6L+b5bqmXHJcbiAgICBzaW1Qcm9ncmVzcygpe1xyXG4gICAgICAgIHRoaXMuUHJvZ3Jlc3MgKz0gMTAwIC8gdGhpcy5SZXNOdW07XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gTWF0aC5jZWlsKHRoaXMuUHJvZ3Jlc3MpO1xyXG4gICAgICAgIHByb2dyZXNzID0gcHJvZ3Jlc3MgPiAxMDA/IDEwMDogcHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSBwcm9ncmVzcyArIFwiJVwiO1xyXG5cclxuICAgICAgICBpZih0aGlzLlByb2dyZXNzID49IDEwMCl7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5Q2xvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDEwMCwgdGhpcywgdGhpcy5zaW1Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvZ3Jlc3MoYWRkUHJvZ3Jlc3Mpe1xyXG4gICAgICAgIHRoaXMuUHJvZ3Jlc3MgKz0gMTAwIC8gdGhpcy5Qa2dOdW07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5Qcm9ncmVzcyk7XHJcbiAgICAgICAgLy8gdGhpcy5Qcm9ncmVzcyA9IHRoaXMuUHJvZ3Jlc3MgPiAxMDA/IDEwMDogdGhpcy5Qcm9ncmVzcztcclxuXHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gTWF0aC5jZWlsKHRoaXMuUHJvZ3Jlc3MpO1xyXG4gICAgICAgIHByb2dyZXNzID0gcHJvZ3Jlc3MgPiAxMDA/IDEwMDogcHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSBwcm9ncmVzcyArIFwiJVwiO1xyXG5cclxuICAgICAgICAvL+WKoOi9veWujOaIkFVJ5YyFXHJcbiAgICAgICAgaWYodGhpcy5Qcm9ncmVzcyA+PSAxMDApe1xyXG4gICAgICAgICAgICB0aGlzLklzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUxvZ2luRWlkLlBhY2thZ2VMb2FkZWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93V3hMb2dpbigpO1xyXG4gICAgICAgICAgICAvLyBpZihEYXRhQmFzZS5Mb2dpbkRhdGEuQWNjb3VudE5hbWUpe1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dXeExvZ2luKCl7XHJcbiAgICAgICAgaWYoIUNvbW1vbi5pc01pbmlHYW1lKCkgfHwgTG9jYWxDb25maWcuSXNXeEF1dGggfHwgIXRoaXMuSXNMb2FkZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5WaWV3LnNob3dXeExvZ2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvbmZpZ1Byb2dyZXNzKCl7XHJcbiAgICAgICAgaWYoQ29uZmlnLkRhdGFDb25maWcuSXNDb25maWdMb2FkZWQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICB0aGlzLlZpZXcuVUkudGV4dCA9IFwi5Yqg6L296YWN572u5LitXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2dpblByb2dyZXNzKCl7XHJcbiAgICAgICAgdGhpcy5WaWV3LlVJLnRleHQgPSBcIueZu+W9leS4rVwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9naW5TdWNjZXNzKCl7XHJcbiAgICAgICAgdGhpcy50cnlDbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzTG9hZGVkKCl7XHJcbiAgICAgICAgdGhpcy5Jc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50cnlDbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5ruh6Laz5omA5pyJ5p2h5Lu25omN5YWz6Zet5Yqg6L2955WM6Z2iXHJcbiAgICB0cnlDbG9zZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuUHJvZ3Jlc3MgPCAxMDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoTWFuYWdlci5WZXJzaW9uTWFuYWdlci5WZXJzaW9uID09IENvbmZpZy5WZXJzaW9uQ29uZmlnLkRldmVsb3Ape1xyXG4gICAgICAgICAgICBpZighTG9jYWxDb25maWcuSXNDaG9vc2VkU2VydmljZSkgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoQ29uZmlnLkRhdGFDb25maWcuSXNDb25maWdMb2FkZWQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb25maWdQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihEYXRhLkxvZ2luRGF0YS5Jc0xvZ2luZWQgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMb2dpblByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFDb25maWcuVUlDb25maWcuTG9naW5QYWNrYWdlTG9hZGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlKCl7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KENvbW1vbi5TY2VuZUxvZ2luRWlkLlNpbVByb2dyZXNzRW5kKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1VJQ29uZmlnfSBmcm9tIFwiLi4vQ29uZmlnL1VJQ29uZmlnXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1Byb2dyZXNzVmlldyBleHRlbmRzIENvcmUuVmlld3tcclxuICAgIHB1YmxpYyBMb2dpbl9DOmZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBMb2FkVmlldygpIHtcclxuICAgICAgICAvL+a4suafk+Wxgue6p1xyXG4gICAgICAgIHRoaXMuVUkuc29ydGluZ09yZGVyID0gVUlDb25maWcuU29ydGluZ09yZGVyLlNjZW5lTG9hZGluZztcclxuXHJcbiAgICAgICAgdGhpcy5Mb2dpbl9DID0gdGhpcy5VSS5nZXRDb250cm9sbGVyKCdMb2dpbl9DJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1d4TG9naW4oKXtcclxuICAgICAgICB0aGlzLkxvZ2luX0Muc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL01hbmFnZXJcIjtcclxuaW1wb3J0IExvY2FsQ29uZmlnIGZyb20gJy4uL0NvbmZpZy9Mb2NhbENvbmZpZyc7XHJcbmltcG9ydCAqIGFzIFVJIGZyb20gXCIuL1VJXCI7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSAnLi4vRGF0YS9EYXRhJztcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tIFwiLi4vQ29tbW9uL0NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdWaWV3IGV4dGVuZHMgVUkuVmlld3tcclxuICAgIHB1YmxpYyBTaG93X0M6Zmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIExvYWRWaWV3KCkge1xyXG4gICAgICAgIC8v5riy5p+T5bGC57qnXHJcbiAgICAgICAgdGhpcy5VSS5zb3J0aW5nT3JkZXIgPSBDb25maWcuVUlDb25maWcuU29ydGluZ09yZGVyLk5ldFNpZ25hbDtcclxuXHJcbiAgICAgICAgdGhpcy5TaG93X0MgPSB0aGlzLlVJLmdldENvbnRyb2xsZXIoXCJTaG93X0NcIilcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgTG9jYWxDb25maWcgZnJvbSAnLi4vQ29uZmlnL0xvY2FsQ29uZmlnJztcclxuaW1wb3J0IHtVSUNvbmZpZ30gZnJvbSBcIi4uL0NvbmZpZy9VSUNvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb3JlIGZyb20gXCIuL0NvcmVcIjtcclxuaW1wb3J0ICogYXMgVUkgZnJvbSBcIi4vVUlcIjtcclxuaW1wb3J0ICogYXMgQ29uZmlnIGZyb20gXCIuLi9Db25maWcvQ29uZmlnXCI7XHJcblxyXG5sZXQgY0tleSA9IENvbmZpZy5WaWV3S2l0LlB1YmxpY0NvbmZpcm1hdGlvbi5LZXk7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVibGljQ29uZmlybWF0aW9uQ29udHJvbGxlciBleHRlbmRzIENvcmUuQ29udHJvbGxlcntcclxuICAgIHN0YXRpYyBjS2V5ID0gY0tleTtcclxuICAgIFZpZXc6VUkuUHVibGljQ29uZmlybWF0aW9uVmlldztcclxuICAgIENhbGxiYWNrOkZ1bmN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoY0tleSwgVUkuUHVibGljQ29uZmlybWF0aW9uVmlldywgZmFsc2UsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbihkYXRhOkNvbmZpZy5Qb3B1cFdpbmRvd0RhdGEpIHtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbkxpc2VudGVyKHRoaXMuVmlldy5CdG5fQ2xvc2UsIHRoaXMuY2xvc2UpO1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uTGlzZW50ZXIodGhpcy5WaWV3LkJ0bl9DYW5jZWwsIHRoaXMuY2xvc2UpO1xyXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uTGlzZW50ZXIodGhpcy5WaWV3LkJ0bl9ZZXMsIHRoaXMueWVzQnRuT25DbGljayk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGF0YSA9PSBudWxsIHx8IGRhdGEgaW5zdGFuY2VvZiBDb25maWcuUG9wdXBXaW5kb3dEYXRhID09IGZhbHNlKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBwb3B1cCB3aW5kb3cgZGF0YS4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLkNhbGxiYWNrID0gZGF0YS5ZZXNCdG5DYWxsYmFjaztcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVUkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHllc0J0bk9uQ2xpY2soKXtcclxuICAgICAgICBpZih0aGlzLkNhbGxiYWNrKXtcclxuICAgICAgICAgICAgdGhpcy5DYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKXtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1VJQ29uZmlnfSBmcm9tIFwiLi4vQ29uZmlnL1VJQ29uZmlnXCI7XHJcbmltcG9ydCBMb2NhbENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0xvY2FsQ29uZmlnXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvTWFuYWdlclwiO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuLi9EYXRhL0RhdGFcIjtcclxuaW1wb3J0ICogYXMgQ29yZSBmcm9tIFwiLi9Db3JlXCI7XHJcbmltcG9ydCAqIGFzIENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSBcIi4uL0NvbW1vbi9Db21tb25cIjtcclxuXHJcbmxldCB2S2V5ID0gQ29uZmlnLlZpZXdLaXQuUHVibGljQ29uZmlybWF0aW9uLktleTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdWJsaWNDb25maXJtYXRpb25WaWV3IGV4dGVuZHMgQ29yZS5WaWV3e1xyXG4gICAgc3RhdGljIHZLZXkgPSB2S2V5O1xyXG4gICAgQnRuX0Nsb3NlOmZndWkuR0J1dHRvbjtcclxuICAgIEJ0bl9ZZXM6Zmd1aS5HQnV0dG9uO1xyXG4gICAgQnRuX0NhbmNlbDpmZ3VpLkdCdXR0b247XHJcbiAgICBMaXN0X0NvbnRlbnQ6Zmd1aS5HTGlzdDtcclxuICAgIExpc3RfUmV3YXJkOmZndWkuR0xpc3Q7XHJcbiAgICBDb250ZW50X0M6Zmd1aS5Db250cm9sbGVyO1xyXG4gICAgQnRuVHlwZV9DOmZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKHZLZXkpXHJcbiAgICB9XHJcblxyXG4gICAgTG9hZFZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5CdG5fQ2xvc2UgPSB0aGlzLldpbmRvdy5nZXRDaGlsZCgnQnRuX0Nsb3NlJykuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5CdG5fWWVzID0gdGhpcy5XaW5kb3cuZ2V0Q2hpbGQoJ0J0bl9ZZXMnKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLkJ0bl9DYW5jZWwgPSB0aGlzLldpbmRvdy5nZXRDaGlsZCgnQnRuX0NhbmNlbCcpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuTGlzdF9Db250ZW50ID0gdGhpcy5XaW5kb3cuZ2V0Q2hpbGQoJ0xpc3RfQ29udGVudCcpLmFzTGlzdDtcclxuICAgICAgICB0aGlzLkxpc3RfUmV3YXJkID0gdGhpcy5XaW5kb3cuZ2V0Q2hpbGQoJ0xpc3RfUmV3YXJkJykuYXNMaXN0O1xyXG4gICAgICAgIHRoaXMuQ29udGVudF9DID0gdGhpcy5XaW5kb3cuZ2V0Q29udHJvbGxlcignQ29udGVudF9DJyk7XHJcbiAgICAgICAgdGhpcy5CdG5UeXBlX0MgPSB0aGlzLldpbmRvdy5nZXRDb250cm9sbGVyKCdCdG5UeXBlX0MnKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVUkoZGF0YTpDb25maWcuUG9wdXBXaW5kb3dEYXRhKXtcclxuICAgICAgICBpZighZGF0YSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkNvbnRlbnRfQy5zZWxlY3RlZEluZGV4ID0gZGF0YS5XaW5kb3dUeXBlIC0gMTtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuV2luZG93VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5Db250ZW50OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5CdG5UeXBlX0Muc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxDb250ZW50cyhkYXRhLkNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQ29uZmlnLkNvbmZpcm1XaW5kb3dUeXBlLlJld2FyZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuQnRuVHlwZV9DLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsUmV3YXJkcyhkYXRhLlJld2FyZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENvbmZpZy5Db25maXJtV2luZG93VHlwZS5Db250ZW50QW5kUmV3YXJkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5CdG5UeXBlX0Muc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxDb250ZW50cyhkYXRhLkNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsUmV3YXJkcyhkYXRhLlJld2FyZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+aMiemSruaWh+Wtl1xyXG4gICAgICAgIGlmKGRhdGEuWWVzQnRuQ29udGVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuQnRuX1llcy50ZXh0ID0gZGF0YS5ZZXNCdG5Db250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkYXRhLkNhbmNlbEJ0bkNvbnRlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLkJ0bl9DYW5jZWwudGV4dCA9IGRhdGEuQ2FuY2VsQnRuQ29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbENvbnRlbnRzKGRhdGE6QXJyYXk8c3RyaW5nPil7XHJcbiAgICAgICAgdGhpcy5MaXN0X0NvbnRlbnQucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcclxuICAgICAgICBkYXRhLmZvckVhY2godj0+e1xyXG4gICAgICAgICAgICB0aGlzLkxpc3RfQ29udGVudC5hZGRJdGVtRnJvbVBvb2woKS50ZXh0ID0gdjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsUmV3YXJkcyhyZXdhcmREYXRhOmFueVtdKXtcclxuICAgICAgICBDb21tb24uZmlsbEl0ZW1MaXN0RGF0YShyZXdhcmREYXRhLCB0aGlzLkxpc3RfUmV3YXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vQ2hvb3NlU2VydmljZUNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0Nob29zZVNlcnZpY2VWaWV3JztcclxuZXhwb3J0ICogZnJvbSAnLi9Db3JlJztcclxuZXhwb3J0ICogZnJvbSAnLi9Mb2FkaW5nQ29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ1Byb2dyZXNzQ29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ1Byb2dyZXNzVmlldyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTG9hZGluZ1ZpZXcnO1xyXG5leHBvcnQgKiBmcm9tICcuL1B1YmxpY0NvbmZpcm1hdGlvbkNvbnRyb2xsZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1B1YmxpY0NvbmZpcm1hdGlvblZpZXcnO1xyXG4iXX0=

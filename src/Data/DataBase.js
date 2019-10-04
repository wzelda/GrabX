import * as Config from "../Config/Config";
import * as Manager from "../Manager/Manager";
import * as Common from "../Common/Common";
import GEvent from "../Common/GEvent";
export class HttpReqbodyBase {
    constructor(modCode, reqCode, session, accName, reqdata) {
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
}
export class DataStruct extends Common.EventDispather {
    static SendReq(reqData) {
        this.reqBody.ReqData = reqData;
        this._NetMgr = new Manager.HttpManager();
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
        //预留接口，避免后端没有返回数据
        this.onConnectEnd(data);
        this.reqBody.ReqData = null;
    }
    static get NetMgr() {
        if (!this._NetMgr) {
            this._NetMgr = new Manager.HttpManager();
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
export class DevReqBody extends HttpReqbodyBase {
    constructor(modCode, reqCode, reqData) {
        if (!LoginData.Session) {
            console.error('Pls login first');
            return;
        }
        ;
        super(modCode, reqCode, LoginData.Session, LoginData.AccountKey, reqData);
    }
    static get isInited() {
        return this._isBodyInited;
    }
}
DevReqBody._isBaseBodyInited = false;
DevReqBody._isBodyInited = false;
//玩家数据
export class PlayerData {
    static set Data(data) {
        if (null != data.NickName) {
            this.NikeName = data.NickName;
        }
        if (null != data.Avatar) {
            this.Avatar = data.Avatar;
        }
        GEvent.Dispatch(Common.DataPlayerEid.Refreshed);
    }
}
PlayerData.Point = 0;
export let ShareWord = {
    "CardWords": new Array(),
    "HamsterWords": new Array(),
    "CoinWords": new Array(),
    "OtherWords": new Array() //其他分享语句
};
export function GetShareWord(shareType) {
    let rand = 0;
    switch (shareType) {
        case Config.ShareWordEnum.CardWords:
            rand = Math.floor(Math.random() * ShareWord.CardWords.length);
            return ShareWord.CardWords[rand].ShareWord;
        case Config.ShareWordEnum.HamsterWords:
            rand = Math.floor(Math.random() * ShareWord.HamsterWords.length);
            return ShareWord.HamsterWords[rand].ShareWord;
        case Config.ShareWordEnum.CoinWords:
            rand = Math.floor(Math.random() * ShareWord.CoinWords.length);
            return ShareWord.CoinWords[rand].ShareWord;
        default:
            rand = Math.floor(Math.random() * ShareWord.OtherWords.length);
            return ShareWord.OtherWords[rand].ShareWord;
    }
}
//配置数据
export class ConfigData extends DataStruct {
    static set Data(resp_data) {
        setConfigData(resp_data);
    }
}
function setConfigData(resp_data) {
    console.log('配置数据：', resp_data);
    if (!resp_data)
        return;
    Config.DataConfig.instance.saveConfigVersion(resp_data);
    for (let i in resp_data) {
        if (resp_data[i]) {
            Config.DataConfig.instance.storeConfig(resp_data[i].TableId, resp_data[i].Data);
        }
    }
    Config.DataConfig.IsConfigLoaded = true;
    GEvent.Dispatch(Common.SceneLoginEid.ConfigLoaded);
}
//登录数据
export class LoginData extends DataStruct {
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
        this.dispatchEvent(Common.SceneLoginEid.LoginSuccess);
    }
}
LoginData._isLogined = false; //是否已登录
//升级数据
export class UpgradeData extends DataStruct {
    static set Data(respData) {
        if (respData.XiuweiInfo) {
            PlayerData.Data = respData.XiuweiInfo;
        }
        this.dispatchEvent(Common.CharacterCultivationEid.Upgrade, respData.UpOk);
    }
}

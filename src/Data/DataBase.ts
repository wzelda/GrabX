import LocalConfig from '../Config/LocalConfig';
import * as Config from "../Config/Config";
import * as Manager from "../Manager/Manager";
import * as Common from "../Common/Common";
import GEvent from "../Common/GEvent";

export class HttpReqbodyBase{
    Key:string;
    ModuleCode: number;
    ReqCode: number;
    Session: string;
    AccountKey: string;
    ReqData: any;

    constructor(modCode:number, reqCode:number, session?:string, accName?:string, reqdata?){
        if(typeof(reqdata) == "string"){
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

export abstract class DataStruct extends Common.EventDispather{
    private static _NetMgr:Manager.HttpManager;
    private static _reqkeys = new Array<string>();

    private _httpMgr:Manager.HttpManager;
    protected static reqBody:HttpReqbodyBase;

    static isResponsed:boolean;
    static DiceNum:number;

    static SendReq(reqData?){
        this.reqBody.ReqData = reqData;
        this._NetMgr = new Manager.HttpManager();
        this._NetMgr.Connect('', this.reqBody, this.onResponse.bind(this));
    }

    static set ReqBody(body){
        if(!this.reqBody)
            this.reqBody = body;
    }

    static set Data(data){}

    static onConnectEnd(data:Config.RespDataStruct){}

    static onResponse(data:Config.RespDataStruct){
        if(data && data.RespData != null){
            this.Data = data.RespData;
        }
        //预留接口，避免后端没有返回数据
        this.onConnectEnd(data);
        this.reqBody.ReqData = null;
    }

    static get NetMgr(){
        if(!this._NetMgr){
            this._NetMgr = new Manager.HttpManager();
        }

        return this._NetMgr;
    }

    static Connect(reqkey:string, reqbody:HttpReqbodyBase, callback?:Function, isShowLoading?, IsGm?:boolean){
        this.NetMgr.Connect(reqkey, reqbody, this.OnHttpRequestComplete.bind(this), isShowLoading, IsGm);
        this._reqkeys.push(reqkey);
    }

    static OnHttpRequestComplete(data:Config.RespDataStruct, reqkey:string, reqData){
    };
}

export class DevReqBody extends HttpReqbodyBase {
    private static _isBaseBodyInited:boolean = false;
    private static _isBodyInited:boolean = false;
    //请求体
    static ConfigBody:HttpReqbodyBase;   //配置
    static LoginBody:HttpReqbodyBase;    //登录
    static UpgradeBody:HttpReqbodyBase;    //升阶
    static AdobeUiInfoBody:DevReqBody;  //洞府展示
    static AdobeHireWorkerBody:DevReqBody;  //洞府招募仙仆
    static AdobeAddWorkerBody:DevReqBody;  //洞府添加工作仙仆
    static AdobeReduceWorkerBody:DevReqBody;  //洞府减少工作仙仆
    static AdobeUpStoneBody:DevReqBody;  //洞府灵石升级
    static AdobeUpFoodBody:DevReqBody;  //洞府食物升级
    static AdobeUpWoodBody:DevReqBody;  //洞府木材升级
    static AdobeUpIronBody:DevReqBody;  //洞府陨铁升级

    static get isInited(){
        return this._isBodyInited;
    }

    constructor(modCode:number, reqCode:number, reqData?){
        if(!LoginData.Session) {
            console.error('Pls login first');
            return;
        };

        super(modCode, reqCode, LoginData.Session, LoginData.AccountKey, reqData);
    }
}

type DamonInfoType = {
    "ChallengeLevel": number,
}

//玩家数据
export class PlayerData {
    static NikeName:string;
    static Avatar:string;
    static Point = 0;

    static set Data(data){
        if(null != data.NickName){
            this.NikeName = data.NickName;
        }

        if(null != data.Avatar){
            this.Avatar = data.Avatar;
        }

        GEvent.Dispatch(Common.DataPlayerEid.Refreshed);
    }
}

//分享语句
interface ShareDetail {
    Id:number;
    ShareType:number;            //分享类型1明信片
    ShareWord:string  //分享语句
}

export let ShareWord = {
    "CardWords": new Array<ShareDetail>(),        //明信片分享语句
    "HamsterWords": new Array<ShareDetail>(),     //打地鼠分享语句
    "CoinWords": new Array<ShareDetail>(),        //接金币分享语句
    "OtherWords": new Array<ShareDetail>()        //其他分享语句
}

export function GetShareWord(shareType?){
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
export class ConfigData extends DataStruct{
    static set Data(resp_data:Config.ConfigDataParam[]){
        setConfigData(resp_data);
    }
}

function setConfigData(resp_data:Config.ConfigDataParam[]){
    console.log('配置数据：', resp_data);
    if(!resp_data) return;

    Config.DataConfig.instance.saveConfigVersion(resp_data);
    for(let i in resp_data){
        if(resp_data[i]){
            Config.DataConfig.instance.storeConfig(resp_data[i].TableId, resp_data[i].Data);
        }
    }

    Config.DataConfig.IsConfigLoaded = true;
    GEvent.Dispatch(Common.SceneLoginEid.ConfigLoaded);
}

//登录数据
export class LoginData extends DataStruct{
    static Session:string;
    static AccountKey:string;
    private static _isLogined = false;  //是否已登录

    static get IsLogined(){
        return this._isLogined;
    }

    static set Data(data:Config.LoginRespDataStruct){
        if(data.AccountBaseInfo){
            this.Session = data.AccountBaseInfo.VerifySession;
            this.AccountKey = data.AccountBaseInfo.AccountKey;
            PlayerData.Data = data.AccountBaseInfo;
        }

        if(data.XiuweiInfo){
            PlayerData.Data = data.XiuweiInfo;
        }

        if(!this._isLogined){
            this._isLogined = true;
        }

        this.dispatchEvent(Common.SceneLoginEid.LoginSuccess);
    }
}

//升级数据
export class UpgradeData extends DataStruct{
    static set Data(respData){
        if(respData.XiuweiInfo){
            PlayerData.Data = respData.XiuweiInfo;
        }

        this.dispatchEvent(Common.CharacterCultivationEid.Upgrade, respData.UpOk);
    }
}
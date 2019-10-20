import * as Config from "./Config";

export class HttpReqbodyBase{
    static reqbodys:Config.Dictionary<HttpReqbodyBase> = {};
    Key:string;
    ModuleCode: number;
    ReqCode: number;
    Session: string;
    AccountKey: string;
    ReqData: any;

    constructor(key:string, modCode:number, reqCode:number, session?:string, accName?:string, reqdata?){
        if(typeof(reqdata) == "string"){
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
}

//请求结构
export var ReqData = {
    Login:{"Name": "tandy"},
    AdobePoolUpgrade:{"Type": 1},
    JoinSect:{"GroupStageId": 1,"GroupId": 1},
    LearnSectKf:{"SkillId": 1},
    UpgradeKongfa:{"SkillType":1,"SkillId": 1},
    StartSectTask:{"TaskId":1},
    GrabSectTaskAward:{"TaskId":1},
    SellBagItem:{"Position": 1,"Type": 1,"Id": 1,"Num": 1},
    UseBagItem:{"Position": 1,"Type": 1,"Id": 1,"Num": 1},
    GmAddBagItem:{"Type": 1,"Id": 1,"Num": 1},
    //挑战镇妖塔
    GoMonsterTower:{"ChallengeLevel": 1, "HelpHeros": new Array<HelpHerosDataClass>()},
}

//镇妖塔邀请仙友数据
export class HelpHerosDataClass {
    Key:string;
    IsRobot:boolean;

    constructor(key:string, isRobot:boolean){
        this.Key = key;
        this.IsRobot = isRobot;
    }

    //无助战英雄
    static get NoneHelpHero(){
        return [EmptyHelpHero, EmptyHelpHero, EmptyHelpHero, EmptyHelpHero];
    }
}

//助战英雄空位
export const EmptyHelpHero = new HelpHerosDataClass('', false);

export enum ReqbodyKey{
    Config = "Config",
    Login = "Login",
    Upgrade = "Upgrade",
    AdobeUiInfo = "AdobeUiInfo",
    AdobeHireWorker = "AdobeHireWorker",
    AdobeAddWorker = "AdobeAddWorker",
    AdobeReduceWorker = "AdobeReduceWorker",
    AdobeUpStone = "AdobeUpStone",
    AdobeUpFood = "AdobeUpFood",
    AdobeUpWood = "AdobeUpWood",
    AdobeUpIron = "AdobeUpIron",
}

export let NetConfig = {
    RequestUrl:"http://7.lightpaw.com/truth",

    // HttpRequestUrl:"http://706.lightpaw.com:7720/happy_travel",

    HttpRequestUrl:"https://9z9acv901g.execute-api.cn-northwest-1.amazonaws.com.cn/beta",
    
    LocalRequestUrl:"http://7.lightpaw.com/truth",

    LocalWechatRequestUrl:"http://svf37e.natappfree.cc/happy_travel",

    GMUrl:"http://7.lightpaw.com/happy_travel/reward",

    TempName:"",
}

//连接状态
export enum HttpConnectState {
    Error = 0,
    Success = 1,
}

//响应结构体
export interface RespDataStruct {
    RespCode: number;
    RespMsg: string;
    RespData;
}

export function getRespData(data:RespDataStruct){
    return data && data.RespData;
}

//拉取配置请求体
export class ConfigDataParam {
    TableId: number;
    TableName: string;
    Version: number;
    Data:string;

    constructor(id:number, version:number, name?:string, data?){
        this.TableId = id;
        this.Version = version;
        if(name){
            this.TableName = name;
        }
        if(data){
            this.Data = data;
        }
    }
}

export let ConfigReqData = new Array<ConfigDataParam>();

//登录请求体
export class LoginReqData {
    Name?: string;
    Password?: string;
    JsCode?: string;
    EncryptedData?: string;
    Iv?: string;

    constructor(name?:string, pw?:string, jscode?:string, encryptedData?:string, iv?:string) {
        this.Name = name;
        this.Password = pw;
        this.JsCode = jscode;
        this.EncryptedData = encryptedData;
        this.Iv = iv;
    }
}

//登录响应数据体
export type LoginRespDataStruct = {
    "AccountBaseInfo": {
        "AccountKey": string,
        "VerifySession": string,
        "NickName": string,
        "Avatar": string,
        "CreateTime": number,
        "Daoheng": number,
        "Lingli": number,
        "Gengu": number,
        "Tipo": number,
        "Shenfa": number,
        "Wuxing": number,
        "Fuyuan": number,
        "Zizhi": number,
        "Zhengyi": number,
        "Xiee": number,
        "Weiwang": number,
        "GroupGongxian": number,
        "Xianyu": number,
    },
    "XiuweiInfo": {
        "AccountKey": string,
        "Stage": number,
        "CurrentValue": number,
        "Efficiency": number,
        "SettlementTime": number
    },
    "PagodaInfo": {
        "AccountKey": string,
        "NormalMultipleInfos": [
            {
                "StartStamp": number,
                "EndStamp": number
            }
        ],
        "NormalStartTime": number,
        "NormalTimes": number,
        "NormalLestTime": number,
        "LeaderMultipleInfos": [
            {
                "StartStamp": number,
                "EndStamp": number
            }
        ],
        "LeaderStartTime": number,
        "LeaderTimes": number,
        "LeaderLestTime": number
    },
    "DongfuInfo": { //账户最新洞府信息
        "AccountKey": string,
        "TotalServantNum": number,
        "StoneLevelId": number,
        "StoneNum": number,
        "StoneServantNum": number,
        "FoodLevelId": number,
        "FoodNum": number,
        "FoodServantNum": number,
        "WoodLevelId": number,
        "WoodNum": number,
        "WoodServantNum": number,
        "IronLevelId": number,
        "IronNum": number,
        "IronServantNum": number,
        "SettlementTime": number
    },
    "PoolInfo": {
        "AccountKey": string,
        "PoolLevelId": number,
        "ReikiNum": number,
        "GoldLevelId": number,
        "WoodLevelId": number,
        "WaterLevelId": number,
        "FireLevelId": number,
        "SoilLevelId": number,
        "SettlementTime": number,
    },
    "GroupInfo": {
        "AccountKey": string,
        "GroupId": number,
        "GroupSkillNum": number,
        "StudySkills": [
           {
               "SkillId": number,
               "SkillType": number,
               "Level": number
           }
       ]
    },
    "StorageInfo": {
        "SwordId": number,
        "HairpinId": number,
        "ClothesId": number,
        "ShoesId": number,
        "RingId": number,
        "JadeId": number,
        "BraceletId": number,
        "CompassId": number,
        "OpenNum": number,
        "GoodInfos": [
            {
                "Type": number,
                "Id": number,
                "Num": number
            }
        ],
    },
    "DamonInfo": {
        "AccountKey": string,
        "ChallengeLevel": number
    }
}

export class AdobeAddWorkerReqData {
    WorkType:number;

    constructor(workType:number) {
        this.WorkType = workType;
    }
}

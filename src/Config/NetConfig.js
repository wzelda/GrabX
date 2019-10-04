export class HttpReqbodyBase {
    constructor(key, modCode, reqCode, session, accName, reqdata) {
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
}
HttpReqbodyBase.reqbodys = {};
//请求结构
export var ReqData = {
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
export class HelpHerosDataClass {
    constructor(key, isRobot) {
        this.Key = key;
        this.IsRobot = isRobot;
    }
    //无助战英雄
    static get NoneHelpHero() {
        return [EmptyHelpHero, EmptyHelpHero, EmptyHelpHero, EmptyHelpHero];
    }
}
//助战英雄空位
export const EmptyHelpHero = new HelpHerosDataClass('', false);
export var ReqbodyKey;
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
export let NetConfig = {
    RequestUrl: "http://7.lightpaw.com/truth",
    // HttpRequestUrl:"http://706.lightpaw.com:7720/happy_travel",
    HttpRequestUrl: "https://9z9acv901g.execute-api.cn-northwest-1.amazonaws.com.cn/beta",
    LocalRequestUrl: "http://7.lightpaw.com/truth",
    LocalWechatRequestUrl: "http://svf37e.natappfree.cc/happy_travel",
    GMUrl: "http://7.lightpaw.com/happy_travel/reward",
    TempName: "",
};
//连接状态
export var HttpConnectState;
(function (HttpConnectState) {
    HttpConnectState[HttpConnectState["Error"] = 0] = "Error";
    HttpConnectState[HttpConnectState["Success"] = 1] = "Success";
})(HttpConnectState || (HttpConnectState = {}));
export function getRespData(data) {
    return data && data.RespData;
}
//拉取配置请求体
export class ConfigDataParam {
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
export let ConfigReqData = new Array();
//登录请求体
export class LoginReqData {
    constructor(name, pw, jscode, encryptedData, iv) {
        this.Name = name;
        this.Password = pw;
        this.JsCode = jscode;
        this.EncryptedData = encryptedData;
        this.Iv = iv;
    }
}
export class AdobeAddWorkerReqData {
    constructor(workType) {
        this.WorkType = workType;
    }
}

import * as Manager from "./Manager";
import * as Data from "../Data/Data";
import { DevReqBody } from "../Data/Data";
import * as Common from "../Common/Common";
export class DataManager extends Manager.BaseManager {
    constructor() {
        super(...arguments);
        this._isBaseBodyInited = false;
        this._isBodyInited = false;
    }
    onAwake() {
        // Data.DevReqBody.InitBaseBody();
        this.initBaseBody();
        this.addEventListener(Common.SceneLoginEid.LoginSuccess, this.onLoginSuccess);
    }
    initBaseBody() {
        if (this._isBaseBodyInited)
            return;
        //与登录无关的接口直接创建
        //配置
        Data.ConfigData.ReqBody = new Data.HttpReqbodyBase(0, 10002);
        //登录
        Data.LoginData.ReqBody = new Data.HttpReqbodyBase(0, 10003);
        this._isBaseBodyInited = true;
    }
    onLoginSuccess() {
        this.initDevBodies();
    }
    initDevBodies() {
        //以下请求体需要登录才可创建
        if (this._isBodyInited || !Data.LoginData.Session)
            return;
        //#10802 获取首杀榜
        Data.UpgradeData.ReqBody = new DevReqBody(8, 10802);
        this._isBodyInited = true;
    }
}

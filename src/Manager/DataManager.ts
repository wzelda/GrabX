import * as Core from "../UI/Core";
import * as UI from "../UI/UI";
import * as Utils from "../Common/Utils";
import LocalConfig from '../Config/LocalConfig';
import * as Config from "../Config/Config";
import * as Manager from "./Manager";
import * as Data from "../Data/Data";
import {DevReqBody, LoginData} from "../Data/Data";
import * as Common from "../Common/Common";

export class DataManager extends Manager.BaseManager {
    static Inst:DataManager;
    private _isBaseBodyInited:boolean = false;
    private _isBodyInited:boolean = false;

    onAwake(){
        // Data.DevReqBody.InitBaseBody();
        this.initBaseBody();
        this.addEventListener(Common.SceneLoginEid.LoginSuccess, this.onLoginSuccess);
    }

    private initBaseBody(){
        if(this._isBaseBodyInited) return;

        //与登录无关的接口直接创建
        //配置
        Data.ConfigData.ReqBody = new Data.HttpReqbodyBase(0, 10002);   
        //登录
        Data.LoginData.ReqBody = new Data.HttpReqbodyBase(0, 10003); 

        this._isBaseBodyInited = true;
    }

    private onLoginSuccess(){
        this.initDevBodies();
    }

    private initDevBodies(){
        //以下请求体需要登录才可创建
        if(this._isBodyInited || !Data.LoginData.Session) return;
        //#10802 获取首杀榜
        Data.UpgradeData.ReqBody = new DevReqBody(8, 10802);
    
        this._isBodyInited = true;
    }
} 
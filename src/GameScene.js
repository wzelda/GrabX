import * as Config from "./Config/Config";
import * as Manager from "./Manager/Manager";
import * as Data from './Data/Data';
import * as Common from "./Common/Common";
import * as Logic from "./Logic/Logic";
export class GameScene extends Common.EventDispather {
    static get inst() {
        return this._inst;
    }
    onAwake() {
        GameScene._inst = this;
        this.owner.addComponent(Logic.GrabLogic);
        // this.init();
        // this.addEventListener(Common.SceneLoginEid.ConfigLoaded, this.onConfigLoaded);
        // this.addEventListener(Common.SceneLoginEid.ServiceChoosed, this.onVersionChecked);
        // this.addEventListener(Common.SceneLoginEid.LoginSuccess, this.onLogined);
        // this.addEventListener(Common.SceneLoginEid.SimProgressEnd, this.openMainUi);
    }
    init() {
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
    }
    initFairygui() {
        fgui.UIConfig.packageFileExtension = "txt";
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
    }
    loadLoginUiRes() {
        Common.Resource.load(Config.loginResUrls, this, this.onLogingResLoaded);
    }
    onLogingResLoaded() {
        this.preLogin();
    }
    loadRes() {
        Common.Resource.load(Config.urls, this, this.onResLoaded, this.onLoading);
    }
    onLoading(progress) {
        console.log("加载进度: " + progress);
        // Manager.LoadingProgressManager.Inst.showUiProgress(progress);
    }
    onResLoaded(info) {
        if (!info) {
            return console.error('Load fairygui package fail');
        }
        //公用包
        Config.UIConfig.UIPkgs.forEach(pkg => {
            Common.Resource.addUiPackage(pkg);
        });
        Config.UIConfig.LoginPackageLoaded = true;
        this.dispatchEvent(Common.SceneLoginEid.PackageLoaded);
        this.loadConfig();
    }
    preLogin() {
        this.openLoginUI();
        this.checkVersion();
    }
    checkVersion() {
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
    }
    onVersionChecked() {
        this.loadRes();
        // this.loginGame();
    }
    openLoginUI() {
        Manager.LoadingProgressManager.Inst.showUiProgress(5);
    }
    openChooseServiceUi() {
        this.dispatchEvent(Config.ViewKit.ChooseService.Key);
    }
    loadConfig() {
        //拉取配置
        // Data.ConfigData.SendReq(Config.DataConfig.localConfigs);
        Data.ConfigData.SendReq([]);
        //拉取本地配置，目前由后端发送，暂弃用
        // DataConfig.instance.initConfig(this.create2dScene.bind(this));
    }
    onConfigLoaded() {
        this.loginGame();
    }
    loginGame() {
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
    }
    testLogin() {
        let acc;
        let tempName = Config.NetConfig.TempName;
        if (tempName) {
            acc = tempName;
        }
        else {
            //随机帐号登录，方便测试
            acc = "temp" + Math.random();
        }
        let reqdata = new Config.LoginReqData(acc);
        Data.LoginData.SendReq(reqdata);
    }
    onLogined() {
        this.openMainUi();
    }
    openMainUi() {
        // if(!Config.UIConfig.LoginPackageLoaded || !Config.DataConfig.IsConfigLoaded) {
        // 	Laya.timer.once(500, this, this.openMainUi);
        // 	return;
        // };
        this.dispatchEvent(Common.SceneEnterEid.MainMenu);
        this.dispatchEvent(Config.ViewKit.MainMenu.Key);
    }
}

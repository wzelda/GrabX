import * as Manager from "../Manager/Manager";
import LocalConfig from '../Config/LocalConfig';
import * as Config from '../Config/Config';
import { UIConfig } from "../Config/UIConfig";
import * as Core from "./Core";
import * as Data from "../Data/Data";
import * as Common from "../Common/Common";
export class LoadingProgressController extends Core.Controller {
    constructor() {
        super(...arguments);
        this.Progress = 0;
        this.IsLoaded = false;
        this.PkgNum = 0;
        this.ResNum = 0;
    }
    onOpen(data) {
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
    }
    setProgressNumber() {
        //登录需要加载的UI包数量--cocos用
        // this.PkgNum = UIConfig.UIPkgs.length * 2;
        this.ResNum = Config.loginResUrls.length + Config.urls.length + 5;
        //小游戏加上分包进度
        if (Common.isMiniGame()) {
            // this.PkgNum += UIConfig.SubPkgs.length;
            this.ResNum += UIConfig.SubPkgs.length;
        }
    }
    showUiProgress(progress, pkgName) {
        pkgName = pkgName || '';
        this.View.UI.text = 'Loading ui ' + pkgName + ': ' + progress * 100 + '%';
    }
    //假进度
    simProgress() {
        this.Progress += 100 / this.ResNum;
        let progress = Math.ceil(this.Progress);
        progress = progress > 100 ? 100 : progress;
        this.View.UI.text = progress + "%";
        if (this.Progress >= 100) {
            this.tryClose();
            return;
        }
        Laya.timer.once(100, this, this.simProgress);
    }
    addProgress(addProgress) {
        this.Progress += 100 / this.PkgNum;
        console.log(this.Progress);
        // this.Progress = this.Progress > 100? 100: this.Progress;
        let progress = Math.ceil(this.Progress);
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
    }
    showWxLogin() {
        if (!Common.isMiniGame() || LocalConfig.IsWxAuth || !this.IsLoaded)
            return;
        this.View.showWxLogin();
    }
    showConfigProgress() {
        if (Config.DataConfig.IsConfigLoaded == false) {
            this.View.UI.text = "加载配置中";
        }
    }
    showLoginProgress() {
        this.View.UI.text = "登录中";
    }
    onLoginSuccess() {
        this.tryClose();
    }
    onResLoaded() {
        this.IsLoaded = true;
        this.tryClose();
    }
    //满足所有条件才关闭加载界面
    tryClose() {
        if (this.Progress < 100)
            return;
        if (Manager.VersionManager.Version == Config.VersionConfig.Develop) {
            if (!LocalConfig.IsChoosedService)
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
    }
    onClose() {
        this.dispatchEvent(Common.SceneLoginEid.SimProgressEnd);
    }
}

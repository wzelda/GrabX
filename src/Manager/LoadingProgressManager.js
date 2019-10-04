import * as UI from "../UI/UI";
import * as Manager from '../Manager/Manager';
import * as Common from '../Common/Common';
import LocalConfig from '../Config/LocalConfig';
//登录进度管理
export class LoadingProgressManager extends Manager.BaseManager {
    onAwake() {
        this.Init();
        // this.addEventListener(Common.SceneLoginEid.SimProgressEnd, this.onLoadingComplete);
    }
    Init() {
        if (this.IsInited == true)
            return;
        this.IsInited = true;
        this.Controller = Manager.UIManager.openController(UI.LoadingProgressController);
        this.addEventListener(Common.SceneLoginEid.SimProgressEnd, this.onLoadingComplete);
    }
    showUiProgress(progress, pkgName) {
        if (!this.IsInited)
            return;
        this.Controller.showUiProgress(progress, pkgName);
    }
    ShowWxLogin() {
        if (!this.IsInited)
            return;
        this.Controller.showWxLogin();
    }
    showConfigProgress() {
        if (!this.IsInited)
            return;
        this.Controller.showConfigProgress();
    }
    onLoadingComplete() {
        //加载成功后废除自己
        LocalConfig.IsSimProgressEnd = true;
        this.IsInited = false;
        this.Controller = null;
        this.destroy();
    }
}

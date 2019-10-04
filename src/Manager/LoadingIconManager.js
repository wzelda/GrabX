import * as UI from "../UI/UI";
import * as Manager from "./Manager";
//菊花管理
export class LoadingIconManager extends Manager.BaseManager {
    onAwake() {
        this.Init();
    }
    Init() {
        if (this.IsInited == true)
            return;
        this.IsInited = true;
        this.Controller = Manager.UIManager.openController(UI.LoadingController);
    }
    ShowLoading() {
        if (!this.IsInited)
            return;
        this.Controller.showLoading();
    }
    HideLoading() {
        if (!this.IsInited)
            return;
        this.Controller.hideLoading();
    }
}

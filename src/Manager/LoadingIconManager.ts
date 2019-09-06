import * as UI from "../UI/UI";
import * as Config from "../Config/Config";
import * as Manager from "./Manager";
import * as Common from "../Common/Common";

//菊花管理
export class LoadingIconManager extends Manager.BaseManager {
    static Inst:LoadingIconManager;
    public IsInited:Boolean;
    public Controller:UI.LoadingController;

    onAwake(){
        this.Init();
    }
    
    Init(){
        if(this.IsInited == true) return;

        this.IsInited = true;

        this.Controller = Manager.UIManager.openController(UI.LoadingController) as UI.LoadingController;
    }

    ShowLoading() {
        if(!this.IsInited) return;

        this.Controller.showLoading();
    }
    
    HideLoading(){
        if(!this.IsInited) return;

        this.Controller.hideLoading();
    }
}
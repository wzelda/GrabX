import {UIConfig} from "../Config/UIConfig";
import LocalConfig from "../Config/LocalConfig";
import * as Config from "../Config/Config";
import * as Manager from "../Manager/Manager";
import * as Core from "./Core";
import * as UI from "./UI";

export class LoadingProgressView extends Core.View{
    public Login_C:fairygui.Controller;

    LoadView() {
        //渲染层级
        this.UI.sortingOrder = UIConfig.SortingOrder.SceneLoading;

        this.Login_C = this.UI.getController('Login_C');
    }

    showWxLogin(){
        this.Login_C.selectedIndex = 1;
    }

    onDestroy(){
    }
}
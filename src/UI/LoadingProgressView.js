import { UIConfig } from "../Config/UIConfig";
import * as Core from "./Core";
export class LoadingProgressView extends Core.View {
    LoadView() {
        //渲染层级
        this.UI.sortingOrder = UIConfig.SortingOrder.SceneLoading;
        this.Login_C = this.UI.getController('Login_C');
    }
    showWxLogin() {
        this.Login_C.selectedIndex = 1;
    }
    onDestroy() {
    }
}

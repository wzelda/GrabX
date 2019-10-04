import * as UI from "./UI";
import * as Config from "../Config/Config";
export class LoadingView extends UI.View {
    LoadView() {
        //渲染层级
        this.UI.sortingOrder = Config.UIConfig.SortingOrder.NetSignal;
        this.Show_C = this.UI.getController("Show_C");
    }
    onDestroy() {
    }
}

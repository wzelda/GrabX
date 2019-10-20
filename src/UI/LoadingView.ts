import * as Manager from "../Manager/Manager";
import LocalConfig from '../Config/LocalConfig';
import * as UI from "./UI";
import * as Data from '../Data/Data';
import * as Config from "../Config/Config";
import * as Common from "../Common/Common";

export class LoadingView extends UI.View{
    public Show_C:fgui.Controller;

    LoadView() {
        //渲染层级
        this.UI.sortingOrder = Config.UIConfig.SortingOrder.NetSignal;

        this.Show_C = this.UI.getController("Show_C")
    }

    onDestroy(){
    }
}
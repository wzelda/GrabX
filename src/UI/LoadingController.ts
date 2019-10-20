import * as Manager from "../Manager/Manager";
import LocalConfig from '../Config/LocalConfig';
import * as UI from "./UI";
import * as Data from '../Data/Data';
import * as Config from "../Config/Config";
import * as Common from "../Common/Common";

export class LoadingController extends UI.Controller{
    public View:UI.LoadingView;

    onOpen(data) {
        this.View.Show_C.selectedIndex = 1;

        this.addEventListener(Common.NetHttpConnectEid.ConnectBegin, this.openHttpStart);
        this.addEventListener(Common.NetHttpConnectEid.ServiceRespond, this.onHttpRespond);
    }

    showLoading(){
        this.View.Show_C.selectedIndex = 1;
    }

    hideLoading(){
        this.View.Show_C.selectedIndex = 0;
    }

    //连接完成
    onHttpRespond(){
        this.hide();
    }

    //开始连接
    openHttpStart(){
        this.show();
    }

    onClose(){
        // cc.director.off(cc.Director.EVENT_BEFORE_SCENE_LOADING, this.close, this);
    }
}

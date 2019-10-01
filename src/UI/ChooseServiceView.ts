import LocalConfig from "../Config/LocalConfig";
import * as Manager from "../Manager/Manager";
import * as Data from "../Data/Data";
import * as Core from "./Core";

export class ChooseServiceView extends Core.View{
    Local:fgui.GObject;
    Http:fgui.GObject;
    LocalWechat:fgui.GObject;
    AccountName:fgui.GTextInput;

    LoadView() {
        this.Local = this.UI.getChild("Local")
        this.Http = this.UI.getChild("Http")
        this.LocalWechat = this.UI.getChild("LocalWechat")

        this.AccountName = this.UI.getChild("AccountName").asTextInput;
    }

    onDistroy(){
    }
}
import * as Core from "./Core";
export class ChooseServiceView extends Core.View {
    LoadView() {
        this.Local = this.UI.getChild("Local");
        this.Http = this.UI.getChild("Http");
        this.LocalWechat = this.UI.getChild("LocalWechat");
        this.AccountName = this.UI.getChild("AccountName").asTextInput;
    }
    onDistroy() {
    }
}

import * as Core from "./Core";
import * as UI from "./UI";
import * as Config from "../Config/Config";
let cKey = Config.ViewKit.PublicConfirmation.Key;
export class PublicConfirmationController extends Core.Controller {
    constructor() {
        super(cKey, UI.PublicConfirmationView, false, true);
    }
    onOpen(data) {
        this.addButtonLisenter(this.View.Btn_Close, this.close);
        this.addButtonLisenter(this.View.Btn_Cancel, this.close);
        this.addButtonLisenter(this.View.Btn_Yes, this.yesBtnOnClick);
        if (data == null || data instanceof Config.PopupWindowData == false) {
            console.error('Invalid popup window data.');
            return;
        }
        else {
            this.Callback = data.YesBtnCallback;
            this.refreshUI(data);
        }
    }
    yesBtnOnClick() {
        if (this.Callback) {
            this.Callback();
        }
        this.close();
    }
    onClose() {
    }
}
PublicConfirmationController.cKey = cKey;

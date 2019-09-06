import * as Manager from "../Manager/Manager";
import LocalConfig from '../Config/LocalConfig';
import {UIConfig} from "../Config/UIConfig";
import * as Core from "./Core";
import * as UI from "./UI";
import * as Config from "../Config/Config";

let cKey = Config.ViewKit.PublicConfirmation.Key;

export class PublicConfirmationController extends Core.Controller{
    static cKey = cKey;
    View:UI.PublicConfirmationView;
    Callback:Function;

    constructor(){
        super(cKey, UI.PublicConfirmationView, false, true);
    }

    onOpen(data:Config.PopupWindowData) {
        this.addButtonLisenter(this.View.Btn_Close, this.close);
        this.addButtonLisenter(this.View.Btn_Cancel, this.close);
        this.addButtonLisenter(this.View.Btn_Yes, this.yesBtnOnClick);
        
        if(data == null || data instanceof Config.PopupWindowData == false){
            console.error('Invalid popup window data.');
            return;
        }else{
            this.Callback = data.YesBtnCallback;
            this.refreshUI(data);
        }
    }

    yesBtnOnClick(){
        if(this.Callback){
            this.Callback();
        }

        this.close();
    }

    onClose(){
    }
}

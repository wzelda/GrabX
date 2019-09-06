import {UIConfig} from "../Config/UIConfig";
import LocalConfig from "../Config/LocalConfig";
import * as Manager from "../Manager/Manager";
import * as Data from "../Data/Data";
import * as Core from "./Core";
import * as Config from "../Config/Config";
import * as Common from "../Common/Common";

let vKey = Config.ViewKit.PublicConfirmation.Key;

export class PublicConfirmationView extends Core.View{
    static vKey = vKey;
    Btn_Close:fairygui.GButton;
    Btn_Yes:fairygui.GButton;
    Btn_Cancel:fairygui.GButton;
    List_Content:fairygui.GList;
    List_Reward:fairygui.GList;
    Content_C:fairygui.Controller;
    BtnType_C:fairygui.Controller;

    constructor(){
        super(vKey)
    }

    LoadView() {
        this.Btn_Close = this.Window.getChild('Btn_Close').asButton;
        this.Btn_Yes = this.Window.getChild('Btn_Yes').asButton;
        this.Btn_Cancel = this.Window.getChild('Btn_Cancel').asButton;
        this.List_Content = this.Window.getChild('List_Content').asList;
        this.List_Reward = this.Window.getChild('List_Reward').asList;
        this.Content_C = this.Window.getController('Content_C');
        this.BtnType_C = this.Window.getController('BtnType_C');
    }

    refreshUI(data:Config.PopupWindowData){
        if(!data) return;

        this.Content_C.selectedIndex = data.WindowType - 1;
        switch (data.WindowType) {
            case Config.ConfirmWindowType.Content:
                this.BtnType_C.selectedIndex = 0;
                this.fillContents(data.Content);
                break;
        
            case Config.ConfirmWindowType.Reward:
                this.BtnType_C.selectedIndex = 1;
                this.fillRewards(data.RewardData);
                break;

            case Config.ConfirmWindowType.ContentAndReward:
                this.BtnType_C.selectedIndex = 0;
                this.fillContents(data.Content);
                this.fillRewards(data.RewardData);
                break;
        }

        //按钮文字
        if(data.YesBtnContent){
            this.Btn_Yes.text = data.YesBtnContent;
        }
        if(data.CancelBtnContent){
            this.Btn_Cancel.text = data.CancelBtnContent;
        }
    }

    fillContents(data:Array<string>){
        this.List_Content.removeChildrenToPool();
        data.forEach(v=>{
            this.List_Content.addItemFromPool().text = v;
        });
    }

    fillRewards(rewardData:any[]){
        Common.fillItemListData(rewardData, this.List_Reward);
    }

    onDestroy(){
    }
}
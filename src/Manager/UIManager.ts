import * as Core from "../UI/Core";
import * as UI from "../UI/UI";
import * as Utils from "../Common/Utils";
import LocalConfig from '../Config/LocalConfig';
import * as Config from "../Config/Config";
import * as Manager from "./Manager";
import * as Common from "../Common/Common";

//强制引导
let GuideList = new Array<fgui.GComponent>();

export class UIManager extends Manager.BaseManager {
    protected static _inst:UIManager;

    private constructor(){
        super();
    }
    
    public static get Inst(){
        if(!this._inst){
            this._inst = new UIManager();
        }

        return this._inst;
    }

    onAwake(){
        UIManager._inst = this;
        UIManager.setUiKeys();
        UIManager.addListeners();
    }

    static setUiKeys(){
        let cfg = Config.ViewKit;
        UI.LoadingProgressController.init(cfg.LoadingProgress.Key, UI.LoadingProgressView);
        UI.LoadingController.init(cfg.LoadingMain.Key, UI.LoadingView);
        UI.ChooseServiceController.init(cfg.ChooseService.Key, UI.ChooseServiceView);
        UI.PublicConfirmationController.init(cfg.PublicConfirmation.Key, UI.PublicConfirmationView);
    }

    private static addListeners(){
        for(let i in Config.ViewKit){
            let cfg:Config.ViewConfig = Config.ViewKit[i];
            if(cfg && cfg.Key){
                this.addEventListener(cfg.Key, this.goOpen.bind(this, cfg.Key));
            }
        }

        this.addEventListener(Common.UiNoticeEid.CloseController, this.onCloseController);
        this.addEventListener(Common.UiNoticeEid.OpenFullScreen, this.onOpenFullscreen);
        this.addEventListener(Common.UiNoticeEid.CloseFullScreen, this.onCloseFullscreen);
        this.addEventListener(Common.UiNoticeEid.ClosePopup, this.openNextPopup);
    }

    private static goOpen(key, ...data){
        let c = Core.CtrlMapArray[key] as typeof Core.Controller;
        if(c){
            this.openController(c, ...data);
        }
    }

    static openController(ctrl:typeof Core.Controller, ..._data) {
        if(!ctrl) return

        let cKey = ctrl.Key;
        let ctrlInst = Core.OpenedCtrl[cKey];
        if(!ctrlInst || ctrlInst.IsDestroyed){
            ctrlInst = new ctrl(ctrl.Key, ctrl.view);
        }else{
            //只允许创建一个实例
            console.log('Controller has opened: ', cKey);
            ctrlInst.show(..._data);
            fgui.GRoot.inst.setChildIndex(Core.ViewMap[cKey].UI, fgui.GRoot.inst.numChildren);
            return;
        }

        return this.checkOpenCtrlInst(ctrlInst, ..._data);

        // let done = ctrlInst.create();
        // if(done){
        //     ctrlInst.open(..._data)
        // }else{
        //     console.error("Open controller failed");
        //     return;
        // }

        // //设置渲染层级
        // if(ctrlInst.IsPopup){
        //     ctrlInst.SortingOrder(Config.UIConfig.SortingOrder.Popup);
        // }

        // return ctrlInst;
    }

    private static checkOpenCtrlInst(ctrlInst:Core.Controller, ..._data){
        if(ctrlInst.IsPopup){
            ctrlInst = this.getNextPopup(ctrlInst, ..._data);
            if(!ctrlInst) return;
        }

        let done = ctrlInst.create();
        if(done){
            ctrlInst.open(..._data)
        }else{
            console.error("Open controller failed");
            return;
        }

        //设置渲染层级
        if(ctrlInst.IsPopup){
            ctrlInst.SortingOrder(Config.UIConfig.SortingOrder.Popup);
        }

        return ctrlInst;
    }

    //关闭界面处理
    static onCloseController(ckey:string){
        let ctrl = Core.OpenedCtrl[ckey] as Core.Controller;
        //清除所有计时器
        Manager.TimerManager.RemoveTimer(ctrl);
    }

    //全屏界面处理
    static onOpenFullscreen(ckey:string){
        this.hideOtherUI(ckey);
    }

    static onCloseFullscreen(ckey:string){
        this.showOtherUI(ckey);
    }

    static hideOtherUI(ckey:string){
        for(let i in Core.OpenedCtrl){
            if(i == ckey) break;

            let ctrl = Core.OpenedCtrl[i];
            if(ctrl && ctrl.IsShow){
                ctrl.View.UI.visible = false;
            }
        }
    }

    static showOtherUI(ckey:string){
        for(let i in Core.OpenedCtrl){
            if(i == ckey) return;

            let ctrl = Core.OpenedCtrl[i];
            if(ctrl && ctrl.IsShow){
                ctrl.View.UI.visible = true;
            }
        }
    }

    // static openGuide = function(guideName, targetCom){
    //     if(!guideName) return;

    //     let grootInst = fgui.GRoot.inst

    //     let guideCom = fgui.UIPackage.createObject(Config.ViewKit.Guider.Pkg, guideName).asCom
    //     GuideList[guideName] = guideCom

    //     grootInst.addChild(guideCom)
    //     guideCom.setSize(grootInst.width, grootInst.height)
    //     let guideMask = guideCom.getChild("Mask")
    //     if(targetCom){
    //         guideMask.setXY(targetCom.x, targetCom.y)
    //     }
    // }

    static closeGuide = function(guideName){
        if(!GuideList[guideName]) return;

        GuideList[guideName].dispose();
        GuideList[guideName] = null;
    }

    static nextGuide = function(guideName){
        if(!GuideList[guideName]) return;

        for(let i in GuideList){
            GuideList[guideName] && GuideList[guideName].dispose();
            GuideList[guideName] = null;
        }
    }

    static PopupMap = new Array<typeof Core.Controller>();
    static PopupQueue = new Array<Core.Controller>();
    static PopupData = {};


    //打开弹窗
    static openPopup (popupCtrl:typeof Core.Controller, data){
        if(!popupCtrl) return;

        if(UIManager.PopupMap.length > 0){
            UIManager.PopupMap.push(popupCtrl);
            UIManager.PopupData[popupCtrl.Key] = data;
            let popup = UIManager.PopupMap.shift();
            UIManager.openController(popup, UIManager.PopupData[popup.Key]);
        }else{
            UIManager.openController(popupCtrl, data);
        }
    }

    private static getNextPopup (popupCtrl:Core.Controller, ...data){
        if(!popupCtrl) return;

        if(UIManager.PopupQueue.length > 0){
            UIManager.PopupQueue.push(popupCtrl);
            UIManager.PopupData[popupCtrl.multitonKey] = data;
            // return UIManager.PopupQueue.shift();
        }else{
            return popupCtrl;
        }
    }

    //打开下一个弹窗
    private static openNextPopup (){
        // UIManager.PopupMap.some((value, idx)=>{
        //     if(popupCtrl instanceof value){
        //         UIManager.PopupMap.splice(idx, 1);

        //         return true;
        //     }
        // });
        // UIManager.PopupData[popupCtrl.multitonKey] = null;

        if(UIManager.PopupQueue.length > 0){
            UIManager.PopupQueue.pop();
            let popup = UIManager.PopupQueue.shift();
            if(popup){
                UIManager.checkOpenCtrlInst(popup, ...UIManager.PopupData[popup.multitonKey]);
            }
        }
    }

    //打开文字确认弹窗
    static openConfirmWindow(content:string[], yesBtnCallback?:Function, btnYesTxt?:string, btnCancelTxt?:string){
        this.openPopup(UI.PublicConfirmationController, new Config.PopupWindowData(content, yesBtnCallback, Config.ConfirmWindowType.Content, btnYesTxt, btnCancelTxt));
    }

    //打开奖励弹窗
    static openRewardWindow(rewardData, yesBtnCallback?:Function, btnYesTxt?:string, btnCancelTxt?:string){
        this.openPopup(UI.PublicConfirmationController, new Config.PopupWindowData(null, yesBtnCallback, Config.ConfirmWindowType.Reward, rewardData, btnYesTxt, btnCancelTxt));
    }

    //打开文字+奖励弹窗
    static openContentRewardWindow(content:string[], rewardData, yesBtnCallback?:Function, btnYesTxt?:string, btnCancelTxt?:string){
        this.openPopup(UI.PublicConfirmationController, new Config.PopupWindowData(
            content, 
            yesBtnCallback, 
            Config.ConfirmWindowType.ContentAndReward, 
            rewardData, 
            btnYesTxt, 
            btnCancelTxt
        ));
    }
}
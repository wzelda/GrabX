import * as Config from "../Config/Config";

//点击特效
export class ClickEffectManager{
    private static TouchCom:fairygui.GComponent;

    private constructor(){}

    static Init(){
        if(this.TouchCom) return;
        
        let grootInst = fairygui.GRoot.inst;
		this.TouchCom = fairygui.UIPackage.createObjectFromURL('ui://MainUI/Component_dianji').asCom;
		grootInst.addChild(this.TouchCom);
		this.TouchCom.sortingOrder = Config.UIConfig.SortingOrder.ClickEffect;
        // this.TouchCom.node.zIndex = cc.macro.MAX_ZINDEX;
        // this.TouchCom.displayObject.setSiblingIndex(this.TouchCom.node.parent.childrenCount);

        grootInst.displayObject.on(Laya.Event.CLICK, this.playClickEffect, this);
    }

    /**
     * @param  {cc.Event.EventTouch} evt
     */
    static playClickEffect(evt){
        let pos = evt.getLocation();
        this.TouchCom.setXY(pos.x, fairygui.GRoot.inst.height - pos.y);
        this.TouchCom.getTransition('Effect_T').play();
    }

    static hide(){
        this.TouchCom.visible = false;
        // fairygui.GRoot.inst.node.targetOff(this);
    }

    static show(){
        this.TouchCom.visible = true;
    }
}
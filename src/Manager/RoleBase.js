import * as Manager from "./Manager";
import * as Config from "../Config/Config";
export class RoleBase {
    constructor(head, bodySlot, body) {
        // Ani:Laya.Animator;
        this.State = Manager.StateBase.IDEL;
        this.Head = head;
        this.BodySlot = bodySlot;
        this.Body = body;
        // this.Ani = body.getComponent(Laya.Animator) as Laya.Animator;
    }
}
export class PlayerRole extends RoleBase {
    constructor(head, bodySlot) {
        super(head, bodySlot);
        this.mCurrIndex = 0;
    }
    onAniTempletError() {
        console.error("Player aniTemplet error");
    }
    onBodyAniStop() {
        //循环播放
        // this.playBodyAni();
    }
    playBodyAni(loop) {
        //默认循环播放
        loop = null != loop ? loop : true;
        this.Body.play(0, loop);
    }
    parseTempletComplete(callback, thisArg) {
        //创建模式为1，可以启用换装
        this.Body = this.mFactory.buildArmature(1);
        this.BodySlot.displayObject.addChild(this.Body);
        this.Body.on(Laya.Event.STOPPED, this, this.onBodyAniStop);
        this.playBodyAni();
        if (callback) {
            callback.call(thisArg);
        }
    }
    setBody(bodyPath, callback, thisArg, ...data) {
        this.mFactory = Manager.PoolManager.getItem(Config.PoolItemKey.DressTemplate, Laya.Templet);
        this.mFactory.on(Laya.Event.COMPLETE, this, this.parseTempletComplete, [callback, thisArg]);
        this.mFactory.on(Laya.Event.ERROR, this, this.onAniTempletError);
        this.mFactory.loadAni(bodyPath);
    }
    setHead(url) {
        this.Head.url = url;
    }
}

import * as Manager from "./Manager";
import * as Config from "../Config/Config";

export class RoleBase{
    Head:fgui.GLoader;
    BodySlot:fgui.GObject;
    Body:Laya.Skeleton;
    // Ani:Laya.Animator;
    State:Manager.StateBase;

    constructor(head:fgui.GLoader, bodySlot:fgui.GObject, body?:Laya.Skeleton){
        this.Head = head;
        this.BodySlot = bodySlot;
        this.Body = body;
        // this.Ani = body.getComponent(Laya.Animator) as Laya.Animator;
    }

    // get AniState(){
    //     if(!this.Ani) return null;

    //     return this.Ani.getCurrentAnimatorPlayState();
    // }
}

export class PlayerRole extends RoleBase {
    private mCurrIndex:number = 0;
    mFactory:Laya.Templet;
    setBodyCallback:Function;
    
    constructor(head:fgui.GLoader, bodySlot:fgui.GObject){
        super(head, bodySlot);
    }

    private onAniTempletError(){
        console.error("Player aniTemplet error");
    }

    private onBodyAniStop(){
        //循环播放
        // this.playBodyAni();
    }

    private playBodyAni(loop?:boolean){
        //默认循环播放
        loop = null != loop? loop: true;
        this.Body.play(0, loop);
    }
    
    private parseTempletComplete(callback?:Function, thisArg?):void {
        //创建模式为1，可以启用换装
        this.Body = this.mFactory.buildArmature(1);
        this.BodySlot.displayObject.addChild(this.Body);
        this.Body.on(Laya.Event.STOPPED, this, this.onBodyAniStop);
        this.playBodyAni();

        if(callback){
            callback.call(thisArg);
        }
    }

    setBody(bodyPath:string, callback?:Function, thisArg?, ...data){
        this.mFactory = Manager.PoolManager.getItem(Config.PoolItemKey.DressTemplate, Laya.Templet);
        this.mFactory.on(Laya.Event.COMPLETE, this, this.parseTempletComplete, [callback, thisArg]);
        this.mFactory.on(Laya.Event.ERROR, this, this.onAniTempletError);
        this.mFactory.loadAni(bodyPath);
    }

    setHead(url:string){
        this.Head.url = url;
    }
}
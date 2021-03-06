import * as Config from "../Config/Config";
import * as Manager from "../Manager/Manager";
import * as Common from "../Common/Common";

/** @type {Object<string, Controller>} */
// let CtrlMap:Config.Dictionary<Controller> = {};

/** @type {Object<string, View>} */
let ViewMap:{[key:string]:View} = {};

/** @type {Controller[]} */
let OpenedCtrl = new Array<Controller>();

// export let CtrlMapArray:Config.Dictionary<typeof Controller> = {};
export let CtrlMapArray = new Array<typeof Controller>();
export let ViewMapArray:Config.Dictionary<typeof View> = {};

class CtrlLisener{
    public Obj:fgui.GObject;
    public Lisener:Function;

    constructor(obj:fgui.GObject, lisener:Function){
        if(!obj) return;

        this.Obj = obj;
        this.Lisener = lisener;
    }

    remove(){
        this.Obj.offClick(this, this.Lisener);
    }
}

export {OpenedCtrl, ViewMap}

/// <summary>
/// 向UiManager 注册脚本 还有一些 MSGID
/// 一般是panel 挂载这样的脚本 需要向其他模块 或者脚本通信
/// </summary>
export abstract class UiCVBase extends Common.EventDispather{
    public multitonKey:string;

    onDestroy()
    {
        //重写此组件方法必须执行
        this.removeEventListener();
    }
}

export class Controller extends UiCVBase{
    static cKey:string;
    static view:typeof View;

    // public multitonKey:string;
    public View:View;

    public Data;
    public IsOpen = false;
    public IsDestroyed = true;
    public IsShow = false;
    public IsPopup = false;
    public IsFullScreen = false;
    public IsDefault = false;
    public IsInteractive = true;
    private lisenterArray = new Array<CtrlLisener>();
    
    static set Key(key:string){this.cKey = key}
    static get Key(){return this.cKey}
    
    constructor(cKey?:string, view?:typeof View, isFullScreen?:boolean, isPopup?:boolean) {
        super();

        if(!cKey || !view) {
            console.error("Invalid key or view");
            return;
        };

        if(!OpenedCtrl[cKey]) {
            OpenedCtrl[cKey] = this;
        }
    
        let vKey = view.Key;
        if(!ViewMap[vKey]){
            ViewMap[vKey] = new view(vKey);
        }

        this.multitonKey = cKey;
        this.View = ViewMap[vKey];
        this.IsFullScreen = isFullScreen == true;
        this.IsPopup = isPopup == true;
    }

    static setCtrl(id:number){
        CtrlMapArray[id] = this;
    }

    static init(cKey, view:typeof View, vKey?:string){
        this.Key = cKey;
        this.view = view;
        this.view.Key = vKey? vKey: cKey;
        CtrlMapArray[this.Key] = this;
    }

    createView(view: typeof View, key:string)
    {
        this.View = new view(key);
    }

    create() {
        if (!this.View) {
            console.error("No view created!")
            return false;
        }

        this.IsDestroyed = false;
        this.View.Initialize();

        this.onCreate();

        return true;
    }

    open(_data?) {
        this.IsOpen = true;
        this.Data = _data;

        // Facade.PushCtrl(this, this.Data);
        this.show(_data);
        this.openOver();
    }

    openOver() {
        if(this.IsFullScreen){
            this.dispatchEvent(Common.UiNoticeEid.OpenFullScreen, this.multitonKey);
        }

        if(this.IsPopup){
            this.SortingOrder(Config.UIConfig.SortingOrder.Popup);
        }

        this.onOpen(this.Data);
    }

    addButtonLisenter(object:fgui.GObject, fun:Function, data?:Array<any>, thisArg?){
        if(object == null || fun == null)
        {
            console.error("object or fun is null");
            return;
        }

        thisArg = thisArg?thisArg: this;
        object.onClick(thisArg, fun, data);
        this.lisenterArray.push(new CtrlLisener(object, fun));
    }

    close() {
        if(this.IsOpen == false) return;

        this.IsOpen = false;
        this.onClose();

        this.dispatchEvent(Common.UiNoticeEid.CloseController, this.multitonKey);
        
        if(this.IsPopup){
            this.dispatchEvent(Common.UiNoticeEid.ClosePopup, this.multitonKey);
        }

        if(this.IsFullScreen){
            this.dispatchEvent(Common.UiNoticeEid.CloseFullScreen, this.multitonKey);
        }

        // delete CtrlMap[this.multitonKey];
        // OpenedCtrl.splice(OpenedCtrl.indexOf(this), 1);
        OpenedCtrl[this.multitonKey] = null;

        //清空点击事件
        for(let i in this.lisenterArray){
            this.lisenterArray[i].remove();
            this.lisenterArray[i] = null;
        }

        //清除监听事件
        this.removeEventListener();
        //清除所有计时器
        Laya.timer.clearAll(this);

        if(this.IsDestroyed == false) {
            this.IsDestroyed = true;

            if(this.View && this.View.destroy) {
                this.View.destroy();
                this.View = null;
            }
        }

        this.IsOpen = false;
        this.IsShow = false;
        this.Data = null;

        //销毁节点
        this.destroy();
    }

    // 显示界面
    show(data?) {
        data = data? data: this.Data;

        if (this.IsDestroyed) {
            this.open(data);
        }
        // 未open状态，不处理
        if (!this.IsOpen) {
            return false;
        }

        if (this.IsShow) {
            return false;
        }

        if (!this.IsDestroyed) {
            this.View.show(data);
        }

        this.IsShow = true;
        this.onShow(data);
        return true;
    }

    // 隐藏界面
    hide() {
        if (!this.IsShow) return false;
        
        if (!this.IsDestroyed) {
            this.View.hide();
        }

        this.IsShow = false;
        this.onHide();
        return true;
    }

    // 设置渲染顺序
    SortingOrder(order:number) {
        if(!this.IsDestroyed){
            this.View.SortingOrder(order);
        }
    }

    // 是否可触控
    interactive(canTouch:boolean){
        if(canTouch == null) return;
                
        this.IsInteractive = canTouch;

        if (!this.IsDestroyed) {
            this.View.interactive(canTouch);
        }
        
        this.onInteractive(canTouch);
    }

    refreshUI(data?){
        this.View.refreshUI(data);
    }

    onClose() {}

    onCreate() {}

    onOpen(data?) {}

    onShow(data?) {}

    onHide() {}
    
    onInteractive(canTouch:boolean) {}
}

export class View extends UiCVBase {
    static vKey:string;

    private lisenterArray = new Array<CtrlLisener>();
    private _isAlive:boolean;
    // public multitonKey:string;
    private FuiImageUrl:string;
    private FuiBufferUrl:string;
    private PkgAdrs:string;
    private Pkg:string;
    private Com:string;
    private _UI:fgui.GComponent;
    private CallbackList:Array<Function> = [];
    private uiCfg:Config.ViewConfig;

    public Window:fgui.GComponent; //弹出窗口，注意组件命名为Window
    public Btn_Back:fgui.GButton;   //关闭按钮，命名为Btn_Back
    public List:fgui.GList;  //列表，需自行定义

    static set Key(key:string){this.vKey = key}
    static get Key(){return this.vKey}
    
    constructor(key:string){
        super();
        this.multitonKey = key;
        this._isAlive = true;

        if(!ViewMap[key]) {
            ViewMap[key] = this;
        }

        this.uiCfg = Config.ViewKit[key];
        if(!this.uiCfg){
            console.error('Incorrect view key!');
            return;
        }
    }

    get UI(){
        return this._UI;
    }

    get IsAlive(){
        return this._isAlive;
    }

    Initialize(){
        if(!this._UI){
            this._UI = Manager.SpawnManager.LoadView(this.uiCfg.Pkg, this.uiCfg.Com);
            if(!this._UI){
                console.error('Invalid Ui com: ', this.uiCfg.Key);
            }else{
                this.Window = this.UI.getChild('Window') as fgui.GComponent;
                this.LoadView();
            }
        }
    }

    getInstance(key)
    {
        if (!key) return null;
            
        if(!ViewMap[key])
        {
            ViewMap[key] = new View(key);
        }

        return ViewMap[key];
    }

    /**
     * @param  {string} callbackKey
     * @param  {function} callback
     */
    setCallback(callbackKey:string, callback:Function){
        this.CallbackList[callbackKey] = callback;
    }

    invokeCallback(callbackKey, ...args){
        if(typeof(callbackKey) != 'string' || typeof(this.CallbackList[callbackKey]) != 'function') return;

        this.CallbackList[callbackKey](...args);
    }

    addButtonLisenter(object:fgui.GObject, fun:Function, data?:Array<any>, thisArg?){
        if(object == null || fun == null)
        {
            console.error("object or fun is null");
            return;
        }

        thisArg = thisArg?thisArg: this;
        object.onClick(thisArg, fun, data);
        this.lisenterArray.push(new CtrlLisener(object, fun));
    }

    clickListCallback(thisArg, func:Function, ...data){
        Common.clickListCallback(this.List, thisArg, func, ...data);
    }

    destroy() {
        this.onDestroy();
        this._isAlive = false;

        //清除监听事件
        this.removeEventListener();
        //清除所有计时器
        Laya.timer.clearAll(this);
        //清空点击事件
        for(let i in this.lisenterArray){
            this.lisenterArray[i].remove();
            this.lisenterArray[i] = null;
        }

        delete ViewMap[this.multitonKey]
        
        // for(let i in this) {
        //     // 销毁UI
        //     // if(this[i] && this[i].dispose) {
        //     //     this[i].dispose();
        //     // }

        //     // this[i] = undefined

        //     // if(this[i] instanceof fgui.GComponent == true){
        //     //     this[i].displayObject.offAll();
        //     // }
        // }

        this._UI.dispose();
    }
        
    onDestroy(){}

    LoadView() {}

    refreshUI(data?) {}

    interactive(canTouch) {
        this._UI.touchable = canTouch;
    }
        
    SortingOrder(order) {
        this._UI.sortingOrder = order;
    }
        
    show(data?){
        this._UI.visible = true;
    }

    hide(){
        this._UI.visible = false;
    }
}

export class Facade{
    private constructor(){}

    static PushCtrl(ctrl:Controller, data?){
        if(!ctrl) return;

        OpenedCtrl.push(ctrl);
        //显示栈底界面
        // OpenedCtrl.forEach((v)=> {v.show()})
        let nextc = OpenedCtrl.shift();
        if(nextc){
            nextc.show(data);
        }
    }

    static getController(id){
        let ctrl = CtrlMapArray[id];
        if(ctrl)
            return new ctrl();
        else
            return null;
    }
}
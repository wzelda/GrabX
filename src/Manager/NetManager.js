import * as Config from "../Config/Config";
import * as Manager from "./Manager";
import * as Common from "../Common/Common";
//是否第一次连接
let isFirstSend = true;
export class HttpManager extends Manager.BaseManager {
    constructor() {
        super(...arguments);
        this.ConnectTimes = 0;
        this.IsShowLoading = false;
        this.IsConnecting = false;
    }
    onAwake() {
        // Data.DevReqBody.InitBaseBody();
        // this.addEventListener(Common.SceneLoginEid.LoginSuccess, this.initDevBodies);
    }
    static set RequestUrl(url) {
        Config.NetConfig.RequestUrl = url;
    }
    Connect(reqkey, data, callback, isShowLoading, IsGm) {
        if (!data)
            return;
        this._hr = new XMLHttpRequest();
        this._reqKey = reqkey;
        if (IsGm)
            this._hr.open("post", Config.NetConfig.GMUrl, true);
        else
            this._hr.open("post", Config.NetConfig.RequestUrl, true);
        this._hr.onreadystatechange = this.OnHttpRequestComplete.bind(this);
        //超时
        this._hr.timeout = 5000;
        this._hr.ontimeout = this.OnTimeout.bind(this);
        this._hr.onerror = this.OnHttpRequestError.bind(this);
        if (typeof (data.ReqData) == 'string') {
            data.ReqData = JSON.parse(data.ReqData);
        }
        this.Data = data;
        this.Callback = callback;
        this.IsShowLoading = isShowLoading;
        //重连次数
        this.ConnectTimes++;
        //超时毫秒数
        // console.log(this._hr.timeout);
        this._hr.responseType = "text";
        if (typeof data.ReqData != 'string') {
            data.ReqData = JSON.stringify(data.ReqData);
        }
        this._hr.send(JSON.stringify(data));
        //是否正在连接，包括超时
        this.IsConnecting = true;
        //菊花
        if (isFirstSend) {
            isFirstSend = false;
            // Manager.LoadingIconManager.Init();
        }
        if (isShowLoading == true) {
            Manager.LoadingIconManager.Inst.ShowLoading();
        }
        else {
            Manager.LoadingIconManager.Inst.HideLoading();
            //3秒后再转菊花
            setTimeout(this.LateShowLoading.bind(this), 3000);
        }
        this.dispatchEvent(Common.NetHttpConnectEid.ConnectBegin);
    }
    LateShowLoading() {
        if (this.IsConnecting == true) {
            Manager.LoadingIconManager.Inst.ShowLoading();
        }
    }
    //请求错误
    OnHttpRequestError(e) {
        console.log(e);
        this.tryAutoReconnect();
    }
    //超时
    OnTimeout(e) {
        console.log(e);
        this.tryAutoReconnect();
    }
    OnHttpRequestProgress(e) {
        console.log("加载进度>>>>>>>>>>>>>>>>>>>", e.loaded / e.total);
    }
    _removeRequest() {
        //移除当前连接，必须先设置连接状态IsConnecting为false后再调用
        if (this.IsConnecting)
            return;
        this._hr = null;
        this.Data = null;
        HttpManager._hmMap[this._reqKey] = null;
    }
    tryAutoReconnect() {
        //策略：0.5秒重连一次，重试5次
        if (this.ConnectTimes < 3) {
            Laya.timer.once(500, this, this.autoReConnect);
        }
        else {
            this.showConnectWindow();
        }
    }
    autoReConnect() {
        this.Connect('', this.Data, this.Callback, true);
    }
    showConnectWindow() {
        this.IsConnecting = false;
        Manager.LoadingIconManager.Inst.HideLoading();
        // let popupData = {
        //     Content: Config.LocalContent.NetError,
        //     YesBtnContent:Config.LocalContent.Yes,
        //     // BtnStyle: 1,
        //     HasBg: false,
        //     YesBtnCallback:this.Connect.bind(this, '', this.Data, this.Callback, this.IsShowLoading)
        // }
        let content = [Config.LocalContent.NetError];
        let self = this;
        Manager.UIManager.openConfirmWindow(content, function () {
            self.Connect('', self.Data, self.Callback, self.IsShowLoading);
        });
    }
    OnHttpRequestComplete() {
        if (this._hr.readyState != 4 || (this._hr.status < 200 || this._hr.status >= 400))
            return;
        this.IsConnecting = false;
        this.ConnectTimes = 0;
        if (!this._hr.responseText)
            return;
        let data = JSON.parse(this._hr.responseText);
        console.log('>>>>>>>>>>>>>>>>>连接状态：', data.RespCode, data.RespMsg);
        //连接失败
        // if(data.RespCode != Config.HttpConnectState.Success) return;
        if (typeof (this.Callback) == 'function') {
            this.Callback(data);
        }
        //发送响应数据，回传请求数据
        // if(typeof(this.Data.ReqData) == 'string'){
        //     this.Data.ReqData = JSON.parse(this.Data.ReqData);
        // }
        // Data.DataStruct.OnHttpRequestComplete(data, this._reqKey, this.Data.ReqData);
        //连接结束删除对象
        this._removeRequest();
        this.dispatchEvent(Common.NetHttpConnectEid.ServiceRespond);
    }
}
HttpManager._hmMap = {};
export class SocketManager {
    constructor(url, port) {
        this._date = new Date();
        /** 心跳包定时器 */
        this._timer = 0;
        /** 心跳包服务器超时定时器 */
        this._serverTimer = 0;
        /** 心跳包超时时间，单位ms,时间只能是整秒数，setTimeout在后台每秒执行一次 */
        this._timeout = 10000;
        /** 静默重连定时器 */
        this._silentTimer = 0;
        /** 心跳包服务器超时时间，单位ms,时间只能是整秒数，setTimeout在后台每秒执行一次 */
        this._serverTimeout = 10000; //TODO调试把时间加长3600000，原10000
        /** 断线类型：1.被挤下线, 2.停服维护(socket断开),3 非法操作 */
        this._disconnectType = 0;
        // this.connect(url, port);
    }
    static get inst() {
        if (!this._inst) {
            this._inst = new SocketManager();
        }
        return this._inst;
    }
    static connect(url, port) {
        this.inst.connect(url, port);
    }
    connect(url, port) {
        this.socket = new Laya.Socket();
        if (port != null) {
            this.socket.connect(url, port);
        }
        else {
            this.socket.connectByUrl(url);
        }
        this.output = this.socket.output;
        this.socket.on(Laya.Event.OPEN, this, this.onSocketOpen);
        this.socket.on(Laya.Event.CLOSE, this, this.onSocketClose);
        this.socket.on(Laya.Event.MESSAGE, this, this.onMessageReveived);
        this.socket.on(Laya.Event.ERROR, this, this.onConnectError);
    }
    //心跳检测
    startHeartbeat() {
        console.log(this._date.toUTCString() + " start heartbeat");
        this._timer = setTimeout(this.timerHandler.bind(this), this._timeout);
    }
    timerHandler() {
        console.log(this._date.toUTCString() + " send heartbeat");
        //发送一个心跳，后端收到后，返回一个心跳消息
        this.socket.send('r u there?');
        this._serverTimer = setTimeout(this.serverTimerHandler.bind(this), this._serverTimeout);
    }
    serverTimerHandler() {
        //服务器超时没有回包，断开连接然后重连
        console.log(this._date.toUTCString() + " wait server reply timeout");
        if (this.socket) {
            this.socket.close();
        }
    }
    resetHeartbeat() {
        console.log(this._date.toUTCString() + " reset heartbeat");
        clearTimeout(this._timer);
        clearTimeout(this._serverTimer);
    }
    onSocketOpen() {
        console.log("Connected");
        this.resetHeartbeat();
        this.startHeartbeat();
        // 发送字符串
        this.socket.send("demonstrate <sendString>");
        // 使用output.writeByte发送
        var message = "demonstrate <output.writeByte>";
        for (var i = 0; i < message.length; ++i) {
            this.output.writeByte(message.charCodeAt(i));
        }
        this.socket.flush();
    }
    onSocketClose() {
        console.log("Socket closed");
    }
    onMessageReveived(message) {
        console.log("Message from server:", message);
        //获取到消息重置心跳检测
        this.resetHeartbeat();
        this.startHeartbeat();
        if (typeof message == "string") {
            console.log(message);
        }
        else if (message instanceof ArrayBuffer) {
            console.log(new Laya.Byte(message).readUTFBytes());
        }
        this.socket.input.clear();
    }
    onConnectError(e) {
        console.log("error");
    }
    /** 断线类型：1.被挤下线, 2.停服维护(socket断开),3 非法操作 */
    setDisconnect(type) {
        this._disconnectType = type;
    }
    reset() {
        this._disconnectType = 0;
        this.resetHeartbeat();
        if (this.socket != null) {
            this.socket.close();
            this.socket = null;
        }
    }
}

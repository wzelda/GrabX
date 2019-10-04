import { UIConfig } from "../Config/UIConfig";
import * as Config from "../Config/Config";
import * as Manager from "../Manager/Manager";
//秒数转为时：分：秒
export function ConvertTime(cd, ignoreHour) {
    if (cd == undefined)
        return;
    let hours = ("0" + Math.floor(cd / 3600)).slice(-2);
    let minutes = ("0" + Math.floor((cd % 3600) / 60)).slice(-2);
    let seconds = ("0" + Math.ceil(cd % 60)).slice(-2);
    if (ignoreHour) {
        return minutes + ":" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
}
//窗口弹出动画
/**
 * @param  {fgui.GComponent} windowUi
 */
export function PlayPopupEffect(windowUi, callback, thisArg) {
    if (windowUi instanceof fgui.GObject) {
        windowUi.setPivot(0.5, 0.5);
        fgui.GTween.to(0, 1, 0.5)
            .setTarget(windowUi, windowUi.setScale)
            .onComplete(callback, thisArg);
    }
}
//十六进制颜色转10进制
//传参格式："00|ff|ee"
/**
 * @param  {string} colorStr
 */
export function ColorHex2Dec(colorStr) {
    if (colorStr == null)
        return;
    colorStr = colorStr.split("|");
    if (colorStr instanceof Array && colorStr.length == 3) {
        colorStr.forEach((value, index) => {
            colorStr[index] = parseInt(value, 16);
        });
    }
    return colorStr;
}
//判断是否为父组件（包括本体）
export function isAncestorOf(parent, child) {
    if (parent == null || child == null)
        return false;
    //本体
    if (parent == child)
        return true;
    var p = child.parent;
    while (p) {
        if (p == parent)
            return true;
        p = p.parent;
    }
    return false;
}
//判断坐标是否在组件矩形范围内
export function isInRect(xv, yv, dest) {
    if (xv == null || yv == null || !dest)
        return;
    //转为屏幕坐标
    let pt = dest.localToGlobal();
    if (xv < pt.x || xv > pt.x + dest.width || yv < pt.y || yv > pt.y + dest.height) {
        return false;
    }
    else {
        return true;
    }
}
export function getBtnInfoParts(btn) {
    return {
        Progress_Health: btn.getChild('Progress_Health').asProgress,
        Progress_Exp: btn.getChild('Progress_Exp').asProgress,
        Text_Level: btn.getChild('Text_Level').asTextField,
        Text_TipsHealth: btn.getChild('Text_TipsHealth').asTextField,
    };
}
//设置文本CacheMode为CHAR避免内存暴涨GC卡顿
/**
 * @param  {fgui.GTextField} textFiled
 * @param  {boolean} useSysFont
 */
// export function SetTxtCacheMode(textFiled, useSysFont){
//     if(textFiled == null) return;
//     if(textFiled._label.cacheMode != cc.Label.CacheMode.CHAR){
//         textFiled._label.cacheMode = cc.Label.CacheMode.CHAR;
//         if(typeof useSysFont == "boolean")
//             textFiled._label.useSystemFont = useSysFont;
//     }
// }
//设置文本占位符
// String.prototype.format = function() {
//     if(arguments.length == 0) return this;
//     let param = arguments[0];
//     let s = this;
//     if(typeof(param) == 'object') {
//         for(let key in param)
//         s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
//         return s;
//     } else {
//         for(let i = 0; i < arguments.length; i++)
//         s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
//         return s;
//     }
// }
//设置文本占位符
/**
 * @param  {string} str
 * @param  {Array} args
 */
export function StringFormat(str, ...args) {
    if (typeof (str) != 'string')
        return;
    if (args == null || args.length == 0)
        return str;
    let param = args[0];
    let s = str;
    if (typeof (param) == 'object') {
        for (let key in param)
            s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
        return s;
    }
    else {
        for (let i = 0; i < args.length; i++)
            s = s.replace(new RegExp("\\{" + i + "\\}", "g"), args[i]);
        return s;
    }
}
//设置文本属性
export function SetTxtProperty(txt, isBold, isUnderline) {
    if (txt instanceof fgui.GTextField == false)
        return;
    if (typeof (isBold) == 'boolean') {
        txt._label._isBold = isBold;
    }
    if (typeof (isUnderline) == 'boolean') {
        txt._label._isUnderline = isUnderline;
    }
}
//启动垃圾回收
// export function TriggerGC(){
//     if(cc.sys.platform == cc.sys.WECHAT_GAME){
//         wx.triggerGC();
//     }else{
//         cc.sys.garbageCollect();
//     }
// }
//设置非负数
export function SetNonnegative(num) {
    if (num < 0) {
        num = 0;
    }
    return num;
}
//功能是否开启
// export function IsFuncActivated(funcEnum){
//     if(funcEnum == null) return;
//     switch (funcEnum) {
//         case LocalConfig.FuncEnum.PlayGo:
//             return DataBase.RoleData.UnlockChapterId >= 3;
//         case LocalConfig.FuncEnum.Fun:
//             return DataBase.RoleData.UnlockChapterId >= 4;
//         case LocalConfig.FuncEnum.StoryJade:
//             return DataBase.RoleData.UnlockChapterId > 1 || DataBase.RoleData.DropMaxTextNum >= 5 || DataBase.RoleData.ChapterPlayTimes > 1;
//         case LocalConfig.FuncEnum.TopLeftList:
//             return DataBase.RoleData.ChapterId > 1 || DataBase.RoleData.ChapterPlayTimes > 1;
//     }
// }
//设置fgui控制器页签
export function SetGControllerIdx(gctrl, idx) {
    if (gctrl instanceof fgui.Controller == false || typeof idx != 'number')
        return;
    if (idx < 0 || idx >= gctrl.pageCount)
        return;
    gctrl.selectedIndex = idx;
}
//判断结构体长度
export function GetObjectLength(object) {
    if (!object)
        return 0;
    let len = 0;
    for (let i in object) {
        len++;
    }
    return len;
}
//比较2个数组是否相等
/**
 * @param  {Array} arr1
 * @param  {Array} arr2
 */
export function ArrayEquals(arr1, arr2) {
    // if the other array is a falsy value, return
    if (!arr1 || !arr2)
        return false;
    // compare lengths - can save a lot of time 
    if (arr1.length != arr2.length)
        return false;
    for (var i = 0, l = arr1.length; i < l; i++) {
        // Check if we have nested arrays
        if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
            // recurse into the nested arrays
            if (ArrayEquals(arr1, arr2) == false)
                return false;
        }
        else if (arr1[i] != arr2[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
//搜寻数组键值
export function searchArray(arr, param, value) {
    if (Array.isArray(arr) == false || arr.length == 0) {
        console.error('Invalid or empty array');
        return;
    }
    let target;
    arr.some(v => {
        if (v[param] == value) {
            target = v;
            return true;
        }
    });
    return target;
}
export function getCardPath(_data) {
    if (!_data.PicUrl)
        return { path: "", url: "" };
    let pakNum = Math.ceil(_data.PicUrl / 6);
    let pakName = "Postcard" + pakNum;
    let url = "ui://" + pakName + "/" + _data.Title;
    let info = { path: pakName + "/" + pakName, url: url };
    return info;
}
//判断是否小游戏
export function isMiniGame() {
    // return Laya.Browser.onWeiXin || Laya.Browser.onBDMiniGame;
    return Laya.Browser.onMiniGame;
}
//判断是否微信
export function isOnWeixin() {
    return Laya.Browser.onWeiXin;
}
//判断是否QQ
export function isOnQQ() {
    return Laya.Browser.onMQQBrowser;
}
//判断是否腾讯系
export function isOnTencent() {
    return isOnQQ() || isOnWeixin();
}
//广告领取组件
/**
 * @param  {fgui.GComponent} adCom
 */
export function AdGetRewardBtn(adCom) {
    if (!adCom)
        return;
    //领取按钮
    let button_GetReward = adCom.getChild("Button_GetReward").asButton;
    let button_DoubleReward = adCom.getChild("Button_DoubleReward").asButton;
    let button_AdGetReward = adCom.getChild("Button_AdGetReward").asButton;
    return {
        //领取类型
        GetBtnType: adCom.getController('BtnType_C'),
        //单按钮领取
        Button_GetReward: button_GetReward,
        //纯领取
        Button_OneReward: adCom.getChild("Button_OneReward").asButton,
        //广告双倍领取
        Button_DoubleReward: button_DoubleReward,
        //单按钮广告领取
        Button_AdGetReward: button_AdGetReward,
        //单按钮领取方式
        GetRewardType: button_AdGetReward.getController('Type_C'),
        //双倍领取方式
        GetDoubleRewardType: button_DoubleReward.getController('Type_C'),
    };
}
//本地存储
export function saveLocalStorage(key, value) {
    if (!value)
        return;
    Laya.LocalStorage.setItem(key, value);
}
export function getLocalStorage(key) {
    return Laya.LocalStorage.getItem(key);
}
export function saveLocalJson(key, value) {
    //可存储数组
    if (!value)
        return;
    Laya.LocalStorage.setJSON(key, value);
}
export function getLocalJson(key) {
    return Laya.LocalStorage.getJSON(key);
}
export function copyData(srcData, targetData) {
    if (!srcData || !targetData)
        return;
    for (let i in srcData) {
        if (typeof srcData[i] != 'function') {
            targetData[i] = srcData[i];
        }
    }
}
//设置广告组件样式
/**
 * @param  {fgui.GComponent} adCom
 * @param  {boolean} isSingle
 */
// export function SetAdBtnStyle(adCom, isSingle){
//     if(!adCom) return;
//     let btn = AdGetRewardBtn(adCom);
//     let adType = isSingle? Manager.GetReceiveAwardsType.SingleAdType(): Manager.GetReceiveAwardsType.getType();
//     switch (adType) {
//         case Config.AwardType.Not:
//             btn.GetBtnType.selectedIndex = 0;
//             break;
//         case Config.AwardType.Share:
//             btn.GetDoubleRewardType.selectedIndex = 1;
//             break;
//         case Config.AwardType.AD:
//             btn.GetDoubleRewardType.selectedIndex = 0;
//             break;
//         default:
//             adCom.enabled = false;
//             break;
//     }
//     return btn;
// }
//飘字
let tipsUi;
export function ShowTips(msg) {
    if (!tipsUi) {
        let viewName = Config.ViewKit.TipsLabel;
        tipsUi = Manager.SpawnManager.LoadView(viewName.Pkg, viewName.Com);
        tipsUi.sortingOrder = UIConfig.SortingOrder.MsgTips;
    }
    //不重复显示
    if (tipsUi.visible)
        return;
    msg = msg ? msg : Config.LocalContent.FlyingTipsDefault;
    tipsUi.text = msg;
    tipsUi.visible = true;
    tipsUi.getTransition('Effect_Show').play(Laya.Handler.create(this, () => { tipsUi.visible = false; }));
}
let adobeAddTipsUi;
function setAdobeResNum(txtCom, resNum) {
    if (resNum >= 0) {
        txtCom.color = '#00FF00';
        txtCom.text = '+' + resNum;
    }
    else {
        txtCom.color = '#FF0000';
        txtCom.text = '-' + -resNum;
    }
}
//设置文字投影1像素
let txtShadowFilter;
export function setTxtShadow(gtxt) {
    if (!gtxt)
        return;
    if (!txtShadowFilter) {
        txtShadowFilter = new Laya.GlowFilter('#000000', 1, 1, 1);
    }
    gtxt.displayObject.filters = [txtShadowFilter];
}
//设置UI节点与适配
// export function setUiNode(){
//     if(!fgui.GRoot.inst) return;
//     let canvas = cc.find("Canvas");
//     fgui.GRoot.inst.node.parent = cc.find("Canvas");
//     fgui.GRoot.inst.node.x = -canvas.width * 0.5;
//     fgui.GRoot.inst.node.y = canvas.height * 0.5;
// }
//调用java
/**
 * @param  {string} classPath 完整的类路径
 * @param  {string} javaFunc java静态方法名
 * @param  {} data
 * @param  {boolean} widthBack 是否有java同步回调
 */
export function JsCallJava(classPath, javaFunc, data, widthBack) {
    if (!Laya.Browser.onAndroid)
        return;
    //需要完整的类路径，注意与iOS的不同
    let bridge = window["PlatformClass"].createClass(classPath); //创建脚本代理
    if (widthBack) {
        let obj = { value: data };
        bridge.callWithBack(function (value) {
            var obj = JSON.parse(value);
            alert(obj.value);
        }, javaFunc, JSON.stringify(obj));
    }
    else {
        let resp = bridge.call(javaFunc, data);
        alert(resp);
    }
}
//计算字符字节数--正则法
function getBytesLength(str) {
    if (!str || typeof str != 'string') {
        return 0;
    }
    // 在GBK编码里，除了ASCII字符，其它都占两个字符宽
    return str.replace(/[^\x00-\xff]/g, 'xx').length;
}
//计算字符字节数--遍历法--效率较高
export function strByteLen(str) {
    let byteLen = 0, len;
    if (str && typeof str == 'string') {
        len = str.length;
        for (let i = 0; i < len; i++) {
            if (str.charCodeAt(i) > 255) {
                byteLen += 2;
            }
            else {
                byteLen++;
            }
        }
    }
    return byteLen;
}
//深拷贝
export function deepCopy(src, target) {
    if (!src || !target)
        return;
    if (src != null) {
        for (let i in src) {
            let value = src[i];
            if (Array.isArray(value)) {
                target[i] = [];
                [...target[i]] = value;
            }
            else if (typeof value == 'object') {
                target[i] = {};
                deepCopy(value, target[i]);
            }
            else {
                target[i] = value;
            }
        }
    }
}
//填充物品按钮
export class ItemBtnPartsClass {
    constructor(btn) {
        this.Text_Title = btn.getChild('title').asTextField;
        this.Text_AwardNum = btn.getChild('Text_AwardNum').asTextField;
    }
}
export function fillItemData(itemdata, btn) {
    if (!itemdata || !btn)
        return;
    let parts = new ItemBtnPartsClass(btn);
}
export function fillItemListData(itemdataArr, list) {
    if (!itemdataArr || !list)
        return;
    itemdataArr.forEach(v => {
        fillItemData(v, list.addItemFromPool().asCom);
    });
}
//列表点击回调
function onClickListItem(thisArg, func, data, item) {
    let idx = item.parent.asList.getChildIndex(item);
    func.call(thisArg, idx + 1, ...data);
}
export function clickListCallback(list, thisArg, func, ...data) {
    if (!list || !func)
        return;
    list.on(fgui.Events.CLICK_ITEM, thisArg, onClickListItem, [thisArg, func, data]);
}

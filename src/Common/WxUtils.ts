import * as Data from "../Data/Data";
import * as Manager from "../Manager/Manager";
import GEvent from "./GEvent";
import * as Config from "../Config/Config";
import * as Common from "../Common/Common";
import * as Utils from "./Utils";
import LocalConfig from "../Config/LocalConfig";

//微信操作
let platform = window['wx'];
//登录微信号
export function Login(isUnionId:boolean) {
    if(Utils.isMiniGame() == false) return;

    platform.login({
        success(res) {
            if (res.code) {
                if(isUnionId){
                    getSetting(res.code);
                }else{
                    // 发起网络请求
                    let req = Config.ReqData.Login;
                    req.Name = res.code;
                    Data.LoginData.SendReq(req);
                }
            } else {
                console.log('登录失败！' + res.errMsg);
            }
        }
    })
}

//加载分包
export function loadAllSubpackages(thisArg, callback:Function){
    if(Utils.isMiniGame() == false || Config.UIConfig.SubPkgs.length == 0) {
        if(callback){
            callback.call(thisArg);
        }
        return;
    };

    Config.UIConfig.SubPkgs.forEach(pkg=>{
        const loadTask = platform.loadSubpackage({
            name: pkg, // name 可以填 name 或者 root
            success: function(res) {
                // 分包加载成功后通过 success 回调
                console.log("success");
            },
            fail: function(res) {
                // 分包加载失败通过 fail 回调
                console.log("fail");
            }
        });
    });
}

//设置分享ticket
export function shareTicketMode(){
    if(Utils.isMiniGame() == false) return;

    platform.updateShareMenu({
        withShareTicket: true,
    });
}

//获取分享ticket
export function getShareTicket(){
    if(Utils.isMiniGame() == false) return;

    let launchInfo = platform.getLaunchOptionsSync();
    console.log('>>>>>>>>>>>>>微信登录信息：', launchInfo);
    if(launchInfo && launchInfo.shareTicket){
        console.log('>>>>>>>>>>>>>>shareTicket：', launchInfo.shareTicket);

        return launchInfo.shareTicket;
    }else{
        return null;
    }
}

//解析分享ticket
export function getShareInfo(){
    if(Utils.isMiniGame() == false) return;

    let ticket = getShareTicket();
    // if(!ticket) return;

    let launchInfo = platform.getLaunchOptionsSync();
    if(launchInfo && launchInfo.query){
        // DataBase.SendShareInfo.SendReq(launchInfo.query.shareID);
    }

    // let shareInfo = {
    //     EncryptedData: '',
    //     Iv: ''
    // }

    // platform.login({
    //     success(res) {
    //         if (res.code) {
    //             let code = res.code;
    //             platform.getShareInfo({
    //                 shareTicket: ticket,
    //                 success(res) {
    //                     console.log('解析分享信息：', res);
            
    //                     if(res.encryptedData){
    //                         shareInfo.EncryptedData = res.encryptedData;
    //                         shareInfo.Iv = res.iv;
    //                         DataBase.SendShareInfo.SendReq(code, res.encryptedData, res.iv);
    //                     }
    //                 }
    //             });
    //         } else {
    //             console.log('登录失败！' + res.errMsg);
    //         }
    //     }
    // });

    // return shareInfo;
}

//显示右上角转发
export function showShareMenu() {
    if(Utils.isMiniGame() == false) return;

    platform.showShareMenu({
        withShareTicket: true
    });

    platform.onShareAppMessage(() => ({
        title: Data.GetShareWord(),
        imageUrl: Config.UIConfig.ShareImagePath.InviteFriend,
        query: 'shareID=' + Data.LoginData.AccountKey,
    }));
}

//分享
export function ShareMessage(msg:string, imgPath?:string, useScreenShot?:boolean) {
    if(Utils.isMiniGame() == false) return;

    let sysInfo = platform.getSystemInfoSync();

    //使用屏幕截图
    if(useScreenShot == true){
        imgPath = window["canvas"].toTempFilePathSync({
            destWidth: sysInfo.windowWidth * sysInfo.pixelRatio,
            destHeight: sysInfo.windowHeight * sysInfo.pixelRatio
        });
    }

    platform.shareAppMessage({
        title: msg,
        imageUrl: imgPath,
        query: 'shareID=' + Data.LoginData.AccountKey
    });
}

/**
 * @param  {Function} callback
 */
export function onShow(callback:Function){
    if(Utils.isMiniGame() == false) return;

    platform.onShow(callback);
}

export function offShow(callback:Function){
    if(Utils.isMiniGame() == false) return;

    platform.offShow(callback);
}

//清理缓存
export function ClearLocalCache() {
    if(Utils.isMiniGame() == false) return;

    window["canvas"].getSavedFileList({
        success(res) {
            console.log(res.fileList.length);
            if (res.fileList.length > 0) {
                res.fileList.forEach((file)=>{
                    platform.removeSavedFile({
                        filePath: file.filePath,
                        complete(res) {
                            console.log(res);
                        }
                    });
                });
            }
        }
    });
}


export function CanvasToTempFilePath(callback:Function){
    if(Utils.isMiniGame() == false) return;

    // let width  = fairygui.GRoot.inst.width;
    // let height  = fairygui.GRoot.inst.height;
    let sysInfo = platform.getSystemInfoSync();
    console.log(sysInfo);

    let destSize = new Laya.Point(sysInfo.windowWidth * sysInfo.pixelRatio, sysInfo.windowHeight * sysInfo.pixelRatio);

    console.log(destSize);

    window["canvas"].toTempFilePath({
        x: 0,
        y: 0,
        width: destSize.x,
        height: destSize.y,
        destWidth: destSize.x,
        destHeight: destSize.y,
        canvasId: 'myCanvas',
        success(res) {
            console.log(res.tempFilePath);
            platform.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success(res) {
                    console.log("保存图片成功");
                    console.log(res);
                    platform.showToast({
                    title:'保存成功',
                    icon:'success',
                    duration:2000,
                    });

                    callback();
                },
                fail(err) {
                    console.log('失败');
                    console.log(err);
                
                    callback();

                    if (err.errMsg){
                        platform.openSetting({
                            success(settingdata) {
                                console.log(settingdata);
                                if (settingdata.authSetting["scope.writePhotosAlbum"]) {
                                    console.log('获取权限成功，给出再次点击图片保存到相册的提示。');
                                }else {
                                    console.log('获取权限失败，给出不给权限就无法正常使用的提示');
                                }
                            }
                        })
                    }
                }
            })
        }
    })
}


export function getUserNickName(callback:Function){
    if(!platform) return;

    platform.getSetting({
        success(res) {
            if (!res.authSetting['scope.userInfo']) {
                platform.authorize({
                    scope: 'scope.userInfo',
                    success() {
                        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                        platform.startRecord();
                    }
                })
            }
        }
    });

    platform.getUserInfo({
        success(res) {
            const userInfo = res.userInfo;
            const nickName = userInfo.nickName;
            const avatarUrl = userInfo.avatarUrl;
            const gender = userInfo.gender; // 性别 0：未知、1：男、2：女
            const province = userInfo.province;
            const city = userInfo.city;
            const country = userInfo.country;
        }
    });
}

//微信提示弹窗
export function showTipsWindow(tipTitle:string, tipContent:string, tipsConfirmTxt:string, confirmCallbak:Function, cancelCallback?:Function){
    if(Utils.isMiniGame() == false) return;

    platform.showModal({
        title: tipTitle || '提示',
        content: tipContent,
        confirmText: tipsConfirmTxt || '确定',
        success(res) {
            if (res.confirm) {
                console.log('用户点击确定');
                if(typeof(confirmCallbak) == 'function'){
                    confirmCallbak();
                }

                return true;
            } else if (res.cancel) {
                console.log('用户点击取消');
                if(typeof(cancelCallback) == 'function'){
                    cancelCallback();
                }

                return false;
            }
        }
    });
}

//激励广告
let rewardedVideoAd;
let rewardAdIdx = 0;

/**
 * @param  {function} onCloseCallback
 * @param  {function} onErrorCallback
 * @param  {} thisTarget
 */
export function createRewardedVideoAd(onCloseCallback?:Function, onErrorCallback?:Function, thisTarget?){
    if(Utils.isMiniGame() == false) return;

    //基础库版本号 >= 2.0.4
    let sdkVersion = platform.getSystemInfoSync().SDKVersion;
    if(!sdkVersion || parseInt(sdkVersion.replace(/\./g, '')) < 204) return;

    let adInfo = {adUnitId:""};
    //轮换广告
    if(rewardAdIdx >= LocalConfig.RewardAdList.length)
        rewardAdIdx = 0;

    console.log('激励广告：',LocalConfig.RewardAdList[rewardAdIdx]);
    adInfo.adUnitId = LocalConfig.RewardAdList[rewardAdIdx];

    if(rewardedVideoAd == null){
        rewardedVideoAd = platform.createRewardedVideoAd(adInfo);
    }
    if(rewardedVideoAd == null) return;

    rewardedVideoAd.load().then(() => {
        rewardedVideoAd.show().catch(err => {
            console.log('创建激励广告失败：', err);
            // rewardedVideoAd.load().then(() => rewardedVideoAd.show().catch(err => {
            //     //二次失败回调
            //     onErrorCallback.call(thisTarget);
            // }));

            onErrorCallback.call(thisTarget);
        });
    });

    rewardAdIdx++;

    rewardedVideoAd.onError(onRewardAdError);

    // if(typeof(onLoadCallback) == 'function'){
    //     // rewardedVideoAd.onLoad(()=>{
    //     //     onLoadCallback.call(thisTarget, true);
    //     //     // rewardedVideoAd.show().catch(err => {
    //     //     //     rewardedVideoAd.load()
    //     //     //       .then(() => rewardedVideoAd.show());
    //     //     // });
    //     // });
    // }

    //关闭回调参数 res.isEnded:boolean 视频是否是在用户完整观看的情况下被关闭的
    let closeFunc = function(res){
        console.log('是否看完广告：',res);

        if(res.isEnded && typeof(onCloseCallback) == 'function'){
            onCloseCallback.call(thisTarget);
        }

        rewardedVideoAd.offClose(closeFunc);
    }

    rewardedVideoAd.onClose(closeFunc);
}

function onRewardAdError(err){
    console.log(err);
    rewardedVideoAd.offError(onRewardAdError);
}

//Banner广告
let bannerAd;
let bannerIdx = 0;

export type bannerAdInfo = {
    adUnitId?:string,
    style?:{
        left:number, 
        top:number, 
        width?:number, 
        height?:number
    }
}

/**
 * @param  {{adUnitId:string, style:{left:number, top:number, width:number, height:number}}} adInfo
 */
export function createBannerAd(adInfo?:bannerAdInfo){
    if(Utils.isMiniGame() == false) return;

    // left: platform.getSystemInfoSync().windowWidth * 0.5 - 100,
    //         top: platform.getSystemInfoSync().windowHeight * 0.5 + 100,
    let sysInfo = platform.getSystemInfoSync();

    //基础库版本号 >= 2.0.4
    let sdkVersion = sysInfo.SDKVersion;
    if(!sdkVersion || parseInt(sdkVersion.replace(/\./g, '')) < 204) return;

    if(!adInfo)
        adInfo = {};
    //轮换广告
    if(bannerIdx >= LocalConfig.BannerAdList.length)
        bannerIdx = 0;
    
    console.log('Banner广告：',LocalConfig.BannerAdList[bannerIdx]);
    adInfo.adUnitId = LocalConfig.BannerAdList[bannerIdx];

    //位置
    adInfo.style = {
        left:0, 
        top:sysInfo.windowHeight - 100,
        width:sysInfo.windowWidth, 
        // height:100
    }

    if(bannerAd == null){
        bannerAd = platform.createBannerAd(adInfo);
    }else{
        bannerAd.destroy();
        bannerAd = platform.createBannerAd(adInfo);
    }
    if(bannerAd == null) return;

    //banner位置适配
    bannerAd.onResize(res => {
        bannerAd.style.top = sysInfo.windowHeight - res.height;
        if(sysInfo.model == 'iPhone X'){
            bannerAd.style.top-=20;
        }
    });

    bannerAd.onError(onBannerAdError);

    bannerAd.show().catch(err => {
        console.log('创建Banner广告失败：', err);
    });

    bannerIdx++;
}

function onBannerAdError(err){
    console.log(err);
    bannerAd.offError(onBannerAdError);
}

export function hideBannerAd(){
    if(Utils.isMiniGame() == false) return;
    if(bannerAd == null) return;

    bannerAd.hide();
}

//下载远程文件
export function downloadFile(url, callback){
    if(Utils.isMiniGame() == false || !url) return;

    console.log('下载地址：',url);

    platform.downloadFile({
        url: url, 
        success(res) {
            // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
            if (res.statusCode === 200) {
                if(typeof(callback) == 'function'){
                    callback(res.tempFilePath);
                }
            }
        }
    })
}

//获取微信屏幕尺寸
export function getWindowSize(){
    if(Utils.isMiniGame() == false) return;

    let sysInfo = platform.getSystemInfoSync();
    console.log(sysInfo);

    return {
        width: sysInfo.windowWidth * sysInfo.pixelRatio, 
        height: sysInfo.windowHeight * sysInfo.pixelRatio
    };
}

//获取用户授权信息
export function getSetting(loginCode){
    if(Utils.isMiniGame() == false) return;

    platform.getSetting({
        success(res) {
            // res.authSetting = {
            //   "scope.userInfo": true,    //是否授权用户信息
            //   "scope.userLocation": true,    //是否授权地理位置
            //   "scope.werun": false,  //是否授权微信运动步数
            //   "scope.writePhotosAlbum": false    //是否授权保存到相册
            // }

            console.log(res.authSetting);
            // if(typeof(callback) == 'function'){
            //     callback(res.authSetting["scope.userInfo"]);
            // }

            if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                platform.getUserInfo({
                    success(res) {
                        res.code = loginCode;
                        console.log(res);
                        // Data.LoginData.LoginReq('', res.code, res.encryptedData, res.iv);
                    }
                })
            }else{
                createUserInfoButton(loginCode);
                //显示授权
                LocalConfig.IsWxAuth = false;
                Manager.LoadingProgressManager.Inst.ShowWxLogin();
            }
        }
    });
}

//用户授权按钮
export function createUserInfoButton(loginCode){
    if(Utils.isMiniGame() == false) return;

    let sysInfo = platform.getSystemInfoSync();
    const button = platform.createUserInfoButton({
        type: 'text',
        text: '',
        // image: Config.UIConfig.ShareImagePath.InviteFriend,
        style: {
            left: 0,
            top: 0,
            width: sysInfo.windowWidth,
            height: sysInfo.windowHeight,
            // lineHeight: 40,
            // backgroundColor: '',
            // color: '#ffffff',
            // textAlign: 'center',
            // fontSize: 26,
            // borderRadius: 4
        }
    });

    button.onTap((res) => {
        console.log(res);
        //确认授权后销毁按钮
        if(res.encryptedData){
            res.code = loginCode;
            // Data.LoginData.LoginReq('', res.code, res.encryptedData, res.iv);
            button.destroy();
        }
    });

    GEvent.AddListener(Common.SceneLoginEid.LoginSuccess, ()=>{button.destroy();}, this);
}

//检查版本更新
export function checkUpdate(callback?:Function){
    if(Utils.isMiniGame() == false) return;

    if(typeof(platform.getUpdateManager) === 'function'){
        const updateManager = platform.getUpdateManager();

        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.log('检查新版本结果：', res.hasUpdate);
            if(typeof callback == 'function'){
                //回调通知结果
                callback(res.hasUpdate);
            }

            //清理缓存
            if(res.hasUpdate){
                window["wxDownloader"].cleanOldAssets();
            }
        });
    
        updateManager.onUpdateReady(function () {
            if(typeof callback == 'function'){
                //回调通知结果
                callback(true);
            }

            platform.showModal({
                title: '更新提示',
                content: '新版本已经准备好，即将重启游戏',
                showCancel:false,
                success(res) {
                if (res.confirm) {
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    updateManager.applyUpdate();
                }
                }
            })
        });
    
        updateManager.onUpdateFailed(function () {
            // 新版本下载失败
        });
    }
}

//向开放域发送消息
export function postOpenRegionMessage(eventId){
    if(Utils.isMiniGame() == false) return;

    const openDataContext = platform.getOpenDataContext()
    openDataContext.postMessage({
        eventId: eventId,
    });
}

//向开放域发送数据
export function postOpenRegionData(data){
    if(Utils.isMiniGame() == false) return;

    const openDataContext = platform.getOpenDataContext()
    openDataContext.postMessage(data);
}

/**
 * 上传游戏数据
 * https://developers.weixin.qq.com/minigame/dev/api/wx.setUserCloudStorage.html
 * 
 * @param  {} data
 * @param  {Function} callback
 * @param  {} thisArg
 */
export function setUserCloudStorage(data, callback?:Function, thisArg?){
    if(Utils.isMiniGame() == false) return;

    platform.setUserCloudStorage({
        KVDataList: data,
        success() {
            if(typeof callback == 'function')
              callback.call(thisArg);
        }
    });
}

//获取小游戏启动信息
//https://developers.weixin.qq.com/minigame/dev/api/wx.getLaunchOptionsSync.html
// launchInfo = {
//     scene,
//     query,
//     shareTicket,
//     referrerInfo:{
//         appId,
//         extraData
//     }
// }
export function getLaunchOptionsSync(){
    if(Utils.isMiniGame() == false) return;

    let launchInfo = platform.getLaunchOptionsSync();
    console.log('启动信息：', launchInfo);

    return launchInfo;
}

//获取入口appid
export function getLoginAppid(){
    if(Utils.isMiniGame() == false) return;

    let launchInfo = platform.getLaunchOptionsSync();
    if(launchInfo && launchInfo.referrerInfo){
        console.log('入口Appid：',launchInfo.referrerInfo.appId);

        return launchInfo.referrerInfo.appId;
    }else{
        return null;
    }
}

//获取入口场景值
//https://developers.weixin.qq.com/minigame/dev/reference/scene-list.html
export function getLaunchScene(){
    if(Utils.isMiniGame() == false) return;

    let launchInfo = platform.getLaunchOptionsSync();
    console.log('场景值：',launchInfo.scene);
    if(launchInfo){
        return launchInfo.scene;
    }else{
        return null;
    }
}

//是否从“我的小程序进入”
export function IsLoginFromFavourite(){
    if(Utils.isMiniGame() == false) return;

    let scene = getLaunchScene();
    // return scene == 1089 || scene == 1103;
    return scene == 1104 || scene == 1103;
}

/**
 * 跳转小程序
 * @param  {string} appId
 * @param  {string} path
 * @param  {string} extraData
 * @param  {string} envVersion
 * @param  {Function} callback
 * @param  {} thisArg
 */
export function navigateToMiniProgram(appId:string, path?:string, extraData?, envVersion?, callback?:Function, thisArg?){
    if(Utils.isMiniGame() == false || !appId) return;

    platform.navigateToMiniProgram({
        appId: appId,
        path: path,
        extraData: extraData,
        envVersion: envVersion,
        success(res) {
          // 打开成功
          if(typeof callback == 'function')
            callback.call(thisArg);
        }
    });
}

/**
 * 跳转到卖克星球
 * @param  {JSON} extraData
 * @param  {string} envVersion
 * @param  {Function} callback
 * @param  {} thisArg
 */
export function goMaikeShopping(extraData?, callback?:Function, thisArg?, envVersion?:string){
    if(Utils.isMiniGame() == false) return;

    navigateToMiniProgram(LocalConfig.MiniProgramAppId.Maike, null, extraData, envVersion, callback, thisArg);
}

/**
 * 从其他小程序返回
 * @param  {Function} cb
 * @param  {} thisArg
 */
export function onReturnGame(cb:Function, thisArg?){
    if(Utils.isMiniGame() == false) return;

    if(typeof cb == 'function'){
        onShow(cb);
    }
}

/** @type {cc.Node} */
let subContentView;
//设置子域组件
export function setSubContentView(subView){
    if(!subView) return;

    subContentView = subView;
}

//获取子域组件
export function getSubContentView(){
    return subContentView;
}

//隐藏或显示子域组件
/**
 * @param  {boolean} active
 */
// export function setSubContentActive(active){
//     if(!subContentView || typeof active != 'boolean') return;

//     subContentView.active = active;
//     subContentView.getComponent(cc.WXSubContextView).enabled = active;
// }

// //更新子域
// export function updateSubContentView(){
//     if(!subContentView) return;

//     subContentView.getComponent(cc.WXSubContextView).update();
// }

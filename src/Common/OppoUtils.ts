import * as Data from "../Data/Data";
import * as Manager from "../Manager/Manager";
import GEvent from "./GEvent";
import * as Config from "../Config/Config";
import * as Common from "../Common/Common";
import * as Utils from "./Utils";
import LocalConfig from "../Config/LocalConfig";

let platform = window["qg"];

// 登录OPPO游戏
export function login(){
    if(!Utils.isOppoGame()) return;

    qg.login({
        success: function(res){
            let data = JSON.stringify(res["data"]);
            console.log(data);
        },
        fail: function(res?){
            // errCode、errMsg
            console.log(JSON.stringify(res));
        },
        pkgName: null,
        complete: null
    });
}

// https://cdofs.oppomobile.com/cdo-activity/static/201810/26/quickgame/documentation/subpackage/subpackage.html
export function loadSubpackage(pkgName:string, onProgress?:Function){
    if(!Utils.isOppoGame()) return;
    if(!pkgName) return;

    let subTask = qg.loadSubpackage({
        // manifest.json中配置的子包包名
        name: pkgName,
        // 子包加载成功回调
        success:function(){
            console.log(pkgName, "子包加载成功");
        }
    });

    subTask.onProgressUpdate(function(res){
        // 加载进度百分比
        let progress = res["progress"];
        // 下载数据
        let totalBytesWritten = res["totalBytesWritten"];
        // 总长度
        let totalBytesExpectedToWrite = res["totalBytesExpectedToWrite"];
    });
}

export function initAdService(){
    if(!Utils.isOppoGame()) return;

    qg.initAdService({
        appId: "xxx",
        isDebug: false,
        success: function(res) {
            console.log("success");
        },
        fail: function(res) {
            console.log("fail:" + res.code + res.msg);
        },
        complete: function(res) {
            console.log("complete");
        }
    });
}

// 创建桌面图标
export function installShortcut(cb:Function, thisArg?){
    if(!Utils.isOppoGame()) return;

    platform.hasShortcutInstalled({
        success: function(res) {
            // 判断图标未存在时，创建图标
            if(res == false){
                platform.installShortcut({
                    success: function() {
                        // 执行用户创建图标奖励
                        cb && cb.call(thisArg);
                    },
                    fail: function(err) {},
                    complete: function() {}
                })
            }
        },
        fail: function(err) {},
        complete: function() {}
    })
}
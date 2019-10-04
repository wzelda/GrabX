/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "portrait";

//-----libs-begin-----
require("./libs/laya.core.js")
require("./libs/laya.ani.js")
require("./libs/laya.html.js")
require("./libs/laya.d3.js")
require("./libs/laya.physics3D.js")
//-----libs-end-------
// require("./libs/min/laya.core.min.js")
// require("./libs/min/laya.html.min.js")
// require("./libs/min/laya.d3.min.js")
// require("./libs/fairygui/fairygui.min.js")
require("./libs/fairygui/fairygui.js")
require("./js/bundle.js")

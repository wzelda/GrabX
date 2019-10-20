/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "portrait";

//-----libs-begin-----
loadLib("libs/laya.core.js")
loadLib("libs/laya.ani.js")
loadLib("libs/laya.html.js")
loadLib("libs/laya.d3.js")
loadLib("libs/laya.physics3D.js")
//-----libs-end-------
// loadLib("libs/min/laya.core.min.js")
// loadLib("libs/min/laya.html.min.js")
// loadLib("libs/min/laya.d3.min.js")
// loadLib("libs/fairygui/fairygui.min.js")
loadLib("libs/fairygui/fairygui.js")
loadLib("js/bundle.js")

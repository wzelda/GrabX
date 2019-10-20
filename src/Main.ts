import GameConfig from "./GameConfig";
import LocalConfig from "./Config/LocalConfig";
import * as Config from "./Config/Config";
import * as Manager from "./Manager/Manager";
import * as UI from "./UI/UI";
import * as Common from "./Common/Common";
import { GameScene } from "./GameScene";

class Main {
	private animations:Array<string> = ['attack1', 'attack2', 'attack3', 'win'];

	constructor() {
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		//手机与PC适配不同
		if(Laya.Browser.onPC){
			Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
		}else{
			Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
		}
		Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError = true;

		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	onVersionLoaded() {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded() {
		Manager.SceneManager.create3dScene();

		// Common.loadAllSubpackages(this, this.onSubPackageLoaded);
	}

	onSubPackageLoaded(){
		Manager.SceneManager.create3dScene();
	}
}
//激活启动类
new Main();

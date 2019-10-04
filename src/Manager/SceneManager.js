import * as Manager from "./Manager";
import GameConfig from "../GameConfig";
import { GameScene } from "../GameScene";
export class SceneManager extends Manager.BaseManager {
    constructor() {
        super();
    }
    static get Inst() {
        return this._inst;
    }
    static create2dScene() {
        Laya.Scene.load(GameConfig.startScene, Laya.Handler.create(this, this.onOpenScene));
    }
    static create3dScene() {
        //添加3D场景
        let scene = Laya.stage.addChild(new Laya.Scene3D());
        //添加照相机
        let camera = (scene.addChild(new Laya.Camera(0, 0.1, 100)));
        camera.transform.translate(new Laya.Vector3(1, 1, 3));
        // camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
        camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
        //添加方向光
        let directionLight = scene.addChild(new Laya.DirectionLight());
        directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
        directionLight.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));
        this.onOpenScene(scene);
    }
    static onOpenScene(scene) {
        if (scene) {
            Laya.stage.addChild(scene);
            this.CurScene = scene;
            scene.addComponent(Manager.SceneManager);
            scene.addComponent(Manager.HttpManager);
            scene.addComponent(Manager.UIManager);
            scene.addComponent(Manager.DataManager);
            scene.addComponent(GameScene);
        }
    }
}

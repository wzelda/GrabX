import * as Manager from "./Manager";
import * as Common from "../Common/Common";
export class BaseManager extends Common.EventDispather {
    static get Inst() {
        if (!Manager.SceneManager.CurScene) {
            console.error('Please creae a scene first!');
            return;
        }
        if (!this._inst) {
            this._inst = Manager.SceneManager.CurScene.getComponent(this);
            if (!this._inst) {
                this._inst = Manager.SceneManager.CurScene.addComponent(this);
            }
        }
        return this._inst;
    }
    constructor() {
        super();
    }
    onDestroy() {
        this.removeEventListener();
    }
}

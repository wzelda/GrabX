import * as Common from "../Common/Common";
export class HandCollisionScript extends Common.EventDispather {
    constructor() {
        super();
    }
    onTriggerEnter(other) {
    }
    onTriggerStay(other) {
    }
    onTriggerExit(other) {
    }
    onCollisionEnter(collision) {
        console.log("碰撞！");
        if (collision.other.owner === this.kinematicSprite) {
            // (this.owner.getComponent(Laya.Rigidbody3D) as Laya.Rigidbody3D).gravity = new Laya.Vector3(0, -10, 0);
        }
    }
    onCollisionStay(collision) {
    }
    onCollisionExit(collision) {
    }
}

import * as Common from "../Common/Common";
export class DeskCollisionScript extends Common.EventDispather {
    constructor() {
        super();
        this._isHit = false;
    }
    get IsHit() {
        return this._isHit;
    }
    clearStatus() {
        this._isHit = false;
    }
    onTriggerEnter(other) {
        if (other.owner === this.kinematicSprite) {
            this._isHit = true;
        }
    }
    onTriggerStay(other) {
    }
    onTriggerExit(other) {
    }
    onCollisionEnter(collision) {
        if (collision.other.owner === this.kinematicSprite) {
            this._isHit = true;
        }
    }
    onCollisionStay(collision) {
    }
    onCollisionExit(collision) {
    }
}

import * as Common from "../Common/Common";

export class CollisionScriptBase extends Common.EventDispather {
	public kinematicSprite:Laya.Sprite3D;
	protected _isHit = false;

	get IsHit(){
		return this._isHit;
	}
	
	constructor() {
		super();
	}

	clearStatus(){
		this._isHit = false;
	}
	
	public onTriggerEnter(other:Laya.PhysicsComponent):void {
		if (other.owner === this.kinematicSprite){
			this._isHit = true;
		}
	}
	
	public onTriggerStay(other:Laya.PhysicsComponent):void {
	
	}
	
	public onTriggerExit(other:Laya.PhysicsComponent):void {
	}
	
	public onCollisionEnter(collision:Laya.Collision):void {
		if (collision.other.owner === this.kinematicSprite){
			this._isHit = true;
		}
	}
	
	public onCollisionStay(collision:Laya.Collision):void {
	}
	
	public onCollisionExit(collision:Laya.Collision):void {
	}

}
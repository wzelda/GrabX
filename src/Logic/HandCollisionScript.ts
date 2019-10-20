import * as Common from "../Common/Common";

export class HandCollisionScript extends Common.EventDispather {
	public kinematicSprite:Laya.Sprite3D;
	
	constructor() {
		super();
	}
	
	public onTriggerEnter(other:Laya.PhysicsComponent):void {
		
	}
	
	public onTriggerStay(other:Laya.PhysicsComponent):void {
	
	}
	
	public onTriggerExit(other:Laya.PhysicsComponent):void {
		
	}
	
	public onCollisionEnter(collision:Laya.Collision):void {
		console.log("碰撞！");
		if (collision.other.owner === this.kinematicSprite){
			// (this.owner.getComponent(Laya.Rigidbody3D) as Laya.Rigidbody3D).gravity = new Laya.Vector3(0, -10, 0);
		}
	}
	
	public onCollisionStay(collision:Laya.Collision):void {
	}
	
	public onCollisionExit(collision:Laya.Collision):void {
	}

}
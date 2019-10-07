import * as Manager from "../Manager/Manager";
import * as Config from "../Config/Config";
import * as Core from "../Core/Core";

export class ObjectProxy {
    static changeModel(oldModel:Laya.Sprite3D, oldPath:string, newPath:string){
        if(!oldModel || !oldModel || !newPath || oldPath == newPath) return;

        if(oldModel) {
            Manager.PoolManager.recover(oldPath, oldModel);
        }

        let model = Manager.PoolManager.getItem(newPath);
        if(model instanceof Laya.MeshSprite3D){
            oldModel = model;
        }else{
            Manager.SpawnManager.Load3dModel(newPath, (mdata:Config.ModelDataStruct)=>{
                oldModel = mdata.msp as Laya.MeshSprite3D;
            }, this)
        }
    }
}
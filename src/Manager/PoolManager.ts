import * as Core from "../Core/Core";
import * as UI from "../UI/UI";
import * as Utils from "../Common/Utils";
import LocalConfig from '../Config/LocalConfig';
import * as Config from "../Config/Config";
import * as Manager from "./Manager";
import * as Data from "../Data/Data";
import * as Common from "../Common/Common";

export class PoolManager extends Manager.BaseManager {
    static Inst:PoolManager;

    //fgui对象池
    private static fguiPool = new fgui.GObjectPool();

    //fgui对象池
    static get FguiPool(){
        return this.fguiPool;
    }

    //头部池
    static get HeadPool(){
        return this.getPool(Config.PoolType.HeadModel) as Laya.Sprite3D[];
    }

    //身体池
    static get BodyPool(){
        return this.getPool(Config.PoolType.BodyModel) as Laya.Sprite3D[];
    }
    
    onAwake(){

    }

    static recover(key:string, item, clsType?){
        if(!key || !item) return;
        
        if(clsType){
            Laya.Pool.recoverByClass(clsType);
        }else{
            switch (key) {
                case Config.PoolType.FguiObj:
                    if(item instanceof fgui.GObject)
                        this.FguiPool.returnObject(item);
            
                default:
                    Laya.Pool.recover(key, item);
            }
        }
    }

    static getItem(key:string, clsType?){
        if(clsType){
            return Laya.Pool.getItemByClass(key, clsType);
        }else{
            switch (key) {
                case '':
            
                default:
                    return Laya.Pool.getItem(key);
            }
        }
    }

    static getPool(key:string){
        return Laya.Pool.getPoolBySign(key);
    }

    static clearPool(key:string){
        Laya.Pool.clearBySign(key);
    }

    static clearAllPools(){
        this.FguiPool.clear();
    }

    static getModelByType(poolType:string, path:string, callback:Function, thisArg?){
        let head = this.getItem(poolType) as Laya.Sprite3D;
        if(!head){
            Manager.SpawnManager.Load3dModel(
                path, 
                (model:Config.ModelDataStruct)=>{
                    head = model.msp;
                    if(callback){
                        callback.call(thisArg, head);
                    }
                }, 
                thisArg
            );
        }else{
            if(callback){
                callback.call(thisArg, head);
            }
        }
    }

    static getObjByFunc(key:string, func:Function){
        return Laya.Pool.getItemByCreateFun(key, func);
    }

    static getHead(path:string, callback:Function, thisArg?){
        this.getModelByType(Config.PoolType.HeadModel, path, callback, thisArg);
    }

    static getBody(path:string, callback:Function, thisArg?){
        this.getModelByType(Config.PoolType.BodyModel, path, callback, thisArg);
    }

    static returnFguiObj(box:fgui.GObject){
        this.recover(Config.PoolType.FguiObj, box);
    }
}
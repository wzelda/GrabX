import * as Config from "../Config/Config";
import * as Manager from "./Manager";
export class PoolManager extends Manager.BaseManager {
    //fgui对象池
    static get FguiPool() {
        return this.fguiPool;
    }
    //头部池
    static get HeadPool() {
        return this.getPool(Config.PoolType.HeadModel);
    }
    //身体池
    static get BodyPool() {
        return this.getPool(Config.PoolType.BodyModel);
    }
    onAwake() {
    }
    static recover(key, item, clsType) {
        if (!key || !item)
            return;
        if (clsType) {
            Laya.Pool.recoverByClass(clsType);
        }
        else {
            switch (key) {
                case Config.PoolType.FguiObj:
                    if (item instanceof fgui.GObject)
                        this.FguiPool.returnObject(item);
                default:
                    Laya.Pool.recover(key, item);
            }
        }
    }
    static getItem(key, clsType) {
        if (clsType) {
            return Laya.Pool.getItemByClass(key, clsType);
        }
        else {
            switch (key) {
                case '':
                default:
                    return Laya.Pool.getItem(key);
            }
        }
    }
    static getPool(key) {
        return Laya.Pool.getPoolBySign(key);
    }
    static clearPool(key) {
        Laya.Pool.clearBySign(key);
    }
    static clearAllPools() {
        this.FguiPool.clear();
    }
    static getModelByType(poolType, path, callback, thisArg) {
        let head = this.getItem(poolType);
        if (!head) {
            Manager.SpawnManager.Load3dModel(path, (model) => {
                head = model.msp;
                if (callback) {
                    callback.call(thisArg, head);
                }
            }, thisArg);
        }
        else {
            if (callback) {
                callback.call(thisArg, head);
            }
        }
    }
    static getHead(path, callback, thisArg) {
        this.getModelByType(Config.PoolType.HeadModel, path, callback, thisArg);
    }
    static getBody(path, callback, thisArg) {
        this.getModelByType(Config.PoolType.BodyModel, path, callback, thisArg);
    }
    static returnFguiObj(box) {
        this.recover(Config.PoolType.FguiObj, box);
    }
}
//fgui对象池
PoolManager.fguiPool = new fgui.GObjectPool();

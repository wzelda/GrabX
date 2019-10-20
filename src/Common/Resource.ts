import * as Config from '../Config/Config';

export class Resource extends Laya.Script{
    private static _instance: Resource = null;
    private static _addedUiPackages:Config.Dictionary<boolean> = {};

    private constructor(){
        super();
    }

    static get inst(){
        if(!this._instance){
            this._instance = new Resource();
        }

        return this._instance;
    }

    static load(url, thisArg?, complete?:Function, progress?:Function, resType?:string){
        Laya.loader.load(
            url, 
            Laya.Handler.create(thisArg, complete), 
            Laya.Handler.create(thisArg, progress),
            resType
        );
    }

    static addUiPackage(pkgName:string){
        if(!this._addedUiPackages[pkgName]){
            console.log('加载UI包：', pkgName);
            fgui.UIPackage.addPackage('res/' + pkgName + '/' + pkgName);
            this._addedUiPackages[pkgName] = true;
        }
    }

    static getRes(path:string){
        return Laya.Loader.getRes(path);
    }

    static releaseRes(){
        Laya.Resource.destroyUnusedResources();
    }

    public onAwake(){
        if (Resource._instance == null) {
            Resource._instance = this;
        }else {
            console.error("Resource instance must be only one");
        }
    }
}
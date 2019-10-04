export class Resource extends Laya.Script {
    constructor() {
        super();
    }
    static get inst() {
        if (!this._instance) {
            this._instance = new Resource();
        }
        return this._instance;
    }
    static load(url, thisArg, complete, progress, resType) {
        Laya.loader.load(url, Laya.Handler.create(thisArg, complete), Laya.Handler.create(thisArg, progress), resType);
    }
    static addUiPackage(pkgName) {
        if (!this._addedUiPackages[pkgName]) {
            console.log('加载UI包：', pkgName);
            fgui.UIPackage.addPackage('res/' + pkgName + '/' + pkgName);
            this._addedUiPackages[pkgName] = true;
        }
    }
    static getRes(path) {
        return Laya.Loader.getRes(path);
    }
    static releaseRes() {
        Laya.Resource.destroyUnusedResources();
    }
    onAwake() {
        if (Resource._instance == null) {
            Resource._instance = this;
        }
        else {
            console.error("Resource instance must be only one");
        }
    }
}
Resource._instance = null;
Resource._addedUiPackages = {};

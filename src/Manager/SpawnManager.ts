import * as Core from "../UI/Core";
import * as Manager from "./Manager";
import * as UI from "../UI/UI";
import * as Utils from "../Common/Utils";
import LocalConfig from '../Config/LocalConfig';
import * as Config from "../Config/Config";
import * as Common from "../Common/Common";
import GEvent from "../Common/GEvent";

//cocos用
// let loadedPackage:{[key:string]:boolean} = {};

export class SpawnManager {
    private static load3dModel;
    private static poolObjs:{[key:string]: any};

    private constructor(){}
    
    //加载模型
    static Load3dModel(path:string, completeCallback?:Function, thisArg?){
        if(!Manager.SceneManager.CurScene || !path) return;

        // Laya.loader.create(path, Laya.Handler.create(thisArg, completeCallback));

        Laya.Sprite3D.load(path, Laya.Handler.create(this, ()=>{
            if(typeof completeCallback == 'function'){
                let sp = Common.Resource.getRes(path);
                if(!sp) return;

                let msp = Manager.SceneManager.CurScene.addChild(sp) as Laya.Sprite3D;
                let ani = msp.getComponent(Laya.Animator) as Laya.Animator;
                let aniState:Laya.AnimatorPlayState;
                if(ani){
                    aniState = ani.getCurrentAnimatorPlayState(0);
                }
                let modelData = new Config.ModelDataStruct(msp, ani, aniState);
                completeCallback.call(thisArg, modelData);
            }
        }));
    }

    //加载网格
    static Load3dMesh(path:string, completeCallback?:Function, thisArg?){
        if(!path) return;

        Common.Resource.load(path, thisArg, completeCallback, null, Laya.Loader.MESH);
    }

    //加载材质
    static LoadMaterial(path:string, completeCallback?:Function, thisArg?){
        if(!path) return;

        Common.Resource.load(path, thisArg, completeCallback, null, Laya.Loader.MATERIAL);
    }

    //动态加载UI包  cocos用
    // static LoadUIPackage(_path, callback) {
    //     if(typeof(_path) != "string") return;

    //     if(loadedPackage[_path]){
    //         if(typeof callback == 'function'){
    //             callback();
    //         }
    //     }else{
    //         fgui.UIPackage.addPackage(_path, (err)=>{
    //             if(err){
    //                 return false;
    //             }

    //             loadedPackage[_path] = true;

    //             if(typeof callback == 'function'){
    //                 callback();
    //             }
    //         });
    //     }
    // }

    //从池中创建对象
    static CreateObjectFromPool(_path:string, _slot:fgui.GGraph) {
        if(!_path || !_slot) return;

        //从池中创建一个Skeleton对象
        let obj = Laya.Pool.getItem(_path);
        if(!obj) return;

        //生成唯一gid
        if(!obj['$PoolGID']){
            obj['$PoolGID'] = Laya.Utils.getGID();
        }
        if(!obj['$Path']){
            obj['$Path'] = _path;
        }
        this.poolObjs[obj['$PoolGID']] = obj;

        _slot.displayObject.addChild(obj);

        return obj;
    }

    //从创建Spine或DragonBone动画
    /**
     * @param  {string} _path 路径
     * @param  {fgui.GGraph} _slot 父对象 fgui graph
     * @param  {string | number} _name 动画名字或者索引
     * @param  {boolean} _isLoop 是否循环播放，默认循环播放
     * @param  {boolean} _isPlay 是否立即播放，默认播放
     * @return {sp.Skeleton}
     */
    // static CreateSpine(_path, _slot, _name, _isLoop, _isPlay) {
    //     if(typeof(_path) != "string" || !_slot || !_slot.node) return

    //     let skeleton = _slot.node.getComponent(sp.Skeleton);
    //     if(skeleton == null){
    //         skeleton = _slot.node.addComponent(sp.Skeleton);
    //     }

    //     skeleton.premultipliedAlpha = false;

    //     let onProcess = function(completeCount, totalCount, item) {}
    //     let cb = function(err, res){
    //         skeleton.skeletonData = res;

    //         _isLoop = _isLoop? _isLoop: true;
    //         if(skeleton.skeletonData && skeleton.skeletonData.loaded && _name){
    //             skeleton.setAnimation(0, _name, _isLoop)
    //         }

    //         skeleton.paused = _isPlay == false
    //     }

    //     cc.loader.loadRes(_path, sp.SkeletonData, onProcess, cb)


    //     return skeleton
    // }

    //通过预制体创建Spine
    /**
     * @param  {string} _path Prefab路径
     * @param  {fgui.GGraph} _slot 父对象 fgui graph
     * @param  {function} callback 动画名字或者索引
     */
    // static CreateSpineFromPrefab(_path, _slot, callback) {
    //     if(typeof(_path) != "string" || !_slot || !_slot.node) return;

    //     /** @type {sp.Skeleton} */
    //     // let skeleton;
    //     cc.loader.loadRes(_path, cc.Prefab, function(err, prefab) {
    //             if (err) {
    //                 console.error(err);
    //                 return;
    //             }

    //             let prefabNode = cc.instantiate(prefab);
    //             /** @type {sp.Skeleton} */
    //             let skeleton =  prefabNode.getComponent(sp.Skeleton);
    //             _slot.node.addChild(prefabNode);
    //             prefabNode.position = cc.Vec2.ZERO;

    //             if(callback) callback(skeleton);

    //             GEvent.Dispatch(GEvent.SPINE_PREFAB_LOADED);
    //         }
    //     );
    // }

    static LoadView(pkg:string, com:string){
        if(!pkg || !com) return;

        Common.Resource.addUiPackage(pkg);
        
        let grootInst = fgui.GRoot.inst;
        let ui = fgui.UIPackage.createObject(pkg, com).asCom;
        if(ui){
            grootInst.addChild(ui);
            ui.visible = false;
            //小游戏适配
            ui.setSize(grootInst.width, grootInst.height);
            ui.setXY(0, 0);
        }else{
            console.error("Fail to add ui package: ", pkg, com);
        }

        return ui;
    }
}
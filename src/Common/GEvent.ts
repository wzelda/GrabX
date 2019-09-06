import * as Config from "../Config/Config";
import * as Common from "./Common";

export default class GEvent {
    //----------------------开放域--------------------
    //刷新好友数据
    static readonly WX_REFRESH_FRIEND_DATA = 11001
    //打开排行
    static readonly OPEN_RANK_UI = 11004
    //显示故事排行
    static readonly CLOSE_RANK_UI = 11005

    private static Listeners:Config.Dictionary<Config.ListenerClass> = {};

    static AddListener(key, func, target) {
        if(!key || typeof(func) != "function") return;

        if(!this.Listeners[key]) {
            this.Listeners[key] = new Config.ListenerClass();
        }

        this.Listeners[key].addListener(func, target);
    }

    static RemoveListener(key, func) {
        if(!key || typeof(func) != "function") return;
        
        let list = this.Listeners[key];
        if(!list) return;
        
        list.removeListener(func);
    }    

    static Dispatch(key, ...data) {
        if(!key) return;

        let list = this.Listeners[key];
        if(!list) return;

        for(let i in list.Listeners) {
            if(typeof(list.Listeners[i]) != "function") return;

            list.Listeners[i].call(list.Targets[i], ...data);
        }
    }

    static Clear(key) {
        if(!key) return

        delete this.Listeners[key];
    }
}
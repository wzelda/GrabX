import * as Common from "../Common/Common";
import * as Config from "./Config";
import LocalConfig from "./LocalConfig";

export function searchConfig(config:Array<any>, param:string, value){
    if(null == value){
        console.error('Value is null');
        return;
    }

    if(Array.isArray(config) == false || config.length == 0){
        console.error('Invalid or empty config array');
        return;
    }
    
    let target:Config.ConfigType;
    config.some(v=>{
        if(!v[param]){
            console.error('Miss array param: ', param);
            return true;
        }else if(v[param] == value){
            target = v;
            return true;
        }
    });

    return target;
}

//根据id搜索配置
export function searchConfigById(config:Array<any>, value){
    return searchConfig(config, 'Id', value);
}

//配置的内存缓存
let configCache:Config.Dictionary<Config.ConfigType[]> = {};
let levelConfigCache:Config.Dictionary<Array<Config.ConfigType>> = {};
export function getConfigByKey(key:string){
    if(!key) return;

    if(null == configCache[key]){
        configCache[key] = Config.DataConfig.getLocalConfig(key);
        levelConfigCache[key] = [];
    }

    return configCache[key];
}

//通过Id搜寻配置
export function getConfigById(key:string, id:number){
    return searchConfigById(getConfigByKey(key), id);
}

//通过等级搜寻
export function getConfigByLevel(key:string, level:number){
    //id等于level
    return getConfigById(key, level);
}

//通过任意字段搜寻
export function getConfigByArg(key:string, arg:string, value){
    return searchConfig(getConfigByKey(key), arg, value);
}

//按字段排列配置
export function sortConfigByParam(src:Array<any>, param:string, out?:Array<Array<any>>){
    if(!param || Array.isArray(src) == false){
        console.error('Invalid param or source config');
        return;
    }
    
    if(Array.isArray(out) == false){
        out = [];
    }
    
    src.some(v=>{
        if(null == v[param]){
            console.log('Config miss param: ', param);
            return true;
        }

        if(null == out[v[param]]){
            out[v[param]] = [];
        }
        out[v[param]].push(v);
    });

    return out;
}

//输入配置，按字段返回同类配置数组
export function filterConfigByParam(src:Array<any>, param:string, value, out?:Array<any>){
    if(!param || Array.isArray(src) == false){
        console.error('Invalid param or source config');
        return;
    }

    if(Array.isArray(out) == false){
        out = [];
    }

    src.some(v=>{
        if(null == v[param]){
            console.log('Config miss param: ', param);
            return true;
        }

        if(v[param] == value){
            out.push(v);
        }
    });

    return out;
}

//输入配置key，按字段返回同类配置数组
export function filterConfig(key:string, param:string, value, out?:Array<any>){
    return filterConfigByParam(getConfigByKey(key), param, value, out);
}
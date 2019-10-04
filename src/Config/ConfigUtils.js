import * as Config from "./Config";
export function searchConfig(config, param, value) {
    if (null == value) {
        console.error('Value is null');
        return;
    }
    if (Array.isArray(config) == false || config.length == 0) {
        console.error('Invalid or empty config array');
        return;
    }
    let target;
    config.some(v => {
        if (!v[param]) {
            console.error('Miss array param: ', param);
            return true;
        }
        else if (v[param] == value) {
            target = v;
            return true;
        }
    });
    return target;
}
//根据id搜索配置
export function searchConfigById(config, value) {
    return searchConfig(config, 'Id', value);
}
//配置的内存缓存
let configCache = {};
let levelConfigCache = {};
export function getConfigByKey(key) {
    if (!key)
        return;
    if (null == configCache[key]) {
        configCache[key] = Config.DataConfig.getLocalConfig(key);
        levelConfigCache[key] = [];
    }
    return configCache[key];
}
//通过Id搜寻配置
export function getConfigById(key, id) {
    return searchConfigById(getConfigByKey(key), id);
}
//通过等级搜寻
export function getConfigByLevel(key, level) {
    //id等于level
    return getConfigById(key, level);
}
//通过任意字段搜寻
export function getConfigByArg(key, arg, value) {
    return searchConfig(getConfigByKey(key), arg, value);
}
//按字段排列配置
export function sortConfigByParam(src, param, out) {
    if (!param || Array.isArray(src) == false) {
        console.error('Invalid param or source config');
        return;
    }
    if (Array.isArray(out) == false) {
        out = [];
    }
    src.some(v => {
        if (null == v[param]) {
            console.log('Config miss param: ', param);
            return true;
        }
        if (null == out[v[param]]) {
            out[v[param]] = [];
        }
        out[v[param]].push(v);
    });
    return out;
}
//输入配置，按字段返回同类配置数组
export function filterConfigByParam(src, param, value, out) {
    if (!param || Array.isArray(src) == false) {
        console.error('Invalid param or source config');
        return;
    }
    if (Array.isArray(out) == false) {
        out = [];
    }
    src.some(v => {
        if (null == v[param]) {
            console.log('Config miss param: ', param);
            return true;
        }
        if (v[param] == value) {
            out.push(v);
        }
    });
    return out;
}
//输入配置key，按字段返回同类配置数组
export function filterConfig(key, param, value, out) {
    return filterConfigByParam(getConfigByKey(key), param, value, out);
}
//获取道具配置
export function getItemConfig(id) {
    return getConfigById(Config.LOCALCONFIG_KEY.ITEM, id);
}

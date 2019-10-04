import * as Common from "../Common/Common";
import * as Config from "./Config";
//本地配置存储前缀
const PREFIX_LOCALCONFIG_KEY = "configlocal_prefix";
//对应后端的表格tableId
let tableIdNum = 1;
export const LOCALCONFIG_KEY = {
    //修为阶段
    CULTIVATION_PERIOD: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //默认值
    DEFAULT_CONFIG: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //洞府食物
    ADOBE_FOOD: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //洞府陨铁
    ADOBE_IRON: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //洞府灵石
    ADOBE_STONE: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //洞府默认配置
    ADOBE_DEFAULT: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //洞府木材
    ADOBE_WOOD: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //洞府灵池
    ADOBE_POOL: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //灵池默认值
    ADOBE_POOL_DEFAULT: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //风水土
    ADOBE_POOL_SOIL: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //风水木
    ADOBE_POOL_WOOD: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //风水水
    ADOBE_POOL_WATER: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //风水火
    ADOBE_POOL_FIRE: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //风水金
    ADOBE_POOL_GOLD: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //随机语句
    RANDOM_WORDS: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派
    SECTS: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派人物
    SECTERS: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派品阶
    SECT_GRADE: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派技能
    SECT_KF: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派技能升级
    SECT_KF_UPGRADE: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派技能升级总量
    SECT_KF_ADD_NUM: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派任务
    SECT_TASK: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派修炼塔
    SECT_TRAIN_TOWER: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派默认值
    SECT_DEFAULT: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //书籍技能
    BOOK_SKILL: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //储物袋升级消耗
    BAG_UP_COST: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //物品
    ITEM: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //装备
    EQUIPMENT: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //门派招式
    SECT_ZHAOSHI: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //战斗奖励
    BATTLE_AWARDS: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //机器人
    BATTLE_AI: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
    //镇妖塔层级
    MONSTER_TOWER: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
};
export class DataConfig {
    constructor() {
        this.countNum = 0; //配置计数
        this.configData = {};
    }
    static getInstance() {
        if (this._instance == undefined) {
            this._instance = new DataConfig();
        }
        return this._instance;
    }
    static get instance() {
        if (this._instance == undefined) {
            this._instance = new DataConfig();
        }
        return this._instance;
    }
    static getConfigByName(key) {
        return this.instance.getConfigByName(key);
    }
    static getConfigById(key, id) {
        return this.instance.getConfigById(key, id);
    }
    static searchConfig(config, param, value) {
        let target = Common.searchArray(config, param, value);
        if (!target) {
            console.error('找不到配置：', param, value);
            return;
        }
        else {
            return target;
        }
    }
    static searchConfigById(config, id) {
        return this.searchConfig(config, 'Id', id);
    }
    static getLocalConfigById(key, id) {
        let config = this.getLocalConfig(key);
        return this.searchConfigById(config, id);
    }
    loadConfig(url, key, cb) {
        Laya.loader.load(url, Laya.Handler.create(this, config => {
            config = JSON.stringify(config);
            var configJson = JSON.parse(config);
            this.configData[key] = configJson;
            this.countNum++;
            cb && cb();
        }));
    }
    initConfig(cb) {
        Laya.loader.load(DataConfig.JSONHOT_URL, Laya.Handler.create(this, config => {
            config = JSON.stringify(config);
            let hotJsons = JSON.parse(config);
            if (Array.isArray(hotJsons)) {
                let total = hotJsons.length;
                hotJsons.forEach((cfg, idx) => {
                    if (idx >= total - 1) {
                        this.loadConfig(cfg.Url, cfg.Type, cb);
                    }
                    else {
                        this.loadConfig(cfg.Url, cfg.Type);
                    }
                });
            }
        }));
    }
    //本地缓存
    storeConfig(key, data) {
        // if(typeof(data) == 'string'){
        //     data = JSON.parse(data);
        // }
        // Common.saveLocalJson(key, data);
        //后端发来json字符串
        Common.saveLocalStorage(PREFIX_LOCALCONFIG_KEY + key, data);
        this.countNum++;
    }
    saveAllConfig(data) {
        Common.saveLocalJson(Config.DataConfig.JSON_CONFIGS, data);
    }
    saveConfigVersion(data) {
        //必须是数组
        if (Array.isArray(data) == false || data.length == 0)
            return;
        let toLocal = new Array();
        data.forEach(v => {
            toLocal.push(new Config.ConfigDataParam(v.TableId, v.Version));
        });
        Common.saveLocalJson(Config.DataConfig.JSON_CONFIGS, toLocal);
    }
    static getLocalConfig(key) {
        if (!key) {
            return console.error('Invalid config key: ', key);
        }
        let config = Common.getLocalStorage(key);
        if (!config) {
            console.error('配置为空：', key);
        }
        else {
            return JSON.parse(config);
        }
        // return Common.getLocalJson(key);
    }
    static getConfigVersion(config) {
        return config && config.Version;
    }
    static getConfigVersionByKey(key) {
        return this.getConfigVersion(this.getLocalConfig(key));
    }
    //获取本地所有配置
    static get localConfigs() {
        return Common.getLocalJson(DataConfig.JSON_CONFIGS) || [];
    }
    getConfigByName(key) {
        return this.configData[key];
    }
    getConfigById(key, id) {
        if (this.configData[key]) {
            var configs = this.configData[key];
            for (var i = 0; i < configs.length; i++) {
                if (configs[i]['id'] == id) {
                    return configs[i];
                }
            }
        }
        return null;
    }
    getConfigsByType(key, type) {
        if (this.configData[key]) {
            var configs = this.configData[key];
            var result = new Array();
            for (var i = 0; i < configs.length; i++) {
                if (configs[i]['type'] == type) {
                    result.push(configs[i]);
                }
            }
            return result;
        }
        return null;
    }
}
DataConfig.IsConfigLoaded = false; //是否已加载配置
DataConfig.JSONHOT_URL = 'res/config/JsonHot.json';
DataConfig.SYNTHESIS_URL = 'res/config/Synthesis.json';
DataConfig.LEVELUP_URL = 'res/config/LevelUp.json';
DataConfig.KONGFU_URL = 'res/config/KongFu.json';
DataConfig.KONGFU_ATTRIBUTE_URL = 'res/config/KongFuAttribute.json';
DataConfig.WEAPON_TYPE_URL = 'res/config/WeaponType.json';
DataConfig.YOKE_URL = 'res/config/Yoke.json';
DataConfig.SECT_URL = 'res/config/Sect.json';
DataConfig.HERO_URL = 'res/config/Hero.json';
//配置id，须与res/Config/JsonHot.Type相同
DataConfig.CULTIVATION_KEY = "Cultivation";
//对应后端的表格tableId
// public static KEY_CULTIVATION_PERIOD = PREFIX_LOCALCONFIG_KEY + 1;  //修为阶段
// public static KEY_ADOBE_FOOD = PREFIX_LOCALCONFIG_KEY + 3;  //洞府食物
// public static KEY_ADOBE_IRON = PREFIX_LOCALCONFIG_KEY + 4;  //洞府陨铁
// public static KEY_ADOBE_STONE = PREFIX_LOCALCONFIG_KEY + 5;  //洞府灵石
// public static KEY_ADOBE_WOOD = PREFIX_LOCALCONFIG_KEY + 7;  //洞府木材
// public static KEY_ADOBE_DEFAULT = PREFIX_LOCALCONFIG_KEY + 6;  //洞府默认配置
// public static KEY_ADOBE_POOL = PREFIX_LOCALCONFIG_KEY + 8;  //洞府灵池
// public static KEY_ADOBE_POOL_DEFAULT = PREFIX_LOCALCONFIG_KEY + 9;  //灵池默认值
// public static KEY_ADOBE_POOL_SOIL = PREFIX_LOCALCONFIG_KEY + 10;  //风水土
// public static KEY_ADOBE_POOL_WOOD = PREFIX_LOCALCONFIG_KEY + 11;  //风水木
// public static KEY_ADOBE_POOL_WATER = PREFIX_LOCALCONFIG_KEY + 12;  //风水水
// public static KEY_ADOBE_POOL_FIRE = PREFIX_LOCALCONFIG_KEY + 13;  //风水火
// public static KEY_ADOBE_POOL_GOLD = PREFIX_LOCALCONFIG_KEY + 14;  //风水金
// public static KEY_RANDOM_WORDS = PREFIX_LOCALCONFIG_KEY + 15;  //随机语句
DataConfig.SYNTHESIS_KEY = "synthesis";
DataConfig.LEVELUP_KEY = "levelUp";
DataConfig.KONGFU_KEY = "kongFu";
DataConfig.KONGFU_ATTRIBUTE_KEY = "kongFuAttribute";
DataConfig.WEAPON_TYPE_KEY = "weapon_Type";
DataConfig.YOKE_KEY = "yoke";
DataConfig.SECT_KEY = "sect";
DataConfig.Hero_KEY = "Hero";
DataConfig.JSON_CONFIGS = "json_configs";
//最大生命值
DataConfig.MAX_HEALTH = 100;
//初始金币
DataConfig.INIT_GOLD = 5;
//回合购买CD
DataConfig.ROUND_CD = 15;
//上阵数目
DataConfig.TROOP_NUM = 9;
//背包数目
DataConfig.BAG_TOTAL = 8;
//选择派别
DataConfig.HeroSect = 0;
export class BaseConfigData {
    static get Config() {
        if (!this.config) {
            this.config = DataConfig.getLocalConfig(this.CONFIG_KEY);
        }
        return this.config;
    }
    static getConfigById(id) {
        return DataConfig.searchConfigById(this.Config, id);
    }
    static getConfigByLevel(level) {
        return Common.searchArray(this.Config, 'Level', level);
    }
}
//---------------------------------配置字段----------------------------------------------
//模板配置
export class ConfigType {
}
//修为配置
export class CultivationPeriod extends ConfigType {
}

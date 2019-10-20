import * as Common from "../Common/Common";
import * as Config from "./Config";
import LocalConfig from "./LocalConfig";

export interface JsonHot{
    id:number;
    Type:string;
    Url:string;
}

//本地配置存储前缀
const PREFIX_LOCALCONFIG_KEY = "configlocal_prefix";

//对应后端的表格tableId
let tableIdNum = 1;
export const LOCALCONFIG_KEY = {
    //修为阶段
    CULTIVATION_PERIOD: PREFIX_LOCALCONFIG_KEY + tableIdNum++,
}

export class DataConfig{
    public static IsConfigLoaded = false;   //是否已加载配置
    protected static JSONHOT_URL  = 'res/config/JsonHot.json';
    //配置id，须与res/Config/JsonHot.Type相同
    public static CULTIVATION_KEY = "Cultivation";
    public static JSON_CONFIGS = "json_configs";

    private static _instance : DataConfig;

    public static getInstance() : DataConfig {
        if(this._instance == undefined) {
            this._instance = new DataConfig();
        }
        return this._instance;
    }

    public static get instance() : DataConfig {
        if(this._instance == undefined) {
            this._instance = new DataConfig();
        }

        return this._instance;
    }

    public static getConfigByName(key:string){
        return this.instance.getConfigByName(key);
    }

    public static getConfigById(key:string, id:number){
        return this.instance.getConfigById(key, id);
    }

    public static searchConfig(config:Array<any>, param:string, value){
        let target = Common.searchArray(config, param, value);
        if(!target){
            console.error('找不到配置：', param, value);
            return;
        }else{
            return target;
        }
    }

    public static searchConfigById(config:Array<any>, id:number){
        return this.searchConfig(config, 'Id', id);
    }

    public static getLocalConfigById(key:string, id:number){
        let config:Array<any> = this.getLocalConfig(key);
         return this.searchConfigById(config, id);
    }

    protected configData:{[key:string]:Array<any>} = {};

    protected loadConfig(url:string, key:string, cb?:Function) : void {
        Laya.loader.load(url, Laya.Handler.create(this, config=>{
            config = JSON.stringify(config);
            var configJson = JSON.parse(config);
            this.configData[key] = configJson;

            cb && cb();
        }));
    }

    public initConfig(cb?:Function) : void {
        Laya.loader.load(DataConfig.JSONHOT_URL, Laya.Handler.create(this, config=>{
            config = JSON.stringify(config);
            let hotJsons:JsonHot[] = JSON.parse(config);
            if(Array.isArray(hotJsons)){
                let total = hotJsons.length;
                hotJsons.forEach((cfg, idx)=>{
                    if(idx >= total - 1){
                        this.loadConfig(cfg.Url, cfg.Type, cb);
                    }else{
                        this.loadConfig(cfg.Url, cfg.Type);
                    }
                });
            }
        }));
    }

    //本地缓存
    public storeConfig(key:string | number, data){
        //后端发来json字符串
        Common.saveLocalStorage(PREFIX_LOCALCONFIG_KEY + key, data);
    }

    public saveAllConfig(data){
        Common.saveLocalJson(Config.DataConfig.JSON_CONFIGS, data);
    }

    public saveConfigVersion(data:Config.ConfigDataParam[]){
        //必须是数组
        if(Array.isArray(data) == false || data.length == 0) return;

        let toLocal = new Array<Config.ConfigDataParam>();
        data.forEach(v=>{
            toLocal.push(new Config.ConfigDataParam(v.TableId, v.Version));
        });
        Common.saveLocalJson(Config.DataConfig.JSON_CONFIGS, toLocal);
    }

    static getLocalConfig(key:string){
        if(!key){
            return console.error('Invalid config key: ', key);
        }
        
        let config = Common.getLocalStorage(key);
        if(!config){
            console.error('配置为空：', key);
        }else{
            return JSON.parse(config);
        }
    }

    static getConfigVersion(config:Config.ConfigDataParam){
        return config && config.Version;
    }

    static getConfigVersionByKey(key:string){
        return this.getConfigVersion(this.getLocalConfig(key));
    }

    //获取本地所有配置
    static get localConfigs():Config.ConfigDataParam[]{
        return Common.getLocalJson(DataConfig.JSON_CONFIGS) || [];
    }

    public getConfigByName(key:string) : any {
        return this.configData[key];
    }

    public getConfigById(key:string,id:number) : any {
        if(this.configData[key]) {
            var configs = this.configData[key];
            for(var i:number = 0; i < configs.length; i++) {
                if(configs[i]['id'] == id) {
                    return configs[i];
                }
            }
        }
        return null;
    }

    public getConfigsByType(key:string, type:number) : any {
        if(this.configData[key]) {
            var configs = this.configData[key];
            var result:Array<any> = new Array();
            for(var i:number = 0; i < configs.length; i++) {
                if(configs[i]['type'] == type) {
                    result.push(configs[i]);
                }
            }
            return result;
        }
        return null;
    }
}

export class BaseConfigData {
    static CONFIG_KEY:string;
    protected static config:Array<any>;

    static get Config(){
        if(!this.config){
            this.config = DataConfig.getLocalConfig(this.CONFIG_KEY);
        }

        return this.config;
    }

    static getConfigById(id:number){
        return DataConfig.searchConfigById(this.Config, id);
    }

    static getConfigByLevel(level:number){
        return Common.searchArray(this.Config, 'Level', level);
    }
}

//---------------------------------配置字段----------------------------------------------
//模板配置
export class ConfigType {
    Id:number;
    Name:string;
    Level:number;
    Type:number;
    Pic:string; 
}

//修为配置
export class CultivationPeriod extends ConfigType {
    Id:number;
    XiuweiName:string;  //修为级别名称
    Cost:number;    //升级消耗修为
    Success:number; //渡劫成功率
    AddEfficiency:number;
    FailReturn:number;
}
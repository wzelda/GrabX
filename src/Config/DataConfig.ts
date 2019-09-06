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
}

export class DataConfig{
    public countNum =0; //配置计数
    
    public static IsConfigLoaded = false;   //是否已加载配置
    protected static JSONHOT_URL  = 'res/config/JsonHot.json';

    protected static SYNTHESIS_URL  = 'res/config/Synthesis.json';
    protected static LEVELUP_URL  = 'res/config/LevelUp.json';
    protected static KONGFU_URL  = 'res/config/KongFu.json';
    protected static KONGFU_ATTRIBUTE_URL  = 'res/config/KongFuAttribute.json';
    protected static WEAPON_TYPE_URL  = 'res/config/WeaponType.json';
    protected static YOKE_URL  = 'res/config/Yoke.json';
    protected static SECT_URL  = 'res/config/Sect.json';
    protected static HERO_URL  = 'res/config/Hero.json';

    //配置id，须与res/Config/JsonHot.Type相同
    public static CULTIVATION_KEY = "Cultivation";
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

    public static SYNTHESIS_KEY = "synthesis";
    public static LEVELUP_KEY = "levelUp";
    public static KONGFU_KEY = "kongFu"
    public static KONGFU_ATTRIBUTE_KEY ="kongFuAttribute"
    public static WEAPON_TYPE_KEY ="weapon_Type"
    public static YOKE_KEY = "yoke";
    public static SECT_KEY = "sect";
    public static Hero_KEY = "Hero";

    public static JSON_CONFIGS = "json_configs";

    //最大生命值
    static readonly MAX_HEALTH = 100;
    //初始金币
    static readonly INIT_GOLD = 5;
    //回合购买CD
    static readonly ROUND_CD = 15;
    //上阵数目
    static readonly TROOP_NUM = 9;
    //背包数目
    static readonly BAG_TOTAL = 8;

    //选择派别
    static HeroSect = 0;

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
            this.countNum++;

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
        // if(typeof(data) == 'string'){
        //     data = JSON.parse(data);
        // }
        // Common.saveLocalJson(key, data);

        //后端发来json字符串
        Common.saveLocalStorage(PREFIX_LOCALCONFIG_KEY + key, data);
        this.countNum++;
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

        // return Common.getLocalJson(key);
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

//洞府资源
export interface AdobeRes extends ConfigType {
    Id:number;
    Level:number;  
    Pic:string; 
    StorageLimit:number;
    ServantLimit:number;
    ServantProduct:number;  //产量（1个仙仆）
    ServantCost:number; //消耗（1个仙仆）
    WoodCost:number;    //升级消耗木材
}

//灵池
export interface AdobePool extends ConfigType {
    Id:number;
    Level:number;  
    Pic:string; 
    StorageLimit:number;
    ReikiProduct:number;
    UpCostWood:number;  //升级消耗木材
    UpCostIron:number; //升级消耗陨铁
    UpCostStone:number;    //升级消耗灵石
}

//风水
export interface FengshuiConfigType extends ConfigType {
    Id:number;
    Level:number;  
    LevelName:string;
    Pic:string; 
    GongfaAdd:number;
    UpCostReiki:number;
}

//随机语句
export interface RandomWoods extends ConfigType {
    Id:number;
    Type:number;  
    Content:string;
}

//门派
export interface Sects extends ConfigType {
    Id:number;
    Name:string;
    StageId:number;
    LeaderId:number;
    ElderId:number;
    FollowerOne:number;
    FollowerTwo:number;
    FollowerThree:number;
    XiuweiId:number;
    Qualification:number;
    Desc:string;
}

//门派人物
export interface Secters extends ConfigType {
    Id:number;
    Name:string;
    Avatar:string;
    Stage:string;
    Desc:string;
}

//门派技能升级
export interface SectKFUpgrade extends ConfigType {
    Id:number;
    // Type:number;
    // LowLevel:number;
    // UpLevel:number;
    Cost:number;
}

//门派品阶
export interface SectGrade extends ConfigType {
    Id:number;
    Name:string;
    LowStage:number;
}

//门派技能
export interface SectKF extends ConfigType {
    Id:number;
    Name:string; //门派功法名称
    AddType:number; //增加属性类型(1灵力2根骨3体魄4身法)
    GroupId:number; //门派ID
    StageLevel:number; //门派技能品阶
    StageName:string; //门派技能品阶名称
    FengshuiType:number; //门派技能风水类型
    FengshuiName:string; //门派技能风水名称
    Cost:number; //学习消耗门派贡献值
}

//门派技能总量升级
export interface SectKFAddNum extends ConfigType {
    Id:number;
    Cost:number;
}

//门派任务
export interface SectTask extends ConfigType {
	Stage:number //任务品阶
	CompleteTime:number //完成耗时s
	RewardGongxian:number //奖励贡献值
	RewardStone:number //奖励灵石数量
	RewardWeiwang:number //奖励威望值
	Desc:string //门派介绍
}

//修炼塔
export interface SectTrainTower extends ConfigType {
	NormalCost  :number //普通修炼消耗灵石
	NormalTime  :number //普通修炼时长(秒)
	NormalUp    :number //普通修炼提升倍数
	NormalTimes :number //普通修炼每天次数
	LeaderCost  :number //掌门传功消耗灵石
	LeaderTime  :number //掌门传功时长(秒)
	LeaderUp    :number //掌门传功提升倍数
	LeaderTimes :number //掌门传功每天次数
}

//门派默认
export interface SectDefault extends ConfigType {
	WeiwangCost :number //退出门派扣除威望
	GroupGongxianCost :number //退出门派扣除门派贡献值
}

//储物袋升级消耗
export interface BagUpCost extends ConfigType {
	StoneNum :number //添加格子消耗灵石的数量
	GoodId :number //添加格子消耗物品ID
	GoodNum :number //添加格子消耗物品数量
}

//道具
export interface ItemConfigType extends ConfigType {
	Pic:string;      //物品图片
	Desc:string;     //物品描述
	Quality:number; //物品品质
	StorageLimit       :number; //背包最大叠加数量
	SellPrice          :number; //出售价格
	CanUse :number; //能不能使用
	UseType :number; //物品类型(1属性添加2渡劫概率添加3消耗品4技能学习)
	PropertyAddType    :number; //添加的属性类型(1灵石2食物3木材4铁矿5仙玉6门派贡献值7威望值8正义值9邪恶值10修为值11修真年龄12道行13灵力14根骨15体魄16身法17悟性18福缘19资质20人族伤害21妖族伤害22仙族伤害23鬼族伤害24魔族伤害25龙族伤害)
	PropertyAddValue   :number; //属性添加值
	DujieAddXiuweiLimit:number; //渡劫添加概率修为阶段限制
	DujieAddValue      :number; //渡劫概率添加值
	BookSkillId        :number; //学习的书本技能ID
}

//装备
export interface EquipConfigType extends ConfigType {
	Type:number; //装备类型：1灵剑2发簪3衣服4靴子5指环6玉佩7手镯8罗盘
	Pic:string; //装备图片
	Desc:string;//装备描述
	Quality      :number; //装备品质
	StorageLimit :number; //背包最大叠加数量
	SellPrice    :number; //出售价格
	CanUse       :number; //能不能使用
	PropertyAddOneType    :number; //属性添加类型:1灵石2食物3木材4铁矿5仙玉6门派贡献值7威望值8正义值9邪恶值10修为值11道行12灵力13根骨14体魄15身法16悟性17福缘18资质19人族伤害20妖族伤害21仙族伤害22鬼族伤害23魔族伤害24龙族伤害
	PropertyAddOneValue   :number; //属性添加值
	PropertyAddTwoType    :number; //属性添加类型:1灵石2食物3木材4铁矿5仙玉6门派贡献值7威望值8正义值9邪恶值10修为值11道行12灵力13根骨14体魄15身法16悟性17福缘18资质19人族伤害20妖族伤害21仙族伤害22鬼族伤害23魔族伤害24龙族伤害
	PropertyAddTwoValue   :number; //属性添加值
	PropertyAddThreeType  :number; //属性添加类型:1灵石2食物3木材4铁矿5仙玉6门派贡献值7威望值8正义值9邪恶值10修为值11道行12灵力13根骨14体魄15身法16悟性17福缘18资质19人族伤害20妖族伤害21仙族伤害22鬼族伤害23魔族伤害24龙族伤害
	PropertyAddThreeValue :number; //属性添加值
	PropertyAddFourType   :number; //属性添加类型:1灵石2食物3木材4铁矿5仙玉6门派贡献值7威望值8正义值9邪恶值10修为值11道行12灵力13根骨14体魄15身法16悟性17福缘18资质19人族伤害20妖族伤害21仙族伤害22鬼族伤害23魔族伤害24龙族伤害
	PropertyAddFourValue  :number; //属性添加值
}

//书籍技能
export interface SkillConfigType extends ConfigType {
	SkillType  :number; //技能类型(2秘籍3真诀4心经5遁术6绝学7残页8招式)
	AddType    :number; //增加属性类型(1灵力2根骨3体魄4身法)
	StageLevel :number; //门派技能品阶
	StageName :string;  //门派技能品阶名称
	FengshuiType :number; //门派技能风水类型
	FengshuiName :string; //门派技能风水名称
	Cost       :number; //学习消耗门派贡献值
}

//门派招式
export interface SectBattleSkillCfgType extends ConfigType {
    HurtAdd:number; //招式伤害加成
}

//机器人
export interface BattleAiCfgType extends ConfigType {
    Desc         :string; //简介
	RacialType   :number; //种族类型1人族2妖族3仙族4鬼族5魔族6龙族
	XiuweiStage  :number; //修为阶段
	Lingli       :number; //灵力
	Gengu        :number; //根骨
	Tipo         :number; //体魄
	Shenfa       :number; //身法
	HurtAdd      :number; //伤害加层
	HurtReduce   :number; //伤害减免
	GroupStyleId :number; //门派招式ID
	HurtRenzu    :number; //人族伤害
	HurtYaozu    :number; //妖族伤害
	HurtXianzu   :number; //仙族伤害
	HurtGuizu    :number; //鬼族伤害
	HurtMozu     :number; //魔族伤害
	HurtLongzu   :number; //龙族伤害
}

//镇妖塔层级
export interface MonsterTowerCfgType extends ConfigType {
    Desc        :string; //简介
	LowStage    :number; //挑战的最低修为
	RewardId    :number; //奖励表ID
	HelpOneId   :number; //助战机器人1ID
	HelpTwoId   :number; //助战机器人2ID
	HelpThreeId :number; //助战机器人3ID
	HelpFourId  :number; //助战机器人4ID
	HelpFiveId  :number; //助战机器人5ID
	BattleOneId :number; //对战机器人1ID
	BattleTwoId :number; //对战机器人2ID
	BattleThreeId :number; //对战机器人3ID
	BattleFourId  :number; //对战机器人4ID
	BattleFiveId  :number; //对战机器人5ID
}

//战斗奖励
export interface BattleAwardCfgType extends ConfigType {
	OneType   :number; //奖励1类型 1-物品2-装备
	OneId     :number; //奖励1ID
	OneNum    :number; //奖励1数量
	TwoType   :number; //奖励2类型 1-物品2-装备
	TwoId     :number; //奖励2ID
	TwoNum    :number; //奖励2数量
	ThreeType :number; //奖励3类型 1-物品2-装备
	ThreeId   :number; //奖励3ID
	ThreeNum  :number; //奖励3数量
	FourType  :number; //奖励4类型 1-物品2-装备
	FourId    :number; //奖励4ID
	FourNum   :number; //奖励4数量
}
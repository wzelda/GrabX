
export interface ViewConfig{
    Key: string,
    PkgAdrs: string,
    Pkg: string,
    Com: string
}

export const ViewKit = {
    //加载菊花
    LoadingMain: {
        Key: "LoadingMain",
        Pkg: "LoadingUI",
        Com:"LoadingMain"
    },

    //选择服务器
    ChooseService:{
        Key: "ChooseService",
        PkgAdrs: "ChooseService/ChooseService",
        Pkg: "ChooseService",
        Com:"ChooseService"
    },

    //读条进度
    LoadingProgress: {
        Key: "LoadingProgress",
        PkgAdrs: "res/LoadingUI/LoadingUI",
        Pkg: "LoadingUI",
        Com:"LoadingProgress"
    },

    //主界面
    MainMenu: {
        Key: "MainMenu",
        PkgAdrs: "res/MainMenu/MainMenu",
        Pkg: "MainMenu",
        Com:"MainMenu"
    },

    //修炼操作
    CultivationInfo: {
        Key: "CultivationInfo",
        PkgAdrs: "res/MainMenu/MainMenu",
        Pkg: "MainMenu",
        Com:"CultivationInfo"
    },

    //飘字
    TipsLabel: {
        Key: "TipsLabel",
        PkgAdrs: "Public/Public",
        Pkg: "Public",
        Com:"TipsLabel"
    },

    //飘字
    ResProductionTips: {
        Key: "ResProductionTips",
        PkgAdrs: "Adobe/Adobe",
        Pkg: "Adobe",
        Com:"ResProductionTips"
    },


    //洞府
    AdobeMain: {
        Key: "AdobeMain",
        PkgAdrs: "Adobe/Adobe",
        Pkg: "Adobe",
        Com:"AdobeMain"
    },

    //公用确认窗口
    PublicConfirmation: {
        Key: "PublicConfirmation",
        PkgAdrs: "Public/Public",
        Pkg: "Public",
        Com:"PublicConfirmation"
    },

    //洞府升级
    AdobeUpgrade: {
        Key: "AdobeUpgrade",
        PkgAdrs: "Adobe/Adobe",
        Pkg: "Adobe",
        Com:"AdobeUpgrade"
    },
    
    //加入门派
    JoinSect: {
        Key: "JoinSect",
        Pkg: "Sect",
        Com:"JoinSect"
    },
    
    //加入门派
    SectMain: {
        Key: "SectMain",
        Pkg: "Sect",
        Com:"SectMain"
    },
    
    //门派修炼塔
    TrainTower: {
        Key: "TrainTower",
        Pkg: "Sect",
        Com:"TrainTower"
    },
    
    //门派任务
    SectTask: {
        Key: "SectTask",
        Pkg: "Sect",
        Com:"SectTask"
    },

    //学习功法
    LearnKongfa: {
        Key: "LearnKongfa",
        Pkg: "Sect",
        Com:"LearnKongfa"
    },
    
    //学习功法
    UpgradeKongfa: {
        Key: "UpgradeKongfa",
        Pkg: "Sect",
        Com:"UpgradeKongfa"
    },

    //角色
    PlayerMain: {
        Key: "PlayerMain",
        Pkg: "Player",
        Com:"PlayerMain"
    },
    
    //角色属性
    PlayerAttribution: {
        Key: "PlayerAttribution",
        Pkg: "Player",
        Com:"PlayerAttribution"
    },

    //增加储物袋空间
    AddBagNum: {
        Key: "AddBagNum",
        Pkg: "Player",
        Com:"AddBagNum"
    },

    //修炼帮助
    CultivationEfficiency: {
        Key: "CultivationEfficiency",
        Pkg: "MainMenu",
        Com:"CultivationEfficiency"
    },

    //GM加物品
    GmAddBagItem: {
        Key: "GmAddBagItem",
        Pkg: "Player",
        Com:"GmAddBagItem"
    },
    
    //仙途主界面
    RoadToDietyMain: {
        Key: "RoadToDietyMain",
        Pkg: "RoadToDiety",
        Com:"RoadToDietyMain"
    },
    
    //战斗过程
    BattleInfo: {
        Key: "BattleInfo",
        Pkg: "RoadToDiety",
        Com:"BattleInfo"
    },
    
    //扫荡仙途
    SweepChapters: {
        Key: "SweepChapters",
        Pkg: "RoadToDiety",
        Com:"SweepChapters"
    },

    //镇妖塔
    MonsterTower: {
        Key: "MonsterTower",
        Pkg: "RoadToDiety",
        Com:"MonsterTower"
    },

    //镇妖塔首杀榜
    FirstBloodRank: {
        Key: "FirstBloodRank",
        Pkg: "RoadToDiety",
        Com:"FirstBloodRank"
    },

    //仙友圈
    FriendCircle: {
        Key: "FriendCircle",
        Pkg: "RoadToDiety",
        Com:"FriendCircle"
    },

    //仙途棋盘
    ChessMap: {
        Key: "ChessMap",
        Pkg: "ChessBoard",
        Com:"ChessMap"
    },
    
    //转生
    Rebirth: {
        Key: "Rebirth",
        Pkg: "MainMenu",
        Com:"Rebirth"
    },

    //门派藏经阁入口
    JingLibEntrance: {
        Key: "JingLibEntrance",
        Pkg: "Sect",
        Com:"JingLibEntrance"
    },

    //门派藏经阁
    JingLib: {
        Key: "JingLib",
        Pkg: "Sect",
        Com:"JingLib"
    },
};

export class UIConfig{
    private constructor(){}
    public static LoginPackageLoaded = false;   //是否已加载登录UI包
    
    //登录加载的UI包
    static readonly UIPkgs = [
        "Icons",
        "Public",
        "MainMenu",
    ];

    //微信小游戏子包
    static readonly SubPkgs = [
        "subLibs",
    ];

    // UI渲染分层
    static readonly SortingOrder = {
        //主界面按钮
        MainUI: 100,
        // 信息同步
        MsgSync: 150,
        // 场景加载
        SceneLoading: 200,
        // 新手引导
        NoviceGuide: 250,
        // 新功能开启
        NewFunctionOpen: 260,
        // 人物对白
        Dialog: 300,
        // 弹出窗口
        Popup: 350,
        // 全屏展示
        FullScreenShow: 450,
        // 网络信号
        NetSignal: 500,
        // 网络弹框
        NetError: 550,
        // 系统广播
        SystemMsg: 600,
        // 消息提示
        MsgTips: 650,
        // 点击特效
        ClickEffect: 700,
        // 服务器时间
        ServerTime: 1000,
        // gm指令
        GmOrder: 1001,
    };

    //Spine路径
    static readonly SpinePath = {
        Yaoyao:{
            Left:"Spine/tuzi",
            Right:"Prefab/tuzi_2",
        },
        
        Dice:"Spine/spine_saizi",
        
        Nanzhu:{
            Left:"Spine/nanzhu",
            Right:"Prefab/nanzhu_2",
        },

        Yushengyi:{
            Left:"Spine/yushengyi",
            Right:"Prefab/yushengyi_2",
        },
    };

    //声音
    static readonly SoundPath = {
        ButtonClick:"ui://Public/点击按钮",
    };

    //形象图标配置
    static readonly PortraitPath = {
        Yaoyao:'ui://Public/夭夭_全身',
    };

    //小图标配置
    static readonly SmallIconPath = {
        Yaoyao:'ui://Public/夭夭小头像',
    };

    static readonly ShareImagePath = {
        InviteFriend:'https://mmocgame.qpic.cn/wechatgame/HCloKXpYh4AIar21iavBHUs1BgS3f4uGsnYX5ibKduOiarAdgTV9GwJkStROPjbrakL/0',
    };

    //Spine动画切换
    static readonly SpineState = {
        Yaoyao:{
            Run:"run",
            Stand:"stand",
            Idle1:"idle1",
            Idle2:"idle2",
            Touch1:"touch1",
            Touch2:"touch2",
        },
    };

    //强制引导
    static readonly GuiderName = {
        RoleMenuGuide:"RoleMenuGuide",
    };

    static readonly FontColor = {
        FightRec_Me: '#FFFF00',
    };
}
import * as Common from "../Common/Common";

export default class LocalConfig {
    static readonly Cultivation_Fly_Interval = 6;    //修为飘字间隔/毫秒
    static readonly Adobe_Production_Interval = 10;    //洞府生产间隔/毫秒
    static readonly Tower_Max_Invite_Num = 4;  //镇妖塔最大可邀请数量
    static readonly Max_Ready = 8;
    static readonly Max_Level = 8;
    static readonly Max_Battle = 9;

    private constructor(){}

    static IsChoosedService = false;
    static IsSimProgressEnd = false;

    static RewardAdList = [
        'adunit-d9506b856da651d9',
        'adunit-277a1490bdd96586',
        'adunit-24c981bb6e261c12',
        'adunit-ba1474242e0b07cc',
        'adunit-5edc5256b89946ce'
    ];

    static BannerAdList = [
        'adunit-64f32ebf391a3eea',
        'adunit-f1bd97029412dc35',
        'adunit-792109fac68ef08b',
        'adunit-ed8f00dd42dd2dd8',
        'adunit-a924c296ea9b23a5'
    ];

    static readonly MiniProgramAppId = {
        Maike: 'wx6f1b9b81467cc3da',
    };

    //用户是否已授权
    static IsWxAuth = true;

    //存储用户名
    static GetAcountName(){
        return Common.getLocalStorage("AcountName") || '';
    }

    static SaveAcountName(_value){
        Common.saveLocalStorage("AcountName", _value);
    }
}

import * as Common from "../Common/Common";

let LocalConfig = {
    IsChoosedService: false,
    IsSimProgressEnd: false,

    RewardAdList: [
        'adunit-d9506b856da651d9',
        'adunit-277a1490bdd96586',
        'adunit-24c981bb6e261c12',
        'adunit-ba1474242e0b07cc',
        'adunit-5edc5256b89946ce'
    ],

    BannerAdList: [
        'adunit-64f32ebf391a3eea',
        'adunit-f1bd97029412dc35',
        'adunit-792109fac68ef08b',
        'adunit-ed8f00dd42dd2dd8',
        'adunit-a924c296ea9b23a5'
    ],

    MiniProgramAppId: {
        Maike: 'wx6f1b9b81467cc3da',
    },

    //用户是否已授权
    IsWxAuth: true,

    //存储用户名
    GetAcountName(){
        return Common.getLocalStorage("AcountName") || '';
    },

    SaveAcountName(_value){
        Common.saveLocalStorage("AcountName", _value);
    }
}

export default LocalConfig;
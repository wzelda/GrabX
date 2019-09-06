import LocalConfig from "../Config/LocalConfig";
import * as Manager from "../Manager/Manager";
import * as Data from "../Data/Data";
import * as Config from "../Config/Config";
import * as Common from "../Common/Common";

//计算功法总人物属性
export function calcKfAddAttr(kfLevel:number, kfStage:number, fsAdd:number){
    return kfStage * (kfLevel + fsAdd);
}

//计算功法总风水加成
export function calcKfAddFengshui(kfStage:number, fsAdd:number){
    return kfStage * fsAdd;
}
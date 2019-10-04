//计算功法总人物属性
export function calcKfAddAttr(kfLevel, kfStage, fsAdd) {
    return kfStage * (kfLevel + fsAdd);
}
//计算功法总风水加成
export function calcKfAddFengshui(kfStage, fsAdd) {
    return kfStage * fsAdd;
}

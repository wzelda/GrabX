import LocalConfig from "../Config/LocalConfig";
import * as Core from "./Core";
import * as Common from "../Common/Common";
import * as Config from "../Config/Config";
export class ChooseServiceController extends Core.Controller {
    onCreate() {
        this.SortingOrder(Config.UIConfig.SortingOrder.NetSignal);
    }
    onOpen(data) {
        this.addButtonLisenter(this.View.Local, this.openLocalService);
        this.View.AccountName.text = LocalConfig.GetAcountName();
    }
    openLocalService() {
        let account = this.View.AccountName.text;
        if (typeof (account) == 'string' && account.length > 0) {
            Config.NetConfig.TempName = account;
            LocalConfig.SaveAcountName(account);
        }
        Config.NetConfig.RequestUrl = Config.NetConfig.LocalRequestUrl;
        this.close();
    }
    openHttpService() {
        Config.NetConfig.RequestUrl = Config.NetConfig.HttpRequestUrl;
        this.close();
    }
    openLocalWechatService() {
        Config.NetConfig.RequestUrl = Config.NetConfig.LocalWechatRequestUrl;
        console.log('请求地址：', Config.NetConfig.RequestUrl);
        this.close();
    }
    onClose() {
        LocalConfig.IsChoosedService = true;
        this.dispatchEvent(Common.SceneLoginEid.ServiceChoosed);
    }
}

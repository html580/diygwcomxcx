import polyfill from 'assets/plugins/polyfill'
import WxValidate from 'helpers/WxValidate'
import HttpResource from 'helpers/HttpResource'
import HttpService from 'helpers/HttpService'
import WxService from 'helpers/WxService'
import Tools from 'helpers/Tools'
import Config from 'config/config'

App({
    onLaunch() {
        console.log('onLaunch')
    },
    onShow() {
        console.log('onShow')
    },
    onHide() {
        console.log('onHide')
    },
    getUserInfo() {
        if (this.globalData.userInfo) {
            return this.globalData.userInfo;
        } else {
            return this.WxService.login().then(data => {
                return this.WxService.getUserInfo();
            }).then(data => {
                this.globalData.userInfo = data.userInfo;
                return this.globalData.userInfo;
            })
        }
    },
    globalData: {
        userInfo: null,
        tabBar:["/pages/error/index","/pages/error/index","/pages/error/index","/pages/error/index","/pages/error/index"]
    },
    navigateTo(url,param){
      	if (!url.startsWith("/pages/")){
    		   url="/pages/"+url+"/index";
    	}
        if (this.globalData.tabBar.indexOf(url) != -1) {
            this.WxService.switchTab({
                url: url
            });
        } else {
          	this.WxService.navigateTo(url, param);
        }
    },
    renderUrl(url, defaultUrl) {
      if (!url || url=="") {
        url = defaultUrl;
      }
      if (url.indexOf("/pages/" + url) != 0) {
        url = "/pages/" + url + "/index";
      }
      return url;
    },
    renderImage(path) {
        if (!path) return ''
        if (path.indexOf('http') !== -1) return path
        return `${this.Config.fileBasePath}${path}`
    },
    WxValidate: (rules, messages) => new WxValidate(rules, messages),
    HttpResource: (url, paramDefaults, actions, options) => new HttpResource(url, paramDefaults, actions, options).init(),
    HttpService: new HttpService,
    WxService: new WxService,
    Tools: new Tools,
    Config: Config,
})
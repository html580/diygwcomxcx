const App = getApp()

Page({
data: {
     },
showModal(message) {
   App.WxService.showModal({
    	title: '友情提示',
    	content: message,
    	showCancel: !1,
   });
},
onLoad(option) {
	if (option){
      this.setData({
         globalOption: option
      })
    }
},
navigateTo(e) {
    App.navigateTo(e.currentTarget.dataset.url,e.currentTarget.dataset);
}

})

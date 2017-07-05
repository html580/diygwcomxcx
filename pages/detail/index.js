const App = getApp()

Page({
data: {
          msgs1:[],
msgsPage1:1,
msgsTotalPage1:1,
msgsPageDirection1:'down',
msgsHasNext1:true
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
     this.getMsgs1();
},
navigateTo(e) {
    App.navigateTo(e.currentTarget.dataset.url,e.currentTarget.dataset);
},
getMsgs1(){
	  //调用数据
      let param = {
          formid:'790815',
          dashboardid:'1236',
          page:this.data.msgsPage1,
          row:5
      };
      if (this.data.globalOption && this.data.globalOption.zdys){
        param = App.Tools.extend(param, App.Tools.fromJson(this.data.globalOption.zdys));
      }
      App.HttpService.getData(param).then(data=>{
	        if(data.status == 'success'){
	          data.rows.forEach(n =>{
	          	n.url = App.renderUrl(n.url,'details');
	          	n.thumb_url = App.renderImage(n.name_807009);
	          });
	          this.setData({
	          	  msgsPage1:this.data.msgsPage1+1,
	              msgs1: data.rows
	          });
	        }else{
	          this.showModal(data.message);
	        }
      });
},
onPullDownRefreshMsg1(){
  if (!this.data.msgsHasNext1) return;
  this.setData({
       msgsPageDirection1: 'up'
  }); 
  this.getMsgs1();
},
onReachBottomMsg1() {
    if (!this.data.msgsHasNext1) return;
    this.setData({
       msgsPageDirection1: 'down'
    }); 
    this.getMsgs1();
}
,
onPullDownRefresh(){
this.onPullDownRefreshMsg1();
},
onPullDownRefresh(){
this.onReachBottomMsg1();
}
})

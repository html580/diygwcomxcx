const App = getApp()

Page({
data: {
          tabsActiveIndex1:0,
zdys1:{},
tabs1:[],
tabspage1:1,
     msgs2:[],
msgsPage2:1,
msgsTotalPage2:1,
msgsPageDirection2:'down',
msgsHasNext2:true
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
     this.getTabs1();
},
navigateTo(e) {
    App.navigateTo(e.currentTarget.dataset.url,e.currentTarget.dataset);
},
getTabs1(page){
	  //调用数据
      App.HttpService.getData({
          formid:'944597',
          dashboardid:'1236',
          page:this.data.tabspage1,
          row:6
      }).then(data=>{
	        if(data.status == 'success'){
	          this.setData({
	          	  zdys1:{name_453443:data.rows[0].id},
	          	  tabspage1:this.data.tabspage1+1,
	              tabs1: data.rows
	          });
	          this.getChildData1();
	        }else{
	          this.showModal(data.message);
	        }
     });
},
tabClick1: function (e) {
	const dataset = e.currentTarget.dataset;
	var zjson= App.Tools.fromJson(dataset.zdys);
    this.setData({
    	tabsActiveIndex1: dataset.id,
        zdys1:zjson
    });
    this.getChildData1();
},
getChildData1() {
    
this.getChildData12();
},
getMsgs2(){
	  //调用数据
	  let param = {
          formid:'790815',
          dashboardid:'1236',
          page:this.data.msgsPage2,
          row:6
      };
      param =App.Tools.extend(param,this.data.zdys1);
      App.HttpService.getData(param).then(data=>{
	        if(data.status == 'success'){
	          data.rows.forEach(n =>{
	          	n.url = App.renderUrl(n.url,'details');
	          	n.thumb_url = App.renderImage(n.name_807009);
	          });
	          let msgs2 = this.data.msgs2;
	          if (this.data.msgsPageDirection2=='up'){
                 msgs2 = data.rows.concat(msgs2);
              }else{
                 msgs2 = msgs2.concat(data.rows);
              }
	          this.setData({
	          	  msgsTotalPage2:data.totalPage,
	          	  msgsPage2:this.data.msgsPage2+1,
	          	  msgsHasNext2:data.totalPage>=this.data.msgsPage2+1,
	              msgs2: msgs2
	          });
	        }else{
	          this.showModal(data.message);
	        }
      });
},
onPullDownRefreshMsg2(){
  if (!this.data.msgsHasNext2) return;
  this.setData({
       msgsPageDirection2: 'up'
  }); 
  this.getMsgs2();
},
onReachBottomMsg2() {
    if (!this.data.msgsHasNext2) return;
    this.setData({
       msgsPageDirection2: 'down'
    }); 
    this.getMsgs2();
},
getChildData12() {
	this.setData({
		msgs2:[],
        msgsPage2: 1
    }); 
    this.getMsgs2();
}
,
onPullDownRefresh(){
this.onPullDownRefreshMsg2();
},
onPullDownRefresh(){
this.onReachBottomMsg2();
}
})

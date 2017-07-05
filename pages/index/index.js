const App = getApp()

Page({
data: {
          swipers1:[],
     grids2:[],
gridsPage2:1,
gridsTotalPage2:1,
gridsPageDirection2:'down',
gridsHasNext2:true,
     msgs3:[],
msgsPage3:1,
msgsTotalPage3:1,
msgsPageDirection3:'down',
msgsHasNext3:true
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
     this.getSwipers1();
     this.getGrids2();
     this.getMsgs3();
},
navigateTo(e) {
    App.navigateTo(e.currentTarget.dataset.url,e.currentTarget.dataset);
},
getSwipers1(){
	  //调用数据
      //调用数据
	  let param = {
          formid:'370896',
          dashboardid:'1236',
          row:6
      };
      if (this.data.globalOption && this.data.globalOption.zdys){
         param = App.Tools.extend(param, App.Tools.fromJson(this.data.globalOption.zdys));
      }
      App.HttpService.getData(param).then(data=>{
	        if(data.status == 'success'){
	          data.rows.forEach(n =>{
	          	n.url = App.renderUrl(n.url,'about');
	          	n.thumb_url = App.renderImage(n.name_842187);
	          });
	          this.setData({
	              swipers1: data.rows
	          });
	        }else{
	          this.showModal(data.message);
	        }
      });
},
getGrids2(){
	  //调用数据
	  let param = {
          formid:'944597',
          dashboardid:'1236',
          page:this.data.gridsPage2,
          row:6
      };
      if (this.data.globalOption && this.data.globalOption.zdys){
        param = App.Tools.extend(param, App.Tools.fromJson(this.data.globalOption.zdys));
      }
      App.HttpService.getData(param).then(data=>{
	        if(data.status == 'success'){
			  data.rows.forEach(n =>{
	          	n.url = App.renderUrl(n.url,'detail');
	          	n.thumb_url = App.renderImage(n.name_937247);
	          });
	          this.setData({
	          	  gridsPage2:this.data.gridsPage2+1,
	              grids2: data.rows
	          });
	        }else{
	          this.showModal(data.message);
	        }
      });
},
getMsgs3(){
	  //调用数据
      let param = {
          formid:'790815',
          dashboardid:'1236',
          page:this.data.msgsPage3,
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
	          	  msgsPage3:this.data.msgsPage3+1,
	              msgs3: data.rows
	          });
	        }else{
	          this.showModal(data.message);
	        }
      });
},
onPullDownRefreshMsg3(){
  if (!this.data.msgsHasNext3) return;
  this.setData({
       msgsPageDirection3: 'up'
  }); 
  this.getMsgs3();
},
onReachBottomMsg3() {
    if (!this.data.msgsHasNext3) return;
    this.setData({
       msgsPageDirection3: 'down'
    }); 
    this.getMsgs3();
}
,
onPullDownRefresh(){
this.onPullDownRefreshMsg3();
},
onPullDownRefresh(){
this.onReachBottomMsg3();
}
})

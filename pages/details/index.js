const App = getApp()

Page({
data: {
          rowdata1:[]
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
     this.getRowdata1();
},
navigateTo(e) {
    App.navigateTo(e.currentTarget.dataset.url,e.currentTarget.dataset);
},
getRowdata1(){
	  //调用数据
	  let param = {
          formid:'790815',
          dashboardid:'1236'
      };
      param =App.Tools.extend(param,this.data.globalOption);
      //调用数据
      App.HttpService.getData(param).then(data=>{
	        if(data.status == 'success'){
			  data.rows.forEach(n =>{
				 	n.name_807009Url= App.renderImage(n.name_807009)
	          });
	          this.setData({
	              rowdata1: data.rows
	          });
	        }else{
	          this.showModal(data.message);
	        }
      });
}

})

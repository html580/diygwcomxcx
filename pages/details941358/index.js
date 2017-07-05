const App = getApp()

Page({
data: {
          rowdata1:[],
     grids1:[]
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
     this.getGrids1();
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
},
getGrids1(){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/assets/images/heart.png',url:App.renderUrl('empty','index'),title:'人气：2899'},
	  	 {thumb_url:'/assets/images/r02.jpg',url:App.renderUrl('empty','index'),title:'赞：399'},
	  	 {thumb_url:'/assets/images/star.png',url:App.renderUrl('empty','index'),title:'收藏：200'}
	  ];
      this.setData({
          grids1: datas
      });
}

})

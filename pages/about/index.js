const App = getApp()

Page({
data: {
          grids1:[],
     msgs1:[]
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
     this.getGrids1();
     this.getMsgs1();
},
navigateTo(e) {
    App.navigateTo(e.currentTarget.dataset.url,e.currentTarget.dataset);
},
getGrids1(){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/assets/images/dollar.png',url:App.renderUrl('link','index'),title:'待支付'},
	  	 {thumb_url:'/assets/images/flow_.png',url:App.renderUrl('link','index'),title:'待收货'},
	  	 {thumb_url:'/assets/images/certificate.png',url:App.renderUrl('link','index'),title:'已完成'},
	  	 {thumb_url:'/assets/images/order.png',url:App.renderUrl('link','index'),title:'全部订单'}
	  ];
      this.setData({
          grids1: datas
      });
},
getMsgs1(){
	  //调用数据
	  var datas=[
	  	 {thumb_url:'/assets/images/1443584408064043342.png',url:App.renderUrl('link','index'),title:'购物车',desc:'说明文字'},
	  	 {thumb_url:'/assets/images/1443585779204202237.png',url:App.renderUrl('link','index'),title:'优惠券',desc:'说明文字'},
	  	 {thumb_url:'/assets/images/1443586061863736586.png',url:App.renderUrl('link','index'),title:'积分卡',desc:'说明文字'},
	  	 {thumb_url:'/assets/images/1443584373727011961.png',url:App.renderUrl('link','index'),title:'用户中心',desc:'请输入内容描述'},
	  	 {thumb_url:'/assets/images/1443586300343329180.png',url:App.renderUrl('link','index'),title:'联系我们',desc:'请输入内容描述'}
	  ];
      this.setData({
          msgs1: datas
      });
}

})

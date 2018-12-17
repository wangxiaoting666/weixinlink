//index.js
//获取应用实例
var app = getApp();
var cardTeams;

Page({
  data: {
    cardTeams: [{
      "viewid": "1",
      "imgsrc": "../../images/win/1.jpg",
      "price": "¥1245",
      "count": "一个40岁老码农的总结，",
      "name": "一个40岁老码农的总结，奋斗",

    }, {
      "viewid": "2",
      "imgsrc": "../../images/win/2.jpg",
      "price": "¥2345",
      "count": "小公司打杂三年，意外拿到",
      "name": "小公司打杂三年，意外拿到美",

    }, {
      "viewid": "3",
      "imgsrc": "../../images/win/3.jpg",
      "price": "¥2345",

      "count": "作为一个有追求的前端程序媛作",
      "name": "作为一个有追求的前端程序媛",

    }, {
      "viewid": "4",
      "imgsrc": "../../images/win/4.jpg",
      "price": "¥2345",
      "count": "女程序媛面试总结：我",
      "name": "女程序媛面试总结：我是这",

    },
    {
      "viewid": "5",
      "imgsrc": "../../images/win/5.jpg",
      "price": "¥2345",
      "count": "前端工作那些年，怎么避？",
      "name": "前端工作那些年，怎么避免",

    }]
  },


  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../weixinlink/weixinlink'
      //  url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad:' + app.globalData.domain)

  }


})
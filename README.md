# 新功能：个人小程序直接打开公众号链接
在此之前，想要从小程序里面跳转一个链接，要使用```web-view```才可以，而且个人
```<web-view src="https://www.baidu.com/"></web-view>```放心你没有看错就这么一行就行了

但是有一定的局限性
1：前段时间，微信正式宣布为方便开发者灵活配置小程序，小程序现开放内嵌 Web 页面能力，但这个开放的能力也具有一定的局限性，小程序如果想要内嵌网页，那域名只能是自己公司的，对这个网站拥有控制权才可以。

2：如果：```“ 个人类型与海外类型的小程序暂不支持使用。”```
你需要先配置业务域名，但是个人类型的小程序，还不支持这个功能。

随着小程序不断的发展，现在个人的小程序也开放了很多功能了，个人小程序直接打开公众号链接。在群里看到的一款小程序，点击可以直接阅读文章了，所以琢磨了一下，写了一些源码。


主要代码：
```
<web-view src="https://mp.weixin.qq.com/s?__biz=MzI2ODUxMzg4Nw==&mid=2247485016&idx=1&sn=e5f60600ea30f669264ddcf5db4fb080&chksm=eaef2168dd98a87ead60eed0f24e799c1befbfe95e341231216af72315c33a56839f92e69ef9&token=29762947&lang=zh_CN#rd"></web-view>
```

为了达到效果，更加具体的demo
效果如下
github地址：https://github.com/wangxiaoting666/weixinlink

![](https://upload-images.jianshu.io/upload_images/5640239-53f7740dc0495806.gif?imageMogr2/auto-orient/strip)

weixin.wxml
```
<navigator url="/pages/search/search" hover-class="changestyle">
  <view class="view-search">
    <input class="input" placeholder-class="input-placeholder" placeholder="输入文章和链接" bindinput="bindSearchInput" />
    <image class="button" src="/images/search.png" bindtap="tapSearch" />
  </view>
</navigator>

<view class="container">
  <view wx:for="{{cardTeams}}" wx:key="{{cardTeam.viewid}}" wx:for-item="cardTeam" class="item" bindtap="bindViewTap">
    <image class="img" src="{{cardTeam.imgsrc}}" mode="scaleToFill"></image>
    <view class="number-wrapper">
      <text class="name">{{cardTeam.name}}</text>
      <view class="count-wrapper">
        <text class="count">{{cardTeam.count}}</text>
      </view>
    </view>
  </view>
</view>
```
weixin.wxss
```
.container {
  padding-top: 0;
}

.item {
  width: 100%;
  height: 220rpx;
  position: relative;
  display: flex;
  margin: 10rpx 10rpx;
  border-bottom: 1px solid rgb(197, 199, 199);
}

.item:first-child {
  margin-top: 0;
}

.item .remove {
  width: 60px;
  height: 100%;
  background-color: red;
  position: absolute;
  top: 0;
  right: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item .number-wrapper {
  height: 100%;
  padding-top: 40rpx;
  flex-direction: column;
  justify-content: space-between;
}

.item .ok {
  width: 60px;
  height: 100%;
  padding-right: 20rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #98f5ff;
}

.item .img {
  width: 150rpx;
  height: 150rpx;
  padding: 20rpx;
}

.number-wrapper .name {
  margin: 10rpx 10rpx 10rpx 10rpx;
  font-size: 39rpx;
  overflow: hidden;
}

.number-wrapper .count-wrapper {
  display: flex;
  align-items: center;
  margin-left: 10rpx;
  font-size: 25rpx;
}

.number-wrapper .count-wrapper .decrease-btn {
  font-size: 30rpx;
}

.number-wrapper .count-wrapper .increase-btn {
  font-size: 30rpx;
}

.number-wrapper .count-wrapper .count {
  margin: 0 1rpx 0 1rpx;
  font-size: 30rpx;
}

.number-wrapper .price-wrapper .people {
  margin-left: 250rpx;
  font-size: 30rpx;
}

/* 搜索框样式 */

.view-search {
  display: flex;
  flex-direction: row;
  height: 70rpx;
  margin: 20rpx;
  padding: 5rpx;
  border: 1px #e4e2e2 solid;
  border-width: thin;
  align-items: center;
}

.input {
  flex: 1;
  height: 60rpx;
}

.input-placeholder {
  color: #999;
}

.button {
  width: 60rpx;
  height: 60rpx;
}

```
weixin.js
```
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

      }
    ]
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../weixinlink/weixinlink'
     
    })
  },
  onLoad: function() {
    console.log('onLoad:' + app.globalData.domain)

  }


})
```
文章界面
weixinlink.wxml
```
<web-view src="https://mp.weixin.qq.com/s?__biz=MzI2ODUxMzg4Nw==&mid=2247485427&idx=1&sn=ebfb8851c6cbb0d40c93f8ecbda83687&chksm=eaef20c3dd98a9d5a19f5ad195888c603c8c819021bab602d11f9aa757b66475d39d23f664c4&token=1408526571&lang=zh_CN#rd"></web-view>
```
> 原文作者：祈澈姑娘 技术博客：[https://www.jianshu.com/u/05f416aefbe1](https://link.jianshu.com?t=http%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%253A%2F%2Fwww.jianshu.com%2Fu%2F05f416aefbe1)
> 90后前端妹子，爱编程，爱运营，爱折腾。
坚持总结工作中遇到的技术问题，坚持记录工作中所所思所见，对于博客上面有不会的问题，可以加入qq群聊来问我：473819131。




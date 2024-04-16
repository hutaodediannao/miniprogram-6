// index.js
Page({
  handle() {
    console.log("bindTap ok! 跳转到我的页面")
    wx.navigateTo({
      url: '../me/me',
    })
  },

  toTipsPage() {
    console.log("bingTap ok, 跳转到tips页面")
    wx.navigateTo({
      url: '../tip/tip',
    })
  },

  toScrollPage(v) {
    console.log("进入可滑动页面:" + v)
    wx.navigateTo({
      url: '../scroll/scroll',
    })
  }
})
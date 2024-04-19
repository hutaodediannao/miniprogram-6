const common = require('../../manager/common.js')
const app = getApp()

Page({
  data: {
    cusWidth: 300,
    renderHeight: 0,
    title: '自定义头部内容',
    _ls: [{
        mobile: 'OPPO',
        checked: false
      },
      {
        mobile: 'NOKIA',
        checked: false
      },
      {
        mobile: 'XIAOMI',
        checked: false
      }
    ],
    get ls() {
      return this._ls
    },
    set ls(value) {
      this._ls = value
    },
    dji: ['MAVIC-3PRO', 'AIR-3', 'MINI-4PRO']
  },
  onLoad() {
    console.log("onLoad 开始执行")
  },
  onShow() {
    console.log("onShow 开始执行")
    const renderHeight = this.getRenderViewHeight()
    this.setData({
      renderHeight: renderHeight
    })
  },
  onReady() {
    console.log("onReady 开始执行")
  },
  onHide() {
    console.log("onHide 开始执行")
  },
  onUnload() {
    console.log("onUnload 开始执行")
  },
  ck(v) {
    wx.showToast({
      title: '消息提示',
      duration: 2000
    })
  },

  getWindowInf(v) {
    const screenHeight = wx.getWindowInfo().screenHeight
    const screenWidth = wx.getWindowInfo().windowWidth
    const statusBarHeight = wx.getWindowInfo().statusBarHeight
    console.log(`screenHeight=${screenHeight}, screenWidth=${screenWidth}, statusBarHeight=${statusBarHeight}`)
  },

  updateView(v) {
    console.log("updateView====> " + v)
    this.setData({
      cusWidth: this.data.cusWidth + 10
    })
  },

  getRenderViewHeight(v) {
    const statusHeight = wx.getWindowInfo().statusBarHeight
    const windowHeight = wx.getWindowInfo().screenHeight
    const navHeight = common.getNavHeight()
    const renderHeight = windowHeight - statusHeight - navHeight
    console.log("成功获取renderView高度：" + renderHeight)
    return renderHeight
  },

  pageHandCompentEvent(v){
    console.log("tips页面获取到控件传递来的数据")
    const result = v.detail.index
    console.log(result)
    wx.showToast({
      title: 'ok',
      duration:2000
    })
  }
})
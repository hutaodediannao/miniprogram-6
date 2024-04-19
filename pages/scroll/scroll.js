// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    len: 0,
    defaultAge: 30
  },

  /**
   * 添加新用户
   * @param {*} v 
   */
  add(v) {
    var person = {
      name: "erbi",
      age: this.data.defaultAge + this.data.items.length
    }
    var ls = this.data.items
    ls.push(person)
    this.setData({items:ls})
    console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("onPullDownRefresh")
    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 3000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
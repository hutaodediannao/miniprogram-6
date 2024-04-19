// pages/cssPage/cssPage.js
const common = require('../../manager/common')

Page({
    test(v) {
        wx.showToast({
            title: 'ok',
            duration: 2000
        })
    },
    /**
     * 页面的初始数据
     */
    data: {
        pageContentHeight: common.getPageContentHeight(),
        rootWidth: wx.getWindowInfo().screenWidth - 40,
        w: 0,
        a: 50,
        b: 100,
        h() {
            return 100
        }
    },

    jiSuan(v) {
        let query = wx.createSelectorQuery().in(this)
        query.select('.root').boundingClientRect()
        query.exec(res => {
            let w = res[0].width
            let h = res[0].height
            console.log("w=" + w + ", h=" + h)
            this.setData({
                w: w
            })
        })
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

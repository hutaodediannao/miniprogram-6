// pages/userApi/userApi.js
const common = require('../../manager/common.js')
Page({

    verifyFinger(e) {
        wx.startSoterAuthentication({
            requestAuthModes: ['fingerPrint'],
            challenge: '123456',
            authContent: '叼毛,请用指纹解锁',
            success(res) {
                console.log('verifyFinger', res)
            }
        })
    },
    chooseavatar(e) {
        console.log("获取图片路径", e)
        let avatar = e.detail.avatarUrl
        this.setData({
            avatar: avatar
        })
    },
    getMyPhoneNumber(e) {
        console.log("getMyPhoneNumber")
        console.log(e.detail.code)  // 动态令牌
        console.log(e.detail.errMsg) // 回调信息（成功失败都会返回）
        console.log(e.detail.errno)  // 错误码（失败时返回）

    }, /**
     * 页面的初始数据
     */
    data: {
        pageContentHeight: common.getPageContentHeight(),
        avatar: null
    },
    getUser(v) {
        console.log('getUser')
        wx.getUserInfo({
            success(res) {
                console.log(res)
            },
            fail(res) {
                console.log(res)
            },
            complete(res) {
                console.log(res)
            }
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

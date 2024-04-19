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
        },
        ls: [
            {
                imgSrc: 'https://t12.baidu.com/it/app=106&f=JPEG&fm=30&fmt=auto&u=1837051489%2C232947512?w=312&h=208&s=BFBA6F81CC32008C60AC41DA0300E093',
                title: "古力娜扎一袭白色珍珠长裙尽显上围好身材"
            },
            {
                imgSrc: 'https://t10.baidu.com/it/app=106&f=JPEG&fm=30&fmt=auto&u=1991577619%2C232905711?w=312&h=208&s=3C0897576362510DD47DD3F90300402D',
                title: "娜扎紫粉裙惊艳亮相，初恋般心动如何复制？穿搭秘诀大公..."
            },
            {
                imgSrc: 'https://t10.baidu.com/it/app=106&f=JPEG&fm=30&fmt=auto&u=3307472601%2C232933489?w=312&h=208&s=16A3D705360617515C80FDAD0300F005',
                title: "古力娜扎蓝色深V流苏长裙绝色佳人"
            },
            {
                imgSrc: 'https://t12.baidu.com/it/app=106&f=JPEG&fm=30&fmt=auto&u=1837051489%2C232947512?w=312&h=208&s=BFBA6F81CC32008C60AC41DA0300E093',
                title: "古力娜扎一袭白色珍珠长裙尽显上围好身材"
            },
            {
                imgSrc: 'https://t10.baidu.com/it/app=106&f=JPEG&fm=30&fmt=auto&u=1991577619%2C232905711?w=312&h=208&s=3C0897576362510DD47DD3F90300402D',
                title: "娜扎紫粉裙惊艳亮相，初恋般心动如何复制？穿搭秘诀大公..."
            },
            {
                imgSrc: 'https://t10.baidu.com/it/app=106&f=JPEG&fm=30&fmt=auto&u=3307472601%2C232933489?w=312&h=208&s=16A3D705360617515C80FDAD0300F005',
                title: "古力娜扎蓝色深V流苏长裙绝色佳人"
            },
        ]
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

// index.js
const common = require('../../manager/common.js')

Page({
    timeEvent() {
        wx.navigateTo({
            url: '../timePage/timePage',
            success(res) {
                console.log(res)
            }
        })

    }, workThread() {
        wx.navigateTo({
            url: '../workPage/workPage'
        })
    },

    filePage() {
        wx.navigateTo({
            url: '../fileHandle/fileHandle'
        })
    },
    toSwitchCustomTabPage() {
        wx.navigateTo({
            url: '../customTab/customTab',
        })

    },
    toSwitchTabPage() {
        wx.switchTab({
            url: '../tbHome/tbHome',
            success(res) {
                console.log(res)
            }
        })
    },
    toDataPage() {
        wx.navigateTo({
            url: '../dataStore/dataStore',
            success(res) {
                console.log(res)
            }
        })
    },
    toMyPage() {
        let jsonParam = JSON.stringify(this.data.params)
        wx.navigateTo({
            url: '../myPage/myPage?params=' + jsonParam,
        })
    },
    data: {
        title: '主页',
        bgc: 'red',
        bg: '#ffffff',
        pageHeight: 0,
        params: {
            p0: 3,
            p1: 5,
            title: '标题头参数'
        }
    },
    handle() {
        console.log("bindTap ok! 跳转到我的页面")
        wx.navigateTo({
            url: '../me/me',
        })
    },

    toTipsPage() {
        console.log("bingTap ok, 跳转到tips页面")
        // wx.navigateTo({
        //   url: '../tip/tip',
        // })
        this.pageRouter.navigateTo({
            url: '../tip/tip'
        })
    },

    toScrollPage(v) {
        console.log("进入可滑动页面:" + v)
        wx.navigateTo({
            url: '../scroll/scroll',
        })
    },

    viewMeasure(v) {
        console.log("view计算测试")
        wx.navigateTo({
            url: '../api/api',
        })
    },

    toQrCode(v) {
        console.log("qrCode")
        wx.navigateTo({
            url: '../qrCode/qrCode',
        })
    },

    wxApi(v) {
        console.log("wxApi")
        wx.navigateTo({
            url: '../userApi/userApi',
        })
    },

    cssPage(v) {
        wx.navigateTo({
            url: '../cssPage/cssPage',
        })
    },

    onShow() {
        console.log("onShow()")
        const pageContentHeight = common.getPageContentHeight()
        console.log("pageContentHeight =====> " + pageContentHeight)
        this.setData({
            pageHeight: pageContentHeight
        })
    }
})

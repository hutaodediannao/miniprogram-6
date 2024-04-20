import {getPageContentHeight} from "../../manager/common";

Page({

    add() {
        wx.setStorageSync("key", {
            p: 100,
            k: "hello, weixin",
            v: true
        })
        this.que()
    },

    del() {
        wx.removeStorage({
            key: "key",
            success: res => {
                console.log(res)
            },
            fail: err => {
                console.log(err)
            },
            complete: () => {
                console.log("complete")
                this.que()
            }
        })

    },

    upd() {
        wx.setStorageSync("key", {
            p: 100,
            k: "hello, 修改成功",
            v: true
        })
        this.que()
    },

    que() {
        let result = wx.getStorageSync("key").k
        this.setData({
            result: result
        })
        console.log("que", result);
    },

    data: {
        pageContentHeight: getPageContentHeight(),
        result: null
    },

    onLoad: function (options) {

    },

    onShow: function () {
        this.que()
    }
});

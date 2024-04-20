import {getPageContentHeight} from "../../manager/common";

Page({
    handleMathResult(v) {

        let pages = getCurrentPages()
        let cup = pages[pages.length - 1];//当前页面
        let prevPage = pages[pages.length - 2];//上一个页面
        //开始传递数据给上一个页面
        prevPage.setData({
            result: this.data.par.k0 + this.data.par.k1
        })
        wx.navigateBack()
    },
    data: {
        height: getPageContentHeight(),
        par: null
    },
    onLoad: function (options) {
        let par = JSON.parse(options.parKey)
        console.log("mathPage", par.k0 + ", " + par.k1)
        this.setData({
            par: par
        })
    }
});

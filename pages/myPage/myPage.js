import {getPageContentHeight} from "../../manager/common";

Page({
    data: {
        getPageContentHeight: getPageContentHeight(),
        params: null,
        result: null,
        par: {
            k0: 100,
            k1: 200
        }
    },
    getPageCallback() {
        console.log('getPageCallback', "getPageCallback开始执行");
        let par = JSON.stringify(this.data.par)
        wx.navigateTo({
            url: '../mathPage/mathPage?parKey=' + par
        })
    },
    onLoad: function (options) {
        let params = JSON.parse(options.params);
        this.setData({
            params: params
        })
        console.log("mypage", params);
    }
});

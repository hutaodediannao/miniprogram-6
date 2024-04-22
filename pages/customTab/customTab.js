import {getPageContentHeight} from "../../manager/common";

Page({
    data: {
        height: getPageContentHeight(),
        tabItem: null,
        bg(item) {
            console.log('bg item===========> ', item)
            if (item == null) return 'red'
            switch (item.text) {
                case '主页':
                    return 'blue'
                case '场景':
                    return 'green'
                case '我的':
                    return 'orange'
            }
            return "yellow"
        }
    },

    callbackEvent(e) {
        console.log('customTab页面收到: callbackEvent事件开始触发', e)
        this.setData({
            tabItem: e.detail
        })
    },

    onLoad: function (options) {

    },

    onShow: function () {
        console.log('custom', "onShow方法开始执行")


    }
});

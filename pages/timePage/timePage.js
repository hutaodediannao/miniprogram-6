Page({

    clearTimeInterval() {
        clearInterval(this.data.intervalId);

    }, timeInterval() {
        let intervalId = setInterval((v) => {
            let date = new Date();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            console.log('当前时间为：', timeStr);
            let hourStr, minuteStr, secondStr;
            if (hour < 10) {
                hourStr = '0' + hour;
            }else{
                hourStr = hour;
            }
            if (minute < 10) {
                minuteStr = '0' + minute;
            }else
                minuteStr = minute;
            if (second < 10) {
                secondStr = '0' + second;
            } else {
                secondStr = second;
            }
            let timeStr = hourStr + ':' + minuteStr + ':' + secondStr;
            this.setData({
                timeStr: timeStr
            })
        }, 1000, "key")
        this.setData({
            intervalId: intervalId
        })
    },

    clearTimeEvent() {
        clearTimeout(this.data.timeId)
    },

    setTimeEvent() {
        let timeId = setTimeout(this.timeEvent, 3000, "hello, timeEvent")
        this.setData({
            timeId: timeId
        })
    },

    timeEvent(par) {
        console.log(par)
    },

    data: {
        timeStr: null
    },
    onLoad: function (options) {

    }
});

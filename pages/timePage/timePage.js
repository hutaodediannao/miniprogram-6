Page({

    clearTimeInterval() {
        clearInterval(this.data.intervalId);

    }, timeInterval() {
        let intervalId = setInterval((v) => {
            console.log(v);
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
        index: 0
    },
    onLoad: function (options) {

    }
});

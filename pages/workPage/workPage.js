Page({
    recycleWorker() {
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
            console.log("worker 销毁完成...");
        } else {
            console.log("worker 为null, 无需销毁");
        }
    },

    createWorker() {
        this.worker = wx.createWorker('workers/request/index.js')
        wx.showToast({
            title: '创建worker成功',
            duration: 2000,
            success(res) {
                console.log(res)
            },
            fail(res) {
                console.log(res)
            }
        })

        this.worker.onMessage(result => {
            console.log("接收到任务线程发来的消息: ", result)
        })
    },

    sendMsg() {
        console.log("Sending message...");
        this.worker.postMessage({
            msg: 'Hello HuTao, this is worker, you are very beautiful!',
            msg2: this.getLongTimeData()
        })
    },

    getLongTimeData() {
        //...很耗时
        return "ok";
    },

    data: {},

    onLoad: function (options) {

    },

    onStop: function (options) {
        if (this.worker) {
            this.worker.terminate()
            this.worker = null
        }
    }

});

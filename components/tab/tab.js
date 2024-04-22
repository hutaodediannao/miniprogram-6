Component({
    properties: {
        arr: {
            type: Array,
            value: []
        }
    },
    data: {},
    methods: {
        itemClick(e) {
            let item = e.currentTarget.dataset.item
            console.log('itemClick=====>', item)
            const len = this.data.arr.length
            let arr = this.data.arr
            for (let i = 0; i < len; i++) {
                arr[i].selected = false
            }
            arr[item].selected = true
            this.setData({
                arr: arr
            })

            console.log('itemClick', '开始触发triggerEvent事件...')
            //开始出发回调事件给父控件(page页面), 并传递点击下标参数
            this.triggerEvent('meEvent', arr[item])
            console.log('itemClick', 'triggerEvent事件执行完成')
        }

    },
    lifetimes: {
        created() {
            console.log("组件tab的 created 开始执行...")
        },
        attached() {
            console.log("组件tab的 attached开始执行...")
        },
        ready() {
            console.log("组件tab的 ready 开始执行...")
            //首次加载数据,默认显示第一页的数据
            this.triggerEvent('meEvent', this.data.arr[0])
        },
        moved() {
            console.log("组件tab的 moved 开始执行...")
        },
        detached() {
            console.log("组件tab的 detached 开始执行...")
        },
        error() {
            console.log("组件tab的 attached开始执行...")
        }
    }
});

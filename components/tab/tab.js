Component({
    properties: {},
    data: {
        arr: [
            {
                icon: '../../img/home.png',
                selectIcon: "../../img/homeS.png",
                text: '主页',
                selected: true,
                textColor: '#000000',
                textSelectedColor: '#ffffff',
                getTextColor(e) {
                    console.log(e)
                    if (this.selected)
                        return this.textSelectedColor
                    else
                        return this.textColor
                }
            },
            {
                icon: '../../img/scene.png',
                selectIcon: "../../img/sceneS.png",
                text: '场景',
                selected: false,
                textColor: '#000000',
                textSelectedColor: '#ffffff',
                getTextColor(e) {
                    console.log(e)
                    if (this.selected)
                        return this.textSelectedColor
                    else
                        return this.textColor
                }
            },
            {
                icon: '../../img/me.png',
                selectIcon: "../../img/meS.png",
                text: '我的',
                selected: false,
                textColor: '#000000',
                textSelectedColor: '#ffffff',
                getTextColor(e) {
                    console.log(e)
                    if (this.selected)
                        return this.textSelectedColor
                    else
                        return this.textColor
                }
            }
        ]

    },
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
        }
    }
});

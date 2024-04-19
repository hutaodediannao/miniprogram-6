// components/device-card/device-card.js
Component({
  options: {
    multipleSlots: true //复数插槽:是
  },
  /**
   * 组件的属性列表
   */
  properties: {
    ls: {
      type: Array,
      value: []
    },
    dji: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    butnName:'发射数据给页面',
    result: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(v) {
      const values = v.detail.value
      console.log(values)

      const myLs = this.properties.ls
      const len = myLs.length
      const vlen = values.length

      for (var i = 0; i < len; i++) {
        myLs[i].checked = false
        for (var j = 0; j < vlen; j++) {
          if (myLs[i].mobile == values[j]) {
            myLs[i].checked = true
          }
        }
      }
      //传递到data
      this.setData({
        ls:myLs
      })

      console.log(this.data.ls)
    },

    send(e) {
      console.log('send...')
      console.log(this.data.result)
      const pm = e.currentTarget.dataset
      console.log(pm)
      //传递事件到父控件
      this.triggerEvent('handCompentEvent', pm)
    }
  },

  //监听器设置
  observers: {
    'ls': function (v) {
      console.log("开始监听")
      console.log(v)
      console.log("监听数据over")
    }


  }
})
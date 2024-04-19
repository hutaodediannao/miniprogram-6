// components/header/header.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    titleContent: {
      type: String,
      value: "空白"
    },
    hidden: {
      type:Boolean,
      value:false
    },
    backgroundColor:{
      type: String,
      value: '#000000'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    titleName: '控件标题',
    height: 0,
    statusBarHeight: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _goback() {
      console.log("_goback 开始执行")
      wx.navigateBack()
    }
  },

  lifetimes: {
    created() {
      console.log("组件Header的 created 开始执行...")
      const menu = wx.getMenuButtonBoundingClientRect()
      const statusBarHeight = wx.getWindowInfo().statusBarHeight
      const height = menu.height + (menu.top - statusBarHeight) * 2
      console.log("胶囊高度为：height ====> " + height)
      this.setData({
        height: height,
        statusBarHeight: statusBarHeight
      })
    },
    attached() {
      console.log("组件Header的attached开始执行...")
    },
    ready() {
      console.log("组件Header的 ready 开始执行...")
    },
    moved() {
      console.log("组件Header的 moved 开始执行...")
    },
    detached() {
      console.log("组件Header的 detached 开始执行...")
    },
    error() {
      console.log("组件Header的attached开始执行...")
    }
  }
})
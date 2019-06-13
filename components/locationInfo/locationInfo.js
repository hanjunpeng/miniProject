import { message } from '../../utils/interface.js'
Component({
  data: {
    local: '地址',
    state: false
  },
  methods: {
    // 子组件向父组件传递
    handleProps () {
      let obj = { name: 'hjp', childer: 'wh' }
      this.triggerEvent('myevent', obj, { bubbles: true })
    },
    location () {
      this.getLocation()
    },
    getLocation () {
      wx.getLocation({
        success: item => {
          console.log(item)
        },
        fail: err => {
          this.showSettingToast('需要授权位置信息')
        }
      })
    },
    showSettingToast (str) {
      wx.showModal({
        title: '提示',
        confirmText: '去设置',
        showCancel: false,
        content: str,
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../seting/seting',
            })
          }
        }
      })
    },
    init () {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userLocation']) { // 如果授权 直接获取位置
            this.getLocation()
          } else { // 如果没有就弹框授权
            wx.authorize({
              scope: 'scope.userLocation',
              success: e => {
                this.getLocation()
              }
            })
          }
        }
      })
    }
  },
  ready () {
    this.init()
  }
})
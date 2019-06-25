Page({
  data: {
    userinfo: {
      avatarUrl: '/static/me/unlogin.png',
      nickName: '点击登录',
    },
    state: true,
    childProps: {}
  },
  // 接收子组件传递的参数
  onMyevent (obj) {
    this.setData({
      childProps: obj.detail
    })
  },
  onLoad: function () {
    this.init()
  },
  // 点击登录
  onGotUserInfo (e) {
    if (!e.detail.userInfo) {
      this.setData({ state: true })
    } else {
      this.setData({ state: false })
      this.getUserInFo()
    }
  },
  getPhoneNumber (e) {
    if (e.detail.errMsg.indexOf('access denied') > 0) {
      wx.showModal({
        title: '领取失败',
        content: '该小程序不能授权',
        showCancel: false,
        confirmText: '返回授权'
      })
    }
  },
  requestData (e) {
    if (e) {
      let str = 'userinfo.avatarUrl'
      let nick = 'userinfo.nickName'
      this.setData({
        [str]: e.avatarUrl,
        [nick]: e.nickName,
      })
    }
  },
  getUserInFo () {
    wx.getUserInfo({
      lang: 'zh_CN',
      success: e => {
        if (e.userInfo) {
          this.requestData(e.userInfo)
        }
      }
    })
  },
  handleLogin () {
    wx.login({
      success (res) {
        console.log('login',res)
      }
    })
  },
  checkLogin () {
    let _this = this
    wx.checkSession({
      success () {
        console.log('已登录')
      },
      fail () {
        _this.handleLogin()
      }
    })
  },
  init () {
    this.checkLogin()
    // 查看用户是否授权信息
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.userInfo']) { // 如果没有授权用户信息
          this.setData({ state: true })
        } else {
          this.setData({ state: false })
          this.getUserInFo()
        }
      }
    })
  }
})
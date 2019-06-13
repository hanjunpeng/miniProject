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
  init () {
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
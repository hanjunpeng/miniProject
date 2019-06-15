Page({
  data: {
    src: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ]
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo');
  },
  // 获取视频
  bindButtonTap () {
    var that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        console.log(res)
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindInputBlur (e) {
    this.inputValue = e.detail.value
  },
  // 发送弹幕
  bindSendDanmu () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  }
})
function getRandomColor () {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    console.log(color)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
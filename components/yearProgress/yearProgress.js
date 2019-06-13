Component({
  data: {
    year: new Date().getFullYear(),
    days: '',
    perNum: ''
  },
  methods: {
    // 获取每年总共多少天
    _getDayOfYear() {
      return this._isLeapYear() ? 366 : 365
    },
    _isLeapYear() {
      const year = new Date().getFullYear()
      if (year % 400 === 0) {
        return true
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true
      } else {
        return false
      }
    },
    // 获取过去天数
    _getDays () {
      let start = new Date()
      start.setMonth(0)
      start.setDate(1)
      let offset = new Date().getTime() - start.getTime()
      let days = parseInt(offset / 1000 / 60 / 60 / 24) + 1
      this.setData({
        days: days
      })
    },
    // 获取天数百分比
    _getPercent () {
      let per = (this.data.days * 100 / this._getDayOfYear()).toFixed(1)
      this.setData({
        perNum: per
      })
    }
  },
  ready() {
    this._getDays()
    this._getPercent()
  }
})
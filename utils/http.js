// 工具函数库
import config from '../config.js'
import { message } from './interface.js'

// http get post工具函数 获取数据
export function get (url, data) {
  return request(url, 'GET', data)
}
export function post (url, data) {
  return request(url, 'POST', data)
}

function request (url, method, data, header = {}) {
  // 缺少登录token 随后加上
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: config.host + url,
      success: res => {
        if (res.data.code === 0) {
          resolve(res.data)
        } else {
          message('失败', res.data.msg)
          return false
        }
      }
    })
  })
}

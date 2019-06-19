//app.js App()注册一个小程序
import { get, post} from './utils/http.js'

App({
  onLaunch: function () {
    
  },
  // 注册到全局
  axios: {
    get: get,
    post: post
  }
})
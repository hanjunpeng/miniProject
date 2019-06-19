const app = getApp();
Page({
  data: {

  },
  handleRequest () {
    app.axios.get('/user').then(res => {
      console.log(res)
    })
  }
})
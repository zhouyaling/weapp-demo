//index.js
//获取应用实例，全局的
const app = getApp()

// Page函数用来注册一个页面，接受object类型参数，指定页面的初始数据、生命周期回调、事件处理函数等。
// 通过wx.canIUse(String)判断小程序的API，回调，参数，组件等是否在当前版本可用
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies: [],
  },
  // 生命周期回调、监听页面加载
  onLoad: function() {
    this.setData({
      movies: app.douban.cacheData
    })
    if (app.globalData.userInfo) {
      // 改变数据，可以不用在data中先定义
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 点击"立即体验"事件处理函数
  // switchTab 跳转到包含tabbar的页面；navigateTo 保留当前页，跳转到指定页面
  bindHandleStart: function() {
    wx.switchTab({
      url: '../board/board'
    })
  },
  // 加载音乐函数
  loadMusicInfo: function() {
    const backgroundAudioManager = wx.getBackgroundAudioManager()

    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '许巍'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
  },
})
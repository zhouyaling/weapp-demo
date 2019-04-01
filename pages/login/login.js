// pages/login/login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //授权按钮
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 页面是否显示授权按钮
    showButton: false,
    // 页面来源
    fromPage: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getAuthitySetting();
    console.log(options);
    this.setData({
      fromPage: options.page || 'index',
    });
  },

  /* 判断是否已经授权 */
  getAuthitySetting: function() {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo;
              this.pageGo();
            }
          })
        }else{
          this.setData({showButton:true});
        }
      },
      error: function() {

      }
    })
  },

  // 授权事件
  bindgetUserInfo: function(event) {
    if (!event.detail.userInfo) {
      return;
    } else {
      app.globalData.userInfo = event.detail.userInfo;
      wx.setStorage({
        key: 'allUserInfo',
        data: event.detail.userInfo,
      })
      this.pageGo();
    }
  },

  // 页面跳转
  pageGo: function() {
    switch (this.data.fromPage) {
      case "board":
        wx.switchTab({
          url: '../board/board',
        });
      case "index":
        wx.redirectTo({
          url: '../index/index',
        });
      case "logs":
        wx.switchTab({
          url: '../logs/logs',
        });
      default:
        break;
    }
  }
})
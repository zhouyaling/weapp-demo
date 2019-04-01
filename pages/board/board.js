// pages/board/list.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 先关推荐
    boards: [{
      key: 'in_theaters'
    }],

    // 头条
    hotBoards: [{
      "image": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544313786.jpg",
      "description": "放大法煎熬了房间爱见佛大方几哦啊UFO啊u"
    }, {
        "image": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544313786.jpg",
      "description": "放大法煎熬了房间爱见佛大方几哦啊UFO啊u"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '拼命加载中...'
    })
    this.setData({
      boards: app.douban.boards,
      loading: false
    })
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
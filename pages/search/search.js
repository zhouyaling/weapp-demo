// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    size: 20,
    subtitle: '请在此输入搜索内容',
    movies: [],
    search: '',
    loading: false,
    hasMore: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    
    console.log("上啦刷新");
    var currPage = this.data.page + 1;
    this.setData({
      page: currPage
    });
    this.onPageShow();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 搜索列表
  loadMore: function(arr) {
    this.setData({
      loading: false,
      hasMore: false,
      movies: this.data.movies.concat(arr)
    });
  },

  // 下拉加载
  onPageShow: function() {
    this.setData({
      subtitle: '加载中...',
      hasMore: true,
      loading: true
    });
    if (this.data.page <= 2) {
      wx.showLoading({ title: '拼命加载中...' });
      var page2Result = [{
        name: '结果7'
      }, {
        name: '结果8'
      }, {
        name: '结果9'
      }];
      this.loadMore(page2Result);
      wx.hideLoading();
    } else {
      this.setData({
        hasMore: false,
        loading: false
      });
    }
  },


  // 输入框搜索函数
  handleSearch: function(e) {
    if (!e.detail.value) return;
    this.setData({
      movies: [],
      page: 1
    });
    this.setData({
      subtitle: '加载中...',
      hasMore: true,
      loading: true,
      search: e.detail.value
    });

    var searchResult = [{
      name: '结果1'
    }, {
      name: '结果2'
    }, {
      name: '结果3'
    }, {
      name: '结果4'
    }, {
      name: '结果5'
    }, {
      name: '结果6'
    }];

    this.loadMore(searchResult);

  }
})
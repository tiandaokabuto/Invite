// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: [
      {
        //time: '20xx-xx-xx xx:xx:xx',
        time: 1532519734589, // 时间戳
        title: '海边随拍',
        src: 'http://localhost:3000/1.mp4'
      },
      {
        time: '20xx-xx-xx xx:xx:xx',
        title: '勿忘心安',
        src: 'http://localhost:3000/1.mp4'
      },
      {
        time: '20xx-xx-xx xx:xx:xx',
        title: '点滴记忆',
        src: 'http://localhost:3000/1.mp4'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
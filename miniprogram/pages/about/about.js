// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  showQrcode() {
    wx.previewImage({
      urls: ['https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/myQrCode/money.jpg?sign=0148353eddb814548368e3db70dd26ee&t=1614000653'],
      current: 'https://6865-helloyun-4ge5h4wyc91f5778-1304890457.tcb.qcloud.la/myQrCode/money.jpg?sign=0148353eddb814548368e3db70dd26ee&t=1614000653' // 当前显示图片的http链接      
    })
  },
  data: {

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
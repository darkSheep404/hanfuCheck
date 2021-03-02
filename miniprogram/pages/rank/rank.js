// miniprogram/pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankList:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;//进入云函数中this发生了变化,使用this.setData({})无效
    wx.cloud.callFunction({
          // 云函数名称
          name: 'get_rank_list',
        //成功后执行
          success: function (res) {
            //提取数据--返回的数据为res.result.云函数处定义的字段名.data
            var data = res.result.rankList.data 
            //此处为了简略代码,删去了else情况的操作
            that.setData({
              rankList: data
            })
          },
          fail: console.error
        })
      
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
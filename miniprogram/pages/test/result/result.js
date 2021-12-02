// miniprogram/pages/test/result/result.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      testId:"001",
      // 组件取到了这里的testId而非组件自身定义的
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    //wx.setNavigationBarTitle({ title: options.testId }) // 动态设置导航条标题
    let wrongList = JSON.parse(options.wrongList);
    let chooseValue = JSON.parse(options.chooseValue);
    this.setData({
      questionList: app.globalData.questionList["001"],
      testId:options.testId,
      totalScore: options.totalScore,
      wrongList: wrongList,
      chooseValue: chooseValue
    })
    console.log(this.data.chooseValue);
  },
  toView: function () {
    this.setData({
      modalShow: true
    })
  },
  // 返回首页
  toIndex: function () {
    wx.navigateTo({
      url: '../home',
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
// miniprogram/pages/admin/adminLogin/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:null,
    password:null,
    checkres:null
  },
  nameInput(e) {
    this.setData({
      username: e.detail.value
    })
    console.log(this.data.username)
  },
  passwordInput(e){
    this.setData({
      password: e.detail.value
    })
  },
  submit:function(){
    //判定成功,跳转回管理员页
    var that=this
    wx.cloud.callFunction({
      name: 'check_admin',
      data: {
        username: that.data.username,
        password:that.data.password,
      },
      complete: res => {
       that.setData({
         checkres:res.result
       })
       if(that.data.checkres.res){
        wx.navigateTo({
          url: '/pages/admin/home',
        })
      }
      else
      //跳转回主页面
      {
       that.setData({
        loadModal:true
       })
      }
      },
    })
  },
  hideModal:function(e){
    this.setData({
      loadModal:false
    })
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
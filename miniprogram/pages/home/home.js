const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storelist: [ {_id: "3f1780f4603144780151fc2e5c318e46", beizhu: "均价:  300元。\n特点：平价店，大店，种类款式多，有男款", storeName: "重回汉唐",official:true}],
    storeName:null,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
    var that = this 
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
      },
      fail: function () {
        that.userInfoAuthorize()
      }
    })
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

  },
  userInfoAuthorize: function () {
    var that = this
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) { // 存储用户信息
          wx.getUserInfo({
            success: res => {
              console.log(res.userInfo.nickName)
              wx.setStorage({
                key: app.globalData.userInfo,
                data: res.userInfo,
              })
              //userinfo:用户信息，不含openid等敏感数据
              app.globalData.wechatNickName = res.userInfo.nickName
              app.globalData.wechatAvatarUrl = res.userInfo.avatarUrl
              //app.globalData.wechatOpenid = res.userInfo.openid
            }
          })
        } else { // 跳转到授权页面 
          wx.navigateTo({
            url: '/pages/authorize/authorize',
          })
        }
      }
    })
  },
  getStorelist:function(){
    var that = this
    wx.showLoading({
      title: '查询中',
    })
    wx.cloud.callFunction({
      // 云函数名称
      name: 'get_store_byName',
      data:{
       storeName:that.data.storeName
      },
      success: function (res) {
        //提取数据
        var data = res.result.storelist.data
        console.log(res)
        for (let i = 0; i < data.length; i++) {
          console.log(data[i])
        }
        wx.hideLoading()
        that.setData({
          storelist: data
        })
      },
      fail: console.error
    })
  },
  input: function (e) {
    this.setData({
      storeName: e.detail.value
    })
    console.log("输入事件")
    console.log(this.data.storeName)
  },
})
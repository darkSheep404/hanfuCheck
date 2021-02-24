const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    included:true,
    storelist: [ {_id: "3f1780f4603144780151fc2e5c318e46", beizhu: "均价:  300元。\n特点：平价店，大店，种类款式多，有男款", storeName: "重回汉唐",official:true}],
    storeName:null,
    userInfo: {},
    hasUserInfo: false,
    tips:null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
//tipname
console.log("---------------->")
    wx.cloud.callFunction({
      name:'get_tips',
     data:{
       tipname:"hometips"
      },
      success:function(res)
      {

        var data=res.result.tips.data
        that.setData({
          tips:data[0].tips
        })
        console.log(data[0].tips)
      }
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

  },
  
  getStorelist:function(){
    var that = this
    var query="/"+that.data.storeName+"/i"
    console.log(query)
    /*wx.showLoading({
      title: '查询中',
    })*/
    that.setData({
      loadModal:true
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
        /*for (let i = 0; i < data.length; i++) {
          console.log(data[i])
        }*/
        //wx.hideLoading()

        if(data.length>0){
        that.setData({
          loadModal:false,
          storelist: data
        })}
        else
        {
          //TODO 未查询到数据时:更新字符串,显示未查询到的提示语
          that.setData({
            loadModal:false,
            storelist: data,
            included:false,
          })
        }
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
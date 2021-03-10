// miniprogram/pages/admin/tips/tips.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    picker: ['主页', '提交页','关于页'],
    currentTips:"hometips",
    index:null,
    tips:null,
  },
  submit:function (){
    var that = this
     //触发事件时就弹出加载框且disabled按钮
    that.setData({
      isDisabled:true,
      loadModal: true
    })
   //传参:id,和山正和备注
   wx.cloud.callFunction({
    // 云函数名称
    name: 'update_tips_byId',
  //携带的参数:xx--云函数中使用event.xx获取
    data:{
     id:that.data.currentTips,
     tips:that.data.tips,
    }, 
    success:function(res)
    {
      setTimeout(()=> {
        that.setData({
          loadModal: false
        })
        console.log("提交修改")
       //回到上级页面--关于页面
        wx.navigateBack({
        delta: 1
      })
      }, 400)
      
    }
  })
  },
  beizhuInput(e) {
    this.setData({
     tips: e.detail.value
    })
  },
  PickerChange(e) {
    console.log(e);
    var that=this
    if(e.detail.value==="0")
    {
      this.setData({
        index: e.detail.value,
        currentTips:"hometips"
      })
    }
    else if(e.detail.value==="1"){
      this.setData({
        index: e.detail.value,
        currentTips:"correcttips"
      })
    }
    else
    {
      this.setData({
        currentTips:"abouttips",
        index: e.detail.value
      })
    }
    wx.cloud.callFunction({
      name:'get_tips',
     data:{
       tipname:that.data.currentTips
      },
      success:function(res)
      {
        var data=res.result.tips.data
        that.setData({
          tips:data[0].test
        })
        console.log(data[0].tips)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:'get_tips',
     data:{
       tipname:that.data.currentTips
      },
      success:function(res)
      {
        var data=res.result.tips.data
        that.setData({
          tips:data[0].test
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

  }
})
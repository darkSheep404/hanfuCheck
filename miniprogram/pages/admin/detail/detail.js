// miniprogram/pages/admin/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker: ['山', '正'],
    beizhu:"无",
    id:null,
    official:null,
    storeName:"",
    isDisabled:false,
  },
 beizhuInput(e) {
    this.setData({
      beizhu: e.detail.value
    })
  },
  //根据所选项更新山正布尔值
  PickerChange(e) {
    console.log(e);
    if(e.detail.value==="0")
    {
      this.setData({
        index: e.detail.value,
        official:false
      })
    }
    else if(e.detail.value==="1"){
      this.setData({
        index: e.detail.value,
        official:true
      })
    }
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
    name: 'update_store_byId',
  //携带的参数:xx--云函数中使用event.xx获取
    data:{
     id:that.data.id,
     beizhu:that.data.beizhu,
     official:that.data.official,
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;//进入云函数中this发生了变化,使用this.setData({})无效
    that.setData({
      id:options.id,
    })
    wx.cloud.callFunction({
          // 云函数名称
          name: 'get_store_byId',
        //携带的参数:storeName--云函数中使用event.storeName获取
          data:{
           id:options.id
          },
        //成功后执行
          success: function (res) {
            var data = res.result.storelist.data 
            console.log(data)
            that.setData({
              //加载中
              loadModal:false,
              storeName:data.storeName,
              beizhu:data.beizhu,
              official:data.official
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
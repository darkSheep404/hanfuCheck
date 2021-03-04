// miniprogram/pages/admin/list/list.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    included:true,
    storelist: [ {_id: "3f1780f46031242d0151f5055e4bdea8", beizhu: "均价:  300元。\n特点：平价店，大店，种类款式多，有男款", storeName: "重回汉唐",official:true}],
    id:null,
    currentId:null,
  },
  onItemClick: function (e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset.id,
    })
  },
  onItemPress:function (e) {
    this.setData({
      loadModel:true,
      currentId:e.currentTarget.dataset.id
    })
    console.log("长安--->",e.currentTarget.dataset.id)
  },
  hideModal:function(e){
    this.setData({
      loadModel:false,
    })
  },
  delItem:function(e){
    var that=this
    console.log("确认--->",that.data.currentId)
    wx.cloud.callFunction({
      // 云函数名称
      name: 'del_store_byId',
    //携带的参数:storeName--云函数中使用event.storeName获取
      data:{
       id:that.data.currentId
      },
    //成功后执行
      success: function (res) {
        console.log(res)
        that.setData({
          loadModel:false
        })
        console.log("删除了一个店铺数据")   
      },
      fail: console.error
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
    var that=this;//进入云函数中this发生了变化,使用this.setData({})无效
    wx.cloud.callFunction({
      // 云函数名称
      name: 'get_store_list',
    //携带的参数:storeName--云函数中使用event.storeName获取
    //成功后执行
      success: function (res) {
        var data = res.result.storeList.data 
        that.setData({
          //此处设置一个加载中弹窗,区分删除确认弹窗
          storelist: data
        })
      },
      fail: console.error
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

  }
})
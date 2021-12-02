// miniprogram/pages/correct/correct.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    index: null,//更改为0是否默认为山店
    picker: ['山', '正'],
    beizhu:"无",
    storeName:null,
    official:null,
    isDisabled:false,
  },
  beizhuInput(e) {
    this.setData({
      beizhu: e.detail.value
    })
  },
  nameInput(e) {
    this.setData({
      storeName: e.detail.value
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
    //删除我想知道属性，此页面仅供用户补充数据使用
    // else
    // {
    //   this.setData({
    //     index: e.detail.value,
    //     official:"我想知道"
    //   })
    // }
  },
  submit:function (){
    var that = this
    that.setData({
      isDisabled:true
    })
    //触发事件时就弹出加载框
    that.setData({
      loadModal: true
    })
    console.log(this.data.storeName,this.data.beizhu,this.data.index,this.data.official)
    wx.cloud.callFunction({
      // 云函数名称
      name: 'get_store_byName',
      data:{
        storeName:that.data.storeName
      },
      success: function (res) {
        //提取数据
        var data = res.result.storelist.data
        //如果已经存在该店铺:进入冲突数据库
        if(data.length>0 ||that.data.index==="2"){
         /*插入数据至待修改列表*/
         {
          wx.cloud.callFunction({
            name:'add_conflict_store',
            data:{
              storeName:that.data.storeName,
              beizhu:that.data.beizhu,
              official:that.data.official
            },
            success:function(res)
            {
              setTimeout(()=> {
                that.setData({
                  loadModal: false
                })
                console.log("更正")
               //回到上级页面--关于页面
                wx.navigateBack({
                delta: 1
              })
              }, 400)
              
            }
          })
          /*插入数据至商店列表*/
        }
        }
        else
        {
          wx.cloud.callFunction({
            name:'add_store',
            data:{
              storeName:that.data.storeName,
              beizhu:that.data.beizhu,
              official:that.data.official
            },
            success:function(res)
            {
              that.setData({
                loadModal: true
              })
              setTimeout(()=> {
                that.setData({
                  loadModal: false
                })
                console.log("插入成功")
               //回到上级页面--关于页面
                wx.navigateBack({
                delta: 1
              })
              }, 400)
              
            }
          })
          /*插入数据至商店列表*/
        }
      },
      fail: console.error
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.cloud.callFunction({
      name:'get_tips',
     data:{
       tipname:"correcttips"
      },
      success:function(res)
      {

        var data=res.result.tips.data
        that.setData({
          tips:data[0].test
        })
        console.log(data[0].test)
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
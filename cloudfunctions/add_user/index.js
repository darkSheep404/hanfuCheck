// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    const wxContext = cloud.getWXContext()
    console.log(event.openid,event.avatarUrl,event.nikename)
    await db.collection('user')
    .add({
      data: [
        {
          openid: wxContext.OPENID,
          unionid: wxContext.UNIONID,
          nickName: event.nikename,
          avatarUrl:event.avatarUrl,
          gender :event.gender ,//性别 0：未知、1：男、2：女
          province : event.province,
          city :event.city,
          country : event.country,
          languge: event.languge
        },
      ]
    })
   }
   catch(e){
    console.error("发生了错误:\n")
    console.error(e)
   }
}
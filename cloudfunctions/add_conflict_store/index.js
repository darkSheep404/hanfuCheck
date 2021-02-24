// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
 try{
  const wxContext = cloud.getWXContext()
  await db.collection('conflict')
  .add({
    data: [
      {
        storeName: event.storeName,
        beizhu: event.beizhu,
        official:event.official,
        contributors:wxContext.OPENID,
        contact:wxContext.UNIONID,
      },
    ]
  })
 }
 catch(e){
  console.error("发生了错误:\n")
  console.error(e)
 }
}

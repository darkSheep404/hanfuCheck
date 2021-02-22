// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const wxContext = cloud.getWXContext()
// 云函数入口函数
exports.main = async (event, context) => {
 try{
   console.log(event.storeName)
  await db.collection('hanfuStore')
  .add({
    data: [
      {
        storeName: event.storeName,
        beizhu: event.beizhu,
        official:event.official,
        contributors:wxContext.OPENID
      },
    ]
  })
 }
 catch{
  console.error(e)
 }
}

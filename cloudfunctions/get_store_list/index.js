// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event.pages)
  return {
   storeList: await db.collection('hanfuStore')
   .field({
    _id:true,
    storeName: true,
    beizhu: true,
    official:true,
  })
  //此处20*event.pages:第xx页
  .skip(event.pages*10)
   .limit(10)
   .get()
  }
}
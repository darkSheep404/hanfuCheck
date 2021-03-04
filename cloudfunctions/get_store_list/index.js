// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return {
   storeList: await db.collection('hanfuStore')
   .field({
    _id:true,
    storeName: true,
    beizhu: true,
    official:true,
  })
  //此处20*envent.pages:第xx页
  .skip(0)
   .limit(20)
   .get()
  }
}
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    console.log("获取的参数:")
    console.log(event.storeName)
  return {
    // 获取是否存在该商店
    storelist: await db.collection('hanfuStore')
    .where({
      storeName:event.storeName
    })
    .field({
      _id:true,
      storeName: true,
      beizhu: true,
      official:true,
    })
    .get()
  }
  }
  catch (e) {
    console.error(e)
  }
}
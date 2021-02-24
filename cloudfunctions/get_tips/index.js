// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    console.log("获取的参数:")
    console.log(event.tipname)
  return {
    // 获取是否存在该商店
    tips: await db.collection('tips')
    .where({
      _id:event.tipname
    })
    .field({
      _id:true,
      tips: true,
      date:true
    })
    .get()
  }
  }
  catch (e) {
    console.error(e)
  }
}
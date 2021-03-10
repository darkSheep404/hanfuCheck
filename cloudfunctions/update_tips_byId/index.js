// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    //忘记添加await导致函数未生效
    await db.collection('tips').doc(event.id).update({
      data: {
       test:event.tips
      }
    })
  } catch(e) {
    console.error(e)
  }
}
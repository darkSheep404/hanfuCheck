// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  //const wxContext = cloud.getWXContext()
  try {
    //忘记添加await导致函数未生效
    await db.collection('hanfuStore').doc(event.id).update({
      data: {
        official: event.official,
        beizhu: event.beizhu,
      }
    })
  } catch(e) {
    console.error(e)
  }
}
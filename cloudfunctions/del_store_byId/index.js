// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()


// 云函数入口函数
exports.main = async (event, context) => {
  try {
    //return回来是个啥
    console.log("传入参数",event.id)
    console.log("传入参数--->end")
    return await db.collection('hanfuStore').doc(event.id).remove()
  } catch(e) {
    console.error(e)
  }
}
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
  const test = db.command.aggregate
// 云函数入口函数
exports.main = async (event, context) => {
  
  return {
   rankList: await db.collection('user')
   .orderBy('nums', 'desc')
   .field({
     nickName: true,
     avatarUrl: true,
     nums:true,
   })
   .limit(10)
   .get()
  }
}
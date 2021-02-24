// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
  const test = db.command.aggregate
// 云函数入口函数
exports.main = async (event, context) => {
  
  return {
   rankList:db.collection('hanfuStore').aggregate()
  .group({
    _id: '$contributors',
    num: test.sum(1)
  })
  .end()
  }
}
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command
//发布后第一次修改代码
//修正const wxContext = cloud.getWXContext()放到入口函数内,外面获取不到上下文

// 云函数入口函数
exports.main = async (event, context) => {
 try{
  const wxContext = cloud.getWXContext()
  await db.collection('hanfuStore')
  .add({
    data: [
      {
        storeName: event.storeName,
        beizhu: event.beizhu,
        official:event.official,
        contributors:wxContext.OPENID,
        contact:wxContext.UNIONID,
      },
    ]
  })
  await db.collection('user').where({
    openid:wxContext.OPENID
  })
  .update({
    data: {
      // 更新字段++
      nums:_.inc(1)
    },
  })
 }
 catch(e){
  console.error("发生了错误:\n")
  console.error(e)
 }
}

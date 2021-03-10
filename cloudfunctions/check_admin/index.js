// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    console.log("获取的参数[id]:")
    console.log(event.username)
    let pwd=await db.collection('admin').where({
      _id:event.username
    }).field({
      password:true,
      _id:false
    }).get()
    if(pwd.data.length>0){
      console.log("存在此用户");
      if(pwd.data[0].password===event.password)
      {
        errmsg={res:true,
        msg:"登录成功"}
      return errmsg;
    }
      else
      {
        errmsg= {
          res:false,
          msg:"密码错误"
        }
        return errmsg;
      }
    }
    else
    {
      errmsg= {
        res:false,
        msg:"用户不存在"
      }
      return errmsg;
    };
  }
  catch (e) {
    console.error(e)
  }
}
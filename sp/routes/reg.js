const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
   
    var uname=req.query.uname;
    var upwd=req.query.upwd;
   //验证成功后插入数据
   var sql="INSERT INTO sp_user (uid,uname,upwd) VALUES (null,?,?)";
   pool.query(sql,[uname,upwd],(err,result)=>{
   // console.log(123)
       if(err) throw err;
       // console.log(result);
       if(result.affectedRows==1){
           res.send({code:1,msg:"注册成功"})
       }else{
           res.send({code:-1,msg:"注册失败"})
       }
   })
})
module.exports=router;
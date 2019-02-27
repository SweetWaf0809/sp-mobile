const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    var uname = req.query.uname;
    // var unamereg =/^[a-z0-9_]{6,12}$/i;
    // if(!unamereg.test(uname)){
    //     res.send({code:-1,msg:"用户名格式不正确"});
    // }else{
    //     res.send({code:1,msg:"用户名可使用"});
    // }
    var sql ="select count(uid) as c from sp_user where uname=?";
    pool.query(sql,[uname],(err,result)=>{
        if(err) throw err;
       // console.log(result[0].c);
        if(result[0].c == 1){
            res.send({code:-1,msg:"用户名已存在"});
            return;
        }else{
            res.send({code:1,msg:"用户名可用"});
            return;
        }
    })

 
})

module.exports=router;
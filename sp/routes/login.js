const express=require("express");
const router=express.Router();
const pool=require("../pool");
//路由
//用户登录
router.get('/',(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    //创建sql
    var sql="select count(uid) as c from sp_user where uname=? and upwd=?";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        var c = result[0].c;
        if(c == 1){
            res.send({code:1,msg:"登录成功"});
        }else{
            res.send({code:-1,msg:"用户名或密码有误"})
        }
    })
 
 })
 //用户登录post
 router.post('/user',(req,res)=>{
    var $uname=req.body.uname;
    var $upwd=req.body.upwd;
	if(!$uname){
	res.send({code:401,msg:'uname required'});
	return;
		}
		if(!$upwd){
		res.send({code:402,msg:'upwd required'});
		return;
		}
    //创建sql
    var sql="select * from sp_user where uname=? and upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
		req.session.loginUname=$uname;
		req.session.loginUid=result[0].uid;
		console.log(req.session);
            res.send({code:200,msg:"登录成功"});
        }else{
            res.send({code:301,msg:"用户名或密码有误"})
        }
			
    })
 
 })
 module.exports=router;
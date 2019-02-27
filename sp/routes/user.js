const express=require('express');
const mysql=require('mysql');
const pool=require('./pool')

//创建连接池对象

var router=express.Router();
// 用户列表
router.get('/List',(req,res)=>{
res.send('这是用户列表')
})
//删除用户列表
router.get('/deleteList',(req,res)=>{
    res.send('这是删除用户列表')
    var uid=req.query.uid;
    var sql='DELETE FROM emp WHERE uid=?';
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
})
//更改用户列表
router.get('/updateList',(req,res)=>{
    res.send('这是更改用户列表')
})
module.exports=router;
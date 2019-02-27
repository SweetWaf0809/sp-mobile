const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
router.get('/add',(req,res)=>{
    var obj=req.query;
    var $lid=obj.lid;
    var $buyCount=obj.buyCount;
    if(!obj.lid){
        res.send({code:401,msg:'lid required'});
        return;
    }
    if(!obj.buyCount){
        res.send({code:402,msg:'buyCount required'});
        return;
    }
    if(!req.session.loginUid){
        req.session.pageToJump='cart.html';
        req.session.toBuyLid=obj.lid;
        req.session.toBuyCount=obj.buyCount;
        res.send({code:300,msg:'login required'});
        return;
    }
    var sql='SELECT cid FROM sp_cart_item WHERE user_id=? AND product_id=?';
    pool.query(sql,[req.session.loginUid,$lid],(err,result)=>{
        if(err) throw err;
        var sql2;
        if(result.length>0){
            sql2=`UPDATE sp_cart_item SET count=count+1 WHERE user_id=${req.session.loginUid} AND product_id=${$lid}`;
        }else{
            sql2=`INSERT INTO sp_cart_item VALUES(NULL,${req.session.loginUid},${$lid},${buyCount},false)`;
        }
        pool.query(sql2,(err,result2)=>{
            if(err) throw err;
            if(result2.affectedRows>0){
                res.send({code:200,msg:'add suc'});
            }else{
                res.send({code:500,msg:'add err'});
            }
        })
    })
})
//购物车列表
router.get('/list',(req,res)=>{
console.log(111111111111)
    var output={};
    if(!req.session.loginUid){
        req.session.pageToJump='cart.html';
        res.send({code:300,msg:'login required'});
        return;
    }
    var sql='SELECT cid,pid,title,price,ori_price,img_url,count FROM sp_products l, sp_cart_item s WHERE l.pid=s.product_id AND user_id=?';
    pool.query(sql,[req.session.loginUid],(err,result)=>{
		console.log(req.session.loginUid)
        if(err) throw err;
        output.code=200;
		console.log(111)
		console.log(result)
			console.log(222)
        output.data=result;
		console.log(output.data)
        for(var i=0;i<output.data.length;i++){
            var lid=output.data[i].pid;
            (function(lid,i){
              pool.query('SELECT sm FROM sp_pic WHERE milk_id=? LIMIT 1',[lid],(err,result)=>{
                output.data[i].pic=result[0].sm;
              });
            })(lid,i);
        }
        setTimeout(() => {
            res.send(output);
        }, 100);
    });
});
module.exports=router;
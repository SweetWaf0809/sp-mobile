const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
  //小程序shoplist 分页显示
  //1.参数  pno  页码  pageSize页大小
  var pno=req.query.pno;
  //console.log(pno)
  var pageSize=req.query.pageSize;
  //1.2默认值
  if(!pno){
    pno=1;
  }
  if(!pageSize){
    pageSize=7;
  }
  //2.验证正则表达式
  var reg=/^[0-9]{1,}$/;
  //console.log(reg.test(pno))
  if(!reg.test(pno)){
    res.send({code:-1,msg:"页码格式不正确"});
    return;
  }
  if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小显示不正确"});
    return;
  }
  //3.创建sql
//查询总页数
var sql='SELECT count(id) as c FROM sp_shoplist';
var progress=0;//sql执行进度
obj={code:1};
pool.query(sql,(err,result)=>{
  if(err) throw err;
  var pageCount=Math.ceil(result[0].c/pageSize);
  obj.pageCount=pageCount;
  progress+=50;
  if(progress==100){
    res.send(obj);
  }
});
//查询当前页内容
var sql='SELECT id,img_url,shop_title,shop_price,new_price FROM sp_shoplist LIMIT ?,?';
var offset=parseInt((pno-1)*pageSize);
pageSize=parseInt(pageSize);
pool.query(sql,[offset,pageSize],(err,result)=>{
  if(err) throw err;
  obj.data=result;
  progress+=50;
  if(progress==100){
    res.send(obj);
  }
})
//   pool
})
module.exports=router;

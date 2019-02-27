const express=require('express');
var router=express.Router();
const pool=require("../pool");
router.get("/list",(req,res)=>{
	//按照关键词查询商品  并实现分页功能
	var kwords=req.query.kwords;
	var pno=req.query.pno;
	if(pno==undefined){ pno=0}
	//console.log(kwords);
kwords=kwords.split(" ");
var arr=kwords.map(function(){//map保护原数组返回新数组
	return " title like ? ";
})

//[title like ? , title like ? , title like ?]
var titles=arr.join(" and ");
//title like ? and title like ? and title like ?

var sql="SELECT * FROM sp_products where "+titles;
kwords.forEach(function(val,i,arr){
	kwords[i]=`%${val}%`;
});
pool.query(sql,kwords,(err,result)=>{
	if(err) throw err;

var count=result.length;
var pageCount=Math.ceil(count/8);
var products=result.slice(pno*8,pno*8+8);
//0  0
//8  1
//16 2
var output={pno,count,pageCount,products}


	res.send(output);
})
})




module.exports=router;
  
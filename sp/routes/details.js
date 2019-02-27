const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    var output={
    product:{/*title,subtitle...*/},
        pics:[/*{sm,md,lg},{sm,md,lg}*/],
        specs:[/*{lid,spec},{lid,spec}*/]
    };
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
    });
    //查询商品信息
    var lid=req.query.lid;
    if(lid!==undefined){
    var sql="select * from sp_product where lid=?";
    pool.query(sql,[lid],(err,result)=>{
        if(err) throw err;
        output.product=result[0];
        res.write(JSON.stringify(output));
        res.end();
        //查询图片列表
    var sql="select * from sp_product_pic where lid=?";
    pool.query(sql,[lid],(err,result)=>{
        if(err) throw err;
        output.pics=result;
       
    })
     //查询规格列表
     var family_id=output.product["family_id"];
    var sql="select lid,spec from sp_product where family_id=?";
    pool.query(sql,[family_id],(err,result)=>{
        if(err) throw err;
        output.specs=result;
        res.write(JSON.stringify(output));
        res.end();
    })

    })
  //sql语句
  
//   pool
}else{
    res.write(JSON.stringify(output));
        res.end();
}
})
module.exports=router;
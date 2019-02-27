const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
  //sql语句
//   pool


//首页轮播图

    var rows=[
        {id:1,img_url:"http://127.0.0.1:3000/1538012550965.jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/1542250687604.jpg"}
    ];
    res.send(rows);
})


module.exports=router;
const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
  //sql语句
//   pool


//首页轮播图

    var list=[
    { id:1, img_url:"http://127.0.0.1:3000/icons/grid-01.png",title:"整点抢购"},
    { id:2, img_url: "http://127.0.0.1:3000/icons/grid-03.png", title: "白菜专区" },
    { id:3, img_url: "http://127.0.0.1:3000/icons/grid-04.png", title: "全球购" },
    { id:4, img_url: "http://127.0.0.1:3000/icons/grid-05.png", title: "限时特卖"}
  ];
    res.send(list);
  })


module.exports=router;
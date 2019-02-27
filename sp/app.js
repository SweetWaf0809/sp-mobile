const express=require("express"); 
const session=require("express-session");
const bodyParser=require('body-parser');
var app=express();
app.use(express.static("picture"));
app.listen(3000);
const pool=require("./pool");
//引入购物车cart路由
const cart=require("./routes/cart.js")
//引入商品product路由
const products=require("./routes/product.js")
//引入sale路由
const sale=require("./routes/sale.js")
//引入shoplist路由
const shoplist=require("./routes/shoplist.js");
//引入icon路由
const icon=require("./routes/icon.js");
//引入banner路由
const banner=require("./routes/banner.js");
//引入详情页路由
const details=require("./routes/details.js");
//引入登录路由
const loginRouter = require("./routes/login.js");
//引入验证用户名路由
const existName = require("./routes/existName.js");
//引入注册路由
const regRouter = require("./routes/reg.js");
//跨域访问
//1.加载cors模块
const cors=require('cors');
//2.配置cors
app.use(cors({
    origin:["http://127.0.0.1:5500","http://localhost:5500","http://localhost:8100","http://127.0.0.1:8100"],
    credentials:true//是否验证
}));


//使用session中间件
app.use(session({
    secret:'secret',//对session id 相关的cookie进行签名
    resave:true,
    saveUninitialized:false,//是否保存未初始化的会话
    cookie:{
        maxAge:1000*60*3,//设置session的有效时间，单位毫秒
    }
}))
app.use(bodyParser.json());



//将路由器挂载到路由下
app.use('/login',loginRouter);
app.use('/existName',existName);
app.use('/reg',regRouter);
app.use('/details',details);
app.use('/getImages',banner);
app.use('/getNavImages',icon);
app.use('/shoplist',shoplist);
app.use('/sale',sale);
app.use('/products',products);
app.use('/cart',cart);


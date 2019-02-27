CREATE TABLE sp_product(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    img_url VARCHAR(255),
    price DECIMAL(10,2),
    bank INT
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO sp_product VALUES(1,'花王1','http://127.0.0.1:3000/picture/2018-12-07_211549.png',100.00,10);
INSERT INTO sp_product VALUES(2,'花王2','http://127.0.0.1:3000/picture/2018-12-07_211549.png',100.00,10);
INSERT INTO sp_product VALUES(3,'花王3','http://127.0.0.1:3000/picture/2018-12-07_211549.png',100.00,10);
INSERT INTO sp_product VALUES(4,'花王4','http://127.0.0.1:3000/picture/2018-12-07_211549.png',100.00,10);
INSERT INTO sp_product VALUES(5,'花王5','http://127.0.0.1:3000/picture/2018-12-07_211549.png',100.00,10);
INSERT INTO sp_product VALUES(6,'花王6','http://127.0.0.1:3000/picture/2018-12-07_211549.png',100.00,10);
INSERT INTO sp_product VALUES(7,'花王7','http://127.0.0.1:3000/picture/2018-12-07_211549.png',100.00,10);
INSERT INTO sp_product VALUES(8,'花王8','http://127.0.0.1:3000/picture/2018-12-07_211549.png',100.00,10);
INSERT INTO sp_product VALUES(9,'花王9','http://127.0.0.1:3000/picture/2018-12-07_211549.png',100.00,10);
INSERT INTO sp_product VALUES(10,'花王10','http://127.0.0.1:3000/picture/2018-12-07_211549.png',100.00,10);


#商品products
CREATE TABLE sp_products(
    pid INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(128),
   price DECIMAL(10,2),
   ori_price DECIMAL(10,2),
   img_url VARCHAR(128) 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO sp_products VALUES(NULL,'澳洲贝拉米3段有机奶粉900g','187.50','281.00','http://127.0.0.1:3000/15483001693586102.jpg');
INSERT INTO sp_products VALUES(NULL,'澳洲贝拉米3段有机奶粉900g','187.50','281.00','http://127.0.0.1:3000/15483001693586102.jpg');
INSERT INTO sp_products VALUES(NULL,'澳洲贝拉米3段有机奶粉900g','187.50','281.00','http://127.0.0.1:3000/15483001693586102.jpg');
INSERT INTO sp_products VALUES(NULL,'澳洲贝拉米3段有机奶粉900g','187.50','281.00','http://127.0.0.1:3000/15483001693586102.jpg');
INSERT INTO sp_products VALUES(NULL,'澳洲贝拉米3段有机奶粉900g','187.50','281.00','http://127.0.0.1:3000/15483001693586102.jpg');
INSERT INTO sp_products VALUES(NULL,'澳洲贝拉米3段有机奶粉900g','187.50','281.00','http://127.0.0.1:3000/15483001693586102.jpg');
INSERT INTO sp_products VALUES(NULL,'澳洲贝拉米3段有机奶粉900g','187.50','281.00','http://127.0.0.1:3000/15483001693586102.jpg');
INSERT INTO sp_products VALUES(NULL,'澳洲贝拉米3段有机奶粉900g','187.50','281.00','http://127.0.0.1:3000/15483001693586102.jpg');
INSERT INTO sp_products VALUES(NULL,'【包邮保税】 anello日本离家出走妈妈包乐天防盗防水大容量书包 红白拼接小号','189.00','259.00','http://127.0.0.1:3000//15396538653234836.jpg');
INSERT INTO sp_products VALUES(NULL,'【包邮保税】 anello日本离家出走妈妈包乐天防盗防水大容量书包 红白拼接小号','189.00','259.00','http://127.0.0.1:3000//15396538653234836.jpg');
INSERT INTO sp_products VALUES(NULL,'【包邮保税】 anello日本离家出走妈妈包乐天防盗防水大容量书包 红白拼接小号','189.00','259.00','http://127.0.0.1:3000//15396538653234836.jpg');
INSERT INTO sp_products VALUES(NULL,'【包邮保税】 anello日本离家出走妈妈包乐天防盗防水大容量书包 红白拼接小号','189.00','259.00','http://127.0.0.1:3000//15396538653234836.jpg');
INSERT INTO sp_products VALUES(NULL,'【包邮保税】 anello日本离家出走妈妈包乐天防盗防水大容量书包 红白拼接小号','189.00','259.00','http://127.0.0.1:3000//15396538653234836.jpg');
INSERT INTO sp_products VALUES(NULL,'【包邮保税】 anello日本离家出走妈妈包乐天防盗防水大容量书包 红白拼接小号','189.00','259.00','http://127.0.0.1:3000//15396538653234836.jpg');
INSERT INTO sp_products VALUES(NULL,'【包邮保税】 anello日本离家出走妈妈包乐天防盗防水大容量书包 红白拼接小号','189.00','259.00','http://127.0.0.1:3000//15396538653234836.jpg');
INSERT INTO sp_products VALUES(NULL,'【包邮保税】 anello日本离家出走妈妈包乐天防盗防水大容量书包 红白拼接小号','189.00','259.00','http://127.0.0.1:3000//15396538653234836.jpg');
INSERT INTO sp_products VALUES(NULL,'Aptamil爱他美 澳洲金装奶粉3段1-2岁900g','163.18','219','http://127.0.0.1:3000//15349287413231593.jpg');
INSERT INTO sp_products VALUES(NULL,'Aptamil爱他美 澳洲金装奶粉3段1-2岁900g','163.18','219','http://127.0.0.1:3000//15349287413231593.jpg');
INSERT INTO sp_products VALUES(NULL,'Aptamil爱他美 澳洲金装奶粉3段1-2岁900g','163.18','219','http://127.0.0.1:3000//15349287413231593.jpg');
INSERT INTO sp_products VALUES(NULL,'Aptamil爱他美 澳洲金装奶粉3段1-2岁900g','163.18','219','http://127.0.0.1:3000//15349287413231593.jpg');
INSERT INTO sp_products VALUES(NULL,'Aptamil爱他美 澳洲金装奶粉3段1-2岁900g','163.18','219','http://127.0.0.1:3000//15349287413231593.jpg');
INSERT INTO sp_products VALUES(NULL,'Aptamil爱他美 澳洲金装奶粉3段1-2岁900g','163.18','219','http://127.0.0.1:3000//15349287413231593.jpg');
INSERT INTO sp_products VALUES(NULL,'Aptamil爱他美 澳洲金装奶粉3段1-2岁900g','163.18','219','http://127.0.0.1:3000//15349287413231593.jpg');
INSERT INTO sp_products VALUES(NULL,'Aptamil爱他美 澳洲金装奶粉3段1-2岁900g','163.18','219','http://127.0.0.1:3000//15349287413231593.jpg');





CREATE TABLE sp_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
   uname VARCHAR(32),
   user_name VARCHAR(32),
   upwd VARCHAR(32),
   email VARCHAR(64),
   phone VARCHAR(16),
   avatar VARCHAR(128),
   gender INT
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO sp_user VALUES('null','tom','张三','123456','1648666249@qq.com','18756991193','35454646','1');
INSERT INTO sp_user VALUES('null','dingding','李四','123456','1648666249@qq.com','18756871193','35454646','1');
INSERT INTO sp_user VALUES('null','dangdang','王思聪','123456','1648666249@qq.com','18754561193','35454646','1');
INSERT INTO sp_user VALUES('null','fbb','范冰冰','123456','1648666249@qq.com','18758621193','35454646','0');
INSERT INTO sp_user VALUES('null','zhangjie','张杰','123456','1648666249@qq.com','18756123193','35454646','1');
INSERT INTO sp_user VALUES('null','xiena','谢娜','123456','1648666249@qq.com','18745644193','35454646','0');


#创建商品表shoplist
CREATE TABLE sp_shoplist(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    shop_title VARCHAR(255),
    shop_price DECIMAL(10,2),
    new_price DECIMAL(10,2)
);
INSERT INTO sp_shoplist VALUES(NULL,'http://127.0.0.1:3000/2019-01-05_101457.png','pigeon贝亲 婴儿柔湿巾10片（KA38）','3.60','1.90');
INSERT INTO sp_shoplist VALUES(NULL,'http://127.0.0.1:3000/2019-01-05_101457.png','pigeon贝亲 婴儿柔湿巾10片（KA38）','3.60','1.90');
INSERT INTO sp_shoplist VALUES(NULL,'http://127.0.0.1:3000/2019-01-05_101457.png','pigeon贝亲 婴儿柔湿巾10片（KA38）','3.60','1.90');
INSERT INTO sp_shoplist VALUES(NULL,'http://127.0.0.1:3000/2019-01-05_101457.png','pigeon贝亲 婴儿柔湿巾10片（KA38）','3.60','1.90');
INSERT INTO sp_shoplist VALUES(NULL,'http://127.0.0.1:3000/2019-01-05_101457.png','pigeon贝亲 婴儿柔湿巾10片（KA38）','3.60','1.90');
INSERT INTO sp_shoplist VALUES(NULL,'http://127.0.0.1:3000/2019-01-05_101457.png','pigeon贝亲 婴儿柔湿巾10片（KA38）','3.60','1.90');
INSERT INTO sp_shoplist VALUES(NULL,'http://127.0.0.1:3000/2019-01-05_101457.png','pigeon贝亲 婴儿柔湿巾10片（KA38）','3.60','1.90');
INSERT INTO sp_shoplist VALUES(NULL,'http://127.0.0.1:3000/2019-01-05_101457.png','pigeon贝亲 婴儿柔湿巾10片（KA38）','3.60','1.90');
INSERT INTO sp_shoplist VALUES(NULL,'http://127.0.0.1:3000/2019-01-05_101457.png','pigeon贝亲 婴儿柔湿巾10片（KA38）','3.60','1.90');


#小程序  整点抢购 sale
CREATE TABLE sp_sale(
    id INT PRIMARY KEY AUTO_INCREMENT,
    discount INT,
    sname VARCHAR(255),
    img_url VARCHAR(255),
    price DECIMAL(10,2),
    ori_price DECIMAL(10,2)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO sp_sale VALUES(NULL,4.6,'【保税区直发】LG ON:THE BODY 闪耀梦幻香水保湿润体身体乳400ml','http://127.0.0.1:3000/2019-01-26_192023.png','59.00','65.00');
INSERT INTO sp_sale VALUES(NULL,4.6,'【保税区直发】LG ON:THE BODY 闪耀梦幻香水保湿润体身体乳400ml','http://127.0.0.1:3000/2019-01-26_192023.png','59.00','65.00');
INSERT INTO sp_sale VALUES(NULL,4.6,'【保税区直发】LG ON:THE BODY 闪耀梦幻香水保湿润体身体乳400ml','http://127.0.0.1:3000/2019-01-26_192023.png','59.00','65.00');
INSERT INTO sp_sale VALUES(NULL,4.6,'【保税区直发】LG ON:THE BODY 闪耀梦幻香水保湿润体身体乳400ml','http://127.0.0.1:3000/2019-01-26_192023.png','59.00','65.00');
INSERT INTO sp_sale VALUES(NULL,4.6,'【保税区直发】LG ON:THE BODY 闪耀梦幻香水保湿润体身体乳400ml','http://127.0.0.1:3000/2019-01-26_192023.png','59.00','65.00');
INSERT INTO sp_sale VALUES(NULL,4.6,'【保税区直发】LG ON:THE BODY 闪耀梦幻香水保湿润体身体乳400ml','http://127.0.0.1:3000/2019-01-26_192023.png','59.00','65.00');
INSERT INTO sp_sale VALUES(NULL,4.6,'【保税区直发】LG ON:THE BODY 闪耀梦幻香水保湿润体身体乳400ml','http://127.0.0.1:3000/2019-01-26_192023.png','59.00','65.00');
INSERT INTO sp_sale VALUES(NULL,4.6,'【保税区直发】LG ON:THE BODY 闪耀梦幻香水保湿润体身体乳400ml','http://127.0.0.1:3000/2019-01-26_192023.png','59.00','65.00');



#商品products


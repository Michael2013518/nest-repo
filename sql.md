use practice;
CREATE TABLE IF NOT EXISTS customers ( 
id int(11) not null auto_increment comment '客户ID，自增长', 
name varchar(255) not null comment '客户姓名，非空', 
PRIMARY KEY(id) ) 
ENGINE=innodb 
DEFAULT CHARSET=utf8mb4 COMMENT='客户信息表' ;

use practice;
INSERT INTO customers (name) VALUES ('张丽娜'),('李明'),('王磊'),('赵静'),('钱伟'), ('孙芳'),('周涛'),('吴洋'),('郑红'),('刘华'), ('陈明'),('杨丽'),('王磊'),('张伟'),('李娜'), ('刘洋'),('陈静'),('杨阳'),('王丽'),('张强');

use practice;
CREATE TABLE IF NOT EXISTS orders ( id int(11) NOT NULL AUTO_INCREMENT COMMENT '订单ID，自增长', customer_id int(11) NOT NULL COMMENT '客户ID', order_date date NOT NULL COMMENT '订单日期', total_amount decimal(10, 2) NOT NULL COMMENT '订单总金额', PRIMARY KEY(id), FOREIGN KEY(customer_id) REFERENCES customers (id) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=Innodb DEFAULT CHARSET=utf8mb4 COMMENT='订单信息表';

use practice;
CREATE TABLE IF NOT EXISTS order_items ( id int(11) NOT NULL AUTO_INCREMENT COMMENT '商品ID', order_id int(11) NOT NULL COMMENT '订单ID', product_name varchar(255) NOT NULL COMMENT '商品名称', quantity int(11) NOT NULL COMMENT '商品数量', price decimal(10, 2) NOT NULL COMMENT '商品价格', PRIMARY KEY(id), FOREIGN KEY(order_id) REFERENCES orders(id) ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE=Innodb DEFAULT CHARSET=utf8mb4 COMMENT '订单商品信息表';

use practice;
INSERT INTO orders (customer_id, order_date, total_amount) VALUES (1, '2022-01-01',100.00),(1, '2022-01-02',200.00), (2, '2022-01-03',300.00),(2, '2022-01-04',400.00), (3, '2022-01-05',500.00),(3, '2022-01-06',600.00), (4, '2022-01-07',700.00),(4, '2022-01-08',800.00), (5, '2022-01-09',900.00),(5, '2022-01-10',1000.00);

use practice;
INSERT INTO order_items (order_id, product_name, quantity, price) VALUES (1, '耐克篮球鞋',1,100.00), (1, '阿迪达斯跑步鞋',2,50.00), (2, '匡威帆布鞋',3,100.00), (2, '万斯板鞋',4,50.00), (3, '新百伦运动鞋',5,100.00), (3, '彪马休闲鞋',6,50.00), (4, '锐步经典鞋',7,100.00), (5, '亚瑟士运动鞋',10,50.00), (5, '帆布鞋',1,100.00), (1, '苹果手写笔',2,50.00), (2, '电脑包',3,100.00), (3, '苹果手机',4,50.00), (4, '苹果耳机',5,100.00), (5, '苹果平板',7,100.00);
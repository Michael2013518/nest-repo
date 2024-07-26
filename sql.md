# MySQL数据库
//创建表 DDL
CREATE TABLE `hello-mysql`.`student` (
  `id` INT NULL AUTO_INCREMENT COMMENT '学生ID',
  `name` VARCHAR(45) NOT NULL,
  `age` INT NULL,
  `sex` INT NULL,
  `email` VARCHAR(60) NULL,
  `create_time` VARCHAR(45) NOT NULL,
  `status` INT NULL DEFAULT 0 COMMENT '是否删除， 0 表示未删除，1 表示已删除',
  PRIMARY KEY (`id`));

TRUNCATE TABLE `hello-mysql`.`student`; // 清空表数据
DROP TABLE `hello-mysql`.`student`; // 删除表

//增删改表 DML
INSERT INTO `hello-mysql`.`student` (`name`, `age`, `sex`, `email`, `create_time`) VALUES ('张三', '18', '1', 'zhang.san@gmail.com', '2024-07-04 22:13');

UPDATE `hello-mysql`.`student` SET `email` = 'aaxx@gmail.com' WHERE (`id` = '4');

DELETE FROM `hello-mysql`.`student` WHERE (`id` = '5');

//查询表 DQL
SELECT * FROM `hello-mysql`.`student` WHERE (`id` = '1');


use practice;
-- 创建客户信息表
CREATE TABLE IF NOT EXISTS `customers` (
	`id` int(11) not null auto_increment comment '客户ID，自增长',
    `name` varchar(255) not null comment '客户姓名，非空',
    PRIMARY KEY(`id`)
) ENGINE=innodb DEFAULT CHARSET=utf8mb4 COMMENT='客户信息表' ;

use practice;
-- 创建订单信息表
CREATE TABLE IF NOT EXISTS `orders` (
	`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单ID，自增长',
    `customer_id` int(11) NOT NULL COMMENT '客户ID',
    `order_date` date NOT NULL COMMENT '订单日期',
    `total_amount` decimal(10, 2) NOT NULL COMMENT '订单总金额',
    PRIMARY KEY(`id`),
    FOREIGN KEY(`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=Innodb DEFAULT CHARSET=utf8mb4 COMMENT='订单信息表';

-- 创建订单商品信息表
CREATE TABLE IF NOT EXISTS `order_items` (
	`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品ID',
    `order_id` int(11) NOT NULL COMMENT '订单ID',
    `product_name` varchar(255) NOT NULL COMMENT '商品名称',
    `quantity` int(11) NOT NULL COMMENT '商品数量',
    `price` decimal(10, 2) NOT NULL COMMENT '商品价格',
    PRIMARY KEY(`id`),
    FOREIGN KEY(`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=Innodb DEFAULT CHARSET=utf8mb4 COMMENT '订单商品信息表';

-- 插入客户信息表记录
INSERT INTO `customers` (`name`) 
    VALUES 
        ('张丽娜'),('李明'),('王磊'),('赵静'),('钱伟'),
        ('孙芳'),('周涛'),('吴洋'),('郑红'),('刘华'),
        ('陈明'),('杨丽'),('王磊'),('张伟'),('李娜'),
        ('刘洋'),('陈静'),('杨阳'),('王丽'),('张强');
        
-- 向 orders 表插入数据
INSERT INTO `orders` (`customer_id`, `order_date`, `total_amount`)
    VALUES
        (1, '2022-01-01',100.00),(1, '2022-01-02',200.00),
        (2, '2022-01-03',300.00),(2, '2022-01-04',400.00),
        (3, '2022-01-05',500.00),(3, '2022-01-06',600.00),
        (4, '2022-01-07',700.00),(4, '2022-01-08',800.00),
        (5, '2022-01-09',900.00),(5, '2022-01-10',1000.00);
        
-- 向 order_items 表插入数据
INSERT INTO `order_items` (`order_id`, `product_name`, `quantity`, `price`)
    VALUES
        (1, '耐克篮球鞋',1,100.00),
        (1, '阿迪达斯跑步鞋',2,50.00),
        (2, '匡威帆布鞋',3,100.00),
        (2, '万斯板鞋',4,50.00),
        (3, '新百伦运动鞋',5,100.00),
        (3, '彪马休闲鞋',6,50.00),
        (4, '锐步经典鞋',7,100.00),
        (5, '亚瑟士运动鞋',10,50.00),
        (5, '帆布鞋',1,100.00),
        (1, '苹果手写笔',2,50.00),
        (2, '电脑包',3,100.00),
        (3, '苹果手机',4,50.00),
        (4, '苹果耳机',5,100.00),
        (5, '苹果平板',7,100.00);

-- 查询每个客户的订单总金额
SELECT customers.name, SUM(orders.total_amount) AS total_amount 
FROM customers 
JOIN orders ON orders.customer_id = customers.id 
GROUP BY customers.id
ORDER BY total_amount desc LIMIT 3;

--  查询每个客户的订单总金额，并计算其占比
SELECT customers.name, SUM(orders.total_amount) / (SELECT SUM(total_amount) FROM orders) as percentage
FROM customers
JOIN orders ON customers.id = orders.customer_id
GROUP BY customers.id;

-- 查询每个客户的订单总金额，并列出每个订单的商品清单
SELECT customers.name, orders.order_date, orders.total_amount,order_items.product_name, order_items.quantity, order_items.price
FROM customers
JOIN orders ON customers.id = orders.customer_id
JOIN order_items on orders.id = order_items.order_id
ORDER BY customers.name, orders.order_date;

-- 查询每个客户的订单总金额，并列出每个订单的商品清单，同时只显示客户名字姓“张”的客户的记录：
SELECT customers.name, orders.order_date, orders.total_amount,order_items.product_name, order_items.quantity, order_items.price
FROM customers
JOIN orders ON customers.id = orders.customer_id
JOIN order_items on orders.id = order_items.order_id
WHERE customers.name LIKE '张%'
ORDER BY customers.name, orders.order_date;

-- 查询每个客户的订单总金额，并列出每个订单的商品清单，同时只显示订单日期在2022年1月1日到2022年1月3日之间的记录
SELECT customers.name, orders.order_date, orders.total_amount,order_items.product_name, order_items.quantity, order_items.price
FROM customers
JOIN orders ON customers.id = orders.customer_id
JOIN order_items on orders.id = order_items.order_id
WHERE orders.order_date BETWEEN '2022-01-01' and '2022-01-03'
ORDER BY customers.name, orders.order_date;

-- 查询每个客户的订单总金额，并计算商品数量，只包含商品名称包含“鞋”的商品，商品名用-连接，显示前 3 条记录
SELECT customers.name as customer_name,
	SUM(orders.total_amount) as total_amount, 
    COUNT(orders.id) as total_quantity, 
    GROUP_CONCAT(order_items.product_name SEPARATOR '-') as product_name
FROM customers
JOIN orders ON customers.id = orders.customer_id
JOIN order_items ON orders.id = order_items.order_id
WHERE order_items.product_name LIKE '%鞋%'
GROUP BY customers.name
ORDER BY total_amount DESC
LIMIT 3;

-- 将王磊的订单总金额打九折
SELECT * FROM orders o
 WHERE o.customer_id IN (
	SELECT id FROM customers WHERE name = '王磊'
 );
 
SET SQL_SAFE_UPDATES=0; //关闭 safe-update 模式
 UPDATE orders SET orders.total_amount = orders.total_amount * 0.9
    WHERE orders.customer_id IN (
        SELECT id FROM customers WHERE name = '王磊'
    );
 
SELECT name as 姓名, class as 班级 FROM student WHERE age >=19 AND gender = '男';
SELECT *, IF(score>=60, '及格', '不及格') AS status FROM student  WHERE age BETWEEN 18 AND 20 ;
SELECT name, score, CASE WHEN score >= 90 THEN '优秀' WHEN score >= 60 THEN '良好' ELSE '差' END AS 档次 FROM student;
        
聚合函数：用于对数据的统计，比如 AVG、COUNT、SUM、MIN、MAX。
字符串函数：用于对字符串的处理，比如 CONCAT、SUBSTR、LENGTH、UPPER、LOWER。
数值函数：用于对数值的处理，比如 ROUND、CEIL、FLOOR、ABS、MOD。
日期函数：对日期、时间进行处理，比如 DATE、TIME、YEAR、MONTH、DAY.
系统函数：用于获取系统信息，比如 VERSION、DATABASE、USER。
其他函数：NULLIF、COALESCE、GREATEST、LEAST。
类型转换函数：转换类型为另一种，比如 CAST、CONVERT、DATE_FORMAT、STR_TO_DATE。

CREATE TABLE `hello-mysql`.`id_card` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `card_name` VARCHAR(45) NOT NULL,
  `user_id` INT NULL COMMENT '用户ID',
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `hello-mysql`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE TABLE `hello-mysql`.`department` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '部门ID',
  `name` VARCHAR(45) NOT NULL COMMENT '部门名称',
  PRIMARY KEY (`id`));

CREATE TABLE `hello-mysql`.`employee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `deparment_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `department_id_idx` (`deparment_id` ASC) VISIBLE,
  CONSTRAINT `department_id`
    FOREIGN KEY (`deparment_id`)
    REFERENCES `hello-mysql`.`department` (`id`)
    ON DELETE SET NULL
    ON UPDATE SET NULL);

CREATE TABLE `hello-mysql`.`article` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `content` TEXT(2000) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `hello-mysql`.`tag` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `hello-mysql`.`article_tag` (
  `article_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  PRIMARY KEY (`article_id`, `tag_id`),
  INDEX `tag_id_idx` (`tag_id` ASC) VISIBLE,
  CONSTRAINT `article_id`
    FOREIGN KEY (`article_id`)
    REFERENCES `hello-mysql`.`article` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `tag_id`
    FOREIGN KEY (`tag_id`)
    REFERENCES `hello-mysql`.`tag` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

## 事务与隔离
 
 //开启事务

START TRANSACTION;

SAVEPOINT aaa;

UPDATE order_items SET quantity=1 WHERE order_id=3;

SAVEPOINT bbb;

UPDATE orders SET total_amount=200 WHERE id=3;

SAVEPOINT ccc;

ROLLBACK TO SAVEPOINT bbb; //回滚

## 视图/存储过程/函数

// 视图
CREATE VIEW customer_orders AS 
    SELECT 
        c.name AS customer_name, 
        o.id AS order_id, 
        o.order_date, 
        o.total_amount
    FROM customers c
    JOIN orders o ON c.id = o.customer_id;
// 存储过程
DELIMITER $$
CREATE PROCEDURE get_customer_orders(IN customer_id INT)
BEGIN
        SELECT o.id AS order_id, o.order_date, o.total_amount
        FROM orders o
		WHERE o.customer_id = customer_id;
END $$
DELIMITER ;

CALL get_customer_orders(5);

// 函数
DELIMITER $$
CREATE FUNCTION square(x INT)
RETURNS INT
BEGIN
    DECLARE result INT;
    SET result = x * x;
    RETURN result;
END $$
DELIMITER ;
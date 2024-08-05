# Redis服务

redis的设计是key、value的键值对形式存储；
值的类型有：字符串(string)、列表(list)、集合(set)、有序集合(sorted set)、哈希表(hash)、地理信息(geospatial)、位图(bitmap)等

## redis的默认端口为：6379， docker容器数据路径：/data

docker容器里terminal进入redis服务：redis-cli

## redis-cli命令：
ping: 检查redis服务是否启动
info: 查看redis服务信息
select: 切换数据库，redis默认有16个数据库，默认使用第0个数据库
flushdb: 清空当前数据库
flushall: 清空所有数据库
quit: 退出redis服务

## string相关操作：

set: 设置key的值
get: 获取key的值
getset: 设置key的值，并返回旧值
mset: 设置多个key的值
mget: 获取多个key的值
setex: 设置key的值，并设置过期时间
setnx: 设置key的值，如果key不存在则设置成功，否则失败
setrange: 设置key的值，从指定位置开始替换
getrange: 获取key的值，从指定位置开始获取
strlen: 获取key的值的长度
incr: 将key的值加1
，如果key不存在则创建key，并设置值为1
decr: 将key的值减1，如果key不存在则创建key，并设置值为-1
incrby: 将key的值加上指定的数值
decrby: 将key的值减去指定的数值
incrbyfloat: 将key的值加上指定的浮点数
append: 将指定的值追加到key的值末尾

## list相关操作：

lpush: 将一个或多个值插入到列表头部
rpush: 将一个或多个值插入到列表尾部

## set相关操作：

sadd: 向集合中添加一个或多个成员
srem: 移除集合中一个或多个成员
spop: 移除并返回集合中的一个随机元素
smove: 将一个成员从一个集合移动到另一个集合
scard: 获取集合的成员数
sismember: 判断成员是否在集合中
smembers: 获取集合中的所有成员
srandmember: 获取集合中的一个或多个随机成员
sdiff: 返回给定所有集合之间的差集
sinter: 返回给定所有集合之间的交集
sunion: 返回给定所有集合之间的并集

## zset相关操作：

zadd: 向有序集合中添加一个或多个成员，或者更新已存在成员的分数
zrem: 移除有序集合中的一个或多个成员
zincrby: 对有序集合中指定成员的分数加上指定的数值
zrank: 返回有序集合中指定成员的排名
zrevrank: 返回有序集合中指定成员的排名，按分数从高到低排序
zrange: 返回有序集合中指定区间内的成员
zrevrange: 返回有序集合中指定区间内的成员，按分数从高到低排序
zcard: 获取有序集合的成员数
zscore: 获取有序集合中指定成员的分数
zremrangebyrank: 移除有序集合中指定排名区间内的成员
zremrangebyscore: 移除有序集合中指定分数区间内的成员

## hash相关操作：

hset: 设置hash字段的值
hget: 获取hash字段的值
hgetall: 获取hash的所有字段和值
hdel: 删除hash字段
hlen: 获取hash的字段数
hexists: 判断hash字段是否存在
hkeys: 获取hash的所有字段
hvals: 获取hash的所有值
hincrby: 将hash字段的值加上指定的数值
hincrbyfloat: 将hash字段的值加上指定的浮点数

## geo相关操作：

geoadd: 添加地理位置信息
geodist: 计算两个地理位置之间的距离
geohash: 返回一个或多个地理位置的geohash值
geopos: 返回一个或多个地理位置的经纬度
georadius: 根据给定经纬度获取指定半径内的地理位置信息
georadiusbymember: 根据给定地理位置获取指定半径内的地理位置信息


redis的用途：
1. 缓存：使用Redis作为缓存层，可以显著减少数据库的访问次数，提高系统的响应速度和并发能力。
2. 会话管理：使用Redis存储会话信息，可以实现分布式会话管理，提高系统的可扩展性。
3. 消息队列：使用Redis作为消息队列，可以实现高性能、高可靠的消息传递机制。
4. 分布式锁：使用Redis实现分布式锁，可以实现分布式系统中的并发控制。
5. 排行榜：使用Redis的有序集合数据结构，可以实现排行榜功能。
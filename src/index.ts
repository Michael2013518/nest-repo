import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    /**
     *  添加： 单条
     */
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    /**
     * 添加：多条
     */ 
    // await AppDataSource.manager.save(User,[
    //     { id: 2 ,firstName: 'ccc111', lastName: 'ccc', age: 21},
    //     { id: 3 ,firstName: 'ddd222', lastName: 'ddd', age: 22},
    //     { id: 4, firstName: 'eee333', lastName: 'eee', age: 23}
    // ])
    //  查询
    // const users = await AppDataSource.manager.find(User)
    //  删除
    // const user = new User()
    // user.id = 2
    // await AppDataSource.manager.remove(User, user)
    /**
     *  查询：根据年龄
     */
    // const users = await AppDataSource.manager.findBy(User, { age: 23})
    // console.log(users)
    /**
     * 查询：记录和条数
     */ 
    // const [user, count] = await AppDataSource.manager.findAndCount(User)
    // console.log(user, count)
    /**
     *  查询：条件
     */ 
    // const [users, count] = await AppDataSource.manager.findAndCountBy(User, {
    //     age: 23
    // })
    // console.log(users, count);
    /**
     * query builder
     */ 
    // const queryBuilder = await AppDataSource.manager.createQueryBuilder()
    // const user = await queryBuilder.select('user').from(User, 'user').where('user.age = :age', { age: 22 }).getOne()
    // console.log(user)
    /**
     * 多表关联查询，辅助事务
     */ 
    await AppDataSource.manager.transaction(async manager => {
        await manager.save(User, {
            id: 5,
            firstName: 'Grace',
            lastName: 'Lu',
            age: 40
        });
    });
    /**
     *  实体类查询
     */ 
    await AppDataSource.manager.getRepository(User).find({
        where: { age: 40 }
    })
}).catch(error => console.log(error))

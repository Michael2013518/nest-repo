import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { IdCard} from './entity/IdCard'
import { Department} from './entity/Department'
import { Employee} from './entity/Employee'
import { Article} from './entity/Article'
import { Tag} from './entity/Tag'
AppDataSource.initialize().then(async () => {

    /**
     *  添加数据
     */ 
    /*
    const user = new User()
    user.firstName = "Michael"
    user.lastName = "Chueng"
    user.age = 40
    
    const idCard = new IdCard()
    idCard.cardName = '身份证'
    idCard.user = user

    // await AppDataSource.manager.save(user)
    await AppDataSource.manager.save(idCard)
    const users = await AppDataSource.manager.find(IdCard, {
        relations: {
            user: true
        }
    })
    console.log(users)
    
   /*
   const ics = await AppDataSource.manager.getRepository(IdCard)
   .createQueryBuilder("idCard")
   .leftJoinAndSelect("idCard.user", "user")
   .getMany()
   
   const icss = await AppDataSource.manager.createQueryBuilder(IdCard,'idCard')
   .leftJoinAndSelect('idCard.user','user')
   .getMany()
   console.log(icss)
   */
  /**
   *  更新记录
   */
  /*
  const user = new User();
    user.id = 2;
    user.firstName = 'Michael9527';
    user.lastName = 'Cheung';
    user.age = 20;

    const idCard = new IdCard();
    idCard.id = 1;
    idCard.cardName = '411325198310283549';
    idCard.user = user;

    await AppDataSource.manager.save(idCard);
    */
   /**
    * 删除记录
    */
   /*
   const idCard = await AppDataSource.manager.findOne(IdCard, {
    where: {
        id: 1
    },
    relations: {
        user: true
    }
})
await AppDataSource.manager.delete(User, idCard.user.id)
await AppDataSource.manager.delete(IdCard, idCard.id)
*/
/**
 * 主表查询关联数据
 */
/*
const user = await AppDataSource.manager.find(User, {
    relations: {
        idCard: true
    }
})
console.log(user)
*/
/**
 * 添加部门、员工 
 */
/*
const department = new Department()
department.name = '技术部'
const employee1 = new Employee()
employee1.name = '张三'
employee1.department = department
const employee2 = new Employee()
employee2.name = '李四'
employee2.department = department
await AppDataSource.manager.save([department, employee1, employee2])
*/
/**
 * 查询部门的员工
 */ 
/*
const department =await AppDataSource.manager.find(Department, {
    relations: {
        employees: true
    }
});
console.log(department.map(item => item.employees))
*/
/**
 * 添加记录
 */ 
/*
const a1 = new Article();
    a1.title = '中国电动汽车产业调研报告';
    a1.content = '电动汽车有着不可替换的优化，环保加高科技，促使中国电动汽车产业蓬勃发展。';

    const a2 = new Article();
    a2.title = '程序员经济';
    a2.content = '程序员经济是未来经济的重要组成部分，程序员经济将改变人们的生活方式。';

    const t1 = new Tag();
    t1.name = '电动汽车';

    const t2 = new Tag();
    t2.name = '经济报告';

    const t3 = new Tag();
    t3.name = '程序员';

    a1.tags = [t1,t2];
    a2.tags = [t2,t3];

    const entityManager = AppDataSource.manager;

    await entityManager.save(t1);
    await entityManager.save(t2);
    await entityManager.save(t3);

    await entityManager.save(a1);
    await entityManager.save(a2);
    */
/**
 * 查询记录
 */   
/* 
   const articles = await AppDataSource.manager.find(Article, {
    relations: {
        tags: true
    }
   })
   console.log(articles)
   console.log(articles.map(item => item.tags))
*/
/*
const articles = await AppDataSource.manager.createQueryBuilder(Article, 'article')
    .leftJoinAndSelect('article.tags', 'tag')
    .getMany()
console.log(articles.map(item => item.tags))
*/
/**
 * 以上同样可以查询到tags
 */
/*
const articles = await AppDataSource.manager.getTreeRepository(Article)
    .createQueryBuilder('article')
    .leftJoinAndSelect('article.tags', 'tag')
    .getMany()
console.log(articles.map(item => item.tags))
*/
const article = await AppDataSource.manager.findOne(Article, {
    where: {
        id: 2
    },
    relations: {
        tags: true
    }
})
article.title = '程序员经济发展的未来'
article.tags = article.tags.filter(item => item.name.includes('程序员'))
await AppDataSource.manager.save(article)
}).catch(error => console.log(error))

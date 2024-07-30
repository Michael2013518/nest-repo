import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Article } from './entities/article.entity';
@Injectable()
export class ArticleService {
  @InjectEntityManager()
  private entityManager: EntityManager;

  async initData() {
    const article1 = new Article();
    article1.title = '巴黎奥运会紧急宣布：取消'; // 设置文章标题
    article1.content =
      '巴黎奥运会和世界铁人三项协会28日发表联合声明，宣布因塞纳河污染，原定于29日进行的奥运会铁人三项首次下水训练取消。\n    声明称，双方围绕“水质问题”和测试开会磋商后，“联合决定取消铁人三项游泳部分的下水训练”。'; // 设置文章内容

    const article2 = new Article();
    article2.title = '练俊杰/杨昊夺巴黎奥运会男子双人10米跳台金牌'; // 设置文章标题
    article2.content =
      '人民网北京7月29日电 （记者欧兴荣）北京时间7月29日下午，在巴黎奥运会跳水男子双人10米跳台决赛中，中国组合练俊杰/杨昊夺得金牌。这是中国体育代表团在巴黎奥运会夺得的第四枚金牌，也是中国跳水队在本届奥运会夺得的第二枚金牌。'; // 设置文章内容

    await this.entityManager.save([article1, article2]);
  }

  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return this.entityManager.find(Article);
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}

import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  /**
   * 依赖注入两种方式：
   * 1. 通过构造器参数注入
   * 2. 通过属性注入
   */
  // constructor(private readonly appService: AppService) {}
  @Inject(AppService)
  private readonly appService: AppService;
  @Inject('person')
  private readonly person: { name: string; age: number };
  @Inject('app_service')
  private readonly appService2: AppService;

  @Inject('person2')
  private readonly person2: { name: string; age: number };
  @Inject('person3')
  private readonly person3: { name: string; desc: string };
  @Inject('person4')
  private readonly person4: { name: string; desc: string };
  @Inject('person5')
  private readonly person5: { name: string; age: number };
  @Get()
  getHello(): string {
    console.log('person', this.person);
    console.log('appService2', this.appService2);
    console.log('person2', this.person2);
    console.log('person3', this.person3);
    console.log('person4', this.person4);
    console.log('person5', this.person5);
    return this.appService.getHello();
  }
}

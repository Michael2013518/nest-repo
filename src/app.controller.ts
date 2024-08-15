import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiTags('测试')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('test')
  @ApiTags('测试')
  @ApiOperation({ summary: '测试接口', description: '用于应用接口测试' })
  @ApiQuery({
    name: 'Params',
    type: String,
    description: '参数一',
    required: false,
    example: 'test',
  })
  @ApiResponse({ status: HttpStatus.OK, description: '测试成功', type: String })
  appTest() {
    return 'Test Api';
  }
}

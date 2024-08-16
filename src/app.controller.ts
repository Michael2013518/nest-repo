import { Controller, Get, HttpStatus, Inject, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { SessionService } from 'src/session/session.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(SessionService)
  private sessionService: SessionService;

  @Get('count')
  async getCount(@Req() req: Request, @Res({ passthrough: true}) res: Response) {
    const sid = req.cookies.sid;
    const session = await this.sessionService.getSession<{count: string}>(sid);

    const curCount = session.count ? parseInt(session.count) + 1 : 1;
    const curSid = await this.sessionService.setSession(sid, {
      count: curCount
    });

    res.cookie('sid', curSid, { maxAge: 1800000 });
    return curCount;
}
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

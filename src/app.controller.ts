import { Controller, Get, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { FastifyRequest, FastifyReply } from 'fastify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Response({ passThrough: true}) reply: FastifyReply
  @Get()
  getHello(
    @Request() request: FastifyRequest,
    @Response() reply: FastifyReply,
  ) {
    reply.header('url', request.url);
    reply.send('Hello World!!');
    //return this.appService.getHello();
  }
}

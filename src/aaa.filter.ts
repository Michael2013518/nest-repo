import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AaaException } from './aaaException';

@Catch(AaaException)
export class AaaFilter implements ExceptionFilter {
  catch(exception: AaaException, host: ArgumentsHost) {
    console.log(exception, host);
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      console.log(request.url, request.method);
      response.status(500).json({
        aaa: exception.aaa,
        bbb: exception.bbb,
      });
    } else if (host.getType() === 'ws') {
      console.log('ws');
    } else if (host.getType() === 'rpc') {
      console.log('rpc');
    }
  }
}

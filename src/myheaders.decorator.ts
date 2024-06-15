import { SetMetadata, createParamDecorator, ExecutionContext } from '@nestjs/common';

export const MyHeaders = createParamDecorator((key: string, ctx: ExecutionContext) => {
  const res: Request = ctx.switchToHttp().getRequest();
  return key ? res.headers[key.toLowerCase()] : res.headers;
});

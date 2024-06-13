# Nest ArgumentHost & ExecutionContext

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```


## Create filter

1. First Step

```bash
$ nest g filter aaa --no-spec --flat
```
2. Second Step

```
    // AaaException.ts
    export class AaaException extends BadRequestException {
      constructor(message?: string) {
        super(message);
      }
    }
```

3. Third Step

```
    // AaaFilter.ts
    import { ArgumentHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
    import { AaaException } from './AaaException';

    @Catch(AaaException)
    export class AaaFilter implements ExceptionFilter {
        catch(exception: AaaException, host: ArgumentHost) {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse();
            const request = ctx.getRequest();
            const status = exception.getStatus();

            response
                .status(status)
                .json({
                    statusCode: status,
                    timestamp: new Date().toISOString(),
                    path: request.url,
                });
        }
    }
```
4. Fourth Step

```
    // app.controller.ts
    import {
  Controller,
  Get,
  SetMetadata,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaException } from './aaaException';
import { AaaFilter } from './aaa.filter';
import { AaaGuard } from './aaa.guard';
import { Roles } from './roles.decorator';
import { Role } from './role';

@Controller()
//@SetMetadata('roles', [Role.Admin])
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AaaGuard)
  @UseFilters(AaaFilter)
  @Roles(Role.Admin)
  getHello(): string {
    throw new AaaException('aaa', 'bbb');
    return this.appService.getHello();
  }
}

```



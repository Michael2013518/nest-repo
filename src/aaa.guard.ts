import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AaaGuard implements CanActivate {
  constructor(private reflect: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('AaaGuard');
    console.log(this.reflect.get('roles', context.getHandler()));
    console.log(
      this.reflect.getAll('roles', [context.getHandler(), context.getClass()]),
    );
    console.log(
      this.reflect.getAllAndMerge('roles', [
        context.getHandler(),
        context.getClass(),
      ]),
    );
    console.log(
      this.reflect.getAllAndOverride('roles', [
        context.getHandler(),
        context.getClass(),
      ]),
    );
    return true;
  }
}

import { SetMetadata, UseGuards, applyDecorators, Get } from '@nestjs/common';
import path from 'path';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';

export function Bbb(path, role) {
    return applyDecorators(
        Get(path),
        Aaa(role),
        UseGuards(AaaGuard)
    )
}

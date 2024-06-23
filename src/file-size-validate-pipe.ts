import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  HttpStatus,
  HttpException,
} from '@nestjs/common';

@Injectable()
export class FileSizeValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value.size > 1024 * 10) {
      throw new HttpException('文件大于10KB', HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}

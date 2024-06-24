import { FileValidator } from '@nestjs/common';

export class FileValidators extends FileValidator {
  constructor(options) {
    super(options);
  }
  isValid(file: Express.Multer.File): boolean | Promise<boolean> {
    if (file.size > 10000) {
      return false;
    }
    return true;
  }

  buildErrorMessage(file: Express.Multer.File): string {
    console.log('file', file);
    //对于中文字符进行转码
    const fileOriginalName = Buffer.from(file.originalname, 'binary').toString(
      'utf8',
    );
    // 这里可以自定义错误信息
    return `文件${fileOriginalName} 大小超出10KB`;
  }
}

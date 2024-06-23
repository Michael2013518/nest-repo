import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Body,
} from '@nestjs/common';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { AppService } from './app.service';
import { storage } from './file-storage';
import { FileSizeValidatePipe } from './file-size-validate-pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // 单文件上传
  @Post('aaa')
  @UseInterceptors(
    FileInterceptor('aaa', {
      dest: 'uploads',
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log('body', body);
    console.log('file', file);
  }
  // 多文件上传
  @Post('bbb')
  @UseInterceptors(
    FilesInterceptor('file', 3, {
      dest: 'uploads',
    }),
  )
  uploadFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('files', files);
  }

  @Post('ccc')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'aaa', maxCount: 2 },
        { name: 'bbb', maxCount: 3 },
      ],
      {
        dest: 'uploads',
      },
    ),
  )
  uploadFile2(
    @UploadedFiles()
    files: {
      aaa?: Array<Express.Multer.File>;
      bbb?: Array<Express.Multer.File>;
    },
    @Body() body,
  ) {
    console.log('file', files);
    console.log('body', body);
  }

  @Post('ddd')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads',
    }),
  )
  uploadFile3(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('file', files);
    console.log('body', body);
  }

  @Post('eee')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: storage,
    }),
  )
  uploadFile4(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('file', files);
    console.log('body', body);
  }
  @Post('fff')
  @UseInterceptors(
    FileInterceptor('aaa', {
      dest: 'uploads',
    }),
  )
  uploadFile5(
    @UploadedFile(FileSizeValidatePipe) file: Express.Multer.File,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('file', file);
  }
}

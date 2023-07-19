import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ReactiveService } from './reactive.service';
import { CreateReactiveDto } from './dto/create-reactive.dto';
import { UpdateReactiveDto } from './dto/update-reactive.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('reactive')
export class ReactiveController {
  excelUploadService: any;
  fileService: any;
  constructor(private readonly reactiveService: ReactiveService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadExcelFile(@UploadedFile() file: Express.Multer.File) {
    const data = await this.fileService.readExcelFile(file.buffer);
    await this.fileService.saveDataToDatabase(data);
  }

  @Post()
  create(@Body() createReactiveDto: CreateReactiveDto) {
    return this.reactiveService.create(createReactiveDto);
  }

  @Get()
  findAll() {
    return this.reactiveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reactiveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReactiveDto: UpdateReactiveDto) {
    return this.reactiveService.update(+id, updateReactiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reactiveService.remove(+id);
  }
}

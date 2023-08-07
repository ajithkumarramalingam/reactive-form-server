import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res, Req, HttpStatus } from '@nestjs/common';
import { ReactiveService } from './reactive.service';
import { UpdateReactiveDto } from './dto/update-reactive.dto';
import { Response, Request } from 'express';
@Controller('reactive')
export class ReactiveController {
  constructor(private readonly reactiveService: ReactiveService) {}
  @Post('insert')
 async insert (@Req() req: Request, @Res() res: Response, @Body() payloads: any) {
  console.log(payloads, "payload////////////");
  try {
    await this.reactiveService.insert(payloads);
    console.log("Mapped Data:", payloads);

    res.status(HttpStatus.OK).json({
      message: 'Excel data inserted successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      message: 'Something went wrong',
    });
  }
}
// try{
  //   await this.reactiveService.insert(payloads);
  //   console.log("payyyyyyyyyyyyyy",payloads);
  //   res.status(HttpStatus.OK).json({
  //     message: 'Excel added successfully',
  //   });
  // }
  // catch (error) {
  //   console.log(error)
  //   res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
  //     message: 'Something went wrong',
  //   });
  // } 
  // }

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

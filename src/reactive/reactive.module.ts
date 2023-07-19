import { Module } from '@nestjs/common';
import { ReactiveService } from './reactive.service';
import { ReactiveController } from './reactive.controller';

@Module({
  controllers: [ReactiveController],
  providers: [ReactiveService]
})
export class ReactiveModule {}

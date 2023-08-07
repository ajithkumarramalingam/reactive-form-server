import { Module } from '@nestjs/common';
import { ReactiveService } from './reactive.service';
import { ReactiveController } from './reactive.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reactive } from './entities/reactive.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Reactive])],
  controllers: [ReactiveController],
  providers: [ReactiveService]
})
export class ReactiveModule {}

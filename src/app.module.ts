import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReactiveModule } from './reactive/reactive.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reactive } from './reactive/entities/reactive.entity';

@Module({
  imports: [ReactiveModule, ConfigModule.forRoot({
    isGlobal:true
  }),
TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD, 
    database: process.env.DATABASE_NAME, 
    // synchronize:true,
    autoLoadEntities:true,  
    entities: [Reactive]
}),ReactiveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
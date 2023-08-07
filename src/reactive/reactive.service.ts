import { Injectable } from '@nestjs/common';
import { CreateReactiveDto } from './dto/create-reactive.dto';
import { UpdateReactiveDto } from './dto/update-reactive.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reactive } from './entities/reactive.entity';
import { Repository } from 'typeorm';



@Injectable()
export class ReactiveService {
  constructor(
    @InjectRepository(Reactive)
    private reactiveRepository: Repository<Reactive>
  ){}
  async insert(payloads) {
    console.log("inside insert",payloads);
    return await this.reactiveRepository.save(payloads);
  }
  
  create(createReactiveDto: CreateReactiveDto) {
    return 'This action adds a new reactive';
  }

  findAll() {
    return `This action returns all reactive`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reactive`;
  }

  update(id: number, updateReactiveDto: UpdateReactiveDto) {
    return `This action updates a #${id} reactive`;
  }

  remove(id: number) {
    return `This action removes a #${id} reactive`;
  }
}

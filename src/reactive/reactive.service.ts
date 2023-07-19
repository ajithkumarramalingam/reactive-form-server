import { Injectable } from '@nestjs/common';
import { CreateReactiveDto } from './dto/create-reactive.dto';
import { UpdateReactiveDto } from './dto/update-reactive.dto';

@Injectable()
export class ReactiveService {
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

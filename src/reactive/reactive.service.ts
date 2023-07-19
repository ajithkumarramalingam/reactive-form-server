import { Injectable } from '@nestjs/common';
import { CreateReactiveDto } from './dto/create-reactive.dto';
import { UpdateReactiveDto } from './dto/update-reactive.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reactive } from './entities/reactive.entity';
import * as xlsx from 'xlsx';



@Injectable()
export class ReactiveService {
  readExcelFile(buffer: Buffer): any[] {
    return [
      { name: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890' },
    ];
  }

  async saveDataToDatabase(data: any[]): Promise<void> {
    const mockDatabase: any[] = [];
    data.forEach((entry) => mockDatabase.push(entry));
    return Promise.resolve();
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

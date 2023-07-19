import { PartialType } from '@nestjs/mapped-types';
import { CreateReactiveDto } from './create-reactive.dto';

export class UpdateReactiveDto extends PartialType(CreateReactiveDto) {}

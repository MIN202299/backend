import { IsNumber } from 'class-validator';

export class UpdateTreeDto {
  @IsNumber()
  id: number;

  @IsNumber()
  sortNum: number;

  @IsNumber()
  parentId: number;
}
import { IsNumber } from 'class-validator';

export class UpdateSortNumDto {
  @IsNumber()
  id: number;

  @IsNumber()
  sortNum: number
}
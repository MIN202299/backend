import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class GetGuidePagerDto {

  @IsNumber()
  @Type(() => Number)
  pageNum: number = 1;

  @IsNumber()
  @Type(() => Number)
  pageSize: number = 5;

  @IsNumber()
  @Type(() => Number)
  guideEquipId: number;
}
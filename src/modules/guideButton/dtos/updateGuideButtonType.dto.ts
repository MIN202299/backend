import { IsBoolean, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateGuideButtonTypeDto {

  @IsNumber()
  @Type(() => Number)
  id: number;

  @IsBoolean()
  isOpen: boolean;
}
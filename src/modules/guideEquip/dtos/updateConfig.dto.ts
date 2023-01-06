import { IsBoolean, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateConfigDto {

  @IsNumber()
  @Type(() => Number)
  id: number;

  @IsBoolean()
  isLoop: boolean;

  @IsNumber()
  @Type(() => Number)
  stepTime: number;

}
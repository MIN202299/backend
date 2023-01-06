import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class ChangeImageDto {

  @IsNumber()
  @Type(() => Number)
  buttonIndex: number;

  @IsNumber()
  @Type(() => Number)
  imageIndex: number;
}
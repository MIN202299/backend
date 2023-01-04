import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateGuideButtonDto {

  @IsNumber()
  @Type(() => Number)
  id: number;

  @IsString()
  buttonName: string;

  @IsString()
  materials: string;

  @IsString()
  materialIds: string;

  @IsNumber()
  @Type(() => Number)
  materialNum: number;

  @IsNumber()
  @Type(() => Number)
  guideEquipId: number;
}
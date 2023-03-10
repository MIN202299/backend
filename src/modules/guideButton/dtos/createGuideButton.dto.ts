import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateGuideButtonDto {

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
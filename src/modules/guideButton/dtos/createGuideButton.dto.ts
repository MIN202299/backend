import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateGuideButtonDto {

  @IsString()
  buttonName: string;

  @IsString()
  materials: string;

  @IsString()
  materialIds: string;

  @IsNumber()
  materialNum: number;

  @IsNumber()
  guideEquipId: number;
}
import { IsNumber, IsString } from 'class-validator';

export class CreateThemeDto {
  @IsNumber()
  showroomEquipId: number;

  @IsString()
  themeName: string;

  @IsString()
  materials: string;

  @IsString()
  materialIds: string;

  @IsNumber()
  materialNum: number;

  @IsString()
  raw: string
}
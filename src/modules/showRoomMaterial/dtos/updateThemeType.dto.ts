import { IsBoolean, IsNumber } from 'class-validator';

export class UpdateThemeTypeDto {
  @IsNumber()
  id: number;

  @IsNumber()
  showroomEquipId: number;

  @IsBoolean()
  type: boolean;
}
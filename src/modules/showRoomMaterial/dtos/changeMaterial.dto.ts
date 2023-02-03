import { IsNumber } from 'class-validator';

export class ChangeMaterialDto {
  @IsNumber()
  activeThemeIndex: number;

  @IsNumber()
  activeResourceIndex: number;

  @IsNumber()
  stepTime: number;
}
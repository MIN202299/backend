import { IsNumber, IsString } from "class-validator";

export class createGuideEquipDto {

  @IsString()
  equipmentId: string;

  @IsString()
  equipmentName: string;

  description: string;

  width: number;

  height: number;

  parentId: number;

  bgImg: string;

}
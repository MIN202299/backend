import { IsEnum, IsString } from 'class-validator';
import { ShowRoomEquipType } from '../../../utils/enum'

export class createEquipDto {
  @IsString()
  equipmentId: string;

  @IsString()
  equipmentName: string;

  @IsEnum(ShowRoomEquipType)
  equipType: ShowRoomEquipType;

  // 以下参数为可选参数可以通过自定义类型验证期对其验证
  // https://github.com/typestack/class-validator#custom-validation-decorators
  description: string;
  width: number;
  height: number;
  subEquipSetting: string;
  subEquipNum: number;
}
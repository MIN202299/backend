import { IsNumber, IsString } from 'class-validator';
import { FileType } from '../../../utils/enum'

export class CreateMaterialDto {

  @IsString()
  name: string

  @IsString()
  position: string;

  @IsString()
  md5: string;

  @IsNumber()
  size: number;

  type: FileType;
  mimeType: string;

}
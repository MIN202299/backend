import { IsString } from 'class-validator';

export class PreuploadDto {
  @IsString()
  md5: string;
}
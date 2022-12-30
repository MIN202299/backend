import { Body, Controller, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MaterialService } from '../material/material.service';
import { CreateMaterialDto } from '../material/dtos/createMaterial.dto';
import { getFileType } from '../../utils/getFileType';
import { PreuploadDto } from './dtos/preupload.dto';

@Controller()
export class UploadController {

  constructor(
    private readonly materialService: MaterialService
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file, @Body() body: { md5: string }) {
    file.path = file.path.replace(/\\/g, '/')

    const fileType = getFileType(file.mimetype)
    const payload: CreateMaterialDto = {
      position: file.path as string,
      mimeType: file.mimetype as string,
      name: file.originalname as string,
      size: file.size as number,
      type: fileType,
      md5: body.md5
    }
    return await this.materialService.create(payload)
  }

  @Post('preupload')
  async preupload(@Body() body: PreuploadDto) {
    const material = await this.materialService.findFile(body.md5)
    if (material) return material
    return false
  }
}
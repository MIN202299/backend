import { Body, Controller, Post } from '@nestjs/common';
import { createGuideEquipDto } from './dtos/createGuideEquip.dto';
import { GuideEquipService } from './guideEquip.service';

@Controller('guide')
export class GuideEquipController {

  constructor(
    private readonly guideEquipService: GuideEquipService

  ) {}

  @Post('/create')
  async create(@Body() body: createGuideEquipDto) {
    return this.guideEquipService.create(body)

  }
}
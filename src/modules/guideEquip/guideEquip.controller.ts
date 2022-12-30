import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { createGuideEquipDto } from './dtos/createGuideEquip.dto';
import { GuideEquipService } from './guideEquip.service';
import { UpdateTreeDto } from './dtos/updateTree.dto';

@Controller('guide')
export class GuideEquipController {

  constructor(
    private readonly guideEquipService: GuideEquipService

  ) {}

  @Post('create')
  async create(@Body() body: createGuideEquipDto) {
    return this.guideEquipService.create(body)

  }

  @Get('getAll')
  async getAll() {
    return this.guideEquipService.getAll()
  }

  @Post('updateTree')
  async updateTree(@Body() body: UpdateTreeDto[]) {
    return this.guideEquipService.updateTree(body)
  }

  @Post('remove')
  async remove(@Body() body: {id: number}) {
    return this.guideEquipService.removeGuideEquip(body.id)
  }

  @Post('update')
  async update(@Query() { id }: { id: number }, @Body() body: createGuideEquipDto) {
    return this.guideEquipService.update(id, body)
  }
}
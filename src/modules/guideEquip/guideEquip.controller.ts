import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { createGuideEquipDto } from './dtos/createGuideEquip.dto';
import { GuideEquipService } from './guideEquip.service';
import { UpdateTreeDto } from './dtos/updateTree.dto';
import { UpdateConfigDto } from './dtos/updateConfig.dto';
import { SocketGateway } from '../../socket/socket.gateway';
import { ChangeImageDto } from './dtos/changeImage.dto';
import { ChangeImageMsg } from '../../socket/socket.interface';
import { ActionType } from '../../utils/enum';

@Controller('guide')
export class GuideEquipController {

  constructor(
    private readonly guideEquipService: GuideEquipService,
    private readonly socketGateway: SocketGateway
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

  @Get('getDetail/:id')
  async findByEquipEd(@Param('id') id: string) {
    return this.guideEquipService.findByEquipId(id)
  }

  @Post('updateConfig')
  async updateConfig(@Body() body: UpdateConfigDto) {
    return this.guideEquipService.updateConfig(body)
  }

  @Post('changeImage')
  async changeImage(@Body() body: ChangeImageDto) {
    this.socketGateway.sendToAllClient<ChangeImageMsg>(ActionType.CHANGE_MATERIAL,
      { imageIndex: body.imageIndex, buttonIndex: body.buttonIndex })
    return true
  }

}
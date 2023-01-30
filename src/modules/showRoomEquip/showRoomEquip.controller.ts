import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ShowRoomEquipService } from './showRoomEquip.service';
import { createEquipDto } from './dtos/createEquip.dto';
import { UpdateSortNumDto } from './dtos/updateSortNum.dto';

@Controller('showroom')
export class ShowRoomEquipController {
  constructor(
    private readonly showRoomEquipService: ShowRoomEquipService
  ) {}

  @Post('createEquip')
  async createEquip(@Body() body: createEquipDto) {
    return this.showRoomEquipService.createEquip(body)
  }

  @Get('getAllEquip')
  async getAllEquip() {
    return this.showRoomEquipService.getAllEquip()
  }

  @Post('updateSort')
  async updateSort(@Body() body: UpdateSortNumDto[]) {
    return this.showRoomEquipService.updateSort(body)
  }

  @Delete('removeEquip/:id')
  async removeEquip(@Param('id') id: number) {
    return this.showRoomEquipService.removeEquip(id)
  }

  @Post('updateEquip/:id')
  async updateEquip(@Param('id') id: number, @Body() body: createEquipDto) {
    return this.showRoomEquipService.updateEquip(id, body)
  }
}
import { Body, Controller, Post } from '@nestjs/common';
import { ShowRoomEquipService } from './showRoomEquip.service';
import { createEquipDto } from './dtos/createEquip.dto';

@Controller('showroom')
export class ShowRoomEquipController {
  constructor(
    private readonly showRoomEquipService: ShowRoomEquipService
  ) {}

  @Post('createEquip')
  async createEquip(@Body() body: createEquipDto) {
    return this.showRoomEquipService.createEquip(body)
  }
}
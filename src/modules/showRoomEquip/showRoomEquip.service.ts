import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShowRoomEquipEntity } from '../../entities/showRoomEquip.entity';
import { Repository } from 'typeorm';
import { createEquipDto } from './dtos/createEquip.dto';

@Injectable()
export class ShowRoomEquipService {
  constructor(
    @InjectRepository(ShowRoomEquipEntity)
    private readonly showRoomEquipEntity: Repository<ShowRoomEquipEntity>
  ) {}

  async createEquip(payload: createEquipDto) {
    const equip = await this.showRoomEquipEntity.findOne({
      where: { equipmentId: payload.equipmentId }
    })
    if (equip) {
      throw new BadRequestException('设备已存在')
    }

    const equipment = new ShowRoomEquipEntity()

    equipment.equipmentId = payload.equipmentId
    equipment.equipmentName = payload.equipmentName
    equipment.equipType = payload.equipType
    equipment.height = payload.height
    equipment.width = payload.width
    equipment.subEquipNum = payload.subEquipNum
    equipment.subEquipSetting = payload.subEquipSetting
    equipment.description = payload.description

    return await this.showRoomEquipEntity.save(equipment)
  }
}
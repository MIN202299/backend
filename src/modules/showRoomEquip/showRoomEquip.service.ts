import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShowRoomEquipEntity } from '../../entities/showRoomEquip.entity';
import { Repository } from 'typeorm';
import { createEquipDto } from './dtos/createEquip.dto';
import { UpdateSortNumDto } from './dtos/updateSortNum.dto';

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

  async getAllEquip() {
    return await this.showRoomEquipEntity.find({
      order: {
        sortNum: 'ASC'
      },
      where: {
        isDelete: false
      }
    })
  }

  async updateSort(payload: UpdateSortNumDto[]) {
    try {
      for (let item of payload) {
        await this.showRoomEquipEntity.update(item.id, {
          sortNum: item.sortNum
        })
      }
    } catch (e) {
      throw new BadRequestException('更新失败')
    }
    return true
  }

  async removeEquip(id: number) {
    return this.showRoomEquipEntity.update(id, {
      isDelete: true
    })
  }

  async updateEquip(id: number, payload: createEquipDto) {
    return await this.showRoomEquipEntity.update(id, {
      equipmentName: payload.equipmentName,
      description: payload.description,
      width: payload.width,
      height: payload.height,
      subEquipSetting: payload.subEquipSetting,
      subEquipNum: payload.subEquipNum
    })
  }

  async findEquip(id: number) {
    return await this.showRoomEquipEntity.findOne({
      where: {id}
    })
  }

}
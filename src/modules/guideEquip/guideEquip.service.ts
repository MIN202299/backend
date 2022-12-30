import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GuideEquip } from '../../entities/guideEquip.entity';
import { createGuideEquipDto } from './dtos/createGuideEquip.dto';
import { UpdateTreeDto } from './dtos/updateTree.dto';

@Injectable()
export class GuideEquipService {

  constructor(
    @InjectRepository(GuideEquip)
    private readonly guideEquipRepository: Repository<GuideEquip>
  ) {}

  async create(payload: createGuideEquipDto): Promise<GuideEquip> {
    const exist = await this.guideEquipRepository.findOne({
      where: { equipmentId:  payload.equipmentName}
    })

    if (exist) {
      throw new BadRequestException('设备已存在')
    }

    const equipment = new GuideEquip();

    equipment.equipmentId = payload.equipmentId;
    equipment.equipmentName = payload.equipmentName;
    equipment.description = payload.description;
    equipment.height = payload.height;
    equipment.width = payload.width;
    equipment.bgImg = payload.bgImg;
    equipment.parentId = payload.parentId;

    return await this.guideEquipRepository.save(equipment)
  }

  async getAll(): Promise<GuideEquip[]> {
    return await this.guideEquipRepository.find({
      order: {
        sortNum: 'ASC'
      },
      where: {
        isDelete: false
      }
    })
  }

  async removeGuideEquip(id: number) {
    return await this.guideEquipRepository.update(id, {
      isDelete: true
    })
  }

  async updateTree(payload: UpdateTreeDto[]) {
    try {
      for (let item of payload) {
        await this.guideEquipRepository.update(item.id, {
          sortNum: item.sortNum,
          parentId: item.parentId
        })
      }
    } catch (e) {
      throw new BadRequestException('更新失败')
    }
    return true
  }

  async update(id: number, payload: createGuideEquipDto) {

    return await this.guideEquipRepository.update(id, {
      equipmentName: payload.equipmentName,
      description: payload.description,
      width: payload.width,
      height: payload.height,
      bgImg: payload.bgImg
    })

  }
}
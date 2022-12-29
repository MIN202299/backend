import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GuideEquip } from '../../entities/guideEquip.entity';
import { createGuideEquipDto } from './dtos/createGuideEquip.dto';

@Injectable()
export class GuideEquipService {

  constructor(
    @InjectRepository(GuideEquip)
    private readonly guideEquipRepository: Repository<GuideEquip>
  ) {}

  async create(payload: createGuideEquipDto): Promise<GuideEquip> {
    const exist = this.guideEquipRepository.findOne({
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
}
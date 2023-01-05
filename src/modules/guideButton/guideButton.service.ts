import { Injectable } from '@nestjs/common';
import { CreateGuideButtonDto } from './dtos/createGuideButton.dto';
import { Repository } from 'typeorm';
import { GuideButton } from '../../entities/guideButton.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GetGuidePagerDto } from './dtos/getGuidePager.dto';
import { UpdateGuideButtonDto } from './dtos/updateGuideButton.dto';
import { UpdateGuideButtonTypeDto } from './dtos/updateGuideButtonType.dto';

@Injectable()
export class GuideButtonService {

  constructor(
    @InjectRepository(GuideButton)
    private readonly guideButtonRepository: Repository<GuideButton>
  ) {}

  async create(payload: CreateGuideButtonDto) {

    const button = new GuideButton()

    button.buttonName = payload.buttonName;
    button.materials = payload.materials;
    button.materialIds = payload.materialIds;
    button.materialNum = payload.materialNum;
    button.guideEquipId = payload.guideEquipId

    return await this.guideButtonRepository.save(button)
  }

  async getList(payload: GetGuidePagerDto) {

    const qb = this.guideButtonRepository.createQueryBuilder('guideButton')
    const data = await qb
      .where("guideButton.guideEquipId = :guideEquipId AND guideButton.isDelete = :isDelete",
        { guideEquipId: payload.guideEquipId, isDelete: false })
      .skip((payload.pageNum - 1) * payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount()

    return {
      list: data[0],
      pageNum: payload.pageNum,
      pageSize: payload.pageSize,
      total: data[1]
    }

  }

  async removeBtn(id: number) {
    return await this.guideButtonRepository.update(id, { isDelete: true })
  }

  async updateBtn(payload: UpdateGuideButtonDto) {
    return await this.guideButtonRepository.update(payload.id, {
      buttonName: payload.buttonName,
      materials: payload.materials,
      materialIds: payload.materialIds,
      materialNum: payload.materialNum,
    })
  }

  async updateBtnType(payload: UpdateGuideButtonTypeDto) {
    return await this.guideButtonRepository.update(payload.id, {
      isOpen: payload.isOpen
    })
  }

  async findAll(id: number): Promise<GuideButton[]> {
    return await this.guideButtonRepository.find({
      where: { guideEquipId: id, isOpen: true, isDelete: false }
    })
  }
}
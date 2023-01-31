import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { ShowroomMaterialEntity } from '../../entities/showroomMaterial.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateThemeDto } from './dtos/createTheme.dto';
import { GetThemePagerDto } from './dtos/getThemePager.dto';
import { UpdateThemeTypeDto } from './dtos/updateThemeType.dto';
import { ShowRoomEquipEntity } from '../../entities/showRoomEquip.entity';
import { FileType, ShowRoomEquipType } from '../../utils/enum';
import { MaterialEntity } from '../../entities/material.entity';

@Injectable()
export class ShowroomMaterialService {
  constructor(
    @InjectRepository(ShowroomMaterialEntity)
    private readonly showroomMaterialRepo: Repository<ShowroomMaterialEntity>,
    @InjectRepository(ShowRoomEquipEntity)
    private readonly showroomEquipRepo: Repository<ShowRoomEquipEntity>,
    @InjectRepository(MaterialEntity)
    private readonly materialRepo: Repository<MaterialEntity>
  ) {}

  async createTheme(body: CreateThemeDto) {
    const theme = new ShowroomMaterialEntity()
    theme.showroomEquipId = body.showroomEquipId
    theme.themeName = body.themeName
    theme.materialIds = body.materialIds
    theme.materials = body.materials
    theme.materialNum = body.materialNum
    theme.raw = body.raw

    return await this.showroomMaterialRepo.save(theme)
  }

  async getAllTheme(body: GetThemePagerDto) {
    const qb = this.showroomMaterialRepo.createQueryBuilder('showroomMaterial')
    const data = await qb
      .where("showroomMaterial.showroomEquipId = :showroomEquipId AND showroomMaterial.isDelete = :isDelete",
        { showroomEquipId: body.showroomEquipId, isDelete: false })
      .skip((body.pageNum - 1) * body.pageSize)
      .take(body.pageSize)
      .getManyAndCount()

    return {
      list: data[0],
      pageNum: body.pageNum,
      pageSize: body.pageSize,
      total: data[1]
    }
  }

  async updateThemeType(body: UpdateThemeTypeDto) {
    const qb = this.showroomMaterialRepo.createQueryBuilder('showroomMaterial')
    await qb.update()
            .set({ isOpen: false })
            .where({showroomEquipId: body.showroomEquipId})
            .execute();

    await qb.update()
            .set({ isOpen: body.type })
            .where({id: body.id, showroomEquipId: body.showroomEquipId})
            .execute();

    return true
  }

  async getThemeDetail(id: number) {
    const theme = await this.showroomMaterialRepo.findOne({
      where: { id }
    })

    const equip = await this.showroomEquipRepo.findOne({
      where: {id: theme.showroomEquipId}
    })

    let materialsDetail = []

    if (equip.equipType === ShowRoomEquipType.singe) {
      const materialIds = theme.materialIds.split(',').map(item => Number(item))
      const tempDetail = await this.materialRepo.find({
        where: {
          id: In(materialIds)
        }
      })
      const tempMap = {}
      tempDetail.forEach(item =>{
        tempMap[item.id] = item
      })
      for (let id of materialIds) {
        materialsDetail.push(tempMap[id])
      }
    }

    return {
      theme,
      equip,
      materialsDetail
    }
  }

  async updateTheme(id: number, body: CreateThemeDto) {
    return await this.showroomMaterialRepo.update({id},{
      showroomEquipId: body.showroomEquipId,
      themeName: body.themeName,
      materialIds: body.materialIds,
      materials: body.materials,
      materialNum: body.materialNum,
      raw: body.raw
    })

  }
}
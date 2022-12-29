import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MaterialEntity } from '../../entities/material.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMaterialDto } from './dtos/createMaterial.dto';

@Injectable()
export class MaterialService {
  constructor(
    @InjectRepository(MaterialEntity)
    private readonly materialRepository: Repository<MaterialEntity>
  ) {}

  async findFile(md5: string): Promise<MaterialEntity | undefined> {
    return  await this.materialRepository.findOne({
      where: { md5 }
    })
  }

  async create(payload: CreateMaterialDto): Promise<MaterialEntity> {

    const file = await this.findFile(payload.md5)

    if (file) {
      throw new BadRequestException('文件已存在')
    }

    const material = new MaterialEntity()

    material.md5 = payload.md5
    material.name = payload.name
    material.size = payload.size
    material.mimeType = payload.mimeType
    material.type = payload.type
    material.position = payload.position

    return  this.materialRepository.save(material)
  }
}
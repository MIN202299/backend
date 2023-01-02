import { Injectable } from '@nestjs/common';
import { CreateGuideButtonDto } from './dtos/createGuideButton.dto';
import { Repository } from 'typeorm';
import { GuideButton } from '../../entities/guideButton.entity';
import { InjectRepository } from '@nestjs/typeorm';

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
}
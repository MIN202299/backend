import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuideButton } from '../../entities/guideButton.entity';
import { GuideButtonService } from './guideButton.service';
import { GuideEquipController } from '../guideEquip/guideEquip.controller';

@Module({
    imports: [
      TypeOrmModule.forFeature([GuideButton])
    ],
    providers: [GuideButtonService],
    controllers: [GuideEquipController]
  }
)
export class GuideButtonModule {}
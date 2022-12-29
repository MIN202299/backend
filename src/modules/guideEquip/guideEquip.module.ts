import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { GuideEquip } from 'src/entities/guideEquip.entity';
import { GuideEquipService } from './guideEquip.service';
import { GuideEquipController } from './guideEquip.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuideEquip])
  ],
  providers: [GuideEquipService],
  controllers: [GuideEquipController]
})
export class GuideEquipModule {}
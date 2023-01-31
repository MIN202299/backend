import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowroomMaterialEntity } from '../../entities/showroomMaterial.entity';
import { ShowroomMaterialController } from './showroomMaterial.controller';
import { ShowroomMaterialService } from './showroomMaterial.service';
import { ShowRoomEquipEntity } from '../../entities/showRoomEquip.entity';
import { MaterialEntity } from '../../entities/material.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShowroomMaterialEntity, ShowRoomEquipEntity, MaterialEntity])
  ],
  providers: [ShowroomMaterialService],
  controllers: [ShowroomMaterialController]
})
export class ShowroomMaterialModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowRoomEquipEntity } from '../../entities/showRoomEquip.entity';
import { ShowRoomEquipService } from './showRoomEquip.service';
import { ShowRoomEquipController } from './showRoomEquip.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShowRoomEquipEntity])
  ],
  providers: [ShowRoomEquipService],
  controllers: [ShowRoomEquipController]
})
export class ShowRoomEquipModule {}
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { GuideEquip } from 'src/entities/guideEquip.entity';
import { GuideEquipService } from './guideEquip.service';
import { GuideEquipController } from './guideEquip.controller';
import { GuideButtonModule } from '../guideButton/guideButton.module';
import { SocketGateway } from '../../socket/socket.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuideEquip]),
    GuideButtonModule

  ],
  providers: [GuideEquipService, SocketGateway],
  controllers: [GuideEquipController]
})
export class GuideEquipModule {}
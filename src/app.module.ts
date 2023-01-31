import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { GuideEquipModule } from './modules/guideEquip/guideEquip.module';
import { UploadModule } from './modules/upload/upload.module';
import { GuideButtonModule } from './modules/guideButton/guideButton.module';
import { SocketGateway } from './socket/socket.gateway';
import ormConfigDev from './config/config.dev'
import ormConfigProd from './config/config.prod'
import { ShowRoomEquipModule } from './modules/showRoomEquip/showRoomEquip.module';
import { ShowroomMaterialModule } from './modules/showRoomMaterial/showroomMaterial.module';

const envFile = process.env.NODE_ENV !== 'production' ? '.env' : '.env.prod'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envFile,
      load: [ormConfigDev, ormConfigProd]
    }),
    TypeOrmModule.forRootAsync({
      useFactory: process.env.NODE_ENV !== 'production' ? ormConfigDev : ormConfigProd
    }),
    GuideEquipModule,
    UploadModule,
    GuideButtonModule,
    ShowRoomEquipModule,
    ShowroomMaterialModule
  ],
  controllers: [],
  providers: [SocketGateway]
})
export class AppModule {}

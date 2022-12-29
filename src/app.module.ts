import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { ormConfig } from './config/config.dev'
import { GuideEquipModule } from './modules/guideEquip/guideEquip.module';
import { UploadModule } from './modules/upload/upload.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig]
    }),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig
    }),
    GuideEquipModule,
    UploadModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

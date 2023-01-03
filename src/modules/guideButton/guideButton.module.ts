import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuideButton } from '../../entities/guideButton.entity';
import { GuideButtonService } from './guideButton.service';
import { GuideButtonController } from './guideButton.controller';

@Module({
    imports: [
      TypeOrmModule.forFeature([GuideButton])
    ],
    providers: [GuideButtonService],
    controllers: [GuideButtonController]
  }
)
export class GuideButtonModule {}
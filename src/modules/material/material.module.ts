import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialEntity } from '../../entities/material.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MaterialEntity])
  ],
  providers: [MaterialService],
  controllers: [],
  exports: [MaterialService]
})
export class MaterialModule {}
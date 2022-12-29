import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { parseTime, TimeFmt } from '../../utils/parseTime'
import { checkDirAndCreate } from '../../utils/checkDirAndCreate';
import { v4 as uuid } from 'uuid'
import { UploadController } from './upload.controller';
import { MaterialModule } from '../material/material.module';

const image = ['gif', 'png', 'jpg', 'jpeg', 'bmp', 'webp']
const video = ['mp4', 'webm']
const audio = ['mp3', 'wav', 'ogg']

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          const mimeType = file.mimetype.split('/')[1].toLowerCase()
          let temp = 'other'
          image.filter(item => item === mimeType).length > 0 ?
            (temp = 'image') : ''
          video.filter(item => item === mimeType).length > 0 ?
            (temp = 'video') : ''
          audio.filter(item => item === mimeType).length > 0 ?
            (temp = 'audio') : ''

          const filepath = `public/uploads/${temp}/${parseTime()}`

          checkDirAndCreate(filepath)

          return cb(null, `./${filepath}`)
        },
        filename: (req, file, cb) => {
          const fileType = file.originalname.split('.');
          const filename = `${uuid()}.${fileType[fileType.length - 1]}`
          return cb(null, filename)
        }
      })
    }),
    MaterialModule
  ],
  providers: [],
  controllers: [UploadController]
})
export class UploadModule {}
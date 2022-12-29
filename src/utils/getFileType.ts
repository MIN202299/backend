import { FileType } from './enum';

const image = ['gif', 'png', 'jpg', 'jpeg', 'bmp', 'webp']
const video = ['mp4', 'webm']
const audio = ['mp3', 'wav', 'ogg']


export function getFileType(mimeType: string): FileType {
  const type = mimeType.split('/')[1].toLowerCase()
  let temp = FileType.OTHER
  image.filter(item => item === type).length > 0 ?
    (temp = FileType.IMAGE) : ''
  video.filter(item => item === type).length > 0 ?
    (temp = FileType.VIDEO) : ''
  audio.filter(item => item === type).length > 0 ?
    (temp = FileType.AUDIO) : ''

  return temp
}
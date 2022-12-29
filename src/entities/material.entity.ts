import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { FileType } from '../utils/enum'

@Entity('material')
export class MaterialEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { comment: '文件名称', nullable: false })
  name: string;

  @Column('varchar', { comment: '文件位置' })
  position: string;

  @Column('varchar', { comment: '文件md5', unique: true, nullable: false })
  md5: string;

  @Column({ comment: '文件类型', type: 'enum', enum: FileType })
  type: FileType

  @Column('varchar', { comment: '文件大小' })
  size: number;

  @Column('varchar', { comment: '文件mimeType' })
  mimeType: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  modifyTime: Date;
}
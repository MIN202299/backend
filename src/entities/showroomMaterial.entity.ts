import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('showroomMaterial')
export class ShowroomMaterialEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: false, comment: '设备id' })
  showroomEquipId: number;

  @Column('varchar', { nullable: false, comment: '主题名称' })
  themeName: string;

  @Column('boolean', { default: true, comment: '是否开启' })
  isOpen: boolean

  @Column('text', { comment: '内容' })
  materials: string;

  @Column('text', { comment: '内容id' })
  materialIds: string;

  @Column('int', { comment: '内容数量' })
  materialNum: number;

  @Column('boolean', { comment: '是否删除', default: false })
  isDelete: boolean;

  @Column('text', { comment: '原始数据' })
  raw: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  modifyTime: Date;

}
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('guideButton')
export class GuideButton {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('number', { nullable: false, comment: '设备id' })
  guideEquipId: number;

  @Column('varchar', { nullable: false, comment: '按钮名称' })
  buttonName: string;

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

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  modifyTime: Date;

}
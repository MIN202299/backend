import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

// 智慧导览设备
@Entity('guideEquip')
export class GuideEquip {

  @PrimaryGeneratedColumn({ comment: '自增id' })
  id: number

  @Column('varchar', { comment: '设备号', nullable: false, unique: true })
  equipmentId: string;

  @Column('varchar', { comment: '设备名', nullable: false })
  equipmentName: string;

  @Column('varchar', { comment: '设备描述', nullable: true })
  description: string;

  @Column('int', { comment: '屏幕宽度', nullable: true })
  width: number;

  @Column('int', { comment: '屏幕高度', nullable: true })
  height: number;

  @Column('boolean', { comment: '设备是否被删除', default: false })
  isDelete: boolean;

  @Column('int', { default: 0 })
  parentId: number

  @Column('varchar', { comment: '背景图', nullable: true })
  bgImg: string;

  @Column('int', { comment: '排序号', default: 0 })
  sortNum: number;

  @Column('boolean', { comment: '是否循环', nullable: true })
  isLoop: boolean

  @Column('int', { comment: '循环间隔', nullable: true })
  stepTime: number;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  modifyTime: Date;
}
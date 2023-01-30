import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ShowRoomEquipType } from '../utils/enum';

// 智慧导览设备
@Entity('showRoomEquip')
export class ShowRoomEquipEntity {

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

  @Column({ comment: '设备类型', type: 'enum', enum: ShowRoomEquipType })
  equipType: ShowRoomEquipType;

  @Column('text', { comment: '子设备参数', nullable: true })
  subEquipSetting: string;

  @Column('int', { comment: '自设备数量', nullable: true })
  subEquipNum: number;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  modifyTime: Date;
}
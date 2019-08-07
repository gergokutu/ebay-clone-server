import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsEmail, Length, IsUrl } from 'class-validator'

@Entity()
export default class Ad extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Length(3, 25)
  @Column('text', {nullable:false})
  title: string

  @IsString()
  @Length(10, 100)
  @Column('text', {nullable:false})
  description: string

  @IsString()
  @IsUrl()
  @Column('text', {nullable:false})
  pictureUrl: string

  @IsString()
  @Column('integer', {nullable:false})
  price: number

  @IsString()
  @IsEmail()
  @Column('text', {nullable:false})
  email: string

  @IsString()
  @Column('integer', {nullable:false})
  phone: number
}
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { registerAs } from '@nestjs/config'

const ormConfig  = ():TypeOrmModuleOptions => ({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  autoLoadEntities: true,
  synchronize: false
})

export default registerAs('orm.config', ormConfig)

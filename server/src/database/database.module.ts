import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'axum_user',
      password: '123123',
      database: 'axum_users',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
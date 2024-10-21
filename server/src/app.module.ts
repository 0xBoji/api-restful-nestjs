import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, UsersModule],
})
export class AppModule {}
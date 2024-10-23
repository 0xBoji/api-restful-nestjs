import { IsString, IsEmail, IsOptional } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

export class UserDto {
  @IsOptional()
  @IsString()
  @Expose()
  id?: string;

  @IsString()
  @Expose()
  name: string;

  @IsEmail()
  @Expose()
  email: string;

  @IsString()
  @Exclude()
  password: string;
}
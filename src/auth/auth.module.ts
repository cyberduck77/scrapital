import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy, AccessStrategy } from './strategies';
import { UsersModule } from '@users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'random',
      signOptions: {
        expiresIn: '5m',
      },
    }),
    PassportModule,
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, AccessStrategy],
})
export class AuthModule {}

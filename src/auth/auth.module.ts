import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from '@strategy/local.strategy';
import { UsersModule } from '@users/users.module';
import { JwtStrategy } from '@strategy/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'random',
      signOptions: {
        expiresIn: '1h',
      },
    }),
    PassportModule,
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}

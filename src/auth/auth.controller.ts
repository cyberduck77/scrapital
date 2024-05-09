import { LocalGuard } from '@guard';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(LocalGuard)
  async login(@Req() req: Request){
    return req.user;
  }
}

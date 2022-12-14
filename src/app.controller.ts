import { Controller, Get, Request, Body, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateUsers } from './model/create-users.class';
import { ApiTags, ApiResponse } from '@nestjs/swagger';


@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiResponse({
    status: 200,
    description: 'Success create product!',
  })
  @ApiResponse({
      status: 401,
      description: 'Invalid credentials'
  })
  @ApiTags('Auth')
    async login(@Request() req, @Body() createUsers:CreateUsers,) {
    return this.authService.login(req.user);
  }
}

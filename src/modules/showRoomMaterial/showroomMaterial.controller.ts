import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ShowroomMaterialService } from './showroomMaterial.service';
import { CreateThemeDto } from './dtos/createTheme.dto';
import { GetThemePagerDto } from './dtos/getThemePager.dto';
import { UpdateThemeTypeDto } from './dtos/updateThemeType.dto';
import { ChangeMaterialDto } from './dtos/changeMaterial.dto';
import { SocketGateway } from '../../socket/socket.gateway';

@Controller('showroom')
export class ShowroomMaterialController {
  private lastTime: number = +new Date();
  constructor(
    private readonly showroomMaterialService: ShowroomMaterialService,
    private readonly socketGateway: SocketGateway
  ) {}

  @Post('createTheme')
  async createTheme(@Body() body: CreateThemeDto) {
    const data = await this.showroomMaterialService.createTheme(body)
    this.socketGateway.sendToAllClient('refresh', null)
    return data
  }

  @Get('getAllTheme')
  async getAllTheme(@Query() body: GetThemePagerDto) {
    return this.showroomMaterialService.getAllTheme(body)
  }

  @Post('updateThemeType')
  async updateThemeType(@Body() body: UpdateThemeTypeDto) {
    const data = await this.showroomMaterialService.updateThemeType(body)
    this.socketGateway.sendToAllClient('refresh', null)
    return data
  }

  @Get('getThemeDetail/:id')
  async getThemeDetail(@Param('id') id: number) {
    return this.showroomMaterialService.getThemeDetail(id)
  }

  @Post('updateTheme/:id')
  async updateTheme(@Body() body: CreateThemeDto, @Param('id') id: number) {
    const data = await this.showroomMaterialService.updateTheme(id, body)
    this.socketGateway.sendToAllClient('refresh', null)
    return data
  }

  @Delete('removeTheme/:id')
  async removeTheme(@Param('id') id: number) {
    return this.showroomMaterialService.removeTheme(id)
  }

  @Get('getAll/:id')
  async getAll(@Param('id') id: number) {
    return this.showroomMaterialService.getAll(id)
  }

  // 切换主题socket
  @Post('socket/:id')
  async changeMaterial(@Param('id') id: string, @Body() body: ChangeMaterialDto) {
    const now = +new Date()
    if (now - this.lastTime >= body.stepTime * 1000) {
      this.socketGateway.sendToAllClient(id, body)
      this.lastTime = now
    }
    return true
  }
}
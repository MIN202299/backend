import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ShowroomMaterialService } from './showroomMaterial.service';
import { CreateThemeDto } from './dtos/createTheme.dto';
import { GetThemePagerDto } from './dtos/getThemePager.dto';
import { UpdateThemeTypeDto } from './dtos/updateThemeType.dto';

@Controller('showroom')
export class ShowroomMaterialController {
  constructor(
    private readonly showroomMaterialService: ShowroomMaterialService
  ) {}

  @Post('createTheme')
  async createTheme(@Body() body: CreateThemeDto) {
    return this.showroomMaterialService.createTheme(body)
  }

  @Get('getAllTheme')
  async getAllTheme(@Query() body: GetThemePagerDto) {
    return this.showroomMaterialService.getAllTheme(body)
  }

  @Post('updateThemeType')
  async updateThemeType(@Body() body: UpdateThemeTypeDto) {
    return this.showroomMaterialService.updateThemeType(body)
  }

  @Get('getThemeDetail/:id')
  async getThemeDetail(@Param('id') id: number) {
    return this.showroomMaterialService.getThemeDetail(id)
  }

  @Post('updateTheme/:id')
  async updateTheme(@Body() body: CreateThemeDto, @Param('id') id: number) {
    return this.showroomMaterialService.updateTheme(id, body)
  }
}
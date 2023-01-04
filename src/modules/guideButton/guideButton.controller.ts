import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateGuideButtonDto } from './dtos/createGuideButton.dto';
import { GuideButtonService } from './guideButton.service';
import { GetGuidePagerDto } from './dtos/getGuidePager.dto';
import { UpdateGuideButtonDto } from './dtos/updateGuideButton.dto';
import { UpdateGuideButtonTypeDto } from './dtos/updateGuideButtonType.dto';

@Controller('guide')
export class GuideButtonController {

  constructor(
    private readonly guideButtonService: GuideButtonService
  ) {}

  @Post('createBtn')
  async create(@Body() body: CreateGuideButtonDto) {
    return  this.guideButtonService.create(body)
  }

  @Get('btnList')
  async getList(@Query() query: GetGuidePagerDto) {
    return this.guideButtonService.getList(query)
  }

  @Delete('removeBtn/:id')
  async removeBtn(@Param('id') id: number) {
    return this.guideButtonService.removeBtn(id)
  }

  @Post('updateBtn')
  async updateBtn(@Body() body: UpdateGuideButtonDto) {
    return this.guideButtonService.updateBtn(body)
  }

  @Post('updateBtnType')
  async updateBtnType(@Body() body: UpdateGuideButtonTypeDto) {
    return this.guideButtonService.updateBtnType(body)
  }
}
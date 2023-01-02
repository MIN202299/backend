import { Body, Controller, Post } from '@nestjs/common';
import { CreateGuideButtonDto } from './dtos/createGuideButton.dto';
import { GuideButtonService } from './guideButton.service';

@Controller('guide')
export class GuideButtonController {

  constructor(
    private readonly guideButtonService: GuideButtonService
  ) {}

  @Post('createButton')
  async create(@Body() body: CreateGuideButtonDto) {
    return  this.guideButtonService.create(body)
  }
}
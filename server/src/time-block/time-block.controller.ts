import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { TimeBlockDto } from './dto/time-block.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { TimeBlockService } from './time-block.service'

@Controller('user/time-blocks')
export class TimeBlockController {
  constructor(private readonly TimeBlockService: TimeBlockService){}

  @Get()
  @Auth()
  async getALl(@CurrentUser('id') userId: string){
    return this.TimeBlockService.getAll(userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: TimeBlockDto, @CurrentUser('id') userId: string){
    return this.TimeBlockService.create(dto, userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('update-order')
  @Auth()
  async updateOrder(
    @Body() dto: UpdateOrderDto){
    return this.TimeBlockService.updateOrder(dto.ids)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(
    @Body() dto: TimeBlockDto,
    @CurrentUser('id') userId: string,
    @Param('id') id: string
  ){
    return this.TimeBlockService.update(dto, id, userId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@CurrentUser('id') userId: string, @Param('id') id: string){
    return this.TimeBlockService.delete(id, userId)
  }
}

import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('blogs')
export class BlogController {
  @Get()
  findAll() {
    return [
      { id: 1, title: 'My first blog', contents: 'Web tutorial' },
      { id: 2, title: 'My second blog', contents: 'Web tutorial Part2' },
    ];
  }

  @Get('.html')
  html(@Res() response: Response) {
  }

}

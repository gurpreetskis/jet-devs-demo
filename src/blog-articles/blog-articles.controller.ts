import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogArticlesService } from './blog-articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('blog-articles')
export class BlogArticleController {
  constructor(private readonly articlesService: BlogArticlesService) { }

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  

  @Get('paginate/:skip')
  findAllWithPagination(@Param('skip') skip: number) {
  
    return this.articlesService.findAllWithPagination(skip);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @Get(':id/get-content')
  findOneContent(@Param('id') id: string) {
    return this.articlesService.findOneContent(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}

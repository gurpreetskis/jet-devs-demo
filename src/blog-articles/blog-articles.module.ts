import { Module } from '@nestjs/common';
import { BlogArticlesService } from './blog-articles.service';
import { BlogArticleController } from './blog-articles.controller';
import { BlogArticle } from './entities/blog-article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BlogArticle])],
  controllers: [BlogArticleController],
  providers: [BlogArticlesService]
})
export class BlogArticlesModule {}

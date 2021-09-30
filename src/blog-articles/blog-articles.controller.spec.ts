import { Test, TestingModule } from '@nestjs/testing';
import { BlogArticleController } from './blog-articles.controller';
import { BlogArticlesService } from './blog-articles.service';

describe('BlogArticleController', () => {
  let controller: BlogArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogArticleController],
      providers: [BlogArticlesService],
    }).compile();

    controller = module.get<BlogArticleController>(BlogArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

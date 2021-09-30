import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { BlogArticle } from './entities/blog-article.entity';

@Injectable()
export class BlogArticlesService {
  constructor(@InjectRepository(BlogArticle) private readonly articlesRepository: Repository<BlogArticle>) { }

  create(createArticleDto: CreateArticleDto) {
    return this.articlesRepository.save(createArticleDto);
  }

  public async findAll(): Promise<BlogArticle[]> {

    return this.articlesRepository.find();
  }

  public async findOne(id: number): Promise<BlogArticle> {
    return this.articlesRepository.findOne({
      where: {
        id: id
      }
    });
  }


  public async findAllWithPagination(skip: number): Promise<BlogArticle[]> {
    skip = skip || 0
    return this.articlesRepository.find({
        take: 20,
        skip: skip
      }
    );

   

  }

  public async findOneContent(id: number): Promise<BlogArticle> {

    return await this.articlesRepository
      .createQueryBuilder('blog_article')
      .where('blog_article.id = :id', { id })
      .select(['blog_article.content', 'blog_article.id'])
      .getOne();

  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} article`;
  }
}

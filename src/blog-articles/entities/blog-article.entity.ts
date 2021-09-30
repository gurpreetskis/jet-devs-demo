import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// Nickname, Title, Content, Creation Date
@Entity('Blog_Article')
export class BlogArticle {
    @PrimaryGeneratedColumn() id: number;

    @Column({
        type: 'varchar',
        nullable: false
    }) nickname: string;

    @Column({
        type: 'varchar',
        nullable: false
    }) title: string;


    @Column({
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' 
    })
    creation_date:Date
    
    @Column({
        type: 'varchar',
        nullable: false
    })
    content: string
}

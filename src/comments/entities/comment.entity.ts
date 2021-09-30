import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// Nickname, Content, Creation Date are required
@Entity('Article_Comment')
export class Comment {
    @PrimaryGeneratedColumn() id: number;

    @Column({
        type: 'varchar',
        nullable: false
    }) nickname: string;


    @Column({
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    })
    creation_date: Date

    @Column({
        type: 'varchar',
        nullable: false
    })
    content: string

    @Column({
        type: 'int',
        nullable: false
    })
    article_id: number

    @Column({
        type: 'int',
        nullable: false
    })
    comment_id: number
    
}

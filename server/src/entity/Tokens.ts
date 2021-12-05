import {Entity,Column, CreateDateColumn, PrimaryColumn} from "typeorm";

@Entity()
export class Tokens {

    @Column()
    @PrimaryColumn()
    uid:string;

    @Column()
    token:string

    @Column()
    renewal_token: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @CreateDateColumn()
    updatedAt: Date;

}

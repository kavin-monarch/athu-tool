import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Generated, PrimaryColumn} from "typeorm";

@Entity()
export class Customer {

    @Column()
    @PrimaryColumn()
    username: string;
    
    @Column()
    @Generated('uuid')
    uid:string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    @CreateDateColumn()
    createAt: Date;

}

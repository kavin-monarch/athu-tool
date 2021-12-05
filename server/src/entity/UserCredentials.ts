import {Entity,Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserCredentials {

    @PrimaryGeneratedColumn()
    credId:number

    @Column()
    uid:string;

    @Column()
    authName:string

    @Column()
    hexId:string

    @Column()
    authCode:string

    @Column()
    @CreateDateColumn()
    createdAt: Date;

}

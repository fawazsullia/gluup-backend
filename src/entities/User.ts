import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {

    constructor(id:number, userName: string, email: string, password: string){
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    userName: string;

    @Column({
        nullable: false
    })
    email: string;

    @Column({
        nullable: false
    })
    password: string;
}
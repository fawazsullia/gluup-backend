import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("form")
export class Form{
    constructor(userId: number, id: number, metadata: string, createdAt: string, updatedAt: string){
        this.userId = userId;
        this.id = id;
        this.metadata = metadata;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    metadata: string;

    @Column()
    createdAt: string;

    @Column()
    updatedAt: string;
}
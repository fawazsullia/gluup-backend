import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("domain")
export class Domain{
    constructor(id: number, formId: number, domain: string){
        this.id = id;
        this.formId = formId;
        this.domain = domain;

    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    formId: number;

    @Column()
    domain: string;

}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accessKey")
export class AccessKey{
    constructor(id: number, formId: number, accessKey: string){
        this.id = id;
        this.formId = formId;
        this.accessKey = accessKey;

    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    formId: number;

    @Column()
    accessKey: string;

}
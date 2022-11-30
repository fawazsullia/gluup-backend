import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("submission")
export class Submission{
    constructor(id: number, formId: number, submittedData: string){
        this.id = id;
        this.formId = formId;
        this.submittedData = submittedData;

    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    formId: number;

    @Column()
    submittedData: string;

}
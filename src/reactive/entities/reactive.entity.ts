import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Reactive {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    email: string;

    @Column({ length:10 })
    phoneNumber: number;


}

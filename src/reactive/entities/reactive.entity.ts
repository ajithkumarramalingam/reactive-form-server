import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Reactive {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    email: string;

    @Column({length: 10 })
    phoneNumber: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({nullable: true})
    createdBy: number;

    @UpdateDateColumn({nullable: true})
    updatedAt: Date;

    @Column({nullable: true})   
    updatedBy: number;

    @DeleteDateColumn({nullable: true})
    deletedAt: Date;

    @Column({nullable: true})
    deletedBy: number;
}

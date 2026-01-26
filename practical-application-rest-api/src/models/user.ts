import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({
    name: "user",
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    email: string;
    @Column()
    pictureUrl: string;
    @Column()
    passwordHash: string;
    @Column()
    passwordSalt: string;

    @Column()
    isAdmin: boolean;
}
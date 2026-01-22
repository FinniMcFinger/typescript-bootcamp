import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Lesson} from "./lesson";

@Entity({
    name: "course"
})
export class Course {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    seqNum: number;
    @Column()
    title: string;
    @Column()
    iconUrl: string;
    @Column()
    longDescription: string;
    @Column()
    category: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    lastUpdatedAt: Date;

    @OneToMany(() => Lesson, lesson => lesson.course)
    lessons: Lesson[];
}
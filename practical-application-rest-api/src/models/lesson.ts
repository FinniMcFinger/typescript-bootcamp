import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Course} from "./course";

@Entity({
    name: "lesson"
})
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    duration: string;
    @Column()
    seqNum: number;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    lastUpdatedAt: Date;

    @ManyToOne(() => Course, course => course.lessons)
    @JoinColumn()
    course: Course;
}
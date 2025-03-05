import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Duration {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    start: number;

    @Column()
    end: number;
}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Artist } from './artist.entity';
import { Duration } from './duration.entity';

@Entity()
export class Tracks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50 })
    album: string;

    @Column({ length: 200 })
    cover: string;

    @ManyToOne(() => Artist, (artist) => artist.id)
    artist: Artist;

    @OneToOne(() => Duration)
    @JoinColumn()
    duration: Duration;

    @Column({ length: 200 })
    url: string;
}
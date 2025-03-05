import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tracks } from 'src/tracks.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TracksService {
    constructor(
        @InjectRepository(Tracks) private tracksRepository: Repository<Tracks>
    ){}

    findAll(): Promise<Tracks[]> { return this.tracksRepository.find(); }
    
    findOne(id: number): Promise<Tracks> { return this.tracksRepository.findOne({ where: { id } }); }
    
    create(Tracks: Tracks): Promise<Tracks> { return this.tracksRepository.save(Tracks); }
    
    async remove(id: number): Promise<void> { await this.tracksRepository.delete(id); }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tracks } from 'src/tracks.entity';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { Artist } from 'src/artist.entity';
import { Duration } from 'src/duration.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Tracks, Artist, Duration])],
    providers: [TracksService],
    controllers: [TracksController]    
})
export class TracksModule {}

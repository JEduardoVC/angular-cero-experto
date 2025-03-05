import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { Tracks } from 'src/tracks.entity';

@Controller('tracks')
export class TracksController {
    constructor(private readonly tracksService: TracksService){}
    
    @Get()
    findAll(): Promise<Tracks[]> { return this.tracksService.findAll(); }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Tracks> { return this.tracksService.findOne(id); }

    @Post()
    create(@Body() usuario: Tracks): Promise<Tracks> { return this.tracksService.create(usuario); }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> { return this.tracksService.remove(id); }
}

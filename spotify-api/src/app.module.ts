import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TracksModule } from './tracks/tracks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // o la dirección de tu base de datos
      port: 3306,
      username: 'root',
      password: '',
      database: 'spotify',
      autoLoadEntities: true,
      synchronize: true, // Solo en desarrollo, desactívalo en producción
    }),
    TracksModule,
  ]
})
export class AppModule {}

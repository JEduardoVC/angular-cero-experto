import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: 'http://localhost:4200', // Aquí especificas el dominio de tu front-end
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,  // Si deseas permitir el envío de cookies o autorizaciones HTTP
  });
  
  await app.listen(3000);
}
bootstrap();

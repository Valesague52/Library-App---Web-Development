import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common'; // Agregado para buenas prácticas

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Define el prefijo global para todas las rutas HTTP (/api)
  app.setGlobalPrefix('api');

  // BUENA PRÁCTICA: Habilita la validación global de los DTOs
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

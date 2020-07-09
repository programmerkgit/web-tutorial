import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: [ 'http://loclalhost:3200' ],
  });
  await app.listen(3000);
}

bootstrap();

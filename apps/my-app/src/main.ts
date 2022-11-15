import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { MyAppModule } from './my-app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(MyAppModule, {
    transport: Transport.TCP,
    options: {
      port: 4000,
    },
  });
  await app.listen();
}
bootstrap();

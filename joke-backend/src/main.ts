import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MONGODB_PASSWORD } from './config';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await mongoose
    .connect(
      `mongodb+srv://artemvdiachenko:${MONGODB_PASSWORD}@joke-workshop.q5ubh.mongodb.net/?retryWrites=true&w=majority&appName=joke-workshop`,
    )
    .then(() => console.log('Connected to DB'));
  app.enableCors();
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();

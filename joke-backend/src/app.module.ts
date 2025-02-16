import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokeController } from './joke/joke.controller';
import { JokeService } from './joke/joke.service';
import { JokeModule } from './joke/joke.module';

@Module({
  imports: [JokeModule],
  controllers: [AppController, JokeController],
  providers: [AppService, JokeService],
})
export class AppModule {}

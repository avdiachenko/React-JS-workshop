import { Controller, Get } from '@nestjs/common';
import { JokeService } from './joke.service';
import { Joke } from './entities/Joke';

@Controller('api/joke')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Get()
  getJoke(): Promise<Joke> {
    return this.jokeService.getRandomJoke();
  }
}

import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { JokeService } from './joke.service';
import { Joke } from './entities/Joke';

@Controller('api/joke')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Get()
  getJoke(): Promise<Joke> {
    return this.jokeService.getRandomJoke();
  }

  @Patch(':id')
  vote(@Param('id') id: string, @Body() body: any): Promise<Joke | null> {
    if (body.emoji) {
      return this.jokeService.vote(id, body.emoji as string);
    } else {
      return new Promise(() => null);
    }
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  ValidationPipe,
} from '@nestjs/common';
import { JokeService } from './joke.service';
import { Joke } from './entities/Joke';
import { VoteDto } from './dto/VoteDto';

@Controller('api/joke')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Get()
  getJoke(): Promise<Joke> {
    return this.jokeService.getRandomJoke();
  }

  @Patch(':id')
  vote(
    @Param('id') id: string,
    @Body(ValidationPipe) body: VoteDto,
  ): Promise<Joke | null> {
    return this.jokeService.vote(id, body.emoji);
  }
}

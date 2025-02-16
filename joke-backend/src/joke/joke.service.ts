import { Injectable } from '@nestjs/common';
import { Joke } from './entities/Joke';
import { TeeheeApiService } from 'src/teehee_api/teehee_api.service';

@Injectable()
export class JokeService {
  constructor(private readonly teeheeApiService: TeeheeApiService) {}

  async getRandomJoke(): Promise<Joke> {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      const teeheeJoke = await this.teeheeApiService.getRandomJoke();
      // TODO: check if already in db
      const joke = {
        api_id: teeheeJoke.id,
        question: teeheeJoke.question,
        answer: teeheeJoke.answer,
        votes: [],
        availableVotes: ['😆', '😅', '😇', '🤪'],
      };
      // TODO: insert into db
      return joke;
    } else {
      return {
        api_id: '',
        question: 'a',
        answer: 'b',
        votes: [],
        availableVotes: ['😆', '😅', '😇', '🤪'],
      };
    }
  }
}

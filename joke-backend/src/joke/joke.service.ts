import { Injectable } from '@nestjs/common';
import { Joke } from './entities/Joke';
import { TeeheeApiService } from 'src/teehee_api/teehee_api.service';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class JokeService {
  constructor(
    private readonly teeheeApiService: TeeheeApiService,
    private readonly databaseService: DatabaseService,
  ) {}

  async getRandomJoke(): Promise<Joke> {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      const teeheeJoke = await this.teeheeApiService.getRandomJoke();
      const result = await this.databaseService.findJoke({
        api_id: teeheeJoke.id,
      });
      if (!result) {
        const joke = {
          api_id: teeheeJoke.id,
          question: teeheeJoke.question,
          answer: teeheeJoke.answer,
          votes: [],
          availableVotes: ['😆', '😅', '😇', '🤪'],
        };
        return await this.databaseService.insertJoke(joke);
      } else {
        return result;
      }
    } else {
      const joke = await this.databaseService.findRandomJoke();
      return (
        joke || {
          api_id: '',
          question: 'a',
          answer: 'b',
          votes: [],
          availableVotes: ['😆', '😅', '😇', '🤪'],
        }
      );
    }
  }
}

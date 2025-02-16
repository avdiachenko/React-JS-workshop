import { Injectable } from '@nestjs/common';
import { Joke } from './entities/Joke';

@Injectable()
export class JokeService {
  getRandomJoke(): Joke {
    return {
      question: 'a',
      answer: 'b',
      votes: [],
      availableVotes: ['😆', '😅', '😇', '🤪'],
    };
  }
}

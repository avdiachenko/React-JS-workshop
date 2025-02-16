import { Injectable } from '@nestjs/common';
import { JOKE_API_URL } from 'src/config';
import { TeeheeJoke } from './entities/TeeheeJoke';

@Injectable()
export class TeeheeApiService {
  async getRandomJoke(): Promise<TeeheeJoke> {
    return <TeeheeJoke>(<unknown>(await fetch(JOKE_API_URL)).json());
  }
}

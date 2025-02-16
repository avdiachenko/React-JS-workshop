import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { Joke } from 'src/joke/entities/Joke';

const jokeSchema = new mongoose.Schema({
  api_id: String,
  question: String,
  answer: String,
  votes: [
    {
      count: Number,
      label: String,
    },
  ],
  availableVotes: [String],
});

const JokeModel = mongoose.model('joke', jokeSchema);

@Injectable()
export class DatabaseService {
  async findJoke(filter: object): Promise<Joke | null> {
    return await JokeModel.findOne(filter);
  }

  async findRandomJoke(): Promise<Joke | null> {
    const count = await JokeModel.countDocuments();
    const random = Math.floor(Math.random() * count);
    const result = <Joke>(<unknown>await JokeModel.findOne().skip(random));
    return result;
  }

  async insertJoke(joke: Joke): Promise<Joke> {
    const result = <Joke>(<unknown>await JokeModel.insertOne(joke));
    return result;
  }
}

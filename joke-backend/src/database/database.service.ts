import { HttpException, Injectable } from '@nestjs/common';
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

  async voteJoke(id: string, emoji: string): Promise<Joke | null> {
    const joke = <Joke>(<unknown>await JokeModel.findOne({ _id: id }));
    if (joke) {
      if (!joke.availableVotes.includes(emoji)) {
        throw new HttpException('Reaction not available', 400);
      }
      for (const vote of joke.votes) {
        if (vote.label == emoji) {
          vote.count++;
        }
      }
      await JokeModel.updateOne({ _id: id }, { votes: joke.votes });
      return joke;
    } else {
      throw new HttpException('No such joke', 400);
    }
  }
}

class Vote {
  count: number;
  label: string;
}

export class Joke {
  question: string;
  answer: string;
  votes: Vote[];
  availableVotes: string[];
}

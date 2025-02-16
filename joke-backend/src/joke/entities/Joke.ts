class Vote {
  count: number;
  label: string;
}

export class Joke {
  api_id: string;
  question: string;
  answer: string;
  votes: Vote[];
  availableVotes: string[];
}

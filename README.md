This is my app for the Dataart Winter IT Camp 2025, 

Backend is developed using NestJS, frontend - ReactJS.

Backend:
GET /api/joke - get random joke. 50% probability that this is a joke that somebody has seen before, so it has been stored in the DB with reactions. 50% probability that the joke is fetched from Teehee Joke API.
PATCH /api/joke:id - pass an emoji in body to vote for it.

Frontend:
Showing a joke, reacting to a joke, continuing to the next joke.
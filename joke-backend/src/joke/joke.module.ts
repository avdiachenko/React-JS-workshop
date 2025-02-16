import { Module } from '@nestjs/common';
import { JokeController } from './joke.controller';
import { JokeService } from './joke.service';
import { DatabaseModule } from 'src/database/database.module';
import { TeeheeApiModule } from 'src/teehee_api/teehee_api.module';

@Module({
  imports: [DatabaseModule, TeeheeApiModule],
  controllers: [JokeController],
  providers: [JokeService],
})
export class JokeModule {}

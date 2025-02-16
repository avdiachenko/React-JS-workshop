import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokeModule } from './joke/joke.module';
import { DatabaseModule } from './database/database.module';
import { TeeheeApiModule } from './teehee_api/teehee_api.module';

@Module({
  imports: [JokeModule, DatabaseModule, TeeheeApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

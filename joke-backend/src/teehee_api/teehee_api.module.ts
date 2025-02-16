import { Module } from '@nestjs/common';
import { TeeheeApiService } from './teehee_api.service';

@Module({
  providers: [TeeheeApiService],
})
export class TeeheeApiModule {}

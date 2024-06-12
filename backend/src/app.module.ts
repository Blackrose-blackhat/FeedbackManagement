import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { FeedbackModule } from './feedback/feedback.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 10000,
        limit: 1,
      },
    ]),
    FeedbackModule,
  ],
  controllers:[AppController],
})
export class AppModule {}

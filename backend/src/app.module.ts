import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { FeedbackModule } from './feedback/feedback.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    FeedbackModule,
  ],
  controllers:[AppController],
})
export class AppModule {}

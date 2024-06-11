import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { FeedbackService } from './feedback.service';

class CreateFeedbackDto {
  name: string;
  feedback: string;
}

@UseGuards(ThrottlerGuard)
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  getAllFeedback() {
    return this.feedbackService.findAll();
  }

  @Post()
  createFeedback(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.create(
      createFeedbackDto.name,
      createFeedbackDto.feedback,
    );
  }
}

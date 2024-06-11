// src/feedback/feedback.service.ts
import { Injectable } from '@nestjs/common';
import { Feedback } from './feedback.entity';

@Injectable()
export class FeedbackService {
  private feedbacks: Feedback[] = [];
  private idCounter = 1;

  findAll(): Feedback[] {
    return this.feedbacks;
  }

  create(name: string, feedback: string): Feedback {
    const newFeedback = new Feedback(this.idCounter++, name, feedback);
    this.feedbacks.push(newFeedback);
    return newFeedback;
  }
}

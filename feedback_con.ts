import { Injectable } from '@nestjs/common';
import { Feedback } from './src/feedback/feedback.interface';

@Injectable()
export class FeedbackService {
  private feedbackEntries: Feedback[] = [];

  getFeedbackEntries(): Feedback[] {
    return this.feedbackEntries;
  }

  addFeedback(feedback: Feedback): void {
    this.feedbackEntries.push(feedback);
  }
}
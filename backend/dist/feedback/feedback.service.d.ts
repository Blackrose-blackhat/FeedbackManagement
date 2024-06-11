import { Feedback } from './feedback.entity';
export declare class FeedbackService {
    private feedbacks;
    private idCounter;
    findAll(): Feedback[];
    create(name: string, feedback: string): Feedback;
}

import { FeedbackService } from './feedback.service';
declare class CreateFeedbackDto {
    name: string;
    feedback: string;
}
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    getAllFeedback(): import("./feedback.entity").Feedback[];
    createFeedback(createFeedbackDto: CreateFeedbackDto): import("./feedback.entity").Feedback;
}
export {};

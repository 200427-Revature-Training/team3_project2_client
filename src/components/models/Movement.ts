import { User } from '../models/User';


export interface Movement {
    moveId?: number;
    moveGoal: number;
    moveStart: Date | string;
    moveExpire?: Date | string;
    moveDescription: string;
    moveAuthor: User | string | number;
    moveApprover?: User | string | number; 
    moveStatus: number | string;
    moveType: number | string;
}
import { User } from '../models/User';


export interface Movement {

    id?: number;
    goal: number;
    current: number;
    start: Date | string;
    expire?: Date | string | null;
    description: string;
    author: User | number;
    approver?: User | string | number | null; 
    status: {id: number, movementStatus: string}| number;
    type: {id: number, movementType: string} | number;
    image: string;
    name: string;

    
}




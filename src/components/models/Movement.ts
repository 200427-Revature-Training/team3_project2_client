import { User } from '../models/User';


export interface Movement {
    id?: number;
    goal: number;
    current: number;
    start: Date | string;
    expire?: Date | string;
    description: string;
    author: User ;
    approver?: User | string | number; 
    status: {id: number, movementStatus: string};
    type: {id: number, movementType: string};
    image: string;
    name: string;

    
}



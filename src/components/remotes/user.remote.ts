import { internalAxios } from './internal-axios'
import { User } from '../models/User';
import { Movement } from '../models/Movement';


//Returns ticket array for admin
export const getAllMovements = async () => {

    const response = await internalAxios.get<Movement[]>('/movement');
    return response.data.map(movements => {
        return movements;
    });
}



export const makeNewMovement = async (movememnt : Movement) => {

    const response = await internalAxios.post<Movement[]>('/movement', {movememnt});
    return response.data.map(movements => {
        return movements; 
    });
}
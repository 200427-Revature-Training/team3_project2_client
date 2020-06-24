import { internalAxios } from './internal-axios'
import { User } from '../models/User';
import { Movement } from '../models/Movement';




export const getAllMovements = async (id: number) => {
    
    const response = await internalAxios.post<Movement[]>('', {id});
    console.log(response);
    
    return response.data.map(movements => {
        return movements;
    });
}

export const getApprover = async (id: number) => {

    const response = await internalAxios.post<User[]>('', {id});
    return response.data.map(users => {
        return users;
    });
}

export const makeNewMovement = async (movememnt : Movement) => {
    
    const response = await internalAxios.post<Movement[]>('', {movememnt});
    return response.data.map(users => {
        return users;
    });
}
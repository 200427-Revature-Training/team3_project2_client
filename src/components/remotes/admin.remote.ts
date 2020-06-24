import { internalAxios } from './internal-axios'
import { User } from '../models/User';
import { Movement } from '../models/Movement';


//Returns ticket array for admin
export const getAllMovements = async () => {
    
    const response = await internalAxios.get<Movement[]>('');    
    return response.data.map(movements => {
        return movements;
    });
}

export const getUserById = async (id: Number | string | User) => {

    const response = await internalAxios.post<User[]>('', {id});
    return response.data.map(users => {
        return users;
    });
}

//Returns tickets with matching status string
export const filterTickets = async (status: string) => {

    const response = await internalAxios.post<Movement[]>('',  {
        status
      });
    return response.data.map(movements => {
        return movements;
    });
}

export const changeStatus = async (movement : Movement) => {
    const response = await internalAxios.post<Movement[]>('', {movement});
    return response.data.map(movements => {
        return movements;
    });
}
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

export const getUserById = async (id: Number) => {



    const response = await internalAxios.get<User[]>('/user/id', {
        params: {
            id: id
        }
    });
    return response.data.map(users => {
        return users;
    });
}

//Returns movements with matching status string
export const getMovementByStatus = async (status: string) => {

    const response = await internalAxios.get<Movement[]>('/movement/status/stat', {
        params: {
            stat: status
        }
    });
    return response.data.map(movements => {
        return movements;
    });
}

export const changeStatus = async (movement: Movement) => {
    const response = await internalAxios.put<Movement[]>('/movement', { movement });
    return response.data.map(movements => {
        return movements;
    });
}
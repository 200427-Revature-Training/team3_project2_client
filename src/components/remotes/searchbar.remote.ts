import { internalAxios } from './internal-axios';
import { User } from '../models/User';
import { Movement } from '../models/Movement';

export const getMovementById = async (id: Number | string | User) => {

    const response = await internalAxios.post<Movement[]>('', {id});
    return response.data.map(movements => {
        return movements;
    });
}

export const getMovementByStatus = async (status: string) => {

    const response = await internalAxios.post<Movement[]>('',  {status});
    return response.data.map(movements => {
        return movements;
    });
}

export const getMovementByName = async (name: Number | string | User) => {

    const response = await internalAxios.post<Movement[]>('', {name});
    return response.data.map(movements => {
        return movements;
    });
}

export const getMovementByKeyword = async (word: string) => {

    const response = await internalAxios.post<Movement[]>('',  {word});
    return response.data.map(movements => {
        return movements;
    });
}

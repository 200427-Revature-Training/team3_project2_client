import { internalAxios } from './internal-axios';
import { User } from '../models/User';
import { Movement } from '../models/Movement';

export const getMovementById = async (id: Number) => {

    const response = await internalAxios.get<Movement[]>('/movement/id', {
        params: {
            id: id
        }
    });
    return response.data.map(movements => {
        return movements;
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

//Returns movements with matching type string
export const getMovementByType = async (type: string) => {

    const response = await internalAxios.get<Movement[]>('/movement/type/type', {
        params: {
            type: type
        }
    });
    return response.data.map(movements => {
        return movements;
    });
}

export const getMovementByKeyword = async (word: string) => {

    const response = await internalAxios.get<Movement[]>('/movement/search/word', {
        params: {
            word: word
        }
    });
    return response.data.map(movements => {
        return movements;
    });
}

export const getAllMovements = async () => {

    const response = await internalAxios.get<Movement[]>('/movement');
    return response.data.map(movements => {
        return movements;
    });
}
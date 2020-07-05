import { internalAxios } from './internal-axios'
import { User } from '../models/User';


export const login = async (logger: User) => {
    const response = await internalAxios.post<User[]>('', logger);
    return response.data.map(user => {
        return user;
    });
}

export const signup = async (logger: User) => {
    console.log (logger);

    const response = await internalAxios.post<User>('/user', logger);
         
        return response.data;
    
}
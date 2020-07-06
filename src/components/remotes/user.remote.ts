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

    const response = await internalAxios.post<Movement>('/movement', movememnt);
 
        return response.data; 

}

//Returns movements with matching status string
export const getMovementByUser = async (id: number) => {

    const response = await internalAxios.get<Movement[]>('/movement/user/' + id, {
        
    });
   // console.log(response);
    return response.data.map(movements => {
        return movements;
    });
}

//Returns movements with matching userid number
export const getMovementByStatus = async (id: number) => {

    const response = await internalAxios.get<Movement[]>('/movement/user/id', {
        params: {
            id: id
        }
    });
    return response.data.map(movements => {
        return movements;
    });
}
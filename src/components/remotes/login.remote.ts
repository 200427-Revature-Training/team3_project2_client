import { internalAxios } from './internal-axios'
import { User,User2 } from '../models/User';
import { Token } from '../models/Token';


export const login = async (logger: User) => {
  
    const response = await internalAxios.post<Token>('/user/login', logger);
 
   var token = response.data;
   console.log(token);

    

        return getUserByEmail(logger.email,token);

}

export const getUserByEmail = async (email: String, tok : Token) => {
    const config = {
        headers: { Authorization: `Bearer ${tok.accessToken}` }
    };


    const response = await internalAxios.get<User2>('/user/email/'+ email, config);
    console.log(response.data);

    
        return response.data;
   
}

export const signup = async (logger: User) => {
    console.log (logger);
    const response = await internalAxios.post<User>('/user/signup', logger);
         
        return response.data;
    
}
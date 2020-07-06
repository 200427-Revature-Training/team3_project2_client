

export interface User {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: {id: number, userRole: string} | number;
}  

export interface User2 {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    userRoleId: {id: number, userRole: string};
}  
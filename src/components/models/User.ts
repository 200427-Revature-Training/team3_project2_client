

export interface User {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: {id: number, userRole: string} | number;
}  


export interface User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    roleId: {id: number, userRole: string} | number;
}  
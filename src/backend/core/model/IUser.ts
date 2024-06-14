import {UserRole} from "@/backend/core/valueObject/UserRole";

export interface IUser {
    id?: any
    name: string
    email?: string
    password: string
    role?: UserRole
    createdAt?: any
    updatedAt?: any
}

interface UserForSelect {
    id: any
    name: any
    email?: any
}
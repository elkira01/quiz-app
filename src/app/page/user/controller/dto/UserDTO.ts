import {UserRole} from "@/backend/domain/model/User";

export type UserDTO = {
    id?: any
    name: string
    email?: string
    password: string
    role?: UserRole
    createdAt?: any
    updatedAt?: any
}
import {UserRole} from "@/backend/core/valueObject/UserRole";

export type UserDTO = {
    id?: any
    name: string
    email?: string
    password: string
    role?: UserRole
}
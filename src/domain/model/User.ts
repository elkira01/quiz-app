export enum UserRole {
    ADMIN = 'admin',
    PLAYER = 'player'
}

export interface User {
    id?: any
    name: string
    email?: string
    password: string
    role?: UserRole
    createdAt?: any
    updatedAt?: any
}
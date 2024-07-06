import {IUser} from "./IUser";

export interface IQuizDomain {
    id?: any
    designation: string
    description?: string
    author: Partial<IUser>
    createdAt?: any
    updatedAt?: any
}
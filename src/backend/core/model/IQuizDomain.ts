import {IUser} from "@/backend/core/model/IUser";

export interface IQuizDomain {
    id?: any
    designation: string
    author: Partial<IUser>
    createdAt?: any
    updatedAt?: any
}
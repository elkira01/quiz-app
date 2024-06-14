import {User} from "@/backend/domain/model/User";

export interface IQuizDomain {
    id?: any
    designation: string
    author: Partial<User>
    createdAt?: any
    updatedAt?: any
}
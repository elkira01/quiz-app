import {User} from "@/backend/domain/model/User";

export interface QuizDomain {
    id?: any
    designation: string
    author: Partial<User>
    createdAt?: any
    updatedAt?: any
}
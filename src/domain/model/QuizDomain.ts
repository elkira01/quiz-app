import {User} from "@/domain/model/User";

export interface QuizDomain {
    id?: any
    designation: string
    authorId: Partial<User>
    createdAt?: any
    updatedAt?: any
}
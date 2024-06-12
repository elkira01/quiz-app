import {User} from "@/domain/model/User";
import {QuizDomain} from "@/domain/model/QuizDomain";

export interface Quiz {
    id?: any
    title: string
    level: any
    category: Partial<QuizDomain>
    author: Partial<User>
    entries?: Partial<QuizQuestion>[] |[]
    createdAt?: any
    updatedAt?: any
}

export interface QuizQuestion {
    id?: any
    statement: string
    propositions: QuizProposition[] | []
    response: {order?: number, value?: string}
    quizId: any
    createdAt?: any
    updatedAt?: any
}

export interface QuizProposition {
    id?: any
    content: string
    questionId?: any
    createdAt?: any
    updatedAt?: any
}

export enum QuizLevel {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}
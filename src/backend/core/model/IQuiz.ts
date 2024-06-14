import {User} from "@/backend/domain/model/User";
import {QuizDomain} from "@/backend/domain/model/QuizDomain";

export interface IQuiz {
    id?: any
    title: string
    level: QuizLevel
    category: Partial<QuizDomain>
    author: Partial<User>
    entries?: Partial<QuizQuestion>[] |[]
    createdAt?: any
    updatedAt?: any
}

export interface QuizQuestion {
    id?: any
    quizId: any
    statement: string
    propositions: QuizProposition[] | []
    response: { order?: number, value?: string }
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
import {IUser} from "./IUser";
import {IQuizDomain} from "./IQuizDomain";

export interface IQuiz {
    id?: any
    title: string
    level: QuizLevel
    category: Partial<IQuizDomain>
    author: Partial<IUser>
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
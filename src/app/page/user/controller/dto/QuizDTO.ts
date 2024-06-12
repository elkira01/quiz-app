import {QuizQuestion} from "@/backend/domain/model/Quiz";

export type QuizDTO = {
    id?: any
    title: string
    level: any
    categoryId: any
    authorId: any
    entries?: Partial<QuizQuestion>[] |[]
    createdAt?: any
    updatedAt?: any
}
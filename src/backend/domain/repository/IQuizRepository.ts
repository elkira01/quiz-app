import {Quiz, QuizQuestion} from "@/backend/domain/model/Quiz";

export interface IQuizRepository {
    create(quiz: Quiz): Promise<any>
    fetchOne(quizId: any): Promise<Quiz | undefined>
    fetchAll(queryParams?: any): Promise<Quiz[] | undefined>
    edit(quizId: any, data: any): Promise<any>
    delete(quizId: any): Promise<any>
    fetchAllEntries(quizId: any): Promise<QuizQuestion[] | undefined>
}
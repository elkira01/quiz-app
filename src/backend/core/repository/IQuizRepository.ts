import {IQuiz, QuizQuestion} from "@/backend/core/model/IQuiz";

export interface IQuizRepository {
    create(quiz: IQuiz): Promise<any>
    fetchOne(quizId: any): Promise<IQuiz | undefined>
    fetchAll(queryParams?: any): Promise<IQuiz[] | undefined>
    edit(quizId: any, data: any): Promise<any>
    delete(quizId: any): Promise<any>
    fetchAllEntries(quizId: any): Promise<QuizQuestion[] | undefined>
}
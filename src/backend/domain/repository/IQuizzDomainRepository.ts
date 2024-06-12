import {QuizDomain} from "@/backend/domain/model/QuizDomain";

export interface IQuizDomainRepository {
    create(data: QuizDomain) : Promise<any>
    update(id: any, data: QuizDomain) : Promise<any>
    delete(id: any) : Promise<any>
    fetchOne(id: any) : Promise<QuizDomain | undefined>
    fetchAll(queryParams?: any) : Promise<QuizDomain[] | undefined>
}
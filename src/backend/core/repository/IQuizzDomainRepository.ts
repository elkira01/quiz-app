import {IQuizDomain} from "@/backend/core/model/IQuizDomain";

export interface IQuizDomainRepository {
    create(data: IQuizDomain) : Promise<any>
    update(id: any, data: IQuizDomain) : Promise<any>
    delete(id: any) : Promise<any>
    findOne(id: any) : Promise<IQuizDomain | undefined>
    findAll(queryParams?: any) : Promise<IQuizDomain[] | undefined>
}

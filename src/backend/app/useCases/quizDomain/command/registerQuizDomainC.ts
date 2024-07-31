import {IQuizDomainRepository} from "@/backend/core/repository/IQuizzDomainRepository";
import {IQuizDomain} from "@/backend/core/model/IQuizDomain";

export const registerQuizDomainC = async (
    repository: IQuizDomainRepository,
    data: IQuizDomain
): Promise<any> => {
    try {
        return await repository.create(data)
    }
    catch (e) {
       throw new Error(`${e}`);
    }
}
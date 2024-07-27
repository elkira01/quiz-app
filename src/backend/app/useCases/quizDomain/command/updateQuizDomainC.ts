import {IQuizDomainRepository} from "@/backend/core/repository/IQuizzDomainRepository";
import {IQuizDomain} from "@/backend/core/model/IQuizDomain";

export const updateQuizDomainC = async (
    repository: IQuizDomainRepository,
    id: any,
    data: IQuizDomain
)   :Promise<void> => {
    try {
        return await repository.update(id, data)
    }
    catch (e) {
        throw new Error(`${e}`);
    }
}


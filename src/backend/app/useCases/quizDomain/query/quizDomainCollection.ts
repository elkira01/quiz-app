import {IQuizDomainRepository} from "@/backend/core/repository/IQuizzDomainRepository";
import {IQuizDomain} from "@/backend/core/model/IQuizDomain";

export const quizDomainCollection = async (
    repository: IQuizDomainRepository
): Promise<IQuizDomain[] | undefined> =>
{
    try {
        return await repository.findAll()
    }
    catch (e) {
        throw new Error(`${e}`);
    }
}

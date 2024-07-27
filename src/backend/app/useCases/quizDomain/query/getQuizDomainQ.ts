import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUser} from "@/backend/core/model/IUser";
import {IQuizDomainRepository} from "@/backend/core/repository/IQuizzDomainRepository";
import {IQuizDomain} from "@/backend/core/model/IQuizDomain";

export const getQuizDomainQ = async (
    repository: IQuizDomainRepository,
    id: any
): Promise<IQuizDomain | undefined> => {
    try {
        return await repository.findOne(id)
    }
    catch (e) {
        throw new Error(`${e}`)
    }
}
import {IQuizDomainRepository} from "@/backend/core/repository/IQuizzDomainRepository";

export const deleteQuizDomainC = async (
    repository: IQuizDomainRepository,
    id: any
): Promise<any> => {
    try {
        return await repository.delete(id)
    }
    catch (e) {
       throw new Error(`${e}`);
    }
}
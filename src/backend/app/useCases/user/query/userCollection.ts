import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUser} from "@/backend/core/model/IUser";

export const userCollection = async (
    repository: IUserRepository
): Promise<IUser[] | undefined> =>
{   
    return await repository.findAll()
}

import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUser} from "@/backend/core/model/IUser";

export const getUserQuery = async (
    repository: IUserRepository,
    id: any
): Promise<IUser | undefined> => {
    return await repository.findOne(id)
}
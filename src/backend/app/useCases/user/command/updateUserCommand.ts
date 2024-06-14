import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUser} from "@/backend/core/model/IUser";


export const updateUserCommand = async (
    repository: IUserRepository,
    id: any,
    data: IUser
)   :Promise<void> => {
    return await repository.update(id, data)
}


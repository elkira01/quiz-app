import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUser} from "@/backend/core/model/IUser";

export const registerUserCommand = async (
    repository: IUserRepository,
    data: IUser
): Promise<any> => {
    return await repository.create(data)
}
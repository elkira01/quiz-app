import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUser} from "@/backend/core/model/IUser";

export const deleteUserC = async (
    repository: IUserRepository,
    id: any
): Promise<any> => {
    try {
        return await repository.delete(id)
    }
    catch (e) {
       throw new Error(`${e}`);
    }
}
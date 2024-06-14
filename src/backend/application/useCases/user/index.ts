import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUser} from "@/backend/core/model/IUser";

export const register = async (
    repository: IUserRepository,
    data: IUser
): Promise<any> => {
    return await repository.create(data)
}

export const login = async (
    repository: IUserRepository,
    data: any
): Promise<void> => {

}

export const fetchOne = async (
    repository: IUserRepository,
    id: any
): Promise<IUser | undefined> => {
    return await repository.fetchOne(id)
}

export const fetchAll = async (
    repository: IUserRepository
): Promise<IUser[] | undefined> => {
    return await repository.fetchAll()
}

export const update = async (
    repository: IUserRepository,
    id: any,
    data: IUser
)   :Promise<void> => {
    return await repository.update(id, data)
}


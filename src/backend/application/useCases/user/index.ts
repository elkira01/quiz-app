import {IUserRepository} from "@/backend/domain/repository/IUserRepository";
import {User} from "@/backend/domain/model/User";

export const register = async (
    repository: IUserRepository,
    data: User
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
): Promise<User | undefined> => {
    return await repository.fetchOne(id)
}

export const fetchAll = async (
    repository: IUserRepository
): Promise<User[] | undefined> => {
    return await repository.fetchAll()
}

export const update = async (
    repository: IUserRepository,
    id: any,
    data: User
)   :Promise<void> => {
    return await repository.update(id, data)
}


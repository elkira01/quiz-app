import {User} from "@/domain/model/User";

export interface IUserRepository {
    create(data: User) : Promise<any>
    fetchOne(id: any) : Promise<User | undefined>
    fetchAll() : Promise<User[] | undefined>
    update(id: any, data: User) : Promise<any>
    delete(id: any) : Promise<any>
}

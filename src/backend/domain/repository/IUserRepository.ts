import {User} from "@/backend/domain/model/User";

export interface IUserRepository {
    create(data: User) : Promise<any>
    fetchOne(id: any) : Promise<User | undefined>
    fetchAll() : Promise<any[]>

    update(id: any, data: User) : Promise<any>
    delete(id: any) : Promise<any>
}

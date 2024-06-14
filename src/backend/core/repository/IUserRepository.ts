import {IUser} from "@/backend/core/model/IUser";

export interface IUserRepository {
    create(data: IUser) : Promise<any>
    update(id: any, data: IUser) : Promise<any>
    delete(id: any) : Promise<any>

    findOne(id: any) : Promise<IUser | undefined>
    findAll() : Promise<any[]>
    findBy(condition: any | any[]): Promise<any[]>
}

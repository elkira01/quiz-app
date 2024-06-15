import {IUser} from "@/backend/core/model/IUser";

export interface IUserRepository {
    create(data: IUser) : any
    update(id: any, data: IUser) : any
    delete(id: any) : any

    findOne(id: any) : any
    findAll() : any
    findBy(condition: any | any[]): any
}

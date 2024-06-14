import prismaClient from "@/lib/PrismaClient";
import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUser} from "@/backend/core/model/IUser";

export class UserRepositoryImpl implements IUserRepository {
    create(data: IUser): Promise<any> {
        return prismaClient.user.create({
            data: data
        })
    }

    delete(id: any): Promise<any> {
        return prismaClient.user.delete({
            where: id
        })
    }

    fetchAll(): Promise<any[]> {
        return prismaClient.user.findMany();
    }

    fetchOne(id: any): Promise<any | undefined> {
        return prismaClient.user.findUnique({
            where: id
        });
    }

    update(id: any, data: IUser): Promise<any> {
        return prismaClient.user.update({
            where: id,
            data: {
                name: data.name,
                email: data.email,
                password:  data.password,
                role: data.role,
            }
        });
    }

}
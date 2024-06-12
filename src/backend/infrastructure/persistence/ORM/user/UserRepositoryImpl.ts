import {IUserRepository} from "@/backend/domain/repository/IUserRepository";
import {User} from "@/backend/domain/model/User";
import prismaClient from "@/backend/infrastructure/framework/PrismaClient";

export class UserRepositoryImpl implements IUserRepository {
    create(data: User): Promise<any> {
        return prismaClient.user.create({
            data: {
                name: data.name,
                email: data.email,
                password:  data.password,
                role: data.role,
            }
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

    update(id: any, data: User): Promise<any> {
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
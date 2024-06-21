import {IQuizDomainRepository} from "@/backend/core/repository/IQuizzDomainRepository";
import {IQuizDomain} from "@/backend/core/model/IQuizDomain";
import prismaClient from "@/lib/PrismaClient";

export class QuizDomainRepositoryImpl implements IQuizDomainRepository {
    create(data: IQuizDomain): Promise<any> {
        return prismaClient.quizCategory.create({
            data: {
                ...data,
                author: {
                    connect: {
                        id: data.author.id
                    }
                }
            }
        })
    }

    delete(id: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    findAll(queryParams?: any): Promise<any[]> {
        return prismaClient.quizCategory.findMany()
    }

    findOne(id: any): Promise<any> {
        return prismaClient.quizCategory.findUnique({
            where: {
                id: id
            }
        });
    }

    update(id: any, data: IQuizDomain): Promise<any> {
        return Promise.resolve(undefined);
    }

}
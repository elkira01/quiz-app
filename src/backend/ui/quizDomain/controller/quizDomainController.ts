"use server"


import {IQuizDomainRepository} from "@/backend/core/repository/IQuizzDomainRepository";
import {QuizDomainRepositoryImpl} from "@/backend/infra/persistence/quizDomain/QuizDomainRepositoryImpl";
import {IQuizDomainDTO} from "@/backend/ui/quizDomain/dto/QuizDomainDTO";
import {registerQuizDomainC} from "@/backend/app/useCases/quizDomain/command/registerQuizDomainC";
import {updateQuizDomainC} from "@/backend/app/useCases/quizDomain/command/updateQuizDomainC";
import {quizDomainCollection} from "@/backend/app/useCases/quizDomain/query/quizDomainCollection";
import {getQuizDomainQ} from "@/backend/app/useCases/quizDomain/query/getQuizDomainQ";
import {deleteQuizDomainC} from "@/backend/app/useCases/quizDomain/command/deleteQuizDomainC";

let repository : IQuizDomainRepository = new QuizDomainRepositoryImpl()

export async function createQuizDomain(
    data: IQuizDomainDTO
) {
   return registerQuizDomainC(repository, data)
}

export async function updateQuizDomain(
    categoryId: any,
    data: IQuizDomainDTO
) {
   return updateQuizDomainC(repository, categoryId, data)
}

export async function deleteQuizDomain(
    userId: any
) {
   return deleteQuizDomainC(repository, userId)
}

export async function fetchAllQuizDomain(){
    return await quizDomainCollection(repository);
}

export async function fetchQuizDomain(id: any){
    return await getQuizDomainQ(repository,id)
}


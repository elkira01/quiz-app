"use server"

import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUserDTO} from "@/backend/ui/user/dto/UserDTO";
import {registerUserCommand} from "@/backend/app/useCases/user/command/registerUser";
import {userCollection} from "@/backend/app/useCases/user/query/userCollection";
import UserRepositoryImpl from "@/backend/infra/persistence/user/UserRepositoryImpl";
import {getUserQuery} from "@/backend/app/useCases/user/query/getUser";

let repository : IUserRepository = new UserRepositoryImpl()

export async function createUser(
    data: IUserDTO
) {
   return registerUserCommand(repository, data)
}

export async function fetchAllUser(){
    return await userCollection(repository);
}

export async function fetchUser(id: any){
    return await getUserQuery(repository,id)
}
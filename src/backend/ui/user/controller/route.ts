"use server"

import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUserDTO} from "@/backend/ui/user/dto/UserDTO";
import {registerUserCommand} from "@/backend/app/useCases/user/command/registerUser";
import {userCollection} from "@/backend/app/useCases/user/query/userCollection";
import UserRepositoryImpl from "@/backend/infra/persistence/user/UserRepositoryImpl";

export async function createUser(
    data: IUserDTO
) {
   let repository : IUserRepository = new UserRepositoryImpl()

   return registerUserCommand(repository, data)
}

export async function getAll(){
    let repository : IUserRepository = new UserRepositoryImpl()

    return await userCollection(repository);
}
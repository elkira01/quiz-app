"use server"

import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {UserRepositoryImpl} from "@/backend/infra/persistence/user/UserRepositoryImpl";
import {IUserDTO} from "@/backend/ui/user/dto/UserDTO";
import {registerUserCommand} from "@/backend/app/useCases/user/command/registerUser";

export default async function createUser(
    data: IUserDTO
) {
   let repository : IUserRepository = new UserRepositoryImpl()

   await registerUserCommand()

   console.log(response);
}
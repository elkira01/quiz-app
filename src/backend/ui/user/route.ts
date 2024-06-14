"use server"

import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {UserRepositoryImpl} from "@/backend/infra/persistence/user/UserRepositoryImpl";
import {IUserDTO} from "@/backend/ui/user/dto/UserDTO";

export default async function createUser(
    data: IUserDTO
) {
   let repository : IUserRepository = new UserRepositoryImpl()

   let response = await repository.create(data)

   console.log(response);
}
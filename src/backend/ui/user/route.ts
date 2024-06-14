"use server"

import {UserDTO} from "@/app/page/user/controller/dto/UserDTO";
import prismaClient from "@/lib/PrismaClient";
import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {UserRepositoryImpl} from "@/backend/infrastructure/persistence/ORM/user/route";

export default async function createUser(
    data: UserDTO
) {
   let repository : IUserRepository = new UserRepositoryImpl()

   await repository.create(data)
}
import {useState} from "react";
import {User} from "@/backend/domain/model/User";
import {UserDTO} from "@/app/pages/user/controller/dto/UserDTO";
import {UserRepositoryImpl} from "@/backend/infrastructure/persistence/ORM/user/UserRepositoryImpl";

const UserController = () => {
    const [user, setUser] = useState<User | undefined>()
    const repository = new UserRepositoryImpl();

    const registerUser = async (data: UserDTO) => {
        const user = await repository.create(data)

        console.log(user)
    }

    return {
        user,
        registerUser,
    }
}
export default UserController;
import {useState} from "react";
import {User} from "@/backend/domain/model/User";
import {UserRepositoryImpl} from "@/backend/infrastructure/persistence/ORM/user/UserRepositoryImpl";
import {UserDTO} from "@/app/page/user/controller/dto/UserDTO";
import {register} from "@/backend/application/useCases/user";

const UserController = () => {
    const [user, setUser] = useState<User | undefined>()
    const repository = new UserRepositoryImpl();

    const registerUser = async (data: UserDTO) => {
        const response = await register(repository, data)

        if(!response){
            console.log('An error occured')
        }
        else
            console.log(response)
    }

    return {
        user,
        registerUser,
    }
}
export default UserController;
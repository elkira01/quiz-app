import {useState} from "react";
import {createUser, getAll} from "@/backend/ui/user/controller/route";
import {User} from ".prisma/client";

const UserController = () => {
    const [user, setUser] = useState<User|undefined>()
    const [userList, setUserList] = useState<User[]>()

    const onRegister = async (data: any) => {
       let response: any

        try {
            response = await createUser(data)
            setUser(response)
        }
        catch (e: any) {
            console.log(e.message)
        }
    }

    const list = async () => {
        let response: any

        try {
            response = await getAll()
            setUserList(response)
        }
        catch (e: any) {
            console.log(e.message)
        }
    }

    return {
        user,
        users: userList,
        list,
        onRegister,
    }
}
export default UserController;
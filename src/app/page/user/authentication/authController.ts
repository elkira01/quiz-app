import {useState} from "react";
import {IUser} from "@/backend/core/model/IUser";
import {authenticate, logout} from "@/backend/ui/user/controller/authController";
import {usePathname} from "next/navigation";

const AuthController = () => {
    const [user, setUser] = useState<IUser|undefined>()
    const [isAuth, setIsAth] = useState<boolean|undefined>(undefined)
    const pathname = usePathname()
    const onLogin = async (credential: any) => {
        let response: any = null;

        await authenticate({
            email: credential.email,
            password:  credential.password,
        })
            .then((res: any) => {
                if (res.status === 200) {
                    setUser(res.data)
                    setIsAth(true)
                }
                else if (res.status === 401) {
                    setIsAth(false)
                }
                else console.log('An error occurred')

        })
            .catch((e: any) => {
                console.log(e)
        })
    }

    const onLogout = async () => {
        await logout(`${pathname}`);
    }

    return{
        user,
        isAuth,
        onLogin,
        onLogout,
    }
}

export default AuthController
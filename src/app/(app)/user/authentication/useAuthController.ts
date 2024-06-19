import {authenticate, logout} from "@/backend/ui/user/controller/authController";
import {usePathname} from "next/navigation";
import {useAppStore} from "@/app/shared/stores/provider";
import {AppStore} from "@/app/shared/stores/appStore/appStore";

const UseAuthController = () => {
    const pathname = usePathname()
    const {user, loading,setIsConnected, isLoading} = useAppStore((state: AppStore) => state)

    const onLogin = async (credential: any) => {
        let response: any

        try {
            response= await authenticate({
                email: credential.email,
                password:  credential.password,
            })
            if (response.status === 200) {
                setIsConnected(response.data)
                isLoading(true)
            }
            else if (response.status === 401) {
                console.log('Unauthorized')
            }
            else console.log('An error occurred')

        }
        catch (e) {
            console.log(e)
        }
    }

    const onLogout = async () => {
        await logout(`${pathname}`);
    }

    return{
        user,
        loading,
        onLogin,
        onLogout,
    }
}

export default UseAuthController;
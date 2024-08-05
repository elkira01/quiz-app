'use client'

import authController from "@/app/(app)/user/authentication/useAuthController";
import FormBuilder from "@/app/shared/components/form/FormBuilder";
import {loginInputs, registerInputs} from "@/app/(admin)/_components/forms/config";

const LoginForm = () => {
    const {onLogin} = authController()

    return(
        <FormBuilder inputs={registerInputs} onSubmit={onLogin}/>
    )
}
export default LoginForm;
'use client'

import {z} from 'zod';
import authController from "@/app/(app)/user/authentication/useAuthController";
import FormBuilder from "@/app/shared/components/form/FormBuilder";
import {BuilderInputProps} from "@/app/shared/components/form/_types";

const LoginForm = () => {
    const {isAuth} = authController()

    const builderInputs : BuilderInputProps[] = [
        {
            label: "Town",
            name: "town",
            type: "select_input",
            colSize: {sm: 100},
            options: [
                {value: "New York", label: "New York"},
                {value: "Los Angeles", label: "Los Angeles"},
                {value: "Chicago", label: "Chicago"},
            ],
            placeholder: <span className='text-gray-500'>Choose a town</span>
        },
    ]

    const onSubmit = (data: any) => console.log(data);

    return(
        <>
            <FormBuilder
                initialValues={{ }}
                inputs={builderInputs}
                onSubmit={onSubmit}
            />
    </>)
}
export default LoginForm;
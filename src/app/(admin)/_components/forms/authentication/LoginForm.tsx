'use client'

import {z} from 'zod';
import authController from "@/app/(app)/user/authentication/useAuthController";
import FormBuilder from "@/app/shared/components/form/FormBuilder";
import {BuilderInputProps} from "@/app/shared/components/form/_types";

const LoginForm = () => {
    const {isAuth} = authController()

    window.addEventListener('resize', () => {
        console.log(window.innerWidth)
    },false)
    const schema =
        z.object({
            email: z.string().email(),
            date: z.date(),
            enabled: z.boolean(),
            items: z.array(z.coerce.string()).refine((value) => value.some((item) => item), {
                message: "You have to select at least one item.",
            }),
        })

    const builderInputs : BuilderInputProps[] = [
        // {
        //     label: "Email",
        //     name: "email",
        //     type: "email_input",
        //     colSize: {sm: 49},
        //     validation: {message: "Invalid e-mail address"}
        // },
        // {
        //     label: "Full name",
        //     name: "name",
        //     type: "text_input",
        //     colSize: {sm: 49},
        //     placeholder: 'Placeholder'
        // },
        // {
        //     label: "Password",
        //     name: "password",
        //     type: "password_input",
        //     colSize: {sm: 100},
        //     min: 8
        // },
        // {
        //     label: "Amount",
        //     name: "amount",
        //     type: "numerical_input",
        //     allowNegativeValue: false,
        //     min: 5000,
        //     max: 1000000,
        //     colSize: { sm: 100 },
        // },
        {
            label: "I agree with the contract terms",
            name: "agreement",
            type: "checkbox_input",
        },
        // {
        //     label: "Date",
        //     name: "date",
        //     type: "date_input",
        // },
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
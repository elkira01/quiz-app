'use client'

import {z} from 'zod';
import authController from "@/app/(app)/user/authentication/useAuthController";
import FormBuilder from "@/app/shared/components/form/FormBuilder";
import {BuilderInputProps} from "@/app/shared/components/form/_types";

const LoginForm = () => {
    const {isAuth} = authController()

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
        {
            label: "Date",
            name: "registerDate",
            type: "date_input",
            required: true,
            colSize: {md: 50},
            format: 'YYYY-MM-DD'
        },
        {
            label: "Email",
            name: "email",
            type: "email_input",
            required: true,
            colSize: {md: 50},
            validation: {message: "Invalid e-mail address"}
        },
        {
            label: "Full name",
            name: "name",
            type: "text_input",
            required: true,
            colSize: {md: 100}
        },
        {
            label: "Password",
            name: "password",
            type: "password_input",
            required: true,
            colSize: {md: 100},
            min: 8
        },
        {
            label: "Amount",
            name: "amount",
            type: "numerical_input",
            required: false,
            allowNegativeValue: false,
            colSize: {md: 100},
            min: 5000,
            max: 1000000
        },
    ]

    const onSubmit = (data: any) => console.log(data);

    return(
        <FormBuilder
            initialValues={{ }}
            inputs={builderInputs}
            onSubmit={onSubmit}
        />
    )
}
export default LoginForm;
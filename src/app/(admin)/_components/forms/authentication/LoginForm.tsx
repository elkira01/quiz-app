'use client'

import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Button} from "@/components/ui/button";
import {Form,} from "@/components/ui/form";
import authController from "@/app/(app)/user/authentication/useAuthController";
import {DateInput, FormInput} from "@/app/shared/components/form/inputs";


const LoginForm = () => {
    const { isAuth} = authController()

    const schema =
        z.object({
            email: z.string().email(),
            date: z.date(),
        })

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            date: new Date(),
            email: 'Elkira01@h.com',
        }
    })

    const onSubmit = (data: any) => console.log(data);

    return <Form {...form}>
        {isAuth === false &&
            <div className='bg-red-300 border-2 border-white rounded-md p-3 my-3 text-center text-white font-bold'>
                Invalid credentials provided
            </div>
        }
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-8' data-js-disable-browser-autofill="on">
            <div className='flex flex-wrap justify-between gap-x-[3%] gap-y-3'>
                <div className='basis-full'>
                    <FormInput
                        formControl={form}
                        label='User mail'
                        name='email'
                        inputType='email'
                    />
                </div>
                <div className='basis-full'>
                    <DateInput
                        formControl={form}
                        label='Date'
                        name='date'
                        noFormBlock
                    />
                </div>
                <div className='basis-full'>
                    <Button className="my-5 w-full bg-black">Login</Button>
                </div>
            </div>
        </form>
    </Form>
}
export default LoginForm;
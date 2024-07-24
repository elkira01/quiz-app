'use client'

import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Button} from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import authController from "@/app/(app)/user/authentication/useAuthController";
import {default as Input} from "@/app/shared/components/inputs/BaseInput";


const LoginForm = () => {
    const {onLogin, user, isAuth} = authController()

    const schema =
        z.object({
            email: z.string().email(),
            password: z.string().min(8).max(20),
        })

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            password: '',
            email: '',
        }
    })

    const onSubmit = (data: any) => onLogin(data);

    return <Form {...form}>
        {isAuth === false &&
            <div className='bg-red-300 border-2 border-white rounded-md p-3 my-3 text-center text-white font-bold'>
                Invalid credentials provided
            </div>
        }
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-8' data-js-disable-browser-autofill="on">
            <div className='flex flex-wrap justify-between gap-x-[3%] gap-y-3'>
                <div className='basis-full'>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Username or e-mail</FormLabel>
                                <FormControl>
                                    <Input {...field} type='text'/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <div className='basis-full'>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} type='password' />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
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
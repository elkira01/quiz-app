'use client'

import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import authController from "@/app/(app)/user/authentication/useAuthController";
import {Row} from "@/app/shared/components/form/_components/Row";
import {Col} from "@/app/shared/components/form/_components/Col";
import {FormRow} from "@/app/shared/components/form/_components/FormRow";


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
            <Row $justify='space-between' $gutter={[3]}>
                <Col $sm={6}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Username or e-mail</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </Col>
                <Col $sm={6}>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </Col>
                <Col $sm={12}>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </Col>
            </Row>
            <Button className="my-5 w-full bg-black">Login</Button>
        </form>
    </Form>
}
export default LoginForm;
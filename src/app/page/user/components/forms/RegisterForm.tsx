'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from 'zod';
import {UserRole} from "@/backend/domain/model/User";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import userController from "@/app/pages/user/controller/userController";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";


export const RegisterForm = () => {
    const {registerUser} = userController()

    const schema =
        z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(8).max(20),
            passwordConfirmation: z.string().min(8).max(20),
            role: z.enum([UserRole.ADMIN, UserRole.PLAYER]),
        })

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            role: UserRole.ADMIN,
            passwordConfirmation: '',
            password: '',
            email: '',
            name: '',
        }
    })

    const onSubmit = (data: any) => registerUser;

    return<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nom d'utilisateur</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nom d'utilisateur</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nom d'utilisateur</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="passwordConfirmation"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nom d'utilisateur</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nom d'utilisateur</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button>Submit</Button>
        </form>
    </Form>
}
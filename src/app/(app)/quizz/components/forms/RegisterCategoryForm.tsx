'use client'

import {Button} from "@/components/ui/button";
import useQuizManagement from '../../useQuizManagement';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

export const RegisterCategoryForm = () => {
    const {createCategory} = useQuizManagement()

    const schema =
        z.object({
            designation: z.string(),
            description: z.string(),
        })

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            designation: '',
            description: '',
        }
    })
    const onSubmit = async (data: any) => createCategory(data)

    return<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-8' data-js-disable-browser-autofill="on">
            <FormField
                control={form.control}
                name="designation"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Designation</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="description"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <Button className="my-5 w-full bg-black">Login</Button>
        </form>
    </Form>
}
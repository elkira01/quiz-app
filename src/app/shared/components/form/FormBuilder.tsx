import {Form} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

export default function FormBuilder({}) {

    const form = useForm({
        defaultValues: {
            password: '',
            email: '',
        }
    })

    return<Form {...form}>
        <form></form>
    </Form>
}
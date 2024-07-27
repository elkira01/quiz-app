import {Form} from "@/components/ui/form";
import {FormBuilderProps} from "@/app/shared/components/form/_types";
import {useFormController} from "@/app/shared/components/form/controller/useFormController";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

export default function FormBuilder({...props}: FormBuilderProps) {
    const { schema } = useFormController({inputs: props.inputs})

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: props.initialValues,
        mode: 'onBlur',
    })

    return<Form {...form}>
        <form>

        </form>
    </Form>
}
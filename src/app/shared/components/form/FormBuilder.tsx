import {Form} from "@/components/ui/form";
import {BuilderInputProps, FormBuilderProps} from "@/app/shared/components/form/_types";
import {useFormController} from "@/app/shared/components/form/controller/useFormController";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import ResolvedInput from "@/app/shared/components/form/ResolvedInput";
import FormCol from "@/app/shared/components/form/_components/FormCol";

export default function FormBuilder({...props }: FormBuilderProps) {
    const { schema } = useFormController({ inputs: props.inputs })

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: props.initialValues,
    })

    const onFinish = async (values: any) => {
        await props.onSubmit(values)
        form.reset()
    }

    return<Form {...form}>
        <form onSubmit={form.handleSubmit(onFinish)} className="space-y-8">
            <div className='flex flex-row flex-wrap justify-between gap-y-5'>
                {(props.inputs ?? []).map((item: BuilderInputProps) =>
                    {
                        return(
                            <FormCol key={item.name} {...item.colSize ?? {}}>
                                <ResolvedInput input={item} formControl={form}/>
                            </FormCol>
                        )
                    }
                )}
            </div>
        </form>
    </Form>
}
import {Form} from "@/components/ui/form";
import {BuilderInputProps, FormBuilderProps} from "@/app/shared/components/form/_types";
import {useFormController} from "@/app/shared/components/form/controller/useFormController";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import ResolveInput from "@/app/shared/components/form/ResolveInput";
import {Col} from "@/app/shared/components/form/_components/Col";

export default function FormBuilder({...props }: FormBuilderProps) {
    const { schema } = useFormController({inputs: props.inputs})

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: props.initialValues,
    })

    const onFinish = async (values: any) => {
        await props.onSubmit(values)
        // form.reset()
    }

    return<Form {...form}>
        <form onSubmit={form.handleSubmit(onFinish)} className="space-y-8">
            <div className='flex justify-between flex-wrap gap-y-1'>
                {(props.inputs ?? []).map((item: BuilderInputProps) =>
                    {
                        return(
                            <Col className='px-2' key={item.name} flexBasis={item.colSize}>
                                <ResolveInput input={item} formControl={form}/>
                            </Col>
                        )
                    }
                )}
                <Col className='basis-full px-2 my-2'>
                    <Button className='w-full' type="submit">Submit</Button>
                </Col>
            </div>
        </form>
    </Form>
}
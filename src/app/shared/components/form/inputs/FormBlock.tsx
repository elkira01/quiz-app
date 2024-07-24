import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

interface FormBlockProps {
    formControl: any
    label: string
    name: string
    Component?: any
    itemProps?: { className: string }
    noFormBlock?: boolean
}

const FormBlock =  (
{
    formControl,
    Component = null,
    itemProps = { className: ''},
    noFormBlock = false,
   ...props
}: FormBlockProps) => {

    return (
        <FormField
            control={formControl.control}
            name={props.name}
            render={(field) =>
                <FormItem>
                    <FormLabel>
                        {props.label}
                    </FormLabel>
                    <FormControl>
                        <Component {...field} {...itemProps}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            }
        />
    )
}

export const withFormBlock = <T = any>(Component: any, itemProps?: any) => {
    return (props: FormBlockProps & T & { noFormBlock?: boolean }) => {
        if (props.noFormBlock){
            return <Component {...props}/>
        }

        return <FormBlock {...props} itemProps={itemProps}/>
    }
}

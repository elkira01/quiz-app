import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

interface FormBlockProps {
    formControl: any
    label: string
    name: string
    Component?: any
    itemProps?: any
    noFormBlock?: boolean
}

const FormBlock =  (
{
    formControl,
    Component,
    itemProps = { className: ''},
    noFormBlock = false,
   ...props
}: FormBlockProps) => {

    return (
        <FormField
            control={formControl.control}
            name={props.name}
            render={({field}) =>
                <FormItem>
                    <FormLabel>
                        {props.label}
                    </FormLabel>
                    <FormControl>
                        <Component {...field} {...props} {...itemProps}/>
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

        return <FormBlock Component={Component} {...props} itemProps={itemProps}/>
    }
}

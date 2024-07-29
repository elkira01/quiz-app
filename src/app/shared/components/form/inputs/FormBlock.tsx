import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {cn} from "@/lib/utils";

interface FormBlockProps {
    formControl: any
    label?: string
    name: string
    Component?: any
    itemProps?: any
    noFormBlock?: boolean
    description?: any
    orientation?: 'inline'|'default'
}

const FormBlock =  (
{
    formControl,
    Component,
    itemProps = { className: ''},
    orientation,
   ...props
}: FormBlockProps) => {

    return (
        <FormField
            control={formControl.control}
            name={props.name}
            render={({field}) =>
                {
                    return(
                        <FormItem className={cn(orientation === 'inline' && `flex flex-row items-start space-x-3 space-y-0`, 'w-full')}>
                            {orientation !== 'inline' && <FormLabel>
                                {props.label}
                            </FormLabel>}
                            <FormControl>
                                <Component {...field} {...props} {...itemProps}/>
                            </FormControl>
                            {orientation === 'inline' && <FormLabel>
                                {props.label}
                            </FormLabel>}
                            <FormDescription>
                                {props.description}
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )
                }
            }
        />
    )
}

export const withFormBlock = <T = any>(Component: any, itemProps?: any) => {
    return (props: FormBlockProps & T & { noFormBlock?: boolean }) => {
        if (props.noFormBlock){
            return <div className='mt-[0.60rem]'>
                <Component {...props}/>
            </div>
        }

        return <FormBlock Component={Component} {...props} itemProps={itemProps}/>
    }
}

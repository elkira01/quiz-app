import { cn } from "@/lib/utils"
import { format } from "date-fns"
import {InputProps} from "react-day-picker";
import { CalendarIcon } from "lucide-react"
import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar";
import {Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
export interface DateInputProps extends InputProps {
    formControl: any,
    name: string,
    label: any,
    description?: any
    format?: string
    placeholder?: string
    disabled?: boolean
}
export default function DateInput({ formControl, name, label, description, ...props}: DateInputProps) {

    return (
        <FormField
            control={formControl?.control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                    <FormLabel>{label ?? ''}</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                    )}
                                >
                                    {field.value ? (
                                        format(field.value, "PPP")
                                    ) : (
                                        <span>{props.placeholder}</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent align='end'>
                            <Calendar
                                disabled={props.disabled}
                                mode='single'
                                selected={field.value}
                                onSelect={field.onChange}
                                // disabled={(date) =>
                                //     date > new Date() || date < new Date("1900-01-01")
                                // }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <FormDescription>
                        {description}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

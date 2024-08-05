import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {InputProps} from "@/components/ui/input";

export interface SelectInputProps extends InputProps {
    formControl: any,
    name: any,
    label: any,
    description?: any
    placeholder?: string
    options?: Array<{ value: any|undefined, label: string, key?: any }>
}
const SelectInput = (
{
    formControl,
    name,
    label,
    description,
    options,
    placeholder
}: SelectInputProps) => {

    return<FormField
        control={formControl?.control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder={placeholder ?? "Select an item below"} />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {(options ?? []).map((item) =>
                            <SelectItem value={item.value ?? " "}>{item.label}</SelectItem>
                        )}
                    </SelectContent>
                </Select>
                <FormDescription>
                    {description}
                </FormDescription>
                <FormMessage />
            </FormItem>
        )}
    />
}

export default SelectInput;
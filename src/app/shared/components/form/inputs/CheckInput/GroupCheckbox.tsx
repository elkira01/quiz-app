import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Checkbox} from "@/components/ui/checkbox";

export interface GroupCheckboxProps {
    items: Array<{id?: any, key?: any, label: any}>
    formControl: any
    name: string
}
const GroupCheckbox = ({items, formControl, ...props}: GroupCheckboxProps) => {

    return<>
        <FormField
            control={formControl.control}
            name={props.name}
            render={() => (
                <FormItem>
                    {items.map((item) => (
                        <FormField
                            key={item.id ?? item.key}
                            control={formControl.control}
                            name="items"
                            render={({ field }) => {
                                return (
                                    <FormItem
                                        key={item.id ?? item.key}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value?.includes(item.id)}
                                                onCheckedChange={(checked) => {
                                                    return checked
                                                        ? field.onChange([...field.value, item.id ?? item.key])
                                                        : field.onChange(
                                                            field.value?.filter(
                                                                (value: any) => value !== (item.id ?? item.key)
                                                            )
                                                        )
                                                }}
                                            />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal">
                                            {item.label}
                                        </FormLabel>
                                    </FormItem>
                                )
                            }}
                        />
                    ))}
                    <FormMessage />
                </FormItem>
            )}
        />
    </>
}

export default GroupCheckbox;
import {FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Checkbox} from "@/components/ui/checkbox";

export interface GroupCheckboxProps {
    items: Array<{id?: any, key?: any, label: any}>
    formControl: any
    name: string
}
const GroupCheckbox = ({items, formControl, ...props}: GroupCheckboxProps) => {

    return<>
        {items.map((item) => {
            const idKey = item.id ?? item.key;

            return(
                <FormField
                    key={idKey}
                    control={formControl.control}
                    name={props.name}
                    render={({ field }) => {
                        return (
                            <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                            >
                                <FormControl>
                                    <Checkbox
                                        checked={field.value?.includes(idKey)}
                                        onCheckedChange={(checked) => {
                                            return checked
                                                ? field.onChange([...field.value, idKey])
                                                : field.onChange(
                                                    field.value?.filter(
                                                        (value: any) => value !== idKey
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
            )
        })}
    </>
}
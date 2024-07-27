import {Checkbox} from "@/components/ui/checkbox";
import {CheckboxProps} from "@radix-ui/react-checkbox";

interface CheckboxInputProps extends CheckboxProps{
    value: any
    onChange: (value: any) => void
}
const CheckboxInput = ({value, onChange, ...props}: CheckboxInputProps) => {

    return<Checkbox
        checked={value}
        onCheckedChange={onChange}
        {...props}
    />
}
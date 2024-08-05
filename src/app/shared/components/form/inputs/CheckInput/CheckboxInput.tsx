import {Checkbox} from "@/components/ui/checkbox";
import {CheckboxProps, CheckedState} from "@radix-ui/react-checkbox";

export interface CheckboxInputProps extends CheckboxProps {
    disabled?: boolean
}
const CheckboxInput = ({...props}: CheckboxInputProps) => {


    return<Checkbox
        disabled={props.disabled}
        checked={props.value as CheckedState}
        onCheckedChange={props.onChange as any}
    />
}
export default CheckboxInput;
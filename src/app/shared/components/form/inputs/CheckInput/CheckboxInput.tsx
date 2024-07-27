import {Checkbox} from "@/components/ui/checkbox";
import {CheckboxProps} from "@radix-ui/react-checkbox";

export interface CheckboxInputProps extends CheckboxProps {}
const CheckboxInput = ({...props}: CheckboxInputProps) => {

    return<Checkbox {...props} />
}
export default CheckboxInput;
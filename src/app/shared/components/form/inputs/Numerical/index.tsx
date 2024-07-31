import {Input, InputProps} from "@/components/ui/input";

export interface NumericalInputProps extends InputProps {
    max?: number
    min?: number
    allowNegativeValue?: boolean
}
const NumericalInput = ({ max, min, allowNegativeValue, ...props}: NumericalInputProps) => {

    return(
        <Input
            type='number'
            {...props}
        />
    )
}

export default NumericalInput;
import {Input, InputProps} from "@/components/ui/input";

export interface TextInputProps extends InputProps {
    inputType?:
        'text'
        |'password'
        |'email'
        |'phone'
        |'url'
        |'hidden'
        |'color'
}

export default function TextInput({inputType, ...props}: TextInputProps & any) {
    return <Input {...props} type={inputType ?? 'text'}/>
}
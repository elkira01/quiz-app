import {Input, InputProps} from "@/components/ui/input";

export interface TextInputProps extends InputProps {
    type?:
        'text'
        |'password'
        |'email'
        |'phone'
        |'url'
        |'hidden'
        |'color'
}

export default function TextInput({type, ...props}: TextInputProps & any) {
    return <Input {...props} type={type ?? 'text'}/>
}
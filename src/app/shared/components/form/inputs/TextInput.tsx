import {Input, InputProps} from "@/components/ui/input";

interface TextInputProps extends InputProps {
    inputType?: 'text'|'password'|'email'|'textarea'|'phone'|'url'|'number'| any
}

export function TextInput({inputType, ...props}: TextInputProps & any) {

    return <Input {...props} type={inputType ?? 'text'}/>
}
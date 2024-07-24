import {Input, InputProps} from "@/components/ui/input";
import {useEffect} from "react";

export interface TextInputProps extends InputProps {
    inputType?: 'text'|'password'|'email'|'textarea'|'phone'|'url'
}

export function TextInput({inputType, ...props}: TextInputProps & any) {
    useEffect(() => {
       console.log(inputType)
    },[])

    return <Input {...props} type={inputType ?? 'text'}/>
}
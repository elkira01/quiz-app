import {Textarea, TextareaProps} from "@/components/ui/textarea";

export interface TextAreaInputProps extends TextareaProps {}

const TextAreaInput = ({...props}: TextAreaInputProps) => {

    return(
        <Textarea
            {...props}
            className="resize-none"
        />
    )
}
export default TextAreaInput;
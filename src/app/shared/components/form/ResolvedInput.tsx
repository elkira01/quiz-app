import {BuilderInputProps} from "./_types";
import  Field from './inputs/index';
import {Button} from "@/components/ui/button";
export default function ResolvedInput({input, formControl}: { input: BuilderInputProps, formControl?: any}) {

    const resolved = () => {
        switch (input.type) {
            case 'text_input':
                return <Field.Input
                    placeholder={input.placeholder}
                    disabled={input.disabled}
                    type='text'
                    formControl={formControl}
                    name={input.name}
                    label={input.label}
                />
            case 'numerical_input':
                return <Field.Number
                    placeholder={input.placeholder}
                    disabled={input.disabled}
                    formControl={formControl}
                    name={input.name}
                    label={input.label}
                />
            case 'select_input':
                return <Field.Select
                    placeholder={input.placeholder}
                    disabled={input.disabled}
                    label={input.label}
                    formControl={formControl}
                    name={input.name}
                    options={input.options}
                    noFormBlock
                />
            case 'checkbox_input':
                return <Field.Checkbox
                    disabled={input.disabled}
                    orientation='inline'
                    label={input.label}
                    formControl={formControl}
                    name={input.name}
                />
            case 'textarea_input':
                return <Field.TextArea
                    placeholder={input.placeholder}
                    disabled={input.disabled}
                    formControl={formControl}
                    name={input.name}
                    label={input.label}
                />
            case 'email_input':
                return <Field.Input
                    placeholder={input.placeholder}
                    disabled={input.disabled}
                    type='email'
                    formControl={formControl}
                    name={input.name}
                    label={input.label}
                />
            case 'password_input':
                return <Field.Input
                    disabled={input.disabled}
                    type='password'
                    formControl={formControl}
                    name={input.name}
                    label={input.label}
                />
            case 'confirm_password_input':
                return <Field.Input
                    disabled={input.disabled}
                    type='password'
                    formControl={formControl}
                    name={`confirm_${input.name}`}
                    label={input.label}
                />
            case 'date_input':
                return <Field.Date
                    disabled={input.disabled}
                    formControl={formControl}
                    name={input.name}
                    label={input.label}
                    noFormBlock
                />
            case 'submit_button':
                return(
                    <Button
                        disabled={input.disabled}
                        className='w-full my-3'
                        type="submit"
                    >
                        {input.label}
                    </Button>
                )
            case 'link':
                return <div className="flex justify-start w-full text-[14px]">
                    <span>{input.label}</span>
                    <a href={input.link?.link} className="ml-2 text-blue-600 hover:text-blue-800 underline">
                        {input.link?.linkText}
                    </a>
                </div>
            default:
                return null
        }
    }

    return resolved();
}
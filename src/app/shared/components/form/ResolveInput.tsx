import {BuilderInputProps} from "./_types";
import  Field from './inputs/index';
export default function ResolveInput({input, formControl}: { input: BuilderInputProps, formControl?: any}) {
    const resolve = () => {
        switch (input.type) {
            case 'text_input':
                return <Field.Input
                    type='text'
                    formControl={formControl}
                    name={input.name}
                    label={input.label}
                />
            case 'numerical_input':
                return <Field.Number
                    formControl={formControl}
                    name={input.name}
                    label={input.label}
                />
            case 'select_input':
                return <Field.Select
                    label={input.label}
                    formControl={formControl}
                    name={input.name}
                    options={input.options}
                />
            case 'checkbox_input':
                return <Field.Checkbox
                    label={input.label}
                    formControl={formControl}
                    name={input.name}
                />
            case 'textarea_input':
                return <Field.TextArea
                    formControl={formControl}
                    name={input.name}
                    label={input.label}
                />
            case 'email_input':
                return <Field.Input
                    type='email'
                    formControl={formControl}
                    name={input.name}
                    label={input.label}
                />
            case 'password_input':
                return <Field.Input
                    type='password'
                    formControl={formControl}
                    name={input.name}
                    label={input.label}
                />
            default:
                return null
        }
    }

    return resolve();
}
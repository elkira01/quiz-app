export type InputTypes =
    'numerical_input'
    | 'text_input'
    | 'textarea_input'
    | 'checkbox_input'
    | 'date_input'
    | 'time_input'
    | 'email_input'
    | 'url_input'
    | 'password_input'
    | 'color_input'
    | 'range_input'
    | 'checkbox_group_input'
    | 'radio_input'
    | 'dropdown_input'
    | 'file_input'

type union = string | number

type FieldValidationType = {
    validator?: (value: any) => boolean,
    message?: string,
    showWarning?: boolean
}

export interface FormInputDescriptionType {
    type: InputTypes
    label?: string
    name: string
    placeholder?: string
    options?: string[] | Array<{value: any | undefined, key?: any, label: any}>
    required?: boolean
    description?: string
    validation?: FieldValidationType
    limit?: number
    min?: number
    max?: number
    allowNegativeValue?: boolean
    col: union | {xs?: union, sm?: union, md?: union, lg?: union, xl?: union}
}

export interface FormBuilderProps {
    inputs: FormInputDescriptionType[]
    onSubmit: (data: Record<string, any>) => void
    initialValues?: Record<string, any>
    formState?: any
    disabled?: boolean
    readOnly?: boolean
    onReset?: () => void
    className?: string
    formLabelClassName?: string
    formErrorMessageClassName?: string
    formControlClassName?: string
}
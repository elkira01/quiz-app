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
    | 'select_input'
    | 'file_input'

type union = string | number

type FieldValidationType = {
    message?: string,
    showWarning?: boolean
    validator?: (value: any) => boolean,
}

export interface BuilderInputProps {
    type: InputTypes
    label?: string
    name: string
    placeholder?: string
    required?: boolean
    min?: any
    max?: any
    limit?: number
    format?: string
    description?: string
    allowNegativeValue?: boolean
    validation?: FieldValidationType
    options?: Array<{value: any, key?: any, label: any}>
    colSize?: {xs?: union, sm?: union, md?: union, lg?: union, xl?: union}
    hiddenOn?: {xs?: union, sm?: union, md?: union, lg?: union, xl?: union}
}

export interface FormBuilderProps {
    inputs: BuilderInputProps[]
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
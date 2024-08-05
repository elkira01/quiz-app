import { ValidationDescriptionProps} from "@/app/shared/components/form/_types";

interface Interface {
    get(): any
}

export interface ValidatorParams {
    name: string,
    message?: ValidationDescriptionProps,
    required?: boolean,
    allowNegative?: boolean,
    min?: any,
    max?: any,
    noDouble?: boolean
    pattern?: RegExp
}
export interface IFormValidator extends Interface {
    _text(args: ValidatorParams): any

    _number(args: ValidatorParams): any

    _email(args: ValidatorParams): any

    _password(args: ValidatorParams): any

    _confirmPassword(args: ValidatorParams): any

    _select(args: ValidatorParams): any

    _radio(args: ValidatorParams): any

    _checkbox(args: ValidatorParams): any

    _checkboxGroup(args: ValidatorParams): any

    _date(args: ValidatorParams): any

    _time(args: ValidatorParams): any

    _url(args: ValidatorParams): any

    _file(args: ValidatorParams): any

    _custom(args: ValidatorParams): any
}

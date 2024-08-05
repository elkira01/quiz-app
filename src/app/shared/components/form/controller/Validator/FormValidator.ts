import {ValidationDescriptionProps} from "@/app/shared/components/form/_types";

interface Interface {
    get(): any
}
export interface IFormValidator extends Interface {
    _text(name: string, message?: ValidationDescriptionProps, required?: boolean, limit?: number): any

    _number(name: string, message?: ValidationDescriptionProps, required?: boolean, allowNegative?: boolean, min?: number, max?: number, noDouble?: boolean): any

    _number(name: string, message?: string, required?: boolean, allowNegative?: boolean, min?: number, max?: number, noDouble?: boolean): any

    _email(name: string, message?: string, required?: boolean): any

    _password(name: string, message?: string, required?: boolean, min?: number, pattern?: RegExp): any

    _confirmPassword(name: string, min?: number, message?: string, pattern?: RegExp,required?: boolean): any

    _select(name: string, message?: string, required?: boolean): any

    _radio(name: string,  message?: string, required?: boolean): any

    _checkbox(name: string, message?: string, required?: boolean): any

    _checkboxGroup(name: string, message?: string, required?: boolean): any

    _date(name: string,message?: string, required?: boolean, format?: string, minDate?: any, maxDate?: any): any

    _time(name: string, message?: string, required?: boolean): any

    _url(name: string, message?: string): any

    _file(name: string, message?: string, required?: boolean): any

    _custom(validator: (value: any) => boolean, message?: string): any
}

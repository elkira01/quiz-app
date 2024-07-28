interface Interface {
    get(): any
}
export interface IFormValidator extends Interface {
    _text(name: string,message?: string, required?: boolean, limit?: number): any

    _number(name: string, message?: string, required?: boolean, allowNegative?: boolean, min?: number, max?: number, noDouble?: boolean): any
    _email(name: string, message?: string, required?: boolean): any

    _password(name: string, message?: string, required?: boolean, min?: number, pattern?: RegExp): any
    _confirmPassword(name: string, min?: number, message?: string, pattern?: RegExp,required?: boolean): any
    _select(message?: string, required?: boolean): any
    _radio(message?: string, required?: boolean): any
    _checkbox(message?: string, required?: boolean): any
    _checkboxGroup(message?: string, required?: boolean): any
    _date(name: string,message?: string, required?: boolean, format?: string, minDate?: any, maxDate?: any): any
    _time(message?: string, required?: boolean): any
    _url(message?: string): any
    _file(message?: string, required?: boolean): any
    _custom(validator: (value: any) => boolean, message?: string): any
}

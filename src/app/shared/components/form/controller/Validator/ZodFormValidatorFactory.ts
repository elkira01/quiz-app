import {IFormValidator} from "./FormValidator";
import {z} from "zod";

class ZodFormValidatorFactory implements IFormValidator {
    private validator;
    private schema: any;
    private requiredFields: any;

    constructor() {
        this.schema = z.object({})
        this.validator = {}
        this.requiredFields = {}
    }

    get(){
        return this.schema;
    }

    _checkbox(name: string,message?: string, required?: boolean): any {
        this.validator = {
            ...this.validator,
            [name]:  z.boolean().default(false).optional()
        }
        this.requiredFields[name] = required?? false

        this.schema = z.object(this.validator).required({...this.requiredFields})

        return this.schema;
    }

    _checkboxGroup(name: string, message?: string, required?: boolean): any {
    }

    _custom(validator: (value: any) => boolean, message?: string): any {
    }

    _date(name: string, message?: string, required?: boolean, format?: string, min?: any, max?: any): any {
        this.validator = {
            ...this.validator,
            [name]:  z
                .date()
                .min(min?? new Date(0), {message: `${name} should be after ${min}`})
                .max(max?? new Date(Date.now() + 1000*60*60*24*365*100), {message: `${name} should be before ${max}`})
                .default(new Date())

        }
        this.requiredFields[name] = required?? false

        this.schema = z.object(this.validator).required({...this.requiredFields})

        return this.schema;
    }

    _email(name: string = '', message?: string, required?: boolean): any {
        this.validator = {
            ...this.validator,
            [name]:  z
                .string()
                .email({
                    message: message ?? 'Invalid email address'
                })
        }
        this.requiredFields[name] = required ?? false

        this.schema = z.object(this.validator).required({...this.requiredFields})

        return this.schema;
    }

    _file(name: string, message?: string, required?: boolean): any {
    }

    _number(name: string, message?: string, required?: boolean, allowNegative: boolean = true, min?: number, max?: number, noDouble?: boolean): any {
        this.validator = {
            ...this.validator,
            [name]:  z.coerce
                .number({
                    invalid_type_error: message ?? `This field must contain a numerical value`
                })
                .min(min?? -Infinity, {message: `${name} should be at least ${min}`})
                .max(max?? Infinity,{message: `${name} shouldn't be higher than ${max}`})
                .refine((data) => {
                    return allowNegative? data >= (min ?? -Infinity) && data <= (max ?? Infinity) : data > 0 && data <= (max ?? Infinity);
                },
                    { message: !allowNegative ? `This value should be positive` : ``}
                )
                .default(0)

        }
        this.requiredFields[name] = required ?? false

        this.schema = z.object(this.validator).required({...this.requiredFields})

        return this.schema;
    }

    _password(name: string, message?: string, required?: boolean, min?: number, pattern?: any): any {
        this.validator = {
            ...this.validator,
            [name]:  z
                .string({
                    invalid_type_error: message ?? 'Invalid input'
                })
                .regex( new RegExp(pattern))
                .min(min ?? 2)
        }
        this.requiredFields[name] = required ?? false

        this.schema = z.object(this.validator).required({...this.requiredFields})

        return this.schema;
    }
    _confirmPassword(name: string, min?: number, message?: string, pattern?: RegExp, required?: boolean): any {
        const _name = `confirm_${name}`;
        const passwordForm = z
            .object({
                password: z.string(),
                confirm: z.string(),
            })
            .refine((data) => data.password === data.confirm, {
                message: "Passwords don't match",
                path: ["confirm"], // path of error
            });
        this.validator = {
            ...this.validator,
            [_name]:  z
                .string({
                    required_error: 'This field is mandatory',
                    invalid_type_error: message ?? 'Invalid input'
                })
                .regex(pattern?? new RegExp('/*/'))
                .min(min ?? 2)
        }
        this.requiredFields[name] = required ?? false

        this.schema = z
            .object(this.validator)
            .required({...this.requiredFields})
            .refine((data: any) => data[name] === data[_name],
                {message: message ?? `Passwords don't match`, path: [_name]}
            )

        return this.schema;
    }

    _radio(name: string, message?: string, required?: boolean): any {
    }

    _select(name: string, message?: string, required?: boolean): any {
    }

    _text(name: string,message?: string, required?: boolean, limit?: number): any {

        this.validator = {
            ...this.validator,
            [name]:  z
                .string({
                invalid_type_error: message ?? 'Invalid input'
            })
            .max(limit ?? Infinity)
        }
        this.requiredFields[name] = required ?? false

        this.schema = z.object(this.validator).required({...this.requiredFields})

        return this.schema;
    }

    _time(name: string, message?: string, required?: boolean): any {
    }

    _url(name: string, message?: string): any {
    }

}

export default ZodFormValidatorFactory;
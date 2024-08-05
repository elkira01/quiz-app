import {IFormValidator} from "./FormValidator";
import {z} from "zod";
import {ValidationDescriptionProps} from "@/app/shared/components/form/_types";

class ZodFormValidatorFactory implements IFormValidator {
    private validator;
    private schema: any;
    private requiredFields: any;

    protected required_field = "This field is required"
    protected invalid_input = "Invalid input"

    constructor() {
        this.schema = z.object({})
        this.validator = {}
        this.requiredFields = {}
    }

    get(){
        return this.schema;
    }

    _custom(validator: (value: any) => boolean, message?: string): any {
    }

    _checkbox(name: string, message?: ValidationDescriptionProps, required?: boolean): any {
        let scm = !required ?
            z.boolean().optional().default(false)
            :
            z.boolean({
                required_error: message?.required_msg ?? this.required_field
            })

        this.validator = {...this.validator, [name]:  scm}

        return z.object(this.validator);
    }

    _checkboxGroup(name: string, message?: string, required?: boolean): any {
    }

    _date(name: string, message?: ValidationDescriptionProps, required?: boolean, format?: string, minDate?: any, maxDate?: any): any {
        this.validator = {
            ...this.validator,
            [name]:  z
                .date()
                .min(minDate?? new Date(0), {message: `${name} should be after ${minDate}`})
                .max(maxDate?? new Date(Date.now() + 1000*60*60*24*365*100), {message: `${name} should be before ${maxDate}`})
                .default(new Date())

        }
        this.requiredFields[name] = required?? false

        this.schema = z.object(this.validator).required({...this.requiredFields})

        return this.schema;
    }

    _text(name: string, message?: ValidationDescriptionProps, required?: boolean, limit?: number): any {
        let shm = !required ?
            z.string({
                invalid_type_error: message?.invalid_msg ?? this.invalid_input
            })
                .max(limit ?? Infinity)
                .optional()
            :
            z.string({
                required_error: message?.required_msg ?? this.required_field,
                invalid_type_error: message?.invalid_msg ?? this.invalid_input
            })
            .max(limit ?? Infinity)

        this.validator = {...this.validator, [name]: shm}

        return z.object(this.validator);
    }

    _email(name: string, message?: ValidationDescriptionProps, required?: boolean): any {
        let scm = !required ?
            z.string()
                .email({
                    message: message?.invalid_msg ?? 'Invalid email address'
                })
                .optional() :
            z.string({
                    required_error: message?.required_msg ?? this.required_field
                })
                .email({
                    message: message?.invalid_msg ?? 'Invalid email address'
                })

        this.validator = {...this.validator, [name]:  scm}

        return z.object(this.validator);
    }

    _number(name: string, message?: ValidationDescriptionProps, required?: boolean, allowNegative?: boolean, min?: number, max?: number, noDouble?: boolean): any {
        let scm = !required ?
            z.coerce
                .number({ invalid_type_error: message?.invalid_msg ?? `This field must contain a numerical value` })
                .min(min?? -Infinity, {message: message?.invalid_msg.min ?? `${name} should be at least ${min}`})
                .max(max?? Infinity,{message: message?.invalid_msg.max ?? `${name} shouldn't be higher than ${max}`})
                .refine((data) => {
                        return allowNegative? data >= (min ?? -Infinity) && data <= (max ?? Infinity) : data > 0 && data <= (max ?? Infinity);
                    },
                    { message: !allowNegative ? `This value should be positive` : ``}
                )
                .default(0)

        :
            z.coerce
                .number({
                    required_error: message?.required_msg ?? this.required_field,
                    invalid_type_error: message?.invalid_msg ?? `This field must contain a numerical value`
                })
                .min(min?? -Infinity, {message: message?.invalid_msg.min ?? `${name} should be at least ${min}`})
                .max(max?? Infinity,{message: message?.invalid_msg.max ?? `${name} shouldn't be higher than ${max}`})
                .refine((data) => {
                    return allowNegative? data >= (min ?? -Infinity) && data <= (max ?? Infinity) : data > 0 && data <= (max ?? Infinity);
                },
                    { message: !allowNegative ? `This value should be positive` : ``}
                )

        this.validator = {...this.validator, [name]:  scm}

        return z.object(this.validator);
    }

    _password(name: string, message?: ValidationDescriptionProps, required?: boolean, min?: number, pattern?: any): any {
        let scm = !required ?
            z.string({
                invalid_type_error: message?.invalid_msg ?? 'Invalid input'
            })
                .min(min?? 8, {message: message?.invalid_msg.min?? `${name} should be at least ${min} characters long`})
                .regex(pattern?? new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
                .optional()
            :
            z.string({
                required_error: message?.required_msg ?? this.required_field,
            })
                .min(min?? 8, {message: message?.invalid_msg.min?? `${name} should be at least ${min} characters long`})
                .regex(pattern?? new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))

        this.validator = {...this.validator, [name]: scm }

        return z.object(this.validator);
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

    _time(name: string, message?: string, required?: boolean): any {
    }

    _url(name: string, message?: string): any {
    }

    _file(name: string, message?: string, required?: boolean): any {
    }

}

export default ZodFormValidatorFactory;
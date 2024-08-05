import {IFormValidator, ValidatorParams} from "./FormValidator";
import {z} from "zod";

class ZodFormValidator implements IFormValidator {
    private validator;
    private schema: any;

    protected required_field = "This field is mandatory"
    protected invalid_input = "Invalid input"

    constructor() {
        this.schema = z.object({})
        this.validator = {}
    }

    get(){
        return this.schema;
    }

    _custom(validator: (value: any) => boolean, message?: string): any {
    }

    _checkbox(args: ValidatorParams): any {
        const {name, required, message} = args;

        let scm = !required ?
            z.boolean().optional()
            :
            z.boolean({
                required_error: message?.required_msg ?? this.required_field
            })

        this.validator = {...this.validator, [name]:  scm}
        this.schema = z.object(this.validator);

        return this.schema;
    }



    _date(args: ValidatorParams): any {
        const {name, required, message, min, max} = args;

        let scm = !required ?
        z.date({
            required_error: message?.required_msg ?? this.required_field,
            invalid_type_error: message?.invalid_msg ?? this.invalid_input
        })
            .min(min?? new Date(0), {message: `'${name}' should be after ${min}`})
            .max(max?? new Date(Date.now() + 1000*60*60*24*365*100), {message: `'${name}' should be before ${max}`})
            .default(new Date())
            .optional()
            :
        z.date({
            invalid_type_error: message?.invalid_msg ?? this.invalid_input
        })
            .min(min?? new Date(0), {message: `${name} should be after ${min}`})
            .max(max?? new Date(Date.now() + 1000*60*60*24*365*100), {message: `${name} should be before ${max}`})

        this.validator = {...this.validator, [name]: scm}
        this.schema = z.object(this.validator);

        return this.schema;
    }

    _text(args: ValidatorParams): any {
        const {name, required, message, max} = args;

        let shm = !required ?
            z.string({
                invalid_type_error: message?.invalid_msg ?? this.invalid_input
            })
                .max(max ?? Infinity)
                .optional()
            :
            z.string({
                required_error: message?.required_msg ?? this.required_field,
                invalid_type_error: message?.invalid_msg ?? this.invalid_input
            })
            .max(max ?? Infinity)

        this.validator = {...this.validator, [name]: shm}
        this.schema = z.object(this.validator);

        return this.schema;
    }

    _email(args: ValidatorParams): any {
        const {name, required, message} = args;

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
        this.schema = z.object(this.validator);

        return this.schema;
    }

    _number(args: ValidatorParams): any {
        const {name, required, message, min, max, allowNegative} = args;

        let scm = !required ?
            z.coerce
                .number({ invalid_type_error: message?.invalid_msg ?? `This field must contain a numerical value` })
                .min(min?? -Infinity, {message: message?.invalid_msg.min ?? `'${name}' should be at least ${min}`})
                .max(max?? Infinity,{message: message?.invalid_msg.max ?? `'${name}' shouldn't be higher than ${max}`})
                .refine((data) => {
                        return allowNegative? data >= (min ?? -Infinity) && data <= (max ?? Infinity) : data >= 0 && data <= (max ?? Infinity);
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
                .min(min?? -Infinity, {message: message?.invalid_msg.min ?? `'${name}' should be at least ${min}`})
                .max(max?? Infinity,{message: message?.invalid_msg.max ?? `'${name}' shouldn't be higher than ${max}`})
                .refine((data) => {
                    return allowNegative? data >= (min ?? -Infinity) && data <= (max ?? Infinity) : data > 0 && data <= (max ?? Infinity);
                },
                    { message: !allowNegative ? `This value should be positive` : ``}
                )

        this.validator = {...this.validator, [name]:  scm}
        this.schema = z.object(this.validator);

        return this.schema;
    }

    _password(args: ValidatorParams): any {
        const {name, required, message, min} = args;

        let scm = !required ?
            z.string()
                .min(min?? 2, {message: `'${name}' should be at least ${min} characters long`})
                .optional()
            :
            z.string({
                required_error: message?.required_msg ?? this.required_field,
            })
                .min(min?? 2, {message: `${name} should be at least ${min} characters long`})

        this.validator = {...this.validator, [name]: scm }
        this.schema = z.object(this.validator);

        return this.schema;
    }

    _confirmPassword(args: ValidatorParams): any {
        const {name, message} = args;
        const _name = `confirm_${name}`;

        let scm = z
            .string({
                required_error: message?.required_msg ?? this.required_field,
            })

        this.validator = {...this.validator, [_name]: scm }

        this.schema = z.object(this.validator)
            .refine((data: any) => data[name] === data[_name],
                {
                    message: `The passwords don't match`,
                    path: [_name]
                }
            )

        return this.schema;
    }

    _select(args: ValidatorParams): any {
        const {name, required, message} = args;

        let scm = !required ?
            z.string()
                .optional()
            :
            z.string({
                required_error: message?.required_msg ?? this.required_field,
            })

        this.validator = {...this.validator, [name]: scm}
        this.schema = z.object(this.validator);

        return this.schema;
    }

    _checkboxGroup(args: ValidatorParams): any {
    }

    _radio(args: ValidatorParams): any {
    }

    _time(args: ValidatorParams): any {
    }

    _url(args: ValidatorParams): any {
    }

    _file(args: ValidatorParams): any {
    }

}

export default ZodFormValidator;
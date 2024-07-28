import {BuilderInputProps} from "@/app/shared/components/form/_types";
import {IFormValidator} from "@/app/shared/components/form/controller/Validator/FormValidator";
import ZodFormValidatorFactory from "@/app/shared/components/form/controller/Validator/ZodFormValidatorFactory";

const resolveInputsValidation = (inputs: BuilderInputProps[]): any => {
    let validator : IFormValidator = new ZodFormValidatorFactory();

    inputs.forEach((input) => {
        switch (input.type) {
            case "text_input":
                validator._text(input.name, input.validation?.message, input.required, input.limit);
                break;
            case "email_input":
                validator._email(input.name, input.validation?.message, input.required);
                break;
            case "password_input":
                validator._password(input.name, input.validation?.message, input.required, input.min);
                break;
            case "numerical_input":
                validator._number(input.name, input.validation?.message, input.required, input.allowNegativeValue, input.min, input.max, false);
                break;
            case "date_input":
                validator._date(input.name, input.validation?.message, input.required, '', input.min, input.max);
                break;
            default:
        }
    });

    return validator.get();
}
export {
    resolveInputsValidation
};
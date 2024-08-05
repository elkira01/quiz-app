import {BuilderInputProps} from "@/app/shared/components/form/_types";
import {IFormValidator} from "@/app/shared/components/form/controller/Validator/FormValidator";
import ZodFormValidator from "@/app/shared/components/form/controller/Validator/ZodFormValidator";

const resolveInputsValidation = (inputs: BuilderInputProps[]): any => {
    let validator : IFormValidator = new ZodFormValidator();

    inputs.forEach((input) => {
        switch (input.type) {
            case "text_input":
                validator._text({...input, message: input.validation?.message});
                break;
            case "email_input":
                validator._email({...input, message: input.validation?.message});
                break;
            case "password_input":
                validator._password({...input, message: input.validation?.message});
                break;
            case "confirm_password_input":
                validator._confirmPassword({...input, message: input.validation?.message});
                break;
            case "numerical_input":
                validator._number({...input, message: input.validation?.message});
                break;
            case "date_input":
                validator._date({...input, message: input.validation?.message});
                break;
            case "checkbox_input":
                validator._checkbox({...input, message: input.validation?.message});
                break;
            case "select_input":
                validator._select({...input, message: input.validation?.message});
                break;
            default:
        }
    });

    return validator.get();
}
export {
    resolveInputsValidation
};
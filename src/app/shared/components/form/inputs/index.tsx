import {TextInput, TextInputProps} from "@/app/shared/components/form/inputs/TextInput";
import {withFormBlock} from "@/app/shared/components/form/inputs/FormBlock";

export const FormInput = withFormBlock<TextInputProps>(TextInput);
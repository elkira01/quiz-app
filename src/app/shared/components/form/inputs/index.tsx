import TextInput, {TextInputProps} from "@/app/shared/components/form/inputs/TextInput";
import {withFormBlock} from "@/app/shared/components/form/inputs/FormBlock";
import DateTime, {DateTimeProps} from "@/app/shared/components/form/inputs/DateTime";

export const FormInput = withFormBlock<TextInputProps>(TextInput);
export const DateInput = withFormBlock<DateTimeProps>(DateTime)
import {withFormBlock} from "@/app/shared/components/form/inputs/FormBlock";
import TextInput, {TextInputProps} from "@/app/shared/components/form/inputs/TextInput";
import DatePicker, {DateInputProps} from "@/app/shared/components/form/inputs/DateInput";

export const FormInput = withFormBlock<TextInputProps>(TextInput);
export const DateInput = withFormBlock<DateInputProps>(DatePicker);
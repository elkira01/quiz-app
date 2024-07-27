import {withFormBlock} from "@/app/shared/components/form/inputs/FormBlock";
import TextInput, {TextInputProps} from "@/app/shared/components/form/inputs/TextInput";
import DatePicker, {DateInputProps} from "@/app/shared/components/form/inputs/DateInput";
import NumericalInput, {NumericalInputProps} from "@/app/shared/components/form/inputs/Numerical";
import SelectInput, {SelectInputProps} from "@/app/shared/components/form/inputs/SelectInput";
import TextAreaInput, {TextAreaInputProps} from "@/app/shared/components/form/inputs/TextAreaInput";

export const FormInput = withFormBlock<TextInputProps>(TextInput);
export const DateInput = withFormBlock<DateInputProps>(DatePicker);
export const Number = withFormBlock<NumericalInputProps>(NumericalInput);
export const FormSelect = withFormBlock<SelectInputProps>(SelectInput);
export const FormTextArea = withFormBlock<TextAreaInputProps>(TextAreaInput)
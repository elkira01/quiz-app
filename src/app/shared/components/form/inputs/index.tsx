import {withFormBlock} from "@/app/shared/components/form/inputs/FormBlock";
import TextInput, {TextInputProps} from "@/app/shared/components/form/inputs/TextInput";
import DatePicker, {DateInputProps} from "@/app/shared/components/form/inputs/DateInput";
import NumericalInput, {NumericalInputProps} from "@/app/shared/components/form/inputs/Numerical";
import SelectInput, {SelectInputProps} from "@/app/shared/components/form/inputs/SelectInput";
import TextAreaInput, {TextAreaInputProps} from "@/app/shared/components/form/inputs/TextAreaInput";
import CheckboxInput, {CheckboxInputProps} from "@/app/shared/components/form/inputs/CheckInput/CheckboxInput";
import GroupCheckbox, {GroupCheckboxProps} from "@/app/shared/components/form/inputs/CheckInput/GroupCheckbox";

class Field {
    static Input = withFormBlock<TextInputProps>(TextInput);
    static Date = withFormBlock<DateInputProps>(DatePicker);
    static Number = withFormBlock<NumericalInputProps>(NumericalInput);
    static Select = withFormBlock<SelectInputProps>(SelectInput);
    static TextArea = withFormBlock<TextAreaInputProps>(TextAreaInput);
    static Checkbox = withFormBlock<CheckboxInputProps>(CheckboxInput);
    static CheckboxGroup = withFormBlock<GroupCheckboxProps>(GroupCheckbox)
}

export default Field;

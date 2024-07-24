import {Input, InputProps} from "@/components/ui/input";

export interface DateTimeProps extends InputProps{

}
export default function DateTime({...props}: DateTimeProps) {
    
    return <Input {...props} type='date'/>
}
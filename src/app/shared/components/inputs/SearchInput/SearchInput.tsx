import {useSearch} from "./controller";
import {cn} from "@/lib/utils";
import BaseInput from "../BaseInput";
import {Search} from "lucide-react";
import {EventHandler} from "react";


type TriggerType  = 'keypress'|'async'|'widget'
interface SearchInputProps {
    searchAction(q: string, {...queryParams}: any): any
    queryParams?: any
    trigger?: TriggerType
    widget?: {
        icon: any
    }
}

function appendWidget({show, icon, action}: {show : boolean, icon?: any, action?: EventHandler<any>}){

    return(
        <button
            className={
            cn('basis-1/5 hidden border-[1px] border-l-0 border-dashed rounded-e-[20px]',
            {'flex justify-center items-center': show})}
            onClick={action}
        >
            {icon ?? <Search size={20}/>}
        </button>
    )
}

const SearchInput = (props: SearchInputProps) => {
    const {widgetSetup} = useSearch(props)

    return<div className='flex w-full'>
        <div className={cn('basis-full border-0', {'basis-4/5': widgetSetup.show})}>
            <BaseInput $borderRadius='20px 0 0 20px' $rounded={!widgetSetup.show ? 'high': undefined}/>
        </div>
        {appendWidget({...widgetSetup})}
    </div>
}

export default SearchInput;
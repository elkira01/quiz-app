import {ReactNode} from "react";
import {useSearch} from "@/app/shared/components/inputs/SearchInput/controller";

type TriggerType  = 'keypress'|'async'|'widget'

interface SearchInputProps {
    searchAction(q: string, {...queryParams}: any): Promise<any[]>
    queryParams?: any
    trigger?: TriggerType
    widget?: {
        icon: any
    }
}
const SearchInput = (props: SearchInputProps) => {
    const {} = useSearch(props)

    return<></>
}

function appendWidget(component: ReactNode, widget: any){

    return
}
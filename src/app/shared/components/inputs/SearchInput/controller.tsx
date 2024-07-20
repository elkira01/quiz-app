import {useEffect, useState} from "react";

interface QueryInterface {
    query: string
    page?: number
    limit?: number
    sortBy?: string
    order?: 'asc'|'desc'
    filters?: any[]
}

export function useSearch(arg: any){
    const {searchAction, queryParams, trigger, widget} = arg
    const [value, setValue] = useState<string>('')

    const handleSearch = async ()=> searchAction({query: value})

    useEffect(() => {
        value.length > 0 && handleSearch()
    },[value])

    return{
        setValue,
        widgetSetup: {show: true, icon: widget?.icon, action: handleSearch },
    }
}
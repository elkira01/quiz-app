export function useSearch(arg: any){
    const {searchAction, queryParams, trigger, widget} = arg

    return{
        widgetSetup: {show: true, icon: widget?.icon, action: ()=>{}}
    }
}
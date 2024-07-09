import React, {createContext, ReactNode, useReducer} from "react";
import {AppHeader} from "./Header";
import useLayout from "./useLayout";
import {cn} from "@/lib/utils";
import {menuList} from "@/app/(admin)/_config/navigation/menu";
import {MainMenuWrapper, SubMenuWrapper} from "./SideBar";

export const ToggleContext = createContext<any>({
    toggledMainMenu: false,
    toggledSubMenu: true,
})

export default function AdminLayout({ children }: { children: ReactNode }){
    const {setSelectedMenu, toggleHandler, toggleState, subMenu} = useLayout({ menuItems: menuList })
    const [state, dispatch] = useReducer(toggleHandler, toggleState)
    const onToggle = (type: string) => dispatch({type: type})
    const onMenuChange = ( key: any, type?: any) => {
        setSelectedMenu(key)
        dispatch({type: 'TOGGLE_SUBMENU', payload: {...state, toggledSubMenu: type === 'link'}})
    }


    return(
        <ToggleContext.Provider value={state}>
            <div className='w-full h-full flex justify-between'>
                <MainMenuWrapper handleMenu={onMenuChange} toggle={state}/>
                <SubMenuWrapper subMenu={subMenu} toggle={state}/>
                <aside className={
                    cn(
                        'basis-[93%] md:basis-[85%] p-[20px] bg-gray-300',
                        {
                            'md:basis-[95%]': state?.toggledMainMenu,
                            'md:basis-[75%]': !state?.toggledSubMenu
                        })}
                >
                    <AppHeader handleToggle={onToggle}/>
                    <section>
                        {children}
                    </section>
                </aside>
            </div>
        </ToggleContext.Provider>
    )
}
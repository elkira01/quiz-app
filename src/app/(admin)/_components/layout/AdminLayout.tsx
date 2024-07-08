import React, {createContext, ReactNode, useReducer} from "react";
import {AppSideBar} from "./SideBar/AppSideBar";
import {SubMenuBar} from "./SideBar/SubMenuBar";
import {AppHeader} from "./Header";
import {Home, Layers2, LayoutDashboard, Menu, Settings} from "lucide-react";
import useLayout from "./useLayout";
import {MenuItemType} from "./SideBar/components/NavigationMenu";
import {cn} from "@/lib/utils";

export const ToggleContext = createContext<any>({
    toggledMainMenu: false,
    toggledSubMenu: true,
})

export const menuList : MenuItemType[] = [
    {
        label: 'Menu item 1',
        type: 'menu',
        icon: <Menu/>,
        key: 'm-1',
        children: [
            {
                label: 'Sub 1',
                key: 'Sub 1',
                path: '/',
                icon: <Layers2/>
            },
            {
                label: 'Sub 2',
                key: 'Sub 2',
                path: '/',
                icon: <Layers2/>
            },
            {
                label: 'Sub 3',
                key: 'Sub 3',
                path: '/',
                icon: <Layers2/>
            },
        ]
    },
    {
        label: 'Menu item 2',
        path: '/user',
        icon: <LayoutDashboard/>,
        key: 'm-2',
        type: 'link'

    },
    {
        label: 'Menu item 3',
        path: '/admin',
        icon: <Settings/>,
        key: 'm-3',
        type: 'link'
    },
    {
        label: 'Menu item 4',
        type: 'menu',
        icon: <Menu/>,
        key: 'm-4',
        children: [
            {
                label: 'Sub 4',
                key: 'Sub 4',
                path: '/',
                icon: <Layers2/>
            },
            {
                label: 'Sub 5',
                key: 'Sub 5',
                path: '/',
                icon: <Layers2/>
            },
            {
                label: 'Sub 6',
                key: 'Sub 6',
                path: '/',
                icon: <Layers2/>
            },
        ]
    },
    {
        label: 'Menu item 2',
        path: '/admin',
        icon: <Home/>,
        key: 'm-5',
        type: 'link'
    }
]

function MainMenuWrapper(props: { handleMenu: (key: any) => void, toggle: any }) {

    const classNames = {
        "md:basis-[5%]": props.toggle?.toggledMainMenu
    }

    return <aside  className={cn("basis-[7%] md:basis-[15%] bg-amber-200", classNames)}>
        <AppSideBar menuItems={menuList} handleMenu={props.handleMenu}/>
    </aside>;
}

function SubMenuWrapper(props: { subMenu: any[], toggle: any }) {

    const classNames = {
        "md:basis-0": props.toggle?.toggledMainMenu || props.toggle?.toggledSubMenu
    }

    return <aside className={cn("basis-0 md:basis-[10%]  bg-amber-800", classNames)}>
        {props.subMenu.length > 0 && <SubMenuBar menuItems={props.subMenu}/>}
    </aside>;
}

export default function AdminLayout({ children }: { children: ReactNode }){
    const {
        setSelectedMenu,
        toggleHandler,
        toggleState,
        subMenu
    } = useLayout({ menuItems: menuList })
    const [state, dispatch] = useReducer(toggleHandler, toggleState)
    const onMenuChange = ( key: any, type?: any) => {
        setSelectedMenu(key)
        dispatch({type: 'TOGGLE_SUBMENU', payload: {...state, toggledSubMenu: type === 'link'}})
    }

    const onToggle = (type: string) => dispatch({type: type})


    return(
        <ToggleContext.Provider value={state}>
            <div className='w-full h-full flex justify-between'>
                <MainMenuWrapper handleMenu={onMenuChange} toggle={state}/>
                <SubMenuWrapper subMenu={subMenu} toggle={state}/>
                <aside className={
                    cn(
                        'basis-[93%] md:basis-[85%] p-[20px] bg-blue-700',
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
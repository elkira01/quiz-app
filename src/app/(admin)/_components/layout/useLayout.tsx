import {useEffect, useState} from "react";
import {MenuItemType} from "@/app/(admin)/_config/navigation/menu";

function useLayout({ menuItems }: {menuItems: MenuItemType[]}) {
    const [selectedMenu, setSelectedMenu] = useState<any>('')
    const [subMenu, setSubMenu] = useState<any[]>([])
    let toggleState = {
        toggledMainMenu: false,
        toggledSubMenu: true,
    }

    useEffect(() => {
        setSubMenu(() => menuItems?.find((item: any) => item.key === selectedMenu)?.children ?? [])
    }, [selectedMenu])

    const toggleHandler = (state: any, action: any) => {
        switch (action.type) {
            case 'TOGGLE_MAIN_MENU':
            return {
                toggledMainMenu: !state.toggledMainMenu,
                toggledSubMenu: true
            }
            case 'TOGGLE_SUBMENU':
            return {
                toggledSubMenu: action.payload ? action.payload.toggledSubMenu : !state.toggledSubMenu
            }
            default:
                console.log('')
        }
    }

    return {
        selectedMenu,
        subMenu,
        toggleState,
        setSelectedMenu,
        setSubMenu,
        toggleHandler,
    }
}

export default useLayout;
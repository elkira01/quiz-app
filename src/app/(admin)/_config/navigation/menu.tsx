import {Home, Layers2, LayoutDashboard, Menu, Settings} from "lucide-react";

export type MenuItemType = {
    label: string
    path?: string
    type?: 'link'|'menu'
    children?: MenuItemType[]
    icon?: any
    key: string
}
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
        label: 'Menu item 3',
        path: '/admin',
        icon: <Settings/>,
        key: 'm-3',
        type: 'link'
    },
    {
        label: 'Menu item 4',
        type: 'menu',
        icon: <LayoutDashboard/>,
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
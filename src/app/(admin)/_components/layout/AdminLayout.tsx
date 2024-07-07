import React, {ReactNode} from "react";
import {AppSideBar} from "./SideBar";
import {AppHeader} from "./Header";
import {Home, LayoutDashboard, Menu, Settings} from "lucide-react";

const menu = [
    {
        label: 'Menu item 1',
        path: '/user',
        icon: <Menu/>
    },
    {
        label: 'Menu item 2',
        path: '/admin',
        icon: <LayoutDashboard/>

    },
    {
        label: 'Menu item 3',
        path: '/admin',
        icon: <Settings/>
    },
    {
        label: 'Menu item 4',
        path: '/admin',
        icon: <Menu/>
    },
    {
        label: 'Menu item 2',
        path: '/admin',
        icon: <Home/>
    }
]
export default function AdminLayout({ children }: { children: ReactNode }){

    return<div className='w-full h-full flex justify-evenly '>
        <aside className='basis-[7%] md:basis-1/5 border-2'>
            <AppSideBar menuItems={menu}/>
        </aside>
        <aside className='basis-[93%] md:basis-4/5'>
            <div className='p-[20px]'>
                <AppHeader/>
                {children}
            </div>
        </aside>
    </div>
}
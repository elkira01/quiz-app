import React, {ReactNode} from "react";
import {AppSideBar} from "./SideBar";
import {AppHeader} from "./Header";

export default function AdminLayout({ children }: { children: ReactNode }){

    return<div className='w-full h-full flex justify-evenly '>
        <aside className='basis-1/4 md:basis-1/5'>
            <AppSideBar menuItems={[]}/>
        </aside>
        <aside className='basis-3/4 md:basis-4/5'>
            <div className='p-[20px]'>
                <AppHeader/>
                {children}
            </div>
        </aside>
    </div>
}
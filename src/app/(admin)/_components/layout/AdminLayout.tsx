import React, {ReactNode} from "react";
import {AppSideBar} from "./SideBar";

export default function AdminLayout({ children }: { children: ReactNode }){

    return<div className='w-full h-full flex justify-evenly'>
        <aside className='basis-1/4 md:basis-1/5 border-2'>
            <AppSideBar/>
        </aside>
        <aside className='basis-3/4 md:basis-4/5'>
            {children}
        </aside>
    </div>
}
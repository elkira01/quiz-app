"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {NavigationMenu, NavigationMenuLink, NavigationMenuList} from "@/components/ui/navigation-menu"
import { NavItem, NavItemProps} from "@/app/shared/layout/NavItem";

const appMenu: NavItemProps[] = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Quiz",
        path: "/pages/quiz",
    },
    {
        label: "FAQ",
        path: "/pages/faq",
    },
    {
        label: "Admin",
        path: "/pages/admin",
    }
]
export function AppNavigationMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {appMenu.map((item) => {
                    return <NavItem key={item.label} {...item} />
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}



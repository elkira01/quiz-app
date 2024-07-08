import React from "react";
import {MenuItemType} from "./components/NavigationMenu";
import * as SC from './_styles';
import {NavigationSubMenu} from "@/app/(admin)/_components/layout/SideBar/components/NavigationSubMenu";

export function SubMenuBar(props: { menuItems: MenuItemType[] }) {

    return <SC.Container>
            <NavigationSubMenu menuItems={props.menuItems} onSelect={()=> {}}/>
    </SC.Container>
}
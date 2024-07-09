import React from "react";
import * as SC from './_styles';
import {NavigationSubMenu} from "@/app/(admin)/_components/layout/SideBar/components/NavigationSubMenu";
import {MenuItemType} from "@/app/(admin)/_config/navigation/menu";

export function SubMenuBar(props: { menuItems: MenuItemType[] }) {

    return <SC.Container>
            <NavigationSubMenu menuItems={props.menuItems} onSelect={()=> {}}/>
    </SC.Container>
}
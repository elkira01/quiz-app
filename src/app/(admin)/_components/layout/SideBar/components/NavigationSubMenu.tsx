import * as SC from "../_styles";
import {Layers2} from "lucide-react";
import {cn} from "@/lib/utils";
import {MenuItemType} from "./NavigationMenu";
import {useContext} from "react";
import {ToggleContext} from "@/app/(admin)/_components/layout/AdminLayout";

export const NavigationSubMenu = ({menuItems, onSelect}: { menuItems: MenuItemType[], onSelect: Function }) => {
    const toggle = useContext(ToggleContext)

    return <>
        {!toggle.toggledSubMenu ?
            <div className='p-5'>
                <SC.Menu>
                    {menuItems?.length > 0 && menuItems.map((item) =>
                        <SC.MenuItem  href={item.path ?? ''} key={item.key} onClick={() => onSelect(item.key)}>
                            <Layers2 size={20}/>
                            <div className={cn("hidden md:block")}>
                                <SC.MenuLabel>
                                    {item.label}
                                </SC.MenuLabel>
                            </div>
                        </SC.MenuItem>
                    )}
                </SC.Menu>
            </div>:
            <></>
        }
    </>
}
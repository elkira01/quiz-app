import * as SC from './_styles';
import Link from "next/link";
export const NavigationMenu = ({ menuItems } : { menuItems: any[]}) => {

    return<SC.Menu>
        {menuItems.map((item) => {
            return (
                <SC.MenuItem key={item.label}>
                    <SC.MenuItemLink href={item.path}>{item.label}</SC.MenuItemLink>
                </SC.MenuItem>
            )
        })}
    </SC.Menu>
}
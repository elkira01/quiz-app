import * as SC from './_styles';
import {IconCircle} from "@/app/shared/components/icons/IconCircle";
export const NavigationMenu = ({ menuItems } : { menuItems: any[]}) => {

    return<SC.Menu>
        {menuItems.map((item) => {
            return (
                <SC.MenuItem key={item.label}>
                    <IconCircle $border='0.5px dashed'>
                        {item.icon}
                    </IconCircle>
                    <div className='hidden md:block'>
                        <SC.MenuItemLink href={item.path}>
                            {item.label}
                        </SC.MenuItemLink>
                    </div>
                </SC.MenuItem>
            )
        })}
    </SC.Menu>
}
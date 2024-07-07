import * as SC from './_styles';
import Image from "next/image";
import {NavigationMenu} from "./NavigationMenu";

const menu = [
    {
        label: 'Home',
        path: '/admin',
    },
    {
        label: 'Quizzes',
        path: '/admin',
    }
    // Add more menu items here...
]

// AppSideBar component
export const AppSideBar = ({ menuItems }: {menuItems: any[]}) => {

    return<SC.SideBarContainer>
        <SC.Logo>
            R-Encarta
        </SC.Logo>
        <section className='mt-10'>
            <NavigationMenu
                menuItems={menu}
            />
        </section>
    </SC.SideBarContainer>
}
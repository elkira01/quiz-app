import * as SC from './_styles';
import {NavigationMenu} from "./components/NavigationMenu";
import { IconCircle } from "@/app/shared/components/icons/IconCircle";
import Image from "next/image";
import {logo} from "@/app/shared/assets";
import {useContext} from "react";
import {ToggleContext} from "@/app/(admin)/_components/layout/AdminLayout";
import {cn} from "@/lib/utils";


const Logo = ({ normal, minimal }: { normal: any, minimal: any }) => {
    const toggle = useContext(ToggleContext)

    return<SC.LogoContainer>
        <div className={cn('block md:hidden', {'md:block': toggle?.toggledMainMenu})}>
            <IconCircle>
                {minimal}
            </IconCircle>
        </div>
        <div className={cn('hidden md:flex text-center px-2', {'md:hidden': toggle?.toggledMainMenu})}>
            {normal}
        </div>
    </SC.LogoContainer>
}


export const AppSideBar = ({ menuItems, handleMenu }: { menuItems: any[], handleMenu: Function }) => {

    return<SC.Container>
        <section className='p-[10px] md:px-[20px]'>
            <Logo
                normal={<>
                    <IconCircle>
                        <Image src={logo} alt='' width={100}/>
                    </IconCircle>
                    <div className='font-bold sm:text-[1rem] lg:text-2xl xl:text-2xl text-center flex items-center mx-2'>
                        R-Encarta
                    </div>
                </>}
                minimal={<Image src={logo} alt='Logo' width={100}/>}
            />
            <div className='mt-10'>
                <NavigationMenu menuItems={menuItems} onSelect={handleMenu} displayTooltip/>
            </div>
        </section>
        <SC.Footer>
            F
        </SC.Footer>
    </SC.Container>
}
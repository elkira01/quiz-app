import * as SC from './_styles';
import {NavigationMenu} from "./NavigationMenu";
import { IconCircle } from "@/app/shared/components/icons/IconCircle";
import Image from "next/image";
import {logo} from "@/app/shared/assets";



const Logo = ({ normal, minimal }: { normal: any, minimal: any }) => {

    return<SC.LogoContainer>
        <div className='block md:hidden'>
            <IconCircle>
                {minimal}
            </IconCircle>
        </div>
        <div className='hidden md:flex text-center px-2'>
            {normal}
        </div>
    </SC.LogoContainer>
}


export const AppSideBar = ({ menuItems }: { menuItems: any[] }) => {

    return<SC.Container>
        <section className='p-[10px] md:px-[20px]'>
            <Logo
                normal={<>
                    <IconCircle>
                        <Image src={logo} alt='' width={100}/>
                    </IconCircle>
                    <div className='font-bold sm:text-[1rem] lg:text-2xl xl:text-3xl text-center flex items-center mx-2'>
                        R-Encarta
                    </div>
                </>}

                minimal={<Image src={logo} alt='Logo' width={100}/>}
            />
            <div className='mt-10'>
                <NavigationMenu menuItems={menuItems}/>
            </div>
        </section>
        <SC.Footer>
            F
        </SC.Footer>
    </SC.Container>
}
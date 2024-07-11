import * as SC from './_styles';
import {AlignJustify, Settings, User} from "lucide-react";
import SearchArea from "@/app/(admin)/_components/layout/components/SearchArea";
import React from "react";
import {AppIcon} from "@/app/shared/components/icons/AppIcon";

type ContentProps = {
    component: React.ReactNode,
    md: number,
    sm: number,
    lg: number
}

export function AppHeader(
{
    handleToggle, content
}: { handleToggle?: any, content?: ContentProps[]}){

    return<SC.HeaderContainer>
        <div className='basis-[5%]'>
            <AppIcon
                shape='circle'
                $bgColor='inherit'
                onClick={() => handleToggle ? handleToggle('TOGGLE_MAIN_MENU') : {}}
                icon={<AlignJustify/>}
            />
        </div>
        <div className='basis-[25%]'>
            <SearchArea/>
        </div>
        <div className='basis-[70%] flex justify-end'>
            {content && content.map((item) => {
                const {component, md, sm, lg} = item;
                return(
                    <div key={md} className={`sm:[${sm}%] md:[${lg}%] lg:basis-[${md}%] flex justify-center`}>
                        {component}
                    </div>
                )
            })}
        </div>
    </SC.HeaderContainer>
}
import * as SC from './_styles';
import {AlignJustify, Settings, User} from "lucide-react";
import SearchInput from "@/app/(admin)/_components/layout/components/SearchInput";
import {IconCircle} from "@/app/shared/components/icons/IconCircle";
export function AppHeader({ handleToggle }: { handleToggle?: any}){

    return<SC.HeaderContainer>
        <div className='basis-1/5'>
            <IconCircle $bgColor='#ffffff'>
                <AlignJustify onClick={() => handleToggle ? handleToggle('TOGGLE_MAIN_MENU') : {}}/>
            </IconCircle>
        </div>
        <div className='basis-2/5'>
            <SearchInput/>
        </div>
        <div className='basis-1/5  flex justify-center'>
            <IconCircle>
                <User/>
            </IconCircle>
        </div>
        <div className='basis-1/5 flex justify-center'>
            <IconCircle $bgColor='#ffffff'>
                <Settings/>
            </IconCircle>
        </div>
    </SC.HeaderContainer>
}
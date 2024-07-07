import * as SC from './_styles';
import {AlignJustify, LucideToggleLeft, Settings} from "lucide-react";
import SearchInput from "@/app/(admin)/_components/layout/components/SearchInput";
import {IconCircle} from "@/app/shared/components/icons/IconCircle";
export function AppHeader({}){

    return<SC.HeaderContainer>
        <div className='basis-1/5'>
            <AlignJustify/>
        </div>
        <div className='basis-2/5'>
            <SearchInput/>
        </div>
        <div className='basis-1/5  flex justify-end'>
            <IconCircle/>
        </div>
        <div className='basis-1/5 flex justify-center'>
            <IconCircle $bgColor='#ffffff'>
                <Settings/>
            </IconCircle>
        </div>
    </SC.HeaderContainer>
}
'use client'

import {AdminLoginForm} from '@/app/(admin)/_components/forms';
import {CardContainer} from "@/app/(admin)/_components/container/CardContainer";
export default function AdminLogin(){

    return(
        <div className='w-full border-2 border-dashed'>
            <CardContainer $width='50%'>
                <AdminLoginForm/>
            </CardContainer>
            <CardContainer $width='50%'>
                <AdminLoginForm/>
            </CardContainer>
            {/*<CardContainer $width='50%'>*/}
            {/*    <AdminLoginForm/>*/}
            {/*</CardContainer>*/}
        </div>
    )
}
'use client'

import {AdminLoginForm} from '@/app/(admin)/_components/forms';
import {Card} from "@/components/ui/card";
export default function AdminLogin(){

    return(
        <div className='w-full border-2 border-dashed py-10 border-black'>
            <Card className="w-1/2 p-[1.25rem] bg-card">
                <AdminLoginForm/>
            </Card>
        </div>
    )
}
'use client'

import {AdminLoginForm} from '@/app/(admin)/_components/forms';
import {Card} from "@/components/ui/card";
export default function AdminLogin(){

    return(
        <div className='w-full py-10'>
            <Card className="w-1/2 p-[1.25rem] bg-card">
                <AdminLoginForm/>
            </Card>
        </div>
    )
}
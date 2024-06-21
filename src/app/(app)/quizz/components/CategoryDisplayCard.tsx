import {IQuizDomain} from "@/backend/core/model/IQuizDomain";
import {
    Card,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export type CategoryType = Partial<IQuizDomain>
export default function CategoryDisplayCard({designation, id}: CategoryType){

    return(
        <Card className='p-5 rounded-2xl bg-indigo-200 shadow-card'>
            <CardHeader className='w-full text-start'>
                <CardTitle className='text-xl italic font-bold'>{designation}</CardTitle>
            </CardHeader>
        </Card>
    )
}
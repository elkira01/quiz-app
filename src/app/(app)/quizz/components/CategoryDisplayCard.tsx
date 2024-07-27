import {IQuizDomain} from "@/backend/core/model/IQuizDomain";
import {
    Card, CardContent, CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export type CategoryType = Partial<IQuizDomain>
export default function CategoryDisplayCard({designation,description,id}: CategoryType){

    return(
        <Card className='p-5 rounded-2xl bg-indigo-200 shadow-card'>
            <CardContent>{designation}</CardContent>
            <CardFooter>{description}</CardFooter>
        </Card>
    )
}
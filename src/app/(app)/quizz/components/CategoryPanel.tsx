import useQuizManagement from "@/app/(app)/quizz/useQuizManagement";
import React, {useEffect} from "react";
import CategoryDisplayCard from "@/app/(app)/quizz/components/CategoryDisplayCard";

export default function CategoryPanel(){
    const {categoryCollection, getCategoryList} = useQuizManagement()

    useEffect(() => {
        getCategoryList()
    },[])

    return<div className='flex flex-row-reverse gap-y-3 gap-x-1'>
        {categoryCollection.map((dom: any, index) =>
            <div className='basis-full' key={index.toString()}>
                <CategoryDisplayCard
                    key={index.toString()}
                    designation={dom.designation}
                    description={dom.description}
                />
            </div>
        )}
    </div>
}
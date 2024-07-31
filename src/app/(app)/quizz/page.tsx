import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function QuizPage() {

    return<div className='flex justify-center py-2'>
        <div className='basis-full flex justify-around'>
            <Link href='/quizz/management/category/'>
                <Button>CATEGORY</Button>
            </Link>
            <Link href='/quizz/management/questionary/'>
                <Button>QUESTIONAIRE</Button>
            </Link>
        </div>
    </div>
}
import Link from "next/link";

export default function QuizPage() {

    return<div className='flex justify-center py-5 md:py-10'>
        <Link href='/quizz/management/category/'>
            Category
        </Link>
    </div>
}
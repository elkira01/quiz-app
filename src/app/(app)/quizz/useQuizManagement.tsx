import {useState} from "react";
import {IQuizDomain} from "@/backend/core/model/IQuizDomain";
import {IQuiz} from "@/backend/core/model/IQuiz";
import {createQuizDomain, fetchAllQuizDomain} from "@/backend/ui/quizDomain/controller/quizDomainController";
import useAuthController from "@/app/(app)/user/authentication/useAuthController";

const UseQuizManagement = () => {
    const [categoryCollection, setCategoryCollection] = useState<IQuizDomain[]|[]>([])
    const [quizCollection, setQuizCollection] = useState<IQuiz[]|[]>([])
    const {user} = useAuthController()

    const getCategoryList = async () => {
        let response: any = []

        try {
            response = await fetchAllQuizDomain()
            setCategoryCollection(response)
        }
        catch (e) {
            console.log(e)
        }

    }

    const createCategory = async (value: any) => {
        let response: any = null

        try {
            response = await createQuizDomain({...value, author: user})
            console.log(response)
        }
        catch (e) {
            console.log(e)
        }
    }

    return{
        categoryCollection,
        createCategory,
        getCategoryList,
    }
}

export default UseQuizManagement;
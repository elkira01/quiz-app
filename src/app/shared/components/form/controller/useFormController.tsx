import {z} from "zod";
import {useEffect, useState} from "react";
import {resolveFormInputsValidation} from "@/app/shared/components/form/controller/_utils";


export const useFormController = (params: any) => {
    const { inputs } = params;
    const [schema, setSchema] = useState<any>(z.object({}))

    useEffect(() => {
        const validator = resolveFormInputsValidation(inputs);
        setSchema(validator);
    },[inputs])



    return {
        schema
    }
}
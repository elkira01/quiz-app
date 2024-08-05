import {z, ZodSchema} from "zod";
import {useEffect, useState} from "react";
import {resolveInputsValidation} from "./helpers";


export const useFormController = (params: any) => {
    const { inputs } = params;
    const [schema, setSchema] = useState<ZodSchema>(z.object({}))

    useEffect(() => {
        const validator = resolveInputsValidation(inputs);
        setSchema(validator);
    },[inputs])

    return {
        schema,
    }
}
import {cn} from "@/lib/utils";
import React, {useState} from "react";
import {resolveColumnSize} from "@/app/shared/components/form/_components/_utils";

interface ColProps extends React.HTMLProps<HTMLDivElement>{
    xs?: any
    sm?: any
    md?: any
    lg?: any
    xl?: any
    children: React.ReactNode
}

const FormCol = ({children, className, ...rest}: ColProps) => {
    const [basis, setBasis] = useState<number|string>(100)
    const flexBasis = {
        xs: rest.xs,
        sm: rest.sm,
        md: rest.md,
        lg: rest.lg,
        xl: rest.xl
    }

    React.useEffect(() => {
        setBasis(resolveColumnSize(flexBasis))
    }, [flexBasis])

    window.addEventListener('resize', () => {
        setBasis(resolveColumnSize(flexBasis))
    },false)

    return<div className={cn(className)} {...rest} style={{flex: `0 1 ${basis}%`}}>
        {children}
    </div>
};

export default FormCol;
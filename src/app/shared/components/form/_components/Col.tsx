import {cn} from "@/lib/utils";
import React from "react";

interface ColProps extends React.HTMLProps<HTMLDivElement>{
   flexBasis?: {
       xs?: any
       sm?: any
       md?: any
       lg?: any
       xl?: any
   },
    children: React.ReactNode
}

const computedSize = (props: ColProps, colSize: any, base: number = 12) => {
    return 100;
}

const resolveColumnSize = (props: any, colSize: any) : any => {
    const precedence =  {
        xl: props?.xl ?? props?.lg ?? props?.md ?? props?.sm ?? props?.xs ?? 100,
        lg: props?.lg ?? props?.md ?? props?.sm ?? props?.xs ?? 100,
        md: props?.md ?? props?.sm ?? props?.xs ?? 100,
        sm: props?.sm ?? props?.xs ?? 100,
        xs: props?.xs ?? 100
    }

    return Object.entries(precedence).find(([key] : any) => key === colSize)?.at(1)
}
export const Col = ({flexBasis,children,className, ...rest}: ColProps) => {

    const classNames = `
        basis-[${resolveColumnSize(flexBasis, 'xs')}%]
        sm:basis-[${resolveColumnSize(flexBasis,'sm')}%]
        md:basis-[${resolveColumnSize(flexBasis,'md')}%]
        lg:basis-[${resolveColumnSize(flexBasis,'lg')}%]
        xl:basis-[${resolveColumnSize(flexBasis,'xl')}%]
    `;

    return<div className={cn(className, classNames)} {...rest}>
        {children}
    </div>
};
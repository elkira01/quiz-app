import styled from "styled-components";
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

// export const Col = styled.div<ColProps>`
//      //flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'xs')) / 12) * 100}%`};
//     flex-basis: ${props => `${(Number(resolveColumnSize(props, 'xs'))/ 12) * 100}%`};
//
//     @media (min-width: 576px) {
//          //flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'sm')) / 12) * 100}%`};
//       flex-basis: ${props => `${(Number(resolveColumnSize(props, 'sm')) / 12) * 100}%`};
//     }
//
//     @media (min-width: 768px) {
//          // flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'md')) / 12) * 100}%`};
//       flex-basis: ${props => `${(Number(resolveColumnSize(props, 'md')) / 12) * 100}%`};
//     }
//
//     @media (min-width: 992px) {
//        //flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'lg'))/ 12) * 100}%`};
//       flex-basis: ${props => `${(Number(resolveColumnSize(props, 'lg')) / 12) * 100}%`};
//     }
//
//     @media (min-width: 1200px) {
//       //flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'xl')) / 12) * 100}%`};
//       flex-basis: ${props => `${(Number(resolveColumnSize(props, 'xl')) / 12) * 100}%`};
//     }
//
//     //padding: 0 .5rem;
// `;

// export const Col = (props: ColProps) => {
//     const {
//         $xs,
//         $sm,
//         $md,
//         $lg,
//         $xl,
//         className,
//     ...rest } = props;
//
//     const classNames = cn(
//         `   basis-[${computedSize(props, 'xs')}%]
//             sm:basis-[${computedSize(props, 'sm')}%]
//             md:basis-[${computedSize(props, 'md')}%]
//             lg:basis-[${computedSize(props, 'lg')}%]
//             xl:basis-[${computedSize(props, 'xl')}%]
//         `,
//         className
//     );
//
//     return <div {...rest} className={classNames}>{props.children}</div>
// }

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
export const Col = ({flexBasis, ...rest}: ColProps) => {

    const classNames = `
        basis-[${resolveColumnSize(flexBasis, 'xs')}%]
        sm:basis-[${resolveColumnSize(flexBasis,'sm')}%]
        md:basis-[${resolveColumnSize(flexBasis,'md')}%]
        lg:basis-[${resolveColumnSize(flexBasis,'lg')}%]
        xl:basis-[${resolveColumnSize(flexBasis,'xl')}%]
    `;

    return<div className={cn(rest.className, classNames)}>
        {rest.children}
    </div>
};
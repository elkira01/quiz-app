import styled from "styled-components";

interface ColProps extends React.HTMLProps<HTMLDivElement>{
    $xs?: number
    $sm?: number
    $md?: number
    $lg?: number
    $xl?: number
}

const resolveColumnSize = (props: ColProps, col: any) : any => {
    const precedence =  {
        xl: props.$xl ?? props.$lg ?? props.$md ?? props.$sm ?? props.$xs ?? 12,
        lg: props.$lg ?? props.$md ?? props.$sm ?? props.$xs ?? 12,
        md: props.$md ?? props.$sm ?? props.$xs ?? 12,
        sm: props.$sm ?? props.$xs ?? 12,
        xs: props.$xs ?? 12
    }

    return Object.entries(precedence).find(([key] : any) => key === col)?.at(1)
}

const computedSize = (props: ColProps, col: any) => {
    return (Number(resolveColumnSize(props, col)) / 12) * 100;
}

export const Col = styled.div<ColProps>`
     //flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'xs')) / 12) * 100}%`};
    flex-basis: ${props => `${(Number(resolveColumnSize(props, 'xs'))/ 12) * 100}%`};

    @media (min-width: 576px) {
         //flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'sm')) / 12) * 100}%`};
      flex-basis: ${props => `${(Number(resolveColumnSize(props, 'sm')) / 12) * 100}%`};
    }

    @media (min-width: 768px) {
         // flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'md')) / 12) * 100}%`};
      flex-basis: ${props => `${(Number(resolveColumnSize(props, 'md')) / 12) * 100}%`};
    }

    @media (min-width: 992px) {
       //flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'lg'))/ 12) * 100}%`};
      flex-basis: ${props => `${(Number(resolveColumnSize(props, 'lg')) / 12) * 100}%`};
    }

    @media (min-width: 1200px) {
      //flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'xl')) / 12) * 100}%`};
      flex-basis: ${props => `${(Number(resolveColumnSize(props, 'xl')) / 12) * 100}%`};
    }

    //padding: 0 .5rem;
`;

// export const Col = (props: ColProps) => {
//     const {
//         $xs,
//         $sm,
//         $md,
//         $lg,
//         $xl,
//     ...rest } = props;
//
//
//     return <div
//         {...rest}
//         className={`basis-[${computedSize(props, 'xs')}%]
//         `}
//     >
//         {props.children}
//     </div>
// }
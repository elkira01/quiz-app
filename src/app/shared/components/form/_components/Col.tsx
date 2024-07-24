import styled from "styled-components";

interface ColProps extends React.HTMLProps<HTMLDivElement>{
    $xs?: number
    $sm?: number
    $md?: number
    $lg?: number
    $xl?: number
}

const resolveColumnSize = (props: ColProps, col: any) => {
    const precedence =  {
        xl: props.$xl ?? props.$lg ?? props.$md ?? props.$sm ?? props.$xs ?? 12,
        lg: props.$lg ?? props.$md ?? props.$sm ?? props.$xs ?? 12,
        md: props.$md ?? props.$sm ?? props.$xs ?? 12,
        sm: props.$sm ?? props.$xs ?? 12,
        xs: props.$xs ?? 12
    }

    let target = Object.entries(precedence).find(([key] : any) => key === col);

    return target?.at(1)
}

export const Col = styled.div<ColProps>`
  
    // flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'xs')) / 12) * 100}%`};
    width: ${props => `${(Number(resolveColumnSize(props, 'xs'))/ 12) * 100}%`};

    @media (min-width: 576px) {
        flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'sm')) / 12) * 100}%`};
        width: ${props => `${(Number(resolveColumnSize(props, 'sm')) / 12) * 100}%`};
    }

    @media (min-width: 768px) {
        flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'md')) / 12) * 100}%`};
        width: ${props => `${(Number(resolveColumnSize(props, 'md')) / 12) * 100}%`};
    }

    @media (min-width: 992px) {
      flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'lg'))/ 12) * 100}%`};
      width: ${props => `${(Number(resolveColumnSize(props, 'lg')) / 12) * 100}%`};
    }

    @media (min-width: 1200px) {
      flex: 0 0 ${props => `${(Number(resolveColumnSize(props, 'xl')) / 12) * 100}%`};
      width: ${props => `${(Number(resolveColumnSize(props, 'xl')) / 12) * 100}%`};
    }
`;
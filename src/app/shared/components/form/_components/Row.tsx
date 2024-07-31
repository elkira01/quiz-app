import styled from "styled-components";

interface FormRowProps extends React.HTMLProps<HTMLDivElement>{
    $justify?: any
    $gutter?: number[];
}
export const Row = styled.div<FormRowProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: ${(props: FormRowProps) => props.$justify ?? 'flex-start'};
  row-gap: ${(props: FormRowProps) => props.$gutter ? Number(0.25 * props.$gutter[0]).toString()+'rem' : '0px'};
   column-gap: ${(props: FormRowProps) => props.$gutter ? Number(0.25 * props.$gutter[1]).toString()+'rem' : '0px'};
`;
import styled from "styled-components";
import {Input, InputProps} from "@/components/ui/input";


export const InputWrapper = styled<any>(Input)`
  width: ${props => props.$width ?? '100%'};
  border-radius: ${(props) => props.$rounded ?
          props.$rounded == 'light' ? '8px'
          :
          props.$rounded == 'medium' ? '14px'
            :
          '20px'
      : '14px'
  };
  padding: 14px;
  font-weight: bold;
  font-size: 1rem;
  font-family: "Yu Gothic Medium",monospace;
  letter-spacing: 0.85px;
`
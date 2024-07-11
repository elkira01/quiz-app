import styled from "styled-components";
import {Input, InputProps} from "@/components/ui/input";

interface StyledInputProps extends InputProps{
    $rounded?: 'light'|'medium'|'high'
    $width?: any
}
export const InputWrapper = styled<StyledInputProps & any>(Input)`
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
  background-color: rgb(255,255,255, 0.8);
  font-weight: bold;
  font-size: 1rem;
  font-family: "Yu Gothic Medium",monospace;
  letter-spacing: 0.85px;
`
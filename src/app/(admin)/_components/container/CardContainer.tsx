import styled from "styled-components";
import {Card} from "@/components/ui/card";
import theme from "@/app/(admin)/_theme";

export const CardContainer = styled<any>(Card)`
  width: ${(props) => props.$width ?? "100%"};
  height: fit-content;
  padding: ${theme.BoxLayout.primaryPadding};
  
  display: flex;
  flex-direction: row;
  gap: ${theme.BoxLayout.flexGap};
  
`;
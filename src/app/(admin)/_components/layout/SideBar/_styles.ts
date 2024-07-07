import styled from "styled-components";
import {theme} from "@/app/(admin)/_theme";
import Link from "next/link";

export const SideBarContainer = styled.div`
  padding: 20px;
  height: 100%;
  border: solid 0.75px black;
  //background-color: ${theme.Color.primaryColor};
`;

export const Logo = styled.div<any>`
  border: 1px dashed gray;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
  
  @media (max-width: 980px) {
    height: 50px;
    font-size: 1.5rem;
  }
`;

export const Icon = styled.div`

`;


export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`;

export const MenuItem = styled.div`
  text-align: center;
  display: flex;
  align-items: center;

  &.hover {
    cursor: pointer;
  }
`;

export const MenuItemLink = styled<any>(Link)`
  color: black;
  
  &.hover {
    color: ${theme.Color.primaryColor};
  }
`;

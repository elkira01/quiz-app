import styled from "styled-components";
import {theme} from "@/app/(admin)/_theme";
import Link from "next/link";

export const Container = styled.div`
  padding: 20px 0 0 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const Footer = styled.footer`
  height: 10%;
  width: 100%;
  padding: 20px;
  border: dashed 0.75px black;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const LogoContainer = styled.div<any>`
  border: 1px dashed gray;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 980px) {
    height: 50px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const MenuItem = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 0.5rem;

  &.hover {
    cursor: pointer;
  }
  
  font-size: 1rem;
  
  @media (max-width: 780px) {
    font-size: 0.9rem;
  }
`;

export const MenuItemLink = styled<any>(Link)`
  color: black;
  
  &.hover {
    color: ${theme.Color.primaryColor};
  }
`;

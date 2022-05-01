import styled, { keyframes } from "styled-components";

const menuAnimation = keyframes`
    0%{height: 0px};
    100%{height: 240px};
`;

const menuItemAnimation = keyframes`
    0%{opacity: 0};
    100%{opacity: 1};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  animation: ${menuAnimation} 0.32s;
  -webkit-animation-fill-mode: forwards;
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.black},
    ${({ theme }) => theme.colors.text}
  );
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
  position: relative;
`;

export const MenuItem = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.large};
  line-height: 32px;
  cursor: pointer;
  animation: ${menuItemAnimation} 1s;
  &:hover{
    color: ${({ theme }) => theme.colors.secondary_light};
  }
`;

export const CloseMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin: 0 0 12px 50%;
  background-color: ${({ theme }) => theme.colors.error};
  animation: ${menuItemAnimation} 2s;
`;
import styled, { keyframes } from "styled-components";

interface DrawerProps {
  direction: "top" | "right" | "left";
}

const menuAnimationVertical = keyframes`
    0%{height: 0px};
    100%{height: 24vh};
`;

const menuAnimationHorizontal = keyframes`
  0%{width: 0px};
  100%{width: 280px};
`;

export const Container = styled.div<DrawerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ direction }) => (direction === "top" ? "20vh" : "100%")};
  width: ${({ direction }) => (direction === "top" ? "100%" : "300px")};
  position: fixed;
  top: 0;
  left: ${({ direction }) => (direction === "left" ? 0 : 300)};
  right: ${({ direction }) => (direction === "left" ? 300 : 0)};
  border-left: ${({ direction, theme }) => (direction === "right" ? `1px solid ${theme.colors.silver}` : null)};
  border-right: ${({ direction, theme }) => (direction === "left" ? `1px solid ${theme.colors.silver}` : null)};
  border-bottom: ${({ direction, theme }) => (direction === "top" ? `1px solid ${theme.colors.silver}` : null)};
  right: ${({ direction }) => (direction === "left" ? 300 : 0)};
  z-index: 999;
  animation: ${({ direction }) =>
      direction === "top" ? menuAnimationVertical : menuAnimationHorizontal}
    0.32s;
  -webkit-animation-fill-mode: forwards;
  background-color: ${({ theme }) => theme.colors.element_base};
  overflow: auto;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 40px;
  position: relative;
  padding: 40px 24px;
`;

export const MenuItem = styled.a`
  color: ${({ theme }) => theme.colors.black};
  text-transform: capitalize;
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.large};
  line-height: 32px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CloseMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-top: -16px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.error};
`;

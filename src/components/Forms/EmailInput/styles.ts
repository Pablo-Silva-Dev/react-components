import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  @media(max-width: 720px){
    width: 98%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 37px;
  width: 37px;
  margin: 4px;
  margin-top: 1px; 
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  margin-right: 2px;

`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 4px;
  min-width: 240px;
  width: 100%;
  height: 40px;
  margin: 0 4px 0 0;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.element_base};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.element_base};
  }
`;

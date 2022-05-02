import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 240px;
  `;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  margin-right: 2px;
`;

export const Input = styled.input`
display: flex
justify-content: center;
align-items: center;
border: none;
outline: none;
border-radius: 4px;
min-width: 240px;
height: 40px;
padding: 16px;
background: ${({ theme }) => theme.colors.white};
border: 2px solid ${({ theme }) => theme.colors.element_base};

&:focus{
    border: 2px solid ${({ theme }) => theme.colors.primary};
}

&:disabled{
    background: ${({ theme }) => theme.colors.element_base};
}

`;

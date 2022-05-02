import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 640px;
  min-width: 240px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};

  &:disabled{
    background-color: ${({ theme }) => theme.colors.primary_light};
  }

`;

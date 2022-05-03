import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 640px;
  height: 40px;
  background-color: transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  
  &:disabled{
    background-color: ${({ theme }) => theme.colors.white};
    border-color:  ${({ theme }) => theme.colors.primary_light};
  }

`;
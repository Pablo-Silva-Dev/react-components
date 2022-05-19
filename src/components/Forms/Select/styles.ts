import styled from "styled-components";

export const SelectInput = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding: 0 8px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  outline: none;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.element_base};
  }
`;

export const Option = styled.option`
  height: 40px;
`;

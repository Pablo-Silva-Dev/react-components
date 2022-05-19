import styled from "styled-components";

export const TextAreaElement = styled.textarea`
  width: 100%;
  min-height: 120px;
  border-radius: 4px;
  padding: 8px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  outline: none;
  resize: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.element_base};
  }

  @media (max-width: 720px) {
    max-width: 92%;
    margin: 0 auto;
  }

`;

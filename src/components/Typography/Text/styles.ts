import styled from "styled-components";

export const Text = styled.span`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

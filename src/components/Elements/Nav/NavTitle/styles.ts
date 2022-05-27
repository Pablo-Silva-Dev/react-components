import styled from "styled-components";

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.xlarge};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

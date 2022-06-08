import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  & > div {
    position: unset !important;
  }
  @media (max-width: 720px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const NextImage = styled(Image)`
`;

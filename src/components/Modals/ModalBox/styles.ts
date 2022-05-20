import styled from "styled-components";
import Modal from "react-modal";

export const Container = styled(Modal)`
  width: 400px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 16px;
  border: 0;
  @media (max-width: 720px) {
    width: 320px;
    height: 240px;
    margin: 0 auto;
  }
`;

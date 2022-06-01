import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  margin: 16px;
  cursor: pointer;
  @media (max-width: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

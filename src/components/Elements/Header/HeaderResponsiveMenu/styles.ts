import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  margin: 16px;
  @media (max-width: 720px) {
    display: flex;
  }
`;

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: red;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
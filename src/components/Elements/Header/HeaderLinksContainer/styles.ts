import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-width: 56vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 1080px) {
    display: none;
  }
`;
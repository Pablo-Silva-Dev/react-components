import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    margin: 0 auto;
    @media(max-width: 720px){
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`

export const PagesCounterContainer = styled.div`
    max-width: 50%;
    display: flex;
    align-items: center;
    @media(max-width: 720px){
        width: 100%;
        justify-content: center;
    }
`

export const ButtonsContainer = styled.div`
    max-width: 50%;
    display: flex;
    justify-content: center;
    @media(max-width: 720px){
        width: 100%;
        
    }
`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 300;
  text-align: justify;
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const StrongText = styled.strong`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 400;
  text-align: justify;
  margin: 4px;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;
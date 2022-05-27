import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
background-color: ${({theme}) => theme.colors.white};
`

export const MainContainer = styled.div`
    display: flex;
    @media(max-width: 1080px){
        justify-content: center;
    }
`
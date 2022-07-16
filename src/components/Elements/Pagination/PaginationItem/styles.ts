import styled from 'styled-components'

export const Button = styled.button`
    width: 24px;
    height: 24px;
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.silver200};
    border-radius: 2px;
    font-size: ${({ theme }) => theme.sizes.small};
    padding: 4px;
    border: none;
    outline: none;
    cursor: pointer;

    &:disabled{
        cursor: auto;
        background: ${({ theme }) => theme.colors.silver300};
    }

    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
        padding: 0;
        font-size: ${({ theme }) => theme.sizes.xsmall};
        margin: 4px;
    }
`

export const ActiveButton = styled.button`
    width: 24px;
    height: 24px;
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    font-size: ${({ theme }) => theme.sizes.small};
    padding: 4px;
    border: none;
    outline: none;
    cursor: pointer;

    &:disabled{
        cursor: auto;
        background: ${({ theme }) => theme.colors.silver300};
    }

    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
        padding: 0;
        font-size: ${({ theme }) => theme.sizes.xsmall};
        margin: 4px 2px;
    }
`
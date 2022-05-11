import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 800px;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  @media(max-width: 1080px){
      width: 640px;
  }
  @media(max-width: 720px){
      width: 92%;
      margin: 0 auto;
      align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media(max-width: 720px){
     flex-direction: column;
     align-items: center;
     margin: 12px auto;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 16px 8px;
  @media(max-width: 720px){
    align-items: center;
    margin: 0 auto;
  }
`;

export const Input = styled.input`
display: flex
justify-content: center;
align-items: center;
border: none;
outline: none;
border-radius: 4px;
width: 320px;
height: 40px;
padding: 16px;
margin-left: 4px;
background: ${({ theme }) => theme.colors.white};
border: 2px solid ${({ theme }) => theme.colors.element_base};

&:focus{
    border: 2px solid ${({ theme }) => theme.colors.primary};
}

&:disabled{
    background: ${({ theme }) => theme.colors.element_base};
}

@media(max-width: 1080px){
    width: 240px;
  }
@media(max-width: 720px){
    width: 240px;
    margin-top: 4px;
  }

`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 120px;
  height: 38px;
  margin-left: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary_light};
  }

  @media(max-width: 720px){
    width: 240px;
    margin-top: 4px;
  }

`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.xxlarge};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.xlarge};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const Text = styled.h4`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  word-wrap: break-word;
  width: 100%;
  @media(max-width: 720px){
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;


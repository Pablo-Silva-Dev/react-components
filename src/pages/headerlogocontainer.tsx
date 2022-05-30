import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import {
    HeaderLogoContainer as HeaderLogoContainerComponent
} from '../components/Elements/Header/HeaderLogoContainer'
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";
import { HeaderLink } from '../components/Elements/Header/HeaderLink';
import { Logo } from '../components/Elements/Logo';

export default function HeaderLogoContainer() {

    const props = {
        children: 'Description: React elements to display. Type: ReactNode. Required.',
        style: 'Description: HeaderLogoContainer style. Type: CSS Properties.',
        className: 'Description: HeaderLogoContainer className. Type: String.'
    }

    const theme = useTheme()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='HeaderLogoContainer'
                    />
                    <Text
                        content='Used to display Logo on header.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <HeaderLogoContainerComponent
                        style={{
                            backgroundColor: theme.colors.primary,
                            width: '100%',
                            padding: 12
                        }}
                    >
                        <Logo
                            imageUrl='https://www.pablosilvadev.com.br/logo.svg'
                        />
                    </HeaderLogoContainerComponent >
                </PreviewContainer>

                <PropsContainer>
                    <SubTitle
                        content='Props:'
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    />
                    {Object.entries(props).map(prop => (
                        <>
                            <SubTitle
                                content={prop[0]}
                                style={{
                                    fontSize: 16
                                }}
                            />
                            <Text
                                content={prop[1]}
                            />
                        </>
                    ))}
                </PropsContainer>
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <HeaderLogoContainerComponent
                        style={{
                            backgroundColor: theme.colors.primary,
                            width: '100%',
                            padding: 12
                        }}
                    >
                        <Logo
                            imageUrl='https://www.pablosilvadev.com.br/logo.svg'
                        />
                    </HeaderLogoContainerComponent >"
                />
            </ComponentContainer>
        </Container>
    )
}
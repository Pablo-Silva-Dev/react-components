import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import { FooterFirstSection as FooterFirstSectionComponent } from '../components/Elements/Footer/FooterFirstSection'
import { SubTitle } from "../components/Typography/SubTitle";
import { Title } from "../components/Typography/Title";
import { Text } from "../components/Typography/Text";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";
import { FooterTitle } from '../components/Elements/Footer/FooterTitle';
import { FooterLink } from '../components/Elements/Footer/FooterLink';


export default function FooterFirstSection() {

    const props = {
        content: 'Description: Title Title to display. Type: String. Required.',
        style: 'Description: FooterFirstSection style. Type: CSS Properties.',
        className: 'Description: FooterFirstSection className. Type: String.'
    }

    const theme = useTheme()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='FooterFirstSection'
                    />
                    <Text
                        content='This component is a column section component that wrappers content (FooterTitle, FooterText and FooterLink are recommended) and composes the footer component by itself. This same component logic applies to FooterSecondSection, FooterThirdSection, and FooterFourthSection components.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <FooterFirstSectionComponent>
                        <FooterTitle
                            content='FooterTitle'
                        />
                        <FooterLink
                            content='FooterLink'
                            url='/'
                            style={{
                                color: theme.colors.text
                            }}
                        />
                    </FooterFirstSectionComponent>
                </PreviewContainer>

                <PropsContainer>
                    <SubTitle
                        content='Props:'

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
                    import { FooterTitle } from '../components/Elements/Footer/FooterTitle';
                    "
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    import { FooterLink } from '../components/Elements/Footer/FooterLink';
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <FooterFirstSectionComponent>
                        <FooterTitle
                            content='FooterTitle'
                        />
                        <FooterLink
                            content='FooterLink'
                            url='/'
                            style={{
                                color: theme.colors.text
                            }}
                        />
                    </FooterFirstSectionComponent>
                "
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}
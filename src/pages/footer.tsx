import { useTheme } from 'styled-components';
import { DisplayCode } from '../components/Display/DisplayCode';
import { Footer as FooterComponent } from '../components/Elements/Footer'
import { FooterFirstSection } from '../components/Elements/Footer/FooterFirstSection';
import { FooterFourthSection } from '../components/Elements/Footer/FooterFourthSection';
import { FooterLink } from '../components/Elements/Footer/FooterLink';
import { FooterSecondSection } from '../components/Elements/Footer/FooterSecondSection';
import { FooterThirdSection } from '../components/Elements/Footer/FooterThirdSection';
import { FooterTitle } from '../components/Elements/Footer/FooterTitle';
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

export default function Footer() {

    const props = {
        children: 'Description: React elements to display. Type: ReactNode. Required.',
        style: 'Description: Footer style. Type: CSS Properties.',
        className: 'Description: Footer className. Type: String.'
    }

    const theme = useTheme()

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Footer'
                    />
                    <Text
                        content='A footer wrapper used to mount your footer. It is auto responsible by default.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <FooterComponent>
                        <FooterFirstSection>
                            <FooterTitle
                                content='FooterTitleForFirstSection'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                        </FooterFirstSection>
                        <FooterSecondSection>
                            <FooterTitle
                                content='FooterTitleForSecondSection'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                        </FooterSecondSection>
                        <FooterThirdSection>
                            <FooterTitle
                                content='FooterTitleForThirdSection'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                        </FooterThirdSection>
                        <FooterFourthSection>
                            <FooterTitle
                                content='FooterTitleForFourthSection'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                        </FooterFourthSection>
                    </FooterComponent >
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
                    import { FooterLink } from '../components/Elements/Footer/FooterLink';
                    "
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    import { FooterFirstSection } from '../components/Elements/Footer/FooterFirstSection';
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    import { FooterTitle } from '../components/Elements/Footer/FooterTitle';
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    import { FooterSecondSection } from '../components/Elements/Footer/FooterSecondSection';
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    import { FooterThirdSection } from '../components/Elements/Footer/FooterThirdSection';
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    import { FooterFourthSection } from '../components/Elements/Footer/FooterFourthSection';
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <Footer>
                        <FooterFirstSection>
                            <FooterTitle
                                content='FooterTitleForFirstSection'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                        </FooterFirstSection>
                        <FooterSecondSection>
                            <FooterTitle
                                content='FooterTitleForSecondSection'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                        </FooterSecondSection>
                        <FooterThirdSection>
                            <FooterTitle
                                content='FooterTitleForThirdSection'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                        </FooterThirdSection>
                        <FooterFourthSection>
                            <FooterTitle
                                content='FooterTitleForFourthSection'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                            <FooterLink
                                content='FooterLink'
                                url='/'
                            />
                            <FooterLink
                               content='FooterLink'
                                url='/'
                            />
                        </FooterFourthSection>
                    </Footer > 
                    "
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}
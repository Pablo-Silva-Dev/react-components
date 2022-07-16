import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useEffect, useState } from 'react';
import { DisplayCode } from '../components/Display/DisplayCode';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { CookieModal as CookieModalComponent } from '../components/Modals/CookieModal';
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PropsContainer
} from "../styles";

export default function CookieModal() {

    const props = {
        isOpen: 'Description: Define if CookieModal should be open. Type: Boolean. Required.',
        cookiesTitle: 'Description: Content to display cookie modal title. Type: String. Required.',
        cookiesText: 'Description: Content to display cookie modal text. Type: String. Required.',
        buttonTitle: 'Description: Content to display in the button. Type: String. Required.',
        privacePolicyTitle: 'Description: Content to display in the privacy policy link. Type: String. Required.',
        privacePolicyUrl: 'Description: Url to redirect to privacy policy page. Type: String. Required.',
        requestCloseModal: 'Description: Function invoked on modal requests close. Type: Function. Required.',
        showAnimation: 'Description: Define if the CookieModal should open with an animation. Type: Boolean. Default: true.',
        modalClassName: 'Description: Modal container className. Type: String.',
        overlayClassName: 'Description: Modal overlay className. Type: String.',
        titleClassName: 'Description: Modal title className. Type: String.',
        textClassName: 'Description: Modal text className. Type: String.',
        privacyLinkClassName: 'Description: Privacy policy link className. Type: String.',
        buttonClassName: 'Description: Button className. Type: String.',
        titleStyle: 'Description:Modal title style. Type: CSSProperties.',
        textStyle: 'Description:Modal text style. Type: CSSProperties.',
        privacyLinkStyle: 'Description: Privacy policy link style. Type: CSSProperties.',
        buttonStyle: 'Description: Button style. Type: CSSProperties.',
    }

    const [cookieModal, setCookieModal] = useState(true)

    const COOKIE_TEST = 'My cookie value'

    function handleCloseCookieModal(): void {
        setCookie(undefined, 'react-component:cookiestest', COOKIE_TEST, {
            maxAge: 60 * 60 * 24, // 30-days
            path: '/'
        })
        setCookieModal(false)
    }

    function handleDestroyCookies(): void{
        destroyCookie(null, 'react-component:cookiestest')
        window.location.reload()
    }


    useEffect(() => {

        const cookies = parseCookies()
        const stringCookies = JSON.stringify(cookies)

        stringCookies.includes('react-component:cookiestes') && setCookieModal(false)

    }, [])

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='CookieModal'
                    />
                    <Text
                        content='Used to display a modal according to cookies configuration.'
                    />
                    <PrimaryButton
                        title='Click here to destroy cookies'
                        size='large'
                        onClick={handleDestroyCookies}
                    />
                </DescriptionContainer>
                <CookieModalComponent
                    isOpen={cookieModal}
                    overlayClassName='react-cookie-modal-overlay'
                    modalClassName='cookie-modal'
                    buttonTitle='Acept cookies'
                    requestCloseModal={handleCloseCookieModal}
                    privacePolicyTitle='See our privacy policy'
                    privacePolicyUrl='/'
                    cookiesTitle='Cookies alert'
                    cookiesText='We are using cookies'
                />
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
                    children="import { parseCookies, setCookie } from 'nookies';"
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="const [cookieModal, setCookieModal] = useState(true)"
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="function handleCloseCookieModal(): void {
                        setCookie(undefined, 'react-component:cookiestest', 'someValue', {
                            maxAge: 60 * 60 * 24, // 30-days
                            path: '/'
                        })
                        setCookieModal(false)
                    }"
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children=" useEffect(() => {
    
                        const cookies = parseCookies()
                        const stringCookies = JSON.stringify(cookies)
                
                        stringCookies.includes('react-component:cookiestes') && setCookieModal(false)
                
                    }, [])"
                    hideTitle
                />

                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <CookieModalComponent
                        isOpen={cookieModal}
                        overlayClassName='react-cookie-modal-overlay'
                        modalClassName='cookie-modal'
                        buttonTitle='Acept cookies'
                        requestCloseModal={handleCloseCookieModal}
                        privacePolicyTitle='See our privacy policy'
                        privacePolicyUrl='/'
                        cookiesTitle='Cookies alert'
                        cookiesText='We are using cookies'
                    />"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}
import { DisplayCode } from '../components/Display/DisplayCode';
import { Dropdown as DropdownComponent } from '../components/Elements/Dropdown'
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

export default function Dropdown() {


    const props = {
        items: 'Description: Array of ItemProps: {content: string, url: string, iconName?: string}. Type: ItemProps[]. Required.',
        stripped: 'Description: Applies a .stripped className if true. Type: Boolean.',
        iconsSize: 'Description: Icon size. Type: Number.',
        style: 'Description:  DropdownContainer style. Type: CSS Properties.',
        className: 'Description: DropdownContainer className. Type: String.',
        itemStyle: 'Description:  ItemContainer style. Type: CSS Properties.',
        iconsStyle: 'Description: Icon style. Type: CSS Properties.',
        textItemStyle: 'Description: Item text style. Type: CSS Properties.',
        textItemClassName: 'Description: Item text className. Type: String.',
        contentClassName: 'Description: Content className. Type: String.',
    }

    const list = [
        { content: 'JavaScript', url: '/', iconName: 'code' },
        { content: 'HTML and CSS3', url: '/', iconName: 'event-code' },
        { content: 'TypeScript', url: '/' },
    ]

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Dropdown'
                    />
                    <Text
                        content='Used to render a dropdown menu list.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <DropdownComponent
                        items={list}
                        iconsSize={24}
                        stripped
                    />
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
                    const list = [
                        { content: 'JavaScript', url: '/', iconName: 'code' },
                        { content: 'HTML and CSS3', url: '/', iconName: 'event-code' },
                        { content: 'TypeScript', url: '/' },
                    ]"
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <Dropdown
                        items={list}
                        iconsSize={24}
                        stripped
                    />"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}
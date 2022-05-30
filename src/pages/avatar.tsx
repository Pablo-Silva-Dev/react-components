import { DisplayCode } from '../components/Display/DisplayCode';
import { Avatar as AvatarComponent } from '../components/Elements/Avatar'
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

export default function Avatar() {

    const props = {
        imgUrl: 'Description: Path to find image. Type: String. Required.',
        size: 'Description: Image size. Type: "tiny" | "small" | "medium" | "large". Default: "medium".',
        style: 'Description: Image style. Type: CSS Properties.',
        className: 'Description: ClassName. Type: String.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='Avatar'
                    />
                    <Text
                        content='Used to display user profile image.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <AvatarComponent
                        imageUrl='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
                        size='large'
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
                    <Avatar
                        imageUrl='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
                        size='large'
                    />"
                />
            </ComponentContainer>
        </Container>
    )
}
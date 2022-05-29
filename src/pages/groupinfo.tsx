import { MdLightbulbOutline } from 'react-icons/md';
import { DisplayCode } from '../components/Display/DisplayCode';
import { GroupInfo as GroupInfoComponent } from '../components/Elements/GroupInfo'
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

export default function GroupInfo() {

    const props = {
        title: 'Description: Your info title. Type: String. Required.',
        content: 'Description: A short description about your info. Type: String. Required.',
        children: 'Description: A space to render some visual element side to Title, like an Icon or SVG. Type: ReactNode.',
        style: 'Description:  GroupInfoContainer style. Type: CSS Properties.',
        className: 'Description: GroupInfoContainer className. Type: String.',
        titleStyle: 'Description: Title style. Type: CSS Properties.',
        titleClassName: 'Description: Title className. Type: String.',
        contentStyle: 'Description: Content style. Type: CSS Properties.',
        contentClassName: 'Description: Content className. Type: String.',
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='GroupInfo'
                    />
                    <Text
                        content='Used to display a information group. Usually used to show topics and features.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <GroupInfoComponent
                        title='Some topic'
                        content='Minim occaecat aliquip aute magna do cillum ea ut non. Lorem ullamco esse magna deserunt ut laboris anim irure cillum id et magna. Sint duis minim ex laborum quis pariatur irure id. Nisi sit incididunt cupidatat do consectetur ea occaecat id esse sit qui adipisicing in. Duis in nulla aute non Lorem incididunt sint quis.'
                    >
                        <MdLightbulbOutline
                            size={24}
                        />
                    </GroupInfoComponent>
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
                    <GroupInfoComponent
                    title='Some topic'
                    content='Minim occaecat aliquip aute magna do cillum ea ut non. Lorem ullamco esse magna deserunt ut laboris anim irure cillum id et magna. Sint duis minim ex laborum quis pariatur irure id. Nisi sit incididunt cupidatat do consectetur ea occaecat id esse sit qui adipisicing in. Duis in nulla aute non Lorem incididunt sint quis.'
                >
                    <MdLightbulbOutline
                        size={24}
                    />
                </GroupInfoComponent>"
                />
            </ComponentContainer>
        </Container>
    )
}
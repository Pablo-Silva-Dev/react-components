import { DisplayCode } from '../components/Display/DisplayCode';
import { Timeline as TimelineComponent } from '../components/Elements/Timeline'
import { TimelineElement as TimelineElementComponent } from '../components/Elements/Timeline/TimelineElement'
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import { MdCheckCircleOutline, MdAccessTime, MdStar } from 'react-icons/md'
import {
    ComponentContainer,
    Container,
    DescriptionContainer,
    PreviewContainer,
    PropsContainer
} from "../styles";

export default function TimelineElement() {

    const props = {
        title: 'Description: Define the balloon title. Type: String. Required.',
        content: 'Description: Define the balloon content. Type: String. Required.',
        date: 'Description: Define the TimelineElement date. Type: String. Required.',
        icon: 'Description: Render an icon. Type: ReactNode.',
        iconBgColor: 'Description: Sets the Icon background color. Type: String.',
        balloonStyle: 'Description: Balloon style. Type: CSSProperties.'
    }

    return (
        <Container>
            <ComponentContainer>
                <DescriptionContainer>
                    <Title
                        content='TimelineElement'
                    />
                    <Text
                        content='Used to display a chronologic event inside Timeline component.'
                    />
                </DescriptionContainer>
                <PreviewContainer>
                    <TimelineComponent
                        animated
                    >
                        <TimelineElementComponent
                            title='Registration'
                            date='05/01/2022'
                            content='The registration period has ended.'
                            icon={<MdAccessTime />}
                        />
                        <TimelineElementComponent
                            title='Analysis'
                            date='05/28/2022'
                            content='All subscriptions was analyzed.'
                            icon={<MdCheckCircleOutline />}
                        />
                        <TimelineElementComponent
                            title='Results'
                            date='06/01/2022'
                            content='The results are available now.'
                            icon={<MdStar />}
                        />
                    </TimelineComponent>

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
                    <TimelineComponent
                    animated
                     >"
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <TimelineElementComponent
                        title='Registration'
                        date='05/01/2022'
                        content='The registration period has ended.'
                        icon={<MdAccessTime />}
                    />
                        "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    <TimelineElementComponent
                        title='Analysis'
                        date='05/28/2022'
                        content='All subscriptions was analyzed.'
                        icon={<MdCheckCircleOutline />}
                    />"
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                        <TimelineElement
                            title='Results'
                            date='06/01/2022'
                            content='The results are available now.'
                            icon={<MdStar />}
                        />
                    "
                    hideTitle
                />
                <DisplayCode
                    //eslint-disable-next-line
                    children="
                    </TimelineComponent>"
                    hideTitle
                />
            </ComponentContainer>
        </Container>
    )
}
import { MdAirplay } from 'react-icons/md';
import { DisplayCode } from '../components/Display/DisplayCode';
import { TextInput as TextInputComponent } from '../components/Forms/TextInput'
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

export default function TextInput() {

  const props = {
    showsIcon: 'Description: Define if icons will be rendered. Type: Boolean.',
    inputStyle: 'Description: Input style. Type: CSS Properties.',
    inputClassName: 'Description: Input className. Type: String.',
    icon: 'Description: A space to render your own icon. Type: ReactNode.',
  }

  return (
    <Container>
      <ComponentContainer>
        <DescriptionContainer>
          <Title
            content='TextInput'
          />
          <Text
            content='A styled text input ready to be used containing all input attributes. It is responsible and has validations by default.'
          />
        </DescriptionContainer>
        <PreviewContainer>
          <TextInputComponent
            showsIcon
            icon={<MdAirplay />}
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
          children="import { MdAirplay } from 'react-icons/md';"
        />
        <DisplayCode
          //eslint-disable-next-line
          children="
                    <TextInput
                        showsIcon
                        icon={<MdAirplay/>}
                    />"
          hideTitle
        />
      </ComponentContainer>
    </Container>
  )
}

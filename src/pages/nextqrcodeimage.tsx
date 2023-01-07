import { DisplayCode } from '../components/Display/DisplayCode';
import { NextQRCodeImage as NextQRCodeImageComponent } from '../components/Next/NextQRCodeImage';
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

export default function NextQRCodeImage() {

  const props = {
    qrCodeURL: 'QRCode url with the base64 image response.',
  }

  return (
    <Container>
      <ComponentContainer>
        <DescriptionContainer>
          <Title
            content='NextQRCodeImage'
          />
          <Text
            content='Used to render a QRCode based on base64 image.'
          />
        </DescriptionContainer>
        <PreviewContainer>
          <NextQRCodeImageComponent
            qrCodeURL='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'
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
          <NextQRCodeImageComponent
          qrCodeURL='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'
        />"
        />
      </ComponentContainer>
    </Container>
  )
}

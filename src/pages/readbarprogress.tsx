import React from 'react';
import { ReadProgressBar } from '../components/Elements/ReadProgressBar'
import { Title } from '../components/Typography/Title';
import { SubTitle } from '../components/Typography/SubTitle';
import { Text } from '../components/Typography/Text';
import {
  ComponentContainer,
  Container,
  DescriptionContainer,
  PropsContainer
} from "../styles";
import { DisplayCode } from '../components/Display/DisplayCode';

export default function ReadBarProgress() {

  const props = {
    barHeight: 'Description: Profile title. Type: "low" | "medium" | "tall".',
  }

  return (
    <Container
      style={{
        marginBottom: '50vh'
      }}
    >
      <ComponentContainer>
        <DescriptionContainer>
          <Title
            content='ReadBarProgress'
          />
          <Text
            content='This is an indicator for the page scrolling progress.'
          />
        </DescriptionContainer>
        <ReadProgressBar
          barHeight='low'
          color='#36EFAD'
        />
        <PropsContainer>
          <SubTitle
            content='Props:'
            style={{
              fontSize: 20,
              fontWeight: 'bold',
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
            <ReadProgressBar
            barHeight='low'
          />"
        />

      </ComponentContainer>
    </Container>
  )
}

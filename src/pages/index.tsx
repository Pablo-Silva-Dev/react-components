
import { MdAttachMoney } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';

import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { NextLink } from '../components/Next/NextLink';
import { Text } from '../components/Typography/Text';
import { Title } from '../components/Typography/Title';
import {
  Container,
  DonationSection,
  DownloadSection,
  IntroductionSection,
  LicenseSection,
  ReferencesSection,
  HomeContainer
} from '../styles';
import { ReadProgressBar } from '../components/Elements/ReadProgressBar';

export default function Home() {

  function handleOpenExternLink(url): void {
    window.open(url, '__blank')
  }

  return (
    <Container>
      <ReadProgressBar />
      <HomeContainer>
        <IntroductionSection
          id='#introduction'
        >
          <Title
            content='Introduction'
          />
          <Text
            content='This library is a collection of useful library components used by the React developers community and there is own handful of components developed by the library author too. This collection was created to help developers to create web applications faster using React, NextJS and Styled Components in the core. '
          />
          <Text
            content='All components that come from third libraries will be referenced in the References section. This collection uses third components and the credit and rights over these libraries belong to their authors.'
          />
        </IntroductionSection>

        <DownloadSection
          id='#download'
        >
          <Title
            content='Getting Started'
          />
          <Text
            content='I am working to publish this library on Npm, but it is a large library that contains over seventy components, and a lot of them use third libraries, it can take time. You can optionally download or clone a template repository from GitHub.'
          />
          <PrimaryButton
            icon={<AiOutlineGithub
              size={16}
              style={{
                marginRight: 4
              }}
            />}
            title='Access repository'
            onClick={() => handleOpenExternLink('https://github.com/Pablo-Silva-Dev/react-useful-components-collection-template')}
          />
        </DownloadSection>

        <DonationSection
          id='#donation'
        >
          <Title
            content='Donation'
          />
          <Text
            content='I developed by myself over sixty components to help the React community developers. If you think this components are useful for you, consider to make a donation. Your support will help me a lot 😊.'
          />
          <PrimaryButton
            icon={<MdAttachMoney
              size={16}
              style={{
                marginRight: 4
              }}
            />}
            title='Make a donation'
            onClick={() => handleOpenExternLink('https://www.buymeacoffee.com/pablosilvadev')}
          />
        </DonationSection>

        <LicenseSection>
          <Title
            content='License'
          />
          <Text
            content='This project is under MIT license.'
          />
          <NextLink
            title='Click here to check License'
            url='/'
          />
        </LicenseSection>

        <ReferencesSection>
          <Title
            content='References'
          />
          <NextLink
            title='NextJS'
            url='/https://nextjs.org/docs/getting-started'
          />
          <NextLink
            title='rc-checkbox'
            url='https://www.npmjs.com/package/rc-checkbox'
          />
          <NextLink
            title='react-collapsible'
            url='https://www.npmjs.com/package/react-collapsible'
          />
          <NextLink
            title='react-dropdown'
            url='https://www.npmjs.com/package/react-dropdown'
          />
          <NextLink
            title='react-loading'
            url='https://www.npmjs.com/package/react-loading'
          />
          <NextLink
            title='react-lottie'
            url='https://www.npmjs.com/package/react-lottie'
          />
          <NextLink
            title='react-modal'
            url='https://www.npmjs.com/package/react-modal'
          />
          <NextLink
            title='react-responsive-carousel'
            url='https://www.npmjs.com/package/react-responsive-carousel'
          />
          <NextLink
            title='react-reveal'
            url='https://www.npmjs.com/package/react-reveal'
          />
          <NextLink
            title='react-star-ratings'
            url='https://www.npmjs.com/package/react-star-ratings'
          />
          <NextLink
            title='react-switch'
            url='https://www.npmjs.com/package/react-switch'
          />
          <NextLink
            title='react-type-animation'
            url='https://www.npmjs.com/package/react-type-animation'
          />
          <NextLink
            title='react-vertical-timeline-component'
            url='https://www.npmjs.com/package/react-vertical-timeline-component'
          />
          <NextLink
            title='rgt'
            url='https://www.npmjs.com/package/rgt'
          />
        </ReferencesSection>
      </HomeContainer>
    </Container>
  )
}

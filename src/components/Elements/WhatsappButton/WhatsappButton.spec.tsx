import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { WhatsappButton } from './'

interface ChildrenProps {
  children: ReactNode
}

const StyledProvider = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

describe('WhatsappButton', () => {

  it('should render correctly', () => {
    const { container } = render(
      <WhatsappButton
        ariaLabel='Call WhatApp'
        whatsappContact='99999999'
      />, {
      wrapper: StyledProvider
    }
    )

    const component = container.querySelector('[aria-label="Call WhatApp"]')
    expect(component).toBeInTheDocument()

  })

  it('should render light backgroundVariant correctly', () => {
    const { container } = render(
      <WhatsappButton
        ariaLabel='Call WhatApp'
        whatsappContact='99999999'
        backgroundVariant='light'
      />, {
      wrapper: StyledProvider
    }
    )

    const component = container.querySelector('[style="background-color: rgb(37, 211, 102);"]')
    expect(component).toBeInTheDocument()

  })
  it('should render dark backgroundVariant correctly', () => {
    const { container } = render(
      <WhatsappButton
        ariaLabel='Call WhatApp'
        whatsappContact='99999999'
        backgroundVariant='dark'
      />, {
      wrapper: StyledProvider
    }
    )

    const component = container.querySelector('[style="background-color: rgb(7, 94, 84);"]')
    expect(component).toBeInTheDocument()

  })

  it('should call startChat onClick', () => {
    const { container } = render(
      <WhatsappButton
        ariaLabel='Call WhatApp'
        whatsappContact='99999999'
      />, {
      wrapper: StyledProvider
    }
    )

    Window.prototype.open = () => new Window || null
    const component = container.querySelector('[aria-label="Call WhatApp"]')
    expect(fireEvent.click(component!)).toBeTruthy()

  })
})

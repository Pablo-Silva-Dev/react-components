import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { FooterAttach } from '.'


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

describe('FooterAttach', () => {
  it('should render correctly', () => {
    const {debug} = render(
      <FooterAttach>
        <p>FooterTest</p>
      </FooterAttach>, {
      wrapper: StyledProvider
    }
    )

    debug()

    const component = screen.getByText('FooterTest')
    expect(component).toBeInTheDocument()

  })
})

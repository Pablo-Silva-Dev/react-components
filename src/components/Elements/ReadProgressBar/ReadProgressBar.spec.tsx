import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { ReadProgressBar } from './'

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

describe('ReadProgressBar', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ReadProgressBar
      />, {
      wrapper: StyledProvider
    }
    )

    const component = container.querySelector('[class="read-progress-bar"]')
    expect(component).toBeInTheDocument()

  })
})

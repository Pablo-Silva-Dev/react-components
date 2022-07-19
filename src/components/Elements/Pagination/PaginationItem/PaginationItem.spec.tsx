import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../themes/theme'
import { PaginationItem } from './'

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

describe('PaginationItem', () => {
  it('should render correctly', () => {
    render(
      <PaginationItem
        number={2}
        onPageChange={() => { }}
      />, {
      wrapper: StyledProvider
    }
    )

    const component = screen.getByText(/2/i)
    expect(component).toBeInTheDocument()

  })

  it('should have Active className if isCurrent is true', () => {
    const { container } = render(
      <PaginationItem
        number={2}
        onPageChange={() => { }}
        isCurrent
      />, {
      wrapper: StyledProvider
    }
    )

    const component = container.querySelector('[class="styles__ActiveButton-sc-u4r1i5-1 XsSFJ"]')
    const className = component?.getAttribute('class')

    expect(className?.includes('Active')).toBeTruthy()

  })
})

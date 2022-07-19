import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { Pagination } from './'

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

describe('Pagination', () => {
  it('should render correctly', () => {
    render(
      <Pagination
        onPageChange={() => { }}
        totalOfItems={20}
        currentPage={1}
        itemsPerPage={5}
      />, {
      wrapper: StyledProvider
    }
    )
  })

  it('should not have previous page if index is lower or equal to 1', () => {
    const { container } = render(
      <Pagination
        onPageChange={() => { }}
        totalOfItems={20}
        currentPage={1}
        itemsPerPage={5}
      />, {
      wrapper: StyledProvider
    }
    )

    const component = container.childNodes[0]
    expect(component).not.toHaveTextContent('0')
  })

  it('should render pages interval if number of pages currentPage + siblingsCount < lastPage',
    () => {
      render(
        <Pagination
          onPageChange={() => { }}
          totalOfItems={200}
          currentPage={18}
          itemsPerPage={10}
        />, {
        wrapper: StyledProvider
      }
      )

      const component = screen.getByText('...')
      expect(component).toBeInTheDocument()
    })
})

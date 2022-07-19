import { fireEvent, render } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { TopScrollButton } from './'
import { MdArrowUpward } from 'react-icons/md'

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

describe('TopScrollButton', () => {
  it('should render correctly', () => {
    const { container } = render(
      <TopScrollButton
        ariaLabel='Back to top'
        elementReferenceId='top'
        icon={<MdArrowUpward />}
      />, {
      wrapper: StyledProvider
    }
    )

    const component = container.querySelector('[stroke="currentColor"]')
    expect(component).toBeInTheDocument()


  })

  it('should render reference component', () => {
    const { container } = render(

      <>
        <div id='top'></div>
      </>

    )

    const component = container.querySelector('[id="top"]')
    expect(component).toBeInTheDocument()

  })

  it('should call backToTop function onClick', () => {

    const { container } = render(
      <>
        <div id='top'></div>
        <TopScrollButton
          ariaLabel='Back to top'
          elementReferenceId='top'
          icon={<MdArrowUpward />}
        />
      </>
      , {
        wrapper: StyledProvider
      }
    )

    window.HTMLElement.prototype.scrollIntoView = function () { }
    
    const button = container.querySelector('[aria-label="Back to top"]')
    expect(fireEvent.click(button!)).toBeTruthy()

  })
})

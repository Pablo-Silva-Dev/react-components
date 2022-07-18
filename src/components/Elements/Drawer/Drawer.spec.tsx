import { fireEvent, render, screen } from '@testing-library/react'
import { Drawer } from './'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'

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

describe('Drawer', () => {
  it('should render correctly', () => {
    render(
      <Drawer
        direction='top'
        toggleDrawer={() => { }}
      />, {
      wrapper: StyledProvider
    })

    const component = screen.getByRole('menu')
    expect(component).toBeInTheDocument()

  })

  it('should close Drawer', () => {
    render(
      <Drawer
        direction='top'
        toggleDrawer={() => { }}
      />, {
      wrapper: StyledProvider
    })

    const component = screen.getByRole('menu')
    const closeDrawerButton = screen.getByRole('dialog')

    fireEvent.click(closeDrawerButton)
    expect(component).toBeInTheDocument()

  })
})

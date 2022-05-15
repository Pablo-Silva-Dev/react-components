import {render, screen} from '@testing-library/react'
import {RevealFade} from '.'

describe('RevealFade', () => {
    it('should render correctly', () => {
        render(
           <RevealFade
           >
               <p>reveal-fade</p>
           </RevealFade>
        )

        const component = screen.getByText(/reveal-fade/i)
        expect(component).toBeInTheDocument() 
    })
})
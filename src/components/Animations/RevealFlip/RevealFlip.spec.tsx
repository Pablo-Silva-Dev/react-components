import {render, screen} from '@testing-library/react'
import {RevealFlip} from '.'

describe('RevealFlip', () => {
    it('should render correctly', () => {
        render(
           <RevealFlip
           >
               <p>reveal-flip</p>
           </RevealFlip>
        )

        const component = screen.getByText(/reveal-flip/i)
        expect(component).toBeInTheDocument() 
    })
})
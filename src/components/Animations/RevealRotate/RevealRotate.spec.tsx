import {render, screen} from '@testing-library/react'
import {RevealRotate} from '.'

describe('RevealRotate', () => {
    it('should render correctly', () => {
        render(
           <RevealRotate
           >
               <p>reveal-rotate</p>
           </RevealRotate>
        )

        const component = screen.getByText(/reveal-rotate/i)
        expect(component).toBeInTheDocument() 
    })
})
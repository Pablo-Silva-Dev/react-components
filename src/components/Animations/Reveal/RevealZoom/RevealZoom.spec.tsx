import {render, screen} from '@testing-library/react'
import {RevealZoom} from '.'

describe('RevealZoom', () => {
    it('should render correctly', () => {
        render(
           <RevealZoom
           >
               <p>reveal-zoom</p>
           </RevealZoom>
        )

        const component = screen.getByText(/reveal-zoom/i)
        expect(component).toBeInTheDocument() 
    })
})
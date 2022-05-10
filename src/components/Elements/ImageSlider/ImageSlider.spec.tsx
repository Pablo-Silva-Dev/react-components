import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'
import { ImageSlider } from './'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

interface ChildrenProps {
    children: ReactNode
}

const StyledProvider: React.FC = ({ children }: ChildrenProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('ImageSlider', () => {
    it('should render correctly', () => {
        render(
            <ImageSlider
                firstImgUrl='/1.png'
                imgAlt='image-slider-alt'
                imgHeight={300}
                imgWidth={300}
                secondImgUrl='/2.png'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('Previous')
        expect(component).toBeInTheDocument()
    })

    it('should render with all props correctly', () => {
        render(
            <ImageSlider
                imgAlt='image-slider-alt'
                imgHeight={300}
                imgWidth={300}
                firstImgUrl='/1.png'
                secondImgUrl='/2.png'
                thirdImgUrl='/3.png'
                fourthImgUrl='/4.png'
                fivethImgUrl='/5.png'
                sixthImgUrl='/6.png'
            />, {
            wrapper: StyledProvider
        }
        )

        const component = screen.getByText('Next')
        expect(component).toBeInTheDocument()
    })
})

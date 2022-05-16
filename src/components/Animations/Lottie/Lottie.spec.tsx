
import { render, screen } from '@testing-library/react'
import { LottieAnimation } from '.'
import CodingAnimation from '../../../../public/coding_animation.json'

describe('LottieAnimation', () => {
    it('should render correctly', () => {
        render(
            <LottieAnimation
                animation={CodingAnimation}
                height={200}
                width={200}
            />
        )
        const component = screen.getByLabelText('animation')
        expect(component).toHaveAttribute('aria-label', 'animation')
    })
})

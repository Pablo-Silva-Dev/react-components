import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { SubTitle } from '.'

describe('SubTitle', () => {
    it('should render correctly', () => {
        render(<SubTitle content='Some content' />
        )

        expect(screen.getByText('Some content')).toBeInTheDocument();

    })
})
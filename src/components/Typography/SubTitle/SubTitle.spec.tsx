import React from 'react'
import { render, screen } from '@testing-library/react'
import { SubTitle } from '.'

describe('SubTitle', () => {
    it('should render correctly', () => {
        render(<SubTitle content='Some contjent' />
        )

        expect(screen.getByText('Some content')).toBeInTheDocument();

    })
})
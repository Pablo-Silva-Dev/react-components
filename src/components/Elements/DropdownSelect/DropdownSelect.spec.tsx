import { render, screen } from '@testing-library/react'
import { DropdownSelect } from './'

const list = ['foo', 'bar']

describe('DropdownSelect', () => {
    it('should render correctly', () => {
        render(
            <DropdownSelect
                options={list}
            />,
        )

        const component = screen.getByText('Select...')
        expect(component).toHaveAttribute('class', 'Dropdown-placeholder')

    })
})
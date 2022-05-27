/* import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NextLink as NextLinkComponent } from './NextLink'
import { NextHead as NextHeadComponent } from './NextHead'
import { NextProgressComponent as NextProgressStory } from './NextProgress'
import { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return (
        <>
            {children}
        </>
    )
}



export const NextLink: ComponentStory<typeof NextLinkComponent> = () => {
    return (
        <NextLink
            title='Link strings comes here'
            url='/'
        />
    )
}

export const NextHead: ComponentStory<typeof NextHeadComponent> = () => {
    return (
        <NextHead
            title='Document title cames here'
        />
    )
}

export const NextProgressComponent: ComponentStory<typeof NextProgressStory> = () => {
    return (
        <NextProgressComponent
        />
    )
}


NextLink.argTypes = {
    title: {
        name: 'title',
        description: 'Text link to be displayed',
        type: { name: 'string', required: true },
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '' },
        },
    },
    url: {
        name: 'url',
        description: 'URL to redirect on click event.',
        type: { name: 'string', required: true },
        table: {
            type: { summary: 'string' },
        },
    },
    style: {
        name: 'style',
        description: 'CSS Styles',
        table: {
            type: { summary: 'CSS Properties' },
        }

    },
}

NextHead.argTypes = {
    title: {
        name: 'title',
        description: 'Text do display on Document title',
        type: { name: 'string', required: true },
        table: {
            type: { summary: 'string' },
        }
    }
}


export default {
    title: 'Next',
    component: Container
} as ComponentMeta<typeof Container>
 */
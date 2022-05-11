import { CSSProperties } from 'react';
import { GradientText as GradientTextComponent } from './styles'

interface GradientTextProps {
    content: string;
    primaryColor: string;
    secondaryColor: string;
    direction: 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';
    textType: 'title' | 'subtitle' | 'text'
    style?: CSSProperties;
}

export function GradientText({
    content,
    direction,
    primaryColor,
    secondaryColor,
    textType,
    style
}: GradientTextProps) {
    if (textType === 'title') {
        return (
            <h1
                style={style}
            >
                <GradientTextComponent
                    dir={direction}
                    from={primaryColor}
                    to={secondaryColor}
                    textType={textType}

                >
                    {content}
                </GradientTextComponent >
            </h1>
        )
    }
    if (textType === 'subtitle') {
        return (
            <h3
                style={style}
            >
                <GradientTextComponent
                    dir={direction}
                    from={primaryColor}
                    to={secondaryColor}
                    textType={textType}
                >
                    {content}
                </GradientTextComponent >
            </h3>
        )
    }
    if (textType === 'text') {
        return (
            <span
                style={style}
            >
                <GradientTextComponent
                    dir={direction}
                    from={primaryColor}
                    to={secondaryColor}
                    textType={textType}
                >
                    {content}
                </GradientTextComponent >
            </span>
        )
    }
}
import {
    VerticalTimelineElement,
    VerticalTimelineElementProps,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'styled-components';

interface TimelineProps extends VerticalTimelineElementProps {
    title: string;
    subtitle?: string;
    content: string;
    date?: string;
    iconBgColor?: string;
    lastElement?: boolean;
    lineColor?: string;
    animated?: boolean;
}

export function TimelineElement({
    date,
    title,
    subtitle,
    content,
    contentStyle,
    iconBgColor,
    icon,
    contentArrowStyle,
    lastElement
}: TimelineProps) {

    const theme = useTheme()

    return (
        <>
            {lastElement ?
                <VerticalTimelineElement
                    iconStyle={{
                        background: iconBgColor || theme.colors.primary
                    }}
                    icon={icon}
                />
                :
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyle}
                    contentArrowStyle={contentArrowStyle}
                    date={date}
                    iconStyle={{
                        background: iconBgColor || theme.colors.primary
                    }}
                    icon={icon}
                >
                    <h3

                        className="vertical-timeline-element-title"
                    >
                        {title}
                    </h3>
                    <h4
                        className="vertical-timeline-element-subtitle"
                    >
                        {subtitle}
                    </h4>
                    <p>
                        {content}
                    </p>
                </VerticalTimelineElement>
            }
        </>
    )
}
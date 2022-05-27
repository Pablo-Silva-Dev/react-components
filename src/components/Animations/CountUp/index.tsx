import { CSSProperties, ReactNode } from 'react';
import CountUp from 'react-countup'

interface CountUpProps {
    start: number;
    end: number;
    duration?: 1 | 2 | 3 | 4 | 5;
    separator?: string;
    decimals?: number;
    decimal?: ',' | '.'
    prefix?: string;
    suffix?: string;
    onStart?: () => void
    onEnd?: () => void
    style?: CSSProperties;
    className?: string;
}

export function CountUpAnimation({
    start,
    end,
    duration,
    decimals,
    decimal,
    prefix,
    suffix,
    onStart,
    onEnd,
    style,
    className
}: CountUpProps) {
    return (
        <CountUp
            start={start}
            end={end}
            duration={duration}
            decimals={decimals}
            decimal={decimal}
            prefix={typeof (prefix) !== 'undefined' ? prefix : ''}
            suffix={typeof (suffix) !== 'undefined' ? suffix : ''}
            onEnd={onEnd}
            onStart={onStart}
            data-testid='countup-id'
            className={className}
        >
            {({ countUpRef }) => (
                <>
                    <span style={style} ref={countUpRef} />
                </>
            )}
        </CountUp>
    )
}
import React from 'react';
import { Container } from './styles';
import { motion, useScroll } from 'framer-motion'

interface ReadPorgressBarProps {
    barHeight?: 'low' | 'medium' | 'tall',
    color?: string;
}

export function ReadProgressBar({ barHeight, color }: ReadPorgressBarProps) {

    const { scrollYProgress } = useScroll()

    return (
        <Container barHeight={barHeight} color={color}>
            <motion.div className='read-progress-bar' style={{ scaleX: scrollYProgress }}>
            </motion.div>
        </Container>
    )
}

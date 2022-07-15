import React from 'react';
import { Container } from './styles';
import { motion, useScroll } from 'framer-motion'

interface ReadPorgressBarProps {
    barHeight?: 'low' | 'medium' | 'tall'
}

export function ReadProgressBar({ barHeight }: ReadPorgressBarProps) {

    const { scrollYProgress } = useScroll()

    return (
        <Container barHeight={barHeight}>
            <motion.div className='read-progress-bar' style={{ scaleX: scrollYProgress }}>
            </motion.div>
        </Container>
    )
}
import { Box } from '@mantine/core'
import React from 'react'
import Navbar from './navbar'

type Props = {
    children: any
}

export default function Layout({ children }: Props) {
    return (
        <Box>
            <Navbar />
            {children}
        </Box>
    )
}
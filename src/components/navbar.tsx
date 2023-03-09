import { Box, createStyles, Title } from '@mantine/core'
import React from 'react'



const useStyles = createStyles((theme) => ({
    Navbar: {
        display: 'flex',
        alignItems: 'center',
        height: 66,
        paddingInline: 40,
        backgroundColor: '#ffffff',
        boxShadow: `0 1px 3px 0 ${theme.colors.gray[4]}`,
        
        [theme.fn.smallerThan('sm')]:{
            height: 60,
        }
    }
}))

type Props = {}

export default function Navbar({ }: Props) {
    const { classes } = useStyles()
    return (
        <Box className={classes.Navbar}>

            <Title order={3}>Pinstree</Title>
        </Box>
    )
}
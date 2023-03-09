import { Box, createStyles, Text } from '@mantine/core'
import React from 'react'
import { Pin } from '../../../reusable/interfaces'
import RenderPins from '../../components/render-pins'

const useStyles = createStyles((theme) => ({
    Container: {

    },
    PinImage: {
        height: 400,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: theme.colors.gray[5],
    },
    RelatedPinsContainer: {

    },
    RelatedPinsHead: {
        margin: '10px 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderRadius: 20,
        backgroundColor: '#fff'
    },
    RelatedPinText: {
        fontSize: 18,
        fontWeight: 500
    }
}))

type Props = {}

const pinsList: Pin[] = [
    { name: 'pin one', image: 'https://res.cloudinary.com/alexandriah65/image/upload/c_thumb,h_386,w_686/f_webp/v1/images/baew1an8rydsevv47bf2' },
    { name: 'pin one', image: "https://res.cloudinary.com/alexandriah65/image/upload/c_thumb,h_386,w_686/f_webp/v1/images/wfljegjqsmjlnjgqjije" },
    { name: 'pin one', image: "https://res.cloudinary.com/alexandriah65/image/upload/c_thumb,h_386,w_686/f_webp/v1/images/arcq31g7e7bugll8aeu1" },
    { name: 'pin one', image: "https://res.cloudinary.com/alexandriah65/image/upload/c_thumb,h_386,w_686/f_webp/v1/images/fshlbfxsdwfwpy4fru9e" },
    { name: 'pin one', image: "https://res.cloudinary.com/alexandriah65/image/upload/c_thumb,h_386,w_686/f_webp/v1/images/bzdj2vamncfuoujzlhdi" },
    { name: 'pin one', image: "https://res.cloudinary.com/alexandriah65/image/upload/c_thumb,h_386,w_686/f_webp/v1/images/pqzcpnwckt7htq1eoo73" },
    { name: 'pin one', image: "https://res.cloudinary.com/alexandriah65/image/upload/c_thumb,h_386,w_686/f_webp/v1/images/uqqqkopg4clwevpwsuzu" },
]

export default function PinDetail({ }: Props) {
    const { classes } = useStyles()
    return (
        <Box className={classes.Container}>
            <Box className={classes.PinImage}>

            </Box>
            <Box className={classes.RelatedPinsContainer}>
                <Box className={classes.RelatedPinsHead}>
                    <Text className={classes.RelatedPinText}>More tree of pins like this</Text>
                </Box>
                <RenderPins pins={pinsList} />
            </Box>
        </Box>
    )
}
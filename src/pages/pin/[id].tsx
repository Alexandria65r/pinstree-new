import { Box, Button, createStyles, Group, Text } from '@mantine/core'
import React from 'react'
import { MdAdd } from 'react-icons/md'
import { HiDownload } from 'react-icons/hi'
import { FcDownload } from 'react-icons/fc'
import { Pin } from '../../../reusable/interfaces'
import RenderPins from '../../components/render-pins'
import { Image, Transformation } from 'cloudinary-react'

const useStyles = createStyles((theme) => ({
    Container: {

    },
    PinImage: {
        width: '100%',
        minHeight: 200,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: theme.colors.gray[5],
    },
    Image: {
        width: '100%',
       // height: '100%', 
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    RelatedPinsContainer: {
        //display: 'flex',
    },
    RelatedPinsHead: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderRadius: 20,
        backgroundColor: '#fff'
    },
    RelatedPinText: {
        fontSize: 16,
        fontWeight: 500
    },
    AddPinButton: {
        fontSize: 16,
        fontWeight: 600,
        padding: '0 10px',
        width: 58,
        height: 58,
        borderRadius: 20,
        transition: '0.3s all'
    },
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
                <Image cloudName="alexandria65" className={classes.Image} publicId={pinsList[0].image}>
                    <Transformation width="686" height="386" crop="thumb" />
                </Image>
            </Box>
            <Box className={classes.RelatedPinsContainer}>
                <Group spacing={5} sx={{ margin: '10px 8px', }}>
                    <Button variant='gradient' className={classes.AddPinButton}>
                        <MdAdd size={23} />
                    </Button>
                    <Button variant='default' className={classes.AddPinButton}>
                        <FcDownload size={23} />
                    </Button>
                    <Box className={classes.RelatedPinsHead}>
                        <Text className={classes.RelatedPinText}>More tree of pins like this</Text>
                    </Box>
                </Group>
                <RenderPins pins={pinsList} />
            </Box>
        </Box>
    )
}